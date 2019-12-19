/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const b2cLayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            md: {
                slots: [
                    'PreHeader',
                    'SiteContext',
                    'SiteLinks',
                    'SiteLogo',
                    'SearchBox',
                    'SiteLogin',
                    'MiniCart',
                    'NavigationBar',
                ],
            },
            xs: {
                slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
            },
        },
        navigation: {
            md: { slots: [] },
            xs: {
                slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
            },
        },
        footer: {
            slots: ['Footer'],
        },
        LandingPage2Template: {
            pageFold: 'Section2B',
            slots: [
                'Section1',
                'Section2A',
                'Section2B',
                'Section2C',
                'Section3',
                'Section4',
                'Section5',
            ],
        },
        ContentPage1Template: {
            slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
            pageFold: 'Section2',
            slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
            slots: ['ProductListSlot', 'ProductLeftRefinements'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'SearchResultsListSlot',
                'ProductLeftRefinements',
                'Section4',
            ],
        },
        ProductDetailsPageTemplate: {
            md: {
                pageFold: 'UpSelling',
            },
            xs: {
                pageFold: 'Summary',
            },
            slots: [
                'Summary',
                'UpSelling',
                'CrossSelling',
                'Tabs',
                'PlaceholderContentSlot',
            ],
        },
        CartPageTemplate: {
            slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
        },
        AccountPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
            slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
            slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
            slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
        },
        CheckoutLoginPageTemplate: {
            slots: ['RightContentSlot'],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sT0FBTyxlQUFlLEdBQWlCOzs7OztJQUszQyxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7YUFDMUQ7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDakIsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQzthQUNsRTtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsUUFBUSxFQUFFLFdBQVc7WUFDckIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBRUQsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFdBQVc7YUFDdEI7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsU0FBUztnQkFDVCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTix3QkFBd0I7YUFDekI7U0FDRjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUMxRTtRQUNELG1CQUFtQixFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztTQUMvQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3hEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztTQUNyRTtRQUNELHlCQUF5QixFQUFFO1lBQ3pCLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQzVCO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBiMmNMYXlvdXRDb25maWc6IExheW91dENvbmZpZyA9IHtcbiAgLy8gZGVmZXJyZWRMb2FkaW5nOiB7XG4gIC8vICAgc3RyYXRlZ3k6IERlZmVyTG9hZGluZ1N0cmF0ZWd5LkRFRkVSLFxuICAvLyAgIGludGVyc2VjdGlvbk1hcmdpbjogJzUwcHgnLFxuICAvLyB9LFxuICBsYXlvdXRTbG90czoge1xuICAgIGhlYWRlcjoge1xuICAgICAgbWQ6IHtcbiAgICAgICAgc2xvdHM6IFtcbiAgICAgICAgICAnUHJlSGVhZGVyJyxcbiAgICAgICAgICAnU2l0ZUNvbnRleHQnLFxuICAgICAgICAgICdTaXRlTGlua3MnLFxuICAgICAgICAgICdTaXRlTG9nbycsXG4gICAgICAgICAgJ1NlYXJjaEJveCcsXG4gICAgICAgICAgJ1NpdGVMb2dpbicsXG4gICAgICAgICAgJ01pbmlDYXJ0JyxcbiAgICAgICAgICAnTmF2aWdhdGlvbkJhcicsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnUHJlSGVhZGVyJywgJ1NpdGVMb2dvJywgJ1NlYXJjaEJveCcsICdNaW5pQ2FydCddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG1kOiB7IHNsb3RzOiBbXSB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnU2l0ZUxvZ2luJywgJ05hdmlnYXRpb25CYXInLCAnU2l0ZUNvbnRleHQnLCAnU2l0ZUxpbmtzJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBzbG90czogWydGb290ZXInXSxcbiAgICB9LFxuICAgIExhbmRpbmdQYWdlMlRlbXBsYXRlOiB7XG4gICAgICBwYWdlRm9sZDogJ1NlY3Rpb24yQicsXG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjEnLFxuICAgICAgICAnU2VjdGlvbjJBJyxcbiAgICAgICAgJ1NlY3Rpb24yQicsXG4gICAgICAgICdTZWN0aW9uMkMnLFxuICAgICAgICAnU2VjdGlvbjMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgICAnU2VjdGlvbjUnLFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgQ29udGVudFBhZ2UxVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24yQScsICdTZWN0aW9uMkInXSxcbiAgICB9LFxuICAgIENhdGVnb3J5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBwYWdlRm9sZDogJ1NlY3Rpb24yJyxcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24xJywgJ1NlY3Rpb24yJywgJ1NlY3Rpb24zJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0TGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExpc3RTbG90JywgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0xpc3RTbG90JyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZVRlbXBsYXRlOiB7XG4gICAgICBtZDoge1xuICAgICAgICBwYWdlRm9sZDogJ1VwU2VsbGluZycsXG4gICAgICB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgcGFnZUZvbGQ6ICdTdW1tYXJ5JyxcbiAgICAgIH0sXG4gICAgICBzbG90czogW1xuICAgICAgICAnU3VtbWFyeScsXG4gICAgICAgICdVcFNlbGxpbmcnLFxuICAgICAgICAnQ3Jvc3NTZWxsaW5nJyxcbiAgICAgICAgJ1RhYnMnLFxuICAgICAgICAnUGxhY2Vob2xkZXJDb250ZW50U2xvdCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ2FydFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90JywgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIEFjY291bnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBMb2dpblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnTGVmdENvbnRlbnRTbG90JywgJ1JpZ2h0Q29udGVudFNsb3QnXSxcbiAgICB9LFxuICAgIEVycm9yUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ01pZGRsZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gICAgT3JkZXJDb25maXJtYXRpb25QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gICAgQ2hlY2tvdXRMb2dpblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gIH0sXG59O1xuIl19