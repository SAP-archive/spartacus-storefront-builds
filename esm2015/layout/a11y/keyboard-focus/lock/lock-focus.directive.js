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
        var _a;
        this.unlock.emit(true);
        this.addTabindexToChildren(0);
        // we focus the host if the event was triggered from a child
        if (((_a = event) === null || _a === void 0 ? void 0 : _a.target) === this.host) {
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
                this.service.findFocusable(this.host).forEach(el => 
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
        var _a;
        if (this.shouldLock) {
            if (this.shouldUnlockAfterAutofocus(event)) {
                // Delay unlocking in case the host is using `ChangeDetectionStrategy.Default`
                setTimeout(() => this.unlockFocus(event));
            }
            else {
                setTimeout(() => this.lockFocus());
                (_a = event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
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
                this.focusable.forEach(el => this.renderer.setAttribute(el, 'tabindex', i.toString()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFrQjtJQWdEeEQsWUFDWSxVQUFzQixFQUN0QixPQUF5QixFQUN6QixRQUFtQjtRQUU3QixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpEckIsa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFhdkM7O1dBRUc7UUFDTyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWlDL0MsQ0FBQztJQS9CRDs7O09BR0c7SUFHSCxXQUFXLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxJ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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFZLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDL0IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsVUFBVSxFQUNmLHNCQUFzQixDQUN2QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBcEl5QixVQUFVO1lBQ2IsZ0JBQWdCO1lBQ2YsU0FBUzs7QUF4Q0U7SUFBaEMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO3NEQUFxQjtBQUtyRDtJQURDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztvREFDYjtBQUtSO0lBQVQsTUFBTSxFQUFFO2tEQUFzQztBQVEvQztJQUZDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBTXpDO0FBT0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBTWpDO0FBOUNVLGtCQUFrQjtJQUQ5QixTQUFTLEVBQUUsQ0FBQyw0QkFBNEI7R0FDNUIsa0JBQWtCLENBcUw5QjtTQXJMWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGT0NVU19HUk9VUF9BVFRSLCBMb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFwRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2tGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2xvY2stZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRm9jdXNhYmxlIGVsZW1lbnRzIGV4Y2x1ZGUgaGlkZGVuIGVsZW1lbnRzIGJ5IGRlZmF1bHQsIGJ1dCB0aGlzIGNvbnRyYWRpY3RzIHdpdGhcbiAqIHVubG9ja2luZyAoaGlkZGVuKSBlbGVtZW50cy5cbiAqL1xuY29uc3QgVU5MT0NLX0hJRERFTl9FTEVNRU5UUyA9IHRydWU7XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGFkZHMgcGVyc2lzdGVuY2UgZm9yIGZvY3Vzc2VkIGVsZW1lbnQgaW4gY2FzZVxuICogdGhlIGVsZW1lbnRzIGFyZSBiZWluZyByZWJ1aWxkLiBUaGlzIGhhcHBlbnMgb2Z0ZW4gd2hlbiBjaGFuZ2VcbiAqIGRldGVjdGlvbiBraWNrcyBpbiBiZWNhdXNlIG9mIG5ldyBkYXRhIHNldCBmcm9tIHRoZSBiYWNrZW5kLlxuICovXG5ARGlyZWN0aXZlKCkgLy8gc2VsZWN0b3I6ICdbY3hMb2NrRm9jdXNdJ1xuZXhwb3J0IGNsYXNzIExvY2tGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRyYXBGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7IGxvY2s6IHRydWUgfTtcblxuICAvLyBASW5wdXQoJ2N4TG9ja0ZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogTG9ja0ZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGNvbmZpZ3VyZWQgdG8gdXNlIGxvY2tpbmcuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGFcbiAgICogQ1NTIGNsYXNzIGBmb2N1cy1sb2NrYC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMtbG9jaycpIHNob3VsZExvY2s6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBsb2NrZWQuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGEgQ1NTIGNsYXNzIGBpcy1sb2NrZWRgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1sb2NrZWQnKVxuICBpc0xvY2tlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaG9zdCBpcyB1bmxvY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB1bmxvY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBlbnRlciBvciBzcGFjZSwgdGhlIGZvY3VzYWJsZSBjaGlsZHMgYXJlXG4gICAqIHVubG9ja2VkLCB3aGljaCBtZWFucyB0aGF0IHRoZSB0YWJpbmRleCBpcyBzZXQgdG8gMC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaG9zdCA9PT0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNhc2UgYW55IG9mIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBpcyB0b3VjaGVkIGJ5IHRoZSBtb3VzZSxcbiAgICogd2UgdW5sb2NrIHRoZSBncm91cCB0byBub3QgYnJlYWsgdGhlIG1vdXNlLWV4cGVyaWVuY2UuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmlzTG9ja2VkKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBMb2NrRm9jdXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvY2tGb2N1cygpIHtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigtMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5sb2NrRm9jdXMoZXZlbnQ/OiBVSUV2ZW50KSB7XG4gICAgdGhpcy51bmxvY2suZW1pdCh0cnVlKTtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigwKTtcbiAgICAvLyB3ZSBmb2N1cyB0aGUgaG9zdCBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tIGEgY2hpbGRcbiAgICBpZiAoZXZlbnQ/LnRhcmdldCA9PT0gdGhpcy5ob3N0KSB7XG4gICAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5zaG91bGRMb2NrID0gdGhpcy5jb25maWc/LmxvY2s7XG5cbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gMDtcblxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBhdXRvZm9jdXNgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGF1dG9mb2N1cyBraWNrcyBpbiB1cG9uIHVubG9jay5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2F1dG9mb2N1cycpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGZvY3VzT25Fc2NhcGVgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0ICB0aGUgaG9zdCBnZXRzIGxvY2tlZCBhZ2FpbiB3aGVuXG4gICAgICAvLyBgZXNjYXBlYCBpcyBwcmVzc2VkLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZm9jdXNPbkVzY2FwZScpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZvY3VzT25Fc2NhcGUgPSAhKHRoaXMuY29uZmlnPy5mb2N1c09uRXNjYXBlID09PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGNvbXBvbmVudCBob3N0cyBhIGdyb3VwIG9mIGZvY3VzYWJsZSBjaGlsZHJlbiBlbG1lbmVudHMsXG4gICAgICAgKiB3ZSBwZXJzaXN0IHRoZSBncm91cCBrZXkgdG8gdGhlIGNoaWxkcmVuLCBzbyB0aGF0IHRoZXkgY2FuIHRha2VuIHRoaXNcbiAgICAgICAqIGludG8gYWNjb3VudCB3aGVuIHRoZXkgcGVyc2lzdCB0aGVpciBmb2N1cyBzdGF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKCEhdGhpcy5ncm91cCkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuZmluZEZvY3VzYWJsZSh0aGlzLmhvc3QpLmZvckVhY2goZWwgPT5cbiAgICAgICAgICAvLyB3ZSBtdXN0IGRvIHRoaXMgaW4gYWZ0ZXIgdmlldyBpbml0IGFzXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsIEZPQ1VTX0dST1VQX0FUVFIsIHRoaXMuZ3JvdXApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZEF1dG9mb2N1cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQpKSB7XG4gICAgICAgIC8vIERlbGF5IHVubG9ja2luZyBpbiBjYXNlIHRoZSBob3N0IGlzIHVzaW5nIGBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0YFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2NrRm9jdXMoKSk7XG4gICAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCk7XG4gIH1cblxuICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuY2xlYXIodGhpcy5jb25maWcuZ3JvdXApO1xuICAgIH1cbiAgICBzdXBlci5oYW5kbGVFc2NhcGUoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGhhbmRsZUZvY3VzIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFjdHVhbCBldmVudCwgaXQncyBjb21pbmcgZnJvbSBBdXRvZm9jdXMuXG4gICAqIEluIHRoaXMgY2FzZSB3ZSB1bmxvY2sgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBpbiBjYXNlIHRoZXJlJ3MgYSBmb2N1c2FibGUgY2hpbGQgdGhhdFxuICAgKiB3YXMgdW5sb2NrZWQgYmVmb3JlLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIHNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIHJldHVybiAhZXZlbnQgJiYgdGhpcy5zZXJ2aWNlLmhhc1BlcnNpc3RlZEZvY3VzKHRoaXMuaG9zdCwgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIHRvIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gZWxlbWVudHNcbiAgICovXG4gIHByb3RlY3RlZCBhZGRUYWJpbmRleFRvQ2hpbGRyZW4oaSA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gaSA9PT0gLTE7XG4gICAgICBpZiAoISh0aGlzLmhhc0ZvY3VzYWJsZUNoaWxkcmVuICYmIGkgPT09IDApIHx8IGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5mb2N1c2FibGUuZm9yRWFjaChlbCA9PlxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndGFiaW5kZXgnLCBpLnRvU3RyaW5nKCkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kLCByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gZm9yIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGhhc0ZvY3VzYWJsZUNoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaGFzRm9jdXNhYmxlQ2hpbGRyZW4odGhpcy5ob3N0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gb2YgdGhlIGhvc3QgZWxlbWVudC4gSWYgdGhlIGhvc3QgZWxlbWVudFxuICAgKiBpcyBjb25maWd1cmVkIHRvIGJlIGxvY2tlZCwgdGhlIHF1ZXJ5IGlzIHJlc3RyaWN0ZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICogd2l0aCBhIHRhYmluZGV4ICE9PSBgLTFgLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBmb2N1c2FibGUoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5maW5kRm9jdXNhYmxlKFxuICAgICAgdGhpcy5ob3N0LFxuICAgICAgdGhpcy5zaG91bGRMb2NrLFxuICAgICAgVU5MT0NLX0hJRERFTl9FTEVNRU5UU1xuICAgICk7XG4gIH1cbn1cbiJdfQ==