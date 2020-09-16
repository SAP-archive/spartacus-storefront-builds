import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyboardFocusService } from '../../keyboard-focus/services/keyboard-focus.service';
import { SkipLinkConfig } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
import * as i2 from "../../keyboard-focus/services/keyboard-focus.service";
export class SkipLinkService {
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
}
SkipLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig), i0.ɵɵinject(i2.KeyboardFocusService)); }, token: SkipLinkService, providedIn: "root" });
SkipLinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SkipLinkService.ctorParameters = () => [
    { type: SkipLinkConfig },
    { type: KeyboardFocusService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDNUYsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBS3RFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQ1ksTUFBc0IsRUFDdEIsb0JBQTBDO1FBRDFDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFKOUMsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFhLEVBQUUsQ0FBQyxDQUFDO0lBS3RELENBQUM7SUFFSixZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVyxFQUFFLE1BQW1CO1FBQ2xDLE1BQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDaEQsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUNuQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU07Z0JBQ04sT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLEdBQUc7YUFDSixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2hELENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FDbkMsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWtCO1FBQy9CLE1BQU0sTUFBTSxHQUNWLFFBQVEsQ0FBQyxNQUFNLFlBQVksV0FBVztZQUNwQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDakIsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFrQixDQUFDLGFBQWEsQ0FBQztRQUVqRCx1Q0FBdUM7UUFDdkMsTUFBTSxjQUFjLEdBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUM7UUFFakUsZ0ZBQWdGO1FBQ2hGLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvQztRQUVELGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV2Qix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVTLHVCQUF1QixDQUFDLEdBQVc7UUFDM0MsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUNqRCxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQ25DLENBQUM7UUFFRixPQUFPLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDaEIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLFFBQVEsR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixNQUFNLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDbkQsTUFBTSxLQUFLLEdBQVcsUUFBUSxDQUFDLFNBQVMsQ0FDdEMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FDNUMsQ0FBQztnQkFDRixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDZCxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztZQXZGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUprQixjQUFjO1lBRHhCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9rZXlib2FyZC1mb2N1cy9zZXJ2aWNlcy9rZXlib2FyZC1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNraXBMaW5rLCBTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rU2VydmljZSB7XG4gIHByaXZhdGUgc2tpcExpbmtzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2tpcExpbmtbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNraXBMaW5rQ29uZmlnLFxuICAgIHByb3RlY3RlZCBrZXlib2FyZEZvY3VzU2VydmljZTogS2V5Ym9hcmRGb2N1c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFNraXBMaW5rcygpOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+IHtcbiAgICByZXR1cm4gdGhpcy5za2lwTGlua3MkO1xuICB9XG5cbiAgYWRkKGtleTogc3RyaW5nLCB0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgZm91bmQ6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmQoXG4gICAgICAoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZy5zcGxpY2UodGhpcy5nZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXkpLCAwLCB7XG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgaTE4bktleTogZm91bmQuaTE4bktleSxcbiAgICAgICAgcG9zaXRpb246IGZvdW5kLnBvc2l0aW9uLFxuICAgICAgICBrZXksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcigoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSAhPT0ga2V5KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb1RhcmdldChza2lwTGluazogU2tpcExpbmspOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPVxuICAgICAgc2tpcExpbmsudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgPyBza2lwTGluay50YXJnZXRcbiAgICAgICAgOiAoc2tpcExpbmsudGFyZ2V0IGFzIEVsZW1lbnQpLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAvLyBmb2N1cyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGVcbiAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9XG4gICAgICB0aGlzLmtleWJvYXJkRm9jdXNTZXJ2aWNlLmZpbmRGaXJzdEZvY3VzYWJsZSh0YXJnZXQpIHx8IHRhcmdldDtcblxuICAgIC8vIHdlIGZvcmNlIGEgdGFiaW5kZXggaWYgbm90IGF2YWlsYWJsZSwgdG8gZW5zdXJlIHdlIGNhbiBmb2N1cyBpbnRvIHRoZSBlbGVtZW50XG4gICAgY29uc3QgaGFzVGFiaW5kZXggPSBmaXJzdEZvY3VzYWJsZS5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgaWYgKCFoYXNUYWJpbmRleCkge1xuICAgICAgZmlyc3RGb2N1c2FibGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIH1cblxuICAgIGZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG5cbiAgICAvLyBkcm9wIHRoZSB0bXAgdGFiaW5kZXhcbiAgICBpZiAoIWhhc1RhYmluZGV4KSB7XG4gICAgICBmaXJzdEZvY3VzYWJsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kSW5kZXgoXG4gICAgICAoc2tpcExpbmspID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBjb25zdCBwcmV2aW91czogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3NbaW5kZXhdO1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgICBjb25zdCBmb3VuZDogbnVtYmVyID0gZXhpc3RpbmcuZmluZEluZGV4KFxuICAgICAgICAgIChza2lwTGluaykgPT4gc2tpcExpbmsua2V5ID09PSBwcmV2aW91cy5rZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZm91bmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=