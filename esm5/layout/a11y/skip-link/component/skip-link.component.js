import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { asyncScheduler } from 'rxjs';
import { SkipLinkService } from '../service/skip-link.service';
import { observeOn } from 'rxjs/operators';
var SkipLinkComponent = /** @class */ (function () {
    function SkipLinkComponent(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService
            .getSkipLinks()
            .pipe(observeOn(asyncScheduler)); // delay view's update to avoid ExpressionChangedAfterItHasBeenCheckedError
    }
    SkipLinkComponent.prototype.scrollToTarget = function (skipLink, event) {
        this.skipLinkService.scrollToTarget(skipLink.target, skipLink.position, event);
    };
    /**
     * Hides the skip link by removing the focus.
     */
    SkipLinkComponent.prototype.blur = function (event) {
        event.target.blur();
    };
    SkipLinkComponent.prototype.tabNext = function (event) {
        if (this.isElement(event.target.nextSibling)) {
            event.target.nextSibling.focus();
        }
    };
    SkipLinkComponent.prototype.tabPrev = function (event) {
        if (this.isElement(event.target.previousSibling)) {
            event.target.previousSibling.focus();
        }
    };
    SkipLinkComponent.prototype.isElement = function (element) {
        return !!element && element instanceof HTMLElement;
    };
    SkipLinkComponent.ctorParameters = function () { return [
        { type: SkipLinkService }
    ]; };
    SkipLinkComponent = __decorate([
        Component({
            selector: 'cx-skip-link',
            template: "<button\n  *ngFor=\"let skipLink of skipLinks$ | async\"\n  (click)=\"scrollToTarget(skipLink, $event)\"\n  (keydown.esc)=\"blur($event)\"\n  (keydown.arrowright)=\"tabNext($event)\"\n  (keydown.arrowleft)=\"tabPrev($event)\"\n>\n  {{ 'skipLink.skipTo' | cxTranslate }}\n  {{ skipLink.i18nKey | cxTranslate }}\n</button>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], SkipLinkComponent);
    return SkipLinkComponent;
}());
export { SkipLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0M7SUFLRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnBELGVBQVUsR0FBMkIsSUFBSSxDQUFDLGVBQWU7YUFDdEQsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsMkVBQTJFO0lBRXhELENBQUM7SUFFeEQsMENBQWMsR0FBZCxVQUFlLFFBQWtCLEVBQUUsS0FBaUI7UUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQ2pDLFFBQVEsQ0FBQyxNQUFNLEVBQ2YsUUFBUSxDQUFDLFFBQVEsRUFDakIsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBSSxHQUFKLFVBQUssS0FBaUI7UUFDTixLQUFLLENBQUMsTUFBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsS0FBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFlLEtBQUssQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxXQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBQ0QsbUNBQU8sR0FBUCxVQUFRLEtBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBZSxLQUFLLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ25DLEtBQUssQ0FBQyxNQUFPLENBQUMsZUFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFTyxxQ0FBUyxHQUFqQixVQUFrQixPQUFhO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLFlBQVksV0FBVyxDQUFDO0lBQ3JELENBQUM7O2dCQTlCb0MsZUFBZTs7SUFMekMsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDhVQUF5QztZQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBb0M3QjtJQUFELHdCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FwQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgYXN5bmNTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNraXBMaW5rIH0gZnJvbSAnLi4vY29uZmlnL3NraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9za2lwLWxpbmsuc2VydmljZSc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNraXAtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9za2lwLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtDb21wb25lbnQge1xuICBza2lwTGlua3MkOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+ID0gdGhpcy5za2lwTGlua1NlcnZpY2VcbiAgICAuZ2V0U2tpcExpbmtzKClcbiAgICAucGlwZShvYnNlcnZlT24oYXN5bmNTY2hlZHVsZXIpKTsgLy8gZGVsYXkgdmlldydzIHVwZGF0ZSB0byBhdm9pZCBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZSkge31cblxuICBzY3JvbGxUb1RhcmdldChza2lwTGluazogU2tpcExpbmssIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5za2lwTGlua1NlcnZpY2Uuc2Nyb2xsVG9UYXJnZXQoXG4gICAgICBza2lwTGluay50YXJnZXQsXG4gICAgICBza2lwTGluay5wb3NpdGlvbixcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgc2tpcCBsaW5rIGJ5IHJlbW92aW5nIHRoZSBmb2N1cy5cbiAgICovXG4gIGJsdXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuYmx1cigpO1xuICB9XG5cbiAgdGFiTmV4dChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudCgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkubmV4dFNpYmxpbmcpKSB7XG4gICAgICAoPEhUTUxFbGVtZW50Pig8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5uZXh0U2libGluZykuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgdGFiUHJldihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudCgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgKDxIVE1MRWxlbWVudD4oPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkucHJldmlvdXNTaWJsaW5nKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFbGVtZW50KGVsZW1lbnQ6IE5vZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxufVxuIl19