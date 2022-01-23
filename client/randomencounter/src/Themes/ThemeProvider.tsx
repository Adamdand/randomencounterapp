import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    primaryLink: string;
    primaryLinkHighlight: string;
    primaryShadow: string;
    secondaryShadow: string;
    primaryHover: string;
    secondaryHover: string;
    primaryFontColor: string;
    secondaryFontColor: string;
    tertiary: {
      main: string;
    };
    tertiaryHover: string;
    tertiaryShadow: string;
    extraColors: {
      [key: string]: string;
    };
  }

  interface PaletteOptions {
    primaryLink: string;
    primaryLinkHighlight: string;
    primaryShadow: string;
    secondaryShadow: string;
    primaryHover: string;
    secondaryHover: string;
    primaryFontColor: string;
    secondaryFontColor: string;
    tertiary: {
      main: string;
    };
    tertiaryHover: string;
    tertiaryShadow: string;
    extraColors: {
      [key: string]: string;
    };
  }
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties["width"];
      breakpoint: BreakpointOverrides;
    };
  }
  // allow configuration using `createMuiTheme`
  interface DeprecatedThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties["width"];
      breakpoint?: BreakpointOverrides;
    };
  }
}

declare module "@mui/material/Typography" {
  interface Typography {
    bodyBold: React.CSSProperties;
    sidebarBold: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    sidebarRegular: React.CSSProperties;
    bodySemiBold: React.CSSProperties;
    smallText: React.CSSProperties;
    warning: React.CSSProperties;
    addEditLink: React.CSSProperties;
  }

  interface TypographyOptions {
    bodyBold?: React.CSSProperties;
    sidebarBold?: React.CSSProperties;
    bodyRegular?: React.CSSProperties;
    sidebarRegular?: React.CSSProperties;
    bodySemiBold?: React.CSSProperties;
    warning?: React.CSSProperties;
    addEditLink?: React.CSSProperties;
    smallText?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    main: true;
    submain: true;
  }
}

/// ////
declare module "@mui/material/styles/createTypography" {
  interface Typography {
    bodyBold: React.CSSProperties;
    sidebarBold: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    bodySemiBold: React.CSSProperties;
    sidebarRegular: React.CSSProperties;
    warning: React.CSSProperties;
    addEditLink: React.CSSProperties;
    smallText: React.CSSProperties;
  }

  interface TypographyOptions {
    bodyBold?: React.CSSProperties;
    sidebarBold?: React.CSSProperties;
    bodyRegular?: React.CSSProperties;
    bodySemiBold?: React.CSSProperties;
    sidebarRegular?: React.CSSProperties;
    warning?: React.CSSProperties;
    addEditLink?: React.CSSProperties;
    smallText?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyBold: true;
    sidebarBold: true;
    bodyRegular: true;
    bodySemiBold: true;
    sidebarRegular: true;
    warning: true;
    addEditLink: true;
    smallText: true;
  }
}
/// ///
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyBold: true;
    sidebarBold: true;
    bodyRegular: true;
    sidebarRegular: true;
    bodySemiBold: true;
    warning: true;
    addEditLink: true;
    smallText: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 769,
      lg: 1440,
      mobile: 0,
      tablet: 640,
      desktop: 1024,
    },
  },
});

const font = "'Fjalla One', 'Open Sans', sans-serif";

const BaseTheme = createTheme({
  palette: {
    primary: {
      main: "#810000",
    },
    secondary: {
      main: "#C9B400",
    },
    tertiary: {
      main: "#22AF00",
    },
    success: {
      main: "#22AF00",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: "#FFFFFFF",
    },
    primaryLink: "#810000",
    primaryLinkHighlight: "#2B70E3",
    primaryHover: "#2B70E30D",
    secondaryHover: "#FFFFFF0D",
    primaryShadow: "#C9B400",
    secondaryShadow: "#F2A9000D",
    tertiaryHover: "#C9B400",
    tertiaryShadow: "#C9B400",
    primaryFontColor: "#FFFFFF",
    secondaryFontColor: " #810000",
    extraColors: {
      black: "#2C2A29",
      darkGrey: "#999999",
      lightGrey: "#DDDDDD",
      offWhite: "#F8F8F8",
      white: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 420, // Changing to include iphone max sizes (6, 7, 8 and X)
      md: 769,
      lg: 1440,
      mobile: 0,
      tablet: 640,
      desktop: 1024,
      // laptop: 1024,
      // desktop: 1200,
    },
  },
  typography: {
    fontFamily: font,
    h1: {
      fontFamily: "Fjalla One",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "32px",
      lineHeight: "40.22px",
    },
    h2: {
      fontFamily: "Fjalla One",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "25.14px",
    },
    bodyBold: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "21.79px",
    },
    sidebarBold: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: "24.51px",
    },
    bodyRegular: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: "24.51px",
    },
    bodySemiBold: {
      fontFamily: "Open Sans",
      fontSize: "16px",
      lineHeight: "18.75px",
    },
    sidebarRegular: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "24.51px",
    },
    warning: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "21.79px",
      color: "#0057B8",
    },
    addEditLink: {
      fontFamily: "Open Sans",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#0057B8",
    },
    smallText: {
      fontFamily: "Open Sans",
      fontSize: "12px",
      fontWeight: "normal",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            color: "#F8F8F8",
            padding: "12px",
            backgroundColor: "#810000",
            borderRadius: 0,
            whiteSpace: "nowrap",
            boxShadow: "inset 0px -3px 0px 0px #F2A900",
            "&:hover": {
              backgroundColor: "#ADA702",
              // color: '#FFFFFF',
            },
            "&.Mui-disabled": {
              backgroundColor: "#7E4E4E",
              opacity: 0.5,
              color: "#F8F8F8",
            },
          },
        },
        {
          props: { variant: "submain" },
          style: {
            color: "#810000",
            backgroundColor: "#F8F8F8",
            borderRadius: 0,
            padding: "12px",
            whiteSpace: "nowrap",
            boxShadow: "inset 0px -3px 0px 0px #F2A900",
            "&:hover": {
              backgroundColor: "#ADA702",
            },
            "& .Mui-disabled": {
              backgroundColor: "#2B70E30D",
              opacity: 0.5,
              color: "#F8F8F8",
            },
          },
        },
      ],
    },
  },
});

export default BaseTheme;
