/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { StoreFinderService, } from '@spartacus/core';
export class StoreFinderSearchResultComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     */
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.route.queryParams.subscribe(params => this.initialize(params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.searchConfig = Object.assign({}, this.searchConfig, { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.geolocation, this.searchConfig);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
        this.subscription = this.locations$
            .pipe(map(data => data.geolocation))
            .subscribe(geoData => (this.geolocation = geoData));
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    parseParameters(queryParams) {
        /** @type {?} */
        let searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    }
}
StoreFinderSearchResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search-result',
                template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <cx-store-finder-list [locations]=\"locations\"></cx-store-finder-list>\n  <div *ngIf=\"locations?.stores\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.locations;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.searchQuery;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.geolocation;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.subscription;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.searchConfig;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchResultComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchResultComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N0b3JlLWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0L3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBR3pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsa0JBQWtCLEdBSW5CLE1BQU0saUJBQWlCLENBQUM7QUFNekIsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUFXM0MsWUFDVSxrQkFBc0MsRUFDdEMsS0FBcUI7UUFEckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQU4vQixpQkFBWSxHQUFpQjtZQUMzQixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUM7SUFLQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLFlBQVkscUJBQVEsSUFBSSxDQUFDLFlBQVksSUFBRSxXQUFXLEVBQUUsVUFBVSxHQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUMxQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVU7YUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsV0FFdkI7O1lBQ0ssV0FBbUM7UUFFdkMsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3JCLFdBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNqQztRQUVELFdBQVcsQ0FBQyxhQUFhO1lBQ3ZCLFdBQVcsQ0FBQyxhQUFhLElBQUksSUFBSTtnQkFDakMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUM7UUFFckQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxzaUJBQTBEO2FBQzNEOzs7O1lBVEMsa0JBQWtCO1lBTlgsY0FBYzs7OztJQWlCckIscURBQWU7O0lBQ2YsdURBQW9DOztJQUNwQyxzREFBNEI7O0lBQzVCLHNEQUE0Qjs7SUFDNUIsdURBQStCOztJQUMvQix3REFBMkI7O0lBQzNCLHdEQUVFOzs7OztJQUdBLDhEQUE4Qzs7Ozs7SUFDOUMsaURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBTdG9yZUZpbmRlclNlcnZpY2UsXG4gIFNlYXJjaENvbmZpZyxcbiAgU3RvcmVGaW5kZXJTZWFyY2hRdWVyeSxcbiAgTG9uZ2l0dWRlTGF0aXR1ZGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJTZWFyY2hSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGxvY2F0aW9uczogYW55O1xuICBzZWFyY2hRdWVyeTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeTtcbiAgbG9jYXRpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGFueT47XG4gIGdlb2xvY2F0aW9uOiBMb25naXR1ZGVMYXRpdHVkZTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0ge1xuICAgIGN1cnJlbnRQYWdlOiAwLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmluaXRpYWxpemUocGFyYW1zKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWFyY2hDb25maWcgPSB7IC4uLnRoaXMuc2VhcmNoQ29uZmlnLCBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9O1xuICAgIHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmZpbmRTdG9yZXNBY3Rpb24oXG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LnF1ZXJ5VGV4dCxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb24sXG4gICAgICB0aGlzLnNlYXJjaENvbmZpZ1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUocGFyYW1zOiBQYXJhbXMpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gdGhpcy5wYXJzZVBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICB0aGlzLnN0b3JlRmluZGVyU2VydmljZS5maW5kU3RvcmVzQWN0aW9uKFxuICAgICAgdGhpcy5zZWFyY2hRdWVyeS5xdWVyeVRleHQsXG4gICAgICB0aGlzLmdlb2xvY2F0aW9uLFxuICAgICAgdGhpcy5zZWFyY2hDb25maWdcbiAgICApO1xuXG4gICAgdGhpcy5pc0xvYWRpbmckID0gdGhpcy5zdG9yZUZpbmRlclNlcnZpY2UuZ2V0U3RvcmVzTG9hZGluZygpO1xuICAgIHRoaXMubG9jYXRpb25zJCA9IHRoaXMuc3RvcmVGaW5kZXJTZXJ2aWNlLmdldEZpbmRTdG9yZXNFbnRpdGllcygpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5sb2NhdGlvbnMkXG4gICAgICAucGlwZShtYXAoZGF0YSA9PiBkYXRhLmdlb2xvY2F0aW9uKSlcbiAgICAgIC5zdWJzY3JpYmUoZ2VvRGF0YSA9PiAodGhpcy5nZW9sb2NhdGlvbiA9IGdlb0RhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VQYXJhbWV0ZXJzKHF1ZXJ5UGFyYW1zOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeSB7XG4gICAgbGV0IHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zLnF1ZXJ5KSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiBxdWVyeVBhcmFtcy5xdWVyeSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hRdWVyeSA9IHsgcXVlcnlUZXh0OiAnJyB9O1xuICAgIH1cblxuICAgIHNlYXJjaFF1ZXJ5LnVzZU15TG9jYXRpb24gPVxuICAgICAgcXVlcnlQYXJhbXMudXNlTXlMb2NhdGlvbiAhPSBudWxsICYmXG4gICAgICBxdWVyeVBhcmFtcy51c2VNeUxvY2F0aW9uLnRvVXBwZXJDYXNlKCkgPT09ICdUUlVFJztcblxuICAgIHJldHVybiBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIl19