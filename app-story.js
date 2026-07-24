import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, serverTimestamp, setDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

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
    unlockVideo: {
      src: "assets/videos/shodai-join-demo.mp4",
      poster: "assets/videos/shodai-join-demo-poster.jpg"
    },
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
        dialogue: {
          speaker: "ナビゲーター",
          text: "よくここまで辿り着いた。ここは強固な鉄の骨組みを操り、街の巨大な建物を支えるヒーロー「ショウダイ」の拠点だ。奴を仲間にするためのロック解除コードを手に入れるため、まずは君たちのスマホで翔大鋼業のホームページを調査せよ！"
        },
        lead:
          "翔大鋼業のホームページを調査し、函館の街の建物を頑丈に支えるために行っている、漢字2文字の得意技（工事の名前）を見つけ出せ！",
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
        clearMessage: "なるほど、暗号は翔大鋼業自慢の、安心安全の「技術力」だったのか！ 建物の倒壊警報を受信。小ボス戦へ移行する。",
        puzzleType: "steel-grid"
      },
      {
        title: "小ボス戦 崩落ロックを解除せよ",
        transition: {
          speaker: "ナビゲーター",
          text: "なるほど、暗号は翔大鋼業自慢の、安心安全の「技術力」だったのか！"
        },
        dialogue: {
          speaker: "ナビゲーター",
          tone: "alert",
          text: "あぶない！ 建物が倒れてくる！ 謎を解いてショウダイのパワーで建物の内側の鉄筋を建て直してくれ！"
        },
        lead: "曜日を漢字に直し、その画数が多角形の辺の数を表すと考えよう。金曜日に対応する形を復元せよ。",
        body: "sunからsatまでの並びで「？」に入る形を答えよう。【 金の○角形 】",
        acceptedAnswers: ["金の8角形", "金の８角形", "金の八角形", "8角形", "８角形", "八角形", "きんの8かくけい", "きんのはちかくけい"],
        hints: [
          "曜日を漢字にして、画数を数えてみよう。",
          "日・月・火・水・木は4画なので四角、土は3画なので三角です。",
          "金は8画。答えは「金の8角形」。"
        ],
        clearMessage: "金の8角形を入力。ショウダイが鉄筋を再構築し、建物は持ちこたえた！",
        puzzleType: "shodai-miniboss"
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
        dialogue: {
          speaker: "ナビゲーター",
          text: "次に思い出すヒーローのカギになるのが上の2つだ！ ヘルメットで身を守り、エンブレムのもと活動していた函館のヒーローだ。函館のグランドマスターである彼がいれば、怪獣の動きを止めるのもたやすい。早急に思い出してくれ！"
        },
        lead: "左のヘルメットで身を守り、右のエンブレムのもと活動していた函館のヒーローがいる。",
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
        transition: {
          speaker: "ナビゲーター",
          text: "そう！ 函館のグランドマスターは森川組だ。だが名前を思い出しただけでは、封印された力を取り戻せない。下の問題を解き、何とか森川組の力を取り戻してくれ。"
        },
        lead: "一つ目のヒントで得た企業の公式サイトを見ながら、下の言葉を完成させよう。色は同じ図形を区別するためのものだ。",
        body: "赤い四角、青い丸、黄色い三角が表す文字をつなげ、森川組の封印の鍵を答えよう。",
        acceptedAnswers: ["Mの創発", "mの創発", "エムの創発", "えむのそうはつ", "Mのそうはつ", "DRB", "drb", "ディーアールビー"],
        hints: [
          "赤い四角は「RECRUIT □OVIE」に入る文字を表す。",
          "青い丸は森川組の社訓の中にある漢字を探そう。",
          "黄色い三角は、出△、△進、△見、△表に共通して入る漢字だ。"
        ],
        clearMessage: "ありがとう。封印の鍵は「Mの創発」だったのか！ リズミックパワーを復元し、救助信号へ向かう。",
        puzzleType: "morikawa-seal"
      },
      {
        title: "小ボス戦 市民を救え",
        transition: {
          speaker: "シティビルダー",
          text: "ありがとう。封印の鍵は「Mの創発」だったのか。森川組は全宇宙の時空により得るエネルギーによって、リズミックパワーが「生成―形成―増幅」へと進化し、自然界とのダイナミックバランス（動的安定）を保有する。この力こそが、森川組がグランドマスターである理由だ。これで怪獣の足止めができる。"
        },
        dialogue: {
          speaker: "ナビゲーター",
          tone: "alert",
          text: "おっと、あそこに函館の市民が倒れているぞ！ 謎を解くことで力を解放し、助けてくれ！"
        },
        lead: "サッカー用語を「ある」と「なし」に分けた法則を読み取り、救助プロトコルを起動せよ。",
        body: "エフ・キャンは「ある」「なし」のどちらに入るか答えよう。",
        acceptedAnswers: ["ある", "有る", "あり", "有", "あるのほう"],
        hints: [
          "「ある」側のサッカー用語を、カッコ内のカタカナまで声に出してみよう。",
          "「ある」側にはフォ・フィ・フリ・フがあり、「なし」側のDFはフェです。",
          "答えは「ある」。"
        ],
        clearMessage: "救助完了！ 森川組が災害発生時に現場事務所周辺の住民を支援する力で、市民を助け出した。",
        puzzleType: "morikawa-rescue"
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
    companyName: "函館どっく",
    heroName: "どっくメカニック",
    allyName: "どっくメカニック",
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
    questionBody: "会社の強みと合言葉を復元して、港の決戦メカを起動しよう。",
    acceptedAnswers: ["ものづくり", "モノヅクリ", "物づくり", "物作り"],
    hints: [
      "相方から追加通信が届いた。港と船に関わる仕事を探そう。",
      "ヒーローの記憶が少し復元された。船を造る、と書く言葉だ。",
      "企業HPのこのあたりを見てみよう。建造と修繕の両方が大きな手がかりになる。"
    ],
    steps: [
      {
        title: "第1問 港の技術コア",
        dialogue: {
          speaker: "ナビゲーター",
          text: "どっくの本拠地にたどり着いた！ どっくには会えたが、みんながどっくの存在を忘れてしまったことでヒーローの力が失われてしまっている。企業ページを確認し、ヒーローの力を取り戻そう。"
        },
        lead: "船舶の建造、艦艇や商船の各種検査・修理、鉄構機械の製作。函館どっくが選ばれ続けるために進化させ続けている、一番の強みを探そう。",
        body: "港の技術コアに入力する、漢字3文字の言葉を答えよう。",
        acceptedAnswers: ["技術力", "ぎじゅつりょく", "ギジュツリョク"],
        hints: ["公式サイトの会社紹介で、技術や品質に関わる言葉を探そう。", "漢字3文字では『技術力』。", "ひらがななら『ぎじゅつりょく』。"],
        clearMessage: "技術コアを再起動。次は、港を越えて活躍する力を探そう。",
        puzzleType: "dock-core"
      },
      {
        title: "第2問 失われた武器",
        transition: {
          speaker: "ナビゲーター",
          text: "技術力の記憶を取り戻した。だが、ヒーローの武器が隠されてしまったようだ。3つの言葉の法則性を見つけ出し、どれが武器なのか選ぶんだ！"
        },
        lead: "ヒーローの武器が隠されてしまった。『王冠、ヘッドフォン、はちまき』に共通する言葉を手がかりに、武器を選べ。",
        body: "1. 安全靴　2. ヘルメット　3. シールド。正しい武器を答えよう。",
        acceptedAnswers: ["ヘルメット", "へるめっと"],
        hints: ["3つの言葉に共通するのは、身につける場所です。", "王冠、ヘッドフォン、はちまきは頭につけます。", "答えは『ヘルメット』。"],
        clearMessage: "武器を回収。新造船の記録と合言葉を解読しよう。",
        puzzleType: "dock-weapon"
      },
      {
        title: "第3問 港の合言葉",
        transition: {
          speaker: "どっくメカニック",
          text: "力を取り戻したが、必殺技を使うには合言葉が必要で、その合言葉が思い出せない。これまでどんな活躍をしてきたかを調べ、必殺技の合言葉を思い出そう！"
        },
        dialogue: {
          speaker: "ナビゲーター",
          text: "ヒーローを仲間にするには合言葉が必要だ！ 合言葉のカギとなる暗号が落とされているぞ。それをもとに解き明かせ！"
        },
        lead: "新造船で建造する『内航フェリーと貨物船』、会社名『はこだてどっく』の記録を使い、必殺技の合言葉を復元せよ。",
        body: "暗号メモの文字を順に取り、函館どっくのキャッチコピーにつながる、ひらがな5文字の合言葉を答えよう。",
        acceptedAnswers: ["ものづくり", "モノヅクリ", "物づくり", "物作り"],
        hints: ["暗号メモでは、A＝ぎじゅつりょく、C＝かもつせん、D＝はこだてどっくです。", "C2＋の＋A4゛＋D7＋A5 を順番に読もう。", "答えは『ものづくり』。"],
        clearMessage: "必殺技の合言葉は「ものづくり」だ！ 港の安全ロックに残る最後の警報を解除しよう。",
        puzzleType: "dock-password"
      },
      {
        title: "小ボス戦 港の安全ロック",
        transition: {
          speaker: "どっくメカニック",
          text: "必殺技の合言葉は「ものづくり」だ！"
        },
        dialogue: {
          speaker: "ナビゲーター",
          tone: "alert",
          text: "港の安全ロックが暴走している。月ごとの日数の差を読み取り、設備を安全な状態へ戻してくれ！"
        },
        lead: "各月の日数を使った差の記録から、最後のロックに入る数字を導こう。",
        body: "12月と5月の日数の差を、半角または全角の数字で答えよう。",
        acceptedAnswers: ["0", "０", "零", "れい", "ゼロ"],
        hints: [
          "7月は31日、6月は30日なので、最初の式は1になります。",
          "8月と7月、11月と9月はそれぞれ同じ日数です。",
          "12月も5月も31日。答えは0。"
        ],
        clearMessage: "安全ロック解除。どっくメカニックが港の設備を安定化し、海からの援護準備が整った！",
        puzzleType: "dock-miniboss"
      }
    ],
    heroDescription: "造船所の技術と重装備を備えた女性メカニックヒーロー。クレーンアームとアンカー工具で、海から決戦を支える。",
    unlockMessage: "海からの援護は任せて。決戦兵器、起動準備完了！",
    attackName: "ハーバーカノン",
    attackText: "港の巨大メカを起動し、海側から援護射撃を放つ。",
    attackClass: "attack-cannon",
    companyIntro: {
      catch: "どっくメカニックの力の正体",
      power: "船をつくり、直し、海の仕事を支える造船と修繕の技術。",
      work: "大きな船や機械を扱い、チームで安全な運航を支える仕事。",
      town: "港町函館の産業や物流、人の移動と深くつながっています。",
      points: ["船の仕事のスケール感は？", "どんな技術が必要ですか？", "未経験から学べることはありますか？"]
    }
  },
  {
    id: "century",
    companyName: "センチュリーマリーナ函館",
    heroName: "マリーナ・ヒーラー",
    allyName: "マリーナ・ヒーラー",
    character: "real-century",
    role: "ホテル・おもてなし・回復の力",
    category: "ホテル・観光",
    industry: "ホテル",
    difficulty: 2,
    booth: "D-1",
    accent: "#c99d47",
    website: "https://www.centurymarina.com/",
    recruitUrl: "https://www.centurymarina.com/recruit/",
    missionTitle: "癒やしの合言葉",
    storyIntro:
      "決戦を前に、仲間たちの力が弱まっている。函館の夜を照らすホテルに残された、心と体を休ませる回復の力を見つけ出そう。",
    questionTitle: "やすらぎのルームキー",
    questionLead: "函館の海を生かした、非日常のリラックス空間に残る記録を集めよう。",
    questionBody: "ホテルの魅力と朝食の謎を解き、回復の合言葉を復元しよう。",
    acceptedAnswers: ["食事", "しょくじ", "ショクジ"],
    hints: [
      "相方から追加通信が届いた。港町の景色と、ホテルの過ごし方に注目しよう。",
      "ヒーローの記憶が少し復元された。海や船をテーマにした非日常の空間が鍵だ。",
      "最後は、50音順で文字を前後に動かしてみよう。"
    ],
    steps: [
      {
        title: "第1問 非日常の場所",
        dialogue: {
          speaker: "ナビゲーター",
          text: "次に思い出すヒーローは、函館の海を生かしたリラックスできる空間を提供している。疲労を癒やし、怪獣に立ち向かう力を取り戻そう。センチュリーマリーナの記録から、合言葉を探せ！"
        },
        lead: "日常を離れ、ひとときのプライベートな時間が叶う場所。海や船をモチーフにしたホテルの魅力を調べよう。",
        body: "『プライベート・○○○○○○が叶う場所。』の○○○○○○に入る言葉を答えよう。",
        acceptedAnswers: ["クルージング", "くるーじんぐ"],
        hints: ["ホテルの公式サイトにある紹介文を見よう。", "海や船で楽しむ非日常の体験です。", "答えは『クルージング』。"],
        clearMessage: "謎解きの鍵が開いたぞ！ この調子でヒーローの力を呼び覚まそう。次は函館らしい景色の鍵だ。",
        puzzleType: "century-cruising"
      },
      {
        title: "第2問 景色の鍵",
        transition: {
          speaker: "ナビゲーター",
          text: "センチュリーマリーナは、港町函館の特徴を生かし、海や船をモチーフにした建物づくりで、非日常のひと時を味わえるホテルをつくっている。"
        },
        dialogue: {
          speaker: "マリーナ・ヒーラー",
          text: "本拠地の客室や露天風呂から見える景色が、私の記憶の鍵だ。函館の夜景や海を最大限に生かしたおもてなしを思い出してくれ。"
        },
        lead: "函館の夜景や海を最大限に生かしたおもてなし。その魅力を表す文字を、色と数字から抜き出そう。",
        body: "赤・青・黒の行と数字を手がかりに、3文字の言葉を答えよう。",
        acceptedAnswers: ["景色", "けしき", "ケシキ"],
        hints: ["赤い行の9は『け』になります。", "数字は、その行の何文字目かを示しています。", "答えは『けしき』。"],
        clearMessage: "景色の記録を取得。朝食に関する最後の鍵を解こう。",
        puzzleType: "century-scenery"
      },
      {
        title: "第3問 朝食の合言葉",
        transition: {
          speaker: "ナビゲーター",
          text: "景色の記録を取得。次は朝食に関する最後の鍵を解こう。"
        },
        dialogue: {
          speaker: "マリーナ・ヒーラー",
          text: "函館の海鮮や北海道の食材を生かした食事も、私の大切な力だ。特に朝食の新鮮なお刺身やいくらを思い出してくれ。"
        },
        lead: "ひらがなを50音順で前後に動かす暗号。函館の海鮮や北海道の食材にこだわるホテルの力を呼び起こそう。",
        body: "さ＋1、ろ－5、お＋3、ぞ－3 を解き、4文字の合言葉を答えよう。",
        acceptedAnswers: ["食事", "しょくじ", "ショクジ"],
        hints: ["＋と－は50音順で進む向きです。", "さの1つ次は『し』、ろの5つ前は『よ』。", "答えは『しょくじ』。"],
        clearMessage: "朝食の合言葉を取得。マリーナ・ヒーラーの回復の力が再起動した！",
        puzzleType: "century-meal"
      }
    ],
    heroDescription: "洗練されたコンシェルジュ装備と温かな光をまとう男性回復ヒーロー。仲間の疲れを癒やし、決戦に必要な活力を取り戻す。",
    unlockMessage: "どうぞ、ここでひと息。皆さんの力は、私が整えます。",
    attackName: "マリーナ・リカバリー",
    attackText: "やすらぎの光で仲間を回復し、戦う力を取り戻す。",
    attackClass: "attack-heal",
    companyIntro: {
      catch: "マリーナ・ヒーラーの力の正体",
      power: "訪れる人を温かく迎え、心身を休めてもらうホテルのおもてなし。",
      work: "宿泊、食事、景色、接客を通して、一人ひとりの心地よい時間をつくる仕事。",
      town: "函館を訪れる人に街の魅力を伝え、旅の思い出を支える存在です。",
      points: ["ホテルではどんな職種の人が協力していますか？", "おもてなしで大切にしていることは？", "函館らしさを伝える工夫はありますか？"]
    }
  },
  {
    id: "toko",
    companyName: "東興アイテック",
    heroName: "エナジーリンク",
    allyName: "エナジーリンク",
    character: "real-link",
    role: "防水・外壁改修・火炎施工の力",
    category: "建物改修・防水",
    industry: "防水・外壁改修・塗装",
    difficulty: 3,
    booth: "D-2",
    accent: "#ef7b2d",
    website: "https://tokoai.com/",
    recruitUrl: "https://tokoai.com/recruit.html",
    missionTitle: "建物の未来を守れ",
    storyIntro:
      "怪獣の攻撃で建物の壁と屋上にひび割れが走った。最後に必要なのは、水や傷みから建物の未来を守る火属性ヒーローの力だ。東興アイテックの謎を解き、最終決戦の準備を完了せよ。",
    questionTitle: "失われた名前を取り戻せ",
    questionLead: "火を使い街を守る鉄壁の防御ヒーローは、すべての記憶を失っている。2つの暗号を解き、名前と使命を取り戻そう。",
    questionBody: "建物を守る使命と、方位の暗号から本当の名前を復元しよう。",
    acceptedAnswers: ["東興", "とうこう", "トウコウ"],
    hints: [
      "相方から追加通信が届いた。建物の状態を見極め、社会に役立てる使命に注目しよう。",
      "最初の暗号は、建物を診断する仕事につながる文章です。",
      "最後は方位の音読みと、色付きの四角を組み合わせよう。"
    ],
    steps: [
      {
        title: "第1問 最初のパスワード",
        dialogue: {
          speaker: "ナビゲーター",
          text: "ここは、火を使い街を守る鉄壁の防御ヒーローのエリアだ。ヒーローはすべての記憶を失い、完全に沈黙している。2つの暗号を解き、まずは第1のセキュリティをハッキングせよ！"
        },
        lead: "6つの番号に入る文字をつなぐと、ヒーローが取り戻すべき使命の文章になる。最初のパスワードを導き出そう。",
        body: "1から6を順番に読み、使命の文章を答えよう。",
        acceptedAnswers: ["建物を診断し、社会に還元する。", "建物を診断し、社会に還元する", "建物を診断し社会に還元する。", "建物を診断し社会に還元する", "たてものをしんだんし、しゃかいにかんげんする。", "たてものをしんだんししゃかいにかんげんする"],
        hints: ["企業ページや記録にある、建物を守るための考え方に注目しよう。", "文章は『建物を診断し、』から始まります。", "答えは『建物を診断し、社会に還元する。』。"],
        clearMessage: "パスワード認証。ヒーローの意識が半分戻ってきた。創造の記録を解析しよう。",
        puzzleType: "toko-message"
      },
      {
        title: "中間ミッション 創造の記録を解析せよ",
        transition: {
          speaker: "ナビゲーター",
          text: "見事だ！ パスワード認証。ヒーローの意識が半分戻ってきたぞ。……しかし、まだ表情は虚ろだ。"
        },
        dialogue: {
          speaker: "エナジーリンク",
          text: "建物を診断し、社会に還元する。……それが私との絆だ。だが、それだけでは思い出せない。私は一体どんな想いで、何を創っていたのだ……？"
        },
        lead: "【システム警告】コアデータが不足している。ヒーローが守るべき『この場所の真実』を知るため、創造の記録を解析しよう。",
        body: "建物を長持ちさせるために、彼らがまず行う工程を、番号または言葉で答えよう。",
        acceptedAnswers: ["2", "２", "建物の劣化状態を調査・診断し、最適な工法を導き出す", "建物の劣化状態を調査診断し最適な工法を導き出す", "調査・診断", "調査診断"],
        hints: ["防水や塗装の前に、建物の状態を見極める必要があります。", "正解の選択肢は、建物の『劣化状態』を調べる工程です。", "答えは2。調査・診断して最適な工法を導き出します。"],
        clearMessage: "創造の記録を同期。街の安心を支える基盤が、ヒーローの記憶につながった！",
        puzzleType: "toko-diagnosis"
      },
      {
        title: "第2の謎 失われた名前を取り戻せ",
        transition: {
          speaker: "ナビゲーター",
          text: "素晴らしい！ 彼らが創っているもの、それこそがこの街の安心を支える基盤だった。データがヒーローに同期されていく……！"
        },
        dialogue: {
          speaker: "エナジーリンク",
          text: "そうだ……思い出しつつあるぞ。私はただの防壁ではない。人々の暮らしを、技術で支えるために生まれたんだ……！"
        },
        lead: "意識がかなり戻ってきた。だが完全復活には、あと一歩、決定的なピースが足りない。方位と色の暗号から、本当の名前を覚醒させよう。",
        body: "方位の音読みと色付きの四角を組み合わせ、ヒーローの名前を答えよう。",
        acceptedAnswers: ["東興", "とうこう", "トウコウ"],
        hints: ["北斎の最初の2文字は『ほく』。方位の音読みを探そう。", "青い四角は『さい』、赤い四角は『こう』を表します。", "『とう』と『こう』を組み合わせると答えになります。"],
        clearMessage: "マスターコード認証完了。トウコウの記憶と誇りが戻った！ ……だが、防衛システムが起動した。",
        puzzleType: "toko-compass"
      },
      {
        title: "緊急ミッション 小ボスを撃破せよ",
        transition: {
          speaker: "エナジーリンク",
          text: "……ふぅ、助かった。ありがとう！ 君たちの知恵が、私の名前と誇り……記憶を呼び覚ました。さあ、私の力を君たちに貸そう！"
        },
        dialogue: {
          speaker: "システム",
          tone: "alert",
          text: "警告：完全覚醒を阻止する防衛システムが起動しました。これが本当に最後のロックです。12マスのグリッドを解析せよ！"
        },
        lead: "目の前に表示されたのは、奇妙な12マスのグリッド。スマホのフリック入力を手がかりに、防衛システムを停止させよう。",
        body: "数字の順にフリック入力を読み、ひらがなで答えよう。",
        acceptedAnswers: ["えふきゃん", "エフキャン", "Fキャン", "fキャン", "F-CAN", "FCAN", "fcan"],
        hints: ["12マスは、スマホのかなフリック入力の配列を表しています。", "数字の順に読み、矢印はフリック方向、○はそのキーをそのまま選ぶ合図です。", "答えは『えふきゃん』。"],
        clearMessage: "防衛システム停止。エナジーリンクが完全覚醒し、炎と防水層を展開した！",
        puzzleType: "toko-flick-boss"
      }
    ],
    heroDescription: "黒い戦闘スーツに炎色の発光回路を走らせる火属性ヒーロー。熱工法の炎と防水技術で建物を守り、全員の力を燃え上がらせる。",
    unlockMessage: "火炎施工、全開！ 建物を守る力を、最後の一撃につなぐ！",
    attackName: "ブレイズ・ウォータープルーフ",
    attackText: "炎の技術で防水層を展開し、仲間を守りながら最後の合体攻撃を準備する。",
    attackClass: "attack-fire",
    companyIntro: {
      catch: "火属性エナジーリンクの力の正体",
      power: "防水・外壁改修・塗装の技術で、建物の価値と未来を守る力。",
      work: "建物を調査・診断し、防水、外壁改修、塗装、建築工事から最適な方法を提案・施工する仕事。",
      town: "学校や施設、住まいなど、街にある建物の安全で快適な未来を支えます。",
      points: ["建物の調査・診断では何を確認しますか？", "防水工事はどんな場所で必要ですか？", "外壁改修の仕事に必要な力は何ですか？"]
    }
  }
];

