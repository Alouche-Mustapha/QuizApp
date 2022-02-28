import { useFonts, Comforter_400Regular } from "@expo-google-fonts/comforter";
import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";
import { QuestionsContextProvider } from "./src/services/questions.context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Comforter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QuestionsContextProvider>
      <AppNavigation />
    </QuestionsContextProvider>
  );
}
