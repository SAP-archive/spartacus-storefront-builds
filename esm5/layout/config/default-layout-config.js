/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1sYXlvdXQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2NvbmZpZy9kZWZhdWx0LWxheW91dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO0tBQ1Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7YUFDMUQ7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDakIsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQzthQUNsRTtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjtnQkFDckIsK0VBQStFO2dCQUMvRSxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTix3QkFBd0I7YUFDekI7U0FDRjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztTQUMxRTtRQUNELG1CQUFtQixFQUFFO1lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztTQUMvQztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO1NBQ3hEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztTQUNyRTtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuL2xheW91dC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExheW91dENvbmZpZzogTGF5b3V0Q29uZmlnID0ge1xuICBicmVha3BvaW50czoge1xuICAgIHhzOiA1NzYsXG4gICAgc206IDc2OCxcbiAgICBtZDogOTkyLFxuICAgIGxnOiAxMjAwLFxuICB9LFxuICBsYXlvdXRTbG90czoge1xuICAgIGhlYWRlcjoge1xuICAgICAgbWQ6IHtcbiAgICAgICAgc2xvdHM6IFtcbiAgICAgICAgICAnUHJlSGVhZGVyJyxcbiAgICAgICAgICAnU2l0ZUNvbnRleHQnLFxuICAgICAgICAgICdTaXRlTGlua3MnLFxuICAgICAgICAgICdTaXRlTG9nbycsXG4gICAgICAgICAgJ1NlYXJjaEJveCcsXG4gICAgICAgICAgJ1NpdGVMb2dpbicsXG4gICAgICAgICAgJ01pbmlDYXJ0JyxcbiAgICAgICAgICAnTmF2aWdhdGlvbkJhcicsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnUHJlSGVhZGVyJywgJ1NpdGVMb2dvJywgJ1NlYXJjaEJveCcsICdNaW5pQ2FydCddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG1kOiB7IHNsb3RzOiBbXSB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnU2l0ZUxvZ2luJywgJ05hdmlnYXRpb25CYXInLCAnU2l0ZUNvbnRleHQnLCAnU2l0ZUxpbmtzJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBzbG90czogWydGb290ZXInXSxcbiAgICB9LFxuICAgIExhbmRpbmdQYWdlMlRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjEnLFxuICAgICAgICAnU2VjdGlvbjJBJyxcbiAgICAgICAgJ1NlY3Rpb24yQicsXG4gICAgICAgICdTZWN0aW9uMkMnLFxuICAgICAgICAnU2VjdGlvbjMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgICAnU2VjdGlvbjUnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENvbnRlbnRQYWdlMVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMkEnLCAnU2VjdGlvbjJCJ10sXG4gICAgfSxcbiAgICBDYXRlZ29yeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjEnLCAnU2VjdGlvbjInLCAnU2VjdGlvbjMnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGlzdFNsb3QnLCAnUHJvZHVjdExlZnRSZWZpbmVtZW50cyddLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdTZWFyY2hSZXN1bHRzTGlzdFNsb3QnLFxuICAgICAgICAnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgUHJvZHVjdERldGFpbHNQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdUb3BIZWFkZXJTbG90JyxcbiAgICAgICAgJ1Byb2R1Y3REZXRhaWxzJyxcbiAgICAgICAgJ1ZhcmlhbnRTZWxlY3RvclNsb3QnLFxuICAgICAgICAvLyAnQWRkVG9DYXJ0JywgLy8gdGhlIGFkZCB0byBjYXJ0IGlzIGN1cnJlbnRseSBoYXJkIGNvZGVkIGluIHRoZSBQRFAgY29tcG9uZW50XG4gICAgICAgICdVcFNlbGxpbmcnLFxuICAgICAgICAnQ3Jvc3NTZWxsaW5nJyxcbiAgICAgICAgJ1RhYnMnLFxuICAgICAgICAnUGxhY2Vob2xkZXJDb250ZW50U2xvdCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ2FydFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdDZW50ZXJSaWdodENvbnRlbnRTbG90JywgJ0VtcHR5Q2FydE1pZGRsZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIEFjY291bnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBMb2dpblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnTGVmdENvbnRlbnRTbG90JywgJ1JpZ2h0Q29udGVudFNsb3QnXSxcbiAgICB9LFxuICAgIEVycm9yUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ01pZGRsZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gICAgT3JkZXJDb25maXJtYXRpb25QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50J10sXG4gICAgfSxcbiAgICBNdWx0aVN0ZXBDaGVja291dFN1bW1hcnlQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnLCAnQm90dG9tQ29udGVudCddLFxuICAgIH0sXG4gIH0sXG59O1xuIl19