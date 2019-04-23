/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const headerComponents = {
    SkipLinkComponent: {
        typeCode: 'SkipLinkComponent',
        flexType: 'SkipLinkComponent',
        uid: 'SkipLinkComponent',
    },
    HamburgerMenuComponent: {
        typeCode: 'HamburgerMenuComponent',
        flexType: 'HamburgerMenuComponent',
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
    LanguageCurrencyComponent: {
        typeCode: 'LanguageCurrencyComponent',
        flexType: 'LanguageCurrencyComponent',
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
export const defaultPageHeaderConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbmZpZy9kZWZhdWx0LWhlYWRlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCLEdBRXpCO0lBQ0YsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLEdBQUcsRUFBRSxtQkFBbUI7S0FDekI7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSx3QkFBd0I7S0FDbkM7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsT0FBTyxFQUFFLFVBQVU7S0FDcEI7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsT0FBTyxFQUFFLFVBQVU7S0FDcEI7SUFDRCx5QkFBeUIsRUFBRTtRQUN6QixRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7S0FDdEM7SUFDRCxXQUFXLEVBQUU7UUFDWCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsR0FBRyxFQUFFLGVBQWU7S0FDckI7SUFDRCxtQkFBbUIsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSxxQkFBcUI7S0FDaEM7SUFDRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLEdBQUcsRUFBRSxtRUFBbUU7U0FDekU7UUFDRCxPQUFPLEVBQUUsR0FBRztLQUNiO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLEdBQUcsRUFBRSxvQkFBb0I7S0FDMUI7SUFDRCxRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsR0FBRyxFQUFFLG1CQUFtQjtLQUN6QjtJQUNELGNBQWMsRUFBRTtRQUNkLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixHQUFHLEVBQUUsZ0JBQWdCO0tBQ3RCO0lBQ0QsMkJBQTJCLEVBQUU7UUFDM0IsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLEdBQUcsRUFBRSxpQ0FBaUM7UUFDdEMsY0FBYyxFQUFFO1lBQ2QsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsR0FBRyxFQUFFLHFCQUFxQjtvQkFDMUIsS0FBSyxFQUFFLG9CQUFvQjtvQkFDM0IsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLE1BQU0sRUFBRSwwQkFBMEI7NEJBQ2xDLGFBQWEsRUFBRSxzQkFBc0I7NEJBQ3JDLFFBQVEsRUFBRSxrQkFBa0I7eUJBQzdCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLHVCQUF1QixHQUF1QjtJQUN6RCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsQ0FBQztLQUM5RDtJQUNELFdBQVcsRUFBRTtRQUNYLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO0tBQ3pEO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzlCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQzVCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQzNCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7S0FDakM7SUFDRCxhQUFhLEVBQUU7UUFDYixZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM5QztJQUNELGdCQUFnQixFQUFFO1FBQ2hCLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNQYWdlU2xvdHNDb25maWcsIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJDb21wb25lbnRzOiB7XG4gIFtrZXk6IHN0cmluZ106IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB8IGFueTtcbn0gPSB7XG4gIFNraXBMaW5rQ29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdTa2lwTGlua0NvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdTa2lwTGlua0NvbXBvbmVudCcsXG4gICAgdWlkOiAnU2tpcExpbmtDb21wb25lbnQnLFxuICB9LFxuICBIYW1idXJnZXJNZW51Q29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdIYW1idXJnZXJNZW51Q29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0hhbWJ1cmdlck1lbnVDb21wb25lbnQnLFxuICB9LFxuICBMYW5ndWFnZUNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnQ01TU2l0ZUNvbnRleHRDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnQ01TU2l0ZUNvbnRleHRDb21wb25lbnQnLFxuICAgIGNvbnRleHQ6ICdMQU5HVUFHRScsXG4gIH0sXG4gIEN1cnJlbmN5Q29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdDTVNTaXRlQ29udGV4dENvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdDTVNTaXRlQ29udGV4dENvbXBvbmVudCcsXG4gICAgY29udGV4dDogJ0NVUlJFTkNZJyxcbiAgfSxcbiAgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdMYW5ndWFnZUN1cnJlbmN5Q29tcG9uZW50JyxcbiAgfSxcbiAgU3RvcmVGaW5kZXI6IHtcbiAgICB0eXBlQ29kZTogJ0NNU0xpbmtDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnQ01TTGlua0NvbXBvbmVudCcsXG4gICAgbGlua05hbWU6ICdGaW5kIGEgU3RvcmUnLFxuICAgIHVybDogJy9zdG9yZS1maW5kZXInLFxuICB9LFxuICBCcmVhZGNydW1iQ29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdCcmVhZGNydW1iQ29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0JyZWFkY3J1bWJDb21wb25lbnQnLFxuICB9LFxuICBMb2dvOiB7XG4gICAgdHlwZUNvZGU6ICdTaW1wbGVCYW5uZXJDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnU2ltcGxlQmFubmVyQ29tcG9uZW50JyxcbiAgICB1aWQ6ICdsb2dvJyxcbiAgICBtZWRpYToge1xuICAgICAgbWltZTogJ3N2Zy9pbWFnZS9zdmcreG1sJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnNhcC5jb20vZGFtL2FwcGxpY2F0aW9uL3NoYXJlZC9sb2dvcy9zYXAtbG9nby1zdmcuc3ZnJyxcbiAgICB9LFxuICAgIHVybExpbms6ICcvJyxcbiAgfSxcbiAgU2VhcmNoQm94OiB7XG4gICAgdHlwZUNvZGU6ICdTZWFyY2hCb3hDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnU2VhcmNoQm94Q29tcG9uZW50JyxcbiAgICB1aWQ6ICdTZWFyY2hCb3hDb21wb25lbnQnLFxuICB9LFxuICBNaW5pQ2FydDoge1xuICAgIHR5cGVDb2RlOiAnTWluaUNhcnRDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnTWluaUNhcnRDb21wb25lbnQnLFxuICAgIHVpZDogJ01pbmlDYXJ0Q29tcG9uZW50JyxcbiAgfSxcbiAgTG9naW5Db21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0xvZ2luQ29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0xvZ2luQ29tcG9uZW50JyxcbiAgICB1aWQ6ICdMb2dpbkNvbXBvbmVudCcsXG4gIH0sXG4gIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0NhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudCcsXG4gICAgdWlkOiAnRWxlY3Ryb25pY3NDYXRlZ29yeU5hdkNvbXBvbmVudCcsXG4gICAgbmF2aWdhdGlvbk5vZGU6IHtcbiAgICAgIHVpZDogJ0VsZWN0cm9uaWNzQ2F0ZWdvcnlOYXZOb2RlJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1aWQ6ICdDYW1lcmFMZW5zZXNOYXZOb2RlJyxcbiAgICAgICAgICB0aXRsZTogJ0VsZWN0cm9uaWMgY2F0YWxvZycsXG4gICAgICAgICAgZW50cmllczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpdGVtSWQ6ICdDYW1lcmFMZW5zZXNDYXRlZ29yeUxpbmsnLFxuICAgICAgICAgICAgICBpdGVtU3VwZXJUeXBlOiAnQWJzdHJhY3RDTVNDb21wb25lbnQnLFxuICAgICAgICAgICAgICBpdGVtVHlwZTogJ0NNU0xpbmtDb21wb25lbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYWdlSGVhZGVyQ29uZmlnOiBDbXNQYWdlU2xvdHNDb25maWcgPSB7XG4gIFByZUhlYWRlcjoge1xuICAgIGNvbXBvbmVudElkczogWydTa2lwTGlua0NvbXBvbmVudCcsICdIYW1idXJnZXJNZW51Q29tcG9uZW50J10sXG4gIH0sXG4gIFNpdGVDb250ZXh0OiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ0xhbmd1YWdlQ29tcG9uZW50JywgJ0N1cnJlbmN5Q29tcG9uZW50J10sXG4gIH0sXG4gIFNpdGVMaW5rczoge1xuICAgIGNvbXBvbmVudElkczogWydTdG9yZUZpbmRlciddLFxuICB9LFxuICBTaXRlTG9nbzoge1xuICAgIGNvbXBvbmVudElkczogWydMb2dvJ10sXG4gIH0sXG4gIFNlYXJjaEJveDoge1xuICAgIGNvbXBvbmVudElkczogWydTZWFyY2hCb3gnXSxcbiAgfSxcbiAgTWluaUNhcnQ6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnTWluaUNhcnQnXSxcbiAgfSxcbiAgU2l0ZUxvZ2luOiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ0xvZ2luQ29tcG9uZW50J10sXG4gIH0sXG4gIE5hdmlnYXRpb25CYXI6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50J10sXG4gIH0sXG4gIEJvdHRvbUhlYWRlclNsb3Q6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnQnJlYWRjcnVtYkNvbXBvbmVudCddLFxuICB9LFxufTtcbiJdfQ==