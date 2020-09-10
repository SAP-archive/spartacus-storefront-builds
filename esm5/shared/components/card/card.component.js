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
            template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n        <div class=\"cx-card-paragraph\" *ngFor=\"let item of content.paragraphs\">\n          <div class=\"cx-card-paragraph-title\">{{ item.title }}</div>\n          <div *ngFor=\"let text of item.text\">\n            <div class=\"cx-card-paragraph-text\">{{ text }}</div>\n          </div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"delete()\"\n            (keydown.enter)=\"delete()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"setDefault()\"\n            (keydown.enter)=\"setDefault()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"send()\"\n            (keydown.enter)=\"send()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"edit()\"\n            (keydown.enter)=\"edit()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link cx-action-link\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
        })
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQTJCekU7SUF3REU7UUF2REEsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUd0QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEQsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRCxhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEQsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBS2xCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBOEJSLENBQUM7SUE1QmhCLFVBQVU7SUFFVixtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFJRCxnQ0FBUSxHQUFSLGNBQVksQ0FBQztJQXREYjtRQURDLE1BQU0sRUFBRTtxREFDNkM7SUFFdEQ7UUFEQyxNQUFNLEVBQUU7eURBQ2lEO0lBRTFEO1FBREMsTUFBTSxFQUFFO21EQUMyQztJQUVwRDtRQURDLE1BQU0sRUFBRTttREFDMkM7SUFFcEQ7UUFEQyxNQUFNLEVBQUU7cURBQzZDO0lBR3REO1FBREMsS0FBSyxFQUFFO2lEQUNPO0lBR2Y7UUFEQyxLQUFLLEVBQUU7bURBQ1M7SUFHakI7UUFEQyxLQUFLLEVBQUU7b0RBQ1U7SUFHbEI7UUFEQyxLQUFLLEVBQUU7a0RBQ007SUFFZDtRQURDLEtBQUssRUFBRTt5REFDZTtJQTFCWixhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLG0vR0FBb0M7U0FDckMsQ0FBQztPQUNXLGFBQWEsQ0EyRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTNEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRBY3Rpb24ge1xuICBldmVudDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZExpbmtBY3Rpb24ge1xuICBsaW5rOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcbiAgaGVhZGVyPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgdGV4dEJvbGQ/OiBzdHJpbmc7XG4gIHRleHQ/OiBBcnJheTxzdHJpbmc+O1xuICBwYXJhZ3JhcGhzPzogQXJyYXk8eyB0aXRsZT86IHN0cmluZzsgdGV4dD86IEFycmF5PHN0cmluZz4gfT47XG4gIGltZz86IHN0cmluZztcbiAgYWN0aW9ucz86IEFycmF5PENhcmRBY3Rpb24gfCBDYXJkTGlua0FjdGlvbj47XG4gIGRlbGV0ZU1zZz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBAT3V0cHV0KClcbiAgZGVsZXRlQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZXREZWZhdWx0Q2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZW5kQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBlZGl0Q2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBjYW5jZWxDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBib3JkZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBlZGl0TW9kZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGlzRGVmYXVsdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IENhcmQ7XG4gIEBJbnB1dCgpXG4gIGZpdFRvQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgLy8gQUNUSU9OU1xuXG4gIHNldEVkaXRNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgY2FuY2VsRWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jYW5jZWxDYXJkLmVtaXQoNSk7XG4gIH1cblxuICBkZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVDYXJkLmVtaXQoMSk7XG4gIH1cblxuICBzZXREZWZhdWx0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZWZhdWx0ID0gdHJ1ZTtcbiAgICB0aGlzLnNldERlZmF1bHRDYXJkLmVtaXQoMik7XG4gIH1cblxuICBzZW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc2VuZENhcmQuZW1pdCgzKTtcbiAgfVxuXG4gIGVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZC5lbWl0KDQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==