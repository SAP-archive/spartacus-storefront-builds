import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), "<span class=\"highlight\">" + match.trim() + "</span>");
    };
    HighlightPipe = __decorate([
        Pipe({ name: 'cxHighlight' })
    ], HighlightPipe);
    return HighlightPipe;
}());
export { HighlightPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBQUE7SUFVQSxDQUFDO0lBVEMsaUNBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxLQUFjO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNqQixLQUFLLENBQUMsSUFBSSxFQUFFLEVBQ1osK0JBQTJCLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBUyxDQUNqRCxDQUFDO0lBQ0osQ0FBQztJQVRVLGFBQWE7UUFEekIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDO09BQ2pCLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2N4SGlnaGxpZ2h0JyB9KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgbWF0Y2g/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKFxuICAgICAgbWF0Y2gudHJpbSgpLFxuICAgICAgYDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JHttYXRjaC50cmltKCl9PC9zcGFuPmBcbiAgICApO1xuICB9XG59XG4iXX0=