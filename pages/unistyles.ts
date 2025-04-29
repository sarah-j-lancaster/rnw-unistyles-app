import { UnistylesRegistry } from "react-native-unistyles";

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

export const lightTheme = {
  colors: {
    background: "#fff",
    text: "#111",
  },
};

export const darkTheme = {
  colors: {
    background: "#111",
    text: "#fff",
  },
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({ light: lightTheme, dark: darkTheme }).addConfig({
    initialTheme: 'light'
});
