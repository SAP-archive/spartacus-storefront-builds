/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var b2cLayoutConfig = {
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
                'ProductDetails',
                'VariantSelectorSlot',
                // 'AddToCart', // the add to cart is currently hard coded in the PDP component
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxlQUFlLEdBQWlCO0lBQzNDLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRTtZQUNOLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixlQUFlO2lCQUNoQjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQzthQUMxRDtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNqQixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQ2xFO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEI7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1NBQ0Y7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1NBQ2xDO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7U0FDNUM7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQztTQUNyRDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4QixVQUFVO2FBQ1g7U0FDRjtRQUNELDBCQUEwQixFQUFFO1lBQzFCLEtBQUssRUFBRTtnQkFDTCxlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQiwrRUFBK0U7Z0JBQy9FLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxNQUFNO2dCQUNOLHdCQUF3QjthQUN6QjtTQUNGO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO1NBQzFFO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO1NBQy9DO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7U0FDeEQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO1NBQ3JFO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBiMmNMYXlvdXRDb25maWc6IExheW91dENvbmZpZyA9IHtcbiAgbGF5b3V0U2xvdHM6IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIG1kOiB7XG4gICAgICAgIHNsb3RzOiBbXG4gICAgICAgICAgJ1ByZUhlYWRlcicsXG4gICAgICAgICAgJ1NpdGVDb250ZXh0JyxcbiAgICAgICAgICAnU2l0ZUxpbmtzJyxcbiAgICAgICAgICAnU2l0ZUxvZ28nLFxuICAgICAgICAgICdTZWFyY2hCb3gnLFxuICAgICAgICAgICdTaXRlTG9naW4nLFxuICAgICAgICAgICdNaW5pQ2FydCcsXG4gICAgICAgICAgJ05hdmlnYXRpb25CYXInLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1ByZUhlYWRlcicsICdTaXRlTG9nbycsICdTZWFyY2hCb3gnLCAnTWluaUNhcnQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBtZDogeyBzbG90czogW10gfSxcbiAgICAgIHhzOiB7XG4gICAgICAgIHNsb3RzOiBbJ1NpdGVMb2dpbicsICdOYXZpZ2F0aW9uQmFyJywgJ1NpdGVDb250ZXh0JywgJ1NpdGVMaW5rcyddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgc2xvdHM6IFsnRm9vdGVyJ10sXG4gICAgfSxcbiAgICBMYW5kaW5nUGFnZTJUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24xJyxcbiAgICAgICAgJ1NlY3Rpb24yQScsXG4gICAgICAgICdTZWN0aW9uMkInLFxuICAgICAgICAnU2VjdGlvbjJDJyxcbiAgICAgICAgJ1NlY3Rpb24zJyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgICAgJ1NlY3Rpb241JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDb250ZW50UGFnZTFUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjJBJywgJ1NlY3Rpb24yQiddLFxuICAgIH0sXG4gICAgQ2F0ZWdvcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24xJywgJ1NlY3Rpb24yJywgJ1NlY3Rpb24zJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0TGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExpc3RTbG90JywgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnXSxcbiAgICB9LFxuICAgIFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjInLFxuICAgICAgICAnU2VhcmNoUmVzdWx0c0xpc3RTbG90JyxcbiAgICAgICAgJ1Byb2R1Y3RMZWZ0UmVmaW5lbWVudHMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIFByb2R1Y3REZXRhaWxzUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnVG9wSGVhZGVyU2xvdCcsXG4gICAgICAgICdQcm9kdWN0RGV0YWlscycsXG4gICAgICAgICdWYXJpYW50U2VsZWN0b3JTbG90JyxcbiAgICAgICAgLy8gJ0FkZFRvQ2FydCcsIC8vIHRoZSBhZGQgdG8gY2FydCBpcyBjdXJyZW50bHkgaGFyZCBjb2RlZCBpbiB0aGUgUERQIGNvbXBvbmVudFxuICAgICAgICAnVXBTZWxsaW5nJyxcbiAgICAgICAgJ0Nyb3NzU2VsbGluZycsXG4gICAgICAgICdUYWJzJyxcbiAgICAgICAgJ1BsYWNlaG9sZGVyQ29udGVudFNsb3QnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENhcnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsICdFbXB0eUNhcnRNaWRkbGVDb250ZW50J10sXG4gICAgfSxcbiAgICBBY2NvdW50UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0xlZnRDb250ZW50U2xvdCcsICdSaWdodENvbnRlbnRTbG90J10sXG4gICAgfSxcbiAgICBFcnJvclBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdNaWRkbGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE9yZGVyQ29uZmlybWF0aW9uUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==