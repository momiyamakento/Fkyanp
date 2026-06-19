const companies = [
  {
    id: "shodai",
    name: "翔大鋼業",
    hero: "スチールフレーム",
    initial: "鋼",
    genre: "建設・鉄筋",
    difficulty: "★★☆",
    accent: "#d84b36",
    booth: "A-1",
    industry: "鉄筋工事",
    website: "https://example.com",
    missionTitle: "鉄の骨組みを探せ",
    story:
      "怪獣の足音でスタジアムが揺れる。失われた骨組みの力を戻すには、街を内側から支える仕事の名前が必要だ。",
    research:
      "会社の仕事を調べて、建物の骨組みをつくる工事名を見つけよう。",
    question:
      "鉄を組み、建物の強さを支える仕事。翔大鋼業のヒーローが誇る力を4文字で答えよう。",
    answer: ["技術力", "ぎじゅつりょく"],
    hint: "鉄筋工事の説明に出てくる、職人の腕前や品質を表す言葉。",
    clear:
      "スチールフレームの力が戻った。見えない場所から街を支える仕事が、フィールドの土台を強くする。",
    strength: "建物の安全を支える精度の高い鉄筋工事",
    message: "ものづくりが好きな人、チームで大きな形を残したい人に向いています。",
  },
  {
    id: "pharmacy",
    name: "函館中央薬局",
    hero: "ヘルスガーディアン",
    initial: "薬",
    genre: "医療・健康",
    difficulty: "★☆☆",
    accent: "#12a7b0",
    booth: "A-2",
    industry: "調剤薬局",
    website: "https://example.com",
    missionTitle: "健康の合言葉",
    story:
      "観客席の光が弱まっている。街の健康を守るヒーローは、地域の人に寄り添う言葉を待っている。",
    research:
      "薬局が薬を渡すだけでなく、地域の健康相談を担うことに注目しよう。",
    question:
      "病気になる前から、暮らしのそばで健康を支える考え方。答えは4文字。",
    answer: ["健康相談", "けんこうそうだん"],
    hint: "薬の飲み方や体調の不安を、身近な場所で話せること。",
    clear:
      "ヘルスガーディアンが目覚めた。街の安心は、日々の小さな相談から守られている。",
    strength: "薬と健康相談を通じた地域密着のサポート",
    message: "人の話を聞くことが好きな人、医療や地域貢献に興味がある人におすすめです。",
  },
  {
    id: "morikawa",
    name: "森川組",
    hero: "シティビルダー",
    initial: "建",
    genre: "建設・まちづくり",
    difficulty: "★★☆",
    accent: "#35a853",
    booth: "B-1",
    industry: "総合建設",
    website: "https://example.com",
    missionTitle: "街を創る設計図",
    story:
      "壊れた道路、暗くなった学校、止まった施設。街の形を取り戻すには、現場を束ねる力がいる。",
    research:
      "建物や土木の現場で、計画から完成まで関わる建設会社の役割を調べよう。",
    question:
      "地域の建物やインフラをつくり、未来の景色を形にする仕事。答えは5文字。",
    answer: ["まちづくり", "街づくり"],
    hint: "建物だけでなく、暮らしや地域全体をつくる言葉。",
    clear:
      "シティビルダーが復活した。街の景色は、現場で働く人たちの連携でできている。",
    strength: "地域インフラと建築を支える現場力",
    message: "地元に残る仕事をしたい人、現場でチームを動かしたい人に合います。",
  },
  {
    id: "dock",
    name: "函館どつく",
    hero: "ハーバーアンカー",
    initial: "船",
    genre: "造船・港湾",
    difficulty: "★★★",
    accent: "#2676a6",
    booth: "B-2",
    industry: "造船・修繕",
    website: "https://example.com",
    missionTitle: "港の巨大な力",
    story:
      "海から怪獣の影が近づく。港を守るヒーローには、船を支える大きな技術が必要だ。",
    research:
      "函館の港で、船の建造や修繕に関わる仕事を調べよう。",
    question:
      "海で働く船をつくり、直し、支える技術。答えは2文字。",
    answer: ["造船", "ぞうせん"],
    hint: "船を造る、と書く仕事です。",
    clear:
      "ハーバーアンカーの鎖が光った。港の技術が、函館と世界をつないでいる。",
    strength: "大型船を支える造船・修繕技術",
    message: "大きな機械や海の仕事に興味がある人に響く職場です。",
  },
  {
    id: "daimei",
    name: "大明工業",
    hero: "ライフラインギア",
    initial: "設",
    genre: "設備・技術",
    difficulty: "★★☆",
    accent: "#f5b82e",
    booth: "C-1",
    industry: "設備工事",
    website: "https://example.com",
    missionTitle: "暮らしの配線をつなげ",
    story:
      "照明が消え、会場の熱気が止まる。暮らしを動かす設備の力を取り戻せ。",
    research:
      "建物の中で電気、空調、設備がどんな役割を持つか調べよう。",
    question:
      "見えない場所で暮らしを動かす、電気や空調などの仕組み。答えは2文字。",
    answer: ["設備", "せつび"],
    hint: "建物が快適に使えるようにする仕組み全体の名前。",
    clear:
      "ライフラインギアが回り出した。快適な毎日は、確かな設備技術で支えられている。",
    strength: "暮らしや施設を動かす設備技術",
    message: "仕組みを考えるのが好きな人、生活に近い技術職を知りたい人におすすめです。",
  },
  {
    id: "toko",
    name: "東興アイテック",
    hero: "インダストリアルブースター",
    initial: "産",
    genre: "産業技術",
    difficulty: "★★★",
    accent: "#ef7b2d",
    booth: "C-2",
    industry: "産業支援",
    website: "https://example.com",
    missionTitle: "産業を加速する暗号",
    story:
      "街の工場や現場から音が消えた。産業を支えるヒーローの起動コードを探せ。",
    research:
      "産業の現場を支える技術や部品、メンテナンスの役割に注目しよう。",
    question:
      "現場が止まらないよう、技術で仕事を支えること。答えは4文字。",
    answer: ["産業支援", "さんぎょうしえん"],
    hint: "企業や現場の活動を、裏側から助ける言葉。",
    clear:
      "インダストリアルブースターが起動した。産業の裏側には、止めないための技術がある。",
    strength: "現場を止めない技術支援と対応力",
    message: "機械、技術、現場改善に興味がある人は話を聞いてみてください。",
  },
];

const state = {
  participant: JSON.parse(localStorage.getItem("fcan.participant") || "null"),
  clear: new Set(JSON.parse(localStorage.getItem("fcan.clear") || "[]")),
  interests: new Set(JSON.parse(localStorage.getItem("fcan.interests") || "[]")),
};

const app = document.querySelector("#app");

window.addEventListener("hashchange", render);
window.addEventListener("scroll", updatePageMotion, { passive: true });
document.addEventListener("click", handleDocumentClick);
document.addEventListener("submit", handleSubmit);

render();
updatePageMotion();

function render() {
  const route = parseRoute();
  setCurrentNav(route.name);

  if (route.name === "home") return renderTemplate("home-template");
  if (route.name === "profile") return renderProfile();
  if (route.name === "story") return renderTemplate("story-template");
  if (route.name === "missions") return renderMissions();
  if (route.name === "mission") return renderMission(route.id);
  if (route.name === "companies") return renderCompanies();
  if (route.name === "company") return renderCompany(route.id);
  if (route.name === "clear") return renderClear();

  location.hash = "#home";
}

function renderProfile() {
  renderTemplate("profile-template");
  const view = document.querySelector("#profile-view");
  const participant = state.participant;

  if (!participant) {
    view.innerHTML = registrationFormHtml();
    return;
  }

  const interestedCompanies = companies.filter((company) => state.interests.has(company.id));
  view.innerHTML = `
    <article class="ticket-profile">
      <p class="eyebrow dark">TEMP MEMBER PASS</p>
      <h2>${escapeHtml(participant.name)} さんの参加証</h2>
      <dl class="profile-facts">
        <div>
          <dt>受付番号</dt>
          <dd>${escapeHtml(participant.id)}</dd>
        </div>
        <div>
          <dt>学校</dt>
          <dd>${escapeHtml(participant.school || "未入力")}</dd>
        </div>
        <div>
          <dt>学年</dt>
          <dd>${escapeHtml(participant.grade || "未入力")}</dd>
        </div>
        <div>
          <dt>興味分野</dt>
          <dd>${participant.interests.length ? participant.interests.map(escapeHtml).join(" / ") : "未選択"}</dd>
        </div>
      </dl>
      <div class="profile-progress" aria-label="進行状況">
        <strong>${state.clear.size} / ${companies.length}</strong>
        <span>ミッションクリア</span>
      </div>
      <div class="profile-list">
        <h3>興味あり企業</h3>
        <p>${interestedCompanies.length ? interestedCompanies.map((company) => escapeHtml(company.name)).join("、") : "まだありません"}</p>
      </div>
      <div class="interest-row">
        <a class="button primary" href="#missions">ミッションへ進む</a>
        <button class="button ghost" data-action="edit-profile">登録内容を編集</button>
        <button class="button ghost danger" data-action="delete-profile">仮登録を削除</button>
      </div>
      <p class="privacy-note">この仮登録はこのブラウザ内だけに保存されます。ページを公開しても、今の段階では外部DBへ送信されません。</p>
    </article>
  `;
}

function registrationFormHtml(participant = {}) {
  const selectedInterests = new Set(participant.interests || []);
  const fields = ["建設・ものづくり", "医療・健康", "まちづくり", "船・港", "設備・技術", "産業・機械"];
  return `
    <form class="register-form" id="participant-form">
      <div class="section-heading">
        <p class="eyebrow dark">TEMP REGISTRATION</p>
        <h2>まずは仮受付</h2>
        <p>本番の会員登録ではなく、この端末にだけ保存するデモ用の受付です。</p>
      </div>
      <label>
        名前
        <input name="name" autocomplete="name" required value="${escapeAttribute(participant.name || "")}" placeholder="例: 山田 太郎" />
      </label>
      <label>
        学校名
        <input name="school" value="${escapeAttribute(participant.school || "")}" placeholder="例: 函館○○高校" />
      </label>
      <label>
        学年
        <select name="grade">
          ${["未選択", "高校1年", "高校2年", "高校3年", "大学1年", "大学2年", "大学3年", "大学4年", "保護者", "その他"]
            .map((grade) => `<option ${grade === (participant.grade || "未選択") ? "selected" : ""}>${grade}</option>`)
            .join("")}
        </select>
      </label>
      <label>
        メールアドレス
        <input name="email" type="email" autocomplete="email" value="${escapeAttribute(participant.email || "")}" placeholder="任意" />
      </label>
      <fieldset>
        <legend>興味のある分野</legend>
        <div class="check-grid">
          ${fields
            .map(
              (field) => `
                <label class="check-tile">
                  <input type="checkbox" name="interests" value="${field}" ${selectedInterests.has(field) ? "checked" : ""} />
                  <span>${field}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </fieldset>
      <label>
        サッカー経験・参加理由
        <textarea name="reason" rows="4" placeholder="例: 地元企業を知りたい、友達と参加した">${escapeHtml(participant.reason || "")}</textarea>
      </label>
      <button class="button primary" type="submit">${participant.id ? "更新する" : "仮受付を完了する"}</button>
      <p class="privacy-note">入力内容はlocalStorageに保存されます。DBやサーバー送信はまだ行いません。</p>
    </form>
  `;
}

function parseRoute() {
  const hash = location.hash.replace(/^#/, "") || "home";
  const [name, id] = hash.split("/");
  return { name, id };
}

function renderTemplate(templateId) {
  const template = document.querySelector(`#${templateId}`);
  app.replaceChildren(template.content.cloneNode(true));
  window.scrollTo({ top: 0, behavior: "auto" });
  requestAnimationFrame(initPageMotion);
}

function renderMissions() {
  renderTemplate("missions-template");
  const grid = document.querySelector("#mission-grid");
  document.querySelector("#progress-label").textContent = `${state.clear.size} / ${companies.length} clear`;
  const toolbar = document.querySelector(".mission-toolbar");
  toolbar.insertAdjacentHTML("afterend", memberNoticeHtml());

  grid.replaceChildren(
    ...companies.map((company) => {
      const isClear = state.clear.has(company.id);
      const card = el("article", "mission-card reveal");
      card.style.setProperty("--accent", company.accent);
      card.innerHTML = `
        <div class="tag-row">
          <span class="tag status ${isClear ? "clear" : ""}">${isClear ? "クリア" : "未挑戦"}</span>
          <span class="tag">${company.difficulty}</span>
          <span class="tag">${company.genre}</span>
        </div>
        <h2>${company.hero}</h2>
        <p>${company.name}</p>
        <p>${company.missionTitle}</p>
        <a class="button primary" href="#mission/${company.id}">${isClear ? "もう一度見る" : "挑戦する"}</a>
      `;
      return card;
    })
  );
}

function renderMission(id) {
  const company = findCompany(id);
  if (!company) return (location.hash = "#missions");

  renderTemplate("mission-template");
  const detail = document.querySelector("#mission-detail");
  const isClear = state.clear.has(company.id);
  detail.innerHTML = `
    <aside class="mission-brief" style="--accent:${company.accent}">
      <p class="eyebrow">MISSION / ${company.name}</p>
      <h1>${company.missionTitle}</h1>
      <p>${company.story}</p>
      <div class="tag-row">
        <span class="tag">${company.genre}</span>
        <span class="tag">${company.difficulty}</span>
        <span class="tag">ブース ${company.booth}</span>
      </div>
    </aside>
    <article class="quiz-box">
      <p class="eyebrow dark">RESEARCH</p>
      <h2>${company.hero}</h2>
      <p>${company.research}</p>
      <p><strong>問題:</strong> ${company.question}</p>
      <label>
        答え
        <input id="answer-input" autocomplete="off" placeholder="答えを入力" />
      </label>
      <div class="quiz-actions">
        <button class="button primary" data-action="answer" data-id="${company.id}">回答する</button>
        <button class="button ghost" data-action="hint">ヒントを見る</button>
      </div>
      <div class="hint" id="hint">${company.hint}</div>
      <p class="answer-result ${isClear ? "ok" : ""}" id="answer-result">${isClear ? company.clear : ""}</p>
    </article>
    <article class="company-profile ${isClear ? "is-visible" : ""}" id="company-profile">
      ${companyProfileHtml(company)}
    </article>
  `;
}

function renderCompanies() {
  renderTemplate("companies-template");
  const list = document.querySelector("#company-list");
  list.replaceChildren(
    ...companies.map((company) => {
      const card = el("article", "company-card reveal");
      card.style.setProperty("--accent", company.accent);
      card.innerHTML = `
        <div class="company-card-header">
          <span class="hero-badge">${company.initial}</span>
          <div>
            <h2>${company.name}</h2>
            <p>${company.hero}</p>
          </div>
        </div>
        <div class="tag-row">
          <span class="tag">${company.industry}</span>
          <span class="tag">ブース ${company.booth}</span>
        </div>
        <p>${company.strength}</p>
        <a class="button primary" href="#company/${company.id}">詳しく見る</a>
      `;
      return card;
    })
  );
}

function renderCompany(id) {
  const company = findCompany(id);
  if (!company) return (location.hash = "#companies");

  renderTemplate("company-template");
  const detail = document.querySelector("#company-detail");
  const interested = state.interests.has(company.id);
  detail.innerHTML = `
    <aside class="mission-brief" style="--accent:${company.accent}">
      <p class="eyebrow">COMPANY / BOOTH ${company.booth}</p>
      <h1>${company.name}</h1>
      <p>${company.hero}</p>
      <div class="tag-row">
        <span class="tag">${company.genre}</span>
        <span class="tag">${company.industry}</span>
      </div>
    </aside>
    <article class="company-profile is-visible">
      ${companyProfileHtml(company)}
    </article>
  `;
}

function renderClear() {
  renderTemplate("clear-template");
  const completed = state.clear.size === companies.length;
  document.querySelector("#clear-title").textContent = completed
    ? "全ヒーロー集結。函館のフィールドに光が戻った。"
    : `ヒーロー集結まで、あと${companies.length - state.clear.size}人。`;
  document.querySelector("#clear-copy").textContent = completed
    ? "集めた企業ヒーローの力で怪獣を撃退。気になった企業を残して、次はブースで話してみよう。"
    : "ミッションをクリアして、フィールド中央の光を完成させよう。";

  const collection = document.querySelector("#hero-collection");
  collection.replaceChildren(
    ...companies.map((company) => {
      const isClear = state.clear.has(company.id);
      const card = el("article", `collection-card reveal ${isClear ? "" : "is-locked"}`);
      card.style.setProperty("--accent", company.accent);
      card.innerHTML = `
        <div class="tag-row">
          <span class="tag status ${isClear ? "clear" : ""}">${isClear ? "解放済み" : "未解放"}</span>
        </div>
        <h3>${isClear ? company.hero : "????????"}</h3>
        <p>${company.name}</p>
      `;
      return card;
    })
  );
  prefillMatchForm();
}

function companyProfileHtml(company) {
  const interested = state.interests.has(company.id);
  return `
    <p class="eyebrow dark">PROFILE UNLOCKED</p>
    <h2>${company.name}の仕事</h2>
    <p>${company.clear}</p>
    <dl class="company-profile-grid">
      <div>
        <dt>業種</dt>
        <dd>${company.industry}</dd>
      </div>
      <div>
        <dt>強み</dt>
        <dd>${company.strength}</dd>
      </div>
      <div>
        <dt>ブース</dt>
        <dd>${company.booth}</dd>
      </div>
    </dl>
    <p>${company.message}</p>
    <div class="interest-row">
      <button class="button ${interested ? "interested" : "primary"}" data-action="interest" data-id="${company.id}">
        ${interested ? "興味ありに追加済み" : "この企業に興味がある"}
      </button>
      <a class="button ghost" href="#company/${company.id}">企業ページへ</a>
      <a class="button ghost" href="#missions">一覧へ戻る</a>
    </div>
  `;
}

function handleDocumentClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "hint") {
    document.querySelector("#hint")?.classList.toggle("is-visible");
  }
  if (action === "answer") {
    checkAnswer(target.dataset.id);
  }
  if (action === "interest") {
    toggleInterest(target.dataset.id);
    render();
  }
  if (action === "reset") {
    state.clear.clear();
    state.interests.clear();
    saveState();
    renderMissions();
  }
  if (action === "edit-profile") {
    document.querySelector("#profile-view").innerHTML = registrationFormHtml(state.participant);
  }
  if (action === "delete-profile") {
    state.participant = null;
    localStorage.removeItem("fcan.participant");
    renderProfile();
  }
}

function handleSubmit(event) {
  if (event.target.id === "participant-form") {
    event.preventDefault();
    saveParticipant(new FormData(event.target));
    renderProfile();
    return;
  }

  if (event.target.id !== "match-form") return;
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  localStorage.setItem(
    "fcan.match",
    JSON.stringify({
      ...data,
      participantId: state.participant?.id || null,
      interests: [...state.interests],
      savedAt: new Date().toISOString(),
    })
  );
  document.querySelector("#form-note").textContent = "保存しました。会場スタッフにこの画面を見せるとスムーズです。";
}

function saveParticipant(formData) {
  const participant = {
    id: state.participant?.id || createParticipantId(),
    name: formData.get("name")?.toString().trim() || "ゲスト",
    school: formData.get("school")?.toString().trim() || "",
    grade: formData.get("grade")?.toString() || "未選択",
    email: formData.get("email")?.toString().trim() || "",
    interests: formData.getAll("interests").map((value) => value.toString()),
    reason: formData.get("reason")?.toString().trim() || "",
    createdAt: state.participant?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  state.participant = participant;
  localStorage.setItem("fcan.participant", JSON.stringify(participant));
}

function createParticipantId() {
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  const date = new Date();
  const stamp = `${date.getMonth() + 1}${date.getDate()}${date.getHours()}`;
  return `FC-${stamp}-${random}`;
}

function checkAnswer(id) {
  const company = findCompany(id);
  const input = document.querySelector("#answer-input");
  const result = document.querySelector("#answer-result");
  const profile = document.querySelector("#company-profile");
  const value = normalize(input.value);
  const ok = company.answer.some((answer) => normalize(answer) === value);

  result.classList.toggle("ok", ok);
  result.classList.toggle("ng", !ok);
  result.textContent = ok
    ? company.clear
    : "まだ違うようです。企業の仕事や強みをもう一度見てみよう。";

  if (ok) {
      state.clear.add(company.id);
      saveState();
      profile.classList.add("is-visible");
      profile.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
}

function toggleInterest(id) {
  if (state.interests.has(id)) {
    state.interests.delete(id);
  } else {
    state.interests.add(id);
  }
  saveState();
}

function saveState() {
  localStorage.setItem("fcan.clear", JSON.stringify([...state.clear]));
  localStorage.setItem("fcan.interests", JSON.stringify([...state.interests]));
}

function memberNoticeHtml() {
  if (state.participant) {
    return `
      <aside class="member-notice">
        <strong>${escapeHtml(state.participant.name)} さんで参加中</strong>
        <span>受付番号 ${escapeHtml(state.participant.id)}</span>
        <a href="#profile">マイページ</a>
      </aside>
    `;
  }
  return `
    <aside class="member-notice">
      <strong>仮受付をすると進行状況を確認しやすくなります</strong>
      <span>この端末だけに保存されます</span>
      <a href="#profile">受付する</a>
    </aside>
  `;
}

function prefillMatchForm() {
  if (!state.participant) return;
  const form = document.querySelector("#match-form");
  if (!form) return;
  form.elements.name.value = state.participant.name || "";
  form.elements.school.value = state.participant.school || "";
}

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[！-～]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0));
}

function findCompany(id) {
  return companies.find((company) => company.id === id);
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function setCurrentNav(name) {
  const group = name === "mission" ? "missions" : name === "company" ? "companies" : name;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.toggleAttribute("aria-current", link.getAttribute("href") === `#${group}`);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function updatePageMotion() {
  document.querySelector(".site-header")?.setAttribute("data-elevated", window.scrollY > 8 ? "true" : "false");
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
  document.documentElement.style.setProperty("--scroll", `${progress}%`);
  document.documentElement.style.setProperty("--parallax", `${window.scrollY}`);
}

function initPageMotion() {
  updatePageMotion();
  const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 180)}ms`;
    observer.observe(item);
  });
}