missions.sort((a, b) => ["shodai", "morikawa", "dock", "toko", "century"].indexOf(a.id) - ["shodai", "morikawa", "dock", "toko", "century"].indexOf(b.id));

const finalPuzzles = [
  {
    title: "第1問 迷路の指示",
    lead: "「やっとヒーロー全員が力を取り戻して仲間になった！ 今こそ怪獣を退治する時だ！」まずは迷路に隠れた攻撃の合図を探そう。",
    body: "スタートからゴールまで進み、経路上のひらがなで指示を読む。その後、迷路内のカタカナを左から読んで答えよう。",
    acceptedAnswers: ["オフサイド", "おふさいど", "offside"],
    hints: ["道をたどると、何かを指示するひらがなが見つかります。", "経路上の文字は『ひだりからかなよめ』。迷路内のカタカナを左から読みましょう。", "答えは『オフサイド』。"],
    clearMessage: "「あれ、謎を解いたのに攻撃が効いていないな……。もっと攻撃しよう！」次の作戦を開きます。",
    puzzleType: "final-maze"
  },
  {
    title: "第2問 十二支の矢印",
    lead: "第1攻撃では怪獣を止められない。十二支の動物名を矢印のマスに入れ、次の攻撃を導こう。",
    body: "十二支の動物名をひらがなで左から早い順にマスへ入れ、紫の矢印が通る文字を答えよう。",
    acceptedAnswers: ["さつま汁", "さつまじる", "サツマジル"],
    hints: ["左から早い順に、十二支の動物名が入ります。", "紫の矢印が通る文字だけを読みます。", "答えは『さつま汁』。"],
    clearMessage: "怪獣に攻撃してもHPは減らない。怪獣は弱点からの攻撃しかきかないようだ。弱点を探そう！",
    puzzleType: "final-zodiac"
  },
  {
    title: "第3問 静かな音",
    lead: "弱点を探す鍵は、音楽記号の中にある。大声と静かな仕草が表す記号を読み取ろう。",
    body: "大声で叫ぶ人は f（フォルテ）を表している。静かにしている人が表すローマ字を答えよう。",
    acceptedAnswers: ["P", "p", "ピアノ"],
    hints: ["音楽記号では、強くは f（フォルテ）です。", "静かに、弱くを表す音楽記号を考えよう。", "答えは p（ピアノ）。"],
    clearMessage: "記号Pを取得。もう一つ、同じ文字を導く鍵を探そう。",
    puzzleType: "final-piano"
  },
  {
    title: "第4問 じゃんけんコード",
    lead: "もう一つの鍵も同じローマ字を表している。じゃんけんの関係から、？に入る手を導こう。",
    body: "C＝2、G＝0、？＝5。？＜C、C＜G、G＜？ のとき、？に入るローマ字を答えよう。",
    acceptedAnswers: ["P", "p", "パー"],
    hints: ["＜は『勝てる』と考えよう。", "Cはチョキ、Gはグーを表しています。", "残る手はパー。答えは P。"],
    clearMessage: "Pが2つそろった。会場パンフレットの2つのPを重ねるように折り、弱点の指示を探そう。",
    puzzleType: "final-rps"
  },
  {
    title: "第5問 怪獣の弱点",
    lead: "第3問と第4問のPは、会場パンフレットの「駐車場P」と「臨時駐車場P」を表している。",
    body: "2つのPを重ねるようにパンフレットを折り、浮かんだ指示に従う。第1問の迷路へ戻り、怪獣の弱点を答えよう。",
    acceptedAnswers: ["背中", "せなか", "セナカ"],
    hints: ["第3問と第4問の答えはPとPを表します。", "会場パンフレットの地図で、駐車場と臨時駐車場のPを重ねます。", "浮かび上がる指示は『いちにもどりひらがなよめ』。迷路の経路以外のひらがなを読むと『あかよめ』です。パンフレットの赤文字を読もう。"],
    clearMessage: "ようやく怪獣の弱点がわかったぞ！ 怪獣の弱点は背中だ！ 最終決戦のロックを解除します。",
    puzzleType: "final-weakpoint"
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
    src: "assets/characters/dock-mechanic-female-v3.png",
    width: 887,
    height: 1774,
    alt: "どっくメカニック"
  },
  "real-century": {
    src: "assets/characters/century-medic-v2.png",
    width: 864,
    height: 1821,
    alt: "マリーナ・ヒーラー"
  },
  "real-link": {
    src: "assets/characters/energy-link-fire-v3.png",
    width: 864,
    height: 1821,
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

// 一時的な画面確認用。企業ミッション未クリアでも最終暗号だけを試せるようにする。
const FINAL_BATTLE_TEST_MODE = true;

const state = {
  participant: readJson(STORAGE_KEYS.participant, null),
  unlocked: new Set(readJson(STORAGE_KEYS.unlocked, [])),
  interests: new Set(readJson(STORAGE_KEYS.interests, [])),
  hints: readJson(STORAGE_KEYS.hints, {}),
  steps: readJson(STORAGE_KEYS.steps, {}),
  finalUnlocked: readJson(STORAGE_KEYS.final, false),
  recentUnlock: null
};

const firebaseEnabled = Boolean(firebaseConfig?.apiKey && !firebaseConfig.apiKey.includes("YOUR_"));
let auth = null;
let db = null;
let currentUser = null;
let isAdmin = false;

if (firebaseEnabled) {
  // 以前の端末内受付データを別アカウントへ表示しない。
  state.participant = null;
  const firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth(firebaseApp);
  db = getFirestore(firebaseApp);
  onAuthStateChanged(auth, async (user) => {
    clearInMemoryProgress();
    currentUser = user;
    isAdmin = Boolean(user && (await user.getIdTokenResult()).claims.admin === true);
    if (user) await loadParticipantFromCloud(user);
    else {
      state.participant = null;
      localStorage.removeItem(STORAGE_KEYS.participant);
    }
    render();
  });
}

function clearInMemoryProgress() {
  state.unlocked = new Set();
  state.interests = new Set();
  state.hints = {};
  state.steps = {};
  state.finalUnlocked = false;
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
}

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
  if (route.name === "admin") return renderAdmin();
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
  if (!firebaseEnabled) {
    view.innerHTML = firebaseSetupNoticeHtml();
    return;
  }
  if (!currentUser) {
    view.innerHTML = authFormHtml();
    return;
  }
  if (!state.participant) {
    view.innerHTML = registrationFormHtml();
    return;
  }

  const followed = missions.filter((mission) => state.interests.has(mission.id));
  view.innerHTML = `
    <article class="ticket-profile">
      <p class="eyebrow dark">MISSION PASS</p>
      <h2>${escapeHtml(state.participant.name)} さんの作戦参加証</h2>
      <p class="success-note">作戦参加登録が完了しました。登録情報と進行状況は安全に保存されています。</p>
      <dl class="profile-facts">
        <div><dt>受付番号</dt><dd>${escapeHtml(state.participant.id)}</dd></div>
        <div><dt>メールアドレス</dt><dd>${escapeHtml(currentUser.email || "")}</dd></div>
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
        <button class="button ghost" type="button" data-action="sign-out">ログアウト</button>
      </div>
      <p class="privacy-note">登録情報はイベント運営、進行状況の管理、企業への関心の集計にのみ使用します。削除を希望する場合は運営へお問い合わせください。</p>
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
        <p>運営が参加状況を把握し、イベントを改善するための参加登録です。</p>
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
      <label class="consent-check"><input name="privacy-consent" type="checkbox" required ${participant.privacyConsent ? "checked" : ""} /> <span>利用目的・保存期間・問い合わせ先を確認し、個人情報の取り扱いに同意します。</span></label>
      <button class="button primary" type="submit" aria-label="作戦参加登録を完了する">${participant.id ? "登録内容を更新する" : "参加受付を完了する"}</button>
      <p class="privacy-note">メールアドレスはアカウント管理に利用します。参加情報はイベント運営・集計に利用し、イベント終了後6か月を目安に削除します。問い合わせ先：運営事務局（連絡先をここに記載）</p>
    </form>
  `;
}

function authFormHtml() {
  return `
    <section class="auth-grid">
      <form class="register-form" id="sign-up-form">
        <div class="section-heading"><p class="eyebrow dark">CREATE ACCOUNT</p><h2>参加登録</h2><p>メールアドレスとパスワードで、別の端末でも進行状況を引き継げます。</p></div>
        <label>メールアドレス<input name="email" type="email" autocomplete="email" required /></label>
        <label>パスワード<input name="password" type="password" autocomplete="new-password" minlength="8" required /></label>
        <button class="button primary" type="submit">アカウントを作成する</button>
        <p class="form-note" role="status"></p>
      </form>
      <form class="register-form" id="sign-in-form">
        <div class="section-heading"><p class="eyebrow dark">SIGN IN</p><h2>ログイン</h2><p>すでに登録済みの方はこちらからログインしてください。</p></div>
        <label>メールアドレス<input name="email" type="email" autocomplete="email" required /></label>
        <label>パスワード<input name="password" type="password" autocomplete="current-password" required /></label>
        <button class="button secondary" type="submit">ログインする</button>
        <p class="form-note" role="status"></p>
      </form>
    </section>`;
}

function firebaseSetupNoticeHtml() {
  return `<article class="ticket-profile"><p class="eyebrow dark">SETUP REQUIRED</p><h2>参加者データベースを準備中です</h2><p>Firebaseの接続設定がまだ入力されていません。運営者は <code>firebase-config.js</code> にFirebaseプロジェクトの設定値を入力してください。</p><p class="privacy-note">設定前は、メールアドレスなどの個人情報を入力・保存できません。</p></article>`;
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
      <p class="eyebrow mission-kicker"><span>MISSION /</span><span>${escapeHtml(mission.companyName)}</span></p>
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
      ${missionDialogueHtml(step.transition)}
      ${missionDialogueHtml(step.dialogue)}
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

function missionDialogueHtml(dialogue) {
  if (!dialogue?.text) return "";

  const speaker = dialogue.speaker || "ナビゲーター";
  const toneClass = dialogue.tone === "alert" ? " is-alert" : "";
  return `
    <aside class="mission-dialogue${toneClass}" aria-label="${escapeAttribute(speaker)}からの通信">
      <div class="mission-dialogue-meta"><span>MISSION COMMS</span><strong>${escapeHtml(speaker)}</strong></div>
      <p>「${escapeHtml(dialogue.text)}」</p>
    </aside>
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
  const allHeroesUnlocked = state.unlocked.size === missions.length;
  const isTestMode = FINAL_BATTLE_TEST_MODE && !allHeroesUnlocked;
  const completed = allHeroesUnlocked || FINAL_BATTLE_TEST_MODE;
  const finalStepIndex = getFinalPuzzleIndex();
  const finalReady = allHeroesUnlocked && finalStepIndex >= finalPuzzles.length;
  if (state.finalUnlocked !== finalReady) {
    state.finalUnlocked = finalReady;
    saveState();
  }
  document.querySelector("#clear-title").textContent = finalReady ? "ナゾゴラ撃退準備完了" : isTestMode ? "最終作戦の暗号を解け（テスト）" : completed ? "最終作戦の暗号を解け" : "ヒーローを全員集めよう";
  document.querySelector("#clear-copy").textContent = isTestMode
    ? `テストモード：企業ミッション未クリアでも最終暗号を解けます（${finalStepIndex} / ${finalPuzzles.length}）。`
    : completed
    ? finalReady
      ? "5人の企業ヒーローが集結。函館のフィールドで最後の作戦を開始できます。"
      : `5人が集結。怪獣の弱点を特定する最終暗号を解こう（${finalStepIndex} / ${finalPuzzles.length}）。`
    : `現在 ${state.unlocked.size} / ${missions.length}人。全ヒーロー収集後に解放されます。`;
  document.querySelector("#hero-collection").innerHTML = heroCollectionPanelHtml("full");
  document.querySelector("#final-puzzle-area").innerHTML = finalPuzzleHtml(completed, finalStepIndex);
  renderFinalBattle(finalReady);
  const form = document.querySelector("#match-form");
  if (form) form.outerHTML = endingActionsHtml(finalReady);
}

function getFinalPuzzleIndex() {
  return Math.min(Math.max(Number(state.steps.finalBattle || 0), 0), finalPuzzles.length);
}

function finalPuzzleHtml(completed, index) {
  if (!completed) return `<aside class="final-brief locked-final-brief"><p class="eyebrow dark">FINAL CODE LOCKED</p><h2>最終暗号はヒーロー全員の解放後に出現します</h2><p>企業ミッションをすべて解くと、怪獣の弱点を探す5問の暗号が開きます。</p></aside>`;
  if (index >= finalPuzzles.length) return `<aside class="final-brief is-clear"><p class="eyebrow dark">FINAL CODE COMPLETE</p><h2>弱点「背中」を特定</h2><p>全ての作戦暗号を突破。ヒーローの合体攻撃でナゾゴラを撃退しよう。</p></aside>`;
  const puzzle = finalPuzzles[index];
  const hintCount = getFinalHintCount(index);
  return `
    <section class="final-puzzle" style="--accent:${index === 2 ? "#e45336" : "#ffd34d"}">
      <div class="final-puzzle-copy">
        <p class="eyebrow dark">FINAL CODE ${index + 1} / ${finalPuzzles.length}</p>
        <h2>${escapeHtml(puzzle.title)}</h2>
        <p>${escapeHtml(puzzle.lead)}</p>
      </div>
      ${finalPuzzleVisualHtml(puzzle)}
      <p><strong>問題:</strong> ${escapeHtml(puzzle.body)}</p>
      <form id="final-answer-form" data-step="${index}">
        <label for="final-answer-input">作戦コード</label>
        <input id="final-answer-input" name="answer" autocomplete="off" placeholder="答えを入力" />
        <div class="quiz-actions"><button class="button primary" type="submit">作戦コードを送信</button><button class="button ghost" type="button" data-action="final-hint" data-step="${index}">ヒントを見る</button></div>
      </form>
      <div class="hint-panel" id="final-hint-panel">${finalHintPanelHtml(puzzle, hintCount)}</div>
      <p class="answer-result" id="final-answer-result"></p>
    </section>
  `;
}

function finalPuzzleVisualHtml(puzzle) {
  if (puzzle.puzzleType === "final-maze") return finalMazeVisualHtml();
  if (puzzle.puzzleType === "final-zodiac") return finalZodiacVisualHtml();
  if (puzzle.puzzleType === "final-piano") return finalPianoVisualHtml();
  if (puzzle.puzzleType === "final-rps") return finalRpsVisualHtml();
  return finalWeakpointVisualHtml();
}

function finalFigureHtml(className, diagram, caption, mobileDiagram = "") {
  return '<figure class="final-visual final-figure ' + className + '">' +
    '<div class="final-figure-scroll">' + diagram + mobileDiagram + '</div>' +
    '<figcaption class="final-figure-caption">' + caption + '</figcaption>' +
  '</figure>';
}

function finalMazeMobileHtml() {
  const route = "ひだりからかなよめ".split("").map((letter) => '<span class="final-mobile-route-token">' + letter + '</span>').join("");
  const redLetters = "オフサイド".split("").map((letter, index) => '<span class="final-mobile-red-token is-' + (index + 1) + '">' + letter + '</span>').join("");
  const returnLetters = "あかよめ".split("").map((letter) => '<span>' + letter + '</span>').join("");
  return [
    '<div class="final-figure-mobile final-mobile-maze">',
      '<p class="final-mobile-instruction"><b>1</b> 緑の道をたどって、ひらがなを順に読む</p>',
      '<div class="final-mobile-route"><strong>START</strong>', route, '<strong>GOAL</strong></div>',
      '<p class="final-mobile-instruction"><b>2</b> 指示に従い、赤い文字を左から読む</p>',
      '<div class="final-mobile-red-letters">', redLetters, '</div>',
      '<div class="final-mobile-return-clue"><small>緑の道の外にあるひらがな（第5問で使う）</small><div>', returnLetters, '</div></div>',
    '</div>'
  ].join("");
}

function finalZodiacMobileHtml() {
  const purpleCells = new Set([9, 12, 16, 19, 21]);
  const cells = Array.from({ length: 29 }, (_, index) => {
    const position = index + 1;
    return '<span class="final-mobile-zodiac-cell' + (purpleCells.has(position) ? ' is-purple' : '') + '"></span>';
  }).join("");
  return [
    '<div class="final-figure-mobile final-mobile-zodiac">',
      '<p class="final-mobile-instruction"><b>1</b> 十二支を「ねずみ」から順に、ひらがなで左から入れる</p>',
      '<div class="final-mobile-zodiac-grid">', cells, '</div>',
      '<p class="final-mobile-zodiac-key"><span>紫で囲まれたマス</span>に入る文字を、左から読もう</p>',
    '</div>'
  ].join("");
}

function finalPianoMobileHtml() {
  return [
    '<div class="final-figure-mobile final-mobile-piano">',
      '<div class="final-mobile-piano-row">',
        '<div class="final-mobile-piano-action"><strong>大声で叫ぶ</strong><span>強く鳴らす</span></div>',
        '<span class="final-mobile-arrow">→</span>',
        '<div class="final-mobile-piano-result"><b>f</b><span>フォルテ</span></div>',
      '</div>',
      '<div class="final-mobile-piano-row is-quiet">',
        '<div class="final-mobile-piano-action"><strong>静かにする</strong><span>弱く鳴らす</span></div>',
        '<span class="final-mobile-arrow">→</span>',
        '<div class="final-mobile-piano-result"><b>?</b><span>？</span></div>',
      '</div>',
    '</div>'
  ].join("");
}

function finalRpsMobileHtml() {
  return [
    '<div class="final-figure-mobile final-mobile-rps">',
      '<p class="final-mobile-rps-title">＜ は「勝てる」と考えよう</p>',
      '<div class="final-mobile-rps-cards">',
        '<div><b>C = 2</b><span>チョキ<br>指2本</span></div>',
        '<div><b>G = 0</b><span>グー<br>指0本</span></div>',
        '<div class="is-answer"><b>？ = 5</b><span>？<br>指5本</span></div>',
      '</div>',
      '<p class="final-mobile-rps-cycle">？ ＜ C　　C ＜ G　　G ＜ ？</p>',
    '</div>'
  ].join("");
}

function finalWeakpointMobileHtml() {
  return [
    '<div class="final-figure-mobile final-mobile-weakpoint">',
      '<p class="final-mobile-instruction"><b>P</b> パンフレットの2つのPが重なるように折る</p>',
      '<div class="final-mobile-fold-map">',
        '<span class="final-mobile-map-road is-one"></span><span class="final-mobile-map-road is-two"></span><span class="final-mobile-map-road is-three"></span>',
        '<i class="final-mobile-fold-line"></i>',
        '<div class="final-mobile-parking is-parking"><b>P</b><span>駐車場</span></div>',
        '<div class="final-mobile-parking is-temporary"><b>P</b><span>臨時駐車場</span></div>',
      '</div>',
      '<span class="final-mobile-down-arrow">↓</span>',
      '<div class="final-mobile-fold-result"><strong>重ねると見える指示</strong><b>いちにもどり<br>ひらがなよめ</b></div>',
      '<p class="final-mobile-return">第1問の迷路へ戻る</p>',
    '</div>'
  ].join("");
}

function finalMazeVisualHtml() {
  const diagram = '<img class="final-source-image final-maze-source" src="assets/puzzles/final-maze-pdf.png?v=20260724-final-qa25" width="1990" height="1360" alt="PDF原図の、スタートからゴールへ進むひらがなとカタカナ入りの迷路" />';
  return finalFigureHtml("final-maze-figure final-source-figure", diagram, '<strong>PDF原図：</strong>スタートからゴールまで進み、経路上のひらがなを読む。指示に従って、迷路内のカタカナを左から読む。');
}

function finalZodiacVisualHtml() {
  const diagram = '<img class="final-source-image final-zodiac-source" src="assets/puzzles/final-zodiac-pdf.png?v=20260724-final-qa25" width="1990" height="1000" alt="PDF原図の、十二支を入れるマスと赤、青、紫の矢印" />';
  return finalFigureHtml("final-zodiac-figure final-source-figure", diagram, '<strong>PDF原図：</strong>白いマスへ「ねずみ」から「いのしし」までを続けて入れ、<strong>紫の矢印</strong>が通る文字を答えよう。');
}

function finalPianoVisualHtml() {
  const diagram = [
    '<svg class="final-figure-svg final-piano-svg" viewBox="0 0 800 580" preserveAspectRatio="xMidYMid meet" role="img" aria-label="叫ぶ人がフォルテf、静かにする人が何を表すかを考える問題">',
      '<rect class="diagram-paper" x="18" y="18" width="764" height="544" rx="4" />',
      '<g class="piano-row">',
        '<circle class="piano-face" cx="155" cy="132" r="43" /><path class="piano-hair" d="M113 114Q155 64 197 114V97Q155 52 113 97z" />',
        '<path class="piano-body" d="M103 219Q155 172 207 219L225 282H85z" /><path class="piano-mouth" d="M135 154Q155 185 175 154" />',
        '<path class="sound-wave" d="M58 117l-25 18 25 18-25 18M76 100l-28 20 28 20-28 20" />',
        '<path class="piano-arrow" d="M290 150H507M470 108l48 42-48 42" /><text class="piano-symbol" x="620" y="188">f</text>',
        '<text class="piano-label" x="96" y="310">大声で叫ぶ</text><text class="piano-label" x="612" y="258">フォルテ</text>',
      '</g>',
      '<g class="piano-row">',
        '<circle class="piano-face" cx="155" cy="390" r="43" /><path class="piano-hair" d="M113 372Q155 322 197 372V355Q155 310 113 355z" />',
        '<path class="piano-body" d="M103 477Q155 430 207 477L225 530H85z" /><path class="quiet-finger" d="M178 422l11-69M178 422l-20-28" />',
        '<path class="piano-arrow" d="M290 407H507M470 365l48 42-48 42" /><text class="piano-symbol piano-symbol--question" x="624" y="454">?</text>',
        '<text class="piano-label" x="105" y="548">静かにする</text><text class="piano-label" x="595" y="530">？</text>',
      '</g>',
    '</svg>'
  ].join("");
  return finalFigureHtml("final-piano-figure", diagram, '<strong>図の読み方：</strong>上段の<strong>f</strong>は「強く」を表すフォルテ。下段の静かな仕草が表す音楽記号を考えよう。', finalPianoMobileHtml());
}

function finalRpsVisualHtml() {
  const diagram = [
    '<svg class="final-figure-svg final-rps-svg" viewBox="0 0 800 380" preserveAspectRatio="xMidYMid meet" role="img" aria-label="チョキ、グー、パーの勝敗と指の数からローマ字を導く問題">',
      '<defs><marker id="final-rps-arrow" viewBox="0 0 12 12" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L12,6 L0,12z" fill="#173023" /></marker></defs>',
      '<rect class="diagram-paper" x="18" y="18" width="764" height="344" rx="4" />',
      '<text class="rps-title" x="70" y="66">＜ は「勝てる」と考えよう</text>',
      '<g class="rps-card"><rect x="78" y="102" width="178" height="116" rx="8" /><text x="118" y="150">C = 2</text><text class="rps-small" x="108" y="190">チョキ / 指2本</text></g>',
      '<g class="rps-card"><rect x="312" y="102" width="178" height="116" rx="8" /><text x="352" y="150">G = 0</text><text class="rps-small" x="345" y="190">グー / 指0本</text></g>',
      '<g class="rps-card rps-card--answer"><rect x="546" y="102" width="178" height="116" rx="8" /><text x="582" y="150">？ = 5</text><text class="rps-small" x="584" y="190">？ / 指5本</text></g>',
      '<path class="rps-cycle" d="M256 160H302M490 160H536M636 232C560 310 238 310 164 232" marker-end="url(#final-rps-arrow)" />',
      '<text class="rps-cycle-label" x="317" y="342">？ ＜ C　　C ＜ G　　G ＜ ？</text>',
    '</svg>'
  ].join("");
  return finalFigureHtml("final-rps-figure", diagram, '<strong>図の読み方：</strong>C＝チョキ、G＝グー。勝敗の輪と<strong>5本の指</strong>を手がかりに、残るローマ字を答えよう。', finalRpsMobileHtml());
}

function finalWeakpointVisualHtml() {
  const diagram = [
    '<svg class="final-figure-svg final-weakpoint-svg" viewBox="0 0 800 430" preserveAspectRatio="xMidYMid meet" role="img" aria-label="会場パンフレットの駐車場Pと臨時駐車場Pを重ねる手順を示す図">',
      '<defs><marker id="final-fold-arrow" viewBox="0 0 12 12" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L12,6 L0,12z" fill="#e64036" /></marker></defs>',
      '<rect class="diagram-paper" x="18" y="18" width="764" height="394" rx="4" />',
      '<text class="weakpoint-title" x="52" y="62">会場パンフレットの2つのPを重ねる</text>',
      '<g class="fold-map">',
        '<rect x="58" y="95" width="230" height="182" rx="5" /><path d="M173 95V277" class="fold-line" />',
        '<path d="M80 124H265M80 156H220M80 218H260" class="map-road" />',
        '<rect x="93" y="176" width="52" height="42" class="map-parking" /><text x="111" y="205">P</text>',
        '<rect x="205" y="118" width="52" height="42" class="map-parking map-parking--temporary" /><text x="223" y="147">P</text>',
        '<text class="map-label" x="83" y="248">駐車場</text><text class="map-label" x="184" y="186">臨時駐車場</text>',
      '</g>',
      '<path class="fold-arrow" d="M323 184H438M406 151l38 33-38 33" />',
      '<g class="fold-result"><rect x="468" y="105" width="278" height="144" rx="5" /><text class="fold-result-title" x="500" y="146">重ねると見える指示</text><text class="fold-result-code" x="500" y="192">いちにもどり</text><text class="fold-result-code" x="500" y="222">ひらがなよめ</text></g>',
      '<path class="fold-next-arrow" d="M604 270V352" marker-end="url(#final-fold-arrow)" />',
      '<text class="fold-next-label" x="446" y="388">第1問の迷路へ戻る</text>',
    '</svg>'
  ].join("");
  return finalFigureHtml("final-weakpoint-figure", diagram, '<strong>Web版の補助図：</strong>パンフレットが手元にない場合も、Pを重ねて出た指示に従おう。第1問で<strong>経路以外のひらがな</strong>を読み、パンフレットの赤文字を確認する。', finalWeakpointMobileHtml());
}

function getFinalHintCount(index) {
  return Number(state.hints[`final:${index}`] || 0);
}

function finalHintPanelHtml(puzzle, count) {
  if (!count) return `<p class="hint-empty">ヒントはボタンを押すたびに1つずつ表示されます。</p>`;
  return `<div class="hint-meter">HINT ${count}/${puzzle.hints.length}</div>${puzzle.hints.slice(0, count).map((hint, hintIndex) => `<p class="hint is-visible"><strong>${hintIndex + 1}.</strong> ${escapeHtml(hint)}</p>`).join("")}`;
}

function renderFinalBattle(battleReady) {
  const stage = document.querySelector("#battle-stage");
  const heroesComplete = state.unlocked.size === missions.length;
  const status = battleReady ? battleState.status : "locked";
  const activeStep = battleState.stepIndex >= 0 ? getBattleStep(battleState.stepIndex) : null;
  const active = activeStep?.mission;
  const activeIndex = active ? missions.findIndex((mission) => mission.id === active.id) : -1;
  const finalStrike = status === "playing" && battleState.stepIndex >= missions.length;
  const hp = battleReady ? battleState.hp : 100;
  stage.innerHTML = `
    <section class="final-battle cinematic-battle ${status === "victory" ? "is-victory" : ""} ${status === "locked" ? "is-locked" : ""} ${status === "playing" ? "is-playing" : ""} ${finalStrike ? "is-final-strike" : ""}">
      <div class="final-battle-copy">
        <p class="eyebrow dark">FINAL BATTLE</p>
        <h2>${battleReady ? "5人の力を接続せよ" : heroesComplete ? "最終暗号を解くと解放されます" : "全ヒーロー収集後に解放されます"}</h2>
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
          battleReady
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
        <p class="battle-action-text">${activeStep?.text || (battleReady ? "最終決戦を開始する準備はできている。" : heroesComplete ? "最終暗号をすべて解くと、決戦の扉が開く。" : `現在 ${state.unlocked.size} / ${missions.length}人`)}</p>
      </div>
      ${status === "victory" ? endingStoryHtml() : ""}
      <div class="battle-controls">
        ${battleReady && status !== "playing" ? `<button class="button primary" type="button" data-action="${status === "victory" ? "replay-battle" : "start-battle"}">${status === "victory" ? "もう一度見る" : "最終決戦を開始する"}</button>` : ""}
        ${battleReady && status === "playing" ? `<button class="button ghost" type="button" data-action="skip-battle">演出をスキップ</button>` : ""}
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
  if (status === "locked") {
    return state.unlocked.size === missions.length
      ? "5人が集結した。最終暗号をすべて解き、ナゾゴラの弱点を見つけ出そう。"
      : `現在 ${state.unlocked.size} / ${missions.length}人。未解放ヒーローの記録はシルエットのままです。`;
  }
  if (status === "playing") return activeStep?.mission.attackName || "ヒーローの力が順番に発動している。";
  if (status === "victory") return "HERO MATCH COMPLETE。函館の街に、企業ヒーローの記憶が戻った。";
  return "スチール、土台、港、回復、炎の接続。5つの力でナゾゴラに挑もう。";
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
  if (action === "final-hint") return revealFinalHint(Number(target.dataset.step));
  if (action === "interest") return toggleInterest(target.dataset.id);
  if (action === "follow-company") return followCompany(target);
  if (action === "reset") return resetProgress();
  if (action === "close-unlock") return closeHeroUnlock();
  if (action === "replay-unlock-video") return replayUnlockVideo(target);
  if (action === "start-battle" || action === "replay-battle") return startFinalBattle();
  if (action === "skip-battle") return finishBattle();
  if (action === "edit-profile") {
    document.querySelector("#profile-view").innerHTML = registrationFormHtml(state.participant);
  }
  if (action === "delete-profile" && window.confirm("受付情報と進行状況を運営データベースから削除しますか？この操作は元に戻せません。")) {
    state.participant = null;
    localStorage.removeItem(STORAGE_KEYS.participant);
    if (currentUser && db) deleteDoc(doc(db, "participants", currentUser.uid)).catch((error) => console.error("参加者情報を削除できませんでした。", error));
    renderProfile();
  }
  if (action === "sign-out") signOut(auth);
  if (action === "load-participants") loadParticipants();
}

function handleSubmit(event) {
  if (event.target.id === "participant-form") {
    event.preventDefault();
    saveParticipant(new FormData(event.target)).then(renderProfile).catch((error) => showFormError(event.target, error));
  }
  if (event.target.id === "sign-up-form") {
    event.preventDefault();
    createAccount(new FormData(event.target), event.target);
  }
  if (event.target.id === "sign-in-form") {
    event.preventDefault();
    loginAccount(new FormData(event.target), event.target);
  }
  if (event.target.id === "answer-form") {
    event.preventDefault();
    checkAnswer(event.target.dataset.id, new FormData(event.target).get("answer"));
  }
  if (event.target.id === "final-answer-form") {
    event.preventDefault();
    checkFinalAnswer(Number(event.target.dataset.step), new FormData(event.target).get("answer"));
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
    <article class="unlock-card ${mission.unlockVideo?.src ? "has-unlock-video" : ""}" style="--accent:${mission.accent}">
      ${unlockCinematicHtml(mission)}
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
  startUnlockVideo(modal);
  modal.querySelector("button")?.focus();
}

function unlockCinematicHtml(mission) {
  if (mission.unlockVideo?.src) {
    const poster = mission.unlockVideo.poster ? ` poster="${escapeAttribute(mission.unlockVideo.poster)}"` : "";
    return `
      <div class="unlock-cinematic has-video">
        <video class="unlock-video" src="${escapeAttribute(mission.unlockVideo.src)}"${poster} autoplay muted playsinline preload="auto"></video>
        <button class="unlock-video-replay" type="button" data-action="replay-unlock-video" aria-label="${escapeAttribute(mission.heroName)}の仲間演出をもう一度見る">もう一度見る</button>
      </div>
    `;
  }

  return `
    <div class="unlock-cinematic" aria-hidden="true">
      <div class="unlock-speed-lines"></div>
      <div class="unlock-burst"></div>
      <p class="unlock-call-sign">HERO ENTRY</p>
      <div class="unlock-character">${characterSvg(mission.character, "unlock-character-svg", mission.heroName)}</div>
      <span class="unlock-name-plate">${escapeHtml(mission.heroName)}</span>
    </div>
  `;
}

function startUnlockVideo(container = document) {
  const video = container.querySelector?.(".unlock-video");
  if (!video) return;
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.currentTime = 0;
  video.play?.().catch(() => {
    video.closest(".unlock-cinematic")?.classList.add("needs-manual-play");
  });
}

function replayUnlockVideo(target) {
  const video = target.closest(".unlock-cinematic")?.querySelector(".unlock-video");
  if (!video) return;
  video.closest(".unlock-cinematic")?.classList.remove("needs-manual-play");
  video.muted = true;
  video.playsInline = true;
  video.currentTime = 0;
  video.play?.().catch(() => {
    video.closest(".unlock-cinematic")?.classList.add("needs-manual-play");
  });
}

function closeHeroUnlock() {
  const modal = document.querySelector(".unlock-modal");
  if (!modal) return;
  modal.classList.add("is-closing");
  window.setTimeout(() => modal.remove(), 260);
}

async function saveParticipant(formData) {
  if (!currentUser || !db) throw new Error("ログインが必要です。");
  state.participant = {
    id: currentUser.uid,
    name: formData.get("name")?.toString().trim() || "ゲスト",
    grade: formData.get("grade")?.toString() || "未選択",
    interests: formData.getAll("interests").map(String),
    createdAt: state.participant?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    privacyConsent: formData.get("privacy-consent") === "on"
  };
  await setDoc(doc(db, "participants", currentUser.uid), {
    ...state.participant,
    email: currentUser.email || "",
    progress: progressSnapshot(),
    createdAt: state.participant.createdAt,
    updatedAt: serverTimestamp()
  }, { merge: true });
  localStorage.setItem(STORAGE_KEYS.participant, JSON.stringify(state.participant));
}

function revealFinalHint(index) {
  const puzzle = finalPuzzles[index];
  if (!puzzle) return;
  const key = `final:${index}`;
  state.hints[key] = Math.min(puzzle.hints.length, getFinalHintCount(index) + 1);
  saveState();
  document.querySelector("#final-hint-panel").innerHTML = finalHintPanelHtml(puzzle, state.hints[key]);
}

function checkFinalAnswer(index, rawAnswer) {
  const puzzle = finalPuzzles[index];
  if (!puzzle || index !== getFinalPuzzleIndex()) return;
  const result = document.querySelector("#final-answer-result");
  const ok = puzzle.acceptedAnswers.some((answer) => normalize(answer) === normalize(rawAnswer));
  result.classList.toggle("ok", ok);
  result.classList.toggle("ng", !ok);
  if (!ok) {
    result.textContent = "作戦コードが合わない。図とヒントをもう一度確認しよう。";
    return;
  }
  result.textContent = puzzle.clearMessage || (index < finalPuzzles.length - 1 ? "コード認証。次の最終暗号を開きます。" : "弱点を特定。最終決戦のロックを解除します。");
  window.setTimeout(() => {
    state.steps.finalBattle = index + 1;
    saveState();
    renderClear();
  }, 550);
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
  if (currentUser && db && state.participant) {
    setDoc(doc(db, "participants", currentUser.uid), { progress: progressSnapshot(), updatedAt: serverTimestamp() }, { merge: true })
      .catch((error) => console.error("進行状況を保存できませんでした。", error));
  }
}

function progressSnapshot() {
  return {
    unlocked: [...state.unlocked],
    interests: [...state.interests],
    hints: state.hints,
    steps: state.steps,
    finalUnlocked: state.finalUnlocked
  };
}

async function loadParticipantFromCloud(user) {
  try {
    const snapshot = await getDoc(doc(db, "participants", user.uid));
    if (snapshot.exists()) {
      const data = snapshot.data();
      state.participant = data;
      if (data.progress) {
        state.unlocked = new Set(data.progress.unlocked || []);
        state.interests = new Set(data.progress.interests || []);
        state.hints = data.progress.hints || {};
        state.steps = data.progress.steps || {};
        state.finalUnlocked = Boolean(data.progress.finalUnlocked);
        saveState();
      }
      localStorage.setItem(STORAGE_KEYS.participant, JSON.stringify(state.participant));
    } else {
      state.participant = null;
      localStorage.removeItem(STORAGE_KEYS.participant);
    }
  } catch (error) {
    console.error("参加者情報を読み込めませんでした。", error);
  }
}

async function createAccount(formData, form) {
  try {
    const credential = await createUserWithEmailAndPassword(auth, String(formData.get("email")).trim(), String(formData.get("password")));
    // 確認メールの送信失敗で、アカウント作成そのものを失敗扱いにしない。
    // 例: 公開ドメインの許可設定がまだの場合でも、参加登録は続行できる。
    try {
      await sendEmailVerification(credential.user);
    } catch (verificationError) {
      console.warn("確認メールを送信できませんでした。", verificationError);
    }
  } catch (error) {
    showFormError(form, error);
  }
}

async function loginAccount(formData, form) {
  try {
    await signInWithEmailAndPassword(auth, String(formData.get("email")).trim(), String(formData.get("password")));
  } catch (error) {
    showFormError(form, error);
  }
}

function showFormError(form, error) {
  const note = form.querySelector(".form-note");
  if (note) note.textContent = firebaseErrorMessage(error);
}

function firebaseErrorMessage(error) {
  const messages = {
    "auth/email-already-in-use": "このメールアドレスはすでに登録されています。ログインしてください。",
    "auth/invalid-credential": "メールアドレスまたはパスワードが正しくありません。",
    "auth/weak-password": "パスワードの条件を満たしていません。8文字以上で設定してください。",
    "auth/operation-not-allowed": "Firebaseでメール／パスワードのログイン設定を確認してください。",
    "auth/unauthorized-domain": "公開サイトのドメインをFirebase Authenticationの承認済みドメインへ追加してください。",
    "auth/network-request-failed": "通信に失敗しました。ネットワークを確認して再試行してください。"
  };
  return messages[error?.code] || "処理に失敗しました。時間をおいて再度お試しください。";
}

function renderAdmin() {
  if (!firebaseEnabled || !currentUser || !isAdmin) {
    renderTemplate("profile-template");
    document.querySelector("#profile-view").innerHTML = `<article class="ticket-profile"><h2>運営者専用ページです</h2><p>管理者権限を持つアカウントでログインしてください。</p></article>`;
    return;
  }
  renderTemplate("profile-template");
  document.querySelector("#profile-view").innerHTML = `<article class="ticket-profile"><p class="eyebrow dark">ADMIN</p><h2>参加者一覧</h2><p>個人情報は運営目的に限って取り扱ってください。</p><button class="button primary" type="button" data-action="load-participants">参加者一覧を読み込む</button><div id="participant-list"></div></article>`;
}

async function loadParticipants() {
  const list = document.querySelector("#participant-list");
  if (!list || !isAdmin) return;
  list.textContent = "読み込み中…";
  try {
    const snapshot = await getDocs(collection(db, "participants"));
    const rows = snapshot.docs.map((item) => item.data()).sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
    list.innerHTML = `<div class="participant-table"><table><thead><tr><th>名前</th><th>メールアドレス</th><th>学年</th><th>興味分野</th></tr></thead><tbody>${rows.map((participant) => `<tr><td>${escapeHtml(participant.name || "")}</td><td>${escapeHtml(participant.email || "")}</td><td>${escapeHtml(participant.grade || "")}</td><td>${(participant.interests || []).map(escapeHtml).join(" / ")}</td></tr>`).join("") || "<tr><td colspan=\"4\">参加者はまだいません。</td></tr>"}</tbody></table></div>`;
  } catch (error) {
    list.textContent = "参加者一覧を読み込めませんでした。管理者権限とFirestoreルールを確認してください。";
  }
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
  const unlockedCount = state.unlocked.size;
  const progressLabel = unlockedCount ? `ヒーロー ${unlockedCount}人を解放` : "企業ヒーロー探索中";
  bar.innerHTML = `<strong>${unlockedCount} / ${missions.length} clear</strong><span>${progressLabel}</span>`;
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

  if (step.puzzleType === "shodai-miniboss") {
    const weekdays = [
      ["sun", "日", "□"],
      ["mon", "月", "□"],
      ["tue", "火", "□"],
      ["wed", "水", "□"],
      ["thu", "木", "□"],
      ["fri", "金", "？"],
      ["sat", "土", "△"]
    ];
    return `
      <div class="puzzle-panel steel-boss-panel">
        <div class="boss-alert"><span>MINI BOSS / BUILDING COLLAPSE</span><strong>崩落ロック警報</strong></div>
        <p>曜日を漢字に変え、画数と同じ辺の数を持つ多角形に置き換えよう。</p>
        <div class="weekday-shapes" aria-label="曜日を漢字と多角形に置き換える問題">
          ${weekdays
            .map(([english, kanji, shape]) => `<span><small>${english}</small><b>${kanji}</b><i>${shape}</i></span>`)
            .join("")}
        </div>
        <div class="shape-question"><span>金曜日</span><b>→</b><strong>？角形</strong></div>
      </div>
    `;
  }

  if (step.puzzleType === "steel-grid") {
    const rows = [
      ["1", "", "キ", "③", "", "⑤", "", ""],
      ["2", "①", "ン", "", "", "", "", ""],
      ["3", "", "コ", "", "⑦", "", "", ""],
      ["4", "④", "ウ", "", "", "", "", ""],
      ["5", "", "②", "⑥", "", "", "", ""]
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

  if (step.puzzleType === "dock-core") {
    return `
      <div class="puzzle-panel dock-file">
        <div class="puzzle-file-header"><span>PORT ARCHIVE</span><strong>CORE 01</strong></div>
        <div class="dock-signal" aria-hidden="true"><i></i><i></i><i></i></div>
        <p>船舶の建造・検査・修理・鉄構機械の製作。これらを支える強みを、ひらがなで復元しよう。</p>
        <div class="answer-slots" aria-label="ひらがな6文字の答え"><span>＿</span><span>＿</span><span>＿</span><span>＿</span><span>＿</span><span>＿</span></div>
      </div>
    `;
  }

  if (step.puzzleType === "dock-weapon") {
    return `
      <div class="puzzle-panel dock-file">
        <div class="puzzle-file-header"><span>PORT ARCHIVE</span><strong>CORE 02</strong></div>
        <div class="dock-head-clues"><span>王冠</span><span>ヘッドフォン</span><span>はちまき</span></div>
        <div class="dock-weapon-options"><span>1. 安全靴</span><span>2. ヘルメット</span><span>3. シールド</span></div>
        <p>3つの言葉に共通する、身につける場所を考えよう。</p>
      </div>
    `;
  }

  if (step.puzzleType === "dock-password") {
    return `
      <div class="puzzle-panel dock-file">
        <div class="puzzle-file-header"><span>PORT ARCHIVE</span><strong>FINAL KEY</strong></div>
        <div class="dock-records" aria-label="暗号に使う記録"><span>A　ぎじゅつりょく</span><span>C　かもつせん</span><span>D　はこだてどっく</span></div>
        <p class="cipher-line">C2 ＋ の ＋ A4゛ ＋ D7 ＋ A5　＝　？</p>
        <div class="answer-slots" aria-label="ひらがな5文字の答え"><span>＿</span><span>＿</span><span>＿</span><span>＿</span><span>＿</span></div>
      </div>
    `;
  }

  if (step.puzzleType === "dock-miniboss") {
    const logs = [
      ["7月", "6月", "1"],
      ["8月", "7月", "0"],
      ["11月", "9月", "0"],
      ["12月", "5月", "？"]
    ];
    return `
      <div class="puzzle-panel dock-file dock-miniboss">
        <div class="dock-miniboss-alert"><span>PORT SAFETY LOCK / MINI BOSS</span><strong>港湾設備警報</strong></div>
        <p>それぞれの月の日数を比べ、差を安全ロックへ入力しよう。</p>
        <div class="month-difference-log" aria-label="月の日数の差を求める問題">
          ${logs
            .map(([left, right, result], index) => `<div class="month-equation${index === logs.length - 1 ? " is-locked" : ""}"><span>${left}</span><b>−</b><span>${right}</span><strong>＝ ${result}</strong></div>`)
            .join("")}
        </div>
        <div class="dock-lock-question"><span>12月と5月</span><b>→</b><strong>？</strong></div>
      </div>
    `;
  }

  if (step.puzzleType === "toko-diagnosis") {
    const options = [
      ["1", "古い塗膜をすべて剥がしてから塗り直す"],
      ["2", "建物の劣化状態を調査・診断し、最適な工法を導き出す"],
      ["3", "防水シートを一面に貼り重ねる"]
    ];
    return `
      <div class="puzzle-panel toko-circuit-file toko-diagnosis">
        <div class="puzzle-file-header"><span>FIRE LINK ARCHIVE</span><strong>MEMORY 02</strong></div>
        <div class="toko-diagnosis-alert"><span>CREATION ARCHIVE / MID MISSION</span><strong>創造の記録</strong></div>
        <p>建物を長持ちさせるために、まず行う工程を選ぼう。</p>
        <div class="toko-diagnosis-options" aria-label="建物を長持ちさせるために最初に行う工程を選ぶ問題">
          ${options
            .map(([number, text]) => `<div class="toko-diagnosis-option"><b>${number}</b><span>${text}</span></div>`)
            .join("")}
        </div>
      </div>
    `;
  }

  if (step.puzzleType === "century-cruising" || step.puzzleType === "century-scenery" || step.puzzleType === "century-meal") {
    const isCruising = step.puzzleType === "century-cruising";
    const isScenery = step.puzzleType === "century-scenery";
    return `
      <div class="puzzle-panel century-file">
        <div class="puzzle-file-header"><span>MARINA RECOVERY LOG</span><strong>${isCruising ? "01" : isScenery ? "02" : "03"}</strong></div>
        ${isCruising ? `<div class="cruising-clue"><span>プライベート・</span><strong>○○○○○○</strong><span>が叶う場所</span></div><p>海や船をテーマにした、非日常の体験を表す言葉を探そう。</p>` : ""}
        ${isScenery ? `<div class="scenery-clue"><span class="red">100万ドルのやけい</span><span class="blue">しおラーメン</span><span>カトリックきょうかい</span><b>9 / 1 / 6 ＝ ？</b></div><p>色が示す行から、数字番目の文字を抜き出そう。</p>` : ""}
        ${!isCruising && !isScenery ? `<div class="kana-shift"><span>さ + 1</span><span>ろ − 5</span><span>お + 3</span><span>ぞ − 3</span><strong>○○○○</strong></div><p>50音順で、文字を前後に動かそう。</p>` : ""}
      </div>
    `;
  }

  if (step.puzzleType === "toko-message") {
    const codeStrip = (numbers) => `
      <div class="toko-password-code-strip" aria-hidden="true">
        ${numbers
          .map((number) => `<span class="${number ? "is-number" : ""}">${number || ""}</span>`)
          .join("")}
      </div>
    `;
    const wordSlots = (count) => `
      <span class="toko-password-word" style="--slot-count:${count}" aria-hidden="true">
        ${"<i></i>".repeat(count)}
      </span>
    `;
    return `
      <div class="puzzle-panel toko-circuit-file toko-password-file">
        <div class="puzzle-file-header"><span>FIRE LINK ARCHIVE</span><strong>MEMORY 01</strong></div>
        <section class="toko-password-figure" role="img" aria-label="2つの番号付き文字列と、2つの句に分かれた空欄文が並ぶ第1セキュリティの暗号図">
          <p class="toko-password-figure-title">第1セキュリティ / 文字列照合</p>
          <div class="toko-password-reference" aria-hidden="true">QR / 参照画像を確認</div>
          <div class="toko-password-code-groups">
            ${codeStrip(["1", "2", "", "", "", "3"])}
            ${codeStrip(["4", "5", "", "", "", "6"])}
          </div>
          <div class="toko-password-sentence" aria-hidden="true">
            <div class="toko-password-clause">
              ${wordSlots(3)}${wordSlots(2)}${wordSlots(1)}<b>、</b>
            </div>
            <div class="toko-password-clause">
              ${wordSlots(3)}${wordSlots(2)}${wordSlots(2)}<b>。</b>
            </div>
          </div>
          <p class="toko-password-instruction">企業ページの文章を見つけ、番号の文字を①から⑥の順に読もう。</p>
        </section>
        <p>下の空欄文を完成させると、ヒーローが取り戻すべき使命が現れます。</p>
      </div>
    `;
  }

  if (step.puzzleType === "toko-compass") {
    return `
      <div class="puzzle-panel toko-circuit-file toko-compass-file">
        <div class="puzzle-file-header"><span>FIRE LINK ARCHIVE</span><strong>MEMORY 03</strong></div>
        <section class="toko-compass-figure" aria-label="方位の音と色付きの四角を組み合わせる暗号">
          <p class="toko-compass-title">方位の音 + 色の音 をつなごう</p>
          <div class="toko-compass-legend" aria-hidden="true"><span class="is-direction">黒：方位の音</span><span class="is-blue">青：さい</span><span class="is-red">赤：こう</span></div>
          <p class="toko-compass-step">① 3つの例を声に出して、方位と色が表す音を確認しよう。</p>
          <div class="toko-compass-layout">
            <figure class="toko-compass-reference">
              <img src="assets/puzzles/toko-compass-clue.png" width="530" height="681" alt="北斎、再生、軟膏の例、方位磁針、色付きの四角と答え欄が描かれた方位と色の暗号図" />
              <figcaption>PDFの暗号図</figcaption>
            </figure>
            <div class="toko-compass-examples">
              <div class="toko-compass-example">
                <div class="toko-token-row"><span class="toko-sound-token is-direction"><b>北</b><small>ほく</small></span><b>＋</b><span class="toko-sound-token is-blue">さい</span></div>
                <p><strong>北斎</strong><span>ほくさい</span></p>
              </div>
              <div class="toko-compass-example">
                <div class="toko-token-row"><span class="toko-sound-token is-blue">さい</span><b>＋</b><span class="toko-sound-token is-direction"><b>西</b><small>せい</small></span></div>
                <p><strong>再生</strong><span>さいせい</span></p>
              </div>
              <div class="toko-compass-example">
                <div class="toko-token-row"><span class="toko-sound-token is-direction"><b>南</b><small>なん</small></span><b>＋</b><span class="toko-sound-token is-red">こう</span></div>
                <p><strong>軟膏</strong><span>なんこう</span></p>
              </div>
            </div>
          </div>
          <div class="toko-compass-target">
            <span class="toko-compass-target-step">② 東を使う</span>
            <span class="toko-sound-token is-direction"><b>東</b><small>？</small></span><b>＋</b><span class="toko-sound-token is-red">こう</span><b>＝</b><strong>？</strong>
            <p class="toko-compass-target-help">東の音と赤い四角の音を組み合わせて、ヒーローの名前を答えよう。</p>
          </div>
        </section>
        <p>黒い四角は方位の音読み、青・赤の四角はそれぞれ決まった音を表します。</p>
      </div>
    `;
  }

  if (step.puzzleType === "toko-flick-boss") {
    const cells = [
      ["1", "→", "is-right"],
      ["3", "←", "is-left"],
      null,
      null,
      null,
      ["2", "↑", "is-up"],
      null,
      ["4", "○", "is-tap"],
      null,
      ["5", "○", "is-tap"],
      ["6", "↑", "is-up"],
      null
    ];
    return `
      <div class="puzzle-panel toko-circuit-file toko-flick-boss">
        <div class="toko-flick-alert"><span>FIREWALL LOCK / MINI BOSS</span><strong>完全覚醒防衛システム</strong></div>
        <p>数字の順に、スマホのかなフリック入力として読み解こう。</p>
        <div class="toko-flick-pad" aria-label="スマホのフリック入力を表す12マスの暗号">
          ${cells
            .map((cell) =>
              cell
                ? `<span class="toko-flick-cell is-marked ${cell[2]}"><b>${cell[0]}</b><i>${cell[1]}</i></span>`
                : `<span class="toko-flick-cell" aria-hidden="true"></span>`
            )
            .join("")}
        </div>
        <div class="toko-flick-legend" aria-label="端末差をなくすためのフリック入力の読み取り規則">
          <span><b>①</b> あを右へ</span><span><b>②</b> はを上へ</span><span><b>③</b> かを左へ</span><span><b>④→⑤</b> やを小文字へ</span><span><b>⑥</b> んを選ぶ</span>
        </div>
        <div class="toko-flick-question"><span>① → ⑥ の順に入力</span><b>→</b><strong>？</strong></div>
      </div>
    `;
  }

  if (step.puzzleType === "morikawa-identity") {
    return `
      <div class="puzzle-panel morikawa-identity">
        <div class="identity-visuals" aria-hidden="true">
          <img class="helmet-clue" src="assets/puzzles/morikawa-helmet.png" alt="" />
          <img class="morikawa-emblem" src="assets/puzzles/morikawa-emblem.png" alt="" />
        </div>
        <p>左のヘルメットで身を守り、右のエンブレムのもと活動していた函館のヒーロー。</p>
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

  if (step.puzzleType === "morikawa-rescue") {
    const presentTerms = [
      ["FW", "フォワード"],
      ["MF", "ミッドフィルダー"],
      ["FK", "フリーキック"],
      ["HT", "ハーフタイム"]
    ];
    const absentTerms = [
      ["GK", "ゴールキーパー"],
      ["DF", "ディフェンダー"],
      ["PK", "ペナルティキック"],
      ["VAR", "ビデオ判定"]
    ];
    const termList = (terms) => terms.map(([short, reading]) => `<li><b>${short}</b><span>${reading}</span></li>`).join("");
    return `
      <div class="puzzle-panel morikawa-rescue">
        <div class="rescue-signal"><span>RESCUE SIGNAL / HAKODATE</span><strong>市民救助プロトコル</strong></div>
        <p>カッコ内のサッカー用語も手がかりに、「ある」と「なし」を分ける法則を考えよう。</p>
        <div class="football-sort" aria-label="サッカー用語をあるとなしに分類する問題">
          <section class="has-f"><h3>ある</h3><ul>${termList(presentTerms)}</ul></section>
          <section class="has-not-f"><h3>なし</h3><ul>${termList(absentTerms)}</ul></section>
        </div>
        <div class="fcan-choice"><span>エフ・キャン</span><b>→</b><strong>ある / なし</strong></div>
      </div>
    `;
  }

  if (step.puzzleType === "toko-stadium-code") {
    return `
      <div class="puzzle-panel toko-stadium-code" aria-label="スタジアムの伏せ字暗号">
        <div class="stadium-frame" aria-hidden="true">
          <div class="stadium-scoreboard"></div>
          <img class="stadium-photo" src="assets/puzzles/toko-stadium.png" alt="" />
        </div>
        <div class="stadium-code-row" aria-label="1番目と2番目の文字を示す6文字の伏せ字">
          <div class="stadium-code-group"><span></span><b>1</b><span></span><span></span><span></span><b>2</b></div>
          <div class="stadium-code-group"><span></span><b>6</b><b>5</b><span></span><span></span><span></span></div>
        </div>
        <p class="stadium-password"><strong>3</strong><span></span><i></i>、<span></span><span></span><b>4</b>。</p>
        <small>伏せ字と番号を手がかりに、企業の仕事に関わる言葉を復元しよう。</small>
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
