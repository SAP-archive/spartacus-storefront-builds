/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link.component';
import { ConfigModule, UrlTranslationModule } from '@spartacus/core';
var LinkModule = /** @class */ (function () {
    function LinkModule() {
    }
    LinkModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CMSLinkComponent: { selector: 'cx-link' },
                            },
                        }))),
                        UrlTranslationModule,
                    ],
                    declarations: [LinkComponent],
                    exports: [LinkComponent],
                    entryComponents: [LinkComponent],
                },] }
    ];
    return LinkModule;
}());
export { LinkModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY21zLWxpYi9saW5rL2xpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdyRTtJQUFBO0lBZXlCLENBQUM7O2dCQWZ6QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFOzZCQUMxQzt5QkFDRixFQUFBLENBQUM7d0JBQ0Ysb0JBQW9CO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDeEIsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUNqQzs7SUFDd0IsaUJBQUM7Q0FBQSxBQWYxQixJQWUwQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIFVybFRyYW5zbGF0aW9uTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNMaW5rQ29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtbGluaycgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xpbmtDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGlua0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0xpbmtDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rTW9kdWxlIHt9XG4iXX0=