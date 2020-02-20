import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkipLink, SkipLinkConfig, SkipLinkScrollPosition, } from '../config/skip-link.config';
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
                target: target,
                i18nKey: found.i18nKey,
                position: found.position,
                key: key,
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
    scrollToTarget(target, position, event) {
        target = target.parentNode;
        event.target.blur();
        const options = position === SkipLinkScrollPosition.AFTER ? { inline: 'end' } : {};
        target.scrollIntoView(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNkLHNCQUFzQixHQUN2QixNQUFNLDRCQUE0QixDQUFDOzs7QUFLcEMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUcxQixZQUFzQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUZwQyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFFVixDQUFDO0lBRWhELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsTUFBbUI7UUFDbEMsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNoRCxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUNqQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLFFBQVEsR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixHQUFHLEVBQUUsR0FBRzthQUNULENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLE1BQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDaEQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FDakMsQ0FBQztRQUVGLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FDWixNQUFtQixFQUNuQixRQUFnQyxFQUNoQyxLQUFpQjtRQUVqQixNQUFNLEdBQWdCLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDMUIsS0FBSyxDQUFDLE1BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxNQUFNLE9BQU8sR0FDWCxRQUFRLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVTLHVCQUF1QixDQUFDLEdBQVc7UUFDM0MsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUNqRCxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUNqQyxDQUFDO1FBRUYsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxRQUFRLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osTUFBTSxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ25ELE1BQU0sS0FBSyxHQUFXLFFBQVEsQ0FBQyxTQUFTLENBQ3RDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsR0FBRyxDQUMxQyxDQUFDO2dCQUNGLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNkLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0NBQ0YsQ0FBQTs7WUFwRStCLGNBQWM7OztBQUhqQyxlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBdUUzQjtTQXZFWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBTa2lwTGluayxcbiAgU2tpcExpbmtDb25maWcsXG4gIFNraXBMaW5rU2Nyb2xsUG9zaXRpb24sXG59IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rU2VydmljZSB7XG4gIHByaXZhdGUgc2tpcExpbmtzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2tpcExpbmtbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFNraXBMaW5rQ29uZmlnKSB7fVxuXG4gIGdldFNraXBMaW5rcygpOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+IHtcbiAgICByZXR1cm4gdGhpcy5za2lwTGlua3MkO1xuICB9XG5cbiAgYWRkKGtleTogc3RyaW5nLCB0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgZm91bmQ6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmQoXG4gICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3Rpbmcuc3BsaWNlKHRoaXMuZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5KSwgMCwge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgaTE4bktleTogZm91bmQuaTE4bktleSxcbiAgICAgICAgcG9zaXRpb246IGZvdW5kLnBvc2l0aW9uLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcihza2lwTGluayA9PiBza2lwTGluay5rZXkgIT09IGtleSk7XG4gICAgICB0aGlzLnNraXBMaW5rcyQubmV4dChleGlzdGluZyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvbjogU2tpcExpbmtTY3JvbGxQb3NpdGlvbixcbiAgICBldmVudDogTW91c2VFdmVudFxuICApOiB2b2lkIHtcbiAgICB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICBjb25zdCBvcHRpb25zOiBTY3JvbGxJbnRvVmlld09wdGlvbnMgPVxuICAgICAgcG9zaXRpb24gPT09IFNraXBMaW5rU2Nyb2xsUG9zaXRpb24uQUZURVIgPyB7IGlubGluZTogJ2VuZCcgfSA6IHt9O1xuXG4gICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KG9wdGlvbnMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kSW5kZXgoXG4gICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgY29uc3QgcHJldmlvdXM6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzW2luZGV4XTtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgICAgY29uc3QgZm91bmQ6IG51bWJlciA9IGV4aXN0aW5nLmZpbmRJbmRleChcbiAgICAgICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IHByZXZpb3VzLmtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBmb3VuZCArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==