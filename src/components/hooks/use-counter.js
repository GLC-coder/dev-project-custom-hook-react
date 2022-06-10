import { useEffect, useState } from "react";

const useCounter = (forWard = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forWard
        ? setCounter((preCounter) => preCounter + 1)
        : setCounter((preCounter) => preCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [forWard]);

  return counter;
};

export default useCounter;
