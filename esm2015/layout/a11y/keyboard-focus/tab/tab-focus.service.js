import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AutoFocusService } from '../autofocus/auto-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/select-focus.util";
let TabFocusService = class TabFocusService extends AutoFocusService {
    /**
     * Moves to the next (or previous) tab.
     */
    moveTab(host, config, increment, event) {
        if (config === null || config === void 0 ? void 0 : config.tab) {
            const next = config.tab === 'scroll'
                ? this.findNextScrollable(host, config, increment)
                : this.findNext(host, config, increment);
            next === null || next === void 0 ? void 0 : next.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * builds out virtual slides out of the full scrollable area, to allow
     * for maximum flexibility for the underlying layout without using hardcoded
     * slide sizes.
     */
    findNextScrollable(host, config, increment) {
        var _a;
        const active = this.getActiveChild(host, config);
        if (!active) {
            return;
        }
        // slide count
        const virtualSlideCount = Math.round(host.scrollWidth / host.clientWidth);
        // find current virtual slide
        const currentVirtualSlide = Math.round(active.offsetLeft / (host.scrollWidth / virtualSlideCount));
        let nextVirtualSlide = currentVirtualSlide + increment;
        if (increment === 1 /* NEXT */ &&
            nextVirtualSlide >= virtualSlideCount) {
            nextVirtualSlide = 0;
        }
        if (increment === -1 /* PREV */ && nextVirtualSlide < 0) {
            nextVirtualSlide = virtualSlideCount - 1;
        }
        const firstItemOnNextSlide = (_a = this.getChildren(host, config)) === null || _a === void 0 ? void 0 : _a.find((tab) => tab.offsetLeft >=
            (host.scrollWidth / virtualSlideCount) * nextVirtualSlide);
        return firstItemOnNextSlide;
    }
    findNext(host, config, increment) {
        const childs = this.getChildren(host, config);
        let activeIndex = childs === null || childs === void 0 ? void 0 : childs.findIndex((c) => c === this.getActiveChild(host, config));
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
    }
    /**
     * Returns the active focusable child element. If there's no active
     * focusable child element, the first focusable child is returned.
     */
    getActiveChild(host, config) {
        const persisted = this.getPersisted(host, config === null || config === void 0 ? void 0 : config.group);
        if (persisted) {
            return persisted;
        }
        const children = this.getChildren(host, config);
        let index = children.findIndex((tab) => this.isActive(tab));
        if (!index || index === -1) {
            index = 0;
        }
        return children[index];
    }
    getChildren(host, config) {
        if (typeof config.tab === 'string' && config.tab !== 'scroll') {
            return this.selectFocusUtil.query(host, config.tab);
        }
        else {
            return this.findFocusable(host, true);
        }
    }
    /**
     * Returns all focusable child elements of the host element.
     *
     * @param host The host element is used to query child focusable elements.
     * @param locked Indicates if locked elements (tabindex=-1) should be returned, defaults to false.
     * @param invisible Indicates if invisible child elements should be returned, defaults to false.
     */
    findFocusable(host, locked = false, invisible = false) {
        return this.selectFocusUtil.findFocusable(host, locked, invisible);
    }
    isActive(el) {
        const child = document.activeElement;
        const selector = child.tagName;
        return (el === child ||
            !!Array.from(el.querySelectorAll(selector)).find((e) => e === child));
    }
};
TabFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TabFocusService_Factory() { return new TabFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TabFocusService, providedIn: "root" });
TabFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TabFocusService);
export { TabFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90YWIvdGFiLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU1uRSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGdCQUFnQjtJQUNuRDs7T0FFRztJQUNILE9BQU8sQ0FDTCxJQUFpQixFQUNqQixNQUFzQixFQUN0QixTQUFxQixFQUNyQixLQUFvQjtRQUVwQixJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxHQUFHLEVBQUU7WUFDZixNQUFNLElBQUksR0FDUixNQUFNLENBQUMsR0FBRyxLQUFLLFFBQVE7Z0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0MsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUssR0FBRztZQUVkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGtCQUFrQixDQUMxQixJQUFpQixFQUNqQixNQUFzQixFQUN0QixTQUFxQjs7UUFFckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9B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YXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUYWJGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkZvY3VzU2VydmljZSBleHRlbmRzIEF1dG9Gb2N1c1NlcnZpY2Uge1xuICAvKipcbiAgICogTW92ZXMgdG8gdGhlIG5leHQgKG9yIHByZXZpb3VzKSB0YWIuXG4gICAqL1xuICBtb3ZlVGFiKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWcsXG4gICAgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTLFxuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50XG4gICk6IHZvaWQge1xuICAgIGlmIChjb25maWc/LnRhYikge1xuICAgICAgY29uc3QgbmV4dCA9XG4gICAgICAgIGNvbmZpZy50YWIgPT09ICdzY3JvbGwnXG4gICAgICAgICAgPyB0aGlzLmZpbmROZXh0U2Nyb2xsYWJsZShob3N0LCBjb25maWcsIGluY3JlbWVudClcbiAgICAgICAgICA6IHRoaXMuZmluZE5leHQoaG9zdCwgY29uZmlnLCBpbmNyZW1lbnQpO1xuXG4gICAgICBuZXh0Py5mb2N1cygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyBvdXQgdmlydHVhbCBzbGlkZXMgb3V0IG9mIHRoZSBmdWxsIHNjcm9sbGFibGUgYXJlYSwgdG8gYWxsb3dcbiAgICogZm9yIG1heGltdW0gZmxleGliaWxpdHkgZm9yIHRoZSB1bmRlcmx5aW5nIGxheW91dCB3aXRob3V0IHVzaW5nIGhhcmRjb2RlZFxuICAgKiBzbGlkZSBzaXplcy5cbiAgICovXG4gIHByb3RlY3RlZCBmaW5kTmV4dFNjcm9sbGFibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVNcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlQ2hpbGQoaG9zdCwgY29uZmlnKTtcblxuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHNsaWRlIGNvdW50XG4gICAgY29uc3QgdmlydHVhbFNsaWRlQ291bnQgPSBNYXRoLnJvdW5kKGhvc3Quc2Nyb2xsV2lkdGggLyBob3N0LmNsaWVudFdpZHRoKTtcblxuICAgIC8vIGZpbmQgY3VycmVudCB2aXJ0dWFsIHNsaWRlXG4gICAgY29uc3QgY3VycmVudFZpcnR1YWxTbGlkZSA9IE1hdGgucm91bmQoXG4gICAgICBhY3RpdmUub2Zmc2V0TGVmdCAvIChob3N0LnNjcm9sbFdpZHRoIC8gdmlydHVhbFNsaWRlQ291bnQpXG4gICAgKTtcblxuICAgIGxldCBuZXh0VmlydHVhbFNsaWRlID0gY3VycmVudFZpcnR1YWxTbGlkZSArIGluY3JlbWVudDtcbiAgICBpZiAoXG4gICAgICBpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuTkVYVCAmJlxuICAgICAgbmV4dFZpcnR1YWxTbGlkZSA+PSB2aXJ0dWFsU2xpZGVDb3VudFxuICAgICkge1xuICAgICAgbmV4dFZpcnR1YWxTbGlkZSA9IDA7XG4gICAgfVxuICAgIGlmIChpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuUFJFViAmJiBuZXh0VmlydHVhbFNsaWRlIDwgMCkge1xuICAgICAgbmV4dFZpcnR1YWxTbGlkZSA9IHZpcnR1YWxTbGlkZUNvdW50IC0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdEl0ZW1Pbk5leHRTbGlkZSA9IHRoaXMuZ2V0Q2hpbGRyZW4oaG9zdCwgY29uZmlnKT8uZmluZChcbiAgICAgICh0YWIpID0+XG4gICAgICAgIHRhYi5vZmZzZXRMZWZ0ID49XG4gICAgICAgIChob3N0LnNjcm9sbFdpZHRoIC8gdmlydHVhbFNsaWRlQ291bnQpICogbmV4dFZpcnR1YWxTbGlkZVxuICAgICk7XG5cbiAgICByZXR1cm4gZmlyc3RJdGVtT25OZXh0U2xpZGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluZE5leHQoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVNcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNoaWxkcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oaG9zdCwgY29uZmlnKTtcbiAgICBsZXQgYWN0aXZlSW5kZXggPSBjaGlsZHM/LmZpbmRJbmRleChcbiAgICAgIChjKSA9PiBjID09PSB0aGlzLmdldEFjdGl2ZUNoaWxkKGhvc3QsIGNvbmZpZylcbiAgICApO1xuXG4gICAgaWYgKCFhY3RpdmVJbmRleCB8fCBhY3RpdmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGFjdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gICAgYWN0aXZlSW5kZXggKz0gaW5jcmVtZW50O1xuXG4gICAgaWYgKGluY3JlbWVudCA9PT0gTU9WRV9GT0NVUy5ORVhUICYmIGFjdGl2ZUluZGV4ID49IGNoaWxkcz8ubGVuZ3RoKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IGNoaWxkcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBpZiAoaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLlBSRVYgJiYgYWN0aXZlSW5kZXggPCAwKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHMgPyBjaGlsZHNbYWN0aXZlSW5kZXhdIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFjdGl2ZSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudC4gSWYgdGhlcmUncyBubyBhY3RpdmVcbiAgICogZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQsIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QWN0aXZlQ2hpbGQoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZ1xuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcGVyc2lzdGVkID0gdGhpcy5nZXRQZXJzaXN0ZWQoaG9zdCwgY29uZmlnPy5ncm91cCk7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgcmV0dXJuIHBlcnNpc3RlZDtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGhvc3QsIGNvbmZpZyk7XG4gICAgbGV0IGluZGV4ID0gY2hpbGRyZW4uZmluZEluZGV4KCh0YWIpID0+IHRoaXMuaXNBY3RpdmUodGFiKSk7XG4gICAgaWYgKCFpbmRleCB8fCBpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuW2luZGV4XTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDaGlsZHJlbihcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnXG4gICk6IEhUTUxFbGVtZW50W10ge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhYiA9PT0gJ3N0cmluZycgJiYgY29uZmlnLnRhYiAhPT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZvY3VzVXRpbC5xdWVyeShob3N0LCBjb25maWcudGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZEZvY3VzYWJsZShob3N0LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBob3N0IFRoZSBob3N0IGVsZW1lbnQgaXMgdXNlZCB0byBxdWVyeSBjaGlsZCBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqIEBwYXJhbSBsb2NrZWQgSW5kaWNhdGVzIGlmIGxvY2tlZCBlbGVtZW50cyAodGFiaW5kZXg9LTEpIHNob3VsZCBiZSByZXR1cm5lZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqIEBwYXJhbSBpbnZpc2libGUgSW5kaWNhdGVzIGlmIGludmlzaWJsZSBjaGlsZCBlbGVtZW50cyBzaG91bGQgYmUgcmV0dXJuZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgZmluZEZvY3VzYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBsb2NrZWQgPSBmYWxzZSxcbiAgICBpbnZpc2libGUgPSBmYWxzZVxuICApOiBIVE1MRWxlbWVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RGb2N1c1V0aWwuZmluZEZvY3VzYWJsZShob3N0LCBsb2NrZWQsIGludmlzaWJsZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNBY3RpdmUoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNlbGVjdG9yID0gY2hpbGQudGFnTmFtZTtcblxuICAgIHJldHVybiAoXG4gICAgICBlbCA9PT0gY2hpbGQgfHxcbiAgICAgICEhQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmluZCgoZSkgPT4gZSA9PT0gY2hpbGQpXG4gICAgKTtcbiAgfVxufVxuIl19