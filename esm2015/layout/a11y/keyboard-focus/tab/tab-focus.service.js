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
        var _a, _b;
        if ((_a = config) === null || _a === void 0 ? void 0 : _a.tab) {
            const next = config.tab === 'scroll'
                ? this.findNextScrollable(host, config, increment)
                : this.findNext(host, config, increment);
            (_b = next) === null || _b === void 0 ? void 0 : _b.focus();
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
        const firstItemOnNextSlide = (_a = this.getChildren(host, config)) === null || _a === void 0 ? void 0 : _a.find(tab => tab.offsetLeft >=
            (host.scrollWidth / virtualSlideCount) * nextVirtualSlide);
        return firstItemOnNextSlide;
    }
    findNext(host, config, increment) {
        var _a, _b;
        const childs = this.getChildren(host, config);
        let activeIndex = (_a = childs) === null || _a === void 0 ? void 0 : _a.findIndex(c => c === this.getActiveChild(host, config));
        if (!activeIndex || activeIndex === -1) {
            activeIndex = 0;
        }
        activeIndex += increment;
        if (increment === 1 /* NEXT */ && activeIndex >= ((_b = childs) === null || _b === void 0 ? void 0 : _b.length)) {
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
        var _a;
        const persisted = this.getPersisted(host, (_a = config) === null || _a === void 0 ? void 0 : _a.group);
        if (persisted) {
            return persisted;
        }
        const children = this.getChildren(host, config);
        let index = children.findIndex(tab => this.isActive(tab));
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
            !!Array.from(el.querySelectorAll(selector)).find(e => e === child));
    }
};
TabFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TabFocusService_Factory() { return new TabFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: TabFocusService, providedIn: "root" });
TabFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TabFocusService);
export { TabFocusService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90YWIvdGFiLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU1uRSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGdCQUFnQjtJQUNuRDs7T0FFRztJQUNILE9BQU8sQ0FDTCxJQUFpQixFQUNqQixNQUFzQixFQUN0QixTQUFxQixFQUNyQixLQUFvQjs7UUFFcEIsVUFBSSxNQUFNLDBDQUFFLEdBQUcsRUFBRTtZQUNmLE1BQU0sSUFBSSxHQUNSLE1BQU0sQ0FBQyxHQUFHLEtBQUssUUFBUTtnQkFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU3QyxNQUFBLElBQUksMENBQUUsS0FBSyxHQUFHO1lBRWQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ08sa0JBQWtCLENBQzFCLElBQWlCLEVBQ2pCLE1BQXNCLEVBQ3RCLFNBQXFCOztRQUVyQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBQ0QsY0FBYztRQUNkLE1BQU0saUJBQWlC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QUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxhQUFhLENBQ1gsSUFBaUIsRUFDakIsTUFBTSxHQUFHLEtBQUssRUFDZCxTQUFTLEdBQUcsS0FBSztRQUVqQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVTLFFBQVEsQ0FBQyxFQUFlO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUUvQixPQUFPLENBQ0wsRUFBRSxLQUFLLEtBQUs7WUFDWixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7QUFqSlksZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQWlKM0I7U0FqSlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9hdXRvZm9jdXMvYXV0by1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE1PVkVfRk9DVVMsIFRhYkZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFiRm9jdXNTZXJ2aWNlIGV4dGVuZHMgQXV0b0ZvY3VzU2VydmljZSB7XG4gIC8qKlxuICAgKiBNb3ZlcyB0byB0aGUgbmV4dCAob3IgcHJldmlvdXMpIHRhYi5cbiAgICovXG4gIG1vdmVUYWIoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVMsXG4gICAgZXZlbnQ6IEtleWJvYXJkRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgaWYgKGNvbmZpZz8udGFiKSB7XG4gICAgICBjb25zdCBuZXh0ID1cbiAgICAgICAgY29uZmlnLnRhYiA9PT0gJ3Njcm9sbCdcbiAgICAgICAgICA/IHRoaXMuZmluZE5leHRTY3JvbGxhYmxlKGhvc3QsIGNvbmZpZywgaW5jcmVtZW50KVxuICAgICAgICAgIDogdGhpcy5maW5kTmV4dChob3N0LCBjb25maWcsIGluY3JlbWVudCk7XG5cbiAgICAgIG5leHQ/LmZvY3VzKCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYnVpbGRzIG91dCB2aXJ0dWFsIHNsaWRlcyBvdXQgb2YgdGhlIGZ1bGwgc2Nyb2xsYWJsZSBhcmVhLCB0byBhbGxvd1xuICAgKiBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eSBmb3IgdGhlIHVuZGVybHlpbmcgbGF5b3V0IHdpdGhvdXQgdXNpbmcgaGFyZGNvZGVkXG4gICAqIHNsaWRlIHNpemVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZpbmROZXh0U2Nyb2xsYWJsZShcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnLFxuICAgIGluY3JlbWVudDogTU9WRV9GT0NVU1xuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmVDaGlsZChob3N0LCBjb25maWcpO1xuXG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gc2xpZGUgY291bnRcbiAgICBjb25zdCB2aXJ0dWFsU2xpZGVDb3VudCA9IE1hdGgucm91bmQoaG9zdC5zY3JvbGxXaWR0aCAvIGhvc3QuY2xpZW50V2lkdGgpO1xuXG4gICAgLy8gZmluZCBjdXJyZW50IHZpcnR1YWwgc2xpZGVcbiAgICBjb25zdCBjdXJyZW50VmlydHVhbFNsaWRlID0gTWF0aC5yb3VuZChcbiAgICAgIGFjdGl2ZS5vZmZzZXRMZWZ0IC8gKGhvc3Quc2Nyb2xsV2lkdGggLyB2aXJ0dWFsU2xpZGVDb3VudClcbiAgICApO1xuXG4gICAgbGV0IG5leHRWaXJ0dWFsU2xpZGUgPSBjdXJyZW50VmlydHVhbFNsaWRlICsgaW5jcmVtZW50O1xuICAgIGlmIChcbiAgICAgIGluY3JlbWVudCA9PT0gTU9WRV9GT0NVUy5ORVhUICYmXG4gICAgICBuZXh0VmlydHVhbFNsaWRlID49IHZpcnR1YWxTbGlkZUNvdW50XG4gICAgKSB7XG4gICAgICBuZXh0VmlydHVhbFNsaWRlID0gMDtcbiAgICB9XG4gICAgaWYgKGluY3JlbWVudCA9PT0gTU9WRV9GT0NVUy5QUkVWICYmIG5leHRWaXJ0dWFsU2xpZGUgPCAwKSB7XG4gICAgICBuZXh0VmlydHVhbFNsaWRlID0gdmlydHVhbFNsaWRlQ291bnQgLSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0SXRlbU9uTmV4dFNsaWRlID0gdGhpcy5nZXRDaGlsZHJlbihob3N0LCBjb25maWcpPy5maW5kKFxuICAgICAgdGFiID0+XG4gICAgICAgIHRhYi5vZmZzZXRMZWZ0ID49XG4gICAgICAgIChob3N0LnNjcm9sbFdpZHRoIC8gdmlydHVhbFNsaWRlQ291bnQpICogbmV4dFZpcnR1YWxTbGlkZVxuICAgICk7XG5cbiAgICByZXR1cm4gZmlyc3RJdGVtT25OZXh0U2xpZGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmluZE5leHQoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVNcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNoaWxkcyA9IHRoaXMuZ2V0Q2hpbGRyZW4oaG9zdCwgY29uZmlnKTtcbiAgICBsZXQgYWN0aXZlSW5kZXggPSBjaGlsZHM/LmZpbmRJbmRleChcbiAgICAgIGMgPT4gYyA9PT0gdGhpcy5nZXRBY3RpdmVDaGlsZChob3N0LCBjb25maWcpXG4gICAgKTtcblxuICAgIGlmICghYWN0aXZlSW5kZXggfHwgYWN0aXZlSW5kZXggPT09IC0xKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICAgIGFjdGl2ZUluZGV4ICs9IGluY3JlbWVudDtcblxuICAgIGlmIChpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuTkVYVCAmJiBhY3RpdmVJbmRleCA+PSBjaGlsZHM/Lmxlbmd0aCkge1xuICAgICAgYWN0aXZlSW5kZXggPSBjaGlsZHMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgaWYgKGluY3JlbWVudCA9PT0gTU9WRV9GT0NVUy5QUkVWICYmIGFjdGl2ZUluZGV4IDwgMCkge1xuICAgICAgYWN0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRzID8gY2hpbGRzW2FjdGl2ZUluZGV4XSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhY3RpdmUgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuIElmIHRoZXJlJ3Mgbm8gYWN0aXZlXG4gICAqIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50LCB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEFjdGl2ZUNoaWxkKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWdcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBlcnNpc3RlZCA9IHRoaXMuZ2V0UGVyc2lzdGVkKGhvc3QsIGNvbmZpZz8uZ3JvdXApO1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHJldHVybiBwZXJzaXN0ZWQ7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihob3N0LCBjb25maWcpO1xuICAgIGxldCBpbmRleCA9IGNoaWxkcmVuLmZpbmRJbmRleCh0YWIgPT4gdGhpcy5pc0FjdGl2ZSh0YWIpKTtcbiAgICBpZiAoIWluZGV4IHx8IGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW5baW5kZXhdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENoaWxkcmVuKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWdcbiAgKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFiID09PSAnc3RyaW5nJyAmJiBjb25maWcudGFiICE9PSAnc2Nyb2xsJykge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9jdXNVdGlsLnF1ZXJ5KGhvc3QsIGNvbmZpZy50YWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kRm9jdXNhYmxlKGhvc3QsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGhvc3QgVGhlIGhvc3QgZWxlbWVudCBpcyB1c2VkIHRvIHF1ZXJ5IGNoaWxkIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICogQHBhcmFtIGxvY2tlZCBJbmRpY2F0ZXMgaWYgbG9ja2VkIGVsZW1lbnRzICh0YWJpbmRleD0tMSkgc2hvdWxkIGJlIHJldHVybmVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICogQHBhcmFtIGludmlzaWJsZSBJbmRpY2F0ZXMgaWYgaW52aXNpYmxlIGNoaWxkIGVsZW1lbnRzIHNob3VsZCBiZSByZXR1cm5lZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBmaW5kRm9jdXNhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGxvY2tlZCA9IGZhbHNlLFxuICAgIGludmlzaWJsZSA9IGZhbHNlXG4gICk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdEZvY3VzVXRpbC5maW5kRm9jdXNhYmxlKGhvc3QsIGxvY2tlZCwgaW52aXNpYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0FjdGl2ZShlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZC50YWdOYW1lO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGVsID09PSBjaGlsZCB8fFxuICAgICAgISFBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5maW5kKGUgPT4gZSA9PT0gY2hpbGQpXG4gICAgKTtcbiAgfVxufVxuIl19