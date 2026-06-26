const missions = [
  {
    id: "shodai",
    companyName: "翔大鋼業",
    heroName: "スチールフレーム",
    allyName: "スチールフレーム",
    character: "real-steel",
    role: "鉄筋・骨組みの力",
    category: "建設・鉄筋",
    industry: "鉄筋工事",
    difficulty: 2,
    booth: "B-1",
    accent: "#e95b3c",
    website: "http://www.syoudai.jp/",
    missionTitle: "鉄の骨組みを探せ",
    storyIntro:
      "最初の通信が示したのは、崩れかけたビルの影だった。そこには、かつて街の建物を支えた鉄のヒーローが眠っているらしい。彼を呼び覚ますには、翔大鋼業がどんな力で街を支えているのかを突き止める必要がある。",
    questionTitle: "骨組み通信ログ",
    questionLead: "通信ログに残された手がかりを追え。建物の中で強さを支える仕事の正体が、起動コードにつながっている。",
    questionBody: "鉄を組み、建物の強さを支える仕事。翔大鋼業のヒーローが誇る力を4文字で答えよう。",
    acceptedAnswers: ["技術力", "ぎじゅつりょく", "ギジュツリョク"],
    hints: [
      "相方から追加通信が届いた。まずは企業HPで、どんな工事を得意としているか探そう。",
      "ヒーローの記憶が少し復元された。鉄筋工事という言葉が手がかりになる。",
      "企業HPのこのあたりを見てみよう。職人の腕前や品質を表す言葉が、起動コードに近い。"
    ],
    heroDescription:
      "鉄骨と建築フレームをまとった重装防衛型ヒーロー。巨大な鋼鉄の盾で、怪獣の一撃を正面から受け止める。",
    unlockMessage: "街の骨組みは、俺が支える。ナゾゴラの一撃、受け止めてみせる！",
    attackName: "スチールシールド",
    attackText: "鉄の盾を組み上げ、ナゾゴラの一撃を受け止める。",
    attackClass: "attack-shield",
    companyIntro: {
      catch: "スチールフレームの力の正体",
      power: "鉄筋工事によって、建物の中に強い骨組みをつくる技術。",
      work: "普段は見えない場所で、建物の安全と強さを支える大切な仕事。",
      town: "学校、施設、ビルなど、街の風景を内側から支える存在です。",
      points: ["どんな建物に関わっていますか？", "仕事で一番大変なことは何ですか？", "高校生・大学生に知ってほしいことは何ですか？"]
    }
  },
  {
    id: "pharmacy",
    companyName: "函館中央薬局",
    heroName: "ヘルスガーディアン",
    allyName: "ヘルスガーディアン",
    character: "real-health",
    role: "医療・調剤・回復の力",
    category: "医療・健康",
    industry: "調剤薬局",
    difficulty: 1,
    booth: "B-2",
    accent: "#168c9a",
    website: "https://h-chuo-p.com/",
    missionTitle: "健康の合言葉",
    storyIntro:
      "次に届いた信号は、街の避難所からだった。傷ついた人々と、消耗したヒーローたち。戦いを続けるには、健康を守る知識が必要だ。薬と地域に寄り添うヒーローの記憶を取り戻そう。",
    questionTitle: "避難所からの合言葉",
    questionLead: "薬を渡すだけではない。暮らしの近くで健康を守る仕事に、回復の起動コードが残されている。",
    questionBody: "病気になる前から、暮らしのそばで健康を支える考え方。答えは4文字以上。",
    acceptedAnswers: ["健康相談", "けんこうそうだん", "ケンコウソウダン"],
    hints: [
      "相方から追加通信が届いた。薬局で相談できることを思い浮かべよう。",
      "ヒーローの記憶が少し復元された。薬の飲み方や体調の不安を話せる場所だ。",
      "企業HPのこのあたりを見てみよう。地域に寄り添う姿勢が答えにつながる。"
    ],
    heroDescription: "白衣と戦闘スーツを融合した支援型ヒーロー。医療ユニットと治療ガントレットで人々と仲間を回復する。",
    unlockMessage: "無理は禁物。回復と準備も、戦いの大切な力です。",
    attackName: "リカバリーライト",
    attackText: "回復の光で仲間の力を整え、次の一撃につなげる。",
    attackClass: "attack-heal",
    companyIntro: {
      catch: "ヘルスガーディアンの力の正体",
      power: "薬と健康相談を通じて、地域の安心を支える知識。",
      work: "調剤、服薬サポート、健康相談など、人の暮らしに近い医療の仕事。",
      town: "困った時に相談できる場所があることは、街の安心につながります。",
      points: ["薬剤師の仕事で大切なことは？", "地域の人とどう関わっていますか？", "医療職を目指す学生に伝えたいことは？"]
    }
  },
  {
    id: "morikawa",
    companyName: "森川組",
    heroName: "シティビルダー",
    allyName: "シティビルダー",
    character: "real-city",
    role: "土木・建築・土台の力",
    category: "建設・まちづくり",
    industry: "総合建設",
    difficulty: 2,
    booth: "C-1",
    accent: "#22a65a",
    website: "http://morikawagumi.com/",
    missionTitle: "街を創る設計図",
    storyIntro:
      "地面が大きく揺れ、ナゾゴラの足音が近づいてくる。街を守るには、建物だけではなく、道路や土台を支える力が必要だ。森川組の仕事を調べ、街を創るヒーローを呼び覚ませ。",
    questionTitle: "設計図に残る言葉",
    questionLead: "建物、道路、施設。点ではなく街全体を見ている仕事に、土台のヒーローの記憶が眠っている。",
    questionBody: "地域の建物やインフラをつくり、未来の景色を形にする仕事。答えは5文字。",
    acceptedAnswers: ["まちづくり", "街づくり", "マチヅクリ"],
    hints: [
      "相方から追加通信が届いた。建物だけでなく、道路や地域全体を見る言葉だ。",
      "ヒーローの記憶が少し復元された。暮らしの土台を作る仕事に注目しよう。",
      "企業HPのこのあたりを見てみよう。地域の未来を形にする言葉が答えだ。"
    ],
    heroDescription:
      "現場装備と戦闘装甲を融合した職人型ヒーロー。地盤を固め、崩れた道路を直し、怪獣の足元を制御する。",
    unlockMessage: "街は一日ではできない。だが、積み重ねた仕事は必ず未来を支える。",
    attackName: "グラウンドリフト",
    attackText: "足場を固め、ナゾゴラの巨体を受け止める地面を作る。",
    attackClass: "attack-ground",
    companyIntro: {
      catch: "シティビルダーの力の正体",
      power: "土木と建築で、街の土台と未来の景色をつくる現場力。",
      work: "道路、施設、建物など、計画から完成まで地域のインフラに関わる仕事。",
      town: "日常の移動や学びの場所など、街の使いやすさを支えます。",
      points: ["現場ではどんな人が連携していますか？", "完成した時のやりがいは？", "地元で働く魅力は何ですか？"]
    }
  },
  {
    id: "dock",
    companyName: "函館ドック",
    heroName: "ドックメカニック",
    allyName: "ドックメカニック",
    character: "real-harbor",
    role: "造船・修理・巨大メカの力",
    category: "造船・機械",
    industry: "造船・修繕",
    difficulty: 3,
    booth: "C-2",
    accent: "#2676a6",
    website: "https://www.hakodate-dock.co.jp/",
    missionTitle: "港に眠る技術",
    storyIntro:
      "港から、古い無線信号が届いた。海には、決戦に必要な巨大な力が眠っている。船をつくり、直し、支える技術を調べ、海のヒーローを起動せよ。",
    questionTitle: "港の無線暗号",
    questionLead: "海に浮かぶ巨大な機械をつくり、直し、動かし続ける技術。それが決戦用メカの鍵になる。",
    questionBody: "海で働く船をつくり、直し、支える技術。答えは2文字。",
    acceptedAnswers: ["造船", "ぞうせん", "ゾウセン"],
    hints: [
      "相方から追加通信が届いた。港と船に関わる仕事を探そう。",
      "ヒーローの記憶が少し復元された。船を造る、と書く言葉だ。",
      "企業HPのこのあたりを見てみよう。建造と修繕の両方が大きな手がかりになる。"
    ],
    heroDescription: "造船所の技術と重装備を備えたメカニックヒーロー。クレーンアームとアンカー武器で海から決戦を支える。",
    unlockMessage: "海からの援護は任せろ。決戦兵器、起動準備完了だ！",
    attackName: "ハーバーカノン",
    attackText: "港の巨大メカを起動し、海側から援護射撃を放つ。",
    attackClass: "attack-cannon",
    companyIntro: {
      catch: "ドックメカニックの力の正体",
      power: "船をつくり、直し、海の仕事を支える造船と修繕の技術。",
      work: "大きな船や機械を扱い、チームで安全な運航を支える仕事。",
      town: "港町函館の産業や物流、人の移動と深くつながっています。",
      points: ["船の仕事のスケール感は？", "どんな技術が必要ですか？", "未経験から学べることはありますか？"]
    }
  },
  {
    id: "daimei",
    companyName: "大明工業",
    heroName: "ラインマスター",
    allyName: "ラインマスター",
    character: "real-lifeline",
    role: "管工事・水・空気・ライフラインの力",
    category: "設備・ライフライン",
    industry: "設備工事",
    difficulty: 2,
    booth: "D-1",
    accent: "#f5b82e",
    website: "https://taimei-kk.com/",
    missionTitle: "流れる力の正体",
    storyIntro:
      "街の水と空気の流れが乱れ始めた。見えない場所で暮らしを支えていたライフラインの力が弱まっている。設備を支えるヒーローの正体を探れ。",
    questionTitle: "見えない配管図",
    questionLead: "水、空気、熱。見えない流れを整える仕事に、街を動かすコードが残っている。",
    questionBody: "見えない場所で暮らしを動かす、水や空気などの仕組み。答えは2文字。",
    acceptedAnswers: ["設備", "せつび", "セツビ"],
    hints: [
      "相方から追加通信が届いた。建物を快適に使うための仕組みに注目しよう。",
      "ヒーローの記憶が少し復元された。水や空気の通り道を整える仕事だ。",
      "企業HPのこのあたりを見てみよう。管工事やライフラインという言葉が近い。"
    ],
    heroDescription: "配管、バルブ、圧力ラインをまとった流体系ヒーロー。水流、蒸気、空気圧を操り、街のライフラインを守る。",
    unlockMessage: "見えないところで街を動かす。それが俺たちの戦い方だ。",
    attackName: "フローバインド",
    attackText: "水と空気の流れを制御し、ナゾゴラの動きを止める。",
    attackClass: "attack-flow",
    companyIntro: {
      catch: "ラインマスターの力の正体",
      power: "管工事や設備工事で、水・空気・熱の流れを整える技術。",
      work: "建物の裏側で、暮らしに必要なライフラインを安全に動かす仕事。",
      town: "普段は見えないけれど、快適な毎日を守る重要な役割です。",
      points: ["設備工事はどんな場所で活躍しますか？", "見えない仕事の面白さは？", "技術を身につける流れは？"]
    }
  },
  {
    id: "toko",
    companyName: "東興アイテック",
    heroName: "エナジーリンク",
    allyName: "エナジーリンク",
    character: "real-link",
    role: "電気・通信・情報の力",
    category: "電気・通信・情報",
    industry: "電気・通信・情報",
    difficulty: 3,
    booth: "D-2",
    accent: "#ef7b2d",
    website: "https://tokoai.com/",
    missionTitle: "つながる力を探せ",
    storyIntro:
      "すべてのヒーローが集まりつつある。しかし、力がまだ一つにつながっていない。最後に必要なのは、電気と情報をつなぐエネルギーの力だ。東興アイテックの謎を解き、最終決戦の準備を完了せよ。",
    questionTitle: "接続コードの復元",
    questionLead: "現場、機械、人、情報。ばらばらの力をつなぐ技術が、最後の一撃の回路になる。",
    questionBody: "全員の力を電気や情報で結び、現場を止めないための力。答えは4文字。",
    acceptedAnswers: ["情報通信", "じょうほうつうしん", "ジョウホウツウシン", "通信情報"],
    hints: [
      "相方から追加通信が届いた。電気だけでなく、情報を届ける仕事にも注目しよう。",
      "ヒーローの記憶が少し復元された。つながる力、伝える力が鍵だ。",
      "企業HPのこのあたりを見てみよう。通信、電気、情報の組み合わせが答えにつながる。"
    ],
    heroDescription: "黒い戦闘スーツに発光ラインを走らせる司令塔型ヒーロー。電気と情報で全員の力を接続し、最後の一撃を可能にする。",
    unlockMessage: "全員の力を接続する。これで最後の一撃が撃てる！",
    attackName: "コネクトブースト",
    attackText: "全ヒーローの力を接続し、最後の合体攻撃を準備する。",
    attackClass: "attack-link",
    companyIntro: {
      catch: "エナジーリンクの力の正体",
      power: "電気・通信・情報をつなぎ、現場や暮らしを動かし続ける技術。",
      work: "設備や情報のつながりを支え、止まらない現場をつくる仕事。",
      town: "学校、施設、企業活動など、街の連携を裏側から支えます。",
      points: ["電気・通信の仕事はどこで使われていますか？", "現場を止めないために大切なことは？", "情報系に興味がある学生に合いますか？"]
    }
  }
];

