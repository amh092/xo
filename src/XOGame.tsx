import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './XOGame.css';
import { AR_QUESTIONS, AR_CATEGORIES } from './questions_ar';
import { EN_QUESTIONS, EN_CATEGORIES } from './questions_en';
import type { Question } from './questions_ar';

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
  const currentQuestions = (language === 'ar' ? AR_QUESTIONS : EN_QUESTIONS).filter(q => selectedCategory === 'all' || q.category === selectedCategory);
  // Track shuffled questions and index
  const shuffledQuestionsRef = React.useRef<Question[]>([]);
  const questionIndexRef = React.useRef<number>(0);
  const usedQuestionsRef = React.useRef<Set<number>>(new Set());

  // Shuffle and reset questions when language or category changes
  useEffect(() => {
    const shuffled = [...currentQuestions].sort(() => Math.random() - 0.5);
    shuffledQuestionsRef.current = shuffled;
    questionIndexRef.current = 0;
    usedQuestionsRef.current = new Set();
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
    // Use shuffled questions, ensure each is only asked once per game
    if (!shuffledQuestionsRef.current.length) {
      shuffledQuestionsRef.current = [...currentQuestions].sort(() => Math.random() - 0.5);
      questionIndexRef.current = 0;
      usedQuestionsRef.current = new Set();
    }
    // Find the next unused question
    let idx = questionIndexRef.current;
    let found = false;
    for (let i = 0; i < shuffledQuestionsRef.current.length; i++) {
      const tryIdx = (idx + i) % shuffledQuestionsRef.current.length;
      if (!usedQuestionsRef.current.has(tryIdx)) {
        idx = tryIdx;
        found = true;
        break;
      }
    }
    if (!found) {
      // All used, reshuffle
      shuffledQuestionsRef.current = [...currentQuestions].sort(() => Math.random() - 0.5);
      usedQuestionsRef.current = new Set();
      idx = 0;
    }
    usedQuestionsRef.current.add(idx);
    questionIndexRef.current = idx + 1;
    const q = shuffledQuestionsRef.current[idx];
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
        // CPU move after delay if mode is cpu and now it's CPU's turn
        if (mode === 'cpu' && !isXNext) {
          setTimeout(() => {
            // Find available moves
            const available = board.map((v, i) => v === null ? i : null).filter(i => i !== null) as number[];
            if (available.length > 0) {
              const move = available[Math.floor(Math.random() * available.length)];
              const cpuBoard = newBoard.slice();
              cpuBoard[move] = 'O';
              setBoard(cpuBoard);
              setIsXNext(true);
            }
          }, 300);
        }
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
      }, 1000);
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
    setPendingMoveIndex(null);
    usedQuestionsRef.current = new Set();
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
