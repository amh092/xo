import type { Question } from './questions_ar';


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
  { question: "Who founded Microsoft?", choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"], answer: "Bill Gates", category: 'Technology', difficulty: 'easy' },

  { question: "What is the highest mountain in the solar system?", choices: ["Olympus Mons", "Mauna Kea", "Mount Everest", "K2"], answer: "Olympus Mons", category: 'Science', difficulty: 'easy' },
  { question: "What is the largest living structure on Earth?", choices: ["The Great Barrier Reef", "The Amazon Rainforest", "The Grand Canyon", "The Great Wall of China"], answer: "The Great Barrier Reef", category: 'Science', difficulty: 'easy' },
  { question: "What is the process by which water moves through a plant?", choices: ["Transpiration", "Photosynthesis", "Respiration", "Osmosis"], answer: "Transpiration", category: 'Science', difficulty: 'easy' },
  { question: "What is the chemical symbol for silver?", choices: ["Ag", "Au", "Hg", "Pb"], answer: "Ag", category: 'Science', difficulty: 'easy' },
  { question: "What is the largest planet in our solar system?", choices: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Jupiter", category: 'Science', difficulty: 'easy' },
  { question: "What is the process by which an organism's genetic information is passed from one generation to the next?", choices: ["Genetic Drift", "Natural Selection", "Artificial Selection", "Genetic Variation"], answer: "Genetic Variation", category: 'Science', difficulty: 'easy' },
  { question: "What is the scientific term for the study of the structure, behavior, and evolution of the universe?", choices: ["Cosmology", "Astrology", "Astronomy", "Geology"], answer: "Cosmology", category: 'Science', difficulty: 'easy' },
  { question: "What is the scientific term for the study of the structure, behavior, and evolution of the Earth?", choices: ["Geology", "Meteorology", "Oceanography", "Paleontology"], answer: "Geology", category: 'Science', difficulty: 'easy' },
  { question: "What is the scientific term for the study of the weather?", choices: ["Meteorology", "Climatology", "Oceanography", "Hydrology"], answer: "Meteorology", category: 'Science', difficulty: 'easy' },
  { question: "What is the name of the Apple operating system for mobile devices?", choices: ["iOS", "macOS", "watchOS", "tvOS"], answer: "iOS", category: 'Technology', difficulty: 'medium' },
  { question: "What is the name of the Apple virtual assistant?", choices: ["Siri", "Alexa", "Google Assistant", "Cortana"], answer: "Siri", category: 'Technology', difficulty: 'medium' },
  { question: "What is the name of the club that Lionel Messi plays for?", choices: ["Barcelona", "Real Madrid", "Manchester United", "Paris Saint-Germain"], answer: "Barcelona", category: 'Sports', difficulty: 'easy' },
  { question: "How many Ballon d'Or has Lionel Messi won?", choices: ["5", "6", "7", "8"], answer: "7", category: 'Sports', difficulty: 'easy' },
  { question: "What was the childhood disease that Lionel Messi was diagnosed with?", choices: ["Growth hormone deficiency", "Asthma", "Diabetes", "Glaucoma"], answer: "Growth hormone deficiency", category: 'Sports', difficulty: 'easy' },
  { question: "Who won the Ballon d'Or in 1994?", choices: ["Hristo Stoichkov", "Paolo Maldini", "Roberto Baggio", "Gheorghe Hagi"], answer: "Hristo Stoichkov", category: 'Sports', difficulty: 'easy' },
  { question: "What was the position of the player who won the Ballon d'Or in 1994?", choices: ["Forward", "Midfielder", "Defender", "Goalkeeper"], answer: "Forward", category: 'Sports', difficulty: 'easy' },
  { question: "What was the name of the club that the player who won the Ballon d'Or in 1994 played for?", choices: ["Barcelona", "Real Madrid", "Juventus", "AC Milan"], answer: "Barcelona", category: 'Sports', difficulty: 'easy' },
  { question: "What was the nationality of the player who won the Ballon d'Or in 1994?", choices: ["Spanish", "Italian", "Bulgarian", "French"], answer: "Bulgarian", category: 'Sports', difficulty: 'easy' },

  { question: "What is the highest-scoring match in football history?", choices: ["Australia vs. American Samoa", "Brazil vs. Iceland", "Germany vs. Brazil", "Spain vs. Tahiti"], answer: "Australia vs. American Samoa", category: 'Sports', difficulty: 'hard' },
  

]