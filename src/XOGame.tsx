import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './XOGame.css';


interface Question {
  question: string;
  choices: string[];
  answer: string;
}

// Arabic questions
const QUESTIONS: Question[] = [
  { question: "ما هي عاصمة المملكة العربية السعودية؟", choices: ["الرياض", "جدة", "الدمام", "مكة"], answer: "الرياض" },
  { question: "كم عدد ألوان علم مصر؟", choices: ["3", "2", "4", "5"], answer: "3" },
  { question: "ما هو الحيوان الذي يُلقب بسفينة الصحراء؟", choices: ["الجمل", "الحصان", "الفيل", "الأسد"], answer: "الجمل" },
  { question: "من هو مخترع المصباح الكهربائي؟", choices: ["توماس إديسون", "نيوتن", "أينشتاين", "ابن سينا"], answer: "توماس إديسون" },
  { question: "ما هو أكبر كوكب في النظام الشمسي؟", choices: ["المشتري", "الأرض", "المريخ", "عطارد"], answer: "المشتري" },
  { question: "ما هو البحر الذي يفصل بين السعودية ومصر؟", choices: ["البحر الأحمر", "البحر الأسود", "بحر العرب", "بحر قزوين"], answer: "البحر الأحمر" },
  { question: "في أي قارة تقع دولة المغرب؟", choices: ["آسيا", "أفريقيا", "أوروبا", "أمريكا"], answer: "أفريقيا" },
  { question: "ما هو العنصر الكيميائي الذي رمزه O؟", choices: ["أكسجين", "ذهب", "حديد", "هيدروجين"], answer: "أكسجين" },
  { question: "من هو الشاعر المعروف بلقب أمير الشعراء؟", choices: ["أحمد شوقي", "نزار قباني", "المتنبي", "عنترة بن شداد"], answer: "أحمد شوقي" },
  { question: "ما هو الحيوان الوطني في أستراليا؟", choices: ["الكنغر", "الدب القطبي", "النمر", "الأسد"], answer: "الكنغر" },
  { question: "كم عدد الكواكب في المجموعة الشمسية؟", choices: ["8", "7", "9", "10"], answer: "8" },
  { question: "ما هي اللغة الرسمية في البرازيل؟", choices: ["البرتغالية", "الإسبانية", "الإنجليزية", "الفرنسية"], answer: "البرتغالية" },
  { question: "ما هو أعلى جبل في العالم؟", choices: ["إيفرست", "كيلمنجارو", "الهيمالايا", "الألب"], answer: "إيفرست" },
  { question: "من هو أول رئيس لمصر بعد الثورة؟", choices: ["محمد نجيب", "جمال عبد الناصر", "أنور السادات", "حسني مبارك"], answer: "محمد نجيب" },
  { question: "ما هو اسم أطول نهر في العالم؟", choices: ["النيل", "الأمازون", "اليانغتسي", "الدانوب"], answer: "النيل" },
  { question: "من هو مؤسس شركة مايكروسوفت؟", choices: ["بيل غيتس", "ستيف جوبز", "إيلون ماسك", "مارك زوكربيرغ"], answer: "بيل غيتس" },
  { question: "ما هي عاصمة اليابان؟", choices: ["طوكيو", "بكين", "سيول", "بانكوك"], answer: "طوكيو" },
  { question: "ما هو أسرع حيوان بري؟", choices: ["الفهد", "الأسد", "الحصان", "الغزال"], answer: "الفهد" },
  { question: "كم عدد أركان الإسلام؟", choices: ["5", "4", "6", "7"], answer: "5" },
  { question: "من هو النبي الذي ابتلعه الحوت؟", choices: ["يونس", "موسى", "إبراهيم", "نوح"], answer: "يونس" },
  { question: "ما هي عاصمة فلسطين؟", choices: ["القدس", "رام الله", "غزة", "نابلس"], answer: "القدس" },
  { question: "ما هو الكوكب الأقرب للشمس؟", choices: ["عطارد", "الزهرة", "الأرض", "المريخ"], answer: "عطارد" },
  { question: "ما هو الحيوان الذي ينام وعيناه مفتوحتان؟", choices: ["الدلفين", "الأسد", "الذئب", "الحصان"], answer: "الدلفين" },
  { question: "من هو مكتشف الجاذبية الأرضية؟", choices: ["نيوتن", "أينشتاين", "جاليليو", "أرخميدس"], answer: "نيوتن" },
  { question: "ما هو أكبر محيط في العالم؟", choices: ["الهادئ", "الأطلسي", "الهندي", "المتجمد الشمالي"], answer: "الهادئ" },
  { question: "في أي عام تأسست الأمم المتحدة؟", choices: ["1945", "1950", "1939", "1960"], answer: "1945" },
  { question: "ما هو اسم بيت الدجاج؟", choices: ["قن", "عش", "مزرعة", "زريبة"], answer: "قن" },
  { question: "ما هو الحيوان الذي لا يشرب الماء؟", choices: ["الجرذ الكنغري", "الجمل", "الحصان", "الأسد"], answer: "الجرذ الكنغري" },
  { question: "ما هو العنصر الأساسي في صناعة الزجاج؟", choices: ["السيليكون", "الحديد", "النحاس", "الكربون"], answer: "السيليكون" },
  { question: "من هو مؤسس علم الكيمياء؟", choices: ["جابر بن حيان", "ابن سينا", "الخوارزمي", "الرازي"], answer: "جابر بن حيان" },
  { question: "ما هي السورة التي تُسمى قلب القرآن؟", choices: ["يس", "الفاتحة", "البقرة", "الرحمن"], answer: "يس" },
  { question: "كم عدد أسنان الإنسان البالغ؟", choices: ["32", "28", "30", "36"], answer: "32" },
  { question: "ما هو اسم العملة في دولة الكويت؟", choices: ["دينار", "ريال", "درهم", "جنيه"], answer: "دينار" },
  { question: "ما هو اسم أكبر صحراء في العالم؟", choices: ["الصحراء الكبرى", "صحراء الربع الخالي", "صحراء أتاكاما", "صحراء جوبي"], answer: "الصحراء الكبرى" },
  { question: "ما هو الطائر الذي يلد ولا يبيض؟", choices: ["الخفاش", "الدجاجة", "البومة", "النسر"], answer: "الخفاش" },
  { question: "ما هو أسرع الطيور؟", choices: ["الشاهين", "النسر", "الحمام", "النعامة"], answer: "الشاهين" },
  { question: "من هو الصحابي الذي لقب بالفاروق؟", choices: ["عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "علي بن أبي طالب"], answer: "عمر بن الخطاب" },
  { question: "ما هو اسم الجهاز الذي يستخدم لقياس درجة الحرارة؟", choices: ["الترمومتر", "البارومتر", "الهيدرومتر", "المانومتر"], answer: "الترمومتر" },
  { question: "ما هي الدولة العربية التي يمر بها خط الاستواء؟", choices: ["الصومال", "مصر", "السودان", "المغرب"], answer: "الصومال" },
  { question: "ما هو اسم أنثى الحمار؟", choices: ["أتان", "فرس", "ناقة", "بقرة"], answer: "أتان" },
  { question: "ما هو اسم بيت النحل؟", choices: ["خلية", "قن", "عش", "زريبة"], answer: "خلية" },
  { question: "من هو أول من صام؟", choices: ["آدم عليه السلام", "نوح عليه السلام", "إبراهيم عليه السلام", "موسى عليه السلام"], answer: "آدم عليه السلام" },
  { question: "ما هو اسم أول جامعة في العالم؟", choices: ["جامعة القرويين", "جامعة الأزهر", "جامعة هارفارد", "جامعة كامبريدج"], answer: "جامعة القرويين" },
  { question: "كم عدد قارات العالم؟", choices: ["7", "6", "5", "8"], answer: "7" },
  { question: "ما هو اسم صغير الأسد؟", choices: ["شبل", "جرو", "عجل", "فرخ"], answer: "شبل" },
  { question: "ما هو اسم بيت الأسد؟", choices: ["عرين", "قن", "عش", "زريبة"], answer: "عرين" },
  { question: "ما هي الدولة التي تسمى بلاد الرافدين؟", choices: ["العراق", "مصر", "سوريا", "لبنان"], answer: "العراق" },
  { question: "ما هو اسم أقوى عظم في جسم الإنسان؟", choices: ["عظم الفخذ", "عظم الساق", "عظم الذراع", "عظم الكتف"], answer: "عظم الفخذ" },
  { question: "ما هو اسم بيت الأرنب؟", choices: ["جحر", "عش", "قن", "زريبة"], answer: "جحر" },
  { question: "ما هو اسم بيت الطائر؟", choices: ["عش", "قن", "خلية", "جحر"], answer: "عش" },
  { question: "من هو العالم الذي اخترع المصباح الكهربائي؟", choices: ["توماس إديسون", "نيوتن", "أينشتاين", "ابن سينا"], answer: "توماس إديسون" },
  { question: "ما هو الحيوان الذي يستطيع العيش في الماء واليابسة؟", choices: ["الضفدع", "الحصان", "الجمل", "الأسد"], answer: "الضفدع" },
  { question: "ما هو اسم بيت الدب؟", choices: ["عرين", "جحر", "قن", "عش"], answer: "عرين" },
  { question: "ما هو اسم صغير الحصان؟", choices: ["مهر", "جحش", "شبل", "عجل"], answer: "مهر" },
  { question: "ما هو اسم بيت الكلب؟", choices: ["وكر", "قن", "عش", "خلية"], answer: "وكر" },
  { question: "ما هي الدولة التي يوجد بها أكبر عدد من المسلمين؟", choices: ["إندونيسيا", "مصر", "السعودية", "تركيا"], answer: "إندونيسيا" },
  { question: "ما هو أكبر بحر في العالم؟", choices: ["بحر الفلبين", "بحر العرب", "البحر الأحمر", "البحر الأبيض المتوسط"], answer: "بحر الفلبين" },
  { question: "ما هي عاصمة تركيا؟", choices: ["أنقرة", "إسطنبول", "إزمير", "بورصة"], answer: "أنقرة" },
  { question: "ما هو اسم أول إنسان صعد إلى القمر؟", choices: ["نيل أرمسترونغ", "يوري غاغارين", "باز ألدرين", "جون غلين"], answer: "نيل أرمسترونغ" },
  { question: "ما هو اسم بيت الغراب؟", choices: ["عش", "جحر", "قن", "خلية"], answer: "عش" },
  { question: "ما هو اسم صغير النمر؟", choices: ["فهد", "شبل", "مهر", "جحش"], answer: "فهد" },
  { question: "ما هي الدولة التي اشتهرت بصناعة الساعات؟", choices: ["سويسرا", "فرنسا", "إيطاليا", "ألمانيا"], answer: "سويسرا" },
  { question: "ما هو اسم بيت النمل؟", choices: ["قرية", "خلية", "عش", "قن"], answer: "قرية" },
  { question: "ما هو اسم صغير الفيل؟", choices: ["دغفل", "مهر", "شبل", "عجل"], answer: "دغفل" },
  { question: "ما هو اسم بيت الذئب؟", choices: ["وجار", "عش", "قن", "خلية"], answer: "وجار" },
  { question: "ما هو اسم بيت الثعلب؟", choices: ["وجار", "عش", "قن", "خلية"], answer: "وجار" },
  { question: "ما هو اسم صغير البقرة؟", choices: ["عجل", "مهر", "شبل", "جحش"], answer: "عجل" },
];

// English questions
const EN_QUESTIONS: Question[] = [
  { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", choices: ["Mars", "Earth", "Jupiter", "Venus"], answer: "Mars" },
  { question: "Who wrote 'Romeo and Juliet'?", choices: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], answer: "Shakespeare" },
  { question: "What is the largest mammal?", choices: ["Blue Whale", "Elephant", "Giraffe", "Rhino"], answer: "Blue Whale" },
  { question: "How many continents are there?", choices: ["7", "6", "5", "8"], answer: "7" },
  { question: "What is the boiling point of water?", choices: ["100°C", "90°C", "80°C", "120°C"], answer: "100°C" },
  { question: "Which gas do plants absorb from the atmosphere?", choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "Who painted the Mona Lisa?", choices: ["Leonardo da Vinci", "Picasso", "Van Gogh", "Michelangelo"], answer: "Leonardo da Vinci" },
  { question: "What is the hardest natural substance?", choices: ["Diamond", "Gold", "Iron", "Silver"], answer: "Diamond" },
  { question: "What is the chemical symbol for gold?", choices: ["Au", "Ag", "Fe", "Go"], answer: "Au" },
  { question: "Which ocean is the largest?", choices: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific" },
  { question: "Who discovered gravity?", choices: ["Newton", "Einstein", "Galileo", "Darwin"], answer: "Newton" },
  { question: "What is the tallest mountain in the world?", choices: ["Everest", "K2", "Kilimanjaro", "Mont Blanc"], answer: "Everest" },
  { question: "Which country is known as the Land of the Rising Sun?", choices: ["Japan", "China", "Korea", "Thailand"], answer: "Japan" },
  { question: "Who is the author of Harry Potter?", choices: ["J.K. Rowling", "Stephen King", "Agatha Christie", "Mark Twain"], answer: "J.K. Rowling" },
  { question: "What is the smallest planet in our solar system?", choices: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury" },
  { question: "What is the largest desert in the world?", choices: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara" },
  { question: "How many teeth does an adult human have?", choices: ["32", "28", "30", "36"], answer: "32" },
  { question: "Which element has the chemical symbol O?", choices: ["Oxygen", "Gold", "Silver", "Iron"], answer: "Oxygen" },
  { question: "Who was the first man to walk on the moon?", choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong" },
  { question: "What is the longest river in the world?", choices: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
  { question: "Which is the largest country by area?", choices: ["Russia", "Canada", "China", "USA"], answer: "Russia" },
  { question: "What is the main ingredient in bread?", choices: ["Flour", "Sugar", "Salt", "Rice"], answer: "Flour" },
  { question: "What is the capital of Italy?", choices: ["Rome", "Milan", "Venice", "Naples"], answer: "Rome" },
  { question: "How many players are on a soccer team?", choices: ["11", "10", "12", "9"], answer: "11" },
  { question: "What is the largest organ in the human body?", choices: ["Skin", "Liver", "Heart", "Lung"], answer: "Skin" },
  { question: "Which animal is known as the King of the Jungle?", choices: ["Lion", "Tiger", "Elephant", "Leopard"], answer: "Lion" },
  { question: "What is the square root of 64?", choices: ["8", "6", "7", "9"], answer: "8" },
  { question: "Which language is the most spoken worldwide?", choices: ["English", "Mandarin", "Spanish", "Hindi"], answer: "English" },
  { question: "What is the capital of Canada?", choices: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
  { question: "Who invented the telephone?", choices: ["Alexander Graham Bell", "Edison", "Tesla", "Newton"], answer: "Alexander Graham Bell" },
  { question: "Which country hosted the 2016 Summer Olympics?", choices: ["Brazil", "China", "UK", "Russia"], answer: "Brazil" },
  { question: "What is the main language in Brazil?", choices: ["Portuguese", "Spanish", "English", "French"], answer: "Portuguese" },
  { question: "What is the freezing point of water?", choices: ["0°C", "32°C", "100°C", "-10°C"], answer: "0°C" },
  { question: "Which continent is Egypt in?", choices: ["Africa", "Asia", "Europe", "America"], answer: "Africa" },
  { question: "What is the chemical symbol for sodium?", choices: ["Na", "So", "S", "N"], answer: "Na" },
  { question: "Who painted the ceiling of the Sistine Chapel?", choices: ["Michelangelo", "Da Vinci", "Raphael", "Donatello"], answer: "Michelangelo" },
  { question: "What is the tallest animal in the world?", choices: ["Giraffe", "Elephant", "Lion", "Tiger"], answer: "Giraffe" },
  { question: "What is the largest island in the world?", choices: ["Greenland", "Australia", "Borneo", "Madagascar"], answer: "Greenland" },
  { question: "What is the most common gas in the Earth's atmosphere?", choices: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
  { question: "Who discovered penicillin?", choices: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"], answer: "Alexander Fleming" },
  { question: "What is the largest bone in the human body?", choices: ["Femur", "Humerus", "Tibia", "Fibula"], answer: "Femur" },
  { question: "Which country is famous for tulips?", choices: ["Netherlands", "France", "Italy", "Germany"], answer: "Netherlands" },
  { question: "What is the capital of Australia?", choices: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: "Canberra" },
  { question: "Which is the smallest continent?", choices: ["Australia", "Europe", "Antarctica", "South America"], answer: "Australia" },
  { question: "What is the main ingredient in guacamole?", choices: ["Avocado", "Tomato", "Onion", "Pepper"], answer: "Avocado" },
  { question: "What is the chemical symbol for iron?", choices: ["Fe", "Ir", "In", "I"], answer: "Fe" },
  { question: "Who was the first President of the United States?", choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
  { question: "What is the largest lake in Africa?", choices: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"], answer: "Lake Victoria" },
  { question: "Which planet has the most moons?", choices: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter" },
  { question: "What is the capital of Spain?", choices: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: "Madrid" },
  { question: "What is the currency of Japan?", choices: ["Yen", "Won", "Dollar", "Euro"], answer: "Yen" },
  { question: "Which animal is the symbol of WWF?", choices: ["Panda", "Tiger", "Elephant", "Lion"], answer: "Panda" },
  { question: "What is the largest volcano in the world?", choices: ["Mauna Loa", "Vesuvius", "Etna", "Krakatoa"], answer: "Mauna Loa" },
  { question: "Which country invented paper?", choices: ["China", "Egypt", "Greece", "India"], answer: "China" },
  { question: "What is the capital of Germany?", choices: ["Berlin", "Munich", "Frankfurt", "Hamburg"], answer: "Berlin" },
  { question: "Who is known as the Father of Computers?", choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
  { question: "Which is the longest bone in the human body?", choices: ["Femur", "Tibia", "Fibula", "Humerus"], answer: "Femur" },
  { question: "What is the capital of Russia?", choices: ["Moscow", "Saint Petersburg", "Kazan", "Sochi"], answer: "Moscow" },
  { question: "Which country is called the Land of a Thousand Lakes?", choices: ["Finland", "Sweden", "Norway", "Canada"], answer: "Finland" },
  { question: "What is the largest city in the USA?", choices: ["New York", "Los Angeles", "Chicago", "Houston"], answer: "New York" },
  { question: "What is the main ingredient in sushi?", choices: ["Rice", "Fish", "Seaweed", "Soy Sauce"], answer: "Rice" },
  { question: "What is the most spoken language in Africa?", choices: ["Swahili", "Arabic", "French", "English"], answer: "Swahili" },
];

const XOGame: React.FC = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
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
  const currentQuestions = language === 'ar' ? QUESTIONS : EN_QUESTIONS;
  // Track shuffled questions and index
  const shuffledQuestionsRef = React.useRef<Question[]>([]);
  const questionIndexRef = React.useRef<number>(0);

  // Shuffle questions when language changes
  useEffect(() => {
    const shuffled = [...currentQuestions].sort(() => Math.random() - 0.5);
    shuffledQuestionsRef.current = shuffled;
    questionIndexRef.current = 0;
  }, [language]);
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
  const handleClick = useCallback((index: number) => {
    if (board[index] || winner || (mode === 'cpu' && !isXNext) || showModal) return;
    askQuestion(isXNext ? 'X' : 'O');
    setQuestionFor(isXNext ? 'X' : 'O');
    setPendingMoveIndex(index); // store which cell was clicked
    setShowModal(true);
    setSelectedChoice(null);
  }, [board, winner, mode, isXNext, showModal, askQuestion]);

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
          <h1 className="xo-title">{t('لعبة إكس أو', 'XO Game')}</h1>
          <div className="xo-lang-selector">
            <label htmlFor="lang">{t('اللغة:', 'Language:')}</label>
            <select
              id="lang"
              value={language}
              onChange={e => setLanguage(e.target.value as 'ar' | 'en')}
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="xo-header-row xo-mode-row">
          <label htmlFor="mode">{t('الوضع:', 'Mode:')}</label>
          <select
            id="mode"
            value={mode}
            onChange={e => setMode(e.target.value as 'pvp' | 'cpu')}
          >
            <option value="pvp">{t('لاعب ضد لاعب', 'Player vs Player')}</option>
            <option value="cpu">{t('لاعب ضد الكمبيوتر', 'Player vs Computer')}</option>
          </select>
          <button className="reset-button" onClick={resetGame}>{t('إعادة', 'Reset')}</button>
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
                  onClick={() => handleClick(idx)}
                  disabled={!!board[idx] || !!winner || (mode === 'cpu' && !isXNext) || showModal}
                >
                  {board[idx]}
                </button>
              );
            })}
          </div>
        ))}
      </div>
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
