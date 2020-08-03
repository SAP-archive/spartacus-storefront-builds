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
        // the flip direction is added so that icons can be flipped for rtl vs ltr
        this.flipAtLtr =
            this.iconLoader.getFlipDirection(type) === DirectionMode.LTR;
        this.flipAtRtl =
            this.iconLoader.getFlipDirection(type) === DirectionMode.RTL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUtILElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFvQ3hCLFlBQ1ksVUFBNkIsRUFDN0IsVUFBbUMsRUFDbkMsUUFBbUI7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM1QixDQUFDO0lBdkNKOzs7T0FHRztJQUNNLElBQUksTUFBTSxDQUFDLElBQWU7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ00sSUFBSSxJQUFJLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUEyQlMsT0FBTyxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLElBQUksSUFBWSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QywwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLFNBQVM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ08sZUFBZSxDQUFDLElBQWU7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUMxQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2hDLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztDQUNGLENBQUE7O1lBNUN5QixpQkFBaUI7WUFDakIsVUFBVTtZQUNaLFNBQVM7O0FBbEN0QjtJQUFSLEtBQUssRUFBRTsyQ0FFUDtBQU1RO0lBQVIsS0FBSyxFQUFFO3lDQUVQO0FBWWlDO0lBQWpDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztnREFBb0I7QUFDbkI7SUFBakMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO2dEQUFvQjtBQTVCMUMsYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLG1FQUFvQztLQUNyQyxDQUFDO0dBQ1csYUFBYSxDQWlGekI7U0FqRlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERpcmVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvZGlyZWN0aW9uL2NvbmZpZy9kaXJlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcblxuLyoqXG4gKlxuICogVGhlIGljb24gY29tcG9uZW50IGNhbiBiZSBhZGRlZCBpbiBkaWZmZXJlbnQgd2F5czpcbiAqXG4gKiBXaXRoIHRoZSBjb21wb25lbnQgc2VsZWN0b3I6XG4gKiBgPGN4LWljb24gdHlwZT1cIlNFQVJDSFwiPjwvY3gtaWNvbj5gXG4gKlxuICogV2l0aCB0aGUgYXR0cmlidXRlIHNlbGVjdG9yOlxuICogYDxzcGFuIGN4SWNvbj1cIlNUQVJcIj48L3NwYW4+YFxuICpcbiAqIEFkZGl0aW9uYWxseSwgY29udGVudCBjYW4gYmUgcHJvamVjdGVkIHRvIHRoZSBpY29uOlxuICpcbiAqIGA8YnV0dG9uIGN4SWNvbj1cIkhBUFBZXCI+aGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogVGhlIGFib3ZlIGJ1dHRvbiB3b3VsZCBiZWNvbWUgKGJhc2VkIG9uIGEgVEVYVCByZXNvdXJjZSB0eXBlKTpcbiAqIGA8YnV0dG9uPvCfmIpoYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBXaGlsZSB0aGUgY29udGVudCBpcyBwcm9qZWN0ZWQsIHRoZSBpY29uIGl0c2VsZiBkb2Vzbid0IHJlcXVpcmUgYW5cbiAqIGFkZGl0aW9uYWwgRE9NIG5vZGUgd2hpY2ggaXMgYW4gYWR2YW50YWdlIG92ZXIgdGhlIGNvbXBvbmVudCBzZWxlY3Rvci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaWNvbixbY3hJY29uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgY3hJY29uIGRpcmVjdGl2ZSBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBjeEljb24odHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5zZXRJY29uKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIGlucHV0IHBhcmFtZXRlciBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB0eXBlKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuc2V0SWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgaWNvbiBwcm92aWRlcyBhbiBodG1sIGZyYWdtZW50IHRoYXQgaXMgdXNlZCB0byBhZGQgU1ZHIG9yIHRleHQgYmFzZWQgaWNvbnMuXG4gICAqL1xuICBpY29uOiBTYWZlSHRtbDtcblxuICAvKipcbiAgICogVGhlIGZsaXAgZGlyZWN0aW9uIGFkZHMgaW5mb3JtYXRpb24gdG8gdGhlIERPTSBvbiB3aGV0aGVyIGl0IHNob3VsZCBmbGlwcGVkIGZvciBhIHNwZWNpZmljXG4gICAqIGRpcmVjdGlvbiAobHRyIHZzIHJ0bCkuIFR5cGljYWxseSwgaWNvbnMgYXJlIGx0ciBiYXNlZCwgYW5kIG9ubHkgaW4gY2FzZSBvZiBydGwgc29tZSBvZlxuICAgKiB0aGUgaWNvbnMgd2lsbCBiZSBmbGlwcGVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbGlwLWF0LXJ0bCcpIGZsaXBBdFJ0bDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbGlwLWF0LWx0cicpIGZsaXBBdEx0cjogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWFpbnRhaW5zIHRoZSBhcHBsaWVkIHN0eWxlIGNsYXNzZXMgc28gd2UgY2FuIHJlbW92ZSB0aGVtIHdoZW4gdGhlXG4gICAqIGljb24gdHlwZSBjaGFuZ2VzIGF0IHJ1biB0aW1lLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0eWxlQ2xhc3Nlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHJvdGVjdGVkIHNldEljb24odHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgaWYgKCF0eXBlIHx8IDxzdHJpbmc+dHlwZSA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uTG9hZGVyLmdldEh0bWwodHlwZSk7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXModHlwZSk7XG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0eXBlKTtcblxuICAgIC8vIHRoZSBmbGlwIGRpcmVjdGlvbiBpcyBhZGRlZCBzbyB0aGF0IGljb25zIGNhbiBiZSBmbGlwcGVkIGZvciBydGwgdnMgbHRyXG4gICAgdGhpcy5mbGlwQXRMdHIgPVxuICAgICAgdGhpcy5pY29uTG9hZGVyLmdldEZsaXBEaXJlY3Rpb24odHlwZSkgPT09IERpcmVjdGlvbk1vZGUuTFRSO1xuICAgIHRoaXMuZmxpcEF0UnRsID1cbiAgICAgIHRoaXMuaWNvbkxvYWRlci5nZXRGbGlwRGlyZWN0aW9uKHR5cGUpID09PSBEaXJlY3Rpb25Nb2RlLlJUTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmxlKS5cbiAgICovXG4gIHByb3RlY3RlZCBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsICdjeC1pY29uJyk7XG5cbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzZXMpIHtcbiAgICAgIHRoaXMuc3R5bGVDbGFzc2VzLmZvckVhY2goKGNscykgPT5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3QsIGNscylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMgPSB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHR5cGUpLnNwbGl0KCcgJyk7XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3Nlcy5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgIGlmIChjbHMgIT09ICcnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0LCBjbHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19