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
     * returns all focusable child elements of the host element.
     */
    findFocusable(host, locked = false) {
        return this.selectFocusUtil.findFocusable(host, locked);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy90YWIvdGFiLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU1uRSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFnQixTQUFRLGdCQUFnQjtJQUNuRDs7T0FFRztJQUNILE9BQU8sQ0FDTCxJQUFpQixFQUNqQixNQUFzQixFQUN0QixTQUFxQixFQUNyQixLQUFvQjs7UUFFcEIsVUFBSSxNQUFNLDBDQUFFLEdBQUcsRUFBRTtZQUNmLE1BQU0sSUFBSSxHQUNSLE1BQU0sQ0FBQyxHQUFHLEtBQUssUUFBUTtnQkFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU3QyxNQUFBLElBQUksMENBQUUsS0FBSyxHQUFHO1lBRWQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ08sa0JBQWtCLENBQzFCLElBQWlCLEVBQ2pCLE1BQXNCLEVBQ3RCLFNBQXFCOztRQUVyQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBQ0QsY0FBYztRQUNkLE1BQU0saUJBQWlC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QUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxJQUFpQixFQUFFLE1BQU0sR0FBRyxLQUFLO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUyxRQUFRLENBQUMsRUFBZTtRQUNoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFL0IsT0FBTyxDQUNMLEVBQUUsS0FBSyxLQUFLO1lBQ1osQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O0FBeklZLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0F5STNCO1NBeklZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUYWJGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkZvY3VzU2VydmljZSBleHRlbmRzIEF1dG9Gb2N1c1NlcnZpY2Uge1xuICAvKipcbiAgICogTW92ZXMgdG8gdGhlIG5leHQgKG9yIHByZXZpb3VzKSB0YWIuXG4gICAqL1xuICBtb3ZlVGFiKFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWcsXG4gICAgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTLFxuICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50XG4gICk6IHZvaWQge1xuICAgIGlmIChjb25maWc/LnRhYikge1xuICAgICAgY29uc3QgbmV4dCA9XG4gICAgICAgIGNvbmZpZy50YWIgPT09ICdzY3JvbGwnXG4gICAgICAgICAgPyB0aGlzLmZpbmROZXh0U2Nyb2xsYWJsZShob3N0LCBjb25maWcsIGluY3JlbWVudClcbiAgICAgICAgICA6IHRoaXMuZmluZE5leHQoaG9zdCwgY29uZmlnLCBpbmNyZW1lbnQpO1xuXG4gICAgICBuZXh0Py5mb2N1cygpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyBvdXQgdmlydHVhbCBzbGlkZXMgb3V0IG9mIHRoZSBmdWxsIHNjcm9sbGFibGUgYXJlYSwgdG8gYWxsb3dcbiAgICogZm9yIG1heGltdW0gZmxleGliaWxpdHkgZm9yIHRoZSB1bmRlcmx5aW5nIGxheW91dCB3aXRob3V0IHVzaW5nIGhhcmRjb2RlZFxuICAgKiBzbGlkZSBzaXplcy5cbiAgICovXG4gIHByb3RlY3RlZCBmaW5kTmV4dFNjcm9sbGFibGUoXG4gICAgaG9zdDogSFRNTEVsZW1lbnQsXG4gICAgY29uZmlnOiBUYWJGb2N1c0NvbmZpZyxcbiAgICBpbmNyZW1lbnQ6IE1PVkVfRk9DVVNcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlQ2hpbGQoaG9zdCwgY29uZmlnKTtcblxuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHNsaWRlIGNvdW50XG4gICAgY29uc3QgdmlydHVhbFNsaWRlQ291bnQgPSBNYXRoLnJvdW5kKGhvc3Quc2Nyb2xsV2lkdGggLyBob3N0LmNsaWVudFdpZHRoKTtcblxuICAgIC8vIGZpbmQgY3VycmVudCB2aXJ0dWFsIHNsaWRlXG4gICAgY29uc3QgY3VycmVudFZpcnR1YWxTbGlkZSA9IE1hdGgucm91bmQoXG4gICAgICBhY3RpdmUub2Zmc2V0TGVmdCAvIChob3N0LnNjcm9sbFdpZHRoIC8gdmlydHVhbFNsaWRlQ291bnQpXG4gICAgKTtcblxuICAgIGxldCBuZXh0VmlydHVhbFNsaWRlID0gY3VycmVudFZpcnR1YWxTbGlkZSArIGluY3JlbWVudDtcbiAgICBpZiAoXG4gICAgICBpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuTkVYVCAmJlxuICAgICAgbmV4dFZpcnR1YWxTbGlkZSA+PSB2aXJ0dWFsU2xpZGVDb3VudFxuICAgICkge1xuICAgICAgbmV4dFZpcnR1YWxTbGlkZSA9IDA7XG4gICAgfVxuICAgIGlmIChpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuUFJFViAmJiBuZXh0VmlydHVhbFNsaWRlIDwgMCkge1xuICAgICAgbmV4dFZpcnR1YWxTbGlkZSA9IHZpcnR1YWxTbGlkZUNvdW50IC0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdEl0ZW1Pbk5leHRTbGlkZSA9IHRoaXMuZ2V0Q2hpbGRyZW4oaG9zdCwgY29uZmlnKT8uZmluZChcbiAgICAgIHRhYiA9PlxuICAgICAgICB0YWIub2Zmc2V0TGVmdCA+PVxuICAgICAgICAoaG9zdC5zY3JvbGxXaWR0aCAvIHZpcnR1YWxTbGlkZUNvdW50KSAqIG5leHRWaXJ0dWFsU2xpZGVcbiAgICApO1xuXG4gICAgcmV0dXJuIGZpcnN0SXRlbU9uTmV4dFNsaWRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmROZXh0KFxuICAgIGhvc3Q6IEhUTUxFbGVtZW50LFxuICAgIGNvbmZpZzogVGFiRm9jdXNDb25maWcsXG4gICAgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjaGlsZHMgPSB0aGlzLmdldENoaWxkcmVuKGhvc3QsIGNvbmZpZyk7XG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gY2hpbGRzPy5maW5kSW5kZXgoXG4gICAgICBjID0+IGMgPT09IHRoaXMuZ2V0QWN0aXZlQ2hpbGQoaG9zdCwgY29uZmlnKVxuICAgICk7XG5cbiAgICBpZiAoIWFjdGl2ZUluZGV4IHx8IGFjdGl2ZUluZGV4ID09PSAtMSkge1xuICAgICAgYWN0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgICBhY3RpdmVJbmRleCArPSBpbmNyZW1lbnQ7XG5cbiAgICBpZiAoaW5jcmVtZW50ID09PSBNT1ZFX0ZPQ1VTLk5FWFQgJiYgYWN0aXZlSW5kZXggPj0gY2hpbGRzPy5sZW5ndGgpIHtcbiAgICAgIGFjdGl2ZUluZGV4ID0gY2hpbGRzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGlmIChpbmNyZW1lbnQgPT09IE1PVkVfRk9DVVMuUFJFViAmJiBhY3RpdmVJbmRleCA8IDApIHtcbiAgICAgIGFjdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcyA/IGNoaWxkc1thY3RpdmVJbmRleF0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWN0aXZlIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50LiBJZiB0aGVyZSdzIG5vIGFjdGl2ZVxuICAgKiBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCwgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBpcyByZXR1cm5lZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRBY3RpdmVDaGlsZChcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwZXJzaXN0ZWQgPSB0aGlzLmdldFBlcnNpc3RlZChob3N0LCBjb25maWc/Lmdyb3VwKTtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICByZXR1cm4gcGVyc2lzdGVkO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oaG9zdCwgY29uZmlnKTtcbiAgICBsZXQgaW5kZXggPSBjaGlsZHJlbi5maW5kSW5kZXgodGFiID0+IHRoaXMuaXNBY3RpdmUodGFiKSk7XG4gICAgaWYgKCFpbmRleCB8fCBpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuW2luZGV4XTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDaGlsZHJlbihcbiAgICBob3N0OiBIVE1MRWxlbWVudCxcbiAgICBjb25maWc6IFRhYkZvY3VzQ29uZmlnXG4gICk6IEhUTUxFbGVtZW50W10ge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhYiA9PT0gJ3N0cmluZycgJiYgY29uZmlnLnRhYiAhPT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEZvY3VzVXRpbC5xdWVyeShob3N0LCBjb25maWcudGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZEZvY3VzYWJsZShob3N0LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBmaW5kRm9jdXNhYmxlKGhvc3Q6IEhUTUxFbGVtZW50LCBsb2NrZWQgPSBmYWxzZSk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdEZvY3VzVXRpbC5maW5kRm9jdXNhYmxlKGhvc3QsIGxvY2tlZCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNBY3RpdmUoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNlbGVjdG9yID0gY2hpbGQudGFnTmFtZTtcblxuICAgIHJldHVybiAoXG4gICAgICBlbCA9PT0gY2hpbGQgfHxcbiAgICAgICEhQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZmluZChlID0+IGUgPT09IGNoaWxkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==