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
export class StructuredDataModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9zdHJ1Y3R1cmVkLWRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFOzs7R0FHRztBQUNILE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxRQUFrQjtJQUN6RCxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBZUQsTUFBTSxPQUFPLG9CQUFvQjs7O1lBYmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSx3QkFBd0I7d0JBQ3BDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkxkRGlyZWN0aXZlIH0gZnJvbSAnLi9qc29uLWxkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVkRGF0YUZhY3RvcnkgfSBmcm9tICcuL3N0cnVjdHVyZWQtZGF0YS5mYWN0b3J5JztcblxuLyoqXG4gKiBGYWN0b3J5IHRvIGJ1aWxkIHRoZSBzdHJ1Y3R1cmUgZGF0YVxuICogd2l0aG91dCBhbnkgaW50ZXJhY3Rpb24gd2l0aCB0aGUgVUkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRGF0YUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gaW5qZWN0b3IuZ2V0KFN0cnVjdHVyZWREYXRhRmFjdG9yeSk7XG4gICAgZmFjdG9yeS5idWlsZCgpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSnNvbkxkRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0pzb25MZERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGdldFN0cnVjdHVyZWREYXRhRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVkRGF0YU1vZHVsZSB7fVxuIl19