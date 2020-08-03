import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { DirectionMode } from '../../../layout/direction/config/direction.model';
import { IconLoaderService } from './icon-loader.service';
/**
 *
 * The icon component can be added in different ways:
 *
 * With the component selector:
 * `<cx-icon type="SEARCH"></cx-icon>`
 *
 * With the attribute selector:
 * `<span cxIcon="STAR"></span>`
 *
 * Additionally, content can be projected to the icon:
 *
 * `<button cxIcon="HAPPY">happy label</button>`
 *
 * The above button would become (based on a TEXT resource type):
 * `<button>😊happy label</button>`
 *
 * While the content is projected, the icon itself doesn't require an
 * additional DOM node which is an advantage over the component selector.
 */
var IconComponent = /** @class */ (function () {
    function IconComponent(iconLoader, elementRef, renderer) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(IconComponent.prototype, "cxIcon", {
        /**
         * The cxIcon directive is bound to the icon type. You can feed the `ICON_TYPE` to
         * accomplish a configurable button in the UI.
         */
        set: function (type) {
            this.setIcon(type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "type", {
        /**
         * The type input parameter is bound to the icon type. You can feed the `ICON_TYPE` to
         * accomplish a configurable button in the UI.
         */
        set: function (type) {
            this.setIcon(type);
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.prototype.setIcon = function (type) {
        if (!type || type === '') {
            return;
        }
        this.icon = this.iconLoader.getHtml(type);
        this.addStyleClasses(type);
        this.iconLoader.addLinkResource(type);
        // the flip direction is added so that icons can be flipped for rtl vs ltr
        this.flipAtLtr =
            this.iconLoader.getFlipDirection(type) === DirectionMode.LTR;
        this.flipAtRtl =
            this.iconLoader.getFlipDirection(type) === DirectionMode.RTL;
    };
    /**
     * Adds the style classes and the link resource (if available).
     */
    IconComponent.prototype.addStyleClasses = function (type) {
        var _this = this;
        this.renderer.addClass(this.host, 'cx-icon');
        if (this.styleClasses) {
            this.styleClasses.forEach(function (cls) {
                return _this.renderer.removeClass(_this.host, cls);
            });
        }
        this.styleClasses = this.iconLoader.getStyleClasses(type).split(' ');
        this.styleClasses.forEach(function (cls) {
            if (cls !== '') {
                _this.renderer.addClass(_this.host, cls);
            }
        });
    };
    Object.defineProperty(IconComponent.prototype, "host", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.ctorParameters = function () { return [
        { type: IconLoaderService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], IconComponent.prototype, "cxIcon", null);
    __decorate([
        Input()
    ], IconComponent.prototype, "type", null);
    __decorate([
        HostBinding('class.flip-at-rtl')
    ], IconComponent.prototype, "flipAtRtl", void 0);
    __decorate([
        HostBinding('class.flip-at-ltr')
    ], IconComponent.prototype, "flipAtLtr", void 0);
    IconComponent = __decorate([
        Component({
            selector: 'cx-icon,[cxIcon]',
            template: "<i [outerHTML]=\"icon\"></i><ng-content></ng-content>\n"
        })
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUtIO0lBb0NFLHVCQUNZLFVBQTZCLEVBQzdCLFVBQW1DLEVBQ25DLFFBQW1CO1FBRm5CLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDNUIsQ0FBQztJQW5DSyxzQkFBSSxpQ0FBTTtRQUpuQjs7O1dBR0c7YUFDTSxVQUFXLElBQWU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQU1RLHNCQUFJLCtCQUFJO1FBSmpCOzs7V0FHRzthQUNNLFVBQVMsSUFBZTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBMkJTLCtCQUFPLEdBQWpCLFVBQWtCLElBQWU7UUFDL0IsSUFBSSxDQUFDLElBQUksSUFBWSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QywwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLFNBQVM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ08sdUNBQWUsR0FBekIsVUFBMEIsSUFBZTtRQUF6QyxpQkFnQkM7UUFmQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQzVCLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7WUFBekMsQ0FBeUMsQ0FDMUMsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQzVCLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtnQkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQWMsK0JBQUk7YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBOztnQkEzQ3VCLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDWixTQUFTOztJQWxDdEI7UUFBUixLQUFLLEVBQUU7K0NBRVA7SUFNUTtRQUFSLEtBQUssRUFBRTs2Q0FFUDtJQVlpQztRQUFqQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7b0RBQW9CO0lBQ25CO1FBQWpDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztvREFBb0I7SUE1QjFDLGFBQWE7UUFKekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixtRUFBb0M7U0FDckMsQ0FBQztPQUNXLGFBQWEsQ0FpRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQWpGWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGlyZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9kaXJlY3Rpb24vY29uZmlnL2RpcmVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG4vKipcbiAqXG4gKiBUaGUgaWNvbiBjb21wb25lbnQgY2FuIGJlIGFkZGVkIGluIGRpZmZlcmVudCB3YXlzOlxuICpcbiAqIFdpdGggdGhlIGNvbXBvbmVudCBzZWxlY3RvcjpcbiAqIGA8Y3gtaWNvbiB0eXBlPVwiU0VBUkNIXCI+PC9jeC1pY29uPmBcbiAqXG4gKiBXaXRoIHRoZSBhdHRyaWJ1dGUgc2VsZWN0b3I6XG4gKiBgPHNwYW4gY3hJY29uPVwiU1RBUlwiPjwvc3Bhbj5gXG4gKlxuICogQWRkaXRpb25hbGx5LCBjb250ZW50IGNhbiBiZSBwcm9qZWN0ZWQgdG8gdGhlIGljb246XG4gKlxuICogYDxidXR0b24gY3hJY29uPVwiSEFQUFlcIj5oYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBUaGUgYWJvdmUgYnV0dG9uIHdvdWxkIGJlY29tZSAoYmFzZWQgb24gYSBURVhUIHJlc291cmNlIHR5cGUpOlxuICogYDxidXR0b24+8J+YimhhcHB5IGxhYmVsPC9idXR0b24+YFxuICpcbiAqIFdoaWxlIHRoZSBjb250ZW50IGlzIHByb2plY3RlZCwgdGhlIGljb24gaXRzZWxmIGRvZXNuJ3QgcmVxdWlyZSBhblxuICogYWRkaXRpb25hbCBET00gbm9kZSB3aGljaCBpcyBhbiBhZHZhbnRhZ2Ugb3ZlciB0aGUgY29tcG9uZW50IHNlbGVjdG9yLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pY29uLFtjeEljb25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSBjeEljb24gZGlyZWN0aXZlIGlzIGJvdW5kIHRvIHRoZSBpY29uIHR5cGUuIFlvdSBjYW4gZmVlZCB0aGUgYElDT05fVFlQRWAgdG9cbiAgICogYWNjb21wbGlzaCBhIGNvbmZpZ3VyYWJsZSBidXR0b24gaW4gdGhlIFVJLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGN4SWNvbih0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLnNldEljb24odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHR5cGUgaW5wdXQgcGFyYW1ldGVyIGlzIGJvdW5kIHRvIHRoZSBpY29uIHR5cGUuIFlvdSBjYW4gZmVlZCB0aGUgYElDT05fVFlQRWAgdG9cbiAgICogYWNjb21wbGlzaCBhIGNvbmZpZ3VyYWJsZSBidXR0b24gaW4gdGhlIFVJLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHR5cGUodHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5zZXRJY29uKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBpY29uIHByb3ZpZGVzIGFuIGh0bWwgZnJhZ21lbnQgdGhhdCBpcyB1c2VkIHRvIGFkZCBTVkcgb3IgdGV4dCBiYXNlZCBpY29ucy5cbiAgICovXG4gIGljb246IFNhZmVIdG1sO1xuXG4gIC8qKlxuICAgKiBUaGUgZmxpcCBkaXJlY3Rpb24gYWRkcyBpbmZvcm1hdGlvbiB0byB0aGUgRE9NIG9uIHdoZXRoZXIgaXQgc2hvdWxkIGZsaXBwZWQgZm9yIGEgc3BlY2lmaWNcbiAgICogZGlyZWN0aW9uIChsdHIgdnMgcnRsKS4gVHlwaWNhbGx5LCBpY29ucyBhcmUgbHRyIGJhc2VkLCBhbmQgb25seSBpbiBjYXNlIG9mIHJ0bCBzb21lIG9mXG4gICAqIHRoZSBpY29ucyB3aWxsIGJlIGZsaXBwZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsaXAtYXQtcnRsJykgZmxpcEF0UnRsOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsaXAtYXQtbHRyJykgZmxpcEF0THRyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNYWludGFpbnMgdGhlIGFwcGxpZWQgc3R5bGUgY2xhc3NlcyBzbyB3ZSBjYW4gcmVtb3ZlIHRoZW0gd2hlbiB0aGVcbiAgICogaWNvbiB0eXBlIGNoYW5nZXMgYXQgcnVuIHRpbWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3R5bGVDbGFzc2VzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBwcm90ZWN0ZWQgc2V0SWNvbih0eXBlOiBJQ09OX1RZUEUpOiB2b2lkIHtcbiAgICBpZiAoIXR5cGUgfHwgPHN0cmluZz50eXBlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmljb24gPSB0aGlzLmljb25Mb2FkZXIuZ2V0SHRtbCh0eXBlKTtcbiAgICB0aGlzLmFkZFN0eWxlQ2xhc3Nlcyh0eXBlKTtcbiAgICB0aGlzLmljb25Mb2FkZXIuYWRkTGlua1Jlc291cmNlKHR5cGUpO1xuXG4gICAgLy8gdGhlIGZsaXAgZGlyZWN0aW9uIGlzIGFkZGVkIHNvIHRoYXQgaWNvbnMgY2FuIGJlIGZsaXBwZWQgZm9yIHJ0bCB2cyBsdHJcbiAgICB0aGlzLmZsaXBBdEx0ciA9XG4gICAgICB0aGlzLmljb25Mb2FkZXIuZ2V0RmxpcERpcmVjdGlvbih0eXBlKSA9PT0gRGlyZWN0aW9uTW9kZS5MVFI7XG4gICAgdGhpcy5mbGlwQXRSdGwgPVxuICAgICAgdGhpcy5pY29uTG9hZGVyLmdldEZsaXBEaXJlY3Rpb24odHlwZSkgPT09IERpcmVjdGlvbk1vZGUuUlRMO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHN0eWxlIGNsYXNzZXMgYW5kIHRoZSBsaW5rIHJlc291cmNlIChpZiBhdmFpbGFibGUpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3Nlcyh0eXBlOiBJQ09OX1RZUEUpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdCwgJ2N4LWljb24nKTtcblxuICAgIGlmICh0aGlzLnN0eWxlQ2xhc3Nlcykge1xuICAgICAgdGhpcy5zdHlsZUNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdCwgY2xzKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3NlcyA9IHRoaXMuaWNvbkxvYWRlci5nZXRTdHlsZUNsYXNzZXModHlwZSkuc3BsaXQoJyAnKTtcblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgICAgaWYgKGNscyAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsIGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=