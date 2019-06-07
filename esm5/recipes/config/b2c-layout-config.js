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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJjLWxheW91dC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmMtbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBTyxlQUFlLEdBQWlCO0lBQzNDLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRTtZQUNOLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixlQUFlO2lCQUNoQjthQUNGO1lBQ0QsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQzthQUMxRDtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNqQixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQ2xFO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEI7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1NBQ0Y7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1NBQ2xDO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7U0FDNUM7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQztTQUNyRDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4QixVQUFVO2FBQ1g7U0FDRjtRQUNELDBCQUEwQixFQUFFO1lBQzFCLEtBQUssRUFBRTtnQkFDTCxlQUFlO2dCQUNmLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxjQUFjO2dCQUNkLE1BQU07Z0JBQ04sd0JBQXdCO2FBQ3pCO1NBQ0Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7U0FDMUU7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0M7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztTQUN4RDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7U0FDckU7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGIyY0xheW91dENvbmZpZzogTGF5b3V0Q29uZmlnID0ge1xuICBsYXlvdXRTbG90czoge1xuICAgIGhlYWRlcjoge1xuICAgICAgbWQ6IHtcbiAgICAgICAgc2xvdHM6IFtcbiAgICAgICAgICAnUHJlSGVhZGVyJyxcbiAgICAgICAgICAnU2l0ZUNvbnRleHQnLFxuICAgICAgICAgICdTaXRlTGlua3MnLFxuICAgICAgICAgICdTaXRlTG9nbycsXG4gICAgICAgICAgJ1NlYXJjaEJveCcsXG4gICAgICAgICAgJ1NpdGVMb2dpbicsXG4gICAgICAgICAgJ01pbmlDYXJ0JyxcbiAgICAgICAgICAnTmF2aWdhdGlvbkJhcicsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnUHJlSGVhZGVyJywgJ1NpdGVMb2dvJywgJ1NlYXJjaEJveCcsICdNaW5pQ2FydCddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG1kOiB7IHNsb3RzOiBbXSB9LFxuICAgICAgeHM6IHtcbiAgICAgICAgc2xvdHM6IFsnU2l0ZUxvZ2luJywgJ05hdmlnYXRpb25CYXInLCAnU2l0ZUNvbnRleHQnLCAnU2l0ZUxpbmtzJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBzbG90czogWydGb290ZXInXSxcbiAgICB9LFxuICAgIExhbmRpbmdQYWdlMlRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjEnLFxuICAgICAgICAnU2VjdGlvbjJBJyxcbiAgICAgICAgJ1NlY3Rpb24yQicsXG4gICAgICAgICdTZWN0aW9uMkMnLFxuICAgICAgICAnU2VjdGlvbjMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgICAnU2VjdGlvbjUnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENvbnRlbnRQYWdlMVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMkEnLCAnU2VjdGlvbjJCJ10sXG4gICAgfSxcbiAgICBDYXRlZ29yeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjEnLCAnU2VjdGlvbjInLCAnU2VjdGlvbjMnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGlzdFNsb3QnLCAnUHJvZHVjdExlZnRSZWZpbmVtZW50cyddLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdTZWFyY2hSZXN1bHRzTGlzdFNsb3QnLFxuICAgICAgICAnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgUHJvZHVjdERldGFpbHNQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdUb3BIZWFkZXJTbG90JyxcbiAgICAgICAgJ1N1bW1hcnknLFxuICAgICAgICAnVXBTZWxsaW5nJyxcbiAgICAgICAgJ0Nyb3NzU2VsbGluZycsXG4gICAgICAgICdUYWJzJyxcbiAgICAgICAgJ1BsYWNlaG9sZGVyQ29udGVudFNsb3QnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENhcnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsICdFbXB0eUNhcnRNaWRkbGVDb250ZW50J10sXG4gICAgfSxcbiAgICBBY2NvdW50UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0xlZnRDb250ZW50U2xvdCcsICdSaWdodENvbnRlbnRTbG90J10sXG4gICAgfSxcbiAgICBFcnJvclBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdNaWRkbGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE9yZGVyQ29uZmlybWF0aW9uUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==