https://rdlp.jp/archives/otherdesign/lp/226120

# 頭痛情報ランディングページ

頭痛情報ランディングページのコードバンドルです。元デザイン: https://www.figma.com/design/TynNkLcpnMQCursz4xaKz2/Headache-Information-Landing-Page

## セットアップ

1. 依存関係をインストール: `npm install`
2. 開発サーバー起動: `npm run dev`

## 閲覧方法

1. サーバーを LAN 公開で起動  
   `npm run dev -- --host --port 5173`
2. コンソールに出る Network アドレス（例: `http://192.168.x.x:5173/`）を同じ LAN 内の相手に共有
3. OS のファイアウォールでポート 5173 の受信を許可（Windows の場合は初回の許可ダイアログ、または受信規則を追加）
4. 共有相手はその URL をブラウザで開くだけで閲覧できます
  