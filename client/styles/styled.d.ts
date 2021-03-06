import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      yellow: string;
      orange: string;
      gray: string;
      gray_background: string;
    };

    device: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
  }
}
