import { isDevMode } from '@angular/core';
/**
 * Matches the pattern '[ ** / ] marker / :paramName'
 *
 * @param marker phrase that indicates the start of the match
 * @param paramName name of the parameter present after the marker
 * @param precedingParamName name of the parameter for every preceding url segment
 *        i.e. `param` will result in `param0`, `param1`, ...
 */
export function getSuffixUrlMatcher(_a) {
    var marker = _a.marker, paramName = _a.paramName, precedingParamName = _a.precedingParamName;
    precedingParamName = precedingParamName || 'param';
    var matcher = function suffixUrlMatcher(segments) {
        var _a;
        var markerIndex = findLastIndex(segments, function (_a) {
            var path = _a.path;
            return path === marker;
        });
        var isMarkerLastSegment = markerIndex === segments.length - 1;
        if (markerIndex === -1 || isMarkerLastSegment) {
            return null;
        }
        var paramIndex = markerIndex + 1;
        var posParams = (_a = {},
            _a[paramName] = segments[paramIndex],
            _a);
        for (var i = 0; i < markerIndex; i++) {
            posParams["" + precedingParamName + i] = segments[i];
        }
        return { consumed: segments.slice(0, paramIndex + 1), posParams: posParams };
    };
    if (isDevMode()) {
        matcher['_suffixRouteConfig'] = { marker: marker, paramName: paramName, precedingParamName: precedingParamName }; // property added for easier debugging of routes
    }
    return matcher;
}
function findLastIndex(elements, predicate) {
    for (var index = elements.length - 1; index >= 0; index--) {
        if (predicate(elements[index])) {
            return index;
        }
    }
    return -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXVybC1tYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9yb3V0aW5nL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXVybC1tYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxFQVFuQztRQVBDLGtCQUFNLEVBQ04sd0JBQVMsRUFDVCwwQ0FBa0I7SUFNbEIsa0JBQWtCLEdBQUcsa0JBQWtCLElBQUksT0FBTyxDQUFDO0lBQ25ELElBQU0sT0FBTyxHQUFHLFNBQVMsZ0JBQWdCLENBQ3ZDLFFBQXNCOztRQUV0QixJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQU8sT0FBQSxJQUFJLEtBQUssTUFBTTtRQUFmLENBQWUsQ0FBQyxDQUFDO1FBQzNFLElBQU0sbUJBQW1CLEdBQUcsV0FBVyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhFLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLFVBQVUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQU0sU0FBUztZQUNiLEdBQUMsU0FBUyxJQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7ZUFDbEMsQ0FBQztRQUVGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsU0FBUyxDQUFDLEtBQUcsa0JBQWtCLEdBQUcsQ0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQztJQUNwRSxDQUFDLENBQUM7SUFFRixJQUFJLFNBQVMsRUFBRSxFQUFFO1FBQ2YsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxNQUFNLFFBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxrQkFBa0Isb0JBQUEsRUFBRSxDQUFDLENBQUMsZ0RBQWdEO0tBQzVIO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFJLFFBQWEsRUFBRSxTQUE2QjtJQUNwRSxLQUFLLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDekQsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybE1hdGNoUmVzdWx0LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBNYXRjaGVzIHRoZSBwYXR0ZXJuICdbICoqIC8gXSBtYXJrZXIgLyA6cGFyYW1OYW1lJ1xuICpcbiAqIEBwYXJhbSBtYXJrZXIgcGhyYXNlIHRoYXQgaW5kaWNhdGVzIHRoZSBzdGFydCBvZiB0aGUgbWF0Y2hcbiAqIEBwYXJhbSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyIHByZXNlbnQgYWZ0ZXIgdGhlIG1hcmtlclxuICogQHBhcmFtIHByZWNlZGluZ1BhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXIgZm9yIGV2ZXJ5IHByZWNlZGluZyB1cmwgc2VnbWVudFxuICogICAgICAgIGkuZS4gYHBhcmFtYCB3aWxsIHJlc3VsdCBpbiBgcGFyYW0wYCwgYHBhcmFtMWAsIC4uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VmZml4VXJsTWF0Y2hlcih7XG4gIG1hcmtlcixcbiAgcGFyYW1OYW1lLFxuICBwcmVjZWRpbmdQYXJhbU5hbWUsXG59OiB7XG4gIG1hcmtlcjogc3RyaW5nO1xuICBwYXJhbU5hbWU6IHN0cmluZztcbiAgcHJlY2VkaW5nUGFyYW1OYW1lPzogc3RyaW5nO1xufSkge1xuICBwcmVjZWRpbmdQYXJhbU5hbWUgPSBwcmVjZWRpbmdQYXJhbU5hbWUgfHwgJ3BhcmFtJztcbiAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIHN1ZmZpeFVybE1hdGNoZXIoXG4gICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXVxuICApOiBVcmxNYXRjaFJlc3VsdCB8IG51bGwge1xuICAgIGNvbnN0IG1hcmtlckluZGV4ID0gZmluZExhc3RJbmRleChzZWdtZW50cywgKHsgcGF0aCB9KSA9PiBwYXRoID09PSBtYXJrZXIpO1xuICAgIGNvbnN0IGlzTWFya2VyTGFzdFNlZ21lbnQgPSBtYXJrZXJJbmRleCA9PT0gc2VnbWVudHMubGVuZ3RoIC0gMTtcblxuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaXNNYXJrZXJMYXN0U2VnbWVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1JbmRleCA9IG1hcmtlckluZGV4ICsgMTtcbiAgICBjb25zdCBwb3NQYXJhbXM6IHsgW25hbWU6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHtcbiAgICAgIFtwYXJhbU5hbWVdOiBzZWdtZW50c1twYXJhbUluZGV4XSxcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJJbmRleDsgaSsrKSB7XG4gICAgICBwb3NQYXJhbXNbYCR7cHJlY2VkaW5nUGFyYW1OYW1lfSR7aX1gXSA9IHNlZ21lbnRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJhbUluZGV4ICsgMSksIHBvc1BhcmFtcyB9O1xuICB9O1xuXG4gIGlmIChpc0Rldk1vZGUoKSkge1xuICAgIG1hdGNoZXJbJ19zdWZmaXhSb3V0ZUNvbmZpZyddID0geyBtYXJrZXIsIHBhcmFtTmFtZSwgcHJlY2VkaW5nUGFyYW1OYW1lIH07IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRMYXN0SW5kZXg8VD4oZWxlbWVudHM6IFRbXSwgcHJlZGljYXRlOiAoZWw6IFQpID0+IGJvb2xlYW4pIHtcbiAgZm9yIChsZXQgaW5kZXggPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgaWYgKHByZWRpY2F0ZShlbGVtZW50c1tpbmRleF0pKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbiJdfQ==