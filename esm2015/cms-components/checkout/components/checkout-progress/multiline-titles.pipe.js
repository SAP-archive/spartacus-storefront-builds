import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let MultiLinePipe = class MultiLinePipe {
    transform(value) {
        const lastIndex = value.lastIndexOf(' ');
        if (lastIndex === -1)
            return value;
        return (value.substring(0, lastIndex) +
            '<br />' +
            value.substring(lastIndex, value.length).trim());
    }
};
MultiLinePipe = __decorate([
    Pipe({
        name: 'cxMultiLine',
    })
], MultiLinePipe);
export { MultiLinePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5lLXRpdGxlcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9tdWx0aWxpbmUtdGl0bGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFDeEIsU0FBUyxDQUFDLEtBQWE7UUFDckIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6QyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVuQyxPQUFPLENBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDO1lBQzdCLFFBQVE7WUFDUixLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ2hELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpZLGFBQWE7SUFIekIsSUFBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLGFBQWE7S0FDcEIsQ0FBQztHQUNXLGFBQWEsQ0FZekI7U0FaWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeE11bHRpTGluZScsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpTGluZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHZhbHVlLmxhc3RJbmRleE9mKCcgJyk7XG5cbiAgICBpZiAobGFzdEluZGV4ID09PSAtMSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHZhbHVlLnN1YnN0cmluZygwLCBsYXN0SW5kZXgpICtcbiAgICAgICc8YnIgLz4nICtcbiAgICAgIHZhbHVlLnN1YnN0cmluZyhsYXN0SW5kZXgsIHZhbHVlLmxlbmd0aCkudHJpbSgpXG4gICAgKTtcbiAgfVxufVxuIl19