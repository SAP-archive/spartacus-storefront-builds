import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DeferLoadingStrategy } from '@spartacus/core';
import { CmsComponentsService } from '../../services/cms-components.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cms-components.service";
import * as i2 from "@angular/common";
export class PageSlotService {
    constructor(cmsComponentsService, platformId, document) {
        this.cmsComponentsService = cmsComponentsService;
        this.platformId = platformId;
        this.document = document;
        this.resolvePrerenderedSlots();
    }
    /**
     * Finds all slots visible in the SSR pre-rendered DOM
     */
    resolvePrerenderedSlots() {
        if (isPlatformBrowser(this.platformId)) {
            this.prerenderedSlots = Array.from(this.document.querySelectorAll('cx-page-slot'))
                .filter((el) => el.getBoundingClientRect().top <
                this.document.documentElement.clientHeight)
                .map((el) => el.getAttribute('page-slot'));
        }
    }
    /**
     * Indicates if certain slot should be rendered instantly.
     *
     * It's especially useful when transitioning from SSR to CSR application,
     * where we don't want to apply deferring logic to slots that are visible
     * to avoid unnecessary flickering.
     */
    shouldNotDefer(slot) {
        var _a;
        if ((_a = this.prerenderedSlots) === null || _a === void 0 ? void 0 : _a.includes(slot)) {
            this.prerenderedSlots.splice(this.prerenderedSlots.indexOf(slot), 1);
            return true;
        }
        return false;
    }
    /**
     * Returns the defer options for the given component. If the wrapping
     * page slot is prerendered, we would ignore the defer options altogether.
     */
    getComponentDeferOptions(slot, componentType) {
        if (this.shouldNotDefer(slot)) {
            return { deferLoading: DeferLoadingStrategy.INSTANT };
        }
        const deferLoading = this.cmsComponentsService.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
}
PageSlotService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageSlotService_Factory() { return new PageSlotService(i0.ɵɵinject(i1.CmsComponentsService), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.DOCUMENT)); }, token: PageSlotService, providedIn: "root" });
PageSlotService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PageSlotService.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBSzdFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQ1ksb0JBQTBDLEVBQ3JCLFVBQWUsRUFDbEIsUUFBUTtRQUYxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQUs7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUVwQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDTyx1QkFBdUI7UUFDL0IsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQy9DO2lCQUNFLE1BQU0sQ0FDTCxDQUFDLEVBQVcsRUFBRSxFQUFFLENBQ2QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUM3QztpQkFDQSxHQUFHLENBQUMsQ0FBQyxFQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQUMsSUFBWTs7UUFDekIsVUFBSSxJQUFJLENBQUMsZ0JBQWdCLDBDQUFFLFFBQVEsQ0FBQyxJQUFJLEdBQUc7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLGFBQXFCO1FBRXJCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZEO1FBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUNwRSxhQUFhLENBQ2QsQ0FBQztRQUNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O1lBN0RGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsb0JBQW9COzRDQVV4QixNQUFNLFNBQUMsV0FBVzs0Q0FDbEIsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBEZWZlckxvYWRpbmdTdHJhdGVneSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIHByZXJlbmRlcmVkU2xvdHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnRcbiAgKSB7XG4gICAgdGhpcy5yZXNvbHZlUHJlcmVuZGVyZWRTbG90cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCBzbG90cyB2aXNpYmxlIGluIHRoZSBTU1IgcHJlLXJlbmRlcmVkIERPTVxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVQcmVyZW5kZXJlZFNsb3RzKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnByZXJlbmRlcmVkU2xvdHMgPSBBcnJheS5mcm9tKFxuICAgICAgICB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2N4LXBhZ2Utc2xvdCcpXG4gICAgICApXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGVsOiBFbGVtZW50KSA9PlxuICAgICAgICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDxcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICApXG4gICAgICAgIC5tYXAoKGVsOiBFbGVtZW50KSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ3BhZ2Utc2xvdCcpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGNlcnRhaW4gc2xvdCBzaG91bGQgYmUgcmVuZGVyZWQgaW5zdGFudGx5LlxuICAgKlxuICAgKiBJdCdzIGVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdHJhbnNpdGlvbmluZyBmcm9tIFNTUiB0byBDU1IgYXBwbGljYXRpb24sXG4gICAqIHdoZXJlIHdlIGRvbid0IHdhbnQgdG8gYXBwbHkgZGVmZXJyaW5nIGxvZ2ljIHRvIHNsb3RzIHRoYXQgYXJlIHZpc2libGVcbiAgICogdG8gYXZvaWQgdW5uZWNlc3NhcnkgZmxpY2tlcmluZy5cbiAgICovXG4gIHNob3VsZE5vdERlZmVyKHNsb3Q6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnByZXJlbmRlcmVkU2xvdHM/LmluY2x1ZGVzKHNsb3QpKSB7XG4gICAgICB0aGlzLnByZXJlbmRlcmVkU2xvdHMuc3BsaWNlKHRoaXMucHJlcmVuZGVyZWRTbG90cy5pbmRleE9mKHNsb3QpLCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVmZXIgb3B0aW9ucyBmb3IgdGhlIGdpdmVuIGNvbXBvbmVudC4gSWYgdGhlIHdyYXBwaW5nXG4gICAqIHBhZ2Ugc2xvdCBpcyBwcmVyZW5kZXJlZCwgd2Ugd291bGQgaWdub3JlIHRoZSBkZWZlciBvcHRpb25zIGFsdG9nZXRoZXIuXG4gICAqL1xuICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoXG4gICAgc2xvdDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZ1xuICApOiBJbnRlcnNlY3Rpb25PcHRpb25zIHtcbiAgICBpZiAodGhpcy5zaG91bGROb3REZWZlcihzbG90KSkge1xuICAgICAgcmV0dXJuIHsgZGVmZXJMb2FkaW5nOiBEZWZlckxvYWRpbmdTdHJhdGVneS5JTlNUQU5UIH07XG4gICAgfVxuICAgIGNvbnN0IGRlZmVyTG9hZGluZyA9IHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koXG4gICAgICBjb21wb25lbnRUeXBlXG4gICAgKTtcbiAgICByZXR1cm4geyBkZWZlckxvYWRpbmcgfTtcbiAgfVxufVxuIl19