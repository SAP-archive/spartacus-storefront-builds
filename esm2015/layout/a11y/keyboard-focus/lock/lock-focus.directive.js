import { __decorate } from "tslib";
import { AfterContentInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, Renderer2, } from '@angular/core';
import { FOCUS_GROUP_ATTR } from '../keyboard-focus.model';
import { TrapFocusDirective } from '../trap/trap-focus.directive';
import { LockFocusService } from './lock-focus.service';
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
        // we focus the host if the event target was a nested child
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
    ngAfterContentInit() {
        if (this.shouldLock) {
            /**
             * If the component hosts a group of focusable children elmenents,
             * we persist the group key to the children, so that they can taken this
             * into account when they persist their focus state.
             */
            if (!!this.group) {
                this.service
                    .findFocusable(this.host)
                    .forEach(el => this.renderer.setAttribute(el, FOCUS_GROUP_ATTR, this.group));
            }
            this.lockFocus();
        }
    }
    handleFocus(event) {
        var _a;
        if (this.shouldLock) {
            this.lockFocus();
            if (this.shouldUnlockAfterAutofocus(event)) {
                // Delay unlocking in case the host is using `ChangeDetectionStrategy.Default`
                setTimeout(() => this.unlockFocus(event));
            }
            else {
                this.lockFocus();
            }
            // let's not bubble up the handleFocus event if the host is locked
            if (this.isLocked) {
                (_a = event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
                return;
            }
        }
        super.handleFocus(event);
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
                this.focusable.forEach(el => {
                    this.renderer.setAttribute(el, 'tabindex', i.toString());
                });
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
        return this.service.findFocusable(this.host, this.shouldLock);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7O0dBSUc7QUFFSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFrQjtJQStDeEQsWUFDWSxVQUFzQixFQUN0QixPQUF5QixFQUN6QixRQUFtQjtRQUU3QixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWhEckIsa0JBQWEsR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUQsd0JBQXdCO1FBQ2QsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFZdkM7O1dBRUc7UUFDTyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWlDL0MsQ0FBQztJQS9CRDs7O09BR0c7SUFHSCxXQUFXLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQU0sS0FB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QUFDLGtCQUFrQixDQUFDO3NEQUFxQjtBQUlyQjtJQUEvQixXQUFXLENBQUMsaUJBQWlCLENBQUM7b0RBQW1CO0FBS3hDO0lBQVQsTUFBTSxFQUFFO2tEQUFzQztBQVEvQztJQUZDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBTXpDO0FBT0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBTWpDO0FBN0NVLGtCQUFrQjtJQUQ5QixTQUFTLEVBQUUsQ0FBQyw0QkFBNEI7R0FDNUIsa0JBQWtCLENBOEs5QjtTQTlLWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGT0NVU19HUk9VUF9BVFRSLCBMb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFwRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2tGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2xvY2stZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBwZXJzaXN0ZW5jZSBmb3IgZm9jdXNzZWQgZWxlbWVudCBpbiBjYXNlXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJlYnVpbGQuIFRoaXMgaGFwcGVucyBvZnRlbiB3aGVuIGNoYW5nZVxuICogZGV0ZWN0aW9uIGtpY2tzIGluIGJlY2F1c2Ugb2YgbmV3IGRhdGEgc2V0IGZyb20gdGhlIGJhY2tlbmQuXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeExvY2tGb2N1c10nXG5leHBvcnQgY2xhc3MgTG9ja0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVHJhcEZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHsgbG9jazogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hMb2NrRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7fTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgY29uZmlndXJlZCB0byB1c2UgbG9ja2luZy4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYVxuICAgKiBDU1MgY2xhc3MgYGZvY3VzLWxvY2tgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cy1sb2NrJykgc2hvdWxkTG9jazogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGxvY2tlZC4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYSBDU1MgY2xhc3MgYGlzLWxvY2tlZGAuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWxvY2tlZCcpIGlzTG9ja2VkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBob3N0IGlzIHVubG9ja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHVubG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGVudGVyIG9yIHNwYWNlLCB0aGUgZm9jdXNhYmxlIGNoaWxkcyBhcmVcbiAgICogdW5sb2NrZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHRhYmluZGV4IGlzIHNldCB0byAwLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2UnLCBbJyRldmVudCddKVxuICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2sgJiYgdGhpcy5ob3N0ID09PSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgdGhpcy51bmxvY2tGb2N1cyhldmVudCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW4gY2FzZSBhbnkgb2YgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIGlzIHRvdWNoZWQgYnkgdGhlIG1vdXNlLFxuICAgKiB3ZSB1bmxvY2sgdGhlIGdyb3VwIHRvIG5vdCBicmVhayB0aGUgbW91c2UtZXhwZXJpZW5jZS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaXNMb2NrZWQpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IExvY2tGb2N1c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9ja0ZvY3VzKCkge1xuICAgIHRoaXMuYWRkVGFiaW5kZXhUb0NoaWxkcmVuKC0xKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bmxvY2tGb2N1cyhldmVudD86IFVJRXZlbnQpIHtcbiAgICB0aGlzLnVubG9jay5lbWl0KHRydWUpO1xuICAgIHRoaXMuYWRkVGFiaW5kZXhUb0NoaWxkcmVuKDApO1xuICAgIC8vIHdlIGZvY3VzIHRoZSBob3N0IGlmIHRoZSBldmVudCB0YXJnZXQgd2FzIGEgbmVzdGVkIGNoaWxkXG4gICAgaWYgKGV2ZW50Py50YXJnZXQgPT09IHRoaXMuaG9zdCkge1xuICAgICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMuc2hvdWxkTG9jayA9IHRoaXMuY29uZmlnPy5sb2NrO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG5cbiAgICAgIC8vIExvY2tlZCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byBgYXV0b2ZvY3VzYCBieSBkZWZhdWx0IGlmIGl0J3Mgbm90XG4gICAgICAvLyBiZWVuIGNvbmZpZ3VyZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhdXRvZm9jdXMga2lja3MgaW4gdXBvbiB1bmxvY2suXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KCdhdXRvZm9jdXMnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5hdXRvZm9jdXMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBmb2N1c09uRXNjYXBlYCBieSBkZWZhdWx0IGlmIGl0J3Mgbm90XG4gICAgICAvLyBiZWVuIGNvbmZpZ3VyZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCAgdGhlIGhvc3QgZ2V0cyBsb2NrZWQgYWdhaW4gd2hlblxuICAgICAgLy8gYGVzY2FwZWAgaXMgcHJlc3NlZC5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2ZvY3VzT25Fc2NhcGUnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5mb2N1c09uRXNjYXBlID0gISh0aGlzLmNvbmZpZz8uZm9jdXNPbkVzY2FwZSA9PT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBjb21wb25lbnQgaG9zdHMgYSBncm91cCBvZiBmb2N1c2FibGUgY2hpbGRyZW4gZWxtZW5lbnRzLFxuICAgICAgICogd2UgcGVyc2lzdCB0aGUgZ3JvdXAga2V5IHRvIHRoZSBjaGlsZHJlbiwgc28gdGhhdCB0aGV5IGNhbiB0YWtlbiB0aGlzXG4gICAgICAgKiBpbnRvIGFjY291bnQgd2hlbiB0aGV5IHBlcnNpc3QgdGhlaXIgZm9jdXMgc3RhdGUuXG4gICAgICAgKi9cbiAgICAgIGlmICghIXRoaXMuZ3JvdXApIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlXG4gICAgICAgICAgLmZpbmRGb2N1c2FibGUodGhpcy5ob3N0KVxuICAgICAgICAgIC5mb3JFYWNoKGVsID0+XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgRk9DVVNfR1JPVVBfQVRUUiwgdGhpcy5ncm91cClcbiAgICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxvY2tGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMubG9ja0ZvY3VzKCk7XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50KSkge1xuICAgICAgICAvLyBEZWxheSB1bmxvY2tpbmcgaW4gY2FzZSB0aGUgaG9zdCBpcyB1c2luZyBgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdGBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvY2tGb2N1cygpO1xuICAgICAgfVxuXG4gICAgICAvLyBsZXQncyBub3QgYnViYmxlIHVwIHRoZSBoYW5kbGVGb2N1cyBldmVudCBpZiB0aGUgaG9zdCBpcyBsb2NrZWRcbiAgICAgIGlmICh0aGlzLmlzTG9ja2VkKSB7XG4gICAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBoYW5kbGVGb2N1cyBpcyBjYWxsZWQgd2l0aG91dCBhbiBhY3R1YWwgZXZlbnQsIGl0J3MgY29taW5nIGZyb20gQXV0b2ZvY3VzLlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgdW5sb2NrIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gaW4gY2FzZSB0aGVyZSdzIGEgZm9jdXNhYmxlIGNoaWxkIHRoYXRcbiAgICogd2FzIHVubG9ja2VkIGJlZm9yZS5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICByZXR1cm4gIWV2ZW50ICYmIHRoaXMuc2VydmljZS5oYXNQZXJzaXN0ZWRGb2N1cyh0aGlzLmhvc3QsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSB0byB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGVsZW1lbnRzXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGFiaW5kZXhUb0NoaWxkcmVuKGkgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IGkgPT09IC0xO1xuICAgICAgaWYgKCEodGhpcy5oYXNGb2N1c2FibGVDaGlsZHJlbiAmJiBpID09PSAwKSB8fCBpID09PSAwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNhYmxlLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndGFiaW5kZXgnLCBpLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QsIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZHJlbiBmb3IgdGhlIGhvc3QgZWxlbWVudC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaGFzRm9jdXNhYmxlQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5oYXNGb2N1c2FibGVDaGlsZHJlbih0aGlzLmhvc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBvZiB0aGUgaG9zdCBlbGVtZW50LiBJZiB0aGUgaG9zdCBlbGVtZW50XG4gICAqIGlzIGNvbmZpZ3VyZWQgdG8gYmUgbG9ja2VkLCB0aGUgcXVlcnkgaXMgcmVzdHJpY3RlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgKiB3aXRoIGEgdGFiaW5kZXggIT09IGAtMWAuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZvY3VzYWJsZSgpOiBIVE1MRWxlbWVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRGb2N1c2FibGUodGhpcy5ob3N0LCB0aGlzLnNob3VsZExvY2spO1xuICB9XG59XG4iXX0=