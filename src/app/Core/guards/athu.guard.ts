import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {LoginserviceService} from "../../Feature/auth/services/loginservice.service";
import jwt_decode from "jwt-decode";

export const athuGuard: CanActivateFn = (route, state) => {
    const cookeservice = inject(CookieService);
    const loginservice = inject(LoginserviceService);
    const router = inject(Router);
    const user = loginservice.getuser();
    let token = cookeservice.get('Authorization');
    if (token && user) {
        token = token.replace('Brearer', '')
        const tokendeoced: any = jwt_decode(token);
        const expiredtime = tokendeoced.exp * 1000;
        const currenttime = new Date().getTime();
        if (expiredtime < currenttime) {
            loginservice.Logout();
            return router.createUrlTree(['/Login'], {queryParams: {returnUrl: state.url}})
        } else {
            if (user.role.includes('Writer')) {
                return true;
            } else {
                alert('unAthurized!')
                return false;

            }
        }
    } else {
        loginservice.Logout();
        return router.createUrlTree(['/Login'], {queryParams: {returnUrl: state.url}})
    }
};
