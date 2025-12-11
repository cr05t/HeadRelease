
# これを作りたい

このリポジトリは「これを作りたい」のコード一式です。元のプロジェクトは https://www.figma.com/design/TwVub8ksGIPLspPPk0y2xd/%E3%81%93%E3%82%8C%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%9F%E3%81%84 にあります。

## セットアップと起動

1. 依存関係をインストール  
   `npm i`
2. 開発サーバーを起動  
   `npm run dev`

## 開発サーバーをLAN内で共有する手順

1. Windowsのターミナル（cmd.exe）で次を実行します:
   ```
   cmd /c "cd /d C:\Users\kaito\LPデザイン\LPデザイン2\Access Project Link2 && npm.cmd run dev -- --host --port 5173"
   ```
2. Vite起動後、コンソールに表示されるLAN用URL（例: `http://192.168.x.x:5173`）を確認します。
3. Windowsファイアウォールでポート5173の受信を許可します（プライベートネットワークのみでOKな場合が多いです）。
4. 同じWi‑Fi/LAN上の相手にそのURLを共有し、ブラウザで開いてもらいます。
  