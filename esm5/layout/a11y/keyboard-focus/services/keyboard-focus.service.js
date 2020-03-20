import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { LockFocusService } from '../lock/lock-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "./select-focus.util";
var KeyboardFocusService = /** @class */ (function (_super) {
    __extends(KeyboardFocusService, _super);
    function KeyboardFocusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyboardFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KeyboardFocusService_Factory() { return new KeyboardFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: KeyboardFocusService, providedIn: "root" });
    KeyboardFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], KeyboardFocusService);
    return KeyboardFocusService;
}(LockFocusService));
export { KeyboardFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtZm9jdXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3NlcnZpY2VzL2tleWJvYXJkLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUs5RDtJQUEwQyx3Q0FBZ0I7SUFBMUQ7O0tBQTZEOztJQUFoRCxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQUE0QjsrQkFON0Q7Q0FNNkQsQUFBN0QsQ0FBMEMsZ0JBQWdCLEdBQUc7U0FBaEQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4uL2xvY2svbG9jay1mb2N1cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEtleWJvYXJkRm9jdXNTZXJ2aWNlIGV4dGVuZHMgTG9ja0ZvY3VzU2VydmljZSB7fVxuIl19