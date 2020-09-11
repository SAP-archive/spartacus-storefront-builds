export const defaultB2bOccConfig = {
    backend: {
        occ: {
            endpoints: {
                user: 'orgUsers/${userId}',
                addEntries: 'orgUsers/${userId}/carts/${cartId}/entries',
                setDeliveryAddress: 'orgUsers/${userId}/carts/${cartId}/addresses/delivery',
                // TODO(#8877): Is this a hack for an API? Shouldn't user pass this data?
                placeOrder: 'orgUsers/${userId}/orders?termsChecked=true',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLW9jYy1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJyZWNpcGVzL2NvbmZpZy9iMmItb2NjLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBYztJQUM1QyxPQUFPLEVBQUU7UUFDUCxHQUFHLEVBQUU7WUFDSCxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsVUFBVSxFQUFFLDRDQUE0QztnQkFDeEQsa0JBQWtCLEVBQ2hCLHVEQUF1RDtnQkFDekQseUVBQXlFO2dCQUN6RSxVQUFVLEVBQUUsNkNBQTZDO2FBQzFEO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEIyYk9jY0NvbmZpZzogT2NjQ29uZmlnID0ge1xuICBiYWNrZW5kOiB7XG4gICAgb2NjOiB7XG4gICAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgdXNlcjogJ29yZ1VzZXJzLyR7dXNlcklkfScsXG4gICAgICAgIGFkZEVudHJpZXM6ICdvcmdVc2Vycy8ke3VzZXJJZH0vY2FydHMvJHtjYXJ0SWR9L2VudHJpZXMnLFxuICAgICAgICBzZXREZWxpdmVyeUFkZHJlc3M6XG4gICAgICAgICAgJ29yZ1VzZXJzLyR7dXNlcklkfS9jYXJ0cy8ke2NhcnRJZH0vYWRkcmVzc2VzL2RlbGl2ZXJ5JyxcbiAgICAgICAgLy8gVE9ETygjODg3Nyk6IElzIHRoaXMgYSBoYWNrIGZvciBhbiBBUEk/IFNob3VsZG4ndCB1c2VyIHBhc3MgdGhpcyBkYXRhP1xuICAgICAgICBwbGFjZU9yZGVyOiAnb3JnVXNlcnMvJHt1c2VySWR9L29yZGVycz90ZXJtc0NoZWNrZWQ9dHJ1ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19