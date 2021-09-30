import { ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
  // rename component-> comp cause this porblem
  // https://stackoverflow.com/a/57408531/3988363
  // TODO: fix error
  // comp?: RouteProps['component'];
  comp?: ComponentType | any;
  onlyPublic?: boolean;
  layout: ComponentType;
  routes?: IRoute[];
}
