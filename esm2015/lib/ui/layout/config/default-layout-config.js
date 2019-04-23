/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultLayoutConfig = {
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
                'AddToCart',
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
            slots: ['BodyContent', 'SideContent'],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1sYXlvdXQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2xheW91dC9jb25maWcvZGVmYXVsdC1sYXlvdXQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLG1CQUFtQixHQUFpQjtJQUMvQyxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtLQUNUO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFO1lBQ04sRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRTtvQkFDTCxXQUFXO29CQUNYLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxVQUFVO29CQUNWLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxVQUFVO29CQUNWLGVBQWU7aUJBQ2hCO2FBQ0Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO2FBQzFEO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2pCLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7YUFDbEU7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNsQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixVQUFVO2FBQ1g7U0FDRjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7U0FDbEM7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztTQUM1QztRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLHdCQUF3QixDQUFDO1NBQ3JEO1FBQ0QsNkJBQTZCLEVBQUU7WUFDN0IsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsdUJBQXVCO2dCQUN2Qix3QkFBd0I7Z0JBQ3hCLFVBQVU7YUFDWDtTQUNGO1FBQ0QsMEJBQTBCLEVBQUU7WUFDMUIsS0FBSyxFQUFFO2dCQUNMLGVBQWU7Z0JBQ2YscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxNQUFNO2dCQUNOLHdCQUF3QjthQUN6QjtTQUNGO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO1NBQzFFO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO1NBQy9DO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7U0FDeEQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuL2xheW91dC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExheW91dENvbmZpZzogTGF5b3V0Q29uZmlnID0ge1xuICBicmVha3BvaW50czoge1xuICAgIHhzOiA1NzYsXG4gICAgc206IDc2OCxcbiAgICBtZDogOTkyLFxuICAgIGxnOiAxMjAwLFxuICB9LFxuICBsYXlvdXRTbG90czoge1xuICAgIGhlYWRlcjoge1xuICAgICAgbWQ6IHtcbiAgICAgICAgc2xvdHM6IFtcbiAgICAgICAgICAnUHJlSGVhZGVyJyxcbiAgICAgICAgICAnU2l0ZUNvbnRleHQnLFxuICAgICAgICAgICdTaXRlTGlua3MnLFxuICAgICAgICAgICdTaXRlTG9nbycsXG4gICAgICAgICAgJ1NlYXJjaEJveCcsXG4gICAgICAgICAgJ1NpdGVMb2dpbicsXG4gICAgICAgICAgJ01pbmlDYXJ0JyxcbiAgICAgICAgICAnTmF2aWdhdGlvbkJhcicsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnUHJlSGVhZGVyJywgJ1NpdGVMb2dvJywgJ1NlYXJjaEJveCcsICdNaW5pQ2FydCddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG1kOiB7IHNsb3RzOiBbXSB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnU2l0ZUxvZ2luJywgJ05hdmlnYXRpb25CYXInLCAnU2l0ZUNvbnRleHQnLCAnU2l0ZUxpbmtzJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBzbG90czogWydGb290ZXInXSxcbiAgICB9LFxuICAgIExhbmRpbmdQYWdlMlRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjEnLFxuICAgICAgICAnU2VjdGlvbjJBJyxcbiAgICAgICAgJ1NlY3Rpb24yQicsXG4gICAgICAgICdTZWN0aW9uMkMnLFxuICAgICAgICAnU2VjdGlvbjMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgICAnU2VjdGlvbjUnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENvbnRlbnRQYWdlMVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMkEnLCAnU2VjdGlvbjJCJ10sXG4gICAgfSxcbiAgICBDYXRlZ29yeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjEnLCAnU2VjdGlvbjInLCAnU2VjdGlvbjMnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGlzdFNsb3QnLCAnUHJvZHVjdExlZnRSZWZpbmVtZW50cyddLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdTZWFyY2hSZXN1bHRzTGlzdFNsb3QnLFxuICAgICAgICAnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgUHJvZHVjdERldGFpbHNQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdUb3BIZWFkZXJTbG90JyxcbiAgICAgICAgJ1ZhcmlhbnRTZWxlY3RvclNsb3QnLFxuICAgICAgICAnQWRkVG9DYXJ0JyxcbiAgICAgICAgJ1VwU2VsbGluZycsXG4gICAgICAgICdDcm9zc1NlbGxpbmcnLFxuICAgICAgICAnVGFicycsXG4gICAgICAgICdQbGFjZWhvbGRlckNvbnRlbnRTbG90JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDYXJ0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLCAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddLFxuICAgIH0sXG4gICAgQWNjb3VudFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIExvZ2luUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydMZWZ0Q29udGVudFNsb3QnLCAnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gICAgRXJyb3JQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnTWlkZGxlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgICBPcmRlckNvbmZpcm1hdGlvblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE11bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==