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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardComponent, "cx-card", never, {
    "border": "border";
    "editMode": "editMode";
    "isDefault": "isDefault";
    "fitToContainer": "fitToContainer";
    "content": "content";
}, {
    "deleteCard": "deleteCard";
    "setDefaultCard": "setDefaultCard";
    "sendCard": "sendCard";
    "editCard": "editCard";
    "cancelCard": "cancelCard";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBDYXJkQWN0aW9uIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZExpbmtBY3Rpb24ge1xuICAgIGxpbms6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENhcmQge1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB0ZXh0Qm9sZD86IHN0cmluZztcbiAgICB0ZXh0PzogQXJyYXk8c3RyaW5nPjtcbiAgICBpbWc/OiBzdHJpbmc7XG4gICAgYWN0aW9ucz86IEFycmF5PENhcmRBY3Rpb24gfCBDYXJkTGlua0FjdGlvbj47XG4gICAgZGVsZXRlTXNnPzogc3RyaW5nO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGRlbGV0ZUNhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIHNldERlZmF1bHRDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBzZW5kQ2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgZWRpdENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIGNhbmNlbENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIGJvcmRlcjogYm9vbGVhbjtcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcbiAgICBpc0RlZmF1bHQ6IGJvb2xlYW47XG4gICAgY29udGVudDogQ2FyZDtcbiAgICBmaXRUb0NvbnRhaW5lcjogYm9vbGVhbjtcbiAgICBzZXRFZGl0TW9kZSgpOiB2b2lkO1xuICAgIGNhbmNlbEVkaXQoKTogdm9pZDtcbiAgICBkZWxldGUoKTogdm9pZDtcbiAgICBzZXREZWZhdWx0KCk6IHZvaWQ7XG4gICAgc2VuZCgpOiB2b2lkO1xuICAgIGVkaXQoKTogdm9pZDtcbiAgICBjb25zdHJ1Y3RvcigpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=