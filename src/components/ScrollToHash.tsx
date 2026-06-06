import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const elementId = hash.replace("#", "");

    requestAnimationFrame(() => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
