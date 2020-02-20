import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
var GenericLinkComponent = /** @class */ (function () {
    function GenericLinkComponent() {
        this.protocolRegex = /^https?:\/\//i;
    }
    Object.defineProperty(GenericLinkComponent.prototype, "rel", {
        get: function () {
            return this.target === '_blank' ? 'noopener' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
        get: function () {
            if (typeof this.url === 'string') {
                return [this.getAbsoluteUrl(this.url)];
            }
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    GenericLinkComponent.prototype.isExternalUrl = function () {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    };
    GenericLinkComponent.prototype.getAbsoluteUrl = function (url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    };
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "title", void 0);
    GenericLinkComponent = __decorate([
        Component({
            selector: 'cx-generic-link',
            template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
        })
    ], GenericLinkComponent);
    return GenericLinkComponent;
}());
export { GenericLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDs7R0FFRztBQUtIO0lBQUE7UUFDbUIsa0JBQWEsR0FBVyxlQUFlLENBQUM7SUEyQjNELENBQUM7SUFsQkMsc0JBQUkscUNBQUc7YUFBUDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVM7YUFBYjtZQUNFLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCw0Q0FBYSxHQUFiO1FBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU8sNkNBQWMsR0FBdEIsVUFBdUIsR0FBVztRQUNoQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUF4QlE7UUFBUixLQUFLLEVBQUU7cURBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3dEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7b0RBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTt1REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBUlosb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0Isa3pCQUE0QztTQUM3QyxDQUFDO09BQ1csb0JBQW9CLENBNEJoQztJQUFELDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IG5hdmlnYXRlcyB1c2luZyBbcm91dGVyTGlua10gYXR0cmlidXRlIHdoZW4gaW5wdXQgJ3VybCcgaXMgYSByZWxhdGl2ZSB1cmwuIE90aGVyd2lzZSAod2hlbiBpdCdzIGFic29sdXRlKSwgW2hyZWZdIGlzIHVzZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWdlbmVyaWMtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nZW5lcmljLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmljTGlua0NvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvdG9jb2xSZWdleDogUmVnRXhwID0gL15odHRwcz86XFwvXFwvL2k7XG5cbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgfCBhbnlbXTtcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgZ2V0IHJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgPT09ICdfYmxhbmsnID8gJ25vb3BlbmVyJyA6IG51bGw7XG4gIH1cblxuICBnZXQgcm91dGVyVXJsKCk6IGFueVtdIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudXJsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFt0aGlzLmdldEFic29sdXRlVXJsKHRoaXMudXJsKV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVybDtcbiAgfVxuXG4gIGlzRXh0ZXJuYWxVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnVybCA9PT0gJ3N0cmluZycgJiYgdGhpcy5wcm90b2NvbFJlZ2V4LnRlc3QodGhpcy51cmwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBYnNvbHV0ZVVybCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnLycpID8gdGhpcy51cmwgOiAnLycgKyB0aGlzLnVybDtcbiAgfVxufVxuIl19