import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkipLink, SkipLinkConfig, SkipLinkScrollPosition, } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
var SkipLinkService = /** @class */ (function () {
    function SkipLinkService(config) {
        this.config = config;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    SkipLinkService.prototype.getSkipLinks = function () {
        return this.skipLinks$;
    };
    SkipLinkService.prototype.add = function (key, target) {
        var found = this.config.skipLinks.find(function (skipLink) { return skipLink.key === key; });
        if (found) {
            var existing = this.skipLinks$.value;
            existing.splice(this.getSkipLinkIndexInArray(key), 0, {
                target: target,
                i18nKey: found.i18nKey,
                position: found.position,
                key: key,
            });
            this.skipLinks$.next(existing);
        }
    };
    SkipLinkService.prototype.remove = function (key) {
        var found = this.config.skipLinks.find(function (skipLink) { return skipLink.key === key; });
        if (found) {
            var existing = this.skipLinks$.value;
            existing = existing.filter(function (skipLink) { return skipLink.key !== key; });
            this.skipLinks$.next(existing);
        }
    };
    SkipLinkService.prototype.scrollToTarget = function (target, position, event) {
        target = target.parentNode;
        event.target.blur();
        var options = position === SkipLinkScrollPosition.AFTER ? { inline: 'end' } : {};
        target.scrollIntoView(options);
    };
    SkipLinkService.prototype.getSkipLinkIndexInArray = function (key) {
        var index = this.config.skipLinks.findIndex(function (skipLink) { return skipLink.key === key; });
        var _loop_1 = function () {
            index--;
            var previous = this_1.config.skipLinks[index];
            if (previous) {
                var existing = this_1.skipLinks$.value;
                var found = existing.findIndex(function (skipLink) { return skipLink.key === previous.key; });
                if (found > -1) {
                    return { value: found + 1 };
                }
            }
        };
        var this_1 = this;
        while (index > 0) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return 0;
    };
    SkipLinkService.ctorParameters = function () { return [
        { type: SkipLinkConfig }
    ]; };
    SkipLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig)); }, token: SkipLinkService, providedIn: "root" });
    SkipLinkService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SkipLinkService);
    return SkipLinkService;
}());
export { SkipLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNkLHNCQUFzQixHQUN2QixNQUFNLDRCQUE0QixDQUFDOzs7QUFLcEM7SUFHRSx5QkFBc0IsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFGcEMsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFhLEVBQUUsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUVoRCxzQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw2QkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLE1BQW1CO1FBQ2xDLElBQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDaEQsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBcEIsQ0FBb0IsQ0FDakMsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsR0FBRyxFQUFFLEdBQUc7YUFDVCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixJQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2hELFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQXBCLENBQW9CLENBQ2pDLENBQUM7UUFFRixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQXBCLENBQW9CLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQ0UsTUFBbUIsRUFDbkIsUUFBZ0MsRUFDaEMsS0FBaUI7UUFFakIsTUFBTSxHQUFnQixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxNQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsSUFBTSxPQUFPLEdBQ1gsUUFBUSxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVyRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFUyxpREFBdUIsR0FBakMsVUFBa0MsR0FBVztRQUMzQyxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQXBCLENBQW9CLENBQ2pDLENBQUM7O1lBR0EsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFNLFFBQVEsR0FBYSxPQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBTSxRQUFRLEdBQWUsT0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxJQUFNLEtBQUssR0FBVyxRQUFRLENBQUMsU0FBUyxDQUN0QyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEdBQUcsRUFBN0IsQ0FBNkIsQ0FDMUMsQ0FBQztnQkFDRixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQ0FDUCxLQUFLLEdBQUcsQ0FBQztpQkFDakI7YUFDRjs7O1FBWEgsT0FBTyxLQUFLLEdBQUcsQ0FBQzs7OztTQVlmO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOztnQkFuRTZCLGNBQWM7OztJQUhqQyxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBdUUzQjswQkFsRkQ7Q0FrRkMsQUF2RUQsSUF1RUM7U0F2RVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgU2tpcExpbmssXG4gIFNraXBMaW5rQ29uZmlnLFxuICBTa2lwTGlua1Njcm9sbFBvc2l0aW9uLFxufSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICBwcml2YXRlIHNraXBMaW5rcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNraXBMaW5rW10+KFtdKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBTa2lwTGlua0NvbmZpZykge31cblxuICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcExpbmtzJDtcbiAgfVxuXG4gIGFkZChrZXk6IHN0cmluZywgdGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgIGV4aXN0aW5nLnNwbGljZSh0aGlzLmdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleSksIDAsIHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGkxOG5LZXk6IGZvdW5kLmkxOG5LZXksXG4gICAgICAgIHBvc2l0aW9uOiBmb3VuZC5wb3NpdGlvbixcbiAgICAgICAga2V5OiBrZXksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIHNraXBMaW5rID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgbGV0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3RpbmcgPSBleGlzdGluZy5maWx0ZXIoc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ICE9PSBrZXkpO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVGFyZ2V0KFxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb246IFNraXBMaW5rU2Nyb2xsUG9zaXRpb24sXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgdGFyZ2V0ID0gPEhUTUxFbGVtZW50PnRhcmdldC5wYXJlbnROb2RlO1xuICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgY29uc3Qgb3B0aW9uczogU2Nyb2xsSW50b1ZpZXdPcHRpb25zID1cbiAgICAgIHBvc2l0aW9uID09PSBTa2lwTGlua1Njcm9sbFBvc2l0aW9uLkFGVEVSID8geyBpbmxpbmU6ICdlbmQnIH0gOiB7fTtcblxuICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyhvcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZEluZGV4KFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgd2hpbGUgKGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGNvbnN0IHByZXZpb3VzOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rc1tpbmRleF07XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICAgIGNvbnN0IGZvdW5kOiBudW1iZXIgPSBleGlzdGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBwcmV2aW91cy5rZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZm91bmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=