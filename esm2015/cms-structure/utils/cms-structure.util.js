import { provideConfig } from '@spartacus/core';
/**
 * Helper function to simplify the creation of static CMS structure (`CmsStructureConfig`).
 * The helper function leverage the `provideConfig`, and is only providing an easy way to
 * generate the cms structure. The function creates a configuration structure for components,
 * page slot and page template. The following example adds a component to a page slot:
 *
 * ```ts
 * provideCmsStructure({
 *   componentId: 'LoginComponent',
 *   pageSlotPosition: 'SiteLogin'
 * })
 * ```
 *
 * @param options.componentId component identifier is used to provide component structure
 * @param options.pageSlotPosition page slot position is used to provide the slot configuration
 * @param options.pageTemplate the page template is used to provide the page slot to the given page template
 * @param options.section the section is used to provide the page slot to the given section
 * @param options.breakpoint the breakpoint is used to provide the page slot for a specific breakpoint
 */
export function provideCmsStructure(options) {
    return provideConfig(Object.assign(Object.assign({}, buildCmsStructure(options)), buildLayoutConfig(options)));
}
/**
 * @private
 */
function buildCmsStructure({ componentId, pageSlotPosition, } = {}) {
    const config = { cmsStructure: {} };
    if (componentId) {
        config.cmsStructure = {
            components: {
                [componentId]: {
                    typeCode: componentId,
                    flexType: componentId,
                },
            },
        };
    }
    if (componentId && pageSlotPosition) {
        config.cmsStructure.slots = {
            [pageSlotPosition]: { componentIds: [componentId] },
        };
    }
    return config;
}
/**
 * @private
 */
