import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LaunchDialogService, LAUNCH_CALLER, } from '../../layout/launch-dialog/index';
import * as i0 from "@angular/core";
import * as i1 from "../../layout/launch-dialog/services/launch-dialog.service";
var AnonymousConsentLaunchDialogService = /** @class */ (function () {
    function AnonymousConsentLaunchDialogService(launchDialogService) {
        this.launchDialogService = launchDialogService;
    }
    AnonymousConsentLaunchDialogService.prototype.openDialog = function (openElement, vcr) {
        var _this = this;
        var component = this.launchDialogService.launch(LAUNCH_CALLER.ANONYMOUS_CONSENT, vcr);
        if (component) {
            return combineLatest([
                component,
                this.launchDialogService.dialogClose,
            ]).pipe(filter(function (_a) {
                var _b = __read(_a, 2), close = _b[1];
                return close && close !== undefined;
            }), tap(function (_a) {
                var _b = __read(_a, 1), comp = _b[0];
                openElement === null || openElement === void 0 ? void 0 : openElement.nativeElement.focus();
                _this.launchDialogService.clear(LAUNCH_CALLER.ANONYMOUS_CONSENT);
                comp.destroy();
            }), map(function (_a) {
                var _b = __read(_a, 1), comp = _b[0];
                return comp;
            }));
        }
    };
    AnonymousConsentLaunchDialogService.ctorParameters = function () { return [
        { type: LaunchDialogService }
    ]; };
    AnonymousConsentLaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentLaunchDialogService_Factory() { return new AnonymousConsentLaunchDialogService(i0.ɵɵinject(i1.LaunchDialogService)); }, token: AnonymousConsentLaunchDialogService, providedIn: "root" });
    AnonymousConsentLaunchDialogService = __decorate([
        Injectable({ providedIn: 'root' })
    ], AnonymousConsentLaunchDialogService);
    return AnonymousConsentLaunchDialogService;
}());
export { AnonymousConsentLaunchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1sYXVuY2gtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixhQUFhLEdBQ2QsTUFBTSxrQ0FBa0MsQ0FBQzs7O0FBRzFDO0lBQ0UsNkNBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQUVsRSx3REFBVSxHQUFWLFVBQ0UsV0FBd0IsRUFDeEIsR0FBc0I7UUFGeEIsaUJBdUJDO1FBbkJDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQy9DLGFBQWEsQ0FBQyxpQkFBaUIsRUFDL0IsR0FBRyxDQUNKLENBQUM7UUFFRixJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sYUFBYSxDQUFDO2dCQUNuQixTQUFTO2dCQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXO2FBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQ0wsTUFBTSxDQUFDLFVBQUMsRUFBUztvQkFBVCxrQkFBUyxFQUFOLGFBQUs7Z0JBQU0sT0FBQSxLQUFLLElBQUksS0FBSyxLQUFLLFNBQVM7WUFBNUIsQ0FBNEIsQ0FBQyxFQUNuRCxHQUFHLENBQUMsVUFBQyxFQUFNO29CQUFOLGtCQUFNLEVBQUwsWUFBSTtnQkFDUixXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsYUFBYSxDQUFDLEtBQUssR0FBRztnQkFDbkMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEVBQU07b0JBQU4sa0JBQU0sRUFBTCxZQUFJO2dCQUFNLE9BQUEsSUFBSTtZQUFKLENBQUksQ0FBQyxDQUN0QixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkF6QjBDLG1CQUFtQjs7O0lBRG5ELG1DQUFtQztRQUQvQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsbUNBQW1DLENBMkIvQzs4Q0FwQ0Q7Q0FvQ0MsQUEzQkQsSUEyQkM7U0EzQlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIExhdW5jaERpYWxvZ1NlcnZpY2UsXG4gIExBVU5DSF9DQUxMRVIsXG59IGZyb20gJy4uLy4uL2xheW91dC9sYXVuY2gtZGlhbG9nL2luZGV4JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50TGF1bmNoRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG9wZW5EaWFsb2coXG4gICAgb3BlbkVsZW1lbnQ/OiBFbGVtZW50UmVmLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWZcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UubGF1bmNoKFxuICAgICAgTEFVTkNIX0NBTExFUi5BTk9OWU1PVVNfQ09OU0VOVCxcbiAgICAgIHZjclxuICAgICk7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmRpYWxvZ0Nsb3NlLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgZmlsdGVyKChbLCBjbG9zZV0pID0+IGNsb3NlICYmIGNsb3NlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICB0YXAoKFtjb21wXSkgPT4ge1xuICAgICAgICAgIG9wZW5FbGVtZW50Py5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsZWFyKExBVU5DSF9DQUxMRVIuQU5PTllNT1VTX0NPTlNFTlQpO1xuICAgICAgICAgIGNvbXAuZGVzdHJveSgpO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbY29tcF0pID0+IGNvbXApXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19