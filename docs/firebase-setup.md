# Firebase導入手順

このサイトは、Firebase Authentication（メールアドレス・パスワード）とCloud Firestoreに参加者情報を保存します。パスワードはFirestoreに保存しません。

1. [Firebase コンソール](https://console.firebase.google.com/)でプロジェクトを作成し、ウェブアプリを追加する。
2. Authenticationの「Sign-in method」で **メール/パスワード** を有効化する。パスワードポリシーとメールアドレス列挙保護も有効にする。
3. Firestore Databaseを本番モードで作成し、`firestore.rules` の内容を「ルール」タブへ貼り付けて公開する。
4. プロジェクト設定にあるウェブアプリの設定値を `firebase-config.js` へ入力する。
5. Authenticationの「ユーザー」で運営アカウントを作成する。管理者の付与は、Firebase Admin SDKを使える安全なサーバー環境で対象UIDに `{ admin: true }` のカスタムクレームを設定する。ブラウザやFirestoreの参加者ドキュメントから管理者を指定してはいけません。
6. GitHub Pagesで公開する場合、Authenticationの「Settings > Authorized domains」に公開ドメインを追加する。

## 保存データと運用

Firestoreの `participants/{uid}` に、氏名またはニックネーム、メールアドレス、学年、興味分野、同意情報、作成・更新日時、謎解きの進行状況を保存します。利用目的、保存期間（現在はイベント終了後6か月の例）、運営窓口は実際の運用内容に合わせて画面の文言を更新してください。

管理者一覧は `#admin` です。Firestoreルールとカスタムクレームの両方で保護されるため、画面を直接開いても一般参加者は一覧を読めません。
