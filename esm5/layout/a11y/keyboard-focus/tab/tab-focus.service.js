import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AutoFocusService } from '../autofocus/auto-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
var TabFocusService = /** @class */ (function (_super) {
    __extends(TabFocusService, _super);
    function TabFocusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Moves to the next (or previous) tab.
     */
    TabFocusService.prototype.moveTab = function (host, config, increment, event) {
        if (config === null || config === void 0 ? void 0 : config.tab) {
            var next = config.tab === 'scroll'
                ? this.findNextScrollable(host, config, increment)
                : this.findNext(host, config, increment);
            next === null || next === void 0 ? void 0 : next.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * builds out virtual slides out of the full scrollable area, to allow
     * for maximum flexibility for the underlying layout without using hardcoded
     * slide sizes.
     */
    TabFocusService.prototype.findNextScrollable = function (host, config, increment) {
        var _a;
        var active = this.getActiveChild(host, config);
        if (!active) {
            return;
        }
        // slide count
        var virtualSlideCount = Math.round(host.scrollWidth / host.clientWidth);
        // find current virtual slide
        var currentVirtualSlide = Math.round(active.offsetLeft / (host.scrollWidth / virtualSlideCount));
        var nextVirtualSlide = currentVirtualSlide + increment;
        if (increment === 1 /* NEXT */ &&
            nextVirtualSlide >= virtualSlideCount) {
            nextVirtualSlide = 0;
        }
        if (increment === -1 /* PREV */ && nextVirtualSlide < 0) {
            nextVirtualSlide = virtualSlideCount - 1;
        }
        var firstItemOnNextSlide = (_a = this.getChildren(host, config)) === null || _a === void 0 ? void 0 : _a.find(function (tab) {
            return tab.offsetLeft >=
                (host.scrollWidth / virtualSlideCount) * nextVirtualSlide;
        });
        return firstItemOnNextSlide;
    };
    TabFocusService.prototype.findNext = function (host, config, increment) {
        var _this = this;
        var childs = this.getChildren(host, config);
        var activeIndex = childs === null || childs === void 0 ? void 0 : childs.findIndex(function (c) { return c === _this.getActiveChild(host, config); });
        if (!activeIndex || activeIndex === -1) {
            activeIndex = 0;
        }
        activeIndex += increment;
        if (increment === 1 /* NEXT */ && activeIndex >= (childs === null || childs === void 0 ? void 0 : childs.length)) {
            activeIndex = childs.length - 1;
        }
        if (increment === -1 /* PREV */ && activeIndex < 0) {
            activeIndex = 0;
        }
        return childs ? childs[activeIndex] : undefined;
    };
    /**
     * Returns the active focusable child element. If there's no active
     * focusable child element, the first focusable child is returned.
     */
    TabFocusService.prototype.getActiveChild = function (host, config) {
        var _this = this;
        var persisted = this.getPersisted(host, config === null || config === void 0 ? void 0 : config.group);
        if (persisted) {
            return persisted;
        }
        var children = this.getChildren(host, config);
        var index = children.findIndex(function (tab) { return _this.isActive(tab); });
        if (!index || index === -1) {
            index = 0;
        }
        return children[index];
    };
    TabFocusService.prototype.getChildren = function (host, config) {
        if (typeof config.tab === 'string' && config.tab !== 'scroll') {
            return this.selectFocusUtil.query(host, config.tab);
        }
        else {
            return this.findFocusable(host, true);
        }
    };
    /**
     * Returns all focusable child elements of the host element.
     *
     * @param host The host element is used to query child focusable elements.
     * @param locked Indicates if locked elements (tabindex=-1) should be returned, defaults to false.
     * @param invisible Indicates if invisible child elements should be returned, defaults to false.
     */
    TabFocusService.prototype.findFocusable = function (host, locked, invisible) {
        if (locked === void 0) { locked = false; }
        if (invisible === void 0) { invisible = false; }
        return this.selectFocusUtil.findFocusable(host, locked, invisible);
    };
    TabFocusService.prototype.isActive = function (el) {
        var child = document.activeElement;
        var selector = child.tagName;
        return (el === child ||
            !!Array.from(el.querySelectorAll(selector)).find(function (e) { return e === child; }));
    };
    TabFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TabFocusService_Factory() { return new TabFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TabFocusService, providedIn: "root" });
    TabFocusService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], TabFocusService);
    return TabFocusService;
}(AutoFocusService));
export { TabFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90YWIvdGFiLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU1uRTtJQUFxQyxtQ0FBZ0I7SUFBckQ7O0tBaUpDO0lBaEpDOztPQUVHO0lBQ0gsaUNBQU8sR0FBUCxVQUNFLElBQWlCLEVBQ2pCLE1BQXNCLEVBQ3RCLFNBQXFCLEVBQ3JCLEtBQW9CO1FBRXBCLElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEdBQUcsRUFBRTtZQUNmLElBQU0sSUFBSSxHQUNSLE1BQU0sQ0FBQyxHQUFHLEtBQUssUUFBUTtnQkFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU3QyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxHQUFHO1lBRWQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ08sNENBQWtCLEdBQTVCLFVBQ0UsSUFBaUIsRUFDakIsTUFBc0IsRUFDdEIsU0FBcUI7O1FBRXJCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFP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QUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBaUozQjswQkF4SkQ7Q0F3SkMsQUFqSkQsQ0FBcUMsZ0JBQWdCLEdBaUpwRDtTQWpKWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzU2VydmljZSB9IGZyb20gJy4uL2F1dG9mb2N1cy9hdXRvLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVGFiRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJGb2N1c1NlcnZpY2UgZXh0ZW5kcyBBdXRvRm9jdXNTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIE1vdmVzIHRvIHRoZSBuZXh0IChvciBwcmV2aW91cykgdGFiLlxuICAgKi9cbiAgbW92ZVRhYihcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnLFxuICAgIGluY3JlbWVudDogTU9WRV9GT0NVUyxcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudFxuICApOiB2b2lkIHtcbiAgICBpZiAoY29uZmlnPy50YWIpIHtcbiAgICAgIGNvbnN0IG5leHQgPVxuICAgICAgICBjb25maWcudGFiID09PSAnc2Nyb2xsJ1xuICAgICAgICAgID8gdGhpcy5maW5kTmV4dFNjcm9sbGFibGUoaG9zdCwgY29uZmlnLCBpbmNyZW1lbnQpXG4gICAgICAgICAgOiB0aGlzLmZpbmROZXh0KGhvc3QsIGNvbmZpZywgaW5jcmVtZW50KTtcblxuICAgICAgbmV4dD8uZm9jdXMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZHMgb3V0IHZpcnR1YWwgc2xpZGVzIG91dCBvZiB0aGUgZnVsbCBzY3JvbGxhYmxlIGFyZWEsIHRvIGFsbG93XG4gICAqIGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5IGZvciB0aGUgdW5kZXJseWluZyBsYXlvdXQgd2l0aG91dCB1c2luZyBoYXJkY29kZWRcbiAgICogc2xpZGUgc2l6ZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZmluZE5leHRTY3JvbGxhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWcsXG4gICAgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZUNoaWxkKGhvc3QsIGNvbmZpZyk7XG5cbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzbGlkZSBjb3VudFxuICAgIGNvbnN0IHZpcnR1YWxTbGlkZUNvdW50ID0gTWF0aC5yb3VuZChob3N0LnNjcm9sbFdpZHRoIC8gaG9zdC5jbGllbnRXaWR0aCk7XG5cbiAgICAvLyBmaW5kIGN1cnJlbnQgdmlydHVhbCBzbGlkZVxuICAgIGNvbnN0IGN1cnJlbnRWaXJ0dWFsU2xpZGUgPSBNYXRoLnJvdW5kKFxuICAgICAgYWN0aXZlLm9mZnNldExlZnQgLyAoaG9zdC5zY3JvbGxXaWR0aCAvIHZpcnR1YWxTbGlkZUNvdW50KVxuICAgICk7XG5cbiAgICBsZXQgbmV4dFZpcnR1YWxTbGlkZSA9IGN1cnJlbnRWaXJ0dWFsU2xpZGUgKyBpbmNyZW1lbnQ7XG4gICAgaWYgKFxuICAgICAgaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLk5FWFQgJiZcbiAgICAgIG5leHRWaXJ0dWFsU2xpZGUgPj0gdmlydHVhbFNsaWRlQ291bnRcbiAgICApIHtcbiAgICAgIG5leHRWaXJ0dWFsU2xpZGUgPSAwO1xuICAgIH1cbiAgICBpZiAoaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLlBSRVYgJiYgbmV4dFZpcnR1YWxTbGlkZSA8IDApIHtcbiAgICAgIG5leHRWaXJ0dWFsU2xpZGUgPSB2aXJ0dWFsU2xpZGVDb3VudCAtIDE7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RJdGVtT25OZXh0U2xpZGUgPSB0aGlzLmdldENoaWxkcmVuKGhvc3QsIGNvbmZpZyk/LmZpbmQoXG4gICAgICAodGFiKSA9PlxuICAgICAgICB0YWIub2Zmc2V0TGVmdCA+PVxuICAgICAgICAoaG9zdC5zY3JvbGxXaWR0aCAvIHZpcnR1YWxTbGlkZUNvdW50KSAqIG5leHRWaXJ0dWFsU2xpZGVcbiAgICApO1xuXG4gICAgcmV0dXJuIGZpcnN0SXRlbU9uTmV4dFNsaWRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmROZXh0KFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWcsXG4gICAgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjaGlsZHMgPSB0aGlzLmdldENoaWxkcmVuKGhvc3QsIGNvbmZpZyk7XG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gY2hpbGRzPy5maW5kSW5kZXgoXG4gICAgICAoYykgPT4gYyA9PT0gdGhpcy5nZXRBY3RpdmVDaGlsZChob3N0LCBjb25maWcpXG4gICAgKTtcblxuICAgIGlmICghYWN0aXZlSW5kZXggfHwgYWN0aXZlSW5kZXggPT09IC0xKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICAgIGFjdGl2ZUluZGV4ICs9IGluY3JlbWVudDtcblxuICAgIGlmIChpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuTkVYVCAmJiBhY3RpdmVJbmRleCA+PSBjaGlsZHM/Lmxlbmd0aCkge1xuICAgICAgYWN0aXZlSW5kZXggPSBjaGlsZHMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgaWYgKGluY3JlbWVudCA9PT0gTU9WRV9GT0NVUy5QUkVWICYmIGFjdGl2ZUluZGV4IDwgMCkge1xuICAgICAgYWN0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRzID8gY2hpbGRzW2FjdGl2ZUluZGV4XSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhY3RpdmUgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuIElmIHRoZXJlJ3Mgbm8gYWN0aXZlXG4gICAqIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50LCB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEFjdGl2ZUNoaWxkKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWdcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBlcnNpc3RlZCA9IHRoaXMuZ2V0UGVyc2lzdGVkKGhvc3QsIGNvbmZpZz8uZ3JvdXApO1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHJldHVybiBwZXJzaXN0ZWQ7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihob3N0LCBjb25maWcpO1xuICAgIGxldCBpbmRleCA9IGNoaWxkcmVuLmZpbmRJbmRleCgodGFiKSA9PiB0aGlzLmlzQWN0aXZlKHRhYikpO1xuICAgIGlmICghaW5kZXggfHwgaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbltpbmRleF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2hpbGRyZW4oXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZ1xuICApOiBIVE1MRWxlbWVudFtdIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YWIgPT09ICdzdHJpbmcnICYmIGNvbmZpZy50YWIgIT09ICdzY3JvbGwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGb2N1c1V0aWwucXVlcnkoaG9zdCwgY29uZmlnLnRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCBUaGUgaG9zdCBlbGVtZW50IGlzIHVzZWQgdG8gcXVlcnkgY2hpbGQgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0gbG9ja2VkIEluZGljYXRlcyBpZiBsb2NrZWQgZWxlbWVudHMgKHRhYmluZGV4PS0xKSBzaG91bGQgYmUgcmV0dXJuZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgKiBAcGFyYW0gaW52aXNpYmxlIEluZGljYXRlcyBpZiBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGZpbmRGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgbG9ja2VkID0gZmFsc2UsXG4gICAgaW52aXNpYmxlID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9jdXNVdGlsLmZpbmRGb2N1c2FibGUoaG9zdCwgbG9ja2VkLCBpbnZpc2libGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQWN0aXZlKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkLnRhZ05hbWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZWwgPT09IGNoaWxkIHx8XG4gICAgICAhIUFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbmQoKGUpID0+IGUgPT09IGNoaWxkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==