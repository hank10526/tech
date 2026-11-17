// js/app.js

// ===== 分類清單（新增分類時需同步更新 AGENTS.md）=====
const CATEGORIES = ['All', 'Git', 'Linux', 'Docker', 'Frontend'];

// ===== 狀態 =====
let activeCategory = 'All';
let searchQuery = '';

// ===== DOM 參照 =====
const grid = document.getElementById('notes-grid');
const searchInput = document.getElementById('search-input');
const resultCount = document.getElementById('result-count');
const filterBar = document.getElementById('filter-bar');

// ===== 建立分類按鈕 =====
function buildFilterButtons() {
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.textContent = cat === 'All' ? '🗂 全部' : cat;
    btn.dataset.category = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
    filterBar.appendChild(btn);
  });
}

// ===== 過濾邏輯 =====
function getFilteredNotes() {
  const query = searchQuery.toLowerCase().trim();
  return window.NOTES.filter(note => {
    const matchCategory = activeCategory === 'All' || note.category === activeCategory;
    if (!query) return matchCategory;
    const searchIn = [
      note.title,
      note.description,
      note.category,
      ...note.tags,
      ...note.commands.map(c => c.label + ' ' + c.code)
    ].join(' ').toLowerCase();
    return matchCategory && searchIn.includes(query);
  });
}

// ===== 渲染卡片 =====
function renderCard(note) {
  const card = document.createElement('article');
  card.className = 'note-card';

  // 標籤 HTML
  const tagsHTML = note.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('');

  // 指令區塊 HTML
  const commandsHTML = note.commands.map((cmd, i) => `
    <div class="command-block">
      <div class="command-label">${escHtml(cmd.label)}</div>
      <div class="command-code-row">
        <pre class="command-code">${escHtml(cmd.code)}</pre>
        <button class="copy-btn" data-code="${escAttr(cmd.code)}" title="複製指令">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          複製
        </button>
      </div>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="card-header">
      <span class="card-title">${escHtml(note.title)}</span>
      <span class="difficulty-dot ${note.difficulty}" title="${note.difficulty}"></span>
    </div>
    <p class="card-desc">${escHtml(note.description)}</p>
    <div class="tags-row">
      <span class="category-badge ${note.category.toLowerCase()}">${escHtml(note.category)}</span>
      ${tagsHTML}
    </div>
    <div class="commands-list">${commandsHTML}</div>
  `;

  // 綁定複製按鈕事件
  card.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => copyCode(btn));
  });

  return card;
}

// ===== 渲染主函式 =====
function render() {
  const filtered = getFilteredNotes();
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>找不到相關筆記</h3>
        <p>試試不同的關鍵字，或選擇其他分類。</p>
      </div>
    `;
  } else {
    const fragment = document.createDocumentFragment();
    filtered.forEach(note => fragment.appendChild(renderCard(note)));
    grid.appendChild(fragment);
  }

  // 更新計數
  const total = window.NOTES.length;
  resultCount.innerHTML = filtered.length === total
    ? `共 <strong>${total}</strong> 筆筆記`
    : `顯示 <strong>${filtered.length}</strong> / ${total} 筆筆記`;
}

// ===== 複製功能 =====
async function copyCode(btn) {
  const code = btn.dataset.code;
  try {
    await navigator.clipboard.writeText(code);
    const original = btn.innerHTML;
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      已複製
    `;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove('copied');
    }, 1800);
  } catch {
    // fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = code;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// ===== 安全跳脫 HTML =====
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ===== 搜尋防抖 =====
let debounceTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchQuery = searchInput.value;
    render();
  }, 200);
});

// ===== 初始化 =====
buildFilterButtons();
render();
