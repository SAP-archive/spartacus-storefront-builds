/**
 * This module enables to quickly switch from Resource Owner Password Flow
 * to Implicit Flow or Authorization Code Flow. The `login` route in this case will be
 * responsible for initalizing the redirect to OAuth server to login.
 *
 * Instead of manually invoking OAuth redirect you only have to redirect to `login` page.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../cms-structure/page/page-layout/page-layout.module';
import * as ɵngcc2 from '@angular/router';
export declare class LoginRouteModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<LoginRouteModule, never, [typeof ɵngcc1.PageLayoutModule, typeof ɵngcc2.RouterModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<LoginRouteModule>;
}

//# sourceMappingURL=login-route.module.d.ts.map