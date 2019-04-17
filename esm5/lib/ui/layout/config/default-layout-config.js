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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1sYXlvdXQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2xheW91dC9jb25maWcvZGVmYXVsdC1sYXlvdXQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLG1CQUFtQixHQUFpQjtJQUMvQyxXQUFXLEVBQUU7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtLQUNUO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxjQUFjO2dCQUNkLE1BQU07Z0JBQ04sd0JBQXdCO2FBQ3pCO1NBQ0Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7U0FDMUU7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0M7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztTQUN4RDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4vbGF5b3V0LWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcgPSB7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgeHM6IDU3NixcbiAgICBzbTogNzY4LFxuICAgIG1kOiA5OTIsXG4gICAgbGc6IDEyMDAsXG4gIH0sXG4gIGxheW91dFNsb3RzOiB7XG4gICAgZm9vdGVyOiB7XG4gICAgICBzbG90czogWydGb290ZXInXSxcbiAgICB9LFxuICAgIExhbmRpbmdQYWdlMlRlbXBsYXRlOiB7XG4gICAgICBzbG90czogW1xuICAgICAgICAnU2VjdGlvbjEnLFxuICAgICAgICAnU2VjdGlvbjJBJyxcbiAgICAgICAgJ1NlY3Rpb24yQicsXG4gICAgICAgICdTZWN0aW9uMkMnLFxuICAgICAgICAnU2VjdGlvbjMnLFxuICAgICAgICAnU2VjdGlvbjQnLFxuICAgICAgICAnU2VjdGlvbjUnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENvbnRlbnRQYWdlMVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMkEnLCAnU2VjdGlvbjJCJ10sXG4gICAgfSxcbiAgICBDYXRlZ29yeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnU2VjdGlvbjEnLCAnU2VjdGlvbjInLCAnU2VjdGlvbjMnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RMaXN0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGlzdFNsb3QnLCAnUHJvZHVjdExlZnRSZWZpbmVtZW50cyddLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdTZWFyY2hSZXN1bHRzTGlzdFNsb3QnLFxuICAgICAgICAnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgUHJvZHVjdERldGFpbHNQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdUb3BIZWFkZXJTbG90JyxcbiAgICAgICAgJ1ZhcmlhbnRTZWxlY3RvclNsb3QnLFxuICAgICAgICAnQWRkVG9DYXJ0JyxcbiAgICAgICAgJ1VwU2VsbGluZycsXG4gICAgICAgICdDcm9zc1NlbGxpbmcnLFxuICAgICAgICAnVGFicycsXG4gICAgICAgICdQbGFjZWhvbGRlckNvbnRlbnRTbG90JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDYXJ0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLCAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddLFxuICAgIH0sXG4gICAgQWNjb3VudFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIExvZ2luUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydMZWZ0Q29udGVudFNsb3QnLCAnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gICAgRXJyb3JQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnTWlkZGxlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgICBPcmRlckNvbmZpcm1hdGlvblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE11bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==