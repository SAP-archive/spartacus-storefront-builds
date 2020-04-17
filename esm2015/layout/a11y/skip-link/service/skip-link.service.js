import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus/services/keyboard-focus.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLdEUsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUcxQixZQUNZLE1BQXNCLEVBQ3RCLG9CQUEwQztRQUQxQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSjlDLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBYSxFQUFFLENBQUMsQ0FBQztJQUt0RCxDQUFDO0lBRUosWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxNQUFtQjtRQUNsQyxNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2hELENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FDbkMsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRCxNQUFNO2dCQUNOLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixHQUFHO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQ25DLENBQUM7UUFFRixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2pELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFrQjtRQUMvQixNQUFNLE1BQU0sR0FDVixRQUFRLENBQUMsTUFBTSxZQUFZLFdBQVc7WUFDcEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ2pCLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBa0IsQ0FBQyxhQUFhLENBQUM7UUFFakQsdUNBQXVDO1FBQ3ZDLE1BQU0sY0FBYyxHQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDO1FBRWpFLGdGQUFnRjtRQUNoRixNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0M7UUFFRCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFUyx1QkFBdUIsQ0FBQyxHQUFXO1FBQzNDLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDakQsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUNuQyxDQUFDO1FBRUYsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxRQUFRLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osTUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELE1BQU0sS0FBSyxHQUFXLFFBQVEsQ0FBQyxTQUFTLENBQ3RDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQzVDLENBQUM7Z0JBQ0YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ2QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRixDQUFBOztZQWpGcUIsY0FBYztZQUNBLG9CQUFvQjs7O0FBTDNDLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0FxRjNCO1NBckZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4va2V5Ym9hcmQtZm9jdXMvc2VydmljZXMva2V5Ym9hcmQtZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBTa2lwTGluaywgU2tpcExpbmtDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICBwcml2YXRlIHNraXBMaW5rcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNraXBMaW5rW10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTa2lwTGlua0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQga2V5Ym9hcmRGb2N1c1NlcnZpY2U6IEtleWJvYXJkRm9jdXNTZXJ2aWNlXG4gICkge31cblxuICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcExpbmtzJDtcbiAgfVxuXG4gIGFkZChrZXk6IHN0cmluZywgdGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgKHNraXBMaW5rKSA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3Rpbmcuc3BsaWNlKHRoaXMuZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5KSwgMCwge1xuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGkxOG5LZXk6IGZvdW5kLmkxOG5LZXksXG4gICAgICAgIHBvc2l0aW9uOiBmb3VuZC5wb3NpdGlvbixcbiAgICAgICAga2V5LFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNraXBMaW5rcyQubmV4dChleGlzdGluZyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZm91bmQ6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmQoXG4gICAgICAoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgbGV0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3RpbmcgPSBleGlzdGluZy5maWx0ZXIoKHNraXBMaW5rKSA9PiBza2lwTGluay5rZXkgIT09IGtleSk7XG4gICAgICB0aGlzLnNraXBMaW5rcyQubmV4dChleGlzdGluZyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgIHNraXBMaW5rLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgID8gc2tpcExpbmsudGFyZ2V0XG4gICAgICAgIDogKHNraXBMaW5rLnRhcmdldCBhcyBFbGVtZW50KS5wYXJlbnRFbGVtZW50O1xuXG4gICAgLy8gZm9jdXMgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlXG4gICAgY29uc3QgZmlyc3RGb2N1c2FibGUgPVxuICAgICAgdGhpcy5rZXlib2FyZEZvY3VzU2VydmljZS5maW5kRmlyc3RGb2N1c2FibGUodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cbiAgICAvLyB3ZSBmb3JjZSBhIHRhYmluZGV4IGlmIG5vdCBhdmFpbGFibGUsIHRvIGVuc3VyZSB3ZSBjYW4gZm9jdXMgaW50byB0aGUgZWxlbWVudFxuICAgIGNvbnN0IGhhc1RhYmluZGV4ID0gZmlyc3RGb2N1c2FibGUuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIGlmICghaGFzVGFiaW5kZXgpIHtcbiAgICAgIGZpcnN0Rm9jdXNhYmxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICBmaXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuXG4gICAgLy8gZHJvcCB0aGUgdG1wIHRhYmluZGV4XG4gICAgaWYgKCFoYXNUYWJpbmRleCkge1xuICAgICAgZmlyc3RGb2N1c2FibGUucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZEluZGV4KFxuICAgICAgKHNraXBMaW5rKSA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgY29uc3QgcHJldmlvdXM6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzW2luZGV4XTtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgICAgY29uc3QgZm91bmQ6IG51bWJlciA9IGV4aXN0aW5nLmZpbmRJbmRleChcbiAgICAgICAgICAoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSA9PT0gcHJldmlvdXMua2V5XG4gICAgICAgICk7XG4gICAgICAgIGlmIChmb3VuZCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGZvdW5kICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19