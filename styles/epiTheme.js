import { createTheme } from "@mui/material/styles";

export const epiTheme = createTheme({
  MuiCssBaseline: {
    defaultProps: {
      enableColorScheme: true,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      sizeLarge: {
        padding: "0.875rem 1rem",
        fontSize: "1rem",
        lineHeight: 1.3125,
        letterSpacing: 0,
        fontFamily:
          '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: 700,
      },
      sizeSmall: {
        padding: "4px 8px",
        marginLeft: "-8px",
      },
      containedPrimary: {
        backgroundColor: "#007FFF",
        color: "#fff",
      },
    },
    variants: [
      {
        props: {
          variant: "code",
        },
        style: {
          color: "#B2BAC2",
          border: "1px solid",
          borderColor: "#265D97",
          backgroundColor: "#132F4C",
          fontFamily: "Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace",
          fontWeight: 400,
          fontSize: "0.8125rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          WebkitFontSmoothing: "subpixel-antialiased",
          "&:hover, &.Mui-focusVisible": {
            borderColor: "#3399FF",
            backgroundColor: "#173A5E",
            "& .MuiButton-endIcon": {
              color: "#66B2FF",
            },
          },
          "& .MuiButton-startIcon": {
            color: "#B2BAC2",
          },
          "& .MuiButton-endIcon": {
            display: "inline-block",
            position: "absolute",
            right: 0,
            marginRight: 10,
            color: "#B2BAC2",
          },
        },
      },
      {
        props: {
          variant: "link",
        },
        style: {
          fontSize: "0.875rem",
          fontWeight: 700,
          color: "#66B2FF",
          mb: 1,
          "& svg": {
            ml: -0.5,
          },
        },
      },
    ],
  },
  MuiIconButton: {
    variants: [
      {
        props: {
          color: "primary",
        },
        style: {
          height: 34,
          width: 34,
          border: "1px solid #132F4C",
          borderRadius: 10,
          color: "#66B2FF",
          "&:hover": {
            borderColor: "#173A5E",
            background: "rgba(19, 47, 76, 0.4)",
          },
        },
      },
    ],
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        mt: 0.5,
        minWidth: 160,
        elevation: 0,
        color: "#B2BAC2",
        backgroundImage: "none",
        bgColor: "#0A1929",
        border: "1px solid #132F4C",
        "& .MuiMenuItem-root": {
          fontSize: "0.875rem",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "rgba(19, 47, 76, 0.4)",
          },
          "&:focus": {
            backgroundColor: "rgba(19, 47, 76, 0.4)",
          },
          "&.Mui-selected": {
            fontWeight: 500,
            color: "#66B2FF",
            backgroundColor: "#132F4C",
          },
        },
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        "@media (min-width:900px)": {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: "rgba(194, 224, 255, 0.08)",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "none",
    },
    styleOverrides: {
      root: {
        color: "#66B2FF",
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        "&:hover": {
          color: "#99CCF3",
        },
        "&.MuiTypography-body1 > svg": {
          marginTop: 2,
        },
        "& svg:last-child": {
          marginLeft: 2,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
      },
      outlined: {
        color: "#fff",
        backgroundColor: "transparent",
        borderColor: "#173A5E",
      },
      filled: {
        border: "1px solid transparent",
        color: "#fff",
        backgroundColor: "#1E4976",
        "&:hover": {
          backgroundColor: "#173A5E",
        },
      },
      deleteIcon: {
        color: "#fff",
        "&:hover": {
          color: "#E7EBF0",
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        padding: "8px",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "0.875rem",
        color: "#CDD2D7",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: "rgba(19, 47, 76, 0.4)",
        },
        "&.Mui-selected": {
          color: "#fff",
          borderRadius: 10,
          border: "1px solid",
          borderColor: "#0059B2 !important",
          backgroundColor: "#132F4C",
          "&:hover": {
            backgroundColor: "#173A5E",
          },
        },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: {
        type: {},
        compare: null,
      },
    },
    styleOverrides: {
      iconFilled: {
        top: "calc(50% - .25em)",
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableTouchRipple: true,
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        backgroundColor: "#0A1929",
        "&[href]": {
          textDecorationLine: "none",
        },
      },
      outlined: {
        display: "block",
        borderColor: "#1E4976",
        backgroundColor: "#132F4C",
        "a&, button&": {
          "&:hover": {
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          },
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: "8px 16px",
        borderColor: "rgba(194, 224, 255, 0.08)",
      },
      head: {
        color: "#fff",
        fontWeight: 700,
      },
      body: {
        color: "#B2BAC2",
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        backgroundColor: "#0A1929",
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 500,
        color: "#CDD2D7",
        borderColor: "#1E4976",
        "&.Mui-selected": {
          color: "#fff",
          borderColor: "#0059B2 !important",
          backgroundColor: "#132F4C",
          "&:hover": {
            backgroundColor: "#173A5E",
          },
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        padding: "5px 9px",
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 32,
        height: 20,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          "&.Mui-checked": {
            transform: "translateX(11px)",
            color: "#fff",
          },
        },
      },
      switchBase: {
        height: 20,
        width: 20,
        padding: 0,
        color: "#fff",
        "&.Mui-checked + .MuiSwitch-track": {
          opacity: 1,
        },
      },
      track: {
        opacity: 1,
        borderRadius: 32,
        backgroundColor: "#2D3843",
      },
      thumb: {
        flexShrink: 0,
        width: "14px",
        height: "14px",
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 700,
        color: "#CDD2D7",
        borderColor: "#1E4976",
        "&.Mui-selected": {
          color: "#fff",
          borderColor: "#0059B2 !important",
          backgroundColor: "#132F4C",
          "&:hover": {
            backgroundColor: "#173A5E",
          },
        },
      },
    },
  },
});
