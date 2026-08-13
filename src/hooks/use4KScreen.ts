import { useEffect, useState } from "react";

function detect4K() {
  return window.screen.width >= 3840 || window.screen.height >= 2160;
}

export function use4KScreen() {
  const [is4K, setIs4K] = useState(false);

  useEffect(() => {
    setIs4K(detect4K());

    const mq = window.matchMedia("(min-width: 3840px)");
    const handler = () => setIs4K(detect4K());
    mq.addEventListener("change", handler);
    window.addEventListener("resize", handler);

    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return is4K;
}
