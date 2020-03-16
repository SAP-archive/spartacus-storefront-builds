import { __decorate, __extends } from "tslib";
import { AfterContentInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2, } from '@angular/core';
import { FOCUS_GROUP_ATTR } from '../keyboard-focus.model';
import { TrapFocusDirective } from '../trap/trap-focus.directive';
import { LockFocusService } from './lock-focus.service';
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
        var _a;
        this.unlock.emit(true);
        this.addTabindexToChildren(0);
        // we focus the host if the event target was a nested child
        if (((_a = event) === null || _a === void 0 ? void 0 : _a.target) === this.host) {
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
    LockFocusDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.shouldLock) {
            /**
             * If the component hosts a group of focusable children elmenents,
             * we persist the group key to the children, so that they can taken this
             * into account when they persist their focus state.
             */
            if (!!this.group) {
                this.service
                    .findFocusable(this.host)
                    .forEach(function (el) {
                    return _this.renderer.setAttribute(el, FOCUS_GROUP_ATTR, _this.group);
                });
            }
            this.lockFocus();
        }
    };
    LockFocusDirective.prototype.handleFocus = function (event) {
        var _this = this;
        var _a;
        if (this.shouldLock) {
            this.lockFocus();
            if (this.shouldUnlockAfterAutofocus(event)) {
                // Delay unlocking in case the host is using `ChangeDetectionStrategy.Default`
                setTimeout(function () { return _this.unlockFocus(event); });
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
        _super.prototype.handleFocus.call(this, event);
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
                    _this.renderer.setAttribute(el, 'tabindex', i.toString());
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
            return this.service.findFocusable(this.host, this.shouldLock);
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
    return LockFocusDirective;
}(TrapFocusDirective));
export { LockFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBbUIsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7OztHQUlHO0FBSUg7SUFBd0Msc0NBQWtCO0lBOEN4RCw0QkFDWSxVQUFzQixFQUN0QixPQUF5QixFQUN6QixRQUFtQjtRQUgvQixZQUtFLGtCQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FDM0I7UUFMVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBL0NyQixtQkFBYSxHQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUUxQixZQUFNLEdBQW9CLEVBQUUsQ0FBQztRQVk3RDs7V0FFRztRQUNPLFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDOztJQWlDL0MsQ0FBQztJQS9CRDs7O09BR0c7SUFHSCx3Q0FBVyxHQUFYLFVBQVksS0FBb0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQU0sS0FBSyxDQUFDLE1BQXNCLEVBQUU7WUFD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QUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxDQUFDOzs7T0FBQTs7Z0JBN0h1QixVQUFVO2dCQUNiLGdCQUFnQjtnQkFDZixTQUFTOztJQTdDVDtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDO3NEQUF3QztJQU01QjtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7MERBQXFCO0lBSXJCO1FBQS9CLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt3REFBbUI7SUFLeEM7UUFBVCxNQUFNLEVBQUU7c0RBQXNDO0lBUS9DO1FBRkMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNekM7SUFPRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNakM7SUE1Q1Usa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUM7T0FDVyxrQkFBa0IsQ0E2SzlCO0lBQUQseUJBQUM7Q0FBQSxBQTdLRCxDQUF3QyxrQkFBa0IsR0E2S3pEO1NBN0tZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGT0NVU19HUk9VUF9BVFRSLCBMb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFwRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2tGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2xvY2stZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBwZXJzaXN0ZW5jZSBmb3IgZm9jdXNzZWQgZWxlbWVudCBpbiBjYXNlXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJlYnVpbGQuIFRoaXMgaGFwcGVucyBvZnRlbiB3aGVuIGNoYW5nZVxuICogZGV0ZWN0aW9uIGtpY2tzIGluIGJlY2F1c2Ugb2YgbmV3IGRhdGEgc2V0IGZyb20gdGhlIGJhY2tlbmQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeExvY2tGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NrRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBUcmFwRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogTG9ja0ZvY3VzQ29uZmlnID0geyBsb2NrOiB0cnVlIH07XG5cbiAgQElucHV0KCdjeExvY2tGb2N1cycpIHByb3RlY3RlZCBjb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBjb25maWd1cmVkIHRvIHVzZSBsb2NraW5nLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhXG4gICAqIENTUyBjbGFzcyBgZm9jdXMtbG9ja2AuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzLWxvY2snKSBzaG91bGRMb2NrOiBib29sZWFuO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgbG9ja2VkLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhIENTUyBjbGFzcyBgaXMtbG9ja2VkYC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbG9ja2VkJykgaXNMb2NrZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGhvc3QgaXMgdW5sb2NrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdW5sb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgZW50ZXIgb3Igc3BhY2UsIHRoZSBmb2N1c2FibGUgY2hpbGRzIGFyZVxuICAgKiB1bmxvY2tlZCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgdGFiaW5kZXggaXMgc2V0IHRvIDAuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zcGFjZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmhvc3QgPT09IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjYXNlIGFueSBvZiB0aGUgY2hpbGRyZW4gZWxlbWVudHMgaXMgdG91Y2hlZCBieSB0aGUgbW91c2UsXG4gICAqIHdlIHVubG9jayB0aGUgZ3JvdXAgdG8gbm90IGJyZWFrIHRoZSBtb3VzZS1leHBlcmllbmNlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljayhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2sgJiYgdGhpcy5pc0xvY2tlZCkge1xuICAgICAgdGhpcy51bmxvY2tGb2N1cyhldmVudCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTG9ja0ZvY3VzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2NrRm9jdXMoKSB7XG4gICAgdGhpcy5hZGRUYWJpbmRleFRvQ2hpbGRyZW4oLTEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVubG9ja0ZvY3VzKGV2ZW50PzogVUlFdmVudCkge1xuICAgIHRoaXMudW5sb2NrLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5hZGRUYWJpbmRleFRvQ2hpbGRyZW4oMCk7XG4gICAgLy8gd2UgZm9jdXMgdGhlIGhvc3QgaWYgdGhlIGV2ZW50IHRhcmdldCB3YXMgYSBuZXN0ZWQgY2hpbGRcbiAgICBpZiAoZXZlbnQ/LnRhcmdldCA9PT0gdGhpcy5ob3N0KSB7XG4gICAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5zaG91bGRMb2NrID0gdGhpcy5jb25maWc/LmxvY2s7XG5cbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gMDtcblxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBhdXRvZm9jdXNgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGF1dG9mb2N1cyBraWNrcyBpbiB1cG9uIHVubG9jay5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2F1dG9mb2N1cycpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmF1dG9mb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBMb2NrZWQgZWxlbWVudHMgd2lsbCBiZSBzZXQgdG8gYGZvY3VzT25Fc2NhcGVgIGJ5IGRlZmF1bHQgaWYgaXQncyBub3RcbiAgICAgIC8vIGJlZW4gY29uZmlndXJlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0ICB0aGUgaG9zdCBnZXRzIGxvY2tlZCBhZ2FpbiB3aGVuXG4gICAgICAvLyBgZXNjYXBlYCBpcyBwcmVzc2VkLlxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZm9jdXNPbkVzY2FwZScpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZvY3VzT25Fc2NhcGUgPSAhKHRoaXMuY29uZmlnPy5mb2N1c09uRXNjYXBlID09PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGNvbXBvbmVudCBob3N0cyBhIGdyb3VwIG9mIGZvY3VzYWJsZSBjaGlsZHJlbiBlbG1lbmVudHMsXG4gICAgICAgKiB3ZSBwZXJzaXN0IHRoZSBncm91cCBrZXkgdG8gdGhlIGNoaWxkcmVuLCBzbyB0aGF0IHRoZXkgY2FuIHRha2VuIHRoaXNcbiAgICAgICAqIGludG8gYWNjb3VudCB3aGVuIHRoZXkgcGVyc2lzdCB0aGVpciBmb2N1cyBzdGF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKCEhdGhpcy5ncm91cCkge1xuICAgICAgICB0aGlzLnNlcnZpY2VcbiAgICAgICAgICAuZmluZEZvY3VzYWJsZSh0aGlzLmhvc3QpXG4gICAgICAgICAgLmZvckVhY2goZWwgPT5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCBGT0NVU19HUk9VUF9BVFRSLCB0aGlzLmdyb3VwKVxuICAgICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9ja0ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy5sb2NrRm9jdXMoKTtcblxuICAgICAgaWYgKHRoaXMuc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQpKSB7XG4gICAgICAgIC8vIERlbGF5IHVubG9ja2luZyBpbiBjYXNlIHRoZSBob3N0IGlzIHVzaW5nIGBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0YFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9ja0ZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGxldCdzIG5vdCBidWJibGUgdXAgdGhlIGhhbmRsZUZvY3VzIGV2ZW50IGlmIHRoZSBob3N0IGlzIGxvY2tlZFxuICAgICAgaWYgKHRoaXMuaXNMb2NrZWQpIHtcbiAgICAgICAgZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGhhbmRsZUZvY3VzIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFjdHVhbCBldmVudCwgaXQncyBjb21pbmcgZnJvbSBBdXRvZm9jdXMuXG4gICAqIEluIHRoaXMgY2FzZSB3ZSB1bmxvY2sgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBpbiBjYXNlIHRoZXJlJ3MgYSBmb2N1c2FibGUgY2hpbGQgdGhhdFxuICAgKiB3YXMgdW5sb2NrZWQgYmVmb3JlLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIHNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIHJldHVybiAhZXZlbnQgJiYgdGhpcy5zZXJ2aWNlLmhhc1BlcnNpc3RlZEZvY3VzKHRoaXMuaG9zdCwgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIHRvIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gZWxlbWVudHNcbiAgICovXG4gIHByb3RlY3RlZCBhZGRUYWJpbmRleFRvQ2hpbGRyZW4oaSA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gaSA9PT0gLTE7XG4gICAgICBpZiAoISh0aGlzLmhhc0ZvY3VzYWJsZUNoaWxkcmVuICYmIGkgPT09IDApIHx8IGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5mb2N1c2FibGUuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0YWJpbmRleCcsIGkudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCwgcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIGZvciB0aGUgaG9zdCBlbGVtZW50LlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBoYXNGb2N1c2FibGVDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmhhc0ZvY3VzYWJsZUNoaWxkcmVuKHRoaXMuaG9zdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIHRoZSBob3N0IGVsZW1lbnQuIElmIHRoZSBob3N0IGVsZW1lbnRcbiAgICogaXMgY29uZmlndXJlZCB0byBiZSBsb2NrZWQsIHRoZSBxdWVyeSBpcyByZXN0cmljdGVkIHRvIGNoaWxkIGVsZW1lbnRzXG4gICAqIHdpdGggYSB0YWJpbmRleCAhPT0gYC0xYC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZm9jdXNhYmxlKCk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZmluZEZvY3VzYWJsZSh0aGlzLmhvc3QsIHRoaXMuc2hvdWxkTG9jayk7XG4gIH1cbn1cbiJdfQ==