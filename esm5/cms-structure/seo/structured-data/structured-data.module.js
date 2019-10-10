/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { JsonLdDirective } from './json-ld.directive';
import { StructuredDataFactory } from './structured-data.factory';
/**
 * Factory to build the structure data
 * without any interaction with the UI.
 * @param {?} injector
 * @return {?}
 */
export function getStructuredDataFactory(injector) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = injector.get(StructuredDataFactory);
        factory.build();
    });
    return result;
}
var StructuredDataModule = /** @class */ (function () {
    function StructuredDataModule() {
    }
    StructuredDataModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [JsonLdDirective],
                    exports: [JsonLdDirective],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: getStructuredDataFactory,
                            deps: [Injector],
                            multi: true,
                        },
                    ],
                },] }
    ];
    return StructuredDataModule;
}());
export { StructuredDataModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9zdHJ1Y3R1cmVkLWRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztBQU1sRSxNQUFNLFVBQVUsd0JBQXdCLENBQUMsUUFBa0I7O1FBQ25ELE1BQU07OztJQUFHOztZQUNQLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1FBQ25ELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQWFtQyxDQUFDOztnQkFibkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLHdCQUF3Qjs0QkFDcEMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNoQixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFDa0MsMkJBQUM7Q0FBQSxBQWJwQyxJQWFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25MZERpcmVjdGl2ZSB9IGZyb20gJy4vanNvbi1sZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlZERhdGFGYWN0b3J5IH0gZnJvbSAnLi9zdHJ1Y3R1cmVkLWRhdGEuZmFjdG9yeSc7XG5cbi8qKlxuICogRmFjdG9yeSB0byBidWlsZCB0aGUgc3RydWN0dXJlIGRhdGFcbiAqIHdpdGhvdXQgYW55IGludGVyYWN0aW9uIHdpdGggdGhlIFVJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RydWN0dXJlZERhdGFGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmFjdG9yeSA9IGluamVjdG9yLmdldChTdHJ1Y3R1cmVkRGF0YUZhY3RvcnkpO1xuICAgIGZhY3RvcnkuYnVpbGQoKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0pzb25MZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtKc29uTGREaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBnZXRTdHJ1Y3R1cmVkRGF0YUZhY3RvcnksXG4gICAgICBkZXBzOiBbSW5qZWN0b3JdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlZERhdGFNb2R1bGUge31cbiJdfQ==