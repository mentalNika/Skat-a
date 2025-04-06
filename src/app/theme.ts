import {
  Anchor,
  Button,
  colorsTuple,
  Container,
  createTheme,
  rem,
  Title,
  Text,
  virtualColor,
  TextInput,
  PasswordInput,
  Notification,
} from "@mantine/core";
import cx from "clsx";

const CONTAINER_SIZES: Record<string, number> = {
  xs: 328,
  sm: 880,
  md: 1120,
  lg: 1360,
  xl: 1840,
};

export const theme = createTheme({
  breakpoints: {
    xs: "360px",
    ixs: "620px",
    sm: "960px",
    md: "1200px",
    lg: "1440px",
    xl: "1920px",
  },
  colors: {
    // Основные цвета
    black: colorsTuple("#161618"), // Основной черный цвет
    midnightBlue: colorsTuple("#081131"), // Темно-синий (ночной)
    darkBlue: colorsTuple("#01316b"), // Темно-синий
    darkSlateBlue: colorsTuple("#00469c"), // Темный шиферно-синий
    mainBlue: colorsTuple("#2c73ff"), // Основной синий
    skyBlue: colorsTuple("#1bd2ff"), // Небесно-голубой
    lightBlue: colorsTuple("#f0f5ff"), // Светло-голубой (фоновый)

    // Серые оттенки
    darkGray: colorsTuple("#e2e8ed"), // Темно-серый
    lightGray: colorsTuple("#eee"), // Светло-серый
    gainsboro: colorsTuple("#ddd"), // Гейнсборо (светло-серый)
    aliceBlue: colorsTuple("#757575"), // Серый (Алиса)
    ghostWhite: colorsTuple("#f3f5fa"), // Призрачно-белый (очень светлый фон)

    white: [
      "#FFFFFF", // Background Light 1, Active text
      "#F2F7FC", // Background Light 2, Tabs Inactive background, light
      "#F6FBFF", // Table Light 1
      "#F9FCFF", // Table Light 2
      "#FFFFFF", // Tabs Active Light
      "#F2F7FC", // Tabs Inactive Light
      "#F8FAFB", // Field BG Light
      "#F2F7FC", // Field Border Light, Tabs Inactive background light
      "#FFFFFF", // Reserved
      "#FFFFFF", // Reserved
    ],

    // Существующие цвета (оставлены для обратной совместимости)
    red: [
      "#ff9d9d",
      "#ff8c8c",
      "#ff7c7c",
      "#ff6b6b",
      "#ff5b5b", // Error
      "#e65252",
      "#cc4949",
      "#b34040",
      "#993737",
      "#802e2e",
    ],
    green: [
      "#99e9a5",
      "#88e596",
      "#77e187",
      "#66de78",
      "#55DA69", // Green Static
      "#4ECA61", // Green hover
      "#44ae54",
      "#3b994a",
      "#33833f",
      "#2b6d35",
    ],
    blue: [
      "#71bbff",
      "#5ab0ff",
      "#42a5ff",
      "#2b99ff",
      "#138eff", //Blue
      "#1180e6",
      "#0f72cc",
      "#0d63b3",
      "#0b5599",
      "#0a4780",
    ],
    gray: [
      "#C5D4E3", // Tabs active background Light
      "#6B778E", // Text primary Light
      "#96A0B5", // Text secondary Light, Tabs Inactive text light
      "#CBD7EE", // Text primary Dark, Tabs inactive text dark
      "#667186", // Text secondary Dark
      "#161B26", // Background Dark 1
      "#1B222F", // Background Dark 2, Tabs inactive background dark
      "#181E2A", // Table Dark 1
      "#1B222F", // Table Dark 2
      "#262F41", // Tabs active background
    ],

    // Виртуальные цвета (существующие)
    textPrimaryLight: colorsTuple("#6B778E"),
    textPrimaryDark: colorsTuple("#CBD7EE"),
    textSecondaryLight: colorsTuple("#96A0B5"),
    textSecondaryDark: colorsTuple("#667186"),
    backgroundPrimaryDark: colorsTuple("#161B26"),
    backgroundPrimaryLight: colorsTuple("#FFFFFF"),
    backgroundSecondaryDark: colorsTuple("#1B222F"),
    backgroundSecondaryLight: colorsTuple("#F2F7FC"),
    fieldBackgroundLight: colorsTuple("#F8FAFB"),
    fieldBackgroundDark: colorsTuple("#1B222F"),
    linkColorLight: colorsTuple("#138EFF"),
    linkColorDark: colorsTuple("#FFFFFF"),
    tabsInactiveTextDark: colorsTuple("#CBD7EE"),
    tabBackgroundActiveLight: colorsTuple("#C5D4E3"),
    tabBackgroundActiveDark: colorsTuple("#262F41"),
    tabBackgroundInactiveLight: colorsTuple("#96A0B5"),
    tabBackgroundInactiveDark: colorsTuple("#CBD7EE"),
    tableEvenLight: colorsTuple("#F6FBFF"),
    tableEvenDark: colorsTuple("#181E2A"),
    tableOddLight: colorsTuple("#F9FCFF"),
    tableOddDark: colorsTuple("#1B222F"),

    // Виртуальные цвета
    textPrimary: virtualColor({
      name: "textPrimary",
      light: "textPrimaryLight",
      dark: "textPrimaryDark",
    }),
    textSecondary: virtualColor({
      name: "textSecondary",
      light: "textSecondaryLight",
      dark: "textSecondaryDark",
    }),
    backgroundFirst: virtualColor({
      name: "backgroundFirst",
      light: "backgroundPrimaryLight",
      dark: "backgroundPrimaryDark",
    }),
    backgroundSecond: virtualColor({
      name: "backgroundSecond",
      light: "backgroundSecondaryLight",
      dark: "backgroundSecondaryDark",
    }),
    fieldBackground: virtualColor({
      name: "fieldBackground",
      light: "fieldBackgroundLight",
      dark: "fieldBackgroundDark",
    }),
    tabInactiveText: virtualColor({
      name: "tabInactiveText",
      light: "textSecondaryLight",
      dark: "tabsInactiveTextDark",
    }),
    linkColor: virtualColor({
      name: "linkColor",
      light: "linkColorLight",
      dark: "linkColorDark",
    }),
    tabBackgroundActive: virtualColor({
      name: "tabBackgroundActive",
      light: "textSecondaryLight",
      dark: "tabBackgroundActiveDark",
    }),
    tabBackgroundInactive: virtualColor({
      name: "tabBackgroundInactive",
      light: "tabBackgroundInactiveLight",
      dark: "tabBackgroundInactiveDark",
    }),
    tableEven: virtualColor({
      name: "tableEven",
      light: "tableEvenLight",
      dark: "tableEvenDark",
    }),
    tableOdd: virtualColor({
      name: "tableOdd",
      light: "tableOddLight",
      dark: "tableOddDark",
    }),
  },
  primaryColor: "green",
  primaryShade: 4,
  components: {
    // ... (существующие компоненты остаются без изменений)
    Notification: Notification.extend({
      classNames: (_, props) => ({
        root: cx("notification_root", {
          ["notification_root-error"]: props.color === "red",
          ["notification_root-success"]: props.color === "green",
        }),
        description: "notification_description",
        closeButton: "notification_close",
      }),
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        variant: "filled",
        bg: "backgroundFirst",
        radius: 18,
        size: "xl",
        classNames: (_, props) => ({
          input: cx("custom-input", {
            "custom-input-auth": props.variant === "auth",
          }),
          wrapper: "custom-input_wrapper",
          root: "custom-input_root",
        }),
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        variant: "filled",
        bg: "backgroundFirst",
        radius: 18,
        size: "xl",
        classNames: (_, props) => ({
          input: cx("custom-input", {
            "custom-input-auth": props.variant === "auth",
          }),
          wrapper: "custom-input_wrapper",
          root: "custom-input_root",
        }),
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: "textPrimary",
        fz: { base: 16, sm: 18, xl: 24 },
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        color: "textPrimary",
      },
    }),
    Title: Title.extend({
      defaultProps: {
        c: "textPrimary",
        fw: 300,
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Container: Container.extend({
      defaultProps: {
        size: "responsive",
      },
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
            ? rem(CONTAINER_SIZES[size])
            : rem(size),
        },
      }),
      classNames: (_, { size }) => ({
        root: cx({ ["container-responsive"]: size === "responsive" }),
      }),
    }),
  },
});
