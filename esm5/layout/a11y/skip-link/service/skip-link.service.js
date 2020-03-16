import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkipLink, SkipLinkConfig } from '../config/skip-link.config';
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
    SkipLinkService.prototype.scrollToTarget = function (skipLink) {
        var target = skipLink.target instanceof HTMLElement
            ? skipLink.target
            : skipLink.target.parentElement;
        // we force a tabindex if not available, to ensure we can focus into the element
        var currentTabIndex = target.getAttribute('tabindex');
        if (!currentTabIndex) {
            target.setAttribute('tabindex', '-1');
        }
        target.focus();
        // drop the tmp tabindex
        if (!currentTabIndex) {
            target.removeAttribute('tabindex');
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUt0RTtJQUdFLHlCQUFzQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUZwQyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFFVixDQUFDO0lBRWhELHNDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELDZCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsTUFBbUI7UUFDbEMsSUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFwQixDQUFvQixDQUNqQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sUUFBQTtnQkFDTixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsR0FBRyxLQUFBO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFwQixDQUFvQixDQUNqQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNqRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFwQixDQUFvQixDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLFFBQWtCO1FBQy9CLElBQU0sTUFBTSxHQUNWLFFBQVEsQ0FBQyxNQUFNLFlBQVksV0FBVztZQUNwQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDakIsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFrQixDQUFDLGFBQWEsQ0FBQztRQUVqRCxnRkFBZ0Y7UUFDaEYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBRUEsTUFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixNQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVTLGlEQUF1QixHQUFqQyxVQUFrQyxHQUFXO1FBQzNDLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDakQsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBcEIsQ0FBb0IsQ0FDakMsQ0FBQzs7WUFHQSxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQU0sUUFBUSxHQUFhLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFNLFFBQVEsR0FBZSxPQUFLLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELElBQU0sS0FBSyxHQUFXLFFBQVEsQ0FBQyxTQUFTLENBQ3RDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsR0FBRyxFQUE3QixDQUE2QixDQUMxQyxDQUFDO2dCQUNGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29DQUNQLEtBQUssR0FBRyxDQUFDO2lCQUNqQjthQUNGOzs7UUFYSCxPQUFPLEtBQUssR0FBRyxDQUFDOzs7O1NBWWY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQTFFNkIsY0FBYzs7O0lBSGpDLGVBQWU7UUFIM0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGVBQWUsQ0E4RTNCOzBCQXJGRDtDQXFGQyxBQTlFRCxJQThFQztTQTlFWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTa2lwTGluaywgU2tpcExpbmtDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICBwcml2YXRlIHNraXBMaW5rcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNraXBMaW5rW10+KFtdKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBTa2lwTGlua0NvbmZpZykge31cblxuICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcExpbmtzJDtcbiAgfVxuXG4gIGFkZChrZXk6IHN0cmluZywgdGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgIGV4aXN0aW5nLnNwbGljZSh0aGlzLmdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleSksIDAsIHtcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBpMThuS2V5OiBmb3VuZC5pMThuS2V5LFxuICAgICAgICBwb3NpdGlvbjogZm91bmQucG9zaXRpb24sXG4gICAgICAgIGtleSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcihza2lwTGluayA9PiBza2lwTGluay5rZXkgIT09IGtleSk7XG4gICAgICB0aGlzLnNraXBMaW5rcyQubmV4dChleGlzdGluZyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHNraXBMaW5rLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgID8gc2tpcExpbmsudGFyZ2V0XG4gICAgICAgIDogKHNraXBMaW5rLnRhcmdldCBhcyBFbGVtZW50KS5wYXJlbnRFbGVtZW50O1xuXG4gICAgLy8gd2UgZm9yY2UgYSB0YWJpbmRleCBpZiBub3QgYXZhaWxhYmxlLCB0byBlbnN1cmUgd2UgY2FuIGZvY3VzIGludG8gdGhlIGVsZW1lbnRcbiAgICBjb25zdCBjdXJyZW50VGFiSW5kZXggPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIGlmICghY3VycmVudFRhYkluZGV4KSB7XG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIH1cblxuICAgICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cbiAgICAvLyBkcm9wIHRoZSB0bXAgdGFiaW5kZXhcbiAgICBpZiAoIWN1cnJlbnRUYWJJbmRleCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmRJbmRleChcbiAgICAgIHNraXBMaW5rID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBjb25zdCBwcmV2aW91czogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3NbaW5kZXhdO1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgICBjb25zdCBmb3VuZDogbnVtYmVyID0gZXhpc3RpbmcuZmluZEluZGV4KFxuICAgICAgICAgIHNraXBMaW5rID0+IHNraXBMaW5rLmtleSA9PT0gcHJldmlvdXMua2V5XG4gICAgICAgICk7XG4gICAgICAgIGlmIChmb3VuZCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19