import { __decorate } from "tslib";
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
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
 * While the content is projected, the icon itself doesn't require
 * an additional DOM node which is an advantage over the component selector.
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
    };
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    IconComponent.prototype.addStyleClasses = function (type) {
        var _this = this;
        this.renderer.addClass(this.elementRef.nativeElement, 'cx-icon');
        this.iconLoader
            .getStyleClasses(type)
            .split(' ')
            .forEach(function (cls) {
            if (cls !== '') {
                _this.renderer.addClass(_this.elementRef.nativeElement, cls);
            }
        });
    };
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
    IconComponent = __decorate([
        Component({
            selector: 'cx-icon,[cxIcon]',
            template: "<i [outerHTML]=\"icon\"></i><ng-content></ng-content>\n"
        })
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUtIO0lBc0JFLHVCQUNZLFVBQTZCLEVBQzdCLFVBQW1DLEVBQ25DLFFBQW1CO1FBRm5CLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDNUIsQ0FBQztJQXJCSyxzQkFBSSxpQ0FBTTtRQUpuQjs7O1dBR0c7YUFDTSxVQUFXLElBQWU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQU1RLHNCQUFJLCtCQUFJO1FBSmpCOzs7V0FHRzthQUNNLFVBQVMsSUFBZTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBYVMsK0JBQU8sR0FBakIsVUFBa0IsSUFBZTtRQUMvQixJQUFJLENBQUMsSUFBSSxJQUFZLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNPLHVDQUFlLEdBQXpCLFVBQTBCLElBQWU7UUFBekMsaUJBV0M7UUFWQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsVUFBVTthQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUM7YUFDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTVCdUIsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNaLFNBQVM7O0lBcEJ0QjtRQUFSLEtBQUssRUFBRTsrQ0FFUDtJQU1RO1FBQVIsS0FBSyxFQUFFOzZDQUVQO0lBZlUsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLG1FQUFvQztTQUNyQyxDQUFDO09BQ1csYUFBYSxDQW9EekI7SUFBRCxvQkFBQztDQUFBLEFBcERELElBb0RDO1NBcERZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG4vKipcbiAqXG4gKiBUaGUgaWNvbiBjb21wb25lbnQgY2FuIGJlIGFkZGVkIGluIGRpZmZlcmVudCB3YXlzOlxuICpcbiAqIFdpdGggdGhlIGNvbXBvbmVudCBzZWxlY3RvcjpcbiAqIGA8Y3gtaWNvbiB0eXBlPVwiU0VBUkNIXCI+PC9jeC1pY29uPmBcbiAqXG4gKiBXaXRoIHRoZSBhdHRyaWJ1dGUgc2VsZWN0b3I6XG4gKiBgPHNwYW4gY3hJY29uPVwiU1RBUlwiPjwvc3Bhbj5gXG4gKlxuICogQWRkaXRpb25hbGx5LCBjb250ZW50IGNhbiBiZSBwcm9qZWN0ZWQgdG8gdGhlIGljb246XG4gKlxuICogYDxidXR0b24gY3hJY29uPVwiSEFQUFlcIj5oYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBUaGUgYWJvdmUgYnV0dG9uIHdvdWxkIGJlY29tZSAoYmFzZWQgb24gYSBURVhUIHJlc291cmNlIHR5cGUpOlxuICogYDxidXR0b24+8J+YimhhcHB5IGxhYmVsPC9idXR0b24+YFxuICogV2hpbGUgdGhlIGNvbnRlbnQgaXMgcHJvamVjdGVkLCB0aGUgaWNvbiBpdHNlbGYgZG9lc24ndCByZXF1aXJlXG4gKiBhbiBhZGRpdGlvbmFsIERPTSBub2RlIHdoaWNoIGlzIGFuIGFkdmFudGFnZSBvdmVyIHRoZSBjb21wb25lbnQgc2VsZWN0b3IuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24sW2N4SWNvbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGN4SWNvbiBkaXJlY3RpdmUgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY3hJY29uKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuc2V0SWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBpbnB1dCBwYXJhbWV0ZXIgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdHlwZSh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLnNldEljb24odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogdGhlIGljb24gcHJvdmlkZXMgYW4gaHRtbCBmcmFnbWVudCB0aGF0IGlzIHVzZWQgdG8gYWRkIFNWRyBvciB0ZXh0IGJhc2VkIGljb25zLlxuICAgKi9cbiAgaWNvbjogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHJvdGVjdGVkIHNldEljb24odHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgaWYgKCF0eXBlIHx8IDxzdHJpbmc+dHlwZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uTG9hZGVyLmdldEh0bWwodHlwZSk7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXModHlwZSk7XG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmUpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3Nlcyh0eXBlOiBJQ09OX1RZUEUpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY3gtaWNvbicpO1xuXG4gICAgdGhpcy5pY29uTG9hZGVyXG4gICAgICAuZ2V0U3R5bGVDbGFzc2VzKHR5cGUpXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLmZvckVhY2goY2xzID0+IHtcbiAgICAgICAgaWYgKGNscyAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19