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
            slots: ['BodyContent', 'SideContent'],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1sYXlvdXQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2NvbmZpZy9kZWZhdWx0LWxheW91dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO0tBQ1Q7SUFDRCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7YUFDRjtZQUNELEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7YUFDMUQ7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDakIsRUFBRSxFQUFFO2dCQUNGLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQzthQUNsRTtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7U0FDckQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUU7Z0JBQ0wsVUFBVTtnQkFDVix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsVUFBVTthQUNYO1NBQ0Y7UUFDRCwwQkFBMEIsRUFBRTtZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsZUFBZTtnQkFDZixxQkFBcUI7Z0JBQ3JCLDRFQUE0RTtnQkFDNUUsV0FBVztnQkFDWCxjQUFjO2dCQUNkLE1BQU07Z0JBQ04sd0JBQXdCO2FBQ3pCO1NBQ0Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7U0FDMUU7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0M7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztTQUN4RDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDdEM7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4vbGF5b3V0LWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcgPSB7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgeHM6IDU3NixcbiAgICBzbTogNzY4LFxuICAgIG1kOiA5OTIsXG4gICAgbGc6IDEyMDAsXG4gIH0sXG4gIGxheW91dFNsb3RzOiB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBtZDoge1xuICAgICAgICBzbG90czogW1xuICAgICAgICAgICdQcmVIZWFkZXInLFxuICAgICAgICAgICdTaXRlQ29udGV4dCcsXG4gICAgICAgICAgJ1NpdGVMaW5rcycsXG4gICAgICAgICAgJ1NpdGVMb2dvJyxcbiAgICAgICAgICAnU2VhcmNoQm94JyxcbiAgICAgICAgICAnU2l0ZUxvZ2luJyxcbiAgICAgICAgICAnTWluaUNhcnQnLFxuICAgICAgICAgICdOYXZpZ2F0aW9uQmFyJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB4czoge1xuICAgICAgICBzbG90czogWydQcmVIZWFkZXInLCAnU2l0ZUxvZ28nLCAnU2VhcmNoQm94JywgJ01pbmlDYXJ0J10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbWQ6IHsgc2xvdHM6IFtdIH0sXG4gICAgICB4czoge1xuICAgICAgICBzbG90czogWydTaXRlTG9naW4nLCAnTmF2aWdhdGlvbkJhcicsICdTaXRlQ29udGV4dCcsICdTaXRlTGlua3MnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHNsb3RzOiBbJ0Zvb3RlciddLFxuICAgIH0sXG4gICAgTGFuZGluZ1BhZ2UyVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMScsXG4gICAgICAgICdTZWN0aW9uMkEnLFxuICAgICAgICAnU2VjdGlvbjJCJyxcbiAgICAgICAgJ1NlY3Rpb24yQycsXG4gICAgICAgICdTZWN0aW9uMycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICAgICdTZWN0aW9uNScsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ29udGVudFBhZ2UxVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24yQScsICdTZWN0aW9uMkInXSxcbiAgICB9LFxuICAgIENhdGVnb3J5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydTZWN0aW9uMScsICdTZWN0aW9uMicsICdTZWN0aW9uMyddLFxuICAgIH0sXG4gICAgUHJvZHVjdExpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1Byb2R1Y3RMaXN0U2xvdCcsICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJ10sXG4gICAgfSxcbiAgICBTZWFyY2hSZXN1bHRzTGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1NlY3Rpb24yJyxcbiAgICAgICAgJ1NlYXJjaFJlc3VsdHNMaXN0U2xvdCcsXG4gICAgICAgICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJyxcbiAgICAgICAgJ1NlY3Rpb240JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBQcm9kdWN0RGV0YWlsc1BhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1RvcEhlYWRlclNsb3QnLFxuICAgICAgICAnVmFyaWFudFNlbGVjdG9yU2xvdCcsXG4gICAgICAgIC8vICdBZGRUb0NhcnQnLCB0aGUgYWRkIHRvIGNhcnQgaXMgY3VycmVudGx5IGhhcmQgY29kZWQgaW4gdGhlIFBEUCBjb21wb25lbnRcbiAgICAgICAgJ1VwU2VsbGluZycsXG4gICAgICAgICdDcm9zc1NlbGxpbmcnLFxuICAgICAgICAnVGFicycsXG4gICAgICAgICdQbGFjZWhvbGRlckNvbnRlbnRTbG90JyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBDYXJ0UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0NlbnRlclJpZ2h0Q29udGVudFNsb3QnLCAnRW1wdHlDYXJ0TWlkZGxlQ29udGVudCddLFxuICAgIH0sXG4gICAgQWNjb3VudFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIExvZ2luUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydMZWZ0Q29udGVudFNsb3QnLCAnUmlnaHRDb250ZW50U2xvdCddLFxuICAgIH0sXG4gICAgRXJyb3JQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnTWlkZGxlQ29udGVudCcsICdCb3R0b21Db250ZW50J10sXG4gICAgfSxcbiAgICBPcmRlckNvbmZpcm1hdGlvblBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE11bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnQm9keUNvbnRlbnQnLCAnU2lkZUNvbnRlbnQnXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==