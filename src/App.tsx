import XOGame from './XOGame';
import { Analytics } from "@vercel/analytics/react";
import AdBanner from './AdBanner';
function App() {
  return (
    <>
     <Analytics />
      <XOGame />
      <AdBanner />
    </>
  );
}

export default App;
