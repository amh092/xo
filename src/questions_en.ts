import type { Question } from './questions_ar';

export const EN_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'Geography', label: 'Geography' },
  { value: 'Science', label: 'Science' },
  { value: 'History', label: 'History' },
  { value: 'Sports', label: 'Sports' },
  { value: 'General', label: 'General' }
];

export const EN_QUESTIONS: Question[] = [
  { question: "Which country hosts the Tour de France?", choices: ["France", "Italy", "Spain", "Germany"], answer: "France", category: 'Geography', difficulty: 'easy' },
  { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Rome"], answer: "Paris", category: 'Geography', difficulty: 'easy' },
  { question: "Which planet is known as the Red Planet?", choices: ["Mars", "Earth", "Jupiter", "Venus"], answer: "Mars", category: 'Science', difficulty: 'easy' },
  { question: "Who wrote 'Romeo and Juliet'?", choices: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], answer: "Shakespeare", category: 'History', difficulty: 'easy' },
  { question: "What is the largest mammal?", choices: ["Blue Whale", "Elephant", "Giraffe", "Rhino"], answer: "Blue Whale", category: 'Science', difficulty: 'easy' },
  { question: "How many continents are there?", choices: ["7", "6", "5", "8"], answer: "7", category: 'Geography', difficulty: 'easy' },
  { question: "What is the boiling point of water?", choices: ["100°C", "90°C", "80°C", "120°C"], answer: "100°C", category: 'Science', difficulty: 'easy' },
  { question: "Which gas do plants absorb from the atmosphere?", choices: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", category: 'Science', difficulty: 'easy' },
  { question: "Who painted the Mona Lisa?", choices: ["Leonardo da Vinci", "Picasso", "Van Gogh", "Michelangelo"], answer: "Leonardo da Vinci", category: 'History', difficulty: 'easy' },
  { question: "What is the hardest natural substance?", choices: ["Diamond", "Gold", "Iron", "Silver"], answer: "Diamond", category: 'Science', difficulty: 'easy' },
  { question: "What is the chemical symbol for gold?", choices: ["Au", "Ag", "Fe", "Go"], answer: "Au", category: 'Science', difficulty: 'easy' },
  { question: "Which ocean is the largest?", choices: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific", category: 'Geography', difficulty: 'easy' },
  { question: "Who discovered gravity?", choices: ["Newton", "Einstein", "Galileo", "Darwin"], answer: "Newton", category: 'Science', difficulty: 'easy' },
  { question: "What is the tallest mountain in the world?", choices: ["Everest", "K2", "Kilimanjaro", "Mont Blanc"], answer: "Everest", category: 'Geography', difficulty: 'easy' },
  { question: "Which country is known as the Land of the Rising Sun?", choices: ["Japan", "China", "Korea", "Thailand"], answer: "Japan", category: 'Geography', difficulty: 'easy' },
  { question: "Who is the author of Harry Potter?", choices: ["J.K. Rowling", "Stephen King", "Agatha Christie", "Mark Twain"], answer: "J.K. Rowling", category: 'General', difficulty: 'easy' },
  { question: "What is the smallest planet in our solar system?", choices: ["Mercury", "Mars", "Venus", "Earth"], answer: "Mercury", category: 'Science', difficulty: 'easy' },
  { question: "What is the largest desert in the world?", choices: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara", category: 'Geography', difficulty: 'easy' },
  { question: "How many players are there in a soccer team?", choices: ["11", "10", "9", "12"], answer: "11", category: 'Sports', difficulty: 'easy' },

  // Geography
  { question: "Which country has the most islands?", choices: ["Sweden", "Indonesia", "Philippines", "Canada"], answer: "Sweden", category: 'Geography', difficulty: 'easy' },

  // Science
  { question: "What part of the plant conducts photosynthesis?", choices: ["Leaf", "Root", "Stem", "Flower"], answer: "Leaf", category: 'Science', difficulty: 'easy' },

  // History
  { question: "In which year did World War II end?", choices: ["1945", "1939", "1918", "1950"], answer: "1945", category: 'History', difficulty: 'easy' },

  // General
  { question: "What is the currency of Japan?", choices: ["Yen", "Won", "Dollar", "Euro"], answer: "Yen", category: 'General', difficulty: 'easy' },

  // Literature
  { question: "Who wrote '1984'?", choices: ["George Orwell", "Aldous Huxley", "F. Scott Fitzgerald", "J.D. Salinger"], answer: "George Orwell", category: 'Literature', difficulty: 'easy' },

  // Technology
  { question: "What does CPU stand for?", choices: ["Central Processing Unit", "Computer Power Unit", "Central Performance Utility", "Core Power Unit"], answer: "Central Processing Unit", category: 'Technology', difficulty: 'easy' },

  // Entertainment
  { question: "Which movie features the character 'Forrest Gump'?", choices: ["Forrest Gump", "Cast Away", "The Green Mile", "Saving Private Ryan"], answer: "Forrest Gump", category: 'Entertainment', difficulty: 'easy' },

  // Science
  { question: "What gas do humans exhale?", choices: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Nitrogen"], answer: "Carbon Dioxide", category: 'Science', difficulty: 'easy' },

  // Technology
  { question: "Who founded Microsoft?", choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"], answer: "Bill Gates", category: 'Technology', difficulty: 'easy' }
];
