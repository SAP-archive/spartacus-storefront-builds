import { OnInit, EventEmitter } from '@angular/core';
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
}
