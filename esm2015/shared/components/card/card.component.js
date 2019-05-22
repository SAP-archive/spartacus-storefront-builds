/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class CardComponent {
    constructor() {
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
    /**
     * @return {?}
     */
    setEditMode() {
        this.editMode = true;
    }
    /**
     * @return {?}
     */
    cancelEdit() {
        this.editMode = false;
        this.cancelCard.emit(5);
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteCard.emit(1);
    }
    /**
     * @return {?}
     */
    setDefault() {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    }
    /**
     * @return {?}
     */
    send() {
        this.sendCard.emit(3);
    }
    /**
     * @return {?}
     */
    edit() {
        this.editCard.emit(4);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-card',
                template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <img src=\"{{ content.img }}\" alt=\"\" />\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-card-border{border-width:var(--cx-border-width,1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-card-container{display:var(--cx-display,flex)}.cx-card-label-container{flex-grow:var(--cx-flex-grow,2)}.cx-card-fit-to-container{width:var(--cx-width,100%);height:var(--cx-height,100%);display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-card-body{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);justify-content:var(--cx-justify-content,space-between)}.cx-card-delete{background-color:var(--cx-background-color,var(--cx-g-color-background))}.cx-card-body-delete{padding:var(--cx-padding,1rem 0 0 0)}.cx-card-delete-msg{color:var(--cx-color,var(--cx-g-color-danger));padding:var(--cx-padding,0 0 1.25rem 0)}.cx-card-actions{display:var(--cx-display,flex);justify-content:var(--cx-justify-content,flex-end);padding:var(--cx-padding,1.25rem 0 0 0)}.cx-card-link{padding:var(--cx-padding,0 0 0 1rem)}"]
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
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
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRS9FLGdDQUdDOzs7SUFGQywyQkFBYzs7SUFDZCwwQkFBYTs7Ozs7QUFHZixvQ0FHQzs7O0lBRkMsOEJBQWE7O0lBQ2IsOEJBQWE7Ozs7O0FBR2YsMEJBUUM7OztJQVBDLHNCQUFnQjs7SUFDaEIscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQixvQkFBcUI7O0lBQ3JCLG1CQUFhOztJQUNiLHVCQUE2Qzs7SUFDN0MseUJBQW1COztBQVFyQixNQUFNLE9BQU8sYUFBYTtJQXNEeEI7UUFwREEsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUQsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBELGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRCxlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQThCUixDQUFDOzs7OztJQTFCaEIsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsUUFBUSxLQUFJLENBQUM7OztZQTdEZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDh6RkFBb0M7O2FBRXJDOzs7Ozt5QkFFRSxNQUFNOzZCQUVOLE1BQU07dUJBRU4sTUFBTTt1QkFFTixNQUFNO3lCQUVOLE1BQU07cUJBR04sS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSzs2QkFFTCxLQUFLOzs7O0lBdEJOLG1DQUNzRDs7SUFDdEQsdUNBQzBEOztJQUMxRCxpQ0FDb0Q7O0lBQ3BELGlDQUNvRDs7SUFDcEQsbUNBQ3NEOztJQUV0RCwrQkFDZTs7SUFFZixpQ0FDaUI7O0lBRWpCLGtDQUNrQjs7SUFFbEIsZ0NBQ2M7O0lBQ2QsdUNBQ3VCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRBY3Rpb24ge1xuICBldmVudDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZExpbmtBY3Rpb24ge1xuICBsaW5rOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcbiAgaGVhZGVyPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdGV4dEJvbGQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBBcnJheTxzdHJpbmc+O1xuICBpbWc/OiBzdHJpbmc7XG4gIGFjdGlvbnM/OiBBcnJheTxDYXJkQWN0aW9uIHwgQ2FyZExpbmtBY3Rpb24+O1xuICBkZWxldGVNc2c/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKVxuICBkZWxldGVDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNldERlZmF1bHRDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNlbmRDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGVkaXRDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGNhbmNlbENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIGJvcmRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGVkaXRNb2RlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaXNEZWZhdWx0ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29udGVudDogQ2FyZDtcbiAgQElucHV0KClcbiAgZml0VG9Db250YWluZXIgPSBmYWxzZTtcblxuICAvLyBBQ1RJT05TXG5cbiAgc2V0RWRpdE1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gIH1cblxuICBjYW5jZWxFZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNhbmNlbENhcmQuZW1pdCg1KTtcbiAgfVxuXG4gIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZUNhcmQuZW1pdCgxKTtcbiAgfVxuXG4gIHNldERlZmF1bHQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0RlZmF1bHQgPSB0cnVlO1xuICAgIHRoaXMuc2V0RGVmYXVsdENhcmQuZW1pdCgyKTtcbiAgfVxuXG4gIHNlbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zZW5kQ2FyZC5lbWl0KDMpO1xuICB9XG5cbiAgZWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkLmVtaXQoNCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19