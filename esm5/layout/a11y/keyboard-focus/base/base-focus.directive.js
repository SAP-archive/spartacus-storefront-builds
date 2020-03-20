import { __decorate } from "tslib";
import { Directive, ElementRef, HostBinding, Input, OnInit, } from '@angular/core';
import { BaseFocusService } from './base-focus.service';
/**
 * Abstract directive that provides a common interface for all focus directives:
 * - Block Focus
 * - Persist Focus
 * - Escape Focus
 * - Auto Focus
 * - Tab Focus
 * - Trap Focus
 * - Lock Focus
 */
var BaseFocusDirective = /** @class */ (function () {
    function BaseFocusDirective(elementRef, service) {
        this.elementRef = elementRef;
        this.service = service;
        /**
         * A default config can be provided for each directive if a specific focus directive
         * is used directly. i.e. `<div cxAutoFocus></div>`
         */
        this.defaultConfig = {};
    }
    BaseFocusDirective.prototype.ngOnInit = function () {
        this.setDefaultConfiguration();
        this.requiredTabindex = -1;
    };
    /**
     * Override the (input) config if it undefined or an empty string, with the
     * `defaultConfig`. The `defaultConfig` might be specified for each directive
     * differently. If a specific directive is used (i.e. `cxAutoFocus`), the
     * specific (inherited) defaultConfig will be used.
     */
    BaseFocusDirective.prototype.setDefaultConfiguration = function () {
        if ((!this.config || this.config === '') && this.defaultConfig) {
            this.config = this.defaultConfig;
        }
    };
    Object.defineProperty(BaseFocusDirective.prototype, "host", {
        /**
         * Helper method to return the host element for the directive
         * given by the `elementRef`.
         */
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFocusDirective.prototype, "requiredTabindex", {
        /**
         * Force a tabindex on the host element if it is _requried_ to make the element
         * focusable. If the element is focusable by nature or by a given tabindex, the
         * `tabindex` is not applied.
         *
         * Buttons, active links, etc. do no need an explicit tabindex to receive focus.
         */
        set: function (tabindex) {
            if (this.requiresExplicitTabIndex) {
                this.tabindex = tabindex;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFocusDirective.prototype, "requiresExplicitTabIndex", {
        /**
         * Returns true if the host element does not have a tabindex defined
         * and it also doesn't get focus by browsers nature (i.e. button or
         * active link).
         *
         * We keep this utility method private to not pollute the API.
         */
        get: function () {
            return (this.tabindex === undefined &&
                ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
                !(this.host.tagName === 'A' && this.host.hasAttribute('href')));
        },
        enumerable: true,
        configurable: true
    });
    BaseFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: BaseFocusService }
    ]; };
    __decorate([
        Input(), HostBinding('attr.tabindex')
    ], BaseFocusDirective.prototype, "tabindex", void 0);
    BaseFocusDirective = __decorate([
        Directive()
    ], BaseFocusDirective);
    return BaseFocusDirective;
}());
export { BaseFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9iYXNlL2Jhc2UtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDs7Ozs7Ozs7O0dBU0c7QUFFSDtJQWVFLDRCQUNZLFVBQW1DLEVBQ25DLE9BQXlCO1FBRHpCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBVnJDOzs7V0FHRztRQUNPLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztJQU8zQyxDQUFDO0lBRUoscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxvREFBdUIsR0FBakM7UUFDRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBTUQsc0JBQWMsb0NBQUk7UUFKbEI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBU0Qsc0JBQWMsZ0RBQWdCO1FBUDlCOzs7Ozs7V0FNRzthQUNILFVBQStCLFFBQWdCO1lBQzdDLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQUFBO0lBU0Qsc0JBQVksd0RBQXdCO1FBUHBDOzs7Ozs7V0FNRzthQUNIO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUztnQkFDM0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUNoQyxLQUFLLENBQUMsQ0FBQztnQkFDUixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQy9ELENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBekR1QixVQUFVO2dCQUNiLGdCQUFnQjs7SUFKRTtRQUF0QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDO3dEQUFrQjtJQWJwQyxrQkFBa0I7UUFEdkMsU0FBUyxFQUFFO09BQ1Usa0JBQWtCLENBMEV2QztJQUFELHlCQUFDO0NBQUEsQUExRUQsSUEwRUM7U0ExRXFCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4vYmFzZS1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBYnN0cmFjdCBkaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBhIGNvbW1vbiBpbnRlcmZhY2UgZm9yIGFsbCBmb2N1cyBkaXJlY3RpdmVzOlxuICogLSBCbG9jayBGb2N1c1xuICogLSBQZXJzaXN0IEZvY3VzXG4gKiAtIEVzY2FwZSBGb2N1c1xuICogLSBBdXRvIEZvY3VzXG4gKiAtIFRhYiBGb2N1c1xuICogLSBUcmFwIEZvY3VzXG4gKiAtIExvY2sgRm9jdXNcbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBmb2N1cyBkaXJlY3RpdmUgZHJpdmVzIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGtleWJvYXJkXG4gICAqIGZvY3VzIGRpcmVjdGl2ZS5cbiAgICovXG4gIHByb3RlY3RlZCBjb25maWc6IEJhc2VGb2N1c0NvbmZpZztcblxuICAvKipcbiAgICogQSBkZWZhdWx0IGNvbmZpZyBjYW4gYmUgcHJvdmlkZWQgZm9yIGVhY2ggZGlyZWN0aXZlIGlmIGEgc3BlY2lmaWMgZm9jdXMgZGlyZWN0aXZlXG4gICAqIGlzIHVzZWQgZGlyZWN0bHkuIGkuZS4gYDxkaXYgY3hBdXRvRm9jdXM+PC9kaXY+YFxuICAgKi9cbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEJhc2VGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldERlZmF1bHRDb25maWd1cmF0aW9uKCk7XG4gICAgdGhpcy5yZXF1aXJlZFRhYmluZGV4ID0gLTE7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIChpbnB1dCkgY29uZmlnIGlmIGl0IHVuZGVmaW5lZCBvciBhbiBlbXB0eSBzdHJpbmcsIHdpdGggdGhlXG4gICAqIGBkZWZhdWx0Q29uZmlnYC4gVGhlIGBkZWZhdWx0Q29uZmlnYCBtaWdodCBiZSBzcGVjaWZpZWQgZm9yIGVhY2ggZGlyZWN0aXZlXG4gICAqIGRpZmZlcmVudGx5LiBJZiBhIHNwZWNpZmljIGRpcmVjdGl2ZSBpcyB1c2VkIChpLmUuIGBjeEF1dG9Gb2N1c2ApLCB0aGVcbiAgICogc3BlY2lmaWMgKGluaGVyaXRlZCkgZGVmYXVsdENvbmZpZyB3aWxsIGJlIHVzZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKCghdGhpcy5jb25maWcgfHwgdGhpcy5jb25maWcgPT09ICcnKSAmJiB0aGlzLmRlZmF1bHRDb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgaG9zdCBlbGVtZW50IGZvciB0aGUgZGlyZWN0aXZlXG4gICAqIGdpdmVuIGJ5IHRoZSBgZWxlbWVudFJlZmAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSBhIHRhYmluZGV4IG9uIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgaXMgX3JlcXVyaWVkXyB0byBtYWtlIHRoZSBlbGVtZW50XG4gICAqIGZvY3VzYWJsZS4gSWYgdGhlIGVsZW1lbnQgaXMgZm9jdXNhYmxlIGJ5IG5hdHVyZSBvciBieSBhIGdpdmVuIHRhYmluZGV4LCB0aGVcbiAgICogYHRhYmluZGV4YCBpcyBub3QgYXBwbGllZC5cbiAgICpcbiAgICogQnV0dG9ucywgYWN0aXZlIGxpbmtzLCBldGMuIGRvIG5vIG5lZWQgYW4gZXhwbGljaXQgdGFiaW5kZXggdG8gcmVjZWl2ZSBmb2N1cy5cbiAgICovXG4gIHByb3RlY3RlZCBzZXQgcmVxdWlyZWRUYWJpbmRleCh0YWJpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KSB7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gdGFiaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaG9zdCBlbGVtZW50IGRvZXMgbm90IGhhdmUgYSB0YWJpbmRleCBkZWZpbmVkXG4gICAqIGFuZCBpdCBhbHNvIGRvZXNuJ3QgZ2V0IGZvY3VzIGJ5IGJyb3dzZXJzIG5hdHVyZSAoaS5lLiBidXR0b24gb3JcbiAgICogYWN0aXZlIGxpbmspLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgdXRpbGl0eSBtZXRob2QgcHJpdmF0ZSB0byBub3QgcG9sbHV0ZSB0aGUgQVBJLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgcmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnRhYmluZGV4ID09PSB1bmRlZmluZWQgJiZcbiAgICAgIFsnYnV0dG9uJywgJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddLmluZGV4T2YoXG4gICAgICAgIHRoaXMuaG9zdC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICkgPT09IC0xICYmXG4gICAgICAhKHRoaXMuaG9zdC50YWdOYW1lID09PSAnQScgJiYgdGhpcy5ob3N0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==