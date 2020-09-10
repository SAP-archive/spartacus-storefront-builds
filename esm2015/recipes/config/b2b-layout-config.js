export const b2bLayoutConfig = {
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
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'SearchResultsListSlot',
                'ProductLeftRefinements',
            ],
        },
        ProductDetailsPageTemplate: {
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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmItbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWlCO0lBQzNDLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRTtZQUNOLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixlQUFlO2lCQUNoQjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQzthQUMxRDtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNqQixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQ2xFO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEI7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1NBQ0Y7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1NBQ2xDO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7U0FDNUM7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQztTQUNyRDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2FBRXpCO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsU0FBUztnQkFDVCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTix3QkFBd0I7YUFDekI7U0FDRjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUMxRTtRQUNELG1CQUFtQixFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztTQUMvQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3hEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztTQUNyRTtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBiMmJMYXlvdXRDb25maWc6IExheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0U2xvdHM6IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIG1kOiB7XG4gICAgICAgIHNsb3RzOiBbXG4gICAgICAgICAgJ1ByZUhlYWRlcicsXG4gICAgICAgICAgJ1NpdGVDb250ZXh0JyxcbiAgICAgICAgICAnU2l0ZUxpbmtzJyxcbiAgICAgICAgICAnU2l0ZUxvZ28nLFxuICAgICAgICAgICdTZWFyY2hCb3gnLFxuICAgICAgICAgICdTaXRlTG9naW4nLFxuICAgICAgICAgICdNaW5pQ2FydCcsXG4gICAgICAgICAgJ05hdmlnYXRpb25CYXInLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1ByZUhlYWRlcicsICdTaXRlTG9nbycsICdTZWFyY2hCb3gnLCAnTWluaUNhcnQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBtZDogeyBzbG90czogW10gfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1NpdGVMb2dpbicsICdOYXZpZ2F0aW9uQmFyJywgJ1NpdGVDb250ZXh0JywgJ1NpdGVMaW5rcyddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgc2xvdHM6IFsnRm9vdGVyJ10sXG4gICAgfSxcbiAgICBMYW5kaW5nUGFnZTJUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24xJyxcbiAgICAgICAgJ1NlY3Rpb24yQScsXG4gICAgICAgICdTZWN0aW9uMkInLFxuICAgICAgICAnU2VjdGlvbjJDJyxcbiAgICAgICAgJ1NlY3Rpb24zJyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgICAgJ1NlY3Rpb241JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDb250ZW50UGFnZTFUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjJBJywgJ1NlY3Rpb24yQiddLFxuICAgIH0sXG4gICAgQ2F0ZWdvcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24xJywgJ1NlY3Rpb24yJywgJ1NlY3Rpb24zJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0TGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExpc3RTbG90JywgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0xpc3RTbG90JyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAvLyAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU3VtbWFyeScsXG4gICAgICAgICdVcFNlbGxpbmcnLFxuICAgICAgICAnQ3Jvc3NTZWxsaW5nJyxcbiAgICAgICAgJ1RhYnMnLFxuICAgICAgICAnUGxhY2Vob2xkZXJDb250ZW50U2xvdCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ2FydFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90JywgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIEFjY291bnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBMb2dpblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnTGVmdENvbnRlbnRTbG90JywgJ1JpZ2h0Q29udGVudFNsb3QnXSxcbiAgICB9LFxuICAgIEVycm9yUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ01pZGRsZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gICAgT3JkZXJDb25maXJtYXRpb25QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gIH0sXG59O1xuIl19