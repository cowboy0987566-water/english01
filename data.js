// ============================================================
//  GEPT 單字資料庫 (v25.1)
// ============================================================

const fullDictionary = [
    // ==========================================
    //  A 開頭單字 (含完整詳細資料)
    // ==========================================
    {
        word: "Abroad",
        level: "elem",
        kk: "[əˋbrɔd]",
        pos: "adv.",
        defEn: "In or to a foreign country.",
        defCh: "在國外；到國外",
        keyPoint: { title: "Grammar", desc: "Abroad 是副詞，前面不加介系詞 (不能說 go to abroad，要說 go abroad)。", exEn: "She plans to study abroad.", exCh: "她計畫出國留學。" },
        synonyms: [{en: "Overseas", ch: "海外"}],
        antonyms: [{en: "Home", ch: "國內"}],
        collocs: [
            { en: "go abroad", ch: "出國", sentEn: "We want to go abroad for vacation.", sentCh: "我們想出國度假。" }
        ],
        media: [{ type: "Movie", source: "Spider-Man", en: "I'm going abroad.", ch: "我要出國了。" }]
    },
    {
        word: "Absent",
        level: "elem",
        kk: "[ˋæbsənt]",
        pos: "adj.",
        defEn: "Not in the place where you are expected to be.",
        defCh: "缺席的；不在場的",
        keyPoint: { title: "Usage", desc: "常搭配介系詞 from (absent from school)。", exEn: "He was absent from school.", exCh: "他缺課了。" },
        synonyms: [{en: "Missing", ch: "失蹤的"}],
        antonyms: [{en: "Present", ch: "出席的"}],
        collocs: [
            { en: "absent from", ch: "缺席...", sentEn: "Why were you absent from the meeting?", sentCh: "你為什麼缺席會議？" }
        ],
        media: [{ type: "Movie", source: "Ferris Bueller", en: "He's absent.", ch: "他缺席了。" }]
    },
    {
        word: "Accept",
        level: "elem",
        kk: "[əkˋsɛpt]",
        pos: "v.",
        verbForms: "accept / accepted / accepted",
        defEn: "To agree to take something.",
        defCh: "接受；答應",
        keyPoint: { title: "Confusing Words", desc: "Accept (接受) vs. Except (除了...之外)。", exEn: "I accept your gift.", exCh: "我收下你的禮物。" },
        synonyms: [{en: "Receive", ch: "收到"}],
        antonyms: [{en: "Refuse", ch: "拒絕"}],
        collocs: [
            { en: "accept an apology", ch: "接受道歉", sentEn: "Please accept my apology.", sentCh: "請接受我的道歉。" }
        ],
        media: [{ type: "Movie", source: "Twilight", en: "I've accepted that.", ch: "我已經接受了這個事實。" }]
    },
    {
        word: "Accident",
        level: "elem",
        kk: "[ˋæksədənt]",
        pos: "n.",
        defEn: "Something bad that happens that is not expected.",
        defCh: "意外事故",
        keyPoint: { title: "Collocation", desc: "By accident (偶然地) = By chance。", exEn: "We met by accident.", exCh: "我們偶然相遇。" },
        synonyms: [{en: "Mishap", ch: "不幸事故"}],
        antonyms: [{en: "Plan", ch: "計畫"}],
        collocs: [
            { en: "by accident", ch: "意外地", sentEn: "I did it by accident.", sentCh: "我是不小心的。" }
        ],
        media: [{ type: "Movie", source: "Kung Fu Panda", en: "There are no accidents.", ch: "世上沒有意外。" }]
    },
    {
        word: "Active",
        level: "elem",
        kk: "[ˋæktɪv]",
        pos: "adj.",
        defEn: "Busy with a particular activity.",
        defCh: "活躍的；積極的",
        keyPoint: { title: "Grammar", desc: "Active Voice (主動語態) vs. Passive Voice (被動語態)。", exEn: "Stay active.", exCh: "保持活躍。" },
        synonyms: [{en: "Energetic", ch: "精力充沛的"}],
        antonyms: [{en: "Passive", ch: "被動的"}],
        collocs: [
            { en: "active part", ch: "積極參與", sentEn: "She took an active part.", sentCh: "她積極參與。" }
        ],
        media: [{ type: "Song", source: "Imagine Dragons", en: "I'm waking up.", ch: "我醒來了（充滿活力）。" }]
    },

    // ==========================================
    //  B 開頭單字 (來自 PDF)
    // ==========================================
    {
        word: "Baby",
        level: "elem",
        kk: "[ˋbebɪ]",
        pos: "n.",
        defEn: "A very young child.",
        defCh: "嬰兒",
        keyPoint: { title: "Usage", desc: "也可以用來稱呼情人 (寶貝)。", exEn: "Don't cry, baby.", exCh: "別哭，寶貝。" },
        synonyms: [{en: "Infant", ch: "嬰兒"}],
        antonyms: [{en: "Adult", ch: "成人"}],
        collocs: [
            { en: "baby sitter", ch: "保母", sentEn: "We need a baby sitter.", sentCh: "我們需要保母。" }
        ],
        media: [{ type: "Song", source: "Justin Bieber", en: "Baby, baby, baby, oh!", ch: "寶貝，寶貝，寶貝，噢！" }]
    },
    {
        word: "Back",
        level: "elem",
        kk: "[bæk]",
        pos: "n.",
        defEn: "The rear surface of the human body.",
        defCh: "後面；背部",
        keyPoint: { title: "Direction", desc: "Go back (回去)；Come back (回來)。", exEn: "I'll be back.", exCh: "我會回來的。" },
        synonyms: [{en: "Rear", ch: "後方"}],
        antonyms: [{en: "Front", ch: "前面"}],
        collocs: [
            { en: "back and forth", ch: "來來回回", sentEn: "He walked back and forth.", sentCh: "他來回走動。" }
        ],
        media: [{ type: "Movie", source: "Terminator", en: "I'll be back.", ch: "我會回來的。" }]
    },
    {
        word: "Bad",
        level: "elem",
        kk: "[bæd]",
        pos: "adj.",
        defEn: "Of poor quality or low standard.",
        defCh: "壞的；不好的",
        keyPoint: { title: "Grammar", desc: "比較級是 worse，最高級是 worst (不是 badder)。", exEn: "This is worse than I thought.", exCh: "這比我想的還糟。" },
        synonyms: [{en: "Poor", ch: "差勁的"}, {en: "Evil", ch: "邪惡的"}],
        antonyms: [{en: "Good", ch: "好的"}],
        collocs: [
            { en: "bad luck", ch: "運氣不好", sentEn: "It was just bad luck.", sentCh: "只是運氣不好。" }
        ],
        media: [{ type: "Song", source: "Michael Jackson", en: "Because I'm bad, I'm bad.", ch: "因為我很壞（很厲害）。" }]
    },
    {
        word: "Bag",
        level: "elem",
        kk: "[bæg]",
        pos: "n.",
        defEn: "A container made of flexible material.",
        defCh: "袋子；包包",
        synonyms: [{en: "Sack", ch: "袋子"}],
        antonyms: [],
        collocs: [
            { en: "plastic bag", ch: "塑膠袋", sentEn: "Do you need a plastic bag?", sentCh: "你需要塑膠袋嗎？" }
        ],
        media: [{ type: "Song", source: "Katy Perry", en: "Do you ever feel like a plastic bag?", ch: "你是否曾覺得自己像個塑膠袋？" }]
    },
    {
        word: "Ball",
        level: "elem",
        kk: "[bɔl]",
        pos: "n.",
        defEn: "A solid or hollow spherical object.",
        defCh: "球",
        keyPoint: { title: "Idiom", desc: "Have a ball = 玩得很開心。", exEn: "We had a ball at the party.", exCh: "我們在派對上玩得很開心。" },
        synonyms: [{en: "Sphere", ch: "球體"}],
        antonyms: [],
        collocs: [
            { en: "play ball", ch: "打球/合作", sentEn: "If you don't play ball, you're fired.", sentCh: "如果你不配合，就被開除了。" }
        ],
        media: [{ type: "Movie", source: "Cast Away", en: "Wilson! (To a volleyball)", ch: "威爾森！（對著排球喊）" }]
    },
    {
        word: "Banana",
        level: "elem",
        kk: "[bəˋnænə]",
        pos: "n.",
        defEn: "A long curved fruit with yellow skin.",
        defCh: "香蕉",
        keyPoint: { title: "Idiom", desc: "Go bananas = 發瘋/抓狂。", exEn: "He went bananas when he heard the news.", exCh: "他聽到消息後抓狂了。" },
        synonyms: [],
        antonyms: [],
        collocs: [
            { en: "banana peel", ch: "香蕉皮", sentEn: "Don't slip on the banana peel.", sentCh: "別踩到香蕉皮滑倒。" }
        ],
        media: [{ type: "Movie", source: "Minions", en: "Banana!", ch: "香蕉！" }]
    },
    {
        word: "Bank",
        level: "elem",
        kk: "[bæŋk]",
        pos: "n.",
        defEn: "A financial establishment; the land alongside a river.",
        defCh: "銀行；河岸",
        keyPoint: { title: "Multiple Meanings", desc: "Bank 可以是存錢的銀行，也可以是河岸 (river bank)。", exEn: "They sat on the river bank.", exCh: "他們坐在河岸邊。" },
        synonyms: [],
        antonyms: [],
        collocs: [
            { en: "bank account", ch: "銀行帳戶", sentEn: "I opened a bank account.", sentCh: "我開了一個銀行帳戶。" }
        ],
        media: []
    },
    {
        word: "Beautiful",
        level: "elem",
        kk: "[ˋbjutəfəl]",
        pos: "adj.",
        defEn: "Pleasing the senses or mind aesthetically.",
        defCh: "美麗的",
        keyPoint: { title: "Usage", desc: "Beautiful 通常形容女性或風景；Handsome 形容男性。", exEn: "What a beautiful view!", exCh: "多美的景色！" },
        synonyms: [{en: "Pretty", ch: "漂亮的"}, {en: "Lovely", ch: "可愛的"}],
        antonyms: [{en: "Ugly", ch: "醜陋的"}],
        collocs: [
            { en: "beautiful day", ch: "美好的一天", sentEn: "It's a beautiful day.", sentCh: "今天是美好的一天。" }
        ],
        media: [{ type: "Song", source: "James Blunt", en: "You're beautiful, it's true.", ch: "妳很美，這是真的。" }]
    },
    {
        word: "Because",
        level: "elem",
        kk: "[bɪˋkɔz]",
        pos: "conj.",
        defEn: "For the reason that.",
        defCh: "因為",
        keyPoint: { title: "Grammar", desc: "Because (連詞，接句子) vs. Because of (介系詞，接名詞)。", exEn: "I stayed home because of the rain.", exCh: "因為下雨我待在家。" },
        synonyms: [{en: "Since", ch: "既然/因為"}],
        antonyms: [],
        collocs: [
            { en: "just because", ch: "只因為", sentEn: "Just because I'm quiet doesn't mean I'm mad.", sentCh: "只因為我安靜不代表我生氣。" }
        ],
        media: [{ type: "Song", source: "Kelly Clarkson", en: "Because of you.", ch: "因為你。" }]
    },
    {
        word: "Bed",
        level: "elem",
        kk: "[bɛd]",
        pos: "n.",
        defEn: "A piece of furniture for sleep.",
        defCh: "床",
        keyPoint: { title: "Phrase", desc: "Go to bed (去睡覺)；Make the bed (鋪床)。", exEn: "I go to bed at 10.", exCh: "我十點睡覺。" },
        synonyms: [],
        antonyms: [],
        collocs: [
            { en: "go to bed", ch: "上床睡覺", sentEn: "Time to go to bed.", sentCh: "該睡覺了。" }
        ],
        media: []
    },
    {
        word: "Before",
        level: "elem",
        kk: "[bɪˋfor]",
        pos: "adv./prep.",
        defEn: "During the period of time preceding.",
        defCh: "在...之前",
        synonyms: [{en: "Earlier", ch: "稍早"}],
        antonyms: [{en: "After", ch: "在...之後"}],
        collocs: [
            { en: "long before", ch: "很久以前", sentEn: "I knew that long before you told me.", sentCh: "在你告訴我之前很久我就知道了。" }
        ],
        media: []
    },
    {
        word: "Begin",
        level: "elem",
        kk: "[bɪˋgɪn]",
        pos: "v.",
        verbForms: "begin / began / begun",
        defEn: "Start; perform the first part of.",
        defCh: "開始",
        keyPoint: { title: "Synonym", desc: "Start 和 Begin 通用，但 Begin 較正式。", exEn: "Let the game begin.", exCh: "讓遊戲開始吧。" },
        synonyms: [{en: "Start", ch: "開始"}, {en: "Commence", ch: "著手"}],
        antonyms: [{en: "End", ch: "結束"}, {en: "Finish", ch: "完成"}],
        collocs: [
            { en: "begin to", ch: "開始做...", sentEn: "It began to rain.", sentCh: "開始下雨了。" }
        ],
        media: [{ type: "Movie", source: "Star Wars", en: "Begun, the Clone War has.", ch: "複製人戰爭已經開始了。" }]
    },
    {
        word: "Believe",
        level: "elem",
        kk: "[bəˋliv]",
        pos: "v.",
        verbForms: "believe / believed / believed",
        defEn: "Accept that something is true.",
        defCh: "相信",
        keyPoint: { title: "Phrase", desc: "Believe in (信任/信仰)。", exEn: "I believe in you.", exCh: "我相信你(的能力)。" },
        synonyms: [{en: "Trust", ch: "信任"}],
        antonyms: [{en: "Doubt", ch: "懷疑"}],
        collocs: [
            { en: "believe it or not", ch: "信不信由你", sentEn: "Believe it or not, I won.", sentCh: "信不信由你，我贏了。" }
        ],
        media: [{ type: "Song", source: "Imagine Dragons", en: "Believer, believer.", ch: "信徒，信徒。" }]
    },
    {
        word: "Best",
        level: "elem",
        kk: "[bɛst]",
        pos: "adj.",
        defEn: "Of the most excellent quality.",
        defCh: "最好的",
        keyPoint: { title: "Grammar", desc: "Good 的最高級。Good -> Better -> Best。", exEn: "He is my best friend.", exCh: "他是我最好的朋友。" },
        synonyms: [{en: "Finest", ch: "最棒的"}],
        antonyms: [{en: "Worst", ch: "最差的"}],
        collocs: [
            { en: "do my best", ch: "盡全力", sentEn: "I will do my best.", sentCh: "我會盡全力。" }
        ],
        media: [{ type: "Song", source: "Tina Turner", en: "Simply the best.", ch: "就是最棒的。" }]
    },
    {
        word: "Better",
        level: "elem",
        kk: "[ˋbɛtɚ]",
        pos: "adj.",
        defEn: "Of a more excellent type.",
        defCh: "更好的",
        synonyms: [{en: "Superior", ch: "優越的"}],
        antonyms: [{en: "Worse", ch: "更糟的"}],
        collocs: [
            { en: "feel better", ch: "感覺好點", sentEn: "I hope you feel better soon.", sentCh: "祝你早日康復。" }
        ],
        media: []
    },
    {
        word: "Big",
        level: "elem",
        kk: "[bɪg]",
        pos: "adj.",
        defEn: "Of considerable size.",
        defCh: "大的",
        synonyms: [{en: "Large", ch: "巨大的"}, {en: "Huge", ch: "龐大的"}],
        antonyms: [{en: "Small", ch: "小的"}, {en: "Tiny", ch: "微小的"}],
        collocs: [
            { en: "big deal", ch: "大不了的事", sentEn: "It's no big deal.", sentCh: "沒什麼大不了的。" }
        ],
        media: [{ type: "Movie", source: "Big", en: "I want to be big.", ch: "我想要長大。" }]
    },
    {
        word: "Bird",
        level: "elem",
        kk: "[bɝd]",
        pos: "n.",
        defEn: "A warm-blooded egg-laying vertebrate.",
        defCh: "鳥",
        keyPoint: { title: "Idiom", desc: "Early bird (早起的人)。", exEn: "The early bird catches the worm.", exCh: "早起的鳥兒有蟲吃。" },
        synonyms: [],
        antonyms: [],
        collocs: [
            { en: "bird watching", ch: "賞鳥", sentEn: "He likes bird watching.", sentCh: "他喜歡賞鳥。" }
        ],
        media: []
    },
    {
        word: "Birthday",
        level: "elem",
        kk: "[ˋbɝθ͵de]",
        pos: "n.",
        defEn: "The anniversary of the day on which a person was born.",
        defCh: "生日",
        synonyms: [],
        antonyms: [],
        collocs: [
            { en: "happy birthday", ch: "生日快樂", sentEn: "Happy birthday to you!", sentCh: "祝你生日快樂！" }
        ],
        media: [{ type: "Song", source: "Traditional", en: "Happy Birthday to you.", ch: "祝你生日快樂。" }]
    },
    {
        word: "Black",
        level: "elem",
        kk: "[blæk]",
        pos: "adj.",
        defEn: "Of the very darkest color.",
        defCh: "黑色的",
        synonyms: [{en: "Dark", ch: "黑暗的"}],
        antonyms: [{en: "White", ch: "白色的"}],
        collocs: [
            { en: "black sheep", ch: "害群之馬", sentEn: "He is the black sheep of the family.", sentCh: "他是家裡的敗家子。" }
        ],
        media: [{ type: "Movie", source: "Men in Black", en: "Men in Black.", ch: "星際戰警（黑衣人）。" }]
    },
    {
        word: "Blue",
        level: "elem",
        kk: "[blu]",
        pos: "adj.",
        defEn: "Of a color intermediate between green and violet.",
        defCh: "藍色的；憂鬱的",
        keyPoint: { title: "Idiom", desc: "Feel blue (感到憂鬱)。", exEn: "I'm feeling a bit blue today.", exCh: "我今天有點憂鬱。" },
        synonyms: [{en: "Sad", ch: "悲傷的"}],
        antonyms: [{en: "Happy", ch: "快樂的"}],
        collocs: [
            { en: "out of the blue", ch: "突然地", sentEn: "He called me out of the blue.", sentCh: "他突然打電話給我。" }
        ],
        media: [{ type: "Song", source: "Eiffel 65", en: "I'm blue da ba dee da ba di.", ch: "我是藍色的（憂鬱的）。" }]
    },
    {
        word: "Body",
        level: "elem",
        kk: "[ˋbɑdɪ]",
        pos: "n.",
        defEn: "The physical structure of a person.",
        defCh: "身體",
        synonyms: [],
        antonyms: [],
        collocs: [
            { en: "body language", ch: "肢體語言", sentEn: "Body language is important.", sentCh: "肢體語言很重要。" }
        ],
        media: [{ type: "Song", source: "Christina Aguilera", en: "I'm a genie in a bottle, you gotta rub me the right way.", ch: "（這首歌關於身體與掌控）。" }]
    },
    {
        word: "Book",
        level: "elem",
        kk: "[bʊk]",
        pos: "n.",
        defEn: "A written or printed work consisting of pages.",
        defCh: "書；預訂(動詞)",
        keyPoint: { title: "Multiple Meanings", desc: "Book 當動詞是「預訂」的意思。", exEn: "I booked a table.", exCh: "我訂了位。" },
        synonyms: [{en: "Volume", ch: "卷/冊"}, {en: "Reserve", ch: "預訂(動詞)"}],
        antonyms: [],
        collocs: [
            { en: "read a book", ch: "讀書", sentEn: "I like to read books.", sentCh: "我喜歡讀書。" }
        ],
        media: []
    },
    {
        word: "Born",
        level: "elem",
        kk: "[bɔrn]",
        pos: "adj.",
        defEn: "Existing as a result of birth.",
        defCh: "出生的",
        keyPoint: { title: "Phrase", desc: "Be born in (出生於...年/地)。", exEn: "I was born in 1990.", exCh: "我出生於1990年。" },
        synonyms: [],
        antonyms: [{en: "Died", ch: "死亡"}],
        collocs: [
            { en: "newborn", ch: "新生的", sentEn: "A newborn baby.", sentCh: "新生兒。" }
        ],
        media: [{ type: "Song", source: "Lady Gaga", en: "I was born this way.", ch: "我生來如此。" }]
    },
    {
        word: "Boss",
        level: "elem",
        kk: "[bɔs]",
        pos: "n.",
        defEn: "A person in charge of a worker or organization.",
        defCh: "老闆",
        synonyms: [{en: "Manager", ch: "經理"}, {en: "Chief", ch: "首領"}],
        antonyms: [{en: "Employee", ch: "員工"}],
        collocs: [
            { en: "boss around", ch: "頤指氣使", sentEn: "Stop bossing me around.", sentCh: "別對我頤指氣使。" }
        ],
        media: [{ type: "Movie", source: "The Boss Baby", en: "I'm the boss.", ch: "我是老闆。" }]
    },
    {
        word: "Boy",
        level: "elem",
        kk: "[bɔɪ]",
        pos: "n.",
        defEn: "A male child.",
        defCh: "男孩",
        synonyms: [{en: "Lad", ch: "少年"}],
        antonyms: [{en: "Girl", ch: "女孩"}],
        collocs: [
            { en: "boyfriend", ch: "男朋友", sentEn: "She has a new boyfriend.", sentCh: "她交了新男朋友。" }
        ],
        media: [{ type: "Song", source: "Beyoncé", en: "If I were a boy.", ch: "如果我是男生。" }]
    },
    {
        word: "Break",
        level: "elem",
        kk: "[brek]",
        pos: "v.",
        verbForms: "break / broke / broken",
        defEn: "Separate or cause to separate into pieces.",
        defCh: "打破；休息",
        keyPoint: { title: "Phrase", desc: "Take a break (休息一下)。", exEn: "Let's take a break.", exCh: "我們休息一下吧。" },
        synonyms: [{en: "Smash", ch: "粉碎"}, {en: "Crack", ch: "裂開"}],
        antonyms: [{en: "Repair", ch: "修理"}, {en: "Fix", ch: "固定"}],
        collocs: [
            { en: "break a promise", ch: "食言", sentEn: "Never break a promise.", sentCh: "永遠不要食言。" }
        ],
        media: [{ type: "TV Show", source: "Friends", en: "We were on a break!", ch: "我們當時在冷靜期！" }]
    },
    {
        word: "Breakfast",
        level: "elem",
        kk: "[ˋbrɛkfəst]",
        pos: "n.",
        defEn: "A meal eaten in the morning.",
        defCh: "早餐",
        synonyms: [],
        antonyms: [{en: "Dinner", ch: "晚餐"}],
        collocs: [
            { en: "have breakfast", ch: "吃早餐", sentEn: "I have breakfast at 7.", sentCh: "我七點吃早餐。" }
        ],
        media: [{ type: "Movie", source: "Breakfast at Tiffany's", en: "Breakfast at Tiffany's.", ch: "第凡內早餐。" }]
    },
    {
        word: "Bring",
        level: "elem",
        kk: "[brɪŋ]",
        pos: "v.",
        verbForms: "bring / brought / brought",
        defEn: "Take or go with (someone or something) to a place.",
        defCh: "帶來",
        keyPoint: { title: "Bring vs Take", desc: "Bring (帶來這裡)；Take (帶去那裡)。", exEn: "Bring it here.", exCh: "把它拿來這裡。" },
        synonyms: [{en: "Carry", ch: "攜帶"}, {en: "Fetch", ch: "拿來"}],
        antonyms: [{en: "Take", ch: "帶走"}],
        collocs: [
            { en: "bring up", ch: "撫養/提出", sentEn: "She brought up three kids.", sentCh: "她撫養了三個孩子。" }
        ],
        media: [{ type: "Movie", source: "Bring It On", en: "Bring it on!", ch: "放馬過來吧！" }]
    },
    {
        word: "Brother",
        level: "elem",
        kk: "[ˋbrʌðɚ]",
        pos: "n.",
        defEn: "A man or boy in relation to other sons and daughters of his parents.",
        defCh: "兄弟",
        synonyms: [{en: "Sibling", ch: "手足"}],
        antonyms: [{en: "Sister", ch: "姊妹"}],
        collocs: [
            { en: "older brother", ch: "哥哥", sentEn: "My older brother is tall.", sentCh: "我哥哥很高。" }
        ],
        media: [{ type: "Song", source: "Avicii", en: "Hey brother.", ch: "嘿，兄弟。" }]
    },
    {
        word: "Busy",
        level: "elem",
        kk: "[ˋbɪzɪ]",
        pos: "adj.",
        defEn: "Having a great deal to do.",
        defCh: "忙碌的",
        keyPoint: { title: "Grammar", desc: "Busy + V-ing (忙著做...)。", exEn: "I am busy working.", exCh: "我正忙著工作。" },
        synonyms: [{en: "Occupied", ch: "被佔用的"}],
        antonyms: [{en: "Free", ch: "有空的"}],
        collocs: [
            { en: "busy street", ch: "繁忙的街道", sentEn: "It's a busy street.", sentCh: "這是一條繁忙的街道。" }
        ],
        media: []
    },
    {
        word: "Buy",
        level: "elem",
        kk: "[baɪ]",
        pos: "v.",
        verbForms: "buy / bought / bought",
        defEn: "Obtain in exchange for payment.",
        defCh: "買",
        synonyms: [{en: "Purchase", ch: "購買"}],
        antonyms: [{en: "Sell", ch: "賣"}],
        collocs: [
            { en: "buy time", ch: "爭取時間", sentEn: "We need to buy some time.", sentCh: "我們需要爭取一些時間。" }
        ],
        media: [{ type: "Song", source: "The Beatles", en: "Money can't buy me love.", ch: "金錢買不到我的愛。" }]
    },
    {
        word: "By",
        level: "elem",
        kk: "[baɪ]",
        pos: "prep.",
        defEn: "Identifying the agent performing an action.",
        defCh: "被；藉由；在...旁邊",
        keyPoint: { title: "Usage", desc: "By + V-ing (藉由做某事)；By bus (搭公車)。", exEn: "I go to school by bus.", exCh: "我搭公車上學。" },
        synonyms: [{en: "Via", ch: "經由"}],
        antonyms: [],
        collocs: [
            { en: "by the way", ch: "順帶一提", sentEn: "By the way, are you coming?", sentCh: "順帶一提，你要來嗎？" }
        ],
        media: [{ type: "Song", source: "Ben E. King", en: "Stand by me.", ch: "站在我這邊（支持我）。" }]
    }
];
