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
    var _a;
    /** @type {?} */
    var config = route.data.cxSuffixUrlMatcher;
    var marker = config.marker, paramName = config.paramName;
    /** @type {?} */
    var precedingParamName = config.precedingParamName || 'param';
    /** @type {?} */
    var markerIndex = findLastIndex(segments, function (_a) {
        var path = _a.path;
        return path === marker;
    });
    /** @type {?} */
    var isMarkerLastSegment = markerIndex === segments.length - 1;
    if (markerIndex === -1 || isMarkerLastSegment) {
        return null;
    }
    /** @type {?} */
    var paramIndex = markerIndex + 1;
    /** @type {?} */
    var posParams = (_a = {},
        _a[paramName] = segments[paramIndex],
        _a);
    for (var i = 0; i < markerIndex; i++) {
        posParams["" + precedingParamName + i] = segments[i];
    }
    return { consumed: segments.slice(0, paramIndex + 1), posParams: posParams };
}
/**
 * @template T
 * @param {?} elements
 * @param {?} predicate
 * @return {?}
 */
export function findLastIndex(elements, predicate) {
    for (var index = elements.length - 1; index >= 0; index--) {
        if (predicate(elements[index])) {
            return index;
        }
    }
    return -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXVybC1tYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9yb3V0aW5nL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXVybC1tYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxpQ0FRQzs7O0lBUEMsMkJBTUU7Ozs7Ozs7Ozs7QUFXSixNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFFBQXNCLEVBQ3RCLGFBQThCLEVBQzlCLEtBQWtCOzs7UUFFWixNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7SUFDcEMsSUFBQSxzQkFBTSxFQUFFLDRCQUFTOztRQUNuQixrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLElBQUksT0FBTzs7UUFFekQsV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBQyxFQUFRO1lBQU4sY0FBSTtRQUFPLE9BQUEsSUFBSSxLQUFLLE1BQU07SUFBZixDQUFlLENBQUM7O1FBQ3BFLG1CQUFtQixHQUFHLFdBQVcsS0FBSyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7SUFFL0QsSUFBSSxXQUFXLEtBQUssQ0FBQyxDQUFDLElBQUksbUJBQW1CLEVBQUU7UUFDN0MsT0FBTyxJQUFJLENBQUM7S0FDYjs7UUFFSyxVQUFVLEdBQUcsV0FBVyxHQUFHLENBQUM7O1FBQzVCLFNBQVM7UUFDYixHQUFDLFNBQVMsSUFBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1dBQ2xDO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxTQUFTLENBQUMsS0FBRyxrQkFBa0IsR0FBRyxDQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO0FBQ3BFLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFJLFFBQWEsRUFBRSxTQUE2QjtJQUMzRSxLQUFLLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDekQsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBVcmxTZWdtZW50LFxuICBVcmxNYXRjaFJlc3VsdCxcbiAgUm91dGUsXG4gIFVybFNlZ21lbnRHcm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBTdWZmaXhSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgZGF0YToge1xuICAgIGN4U3VmZml4VXJsTWF0Y2hlcjoge1xuICAgICAgbWFya2VyOiBzdHJpbmc7XG4gICAgICBwYXJhbU5hbWU6IHN0cmluZztcbiAgICAgIHByZWNlZGluZ1BhcmFtTmFtZT86IHN0cmluZztcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIE1hdGNoZXMgdGhlIHBhdHRlcm4gJ1sgKiogLyBdIG1hcmtlciAvIDpwYXJhbU5hbWUgWyAvICoqIF0nXG4gKlxuICogQHBhcmFtIG1hcmtlciBwaHJhc2UgdGhhdCBpbmRpY2F0ZXMgdGhlIHN0YXJ0IG9mIHRoZSBtYXRjaFxuICogQHBhcmFtIHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgcHJlc2VudCBhZnRlciB0aGUgbWFya2VyXG4gKiBAcGFyYW0gcHJlY2VkaW5nUGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlciBmb3IgZXZlcnkgcHJlY2VkaW5nIHVybCBzZWdtZW50XG4gKiAgICAgICAgaS5lLiBgcGFyYW1gIHdpbGwgcmVzdWx0IGluIGBwYXJhbTBgLCBgcGFyYW0xYCwgLi4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWZmaXhVcmxNYXRjaGVyKFxuICBzZWdtZW50czogVXJsU2VnbWVudFtdLFxuICBfc2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAsXG4gIHJvdXRlOiBTdWZmaXhSb3V0ZVxuKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgY29uc3QgY29uZmlnID0gcm91dGUuZGF0YS5jeFN1ZmZpeFVybE1hdGNoZXI7XG4gIGNvbnN0IHsgbWFya2VyLCBwYXJhbU5hbWUgfSA9IGNvbmZpZztcbiAgY29uc3QgcHJlY2VkaW5nUGFyYW1OYW1lID0gY29uZmlnLnByZWNlZGluZ1BhcmFtTmFtZSB8fCAncGFyYW0nO1xuXG4gIGNvbnN0IG1hcmtlckluZGV4ID0gZmluZExhc3RJbmRleChzZWdtZW50cywgKHsgcGF0aCB9KSA9PiBwYXRoID09PSBtYXJrZXIpO1xuICBjb25zdCBpc01hcmtlckxhc3RTZWdtZW50ID0gbWFya2VySW5kZXggPT09IHNlZ21lbnRzLmxlbmd0aCAtIDE7XG5cbiAgaWYgKG1hcmtlckluZGV4ID09PSAtMSB8fCBpc01hcmtlckxhc3RTZWdtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBwYXJhbUluZGV4ID0gbWFya2VySW5kZXggKyAxO1xuICBjb25zdCBwb3NQYXJhbXM6IHsgW25hbWU6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHtcbiAgICBbcGFyYW1OYW1lXTogc2VnbWVudHNbcGFyYW1JbmRleF0sXG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJJbmRleDsgaSsrKSB7XG4gICAgcG9zUGFyYW1zW2Ake3ByZWNlZGluZ1BhcmFtTmFtZX0ke2l9YF0gPSBzZWdtZW50c1tpXTtcbiAgfVxuXG4gIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJhbUluZGV4ICsgMSksIHBvc1BhcmFtcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3RJbmRleDxUPihlbGVtZW50czogVFtdLCBwcmVkaWNhdGU6IChlbDogVCkgPT4gYm9vbGVhbikge1xuICBmb3IgKGxldCBpbmRleCA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBpZiAocHJlZGljYXRlKGVsZW1lbnRzW2luZGV4XSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuIl19