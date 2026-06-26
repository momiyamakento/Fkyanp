# イベント運用版システム構成案

この資料は、今後追加予定の以下の機能を安全に運用するための構成メモです。

- 個人情報を送信・保存するフォーム
- 参加者ごとの進行状況保存
- ログイン機能
- 管理画面
- 企業別の興味データ集計
- CSV出力

## 結論

現在の静的サイトは、公開ページとしては GitHub Pages のままで問題ありません。

ただし、個人情報・ログイン・管理画面を扱う部分は GitHub Pages だけでは完結させず、Firebase などのバックエンドを使います。

```txt
GitHub
  -> コード管理

GitHub Pages
  -> 一般参加者向けサイトの表示

Firebase Authentication
  -> 管理者ログイン、必要に応じて参加者ログイン

Cloud Firestore
  -> 参加者情報、進行状況、興味データの保存

Firebase Security Rules
  -> 誰がどのデータを読めるか、書けるかを制御

Cloud Functions
  -> CSV出力、管理者判定、集計処理などの安全なサーバー側処理
```

## 現在の構成

現在のサイトは静的サイトです。

```txt
index.html
styles.css
app-story.js
assets/
```

現在できること:

- 画面表示
- 謎解きの回答判定
- ヒント表示
- 企業紹介
- localStorage による同じ端末内の進行状況保存

現在できない、またはやらないほうがよいこと:

- 個人情報の安全な保存
- 複数端末をまたぐ参加者管理
- 管理者だけが見られる画面
- 回答や管理データを完全に隠すこと
- 運営側のCSV出力や集計

## 推奨構成

### フロントエンド

役割:

- 参加者が見るWebサイト
- 受付フォーム
- ミッション画面
- 企業紹介
- クリア画面
- 管理画面のUI

当面は現在の `index.html`、`styles.css`、`app-story.js` を活かします。

将来的に画面数や状態管理が増える場合は、React / Next.js への移行を検討します。

### ホスティング

候補:

- GitHub Pages
- Firebase Hosting

当面は GitHub Pages のままで問題ありません。

Firebase を本格導入する段階で、サイト表示も Firebase Hosting に寄せると、認証・データベース・Functions との管理がまとまります。

### 認証

Firebase Authentication を使います。

想定:

- 参加者はログインなし、または受付番号で簡易識別
- 管理者はメールアドレスとパスワードでログイン
- 管理者権限は Firebase の custom claims または Firestore の管理者リストで判定

イベント会場で参加者にログインを求めすぎると体験が重くなるため、参加者側はできるだけ簡単にします。

### データベース

Cloud Firestore を使います。

保存する主なデータ:

- 参加者情報
- 受付番号
- 学校名、学年など
- 興味のある分野
- クリアしたミッション
- 気になる企業
- 後日連絡希望
- 管理者メモ

個人情報は必要最小限にします。

### 管理画面

管理者画面は、一般参加者向けサイトとは別の画面として作ります。

例:

```txt
/admin
```

管理画面でできること:

- 参加者一覧を見る
- 企業別の興味あり人数を見る
- 参加者ごとのクリア状況を見る
- 後日連絡希望者を見る
- CSVを出力する
- イベント終了後のデータ削除状況を確認する

管理画面は必ずログイン必須にします。

### サーバー側処理

Cloud Functions を使います。

Cloud Functions に寄せる処理:

- CSV出力
- 管理者権限の確認
- 公開してはいけない集計処理
- メール通知
- 不正な書き込みの防止

ブラウザ側のJavaScriptだけで管理者判定やCSV出力を完結させないようにします。

## データ設計案

### participants

参加者情報。

```txt
id
受付番号
名前
学校名
学年
メールアドレス
興味分野
作成日時
更新日時
```

### progress

ミッション進行状況。

```txt
id
participant_id
mission_id
status
cleared_at
```

### interests

企業への興味データ。

```txt
id
participant_id
company_id
interest_level
contact_request
comment
created_at
```

### admins

管理者情報。

