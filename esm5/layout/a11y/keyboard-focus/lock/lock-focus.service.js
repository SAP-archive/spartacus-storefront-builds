import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { TrapFocusService } from '../trap/trap-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
var LockFocusService = /** @class */ (function (_super) {
    __extends(LockFocusService, _super);
    function LockFocusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LockFocusService_Factory() { return new LockFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: LockFocusService, providedIn: "root" });
    LockFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], LockFocusService);
    return LockFocusService;
}(TrapFocusService));
export { LockFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvbG9jay9sb2NrLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUs5RDtJQUFzQyxvQ0FBZ0I7SUFBdEQ7O0tBQXlEOztJQUE1QyxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQUE0QjsyQkFOekQ7Q0FNeUQsQUFBekQsQ0FBc0MsZ0JBQWdCLEdBQUc7U0FBNUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhcEZvY3VzU2VydmljZSB9IGZyb20gJy4uL3RyYXAvdHJhcC1mb2N1cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvY2tGb2N1c1NlcnZpY2UgZXh0ZW5kcyBUcmFwRm9jdXNTZXJ2aWNlIHt9XG4iXX0=