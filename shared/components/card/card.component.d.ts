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
    paragraphs?: Array<{
        title?: string;
        text?: Array<string>;
    }>;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2FyZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuZXhwb3J0IGludGVyZmFjZSBDYXJkQWN0aW9uIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZExpbmtBY3Rpb24ge1xuICAgIGxpbms6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENhcmQge1xuICAgIGhlYWRlcj86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB0ZXh0Qm9sZD86IHN0cmluZztcbiAgICB0ZXh0PzogQXJyYXk8c3RyaW5nPjtcbiAgICBwYXJhZ3JhcGhzPzogQXJyYXk8e1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICAgICAgdGV4dD86IEFycmF5PHN0cmluZz47XG4gICAgfT47XG4gICAgaW1nPzogc3RyaW5nO1xuICAgIGFjdGlvbnM/OiBBcnJheTxDYXJkQWN0aW9uIHwgQ2FyZExpbmtBY3Rpb24+O1xuICAgIGRlbGV0ZU1zZz86IHN0cmluZztcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBkZWxldGVDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBzZXREZWZhdWx0Q2FyZDogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgc2VuZENhcmQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIGVkaXRDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBjYW5jZWxDYXJkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBib3JkZXI6IGJvb2xlYW47XG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XG4gICAgaXNEZWZhdWx0OiBib29sZWFuO1xuICAgIGNvbnRlbnQ6IENhcmQ7XG4gICAgZml0VG9Db250YWluZXI6IGJvb2xlYW47XG4gICAgc2V0RWRpdE1vZGUoKTogdm9pZDtcbiAgICBjYW5jZWxFZGl0KCk6IHZvaWQ7XG4gICAgZGVsZXRlKCk6IHZvaWQ7XG4gICAgc2V0RGVmYXVsdCgpOiB2b2lkO1xuICAgIHNlbmQoKTogdm9pZDtcbiAgICBlZGl0KCk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19