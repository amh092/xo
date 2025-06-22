const About = ({ lang = "en" }: { lang?: "en" | "ar" }) => (
    <main style={{ padding: 24, maxWidth: 700, margin: "auto" }}>
      <h1>
        {lang === "ar" ? "حول هذا الموقع" : "About This Site"}
      </h1>
      <p>
        {lang === "ar"
          ? "لعبة XO هي لعبة إكس-أو ثنائية اللغة (العربية والإنجليزية) مع لمسة تعليمية! في وضع الأسئلة، يجب على اللاعبين الإجابة بشكل صحيح قبل اللعب، مما يجعل التعلم ممتعًا وتفاعليًا لجميع الأعمار."
          : "XO Game is a bilingual (Arabic and English) Tic Tac Toe game with an educational twist! In question mode, players must answer a question correctly before making a move. This helps make learning fun and interactive for all ages."
        }
      </p>
      <p>
        {lang === "ar"
          ? "تدعم اللعبة اللغتين العربية والإنجليزية، ويمكنك التبديل بينهما في أي وقت. جميع الأسئلة والفئات متاحة باللغتين."
          : "The game supports both Arabic and English, allowing players to switch languages at any time. All questions and categories are available in both languages."
        }
      </p>
      <p>
        {lang === "ar"
          ? "تم تطوير هذا المشروع بواسطة أحمد الحزّاع. نرحب بجميع الاقتراحات والاستفسارات عبر صفحة الاتصال."
          : "This project is developed by Ahmed Alhazza. We welcome all suggestions and inquiries via the Contact page."
        }
      </p>
    </main>
  );
  
  export default About;