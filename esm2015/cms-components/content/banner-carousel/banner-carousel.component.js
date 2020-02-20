import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CmsBannerCarouselComponent as model, CmsService, ContentSlotComponentData, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/index';
/**
 * Generic carousel that renders CMS Components.
 */
let BannerCarouselComponent = class BannerCarouselComponent {
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((d) => (this.theme = `${d.effect}-theme`)));
        this.items$ = this.componentData$.pipe(map(data => data.banners.trim().split(' ')), map(codes => codes.map(code => this.cmsService.getComponentData(code))));
        /**
         * Adds a specific theme for the carousel. The effect can be
         * used in CSS customisations.
         */
        this.theme = '';
    }
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    getItems() {
        return this.items$;
    }
};
BannerCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService }
];
__decorate([
    HostBinding('class')
], BannerCarouselComponent.prototype, "theme", void 0);
BannerCarouselComponent = __decorate([
    Component({
        selector: 'cx-banner-carousel',
        template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BannerCarouselComponent);
export { BannerCarouselComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFDTCwwQkFBMEIsSUFBSSxLQUFLLEVBQ25DLFVBQVUsRUFDVix3QkFBd0IsR0FDekIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRTs7R0FFRztBQU1ILElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBbUJsQyxZQUNVLGFBQXNDLEVBQ3RDLFVBQXNCO1FBRHRCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEJ4QixtQkFBYyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLENBQ3RELENBQUM7UUFFTSxXQUFNLEdBRVYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDeEUsQ0FBQztRQUVGOzs7V0FHRztRQUNtQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBSzlCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTs7WUFaMEIsZ0JBQWdCO1lBQ25CLFVBQVU7O0FBSlY7SUFBckIsV0FBVyxDQUFDLE9BQU8sQ0FBQztzREFBWTtBQWpCdEIsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsZ1lBQTZDO1FBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyx1QkFBdUIsQ0FnQ25DO1NBaENZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNCYW5uZXJDYXJvdXNlbENvbXBvbmVudCBhcyBtb2RlbCxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcblxuLyoqXG4gKiBHZW5lcmljIGNhcm91c2VsIHRoYXQgcmVuZGVycyBDTVMgQ29tcG9uZW50cy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmFubmVyLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICdiYW5uZXItY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQge1xuICBwcml2YXRlIGNvbXBvbmVudERhdGEkOiBPYnNlcnZhYmxlPG1vZGVsPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICB0YXAoKGQ6IG1vZGVsKSA9PiAodGhpcy50aGVtZSA9IGAke2QuZWZmZWN0fS10aGVtZWApKVxuICApO1xuXG4gIHByaXZhdGUgaXRlbXMkOiBPYnNlcnZhYmxlPFxuICAgIE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhPltdXG4gID4gPSB0aGlzLmNvbXBvbmVudERhdGEkLnBpcGUoXG4gICAgbWFwKGRhdGEgPT4gZGF0YS5iYW5uZXJzLnRyaW0oKS5zcGxpdCgnICcpKSxcbiAgICBtYXAoY29kZXMgPT4gY29kZXMubWFwKGNvZGUgPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEoY29kZSkpKVxuICApO1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgc3BlY2lmaWMgdGhlbWUgZm9yIHRoZSBjYXJvdXNlbC4gVGhlIGVmZmVjdCBjYW4gYmVcbiAgICogdXNlZCBpbiBDU1MgY3VzdG9taXNhdGlvbnMuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JlcnZhYmxlIHdpdGggYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGE+W10+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQ7XG4gIH1cbn1cbiJdfQ==