const characterAssets = {
  "real-steel": {
    src: "assets/characters/steel-frame-v2.png",
    width: 887,
    height: 1774,
    alt: "スチールフレーム"
  },
  "real-health": {
    src: "assets/characters/health-guardian-v2.png",
    width: 887,
    height: 1774,
    alt: "ヘルスガーディアン"
  },
  "real-city": {
    src: "assets/characters/city-builder-v2.png",
    width: 887,
    height: 1774,
    alt: "シティビルダー"
  },
  "real-harbor": {
    src: "assets/characters/dock-mechanic-v2.png",
    width: 887,
    height: 1774,
    alt: "ドックメカニック"
  },
  "real-lifeline": {
    src: "assets/characters/line-master-v2.png",
    width: 887,
    height: 1774,
    alt: "ラインマスター"
  },
  "real-link": {
    src: "assets/characters/energy-link-v2.png",
    width: 887,
    height: 1774,
    alt: "エナジーリンク"
  },
  "real-kaiju": {
    src: "assets/characters/nazogora-full-v2.png",
    width: 1536,
    height: 1024,
    alt: "ナゾゴラ"
  }
};

const STORAGE_KEYS = {
  participant: "fcan.participant",
  unlocked: "fcan.clear",
  interests: "fcan.interests",
  hints: "fcan.hints",
  final: "fcan.finalUnlocked"
};

