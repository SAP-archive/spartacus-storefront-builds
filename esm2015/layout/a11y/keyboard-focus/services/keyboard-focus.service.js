import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { LockFocusService } from '../lock/lock-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "./select-focus.util";
let KeyboardFocusService = class KeyboardFocusService extends LockFocusService {
};
KeyboardFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KeyboardFocusService_Factory() { return new KeyboardFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: KeyboardFocusService, providedIn: "root" });
KeyboardFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], KeyboardFocusService);
export { KeyboardFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtZm9jdXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3NlcnZpY2VzL2tleWJvYXJkLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUs5RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGdCQUFnQjtDQUFHLENBQUE7O0FBQWhELG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csb0JBQW9CLENBQTRCO1NBQWhELG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2tGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9sb2NrL2xvY2stZm9jdXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBLZXlib2FyZEZvY3VzU2VydmljZSBleHRlbmRzIExvY2tGb2N1c1NlcnZpY2Uge31cbiJdfQ==