

const PrivacyPolicy = ({ language = "en" }: { language?: "en" | "ar" }) => (
  <main style={{ padding: 24, maxWidth: 700, margin: "auto" }}>
    <h1>
      {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
    </h1>
    <p>
      {language === "ar"
        ? <>
            يستخدم هذا الموقع إعلانات Google AdSense لعرض الإعلانات. يستخدم البائعون الخارجيون، بما في ذلك Google، ملفات تعريف الارتباط (كوكيز) لعرض الإعلانات بناءً على زياراتك السابقة لهذا الموقع أو لمواقع أخرى. يمكنك إلغاء تخصيص الإعلانات من خلال زيارة
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"> إعدادات إعلانات Google</a>.
          </>
        : <>
            This website uses Google AdSense to serve ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. You may opt out of personalized advertising by visiting
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"> Google Ads Settings</a>.
          </>
      }
    </p>
    <p>
      {language === "ar"
        ? <>
            نحن لا نجمع أي معلومات تعريف شخصية من المستخدمين. لمزيد من التفاصيل، يرجى الرجوع إلى
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> سياسة الخصوصية الخاصة بـ Google</a>.
          </>
        : <>
            We do not collect any personally identifiable information from users. For more details, please refer to Google's
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
          </>
      }
    </p>
  </main>
);

export default PrivacyPolicy;