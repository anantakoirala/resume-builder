import { useEffect } from "react";

export const useHideScrollbar = (timeoutDuration: number): void => {
  useEffect(() => {
    const hideScrollbar = (): void => {
      document.documentElement.classList.add("hide-scrollbar");
    };

    const timeout = setTimeout(hideScrollbar, timeoutDuration);

    return (): void => clearTimeout(timeout);
  }, [timeoutDuration]);
};
