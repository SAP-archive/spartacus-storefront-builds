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
            event.preventDefault();
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
            // we wait a few milliseconds, mainly because firefox will otherwise apply
            // the mouse event on the new focused child element
            setTimeout(() => {
                super.handleFocus(event);
            }, 100);
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
             * If the component hosts a group of focusable children elements,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFrQjtJQWlEeEQsWUFDWSxVQUFzQixFQUN0QixPQUF5QixFQUN6QixRQUFtQjtRQUU3QixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWxEckIsa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFhdkM7O1dBRUc7UUFDTyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWtDL0MsQ0FBQztJQWhDRDs7O09BR0c7SUFHSCxXQUFXLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxJ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QUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLG9CQUFvQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFZLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDL0IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsVUFBVSxFQUNmLHNCQUFzQixDQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBeEl5QixVQUFVO1lBQ2IsZ0JBQWdCO1lBQ2YsU0FBUzs7QUF6Q0U7SUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO3NEQUFxQjtBQUtyQjtJQUEvQixXQUFXLENBQUMsaUJBQWlCLENBQUM7b0RBQW1CO0FBS3hDO0lBQVQsTUFBTSxFQUFFO2tEQUFzQztBQVEvQztJQUZDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBT3pDO0FBT0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBTWpDO0FBL0NVLGtCQUFrQjtJQUQ5QixTQUFTLEVBQUUsQ0FBQyw0QkFBNEI7R0FDNUIsa0JBQWtCLENBMEw5QjtTQTFMWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGT0NVU19HUk9VUF9BVFRSLCBMb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFwRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2tGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2xvY2stZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRm9jdXNhYmxlIGVsZW1lbnRzIGV4Y2x1ZGUgaGlkZGVuIGVsZW1lbnRzIGJ5IGRlZmF1bHQsIGJ1dCB0aGlzIGNvbnRyYWRpY3RzIHdpdGhcbiAqIHVubG9ja2luZyAoaGlkZGVuKSBlbGVtZW50cy5cbiAqL1xuY29uc3QgVU5MT0NLX0hJRERFTl9FTEVNRU5UUyA9IHRydWU7XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGFkZHMgcGVyc2lzdGVuY2UgZm9yIGZvY3Vzc2VkIGVsZW1lbnQgaW4gY2FzZVxuICogdGhlIGVsZW1lbnRzIGFyZSBiZWluZyByZWJ1aWxkLiBUaGlzIGhhcHBlbnMgb2Z0ZW4gd2hlbiBjaGFuZ2VcbiAqIGRldGVjdGlvbiBraWNrcyBpbiBiZWNhdXNlIG9mIG5ldyBkYXRhIHNldCBmcm9tIHRoZSBiYWNrZW5kLlxuICovXG5ARGlyZWN0aXZlKCkgLy8gc2VsZWN0b3I6ICdbY3hMb2NrRm9jdXNdJ1xuZXhwb3J0IGNsYXNzIExvY2tGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRyYXBGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7IGxvY2s6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4TG9ja0ZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogTG9ja0ZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGNvbmZpZ3VyZWQgdG8gdXNlIGxvY2tpbmcuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGFcbiAgICogQ1NTIGNsYXNzIGBmb2N1cy1sb2NrYC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMtbG9jaycpIHNob3VsZExvY2s6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGxvY2tlZC4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYSBDU1MgY2xhc3MgYGlzLWxvY2tlZGAuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWxvY2tlZCcpIGlzTG9ja2VkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBob3N0IGlzIHVubG9ja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHVubG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGVudGVyIG9yIHNwYWNlLCB0aGUgZm9jdXNhYmxlIGNoaWxkcyBhcmVcbiAgICogdW5sb2NrZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHRhYmluZGV4IGlzIHNldCB0byAwLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2UnLCBbJyRldmVudCddKVxuICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2sgJiYgdGhpcy5ob3N0ID09PSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgdGhpcy51bmxvY2tGb2N1cyhldmVudCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNhc2UgYW55IG9mIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBpcyB0b3VjaGVkIGJ5IHRoZSBtb3VzZSxcbiAgICogd2UgdW5sb2NrIHRoZSBncm91cCB0byBub3QgYnJlYWsgdGhlIG1vdXNlLWV4cGVyaWVuY2UuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmlzTG9ja2VkKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBMb2NrRm9jdXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvY2tGb2N1cygpIHtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigtMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5sb2NrRm9jdXMoZXZlbnQ/OiBVSUV2ZW50KSB7XG4gICAgdGhpcy51bmxvY2suZW1pdCh0cnVlKTtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigwKTtcbiAgICAvLyB3ZSBmb2N1cyB0aGUgaG9zdCBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tIGEgY2hpbGRcbiAgICBpZiAoZXZlbnQ/LnRhcmdldCA9PT0gdGhpcy5ob3N0KSB7XG4gICAgICAvLyB3ZSB3YWl0IGEgZmV3IG1pbGxpc2Vjb25kcywgbWFpbmx5IGJlY2F1c2UgZmlyZWZveCB3aWxsIG90aGVyd2lzZSBhcHBseVxuICAgICAgLy8gdGhlIG1vdXNlIGV2ZW50IG9uIHRoZSBuZXcgZm9jdXNlZCBjaGlsZCBlbGVtZW50XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB0aGlzLnNob3VsZExvY2sgPSB0aGlzLmNvbmZpZz8ubG9jaztcblxuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuXG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGF1dG9mb2N1c2AgYnkgZGVmYXVsdCBpZiBpdCdzIG5vdFxuICAgICAgLy8gYmVlbiBjb25maWd1cmVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYXV0b2ZvY3VzIGtpY2tzIGluIHVwb24gdW5sb2NrLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnYXV0b2ZvY3VzJykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIExvY2tlZCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byBgZm9jdXNPbkVzY2FwZWAgYnkgZGVmYXVsdCBpZiBpdCdzIG5vdFxuICAgICAgLy8gYmVlbiBjb25maWd1cmVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgIHRoZSBob3N0IGdldHMgbG9ja2VkIGFnYWluIHdoZW5cbiAgICAgIC8vIGBlc2NhcGVgIGlzIHByZXNzZWQuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KCdmb2N1c09uRXNjYXBlJykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZm9jdXNPbkVzY2FwZSA9ICEodGhpcy5jb25maWc/LmZvY3VzT25Fc2NhcGUgPT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgY29tcG9uZW50IGhvc3RzIGEgZ3JvdXAgb2YgZm9jdXNhYmxlIGNoaWxkcmVuIGVsZW1lbnRzLFxuICAgICAgICogd2UgcGVyc2lzdCB0aGUgZ3JvdXAga2V5IHRvIHRoZSBjaGlsZHJlbiwgc28gdGhhdCB0aGV5IGNhbiB0YWtlbiB0aGlzXG4gICAgICAgKiBpbnRvIGFjY291bnQgd2hlbiB0aGV5IHBlcnNpc3QgdGhlaXIgZm9jdXMgc3RhdGUuXG4gICAgICAgKi9cbiAgICAgIGlmICghIXRoaXMuZ3JvdXApIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZpbmRGb2N1c2FibGUodGhpcy5ob3N0KS5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgICAvLyB3ZSBtdXN0IGRvIHRoaXMgaW4gYWZ0ZXIgdmlldyBpbml0IGFzXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsIEZPQ1VTX0dST1VQX0FUVFIsIHRoaXMuZ3JvdXApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZEF1dG9mb2N1cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQpKSB7XG4gICAgICAgIC8vIERlbGF5IHVubG9ja2luZyBpbiBjYXNlIHRoZSBob3N0IGlzIHVzaW5nIGBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0YFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2NrRm9jdXMoKSk7XG4gICAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCk7XG4gIH1cblxuICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuY2xlYXIodGhpcy5jb25maWcuZ3JvdXApO1xuICAgIH1cbiAgICBzdXBlci5oYW5kbGVFc2NhcGUoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGhhbmRsZUZvY3VzIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFjdHVhbCBldmVudCwgaXQncyBjb21pbmcgZnJvbSBBdXRvZm9jdXMuXG4gICAqIEluIHRoaXMgY2FzZSB3ZSB1bmxvY2sgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBpbiBjYXNlIHRoZXJlJ3MgYSBmb2N1c2FibGUgY2hpbGQgdGhhdFxuICAgKiB3YXMgdW5sb2NrZWQgYmVmb3JlLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIHNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIHJldHVybiAhZXZlbnQgJiYgdGhpcy5zZXJ2aWNlLmhhc1BlcnNpc3RlZEZvY3VzKHRoaXMuaG9zdCwgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIHRvIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gZWxlbWVudHNcbiAgICovXG4gIHByb3RlY3RlZCBhZGRUYWJpbmRleFRvQ2hpbGRyZW4oaSA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gaSA9PT0gLTE7XG4gICAgICBpZiAoISh0aGlzLmhhc0ZvY3VzYWJsZUNoaWxkcmVuICYmIGkgPT09IDApIHx8IGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5mb2N1c2FibGUuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0YWJpbmRleCcsIGkudG9TdHJpbmcoKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QsIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZHJlbiBmb3IgdGhlIGhvc3QgZWxlbWVudC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaGFzRm9jdXNhYmxlQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5oYXNGb2N1c2FibGVDaGlsZHJlbih0aGlzLmhvc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBvZiB0aGUgaG9zdCBlbGVtZW50LiBJZiB0aGUgaG9zdCBlbGVtZW50XG4gICAqIGlzIGNvbmZpZ3VyZWQgdG8gYmUgbG9ja2VkLCB0aGUgcXVlcnkgaXMgcmVzdHJpY3RlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgKiB3aXRoIGEgdGFiaW5kZXggIT09IGAtMWAuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZvY3VzYWJsZSgpOiBIVE1MRWxlbWVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRGb2N1c2FibGUoXG4gICAgICB0aGlzLmhvc3QsXG4gICAgICB0aGlzLnNob3VsZExvY2ssXG4gICAgICBVTkxPQ0tfSElEREVOX0VMRU1FTlRTXG4gICAgKTtcbiAgfVxufVxuIl19