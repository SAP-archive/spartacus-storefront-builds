/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var FormatTimerPipe = /** @class */ (function () {
    function FormatTimerPipe() {
    }
    /**
     * @param {?} totalSeconds
     * @return {?}
     */
    FormatTimerPipe.prototype.transform = /**
     * @param {?} totalSeconds
     * @return {?}
     */
    function (totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        /** @type {?} */
        var minutes = Math.floor(totalSeconds / 60);
        /** @type {?} */
        var seconds = totalSeconds % 60;
        /** @type {?} */
        var zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        /** @type {?} */
        var zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return zeroPaddedMinutes + ":" + zeroPaddedSeconds;
    };
    FormatTimerPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'formatTimer',
                },] }
    ];
    return FormatTimerPipe;
}());
export { FormatTimerPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRpbWVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFtQkEsQ0FBQzs7Ozs7SUFmQyxtQ0FBUzs7OztJQUFULFVBQVUsWUFBb0I7UUFDNUIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDbEI7O1lBQ0ssT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7WUFDL0MsT0FBTyxHQUFXLFlBQVksR0FBRyxFQUFFOztZQUNyQyxpQkFBeUI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxpQkFBaUIsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ2xDOztZQUNLLGlCQUFpQixHQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFVLGlCQUFpQixTQUFJLGlCQUFtQixDQUFDO0lBQ3JELENBQUM7O2dCQWxCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7aUJBQ3BCOztJQWlCRCxzQkFBQztDQUFBLEFBbkJELElBbUJDO1NBaEJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Zvcm1hdFRpbWVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0VGltZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0b3RhbFNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHRvdGFsU2Vjb25kcyA8IDApIHtcbiAgICAgIHRvdGFsU2Vjb25kcyA9IDA7XG4gICAgfVxuICAgIGNvbnN0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHM6IG51bWJlciA9IHRvdGFsU2Vjb25kcyAlIDYwO1xuICAgIGxldCB6ZXJvUGFkZGVkTWludXRlczogc3RyaW5nO1xuICAgIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICAgIHplcm9QYWRkZWRNaW51dGVzID0gKCcwMCcgKyBtaW51dGVzKS5zbGljZSgtMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHplcm9QYWRkZWRNaW51dGVzID0gbWludXRlcyArICcnO1xuICAgIH1cbiAgICBjb25zdCB6ZXJvUGFkZGVkU2Vjb25kczogc3RyaW5nID0gKCcwMCcgKyBzZWNvbmRzKS5zbGljZSgtMik7XG4gICAgcmV0dXJuIGAke3plcm9QYWRkZWRNaW51dGVzfToke3plcm9QYWRkZWRTZWNvbmRzfWA7XG4gIH1cbn1cbiJdfQ==