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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSDtJQUF3QyxzQ0FBa0I7SUFnRHhELDRCQUNZLFVBQXNCLEVBQ3RCLE9BQXlCLEVBQ3pCLFFBQW1CO1FBSC9CLFlBS0Usa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUxXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGNBQVEsR0FBUixRQUFRLENBQVc7UUFqRHJCLG1CQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFELHdCQUF3QjtRQUNkLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBYXZDOztXQUVHO1FBQ08sWUFBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7O0lBaUMvQyxDQUFDO0lBL0JEOzs7T0FHRztJQUdILHdDQUFXLEdBQVgsVUFBWSxLQUFvQjtRQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUks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RUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQXhELENBQXdELENBQ3pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQU9ELHNCQUFZLG9EQUFvQjtRQUxoQzs7OztXQUlHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBU0Qsc0JBQVkseUNBQVM7UUFQckI7Ozs7OztXQU1HO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUMvQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2Ysc0JBQXNCLENBQ3ZCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBbkl1QixVQUFVO2dCQUNiLGdCQUFnQjtnQkFDZixTQUFTOztJQXhDRTtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7MERBQXFCO0lBS3JCO1FBQS9CLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt3REFBbUI7SUFLeEM7UUFBVCxNQUFNLEVBQUU7c0RBQXNDO0lBUS9DO1FBRkMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNekM7SUFPRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNakM7SUE5Q1Usa0JBQWtCO1FBRDlCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QjtPQUM1QixrQkFBa0IsQ0FxTDlCO0lBQUQseUJBQUM7Q0FBQSxBQXJMRCxDQUF3QyxrQkFBa0IsR0FxTHpEO1NBckxZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIExvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRyYXBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RyYXAvdHJhcC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4vbG9jay1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBGb2N1c2FibGUgZWxlbWVudHMgZXhjbHVkZSBoaWRkZW4gZWxlbWVudHMgYnkgZGVmYXVsdCwgYnV0IHRoaXMgY29udHJhZGljdHMgd2l0aFxuICogdW5sb2NraW5nIChoaWRkZW4pIGVsZW1lbnRzLlxuICovXG5jb25zdCBVTkxPQ0tfSElEREVOX0VMRU1FTlRTID0gdHJ1ZTtcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBwZXJzaXN0ZW5jZSBmb3IgZm9jdXNzZWQgZWxlbWVudCBpbiBjYXNlXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJlYnVpbGQuIFRoaXMgaGFwcGVucyBvZnRlbiB3aGVuIGNoYW5nZVxuICogZGV0ZWN0aW9uIGtpY2tzIGluIGJlY2F1c2Ugb2YgbmV3IGRhdGEgc2V0IGZyb20gdGhlIGJhY2tlbmQuXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeExvY2tGb2N1c10nXG5leHBvcnQgY2xhc3MgTG9ja0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVHJhcEZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHsgbG9jazogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hMb2NrRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7fTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgY29uZmlndXJlZCB0byB1c2UgbG9ja2luZy4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYVxuICAgKiBDU1MgY2xhc3MgYGZvY3VzLWxvY2tgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cy1sb2NrJykgc2hvdWxkTG9jazogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgbG9ja2VkLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhIENTUyBjbGFzcyBgaXMtbG9ja2VkYC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbG9ja2VkJykgaXNMb2NrZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGhvc3QgaXMgdW5sb2NrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdW5sb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgZW50ZXIgb3Igc3BhY2UsIHRoZSBmb2N1c2FibGUgY2hpbGRzIGFyZVxuICAgKiB1bmxvY2tlZCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgdGFiaW5kZXggaXMgc2V0IHRvIDAuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zcGFjZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmhvc3QgPT09IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBjYXNlIGFueSBvZiB0aGUgY2hpbGRyZW4gZWxlbWVudHMgaXMgdG91Y2hlZCBieSB0aGUgbW91c2UsXG4gICAqIHdlIHVubG9jayB0aGUgZ3JvdXAgdG8gbm90IGJyZWFrIHRoZSBtb3VzZS1leHBlcmllbmNlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljayhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2sgJiYgdGhpcy5pc0xvY2tlZCkge1xuICAgICAgdGhpcy51bmxvY2tGb2N1cyhldmVudCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTG9ja0ZvY3VzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsb2NrRm9jdXMoKSB7XG4gICAgdGhpcy5hZGRUYWJpbmRleFRvQ2hpbGRyZW4oLTEpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVubG9ja0ZvY3VzKGV2ZW50PzogVUlFdmVudCkge1xuICAgIHRoaXMudW5sb2NrLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5hZGRUYWJpbmRleFRvQ2hpbGRyZW4oMCk7XG4gICAgLy8gd2UgZm9jdXMgdGhlIGhvc3QgaWYgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgZnJvbSBhIGNoaWxkXG4gICAgaWYgKGV2ZW50Py50YXJnZXQgPT09IHRoaXMuaG9zdCkge1xuICAgICAgc3VwZXIuaGFuZGxlRm9jdXMoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMuc2hvdWxkTG9jayA9IHRoaXMuY29uZmlnPy5sb2NrO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG5cbiAgICAgIC8vIExvY2tlZCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byBgYXV0b2ZvY3VzYCBieSBkZWZhdWx0IGlmIGl0J3Mgbm90XG4gICAgICAvLyBiZWVuIGNvbmZpZ3VyZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhdXRvZm9jdXMga2lja3MgaW4gdXBvbiB1bmxvY2suXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KCdhdXRvZm9jdXMnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5hdXRvZm9jdXMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBmb2N1c09uRXNjYXBlYCBieSBkZWZhdWx0IGlmIGl0J3Mgbm90XG4gICAgICAvLyBiZWVuIGNvbmZpZ3VyZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCAgdGhlIGhvc3QgZ2V0cyBsb2NrZWQgYWdhaW4gd2hlblxuICAgICAgLy8gYGVzY2FwZWAgaXMgcHJlc3NlZC5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2ZvY3VzT25Fc2NhcGUnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5mb2N1c09uRXNjYXBlID0gISh0aGlzLmNvbmZpZz8uZm9jdXNPbkVzY2FwZSA9PT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBjb21wb25lbnQgaG9zdHMgYSBncm91cCBvZiBmb2N1c2FibGUgY2hpbGRyZW4gZWxtZW5lbnRzLFxuICAgICAgICogd2UgcGVyc2lzdCB0aGUgZ3JvdXAga2V5IHRvIHRoZSBjaGlsZHJlbiwgc28gdGhhdCB0aGV5IGNhbiB0YWtlbiB0aGlzXG4gICAgICAgKiBpbnRvIGFjY291bnQgd2hlbiB0aGV5IHBlcnNpc3QgdGhlaXIgZm9jdXMgc3RhdGUuXG4gICAgICAgKi9cbiAgICAgIGlmICghIXRoaXMuZ3JvdXApIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZpbmRGb2N1c2FibGUodGhpcy5ob3N0KS5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgICAvLyB3ZSBtdXN0IGRvIHRoaXMgaW4gYWZ0ZXIgdmlldyBpbml0IGFzXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsIEZPQ1VTX0dST1VQX0FUVFIsIHRoaXMuZ3JvdXApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZEF1dG9mb2N1cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQpKSB7XG4gICAgICAgIC8vIERlbGF5IHVubG9ja2luZyBpbiBjYXNlIHRoZSBob3N0IGlzIHVzaW5nIGBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0YFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2NrRm9jdXMoKSk7XG4gICAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCk7XG4gIH1cblxuICBoYW5kbGVFc2NhcGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuY2xlYXIodGhpcy5jb25maWcuZ3JvdXApO1xuICAgIH1cbiAgICBzdXBlci5oYW5kbGVFc2NhcGUoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGhhbmRsZUZvY3VzIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFjdHVhbCBldmVudCwgaXQncyBjb21pbmcgZnJvbSBBdXRvZm9jdXMuXG4gICAqIEluIHRoaXMgY2FzZSB3ZSB1bmxvY2sgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBpbiBjYXNlIHRoZXJlJ3MgYSBmb2N1c2FibGUgY2hpbGQgdGhhdFxuICAgKiB3YXMgdW5sb2NrZWQgYmVmb3JlLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIHNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIHJldHVybiAhZXZlbnQgJiYgdGhpcy5zZXJ2aWNlLmhhc1BlcnNpc3RlZEZvY3VzKHRoaXMuaG9zdCwgdGhpcy5jb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIHRvIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gZWxlbWVudHNcbiAgICovXG4gIHByb3RlY3RlZCBhZGRUYWJpbmRleFRvQ2hpbGRyZW4oaSA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gaSA9PT0gLTE7XG4gICAgICBpZiAoISh0aGlzLmhhc0ZvY3VzYWJsZUNoaWxkcmVuICYmIGkgPT09IDApIHx8IGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5mb2N1c2FibGUuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0YWJpbmRleCcsIGkudG9TdHJpbmcoKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QsIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZHJlbiBmb3IgdGhlIGhvc3QgZWxlbWVudC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaGFzRm9jdXNhYmxlQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5oYXNGb2N1c2FibGVDaGlsZHJlbih0aGlzLmhvc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBvZiB0aGUgaG9zdCBlbGVtZW50LiBJZiB0aGUgaG9zdCBlbGVtZW50XG4gICAqIGlzIGNvbmZpZ3VyZWQgdG8gYmUgbG9ja2VkLCB0aGUgcXVlcnkgaXMgcmVzdHJpY3RlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgKiB3aXRoIGEgdGFiaW5kZXggIT09IGAtMWAuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZvY3VzYWJsZSgpOiBIVE1MRWxlbWVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRGb2N1c2FibGUoXG4gICAgICB0aGlzLmhvc3QsXG4gICAgICB0aGlzLnNob3VsZExvY2ssXG4gICAgICBVTkxPQ0tfSElEREVOX0VMRU1FTlRTXG4gICAgKTtcbiAgfVxufVxuIl19