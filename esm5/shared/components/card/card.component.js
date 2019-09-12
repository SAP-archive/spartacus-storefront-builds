/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/icon';
/**
 * @record
 */
export function CardAction() { }
if (false) {
    /** @type {?} */
    CardAction.prototype.event;
    /** @type {?} */
    CardAction.prototype.name;
}
/**
 * @record
 */
export function CardLinkAction() { }
if (false) {
    /** @type {?} */
    CardLinkAction.prototype.link;
    /** @type {?} */
    CardLinkAction.prototype.name;
}
/**
 * @record
 */
export function Card() { }
if (false) {
    /** @type {?|undefined} */
    Card.prototype.header;
    /** @type {?|undefined} */
    Card.prototype.title;
    /** @type {?|undefined} */
    Card.prototype.textBold;
    /** @type {?|undefined} */
    Card.prototype.text;
    /** @type {?|undefined} */
    Card.prototype.img;
    /** @type {?|undefined} */
    Card.prototype.actions;
    /** @type {?|undefined} */
    Card.prototype.deleteMsg;
}
var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.iconTypes = ICON_TYPE;
        this.deleteCard = new EventEmitter();
        this.setDefaultCard = new EventEmitter();
        this.sendCard = new EventEmitter();
        this.editCard = new EventEmitter();
        this.cancelCard = new EventEmitter();
        this.border = false;
        this.editMode = false;
        this.isDefault = false;
        this.fitToContainer = false;
    }
    // ACTIONS
    // ACTIONS
    /**
     * @return {?}
     */
    CardComponent.prototype.setEditMode = 
    // ACTIONS
    /**
     * @return {?}
     */
    function () {
        this.editMode = true;
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.cancelEdit = /**
     * @return {?}
     */
    function () {
        this.editMode = false;
        this.cancelCard.emit(5);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.deleteCard.emit(1);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.setDefault = /**
     * @return {?}
     */
    function () {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.send = /**
     * @return {?}
     */
    function () {
        this.sendCard.emit(3);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.editCard.emit(4);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-card',
                    template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        deleteCard: [{ type: Output }],
        setDefaultCard: [{ type: Output }],
        sendCard: [{ type: Output }],
        editCard: [{ type: Output }],
        cancelCard: [{ type: Output }],
        border: [{ type: Input }],
        editMode: [{ type: Input }],
        isDefault: [{ type: Input }],
        content: [{ type: Input }],
        fitToContainer: [{ type: Input }]
    };
    return CardComponent;
}());
export { CardComponent };
if (false) {
    /** @type {?} */
    CardComponent.prototype.iconTypes;
    /** @type {?} */
    CardComponent.prototype.deleteCard;
    /** @type {?} */
    CardComponent.prototype.setDefaultCard;
    /** @type {?} */
    CardComponent.prototype.sendCard;
    /** @type {?} */
    CardComponent.prototype.editCard;
    /** @type {?} */
    CardComponent.prototype.cancelCard;
    /** @type {?} */
    CardComponent.prototype.border;
    /** @type {?} */
    CardComponent.prototype.editMode;
    /** @type {?} */
    CardComponent.prototype.isDefault;
    /** @type {?} */
    CardComponent.prototype.content;
    /** @type {?} */
    CardComponent.prototype.fitToContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUU5RCxnQ0FHQzs7O0lBRkMsMkJBQWM7O0lBQ2QsMEJBQWE7Ozs7O0FBR2Ysb0NBR0M7OztJQUZDLDhCQUFhOztJQUNiLDhCQUFhOzs7OztBQUdmLDBCQVFDOzs7SUFQQyxzQkFBZ0I7O0lBQ2hCLHFCQUFlOztJQUNmLHdCQUFrQjs7SUFDbEIsb0JBQXFCOztJQUNyQixtQkFBYTs7SUFDYix1QkFBNkM7O0lBQzdDLHlCQUFtQjs7QUFHckI7SUE0REU7UUF2REEsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUd0QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEQsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRCxhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEQsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBS2xCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBOEJSLENBQUM7SUE1QmhCLFVBQVU7Ozs7O0lBRVYsbUNBQVc7Ozs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsa0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDhCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxrQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsNEJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDRCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxnQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE5RGQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw4ekZBQW9DO2lCQUNyQzs7Ozs7NkJBSUUsTUFBTTtpQ0FFTixNQUFNOzJCQUVOLE1BQU07MkJBRU4sTUFBTTs2QkFFTixNQUFNO3lCQUdOLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLOzBCQUdMLEtBQUs7aUNBRUwsS0FBSzs7SUFrQ1Isb0JBQUM7Q0FBQSxBQS9ERCxJQStEQztTQTNEWSxhQUFhOzs7SUFDeEIsa0NBQXNCOztJQUV0QixtQ0FDc0Q7O0lBQ3RELHVDQUMwRDs7SUFDMUQsaUNBQ29EOztJQUNwRCxpQ0FDb0Q7O0lBQ3BELG1DQUNzRDs7SUFFdEQsK0JBQ2U7O0lBRWYsaUNBQ2lCOztJQUVqQixrQ0FDa0I7O0lBRWxCLGdDQUNjOztJQUNkLHVDQUN1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEFjdGlvbiB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkTGlua0FjdGlvbiB7XG4gIGxpbms6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmQge1xuICBoZWFkZXI/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0ZXh0Qm9sZD86IHN0cmluZztcbiAgdGV4dD86IEFycmF5PHN0cmluZz47XG4gIGltZz86IHN0cmluZztcbiAgYWN0aW9ucz86IEFycmF5PENhcmRBY3Rpb24gfCBDYXJkTGlua0FjdGlvbj47XG4gIGRlbGV0ZU1zZz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBAT3V0cHV0KClcbiAgZGVsZXRlQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZXREZWZhdWx0Q2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZW5kQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBlZGl0Q2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBjYW5jZWxDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBib3JkZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBlZGl0TW9kZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGlzRGVmYXVsdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IENhcmQ7XG4gIEBJbnB1dCgpXG4gIGZpdFRvQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgLy8gQUNUSU9OU1xuXG4gIHNldEVkaXRNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jYW5jZWxDYXJkLmVtaXQoNSk7XG4gIH1cblxuICBkZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVDYXJkLmVtaXQoMSk7XG4gIH1cblxuICBzZXREZWZhdWx0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZWZhdWx0ID0gdHJ1ZTtcbiAgICB0aGlzLnNldERlZmF1bHRDYXJkLmVtaXQoMik7XG4gIH1cblxuICBzZW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc2VuZENhcmQuZW1pdCgzKTtcbiAgfVxuXG4gIGVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZC5lbWl0KDQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==