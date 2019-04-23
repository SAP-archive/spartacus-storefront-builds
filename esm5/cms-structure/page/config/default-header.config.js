/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var headerComponents = {
    SkipLinkComponent: {
        typeCode: 'SkipLinkComponent',
        flexType: 'SkipLinkComponent',
        uid: 'SkipLinkComponent',
    },
    HamburgerMenuComponent: {
        typeCode: 'HamburgerMenuComponent',
        flexType: 'HamburgerMenuComponent',
        uid: 'HamburgerMenuComponent',
    },
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
    StoreFinder: {
        typeCode: 'CMSLinkComponent',
        flexType: 'CMSLinkComponent',
        linkName: 'Find a Store',
        url: '/store-finder',
    },
    BreadcrumbComponent: {
        typeCode: 'BreadcrumbComponent',
        flexType: 'BreadcrumbComponent',
    },
    Logo: {
        typeCode: 'SimpleBannerComponent',
        flexType: 'SimpleBannerComponent',
        uid: 'logo',
        media: {
            mime: 'svg/image/svg+xml',
            url: 'https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg',
        },
        urlLink: '/',
    },
    SearchBox: {
        typeCode: 'SearchBoxComponent',
        flexType: 'SearchBoxComponent',
        uid: 'SearchBoxComponent',
    },
    MiniCart: {
        typeCode: 'MiniCartComponent',
        flexType: 'MiniCartComponent',
        uid: 'MiniCartComponent',
    },
    LoginComponent: {
        typeCode: 'LoginComponent',
        flexType: 'LoginComponent',
        uid: 'LoginComponent',
    },
    CategoryNavigationComponent: {
        typeCode: 'CategoryNavigationComponent',
        flexType: 'CategoryNavigationComponent',
        uid: 'ElectronicsCategoryNavComponent',
        navigationNode: {
            uid: 'ElectronicsCategoryNavNode',
            children: [
                {
                    uid: 'CameraLensesNavNode',
                    title: 'Electronic catalog',
                    entries: [
                        {
                            itemId: 'CameraLensesCategoryLink',
                            itemSuperType: 'AbstractCMSComponent',
                            itemType: 'CMSLinkComponent',
                        },
                    ],
                },
            ],
        },
    },
};
/** @type {?} */
export var defaultPageHeaderConfig = {
    PreHeader: {
        componentIds: ['SkipLinkComponent', 'HamburgerMenuComponent'],
    },
    SiteContext: {
        componentIds: ['LanguageComponent', 'CurrencyComponent'],
    },
    SiteLinks: {
        componentIds: ['StoreFinder'],
    },
    SiteLogo: {
        componentIds: ['Logo'],
    },
    SearchBox: {
        componentIds: ['SearchBox'],
    },
    MiniCart: {
        componentIds: ['MiniCart'],
    },
    SiteLogin: {
        componentIds: ['LoginComponent'],
    },
    NavigationBar: {
        componentIds: ['CategoryNavigationComponent'],
    },
    BottomHeaderSlot: {
        componentIds: ['BreadcrumbComponent'],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbmZpZy9kZWZhdWx0LWhlYWRlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sZ0JBQWdCLEdBRXpCO0lBQ0YsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLEdBQUcsRUFBRSxtQkFBbUI7S0FDekI7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsR0FBRyxFQUFFLHdCQUF3QjtLQUM5QjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxPQUFPLEVBQUUsVUFBVTtLQUNwQjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxPQUFPLEVBQUUsVUFBVTtLQUNwQjtJQUNELFdBQVcsRUFBRTtRQUNYLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsY0FBYztRQUN4QixHQUFHLEVBQUUsZUFBZTtLQUNyQjtJQUNELG1CQUFtQixFQUFFO1FBQ25CLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQztJQUNELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxtQkFBbUI7WUFDekIsR0FBRyxFQUFFLG1FQUFtRTtTQUN6RTtRQUNELE9BQU8sRUFBRSxHQUFHO0tBQ2I7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsR0FBRyxFQUFFLG9CQUFvQjtLQUMxQjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixHQUFHLEVBQUUsbUJBQW1CO0tBQ3pCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLEdBQUcsRUFBRSxnQkFBZ0I7S0FDdEI7SUFDRCwyQkFBMkIsRUFBRTtRQUMzQixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsR0FBRyxFQUFFLGlDQUFpQztRQUN0QyxjQUFjLEVBQUU7WUFDZCxHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxHQUFHLEVBQUUscUJBQXFCO29CQUMxQixLQUFLLEVBQUUsb0JBQW9CO29CQUMzQixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsTUFBTSxFQUFFLDBCQUEwQjs0QkFDbEMsYUFBYSxFQUFFLHNCQUFzQjs0QkFDckMsUUFBUSxFQUFFLGtCQUFrQjt5QkFDN0I7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7QUFFRCxNQUFNLEtBQU8sdUJBQXVCLEdBQXVCO0lBQ3pELFNBQVMsRUFBRTtRQUNULFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixDQUFDO0tBQzlEO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7S0FDekQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDOUI7SUFDRCxRQUFRLEVBQUU7UUFDUixZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDdkI7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7S0FDNUI7SUFDRCxRQUFRLEVBQUU7UUFDUixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDM0I7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztLQUNqQztJQUNELGFBQWEsRUFBRTtRQUNiLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzlDO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDdEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc1BhZ2VTbG90c0NvbmZpZywgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGhlYWRlckNvbXBvbmVudHM6IHtcbiAgW2tleTogc3RyaW5nXTogQ29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55O1xufSA9IHtcbiAgU2tpcExpbmtDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ1NraXBMaW5rQ29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ1NraXBMaW5rQ29tcG9uZW50JyxcbiAgICB1aWQ6ICdTa2lwTGlua0NvbXBvbmVudCcsXG4gIH0sXG4gIEhhbWJ1cmdlck1lbnVDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0hhbWJ1cmdlck1lbnVDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnSGFtYnVyZ2VyTWVudUNvbXBvbmVudCcsXG4gICAgdWlkOiAnSGFtYnVyZ2VyTWVudUNvbXBvbmVudCcsXG4gIH0sXG4gIExhbmd1YWdlQ29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdDTVNTaXRlQ29udGV4dENvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdDTVNTaXRlQ29udGV4dENvbXBvbmVudCcsXG4gICAgY29udGV4dDogJ0xBTkdVQUdFJyxcbiAgfSxcbiAgQ3VycmVuY3lDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0NNU1NpdGVDb250ZXh0Q29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0NNU1NpdGVDb250ZXh0Q29tcG9uZW50JyxcbiAgICBjb250ZXh0OiAnQ1VSUkVOQ1knLFxuICB9LFxuICBTdG9yZUZpbmRlcjoge1xuICAgIHR5cGVDb2RlOiAnQ01TTGlua0NvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdDTVNMaW5rQ29tcG9uZW50JyxcbiAgICBsaW5rTmFtZTogJ0ZpbmQgYSBTdG9yZScsXG4gICAgdXJsOiAnL3N0b3JlLWZpbmRlcicsXG4gIH0sXG4gIEJyZWFkY3J1bWJDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0JyZWFkY3J1bWJDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnQnJlYWRjcnVtYkNvbXBvbmVudCcsXG4gIH0sXG4gIExvZ286IHtcbiAgICB0eXBlQ29kZTogJ1NpbXBsZUJhbm5lckNvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdTaW1wbGVCYW5uZXJDb21wb25lbnQnLFxuICAgIHVpZDogJ2xvZ28nLFxuICAgIG1lZGlhOiB7XG4gICAgICBtaW1lOiAnc3ZnL2ltYWdlL3N2Zyt4bWwnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuc2FwLmNvbS9kYW0vYXBwbGljYXRpb24vc2hhcmVkL2xvZ29zL3NhcC1sb2dvLXN2Zy5zdmcnLFxuICAgIH0sXG4gICAgdXJsTGluazogJy8nLFxuICB9LFxuICBTZWFyY2hCb3g6IHtcbiAgICB0eXBlQ29kZTogJ1NlYXJjaEJveENvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdTZWFyY2hCb3hDb21wb25lbnQnLFxuICAgIHVpZDogJ1NlYXJjaEJveENvbXBvbmVudCcsXG4gIH0sXG4gIE1pbmlDYXJ0OiB7XG4gICAgdHlwZUNvZGU6ICdNaW5pQ2FydENvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdNaW5pQ2FydENvbXBvbmVudCcsXG4gICAgdWlkOiAnTWluaUNhcnRDb21wb25lbnQnLFxuICB9LFxuICBMb2dpbkNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnTG9naW5Db21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnTG9naW5Db21wb25lbnQnLFxuICAgIHVpZDogJ0xvZ2luQ29tcG9uZW50JyxcbiAgfSxcbiAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50JyxcbiAgICB1aWQ6ICdFbGVjdHJvbmljc0NhdGVnb3J5TmF2Q29tcG9uZW50JyxcbiAgICBuYXZpZ2F0aW9uTm9kZToge1xuICAgICAgdWlkOiAnRWxlY3Ryb25pY3NDYXRlZ29yeU5hdk5vZGUnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHVpZDogJ0NhbWVyYUxlbnNlc05hdk5vZGUnLFxuICAgICAgICAgIHRpdGxlOiAnRWxlY3Ryb25pYyBjYXRhbG9nJyxcbiAgICAgICAgICBlbnRyaWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGl0ZW1JZDogJ0NhbWVyYUxlbnNlc0NhdGVnb3J5TGluaycsXG4gICAgICAgICAgICAgIGl0ZW1TdXBlclR5cGU6ICdBYnN0cmFjdENNU0NvbXBvbmVudCcsXG4gICAgICAgICAgICAgIGl0ZW1UeXBlOiAnQ01TTGlua0NvbXBvbmVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhZ2VIZWFkZXJDb25maWc6IENtc1BhZ2VTbG90c0NvbmZpZyA9IHtcbiAgUHJlSGVhZGVyOiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ1NraXBMaW5rQ29tcG9uZW50JywgJ0hhbWJ1cmdlck1lbnVDb21wb25lbnQnXSxcbiAgfSxcbiAgU2l0ZUNvbnRleHQ6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnTGFuZ3VhZ2VDb21wb25lbnQnLCAnQ3VycmVuY3lDb21wb25lbnQnXSxcbiAgfSxcbiAgU2l0ZUxpbmtzOiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ1N0b3JlRmluZGVyJ10sXG4gIH0sXG4gIFNpdGVMb2dvOiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ0xvZ28nXSxcbiAgfSxcbiAgU2VhcmNoQm94OiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ1NlYXJjaEJveCddLFxuICB9LFxuICBNaW5pQ2FydDoge1xuICAgIGNvbXBvbmVudElkczogWydNaW5pQ2FydCddLFxuICB9LFxuICBTaXRlTG9naW46IHtcbiAgICBjb21wb25lbnRJZHM6IFsnTG9naW5Db21wb25lbnQnXSxcbiAgfSxcbiAgTmF2aWdhdGlvbkJhcjoge1xuICAgIGNvbXBvbmVudElkczogWydDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQnXSxcbiAgfSxcbiAgQm90dG9tSGVhZGVyU2xvdDoge1xuICAgIGNvbXBvbmVudElkczogWydCcmVhZGNydW1iQ29tcG9uZW50J10sXG4gIH0sXG59O1xuIl19