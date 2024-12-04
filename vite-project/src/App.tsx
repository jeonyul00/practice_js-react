import "./App.css";
import React from "react";

function App(): JSX.Element {
  const [count, setCount] = React.useState<number>(0);

  const add: () => void = React.useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => add(), 1000);
    return () => clearTimeout(timer);
  }, [count, add]);

  return <>{count}</>;
}

export default App;
