import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LaunchDialogService, LAUNCH_CALLER, } from '../../layout/launch-dialog/index';
import * as i0 from "@angular/core";
import * as i1 from "../../layout/launch-dialog/services/launch-dialog.service";
let AnonymousConsentLaunchDialogService = class AnonymousConsentLaunchDialogService {
    constructor(launchDialogService) {
        this.launchDialogService = launchDialogService;
    }
    openDialog(openElement, vcr) {
        const component = this.launchDialogService.launch(LAUNCH_CALLER.ANONYMOUS_CONSENT, vcr);
        if (component) {
            return combineLatest([
                component,
                this.launchDialogService.dialogClose,
            ]).pipe(filter(([, close]) => close && close !== undefined), tap(([comp]) => {
                openElement === null || openElement === void 0 ? void 0 : openElement.nativeElement.focus();
                this.launchDialogService.clear(LAUNCH_CALLER.ANONYMOUS_CONSENT);
                comp.destroy();
            }), map(([comp]) => comp));
        }
    }
};
AnonymousConsentLaunchDialogService.ctorParameters = () => [
    { type: LaunchDialogService }
];
AnonymousConsentLaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentLaunchDialogService_Factory() { return new AnonymousConsentLaunchDialogService(i0.ɵɵinject(i1.LaunchDialogService)); }, token: AnonymousConsentLaunchDialogService, providedIn: "root" });
AnonymousConsentLaunchDialogService = __decorate([
    Injectable({ providedIn: 'root' })
], AnonymousConsentLaunchDialogService);
export { AnonymousConsentLaunchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnQtbWFuYWdlbWVudC9hbm9ueW1vdXMtY29uc2VudC1sYXVuY2gtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixhQUFhLEdBQ2QsTUFBTSxrQ0FBa0MsQ0FBQzs7O0FBRzFDLElBQWEsbUNBQW1DLEdBQWhELE1BQWEsbUNBQW1DO0lBQzlDLFlBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQUVsRSxVQUFVLENBQ1IsV0FBd0IsRUFDeEIsR0FBc0I7UUFFdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FDL0MsYUFBYSxDQUFDLGlCQUFpQixFQUMvQixHQUFHLENBQ0osQ0FBQztRQUVGLElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVc7YUFDckMsQ0FBQyxDQUFDLElBQUksQ0FDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLEVBQ25ELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDYixXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsYUFBYSxDQUFDLEtBQUssR0FBRztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUN0QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUExQjRDLG1CQUFtQjs7O0FBRG5ELG1DQUFtQztJQUQvQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsbUNBQW1DLENBMkIvQztTQTNCWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgTEFVTkNIX0NBTExFUixcbn0gZnJvbSAnLi4vLi4vbGF5b3V0L2xhdW5jaC1kaWFsb2cvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRMYXVuY2hEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2UpIHt9XG5cbiAgb3BlbkRpYWxvZyhcbiAgICBvcGVuRWxlbWVudD86IEVsZW1lbnRSZWYsXG4gICAgdmNyPzogVmlld0NvbnRhaW5lclJlZlxuICApOiBPYnNlcnZhYmxlPGFueT4gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5sYXVuY2goXG4gICAgICBMQVVOQ0hfQ0FMTEVSLkFOT05ZTU9VU19DT05TRU5ULFxuICAgICAgdmNyXG4gICAgKTtcblxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuZGlhbG9nQ2xvc2UsXG4gICAgICBdKS5waXBlKFxuICAgICAgICBmaWx0ZXIoKFssIGNsb3NlXSkgPT4gY2xvc2UgJiYgY2xvc2UgIT09IHVuZGVmaW5lZCksXG4gICAgICAgIHRhcCgoW2NvbXBdKSA9PiB7XG4gICAgICAgICAgb3BlbkVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuY2xlYXIoTEFVTkNIX0NBTExFUi5BTk9OWU1PVVNfQ09OU0VOVCk7XG4gICAgICAgICAgY29tcC5kZXN0cm95KCk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKFtjb21wXSkgPT4gY29tcClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=