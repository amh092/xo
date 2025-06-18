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
];
