/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkipLinkConfig, SkipLinkScrollPosition, } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
export class SkipLinkService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    getSkipLinks() {
        return this.skipLinks$;
    }
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    add(key, target) {
        /** @type {?} */
        const found = this.config.skipLinks.find((/**
         * @param {?} skipLink
         * @return {?}
         */
        skipLink => skipLink.key === key));
        if (found) {
            /** @type {?} */
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
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        /** @type {?} */
        const found = this.config.skipLinks.find((/**
         * @param {?} skipLink
         * @return {?}
         */
        skipLink => skipLink.key === key));
        if (found) {
            /** @type {?} */
            let existing = this.skipLinks$.value;
            existing = existing.filter((/**
             * @param {?} skipLink
             * @return {?}
             */
            skipLink => skipLink.key !== key));
            this.skipLinks$.next(existing);
        }
    }
    /**
     * @param {?} target
     * @param {?} position
     * @param {?} event
     * @return {?}
     */
    scrollToTarget(target, position, event) {
        target = (/** @type {?} */ (target.parentNode));
        ((/** @type {?} */ (event.target))).blur();
        /** @type {?} */
        const options = position === SkipLinkScrollPosition.AFTER ? { inline: 'end' } : {};
        target.scrollIntoView(options);
    }
    /**
     * @protected
     * @param {?} key
     * @return {?}
     */
    getSkipLinkIndexInArray(key) {
        /** @type {?} */
        let index = this.config.skipLinks.findIndex((/**
         * @param {?} skipLink
         * @return {?}
         */
        skipLink => skipLink.key === key));
        while (index > 0) {
            index--;
            /** @type {?} */
            const previous = this.config.skipLinks[index];
            if (previous) {
                /** @type {?} */
                const existing = this.skipLinks$.value;
                /** @type {?} */
                const found = existing.findIndex((/**
                 * @param {?} skipLink
                 * @return {?}
                 */
                skipLink => skipLink.key === previous.key));
                if (found > -1) {
                    return found + 1;
                }
            }
        }
        return 0;
    }
}
SkipLinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SkipLinkService.ctorParameters = () => [
    { type: SkipLinkConfig }
];
/** @nocollapse */ SkipLinkService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig)); }, token: SkipLinkService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SkipLinkService.prototype.skipLinks$;
    /**
     * @type {?}
     * @protected
     */
    SkipLinkService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFFTCxjQUFjLEVBQ2Qsc0JBQXNCLEdBQ3ZCLE1BQU0sNEJBQTRCLENBQUM7OztBQUtwQyxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFzQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUZwQyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFFVixDQUFDOzs7O0lBRWhELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxNQUFtQjs7Y0FDNUIsS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7UUFDaEQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFDakM7UUFFRCxJQUFJLEtBQUssRUFBRTs7a0JBQ0gsUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUNsRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixHQUFHLEVBQUUsR0FBRzthQUNULENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVzs7Y0FDVixLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztRQUNoRCxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUNqQztRQUVELElBQUksS0FBSyxFQUFFOztnQkFDTCxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQ2hELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTTs7OztZQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7Ozs7SUFFRCxjQUFjLENBQ1osTUFBbUIsRUFDbkIsUUFBZ0MsRUFDaEMsS0FBaUI7UUFFakIsTUFBTSxHQUFHLG1CQUFhLE1BQU0sQ0FBQyxVQUFVLEVBQUEsQ0FBQztRQUN4QyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOztjQUM3QixPQUFPLEdBQ1gsUUFBUSxLQUFLLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFFcEUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFUyx1QkFBdUIsQ0FBQyxHQUFXOztZQUN2QyxLQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztRQUNqRCxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUNqQztRQUVELE9BQU8sS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNoQixLQUFLLEVBQUUsQ0FBQzs7a0JBQ0YsUUFBUSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUN2RCxJQUFJLFFBQVEsRUFBRTs7c0JBQ04sUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSzs7c0JBQzVDLEtBQUssR0FBVyxRQUFRLENBQUMsU0FBUzs7OztnQkFDdEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQzFDO2dCQUNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNkLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUF6RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTkMsY0FBYzs7Ozs7Ozs7SUFRZCxxQ0FBeUQ7Ozs7O0lBRTdDLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgU2tpcExpbmssXG4gIFNraXBMaW5rQ29uZmlnLFxuICBTa2lwTGlua1Njcm9sbFBvc2l0aW9uLFxufSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua1NlcnZpY2Uge1xuICBwcml2YXRlIHNraXBMaW5rcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNraXBMaW5rW10+KFtdKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBTa2lwTGlua0NvbmZpZykge31cblxuICBnZXRTa2lwTGlua3MoKTogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc2tpcExpbmtzJDtcbiAgfVxuXG4gIGFkZChrZXk6IHN0cmluZywgdGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgIGV4aXN0aW5nLnNwbGljZSh0aGlzLmdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleSksIDAsIHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGkxOG5LZXk6IGZvdW5kLmkxOG5LZXksXG4gICAgICAgIHBvc2l0aW9uOiBmb3VuZC5wb3NpdGlvbixcbiAgICAgICAga2V5OiBrZXksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2tpcExpbmtzJC5uZXh0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmb3VuZDogU2tpcExpbmsgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZChcbiAgICAgIHNraXBMaW5rID0+IHNraXBMaW5rLmtleSA9PT0ga2V5XG4gICAgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgbGV0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3RpbmcgPSBleGlzdGluZy5maWx0ZXIoc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ICE9PSBrZXkpO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVGFyZ2V0KFxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb246IFNraXBMaW5rU2Nyb2xsUG9zaXRpb24sXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgdGFyZ2V0ID0gPEhUTUxFbGVtZW50PnRhcmdldC5wYXJlbnROb2RlO1xuICAgICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5ibHVyKCk7XG4gICAgY29uc3Qgb3B0aW9uczogU2Nyb2xsSW50b1ZpZXdPcHRpb25zID1cbiAgICAgIHBvc2l0aW9uID09PSBTa2lwTGlua1Njcm9sbFBvc2l0aW9uLkFGVEVSID8geyBpbmxpbmU6ICdlbmQnIH0gOiB7fTtcblxuICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyhvcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTa2lwTGlua0luZGV4SW5BcnJheShrZXk6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmNvbmZpZy5za2lwTGlua3MuZmluZEluZGV4KFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgd2hpbGUgKGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGNvbnN0IHByZXZpb3VzOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rc1tpbmRleF07XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICAgIGNvbnN0IGZvdW5kOiBudW1iZXIgPSBleGlzdGluZy5maW5kSW5kZXgoXG4gICAgICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBwcmV2aW91cy5rZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZvdW5kID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZm91bmQgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=