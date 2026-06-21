// import { HttpInterceptorFn } from '@angular/common/http';

// export const tmdbInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../../enviroment/enviroment';

export const tmdbInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${environment.tmdbToken}`,
    },
  });

  return next(clonedReq);
};
