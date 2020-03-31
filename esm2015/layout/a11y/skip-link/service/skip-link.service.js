import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus';
import { SkipLink, SkipLinkConfig } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
import * as i2 from "../../keyboard-focus/services/keyboard-focus.service";
let SkipLinkService = class SkipLinkService {
    constructor(config, keyboardFocusService) {
        this.config = config;
        this.keyboardFocusService = keyboardFocusService;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    getSkipLinks() {
        return this.skipLinks$;
    }
    add(key, target) {
        const found = this.config.skipLinks.find((skipLink) => skipLink.key === key);
        if (found) {
            const existing = this.skipLinks$.value;
            existing.splice(this.getSkipLinkIndexInArray(key), 0, {
                target,
                i18nKey: found.i18nKey,
                position: found.position,
                key,
            });
            this.skipLinks$.next(existing);
        }
    }
    remove(key) {
        const found = this.config.skipLinks.find((skipLink) => skipLink.key === key);
        if (found) {
            let existing = this.skipLinks$.value;
            existing = existing.filter((skipLink) => skipLink.key !== key);
            this.skipLinks$.next(existing);
        }
    }
    scrollToTarget(skipLink) {
        const target = skipLink.target instanceof HTMLElement
            ? skipLink.target
            : skipLink.target.parentElement;
        // focus first focusable element in the
        const firstFocusable = this.keyboardFocusService.findFirstFocusable(target) || target;
        // we force a tabindex if not available, to ensure we can focus into the element
        const hasTabindex = firstFocusable.hasAttribute('tabindex');
        if (!hasTabindex) {
            firstFocusable.setAttribute('tabindex', '-1');
        }
        firstFocusable.focus();
        // drop the tmp tabindex
        if (!hasTabindex) {
            firstFocusable.removeAttribute('tabindex');
        }
    }
    getSkipLinkIndexInArray(key) {
        let index = this.config.skipLinks.findIndex((skipLink) => skipLink.key === key);
        while (index > 0) {
            index--;
            const previous = this.config.skipLinks[index];
            if (previous) {
                const existing = this.skipLinks$.value;
                const found = existing.findIndex((skipLink) => skipLink.key === previous.key);
                if (found > -1) {
                    return found + 1;
                }
            }
        }
        return 0;
    }
};
SkipLinkService.ctorParameters = () => [
    { type: SkipLinkConfig },
    { type: KeyboardFocusService }
];
SkipLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig), i0.ɵɵinject(i2.KeyboardFocusService)); }, token: SkipLinkService, providedIn: "root" });
SkipLinkService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SkipLinkService);
export { SkipLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLdEUsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUcxQixZQUNZLE1BQXNCLEVBQ3RCLG9CQUEwQztRQUQxQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSjlDLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBYSxFQUFFLENBQUMsQ0FBQztJQUt0RCxDQUFDO0lBRUosWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxNQUFtQjtRQUNsQyxNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2hELENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FDbkMsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRCxNQUFNO2dCQUNOLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixHQUFHO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQ25DLENBQUM7UUFFRixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFrQjtRQUMvQixNQUFNLE1BQU0sR0FDVixRQUFRLENBQUMsTUFBTSxZQUFZLFdBQVc7WUFDcEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ2pCLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBa0IsQ0FBQyxhQUFhLENBQUM7UUFFakQsdUNBQXVDO1FBQ3ZDLE1BQU0sY0FBYyxHQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDO1FBRWpFLGdGQUFnRjtRQUNoRixNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0M7UUFFRCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFUyx1QkFBdUIsQ0FBQyxHQUFXO1FBQzNDLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDakQsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUNuQyxDQUFDO1FBRUYsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxRQUFRLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osTUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELE1BQU0sS0FBSyxHQUFXLFFBQVEsQ0FBQyxTQUFTLENBQ3RDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQzVDLENBQUM7Z0JBQ0YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ2QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRixDQUFBOztZQWpGcUIsY0FBYztZQUNBLG9CQUFvQjs7O0FBTDNDLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0FxRjNCO1NBckZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4va2V5Ym9hcmQtZm9jdXMnO1xuaW1wb3J0IHsgU2tpcExpbmssIFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NraXAtbGluay5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBza2lwTGlua3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTa2lwTGlua1tdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2tpcExpbmtDb25maWcsXG4gICAgcHJvdGVjdGVkIGtleWJvYXJkRm9jdXNTZXJ2aWNlOiBLZXlib2FyZEZvY3VzU2VydmljZVxuICApIHt9XG5cbiAgZ2V0U2tpcExpbmtzKCk6IE9ic2VydmFibGU8U2tpcExpbmtbXT4ge1xuICAgIHJldHVybiB0aGlzLnNraXBMaW5rcyQ7XG4gIH1cblxuICBhZGQoa2V5OiBzdHJpbmcsIHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgIGV4aXN0aW5nLnNwbGljZSh0aGlzLmdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleSksIDAsIHtcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBpMThuS2V5OiBmb3VuZC5pMThuS2V5LFxuICAgICAgICBwb3NpdGlvbjogZm91bmQucG9zaXRpb24sXG4gICAgICAgIGtleSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgKHNraXBMaW5rKSA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGxldCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgIGV4aXN0aW5nID0gZXhpc3RpbmcuZmlsdGVyKChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ICE9PSBrZXkpO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluayk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICBza2lwTGluay50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICA/IHNraXBMaW5rLnRhcmdldFxuICAgICAgICA6IChza2lwTGluay50YXJnZXQgYXMgRWxlbWVudCkucGFyZW50RWxlbWVudDtcblxuICAgIC8vIGZvY3VzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZVxuICAgIGNvbnN0IGZpcnN0Rm9jdXNhYmxlID1cbiAgICAgIHRoaXMua2V5Ym9hcmRGb2N1c1NlcnZpY2UuZmluZEZpcnN0Rm9jdXNhYmxlKHRhcmdldCkgfHwgdGFyZ2V0O1xuXG4gICAgLy8gd2UgZm9yY2UgYSB0YWJpbmRleCBpZiBub3QgYXZhaWxhYmxlLCB0byBlbnN1cmUgd2UgY2FuIGZvY3VzIGludG8gdGhlIGVsZW1lbnRcbiAgICBjb25zdCBoYXNUYWJpbmRleCA9IGZpcnN0Rm9jdXNhYmxlLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICBpZiAoIWhhc1RhYmluZGV4KSB7XG4gICAgICBmaXJzdEZvY3VzYWJsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgfVxuXG4gICAgZmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcblxuICAgIC8vIGRyb3AgdGhlIHRtcCB0YWJpbmRleFxuICAgIGlmICghaGFzVGFiaW5kZXgpIHtcbiAgICAgIGZpcnN0Rm9jdXNhYmxlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmRJbmRleChcbiAgICAgIChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgd2hpbGUgKGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGNvbnN0IHByZXZpb3VzOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rc1tpbmRleF07XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICAgIGNvbnN0IGZvdW5kOiBudW1iZXIgPSBleGlzdGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgKHNraXBMaW5rKSA9PiBza2lwTGluay5rZXkgPT09IHByZXZpb3VzLmtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBmb3VuZCArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==