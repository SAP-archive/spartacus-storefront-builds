export var b2cLayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            md: {
                slots: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQWlCO0lBQzNDLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFDTCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxVQUFVO29CQUNWLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLGVBQWU7aUJBQ2hCO2FBQ0Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO2FBQzFEO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2pCLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7YUFDbEU7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNsQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixVQUFVO2FBQ1g7U0FDRjtRQUVELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7U0FDbEM7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztTQUM1QztRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLHdCQUF3QixFQUFFLGlCQUFpQixDQUFDO1NBQ3JEO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsVUFBVTthQUNYO1NBQ0Y7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFdBQVc7YUFDdEI7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsU0FBUztnQkFDVCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTix3QkFBd0I7YUFDekI7U0FDRjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUMxRTtRQUNELG1CQUFtQixFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztTQUMvQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3hEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztTQUNyRTtRQUNELHlCQUF5QixFQUFFO1lBQ3pCLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQzVCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGIyY0xheW91dENvbmZpZzogTGF5b3V0Q29uZmlnID0ge1xuICAvLyBkZWZlcnJlZExvYWRpbmc6IHtcbiAgLy8gICBzdHJhdGVneTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kuREVGRVIsXG4gIC8vICAgaW50ZXJzZWN0aW9uTWFyZ2luOiAnNTBweCcsXG4gIC8vIH0sXG4gIGxheW91dFNsb3RzOiB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBtZDoge1xuICAgICAgICBzbG90czogW1xuICAgICAgICAgICdTaXRlQ29udGV4dCcsXG4gICAgICAgICAgJ1NpdGVMaW5rcycsXG4gICAgICAgICAgJ1NpdGVMb2dvJyxcbiAgICAgICAgICAnU2VhcmNoQm94JyxcbiAgICAgICAgICAnU2l0ZUxvZ2luJyxcbiAgICAgICAgICAnTWluaUNhcnQnLFxuICAgICAgICAgICdOYXZpZ2F0aW9uQmFyJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB4czoge1xuICAgICAgICBzbG90czogWydQcmVIZWFkZXInLCAnU2l0ZUxvZ28nLCAnU2VhcmNoQm94JywgJ01pbmlDYXJ0J10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbWQ6IHsgc2xvdHM6IFtdIH0sXG4gICAgICB4czoge1xuICAgICAgICBzbG90czogWydTaXRlTG9naW4nLCAnTmF2aWdhdGlvbkJhcicsICdTaXRlQ29udGV4dCcsICdTaXRlTGlua3MnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHNsb3RzOiBbJ0Zvb3RlciddLFxuICAgIH0sXG4gICAgTGFuZGluZ1BhZ2UyVGVtcGxhdGU6IHtcbiAgICAgIHBhZ2VGb2xkOiAnU2VjdGlvbjJCJyxcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMScsXG4gICAgICAgICdTZWN0aW9uMkEnLFxuICAgICAgICAnU2VjdGlvbjJCJyxcbiAgICAgICAgJ1NlY3Rpb24yQycsXG4gICAgICAgICdTZWN0aW9uMycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICAgICdTZWN0aW9uNScsXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICBDb250ZW50UGFnZTFUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjJBJywgJ1NlY3Rpb24yQiddLFxuICAgIH0sXG4gICAgQ2F0ZWdvcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHBhZ2VGb2xkOiAnU2VjdGlvbjInLFxuICAgICAgc2xvdHM6IFsnU2VjdGlvbjEnLCAnU2VjdGlvbjInLCAnU2VjdGlvbjMnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGVmdFJlZmluZW1lbnRzJywgJ1Byb2R1Y3RMaXN0U2xvdCddLFxuICAgIH0sXG4gICAgUHJvZHVjdEdyaWRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLCAnUHJvZHVjdEdyaWRTbG90J10sXG4gICAgfSxcbiAgICBTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24yJyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0xpc3RTbG90JyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBTZWFyY2hSZXN1bHRzR3JpZFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24yJyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0dyaWRTbG90JyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VUZW1wbGF0ZToge1xuICAgICAgbWQ6IHtcbiAgICAgICAgcGFnZUZvbGQ6ICdVcFNlbGxpbmcnLFxuICAgICAgfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHBhZ2VGb2xkOiAnU3VtbWFyeScsXG4gICAgICB9LFxuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1N1bW1hcnknLFxuICAgICAgICAnVXBTZWxsaW5nJyxcbiAgICAgICAgJ0Nyb3NzU2VsbGluZycsXG4gICAgICAgICdUYWJzJyxcbiAgICAgICAgJ1BsYWNlaG9sZGVyQ29udGVudFNsb3QnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENhcnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsICdFbXB0eUNhcnRNaWRkbGVDb250ZW50J10sXG4gICAgfSxcbiAgICBBY2NvdW50UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0xlZnRDb250ZW50U2xvdCcsICdSaWdodENvbnRlbnRTbG90J10sXG4gICAgfSxcbiAgICBFcnJvclBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdNaWRkbGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE9yZGVyQ29uZmlybWF0aW9uUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIENoZWNrb3V0TG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1JpZ2h0Q29udGVudFNsb3QnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==