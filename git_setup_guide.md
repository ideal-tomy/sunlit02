# Git連携の確実な手順書

## 事前準備
1. プロジェクトフォルダは必ず英語名で作成
   - 良い例：`project_name`
   - 悪い例：`プロジェクト名`

## 新規プロジェクトの場合

### 1. フォルダ作成とファイルコピー
```powershell
# 新しいフォルダを作成
cd C:\Users\ryoji
mkdir project_name

# 必要なファイルをコピー
Copy-Item -Path "元のパス\src" -Destination "C:\Users\ryoji\project_name" -Recurse
Copy-Item -Path "元のパス\public" -Destination "C:\Users\ryoji\project_name" -Recurse
Copy-Item -Path "元のパス\package*" -Destination "C:\Users\ryoji\project_name"
Copy-Item -Path "元のパス\tsconfig.json" -Destination "C:\Users\ryoji\project_name"
Copy-Item -Path "元のパス\.env" -Destination "C:\Users\ryoji\project_name"
Copy-Item -Path "元のパス\.eslintrc.json" -Destination "C:\Users\ryoji\project_name"


# プロジェクトフォルダに移動
cd C:\Users\ryoji\project_name

# Gitを初期化
git init

# ファイルを追加
git add .

# 初期コミット
git commit -m "Initial commit"

# mainブランチに名前を変更
git branch -M main


git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
git push -u origin main


# 既存のGit設定を削除
Remove-Item -Force -Recurse -Path .git

# 最初からやり直す
git init