import { Routes } from "./src/routes";
import { useFonts, Inter_500Medium, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Routes />;
}
