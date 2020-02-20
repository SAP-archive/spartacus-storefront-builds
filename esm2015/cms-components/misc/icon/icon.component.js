import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
let IconComponent = class IconComponent {
    constructor(iconLoader, elementRef) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        /**
         * Keeps the given style classes so that we can
         * clean them up when the icon changes
         */
        this.styleClasses = '';
    }
    set type(type) {
        this._type = type;
        this.addStyleClasses(type);
    }
    /**
     * Indicates whether the icon is configured to use SVG or not.
     */
    get useSvg() {
        return this.iconLoader.useSvg(this._type);
    }
    /**
     * Returns the path to the svg symbol. The path could include an
     * external URL to an svg (sprite) file, but can also reference
     * an existing SVG symbol in the DOM.
     */
    get svgPath() {
        return this.iconLoader.getSvgPath(this._type);
    }
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    addStyleClasses(type) {
        if (this.useSvg) {
            return;
        }
        if (this.staticStyleClasses === undefined) {
            this.staticStyleClasses = this.elementRef.nativeElement.classList.value
                ? this.elementRef.nativeElement.classList.value + ' '
                : '';
        }
        this.styleClasses =
            this.staticStyleClasses + this.iconLoader.getStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    }
};
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef }
];
__decorate([
    Input('type')
], IconComponent.prototype, "type", null);
__decorate([
    HostBinding('class')
], IconComponent.prototype, "styleClasses", void 0);
IconComponent = __decorate([
    Component({
        selector: 'cx-icon',
        template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
    })
], IconComponent);
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXdCeEIsWUFDWSxVQUE2QixFQUM3QixVQUFtQztRQURuQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQWQvQzs7O1dBR0c7UUFDbUIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFXckMsQ0FBQztJQXBCSixJQUFJLElBQUksQ0FBQyxJQUFlO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQW1CRDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZUFBZSxDQUFDLElBQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRztnQkFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVk7WUFDZixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7O1lBdkN5QixpQkFBaUI7WUFDakIsVUFBVTs7QUFuQmxDO0lBREMsS0FBSyxDQUFDLE1BQU0sQ0FBQzt5Q0FJYjtBQU1xQjtJQUFyQixXQUFXLENBQUMsT0FBTyxDQUFDO21EQUFtQjtBQWhCN0IsYUFBYTtJQUp6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixnSUFBb0M7S0FDckMsQ0FBQztHQUNXLGFBQWEsQ0FnRXpCO1NBaEVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgaWNvbiB3aGljaCBtYXBzIHRvIHRoZSBpY29uIGxpbmtcbiAgICogaW4gdGhlIHN2ZyBpY29uIHNwcml0ZS5cbiAgICovXG4gIF90eXBlOiBJQ09OX1RZUEU7XG4gIEBJbnB1dCgndHlwZScpXG4gIHNldCB0eXBlKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWRkU3R5bGVDbGFzc2VzKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEtlZXBzIHRoZSBnaXZlbiBzdHlsZSBjbGFzc2VzIHNvIHRoYXQgd2UgY2FuXG4gICAqIGNsZWFuIHRoZW0gdXAgd2hlbiB0aGUgaWNvbiBjaGFuZ2VzXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVDbGFzc2VzID0gJyc7XG5cbiAgLyoqXG4gICAqIFN0eWxlIGNsYXNzIG5hbWVzIGZyb20gdGhlIGhvc3QgZWxlbWVudCBhcmUgdGFrZW4gaW50byBhY2NvdW50XG4gICAqIHdoZW4gY2xhc3NlcyBhcmUgc2V0IGR5bmFtaWNhbGx5LlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWNTdHlsZUNsYXNzZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XG4gICkge31cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGljb24gaXMgY29uZmlndXJlZCB0byB1c2UgU1ZHIG9yIG5vdC5cbiAgICovXG4gIGdldCB1c2VTdmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkxvYWRlci51c2VTdmcodGhpcy5fdHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIHN5bWJvbC4gVGhlIHBhdGggY291bGQgaW5jbHVkZSBhblxuICAgKiBleHRlcm5hbCBVUkwgdG8gYW4gc3ZnIChzcHJpdGUpIGZpbGUsIGJ1dCBjYW4gYWxzbyByZWZlcmVuY2VcbiAgICogYW4gZXhpc3RpbmcgU1ZHIHN5bWJvbCBpbiB0aGUgRE9NLlxuICAgKi9cbiAgZ2V0IHN2Z1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLmdldFN2Z1BhdGgodGhpcy5fdHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgc3R5bGUgY2xhc3NlcyBhbmQgdGhlIGxpbmsgcmVzb3VyY2UgKGlmIGF2YWlsYWJlKS5cbiAgICovXG4gIHByaXZhdGUgYWRkU3R5bGVDbGFzc2VzKHR5cGU6IElDT05fVFlQRSkge1xuICAgIGlmICh0aGlzLnVzZVN2Zykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICA/IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC52YWx1ZSArICcgJ1xuICAgICAgICA6ICcnO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzID1cbiAgICAgIHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzICsgdGhpcy5pY29uTG9hZGVyLmdldFN0eWxlQ2xhc3Nlcyh0eXBlKTtcblxuICAgIHRoaXMuaWNvbkxvYWRlci5hZGRMaW5rUmVzb3VyY2UodHlwZSk7XG4gIH1cbn1cbiJdfQ==