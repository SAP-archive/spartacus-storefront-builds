import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { TableComponent } from './table.component';
/**
 * The TableModule provides a table component that is driven by (responsible) configuration.
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        NgModule({
            imports: [CommonModule, OutletModule, I18nModule],
            declarations: [TableComponent],
            exports: [TableComponent],
        })
    ], TableModule);
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDs7R0FFRztBQU1IO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFdBQVc7UUFMdkIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUM7WUFDakQsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUMxQixDQUFDO09BQ1csV0FBVyxDQUFHO0lBQUQsa0JBQUM7Q0FBQSxBQUEzQixJQUEyQjtTQUFkLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgVGFibGVNb2R1bGUgcHJvdmlkZXMgYSB0YWJsZSBjb21wb25lbnQgdGhhdCBpcyBkcml2ZW4gYnkgKHJlc3BvbnNpYmxlKSBjb25maWd1cmF0aW9uLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdXRsZXRNb2R1bGUsIEkxOG5Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHt9XG4iXX0=