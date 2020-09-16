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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBS0gsTUFBTSxPQUFPLGFBQWE7SUFzQ3hCLFlBQ1ksVUFBNkIsRUFDN0IsVUFBbUMsRUFDbkMsUUFBbUI7UUFGbkIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUM1QixDQUFDO0lBekNKOzs7T0FHRztJQUNILElBQWEsTUFBTSxDQUFDLElBQWU7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYSxJQUFJLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUE2QlMsT0FBTyxDQUFDLElBQWU7UUFDL0IsSUFBSSxDQUFDLElBQUksSUFBWSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVEsQ0FBQyxJQUFlO1FBQ2hDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxLQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxlQUFlLENBQUMsSUFBZTtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQzFDLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFjLElBQUk7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG1FQUFvQzthQUNyQzs7O1lBMUJRLGlCQUFpQjtZQVB4QixVQUFVO1lBR1YsU0FBUzs7O3FCQW9DUixLQUFLO21CQVFMLEtBQUs7d0JBWUwsV0FBVyxTQUFDLG1CQUFtQjt3QkFLL0IsV0FBVyxTQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERpcmVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvZGlyZWN0aW9uL2NvbmZpZy9kaXJlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcblxuLyoqXG4gKlxuICogVGhlIGljb24gY29tcG9uZW50IGNhbiBiZSBhZGRlZCBpbiBkaWZmZXJlbnQgd2F5czpcbiAqXG4gKiBXaXRoIHRoZSBjb21wb25lbnQgc2VsZWN0b3I6XG4gKiBgPGN4LWljb24gdHlwZT1cIlNFQVJDSFwiPjwvY3gtaWNvbj5gXG4gKlxuICogV2l0aCB0aGUgYXR0cmlidXRlIHNlbGVjdG9yOlxuICogYDxzcGFuIGN4SWNvbj1cIlNUQVJcIj48L3NwYW4+YFxuICpcbiAqIEFkZGl0aW9uYWxseSwgY29udGVudCBjYW4gYmUgcHJvamVjdGVkIHRvIHRoZSBpY29uOlxuICpcbiAqIGA8YnV0dG9uIGN4SWNvbj1cIkhBUFBZXCI+aGFwcHkgbGFiZWw8L2J1dHRvbj5gXG4gKlxuICogVGhlIGFib3ZlIGJ1dHRvbiB3b3VsZCBiZWNvbWUgKGJhc2VkIG9uIGEgVEVYVCByZXNvdXJjZSB0eXBlKTpcbiAqIGA8YnV0dG9uPvCfmIpoYXBweSBsYWJlbDwvYnV0dG9uPmBcbiAqXG4gKiBXaGlsZSB0aGUgY29udGVudCBpcyBwcm9qZWN0ZWQsIHRoZSBpY29uIGl0c2VsZiBkb2Vzbid0IHJlcXVpcmUgYW5cbiAqIGFkZGl0aW9uYWwgRE9NIG5vZGUgd2hpY2ggaXMgYW4gYWR2YW50YWdlIG92ZXIgdGhlIGNvbXBvbmVudCBzZWxlY3Rvci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaWNvbixbY3hJY29uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgY3hJY29uIGRpcmVjdGl2ZSBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBjeEljb24odHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5zZXRJY29uKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIGlucHV0IHBhcmFtZXRlciBpcyBib3VuZCB0byB0aGUgaWNvbiB0eXBlLiBZb3UgY2FuIGZlZWQgdGhlIGBJQ09OX1RZUEVgIHRvXG4gICAqIGFjY29tcGxpc2ggYSBjb25maWd1cmFibGUgYnV0dG9uIGluIHRoZSBVSS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB0eXBlKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuc2V0SWNvbih0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgaWNvbiBwcm92aWRlcyBhbiBodG1sIGZyYWdtZW50IHRoYXQgaXMgdXNlZCB0byBhZGQgU1ZHIG9yIHRleHQgYmFzZWQgaWNvbnMuXG4gICAqL1xuICBpY29uOiBTYWZlSHRtbDtcblxuICAvKipcbiAgICogVGhlIGBmbGlwLWF0LXJ0bGAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBmb3IgdGhlIHN0eWxlIGxheWVyIHRvIGZsaXAgdGhlIGljb24gaW4gUlRMIGRpcmVjdGlvbi5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxpcC1hdC1ydGwnKSBmbGlwQXRSdGw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBgZmxpcC1hdC1sdHJgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gZm9yIHRoZSBzdHlsZSBsYXllciB0byBmbGlwIHRoZSBpY29uIGluIExUUiBkaXJlY3Rpb24uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZsaXAtYXQtbHRyJykgZmxpcEF0THRyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBNYWludGFpbnMgdGhlIGFwcGxpZWQgc3R5bGUgY2xhc3NlcyBzbyB3ZSBjYW4gcmVtb3ZlIHRoZW0gd2hlbiB0aGVcbiAgICogaWNvbiB0eXBlIGNoYW5nZXMgYXQgcnVuIHRpbWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3R5bGVDbGFzc2VzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBwcm90ZWN0ZWQgc2V0SWNvbih0eXBlOiBJQ09OX1RZUEUpOiB2b2lkIHtcbiAgICBpZiAoIXR5cGUgfHwgPHN0cmluZz50eXBlID09PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmljb24gPSB0aGlzLmljb25Mb2FkZXIuZ2V0SHRtbCh0eXBlKTtcbiAgICB0aGlzLmFkZFN0eWxlQ2xhc3Nlcyh0eXBlKTtcbiAgICB0aGlzLmljb25Mb2FkZXIuYWRkTGlua1Jlc291cmNlKHR5cGUpO1xuICAgIHRoaXMuZmxpcEljb24odHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGljb25zIHN1cHBvcnRzIGZsaXBwaW5nIGZvciBzb21lIGljb25zIHRvIHN1cHBvcnQgcnRsIGFuZCBsdHIgZGlyZWN0aW9ucy5cbiAgICovXG4gIHByb3RlY3RlZCBmbGlwSWNvbih0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICAvLyBUT0RPOiB0aGlzIGNhbiBiZSBkcm9wcGVkIHdpdGggdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICBpZiAoIXRoaXMuaWNvbkxvYWRlci5nZXRGbGlwRGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGljb25EaXJlY3Rpb24gPSB0aGlzLmljb25Mb2FkZXIuZ2V0RmxpcERpcmVjdGlvbih0eXBlKTtcbiAgICB0aGlzLmZsaXBBdEx0ciA9IGljb25EaXJlY3Rpb24gPT09IERpcmVjdGlvbk1vZGUuTFRSO1xuICAgIHRoaXMuZmxpcEF0UnRsID0gaWNvbkRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uTW9kZS5SVEw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgc3R5bGUgY2xhc3NlcyBhbmQgdGhlIGxpbmsgcmVzb3VyY2UgKGlmIGF2YWlsYWJsZSkuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU3R5bGVDbGFzc2VzKHR5cGU6IElDT05fVFlQRSk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0LCAnY3gtaWNvbicpO1xuXG4gICAgaWYgKHRoaXMuc3R5bGVDbGFzc2VzKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3Nlcy5mb3JFYWNoKChjbHMpID0+XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0LCBjbHMpXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzID0gdGhpcy5pY29uTG9hZGVyLmdldFN0eWxlQ2xhc3Nlcyh0eXBlKS5zcGxpdCgnICcpO1xuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICBpZiAoY2xzICE9PSAnJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdCwgY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==