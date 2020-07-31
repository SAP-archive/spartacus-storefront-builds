import { Params } from '@angular/router';
import { PageContext } from '@spartacus/core';
/**
 * Indicates that a user visited an arbitrary page.
 */
export declare class PageEvent {
    context: PageContext;
    semanticRoute?: string;
    url: string;
    params: Params;
}
/**
 * Indicates that a user visited the home page.
 */
export declare class HomePageEvent extends PageEvent {
}
