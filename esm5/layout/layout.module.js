import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { OutletRefModule } from '../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { DirectionModule } from './direction/direction.module';
import { LaunchDialogModule } from './launch-dialog/index';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        NgModule({
            imports: [OutletRefModule, LaunchDialogModule.forRoot(), DirectionModule],
            exports: [OutletRefModule],
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNM0Q7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQUp4QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEVBQUUsZUFBZSxDQUFDO1lBQ3pFLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMzQixDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25Nb2R1bGUgfSBmcm9tICcuL2RpcmVjdGlvbi9kaXJlY3Rpb24ubW9kdWxlJztcbmltcG9ydCB7IExhdW5jaERpYWxvZ01vZHVsZSB9IGZyb20gJy4vbGF1bmNoLWRpYWxvZy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtPdXRsZXRSZWZNb2R1bGUsIExhdW5jaERpYWxvZ01vZHVsZS5mb3JSb290KCksIERpcmVjdGlvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtPdXRsZXRSZWZNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge31cbiJdfQ==