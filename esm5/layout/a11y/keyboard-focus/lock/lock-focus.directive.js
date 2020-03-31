import { __decorate, __extends } from "tslib";
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, Renderer2, } from '@angular/core';
import { FOCUS_GROUP_ATTR } from '../keyboard-focus.model';
import { TrapFocusDirective } from '../trap/trap-focus.directive';
import { LockFocusService } from './lock-focus.service';
/**
 * Focusable elements exclude hidden elements by default, but this contradicts with
 * unlocking (hidden) elements.
 */
var UNLOCK_HIDDEN_ELEMENTS = true;
/**
 * Directive that adds persistence for focussed element in case
 * the elements are being rebuild. This happens often when change
 * detection kicks in because of new data set from the backend.
 */
var LockFocusDirective = /** @class */ (function (_super) {
    __extends(LockFocusDirective, _super);
    function LockFocusDirective(elementRef, service, renderer) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        _this.renderer = renderer;
        _this.defaultConfig = { lock: true };
        // @Input('cxLockFocus')
        _this.config = {};
        /**
         * Emits an event when the host is unlocked.
         */
        _this.unlock = new EventEmitter();
        return _this;
    }
    /**
     * When the user selects enter or space, the focusable childs are
     * unlocked, which means that the tabindex is set to 0.
     */
    LockFocusDirective.prototype.handleEnter = function (event) {
        if (this.shouldLock && this.host === event.target) {
            this.unlockFocus(event);
            event.stopPropagation();
        }
    };
    /**
     * In case any of the children elements is touched by the mouse,
     * we unlock the group to not break the mouse-experience.
     */
    LockFocusDirective.prototype.handleClick = function (event) {
        if (this.shouldLock && this.isLocked) {
            this.unlockFocus(event);
            event.stopPropagation();
        }
    };
    LockFocusDirective.prototype.lockFocus = function () {
        this.addTabindexToChildren(-1);
    };
    LockFocusDirective.prototype.unlockFocus = function (event) {
        this.unlock.emit(true);
        this.addTabindexToChildren(0);
        // we focus the host if the event was triggered from a child
        if ((event === null || event === void 0 ? void 0 : event.target) === this.host) {
            _super.prototype.handleFocus.call(this, event);
        }
    };
    LockFocusDirective.prototype.ngOnInit = function () {
        var _a, _b;
        _super.prototype.ngOnInit.call(this);
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
    };
    LockFocusDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.shouldLock) {
            /**
             * If the component hosts a group of focusable children elmenents,
             * we persist the group key to the children, so that they can taken this
             * into account when they persist their focus state.
             */
            if (!!this.group) {
                this.service.findFocusable(this.host).forEach(function (el) {
                    // we must do this in after view init as
                    return _this.renderer.setAttribute(el, FOCUS_GROUP_ATTR, _this.group);
                });
            }
            if (this.shouldAutofocus) {
                this.handleFocus();
            }
        }
        _super.prototype.ngAfterViewInit.call(this);
    };
    LockFocusDirective.prototype.handleFocus = function (event) {
        var _this = this;
        if (this.shouldLock) {
            if (this.shouldUnlockAfterAutofocus(event)) {
                // Delay unlocking in case the host is using `ChangeDetectionStrategy.Default`
                setTimeout(function () { return _this.unlockFocus(event); });
            }
            else {
                setTimeout(function () { return _this.lockFocus(); });
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                return;
            }
        }
        _super.prototype.handleFocus.call(this, event);
    };
    LockFocusDirective.prototype.handleEscape = function (event) {
        if (this.shouldLock) {
            this.service.clear(this.config.group);
        }
        _super.prototype.handleEscape.call(this, event);
    };
    /**
     * When the handleFocus is called without an actual event, it's coming from Autofocus.
     * In this case we unlock the focusable children in case there's a focusable child that
     * was unlocked before.
     *
     * We keep this private to not polute the API.
     */
    LockFocusDirective.prototype.shouldUnlockAfterAutofocus = function (event) {
        return !event && this.service.hasPersistedFocus(this.host, this.config);
    };
    /**
     * Add the tabindex attribute to the focusable children elements
     */
    LockFocusDirective.prototype.addTabindexToChildren = function (i) {
        var _this = this;
        if (i === void 0) { i = 0; }
        if (this.shouldLock) {
            this.isLocked = i === -1;
            if (!(this.hasFocusableChildren && i === 0) || i === 0) {
                this.focusable.forEach(function (el) {
                    return _this.renderer.setAttribute(el, 'tabindex', i.toString());
                });
            }
        }
    };
    Object.defineProperty(LockFocusDirective.prototype, "hasFocusableChildren", {
        /**
         * Utility method, returns all focusable children for the host element.
         *
         * We keep this private to not polute the API.
         */
        get: function () {
            return this.service.hasFocusableChildren(this.host);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockFocusDirective.prototype, "focusable", {
        /**
         * Returns the focusable children of the host element. If the host element
         * is configured to be locked, the query is restricted to child elements
         * with a tabindex !== `-1`.
         *
         * We keep this private to not polute the API.
         */
        get: function () {
            return this.service.findFocusable(this.host, this.shouldLock, UNLOCK_HIDDEN_ELEMENTS);
        },
        enumerable: true,
        configurable: true
    });
    LockFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LockFocusService },
        { type: Renderer2 }
    ]; };
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
    return LockFocusDirective;
}(TrapFocusDirective));
export { LockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSDtJQUF3QyxzQ0FBa0I7SUFnRHhELDRCQUNZLFVBQXNCLEVBQ3RCLE9BQXlCLEVBQ3pCLFFBQW1CO1FBSC9CLFlBS0Usa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUxXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGNBQVEsR0FBUixRQUFRLENBQVc7UUFqRHJCLG1CQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFELHdCQUF3QjtRQUNkLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBYXZDOztXQUVHO1FBQ08sWUFBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7O0lBaUMvQyxDQUFDO0lBL0JEOzs7T0FHRztJQUdILHdDQUFXLEdBQVgsVUFBWSxLQUFvQjtRQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUks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RUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQXhELENBQXdELENBQ3pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQU9ELHNCQUFZLG9EQUFvQjtRQUxoQzs7OztXQUlHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBU0Qsc0JBQVkseUNBQVM7UUFQckI7Ozs7OztXQU1HO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUMvQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2Ysc0JBQXNCLENBQ3ZCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBbkl1QixVQUFVO2dCQUNiLGdCQUFnQjtnQkFDZixTQUFTOztJQXhDRTtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7MERBQXFCO0lBS3JEO1FBREMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO3dEQUNiO0lBS1I7UUFBVCxNQUFNLEVBQUU7c0RBQXNDO0lBUS9DO1FBRkMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNekM7SUFPRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNakM7SUE5Q1Usa0JBQWtCO1FBRDlCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QjtPQUM1QixrQkFBa0IsQ0FxTDlCO0lBQUQseUJBQUM7Q0FBQSxBQXJMRCxDQUF3QyxrQkFBa0IsR0FxTHpEO1NBckxZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIExvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRyYXBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RyYXAvdHJhcC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4vbG9jay1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBGb2N1c2FibGUgZWxlbWVudHMgZXhjbHVkZSBoaWRkZW4gZWxlbWVudHMgYnkgZGVmYXVsdCwgYnV0IHRoaXMgY29udHJhZGljdHMgd2l0aFxuICogdW5sb2NraW5nIChoaWRkZW4pIGVsZW1lbnRzLlxuICovXG5jb25zdCBVTkxPQ0tfSElEREVOX0VMRU1FTlRTID0gdHJ1ZTtcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBwZXJzaXN0ZW5jZSBmb3IgZm9jdXNzZWQgZWxlbWVudCBpbiBjYXNlXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJlYnVpbGQuIFRoaXMgaGFwcGVucyBvZnRlbiB3aGVuIGNoYW5nZVxuICogZGV0ZWN0aW9uIGtpY2tzIGluIGJlY2F1c2Ugb2YgbmV3IGRhdGEgc2V0IGZyb20gdGhlIGJhY2tlbmQuXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeExvY2tGb2N1c10nXG5leHBvcnQgY2xhc3MgTG9ja0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVHJhcEZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHsgbG9jazogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hMb2NrRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7fTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgY29uZmlndXJlZCB0byB1c2UgbG9ja2luZy4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYVxuICAgKiBDU1MgY2xhc3MgYGZvY3VzLWxvY2tgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cy1sb2NrJykgc2hvdWxkTG9jazogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGxvY2tlZC4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYSBDU1MgY2xhc3MgYGlzLWxvY2tlZGAuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWxvY2tlZCcpXG4gIGlzTG9ja2VkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBob3N0IGlzIHVubG9ja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHVubG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGVudGVyIG9yIHNwYWNlLCB0aGUgZm9jdXNhYmxlIGNoaWxkcyBhcmVcbiAgICogdW5sb2NrZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHRhYmluZGV4IGlzIHNldCB0byAwLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2UnLCBbJyRldmVudCddKVxuICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2sgJiYgdGhpcy5ob3N0ID09PSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgdGhpcy51bmxvY2tGb2N1cyhldmVudCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW4gY2FzZSBhbnkgb2YgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIGlzIHRvdWNoZWQgYnkgdGhlIG1vdXNlLFxuICAgKiB3ZSB1bmxvY2sgdGhlIGdyb3VwIHRvIG5vdCBicmVhayB0aGUgbW91c2UtZXhwZXJpZW5jZS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaXNMb2NrZWQpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IExvY2tGb2N1c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9ja0ZvY3VzKCkge1xuICAgIHRoaXMuYWRkVGFiaW5kZXhUb0NoaWxkcmVuKC0xKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bmxvY2tGb2N1cyhldmVudD86IFVJRXZlbnQpIHtcbiAgICB0aGlzLnVubG9jay5lbWl0KHRydWUpO1xuICAgIHRoaXMuYWRkVGFiaW5kZXhUb0NoaWxkcmVuKDApO1xuICAgIC8vIHdlIGZvY3VzIHRoZSBob3N0IGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGZyb20gYSBjaGlsZFxuICAgIGlmIChldmVudD8udGFyZ2V0ID09PSB0aGlzLmhvc3QpIHtcbiAgICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB0aGlzLnNob3VsZExvY2sgPSB0aGlzLmNvbmZpZz8ubG9jaztcblxuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuXG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGF1dG9mb2N1c2AgYnkgZGVmYXVsdCBpZiBpdCdzIG5vdFxuICAgICAgLy8gYmVlbiBjb25maWd1cmVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYXV0b2ZvY3VzIGtpY2tzIGluIHVwb24gdW5sb2NrLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnYXV0b2ZvY3VzJykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIExvY2tlZCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byBgZm9jdXNPbkVzY2FwZWAgYnkgZGVmYXVsdCBpZiBpdCdzIG5vdFxuICAgICAgLy8gYmVlbiBjb25maWd1cmVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgIHRoZSBob3N0IGdldHMgbG9ja2VkIGFnYWluIHdoZW5cbiAgICAgIC8vIGBlc2NhcGVgIGlzIHByZXNzZWQuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KCdmb2N1c09uRXNjYXBlJykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZm9jdXNPbkVzY2FwZSA9ICEodGhpcy5jb25maWc/LmZvY3VzT25Fc2NhcGUgPT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgY29tcG9uZW50IGhvc3RzIGEgZ3JvdXAgb2YgZm9jdXNhYmxlIGNoaWxkcmVuIGVsbWVuZW50cyxcbiAgICAgICAqIHdlIHBlcnNpc3QgdGhlIGdyb3VwIGtleSB0byB0aGUgY2hpbGRyZW4sIHNvIHRoYXQgdGhleSBjYW4gdGFrZW4gdGhpc1xuICAgICAgICogaW50byBhY2NvdW50IHdoZW4gdGhleSBwZXJzaXN0IHRoZWlyIGZvY3VzIHN0YXRlLlxuICAgICAgICovXG4gICAgICBpZiAoISF0aGlzLmdyb3VwKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5maW5kRm9jdXNhYmxlKHRoaXMuaG9zdCkuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgICAgLy8gd2UgbXVzdCBkbyB0aGlzIGluIGFmdGVyIHZpZXcgaW5pdCBhc1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCBGT0NVU19HUk9VUF9BVFRSLCB0aGlzLmdyb3VwKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zaG91bGRBdXRvZm9jdXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50KSkge1xuICAgICAgICAvLyBEZWxheSB1bmxvY2tpbmcgaW4gY2FzZSB0aGUgaG9zdCBpcyB1c2luZyBgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdGBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9ja0ZvY3VzKCkpO1xuICAgICAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy5zZXJ2aWNlLmNsZWFyKHRoaXMuY29uZmlnLmdyb3VwKTtcbiAgICB9XG4gICAgc3VwZXIuaGFuZGxlRXNjYXBlKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBoYW5kbGVGb2N1cyBpcyBjYWxsZWQgd2l0aG91dCBhbiBhY3R1YWwgZXZlbnQsIGl0J3MgY29taW5nIGZyb20gQXV0b2ZvY3VzLlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgdW5sb2NrIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gaW4gY2FzZSB0aGVyZSdzIGEgZm9jdXNhYmxlIGNoaWxkIHRoYXRcbiAgICogd2FzIHVubG9ja2VkIGJlZm9yZS5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICByZXR1cm4gIWV2ZW50ICYmIHRoaXMuc2VydmljZS5oYXNQZXJzaXN0ZWRGb2N1cyh0aGlzLmhvc3QsIHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSB0byB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGVsZW1lbnRzXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGFiaW5kZXhUb0NoaWxkcmVuKGkgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IGkgPT09IC0xO1xuICAgICAgaWYgKCEodGhpcy5oYXNGb2N1c2FibGVDaGlsZHJlbiAmJiBpID09PSAwKSB8fCBpID09PSAwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNhYmxlLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndGFiaW5kZXgnLCBpLnRvU3RyaW5nKCkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kLCByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gZm9yIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGhhc0ZvY3VzYWJsZUNoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaGFzRm9jdXNhYmxlQ2hpbGRyZW4odGhpcy5ob3N0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gb2YgdGhlIGhvc3QgZWxlbWVudC4gSWYgdGhlIGhvc3QgZWxlbWVudFxuICAgKiBpcyBjb25maWd1cmVkIHRvIGJlIGxvY2tlZCwgdGhlIHF1ZXJ5IGlzIHJlc3RyaWN0ZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICogd2l0aCBhIHRhYmluZGV4ICE9PSBgLTFgLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBmb2N1c2FibGUoKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5maW5kRm9jdXNhYmxlKFxuICAgICAgdGhpcy5ob3N0LFxuICAgICAgdGhpcy5zaG91bGRMb2NrLFxuICAgICAgVU5MT0NLX0hJRERFTl9FTEVNRU5UU1xuICAgICk7XG4gIH1cbn1cbiJdfQ==