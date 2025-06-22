const Contact = ({ lang = "en" }: { lang?: "en" | "ar" }) => (
    <main style={{ padding: 24, maxWidth: 700, margin: "auto" }}>
      <h1>
        {lang === "ar" ? "اتصل بنا" : "Contact"}
      </h1>
      <p>
        {lang === "ar"
          ? <>لأي أسئلة أو ملاحظات أو دعم، يرجى مراسلتنا عبر البريد الإلكتروني: <a href="mailto:lastamh@gmail.com">lastamh@gmail.com</a></>
          : <>For any questions, feedback, or support, please email: <a href="mailto:lastamh@gmail.com">lastamh@gmail.com</a></>
        }
      </p>
      <p>
        {lang === "ar"
          ? "نحن نرحب بجميع اقتراحاتكم واستفساراتكم!"
          : "We welcome all your suggestions and inquiries!"
        }
      </p>
    </main>
  );
  
  export default Contact;