```txt
uid
email
role
created_at
```

### companies

企業情報。

```txt
id
企業名
業種
紹介文
公式サイトURL
ブース位置
```

## セキュリティ方針

### 参加者側

- 自分の受付情報だけ作成できる
- 自分の進行状況だけ更新できる
- 他人の個人情報は読めない
- 管理用データは読めない

### 管理者側

- ログイン必須
- 管理者権限があるユーザーだけ管理画面を表示
- 参加者一覧、興味データ、CSV出力は管理者だけ許可

### データ保護

- 必要以上の個人情報を集めない
- メールアドレスが不要なら集めない
- イベント終了後の削除日を決める
- プライバシーポリシーまたは利用目的をサイト上に表示する
- GitHub に APIキーや秘密鍵を直接書かない

Firebase の公開設定用キーはブラウザに入りますが、秘密鍵ではありません。
実際の保護は Security Rules と Cloud Functions で行います。

## 公開と更新の流れ

現在の GitHub Pages 構成では、`main` に push すると外部公開サイトが更新されます。

```txt
ローカルで編集
  -> git commit
  -> git push origin main
  -> GitHub Actions
  -> GitHub Pages に反映
  -> 外部から見える内容が変わる
```

イベント本番が近い時は、`main` への直接 push は慎重に行います。

おすすめ運用:

```txt
main
  -> 本番公開用

develop
  -> 作業・確認用

feature/*
  -> 機能追加用
```

小さく運用する場合でも、本番前は以下を守ります。

- 編集後にローカルで表示確認する
- push 前に差分を見る
- 本番中に大きな変更を入れない
- 必要なら前の状態に戻せるようにする

## 段階的な進め方

### 第1段階: 現在の公開サイト

目的:

- イベント参加者が謎解きサイトを見られる
- QRコードでアクセスできる
- 企業紹介とゲーム体験を提供する

構成:

- GitHub Pages
- 静的HTML/CSS/JavaScript
- localStorage

### 第2段階: フォームだけ追加

目的:

- 参加者の興味企業やアンケートを集める

構成:

- GitHub Pages
- Googleフォーム、または Firebase Firestore

個人情報を含む場合は、利用目的の表示を先に用意します。

### 第3段階: イベント運用版

目的:

- 参加者情報を保存する
- 進行状況を端末以外にも保存する
- 管理者が集計を見られる

構成:

- GitHub Pages または Firebase Hosting
- Firebase Authentication
- Cloud Firestore
- Firebase Security Rules
- Cloud Functions

### 第4段階: 本格運用版

目的:

- 複数イベントで使い回す
- 企業担当者用画面を作る
- データ分析やメール通知も行う

構成:

- Firebase Hosting または Next.js
- Firebase / Supabase
- 管理画面
- 権限管理
- CSV出力
- データ削除・保管ルール

## GitHub Pagesを続けてよい範囲

続けてよい:

- 一般公開ページ
- 謎解き画面
- 企業紹介
- 画像やCSSの配信
- 個人情報を扱わない静的コンテンツ

避ける:

- 個人情報をJavaScriptだけで保存する
- 管理者画面をJavaScriptだけで隠す
- 秘密情報をリポジトリに書く
- 回答や集計ロジックを完全に隠したい処理をフロントだけに置く

## 今後の実装順

1. 収集する個人情報を決める
2. 利用目的と削除期限を決める
3. プライバシーポリシーまたは利用目的表示ページを作る
4. Firebase プロジェクトを作る
5. Authentication を設定する
6. Firestore のデータ設計を作る
7. Security Rules を作る
8. 受付フォームを Firestore に保存する
9. 管理者ログインを作る
10. 管理画面を作る
11. CSV出力を Cloud Functions で作る
12. 本番前にテストデータで動作確認する

## 判断メモ

GitHubをやめる必要はありません。

GitHubはコード管理と自動公開に使い続けます。
ただし、個人情報や管理画面は GitHub Pages だけで扱わず、Firebase などのバックエンドで守る構成にします。
