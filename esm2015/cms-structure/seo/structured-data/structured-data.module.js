import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { JsonLdDirective } from './json-ld.directive';
import { StructuredDataFactory } from './structured-data.factory';
/**
 * Factory to build the structure data
 * without any interaction with the UI.
 */
export function getStructuredDataFactory(injector) {
    const result = () => {
        const factory = injector.get(StructuredDataFactory);
        factory.build();
    };
    return result;
}
let StructuredDataModule = class StructuredDataModule {
};
StructuredDataModule = __decorate([
    NgModule({
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
    })
], StructuredDataModule);
export { StructuredDataModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9zdHJ1Y3R1cmVkLWRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsUUFBa0I7SUFDekQsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWVELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFiaEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDMUIsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFVBQVUsRUFBRSx3QkFBd0I7Z0JBQ3BDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDaEIsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkxkRGlyZWN0aXZlIH0gZnJvbSAnLi9qc29uLWxkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVkRGF0YUZhY3RvcnkgfSBmcm9tICcuL3N0cnVjdHVyZWQtZGF0YS5mYWN0b3J5JztcblxuLyoqXG4gKiBGYWN0b3J5IHRvIGJ1aWxkIHRoZSBzdHJ1Y3R1cmUgZGF0YVxuICogd2l0aG91dCBhbnkgaW50ZXJhY3Rpb24gd2l0aCB0aGUgVUkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRGF0YUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3IuZ2V0KFN0cnVjdHVyZWREYXRhRmFjdG9yeSk7XG4gICAgZmFjdG9yeS5idWlsZCgpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSnNvbkxkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0pzb25MZERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGdldFN0cnVjdHVyZWREYXRhRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkRGF0YU1vZHVsZSB7fVxuIl19