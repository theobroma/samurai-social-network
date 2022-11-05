// https://blog.agney.dev/styled-components-&-typescript/
// import original module declarations
import type { lightTheme } from '../@utils/theme';

import 'styled-components';
// and extend them!
declare module 'styled-components' {
  //   export interface DefaultTheme {
  //     background: string;
  //     color: string;
  //     elementBackground: string;
  //   }
  type Theme = typeof lightTheme;
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
}
