import { useState, useEffect } from "react";
import * as Font from "expo-font";

const useCustomFonts = (): boolean => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async (): Promise<void> => {
      try {
        await Font.loadAsync({
          GothamLight: require("./assets/fonts/GothamLight.ttf"),
          GothamMedium: require("./assets/fonts/GothamMedium_1.ttf"),
          GothamBold: require("./assets/fonts/GothamBold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useCustomFonts;
