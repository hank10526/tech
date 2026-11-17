# ⚡ DevNotes — 個人技術速查庫

> 一個純靜態（HTML + CSS + JS）的個人技術筆記速查庫，收錄 Git、Linux、Docker、Frontend 等常用指令，支援即時搜尋、分類過濾與一鍵複製。

## 🌐 線上瀏覽

👉 **[https://你的帳號.github.io/tech/](https://你的帳號.github.io/tech/)**

---

## ✨ 功能特色

- 🔍 **即時搜尋**：輸入關鍵字即時過濾，搜尋範圍涵蓋標題、說明、標籤與指令
- 🗂 **分類過濾**：一鍵切換 Git、Linux、Docker、Frontend 分類
- 📋 **一鍵複製**：每個指令區塊右側的「複製」按鈕，複製後顯示 ✓ 確認
- 🌙 **深色科技風**：舒適的深色主題，適合長時間使用
- 📱 **響應式設計**：手機、平板、桌機均可正常瀏覽

---

## 🗂 專案結構

```
tech/
├── AGENTS.md          # AI 開發規範（核心文件）
├── README.md          # 本說明文件
├── index.html         # 主頁面
├── css/
│   └── style.css      # 樣式（CSS 變數系統）
├── js/
│   └── app.js         # 渲染、搜尋、複製邏輯
└── data/
    └── notes.js       # 筆記資料庫
```

---

## 🤖 AI 擴充說明

本專案附有 [`AGENTS.md`](./AGENTS.md)，讓 AI 能理解專案規則，並自動依照格式新增筆記。

**要新增筆記，只需對 AI 說：**
> 「請依照 AGENTS.md 的格式，在 `data/notes.js` 新增關於 _XXX_ 的筆記。」

---

## 🛠 本機預覽

直接用瀏覽器開啟 `index.html` 即可預覽（無需 Node.js 或任何建置工具）。

---

## 📄 License

MIT
