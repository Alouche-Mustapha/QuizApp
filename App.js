import {
  useFonts as useComforter,
  Comforter_400Regular,
} from "@expo-google-fonts/comforter";

import {
  useFonts as useOswald,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useDancingScript,
  DancingScript_400Regular,
} from "@expo-google-fonts/dancing-script";

import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";
import { QuizsContextProvider } from "./src/services/quizs.context";

export default function App() {
  const [comforterLoaded] = useComforter({
    Comforter_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_500Medium,
  });

  const [dancingScriptLoaded] = useDancingScript({
    DancingScript_400Regular,
  });

  if (!comforterLoaded) {
    return null;
  }

  if (!oswaldLoaded) {
    return null;
  }

  if (!dancingScriptLoaded) {
    return null;
  }

  return (
    <QuizsContextProvider>
      <AppNavigation />
    </QuizsContextProvider>
  );
}
