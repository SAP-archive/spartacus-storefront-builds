/**
 * The layout configuration is used to define the overall layout of the storefront.
 * The configuration includes the following aspects:
 * - breakpoint layout (AKA screen layout)
 * - Page sections slot configuration (i.e. header vs footer)
 * - page template slot configuration (i.e. landing page template vs PDP page template)
 * - deferred loading configuration
 *
 * The page slot configurations is directly related to the data in the backend. If you use the
 * Spartacus sample-data, you will have an aligned setup. However, if you introduce custom page
 * templates and/or slots, you most likely need to further adjust or replace this configuration.
 */
export const layoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            lg: {
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
/**
 * @deprecated the b2cLayoutConfig will be dropped with version 4.0.
 *
 * With Spartacus 3.0 we started to align various layout configurations. Moreover, we move
 * into a pattern where layout configurations are shattered through various (lazy loaded) modules.
 */
export const b2cLayoutConfig = layoutConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3JlY2lwZXMvY29uZmlnL2xheW91dC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWlCO0lBQ3hDLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLEtBQUs7SUFDTCxXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUU7WUFDTixFQUFFLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsZUFBZTtpQkFDaEI7YUFDRjtZQUNELEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUMxRDtRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO1NBQ2xFO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ2xCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsUUFBUSxFQUFFLFdBQVc7WUFDckIsS0FBSyxFQUFFO2dCQUNMLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxXQUFXO2dCQUNYLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtTQUNGO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUNsQztRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO1NBQzVDO1FBQ0QsdUJBQXVCLEVBQUU7WUFDdkIsS0FBSyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUM7U0FDckQ7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQztTQUNyRDtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixVQUFVO2FBQ1g7U0FDRjtRQUNELDZCQUE2QixFQUFFO1lBQzdCLEtBQUssRUFBRTtnQkFDTCxVQUFVO2dCQUNWLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2dCQUN2QixVQUFVO2FBQ1g7U0FDRjtRQUNELDBCQUEwQixFQUFFO1lBQzFCLEVBQUUsRUFBRTtnQkFDRixRQUFRLEVBQUUsV0FBVzthQUN0QjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLEtBQUssRUFBRTtnQkFDTCxTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxNQUFNO2dCQUNOLHdCQUF3QjthQUN6QjtTQUNGO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixDQUFDO1NBQzFFO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztTQUN0QztRQUNELGlCQUFpQixFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO1NBQy9DO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7U0FDeEQ7UUFDRCw2QkFBNkIsRUFBRTtZQUM3QixLQUFLLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1NBQ3RDO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO1NBQ3JFO1FBQ0QseUJBQXlCLEVBQUU7WUFDekIsS0FBSyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDNUI7S0FDRjtDQUNGLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBaUIsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuLyoqXG4gKiBUaGUgbGF5b3V0IGNvbmZpZ3VyYXRpb24gaXMgdXNlZCB0byBkZWZpbmUgdGhlIG92ZXJhbGwgbGF5b3V0IG9mIHRoZSBzdG9yZWZyb250LlxuICogVGhlIGNvbmZpZ3VyYXRpb24gaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBhc3BlY3RzOlxuICogLSBicmVha3BvaW50IGxheW91dCAoQUtBIHNjcmVlbiBsYXlvdXQpXG4gKiAtIFBhZ2Ugc2VjdGlvbnMgc2xvdCBjb25maWd1cmF0aW9uIChpLmUuIGhlYWRlciB2cyBmb290ZXIpXG4gKiAtIHBhZ2UgdGVtcGxhdGUgc2xvdCBjb25maWd1cmF0aW9uIChpLmUuIGxhbmRpbmcgcGFnZSB0ZW1wbGF0ZSB2cyBQRFAgcGFnZSB0ZW1wbGF0ZSlcbiAqIC0gZGVmZXJyZWQgbG9hZGluZyBjb25maWd1cmF0aW9uXG4gKlxuICogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9ucyBpcyBkaXJlY3RseSByZWxhdGVkIHRvIHRoZSBkYXRhIGluIHRoZSBiYWNrZW5kLiBJZiB5b3UgdXNlIHRoZVxuICogU3BhcnRhY3VzIHNhbXBsZS1kYXRhLCB5b3Ugd2lsbCBoYXZlIGFuIGFsaWduZWQgc2V0dXAuIEhvd2V2ZXIsIGlmIHlvdSBpbnRyb2R1Y2UgY3VzdG9tIHBhZ2VcbiAqIHRlbXBsYXRlcyBhbmQvb3Igc2xvdHMsIHlvdSBtb3N0IGxpa2VseSBuZWVkIHRvIGZ1cnRoZXIgYWRqdXN0IG9yIHJlcGxhY2UgdGhpcyBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgbGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcgPSB7XG4gIC8vIGRlZmVycmVkTG9hZGluZzoge1xuICAvLyAgIHN0cmF0ZWd5OiBEZWZlckxvYWRpbmdTdHJhdGVneS5ERUZFUixcbiAgLy8gICBpbnRlcnNlY3Rpb25NYXJnaW46ICc1MHB4JyxcbiAgLy8gfSxcbiAgbGF5b3V0U2xvdHM6IHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGxnOiB7XG4gICAgICAgIHNsb3RzOiBbXG4gICAgICAgICAgJ1ByZUhlYWRlcicsXG4gICAgICAgICAgJ1NpdGVDb250ZXh0JyxcbiAgICAgICAgICAnU2l0ZUxpbmtzJyxcbiAgICAgICAgICAnU2l0ZUxvZ28nLFxuICAgICAgICAgICdTZWFyY2hCb3gnLFxuICAgICAgICAgICdTaXRlTG9naW4nLFxuICAgICAgICAgICdNaW5pQ2FydCcsXG4gICAgICAgICAgJ05hdmlnYXRpb25CYXInLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHNsb3RzOiBbJ1ByZUhlYWRlcicsICdTaXRlTG9nbycsICdTZWFyY2hCb3gnLCAnTWluaUNhcnQnXSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIGxnOiB7IHNsb3RzOiBbXSB9LFxuICAgICAgc2xvdHM6IFsnU2l0ZUxvZ2luJywgJ05hdmlnYXRpb25CYXInLCAnU2l0ZUNvbnRleHQnLCAnU2l0ZUxpbmtzJ10sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHNsb3RzOiBbJ0Zvb3RlciddLFxuICAgIH0sXG4gICAgTGFuZGluZ1BhZ2UyVGVtcGxhdGU6IHtcbiAgICAgIHBhZ2VGb2xkOiAnU2VjdGlvbjJCJyxcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMScsXG4gICAgICAgICdTZWN0aW9uMkEnLFxuICAgICAgICAnU2VjdGlvbjJCJyxcbiAgICAgICAgJ1NlY3Rpb24yQycsXG4gICAgICAgICdTZWN0aW9uMycsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICAgICdTZWN0aW9uNScsXG4gICAgICBdLFxuICAgIH0sXG4gICAgQ29udGVudFBhZ2UxVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24yQScsICdTZWN0aW9uMkInXSxcbiAgICB9LFxuICAgIENhdGVnb3J5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBwYWdlRm9sZDogJ1NlY3Rpb24yJyxcbiAgICAgIHNsb3RzOiBbJ1NlY3Rpb24xJywgJ1NlY3Rpb24yJywgJ1NlY3Rpb24zJ10sXG4gICAgfSxcbiAgICBQcm9kdWN0TGlzdFBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnUHJvZHVjdExlZnRSZWZpbmVtZW50cycsICdQcm9kdWN0TGlzdFNsb3QnXSxcbiAgICB9LFxuICAgIFByb2R1Y3RHcmlkUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydQcm9kdWN0TGVmdFJlZmluZW1lbnRzJywgJ1Byb2R1Y3RHcmlkU2xvdCddLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJyxcbiAgICAgICAgJ1NlYXJjaFJlc3VsdHNMaXN0U2xvdCcsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgU2VhcmNoUmVzdWx0c0dyaWRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbXG4gICAgICAgICdTZWN0aW9uMicsXG4gICAgICAgICdQcm9kdWN0TGVmdFJlZmluZW1lbnRzJyxcbiAgICAgICAgJ1NlYXJjaFJlc3VsdHNHcmlkU2xvdCcsXG4gICAgICAgICdTZWN0aW9uNCcsXG4gICAgICBdLFxuICAgIH0sXG4gICAgUHJvZHVjdERldGFpbHNQYWdlVGVtcGxhdGU6IHtcbiAgICAgIGxnOiB7XG4gICAgICAgIHBhZ2VGb2xkOiAnVXBTZWxsaW5nJyxcbiAgICAgIH0sXG4gICAgICBwYWdlRm9sZDogJ1N1bW1hcnknLFxuICAgICAgc2xvdHM6IFtcbiAgICAgICAgJ1N1bW1hcnknLFxuICAgICAgICAnVXBTZWxsaW5nJyxcbiAgICAgICAgJ0Nyb3NzU2VsbGluZycsXG4gICAgICAgICdUYWJzJyxcbiAgICAgICAgJ1BsYWNlaG9sZGVyQ29udGVudFNsb3QnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIENhcnRQYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1RvcENvbnRlbnQnLCAnQ2VudGVyUmlnaHRDb250ZW50U2xvdCcsICdFbXB0eUNhcnRNaWRkbGVDb250ZW50J10sXG4gICAgfSxcbiAgICBBY2NvdW50UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ0xlZnRDb250ZW50U2xvdCcsICdSaWdodENvbnRlbnRTbG90J10sXG4gICAgfSxcbiAgICBFcnJvclBhZ2VUZW1wbGF0ZToge1xuICAgICAgc2xvdHM6IFsnVG9wQ29udGVudCcsICdNaWRkbGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIE9yZGVyQ29uZmlybWF0aW9uUGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydCb2R5Q29udGVudCcsICdTaWRlQ29udGVudCddLFxuICAgIH0sXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRTdW1tYXJ5UGFnZVRlbXBsYXRlOiB7XG4gICAgICBzbG90czogWydUb3BDb250ZW50JywgJ0JvZHlDb250ZW50JywgJ1NpZGVDb250ZW50JywgJ0JvdHRvbUNvbnRlbnQnXSxcbiAgICB9LFxuICAgIENoZWNrb3V0TG9naW5QYWdlVGVtcGxhdGU6IHtcbiAgICAgIHNsb3RzOiBbJ1JpZ2h0Q29udGVudFNsb3QnXSxcbiAgICB9LFxuICB9LFxufTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB0aGUgYjJjTGF5b3V0Q29uZmlnIHdpbGwgYmUgZHJvcHBlZCB3aXRoIHZlcnNpb24gNC4wLlxuICpcbiAqIFdpdGggU3BhcnRhY3VzIDMuMCB3ZSBzdGFydGVkIHRvIGFsaWduIHZhcmlvdXMgbGF5b3V0IGNvbmZpZ3VyYXRpb25zLiBNb3Jlb3Zlciwgd2UgbW92ZVxuICogaW50byBhIHBhdHRlcm4gd2hlcmUgbGF5b3V0IGNvbmZpZ3VyYXRpb25zIGFyZSBzaGF0dGVyZWQgdGhyb3VnaCB2YXJpb3VzIChsYXp5IGxvYWRlZCkgbW9kdWxlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGIyY0xheW91dENvbmZpZzogTGF5b3V0Q29uZmlnID0gbGF5b3V0Q29uZmlnO1xuIl19