import { Params } from '@angular/router';
import { PageContext } from '@spartacus/core';
/**
 * Indicates either that a user visited an arbitrary page of a web presence or that the page type was unknown.
 */
export declare class PageVisitedEvent {
    context: PageContext;
    semanticRoute?: string;
    url: string;
    params: Params;
}
/**
 * Indicates that a user visited the home page of a web presence.
 */
export declare class HomePageVisitedEvent extends PageVisitedEvent {
}
