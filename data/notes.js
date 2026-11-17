// data/notes.js
// 📌 這是唯一需要修改的檔案（新增筆記時）
// 格式規範詳見 AGENTS.md 第 4 節

window.NOTES = [
  // ==================== Git ====================
  {
    id: "git_init_clone",
    title: "初始化與複製倉庫",
    category: "Git",
    tags: ["init", "clone", "remote"],
    description: "建立新的 Git 倉庫，或從遠端複製一個現有倉庫。",
    commands: [
      { label: "初始化新倉庫", code: "git init" },
      { label: "複製遠端倉庫", code: "git clone https://github.com/user/repo.git" },
      { label: "複製並指定本地資料夾名稱", code: "git clone https://github.com/user/repo.git my-folder" }
    ],
    difficulty: "beginner"
  },
  {
    id: "git_basic_workflow",
    title: "基本提交流程",
    category: "Git",
    tags: ["add", "commit", "status"],
    description: "每天最常用的 Git 操作：查看狀態、暫存、提交。",
    commands: [
      { label: "查看目前狀態", code: "git status" },
      { label: "暫存所有變更", code: "git add ." },
      { label: "暫存特定檔案", code: "git add filename.txt" },
      { label: "提交並附上訊息", code: "git commit -m \"feat: 新增功能描述\"" }
    ],
    difficulty: "beginner"
  },
  {
    id: "git_branch",
    title: "分支管理",
    category: "Git",
    tags: ["branch", "checkout", "merge"],
    description: "建立、切換、合併分支，是多人協作的核心操作。",
    commands: [
      { label: "列出所有本地分支", code: "git branch" },
      { label: "建立新分支", code: "git branch feature/my-feature" },
      { label: "切換分支", code: "git checkout feature/my-feature" },
      { label: "建立並立即切換（新語法）", code: "git switch -c feature/my-feature" },
      { label: "合併分支到目前分支", code: "git merge feature/my-feature" },
      { label: "刪除已合併的分支", code: "git branch -d feature/my-feature" }
    ],
    difficulty: "intermediate"
  },
  {
    id: "git_remote",
    title: "遠端操作 Push / Pull",
    category: "Git",
    tags: ["push", "pull", "fetch", "remote"],
    description: "與 GitHub / GitLab 等遠端倉庫同步的常用指令。",
    commands: [
      { label: "推送到遠端（首次加 -u）", code: "git push -u origin main" },
      { label: "推送目前分支", code: "git push" },
      { label: "拉取並合併最新遠端變更", code: "git pull" },
      { label: "只下載不合併（fetch）", code: "git fetch origin" },
      { label: "查看遠端設定", code: "git remote -v" }
    ],
    difficulty: "beginner"
  },
  {
    id: "git_log",
    title: "查看歷史紀錄",
    category: "Git",
    tags: ["log", "diff", "history"],
    description: "查看提交歷史、變更差異，幫助理解版本演進。",
    commands: [
      { label: "查看提交歷史（簡潔）", code: "git log --oneline" },
      { label: "圖形化顯示分支歷史", code: "git log --oneline --graph --all" },
      { label: "查看工作區與暫存區差異", code: "git diff" },
      { label: "查看已暫存的差異", code: "git diff --staged" }
    ],
    difficulty: "intermediate"
  },

  // ==================== Linux ====================
  {
    id: "linux_navigation",
    title: "目錄導航",
    category: "Linux",
    tags: ["cd", "ls", "pwd"],
    description: "在終端機中移動、查看目前位置與目錄內容。",
    commands: [
      { label: "顯示目前路徑", code: "pwd" },
      { label: "列出目錄內容（詳細）", code: "ls -la" },
      { label: "切換到家目錄", code: "cd ~" },
      { label: "切換到上一層", code: "cd .." },
      { label: "切換到指定路徑", code: "cd /var/log" }
    ],
    difficulty: "beginner"
  },
  {
    id: "linux_file_ops",
    title: "檔案操作",
    category: "Linux",
    tags: ["cp", "mv", "rm", "mkdir"],
    description: "複製、移動、刪除、建立檔案與目錄。",
    commands: [
      { label: "建立資料夾（含子目錄）", code: "mkdir -p parent/child/grandchild" },
      { label: "複製檔案", code: "cp source.txt destination.txt" },
      { label: "複製整個資料夾", code: "cp -r src/ dest/" },
      { label: "移動 / 重新命名", code: "mv old-name.txt new-name.txt" },
      { label: "刪除檔案", code: "rm filename.txt" },
      { label: "刪除資料夾（強制遞迴）", code: "rm -rf folder/" }
    ],
    difficulty: "beginner"
  },
  {
    id: "linux_grep_find",
    title: "搜尋檔案與內容",
    category: "Linux",
    tags: ["grep", "find", "search"],
    description: "在檔案系統中搜尋檔案，或在檔案內容中搜尋關鍵字。",
    commands: [
      { label: "在檔案內容中搜尋", code: "grep -r \"keyword\" ./folder" },
      { label: "搜尋（忽略大小寫）", code: "grep -ri \"keyword\" ." },
      { label: "按名稱搜尋檔案", code: "find . -name \"*.js\"" },
      { label: "搜尋近 7 天修改的檔案", code: "find . -mtime -7" }
    ],
    difficulty: "intermediate"
  },
  {
    id: "linux_permissions",
    title: "權限管理",
    category: "Linux",
    tags: ["chmod", "chown", "permissions"],
    description: "修改檔案權限與擁有者，是伺服器部署的必備技能。",
    commands: [
      { label: "給予可執行權限", code: "chmod +x script.sh" },
      { label: "設定 755 權限（rwxr-xr-x）", code: "chmod 755 filename" },
      { label: "遞迴修改資料夾權限", code: "chmod -R 755 folder/" },
      { label: "修改擁有者", code: "chown user:group filename" }
    ],
    difficulty: "intermediate"
  },

  // ==================== Docker ====================
  {
    id: "docker_basic",
    title: "Docker 基本操作",
    category: "Docker",
    tags: ["run", "ps", "stop", "rm"],
    description: "啟動容器、查看狀態、停止與刪除容器。",
    commands: [
      { label: "執行容器（互動模式）", code: "docker run -it ubuntu bash" },
      { label: "背景執行容器", code: "docker run -d -p 8080:80 nginx" },
      { label: "查看執行中的容器", code: "docker ps" },
      { label: "查看所有容器（含已停止）", code: "docker ps -a" },
      { label: "停止容器", code: "docker stop container_id" },
      { label: "刪除容器", code: "docker rm container_id" }
    ],
    difficulty: "beginner"
  },
  {
    id: "docker_image",
    title: "映像檔管理",
    category: "Docker",
    tags: ["image", "pull", "build", "push"],
    description: "拉取、建置、標記與推送 Docker 映像檔。",
    commands: [
      { label: "從 Docker Hub 拉取映像", code: "docker pull node:18" },
      { label: "列出本機映像", code: "docker images" },
      { label: "依 Dockerfile 建置映像", code: "docker build -t my-app:1.0 ." },
      { label: "標記映像", code: "docker tag my-app:1.0 username/my-app:1.0" },
      { label: "刪除映像", code: "docker rmi image_id" }
    ],
    difficulty: "intermediate"
  },
  {
    id: "docker_compose",
    title: "Docker Compose",
    category: "Docker",
    tags: ["compose", "up", "down"],
    description: "使用 Compose 管理多容器服務，適合本地開發環境。",
    commands: [
      { label: "啟動所有服務（背景）", code: "docker compose up -d" },
      { label: "停止並移除容器", code: "docker compose down" },
      { label: "查看服務日誌", code: "docker compose logs -f" },
      { label: "重新建置並啟動", code: "docker compose up -d --build" }
    ],
    difficulty: "intermediate"
  },

  // ==================== Frontend ====================
  {
    id: "frontend_npm",
    title: "npm 套件管理",
    category: "Frontend",
    tags: ["npm", "install", "package"],
    description: "Node.js 專案中最常用的 npm 指令。",
    commands: [
      { label: "初始化專案", code: "npm init -y" },
      { label: "安裝所有依賴", code: "npm install" },
      { label: "安裝開發依賴", code: "npm install --save-dev eslint" },
      { label: "執行腳本", code: "npm run dev" },
      { label: "全域安裝工具", code: "npm install -g pnpm" },
      { label: "列出已安裝的全域套件", code: "npm list -g --depth=0" }
    ],
    difficulty: "beginner"
  },
  {
    id: "frontend_css_tips",
    title: "CSS Flexbox 速查",
    category: "Frontend",
    tags: ["flexbox", "layout", "css"],
    description: "常用的 Flexbox 屬性，快速做出水平 / 垂直置中。",
    commands: [
      { label: "水平垂直置中", code: "display: flex;\njustify-content: center;\nalign-items: center;" },
      { label: "等寬均分（三欄）", code: "display: flex;\ngap: 1rem;\n\n.child { flex: 1; }" },
      { label: "換行排列", code: "display: flex;\nflex-wrap: wrap;" }
    ],
    difficulty: "beginner"
  }
];
