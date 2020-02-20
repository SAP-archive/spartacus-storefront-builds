export var b2cLayoutConfig = {
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
            slots: ['ProductLeftRefinements', 'ProductListSlot'],
        },
        ProductGridPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductGridSlot'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'ProductLeftRefinements',
                'SearchResultsListSlot',
                'Section4',
            ],
        },
        SearchResultsGridPageTemplate: {
            slots: [
                'Section2',
                'ProductLeftRefinements',
                'SearchResultsGridSlot',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQWlCO0lBQzNDLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFDTCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7YUFDMUQ7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDakIsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQzthQUNsRTtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsUUFBUSxFQUFFLFdBQVc7WUFDckIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBRUQsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUM7U0FDckQ7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQztTQUNyRDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixVQUFVO2FBQ1g7U0FDRjtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixVQUFVO2FBQ1g7U0FDRjtRQUNELDBCQUEwQixFQUFFO1lBQzFCLEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsV0FBVzthQUN0QjtZQUNELEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELEtBQUssRUFBRTtnQkFDTCxTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxNQUFNO2dCQUNOLHdCQUF3QjthQUN6QjtTQUNGO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO1NBQzFFO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO1NBQy9DO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7U0FDeEQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO1NBQ3JFO1FBQ0QseUJBQXlCLEVBQUU7WUFDekIsS0FBSyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDNUI7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXQvY29uZmlnL2xheW91dC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgYjJjTGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcgPSB7XG4gIC8vIGRlZmVycmVkTG9hZGluZzoge1xuICAvLyAgIHN0cmF0ZWd5OiBEZWZlckxvYWRpbmdTdHJhdGVneS5ERUZFUixcbiAgLy8gICBpbnRlcnNlY3Rpb25NYXJnaW46ICc1MHB4JyxcbiAgLy8gfSxcbiAgbGF5b3V0U2xvdHM6IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIG1kOiB7XG4gICAgICAgIHNsb3RzOiBbXG4gICAgICAgICAgJ1ByZUhlYWRlcicsXG4gICAgICAgICAgJ1NpdGVDb250ZXh0JyxcbiAgICAgICAgICAnU2l0ZUxpbmtzJyxcbiAgICAgICAgICAnU2l0ZUxvZ28nLFxuICAgICAgICAgICdTZWFyY2hCb3gnLFxuICAgICAgICAgICdTaXRlTG9naW4nLFxuICAgICAgICAgICdNaW5pQ2FydCcsXG4gICAgICAgICAgJ05hdmlnYXRpb25CYXInLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1ByZUhlYWRlcicsICdTaXRlTG9nbycsICdTZWFyY2hCb3gnLCAnTWluaUNhcnQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBtZDogeyBzbG90czogW10gfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1NpdGVMb2dpbicsICdOYXZpZ2F0aW9uQmFyJywgJ1NpdGVDb250ZXh0JywgJ1NpdGVMaW5rcyddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgc2xvdHM6IFsnRm9vdGVyJ10sXG4gICAgfSxcbiAgICBMYW5kaW5nUGFnZTJUZW1wbGF0ZToge1xuICAgICAgcGFnZUZvbGQ6ICdTZWN0aW9uMkInLFxuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24xJyxcbiAgICAgICAgJ1NlY3Rpb24yQScsXG4gICAgICAgICdTZWN0aW9uMkInLFxuICAgICAgICAnU2VjdGlvbjJDJyxcbiAgICAgICAgJ1NlY3Rpb24zJyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgICAgJ1NlY3Rpb241JyxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIENvbnRlbnRQYWdlMVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMkEnLCAnU2VjdGlvbjJCJ10sXG4gICAgfSxcbiAgICBDYXRlZ29yeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgcGFnZUZvbGQ6ICdTZWN0aW9uMicsXG4gICAgICBzbG90czogWydTZWN0aW9uMScsICdTZWN0aW9uMicsICdTZWN0aW9uMyddLFxuICAgIH0sXG4gICAgUHJvZHVjdExpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLCAnUHJvZHVjdExpc3RTbG90J10sXG4gICAgfSxcbiAgICBQcm9kdWN0R3JpZFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsICdQcm9kdWN0R3JpZFNsb3QnXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsXG4gICAgICAgICdTZWFyY2hSZXN1bHRzTGlzdFNsb3QnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNHcmlkUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsXG4gICAgICAgICdTZWFyY2hSZXN1bHRzR3JpZFNsb3QnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZVRlbXBsYXRlOiB7XG4gICAgICBtZDoge1xuICAgICAgICBwYWdlRm9sZDogJ1VwU2VsbGluZycsXG4gICAgICB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgcGFnZUZvbGQ6ICdTdW1tYXJ5JyxcbiAgICAgIH0sXG4gICAgICBzbG90czogW1xuICAgICAgICAnU3VtbWFyeScsXG4gICAgICAgICdVcFNlbGxpbmcnLFxuICAgICAgICAnQ3Jvc3NTZWxsaW5nJyxcbiAgICAgICAgJ1RhYnMnLFxuICAgICAgICAnUGxhY2Vob2xkZXJDb250ZW50U2xvdCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ2FydFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90JywgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIEFjY291bnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBMb2dpblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnTGVmdENvbnRlbnRTbG90JywgJ1JpZ2h0Q29udGVudFNsb3QnXSxcbiAgICB9LFxuICAgIEVycm9yUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ01pZGRsZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gICAgT3JkZXJDb25maXJtYXRpb25QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gICAgQ2hlY2tvdXRMb2dpblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gIH0sXG59O1xuIl19