const state = {
  participant: readJson(STORAGE_KEYS.participant, null),
  unlocked: new Set(readJson(STORAGE_KEYS.unlocked, [])),
  interests: new Set(readJson(STORAGE_KEYS.interests, [])),
  hints: readJson(STORAGE_KEYS.hints, {}),
  finalUnlocked: readJson(STORAGE_KEYS.final, false),
  recentUnlock: null
};

const battleState = {
  timer: null,
  status: "ready",
  stepIndex: -1,
  hp: 100
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
  if (route.name !== "clear") clearBattleTimer();
  setCurrentNav(route.name);

  if (route.name === "home") return renderTemplate("home-template");
  if (route.name === "profile") return renderProfile();
  if (route.name === "story") return renderTemplate("story-template", storyAnchorId(route.id));
  if (route.name === "story-call") return renderTemplate("story-template", "story-call");
  if (route.name === "missions") return renderMissions();
  if (route.name === "mission") return renderMission(route.id);
  if (route.name === "companies") return renderCompanies();
  if (route.name === "company") return renderCompany(route.id);
  if (route.name === "clear") return renderClear();

  location.hash = "#home";
}

function parseRoute() {
  const [name, id] = (location.hash.replace(/^#/, "") || "home").split("/");
  return { name, id };
}

function renderTemplate(templateId, anchorId = "") {
  const template = document.querySelector(`#${templateId}`);
  app.replaceChildren(template.content.cloneNode(true));
  if (anchorId) {
    const scrollToAnchor = () => {
      const anchor = document.getElementById(anchorId);
      if (!anchor) return;
      const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
      const top = Math.max(0, anchor.getBoundingClientRect().top + window.scrollY - headerOffset - 12);
      window.scrollTo({ top, behavior: "auto" });
    };
    requestAnimationFrame(scrollToAnchor);
    window.setTimeout(scrollToAnchor, 160);
    window.setTimeout(scrollToAnchor, 620);
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  requestAnimationFrame(initPageMotion);
  renderFixedProgress();
}

function storyAnchorId(id) {
  if (id === "call") return "story-call";
  return "";
}

function renderProfile() {
  renderTemplate("profile-template");
  const view = document.querySelector("#profile-view");
  if (!state.participant) {
    view.innerHTML = registrationFormHtml();
    return;
  }

  const interested = missions.filter((mission) => state.interests.has(mission.id));
  view.innerHTML = `
    <article class="ticket-profile">
      <p class="eyebrow dark">MISSION PASS</p>
      <h2>${escapeHtml(state.participant.name)} さんの作戦参加証</h2>
      <p class="success-note">作戦参加登録が完了しました。この端末に進行状況が保存されます。</p>
      <dl class="profile-facts">
        <div><dt>受付番号</dt><dd>${escapeHtml(state.participant.id)}</dd></div>
        <div><dt>学年</dt><dd>${escapeHtml(state.participant.grade)}</dd></div>
        <div><dt>興味分野</dt><dd>${state.participant.interests.length ? state.participant.interests.map(escapeHtml).join(" / ") : "未選択"}</dd></div>
        <div><dt>クリア</dt><dd>${state.unlocked.size} / ${missions.length} clear</dd></div>
      </dl>
      <div class="profile-progress" aria-label="進行状況">
        <strong>${state.unlocked.size} / ${missions.length}</strong>
        <span>企業ヒーロー解放</span>
      </div>
      <div class="profile-list">
        <h3>気になる企業</h3>
        <p>${interested.length ? interested.map((mission) => escapeHtml(mission.companyName)).join("、") : "まだありません"}</p>
      </div>
      <div class="interest-row">
        <a class="button primary" href="#missions">謎解きを始める</a>
        <button class="button ghost" type="button" data-action="edit-profile" aria-label="登録内容を編集">登録内容を編集</button>
        <button class="button ghost danger" type="button" data-action="delete-profile" aria-label="受付情報を削除">受付情報を削除</button>
      </div>
      <p class="privacy-note">この受付はデモ・イベント用です。入力内容はサーバーへ送信せず、このブラウザのlocalStorageだけに保存されます。</p>
    </article>
  `;
}

function registrationFormHtml(participant = {}) {
  const selected = new Set(participant.interests || []);
  const fields = ["建設", "医療", "ものづくり", "電気・情報", "まちづくり", "まだ決まっていない"];
  return `
    <form class="register-form" id="participant-form">
      <div class="section-heading">
        <p class="eyebrow dark">TEMP REGISTRATION</p>
        <h2>作戦参加登録</h2>
        <p>本格的な個人情報収集ではなく、進行状況を見やすくするための簡易受付です。</p>
      </div>
      <label for="participant-name">名前またはニックネーム</label>
      <input id="participant-name" name="name" autocomplete="nickname" required value="${escapeAttribute(participant.name || "")}" placeholder="例: はこだて太郎" />
      <label for="participant-grade">学年</label>
      <select id="participant-grade" name="grade">
        ${["未選択", "高校1年", "高校2年", "高校3年", "大学1年", "大学2年", "大学3年", "大学4年", "保護者", "その他"]
          .map((grade) => `<option ${grade === (participant.grade || "未選択") ? "selected" : ""}>${grade}</option>`)
          .join("")}
      </select>
      <fieldset>
        <legend>興味のある分野</legend>
        <div class="check-grid">
          ${fields
            .map(
              (field) => `
                <label class="check-tile">
                  <input type="checkbox" name="interests" value="${field}" ${selected.has(field) ? "checked" : ""} />
                  <span>${field}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </fieldset>
      <button class="button primary" type="submit" aria-label="作戦参加登録を完了する">${participant.id ? "登録内容を更新する" : "参加受付を完了する"}</button>
      <p class="privacy-note">個人情報をサーバーに送信しません。入力内容と進行状況は、この端末のブラウザ内だけに保存されます。</p>
    </form>
  `;
}

function renderMissions() {
  renderTemplate("missions-template");
  document.querySelector("#progress-label").textContent = `${state.unlocked.size} / ${missions.length} clear`;
  document.querySelector(".mission-toolbar").insertAdjacentHTML("afterend", `${memberNoticeHtml()}${heroCollectionPanelHtml("compact")}`);
  const grid = document.querySelector("#mission-grid");
  grid.replaceChildren(
    ...missions.map((mission) => {
      const unlocked = state.unlocked.has(mission.id);
      const card = el("article", `mission-card reveal ${unlocked ? "is-clear" : "is-locked-card"}`);
      card.style.setProperty("--accent", mission.accent);
      card.innerHTML = `
        ${characterSvg(mission.character, "mission-character", unlocked ? mission.heroName : "")}
        <div class="tag-row">
          <span class="tag status ${unlocked ? "clear" : ""}">${unlocked ? "解放済み" : "未挑戦"}</span>
          <span class="tag">${stars(mission.difficulty)}</span>
          <span class="tag">${escapeHtml(mission.category)}</span>
        </div>
        <h2>${unlocked ? escapeHtml(mission.heroName) : "???"}</h2>
        <p><strong>${escapeHtml(mission.companyName)}</strong></p>
        <p>${escapeHtml(mission.missionTitle)}</p>
        <p class="locked-copy">${unlocked ? escapeHtml(mission.heroDescription) : "通信ノイズで正体不明。このヒーローの記録はまだ復元されていない。"}</p>
        <a class="button primary" href="#mission/${mission.id}">${unlocked ? "企業紹介を見る" : "挑戦する"}</a>
      `;
      return card;
    })
  );
}

function renderMission(id) {
  const mission = findMission(id);
  if (!mission) return (location.hash = "#missions");
  renderTemplate("mission-template");
  const detail = document.querySelector("#mission-detail");
  const unlocked = state.unlocked.has(mission.id);
  const hintCount = getHintCount(mission.id);
  detail.innerHTML = `
    <aside class="mission-brief" style="--accent:${mission.accent}">
      <p class="eyebrow">MISSION / ${escapeHtml(mission.companyName)}</p>
      <h1>${escapeHtml(mission.missionTitle)}</h1>
      <p>${escapeHtml(mission.storyIntro)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(mission.category)}</span>
        <span class="tag">${stars(mission.difficulty)}</span>
        <span class="tag">ブース ${escapeHtml(mission.booth)}</span>
      </div>
      <a class="button secondary booth-link" href="#companies">ブースへ行く導線を見る</a>
    </aside>
    <article class="quiz-box ${unlocked ? "is-unlocked" : ""}" id="quiz-box">
      <p class="eyebrow dark">RESEARCH</p>
      <h2>${escapeHtml(mission.questionTitle)}</h2>
      <p>${escapeHtml(mission.questionLead)}</p>
      <p><strong>問題:</strong> ${escapeHtml(mission.questionBody)}</p>
      <form id="answer-form" data-id="${mission.id}">
        <label for="answer-input">ヒーロー解放コード</label>
        <input id="answer-input" name="answer" autocomplete="off" placeholder="答えを入力" />
        <div class="quiz-actions">
          <button class="button primary" type="submit" aria-label="回答する">回答する</button>
          <button class="button ghost" type="button" data-action="hint" data-id="${mission.id}" aria-label="ヒントを見る">ヒントを見る</button>
          ${missionWebsiteLinkHtml(mission)}
        </div>
      </form>
      <div class="hint-panel" id="hint-panel">${hintPanelHtml(mission, hintCount)}</div>
      <p class="answer-result ${unlocked ? "ok" : ""}" id="answer-result">${unlocked ? "通信接続済み。企業紹介が開いています。" : ""}</p>
    </article>
    <article class="company-profile ${unlocked ? "is-visible" : ""}" id="company-profile">
      ${companyProfileHtml(mission)}
    </article>
    <aside class="collection-panel mission-roster" id="mission-roster">
      ${heroCollectionHtml("mini")}
    </aside>
  `;
}

function hintPanelHtml(mission, count) {
  if (!count) return `<p class="hint-empty">ヒントはボタンを押すたびに1つずつ復元されます。ペナルティはありません。</p>`;
  return `
    <div class="hint-meter">HINT ${count}/${mission.hints.length}</div>
    ${mission.hints
      .slice(0, count)
      .map((hint, index) => `<p class="hint is-visible"><strong>${index + 1}.</strong> ${escapeHtml(hint)}</p>`)
      .join("")}
  `;
}

function renderCompanies() {
  renderTemplate("companies-template");
  const list = document.querySelector("#company-list");
  list.replaceChildren(
    ...missions.map((mission) => {
      const interested = state.interests.has(mission.id);
      const card = el("article", "company-card reveal");
      card.style.setProperty("--accent", mission.accent);
      card.innerHTML = `
        <div class="company-card-header">
          <span class="hero-badge">${escapeHtml(mission.companyName.slice(0, 1))}</span>
          <div>
            <h2>${escapeHtml(mission.companyName)}</h2>
            <p>${escapeHtml(mission.heroName)} / ${escapeHtml(mission.category)}</p>
          </div>
        </div>
        <div class="tag-row">
          <span class="tag">ブース ${escapeHtml(mission.booth)}</span>
          <span class="tag">${interested ? "気になる登録済み" : "未チェック"}</span>
        </div>
        <p>${escapeHtml(mission.companyIntro.catch)}。${escapeHtml(mission.companyIntro.work)}</p>
        <a class="button primary" href="#company/${mission.id}">企業紹介を見る</a>
      `;
      return card;
    })
  );
}

function renderCompany(id) {
  const mission = findMission(id);
  if (!mission) return (location.hash = "#companies");
  renderTemplate("company-template");
  document.querySelector("#company-detail").innerHTML = `
    <aside class="mission-brief" style="--accent:${mission.accent}">
      <p class="eyebrow">HERO PROFILE / BOOTH ${escapeHtml(mission.booth)}</p>
      <h1>${escapeHtml(mission.heroName)}</h1>
      <p>${escapeHtml(mission.companyName)}。${escapeHtml(mission.heroDescription)}</p>
      <div class="tag-row"><span class="tag">${escapeHtml(mission.category)}</span><span class="tag">${stars(mission.difficulty)}</span></div>
    </aside>
    <article class="company-profile is-visible">${companyProfileHtml(mission)}</article>
  `;
}

function companyProfileHtml(mission) {
  const interested = state.interests.has(mission.id);
  return `
    <p class="eyebrow dark">HERO PROFILE</p>
    <h2>${escapeHtml(mission.heroName)}</h2>
    <p><strong>${escapeHtml(mission.companyName)}</strong> / ${escapeHtml(mission.category)}</p>
    <dl class="company-profile-grid">
      <div><dt>このヒーローの力</dt><dd>${escapeHtml(mission.companyIntro.power)}</dd></div>
      <div><dt>実際の企業の仕事</dt><dd>${escapeHtml(mission.companyIntro.work)}</dd></div>
      <div><dt>街との関わり</dt><dd>${escapeHtml(mission.companyIntro.town)}</dd></div>
    </dl>
    <div class="booth-questions">
      <h3>ブースで聞いてみよう</h3>
      <ul>${mission.companyIntro.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    </div>
    <p class="unlock-line">${escapeHtml(mission.unlockMessage)}</p>
    <div class="interest-row">
      <button class="button ${interested ? "interested" : "primary"}" type="button" data-action="interest" data-id="${mission.id}" aria-label="${escapeAttribute(mission.companyName)}を気になる企業に登録">
        ${interested ? "気になる登録済み" : "気になる企業にする"}
      </button>
      <a class="button ghost" href="#missions">次のヒーローを探す</a>
      <a class="button ghost" href="#companies">企業一覧へ</a>
      ${missionWebsiteLinkHtml(mission)}
    </div>
  `;
}

function renderClear() {
  renderTemplate("clear-template");
  const completed = state.unlocked.size === missions.length;
  if (completed) {
    state.finalUnlocked = true;
    saveState();
  }
  document.querySelector("#clear-title").textContent = completed ? "ナゾゴラ撃退準備完了" : "ヒーローを全員集めよう";
  document.querySelector("#clear-copy").textContent = completed
    ? "6人の企業ヒーローが集結。函館のフィールドで最後の作戦を開始できます。"
    : `現在 ${state.unlocked.size} / ${missions.length}人。全ヒーロー収集後に解放されます。`;
  document.querySelector("#hero-collection").innerHTML = heroCollectionPanelHtml("full");
  renderFinalBattle(completed);
  const form = document.querySelector("#match-form");
  if (form) form.outerHTML = endingActionsHtml(completed);
}

function renderFinalBattle(completed) {
  const stage = document.querySelector("#battle-stage");
  const status = completed ? battleState.status : "locked";
  const activeStep = battleState.stepIndex >= 0 ? getBattleStep(battleState.stepIndex) : null;
  const active = activeStep?.mission;
  const hp = completed ? battleState.hp : 100;
  stage.innerHTML = `
    <section class="final-battle ${status === "victory" ? "is-victory" : ""} ${status === "locked" ? "is-locked" : ""}">
      <div class="final-battle-copy">
        <p class="eyebrow dark">FINAL BATTLE</p>
        <h2>${completed ? "6人の力を接続せよ" : "全ヒーロー収集後に解放されます"}</h2>
        <p>${battleMessage(status, activeStep)}</p>
      </div>
      <div class="battle-hp" aria-label="ナゾゴラHP ${hp}">
        <span>ナゾゴラ HP</span><strong>${hp}</strong><div><i style="width:${hp}%"></i></div>
      </div>
      <div class="battle-arena ${active ? active.attackClass : ""}" data-status="${status}">
        <div class="battle-effect" aria-hidden="true"></div>
        ${characterSvg("real-kaiju", "final-kaiju", "ナゾゴラ")}
        ${
          completed
            ? `<div class="final-heroes" aria-label="最終決戦のヒーロー">
                ${missions
                  .map((mission, index) => {
                    const unlocked = state.unlocked.has(mission.id);
                    const isActive = active?.id === mission.id;
                    const done = status === "victory" || battleState.stepIndex > index;
                    return `<span class="final-hero ${unlocked ? "is-unlocked" : "is-locked"} ${isActive ? "is-active" : ""} ${done ? "is-done" : ""}" style="--accent:${mission.accent}">${unlocked ? characterSvg(mission.character, "final-hero-character", mission.heroName) : ""}</span>`;
                  })
                  .join("")}
              </div>`
            : ""
        }
        <p class="battle-action-text">${activeStep?.text || (completed ? "最終決戦を開始する準備はできている。" : `現在 ${state.unlocked.size} / ${missions.length}人`)}</p>
      </div>
      ${status === "victory" ? endingStoryHtml() : ""}
      <div class="battle-controls">
        ${completed && status !== "playing" ? `<button class="button primary" type="button" data-action="${status === "victory" ? "replay-battle" : "start-battle"}">${status === "victory" ? "もう一度見る" : "最終決戦を開始する"}</button>` : ""}
        ${completed && status === "playing" ? `<button class="button ghost" type="button" data-action="skip-battle">演出をスキップ</button>` : ""}
        <a class="button ghost" href="#missions">企業一覧へ</a>
      </div>
    </section>
  `;
}

function endingStoryHtml() {
  return `
    <article class="ending-panel">
      <p class="eyebrow dark">HERO MATCH COMPLETE</p>
      <h2>街を救ったのは、見つけ出す力だった。</h2>
      <p>街を救ったのは、特別な誰かではなかった。普段は見えにくい場所で、函館の暮らしを支えている企業の力。そして、それを見つけ出した君たちの知恵だった。</p>
    </article>
  `;
}

function endingActionsHtml(completed) {
  return `
    <section class="ending-actions">
      <div class="section-heading">
        <p class="eyebrow dark">NEXT ACTION</p>
        <h2>${completed ? "次はブースへ" : "作戦を続けよう"}</h2>
      </div>
      <div class="interest-row">
        <a class="button primary" href="#companies">気になった企業を確認する</a>
        <a class="button ghost" href="#companies">ブースへ行く</a>
        <a class="button ghost" href="#home">もう一度遊ぶ</a>
        <button class="button ghost danger" type="button" data-action="reset">進行状況をリセット</button>
      </div>
    </section>
  `;
}

function getBattleStep(index) {
  if (index < missions.length) {
    const mission = missions[index];
    return {
      mission,
      hp: Math.max(12, 100 - Math.round(((index + 1) / missions.length) * 78)),
      text: `${mission.heroName}: ${mission.attackText}`
    };
  }
  const mission = findMission("toko");
  return {
    mission: { ...mission, attackClass: "attack-final" },
    hp: 0,
    text: "エナジーリンクが全員の力を接続。最後の一撃がナゾゴラを包み込む。"
  };
}

function battleMessage(status, activeStep) {
  if (status === "locked") return `現在 ${state.unlocked.size} / ${missions.length}人。未解放ヒーローの記録はシルエットのままです。`;
  if (status === "playing") return activeStep?.mission.attackName || "ヒーローの力が順番に発動している。";
  if (status === "victory") return "HERO MATCH COMPLETE。函館の街に、企業ヒーローの記憶が戻った。";
  return "スチール、回復、土台、港、流れ、接続。6つの力でナゾゴラに挑もう。";
}

function startFinalBattle() {
  battleState.status = "playing";
  battleState.stepIndex = 0;
  battleState.hp = 100;
  playBattleStep();
}

function playBattleStep() {
  const step = getBattleStep(battleState.stepIndex);
  battleState.hp = step.hp;
  renderFinalBattle(true);
  clearBattleTimer();
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 500 : 1500;
  battleState.timer = window.setTimeout(() => {
    if (battleState.stepIndex >= missions.length) return finishBattle();
    battleState.stepIndex += 1;
    playBattleStep();
  }, delay);
}

function finishBattle() {
  clearBattleTimer();
  battleState.status = "victory";
  battleState.stepIndex = missions.length;
  battleState.hp = 0;
  renderFinalBattle(true);
}

function clearBattleTimer() {
  if (!battleState.timer) return;
  window.clearTimeout(battleState.timer);
  battleState.timer = null;
}

function handleDocumentClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "hint") return revealHint(target.dataset.id);
  if (action === "interest") return toggleInterest(target.dataset.id);
  if (action === "reset") return resetProgress();
  if (action === "close-unlock") return closeHeroUnlock();
  if (action === "start-battle" || action === "replay-battle") return startFinalBattle();
  if (action === "skip-battle") return finishBattle();
  if (action === "edit-profile") {
    document.querySelector("#profile-view").innerHTML = registrationFormHtml(state.participant);
  }
  if (action === "delete-profile" && window.confirm("受付情報を削除しますか？進行状況は残ります。")) {
    state.participant = null;
    localStorage.removeItem(STORAGE_KEYS.participant);
    renderProfile();
  }
}

function handleSubmit(event) {
  if (event.target.id === "participant-form") {
    event.preventDefault();
    saveParticipant(new FormData(event.target));
    renderProfile();
  }
  if (event.target.id === "answer-form") {
    event.preventDefault();
    checkAnswer(event.target.dataset.id, new FormData(event.target).get("answer"));
  }
}

function revealHint(id) {
  const mission = findMission(id);
  if (!mission) return;
  state.hints[id] = Math.min(mission.hints.length, getHintCount(id) + 1);
  saveState();
  document.querySelector("#hint-panel").innerHTML = hintPanelHtml(mission, state.hints[id]);
}

function checkAnswer(id, rawAnswer) {
  const mission = findMission(id);
  const result = document.querySelector("#answer-result");
  const quizBox = document.querySelector("#quiz-box");
  const ok = mission.acceptedAnswers.some((answer) => normalize(answer) === normalize(rawAnswer));
  result.classList.toggle("ok", ok);
  result.classList.toggle("ng", !ok);
  if (!ok) {
    result.textContent = "通信がまだ安定しない……。企業のページにもう一つ手がかりがありそうだ。";
    return;
  }

  result.textContent = "通信解析中... 記憶エネルギー復元。";
  quizBox.classList.add("unlocking");
  window.setTimeout(() => {
    const wasUnlocked = state.unlocked.has(mission.id);
    state.unlocked.add(mission.id);
    state.recentUnlock = mission.id;
    saveState();
    document.querySelector("#company-profile").classList.add("is-visible");
    document.querySelector("#mission-roster").innerHTML = heroCollectionHtml("mini");
    renderFixedProgress();
    result.textContent = "HERO CALL SUCCESS。ヒーローの記憶エネルギーが復元されました。";
    if (!wasUnlocked) showHeroUnlock(mission);
  }, 650);
}

function showHeroUnlock(mission) {
  document.querySelector(".unlock-modal")?.remove();
  const modal = el("div", "unlock-modal");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="unlock-energy" aria-hidden="true"></div>
    <article class="unlock-card" style="--accent:${mission.accent}">
      <p class="eyebrow">HERO CALL SUCCESS</p>
      <div class="unlock-character">${characterSvg(mission.character, "unlock-character-svg", mission.heroName)}</div>
      <h2>${escapeHtml(mission.heroName)}が仲間になった</h2>
      <p>${escapeHtml(mission.heroDescription)}</p>
      <p class="unlock-line">${escapeHtml(mission.unlockMessage)}</p>
      <button class="button primary" type="button" data-action="close-unlock" aria-label="仲間に加える">仲間に加える</button>
      <a class="button ghost" href="#missions">次のヒーローを探す</a>
    </article>
  `;
  document.body.append(modal);
  modal.querySelector("button")?.focus();
}

function closeHeroUnlock() {
  const modal = document.querySelector(".unlock-modal");
  if (!modal) return;
  modal.classList.add("is-closing");
  window.setTimeout(() => modal.remove(), 260);
}

function saveParticipant(formData) {
  state.participant = {
    id: state.participant?.id || createParticipantId(),
    name: formData.get("name")?.toString().trim() || "ゲスト",
    grade: formData.get("grade")?.toString() || "未選択",
    interests: formData.getAll("interests").map(String),
    createdAt: state.participant?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEYS.participant, JSON.stringify(state.participant));
}

function resetProgress() {
  if (!window.confirm("進行状況をリセットしますか？ 解放したヒーロー情報もこの端末から削除されます。")) return;
  state.unlocked.clear();
  state.interests.clear();
  state.hints = {};
  state.finalUnlocked = false;
  state.recentUnlock = null;
  battleState.status = "ready";
  battleState.stepIndex = -1;
  battleState.hp = 100;
  clearBattleTimer();
  saveState();
  render();
}

function toggleInterest(id) {
  if (state.interests.has(id)) state.interests.delete(id);
  else state.interests.add(id);
  saveState();
  render();
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.unlocked, JSON.stringify([...state.unlocked]));
  localStorage.setItem(STORAGE_KEYS.interests, JSON.stringify([...state.interests]));
  localStorage.setItem(STORAGE_KEYS.hints, JSON.stringify(state.hints));
  localStorage.setItem(STORAGE_KEYS.final, JSON.stringify(state.finalUnlocked));
}

function heroCollectionPanelHtml(mode = "full") {
  const names = missions.filter((mission) => state.unlocked.has(mission.id)).map((mission) => mission.heroName);
  return `
    <section class="collection-panel ${mode === "compact" ? "is-compact" : ""}">
      <div class="section-heading">
        <p class="eyebrow dark">HERO COLLECTION</p>
        <h2>集めたヒーロー</h2>
        <p>${names.length ? names.map(escapeHtml).join("、") : "まだ企業ヒーローは眠っています。"}</p>
      </div>
      <div class="hero-collection-grid">${heroCollectionHtml(mode)}</div>
    </section>
  `;
}

function heroCollectionHtml(mode = "full") {
  return missions
    .map((mission) => {
      const unlocked = state.unlocked.has(mission.id);
      return `
        <article class="hero-slot ${unlocked ? "is-unlocked" : "is-locked"} ${state.recentUnlock === mission.id ? "is-new" : ""}" style="--accent:${mission.accent}">
          <div class="hero-slot-visual">${unlocked ? characterSvg(mission.character, "hero-slot-character", mission.heroName) : `<span class="hero-slot-lock">?</span>`}</div>
          <div class="hero-slot-body">
            <span class="tag status ${unlocked ? "clear" : ""}">${unlocked ? "仲間" : "未解放"}</span>
            <h3>${unlocked ? escapeHtml(mission.heroName) : "???"}</h3>
            <p>${unlocked ? escapeHtml(mission.companyName) : "記憶エネルギー不足"}</p>
            ${mode === "mini" ? "" : `<small>${unlocked ? escapeHtml(mission.role) : "このヒーローの記録はまだ復元されていない"}</small>`}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFixedProgress() {
  document.querySelector(".fixed-progress")?.remove();
  const bar = el("aside", "fixed-progress");
  bar.setAttribute("aria-label", "進行状況");
  bar.innerHTML = `<strong>${state.unlocked.size} / ${missions.length} clear</strong><span>${missions.filter((mission) => state.unlocked.has(mission.id)).map((mission) => mission.heroName).join("、") || "企業ヒーロー探索中"}</span>`;
  document.body.append(bar);
}

function memberNoticeHtml() {
  return state.participant
    ? `<aside class="member-notice"><strong>${escapeHtml(state.participant.name)} さんで参加中</strong><span>受付番号 ${escapeHtml(state.participant.id)}</span><a href="#profile">マイページ</a></aside>`
    : `<aside class="member-notice"><strong>参加受付をすると進行状況を確認しやすくなります</strong><span>この端末だけに保存されます</span><a href="#profile">受付する</a></aside>`;
}

function findMission(id) {
  return missions.find((mission) => mission.id === id);
}

function getHintCount(id) {
  return Number(state.hints[id] || 0);
}

function missionWebsiteLinkHtml(mission) {
  if (!mission.website || mission.website === "https://example.com") return "";
  return `<a class="button ghost" href="${escapeAttribute(mission.website)}" target="_blank" rel="noreferrer">企業HPを見る</a>`;
}

function stars(difficulty) {
  return `${"★".repeat(difficulty)}${"☆".repeat(3 - difficulty)}`;
}

function characterSvg(id, className = "character-icon", label = "") {
  const asset = characterAssets[id];
  if (asset) {
    const alt = label || asset.alt || "";
    const hidden = alt ? "" : ' aria-hidden="true"';
    return `<img class="${className} character-art" src="${escapeAttribute(asset.src)}" width="${asset.width}" height="${asset.height}" alt="${escapeAttribute(alt)}"${hidden} loading="lazy" decoding="async" />`;
  }
  const aria = label ? `aria-label="${escapeAttribute(label)}"` : `aria-hidden="true"`;
  return `<svg class="${className}" viewBox="0 0 220 300" ${aria} focusable="false"><use href="#${id}"></use></svg>`;
}

function createParticipantId() {
  const date = new Date();
  return `FC-${date.getMonth() + 1}${date.getDate()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[！-～]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function setCurrentNav(name) {
  const group = name === "mission" ? "missions" : name === "company" ? "companies" : name === "story-call" ? "story" : name;
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
