import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, WindowRef, } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
import * as i0 from "@angular/core";
import * as i1 from "../pwa.module-config";
import * as i2 from "@spartacus/core";
var AddToHomeScreenService = /** @class */ (function () {
    function AddToHomeScreenService(config, globalMessageService, winRef) {
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.winRef = winRef;
        this.canPrompt = new BehaviorSubject(false);
        this.canPrompt$ = this.canPrompt.asObservable();
        if (this.config.pwa.addToHomeScreen) {
            this.init();
        }
    }
    AddToHomeScreenService.prototype.init = function () {
        var _this = this;
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', function (event) {
                event.preventDefault();
                _this.deferredEvent = event;
                _this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', function () {
                _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                _this.disableAddToHomeScreen();
                _this.deferredEvent = null;
            });
        }
    };
    AddToHomeScreenService.prototype.enableAddToHomeScreen = function () {
        this.canPrompt.next(true);
    };
    AddToHomeScreenService.prototype.disableAddToHomeScreen = function () {
        this.canPrompt.next(false);
    };
    AddToHomeScreenService.prototype.firePrompt = function () {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    };
    AddToHomeScreenService.ctorParameters = function () { return [
        { type: PWAModuleConfig },
        { type: GlobalMessageService },
        { type: WindowRef }
    ]; };
    AddToHomeScreenService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AddToHomeScreenService_Factory() { return new AddToHomeScreenService(i0.ɵɵinject(i1.PWAModuleConfig), i0.ɵɵinject(i2.GlobalMessageService), i0.ɵɵinject(i2.WindowRef)); }, token: AddToHomeScreenService, providedIn: "root" });
    AddToHomeScreenService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AddToHomeScreenService);
    return AddToHomeScreenService;
}());
export { AddToHomeScreenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3B3YS9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUt2RDtJQU9FLGdDQUNZLE1BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxNQUFpQjtRQUZqQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQbkIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRTFELGVBQVUsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU85RCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQ3ZDLHFCQUFxQixFQUNyQixVQUFDLEtBQUs7Z0JBQ0osS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUNGLENBQUM7WUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hELEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQ2hDLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO2dCQUVGLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHNEQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBNUNtQixlQUFlO2dCQUNELG9CQUFvQjtnQkFDbEMsU0FBUzs7O0lBVmxCLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBcURsQztpQ0FqRUQ7Q0FpRUMsQUFyREQsSUFxREM7U0FyRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBXQU1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL3B3YS5tb2R1bGUtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvSG9tZVNjcmVlblNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZGVmZXJyZWRFdmVudDogYW55O1xuXG4gIHByb3RlY3RlZCBjYW5Qcm9tcHQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjYW5Qcm9tcHQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jYW5Qcm9tcHQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUFdBTW9kdWxlQ29uZmlnLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wd2EuYWRkVG9Ib21lU2NyZWVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnYmVmb3JlaW5zdGFsbHByb21wdCcsXG4gICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kZWZlcnJlZEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgdGhpcy5lbmFibGVBZGRUb0hvbWVTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FwcGluc3RhbGxlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgeyBrZXk6ICdwd2EuYWRkZWRUb0hvbWVTY3JlZW4nIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kaXNhYmxlQWRkVG9Ib21lU2NyZWVuKCk7XG4gICAgICAgIHRoaXMuZGVmZXJyZWRFdmVudCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlbmFibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGVBZGRUb0hvbWVTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jYW5Qcm9tcHQubmV4dChmYWxzZSk7XG4gIH1cblxuICBmaXJlUHJvbXB0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmVycmVkRXZlbnQpIHtcbiAgICAgIHRoaXMuZGVmZXJyZWRFdmVudC5wcm9tcHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==