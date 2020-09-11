import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef();
  let id = null;

  const tick = () => {
    savedCallback.current();
  };
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
