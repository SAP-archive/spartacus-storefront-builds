/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const headerComponents = {
    LanguageComponent: {
        typeCode: 'CMSSiteContextComponent',
        flexType: 'CMSSiteContextComponent',
        context: 'LANGUAGE',
    },
    CurrencyComponent: {
        typeCode: 'CMSSiteContextComponent',
        flexType: 'CMSSiteContextComponent',
        context: 'CURRENCY',
    },
    storeFinder: {
        typeCode: 'CMSLinkComponent',
        flexType: 'CMSLinkComponent',
        linkName: 'Find a Store',
        url: '/store-finder',
    },
    breadcrumbComponent: {
        typeCode: 'BreadcrumbComponent',
        flexType: 'BreadcrumbComponent',
    },
};
/** @type {?} */
export const defaultPageHeaderConfig = {
    SiteContext: {
        componentIds: ['LanguageComponent', 'CurrencyComponent'],
    },
    SiteLinks: {
        componentIds: ['storeFinder'],
    },
    BottomHeaderSlot: {
        componentIds: ['breadcrumbComponent'],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbmZpZy9kZWZhdWx0LWhlYWRlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCLEdBRXpCO0lBQ0YsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLEdBQUcsRUFBRSxlQUFlO0tBQ3JCO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUscUJBQXFCO0tBQ2hDO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLHVCQUF1QixHQUF1QjtJQUN6RCxXQUFXLEVBQUU7UUFDWCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztLQUN6RDtJQUNELFNBQVMsRUFBRTtRQUNULFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5QjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNQYWdlU2xvdHNDb25maWcsIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJDb21wb25lbnRzOiB7XG4gIFtrZXk6IHN0cmluZ106IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB8IGFueTtcbn0gPSB7XG4gIExhbmd1YWdlQ29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdDTVNTaXRlQ29udGV4dENvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdDTVNTaXRlQ29udGV4dENvbXBvbmVudCcsXG4gICAgY29udGV4dDogJ0xBTkdVQUdFJyxcbiAgfSxcbiAgQ3VycmVuY3lDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0NNU1NpdGVDb250ZXh0Q29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0NNU1NpdGVDb250ZXh0Q29tcG9uZW50JyxcbiAgICBjb250ZXh0OiAnQ1VSUkVOQ1knLFxuICB9LFxuICBzdG9yZUZpbmRlcjoge1xuICAgIHR5cGVDb2RlOiAnQ01TTGlua0NvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdDTVNMaW5rQ29tcG9uZW50JyxcbiAgICBsaW5rTmFtZTogJ0ZpbmQgYSBTdG9yZScsXG4gICAgdXJsOiAnL3N0b3JlLWZpbmRlcicsXG4gIH0sXG4gIGJyZWFkY3J1bWJDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0JyZWFkY3J1bWJDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnQnJlYWRjcnVtYkNvbXBvbmVudCcsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhZ2VIZWFkZXJDb25maWc6IENtc1BhZ2VTbG90c0NvbmZpZyA9IHtcbiAgU2l0ZUNvbnRleHQ6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnTGFuZ3VhZ2VDb21wb25lbnQnLCAnQ3VycmVuY3lDb21wb25lbnQnXSxcbiAgfSxcbiAgU2l0ZUxpbmtzOiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ3N0b3JlRmluZGVyJ10sXG4gIH0sXG4gIEJvdHRvbUhlYWRlclNsb3Q6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnYnJlYWRjcnVtYkNvbXBvbmVudCddLFxuICB9LFxufTtcbiJdfQ==