/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultLayoutConfig = {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200,
    },
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
                'Section4',
            ],
        },
        ProductDetailsPageTemplate: {
            slots: [
                'TopHeaderSlot',
                'VariantSelectorSlot',
                // 'AddToCart', the add to cart is currently hard coded in the PDP component
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1sYXlvdXQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2NvbmZpZy9kZWZhdWx0LWxheW91dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO0tBQ1Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7YUFDMUQ7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDakIsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQzthQUNsRTtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLDRFQUE0RTtnQkFDNUUsV0FBVztnQkFDWCxjQUFjO2dCQUNkLE1BQU07Z0JBQ04sd0JBQXdCO2FBQ3pCO1NBQ0Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7U0FDMUU7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0M7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztTQUN4RDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7U0FDckU7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9sYXlvdXQtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMYXlvdXRDb25maWc6IExheW91dENvbmZpZyA9IHtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICB4czogNTc2LFxuICAgIHNtOiA3NjgsXG4gICAgbWQ6IDk5MixcbiAgICBsZzogMTIwMCxcbiAgfSxcbiAgbGF5b3V0U2xvdHM6IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIG1kOiB7XG4gICAgICAgIHNsb3RzOiBbXG4gICAgICAgICAgJ1ByZUhlYWRlcicsXG4gICAgICAgICAgJ1NpdGVDb250ZXh0JyxcbiAgICAgICAgICAnU2l0ZUxpbmtzJyxcbiAgICAgICAgICAnU2l0ZUxvZ28nLFxuICAgICAgICAgICdTZWFyY2hCb3gnLFxuICAgICAgICAgICdTaXRlTG9naW4nLFxuICAgICAgICAgICdNaW5pQ2FydCcsXG4gICAgICAgICAgJ05hdmlnYXRpb25CYXInLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1ByZUhlYWRlcicsICdTaXRlTG9nbycsICdTZWFyY2hCb3gnLCAnTWluaUNhcnQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBtZDogeyBzbG90czogW10gfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1NpdGVMb2dpbicsICdOYXZpZ2F0aW9uQmFyJywgJ1NpdGVDb250ZXh0JywgJ1NpdGVMaW5rcyddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgc2xvdHM6IFsnRm9vdGVyJ10sXG4gICAgfSxcbiAgICBMYW5kaW5nUGFnZTJUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24xJyxcbiAgICAgICAgJ1NlY3Rpb24yQScsXG4gICAgICAgICdTZWN0aW9uMkInLFxuICAgICAgICAnU2VjdGlvbjJDJyxcbiAgICAgICAgJ1NlY3Rpb24zJyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgICAgJ1NlY3Rpb241JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDb250ZW50UGFnZTFUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjJBJywgJ1NlY3Rpb24yQiddLFxuICAgIH0sXG4gICAgQ2F0ZWdvcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24xJywgJ1NlY3Rpb24yJywgJ1NlY3Rpb24zJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0TGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExpc3RTbG90JywgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0xpc3RTbG90JyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnVG9wSGVhZGVyU2xvdCcsXG4gICAgICAgICdWYXJpYW50U2VsZWN0b3JTbG90JyxcbiAgICAgICAgLy8gJ0FkZFRvQ2FydCcsIHRoZSBhZGQgdG8gY2FydCBpcyBjdXJyZW50bHkgaGFyZCBjb2RlZCBpbiB0aGUgUERQIGNvbXBvbmVudFxuICAgICAgICAnVXBTZWxsaW5nJyxcbiAgICAgICAgJ0Nyb3NzU2VsbGluZycsXG4gICAgICAgICdUYWJzJyxcbiAgICAgICAgJ1BsYWNlaG9sZGVyQ29udGVudFNsb3QnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENhcnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsICdFbXB0eUNhcnRNaWRkbGVDb250ZW50J10sXG4gICAgfSxcbiAgICBBY2NvdW50UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0xlZnRDb250ZW50U2xvdCcsICdSaWdodENvbnRlbnRTbG90J10sXG4gICAgfSxcbiAgICBFcnJvclBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdNaWRkbGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE9yZGVyQ29uZmlybWF0aW9uUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==