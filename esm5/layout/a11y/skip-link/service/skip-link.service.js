/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SkipLinkConfig, SkipLinkScrollPosition, } from '../config/skip-link.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/skip-link.config";
var SkipLinkService = /** @class */ (function () {
    function SkipLinkService(config) {
        this.config = config;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    SkipLinkService.prototype.getSkipLinks = /**
     * @return {?}
     */
    function () {
        return this.skipLinks$;
    };
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    SkipLinkService.prototype.add = /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    function (key, target) {
        /** @type {?} */
        var found = this.config.skipLinks.find((/**
         * @param {?} skipLink
         * @return {?}
         */
        function (skipLink) { return skipLink.key === key; }));
        if (found) {
            /** @type {?} */
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
    /**
     * @param {?} key
     * @return {?}
     */
    SkipLinkService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var found = this.config.skipLinks.find((/**
         * @param {?} skipLink
         * @return {?}
         */
        function (skipLink) { return skipLink.key === key; }));
        if (found) {
            /** @type {?} */
            var existing = this.skipLinks$.value;
            existing = existing.filter((/**
             * @param {?} skipLink
             * @return {?}
             */
            function (skipLink) { return skipLink.key !== key; }));
            this.skipLinks$.next(existing);
        }
    };
    /**
     * @param {?} target
     * @param {?} position
     * @param {?} event
     * @return {?}
     */
    SkipLinkService.prototype.scrollToTarget = /**
     * @param {?} target
     * @param {?} position
     * @param {?} event
     * @return {?}
     */
    function (target, position, event) {
        target = (/** @type {?} */ (target.parentNode));
        ((/** @type {?} */ (event.target))).blur();
        /** @type {?} */
        var options = position === SkipLinkScrollPosition.AFTER ? { inline: 'end' } : {};
        target.scrollIntoView(options);
    };
    /**
     * @protected
     * @param {?} key
     * @return {?}
     */
    SkipLinkService.prototype.getSkipLinkIndexInArray = /**
     * @protected
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var index = this.config.skipLinks.findIndex((/**
         * @param {?} skipLink
         * @return {?}
         */
        function (skipLink) { return skipLink.key === key; }));
        var _loop_1 = function () {
            index--;
            /** @type {?} */
            var previous = this_1.config.skipLinks[index];
            if (previous) {
                /** @type {?} */
                var existing = this_1.skipLinks$.value;
                /** @type {?} */
                var found = existing.findIndex((/**
                 * @param {?} skipLink
                 * @return {?}
                 */
                function (skipLink) { return skipLink.key === previous.key; }));
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
    SkipLinkService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SkipLinkService.ctorParameters = function () { return [
        { type: SkipLinkConfig }
    ]; };
    /** @nocollapse */ SkipLinkService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(i0.ɵɵinject(i1.SkipLinkConfig)); }, token: SkipLinkService, providedIn: "root" });
    return SkipLinkService;
}());
export { SkipLinkService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9za2lwLWxpbmsvc2VydmljZS9za2lwLWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFFTCxjQUFjLEVBQ2Qsc0JBQXNCLEdBQ3ZCLE1BQU0sNEJBQTRCLENBQUM7OztBQUVwQztJQU1FLHlCQUFzQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUZwQyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFFVixDQUFDOzs7O0lBRWhELHNDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCw2QkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxNQUFtQjs7WUFDNUIsS0FBSyxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7UUFDaEQsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBcEIsQ0FBb0IsRUFDakM7UUFFRCxJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsUUFBUSxHQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUNsRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixHQUFHLEVBQUUsR0FBRzthQUNULENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sR0FBVzs7WUFDVixLQUFLLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztRQUNoRCxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFwQixDQUFvQixFQUNqQztRQUVELElBQUksS0FBSyxFQUFFOztnQkFDTCxRQUFRLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQ2hELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7Ozs7SUFFRCx3Q0FBYzs7Ozs7O0lBQWQsVUFDRSxNQUFtQixFQUNuQixRQUFnQyxFQUNoQyxLQUFpQjtRQUVqQixNQUFNLEdBQUcsbUJBQWEsTUFBTSxDQUFDLFVBQVUsRUFBQSxDQUFDO1FBQ3hDLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQzdCLE9BQU8sR0FDWCxRQUFRLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUVwRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVTLGlEQUF1Qjs7Ozs7SUFBakMsVUFBa0MsR0FBVzs7WUFDdkMsS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFDakQsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBcEIsQ0FBb0IsRUFDakM7O1lBR0MsS0FBSyxFQUFFLENBQUM7O2dCQUNGLFFBQVEsR0FBYSxPQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZELElBQUksUUFBUSxFQUFFOztvQkFDTixRQUFRLEdBQWUsT0FBSyxVQUFVLENBQUMsS0FBSzs7b0JBQzVDLEtBQUssR0FBVyxRQUFRLENBQUMsU0FBUzs7OztnQkFDdEMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQTdCLENBQTZCLEVBQzFDO2dCQUNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29DQUNQLEtBQUssR0FBRyxDQUFDO2lCQUNqQjthQUNGOzs7UUFYSCxPQUFPLEtBQUssR0FBRyxDQUFDOzs7O1NBWWY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQXpFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5DLGNBQWM7OzswQkFKaEI7Q0FrRkMsQUExRUQsSUEwRUM7U0F2RVksZUFBZTs7Ozs7O0lBQzFCLHFDQUF5RDs7Ozs7SUFFN0MsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBTa2lwTGluayxcbiAgU2tpcExpbmtDb25maWcsXG4gIFNraXBMaW5rU2Nyb2xsUG9zaXRpb24sXG59IGZyb20gJy4uL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rU2VydmljZSB7XG4gIHByaXZhdGUgc2tpcExpbmtzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2tpcExpbmtbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFNraXBMaW5rQ29uZmlnKSB7fVxuXG4gIGdldFNraXBMaW5rcygpOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+IHtcbiAgICByZXR1cm4gdGhpcy5za2lwTGlua3MkO1xuICB9XG5cbiAgYWRkKGtleTogc3RyaW5nLCB0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgZm91bmQ6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzLmZpbmQoXG4gICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nOiBTa2lwTGlua1tdID0gdGhpcy5za2lwTGlua3MkLnZhbHVlO1xuICAgICAgZXhpc3Rpbmcuc3BsaWNlKHRoaXMuZ2V0U2tpcExpbmtJbmRleEluQXJyYXkoa2V5KSwgMCwge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgaTE4bktleTogZm91bmQuaTE4bktleSxcbiAgICAgICAgcG9zaXRpb246IGZvdW5kLnBvc2l0aW9uLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5za2lwTGlua3MkLm5leHQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZvdW5kOiBTa2lwTGluayA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kKFxuICAgICAgc2tpcExpbmsgPT4gc2tpcExpbmsua2V5ID09PSBrZXlcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgZXhpc3Rpbmc6IFNraXBMaW5rW10gPSB0aGlzLnNraXBMaW5rcyQudmFsdWU7XG4gICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcihza2lwTGluayA9PiBza2lwTGluay5rZXkgIT09IGtleSk7XG4gICAgICB0aGlzLnNraXBMaW5rcyQubmV4dChleGlzdGluZyk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9UYXJnZXQoXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgICBwb3NpdGlvbjogU2tpcExpbmtTY3JvbGxQb3NpdGlvbixcbiAgICBldmVudDogTW91c2VFdmVudFxuICApOiB2b2lkIHtcbiAgICB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmJsdXIoKTtcbiAgICBjb25zdCBvcHRpb25zOiBTY3JvbGxJbnRvVmlld09wdGlvbnMgPVxuICAgICAgcG9zaXRpb24gPT09IFNraXBMaW5rU2Nyb2xsUG9zaXRpb24uQUZURVIgPyB7IGlubGluZTogJ2VuZCcgfSA6IHt9O1xuXG4gICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KG9wdGlvbnMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNraXBMaW5rSW5kZXhJbkFycmF5KGtleTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuY29uZmlnLnNraXBMaW5rcy5maW5kSW5kZXgoXG4gICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IGtleVxuICAgICk7XG5cbiAgICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tO1xuICAgICAgY29uc3QgcHJldmlvdXM6IFNraXBMaW5rID0gdGhpcy5jb25maWcuc2tpcExpbmtzW2luZGV4XTtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBleGlzdGluZzogU2tpcExpbmtbXSA9IHRoaXMuc2tpcExpbmtzJC52YWx1ZTtcbiAgICAgICAgY29uc3QgZm91bmQ6IG51bWJlciA9IGV4aXN0aW5nLmZpbmRJbmRleChcbiAgICAgICAgICBza2lwTGluayA9PiBza2lwTGluay5rZXkgPT09IHByZXZpb3VzLmtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBmb3VuZCArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==