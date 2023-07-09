import { addColorAlpha, transformColorWithOpacity } from '../../shared';
import type { KebabCase } from '../../types';

/** Tab激活时的颜色 */
export const ACTIVE_COLOR = '#1890ff';

type Prefix = '--ib-';

export type CssVarsProps = {
  primaryColor: string;
  primaryColor1: string;
  primaryColor2: string;
  primaryColorOpacity1: string;
  primaryColorOpacity2: string;
  primaryColorOpacity3: string;
};

type CssVars = {
  [K in keyof CssVarsProps as `${Prefix}${KebabCase<K>}`]: string | number;
};

function createCssVars(props: CssVarsProps) {
  const cssVars: CssVars = {
    '--ib-primary-color': props.primaryColor,
    '--ib-primary-color1': props.primaryColor1,
    '--ib-primary-color2': props.primaryColor2,
    '--ib-primary-color-opacity1': props.primaryColorOpacity1,
    '--ib-primary-color-opacity2': props.primaryColorOpacity2,
    '--ib-primary-color-opacity3': props.primaryColorOpacity3
  };

  return cssVars;
}

export function createTabCssVars(primaryColor: string) {
  const cssProps: CssVarsProps = {
    primaryColor,
    primaryColor1: transformColorWithOpacity(primaryColor, 0.1, '#ffffff'),
    primaryColor2: transformColorWithOpacity(primaryColor, 0.3, '#000000'),
    primaryColorOpacity1: addColorAlpha(primaryColor, 0.1),
    primaryColorOpacity2: addColorAlpha(primaryColor, 0.15),
    primaryColorOpacity3: addColorAlpha(primaryColor, 0.3)
  };

  return createCssVars(cssProps);
}
