import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { TrapFocusService } from '../trap/trap-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
let LockFocusService = class LockFocusService extends TrapFocusService {
};
LockFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LockFocusService_Factory() { return new LockFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: LockFocusService, providedIn: "root" });
LockFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LockFocusService);
export { LockFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvbG9jay9sb2NrLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUs5RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFpQixTQUFRLGdCQUFnQjtDQUFHLENBQUE7O0FBQTVDLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZ0JBQWdCLENBQTRCO1NBQTVDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYXBGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi90cmFwL3RyYXAtZm9jdXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NrRm9jdXNTZXJ2aWNlIGV4dGVuZHMgVHJhcEZvY3VzU2VydmljZSB7fVxuIl19