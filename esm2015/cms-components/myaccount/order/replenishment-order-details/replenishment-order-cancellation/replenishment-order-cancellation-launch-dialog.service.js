import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LaunchDialogService, LAUNCH_CALLER, } from '../../../../../layout/launch-dialog/index';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../layout/launch-dialog/services/launch-dialog.service";
export class ReplenishmentOrderCancellationLaunchDialogService {
    constructor(launchDialogService) {
        this.launchDialogService = launchDialogService;
    }
    openDialog(openElement, vcr, data) {
        const component = this.launchDialogService.launch(LAUNCH_CALLER.REPLENISHMENT_ORDER, vcr, data);
        if (component) {
            return combineLatest([
                component,
                this.launchDialogService.dialogClose,
            ]).pipe(filter(([, close]) => close && close !== undefined), tap(([comp]) => {
                openElement === null || openElement === void 0 ? void 0 : openElement.nativeElement.focus();
                this.launchDialogService.clear(LAUNCH_CALLER.REPLENISHMENT_ORDER);
                comp.destroy();
            }), map(([comp]) => comp));
        }
    }
}
ReplenishmentOrderCancellationLaunchDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReplenishmentOrderCancellationLaunchDialogService_Factory() { return new ReplenishmentOrderCancellationLaunchDialogService(i0.ɵɵinject(i1.LaunchDialogService)); }, token: ReplenishmentOrderCancellationLaunchDialogService, providedIn: "root" });
ReplenishmentOrderCancellationLaunchDialogService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ReplenishmentOrderCancellationLaunchDialogService.ctorParameters = () => [
    { type: LaunchDialogService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tbGF1bmNoLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi1sYXVuY2gtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGFBQWEsR0FDZCxNQUFNLDJDQUEyQyxDQUFDOzs7QUFHbkQsTUFBTSxPQUFPLGlEQUFpRDtJQUM1RCxZQUFzQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFHLENBQUM7SUFFbEUsVUFBVSxDQUNSLFdBQXdCLEVBQ3hCLEdBQXNCLEVBQ3RCLElBQVU7UUFFVixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUMvQyxhQUFhLENBQUMsbUJBQW1CLEVBQ2pDLEdBQUcsRUFDSCxJQUFJLENBQ0wsQ0FBQztRQUVGLElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTyxhQUFhLENBQUM7Z0JBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVc7YUFDckMsQ0FBQyxDQUFDLElBQUksQ0FDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLEVBQ25ELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDYixXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsYUFBYSxDQUFDLEtBQUssR0FBRztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUN0QixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7O1lBN0JGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUpoQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgTEFVTkNIX0NBTExFUixcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGF5b3V0L2xhdW5jaC1kaWFsb2cvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJlcGxlbmlzaG1lbnRPcmRlckNhbmNlbGxhdGlvbkxhdW5jaERpYWxvZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSkge31cblxuICBvcGVuRGlhbG9nKFxuICAgIG9wZW5FbGVtZW50PzogRWxlbWVudFJlZixcbiAgICB2Y3I/OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGRhdGE/OiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UubGF1bmNoKFxuICAgICAgTEFVTkNIX0NBTExFUi5SRVBMRU5JU0hNRU5UX09SREVSLFxuICAgICAgdmNyLFxuICAgICAgZGF0YVxuICAgICk7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmRpYWxvZ0Nsb3NlLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgZmlsdGVyKChbLCBjbG9zZV0pID0+IGNsb3NlICYmIGNsb3NlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICB0YXAoKFtjb21wXSkgPT4ge1xuICAgICAgICAgIG9wZW5FbGVtZW50Py5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsZWFyKExBVU5DSF9DQUxMRVIuUkVQTEVOSVNITUVOVF9PUkRFUik7XG4gICAgICAgICAgY29tcC5kZXN0cm95KCk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKFtjb21wXSkgPT4gY29tcClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=