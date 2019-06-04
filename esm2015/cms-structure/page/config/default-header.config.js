/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const headerComponents = {
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
    // TODO:#2811 - uncomment to enable
    // StoreFinder: {
    //   typeCode: 'CMSLinkComponent',
    //   flexType: 'CMSLinkComponent',
    //   linkName: 'Find a Store',
    //   url: '/store-finder',
    // },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1oZWFkZXIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL2NvbmZpZy9kZWZhdWx0LWhlYWRlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCLEdBRXpCO0lBQ0Ysc0JBQXNCLEVBQUU7UUFDdEIsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUsd0JBQXdCO0tBQ25DO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QseUJBQXlCLEVBQUU7UUFDekIsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUUsMkJBQTJCO0tBQ3RDOzs7Ozs7OztJQVFELG1CQUFtQixFQUFFO1FBQ25CLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQztJQUNELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxtQkFBbUI7WUFDekIsR0FBRyxFQUFFLG1FQUFtRTtTQUN6RTtRQUNELE9BQU8sRUFBRSxHQUFHO0tBQ2I7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsR0FBRyxFQUFFLG9CQUFvQjtLQUMxQjtJQUNELFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixHQUFHLEVBQUUsbUJBQW1CO0tBQ3pCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLEdBQUcsRUFBRSxnQkFBZ0I7S0FDdEI7SUFDRCwyQkFBMkIsRUFBRTtRQUMzQixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsR0FBRyxFQUFFLGlDQUFpQztRQUN0QyxjQUFjLEVBQUU7WUFDZCxHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxHQUFHLEVBQUUscUJBQXFCO29CQUMxQixLQUFLLEVBQUUsb0JBQW9CO29CQUMzQixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsTUFBTSxFQUFFLDBCQUEwQjs0QkFDbEMsYUFBYSxFQUFFLHNCQUFzQjs0QkFDckMsUUFBUSxFQUFFLGtCQUFrQjt5QkFDN0I7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQXVCO0lBQ3pELFNBQVMsRUFBRTtRQUNULFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixDQUFDO0tBQzlEO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7S0FDekQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDOUI7SUFDRCxRQUFRLEVBQUU7UUFDUixZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDdkI7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7S0FDNUI7SUFDRCxRQUFRLEVBQUU7UUFDUixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDM0I7SUFDRCxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztLQUNqQztJQUNELGFBQWEsRUFBRTtRQUNiLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzlDO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDdEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc1BhZ2VTbG90c0NvbmZpZywgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGhlYWRlckNvbXBvbmVudHM6IHtcbiAgW2tleTogc3RyaW5nXTogQ29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55O1xufSA9IHtcbiAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnSGFtYnVyZ2VyTWVudUNvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdIYW1idXJnZXJNZW51Q29tcG9uZW50JyxcbiAgfSxcbiAgTGFuZ3VhZ2VDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0NNU1NpdGVDb250ZXh0Q29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ0NNU1NpdGVDb250ZXh0Q29tcG9uZW50JyxcbiAgICBjb250ZXh0OiAnTEFOR1VBR0UnLFxuICB9LFxuICBDdXJyZW5jeUNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnQ01TU2l0ZUNvbnRleHRDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnQ01TU2l0ZUNvbnRleHRDb21wb25lbnQnLFxuICAgIGNvbnRleHQ6ICdDVVJSRU5DWScsXG4gIH0sXG4gIExhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0xhbmd1YWdlQ3VycmVuY3lDb21wb25lbnQnLFxuICAgIGZsZXhUeXBlOiAnTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCcsXG4gIH0sXG4gIC8vIFRPRE86IzI4MTEgLSB1bmNvbW1lbnQgdG8gZW5hYmxlXG4gIC8vIFN0b3JlRmluZGVyOiB7XG4gIC8vICAgdHlwZUNvZGU6ICdDTVNMaW5rQ29tcG9uZW50JyxcbiAgLy8gICBmbGV4VHlwZTogJ0NNU0xpbmtDb21wb25lbnQnLFxuICAvLyAgIGxpbmtOYW1lOiAnRmluZCBhIFN0b3JlJyxcbiAgLy8gICB1cmw6ICcvc3RvcmUtZmluZGVyJyxcbiAgLy8gfSxcbiAgQnJlYWRjcnVtYkNvbXBvbmVudDoge1xuICAgIHR5cGVDb2RlOiAnQnJlYWRjcnVtYkNvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdCcmVhZGNydW1iQ29tcG9uZW50JyxcbiAgfSxcbiAgTG9nbzoge1xuICAgIHR5cGVDb2RlOiAnU2ltcGxlQmFubmVyQ29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ1NpbXBsZUJhbm5lckNvbXBvbmVudCcsXG4gICAgdWlkOiAnbG9nbycsXG4gICAgbWVkaWE6IHtcbiAgICAgIG1pbWU6ICdzdmcvaW1hZ2Uvc3ZnK3htbCcsXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5zYXAuY29tL2RhbS9hcHBsaWNhdGlvbi9zaGFyZWQvbG9nb3Mvc2FwLWxvZ28tc3ZnLnN2ZycsXG4gICAgfSxcbiAgICB1cmxMaW5rOiAnLycsXG4gIH0sXG4gIFNlYXJjaEJveDoge1xuICAgIHR5cGVDb2RlOiAnU2VhcmNoQm94Q29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ1NlYXJjaEJveENvbXBvbmVudCcsXG4gICAgdWlkOiAnU2VhcmNoQm94Q29tcG9uZW50JyxcbiAgfSxcbiAgTWluaUNhcnQ6IHtcbiAgICB0eXBlQ29kZTogJ01pbmlDYXJ0Q29tcG9uZW50JyxcbiAgICBmbGV4VHlwZTogJ01pbmlDYXJ0Q29tcG9uZW50JyxcbiAgICB1aWQ6ICdNaW5pQ2FydENvbXBvbmVudCcsXG4gIH0sXG4gIExvZ2luQ29tcG9uZW50OiB7XG4gICAgdHlwZUNvZGU6ICdMb2dpbkNvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdMb2dpbkNvbXBvbmVudCcsXG4gICAgdWlkOiAnTG9naW5Db21wb25lbnQnLFxuICB9LFxuICBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQ6IHtcbiAgICB0eXBlQ29kZTogJ0NhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudCcsXG4gICAgZmxleFR5cGU6ICdDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQnLFxuICAgIHVpZDogJ0VsZWN0cm9uaWNzQ2F0ZWdvcnlOYXZDb21wb25lbnQnLFxuICAgIG5hdmlnYXRpb25Ob2RlOiB7XG4gICAgICB1aWQ6ICdFbGVjdHJvbmljc0NhdGVnb3J5TmF2Tm9kZScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdWlkOiAnQ2FtZXJhTGVuc2VzTmF2Tm9kZScsXG4gICAgICAgICAgdGl0bGU6ICdFbGVjdHJvbmljIGNhdGFsb2cnLFxuICAgICAgICAgIGVudHJpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXRlbUlkOiAnQ2FtZXJhTGVuc2VzQ2F0ZWdvcnlMaW5rJyxcbiAgICAgICAgICAgICAgaXRlbVN1cGVyVHlwZTogJ0Fic3RyYWN0Q01TQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgaXRlbVR5cGU6ICdDTVNMaW5rQ29tcG9uZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UGFnZUhlYWRlckNvbmZpZzogQ21zUGFnZVNsb3RzQ29uZmlnID0ge1xuICBQcmVIZWFkZXI6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnU2tpcExpbmtDb21wb25lbnQnLCAnSGFtYnVyZ2VyTWVudUNvbXBvbmVudCddLFxuICB9LFxuICBTaXRlQ29udGV4dDoge1xuICAgIGNvbXBvbmVudElkczogWydMYW5ndWFnZUNvbXBvbmVudCcsICdDdXJyZW5jeUNvbXBvbmVudCddLFxuICB9LFxuICBTaXRlTGlua3M6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnU3RvcmVGaW5kZXInXSxcbiAgfSxcbiAgU2l0ZUxvZ286IHtcbiAgICBjb21wb25lbnRJZHM6IFsnTG9nbyddLFxuICB9LFxuICBTZWFyY2hCb3g6IHtcbiAgICBjb21wb25lbnRJZHM6IFsnU2VhcmNoQm94J10sXG4gIH0sXG4gIE1pbmlDYXJ0OiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ01pbmlDYXJ0J10sXG4gIH0sXG4gIFNpdGVMb2dpbjoge1xuICAgIGNvbXBvbmVudElkczogWydMb2dpbkNvbXBvbmVudCddLFxuICB9LFxuICBOYXZpZ2F0aW9uQmFyOiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ0NhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudCddLFxuICB9LFxuICBCb3R0b21IZWFkZXJTbG90OiB7XG4gICAgY29tcG9uZW50SWRzOiBbJ0JyZWFkY3J1bWJDb21wb25lbnQnXSxcbiAgfSxcbn07XG4iXX0=