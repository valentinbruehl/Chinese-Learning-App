// HSK 1-2 Vocabulary
// tone: 1=flat, 2=rising, 3=dipping, 4=falling, 5=neutral
// base: syllable without tone mark (used for Tone Drill)
// Only single-syllable words have `tone` and `base` fields

export const words = [
  // ── Numbers ──────────────────────────────────────────────
  { id: 1,  word: '一', pinyin: 'yī',   meaning: 'one',        hsk: 1, tone: 1, base: 'yi' },
  { id: 2,  word: '二', pinyin: 'èr',   meaning: 'two',        hsk: 1, tone: 4, base: 'er' },
  { id: 3,  word: '三', pinyin: 'sān',  meaning: 'three',      hsk: 1, tone: 1, base: 'san' },
  { id: 4,  word: '四', pinyin: 'sì',   meaning: 'four',       hsk: 1, tone: 4, base: 'si' },
  { id: 5,  word: '五', pinyin: 'wǔ',   meaning: 'five',       hsk: 1, tone: 3, base: 'wu' },
  { id: 6,  word: '六', pinyin: 'liù',  meaning: 'six',        hsk: 1, tone: 4, base: 'liu' },
  { id: 7,  word: '七', pinyin: 'qī',   meaning: 'seven',      hsk: 1, tone: 1, base: 'qi' },
  { id: 8,  word: '八', pinyin: 'bā',   meaning: 'eight',      hsk: 1, tone: 1, base: 'ba' },
  { id: 9,  word: '九', pinyin: 'jiǔ',  meaning: 'nine',       hsk: 1, tone: 3, base: 'jiu' },
  { id: 10, word: '十', pinyin: 'shí',  meaning: 'ten',        hsk: 1, tone: 2, base: 'shi' },

  // ── Pronouns ─────────────────────────────────────────────
  { id: 11, word: '我',  pinyin: 'wǒ',   meaning: 'I / me',    hsk: 1, tone: 3, base: 'wo' },
  { id: 12, word: '你',  pinyin: 'nǐ',   meaning: 'you',       hsk: 1, tone: 3, base: 'ni' },
  { id: 13, word: '他',  pinyin: 'tā',   meaning: 'he / him',  hsk: 1, tone: 1, base: 'ta' },
  { id: 14, word: '她',  pinyin: 'tā',   meaning: 'she / her', hsk: 1, tone: 1, base: 'ta' },
  { id: 15, word: '我们', pinyin: 'wǒmen', meaning: 'we / us',  hsk: 1 },
  { id: 16, word: '你们', pinyin: 'nǐmen', meaning: 'you all',  hsk: 1 },

  // ── Greetings & Phrases ───────────────────────────────────
  { id: 17, word: '你好',   pinyin: 'nǐ hǎo',    meaning: 'hello',          hsk: 1 },
  { id: 18, word: '再见',   pinyin: 'zàijiàn',   meaning: 'goodbye',        hsk: 1 },
  { id: 19, word: '谢谢',   pinyin: 'xièxie',    meaning: 'thank you',      hsk: 1 },
  { id: 20, word: '对不起', pinyin: 'duìbuqǐ',   meaning: 'sorry',          hsk: 1 },
  { id: 21, word: '没关系', pinyin: 'méi guānxi', meaning: "never mind / it's OK", hsk: 1 },
  { id: 22, word: '不客气', pinyin: 'bù kèqi',   meaning: "you're welcome", hsk: 1 },
  { id: 23, word: '喂',     pinyin: 'wèi',        meaning: 'hello (phone)',  hsk: 1, tone: 4, base: 'wei' },

  // ── Core Verbs ───────────────────────────────────────────
  { id: 24, word: '是',  pinyin: 'shì',  meaning: 'to be (is/am/are)', hsk: 1, tone: 4, base: 'shi' },
  { id: 25, word: '有',  pinyin: 'yǒu',  meaning: 'to have',           hsk: 1, tone: 3, base: 'you' },
  { id: 26, word: '没',  pinyin: 'méi',  meaning: 'not have / no',     hsk: 1, tone: 2, base: 'mei' },
  { id: 27, word: '来',  pinyin: 'lái',  meaning: 'to come',           hsk: 1, tone: 2, base: 'lai' },
  { id: 28, word: '去',  pinyin: 'qù',   meaning: 'to go',             hsk: 1, tone: 4, base: 'qu' },
  { id: 29, word: '吃',  pinyin: 'chī',  meaning: 'to eat',            hsk: 1, tone: 1, base: 'chi' },
  { id: 30, word: '喝',  pinyin: 'hē',   meaning: 'to drink',          hsk: 1, tone: 1, base: 'he' },
  { id: 31, word: '看',  pinyin: 'kàn',  meaning: 'to look / watch',   hsk: 1, tone: 4, base: 'kan' },
  { id: 32, word: '听',  pinyin: 'tīng', meaning: 'to listen',         hsk: 1, tone: 1, base: 'ting' },
  { id: 33, word: '说',  pinyin: 'shuō', meaning: 'to speak / say',    hsk: 1, tone: 1, base: 'shuo' },
  { id: 34, word: '写',  pinyin: 'xiě',  meaning: 'to write',          hsk: 1, tone: 3, base: 'xie' },
  { id: 35, word: '买',  pinyin: 'mǎi',  meaning: 'to buy',            hsk: 1, tone: 3, base: 'mai' },
  { id: 36, word: '想',  pinyin: 'xiǎng', meaning: 'to want / think',  hsk: 1, tone: 3, base: 'xiang' },
  { id: 37, word: '回',  pinyin: 'huí',  meaning: 'to return',         hsk: 1, tone: 2, base: 'hui' },
  { id: 38, word: '开',  pinyin: 'kāi',  meaning: 'to open / drive',   hsk: 1, tone: 1, base: 'kai' },
  { id: 39, word: '坐',  pinyin: 'zuò',  meaning: 'to sit / take (bus/taxi)', hsk: 1, tone: 4, base: 'zuo' },
  { id: 40, word: '做',  pinyin: 'zuò',  meaning: 'to do / make',      hsk: 1, tone: 4, base: 'zuo' },
  { id: 41, word: '住',  pinyin: 'zhù',  meaning: 'to live (somewhere)', hsk: 1, tone: 4, base: 'zhu' },
  { id: 42, word: '叫',  pinyin: 'jiào', meaning: 'to be called',      hsk: 1, tone: 4, base: 'jiao' },
  { id: 43, word: '请',  pinyin: 'qǐng', meaning: 'please / invite',   hsk: 1, tone: 3, base: 'qing' },
  { id: 44, word: '读',  pinyin: 'dú',   meaning: 'to read (aloud)',   hsk: 1, tone: 2, base: 'du' },
  { id: 45, word: '认识', pinyin: 'rènshi', meaning: 'to know (a person)', hsk: 1 },
  { id: 46, word: '睡觉', pinyin: 'shuìjiào', meaning: 'to sleep',     hsk: 1 },
  { id: 47, word: '工作', pinyin: 'gōngzuò', meaning: 'to work / work', hsk: 1 },
  { id: 48, word: '学习', pinyin: 'xuéxí',  meaning: 'to study',       hsk: 1 },
  { id: 49, word: '打电话', pinyin: 'dǎ diànhuà', meaning: 'to make a phone call', hsk: 1 },
  { id: 50, word: '看见', pinyin: 'kànjiàn', meaning: 'to see',        hsk: 1 },

  // ── Adjectives ───────────────────────────────────────────
  { id: 51, word: '好',  pinyin: 'hǎo',  meaning: 'good',       hsk: 1, tone: 3, base: 'hao' },
  { id: 52, word: '大',  pinyin: 'dà',   meaning: 'big / large', hsk: 1, tone: 4, base: 'da' },
  { id: 53, word: '小',  pinyin: 'xiǎo', meaning: 'small / little', hsk: 1, tone: 3, base: 'xiao' },
  { id: 54, word: '热',  pinyin: 'rè',   meaning: 'hot',        hsk: 1, tone: 4, base: 're' },
  { id: 55, word: '冷',  pinyin: 'lěng', meaning: 'cold',       hsk: 1, tone: 3, base: 'leng' },
  { id: 56, word: '多',  pinyin: 'duō',  meaning: 'many / much', hsk: 1, tone: 1, base: 'duo' },
  { id: 57, word: '少',  pinyin: 'shǎo', meaning: 'few / little', hsk: 1, tone: 3, base: 'shao' },
  { id: 58, word: '很',  pinyin: 'hěn',  meaning: 'very',       hsk: 1, tone: 3, base: 'hen' },
  { id: 59, word: '太',  pinyin: 'tài',  meaning: 'too (much)',  hsk: 1, tone: 4, base: 'tai' },
  { id: 60, word: '都',  pinyin: 'dōu',  meaning: 'all / both',  hsk: 1, tone: 1, base: 'dou' },
  { id: 61, word: '不',  pinyin: 'bù',   meaning: 'not / no',   hsk: 1, tone: 4, base: 'bu' },
  { id: 62, word: '高兴', pinyin: 'gāoxìng', meaning: 'happy',  hsk: 1 },
  { id: 63, word: '漂亮', pinyin: 'piàoliang', meaning: 'pretty / beautiful', hsk: 1 },

  // ── Common Nouns ─────────────────────────────────────────
  { id: 64, word: '人',  pinyin: 'rén',  meaning: 'person',     hsk: 1, tone: 2, base: 'ren' },
  { id: 65, word: '家',  pinyin: 'jiā',  meaning: 'home / family', hsk: 1, tone: 1, base: 'jia' },
  { id: 66, word: '书',  pinyin: 'shū',  meaning: 'book',       hsk: 1, tone: 1, base: 'shu' },
  { id: 67, word: '水',  pinyin: 'shuǐ', meaning: 'water',      hsk: 1, tone: 3, base: 'shui' },
  { id: 68, word: '茶',  pinyin: 'chá',  meaning: 'tea',        hsk: 1, tone: 2, base: 'cha' },
  { id: 69, word: '钱',  pinyin: 'qián', meaning: 'money',      hsk: 1, tone: 2, base: 'qian' },
  { id: 70, word: '字',  pinyin: 'zì',   meaning: 'character / word', hsk: 1, tone: 4, base: 'zi' },
  { id: 71, word: '猫',  pinyin: 'māo',  meaning: 'cat',        hsk: 1, tone: 1, base: 'mao' },
  { id: 72, word: '狗',  pinyin: 'gǒu',  meaning: 'dog',        hsk: 1, tone: 3, base: 'gou' },
  { id: 73, word: '菜',  pinyin: 'cài',  meaning: 'dish / vegetable', hsk: 1, tone: 4, base: 'cai' },
  { id: 74, word: '米饭', pinyin: 'mǐfàn', meaning: 'rice',     hsk: 1 },
  { id: 75, word: '苹果', pinyin: 'píngguǒ', meaning: 'apple',  hsk: 1 },
  { id: 76, word: '水果', pinyin: 'shuǐguǒ', meaning: 'fruit',  hsk: 1 },
  { id: 77, word: '西瓜', pinyin: 'xīguā',  meaning: 'watermelon', hsk: 1 },

  // ── Family ───────────────────────────────────────────────
  { id: 78, word: '爸爸', pinyin: 'bàba',   meaning: 'dad / father', hsk: 1 },
  { id: 79, word: '妈妈', pinyin: 'māma',   meaning: 'mom / mother', hsk: 1 },
  { id: 80, word: '儿子', pinyin: 'érzi',   meaning: 'son',          hsk: 2 },
  { id: 81, word: '女儿', pinyin: "nǚ'ér",  meaning: 'daughter',     hsk: 2 },
  { id: 82, word: '朋友', pinyin: 'péngyou', meaning: 'friend',       hsk: 1 },

  // ── People / Jobs ─────────────────────────────────────────
  { id: 83, word: '老师',  pinyin: 'lǎoshī',   meaning: 'teacher',   hsk: 1 },
  { id: 84, word: '学生',  pinyin: 'xuésheng', meaning: 'student',   hsk: 1 },
  { id: 85, word: '同学',  pinyin: 'tóngxué',  meaning: 'classmate', hsk: 1 },
  { id: 86, word: '医生',  pinyin: 'yīshēng',  meaning: 'doctor',    hsk: 1 },
  { id: 87, word: '先生',  pinyin: 'xiānsheng', meaning: 'Mr. / sir', hsk: 1 },
  { id: 88, word: '小姐',  pinyin: 'xiǎojiě',  meaning: 'Miss',      hsk: 1 },

  // ── Time ─────────────────────────────────────────────────
  { id: 89,  word: '今天', pinyin: 'jīntiān',  meaning: 'today',     hsk: 1 },
  { id: 90,  word: '明天', pinyin: 'míngtiān', meaning: 'tomorrow',  hsk: 1 },
  { id: 91,  word: '昨天', pinyin: 'zuótiān',  meaning: 'yesterday', hsk: 1 },
  { id: 92,  word: '上午', pinyin: 'shàngwǔ',  meaning: 'morning (AM)', hsk: 1 },
  { id: 93,  word: '下午', pinyin: 'xiàwǔ',    meaning: 'afternoon (PM)', hsk: 1 },
  { id: 94,  word: '中午', pinyin: 'zhōngwǔ',  meaning: 'noon',      hsk: 1 },
  { id: 95,  word: '年',   pinyin: 'nián',     meaning: 'year',      hsk: 1, tone: 2, base: 'nian' },
  { id: 96,  word: '月',   pinyin: 'yuè',      meaning: 'month',     hsk: 1, tone: 4, base: 'yue' },
  { id: 97,  word: '日',   pinyin: 'rì',       meaning: 'day / date', hsk: 1, tone: 4, base: 'ri' },
  { id: 98,  word: '星期', pinyin: 'xīngqī',   meaning: 'week',      hsk: 1 },
  { id: 99,  word: '分钟', pinyin: 'fēnzhōng', meaning: 'minute',    hsk: 1 },

  // ── Places ───────────────────────────────────────────────
  { id: 100, word: '中国',  pinyin: 'Zhōngguó',  meaning: 'China',        hsk: 1 },
  { id: 101, word: '北京',  pinyin: 'Běijīng',   meaning: 'Beijing',      hsk: 1 },
  { id: 102, word: '学校',  pinyin: 'xuéxiào',   meaning: 'school',       hsk: 1 },
  { id: 103, word: '医院',  pinyin: 'yīyuàn',    meaning: 'hospital',     hsk: 1 },
  { id: 104, word: '商店',  pinyin: 'shāngdiàn', meaning: 'shop / store', hsk: 1 },
  { id: 105, word: '饭店',  pinyin: 'fàndiàn',   meaning: 'restaurant',   hsk: 1 },
  { id: 106, word: '前面',  pinyin: 'qiánmiàn',  meaning: 'in front',     hsk: 1 },
  { id: 107, word: '后面',  pinyin: 'hòumiàn',   meaning: 'behind',       hsk: 1 },
  { id: 108, word: '里面',  pinyin: 'lǐmiàn',    meaning: 'inside',       hsk: 2 },

  // ── Transport ────────────────────────────────────────────
  { id: 109, word: '出租车', pinyin: 'chūzūchē', meaning: 'taxi',      hsk: 1 },
  { id: 110, word: '飞机',   pinyin: 'fēijī',    meaning: 'airplane',  hsk: 1 },

  // ── Objects & Technology ──────────────────────────────────
  { id: 111, word: '电脑',  pinyin: 'diànnǎo', meaning: 'computer',    hsk: 1 },
  { id: 112, word: '电视',  pinyin: 'diànshì', meaning: 'television',  hsk: 1 },
  { id: 113, word: '电影',  pinyin: 'diànyǐng', meaning: 'movie / film', hsk: 1 },
  { id: 114, word: '桌子',  pinyin: 'zhuōzi',  meaning: 'table / desk', hsk: 1 },
  { id: 115, word: '椅子',  pinyin: 'yǐzi',    meaning: 'chair',       hsk: 1 },
  { id: 116, word: '杯子',  pinyin: 'bēizi',   meaning: 'cup / glass', hsk: 1 },

  // ── Question Words ────────────────────────────────────────
  { id: 117, word: '什么',  pinyin: 'shénme',   meaning: 'what',         hsk: 1 },
  { id: 118, word: '哪',    pinyin: 'nǎ',       meaning: 'which',        hsk: 1, tone: 3, base: 'na' },
  { id: 119, word: '哪儿',  pinyin: 'nǎr',      meaning: 'where',        hsk: 1 },
  { id: 120, word: '谁',    pinyin: 'shéi',     meaning: 'who',          hsk: 1, tone: 2, base: 'shei' },
  { id: 121, word: '多少',  pinyin: 'duōshao',  meaning: 'how much / many', hsk: 1 },
  { id: 122, word: '几',    pinyin: 'jǐ',       meaning: 'how many (small number)', hsk: 1, tone: 3, base: 'ji' },
  { id: 123, word: '怎么',  pinyin: 'zěnme',    meaning: 'how',          hsk: 1 },
  { id: 124, word: '怎么样', pinyin: 'zěnmeyàng', meaning: 'how about / how is it', hsk: 1 },

  // ── Useful Grammar Words ─────────────────────────────────
  { id: 125, word: '这',   pinyin: 'zhè',  meaning: 'this',    hsk: 1, tone: 4, base: 'zhe' },
  { id: 126, word: '那',   pinyin: 'nà',   meaning: 'that',    hsk: 1, tone: 4, base: 'na' },
  { id: 127, word: '在',   pinyin: 'zài',  meaning: 'at / in', hsk: 1, tone: 4, base: 'zai' },
  { id: 128, word: '和',   pinyin: 'hé',   meaning: 'and',     hsk: 1, tone: 2, base: 'he' },
  { id: 129, word: '上',   pinyin: 'shàng', meaning: 'on / above / up', hsk: 1, tone: 4, base: 'shang' },
  { id: 130, word: '下',   pinyin: 'xià',  meaning: 'below / down',    hsk: 1, tone: 4, base: 'xia' },
  { id: 131, word: '里',   pinyin: 'lǐ',   meaning: 'inside',           hsk: 1, tone: 3, base: 'li' },
  { id: 132, word: '会',   pinyin: 'huì',  meaning: 'can / will',       hsk: 1, tone: 4, base: 'hui' },
  { id: 133, word: '能',   pinyin: 'néng', meaning: 'can / able to',    hsk: 1, tone: 2, base: 'neng' },
  { id: 134, word: '现在', pinyin: 'xiànzài', meaning: 'now',           hsk: 1 },
  { id: 135, word: '名字', pinyin: 'míngzi',  meaning: 'name',          hsk: 1 },
  { id: 136, word: '天气', pinyin: 'tiānqì',  meaning: 'weather',       hsk: 1 },
  { id: 137, word: '东西', pinyin: 'dōngxi',  meaning: 'thing / stuff', hsk: 1 },
  { id: 138, word: '生日', pinyin: 'shēngrì', meaning: 'birthday',      hsk: 1 },
  { id: 139, word: '汉语', pinyin: 'Hànyǔ',  meaning: 'Chinese language', hsk: 1 },
]

// Words that can be used for the Tone Drill (have base + tone fields)
export const drillWords = words.filter(w => w.tone && w.base)
