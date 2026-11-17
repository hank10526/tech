# AGENTS.md — DevNotes 個人技術速查庫

## 1. 專案目的

DevNotes 是一個純靜態（HTML + CSS + JS）的個人技術筆記速查庫。  
目標是讓開發者能快速搜尋、瀏覽、複製常用的 CLI 指令與技術筆記。  
這份文件是讓 AI 理解如何維護與擴充本專案的核心規範。

---

## 2. 專案結構

```
tech/
├── AGENTS.md          ← 本文件（AI 規範，禁止刪除）
├── README.md          ← GitHub 專案說明
├── index.html         ← 唯一入口頁面
├── css/
│   └── style.css      ← 所有樣式（使用 CSS 變數統一風格）
├── js/
│   └── app.js         ← 渲染、搜尋、分類過濾、複製功能
└── data/
    └── notes.js       ← 📌 筆記資料庫（新增筆記的唯一目標檔案）
```

> ⚠️ **AI 規則**：除非使用者明確要求，否則 AI 只應修改 `data/notes.js`，  
> 不得任意更動 `index.html`、`css/style.css` 的全域結構。

---

## 3. 整體風格規範

| 項目 | 規範 |
|------|------|
| 主題 | 深色科技風（Dark Mode） |
| 主色 | `#00e5ff`（電光藍） |
| 背景色 | `#0d1117`（GitHub 深色） |
| 卡片背景 | `#161b22` |
| 字體 | 內文 `'Noto Sans TC'`，程式碼 `'JetBrains Mono', monospace` |
| 圓角 | `8px`（卡片）、`4px`（標籤） |
| 動畫 | 卡片 hover 時 `translateY(-2px)` + box-shadow |

**所有顏色必須使用 CSS 變數（定義於 `style.css` 的 `:root`），禁止硬編碼色碼。**

---

## 4. 筆記資料格式（`data/notes.js`）

每一筆筆記是 `window.NOTES` 陣列中的一個物件，格式如下：

```javascript
{
  id: "唯一識別碼",          // 字串，英文小寫 + 底線，不可重複
  title: "筆記標題",         // 字串，繁體中文或英文均可
  category: "分類名稱",      // 必須是已定義的分類（見下方）
  tags: ["標籤1", "標籤2"],  // 陣列，每筆最多 4 個標籤
  description: "簡短說明",   // 字串，一句話說明這筆記的用途
  commands: [               // 陣列，可有多個指令區塊
    {
      label: "指令說明",     // 字串，說明這個指令做什麼
      code: "實際指令"       // 字串，使用者會複製的內容
    }
  ],
  difficulty: "beginner"    // "beginner" | "intermediate" | "advanced"
}
```

### ✅ 合法分類（category）清單
- `Git`
- `Linux`
- `Docker`
- `Frontend`

> 若使用者要求新增其他分類，必須同時更新 `js/app.js` 中的 `CATEGORIES` 常數。

---

## 5. 新增筆記的 SOP（AI 必須遵守）

1. **開啟 `data/notes.js`**，在陣列末尾加入新物件（逗號分隔）。
2. **確認 `id` 唯一**：掃描現有 id 清單，不允許重複。
3. **確認 `category` 合法**：只能使用第 4 節定義的分類。
4. **`commands.code` 格式**：
   - 多行指令使用 `\n` 換行
   - 不要包含多餘的空格或 Markdown 符號（如 ` ``` `）
5. **不修改其他檔案**，除非使用者明確要求。
6. 完成後回報：「已新增 X 筆筆記，分類：Y，ID：Z」

---

## 6. 修改樣式的規則

- **改色系**：只修改 `css/style.css` 的 `:root` 變數
- **改佈局**：只修改 `.notes-grid` 的 `grid-template-columns`
- **禁止**：在 HTML 內嵌 `style=""` 屬性，所有樣式必須在 CSS 中定義

---

## 7. Git Commit 規範

```
feat: 新增 Docker 常用指令筆記
fix: 修正搜尋大小寫不敏感問題
style: 調整卡片 hover 動畫速度
docs: 更新 AGENTS.md 分類清單
```

格式：`類型: 中文說明`  
類型限定：`feat`、`fix`、`style`、`docs`、`chore`

---

## 8. 禁止事項

- ❌ 不允許使用任何第三方 JS 框架（React、Vue 等）
- ❌ 不允許使用 CDN 以外的外部資源（確保離線可用）
- ❌ 不允許引入 `<iframe>` 或外部嵌入內容
- ❌ 不允許修改 `AGENTS.md`，除非使用者明確要求更新規範
