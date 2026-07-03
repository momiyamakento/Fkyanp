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
    difficulty: 3,
    booth: "B-1",
    accent: "#e95b3c",
    website: "http://www.syoudai.jp/",
    recruitUrl: "http://www.syoudai.jp/recruit.php",
    missionTitle: "鉄骨ロック解除コード",
    storyIntro:
      "強固な鉄の骨組みを操り、街の巨大な建物を支えるヒーロー「ショウダイ」の拠点にたどり着いた。ロック解除コードを得るには、翔大鋼業のホームページと暗号の骨組みを順番に解析する必要がある。",
    questionTitle: "暗号の骨組み",
    questionLead: "翔大鋼業の仕事を調べ、骨組み表に言葉を入れて最終コードを復元しよう。",
    questionBody: "鉄筋工事の手がかりから暗号表を完成させ、①から⑦を順番に読もう。",
    acceptedAnswers: ["技術力", "ぎじゅつりょく", "ギジュツリョク"],
    hints: [
      "相方から追加通信が届いた。まずは企業HPで、どんな工事を得意としているか探そう。",
      "ヒーローの記憶が少し復元された。鉄筋工事という言葉が手がかりになる。",
      "企業HPのこのあたりを見てみよう。職人の腕前や品質を表す言葉が、起動コードに近い。"
    ],
    steps: [
      {
        title: "第1問 得意技を探せ",
        lead:
          "まずは翔大鋼業のホームページを調査せよ。街の建物を頑丈に支えるために行っている、工事の名前が最初のコードになる。",
        body: "漢字2文字の得意技を見つけよう。【 〇〇工事 】",
        acceptedAnswers: ["鉄筋", "鉄筋工事", "てっきん", "てっきんこうじ", "テッキン", "テッキンコウジ"],
        hints: [
          "企業HPで、翔大鋼業が得意としている工事名を探そう。",
          "建物の頑丈な骨組みを創り出す仕事だ。",
          "【〇〇工事】の〇〇は、鉄と筋でできた言葉。"
        ],
        clearMessage: "鉄筋工事を確認。暗号の骨組みが開いた。",
        puzzleType: "shodai-trade"
      },
      {
        title: "第2問 暗号の骨組み",
        lead: "鉄筋工事とは、建物の頑丈な骨組みを創り出す仕事だ。5つの答えを骨組み表に入れ、①から⑦を順番に読もう。",
        body: "1から5の言葉を入れて、翔大鋼業自慢の安心安全の力を答えよう。",
        acceptedAnswers: ["技術力", "ぎじゅつりょく", "ギジュツリョク"],
        hints: [
          "5つの答えは、キュウリ、ギンコウ、コック、コウツウ、ジョーカー。",
          "中央の縦列には「テッキンコウジ」が入っている。",
          "①②③④⑤⑥⑦を順番に読むと、翔大鋼業がお客さんのニーズに応える力になる。"
        ],
        puzzleType: "steel-grid"
      }
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
    id: "morikawa",
    companyName: "森川組",
    heroName: "シティビルダー",
    allyName: "シティビルダー",
    character: "real-city",
    role: "土木・建築・土台の力",
    category: "建設・まちづくり",
    industry: "総合建設",
    difficulty: 3,
    booth: "C-1",
    accent: "#22a65a",
    website: "http://morikawagumi.com/",
    recruitUrl: "http://morikawagumi.com/recruit/requirements/",
    missionTitle: "封印されたグランドマスター",
    storyIntro:
      "次に必要なのは、函館の地盤を支えるグランドマスター。しかし、このヒーローだけは名前も力も封印されている。ヘルメットとエンブレムの記憶をたどり、森川組の力を取り戻せ。",
    questionTitle: "封印解除の鍵",
    questionLead: "企業名を思い出しただけでは力は戻らない。公式サイトの言葉と図形暗号を使って、封印の鍵を復元しよう。",
    questionBody: "図形が表す文字を読み、森川組の社訓にある封印の鍵を答えよう。",
    acceptedAnswers: ["Mの創発", "mの創発", "エムの創発", "えむのそうはつ", "Mのそうはつ", "DRB", "drb", "ディーアールビー"],
    hints: [
      "相方から追加通信が届いた。まずはヘルメットとエンブレムから企業名を思い出そう。",
      "ヒーローの記憶が少し復元された。森川組の公式サイトで社訓を探そう。",
      "和同開珎のように、同じ図形に入る共通の文字を考えよう。"
    ],
    steps: [
      {
        title: "第1問 失われた名前",
        lead: "右のヘルメットで身を守り、左のエンブレムのもと活動していた函館のヒーローがいる。",
        body: "函館のグランドマスターである企業名を答えよう。",
        acceptedAnswers: ["森川組", "もりかわぐみ", "モリカワグミ", "morikawagumi", "morikawa"],
        hints: [
          "白い現場ヘルメットと青緑のエンブレムが手がかりだ。",
          "総合建設の会社で、函館の街づくりに関わっている。",
          "会社名は漢字3文字。森、川、組。"
        ],
        clearMessage: "森川組の名前を思い出した。だが封印された力は、まだ戻っていない。",
        puzzleType: "morikawa-identity"
      },
      {
        title: "第2問 封印解除の鍵",
        lead: "一つ目のヒントで得た企業の公式サイトを見ながら、図形に入る文字を完成させよう。",
        body: "赤い四角、青い丸、黄色い三角が表す文字をつなげ、森川組の封印の鍵を答えよう。",
        acceptedAnswers: ["Mの創発", "mの創発", "エムの創発", "えむのそうはつ", "Mのそうはつ", "DRB", "drb", "ディーアールビー"],
        hints: [
          "赤い四角は「RECRUIT □OVIE」に入る文字を表す。",
          "青い丸は森川組の社訓の中にある漢字を探そう。",
          "黄色い三角は、出△、△進、△見、△表に共通して入る漢字だ。"
        ],
        puzzleType: "morikawa-seal"
      }
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
    recruitUrl: "https://www.hakodate-dock.co.jp/recruit/",
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
    recruitUrl: "https://taimei-kk.jbplt.jp",
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
    recruitUrl: "https://tokoai.com/recruit.html",
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
  steps: "fcan.steps",
  final: "fcan.finalUnlocked"
};

const state = {
  participant: readJson(STORAGE_KEYS.participant, null),
  unlocked: new Set(readJson(STORAGE_KEYS.unlocked, [])),
  interests: new Set(readJson(STORAGE_KEYS.interests, [])),
  hints: readJson(STORAGE_KEYS.hints, {}),
  steps: readJson(STORAGE_KEYS.steps, {}),
  finalUnlocked: readJson(STORAGE_KEYS.final, false),
  recentUnlock: null
};

sanitizeState();

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

  const followed = missions.filter((mission) => state.interests.has(mission.id));
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
        <h3>フォローした会社</h3>
        <p>${followed.length ? followed.map((mission) => escapeHtml(mission.companyName)).join("、") : "まだありません"}</p>
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
  const fields = ["建設", "造船・港", "ものづくり", "電気・情報", "まちづくり", "まだ決まっていない"];
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
      const { steps, stepIndex } = getActiveMissionStep(mission);
      const inProgress = !unlocked && stepIndex > 0;
      const statusLabel = unlocked ? "解放済み" : inProgress ? `STEP ${stepIndex + 1}/${steps.length}` : "未挑戦";
      const buttonLabel = unlocked ? "企業紹介を見る" : inProgress ? "続きを解く" : "挑戦する";
      const card = el("article", `mission-card reveal ${unlocked ? "is-clear" : "is-locked-card"}`);
      card.style.setProperty("--accent", mission.accent);
      card.innerHTML = `
        ${characterSvg(mission.character, "mission-character", unlocked ? mission.heroName : "")}
        <div class="tag-row">
          <span class="tag status ${unlocked ? "clear" : inProgress ? "progress" : ""}">${statusLabel}</span>
          <span class="tag">${stars(mission.difficulty)}</span>
          <span class="tag">${escapeHtml(mission.category)}</span>
        </div>
        <h2>${unlocked ? escapeHtml(mission.heroName) : "???"}</h2>
        <p><strong>${escapeHtml(mission.companyName)}</strong></p>
        <p>${escapeHtml(mission.missionTitle)}</p>
        <p class="locked-copy">${unlocked ? escapeHtml(mission.heroDescription) : "通信ノイズで正体不明。このヒーローの記録はまだ復元されていない。"}</p>
        <a class="button primary" href="#mission/${mission.id}">${buttonLabel}</a>
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
  const { steps, step, stepIndex } = getActiveMissionStep(mission);
  const hintCount = getHintCount(mission.id, stepIndex);
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
    <article class="quiz-box mission-${escapeAttribute(mission.id)} ${unlocked ? "is-unlocked" : ""}" id="quiz-box" style="--accent:${mission.accent}">
      <p class="eyebrow dark">QUESTION ${stepIndex + 1} / ${steps.length}</p>
      ${questProgressHtml(steps.length, stepIndex, unlocked)}
      <h2>${escapeHtml(step.title)}</h2>
      <p>${escapeHtml(step.lead)}</p>
      ${puzzleHtml(step)}
      <p><strong>問題:</strong> ${escapeHtml(step.body)}</p>
      <form id="answer-form" data-id="${mission.id}">
        <label for="answer-input">ヒーロー解放コード</label>
        <input id="answer-input" name="answer" autocomplete="off" placeholder="答えを入力" />
        <div class="quiz-actions">
          <button class="button primary" type="submit" aria-label="回答する">回答する</button>
          <button class="button ghost" type="button" data-action="hint" data-id="${mission.id}" aria-label="ヒントを見る">ヒントを見る</button>
          ${missionWebsiteLinkHtml(mission)}
        </div>
      </form>
      <div class="hint-panel" id="hint-panel">${hintPanelHtml(step, hintCount)}</div>
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

function hintPanelHtml(step, count) {
  const hints = step.hints || [];
  if (!count) return `<p class="hint-empty">ヒントはボタンを押すたびに1つずつ復元されます。ペナルティはありません。</p>`;
  return `
    <div class="hint-meter">HINT ${count}/${hints.length}</div>
    ${hints
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
      const followed = state.interests.has(mission.id);
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
          <span class="tag">${followed ? "フォロー中" : "未フォロー"}</span>
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
  const followed = state.interests.has(mission.id);
  renderTemplate("company-template");
  document.querySelector("#company-detail").innerHTML = `
    <aside class="mission-brief" style="--accent:${mission.accent}">
      <p class="eyebrow">HERO PROFILE / BOOTH ${escapeHtml(mission.booth)}</p>
      <h1>${escapeHtml(mission.heroName)}</h1>
      <p>${escapeHtml(mission.companyName)}。${escapeHtml(mission.heroDescription)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(mission.category)}</span>
        <span class="tag">${stars(mission.difficulty)}</span>
        <span class="tag follow-status ${followed ? "is-followed" : ""}">${followed ? "フォロー中" : "未フォロー"}</span>
      </div>
    </aside>
    <article class="company-profile is-visible">${companyProfileHtml(mission)}</article>
  `;
}

function companyProfileHtml(mission) {
  const followed = state.interests.has(mission.id);
  return `
    <p class="eyebrow dark">HERO PROFILE</p>
    <div class="company-follow-state ${followed ? "is-followed" : ""}" aria-label="${escapeAttribute(mission.companyName)}のフォロー状態">
      <span>${followed ? "フォロー中" : "未フォロー"}</span>
      <small>${followed ? "マイページに保存されています" : "エントリーではなく、この端末に保存されます"}</small>
    </div>
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
    <div class="follow-panel">
      <div>
        <p class="eyebrow dark">FOLLOW COMPANY</p>
        <h3>${escapeHtml(mission.companyName)}をフォローする</h3>
        <p>あとで見返したり、会場で話を聞きに行く会社としてこの端末に保存します。</p>
      </div>
      <div class="interest-row follow-actions">
        <button class="button ${followed ? "interested" : "primary"}" type="button" data-action="interest" data-id="${mission.id}" aria-label="${escapeAttribute(mission.companyName)}をフォロー">
          ${followed ? "フォロー中" : "会社をフォローする"}
        </button>
        ${recruitmentLinkHtml(mission)}
      </div>
    </div>
    <div class="interest-row">
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
    ? "5人の企業ヒーローが集結。函館のフィールドで最後の作戦を開始できます。"
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
  const activeIndex = active ? missions.findIndex((mission) => mission.id === active.id) : -1;
  const finalStrike = status === "playing" && battleState.stepIndex >= missions.length;
  const hp = completed ? battleState.hp : 100;
  stage.innerHTML = `
    <section class="final-battle cinematic-battle ${status === "victory" ? "is-victory" : ""} ${status === "locked" ? "is-locked" : ""} ${status === "playing" ? "is-playing" : ""} ${finalStrike ? "is-final-strike" : ""}">
      <div class="final-battle-copy">
        <p class="eyebrow dark">FINAL BATTLE</p>
        <h2>${completed ? "5人の力を接続せよ" : "全ヒーロー収集後に解放されます"}</h2>
        <p>${battleMessage(status, activeStep)}</p>
      </div>
      <div class="battle-hp" aria-label="ナゾゴラHP ${hp}">
        <span>ナゾゴラ HP</span><strong>${hp}</strong><div><i style="width:${hp}%"></i></div>
      </div>
      <div class="battle-arena ${active ? active.attackClass : ""}" data-status="${status}">
        <div class="battle-bg" aria-hidden="true"></div>
        <div class="battle-speed-lines" aria-hidden="true"></div>
        <div class="battle-shockwave" aria-hidden="true"></div>
        <div class="battle-effect" aria-hidden="true"></div>
        ${
          active && status === "playing"
            ? `<div class="motion-hero" style="--accent:${active.accent}; --active-index:${Math.max(activeIndex, 0)}" aria-hidden="true">
                <span class="motion-ghost one">${characterSvg(active.character, "motion-hero-character", "")}</span>
                <span class="motion-ghost two">${characterSvg(active.character, "motion-hero-character", "")}</span>
                ${characterSvg(active.character, "motion-hero-character", active.heroName)}
              </div>`
            : ""
        }
        ${
          status === "playing"
            ? `<div class="combo-beams" aria-hidden="true">
                ${missions.map((mission, index) => `<span style="--accent:${mission.accent}; --i:${index}"></span>`).join("")}
              </div>`
            : ""
        }
        <div class="impact-flash" aria-hidden="true"></div>
        ${
          active && status === "playing"
            ? `<div class="active-hero-cutin" style="--accent:${active.accent}" aria-label="${escapeAttribute(active.heroName)}の攻撃">
                <span>ATTACK ${String(activeIndex + 1).padStart(2, "0")}</span>
                ${characterSvg(active.character, "active-hero-character", active.heroName)}
                <strong>${escapeHtml(active.attackName)}</strong>
              </div>`
            : ""
        }
        ${characterSvg("real-kaiju", "final-kaiju", "ナゾゴラ")}
        ${
          completed
            ? `<div class="final-heroes" aria-label="最終決戦のヒーロー">
                ${missions
                  .map((mission, index) => {
                    const unlocked = state.unlocked.has(mission.id);
                    const isActive = active?.id === mission.id;
                    const done = status === "victory" || battleState.stepIndex > index;
                    return `<span class="final-hero ${unlocked ? "is-unlocked" : "is-locked"} ${isActive ? "is-active" : ""} ${done ? "is-done" : ""}" style="--accent:${mission.accent}; --i:${index}">${unlocked ? characterSvg(mission.character, "final-hero-character", mission.heroName) : ""}</span>`;
                  })
                  .join("")}
              </div>`
            : ""
        }
        ${status === "victory" ? `<div class="victory-burst" aria-hidden="true"><span>HERO MATCH COMPLETE</span></div>` : ""}
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
        <a class="button primary" href="#companies">フォローした会社を確認する</a>
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
  return "スチール、土台、港、流れ、接続。5つの力でナゾゴラに挑もう。";
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
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 800 : 2700;
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
  if (action === "follow-company") return followCompany(target);
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
  const { step, stepIndex } = getActiveMissionStep(mission);
  const hintKey = getHintKey(id, stepIndex);
  state.hints[hintKey] = Math.min((step.hints || []).length, getHintCount(id, stepIndex) + 1);
  saveState();
  document.querySelector("#hint-panel").innerHTML = hintPanelHtml(step, state.hints[hintKey]);
}

function checkAnswer(id, rawAnswer) {
  const mission = findMission(id);
  if (!mission) return;
  const { steps, step, stepIndex } = getActiveMissionStep(mission);
  const result = document.querySelector("#answer-result");
  const quizBox = document.querySelector("#quiz-box");
  const ok = (step.acceptedAnswers || []).some((answer) => normalize(answer) === normalize(rawAnswer));
  result.classList.toggle("ok", ok);
  result.classList.toggle("ng", !ok);
  if (!ok) {
    result.textContent = "通信がまだ安定しない……。企業のページにもう一つ手がかりがありそうだ。";
    return;
  }

  if (stepIndex < steps.length - 1) {
    result.textContent = step.clearMessage || "正解。次の問題のロックを解除します。";
    quizBox.classList.add("unlocking");
    window.setTimeout(() => {
      state.steps[mission.id] = stepIndex + 1;
      saveState();
      renderMission(mission.id);
    }, 650);
    return;
  }

  result.textContent = "通信解析中... 記憶エネルギー復元。";
  quizBox.classList.add("unlocking");
  window.setTimeout(() => {
    const wasUnlocked = state.unlocked.has(mission.id);
    state.unlocked.add(mission.id);
    state.steps[mission.id] = steps.length;
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
      <div class="unlock-cinematic" aria-hidden="true">
        <div class="unlock-speed-lines"></div>
        <div class="unlock-burst"></div>
        <p class="unlock-call-sign">HERO ENTRY</p>
        <div class="unlock-character">${characterSvg(mission.character, "unlock-character-svg", mission.heroName)}</div>
        <span class="unlock-name-plate">${escapeHtml(mission.heroName)}</span>
      </div>
      <div class="unlock-result">
        <p class="eyebrow">HERO CALL SUCCESS</p>
        <h2>${escapeHtml(mission.heroName)}が仲間になった</h2>
        <p>${escapeHtml(mission.heroDescription)}</p>
        <p class="unlock-line">${escapeHtml(mission.unlockMessage)}</p>
        <p class="unlock-follow-copy">${escapeHtml(mission.companyName)}をフォローすると、あとで見返したりブースで話を聞く候補として保存できます。</p>
        <div class="unlock-next-actions">
          <button class="button primary" type="button" data-action="follow-company" data-id="${mission.id}" aria-label="${escapeAttribute(mission.companyName)}をフォロー">会社をフォローする</button>
          ${recruitmentLinkHtml(mission)}
        </div>
        <a class="button ghost" href="#missions" data-action="close-unlock">次のヒーローを探す</a>
      </div>
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
  state.steps = {};
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

function followCompany(target) {
  const id = target.dataset.id;
  const mission = findMission(id);
  if (!mission) return;
  state.interests.add(id);
  saveState();
  target.classList.remove("primary");
  target.classList.add("interested");
  target.textContent = "フォロー中";
  target.setAttribute("aria-label", `${mission.companyName}をフォロー中`);
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.unlocked, JSON.stringify([...state.unlocked]));
  localStorage.setItem(STORAGE_KEYS.interests, JSON.stringify([...state.interests]));
  localStorage.setItem(STORAGE_KEYS.hints, JSON.stringify(state.hints));
  localStorage.setItem(STORAGE_KEYS.steps, JSON.stringify(state.steps));
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
          <div class="hero-slot-visual">
            ${
              unlocked
                ? characterSvg(mission.character, "hero-slot-character", mission.heroName)
                : `${characterSvg(mission.character, "hero-slot-character is-locked-character", "")}<span class="hero-slot-lock">?</span>`
            }
          </div>
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

function questProgressHtml(total, currentIndex, unlocked) {
  if (total <= 1) return "";
  return `
    <div class="quest-progress" aria-label="問題進行 ${currentIndex + 1} / ${total}">
      ${Array.from({ length: total }, (_, index) => {
        const complete = unlocked || index < currentIndex;
        const current = !unlocked && index === currentIndex;
        return `<span class="${complete ? "is-complete" : ""} ${current ? "is-current" : ""}">${index + 1}</span>`;
      }).join("")}
    </div>
  `;
}

function puzzleHtml(step) {
  if (step.puzzleType === "shodai-trade") {
    return `
      <div class="puzzle-panel steel-research">
        <div class="blueprint-title"><span></span><strong>SYODAI STEEL SEARCH</strong><span></span></div>
        <p>ホームページ調査コード</p>
        <div class="trade-code" aria-label="丸に入る漢字2文字を答える問題">
          <span>〇</span><span>〇</span><strong>工事</strong>
        </div>
      </div>
    `;
  }

  if (step.puzzleType === "steel-grid") {
    const rows = [
      ["1", "", "キ", "③", "", "⑤", "", ""],
      ["2", "①", "ン", "", "", "", "", ""],
      ["3", "", "コ", "", "⑦", "", "", ""],
      ["4", "④", "ウ", "", "", "", "", ""],
      ["5", "", "②ジ", "⑥", "", "", "", ""]
    ];
    return `
      <div class="puzzle-panel steel-grid-panel">
        <div class="steel-grid-guide">
          <p>縦の骨組み</p>
          <strong>テッキンコウジ</strong>
        </div>
        <ol class="clue-list">
          <li>夏に食べたくなるウリ科の野菜</li>
          <li>お金を預けたり引き出したりできる金融機関</li>
          <li>料理を作る人</li>
          <li>人や車が道を通ること</li>
          <li>トランプのババになるもの</li>
        </ol>
        <div class="steel-crossword" aria-label="鉄筋工事の骨組み暗号表">
          ${rows
            .map(
              (row) => `
                <div class="steel-row">
                  <b>${row[0]}→</b>
                  ${row.slice(1).map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")}
                </div>
              `
            )
            .join("")}
        </div>
        <div class="answer-runes" aria-hidden="true">①②③④⑤⑥⑦</div>
      </div>
    `;
  }

  if (step.puzzleType === "morikawa-identity") {
    return `
      <div class="puzzle-panel morikawa-identity">
        <div class="identity-visuals" aria-hidden="true">
          <svg class="morikawa-emblem" viewBox="0 0 190 140" focusable="false">
            <polygon class="emblem-side" points="24,36 75,5 75,75 24,108" />
            <polygon class="emblem-side right" points="166,36 115,5 115,75 166,108" />
            <polygon class="emblem-base" points="75,75 115,75 166,108 24,108" />
            <polygon class="emblem-center" points="75,5 115,5 115,86 75,86" />
            <polygon class="emblem-shine" points="75,5 115,5 115,45 75,45" />
          </svg>
          <svg class="helmet-clue" viewBox="0 0 190 130" focusable="false">
            <path class="helmet-brim" d="M26 75c0 17 17 23 62 23h46c17 0 30-13 30-30V54c0-31-34-45-73-45S26 28 26 58v17z" />
            <path class="helmet-cap" d="M28 67c16 8 44 11 78 11h31c16 0 27-6 27-19 0-28-34-50-73-50S26 32 26 58c0 3 1 6 2 9z" />
            <path class="helmet-neck" d="M103 74v13c0 21 13 34 34 34s33-13 33-34V58" />
            <circle class="helmet-mark" cx="127" cy="63" r="12" />
          </svg>
        </div>
        <p>右のヘルメットで身を守り、左のエンブレムのもと活動していた函館のヒーロー。</p>
      </div>
    `;
  }

  if (step.puzzleType === "morikawa-seal") {
    return `
      <div class="puzzle-panel morikawa-seal">
        <div class="shape-expression" aria-label="赤い四角 の 青い丸 黄色い三角">
          <span class="shape square red"></span>
          <strong>の</strong>
          <span class="shape circle blue"></span>
          <span class="shape triangle yellow"></span>
        </div>
        <div class="seal-hints">
          <p><span class="shape square red"></span> RECRUIT □OVIE</p>
          <p><span class="shape circle blue"></span> 公式サイトの社訓から探せ</p>
        </div>
        <div class="kanji-cross" aria-label="黄色い三角に入る共通の漢字を探す問題">
          <span>出△ → しゅっ〇〇</span>
          <span>△進 → 〇〇しん</span>
          <span>△見 → 〇〇けん</span>
          <span>△表 → 〇〇ぴょう</span>
        </div>
      </div>
    `;
  }

  return "";
}

function getMissionSteps(mission) {
  if (Array.isArray(mission.steps) && mission.steps.length) return mission.steps;
  return [
    {
      title: mission.questionTitle,
      lead: mission.questionLead,
      body: mission.questionBody,
      acceptedAnswers: mission.acceptedAnswers,
      hints: mission.hints
    }
  ];
}

function getActiveMissionStep(mission) {
  const steps = getMissionSteps(mission);
  const savedIndex = Number(state.steps[mission.id] || 0);
  const stepIndex = state.unlocked.has(mission.id) ? steps.length - 1 : Math.min(Math.max(savedIndex, 0), steps.length - 1);
  return { steps, step: steps[stepIndex], stepIndex };
}

function findMission(id) {
  return missions.find((mission) => mission.id === id);
}

function getHintKey(id, stepIndex) {
  return `${id}:${stepIndex}`;
}

function getHintCount(id, stepIndex) {
  return Number(state.hints[getHintKey(id, stepIndex)] || 0);
}

function sanitizeState() {
  const ids = new Set(missions.map((mission) => mission.id));
  state.unlocked = new Set([...state.unlocked].filter((id) => ids.has(id)));
  state.interests = new Set([...state.interests].filter((id) => ids.has(id)));
  state.steps = Object.fromEntries(
    Object.entries(state.steps || {})
      .filter(([id]) => ids.has(id))
      .map(([id, index]) => {
        const mission = findMission(id);
        return [id, Math.min(Math.max(Number(index) || 0, 0), getMissionSteps(mission).length)];
      })
  );
  state.hints = Object.fromEntries(
    Object.entries(state.hints || {}).filter(([key]) => ids.has(key.split(":")[0]))
  );
  saveState();
}

function missionWebsiteLinkHtml(mission) {
  if (!mission.website || mission.website === "https://example.com") return "";
  return `<a class="button ghost" href="${escapeAttribute(mission.website)}" target="_blank" rel="noreferrer">企業HPを見る</a>`;
}

function recruitmentLinkHtml(mission) {
  if (!mission.recruitUrl) return "";
  return `<a class="button ghost" href="${escapeAttribute(mission.recruitUrl)}" target="_blank" rel="noreferrer">採用情報を見る</a>`;
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
