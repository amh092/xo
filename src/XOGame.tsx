import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './XOGame.css';


interface Question {
  question: string;
  choices: string[];
  answer: string;
  category: string;
} // Added category

// Arabic questions
const AR_CATEGORIES = [
  { value: 'all', label: 'الكل' },
  { value: 'جغرافيا', label: 'جغرافيا' },
  { value: 'علوم', label: 'علوم' },
  { value: 'تاريخ', label: 'تاريخ' },
  { value: 'رياضة', label: 'رياضة' },
  { value: 'عام', label: 'عام' }
];
const QUESTIONS: Question[] = [
  { question: "ما هي عاصمة المملكة العربية السعودية؟", choices: ["الرياض", "جدة", "الدمام", "مكة"], answer: "الرياض", category: "جغرافيا" },
  { question: "كم عدد ألوان علم مصر؟", choices: ["3", "2", "4", "5"], answer: "3", category: "عام" },
  { question: "ما هو الحيوان الذي يُلقب بسفينة الصحراء؟", choices: ["الجمل", "الحصان", "الفيل", "الأسد"], answer: "الجمل", category: "علوم" },
  { question: "من هو مخترع المصباح الكهربائي؟", choices: ["توماس إديسون", "نيوتن", "أينشتاين", "ابن سينا"], answer: "توماس إديسون", category: "علوم" },
  { question: "ما هو أكبر كوكب في النظام الشمسي؟", choices: ["المشتري", "الأرض", "المريخ", "عطارد"], answer: "المشتري", category: "علوم" },
  { question: "ما هو البحر الذي يفصل بين السعودية ومصر؟", choices: ["البحر الأحمر", "البحر الأسود", "بحر العرب", "بحر قزوين"], answer: "البحر الأحمر", category: "جغرافيا" },
  { question: "في أي قارة تقع دولة المغرب؟", choices: ["آسيا", "أفريقيا", "أوروبا", "أمريكا"], answer: "أفريقيا", category: "جغرافيا" },
  { question: "ما هو العنصر الكيميائي الذي رمزه O؟", choices: ["أكسجين", "ذهب", "حديد", "هيدروجين"], answer: "أكسجين", category: "علوم" },
  { question: "من هو الشاعر المعروف بلقب أمير الشعراء؟", choices: ["أحمد شوقي", "نزار قباني", "المتنبي", "عنترة بن شداد"], answer: "أحمد شوقي", category: "تاريخ" },
  { question: "ما هو الحيوان الوطني في أستراليا؟", choices: ["الكنغر", "الدب القطبي", "النمر", "الأسد"], answer: "الكنغر", category: "عام" },
  { question: "كم عدد الكواكب في المجموعة الشمسية؟", choices: ["8", "7", "9", "10"], answer: "8", category: "علوم" },
  { question: "ما هي اللغة الرسمية في البرازيل؟", choices: ["البرتغالية", "الإسبانية", "الإنجليزية", "الفرنسية"], answer: "البرتغالية", category: "عام" },
  { question: "ما هو أعلى جبل في العالم؟", choices: ["إيفرست", "كيلمنجارو", "الهيمالايا", "الألب"], answer: "إيفرست", category: "جغرافيا" },
  { question: "من هو أول رئيس لمصر بعد الثورة؟", choices: ["محمد نجيب", "جمال عبد الناصر", "أنور السادات", "حسني مبارك"], answer: "محمد نجيب", category: "تاريخ" },
  { question: "ما هو اسم أطول نهر في العالم؟", choices: ["النيل", "الأمازون", "اليانغتسي", "الدانوب"], answer: "النيل", category: "جغرافيا" },
  { question: "من هو مؤسس شركة مايكروسوفت؟", choices: ["بيل غيتس", "ستيف جوبز", "إيلون ماسك", "مارك زوكربيرغ"], answer: "بيل غيتس", category: "عام" },
  { question: "ما هي عاصمة اليابان؟", choices: ["طوكيو", "بكين", "سيول", "بانكوك"], answer: "طوكيو", category: "جغرافيا" },
  { question: "ما هو أسرع حيوان بري؟", choices: ["الفهد", "الأسد", "الحصان", "الغزال"], answer: "الفهد", category: "علوم" },
  { question: "كم عدد أركان الإسلام؟", choices: ["5", "4", "6", "7"], answer: "5", category: "عام" },
  { question: "من هو النبي الذي ابتلعه الحوت؟", choices: ["يونس", "موسى", "إبراهيم", "نوح"], answer: "يونس", category: "تاريخ" },
  { question: "ما هي عاصمة فلسطين؟", choices: ["القدس", "رام الله", "غزة", "نابلس"], answer: "القدس", category: "جغرافيا" },
  { question: "ما هو الكوكب الأقرب للشمس؟", choices: ["عطارد", "الزهرة", "الأرض", "المريخ"], answer: "عطارد", category: "علوم" },
  { question: "ما هو الحيوان الذي ينام وعيناه مفتوحتان؟", choices: ["الدلفين", "الأسد", "الذئب", "الحصان"], answer: "الدلفين", category: "علوم" },
  { question: "من هو مكتشف الجاذبية الأرضية؟", choices: ["نيوتن", "أينشتاين", "جاليليو", "أرخميدس"], answer: "نيوتن", category: "علوم" },
  { question: "ما هو أكبر محيط في العالم؟", choices: ["الهادئ", "الأطلسي", "الهندي", "المتجمد الشمالي"], answer: "الهادئ", category: "جغرافيا" },
  { question: "في أي عام تأسست الأمم المتحدة؟", choices: ["1945", "1950", "1939", "1960"], answer: "1945", category: "تاريخ" },
  { question: "ما هو اسم بيت الدجاج؟", choices: ["قن", "عش", "مزرعة", "زريبة"], answer: "قن", category: "عام" },
  { question: "ما هو الحيوان الذي لا يشرب الماء؟", choices: ["الجرذ الكنغري", "الجمل", "الحصان", "الأسد"], answer: "الجرذ الكنغري", category: "علوم" },
  { question: "ما هو العنصر الأساسي في صناعة الزجاج؟", choices: ["السيليكون", "الحديد", "النحاس", "الكربون"], answer: "السيليكون", category: "علوم" },
  { question: "من هو مؤسس علم الكيمياء؟", choices: ["جابر بن حيان", "ابن سينا", "الخوارزمي", "الرازي"], answer: "جابر بن حيان", category: "علوم" },
  { question: "ما هي السورة التي تُسمى قلب القرآن؟", choices: ["يس", "الفاتحة", "البقرة", "الرحمن"], answer: "يس", category: "تاريخ" },
  { question: "كم عدد أسنان الإنسان البالغ؟", choices: ["32", "28", "30", "36"], answer: "32", category: "علوم" },
  { question: "ما هو اسم العملة في دولة الكويت؟", choices: ["دينار", "ريال", "درهم", "جنيه"], answer: "دينار", category: "عام" },
  { question: "ما هو اسم أكبر صحراء في العالم؟", choices: ["الصحراء الكبرى", "صحراء الربع الخالي", "صحراء أتاكاما", "صحراء جوبي"], answer: "الصحراء الكبرى", category: "جغرافيا" },
  { question: "ما هو الطائر الذي يلد ولا يبيض؟", choices: ["الخفاش", "الدجاجة", "البومة", "النسر"], answer: "الخفاش", category: "علوم" },
  { question: "ما هو أسرع الطيور؟", choices: ["الشاهين", "النسر", "الحمام", "النعامة"], answer: "الشاهين", category: "علوم" },
  { question: "من هو الصحابي الذي لقب بالفاروق؟", choices: ["عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "علي بن أبي طالب"], answer: "عمر بن الخطاب", category: "تاريخ" },
  { question: "ما هو اسم الجهاز الذي يستخدم لقياس درجة الحرارة؟", choices: ["الترمومتر", "البارومتر", "الهيدرومتر", "المانومتر"], answer: "الترمومتر", category: "علوم" },
  { question: "ما هي الدولة العربية التي يمر بها خط الاستواء؟", choices: ["الصومال", "مصر", "السودان", "المغرب"], answer: "الصومال", category: "جغرافيا" },
  { question: "ما هو اسم أنثى الحمار؟", choices: ["أتان", "فرس", "ناقة", "بقرة"], answer: "أتان", category: "علوم" },
  { question: "ما هو اسم بيت النحل؟", choices: ["خلية", "قن", "عش", "زريبة"], answer: "خلية", category: "علوم" },
  { question: "من هو أول من صام؟", choices: ["آدم عليه السلام", "نوح عليه السلام", "إبراهيم عليه السلام", "موسى عليه السلام"], answer: "آدم عليه السلام", category: "تاريخ" },
  { question: "ما هو اسم أول جامعة في العالم؟", choices: ["جامعة القرويين", "جامعة الأزهر", "جامعة هارفارد", "جامعة كامبريدج"], answer: "جامعة القرويين", category: "تاريخ" },
  { question: "كم عدد قارات العالم؟", choices: ["7", "6", "5", "8"], answer: "7", category: "جغرافيا" },
  { question: "ما هو اسم صغير الأسد؟", choices: ["شبل", "جرو", "عجل", "فرخ"], answer: "شبل", category: "علوم" },
  { question: "ما هو اسم بيت الأسد؟", choices: ["عرين", "قن", "عش", "زريبة"], answer: "عرين", category: "علوم" },
  { question: "ما هي الدولة التي تسمى بلاد الرافدين؟", choices: ["العراق", "مصر", "سوريا", "لبنان"], answer: "العراق", category: "تاريخ" },
  { question: "ما هو اسم أقوى عظم في جسم الإنسان؟", choices: ["عظم الفخذ", "عظم الساق", "عظم الذراع", "عظم الكتف"], answer: "عظم الفخذ", category: "علوم" },
  { question: "ما هو اسم بيت الأرنب؟", choices: ["جحر", "عش", "قن", "زريبة"], answer: "جحر", category: "علوم" },
  { question: "ما هو اسم بيت الطائر؟", choices: ["عش", "قن", "خلية", "جحر"], answer: "عش", category: "علوم" },
  { question: "من هو العالم الذي اخترع المصباح الكهربائي؟", choices: ["توماس إديسون", "نيوتن", "أينشتاين", "ابن سينا"], answer: "توماس إديسون", category: "علوم" },
  { question: "ما هو الحيوان الذي يستطيع العيش في الماء واليابسة؟", choices: ["الضفدع", "الحصان", "الجمل", "الأسد"], answer: "الضفدع", category: "علوم" },
  { question: "ما هو اسم بيت الدب؟", choices: ["عرين", "جحر", "قن", "عش"], answer: "عرين", category: "علوم" },
  { question: "ما هو اسم صغير الحصان؟", choices: ["مهر", "جحش", "شبل", "عجل"], answer: "مهر", category: "علوم" },
  { question: "ما هو اسم بيت الكلب؟", choices: ["وكر", "قن", "عش", "خلية"], answer: "وكر", category: "علوم" },
  { question: "ما هي الدولة التي يوجد بها أكبر عدد من المسلمين؟", choices: ["إندونيسيا", "مصر", "السعودية", "تركيا"], answer: "إندونيسيا", category: "جغرافيا" },
  { question: "ما هو أكبر بحر في العالم؟", choices: ["بحر الفلبين", "بحر العرب", "البحر الأحمر", "البحر الأبيض المتوسط"], answer: "بحر الفلبين", category: "جغرافيا" },
  { question: "ما هي عاصمة تركيا؟", choices: ["أنقرة", "إسطنبول", "إزمير", "بورصة"], answer: "أنقرة", category: "جغرافيا" },
  { question: "ما هو اسم أول إنسان صعد إلى القمر؟", choices: ["نيل أرمسترونغ", "يوري غاغارين", "باز ألدرين", "جون غلين"], answer: "نيل أرمسترونغ", category: "تاريخ" },
  { question: "ما هو اسم بيت الغراب؟", choices: ["عش", "جحر", "قن", "خلية"], answer: "عش", category: "علوم" },
  { question: "ما هو اسم صغير النمر؟", choices: ["فهد", "شبل", "مهر", "جحش"], answer: "فهد", category: "علوم" },
  { question: "ما هي الدولة التي اشتهرت بصناعة الساعات؟", choices: ["سويسرا", "فرنسا", "إيطاليا", "ألمانيا"], answer: "سويسرا", category: "تاريخ" },
  { question: "ما هو اسم بيت النمل؟", choices: ["قرية", "خلية", "عش", "قن"], answer: "قرية", category: "علوم" },
  { question: "ما هو اسم صغير الفيل؟", choices: ["دغفل", "مهر", "شبل", "عجل"], answer: "دغفل", category: "علوم" },
  { question: "ما هو اسم بيت الذئب؟", choices: ["وجار", "عش", "قن", "خلية"], answer: "وجار", category: "علوم" },
  { question: "ما هو اسم بيت الثعلب؟", choices: ["وجار", "عش", "قن", "خلية"], answer: "وجار", category: "علوم" },
  { question: "ما هو اسم صغير البقرة؟", choices: ["عجل", "مهر", "شبل", "جحش"], answer: "عجل", category: "علوم" },
  // أسئلة رياضية
  { question: "ما هي الرياضة التي تُلعب بكرة صغيرة ومضرب على طاولة؟", choices: ["تنس الطاولة", "كرة القدم", "كرة السلة", "الكرة الطائرة"], answer: "تنس الطاولة", category: "رياضة" },
  { question: "كم عدد اللاعبين في فريق كرة القدم؟", choices: ["11", "7", "5", "9"], answer: "11", category: "رياضة" },
  { question: "من هو أسرع رجل في العالم؟", choices: ["يوسين بولت", "كريستيانو رونالدو", "محمد علي", "مايكل فيلبس"], answer: "يوسين بولت", category: "رياضة" },
  { question: "في أي دولة أُقيمت أول دورة ألعاب أولمبية حديثة؟", choices: ["اليونان", "إيطاليا", "فرنسا", "أمريكا"], answer: "اليونان", category: "رياضة" },
  { question: "ما هو اسم البطولة الأكبر في كرة القدم؟", choices: ["كأس العالم", "دوري الأبطال", "كأس آسيا", "كأس الأمم الأفريقية"], answer: "كأس العالم", category: "رياضة" },
];

const EN_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'Geography', label: 'Geography' },
  { value: 'Science', label: 'Science' },
  { value: 'History', label: 'History' },
  { value: 'Sports', label: 'Sports' },
  { value: 'General', label: 'General' }
];
// English questions
const EN_QUESTIONS: Question[] = [
  // Sports questions
  { question: "Which country won the FIFA World Cup in 2018?", choices: ["France", "Brazil", "Germany", "Argentina"], answer: "France", category: "Sports" },
  { question: "How many players are there in a basketball team?", choices: ["5", "6", "7", "11"], answer: "5", category: "Sports" },
  { question: "What sport is Serena Williams famous for?", choices: ["Tennis", "Golf", "Soccer", "Swimming"], answer: "Tennis", category: "Sports" },
  { question: "In which sport do you score a touchdown?", choices: ["American Football", "Basketball", "Baseball", "Soccer"], answer: "American Football", category: "Sports" },
  { question: "Which country hosts the Tour de France?", choices: ["France", "Italy", "Spain", "Germany"], answer: "France", category: "Sports" },
  { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Rome"], answer: "Paris", category: "Geography" },
  { question: "Which planet is known as the Red Planet?", choices: ["Mars", "Earth", "Jupiter", "Venus"], answer: "Mars", category: "Science" },
  { question: "Who wrote 'Romeo and Juliet'?", choices: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], answer: "Shakespeare", category: "History" },
  { question: "What is the largest mammal?", choices: ["Blue Whale", "Elephant", "Giraffe", "Rhino"], answer: "Blue Whale", category: "Science" },
  { question: "How many continents are there?", choices: ["7", "6", "5", "8"], answer: "7", category: "Geography" },
  { question: "What is the boiling point of water?", choices: ["100°C", "90°C", "80°C", "120°C"], answer: "100°C", category: "Science" },
  { question: "Which gas do plants absorb from the atmosphere?", choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", category: "Science" },
  { question: "Who painted the Mona Lisa?", choices: ["Leonardo da Vinci", "Picasso", "Van Gogh", "Michelangelo"], answer: "Leonardo da Vinci", category: "History" },
  { question: "What is the hardest natural substance?", choices: ["Diamond", "Gold", "Iron", "Silver"], answer: "Diamond", category: "Science" },
  { question: "What is the chemical symbol for gold?", choices: ["Au", "Ag", "Fe", "Go"], answer: "Au", category: "Science" },
  {
    question: "Which ocean is the largest?", choices: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific",
    category: 'Geography'
  },
  { question: "Who discovered gravity?", choices: ["Newton", "Einstein", "Galileo", "Darwin"], answer: "Newton", category: "Science" },
  { question: "What is the tallest mountain in the world?", choices: ["Everest", "K2", "Kilimanjaro", "Mont Blanc"], answer: "Everest", category: "Geography" },
  { question: "Which country is known as the Land of the Rising Sun?", choices: ["Japan", "China", "Korea", "Thailand"], answer: "Japan", category: "Geography" },
  { question: "Who is the author of Harry Potter?", choices: ["J.K. Rowling", "Stephen King", "Agatha Christie", "Mark Twain"], answer: "J.K. Rowling", category: "General" },
  { question: "What is the smallest planet in our solar system?", choices: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury", category: "Science" },
  { question: "What is the largest desert in the world?", choices: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara", category: "Geography" },
  { question: "How many teeth does an adult human have?", choices: ["32", "28", "30", "36"], answer: "32", category: "Science" },
  { question: "Which element has the chemical symbol O?", choices: ["Oxygen", "Gold", "Silver", "Iron"], answer: "Oxygen", category: "Science" },
  { question: "Who was the first man to walk on the moon?", choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong", category: "History" },
  { question: "What is the longest river in the world?", choices: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile", category: "Geography" },
  { question: "Which is the largest country by area?", choices: ["Russia", "Canada", "China", "USA"], answer: "Russia", category: "Geography" },
  { question: "What is the main ingredient in bread?", choices: ["Flour", "Sugar", "Salt", "Rice"], answer: "Flour", category: "General" },
  { question: "What is the capital of Italy?", choices: ["Rome", "Milan", "Venice", "Naples"], answer: "Rome", category: "Geography" },
  { question: "How many players are on a soccer team?", choices: ["11", "10", "12", "9"], answer: "11", category: "General" },
  { question: "What is the largest organ in the human body?", choices: ["Skin", "Liver", "Heart", "Lung"], answer: "Skin", category: "Science" },
  { question: "Which animal is known as the King of the Jungle?", choices: ["Lion", "Tiger", "Elephant", "Leopard"], answer: "Lion", category: "General" },
  { question: "What is the square root of 64?", choices: ["8", "6", "7", "9"], answer: "8", category: "Science" },
  { question: "Which language is the most spoken worldwide?", choices: ["English", "Mandarin", "Spanish", "Hindi"], answer: "English", category: "General" },
  { question: "What is the capital of Canada?", choices: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa", category: "Geography" },
  { question: "Who invented the telephone?", choices: ["Alexander Graham Bell", "Edison", "Tesla", "Newton"], answer: "Alexander Graham Bell", category: "History" },
  { question: "Which country hosted the 2016 Summer Olympics?", choices: ["Brazil", "China", "UK", "Russia"], answer: "Brazil", category: "History" },
  { question: "What is the main language in Brazil?", choices: ["Portuguese", "Spanish", "English", "French"], answer: "Portuguese", category: "General" },
  { question: "What is the freezing point of water?", choices: ["0°C", "32°C", "100°C", "-10°C"], answer: "0°C", category: "Science" },
  { question: "Which continent is Egypt in?", choices: ["Africa", "Asia", "Europe", "America"], answer: "Africa", category: "Geography" },
  { question: "What is the chemical symbol for sodium?", choices: ["Na", "So", "S", "N"], answer: "Na", category: "Science" },
  { question: "Who painted the ceiling of the Sistine Chapel?", choices: ["Michelangelo", "Da Vinci", "Raphael", "Donatello"], answer: "Michelangelo", category: "History" },
  { question: "What is the tallest animal in the world?", choices: ["Giraffe", "Elephant", "Lion", "Tiger"], answer: "Giraffe", category: "Science" },
  { question: "What is the largest island in the world?", choices: ["Greenland", "Australia", "Borneo", "Madagascar"], answer: "Greenland", category: "Geography" },
  { question: "What is the most common gas in the Earth's atmosphere?", choices: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen", category: "Science" },
  { question: "Who discovered penicillin?", choices: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"], answer: "Alexander Fleming", category: "Science" },
  { question: "What is the largest bone in the human body?", choices: ["Femur", "Humerus", "Tibia", "Fibula"], answer: "Femur", category: "Science" },
  { question: "Which country is famous for tulips?", choices: ["Netherlands", "France", "Italy", "Germany"], answer: "Netherlands", category: "Geography" },
  { question: "What is the capital of Australia?", choices: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: "Canberra", category: "Geography" },
  { question: "Which is the smallest continent?", choices: ["Australia", "Europe", "Antarctica", "South America"], answer: "Australia", category: "Geography" },
  { question: "What is the main ingredient in guacamole?", choices: ["Avocado", "Tomato", "Onion", "Pepper"], answer: "Avocado", category: "General" },
  { question: "What is the chemical symbol for iron?", choices: ["Fe", "Ir", "In", "I"], answer: "Fe", category: "Science" },
  { question: "Who was the first President of the United States?", choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington", category: "History" },
  { question: "What is the largest lake in Africa?", choices: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"], answer: "Lake Victoria", category: "Geography" },
  { question: "Which planet has the most moons?", choices: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter", category: "Science" },
  { question: "What is the capital of Spain?", choices: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: "Madrid", category: "Geography" },
  { question: "What is the currency of Japan?", choices: ["Yen", "Won", "Dollar", "Euro"], answer: "Yen", category: "General" },
  { question: "Which animal is the symbol of WWF?", choices: ["Panda", "Tiger", "Elephant", "Lion"], answer: "Panda", category: "General" },
  { question: "What is the largest volcano in the world?", choices: ["Mauna Loa", "Vesuvius", "Etna", "Krakatoa"], answer: "Mauna Loa", category: "Geography" },
  { question: "Which country invented paper?", choices: ["China", "Egypt", "Greece", "India"], answer: "China", category: "History" },
  { question: "What is the capital of Germany?", choices: ["Berlin", "Munich", "Frankfurt", "Hamburg"], answer: "Berlin", category: "Geography" },
  { question: "Who is known as the Father of Computers?", choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage", category: "Science" },
  { question: "Which is the longest bone in the human body?", choices: ["Femur", "Tibia", "Fibula", "Humerus"], answer: "Femur", category: "Science" },
  { question: "What is the capital of Russia?", choices: ["Moscow", "Saint Petersburg", "Kazan", "Sochi"], answer: "Moscow", category: "Geography" },
  { question: "Which country is called the Land of a Thousand Lakes?", choices: ["Finland", "Sweden", "Norway", "Canada"], answer: "Finland", category: "Geography" },
  { question: "What is the largest city in the USA?", choices: ["New York", "Los Angeles", "Chicago", "Houston"], answer: "New York", category: "Geography" },
  { question: "What is the main ingredient in sushi?", choices: ["Rice", "Fish", "Seaweed", "Soy Sauce"], answer: "Rice", category: "General" },
  { question: "What is the most spoken language in Africa?", choices: ["Swahili", "Arabic", "French", "English"], answer: "Swahili", category: "General" },
];

const XOGame: React.FC = () => {
  const [questionMode, setQuestionMode] = useState<boolean>(true);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [mode, setMode] = useState<'pvp' | 'cpu'>('pvp');
  const [isCpuThinking, setIsCpuThinking] = useState(false);
  const [question, setQuestion] = useState<Question | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [questionFor, setQuestionFor] = useState<'X' | 'O' | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pendingMoveIndex, setPendingMoveIndex] = useState<number | null>(null);

  // Helper for localized UI strings
  const t = (ar: string, en: string) => (language === 'ar' ? ar : en);
  const playerName = (symbol: 'X' | 'O') => {
    if (language === 'ar') return symbol === 'X' ? 'إكس' : 'أو';
    return symbol;
  };
  const categories = language === 'ar' ? AR_CATEGORIES : EN_CATEGORIES;
  const currentQuestions = (language === 'ar' ? QUESTIONS : EN_QUESTIONS).filter(q => selectedCategory === 'all' || q.category === selectedCategory);
  // Track shuffled questions and index
  const shuffledQuestionsRef = React.useRef<Question[]>([]);
  const questionIndexRef = React.useRef<number>(0);

  // Shuffle and reset questions when language or category changes
  useEffect(() => {
    const shuffled = [...currentQuestions].sort(() => Math.random() - 0.5);
    shuffledQuestionsRef.current = shuffled;
    questionIndexRef.current = 0;
  }, [language, selectedCategory]);
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const winner = useMemo(() => calculateWinner(board), [board]);

  // Helper: Find all empty squares
  const getAvailableMoves = (brd: Array<string | null>) =>
    brd.map((val, idx) => (val === null ? idx : null)).filter(idx => idx !== null) as number[];

  // Strong AI: Minimax algorithm for perfect play
  const cpuMove = useCallback((brd: Array<string | null>) => {
    function minimax(board: Array<string | null>, isMaximizing: boolean): { score: number, move: number | null } {
      const result = calculateWinner(board);
      if (result === 'O') return { score: 1, move: null };
      if (result === 'X') return { score: -1, move: null };
      if (result === 'draw') return { score: 0, move: null };
      const moves = getAvailableMoves(board);
      let bestMove: number | null = null;
      let bestScore = isMaximizing ? -Infinity : Infinity;
      for (const move of moves) {
        const newBoard = board.slice();
        newBoard[move] = isMaximizing ? 'O' : 'X';
        const { score } = minimax(newBoard, !isMaximizing);
        if (isMaximizing) {
          if (score > bestScore) {
            bestScore = score;
            bestMove = move;
          }
        } else {
          if (score < bestScore) {
            bestScore = score;
            bestMove = move;
          }
        }
      }
      return { score: bestScore, move: bestMove };
    }
    const { move } = minimax(brd, true);
    return move;
  }, []);

  // Ask a question before player's move
  const askQuestion = useCallback((forPlayer: 'X' | 'O') => {
    // Use shuffled questions, cycle through all before repeating
    if (!shuffledQuestionsRef.current.length) {
      shuffledQuestionsRef.current = [...currentQuestions].sort(() => Math.random() - 0.5);
      questionIndexRef.current = 0;
    }
    if (questionIndexRef.current >= shuffledQuestionsRef.current.length) {
      // All used, reshuffle
      shuffledQuestionsRef.current = [...currentQuestions].sort(() => Math.random() - 0.5);
      questionIndexRef.current = 0;
    }
    const q = shuffledQuestionsRef.current[questionIndexRef.current];
    questionIndexRef.current += 1;
    setQuestion(q);
    setSelectedChoice(null);
    setShowModal(true);
    setQuestionFor(forPlayer);
    setFeedback(null);
  }, [currentQuestions]);

  // Handle click on board
  const handleSquareClick = (idx: number) => {
    if (board[idx] || winner || isCpuThinking) return;
    if (mode === 'cpu' && !isXNext) return;
    if (!questionMode) {
      // Classic mode: allow direct move
      const newBoard = board.slice();
      newBoard[idx] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
      return;
    }
    setPendingMoveIndex(idx);
    askQuestion(isXNext ? 'X' : 'O');
  };

  // Handle answer submission
  const handleAnswer = () => {
    if (!question || selectedChoice === null || pendingMoveIndex === null) return;
    if (selectedChoice === question.answer) {
      // Correct: place X or O at the pendingMoveIndex
      const newBoard = board.slice();
      newBoard[pendingMoveIndex] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setFeedback(t('إجابة صحيحة!', 'Correct answer!'));
      setTimeout(() => {
        setShowModal(false);
        setFeedback(null);
        setPendingMoveIndex(null);
      }, 700);
      setIsXNext(!isXNext);
    } else {
      setFeedback(t('إجابة خاطئة!', 'Wrong answer!'));
      setTimeout(() => {
        setShowModal(false);
        setFeedback(null);
        setPendingMoveIndex(null);
      }, 700);
      setIsXNext(!isXNext);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setShowModal(false);
    setSelectedChoice(null);
    setFeedback(null);
    setPendingMoveIndex(null);
    setIsXNext(!isXNext); // Pass turn if cancelled
  };

  // CPU move effect
  useEffect(() => {
    if (mode === 'cpu' && !winner && !isXNext && board.some(square => square === null)) {
      setIsCpuThinking(true);
      const timer = setTimeout(() => {
        const move = cpuMove(board);
        if (move !== null) {
          const newBoard = board.slice();
          newBoard[move] = 'O';
          setBoard(newBoard);
          setIsXNext(true);
        }
        setIsCpuThinking(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [mode, isXNext, winner, board, cpuMove]);

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setIsCpuThinking(false);
    setShowModal(false);
    setSelectedChoice(null);
    setFeedback(null);
    setQuestion(null);
    setQuestionFor(null);
    setPendingMoveIndex(null)
  };

  return (
    <div className="xo-game-container" dir={dir}>
      <header className="xo-header">
        <div className="xo-header-row">
          
          <div className="xo-lang-selector">
  <label htmlFor="lang">{t('اللغة:', 'Language:')}</label>
  <button
    className="xo-lang-toggle"
    type="button"
    onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
    aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
  >
    {language === 'ar' ? 'English' : 'العربية'}
  </button>
</div>
        </div>
        <div className="xo-header-row xo-mode-row">
  <div className="xo-mode-selector">
    <label htmlFor="mode">{t('الوضع:', 'Mode:')} :</label>
    <select
      id="mode"
      value={mode}
      onChange={e => setMode(e.target.value as 'pvp' | 'cpu')}
    >
      <option value="pvp">{t('لاعب ضد لاعب', 'Player vs Player')}</option>
      <option value="cpu">{t('لاعب ضد الكمبيوتر', 'Player vs Computer')}</option>
    </select>
  </div>
  <div className="xo-question-toggle">
    <label htmlFor="questionModeToggle" style={{marginLeft: 10}}>{t('وضع الأسئلة', 'Question Mode')}:</label>
    <input
      id="questionModeToggle"
      type="checkbox"
      checked={questionMode}
      onChange={() => setQuestionMode(q => !q)}
      style={{marginLeft: 6, transform: 'scale(1.2)'}}
    />
    <span style={{marginLeft: 6, fontWeight: 500, color: '#1976d2'}}>{questionMode ? t('مفعل', 'On') : t('إيقاف', 'Off')}</span>
  </div>
          <div className="xo-category-selector">
            <label htmlFor="category">{t('التصنيف:', 'Category:')}</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <div className="status">
        {winner === 'draw' ? (
          <span>{t('تعادل!', 'Draw!')}</span>
        ) : winner ? (
          <span>
            {t('الفائز:', 'Winner:')}{' '}
            {playerName(winner as 'X' | 'O')}
          </span>
        ) : (
          <span>
            {isCpuThinking
              ? t('الكمبيوتر يفكر...', 'Computer is thinking...')
              : t('الدور:', 'Turn:') + ' ' + playerName(isXNext ? 'X' : 'O')}
          </span>
        )}
      </div> 
      <div className="board" dir={dir}>
        {[0, 1, 2].map(row => (
          <div key={row} className="board-row">
            {[0, 1, 2].map(col => {
              const idx = row * 3 + col;
              return (
                <button
                  key={idx}
                  className="square"
                  onClick={() => handleSquareClick(idx)}
                  disabled={!!board[idx] || !!winner || (mode === 'cpu' && !isXNext) || showModal}
                >
                  {board[idx]}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>{t('إعادة', 'Reset')}</button>
      {showModal && question && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{t('سؤال للاعب', 'Question for player')} {playerName(questionFor!)}</h2>
            <div className="modal-question">{question?.question}</div>
            <div className="modal-choices">
              {question?.choices.map((choice, idx) => (
                <button
                  key={idx}
                  className={selectedChoice === choice ? 'selected' : ''}
                  onClick={() => setSelectedChoice(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
            <div className="modal-actions">
              <button
                className="modal-submit-btn"
                onClick={handleAnswer}
                disabled={!selectedChoice}
              >
                {t('تأكيد', 'Submit')}
              </button>
              <button onClick={handleCancel}>{t('إلغاء', 'Cancel')}</button>
            </div>
            {feedback && (
              <div className={feedback === t('إجابة صحيحة!', 'Correct answer!') ? 'modal-feedback correct' : 'modal-feedback wrong'}>
                {feedback}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Winner calculation function stays the same
function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every((square) => square !== null)) {
    return 'draw';
  }
  return null;
}

export default XOGame;
