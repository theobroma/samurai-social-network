import { useMemo } from 'react';

import { ACCESS_LEVEL, IRoute, ROLE, ROLES } from '../@types';
// import { ROLES } from '#/@store/roles';

export function useAllowedRoutes(
  routes: IRoute[],
  userRole: ROLE,
  accessLevel?: ACCESS_LEVEL,
) {
  return useMemo(() => {
    return routes.filter((route: IRoute) => {
      // if there is no access the route is suitable
      // all public routes do not have access
      if (!route.access) {
        return true;
      }
      return Boolean(
        (route.access[0] || ROLES.ALL).includes(userRole) &&
          (route.access[1] === undefined ||
            (accessLevel !== undefined &&
              (route.access[2]
                ? accessLevel === route.access[1]
                : accessLevel >= route.access[1]))),
      );
    });
  }, [accessLevel, routes, userRole]);
}
