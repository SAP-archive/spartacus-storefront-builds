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
            event.preventDefault();
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
        var _this = this;
        this.unlock.emit(true);
        this.addTabindexToChildren(0);
        // we focus the host if the event was triggered from a child
        if ((event === null || event === void 0 ? void 0 : event.target) === this.host) {
            // we wait a few milliseconds, mainly because firefox will otherwise apply
            // the mouse event on the new focused child element
            setTimeout(function () {
                _super.prototype.handleFocus.call(_this, event);
            }, 100);
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
             * If the component hosts a group of focusable children elements,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9sb2NrL2xvY2stZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7R0FHRztBQUNILElBQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BDOzs7O0dBSUc7QUFFSDtJQUF3QyxzQ0FBa0I7SUFpRHhELDRCQUNZLFVBQXNCLEVBQ3RCLE9BQXlCLEVBQ3pCLFFBQW1CO1FBSC9CLFlBS0Usa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUxXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGNBQVEsR0FBUixRQUFRLENBQVc7UUFsRHJCLG1CQUFhLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFELHdCQUF3QjtRQUNkLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBYXZDOztXQUVHO1FBQ08sWUFBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7O0lBa0MvQyxDQUFDO0lBaENEOzs7T0FHRztJQUdILHdDQUFXLEdBQVgsVUFBWSxLQUFvQjtRQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksS0FBTSxLQUFLLENBQUMsTUFBc0IsRUFBRTtZQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBRUgsd0NBQVcsR0FBWCxVQUFZLEtBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBVVMsc0NBQVMsR0FBbkI7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVMsd0NBQVcsR0FBckIsVUFBc0IsS0FBZTtRQUFyQyxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5Qiw0REFBNEQ7UUFDNUQsSUFBSSxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLE1BQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUMvQiwwRUFBMEU7WUFDMUUsbURBQW1EO1lBQ25ELFVBQVUsQ0FBQztnQkFDVCxpQkFBTSxXQUFXLGFBQUMsS0FBc0IsQ0FBQyxDQUFDO1lBQzVDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVELHFDQUFRLEdBQVI7O1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLFVBQVUsU0FBRyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRWxCLG9FQUFvRTtZQUNwRSx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDOUI7WUFDRCx3RUFBd0U7WUFDeEUsMEVBQTBFO1lBQzFFLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxPQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLGFBQWEsTUFBSyxLQUFLLENBQUMsQ0FBQzthQUNyRTtTQUNGO0lBQ0gsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25COzs7O2VBSUc7WUFDSCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtvQkFDL0Msd0NBQXdDO29CQUN4QyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDO2dCQUE1RCxDQUE0RCxDQUM3RCxDQUFDO2FBQ0g7WUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtTQUNGO1FBQ0QsaUJBQU0sZUFBZSxXQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxLQUFxQjtRQUFqQyxpQkFZQztRQVhDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUMsOEVBQThFO2dCQUM5RSxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsZUFBZSxHQUFHO2dCQUN6QixPQUFPO2FBQ1I7U0FDRjtRQUNELGlCQUFNLFdBQVcsWUFBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQW9CO1FBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsaUJBQU0sWUFBWSxZQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx1REFBMEIsR0FBbEMsVUFBbUMsS0FBcUI7UUFDdEQsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNPLGtEQUFxQixHQUEvQixVQUFnQyxDQUFLO1FBQXJDLGlCQVNDO1FBVCtCLGtCQUFBLEVBQUEsS0FBSztRQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7b0JBQ3hCLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQXhELENBQXdELENBQ3pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQU9ELHNCQUFZLG9EQUFvQjtRQUxoQzs7OztXQUlHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBU0Qsc0JBQVkseUNBQVM7UUFQckI7Ozs7OztXQU1HO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUMvQixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLEVBQ2Ysc0JBQXNCLENBQ3ZCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBdkl1QixVQUFVO2dCQUNiLGdCQUFnQjtnQkFDZixTQUFTOztJQXpDRTtRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7MERBQXFCO0lBS3JCO1FBQS9CLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt3REFBbUI7SUFLeEM7UUFBVCxNQUFNLEVBQUU7c0RBQXNDO0lBUS9DO1FBRkMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFPekM7SUFPRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFNakM7SUEvQ1Usa0JBQWtCO1FBRDlCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QjtPQUM1QixrQkFBa0IsQ0EwTDlCO0lBQUQseUJBQUM7Q0FBQSxBQTFMRCxDQUF3QyxrQkFBa0IsR0EwTHpEO1NBMUxZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZPQ1VTX0dST1VQX0FUVFIsIExvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRyYXBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RyYXAvdHJhcC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4vbG9jay1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBGb2N1c2FibGUgZWxlbWVudHMgZXhjbHVkZSBoaWRkZW4gZWxlbWVudHMgYnkgZGVmYXVsdCwgYnV0IHRoaXMgY29udHJhZGljdHMgd2l0aFxuICogdW5sb2NraW5nIChoaWRkZW4pIGVsZW1lbnRzLlxuICovXG5jb25zdCBVTkxPQ0tfSElEREVOX0VMRU1FTlRTID0gdHJ1ZTtcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBwZXJzaXN0ZW5jZSBmb3IgZm9jdXNzZWQgZWxlbWVudCBpbiBjYXNlXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJlYnVpbGQuIFRoaXMgaGFwcGVucyBvZnRlbiB3aGVuIGNoYW5nZVxuICogZGV0ZWN0aW9uIGtpY2tzIGluIGJlY2F1c2Ugb2YgbmV3IGRhdGEgc2V0IGZyb20gdGhlIGJhY2tlbmQuXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeExvY2tGb2N1c10nXG5leHBvcnQgY2xhc3MgTG9ja0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVHJhcEZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IExvY2tGb2N1c0NvbmZpZyA9IHsgbG9jazogdHJ1ZSB9O1xuXG4gIC8vIEBJbnB1dCgnY3hMb2NrRm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBMb2NrRm9jdXNDb25maWcgPSB7fTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgY29uZmlndXJlZCB0byB1c2UgbG9ja2luZy4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYVxuICAgKiBDU1MgY2xhc3MgYGZvY3VzLWxvY2tgLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cy1sb2NrJykgc2hvdWxkTG9jazogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgbG9ja2VkLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhIENTUyBjbGFzcyBgaXMtbG9ja2VkYC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbG9ja2VkJykgaXNMb2NrZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGhvc3QgaXMgdW5sb2NrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgdW5sb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgZW50ZXIgb3Igc3BhY2UsIHRoZSBmb2N1c2FibGUgY2hpbGRzIGFyZVxuICAgKiB1bmxvY2tlZCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgdGFiaW5kZXggaXMgc2V0IHRvIDAuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5zcGFjZScsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jayAmJiB0aGlzLmhvc3QgPT09IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnVubG9ja0ZvY3VzKGV2ZW50KTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW4gY2FzZSBhbnkgb2YgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIGlzIHRvdWNoZWQgYnkgdGhlIG1vdXNlLFxuICAgKiB3ZSB1bmxvY2sgdGhlIGdyb3VwIHRvIG5vdCBicmVhayB0aGUgbW91c2UtZXhwZXJpZW5jZS5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrICYmIHRoaXMuaXNMb2NrZWQpIHtcbiAgICAgIHRoaXMudW5sb2NrRm9jdXMoZXZlbnQpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IExvY2tGb2N1c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9ja0ZvY3VzKCkge1xuICAgIHRoaXMuYWRkVGFiaW5kZXhUb0NoaWxkcmVuKC0xKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bmxvY2tGb2N1cyhldmVudD86IFVJRXZlbnQpIHtcbiAgICB0aGlzLnVubG9jay5lbWl0KHRydWUpO1xuICAgIHRoaXMuYWRkVGFiaW5kZXhUb0NoaWxkcmVuKDApO1xuICAgIC8vIHdlIGZvY3VzIHRoZSBob3N0IGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGZyb20gYSBjaGlsZFxuICAgIGlmIChldmVudD8udGFyZ2V0ID09PSB0aGlzLmhvc3QpIHtcbiAgICAgIC8vIHdlIHdhaXQgYSBmZXcgbWlsbGlzZWNvbmRzLCBtYWlubHkgYmVjYXVzZSBmaXJlZm94IHdpbGwgb3RoZXJ3aXNlIGFwcGx5XG4gICAgICAvLyB0aGUgbW91c2UgZXZlbnQgb24gdGhlIG5ldyBmb2N1c2VkIGNoaWxkIGVsZW1lbnRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzdXBlci5oYW5kbGVGb2N1cyhldmVudCBhcyBLZXlib2FyZEV2ZW50KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMuc2hvdWxkTG9jayA9IHRoaXMuY29uZmlnPy5sb2NrO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkTG9jaykge1xuICAgICAgdGhpcy50YWJpbmRleCA9IDA7XG5cbiAgICAgIC8vIExvY2tlZCBlbGVtZW50cyB3aWxsIGJlIHNldCB0byBgYXV0b2ZvY3VzYCBieSBkZWZhdWx0IGlmIGl0J3Mgbm90XG4gICAgICAvLyBiZWVuIGNvbmZpZ3VyZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBhdXRvZm9jdXMga2lja3MgaW4gdXBvbiB1bmxvY2suXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KCdhdXRvZm9jdXMnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5hdXRvZm9jdXMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gTG9ja2VkIGVsZW1lbnRzIHdpbGwgYmUgc2V0IHRvIGBmb2N1c09uRXNjYXBlYCBieSBkZWZhdWx0IGlmIGl0J3Mgbm90XG4gICAgICAvLyBiZWVuIGNvbmZpZ3VyZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCAgdGhlIGhvc3QgZ2V0cyBsb2NrZWQgYWdhaW4gd2hlblxuICAgICAgLy8gYGVzY2FwZWAgaXMgcHJlc3NlZC5cbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ2ZvY3VzT25Fc2NhcGUnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5mb2N1c09uRXNjYXBlID0gISh0aGlzLmNvbmZpZz8uZm9jdXNPbkVzY2FwZSA9PT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBjb21wb25lbnQgaG9zdHMgYSBncm91cCBvZiBmb2N1c2FibGUgY2hpbGRyZW4gZWxlbWVudHMsXG4gICAgICAgKiB3ZSBwZXJzaXN0IHRoZSBncm91cCBrZXkgdG8gdGhlIGNoaWxkcmVuLCBzbyB0aGF0IHRoZXkgY2FuIHRha2VuIHRoaXNcbiAgICAgICAqIGludG8gYWNjb3VudCB3aGVuIHRoZXkgcGVyc2lzdCB0aGVpciBmb2N1cyBzdGF0ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKCEhdGhpcy5ncm91cCkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuZmluZEZvY3VzYWJsZSh0aGlzLmhvc3QpLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgIC8vIHdlIG11c3QgZG8gdGhpcyBpbiBhZnRlciB2aWV3IGluaXQgYXNcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgRk9DVVNfR1JPVVBfQVRUUiwgdGhpcy5ncm91cClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2hvdWxkQXV0b2ZvY3VzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG91bGRMb2NrKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cyhldmVudCkpIHtcbiAgICAgICAgLy8gRGVsYXkgdW5sb2NraW5nIGluIGNhc2UgdGhlIGhvc3QgaXMgdXNpbmcgYENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51bmxvY2tGb2N1cyhldmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvY2tGb2N1cygpKTtcbiAgICAgICAgZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmhhbmRsZUZvY3VzKGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUVzY2FwZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMuc2VydmljZS5jbGVhcih0aGlzLmNvbmZpZy5ncm91cCk7XG4gICAgfVxuICAgIHN1cGVyLmhhbmRsZUVzY2FwZShldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgaGFuZGxlRm9jdXMgaXMgY2FsbGVkIHdpdGhvdXQgYW4gYWN0dWFsIGV2ZW50LCBpdCdzIGNvbWluZyBmcm9tIEF1dG9mb2N1cy5cbiAgICogSW4gdGhpcyBjYXNlIHdlIHVubG9jayB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGluIGNhc2UgdGhlcmUncyBhIGZvY3VzYWJsZSBjaGlsZCB0aGF0XG4gICAqIHdhcyB1bmxvY2tlZCBiZWZvcmUuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICovXG4gIHByaXZhdGUgc2hvdWxkVW5sb2NrQWZ0ZXJBdXRvZm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgcmV0dXJuICFldmVudCAmJiB0aGlzLnNlcnZpY2UuaGFzUGVyc2lzdGVkRm9jdXModGhpcy5ob3N0LCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSB0YWJpbmRleCBhdHRyaWJ1dGUgdG8gdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBlbGVtZW50c1xuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFRhYmluZGV4VG9DaGlsZHJlbihpID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZExvY2spIHtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBpID09PSAtMTtcbiAgICAgIGlmICghKHRoaXMuaGFzRm9jdXNhYmxlQ2hpbGRyZW4gJiYgaSA9PT0gMCkgfHwgaSA9PT0gMCkge1xuICAgICAgICB0aGlzLmZvY3VzYWJsZS5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3RhYmluZGV4JywgaS50b1N0cmluZygpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCwgcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIGZvciB0aGUgaG9zdCBlbGVtZW50LlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAqL1xuICBwcml2YXRlIGdldCBoYXNGb2N1c2FibGVDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmhhc0ZvY3VzYWJsZUNoaWxkcmVuKHRoaXMuaG9zdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIHRoZSBob3N0IGVsZW1lbnQuIElmIHRoZSBob3N0IGVsZW1lbnRcbiAgICogaXMgY29uZmlndXJlZCB0byBiZSBsb2NrZWQsIHRoZSBxdWVyeSBpcyByZXN0cmljdGVkIHRvIGNoaWxkIGVsZW1lbnRzXG4gICAqIHdpdGggYSB0YWJpbmRleCAhPT0gYC0xYC5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZm9jdXNhYmxlKCk6IEhUTUxFbGVtZW50W10ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZmluZEZvY3VzYWJsZShcbiAgICAgIHRoaXMuaG9zdCxcbiAgICAgIHRoaXMuc2hvdWxkTG9jayxcbiAgICAgIFVOTE9DS19ISURERU5fRUxFTUVOVFNcbiAgICApO1xuICB9XG59XG4iXX0=