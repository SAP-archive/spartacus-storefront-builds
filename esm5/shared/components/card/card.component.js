import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
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
    CardComponent.prototype.setEditMode = function () {
        this.editMode = true;
    };
    CardComponent.prototype.cancelEdit = function () {
        this.editMode = false;
        this.cancelCard.emit(5);
    };
    CardComponent.prototype.delete = function () {
        this.deleteCard.emit(1);
    };
    CardComponent.prototype.setDefault = function () {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    };
    CardComponent.prototype.send = function () {
        this.sendCard.emit(3);
    };
    CardComponent.prototype.edit = function () {
        this.editCard.emit(4);
    };
    CardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Output()
    ], CardComponent.prototype, "deleteCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "setDefaultCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "sendCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "editCard", void 0);
    __decorate([
        Output()
    ], CardComponent.prototype, "cancelCard", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "border", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "editMode", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "isDefault", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "content", void 0);
    __decorate([
        Input()
    ], CardComponent.prototype, "fitToContainer", void 0);
    CardComponent = __decorate([
        Component({
            selector: 'cx-card',
            template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            (keydown.enter)=\"delete()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            (keydown.enter)=\"setDefault()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            (keydown.enter)=\"send()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            (keydown.enter)=\"edit()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQTBCekU7SUF3REU7UUF2REEsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUd0QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEQsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRCxhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEQsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBS2xCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBOEJSLENBQUM7SUE1QmhCLFVBQVU7SUFFVixtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFJRCxnQ0FBUSxHQUFSLGNBQVksQ0FBQztJQXREYjtRQURDLE1BQU0sRUFBRTtxREFDNkM7SUFFdEQ7UUFEQyxNQUFNLEVBQUU7eURBQ2lEO0lBRTFEO1FBREMsTUFBTSxFQUFFO21EQUMyQztJQUVwRDtRQURDLE1BQU0sRUFBRTttREFDMkM7SUFFcEQ7UUFEQyxNQUFNLEVBQUU7cURBQzZDO0lBR3REO1FBREMsS0FBSyxFQUFFO2lEQUNPO0lBR2Y7UUFEQyxLQUFLLEVBQUU7bURBQ1M7SUFHakI7UUFEQyxLQUFLLEVBQUU7b0RBQ1U7SUFHbEI7UUFEQyxLQUFLLEVBQUU7a0RBQ007SUFFZDtRQURDLEtBQUssRUFBRTt5REFDZTtJQTFCWixhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLGtuR0FBb0M7U0FDckMsQ0FBQztPQUNXLGFBQWEsQ0EyRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTNEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRBY3Rpb24ge1xuICBldmVudDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZExpbmtBY3Rpb24ge1xuICBsaW5rOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcbiAgaGVhZGVyPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdGV4dEJvbGQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBBcnJheTxzdHJpbmc+O1xuICBpbWc/OiBzdHJpbmc7XG4gIGFjdGlvbnM/OiBBcnJheTxDYXJkQWN0aW9uIHwgQ2FyZExpbmtBY3Rpb24+O1xuICBkZWxldGVNc2c/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgQE91dHB1dCgpXG4gIGRlbGV0ZUNhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2V0RGVmYXVsdENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VuZENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZWRpdENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2FuY2VsQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgYm9yZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZWRpdE1vZGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBpc0RlZmF1bHQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBDYXJkO1xuICBASW5wdXQoKVxuICBmaXRUb0NvbnRhaW5lciA9IGZhbHNlO1xuXG4gIC8vIEFDVElPTlNcblxuICBzZXRFZGl0TW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbEVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuY2FuY2VsQ2FyZC5lbWl0KDUpO1xuICB9XG5cbiAgZGVsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlQ2FyZC5lbWl0KDEpO1xuICB9XG5cbiAgc2V0RGVmYXVsdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVmYXVsdCA9IHRydWU7XG4gICAgdGhpcy5zZXREZWZhdWx0Q2FyZC5lbWl0KDIpO1xuICB9XG5cbiAgc2VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbmRDYXJkLmVtaXQoMyk7XG4gIH1cblxuICBlZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQuZW1pdCg0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=