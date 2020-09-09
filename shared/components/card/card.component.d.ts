import { EventEmitter, OnInit } from '@angular/core';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export interface CardAction {
    event: string;
    name: string;
}
export interface CardLinkAction {
    link: string;
    name: string;
}
export interface Card {
    header?: string;
    title?: string;
    textBold?: string;
    text?: Array<string>;
    img?: string;
    actions?: Array<CardAction | CardLinkAction>;
    deleteMsg?: string;
}
export declare class CardComponent implements OnInit {
    iconTypes: typeof ICON_TYPE;
    deleteCard: EventEmitter<number>;
    setDefaultCard: EventEmitter<number>;
    sendCard: EventEmitter<number>;
    editCard: EventEmitter<number>;
    cancelCard: EventEmitter<number>;
    border: boolean;
    editMode: boolean;
    isDefault: boolean;
    content: Card;
    fitToContainer: boolean;
    setEditMode(): void;
    cancelEdit(): void;
    delete(): void;
    setDefault(): void;
    send(): void;
    edit(): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardComponent, "cx-card", never, { "border": "border"; "editMode": "editMode"; "isDefault": "isDefault"; "fitToContainer": "fitToContainer"; "content": "content"; }, { "deleteCard": "deleteCard"; "setDefaultCard": "setDefaultCard"; "sendCard": "sendCard"; "editCard": "editCard"; "cancelCard": "cancelCard"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5leHBvcnQgaW50ZXJmYWNlIENhcmRBY3Rpb24ge1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDYXJkTGlua0FjdGlvbiB7XG4gICAgbGluazogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZCB7XG4gICAgaGVhZGVyPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHRleHRCb2xkPzogc3RyaW5nO1xuICAgIHRleHQ/OiBBcnJheTxzdHJpbmc+O1xuICAgIGltZz86IHN0cmluZztcbiAgICBhY3Rpb25zPzogQXJyYXk8Q2FyZEFjdGlvbiB8IENhcmRMaW5rQWN0aW9uPjtcbiAgICBkZWxldGVNc2c/OiBzdHJpbmc7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgZGVsZXRlQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgc2V0RGVmYXVsdENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIHNlbmRDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBlZGl0Q2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgY2FuY2VsQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgYm9yZGVyOiBib29sZWFuO1xuICAgIGVkaXRNb2RlOiBib29sZWFuO1xuICAgIGlzRGVmYXVsdDogYm9vbGVhbjtcbiAgICBjb250ZW50OiBDYXJkO1xuICAgIGZpdFRvQ29udGFpbmVyOiBib29sZWFuO1xuICAgIHNldEVkaXRNb2RlKCk6IHZvaWQ7XG4gICAgY2FuY2VsRWRpdCgpOiB2b2lkO1xuICAgIGRlbGV0ZSgpOiB2b2lkO1xuICAgIHNldERlZmF1bHQoKTogdm9pZDtcbiAgICBzZW5kKCk6IHZvaWQ7XG4gICAgZWRpdCgpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==