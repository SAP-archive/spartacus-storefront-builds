import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus/services/keyboard-focus.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLdEU7SUFHRSx5QkFDWSxNQUFzQixFQUN0QixvQkFBMEM7UUFEMUMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUo5QyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFLdEQsQ0FBQztJQUVKLHNDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELDZCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsTUFBbUI7UUFDbEMsSUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFwQixDQUFvQixDQUNuQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sUUFBQTtnQkFDTixP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dCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9rZXlib2FyZC1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNraXBMaW5rLCBTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rU2VydmljZSB7XG4gIHByaXZhdGUgc2tpcExpbmtzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2tpcExpbmtbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNraXBMaW5rQ29uZmlnLFxuICAgIHByb3RlY3RlZCBrZXlib2FyZEZvY3VzU2VydmljZTogS2V5Ym9hcmRGb2N1c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFNraXBMaW5rcygpOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+IHtcbiAgICByZXR1cm4gdGhpcy5za2lwTGlua3MkO1xuICB9XG5cbiAgYWRkKGtleTogc3RyaW5nLCB0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgZm91bmQ6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmQoXG4gICAgICAoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZy5zcGxpY2UodGhpcy5nZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXkpLCAwLCB7XG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgaTE4bktleTogZm91bmQuaTE4bktleSxcbiAgICAgICAgcG9zaXRpb246IGZvdW5kLnBvc2l0aW9uLFxuICAgICAgICBrZXksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcigoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSAhPT0ga2V5KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb1RhcmdldChza2lwTGluazogU2tpcExpbmspOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPVxuICAgICAgc2tpcExpbmsudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgPyBza2lwTGluay50YXJnZXRcbiAgICAgICAgOiAoc2tpcExpbmsudGFyZ2V0IGFzIEVsZW1lbnQpLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAvLyBmb2N1cyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGVcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9XG4gICAgICB0aGlzLmtleWJvYXJkRm9jdXNTZXJ2aWNlLmZpbmRGaXJzdEZvY3VzYWJsZSh0YXJnZXQpIHx8IHRhcmdldDtcblxuICAgIC8vIHdlIGZvcmNlIGEgdGFiaW5kZXggaWYgbm90IGF2YWlsYWJsZSwgdG8gZW5zdXJlIHdlIGNhbiBmb2N1cyBpbnRvIHRoZSBlbGVtZW50XG4gICAgY29uc3QgaGFzVGFiaW5kZXggPSBmaXJzdEZvY3VzYWJsZS5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgaWYgKCFoYXNUYWJpbmRleCkge1xuICAgICAgZmlyc3RGb2N1c2FibGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIH1cblxuICAgIGZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG5cbiAgICAvLyBkcm9wIHRoZSB0bXAgdGFiaW5kZXhcbiAgICBpZiAoIWhhc1RhYmluZGV4KSB7XG4gICAgICBmaXJzdEZvY3VzYWJsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kSW5kZXgoXG4gICAgICAoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBjb25zdCBwcmV2aW91czogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3NbaW5kZXhdO1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgICBjb25zdCBmb3VuZDogbnVtYmVyID0gZXhpc3RpbmcuZmluZEluZGV4KFxuICAgICAgICAgIChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ID09PSBwcmV2aW91cy5rZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZm91bmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=