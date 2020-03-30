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
        const firstItemOnNextSlide = (_a = this.getChildren(host, config)) === null || _a === void 0 ? void 0 : _a.find(tab => tab.offsetLeft >=
            (host.scrollWidth / virtualSlideCount) * nextVirtualSlide);
        return firstItemOnNextSlide;
    }
    findNext(host, config, increment) {
        const childs = this.getChildren(host, config);
        let activeIndex = childs === null || childs === void 0 ? void 0 : childs.findIndex(c => c === this.getActiveChild(host, config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90YWIvdGFiLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU1uRSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGdCQUFnQjtJQUNuRDs7T0FFRztJQUNILE9BQU8sQ0FDTCxJQUFpQixFQUNqQixNQUFzQixFQUN0QixTQUFxQixFQUNyQixLQUFvQjtRQUVwQixJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxHQUFHLEVBQUU7WUFDZixNQUFNLElBQUksR0FDUixNQUFNLENBQUMsR0FBRyxLQUFLLFFBQVE7Z0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0MsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUssR0FBRztZQUVkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGtCQUFrQixDQUMxQixJQUFpQixFQUNqQixNQUFzQixFQUN0QixTQUFxQjs7UUFFckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9B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Q0FBQztJQUN6QixDQUFDO0lBRVMsV0FBVyxDQUNuQixJQUFpQixFQUNqQixNQUFzQjtRQUV0QixJQUFJLE9BQU8sTUFBTSxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGFBQWEsQ0FDWCxJQUFpQixFQUNqQixNQUFNLEdBQUcsS0FBSyxFQUNkLFNBQVMsR0FBRyxLQUFLO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRVMsUUFBUSxDQUFDLEVBQWU7UUFDaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBRS9CLE9BQU8sQ0FDTCxFQUFFLEtBQUssS0FBSztZQUNaLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztBQWpKWSxlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBaUozQjtTQWpKWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzU2VydmljZSB9IGZyb20gJy4uL2F1dG9mb2N1cy9hdXRvLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTU9WRV9GT0NVUywgVGFiRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJGb2N1c1NlcnZpY2UgZXh0ZW5kcyBBdXRvRm9jdXNTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIE1vdmVzIHRvIHRoZSBuZXh0IChvciBwcmV2aW91cykgdGFiLlxuICAgKi9cbiAgbW92ZVRhYihcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnLFxuICAgIGluY3JlbWVudDogTU9WRV9GT0NVUyxcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudFxuICApOiB2b2lkIHtcbiAgICBpZiAoY29uZmlnPy50YWIpIHtcbiAgICAgIGNvbnN0IG5leHQgPVxuICAgICAgICBjb25maWcudGFiID09PSAnc2Nyb2xsJ1xuICAgICAgICAgID8gdGhpcy5maW5kTmV4dFNjcm9sbGFibGUoaG9zdCwgY29uZmlnLCBpbmNyZW1lbnQpXG4gICAgICAgICAgOiB0aGlzLmZpbmROZXh0KGhvc3QsIGNvbmZpZywgaW5jcmVtZW50KTtcblxuICAgICAgbmV4dD8uZm9jdXMoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZHMgb3V0IHZpcnR1YWwgc2xpZGVzIG91dCBvZiB0aGUgZnVsbCBzY3JvbGxhYmxlIGFyZWEsIHRvIGFsbG93XG4gICAqIGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5IGZvciB0aGUgdW5kZXJseWluZyBsYXlvdXQgd2l0aG91dCB1c2luZyBoYXJkY29kZWRcbiAgICogc2xpZGUgc2l6ZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZmluZE5leHRTY3JvbGxhYmxlKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWcsXG4gICAgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZUNoaWxkKGhvc3QsIGNvbmZpZyk7XG5cbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzbGlkZSBjb3VudFxuICAgIGNvbnN0IHZpcnR1YWxTbGlkZUNvdW50ID0gTWF0aC5yb3VuZChob3N0LnNjcm9sbFdpZHRoIC8gaG9zdC5jbGllbnRXaWR0aCk7XG5cbiAgICAvLyBmaW5kIGN1cnJlbnQgdmlydHVhbCBzbGlkZVxuICAgIGNvbnN0IGN1cnJlbnRWaXJ0dWFsU2xpZGUgPSBNYXRoLnJvdW5kKFxuICAgICAgYWN0aXZlLm9mZnNldExlZnQgLyAoaG9zdC5zY3JvbGxXaWR0aCAvIHZpcnR1YWxTbGlkZUNvdW50KVxuICAgICk7XG5cbiAgICBsZXQgbmV4dFZpcnR1YWxTbGlkZSA9IGN1cnJlbnRWaXJ0dWFsU2xpZGUgKyBpbmNyZW1lbnQ7XG4gICAgaWYgKFxuICAgICAgaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLk5FWFQgJiZcbiAgICAgIG5leHRWaXJ0dWFsU2xpZGUgPj0gdmlydHVhbFNsaWRlQ291bnRcbiAgICApIHtcbiAgICAgIG5leHRWaXJ0dWFsU2xpZGUgPSAwO1xuICAgIH1cbiAgICBpZiAoaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLlBSRVYgJiYgbmV4dFZpcnR1YWxTbGlkZSA8IDApIHtcbiAgICAgIG5leHRWaXJ0dWFsU2xpZGUgPSB2aXJ0dWFsU2xpZGVDb3VudCAtIDE7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RJdGVtT25OZXh0U2xpZGUgPSB0aGlzLmdldENoaWxkcmVuKGhvc3QsIGNvbmZpZyk/LmZpbmQoXG4gICAgICB0YWIgPT5cbiAgICAgICAgdGFiLm9mZnNldExlZnQgPj1cbiAgICAgICAgKGhvc3Quc2Nyb2xsV2lkdGggLyB2aXJ0dWFsU2xpZGVDb3VudCkgKiBuZXh0VmlydHVhbFNsaWRlXG4gICAgKTtcblxuICAgIHJldHVybiBmaXJzdEl0ZW1Pbk5leHRTbGlkZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5kTmV4dChcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnLFxuICAgIGluY3JlbWVudDogTU9WRV9GT0NVU1xuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY2hpbGRzID0gdGhpcy5nZXRDaGlsZHJlbihob3N0LCBjb25maWcpO1xuICAgIGxldCBhY3RpdmVJbmRleCA9IGNoaWxkcz8uZmluZEluZGV4KFxuICAgICAgYyA9PiBjID09PSB0aGlzLmdldEFjdGl2ZUNoaWxkKGhvc3QsIGNvbmZpZylcbiAgICApO1xuXG4gICAgaWYgKCFhY3RpdmVJbmRleCB8fCBhY3RpdmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGFjdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gICAgYWN0aXZlSW5kZXggKz0gaW5jcmVtZW50O1xuXG4gICAgaWYgKGluY3JlbWVudCA9PT0gTU9WRV9GT0NVUy5ORVhUICYmIGFjdGl2ZUluZGV4ID49IGNoaWxkcz8ubGVuZ3RoKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IGNoaWxkcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBpZiAoaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLlBSRVYgJiYgYWN0aXZlSW5kZXggPCAwKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHMgPyBjaGlsZHNbYWN0aXZlSW5kZXhdIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFjdGl2ZSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudC4gSWYgdGhlcmUncyBubyBhY3RpdmVcbiAgICogZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQsIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QWN0aXZlQ2hpbGQoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZ1xuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcGVyc2lzdGVkID0gdGhpcy5nZXRQZXJzaXN0ZWQoaG9zdCwgY29uZmlnPy5ncm91cCk7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgcmV0dXJuIHBlcnNpc3RlZDtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGhvc3QsIGNvbmZpZyk7XG4gICAgbGV0IGluZGV4ID0gY2hpbGRyZW4uZmluZEluZGV4KHRhYiA9PiB0aGlzLmlzQWN0aXZlKHRhYikpO1xuICAgIGlmICghaW5kZXggfHwgaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbltpbmRleF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2hpbGRyZW4oXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZ1xuICApOiBIVE1MRWxlbWVudFtdIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YWIgPT09ICdzdHJpbmcnICYmIGNvbmZpZy50YWIgIT09ICdzY3JvbGwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RGb2N1c1V0aWwucXVlcnkoaG9zdCwgY29uZmlnLnRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRGb2N1c2FibGUoaG9zdCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaG9zdCBUaGUgaG9zdCBlbGVtZW50IGlzIHVzZWQgdG8gcXVlcnkgY2hpbGQgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0gbG9ja2VkIEluZGljYXRlcyBpZiBsb2NrZWQgZWxlbWVudHMgKHRhYmluZGV4PS0xKSBzaG91bGQgYmUgcmV0dXJuZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgKiBAcGFyYW0gaW52aXNpYmxlIEluZGljYXRlcyBpZiBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGZpbmRGb2N1c2FibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgbG9ja2VkID0gZmFsc2UsXG4gICAgaW52aXNpYmxlID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9jdXNVdGlsLmZpbmRGb2N1c2FibGUoaG9zdCwgbG9ja2VkLCBpbnZpc2libGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQWN0aXZlKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkLnRhZ05hbWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZWwgPT09IGNoaWxkIHx8XG4gICAgICAhIUFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZpbmQoZSA9PiBlID09PSBjaGlsZClcbiAgICApO1xuICB9XG59XG4iXX0=