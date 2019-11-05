/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FormatTimerPipe {
    /**
     * @param {?} totalSeconds
     * @return {?}
     */
    transform(totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        /** @type {?} */
        const minutes = Math.floor(totalSeconds / 60);
        /** @type {?} */
        const seconds = totalSeconds % 60;
        /** @type {?} */
        let zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        /** @type {?} */
        const zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return `${zeroPaddedMinutes}:${zeroPaddedSeconds}`;
    }
}
FormatTimerPipe.decorators = [
    { type: Pipe, args: [{
                name: 'formatTimer',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRpbWVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxlQUFlOzs7OztJQUMxQixTQUFTLENBQUMsWUFBb0I7UUFDNUIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDbEI7O2NBQ0ssT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7Y0FDL0MsT0FBTyxHQUFXLFlBQVksR0FBRyxFQUFFOztZQUNyQyxpQkFBeUI7UUFDN0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFO1lBQ2hCLGlCQUFpQixHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxpQkFBaUIsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ2xDOztjQUNLLGlCQUFpQixHQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLEdBQUcsaUJBQWlCLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7WUFsQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxhQUFhO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmb3JtYXRUaW1lcicsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdFRpbWVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odG90YWxTZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0b3RhbFNlY29uZHMgPCAwKSB7XG4gICAgICB0b3RhbFNlY29uZHMgPSAwO1xuICAgIH1cbiAgICBjb25zdCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSB0b3RhbFNlY29uZHMgJSA2MDtcbiAgICBsZXQgemVyb1BhZGRlZE1pbnV0ZXM6IHN0cmluZztcbiAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICB6ZXJvUGFkZGVkTWludXRlcyA9ICgnMDAnICsgbWludXRlcykuc2xpY2UoLTIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB6ZXJvUGFkZGVkTWludXRlcyA9IG1pbnV0ZXMgKyAnJztcbiAgICB9XG4gICAgY29uc3QgemVyb1BhZGRlZFNlY29uZHM6IHN0cmluZyA9ICgnMDAnICsgc2Vjb25kcykuc2xpY2UoLTIpO1xuICAgIHJldHVybiBgJHt6ZXJvUGFkZGVkTWludXRlc306JHt6ZXJvUGFkZGVkU2Vjb25kc31gO1xuICB9XG59XG4iXX0=