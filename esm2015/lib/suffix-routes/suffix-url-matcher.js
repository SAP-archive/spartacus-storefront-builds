/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SuffixRoute() { }
if (false) {
    /** @type {?} */
    SuffixRoute.prototype.data;
}
/**
 * Matches the pattern '[ ** / ] marker / :paramName [ / ** ]'
 *
 * @param {?} segments
 * @param {?} _segmentGroup
 * @param {?} route
 * @return {?}
 */
export function suffixUrlMatcher(segments, _segmentGroup, route) {
    /** @type {?} */
    const config = route.data.cxSuffixUrlMatcher;
    const { marker, paramName } = config;
    /** @type {?} */
    const precedingParamName = config.precedingParamName || 'param';
    /** @type {?} */
    const markerIndex = findLastIndex(segments, ({ path }) => path === marker);
    /** @type {?} */
    const isMarkerLastSegment = markerIndex === segments.length - 1;
    if (markerIndex === -1 || isMarkerLastSegment) {
        return null;
    }
    /** @type {?} */
    const paramIndex = markerIndex + 1;
    /** @type {?} */
    const posParams = {
        [paramName]: segments[paramIndex],
    };
    for (let i = 0; i < markerIndex; i++) {
        posParams[`${precedingParamName}${i}`] = segments[i];
    }
    return { consumed: segments.slice(0, paramIndex + 1), posParams };
}
/**
 * @template T
 * @param {?} elements
 * @param {?} predicate
 * @return {?}
 */
export function findLastIndex(elements, predicate) {
    for (let index = elements.length - 1; index >= 0; index--) {
        if (predicate(elements[index])) {
            return index;
        }
    }
    return -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXVybC1tYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXVybC1tYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxpQ0FRQzs7O0lBUEMsMkJBTUU7Ozs7Ozs7Ozs7QUFXSixNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFFBQXNCLEVBQ3RCLGFBQThCLEVBQzlCLEtBQWtCOztVQUVaLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtVQUN0QyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNOztVQUM5QixrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksT0FBTzs7VUFFekQsV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDOztVQUNwRSxtQkFBbUIsR0FBRyxXQUFXLEtBQUssUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBRS9ELElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixFQUFFO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O1VBRUssVUFBVSxHQUFHLFdBQVcsR0FBRyxDQUFDOztVQUM1QixTQUFTLEdBQW1DO1FBQ2hELENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQztLQUNsQztJQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsU0FBUyxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUNwRSxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBSSxRQUFhLEVBQUUsU0FBNkI7SUFDM0UsS0FBSyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3pELElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVXJsU2VnbWVudCxcbiAgVXJsTWF0Y2hSZXN1bHQsXG4gIFJvdXRlLFxuICBVcmxTZWdtZW50R3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VmZml4Um91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gIGRhdGE6IHtcbiAgICBjeFN1ZmZpeFVybE1hdGNoZXI6IHtcbiAgICAgIG1hcmtlcjogc3RyaW5nO1xuICAgICAgcGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgICBwcmVjZWRpbmdQYXJhbU5hbWU/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBNYXRjaGVzIHRoZSBwYXR0ZXJuICdbICoqIC8gXSBtYXJrZXIgLyA6cGFyYW1OYW1lIFsgLyAqKiBdJ1xuICpcbiAqIEBwYXJhbSBtYXJrZXIgcGhyYXNlIHRoYXQgaW5kaWNhdGVzIHRoZSBzdGFydCBvZiB0aGUgbWF0Y2hcbiAqIEBwYXJhbSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIHByZXNlbnQgYWZ0ZXIgdGhlIG1hcmtlclxuICogQHBhcmFtIHByZWNlZGluZ1BhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgZm9yIGV2ZXJ5IHByZWNlZGluZyB1cmwgc2VnbWVudFxuICogICAgICAgIGkuZS4gYHBhcmFtYCB3aWxsIHJlc3VsdCBpbiBgcGFyYW0wYCwgYHBhcmFtMWAsIC4uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VmZml4VXJsTWF0Y2hlcihcbiAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSxcbiAgX3NlZ21lbnRHcm91cDogVXJsU2VnbWVudEdyb3VwLFxuICByb3V0ZTogU3VmZml4Um91dGVcbik6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gIGNvbnN0IGNvbmZpZyA9IHJvdXRlLmRhdGEuY3hTdWZmaXhVcmxNYXRjaGVyO1xuICBjb25zdCB7IG1hcmtlciwgcGFyYW1OYW1lIH0gPSBjb25maWc7XG4gIGNvbnN0IHByZWNlZGluZ1BhcmFtTmFtZSA9IGNvbmZpZy5wcmVjZWRpbmdQYXJhbU5hbWUgfHwgJ3BhcmFtJztcblxuICBjb25zdCBtYXJrZXJJbmRleCA9IGZpbmRMYXN0SW5kZXgoc2VnbWVudHMsICh7IHBhdGggfSkgPT4gcGF0aCA9PT0gbWFya2VyKTtcbiAgY29uc3QgaXNNYXJrZXJMYXN0U2VnbWVudCA9IG1hcmtlckluZGV4ID09PSBzZWdtZW50cy5sZW5ndGggLSAxO1xuXG4gIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaXNNYXJrZXJMYXN0U2VnbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcGFyYW1JbmRleCA9IG1hcmtlckluZGV4ICsgMTtcbiAgY29uc3QgcG9zUGFyYW1zOiB7IFtuYW1lOiBzdHJpbmddOiBVcmxTZWdtZW50IH0gPSB7XG4gICAgW3BhcmFtTmFtZV06IHNlZ21lbnRzW3BhcmFtSW5kZXhdLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya2VySW5kZXg7IGkrKykge1xuICAgIHBvc1BhcmFtc1tgJHtwcmVjZWRpbmdQYXJhbU5hbWV9JHtpfWBdID0gc2VnbWVudHNbaV07XG4gIH1cblxuICByZXR1cm4geyBjb25zdW1lZDogc2VnbWVudHMuc2xpY2UoMCwgcGFyYW1JbmRleCArIDEpLCBwb3NQYXJhbXMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMYXN0SW5kZXg8VD4oZWxlbWVudHM6IFRbXSwgcHJlZGljYXRlOiAoZWw6IFQpID0+IGJvb2xlYW4pIHtcbiAgZm9yIChsZXQgaW5kZXggPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgaWYgKHByZWRpY2F0ZShlbGVtZW50c1tpbmRleF0pKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbiJdfQ==