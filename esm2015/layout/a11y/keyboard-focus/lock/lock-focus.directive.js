import { __decorate } from "tslib";
import { AfterContentInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2, } from '@angular/core';
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
    Input('cxLockFocus')
], LockFocusDirective.prototype, "config", void 0);
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
    Directive({
        selector: '[cxLockFocus]',
    })
], LockFocusDirective);
export { LockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBbUIsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7OztHQUlHO0FBSUgsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxrQkFBa0I7SUE4Q3hELFlBQ1ksVUFBc0IsRUFDdEIsT0FBeUIsRUFDekIsUUFBbUI7UUFFN0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUpqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUEvQ3JCLGtCQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFCLFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBWTdEOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFpQy9DLENBQUM7SUEvQkQ7OztPQUdHO0lBR0gsV0FBVyxDQUFDLEtBQW9CO1FBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFNLEtBQUss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QyxhQUFhLENBQUM7a0RBQXdDO0FBTTVCO0lBQWhDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztzREFBcUI7QUFJckI7SUFBL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDO29EQUFtQjtBQUt4QztJQUFULE1BQU0sRUFBRTtrREFBc0M7QUFRL0M7SUFGQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FEQU16QztBQU9EO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FEQU1qQztBQTVDVSxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQTZLOUI7U0E3S1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIExvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRyYXBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RyYXAvdHJhcC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4vbG9jay1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBhZGRzIHBlcnNpc3RlbmNlIGZvciBmb2N1c3NlZCBlbGVtZW50IGluIGNhc2VcbiAqIHRoZSBlbGVtZW50cyBhcmUgYmVpbmcgcmVidWlsZC4gVGhpcyBoYXBwZW5zIG9mdGVuIHdoZW4gY2hhbmdlXG4gKiBkZXRlY3Rpb24ga2lja3MgaW4gYmVjYXVzZSBvZiBuZXcgZGF0YSBzZXQgZnJvbSB0aGUgYmFja2VuZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4TG9ja0ZvY3VzXScsXG59KVxuZXhwb3J0IGNsYXNzIExvY2tGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRyYXBGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7IGxvY2s6IHRydWUgfTtcblxuICBASW5wdXQoJ2N4TG9ja0ZvY3VzJykgcHJvdGVjdGVkIGNvbmZpZzogTG9ja0ZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGNvbmZpZ3VyZWQgdG8gdXNlIGxvY2tpbmcuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGFcbiAgICogQ1NTIGNsYXNzIGBmb2N1cy1sb2NrYC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMtbG9jaycpIHNob3VsZExvY2s6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBsb2NrZWQuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGEgQ1NTIGNsYXNzIGBpcy1sb2NrZWRgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1sb2NrZWQnKSBpc0xvY2tlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaG9zdCBpcyB1bmxvY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB1bmxvY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBlbnRlciBvciBzcGFjZSwgdGhlIGZvY3VzYWJsZSBjaGlsZHMgYXJlXG4gICAqIHVubG9ja2VkLCB3aGljaCBtZWFucyB0aGF0IHRoZSB0YWJpbmRleCBpcyBzZXQgdG8gMC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaG9zdCA9PT0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGNhc2UgYW55IG9mIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBpcyB0b3VjaGVkIGJ5IHRoZSBtb3VzZSxcbiAgICogd2UgdW5sb2NrIHRoZSBncm91cCB0byBub3QgYnJlYWsgdGhlIG1vdXNlLWV4cGVyaWVuY2UuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmlzTG9ja2VkKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBMb2NrRm9jdXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvY2tGb2N1cygpIHtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigtMSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdW5sb2NrRm9jdXMoZXZlbnQ/OiBVSUV2ZW50KSB7XG4gICAgdGhpcy51bmxvY2suZW1pdCh0cnVlKTtcbiAgICB0aGlzLmFkZFRhYmluZGV4VG9DaGlsZHJlbigwKTtcbiAgICAvLyB3ZSBmb2N1cyB0aGUgaG9zdCBpZiB0aGUgZXZlbnQgdGFyZ2V0IHdhcyBhIG5lc3RlZCBjaGlsZFxuICAgIGlmIChldmVudD8udGFyZ2V0ID09PSB0aGlzLmhvc3QpIHtcbiAgICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB0aGlzLnNob3VsZExvY2sgPSB0aGlzLmNvbmZpZz8ubG9jaztcblxuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuXG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGF1dG9mb2N1c2AgYnkgZGVmYXVsdCBpZiBpdCdzIG5vdFxuICAgICAgLy8gYmVlbiBjb25maWd1cmVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYXV0b2ZvY3VzIGtpY2tzIGluIHVwb24gdW5sb2NrLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnYXV0b2ZvY3VzJykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIExvY2tlZCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byBgZm9jdXNPbkVzY2FwZWAgYnkgZGVmYXVsdCBpZiBpdCdzIG5vdFxuICAgICAgLy8gYmVlbiBjb25maWd1cmVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgIHRoZSBob3N0IGdldHMgbG9ja2VkIGFnYWluIHdoZW5cbiAgICAgIC8vIGBlc2NhcGVgIGlzIHByZXNzZWQuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KCdmb2N1c09uRXNjYXBlJykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZm9jdXNPbkVzY2FwZSA9ICEodGhpcy5jb25maWc/LmZvY3VzT25Fc2NhcGUgPT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgY29tcG9uZW50IGhvc3RzIGEgZ3JvdXAgb2YgZm9jdXNhYmxlIGNoaWxkcmVuIGVsbWVuZW50cyxcbiAgICAgICAqIHdlIHBlcnNpc3QgdGhlIGdyb3VwIGtleSB0byB0aGUgY2hpbGRyZW4sIHNvIHRoYXQgdGhleSBjYW4gdGFrZW4gdGhpc1xuICAgICAgICogaW50byBhY2NvdW50IHdoZW4gdGhleSBwZXJzaXN0IHRoZWlyIGZvY3VzIHN0YXRlLlxuICAgICAgICovXG4gICAgICBpZiAoISF0aGlzLmdyb3VwKSB7XG4gICAgICAgIHRoaXMuc2VydmljZVxuICAgICAgICAgIC5maW5kRm9jdXNhYmxlKHRoaXMuaG9zdClcbiAgICAgICAgICAuZm9yRWFjaChlbCA9PlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsIEZPQ1VTX0dST1VQX0FUVFIsIHRoaXMuZ3JvdXApXG4gICAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2NrRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLmxvY2tGb2N1cygpO1xuXG4gICAgICBpZiAodGhpcy5zaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cyhldmVudCkpIHtcbiAgICAgICAgLy8gRGVsYXkgdW5sb2NraW5nIGluIGNhc2UgdGhlIGhvc3QgaXMgdXNpbmcgYENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51bmxvY2tGb2N1cyhldmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2NrRm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gbGV0J3Mgbm90IGJ1YmJsZSB1cCB0aGUgaGFuZGxlRm9jdXMgZXZlbnQgaWYgdGhlIGhvc3QgaXMgbG9ja2VkXG4gICAgICBpZiAodGhpcy5pc0xvY2tlZCkge1xuICAgICAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgaGFuZGxlRm9jdXMgaXMgY2FsbGVkIHdpdGhvdXQgYW4gYWN0dWFsIGV2ZW50LCBpdCdzIGNvbWluZyBmcm9tIEF1dG9mb2N1cy5cbiAgICogSW4gdGhpcyBjYXNlIHdlIHVubG9jayB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGluIGNhc2UgdGhlcmUncyBhIGZvY3VzYWJsZSBjaGlsZCB0aGF0XG4gICAqIHdhcyB1bmxvY2tlZCBiZWZvcmUuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgcmV0dXJuICFldmVudCAmJiB0aGlzLnNlcnZpY2UuaGFzUGVyc2lzdGVkRm9jdXModGhpcy5ob3N0LCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgdG8gdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBlbGVtZW50c1xuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFRhYmluZGV4VG9DaGlsZHJlbihpID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBpID09PSAtMTtcbiAgICAgIGlmICghKHRoaXMuaGFzRm9jdXNhYmxlQ2hpbGRyZW4gJiYgaSA9PT0gMCkgfHwgaSA9PT0gMCkge1xuICAgICAgICB0aGlzLmZvY3VzYWJsZS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3RhYmluZGV4JywgaS50b1N0cmluZygpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kLCByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gZm9yIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGhhc0ZvY3VzYWJsZUNoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaGFzRm9jdXNhYmxlQ2hpbGRyZW4odGhpcy5ob3N0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gb2YgdGhlIGhvc3QgZWxlbWVudC4gSWYgdGhlIGhvc3QgZWxlbWVudFxuICAgKiBpcyBjb25maWd1cmVkIHRvIGJlIGxvY2tlZCwgdGhlIHF1ZXJ5IGlzIHJlc3RyaWN0ZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICogd2l0aCBhIHRhYmluZGV4ICE9PSBgLTFgLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBmb2N1c2FibGUoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5maW5kRm9jdXNhYmxlKHRoaXMuaG9zdCwgdGhpcy5zaG91bGRMb2NrKTtcbiAgfVxufVxuIl19