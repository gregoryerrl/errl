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
  }, []);

  return isLoading;
}
