import { __decorate } from "tslib";
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, Renderer2, } from '@angular/core';
import { FOCUS_GROUP_ATTR } from '../keyboard-focus.model';
import { TrapFocusDirective } from '../trap/trap-focus.directive';
import { LockFocusService } from './lock-focus.service';
/**
 * Focusable elements exclude hidden elements by default, but this contradicts with
 * unlocking (hidden) elements.
 */
const UNLOCK_HIDDEN_ELEMENTS = true;
/**
 * Directive that adds persistence for focussed element in case
 * the elements are being rebuild. This happens often when change
 * detection kicks in because of new data set from the backend.
 */
let LockFocusDirective = class LockFocusDirective extends TrapFocusDirective {
    constructor(elementRef, service, renderer) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.renderer = renderer;
        this.defaultConfig = { lock: true };
        // @Input('cxLockFocus')
        this.config = {};
        /**
         * Emits an event when the host is unlocked.
         */
        this.unlock = new EventEmitter();
    }
    /**
     * When the user selects enter or space, the focusable childs are
     * unlocked, which means that the tabindex is set to 0.
     */
    handleEnter(event) {
        if (this.shouldLock && this.host === event.target) {
            this.unlockFocus(event);
            event.stopPropagation();
        }
    }
    /**
     * In case any of the children elements is touched by the mouse,
     * we unlock the group to not break the mouse-experience.
     */
    handleClick(event) {
        if (this.shouldLock && this.isLocked) {
            this.unlockFocus(event);
            event.stopPropagation();
        }
    }
    lockFocus() {
        this.addTabindexToChildren(-1);
    }
    unlockFocus(event) {
        this.unlock.emit(true);
        this.addTabindexToChildren(0);
        // we focus the host if the event was triggered from a child
        if ((event === null || event === void 0 ? void 0 : event.target) === this.host) {
            super.handleFocus(event);
        }
    }
    ngOnInit() {
        var _a, _b;
        super.ngOnInit();
        this.shouldLock = (_a = this.config) === null || _a === void 0 ? void 0 : _a.lock;
        if (this.shouldLock) {
            this.tabindex = 0;
            // Locked elements will be set to `autofocus` by default if it's not
            // been configured. This will ensure that autofocus kicks in upon unlock.
            if (!this.config.hasOwnProperty('autofocus')) {
                this.config.autofocus = true;
            }
            // Locked elements will be set to `focusOnEscape` by default if it's not
            // been configured. This will ensure that  the host gets locked again when
            // `escape` is pressed.
            if (!this.config.hasOwnProperty('focusOnEscape')) {
                this.config.focusOnEscape = !(((_b = this.config) === null || _b === void 0 ? void 0 : _b.focusOnEscape) === false);
            }
        }
    }
    ngAfterViewInit() {
        if (this.shouldLock) {
            /**
             * If the component hosts a group of focusable children elmenents,
             * we persist the group key to the children, so that they can taken this
             * into account when they persist their focus state.
             */
            if (!!this.group) {
                this.service.findFocusable(this.host).forEach((el) => 
                // we must do this in after view init as
                this.renderer.setAttribute(el, FOCUS_GROUP_ATTR, this.group));
            }
            if (this.shouldAutofocus) {
                this.handleFocus();
            }
        }
        super.ngAfterViewInit();
    }
    handleFocus(event) {
        if (this.shouldLock) {
            if (this.shouldUnlockAfterAutofocus(event)) {
                // Delay unlocking in case the host is using `ChangeDetectionStrategy.Default`
                setTimeout(() => this.unlockFocus(event));
            }
            else {
                setTimeout(() => this.lockFocus());
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                return;
            }
        }
        super.handleFocus(event);
    }
    handleEscape(event) {
        if (this.shouldLock) {
            this.service.clear(this.config.group);
        }
        super.handleEscape(event);
    }
    /**
     * When the handleFocus is called without an actual event, it's coming from Autofocus.
     * In this case we unlock the focusable children in case there's a focusable child that
     * was unlocked before.
     *
     * We keep this private to not polute the API.
     */
    shouldUnlockAfterAutofocus(event) {
        return !event && this.service.hasPersistedFocus(this.host, this.config);
    }
    /**
     * Add the tabindex attribute to the focusable children elements
     */
    addTabindexToChildren(i = 0) {
        if (this.shouldLock) {
            this.isLocked = i === -1;
            if (!(this.hasFocusableChildren && i === 0) || i === 0) {
                this.focusable.forEach((el) => this.renderer.setAttribute(el, 'tabindex', i.toString()));
            }
        }
    }
    /**
     * Utility method, returns all focusable children for the host element.
     *
     * We keep this private to not polute the API.
     */
    get hasFocusableChildren() {
        return this.service.hasFocusableChildren(this.host);
    }
    /**
     * Returns the focusable children of the host element. If the host element
     * is configured to be locked, the query is restricted to child elements
     * with a tabindex !== `-1`.
     *
     * We keep this private to not polute the API.
     */
    get focusable() {
        return this.service.findFocusable(this.host, this.shouldLock, UNLOCK_HIDDEN_ELEMENTS);
    }
};
LockFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LockFocusService },
    { type: Renderer2 }
];
__decorate([
    HostBinding('class.focus-lock')
], LockFocusDirective.prototype, "shouldLock", void 0);
__decorate([
    HostBinding('class.is-locked')
], LockFocusDirective.prototype, "isLocked", void 0);
__decorate([
    Output()
], LockFocusDirective.prototype, "unlock", void 0);
__decorate([
    HostListener('keydown.enter', ['$event']),
    HostListener('keydown.space', ['$event'])
], LockFocusDirective.prototype, "handleEnter", null);
__decorate([
    HostListener('click', ['$event'])
], LockFocusDirective.prototype, "handleClick", null);
LockFocusDirective = __decorate([
    Directive() // selector: '[cxLockFocus]'
], LockFocusDirective);
export { LockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFrQjtJQWdEeEQsWUFDWSxVQUFzQixFQUN0QixPQUF5QixFQUN6QixRQUFtQjtRQUU3QixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpEckIsa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFhdkM7O1dBRUc7UUFDTyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWlDL0MsQ0FBQztJQS9CRDs7O09BR0c7SUFHSCxXQUFXLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxJ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QkFBb0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSxTQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQy9CLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFVBQVUsRUFDZixzQkFBc0IsQ0FDdkIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXBJeUIsVUFBVTtZQUNiLGdCQUFnQjtZQUNmLFNBQVM7O0FBeENFO0lBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztzREFBcUI7QUFLckI7SUFBL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDO29EQUFtQjtBQUt4QztJQUFULE1BQU0sRUFBRTtrREFBc0M7QUFRL0M7SUFGQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FEQU16QztBQU9EO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FEQU1qQztBQTlDVSxrQkFBa0I7SUFEOUIsU0FBUyxFQUFFLENBQUMsNEJBQTRCO0dBQzVCLGtCQUFrQixDQXFMOUI7U0FyTFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRk9DVVNfR1JPVVBfQVRUUiwgTG9ja0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVHJhcEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vdHJhcC90cmFwLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2NrRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9sb2NrLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIEZvY3VzYWJsZSBlbGVtZW50cyBleGNsdWRlIGhpZGRlbiBlbGVtZW50cyBieSBkZWZhdWx0LCBidXQgdGhpcyBjb250cmFkaWN0cyB3aXRoXG4gKiB1bmxvY2tpbmcgKGhpZGRlbikgZWxlbWVudHMuXG4gKi9cbmNvbnN0IFVOTE9DS19ISURERU5fRUxFTUVOVFMgPSB0cnVlO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBhZGRzIHBlcnNpc3RlbmNlIGZvciBmb2N1c3NlZCBlbGVtZW50IGluIGNhc2VcbiAqIHRoZSBlbGVtZW50cyBhcmUgYmVpbmcgcmVidWlsZC4gVGhpcyBoYXBwZW5zIG9mdGVuIHdoZW4gY2hhbmdlXG4gKiBkZXRlY3Rpb24ga2lja3MgaW4gYmVjYXVzZSBvZiBuZXcgZGF0YSBzZXQgZnJvbSB0aGUgYmFja2VuZC5cbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4TG9ja0ZvY3VzXSdcbmV4cG9ydCBjbGFzcyBMb2NrRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBUcmFwRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogTG9ja0ZvY3VzQ29uZmlnID0geyBsb2NrOiB0cnVlIH07XG5cbiAgLy8gQElucHV0KCdjeExvY2tGb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBjb25maWd1cmVkIHRvIHVzZSBsb2NraW5nLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhXG4gICAqIENTUyBjbGFzcyBgZm9jdXMtbG9ja2AuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzLWxvY2snKSBzaG91bGRMb2NrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBsb2NrZWQuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGEgQ1NTIGNsYXNzIGBpcy1sb2NrZWRgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1sb2NrZWQnKSBpc0xvY2tlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaG9zdCBpcyB1bmxvY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB1bmxvY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBlbnRlciBvciBzcGFjZSwgdGhlIGZvY3VzYWJsZSBjaGlsZHMgYXJlXG4gICAqIHVubG9ja2VkLCB3aGljaCBtZWFucyB0aGF0IHRoZSB0YWJpbmRleCBpcyBzZXQgdG8gMC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaG9zdCA9PT0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNhc2UgYW55IG9mIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBpcyB0b3VjaGVkIGJ5IHRoZSBtb3VzZSxcbiAgICogd2UgdW5sb2NrIHRoZSBncm91cCB0byBub3QgYnJlYWsgdGhlIG1vdXNlLWV4cGVyaWVuY2UuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmlzTG9ja2VkKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBMb2NrRm9jdXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvY2tGb2N1cygpIHtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigtMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5sb2NrRm9jdXMoZXZlbnQ/OiBVSUV2ZW50KSB7XG4gICAgdGhpcy51bmxvY2suZW1pdCh0cnVlKTtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigwKTtcbiAgICAvLyB3ZSBmb2N1cyB0aGUgaG9zdCBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tIGEgY2hpbGRcbiAgICBpZiAoZXZlbnQ/LnRhcmdldCA9PT0gdGhpcy5ob3N0KSB7XG4gICAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5zaG91bGRMb2NrID0gdGhpcy5jb25maWc/LmxvY2s7XG5cbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gMDtcblxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBhdXRvZm9jdXNgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGF1dG9mb2N1cyBraWNrcyBpbiB1cG9uIHVubG9jay5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2F1dG9mb2N1cycpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGZvY3VzT25Fc2NhcGVgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0ICB0aGUgaG9zdCBnZXRzIGxvY2tlZCBhZ2FpbiB3aGVuXG4gICAgICAvLyBgZXNjYXBlYCBpcyBwcmVzc2VkLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZm9jdXNPbkVzY2FwZScpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZvY3VzT25Fc2NhcGUgPSAhKHRoaXMuY29uZmlnPy5mb2N1c09uRXNjYXBlID09PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGNvbXBvbmVudCBob3N0cyBhIGdyb3VwIG9mIGZvY3VzYWJsZSBjaGlsZHJlbiBlbG1lbmVudHMsXG4gICAgICAgKiB3ZSBwZXJzaXN0IHRoZSBncm91cCBrZXkgdG8gdGhlIGNoaWxkcmVuLCBzbyB0aGF0IHRoZXkgY2FuIHRha2VuIHRoaXNcbiAgICAgICAqIGludG8gYWNjb3VudCB3aGVuIHRoZXkgcGVyc2lzdCB0aGVpciBmb2N1cyBzdGF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKCEhdGhpcy5ncm91cCkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuZmluZEZvY3VzYWJsZSh0aGlzLmhvc3QpLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgIC8vIHdlIG11c3QgZG8gdGhpcyBpbiBhZnRlciB2aWV3IGluaXQgYXNcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgRk9DVVNfR1JPVVBfQVRUUiwgdGhpcy5ncm91cClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2hvdWxkQXV0b2ZvY3VzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cyhldmVudCkpIHtcbiAgICAgICAgLy8gRGVsYXkgdW5sb2NraW5nIGluIGNhc2UgdGhlIGhvc3QgaXMgdXNpbmcgYENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51bmxvY2tGb2N1cyhldmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvY2tGb2N1cygpKTtcbiAgICAgICAgZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUVzY2FwZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMuc2VydmljZS5jbGVhcih0aGlzLmNvbmZpZy5ncm91cCk7XG4gICAgfVxuICAgIHN1cGVyLmhhbmRsZUVzY2FwZShldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgaGFuZGxlRm9jdXMgaXMgY2FsbGVkIHdpdGhvdXQgYW4gYWN0dWFsIGV2ZW50LCBpdCdzIGNvbWluZyBmcm9tIEF1dG9mb2N1cy5cbiAgICogSW4gdGhpcyBjYXNlIHdlIHVubG9jayB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGluIGNhc2UgdGhlcmUncyBhIGZvY3VzYWJsZSBjaGlsZCB0aGF0XG4gICAqIHdhcyB1bmxvY2tlZCBiZWZvcmUuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgcmV0dXJuICFldmVudCAmJiB0aGlzLnNlcnZpY2UuaGFzUGVyc2lzdGVkRm9jdXModGhpcy5ob3N0LCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgdG8gdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBlbGVtZW50c1xuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFRhYmluZGV4VG9DaGlsZHJlbihpID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBpID09PSAtMTtcbiAgICAgIGlmICghKHRoaXMuaGFzRm9jdXNhYmxlQ2hpbGRyZW4gJiYgaSA9PT0gMCkgfHwgaSA9PT0gMCkge1xuICAgICAgICB0aGlzLmZvY3VzYWJsZS5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3RhYmluZGV4JywgaS50b1N0cmluZygpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCwgcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIGZvciB0aGUgaG9zdCBlbGVtZW50LlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBoYXNGb2N1c2FibGVDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmhhc0ZvY3VzYWJsZUNoaWxkcmVuKHRoaXMuaG9zdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIHRoZSBob3N0IGVsZW1lbnQuIElmIHRoZSBob3N0IGVsZW1lbnRcbiAgICogaXMgY29uZmlndXJlZCB0byBiZSBsb2NrZWQsIHRoZSBxdWVyeSBpcyByZXN0cmljdGVkIHRvIGNoaWxkIGVsZW1lbnRzXG4gICAqIHdpdGggYSB0YWJpbmRleCAhPT0gYC0xYC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZm9jdXNhYmxlKCk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZmluZEZvY3VzYWJsZShcbiAgICAgIHRoaXMuaG9zdCxcbiAgICAgIHRoaXMuc2hvdWxkTG9jayxcbiAgICAgIFVOTE9DS19ISURERU5fRUxFTUVOVFNcbiAgICApO1xuICB9XG59XG4iXX0=