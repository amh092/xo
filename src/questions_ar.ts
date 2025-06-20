export interface Question {
  question: string;
  choices: string[];
  answer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const AR_CATEGORIES = [
  { value: 'all', label: 'الكل' },
  { value: 'جغرافيا', label: 'جغرافيا' },
  { value: 'علوم', label: 'علوم' },
  { value: 'تاريخ', label: 'تاريخ' },
  { value: 'رياضة', label: 'رياضة' },
  { value: 'عام', label: 'عام' },
  { value: 'إسلاميات', label: 'إسلاميات' }
];

export const AR_QUESTIONS: Question[] = [
  { question: "ما هي عاصمة المملكة العربية السعودية؟", choices: ["الرياض", "جدة", "الدمام", "مكة"], answer: "الرياض", category: "جغرافيا", difficulty: 'easy' },
  { question: "كم عدد ألوان علم مصر؟", choices: ["3", "2", "4", "5"], answer: "3", category: "عام", difficulty: 'easy' },
  { question: "ما هو الحيوان الذي يُلقب بسفينة الصحراء؟", choices: ["الجمل", "الحصان", "الفيل", "الأسد"], answer: "الجمل", category: "علوم", difficulty: 'easy' },
  { question: "من هو مخترع المصباح الكهربائي؟", choices: ["توماس إديسون", "نيوتن", "أينشتاين", "ابن سينا"], answer: "توماس إديسون", category: "علوم", difficulty: 'easy' },
  { question: "ما هو أكبر كوكب في النظام الشمسي؟", choices: ["المشتري", "الأرض", "المريخ", "عطارد"], answer: "المشتري", category: "علوم", difficulty: 'easy' },
  { question: "ما هو البحر الذي يفصل بين السعودية ومصر؟", choices: ["البحر الأحمر", "البحر الأسود", "بحر العرب", "بحر قزوين"], answer: "البحر الأحمر", category: "جغرافيا", difficulty: 'easy' },
  { question: "في أي قارة تقع دولة المغرب؟", choices: ["آسيا", "أفريقيا", "أوروبا", "أمريكا"], answer: "أفريقيا", category: "جغرافيا", difficulty: 'easy' },
  { question: "ما هو العنصر الكيميائي الذي رمزه O؟", choices: ["أكسجين", "ذهب", "حديد", "هيدروجين"], answer: "أكسجين", category: "علوم", difficulty: 'easy' },
  { question: "من هو الشاعر المعروف بلقب أمير الشعراء؟", choices: ["أحمد شوقي", "نزار قباني", "المتنبي", "عنترة بن شداد"], answer: "أحمد شوقي", category: "تاريخ", difficulty: 'easy' },
  { question: "ما هو الحيوان الوطني في أستراليا؟", choices: ["الكنغر", "الدب القطبي", "النمر", "الأسد"], answer: "الكنغر", category: "عام", difficulty: 'easy' },
  { question: "كم عدد الكواكب في المجموعة الشمسية؟", choices: ["8", "7", "9", "10"], answer: "8", category: "علوم", difficulty: 'easy' },
  { question: "ما هي اللغة الرسمية في البرازيل؟", choices: ["البرتغالية", "الإسبانية", "الإنجليزية", "الفرنسية"], answer: "البرتغالية", category: "عام", difficulty: 'easy' },
  { question: "ما هو أعلى جبل في العالم؟", choices: ["إيفرست", "كيلمنجارو", "الهيمالايا", "الألب"], answer: "إيفرست", category: "جغرافيا", difficulty: 'easy' },
  { question: "من هو أول رئيس لمصر بعد الثورة؟", choices: ["محمد نجيب", "جمال عبد الناصر", "أنور السادات", "حسني مبارك"], answer: "محمد نجيب", category: "تاريخ", difficulty: 'easy' },
  { question: "ما هو اسم أطول نهر في العالم؟", choices: ["النيل", "الأمازون", "اليانغتسي", "الدانوب"], answer: "النيل", category: "جغرافيا", difficulty: 'easy' },
  { question: "من هو مؤسس شركة مايكروسوفت؟", choices: ["بيل غيتس", "ستيف جوبز", "إيلون ماسك", "مارك زوكربيرغ"], answer: "بيل غيتس", category: "عام", difficulty: 'easy' },
  { question: "ما هي عاصمة اليابان؟", choices: ["طوكيو", "بكين", "سيول", "بانكوك"], answer: "طوكيو", category: "جغرافيا", difficulty: 'easy' },
  { question: "ما هو أسرع حيوان بري؟", choices: ["الفهد", "الأسد", "الحصان", "الغزال"], answer: "الفهد", category: "علوم", difficulty: 'easy' },
  { question: "كم عدد أركان الإسلام؟", choices: ["5", "4", "6", "7"], answer: "5", category: "عام", difficulty: 'easy' },
  { question: "من هو النبي الذي ابتلعه الحوت؟", choices: ["يونس", "موسى", "إبراهيم", "نوح"], answer: "يونس", category: "تاريخ", difficulty: 'easy' },
  { question: "ما هي عاصمة فلسطين؟", choices: ["القدس", "رام الله", "غزة", "نابلس"], answer: "القدس", category: "جغرافيا", difficulty: 'easy' },
  { question: "ما هو الكوكب الأقرب للشمس؟", choices: ["عطارد", "الزهرة", "الأرض", "المريخ"], answer: "عطارد", category: "علوم", difficulty: 'easy' },
  { question: "ما هو الحيوان الذي ينام وعيناه مفتوحتان؟", choices: ["الدلفين", "الأسد", "الذئب", "الحصان"], answer: "الدلفين", category: "علوم", difficulty: 'easy' },
  { question: "من هو مكتشف الجاذبية الأرضية؟", choices: ["نيوتن", "أينشتاين", "جاليليو", "أرخميدس"], answer: "نيوتن", category: "علوم", difficulty: 'easy' },

  // أسئلة إضافية
  { question: "ما هو أسرع طائر في العالم؟", choices: ["الصقر", "النسر", "الحمام", "البومة"], answer: "الصقر", category: "علوم", difficulty: 'easy' },
  { question: "في أي قارة تقع دولة البرازيل؟", choices: ["أمريكا الجنوبية", "أوروبا", "آسيا", "أفريقيا"], answer: "أمريكا الجنوبية", category: "جغرافيا", difficulty: 'easy' },
  { question: "من هو أول إنسان صعد إلى القمر؟", choices: ["نيل أرمسترونغ", "يوري غاغارين", "مايكل كولينز", "باز ألدرين"], answer: "نيل أرمسترونغ", category: "تاريخ", difficulty: 'easy' },
  { question: "كم عدد أيام الأسبوع؟", choices: ["7", "6", "8", "5"], answer: "7", category: "عام", difficulty: 'easy' },
  { question: "ما هي عاصمة تركيا؟", choices: ["أنقرة", "إسطنبول", "إزمير", "بورصة"], answer: "أنقرة", category: "جغرافيا", difficulty: 'easy' },
  { question: "ما هو العنصر الذي يرمز له بالرمز H؟", choices: ["هيدروجين", "هيليوم", "حديد", "ذهب"], answer: "هيدروجين", category: "علوم", difficulty: 'easy' },
  { question: "كم عدد لاعبي فريق كرة القدم؟", choices: ["11", "10", "12", "9"], answer: "11", category: "رياضة", difficulty: 'easy' },
  { question: "ما هو أكبر محيط في العالم؟", choices: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"], answer: "المحيط الهادئ", category: "جغرافيا", difficulty: 'easy' },

  // أسئلة دينية
  { question: "ما هو أول أركان الإسلام؟", choices: ["الشهادتان", "الصلاة", "الزكاة", "الصوم"], answer: "الشهادتان", category: "ديني", difficulty: 'easy' },
  { question: "كم عدد الصلوات المفروضة في اليوم؟", choices: ["خمس", "أربع", "ست", "سبع"], answer: "خمس", category: "ديني", difficulty: 'easy' },
  { question: "ما هو اسم النبي الذي بُعث إلى قوم عاد؟", choices: ["هود", "صالح", "شعيب", "يونس"], answer: "هود", category: "ديني", difficulty: 'easy' },
  { question: "في أي شهر يصوم المسلمون؟", choices: ["رمضان", "شعبان", "شوال", "ذو الحجة"], answer: "رمضان", category: "ديني", difficulty: 'easy' },
  { question: "ما هي القبلة التي يتوجه إليها المسلمون في الصلاة؟", choices: ["الكعبة", "المسجد الأقصى", "المدينة المنورة", "جبل عرفات"], answer: "الكعبة", category: "ديني", difficulty: 'easy' },
  { question: "ما هو الكتاب السماوي الذي أُنزل على النبي محمد؟", choices: ["القرآن الكريم", "الإنجيل", "التوراة", "الزبور"], answer: "القرآن الكريم", category: "ديني", difficulty: 'easy' },

  // أسئلة إسلاميات صعبة
  { question: "ما هو اسم الغزوة التي وقعت في شهر رمضان في السنة الثانية للهجرة؟", choices: ["غزوة بدر", "غزوة أحد", "غزوة تبوك", "غزوة الخندق"], answer: "غزوة بدر", category: "إسلاميات", difficulty: 'hard' },
  { question: "كم كان عمر النبي محمد عند البعثة؟", choices: ["40 سنة", "35 سنة", "45 سنة", "50 سنة"], answer: "40 سنة", category: "إسلاميات", difficulty: 'hard' },
  { question: "من هو الصحابي الذي لقب بـ(سيف الله المسلول)؟", choices: ["خالد بن الوليد", "علي بن أبي طالب", "عمر بن الخطاب", "أبو بكر الصديق"], answer: "خالد بن الوليد", category: "إسلاميات", difficulty: 'hard' },
  { question: "ما هو اسم أول مسجد بني في الإسلام؟", choices: ["مسجد قباء", "المسجد الحرام", "المسجد النبوي", "المسجد الأقصى"], answer: "مسجد قباء", category: "إسلاميات", difficulty: 'hard' },
  { question: "كم عدد سور القرآن الكريم؟", choices: ["114", "113", "112", "115"], answer: "114", category: "إسلاميات", difficulty: 'hard' },
  { question: "ما هي السورة التي لا تبدأ بالبسملة؟", choices: ["سورة التوبة", "سورة الفاتحة", "سورة الإخلاص", "سورة الكهف"], answer: "سورة التوبة", category: "إسلاميات", difficulty: 'hard' },

  // أسئلة كرة القدم
  { question: "من هو اللاعب الذي يُلقب بالظاهرة؟", choices: ["رونالدو البرازيلي", "ميسي", "زيدان", "بيليه"], answer: "رونالدو البرازيلي", category: "رياضة", difficulty: 'easy' },
  { question: "كم عدد بطولات كأس العالم التي فازت بها البرازيل؟", choices: ["5", "4", "3", "6"], answer: "5", category: "رياضة", difficulty: 'medium' },
  { question: "ما هو النادي الذي يُعرف بـ(الملكي)؟", choices: ["ريال مدريد", "برشلونة", "مانشستر يونايتد", "يوفنتوس"], answer: "ريال مدريد", category: "رياضة", difficulty: 'easy' },
  { question: "من هو هداف كأس العالم التاريخي؟", choices: ["ميروسلاف كلوزه", "بيليه", "رونالدو", "مارادونا"], answer: "ميروسلاف كلوزه", category: "رياضة", difficulty: 'medium' },
  { question: "في أي دولة أُقيمت أول بطولة لكأس العالم؟", choices: ["الأوروغواي", "إيطاليا", "البرازيل", "فرنسا"], answer: "الأوروغواي", category: "رياضة", difficulty: 'medium' },
  { question: "ما هو اسم الجائزة التي تُمنح لأفضل لاعب في العالم؟", choices: ["الكرة الذهبية", "الحذاء الذهبي", "الكرة الفضية", "الكأس الذهبية"], answer: "الكرة الذهبية", category: "رياضة", difficulty: 'easy' },
  { question: "كم عدد اللاعبين في فريق كرة القدم الأساسي؟", choices: ["11", "10", "12", "9"], answer: "11", category: "رياضة", difficulty: 'easy' },

  // أسئلة إسلامية إضافية
  { question: "كم عدد آيات سورة البقرة؟", choices: ["286", "285", "287", "288"], answer: "286", category: "إسلاميات", difficulty: 'medium' },
  { question: "من هو النبي الذي ابتلعه الحوت؟", choices: ["يونس", "موسى", "إبراهيم", "إلياس"], answer: "يونس", category: "إسلاميات", difficulty: 'easy' },
  { question: "ما هي أول كلمة نزلت في القرآن الكريم؟", choices: ["اقرأ", "الحمد", "بسم", "قل"], answer: "اقرأ", category: "إسلاميات", difficulty: 'easy' },
  { question: "ما هي السورة التي تُسمى قلب القرآن؟", choices: ["يس", "الفاتحة", "الرحمن", "البقرة"], answer: "يس", category: "إسلاميات", difficulty: 'medium' },
  { question: "في أي سورة وردت آية الكرسي؟", choices: ["البقرة", "آل عمران", "النساء", "المائدة"], answer: "البقرة", category: "إسلاميات", difficulty: 'easy' },

  // أسئلة رياضية إضافية
  { question: "من هو أكثر لاعب سجل أهدافًا في تاريخ كأس العالم؟", choices: ["ميروسلاف كلوزه", "بيليه", "رونالدو", "جيرد مولر"], answer: "ميروسلاف كلوزه", category: "رياضة", difficulty: 'hard' },
  { question: "كم عدد اللاعبين في فريق كرة السلة الأساسي؟", choices: ["5", "6", "7", "8"], answer: "5", category: "رياضة", difficulty: 'easy' },
  { question: "ما هو أول منتخب عربي يصل إلى نصف نهائي كأس العالم للشباب؟", choices: ["مصر", "المغرب", "السعودية", "قطر"], answer: "مصر", category: "رياضة", difficulty: 'medium' },
  { question: "من هو أسرع رجل في العالم؟", choices: ["يوسين بولت", "كارل لويس", "جاستن غاتلين", "تايسون غاي"], answer: "يوسين بولت", category: "رياضة", difficulty: 'easy' },
  { question: "ما هو النادي الأكثر تتويجًا بالدوري الإنجليزي الممتاز؟", choices: ["مانشستر يونايتد", "ليفربول", "تشيلسي", "أرسنال"], answer: "مانشستر يونايتد", category: "رياضة", difficulty: 'medium' },

  // أسئلة إسلامية جديدة
  { question: "ما هي السورة التي تعدل ثلث القرآن؟", choices: ["الإخلاص", "الفلق", "الكوثر", "الناس"], answer: "الإخلاص", category: "إسلاميات", difficulty: 'easy' },
  { question: "كم عدد سور القرآن الكريم؟", choices: ["114", "113", "112", "115"], answer: "114", category: "إسلاميات", difficulty: 'easy' },
  { question: "من هو أول الأنبياء؟", choices: ["آدم", "نوح", "إبراهيم", "موسى"], answer: "آدم", category: "إسلاميات", difficulty: 'easy' },
  { question: "ما هي الصلاة التي تُسمى الصلاة الوسطى؟", choices: ["العصر", "الظهر", "المغرب", "العشاء"], answer: "العصر", category: "إسلاميات", difficulty: 'medium' },
  { question: "من هو النبي الذي بنى الكعبة مع ابنه؟", choices: ["إبراهيم", "نوح", "موسى", "عيسى"], answer: "إبراهيم", category: "إسلاميات", difficulty: 'medium' },

  // أسئلة رياضية جديدة
  { question: "ما هو أول فريق عربي تأهل لكأس العالم؟", choices: ["مصر", "المغرب", "الجزائر", "السعودية"], answer: "مصر", category: "رياضة", difficulty: 'medium' },
  { question: "كم عدد أشواط كرة السلة؟", choices: ["4", "2", "3", "5"], answer: "4", category: "رياضة", difficulty: 'easy' },
  { question: "من هو اللاعب الذي حصل على أكثر كرات ذهبية؟", choices: ["ليونيل ميسي", "كريستيانو رونالدو", "يوهان كرويف", "رونالدو البرازيلي"], answer: "ليونيل ميسي", category: "رياضة", difficulty: 'medium' },
  { question: "أين أُقيمت أول دورة ألعاب أولمبية حديثة؟", choices: ["أثينا", "باريس", "لندن", "روما"], answer: "أثينا", category: "رياضة", difficulty: 'hard' },
  { question: "ما هو عدد اللاعبين في كرة الطائرة لكل فريق في الملعب؟", choices: ["6", "7", "5", "8"], answer: "6", category: "رياضة", difficulty: 'easy' },

  // أسئلة ثقافة عامة جديدة
  { question: "ما هو أطول نهر في العالم؟", choices: ["النيل", "الأمازون", "اليانغتسي", "الدانوب"], answer: "النيل", category: "ثقافة عامة", difficulty: 'medium' },
  { question: "ما هي عاصمة اليابان؟", choices: ["طوكيو", "بكين", "سيول", "بانكوك"], answer: "طوكيو", category: "ثقافة عامة", difficulty: 'easy' },
  { question: "في أي قارة تقع دولة الأرجنتين؟", choices: ["أمريكا الجنوبية", "أوروبا", "آسيا", "أفريقيا"], answer: "أمريكا الجنوبية", category: "ثقافة عامة", difficulty: 'easy' },
  { question: "ما هو الكوكب الأقرب إلى الشمس؟", choices: ["عطارد", "الزهرة", "الأرض", "المريخ"], answer: "عطارد", category: "ثقافة عامة", difficulty: 'easy' },
  { question: "من هو مخترع المصباح الكهربائي؟", choices: ["توماس إديسون", "جراهام بيل", "ألبرت أينشتاين", "إسحاق نيوتن"], answer: "توماس إديسون", category: "ثقافة عامة", difficulty: 'medium' },
  // أسئلة جديدة متنوعة
{ question: "ما هو اسم عاصمة كندا؟", choices: ["أوتاوا", "تورنتو", "فانكوفر", "مونتريال"], answer: "أوتاوا", category: "جغرافيا", difficulty: 'medium' },
{ question: "كم عدد الأسنان الدائمة لدى الإنسان البالغ؟", choices: ["32", "30", "28", "34"], answer: "32", category: "علوم", difficulty: 'medium' },
{ question: "من هو مخترع الهاتف؟", choices: ["جراهام بيل", "توماس إديسون", "ألبرت أينشتاين", "نيوتن"], answer: "جراهام بيل", category: "ثقافة عامة", difficulty: 'medium' },
{ question: "في أي سنة هاجر النبي محمد إلى المدينة؟", choices: ["622م", "610م", "632م", "600م"], answer: "622م", category: "إسلاميات", difficulty: 'medium' },
{ question: "من هو الصحابي الذي جمع القرآن في مصحف واحد؟", choices: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"], answer: "عثمان بن عفان", category: "إسلاميات", difficulty: 'medium' },
{ question: "من هو أول من مشى على سطح القمر؟", choices: ["نيل أرمسترونغ", "باز ألدرين", "يوري غاغارين", "مايكل كولينز"], answer: "نيل أرمسترونغ", category: "تاريخ", difficulty: 'medium' }, // was already in original, removed
{ question: "كم عدد الأضلاع في جسم الإنسان؟", choices: ["24", "26", "22", "28"], answer: "24", category: "علوم", difficulty: 'medium' },
{ question: "من هو بطل كأس العالم 2018؟", choices: ["فرنسا", "كرواتيا", "البرازيل", "ألمانيا"], answer: "فرنسا", category: "رياضة", difficulty: 'medium' },
{ question: "ما هي الدولة العربية التي تطل على المحيط الأطلسي والبحر المتوسط؟", choices: ["المغرب", "الجزائر", "تونس", "ليبيا"], answer: "المغرب", category: "جغرافيا", difficulty: 'medium' },
{ question: "ما هو العضو الذي يُنتج الأنسولين في جسم الإنسان؟", choices: ["البنكرياس", "الكبد", "الكلى", "الطحال"], answer: "البنكرياس", category: "علوم", difficulty: 'medium' },

];
