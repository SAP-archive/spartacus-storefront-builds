import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class BannerComponent {
    constructor(component) {
        this.component = component;
        this.data$ = this.component.data$.pipe(tap((data) => (this.styleClasses = data.styleClasses)));
    }
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.external` flag is set to true.
     */
    getTarget(data) {
        return data.external === 'true' || data.external === true ? '_blank' : null;
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner',
                template: "<cx-generic-link\n  *ngIf=\"data$ | async as data\"\n  [url]=\"data.urlLink\"\n  [target]=\"getTarget(data)\"\n>\n  <p class=\"headline\" *ngIf=\"data.headline\" [innerHTML]=\"data.headline\"></p>\n  <cx-media [container]=\"data.media\"></cx-media>\n  <p class=\"content\" *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n</cx-generic-link>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
BannerComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
BannerComponent.propDecorators = {
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxlQUFlO0lBTzFCLFlBQXNCLFNBQStDO1FBQS9DLGNBQVMsR0FBVCxTQUFTLENBQXNDO1FBSnJFLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUN2RCxDQUFDO0lBRXNFLENBQUM7SUFFekU7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLElBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlFLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDJXQUFzQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLGdCQUFnQjs7OzJCQVF0QixXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNCYW5uZXJDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1iYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBzdHlsZUNsYXNzZXM6IHN0cmluZztcblxuICBkYXRhJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgdGFwKChkYXRhKSA9PiAodGhpcy5zdHlsZUNsYXNzZXMgPSBkYXRhLnN0eWxlQ2xhc3NlcykpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCYW5uZXJDb21wb25lbnQ+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGBfYmxhbmtgIHRvIGZvcmNlIG9wZW5pbmcgdGhlIGxpbmsgaW4gYSBuZXcgd2luZG93IHdoZW5ldmVyIHRoZVxuICAgKiBgZGF0YS5leHRlcm5hbGAgZmxhZyBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGdldFRhcmdldChkYXRhOiBDbXNCYW5uZXJDb21wb25lbnQpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGF0YS5leHRlcm5hbCA9PT0gJ3RydWUnIHx8IGRhdGEuZXh0ZXJuYWwgPT09IHRydWUgPyAnX2JsYW5rJyA6IG51bGw7XG4gIH1cbn1cbiJdfQ==