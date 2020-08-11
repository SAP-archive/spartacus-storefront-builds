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
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUtILElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFzQ3hCLFlBQ1ksVUFBNkIsRUFDN0IsVUFBbUMsRUFDbkMsUUFBbUI7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM1QixDQUFDO0lBekNKOzs7T0FHRztJQUNNLElBQUksTUFBTSxDQUFDLElBQWU7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ00sSUFBSSxJQUFJLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUE2QlMsT0FBTyxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLElBQUksSUFBWSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVEsQ0FBQyxJQUFlO1FBQ2hDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxlQUFlLENBQUMsSUFBZTtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQzFDLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFjLElBQUk7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQTs7WUFwRHlCLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1osU0FBUzs7QUFwQ3RCO0lBQVIsS0FBSyxFQUFFOzJDQUVQO0FBTVE7SUFBUixLQUFLLEVBQUU7eUNBRVA7QUFVaUM7SUFBakMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO2dEQUFvQjtBQUtuQjtJQUFqQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7Z0RBQW9CO0FBOUIxQyxhQUFhO0lBSnpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsbUVBQW9DO0tBQ3JDLENBQUM7R0FDVyxhQUFhLENBMkZ6QjtTQTNGWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGlyZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9kaXJlY3Rpb24vY29uZmlnL2RpcmVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG4vKipcbiAqXG4gKiBUaGUgaWNvbiBjb21wb25lbnQgY2FuIGJlIGFkZGVkIGluIGRpZmZlcmVudCB3YXlzOlxuICpcbiAqIFdpdGggdGhlIGNvbXBvbmVudCBzZWxlY3RvcjpcbiAqIGA8Y3gtaWNvbiB0eXBlPVwiU0VBUkNIXCI+PC9jeC1pY29uPmBcbiAqXG4gKiBXaXRoIHRoZSBhdHRyaWJ1dGUgc2VsZWN0b3I6XG4gKiBgPHNwYW4gY3hJY29uPVwiU1RBUlwiPjwvc3Bhbj5gXG4gKlxuICogQWRkaXRpb25hbGx5LCBjb250ZW50IGNhbiBiZSBwcm9qZWN0ZWQgdG8gdGhlIGljb246XG4gKlxuICogYDxidXR0b24gY3hJY29uPVwiSEFQUFlcIj5oYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBUaGUgYWJvdmUgYnV0dG9uIHdvdWxkIGJlY29tZSAoYmFzZWQgb24gYSBURVhUIHJlc291cmNlIHR5cGUpOlxuICogYDxidXR0b24+8J+YimhhcHB5IGxhYmVsPC9idXR0b24+YFxuICpcbiAqIFdoaWxlIHRoZSBjb250ZW50IGlzIHByb2plY3RlZCwgdGhlIGljb24gaXRzZWxmIGRvZXNuJ3QgcmVxdWlyZSBhblxuICogYWRkaXRpb25hbCBET00gbm9kZSB3aGljaCBpcyBhbiBhZHZhbnRhZ2Ugb3ZlciB0aGUgY29tcG9uZW50IHNlbGVjdG9yLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pY29uLFtjeEljb25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSBjeEljb24gZGlyZWN0aXZlIGlzIGJvdW5kIHRvIHRoZSBpY29uIHR5cGUuIFlvdSBjYW4gZmVlZCB0aGUgYElDT05fVFlQRWAgdG9cbiAgICogYWNjb21wbGlzaCBhIGNvbmZpZ3VyYWJsZSBidXR0b24gaW4gdGhlIFVJLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IGN4SWNvbih0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLnNldEljb24odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHR5cGUgaW5wdXQgcGFyYW1ldGVyIGlzIGJvdW5kIHRvIHRoZSBpY29uIHR5cGUuIFlvdSBjYW4gZmVlZCB0aGUgYElDT05fVFlQRWAgdG9cbiAgICogYWNjb21wbGlzaCBhIGNvbmZpZ3VyYWJsZSBidXR0b24gaW4gdGhlIFVJLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHR5cGUodHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5zZXRJY29uKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBpY29uIHByb3ZpZGVzIGFuIGh0bWwgZnJhZ21lbnQgdGhhdCBpcyB1c2VkIHRvIGFkZCBTVkcgb3IgdGV4dCBiYXNlZCBpY29ucy5cbiAgICovXG4gIGljb246IFNhZmVIdG1sO1xuXG4gIC8qKlxuICAgKiBUaGUgYGZsaXAtYXQtcnRsYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIGZvciB0aGUgc3R5bGUgbGF5ZXIgdG8gZmxpcCB0aGUgaWNvbiBpbiBSVEwgZGlyZWN0aW9uLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbGlwLWF0LXJ0bCcpIGZsaXBBdFJ0bDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGBmbGlwLWF0LWx0cmAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBmb3IgdGhlIHN0eWxlIGxheWVyIHRvIGZsaXAgdGhlIGljb24gaW4gTFRSIGRpcmVjdGlvbi5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxpcC1hdC1sdHInKSBmbGlwQXRMdHI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE1haW50YWlucyB0aGUgYXBwbGllZCBzdHlsZSBjbGFzc2VzIHNvIHdlIGNhbiByZW1vdmUgdGhlbSB3aGVuIHRoZVxuICAgKiBpY29uIHR5cGUgY2hhbmdlcyBhdCBydW4gdGltZS5cbiAgICovXG4gIHByb3RlY3RlZCBzdHlsZUNsYXNzZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBzZXRJY29uKHR5cGU6IElDT05fVFlQRSk6IHZvaWQge1xuICAgIGlmICghdHlwZSB8fCA8c3RyaW5nPnR5cGUgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkxvYWRlci5nZXRIdG1sKHR5cGUpO1xuICAgIHRoaXMuYWRkU3R5bGVDbGFzc2VzKHR5cGUpO1xuICAgIHRoaXMuaWNvbkxvYWRlci5hZGRMaW5rUmVzb3VyY2UodHlwZSk7XG4gICAgdGhpcy5mbGlwSWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbnMgc3VwcG9ydHMgZmxpcHBpbmcgZm9yIHNvbWUgaWNvbnMgdG8gc3VwcG9ydCBydGwgYW5kIGx0ciBkaXJlY3Rpb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZsaXBJY29uKHR5cGU6IElDT05fVFlQRSkge1xuICAgIC8vIFRPRE86IHRoaXMgY2FuIGJlIGRyb3BwZWQgd2l0aCB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuICAgIGlmICghdGhpcy5pY29uTG9hZGVyLmdldEZsaXBEaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaWNvbkRpcmVjdGlvbiA9IHRoaXMuaWNvbkxvYWRlci5nZXRGbGlwRGlyZWN0aW9uKHR5cGUpO1xuICAgIHRoaXMuZmxpcEF0THRyID0gaWNvbkRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uTW9kZS5MVFI7XG4gICAgdGhpcy5mbGlwQXRSdGwgPSBpY29uRGlyZWN0aW9uID09PSBEaXJlY3Rpb25Nb2RlLlJUTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmxlKS5cbiAgICovXG4gIHByb3RlY3RlZCBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsICdjeC1pY29uJyk7XG5cbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzZXMpIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzc2VzLmZvckVhY2goKGNscykgPT5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3QsIGNscylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMgPSB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHR5cGUpLnNwbGl0KCcgJyk7XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3Nlcy5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMgIT09ICcnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0LCBjbHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19