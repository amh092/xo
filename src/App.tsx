import XOGame from './XOGame';
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
     <Analytics />
      <XOGame />
    </>
  );
}

export default App;
