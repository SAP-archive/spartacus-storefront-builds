import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultIconConfig } from './default-icon.config';
import { fontawesomeIconConfig } from './fontawesome-icon.config';
import { IconComponent } from './icon.component';
let IconModule = class IconModule {
};
IconModule = __decorate([
    NgModule({
        declarations: [IconComponent],
        imports: [CommonModule],
        providers: [
            provideDefaultConfig(defaultIconConfig),
            // TODO: move the opinionated fontawesome config to a recipe
            provideDefaultConfig(fontawesomeIconConfig),
        ],
        exports: [IconComponent],
    })
], IconModule);
export { IconModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVlqRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUcsQ0FBQTtBQUFiLFVBQVU7SUFWdEIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztZQUN2Qyw0REFBNEQ7WUFDNUQsb0JBQW9CLENBQUMscUJBQXFCLENBQUM7U0FDNUM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDekIsQ0FBQztHQUNXLFVBQVUsQ0FBRztTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRJY29uQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWljb24uY29uZmlnJztcbmltcG9ydCB7IGZvbnRhd2Vzb21lSWNvbkNvbmZpZyB9IGZyb20gJy4vZm9udGF3ZXNvbWUtaWNvbi5jb25maWcnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJY29uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRJY29uQ29uZmlnKSxcbiAgICAvLyBUT0RPOiBtb3ZlIHRoZSBvcGluaW9uYXRlZCBmb250YXdlc29tZSBjb25maWcgdG8gYSByZWNpcGVcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhmb250YXdlc29tZUljb25Db25maWcpLFxuICBdLFxuICBleHBvcnRzOiBbSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEljb25Nb2R1bGUge31cbiJdfQ==