import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la URL tiene un # no scrollea (ej: /#contacto)
    if (hash) {
      const elemento = document.getElementById(hash.replace("#", ""));
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Si no hay hash, scroll normal al inicio arriba
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;