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
 *
 * While the content is projected, the icon itself doesn't require an
 * additional DOM node which is an advantage over the component selector.
 */
let IconComponent = class IconComponent {
    constructor(iconLoader, elementRef, renderer) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * The cxIcon directive is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set cxIcon(type) {
        this.setIcon(type);
    }
    /**
     * The type input parameter is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set type(type) {
        this.setIcon(type);
    }
    setIcon(type) {
        if (!type || type === '') {
            return;
        }
        this.icon = this.iconLoader.getHtml(type);
        this.addStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    }
    /**
     * Adds the style classes and the link resource (if available).
     */
    addStyleClasses(type) {
        this.renderer.addClass(this.host, 'cx-icon');
        if (this.styleClasses) {
            this.styleClasses.forEach((cls) => this.renderer.removeClass(this.host, cls));
        }
        this.styleClasses = this.iconLoader.getStyleClasses(type).split(' ');
        this.styleClasses.forEach((cls) => {
            if (cls !== '') {
                this.renderer.addClass(this.host, cls);
            }
        });
    }
    get host() {
        return this.elementRef.nativeElement;
    }
};
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFLSCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBNEJ4QixZQUNZLFVBQTZCLEVBQzdCLFVBQW1DLEVBQ25DLFFBQW1CO1FBRm5CLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDNUIsQ0FBQztJQS9CSjs7O09BR0c7SUFDTSxJQUFJLE1BQU0sQ0FBQyxJQUFlO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNNLElBQUksSUFBSSxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBbUJTLE9BQU8sQ0FBQyxJQUFlO1FBQy9CLElBQUksQ0FBQyxJQUFJLElBQVksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ08sZUFBZSxDQUFDLElBQWU7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUMxQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2hDLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUE7O1lBdEN5QixpQkFBaUI7WUFDakIsVUFBVTtZQUNaLFNBQVM7O0FBMUJ0QjtJQUFSLEtBQUssRUFBRTsyQ0FFUDtBQU1RO0lBQVIsS0FBSyxFQUFFO3lDQUVQO0FBZlUsYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLG1FQUFvQztLQUNyQyxDQUFDO0dBQ1csYUFBYSxDQW1FekI7U0FuRVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEljb25Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbi8qKlxuICpcbiAqIFRoZSBpY29uIGNvbXBvbmVudCBjYW4gYmUgYWRkZWQgaW4gZGlmZmVyZW50IHdheXM6XG4gKlxuICogV2l0aCB0aGUgY29tcG9uZW50IHNlbGVjdG9yOlxuICogYDxjeC1pY29uIHR5cGU9XCJTRUFSQ0hcIj48L2N4LWljb24+YFxuICpcbiAqIFdpdGggdGhlIGF0dHJpYnV0ZSBzZWxlY3RvcjpcbiAqIGA8c3BhbiBjeEljb249XCJTVEFSXCI+PC9zcGFuPmBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIGNvbnRlbnQgY2FuIGJlIHByb2plY3RlZCB0byB0aGUgaWNvbjpcbiAqXG4gKiBgPGJ1dHRvbiBjeEljb249XCJIQVBQWVwiPmhhcHB5IGxhYmVsPC9idXR0b24+YFxuICpcbiAqIFRoZSBhYm92ZSBidXR0b24gd291bGQgYmVjb21lIChiYXNlZCBvbiBhIFRFWFQgcmVzb3VyY2UgdHlwZSk6XG4gKiBgPGJ1dHRvbj7wn5iKaGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogV2hpbGUgdGhlIGNvbnRlbnQgaXMgcHJvamVjdGVkLCB0aGUgaWNvbiBpdHNlbGYgZG9lc24ndCByZXF1aXJlIGFuXG4gKiBhZGRpdGlvbmFsIERPTSBub2RlIHdoaWNoIGlzIGFuIGFkdmFudGFnZSBvdmVyIHRoZSBjb21wb25lbnQgc2VsZWN0b3IuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24sW2N4SWNvbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGN4SWNvbiBkaXJlY3RpdmUgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY3hJY29uKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuc2V0SWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBpbnB1dCBwYXJhbWV0ZXIgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdHlwZSh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLnNldEljb24odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogdGhlIGljb24gcHJvdmlkZXMgYW4gaHRtbCBmcmFnbWVudCB0aGF0IGlzIHVzZWQgdG8gYWRkIFNWRyBvciB0ZXh0IGJhc2VkIGljb25zLlxuICAgKi9cbiAgaWNvbjogU2FmZUh0bWw7XG5cbiAgLyoqXG4gICAqIE1haW50YWlucyB0aGUgYXBwbGllZCBzdHlsZSBjbGFzc2VzIHNvIHdlIGNhbiByZW1vdmUgdGhlbSB3aGVuIHRoZVxuICAgKiBpY29uIHR5cGUgY2hhbmdlcyBhdCBydW4gdGltZS5cbiAgICovXG4gIHByb3RlY3RlZCBzdHlsZUNsYXNzZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBzZXRJY29uKHR5cGU6IElDT05fVFlQRSk6IHZvaWQge1xuICAgIGlmICghdHlwZSB8fCA8c3RyaW5nPnR5cGUgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkxvYWRlci5nZXRIdG1sKHR5cGUpO1xuICAgIHRoaXMuYWRkU3R5bGVDbGFzc2VzKHR5cGUpO1xuICAgIHRoaXMuaWNvbkxvYWRlci5hZGRMaW5rUmVzb3VyY2UodHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgc3R5bGUgY2xhc3NlcyBhbmQgdGhlIGxpbmsgcmVzb3VyY2UgKGlmIGF2YWlsYWJsZSkuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU3R5bGVDbGFzc2VzKHR5cGU6IElDT05fVFlQRSk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0LCAnY3gtaWNvbicpO1xuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzc2VzKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3Nlcy5mb3JFYWNoKChjbHMpID0+XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0LCBjbHMpXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzID0gdGhpcy5pY29uTG9hZGVyLmdldFN0eWxlQ2xhc3Nlcyh0eXBlKS5zcGxpdCgnICcpO1xuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICBpZiAoY2xzICE9PSAnJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdCwgY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==