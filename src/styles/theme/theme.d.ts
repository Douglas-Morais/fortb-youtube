import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primaryBackground: string;
      secondaryBackground: string;
      textColor: string;
      textColorDisabled: string;
      light: string;
      dark: string;
      gray: string;
      blue: string;
    };
    metric: {
      topNavbar: string;
    }
  }
}
