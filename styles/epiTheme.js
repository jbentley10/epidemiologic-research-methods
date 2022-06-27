import { createTheme } from "@mui/material/styles";

export const epiTheme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    type: "light",
    primary: {
      main: "#ffffff",
      dark: "#f9f9f9",
      light: "rgba(0, 114, 188, .1)",
    },
    secondary: {
      main: "#efc427",
      dark: "#d8a912",
      light: "",
      contrastText: "",
    },
    background: {
      default: "#f3f3f3",
      paper: "#ffffff",
    },
    text: {
      primary: "#455565",
      secondary: "#455565",
      disabled: "rgba(69, 85, 101, 0.5)",
      hint: "rgba(69, 85, 101, 0.5)",
    },
    success: {
      main: "#1dbd45",
      dark: "",
      light: "rgba(29, 189, 69, .5)",
      contrastText: "",
    },
    warning: {
      main: "#ffbd53",
      dark: "rgba(255, 189, 83, .5)",
      light: "",
      contrastText: "",
    },
    error: {
      main: "#db3d23",
      dark: "#992A18",
      light: "rgba(219, 61, 35, .5)",
    },
    action: {
      active: "#0072bc",
      disabled: "rgba(0, 114, 188, 0.1)",
      hover: "rgba(0, 114, 188, 0.8)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    // H1 - Primarily used for large text inside the card blocks
    h1: {
      fontFamily: 'Rodina',
      fontWeight: 400,
      letterSpacing: "-0.00833em",
      fontSize: "65px",
      lineHeight: "80px",
      textAlign: 'center'
    },
    // H2 - Used for the headings at the top of the dashboards
    h2: {
      fontFamily: 'Rodina',
      fontWeight: 400,
      fontSize: "30px",
      lineHeight: 1.25,
      letterSpacing: "-0.00833em",
    },
    // H3 - Used for the body text of health screening cards
    h3: {
      fontFamily: 'Rodina',
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "35px",
      letterSpacing: "-0.00833em",
      textOverflow: "ellipsis",
    },
    // H4 - Used for the headings of cards and panels
    h4: {
      fontFamily: 'Rodina',
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "-0.00833em",
      textOverflow: "ellipsis",
    },
    // H5 - Used for the headings of panel block list items, or highlighted body text (bold text)
    h5: {
      fontFamily: 'Rodina',
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "21px",
      letterSpacing: "-0.00833em",
    },
    // H6 - Used for dashboard subtitles
    h6: {
      fontFamily: 'Rodina',
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "21px",
      letterSpacing: "-0.00833em",
    },
    // Body 1 - Used for all paragraph text
    body1: {
      fontFamily: `"Roboto"`,
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "22px",
      letterSpacing: "0.25px",
    },
     subtitle: {
      fontFamily: `"Inter"`,
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "22px",
      letterSpacing: "0.25px",
    },
    button: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "1px",
    },
  },
});
