import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { OutletRefModule } from '../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { LaunchDialogModule } from './launch-dialog/index';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        NgModule({
            imports: [OutletRefModule, LaunchDialogModule.forRoot()],
            exports: [OutletRefModule],
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0zRDtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBSnhCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4RCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDM0IsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgTGF1bmNoRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9sYXVuY2gtZGlhbG9nL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW091dGxldFJlZk1vZHVsZSwgTGF1bmNoRGlhbG9nTW9kdWxlLmZvclJvb3QoKV0sXG4gIGV4cG9ydHM6IFtPdXRsZXRSZWZNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cbiJdfQ==