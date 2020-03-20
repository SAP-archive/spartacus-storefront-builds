import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus';
import { SkipLink, SkipLinkConfig } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
import * as i2 from "../../keyboard-focus/services/keyboard-focus.service";
var SkipLinkService = /** @class */ (function () {
    function SkipLinkService(config, keyboardFocusService) {
        this.config = config;
        this.keyboardFocusService = keyboardFocusService;
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
        // focus first focusable element in the
        var firstFocusable = this.keyboardFocusService.findFirstFocusable(target) || target;
        // we force a tabindex if not available, to ensure we can focus into the element
        var hasTabindex = firstFocusable.hasAttribute('tabindex');
        if (!hasTabindex) {
            firstFocusable.setAttribute('tabindex', '-1');
        }
        firstFocusable.focus();
        // drop the tmp tabindex
        if (!hasTabindex) {
            firstFocusable.removeAttribute('tabindex');
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
        { type: SkipLinkConfig },
        { type: KeyboardFocusService }
    ]; };
    SkipLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig), i0.ɵɵinject(i2.KeyboardFocusService)); }, token: SkipLinkService, providedIn: "root" });
    SkipLinkService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SkipLinkService);
    return SkipLinkService;
}());
export { SkipLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLdEU7SUFHRSx5QkFDWSxNQUFzQixFQUN0QixvQkFBMEM7UUFEMUMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUo5QyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFLdEQsQ0FBQztJQUVKLHNDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELDZCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsTUFBbUI7UUFDbEMsSUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFwQixDQUFvQixDQUNqQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sUUFBQTtnQkFDTixP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dCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9rZXlib2FyZC1mb2N1cyc7XG5pbXBvcnQgeyBTa2lwTGluaywgU2tpcExpbmtDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICBwcml2YXRlIHNraXBMaW5rcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNraXBMaW5rW10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTa2lwTGlua0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQga2V5Ym9hcmRGb2N1c1NlcnZpY2U6IEtleWJvYXJkRm9jdXNTZXJ2aWNlXG4gICkge31cblxuICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcExpbmtzJDtcbiAgfVxuXG4gIGFkZChrZXk6IHN0cmluZywgdGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgIGV4aXN0aW5nLnNwbGljZSh0aGlzLmdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleSksIDAsIHtcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBpMThuS2V5OiBmb3VuZC5pMThuS2V5LFxuICAgICAgICBwb3NpdGlvbjogZm91bmQucG9zaXRpb24sXG4gICAgICAgIGtleSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcihza2lwTGluayA9PiBza2lwTGluay5rZXkgIT09IGtleSk7XG4gICAgICB0aGlzLnNraXBMaW5rcyQubmV4dChleGlzdGluZyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHNraXBMaW5rLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgID8gc2tpcExpbmsudGFyZ2V0XG4gICAgICAgIDogKHNraXBMaW5rLnRhcmdldCBhcyBFbGVtZW50KS5wYXJlbnRFbGVtZW50O1xuXG4gICAgLy8gZm9jdXMgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlXG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPVxuICAgICAgdGhpcy5rZXlib2FyZEZvY3VzU2VydmljZS5maW5kRmlyc3RGb2N1c2FibGUodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cbiAgICAvLyB3ZSBmb3JjZSBhIHRhYmluZGV4IGlmIG5vdCBhdmFpbGFibGUsIHRvIGVuc3VyZSB3ZSBjYW4gZm9jdXMgaW50byB0aGUgZWxlbWVudFxuICAgIGNvbnN0IGhhc1RhYmluZGV4ID0gZmlyc3RGb2N1c2FibGUuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIGlmICghaGFzVGFiaW5kZXgpIHtcbiAgICAgIGZpcnN0Rm9jdXNhYmxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICBmaXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuXG4gICAgLy8gZHJvcCB0aGUgdG1wIHRhYmluZGV4XG4gICAgaWYgKCFoYXNUYWJpbmRleCkge1xuICAgICAgZmlyc3RGb2N1c2FibGUucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZEluZGV4KFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgd2hpbGUgKGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGNvbnN0IHByZXZpb3VzOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rc1tpbmRleF07XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICAgIGNvbnN0IGZvdW5kOiBudW1iZXIgPSBleGlzdGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBwcmV2aW91cy5rZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZm91bmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=