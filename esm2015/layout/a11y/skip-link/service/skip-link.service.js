import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkipLink, SkipLinkConfig } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
let SkipLinkService = class SkipLinkService {
    constructor(config) {
        this.config = config;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    getSkipLinks() {
        return this.skipLinks$;
    }
    add(key, target) {
        const found = this.config.skipLinks.find(skipLink => skipLink.key === key);
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
        const found = this.config.skipLinks.find(skipLink => skipLink.key === key);
        if (found) {
            let existing = this.skipLinks$.value;
            existing = existing.filter(skipLink => skipLink.key !== key);
            this.skipLinks$.next(existing);
        }
    }
    scrollToTarget(skipLink) {
        const target = skipLink.target instanceof HTMLElement
            ? skipLink.target
            : skipLink.target.parentElement;
        // we force a tabindex if not available, to ensure we can focus into the element
        const currentTabIndex = target.getAttribute('tabindex');
        if (!currentTabIndex) {
            target.setAttribute('tabindex', '-1');
        }
        target.focus();
        // drop the tmp tabindex
        if (!currentTabIndex) {
            target.removeAttribute('tabindex');
        }
    }
    getSkipLinkIndexInArray(key) {
        let index = this.config.skipLinks.findIndex(skipLink => skipLink.key === key);
        while (index > 0) {
            index--;
            const previous = this.config.skipLinks[index];
            if (previous) {
                const existing = this.skipLinks$.value;
                const found = existing.findIndex(skipLink => skipLink.key === previous.key);
                if (found > -1) {
                    return found + 1;
                }
            }
        }
        return 0;
    }
};
SkipLinkService.ctorParameters = () => [
    { type: SkipLinkConfig }
];
SkipLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig)); }, token: SkipLinkService, providedIn: "root" });
SkipLinkService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SkipLinkService);
export { SkipLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUt0RSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRzFCLFlBQXNCLE1BQXNCO1FBQXRCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRnBDLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBYSxFQUFFLENBQUMsQ0FBQztJQUVWLENBQUM7SUFFaEQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxNQUFtQjtRQUNsQyxNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2hELFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQ2pDLENBQUM7UUFFRixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDcEQsTUFBTTtnQkFDTixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsR0FBRzthQUNKLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLE1BQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDaEQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FDakMsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFrQjtRQUMvQixNQUFNLE1BQU0sR0FDVixRQUFRLENBQUMsTUFBTSxZQUFZLFdBQVc7WUFDcEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ2pCLENBQUMsQ0FBRSxRQUFRLENBQUMsTUFBa0IsQ0FBQyxhQUFhLENBQUM7UUFFakQsZ0ZBQWdGO1FBQ2hGLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUVBLE1BQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEMsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFUyx1QkFBdUIsQ0FBQyxHQUFXO1FBQzNDLElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDakQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FDakMsQ0FBQztRQUVGLE9BQU8sS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNoQixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sUUFBUSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUksUUFBUSxFQUFFO2dCQUNaLE1BQU0sUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxNQUFNLEtBQUssR0FBVyxRQUFRLENBQUMsU0FBUyxDQUN0QyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FDMUMsQ0FBQztnQkFDRixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDZCxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGLENBQUE7O1lBM0UrQixjQUFjOzs7QUFIakMsZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQThFM0I7U0E5RVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2tpcExpbmssIFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NraXAtbGluay5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBza2lwTGlua3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTa2lwTGlua1tdPihbXSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogU2tpcExpbmtDb25maWcpIHt9XG5cbiAgZ2V0U2tpcExpbmtzKCk6IE9ic2VydmFibGU8U2tpcExpbmtbXT4ge1xuICAgIHJldHVybiB0aGlzLnNraXBMaW5rcyQ7XG4gIH1cblxuICBhZGQoa2V5OiBzdHJpbmcsIHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIHNraXBMaW5rID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZy5zcGxpY2UodGhpcy5nZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXkpLCAwLCB7XG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgaTE4bktleTogZm91bmQuaTE4bktleSxcbiAgICAgICAgcG9zaXRpb246IGZvdW5kLnBvc2l0aW9uLFxuICAgICAgICBrZXksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIHNraXBMaW5rID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgbGV0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3RpbmcgPSBleGlzdGluZy5maWx0ZXIoc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ICE9PSBrZXkpO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVGFyZ2V0KHNraXBMaW5rOiBTa2lwTGluayk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICBza2lwTGluay50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICA/IHNraXBMaW5rLnRhcmdldFxuICAgICAgICA6IChza2lwTGluay50YXJnZXQgYXMgRWxlbWVudCkucGFyZW50RWxlbWVudDtcblxuICAgIC8vIHdlIGZvcmNlIGEgdGFiaW5kZXggaWYgbm90IGF2YWlsYWJsZSwgdG8gZW5zdXJlIHdlIGNhbiBmb2N1cyBpbnRvIHRoZSBlbGVtZW50XG4gICAgY29uc3QgY3VycmVudFRhYkluZGV4ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICBpZiAoIWN1cnJlbnRUYWJJbmRleCkge1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuXG4gICAgLy8gZHJvcCB0aGUgdG1wIHRhYmluZGV4XG4gICAgaWYgKCFjdXJyZW50VGFiSW5kZXgpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kSW5kZXgoXG4gICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgY29uc3QgcHJldmlvdXM6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzW2luZGV4XTtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgICAgY29uc3QgZm91bmQ6IG51bWJlciA9IGV4aXN0aW5nLmZpbmRJbmRleChcbiAgICAgICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IHByZXZpb3VzLmtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBmb3VuZCArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==