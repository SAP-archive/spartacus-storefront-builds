export const defaultB2bOccConfig = {
    backend: {
        occ: {
            endpoints: {
                user: 'orgUsers/${userId}',
                addEntries: 'orgUsers/${userId}/carts/${cartId}/entries',
                setDeliveryAddress: 'orgUsers/${userId}/carts/${cartId}/addresses/delivery',
                placeOrder: 'orgUsers/${userId}/orders?termsChecked=true',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLW9jYy1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmItb2NjLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBYztJQUM1QyxPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUU7WUFDSCxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsVUFBVSxFQUFFLDRDQUE0QztnQkFDeEQsa0JBQWtCLEVBQ2hCLHVEQUF1RDtnQkFDekQsVUFBVSxFQUFFLDZDQUE2QzthQUMxRDtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCMmJPY2NDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHVzZXI6ICdvcmdVc2Vycy8ke3VzZXJJZH0nLFxuICAgICAgICBhZGRFbnRyaWVzOiAnb3JnVXNlcnMvJHt1c2VySWR9L2NhcnRzLyR7Y2FydElkfS9lbnRyaWVzJyxcbiAgICAgICAgc2V0RGVsaXZlcnlBZGRyZXNzOlxuICAgICAgICAgICdvcmdVc2Vycy8ke3VzZXJJZH0vY2FydHMvJHtjYXJ0SWR9L2FkZHJlc3Nlcy9kZWxpdmVyeScsXG4gICAgICAgIHBsYWNlT3JkZXI6ICdvcmdVc2Vycy8ke3VzZXJJZH0vb3JkZXJzP3Rlcm1zQ2hlY2tlZD10cnVlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=