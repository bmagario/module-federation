import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";
import useCount from "remoteApp/useCount";

function App() {
  const [countLocal, setCountLocal] = useState(0);
  const [count, setCount] = useCount(0);

  return (
    <div className="App">
      <h1>Host Application</h1>
      <p>Button From Local</p>
      <div className="card">
        <button
          onClick={() => setCountLocal((countLocal: number) => countLocal + 1)}
        >
          countLocal is {countLocal}
        </button>
      </div>
      <p>Button From Remote</p>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          Use Count From Remote: count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
