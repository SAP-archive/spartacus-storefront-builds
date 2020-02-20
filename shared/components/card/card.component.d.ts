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

//# sourceMappingURL=card.component.d.ts.map