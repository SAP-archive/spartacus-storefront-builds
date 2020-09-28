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
export class IconComponent {
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
        this.flipIcon(type);
    }
    /**
     * The icons supports flipping for some icons to support rtl and ltr directions.
     */
    flipIcon(type) {
        // TODO: this can be dropped with the next major release.
        if (!this.iconLoader.getFlipDirection) {
            return;
        }
        const iconDirection = this.iconLoader.getFlipDirection(type);
        this.flipAtLtr = iconDirection === DirectionMode.LTR;
        this.flipAtRtl = iconDirection === DirectionMode.RTL;
    }
    /**
     * Adds the style classes and the link resource (if available).
     */
    addStyleClasses(type) {
        var _a, _b, _c;
        this.renderer.addClass(this.host, 'cx-icon');
        (_a = this.styleClasses) === null || _a === void 0 ? void 0 : _a.forEach((cls) => this.renderer.removeClass(this.host, cls));
        this.styleClasses = (_b = this.iconLoader.getStyleClasses(type)) === null || _b === void 0 ? void 0 : _b.split(' ');
        (_c = this.styleClasses) === null || _c === void 0 ? void 0 : _c.forEach((cls) => {
            if (cls !== '') {
                this.renderer.addClass(this.host, cls);
            }
        });
    }
    get host() {
        return this.elementRef.nativeElement;
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-icon,[cxIcon]',
                template: "<i [outerHTML]=\"icon\"></i><ng-content></ng-content>\n"
            },] }
];
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef },
    { type: Renderer2 }
];
IconComponent.propDecorators = {
    cxIcon: [{ type: Input }],
    type: [{ type: Input }],
    flipAtRtl: [{ type: HostBinding, args: ['class.flip-at-rtl',] }],
    flipAtLtr: [{ type: HostBinding, args: ['class.flip-at-ltr',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBS0gsTUFBTSxPQUFPLGFBQWE7SUFzQ3hCLFlBQ1ksVUFBNkIsRUFDN0IsVUFBbUMsRUFDbkMsUUFBbUI7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM1QixDQUFDO0lBekNKOzs7T0FHRztJQUNILElBQWEsTUFBTSxDQUFDLElBQWU7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYSxJQUFJLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUE2QlMsT0FBTyxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLElBQUksSUFBWSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVEsQ0FBQyxJQUFlO1FBQ2hDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxlQUFlLENBQUMsSUFBZTs7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QyxNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ3pDO1FBRUYsSUFBSSxDQUFDLFlBQVksU0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsMENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakMsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBRUQsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtRUFBb0M7YUFDckM7OztZQTFCUSxpQkFBaUI7WUFQeEIsVUFBVTtZQUdWLFNBQVM7OztxQkFvQ1IsS0FBSzttQkFRTCxLQUFLO3dCQVlMLFdBQVcsU0FBQyxtQkFBbUI7d0JBSy9CLFdBQVcsU0FBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEaXJlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2RpcmVjdGlvbi9jb25maWcvZGlyZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEljb25Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbi8qKlxuICpcbiAqIFRoZSBpY29uIGNvbXBvbmVudCBjYW4gYmUgYWRkZWQgaW4gZGlmZmVyZW50IHdheXM6XG4gKlxuICogV2l0aCB0aGUgY29tcG9uZW50IHNlbGVjdG9yOlxuICogYDxjeC1pY29uIHR5cGU9XCJTRUFSQ0hcIj48L2N4LWljb24+YFxuICpcbiAqIFdpdGggdGhlIGF0dHJpYnV0ZSBzZWxlY3RvcjpcbiAqIGA8c3BhbiBjeEljb249XCJTVEFSXCI+PC9zcGFuPmBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIGNvbnRlbnQgY2FuIGJlIHByb2plY3RlZCB0byB0aGUgaWNvbjpcbiAqXG4gKiBgPGJ1dHRvbiBjeEljb249XCJIQVBQWVwiPmhhcHB5IGxhYmVsPC9idXR0b24+YFxuICpcbiAqIFRoZSBhYm92ZSBidXR0b24gd291bGQgYmVjb21lIChiYXNlZCBvbiBhIFRFWFQgcmVzb3VyY2UgdHlwZSk6XG4gKiBgPGJ1dHRvbj7wn5iKaGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogV2hpbGUgdGhlIGNvbnRlbnQgaXMgcHJvamVjdGVkLCB0aGUgaWNvbiBpdHNlbGYgZG9lc24ndCByZXF1aXJlIGFuXG4gKiBhZGRpdGlvbmFsIERPTSBub2RlIHdoaWNoIGlzIGFuIGFkdmFudGFnZSBvdmVyIHRoZSBjb21wb25lbnQgc2VsZWN0b3IuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24sW2N4SWNvbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGN4SWNvbiBkaXJlY3RpdmUgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY3hJY29uKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuc2V0SWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBpbnB1dCBwYXJhbWV0ZXIgaXMgYm91bmQgdG8gdGhlIGljb24gdHlwZS4gWW91IGNhbiBmZWVkIHRoZSBgSUNPTl9UWVBFYCB0b1xuICAgKiBhY2NvbXBsaXNoIGEgY29uZmlndXJhYmxlIGJ1dHRvbiBpbiB0aGUgVUkuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdHlwZSh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLnNldEljb24odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogdGhlIGljb24gcHJvdmlkZXMgYW4gaHRtbCBmcmFnbWVudCB0aGF0IGlzIHVzZWQgdG8gYWRkIFNWRyBvciB0ZXh0IGJhc2VkIGljb25zLlxuICAgKi9cbiAgaWNvbjogU2FmZUh0bWw7XG5cbiAgLyoqXG4gICAqIFRoZSBgZmxpcC1hdC1ydGxgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gZm9yIHRoZSBzdHlsZSBsYXllciB0byBmbGlwIHRoZSBpY29uIGluIFJUTCBkaXJlY3Rpb24uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsaXAtYXQtcnRsJykgZmxpcEF0UnRsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgYGZsaXAtYXQtbHRyYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIGZvciB0aGUgc3R5bGUgbGF5ZXIgdG8gZmxpcCB0aGUgaWNvbiBpbiBMVFIgZGlyZWN0aW9uLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbGlwLWF0LWx0cicpIGZsaXBBdEx0cjogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWFpbnRhaW5zIHRoZSBhcHBsaWVkIHN0eWxlIGNsYXNzZXMgc28gd2UgY2FuIHJlbW92ZSB0aGVtIHdoZW4gdGhlXG4gICAqIGljb24gdHlwZSBjaGFuZ2VzIGF0IHJ1biB0aW1lLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0eWxlQ2xhc3Nlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHJvdGVjdGVkIHNldEljb24odHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgaWYgKCF0eXBlIHx8IDxzdHJpbmc+dHlwZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uTG9hZGVyLmdldEh0bWwodHlwZSk7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXModHlwZSk7XG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0eXBlKTtcbiAgICB0aGlzLmZsaXBJY29uKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpY29ucyBzdXBwb3J0cyBmbGlwcGluZyBmb3Igc29tZSBpY29ucyB0byBzdXBwb3J0IHJ0bCBhbmQgbHRyIGRpcmVjdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZmxpcEljb24odHlwZTogSUNPTl9UWVBFKSB7XG4gICAgLy8gVE9ETzogdGhpcyBjYW4gYmUgZHJvcHBlZCB3aXRoIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgaWYgKCF0aGlzLmljb25Mb2FkZXIuZ2V0RmxpcERpcmVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpY29uRGlyZWN0aW9uID0gdGhpcy5pY29uTG9hZGVyLmdldEZsaXBEaXJlY3Rpb24odHlwZSk7XG4gICAgdGhpcy5mbGlwQXRMdHIgPSBpY29uRGlyZWN0aW9uID09PSBEaXJlY3Rpb25Nb2RlLkxUUjtcbiAgICB0aGlzLmZsaXBBdFJ0bCA9IGljb25EaXJlY3Rpb24gPT09IERpcmVjdGlvbk1vZGUuUlRMO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHN0eWxlIGNsYXNzZXMgYW5kIHRoZSBsaW5rIHJlc291cmNlIChpZiBhdmFpbGFibGUpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3Nlcyh0eXBlOiBJQ09OX1RZUEUpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdCwgJ2N4LWljb24nKTtcblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzPy5mb3JFYWNoKChjbHMpID0+XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdCwgY2xzKVxuICAgICk7XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3NlcyA9IHRoaXMuaWNvbkxvYWRlci5nZXRTdHlsZUNsYXNzZXModHlwZSk/LnNwbGl0KCcgJyk7XG4gICAgdGhpcy5zdHlsZUNsYXNzZXM/LmZvckVhY2goKGNscykgPT4ge1xuICAgICAgaWYgKGNscyAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsIGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=