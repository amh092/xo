import { useEffect, useRef } from "react";
import './AdBanner.css';
const AdBanner = () => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // @ts-expect-error Adsense types are not available in window
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <div className="ad-banner"> 

    
<ins
  className="adsbygoogle"
  style={{ display: "block", textAlign: "center" }} // remove height/width: 0
  data-ad-client="ca-pub-7300503836942540"
  data-ad-slot="1234567890"
  data-ad-format="auto"
  data-full-width-responsive="true"
  ref={adRef}
/>
    </div>
  );
};

export default AdBanner;
