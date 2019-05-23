/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} match
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} match
     * @return {?}
     */
    function (text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), "<span class=\"highlight\">" + match.trim() + "</span>");
    };
    HighlightPipe.decorators = [
        { type: Pipe, args: [{ name: 'cxHighlight' },] }
    ];
    return HighlightPipe;
}());
export { HighlightPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFXQSxDQUFDOzs7Ozs7SUFUQyxpQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxLQUFjO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNqQixLQUFLLENBQUMsSUFBSSxFQUFFLEVBQ1osK0JBQTJCLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBUyxDQUNqRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTs7SUFXN0Isb0JBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeEhpZ2hsaWdodCcgfSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIG1hdGNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZShcbiAgICAgIG1hdGNoLnRyaW0oKSxcbiAgICAgIGA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPiR7bWF0Y2gudHJpbSgpfTwvc3Bhbj5gXG4gICAgKTtcbiAgfVxufVxuIl19