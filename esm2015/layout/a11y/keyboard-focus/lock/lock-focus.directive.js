import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2, } from '@angular/core';
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
export class LockFocusDirective extends TrapFocusDirective {
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
}
LockFocusDirective.decorators = [
    { type: Directive }
];
LockFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LockFocusService },
    { type: Renderer2 }
];
LockFocusDirective.propDecorators = {
    shouldLock: [{ type: HostBinding, args: ['class.focus-lock',] }],
    isLocked: [{ type: HostBinding, args: ['class.is-locked',] }],
    unlock: [{ type: Output }],
    handleEnter: [{ type: HostListener, args: ['keydown.enter', ['$event'],] }, { type: HostListener, args: ['keydown.space', ['$event'],] }],
    handleClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUVaLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sa0JBQ1gsU0FBUSxrQkFBa0I7SUFpRDFCLFlBQ1ksVUFBc0IsRUFDdEIsT0FBeUIsRUFDekIsUUFBbUI7UUFFN0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUpqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFsRHJCLGtCQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFELHdCQUF3QjtRQUNkLFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBYXZDOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFrQy9DLENBQUM7SUFoQ0Q7OztPQUdHO0lBR0gsV0FBVyxDQUFDLEtBQW9CO1FBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUs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QUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUN6RCxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBWSxvQkFBb0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSxTQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQy9CLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFVBQVUsRUFDZixzQkFBc0IsQ0FDdkIsQ0FBQztJQUNKLENBQUM7OztZQTNMRixTQUFTOzs7WUF0QlIsVUFBVTtZQVVILGdCQUFnQjtZQUp2QixTQUFTOzs7eUJBNkJSLFdBQVcsU0FBQyxrQkFBa0I7dUJBSzlCLFdBQVcsU0FBQyxpQkFBaUI7cUJBSzdCLE1BQU07MEJBTU4sWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUN4QyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQWF4QyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRk9DVVNfR1JPVVBfQVRUUiwgTG9ja0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVHJhcEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vdHJhcC90cmFwLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2NrRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9sb2NrLWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIEZvY3VzYWJsZSBlbGVtZW50cyBleGNsdWRlIGhpZGRlbiBlbGVtZW50cyBieSBkZWZhdWx0LCBidXQgdGhpcyBjb250cmFkaWN0cyB3aXRoXG4gKiB1bmxvY2tpbmcgKGhpZGRlbikgZWxlbWVudHMuXG4gKi9cbmNvbnN0IFVOTE9DS19ISURERU5fRUxFTUVOVFMgPSB0cnVlO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBhZGRzIHBlcnNpc3RlbmNlIGZvciBmb2N1c3NlZCBlbGVtZW50IGluIGNhc2VcbiAqIHRoZSBlbGVtZW50cyBhcmUgYmVpbmcgcmVidWlsZC4gVGhpcyBoYXBwZW5zIG9mdGVuIHdoZW4gY2hhbmdlXG4gKiBkZXRlY3Rpb24ga2lja3MgaW4gYmVjYXVzZSBvZiBuZXcgZGF0YSBzZXQgZnJvbSB0aGUgYmFja2VuZC5cbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4TG9ja0ZvY3VzXSdcbmV4cG9ydCBjbGFzcyBMb2NrRm9jdXNEaXJlY3RpdmVcbiAgZXh0ZW5kcyBUcmFwRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogTG9ja0ZvY3VzQ29uZmlnID0geyBsb2NrOiB0cnVlIH07XG5cbiAgLy8gQElucHV0KCdjeExvY2tGb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBjb25maWd1cmVkIHRvIHVzZSBsb2NraW5nLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhXG4gICAqIENTUyBjbGFzcyBgZm9jdXMtbG9ja2AuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzLWxvY2snKSBzaG91bGRMb2NrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBsb2NrZWQuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGEgQ1NTIGNsYXNzIGBpcy1sb2NrZWRgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1sb2NrZWQnKSBpc0xvY2tlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaG9zdCBpcyB1bmxvY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB1bmxvY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBlbnRlciBvciBzcGFjZSwgdGhlIGZvY3VzYWJsZSBjaGlsZHMgYXJlXG4gICAqIHVubG9ja2VkLCB3aGljaCBtZWFucyB0aGF0IHRoZSB0YWJpbmRleCBpcyBzZXQgdG8gMC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaG9zdCA9PT0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjYXNlIGFueSBvZiB0aGUgY2hpbGRyZW4gZWxlbWVudHMgaXMgdG91Y2hlZCBieSB0aGUgbW91c2UsXG4gICAqIHdlIHVubG9jayB0aGUgZ3JvdXAgdG8gbm90IGJyZWFrIHRoZSBtb3VzZS1leHBlcmllbmNlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljayhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2sgJiYgdGhpcy5pc0xvY2tlZCkge1xuICAgICAgdGhpcy51bmxvY2tGb2N1cyhldmVudCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTG9ja0ZvY3VzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2NrRm9jdXMoKSB7XG4gICAgdGhpcy5hZGRUYWJpbmRleFRvQ2hpbGRyZW4oLTEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVubG9ja0ZvY3VzKGV2ZW50PzogVUlFdmVudCkge1xuICAgIHRoaXMudW5sb2NrLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5hZGRUYWJpbmRleFRvQ2hpbGRyZW4oMCk7XG4gICAgLy8gd2UgZm9jdXMgdGhlIGhvc3QgaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgZnJvbSBhIGNoaWxkXG4gICAgaWYgKGV2ZW50Py50YXJnZXQgPT09IHRoaXMuaG9zdCkge1xuICAgICAgLy8gd2Ugd2FpdCBhIGZldyBtaWxsaXNlY29uZHMsIG1haW5seSBiZWNhdXNlIGZpcmVmb3ggd2lsbCBvdGhlcndpc2UgYXBwbHlcbiAgICAgIC8vIHRoZSBtb3VzZSBldmVudCBvbiB0aGUgbmV3IGZvY3VzZWQgY2hpbGQgZWxlbWVudFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5zaG91bGRMb2NrID0gdGhpcy5jb25maWc/LmxvY2s7XG5cbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gMDtcblxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBhdXRvZm9jdXNgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGF1dG9mb2N1cyBraWNrcyBpbiB1cG9uIHVubG9jay5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2F1dG9mb2N1cycpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGZvY3VzT25Fc2NhcGVgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0ICB0aGUgaG9zdCBnZXRzIGxvY2tlZCBhZ2FpbiB3aGVuXG4gICAgICAvLyBgZXNjYXBlYCBpcyBwcmVzc2VkLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZm9jdXNPbkVzY2FwZScpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZvY3VzT25Fc2NhcGUgPSAhKHRoaXMuY29uZmlnPy5mb2N1c09uRXNjYXBlID09PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGNvbXBvbmVudCBob3N0cyBhIGdyb3VwIG9mIGZvY3VzYWJsZSBjaGlsZHJlbiBlbGVtZW50cyxcbiAgICAgICAqIHdlIHBlcnNpc3QgdGhlIGdyb3VwIGtleSB0byB0aGUgY2hpbGRyZW4sIHNvIHRoYXQgdGhleSBjYW4gdGFrZW4gdGhpc1xuICAgICAgICogaW50byBhY2NvdW50IHdoZW4gdGhleSBwZXJzaXN0IHRoZWlyIGZvY3VzIHN0YXRlLlxuICAgICAgICovXG4gICAgICBpZiAoISF0aGlzLmdyb3VwKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5maW5kRm9jdXNhYmxlKHRoaXMuaG9zdCkuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgICAgLy8gd2UgbXVzdCBkbyB0aGlzIGluIGFmdGVyIHZpZXcgaW5pdCBhc1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCBGT0NVU19HUk9VUF9BVFRSLCB0aGlzLmdyb3VwKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zaG91bGRBdXRvZm9jdXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50KSkge1xuICAgICAgICAvLyBEZWxheSB1bmxvY2tpbmcgaW4gY2FzZSB0aGUgaG9zdCBpcyB1c2luZyBgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdGBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9ja0ZvY3VzKCkpO1xuICAgICAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy5zZXJ2aWNlLmNsZWFyKHRoaXMuY29uZmlnLmdyb3VwKTtcbiAgICB9XG4gICAgc3VwZXIuaGFuZGxlRXNjYXBlKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBoYW5kbGVGb2N1cyBpcyBjYWxsZWQgd2l0aG91dCBhbiBhY3R1YWwgZXZlbnQsIGl0J3MgY29taW5nIGZyb20gQXV0b2ZvY3VzLlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgdW5sb2NrIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gaW4gY2FzZSB0aGVyZSdzIGEgZm9jdXNhYmxlIGNoaWxkIHRoYXRcbiAgICogd2FzIHVubG9ja2VkIGJlZm9yZS5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICByZXR1cm4gIWV2ZW50ICYmIHRoaXMuc2VydmljZS5oYXNQZXJzaXN0ZWRGb2N1cyh0aGlzLmhvc3QsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSB0byB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGVsZW1lbnRzXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGFiaW5kZXhUb0NoaWxkcmVuKGkgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IGkgPT09IC0xO1xuICAgICAgaWYgKCEodGhpcy5oYXNGb2N1c2FibGVDaGlsZHJlbiAmJiBpID09PSAwKSB8fCBpID09PSAwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNhYmxlLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndGFiaW5kZXgnLCBpLnRvU3RyaW5nKCkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kLCByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gZm9yIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGhhc0ZvY3VzYWJsZUNoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaGFzRm9jdXNhYmxlQ2hpbGRyZW4odGhpcy5ob3N0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gb2YgdGhlIGhvc3QgZWxlbWVudC4gSWYgdGhlIGhvc3QgZWxlbWVudFxuICAgKiBpcyBjb25maWd1cmVkIHRvIGJlIGxvY2tlZCwgdGhlIHF1ZXJ5IGlzIHJlc3RyaWN0ZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICogd2l0aCBhIHRhYmluZGV4ICE9PSBgLTFgLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBmb2N1c2FibGUoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5maW5kRm9jdXNhYmxlKFxuICAgICAgdGhpcy5ob3N0LFxuICAgICAgdGhpcy5zaG91bGRMb2NrLFxuICAgICAgVU5MT0NLX0hJRERFTl9FTEVNRU5UU1xuICAgICk7XG4gIH1cbn1cbiJdfQ==