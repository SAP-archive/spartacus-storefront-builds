import { __decorate } from "tslib";
import { Input, Directive } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
// tslint:disable:directive-class-suffix
var AbstractStoreItemComponent = /** @class */ (function () {
    function AbstractStoreItemComponent(storeDataService) {
        this.storeDataService = storeDataService;
    }
    AbstractStoreItemComponent.prototype.getDirections = function (location) {
        var google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        var latitude = this.storeDataService.getStoreLatitude(location);
        var longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    };
    AbstractStoreItemComponent.prototype.getFormattedStoreAddress = function (addressParts) {
        return addressParts.filter(Boolean).join(', ');
    };
    AbstractStoreItemComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    __decorate([
        Input()
    ], AbstractStoreItemComponent.prototype, "location", void 0);
    AbstractStoreItemComponent = __decorate([
        Directive()
    ], AbstractStoreItemComponent);
    return AbstractStoreItemComponent;
}());
export { AbstractStoreItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELHdDQUF3QztBQUV4QztJQUlFLG9DQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFNUQsa0RBQWEsR0FBYixVQUFjLFFBQWE7UUFDekIsSUFBTSxjQUFjLEdBQUcsbURBQW1ELENBQUM7UUFDM0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxPQUFPLGNBQWMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNkRBQXdCLEdBQXhCLFVBQXlCLFlBQXNCO1FBQzdDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBWHVDLGdCQUFnQjs7SUFGeEQ7UUFEQyxLQUFLLEVBQUU7Z0VBQ0M7SUFGRSwwQkFBMEI7UUFEdEMsU0FBUyxFQUFFO09BQ0MsMEJBQTBCLENBZ0J0QztJQUFELGlDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbG9jYXRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpIHt9XG5cbiAgZ2V0RGlyZWN0aW9ucyhsb2NhdGlvbjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBnb29nbGVfbWFwX3VybCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyL0N1cnJlbnQrTG9jYXRpb24vJztcbiAgICBjb25zdCBsYXRpdHVkZSA9IHRoaXMuc3RvcmVEYXRhU2VydmljZS5nZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uKTtcbiAgICBjb25zdCBsb25naXR1ZGUgPSB0aGlzLnN0b3JlRGF0YVNlcnZpY2UuZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb24pO1xuICAgIHJldHVybiBnb29nbGVfbWFwX3VybCArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlO1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGVkU3RvcmVBZGRyZXNzKGFkZHJlc3NQYXJ0czogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBhZGRyZXNzUGFydHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG4gIH1cbn1cbiJdfQ==