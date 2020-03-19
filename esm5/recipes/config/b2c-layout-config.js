export var b2cLayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            lg: {
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
            slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
        },
        navigation: {
            lg: { slots: [] },
            slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
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
            lg: {
                pageFold: 'UpSelling',
            },
            pageFold: 'Summary',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQWlCO0lBQzNDLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFDTCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxVQUFVO29CQUNWLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLGVBQWU7aUJBQ2hCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7U0FDMUQ7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztTQUNsRTtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNsQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixVQUFVO2FBQ1g7U0FDRjtRQUVELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7U0FDbEM7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztTQUM1QztRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLHdCQUF3QixFQUFFLGlCQUFpQixDQUFDO1NBQ3JEO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsVUFBVTthQUNYO1NBQ0Y7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjtnQkFDdkIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixFQUFFLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLFdBQVc7YUFDdEI7WUFFRCxRQUFRLEVBQUUsU0FBUztZQUVuQixLQUFLLEVBQUU7Z0JBQ0wsU0FBUztnQkFDVCxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTix3QkFBd0I7YUFDekI7U0FDRjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUMxRTtRQUNELG1CQUFtQixFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztTQUMvQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3hEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztTQUNyRTtRQUNELHlCQUF5QixFQUFFO1lBQ3pCLEtBQUssRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQzVCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGIyY0xheW91dENvbmZpZzogTGF5b3V0Q29uZmlnID0ge1xuICAvLyBkZWZlcnJlZExvYWRpbmc6IHtcbiAgLy8gICBzdHJhdGVneTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kuREVGRVIsXG4gIC8vICAgaW50ZXJzZWN0aW9uTWFyZ2luOiAnNTBweCcsXG4gIC8vIH0sXG4gIGxheW91dFNsb3RzOiB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBsZzoge1xuICAgICAgICBzbG90czogW1xuICAgICAgICAgICdTaXRlQ29udGV4dCcsXG4gICAgICAgICAgJ1NpdGVMaW5rcycsXG4gICAgICAgICAgJ1NpdGVMb2dvJyxcbiAgICAgICAgICAnU2VhcmNoQm94JyxcbiAgICAgICAgICAnU2l0ZUxvZ2luJyxcbiAgICAgICAgICAnTWluaUNhcnQnLFxuICAgICAgICAgICdOYXZpZ2F0aW9uQmFyJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBzbG90czogWydQcmVIZWFkZXInLCAnU2l0ZUxvZ28nLCAnU2VhcmNoQm94JywgJ01pbmlDYXJ0J10sXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBsZzogeyBzbG90czogW10gfSxcbiAgICAgIHNsb3RzOiBbJ1NpdGVMb2dpbicsICdOYXZpZ2F0aW9uQmFyJywgJ1NpdGVDb250ZXh0JywgJ1NpdGVMaW5rcyddLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBzbG90czogWydGb290ZXInXSxcbiAgICB9LFxuICAgIExhbmRpbmdQYWdlMlRlbXBsYXRlOiB7XG4gICAgICBwYWdlRm9sZDogJ1NlY3Rpb24yQicsXG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjEnLFxuICAgICAgICAnU2VjdGlvbjJBJyxcbiAgICAgICAgJ1NlY3Rpb24yQicsXG4gICAgICAgICdTZWN0aW9uMkMnLFxuICAgICAgICAnU2VjdGlvbjMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgICAnU2VjdGlvbjUnLFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgQ29udGVudFBhZ2UxVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24yQScsICdTZWN0aW9uMkInXSxcbiAgICB9LFxuICAgIENhdGVnb3J5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBwYWdlRm9sZDogJ1NlY3Rpb24yJyxcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24xJywgJ1NlY3Rpb24yJywgJ1NlY3Rpb24zJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0TGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsICdQcm9kdWN0TGlzdFNsb3QnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RHcmlkUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGVmdFJlZmluZW1lbnRzJywgJ1Byb2R1Y3RHcmlkU2xvdCddLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJyxcbiAgICAgICAgJ1NlYXJjaFJlc3VsdHNMaXN0U2xvdCcsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0dyaWRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJyxcbiAgICAgICAgJ1NlYXJjaFJlc3VsdHNHcmlkU2xvdCcsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgUHJvZHVjdERldGFpbHNQYWdlVGVtcGxhdGU6IHtcbiAgICAgIGxnOiB7XG4gICAgICAgIHBhZ2VGb2xkOiAnVXBTZWxsaW5nJyxcbiAgICAgIH0sXG5cbiAgICAgIHBhZ2VGb2xkOiAnU3VtbWFyeScsXG5cbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTdW1tYXJ5JyxcbiAgICAgICAgJ1VwU2VsbGluZycsXG4gICAgICAgICdDcm9zc1NlbGxpbmcnLFxuICAgICAgICAnVGFicycsXG4gICAgICAgICdQbGFjZWhvbGRlckNvbnRlbnRTbG90JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDYXJ0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLCAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddLFxuICAgIH0sXG4gICAgQWNjb3VudFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIExvZ2luUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydMZWZ0Q29udGVudFNsb3QnLCAnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gICAgRXJyb3JQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnTWlkZGxlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgICBPcmRlckNvbmZpcm1hdGlvblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE11bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgICBDaGVja291dExvZ2luUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydSaWdodENvbnRlbnRTbG90J10sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=