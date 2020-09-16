import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CmsService, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/index';
/**
 * Generic carousel that renders CMS Components.
 */
export class BannerCarouselComponent {
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((d) => (this.theme = `${d.effect}-theme`)));
        this.items$ = this.componentData$.pipe(map((data) => data.banners.trim().split(' ')), map((codes) => codes.map((code) => this.cmsService.getComponentData(code))));
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
}
BannerCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner-carousel',
                template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
BannerCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService }
];
BannerCarouselComponent.propDecorators = {
    theme: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUVMLFVBQVUsR0FFWCxNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQW1CbEMsWUFDVSxhQUFzQyxFQUN0QyxVQUFzQjtRQUR0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXBCeEIsbUJBQWMsR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN2RSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQyxDQUN0RCxDQUFDO1FBRU0sV0FBTSxHQUVWLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzVFLENBQUM7UUFFRjs7O1dBR0c7UUFDbUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUs5QixDQUFDO0lBRUo7Ozs7T0FJRztJQUNILFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixnWUFBNkM7Z0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFUUSxnQkFBZ0I7WUFMdkIsVUFBVTs7O29CQWdDVCxXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNCYW5uZXJDYXJvdXNlbENvbXBvbmVudCBhcyBtb2RlbCxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcblxuLyoqXG4gKiBHZW5lcmljIGNhcm91c2VsIHRoYXQgcmVuZGVycyBDTVMgQ29tcG9uZW50cy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYmFubmVyLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICdiYW5uZXItY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ2Fyb3VzZWxDb21wb25lbnQge1xuICBwcml2YXRlIGNvbXBvbmVudERhdGEkOiBPYnNlcnZhYmxlPG1vZGVsPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICB0YXAoKGQ6IG1vZGVsKSA9PiAodGhpcy50aGVtZSA9IGAke2QuZWZmZWN0fS10aGVtZWApKVxuICApO1xuXG4gIHByaXZhdGUgaXRlbXMkOiBPYnNlcnZhYmxlPFxuICAgIE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhPltdXG4gID4gPSB0aGlzLmNvbXBvbmVudERhdGEkLnBpcGUoXG4gICAgbWFwKChkYXRhKSA9PiBkYXRhLmJhbm5lcnMudHJpbSgpLnNwbGl0KCcgJykpLFxuICAgIG1hcCgoY29kZXMpID0+IGNvZGVzLm1hcCgoY29kZSkgPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGEoY29kZSkpKVxuICApO1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgc3BlY2lmaWMgdGhlbWUgZm9yIHRoZSBjYXJvdXNlbC4gVGhlIGVmZmVjdCBjYW4gYmVcbiAgICogdXNlZCBpbiBDU1MgY3VzdG9taXNhdGlvbnMuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JlcnZhYmxlIHdpdGggYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGE+W10+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQ7XG4gIH1cbn1cbiJdfQ==