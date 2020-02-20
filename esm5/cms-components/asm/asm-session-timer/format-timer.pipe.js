import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var FormatTimerPipe = /** @class */ (function () {
    function FormatTimerPipe() {
    }
    FormatTimerPipe.prototype.transform = function (totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        var zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        var zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return zeroPaddedMinutes + ":" + zeroPaddedSeconds;
    };
    FormatTimerPipe = __decorate([
        Pipe({
            name: 'formatTimer',
        })
    ], FormatTimerPipe);
    return FormatTimerPipe;
}());
export { FormatTimerPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRpbWVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLXNlc3Npb24tdGltZXIvZm9ybWF0LXRpbWVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BEO0lBQUE7SUFnQkEsQ0FBQztJQWZDLG1DQUFTLEdBQVQsVUFBVSxZQUFvQjtRQUM1QixJQUFJLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDcEIsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQU0sT0FBTyxHQUFXLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxpQkFBeUIsQ0FBQztRQUM5QixJQUFJLE9BQU8sR0FBRyxFQUFFLEVBQUU7WUFDaEIsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLGlCQUFpQixHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbEM7UUFDRCxJQUFNLGlCQUFpQixHQUFXLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQVUsaUJBQWlCLFNBQUksaUJBQW1CLENBQUM7SUFDckQsQ0FBQztJQWZVLGVBQWU7UUFIM0IsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLGFBQWE7U0FDcEIsQ0FBQztPQUNXLGVBQWUsQ0FnQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmb3JtYXRUaW1lcicsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdFRpbWVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odG90YWxTZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICh0b3RhbFNlY29uZHMgPCAwKSB7XG4gICAgICB0b3RhbFNlY29uZHMgPSAwO1xuICAgIH1cbiAgICBjb25zdCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSB0b3RhbFNlY29uZHMgJSA2MDtcbiAgICBsZXQgemVyb1BhZGRlZE1pbnV0ZXM6IHN0cmluZztcbiAgICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgICB6ZXJvUGFkZGVkTWludXRlcyA9ICgnMDAnICsgbWludXRlcykuc2xpY2UoLTIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB6ZXJvUGFkZGVkTWludXRlcyA9IG1pbnV0ZXMgKyAnJztcbiAgICB9XG4gICAgY29uc3QgemVyb1BhZGRlZFNlY29uZHM6IHN0cmluZyA9ICgnMDAnICsgc2Vjb25kcykuc2xpY2UoLTIpO1xuICAgIHJldHVybiBgJHt6ZXJvUGFkZGVkTWludXRlc306JHt6ZXJvUGFkZGVkU2Vjb25kc31gO1xuICB9XG59XG4iXX0=