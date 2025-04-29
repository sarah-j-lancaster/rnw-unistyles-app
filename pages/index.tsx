import { View, Text, Button } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

const styles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
    fontSize: 20,
  },
}));

export default function Home() {
  const { styles: s } = useStyles(styles);

  const toggleTheme = () => {
    const currentTheme = UnistylesRuntime.themeName;
    if (currentTheme === "light") {
      UnistylesRuntime.setTheme("dark");
    } else {
      UnistylesRuntime.setTheme("light");
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.text}>Proof of concept: React Native Web + Unistyles</Text>
      <Button
        onPress={toggleTheme}
        title="Swap theme"
        color="#841584"
      />
    </View>
  );
}
