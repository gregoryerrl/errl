import { useState, useEffect } from "react";

type ComponentModule = () => Promise<{ default: React.ComponentType<any> }>;

export function usePreloader(componentModules: ComponentModule[]) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all(componentModules.map((module) => module()))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error preloading components:", error);
        setIsLoading(false);
      });
    // Preload is a mount-once effect. Callers pass a module-scope constant array,
    // so re-running on identity change would only risk a loop, never new work.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
}
