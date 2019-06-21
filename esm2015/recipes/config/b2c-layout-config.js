/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const b2cLayoutConfig = {
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
            slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
            slots: ['ProductListSlot', 'ProductLeftRefinements'],
        },
        ProductGridPageTemplate: {
            slots: ['ProductGridSlot', 'ProductLeftRefinements'],
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
            slots: [
                'TopHeaderSlot',
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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sT0FBTyxlQUFlLEdBQWlCO0lBQzNDLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRTtZQUNOLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixlQUFlO2lCQUNoQjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQzthQUMxRDtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNqQixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQ2xFO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEI7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1NBQ0Y7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1NBQ2xDO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7U0FDNUM7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQztTQUNyRDtRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLHdCQUF3QixDQUFDO1NBQ3JEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsdUJBQXVCO2dCQUN2Qix3QkFBd0I7Z0JBQ3hCLFVBQVU7YUFDWDtTQUNGO1FBQ0QsMEJBQTBCLEVBQUU7WUFDMUIsS0FBSyxFQUFFO2dCQUNMLGVBQWU7Z0JBQ2YsU0FBUztnQkFDVCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTix3QkFBd0I7YUFDekI7U0FDRjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUMxRTtRQUNELG1CQUFtQixFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztTQUMvQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3hEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztTQUNyRTtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgYjJjTGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcgPSB7XG4gIGxheW91dFNsb3RzOiB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBtZDoge1xuICAgICAgICBzbG90czogW1xuICAgICAgICAgICdQcmVIZWFkZXInLFxuICAgICAgICAgICdTaXRlQ29udGV4dCcsXG4gICAgICAgICAgJ1NpdGVMaW5rcycsXG4gICAgICAgICAgJ1NpdGVMb2dvJyxcbiAgICAgICAgICAnU2VhcmNoQm94JyxcbiAgICAgICAgICAnU2l0ZUxvZ2luJyxcbiAgICAgICAgICAnTWluaUNhcnQnLFxuICAgICAgICAgICdOYXZpZ2F0aW9uQmFyJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB4czoge1xuICAgICAgICBzbG90czogWydQcmVIZWFkZXInLCAnU2l0ZUxvZ28nLCAnU2VhcmNoQm94JywgJ01pbmlDYXJ0J10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbWQ6IHsgc2xvdHM6IFtdIH0sXG4gICAgICB4czoge1xuICAgICAgICBzbG90czogWydTaXRlTG9naW4nLCAnTmF2aWdhdGlvbkJhcicsICdTaXRlQ29udGV4dCcsICdTaXRlTGlua3MnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHNsb3RzOiBbJ0Zvb3RlciddLFxuICAgIH0sXG4gICAgTGFuZGluZ1BhZ2UyVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMScsXG4gICAgICAgICdTZWN0aW9uMkEnLFxuICAgICAgICAnU2VjdGlvbjJCJyxcbiAgICAgICAgJ1NlY3Rpb24yQycsXG4gICAgICAgICdTZWN0aW9uMycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICAgICdTZWN0aW9uNScsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ29udGVudFBhZ2UxVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24yQScsICdTZWN0aW9uMkInXSxcbiAgICB9LFxuICAgIENhdGVnb3J5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMScsICdTZWN0aW9uMicsICdTZWN0aW9uMyddLFxuICAgIH0sXG4gICAgUHJvZHVjdExpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1Byb2R1Y3RMaXN0U2xvdCcsICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdEdyaWRTbG90JywgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0xpc3RTbG90JyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnVG9wSGVhZGVyU2xvdCcsXG4gICAgICAgICdTdW1tYXJ5JyxcbiAgICAgICAgJ1VwU2VsbGluZycsXG4gICAgICAgICdDcm9zc1NlbGxpbmcnLFxuICAgICAgICAnVGFicycsXG4gICAgICAgICdQbGFjZWhvbGRlckNvbnRlbnRTbG90JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDYXJ0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLCAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddLFxuICAgIH0sXG4gICAgQWNjb3VudFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIExvZ2luUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydMZWZ0Q29udGVudFNsb3QnLCAnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gICAgRXJyb3JQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnTWlkZGxlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgICBPcmRlckNvbmZpcm1hdGlvblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE11bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=