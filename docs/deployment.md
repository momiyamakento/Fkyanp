# GitHub Pages 公開手順

このサイトは静的サイトなので、GitHub Pages でそのまま公開できます。

## 初回設定

1. GitHub のリポジトリ `momiyamakento/Fkyanp` を開く。
2. `Settings` > `Pages` を開く。
3. `Build and deployment` の `Source` で `GitHub Actions` を選ぶ。
4. ローカルで変更をコミットして `main` に push する。
5. `Actions` タブで `Deploy static site to GitHub Pages` が成功するまで待つ。

## 公開 URL

通常は次の URL で公開されます。

```text
https://momiyamakento.github.io/Fkyanp/
```

反映には数分かかることがあります。

## 更新方法

`index.html`、`styles.css`、`app-story.js`、`assets/` を更新して `main` に push すると、自動で再公開されます。

## 公開対象

GitHub Actions では次のファイルだけを公開用アーティファクトに含めています。

- `index.html`
- `styles.css`
- `app-story.js`
- `assets/`

`docs/` は設計資料としてリポジトリには残しますが、公開サイトの成果物には含めません。
