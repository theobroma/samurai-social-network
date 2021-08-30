// https://blog.agney.dev/styled-components-&-typescript/
// import original module declarations
import 'styled-components';
import { lightTheme } from '../@utils/theme';
// and extend them!
declare module 'styled-components' {
  //   export interface DefaultTheme {
  //     background: string;
  //     color: string;
  //     elementBackground: string;
  //   }
  type Theme = typeof lightTheme;
  export interface DefaultTheme extends Theme {}
}