function buildLayoutConfig({ pageTemplate, pageSlotPosition, breakpoint, section, } = {}) {
    const layoutConfig = {};
    if (pageTemplate && pageSlotPosition) {
        const pageTemplateSlots = {};
        if (breakpoint) {
            pageTemplateSlots[breakpoint] = {
                slots: [pageSlotPosition],
            };
        }
        else {
            pageTemplateSlots.slots = [pageSlotPosition];
        }
        layoutConfig.layoutSlots = {
            [pageTemplate]: pageTemplateSlots,
        };
    }
    if (section && pageSlotPosition) {
        const sectionSlots = {};
        if (breakpoint) {
            sectionSlots[breakpoint] = { slots: [pageSlotPosition] };
        }
        else {
            sectionSlots.slots = [pageSlotPosition];
        }
        if (layoutConfig.layoutSlots) {
            layoutConfig.layoutSlots[section] = sectionSlots;
        }
        else {
            layoutConfig.layoutSlots = {
                [section]: sectionSlots,
            };
        }
    }
    return layoutConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS91dGlscy9jbXMtc3RydWN0dXJlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFzQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUlwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUE0QjtJQUU1QixPQUFPLGFBQWEsaUNBQ2YsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQzFCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUM3QixDQUFDO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxFQUN6QixXQUFXLEVBQ1gsZ0JBQWdCLE1BQ08sRUFBRTtJQUN6QixNQUFNLE1BQU0sR0FBdUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFFeEQsSUFBSSxXQUFXLEVBQUU7UUFDZixNQUFNLENBQUMsWUFBWSxHQUFHO1lBQ3BCLFVBQVUsRUFBRTtnQkFDVixDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNiLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsV0FBVztpQkFDdEI7YUFDRjtTQUNGLENBQUM7S0FDSDtJQUVELElBQUksV0FBVyxJQUFJLGdCQUFnQixFQUFFO1FBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHO1lBQzFCLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1NBQ3BELENBQUM7S0FDSDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsaUJBQWlCLENBQUMsRUFDekIsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsT0FBTyxNQUNnQixFQUFFO0lBQ3pCLE1BQU0sWUFBWSxHQUFpQixFQUFFLENBQUM7SUFDdEMsSUFBSSxZQUFZLElBQUksZ0JBQWdCLEVBQUU7UUFDcEMsTUFBTSxpQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxVQUFVLEVBQUU7WUFDZCxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDOUIsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDMUIsQ0FBQztTQUNIO2FBQU07WUFDTCxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsWUFBWSxDQUFDLFdBQVcsR0FBRztZQUN6QixDQUFDLFlBQVksQ0FBQyxFQUFFLGlCQUFpQjtTQUNsQyxDQUFDO0tBQ0g7SUFFRCxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRTtRQUMvQixNQUFNLFlBQVksR0FBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxVQUFVLEVBQUU7WUFDZCxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7U0FDMUQ7YUFBTTtZQUNMLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzVCLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsWUFBWSxDQUFDO1NBQ2xEO2FBQU07WUFDTCxZQUFZLENBQUMsV0FBVyxHQUFHO2dCQUN6QixDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVk7YUFDeEIsQ0FBQztTQUNIO0tBQ0Y7SUFDRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnLCBwcm92aWRlQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVPcHRpb25zIH0gZnJvbSAnLi9jbXMtc3RydWN0dXJlLm1vZGVsJztcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2ltcGxpZnkgdGhlIGNyZWF0aW9uIG9mIHN0YXRpYyBDTVMgc3RydWN0dXJlIChgQ21zU3RydWN0dXJlQ29uZmlnYCkuXG4gKiBUaGUgaGVscGVyIGZ1bmN0aW9uIGxldmVyYWdlIHRoZSBgcHJvdmlkZUNvbmZpZ2AsIGFuZCBpcyBvbmx5IHByb3ZpZGluZyBhbiBlYXN5IHdheSB0b1xuICogZ2VuZXJhdGUgdGhlIGNtcyBzdHJ1Y3R1cmUuIFRoZSBmdW5jdGlvbiBjcmVhdGVzIGEgY29uZmlndXJhdGlvbiBzdHJ1Y3R1cmUgZm9yIGNvbXBvbmVudHMsXG4gKiBwYWdlIHNsb3QgYW5kIHBhZ2UgdGVtcGxhdGUuIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBhZGRzIGEgY29tcG9uZW50IHRvIGEgcGFnZSBzbG90OlxuICpcbiAqIGBgYHRzXG4gKiBwcm92aWRlQ21zU3RydWN0dXJlKHtcbiAqICAgY29tcG9uZW50SWQ6ICdMb2dpbkNvbXBvbmVudCcsXG4gKiAgIHBhZ2VTbG90UG9zaXRpb246ICdTaXRlTG9naW4nXG4gKiB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIG9wdGlvbnMuY29tcG9uZW50SWQgY29tcG9uZW50IGlkZW50aWZpZXIgaXMgdXNlZCB0byBwcm92aWRlIGNvbXBvbmVudCBzdHJ1Y3R1cmVcbiAqIEBwYXJhbSBvcHRpb25zLnBhZ2VTbG90UG9zaXRpb24gcGFnZSBzbG90IHBvc2l0aW9uIGlzIHVzZWQgdG8gcHJvdmlkZSB0aGUgc2xvdCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0gb3B0aW9ucy5wYWdlVGVtcGxhdGUgdGhlIHBhZ2UgdGVtcGxhdGUgaXMgdXNlZCB0byBwcm92aWRlIHRoZSBwYWdlIHNsb3QgdG8gdGhlIGdpdmVuIHBhZ2UgdGVtcGxhdGVcbiAqIEBwYXJhbSBvcHRpb25zLnNlY3Rpb24gdGhlIHNlY3Rpb24gaXMgdXNlZCB0byBwcm92aWRlIHRoZSBwYWdlIHNsb3QgdG8gdGhlIGdpdmVuIHNlY3Rpb25cbiAqIEBwYXJhbSBvcHRpb25zLmJyZWFrcG9pbnQgdGhlIGJyZWFrcG9pbnQgaXMgdXNlZCB0byBwcm92aWRlIHRoZSBwYWdlIHNsb3QgZm9yIGEgc3BlY2lmaWMgYnJlYWtwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNtc1N0cnVjdHVyZShcbiAgb3B0aW9uczogQ21zU3RydWN0dXJlT3B0aW9uc1xuKTogVmFsdWVQcm92aWRlciB7XG4gIHJldHVybiBwcm92aWRlQ29uZmlnKHtcbiAgICAuLi5idWlsZENtc1N0cnVjdHVyZShvcHRpb25zKSxcbiAgICAuLi5idWlsZExheW91dENvbmZpZyhvcHRpb25zKSxcbiAgfSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYnVpbGRDbXNTdHJ1Y3R1cmUoe1xuICBjb21wb25lbnRJZCxcbiAgcGFnZVNsb3RQb3NpdGlvbixcbn06IENtc1N0cnVjdHVyZU9wdGlvbnMgPSB7fSk6IENtc1N0cnVjdHVyZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogQ21zU3RydWN0dXJlQ29uZmlnID0geyBjbXNTdHJ1Y3R1cmU6IHt9IH07XG5cbiAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgY29uZmlnLmNtc1N0cnVjdHVyZSA9IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgW2NvbXBvbmVudElkXToge1xuICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnRJZCxcbiAgICAgICAgICBmbGV4VHlwZTogY29tcG9uZW50SWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBpZiAoY29tcG9uZW50SWQgJiYgcGFnZVNsb3RQb3NpdGlvbikge1xuICAgIGNvbmZpZy5jbXNTdHJ1Y3R1cmUuc2xvdHMgPSB7XG4gICAgICBbcGFnZVNsb3RQb3NpdGlvbl06IHsgY29tcG9uZW50SWRzOiBbY29tcG9uZW50SWRdIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTGF5b3V0Q29uZmlnKHtcbiAgcGFnZVRlbXBsYXRlLFxuICBwYWdlU2xvdFBvc2l0aW9uLFxuICBicmVha3BvaW50LFxuICBzZWN0aW9uLFxufTogQ21zU3RydWN0dXJlT3B0aW9ucyA9IHt9KTogTGF5b3V0Q29uZmlnIHtcbiAgY29uc3QgbGF5b3V0Q29uZmlnOiBMYXlvdXRDb25maWcgPSB7fTtcbiAgaWYgKHBhZ2VUZW1wbGF0ZSAmJiBwYWdlU2xvdFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlU2xvdHM6IGFueSA9IHt9O1xuICAgIGlmIChicmVha3BvaW50KSB7XG4gICAgICBwYWdlVGVtcGxhdGVTbG90c1ticmVha3BvaW50XSA9IHtcbiAgICAgICAgc2xvdHM6IFtwYWdlU2xvdFBvc2l0aW9uXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2VUZW1wbGF0ZVNsb3RzLnNsb3RzID0gW3BhZ2VTbG90UG9zaXRpb25dO1xuICAgIH1cbiAgICBsYXlvdXRDb25maWcubGF5b3V0U2xvdHMgPSB7XG4gICAgICBbcGFnZVRlbXBsYXRlXTogcGFnZVRlbXBsYXRlU2xvdHMsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChzZWN0aW9uICYmIHBhZ2VTbG90UG9zaXRpb24pIHtcbiAgICBjb25zdCBzZWN0aW9uU2xvdHM6IGFueSA9IHt9O1xuICAgIGlmIChicmVha3BvaW50KSB7XG4gICAgICBzZWN0aW9uU2xvdHNbYnJlYWtwb2ludF0gPSB7IHNsb3RzOiBbcGFnZVNsb3RQb3NpdGlvbl0gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvblNsb3RzLnNsb3RzID0gW3BhZ2VTbG90UG9zaXRpb25dO1xuICAgIH1cbiAgICBpZiAobGF5b3V0Q29uZmlnLmxheW91dFNsb3RzKSB7XG4gICAgICBsYXlvdXRDb25maWcubGF5b3V0U2xvdHNbc2VjdGlvbl0gPSBzZWN0aW9uU2xvdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheW91dENvbmZpZy5sYXlvdXRTbG90cyA9IHtcbiAgICAgICAgW3NlY3Rpb25dOiBzZWN0aW9uU2xvdHMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGF5b3V0Q29uZmlnO1xufVxuIl19