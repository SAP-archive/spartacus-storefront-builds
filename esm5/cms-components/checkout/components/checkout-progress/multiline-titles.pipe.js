import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var MultiLinePipe = /** @class */ (function () {
    function MultiLinePipe() {
    }
    MultiLinePipe.prototype.transform = function (value) {
        var lastIndex = value.lastIndexOf(' ');
        if (lastIndex === -1)
            return value;
        return (value.substring(0, lastIndex) +
            '<br />' +
            value.substring(lastIndex, value.length).trim());
    };
    MultiLinePipe = __decorate([
        Pipe({
            name: 'cxMultiLine',
        })
    ], MultiLinePipe);
    return MultiLinePipe;
}());
export { MultiLinePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5lLXRpdGxlcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9tdWx0aWxpbmUtdGl0bGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BEO0lBQUE7SUFZQSxDQUFDO0lBWEMsaUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6QyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVuQyxPQUFPLENBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDO1lBQzdCLFFBQVE7WUFDUixLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ2hELENBQUM7SUFDSixDQUFDO0lBWFUsYUFBYTtRQUh6QixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsYUFBYTtTQUNwQixDQUFDO09BQ1csYUFBYSxDQVl6QjtJQUFELG9CQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3hNdWx0aUxpbmUnLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUxpbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignICcpO1xuXG4gICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHJldHVybiB2YWx1ZTtcblxuICAgIHJldHVybiAoXG4gICAgICB2YWx1ZS5zdWJzdHJpbmcoMCwgbGFzdEluZGV4KSArXG4gICAgICAnPGJyIC8+JyArXG4gICAgICB2YWx1ZS5zdWJzdHJpbmcobGFzdEluZGV4LCB2YWx1ZS5sZW5ndGgpLnRyaW0oKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==