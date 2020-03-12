import { CmsSearchBoxComponent, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { SearchBoxComponentService } from './search-box-component.service';
import { SearchBoxConfig, SearchResults } from './search-box.model';
import * as ɵngcc0 from '@angular/core';
export declare class SearchBoxComponent {
    protected searchBoxComponentService: SearchBoxComponentService;
    protected componentData: CmsComponentData<CmsSearchBoxComponent>;
    protected winRef: WindowRef;
    config: SearchBoxConfig;
    /**
     * Sets the search box input field
     */
    set queryText(value: string);
    iconTypes: typeof ICON_TYPE;
    /**
     * In some occasions we need to ignore the close event,
     * for example when we click inside the search result section.
     */
    private ignoreCloseEvent;
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    constructor(searchBoxComponentService: SearchBoxComponentService, componentData: CmsComponentData<CmsSearchBoxComponent>, winRef: WindowRef);
    results$: Observable<SearchResults>;
    /**
     * Returns the backend configuration or default configuration for the searchbox.
     */
    private get config$();
    /**
     * Closes the searchbox and opens the search result page.
     */
    search(query: string): void;
    /**
     * Opens the typeahead searchbox
     */
    open(): void;
    /**
     * Closes the typehead searchbox.
     */
    close(event: UIEvent, force?: boolean): void;
    protected blurSearchBox(event: UIEvent): void;
    private isSearchboxFocused;
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    avoidReopen(event: UIEvent): void;
    private getResultElements;
    private getFocusedElement;
    private getFocusedIndex;
    focusPreviousChild(event: any): void;
    focusNextChild(event: any): void;
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a single product match, we could open the PDP.
     */
    launchSearchResult(event: UIEvent, query: string): void;
    /**
     * Disables closing the search result list.
     */
    disableClose(): void;
    /**
     * Clears the search box input field
     */
    clear(el: HTMLInputElement): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchBoxComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SearchBoxComponent, "cx-searchbox", never, {
    "queryText": "queryText";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2VhcmNoLWJveC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zU2VhcmNoQm94Q29tcG9uZW50LCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29tcG9uZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29uZmlnLCBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi9zZWFyY2gtYm94Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50PjtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgY29uZmlnOiBTZWFyY2hCb3hDb25maWc7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgICAqL1xuICAgIHNldCBxdWVyeVRleHQodmFsdWU6IHN0cmluZyk7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIC8qKlxuICAgICAqIEluIHNvbWUgb2NjYXNpb25zIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjbG9zZSBldmVudCxcbiAgICAgKiBmb3IgZXhhbXBsZSB3aGVuIHdlIGNsaWNrIGluc2lkZSB0aGUgc2VhcmNoIHJlc3VsdCBzZWN0aW9uLlxuICAgICAqL1xuICAgIHByaXZhdGUgaWdub3JlQ2xvc2VFdmVudDtcbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IGRhdGEgaXMgb3B0aW9uYWwsIHNvIHRoYXQgdGhpcyBjb21wb25lbnRcbiAgICAgKiBjYW4gYmUgcmV1c2VkIHdpdGhvdXQgQ01TIGludGVncmF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlYXJjaEJveENvbXBvbmVudFNlcnZpY2U6IFNlYXJjaEJveENvbXBvbmVudFNlcnZpY2UsIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2VhcmNoQm94Q29tcG9uZW50Piwgd2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIHJlc3VsdHMkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdHM+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJhY2tlbmQgY29uZmlndXJhdGlvbiBvciBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZWFyY2hib3guXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgY29uZmlnJCgpO1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgc2VhcmNoYm94IGFuZCBvcGVucyB0aGUgc2VhcmNoIHJlc3VsdCBwYWdlLlxuICAgICAqL1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgdHlwZWFoZWFkIHNlYXJjaGJveFxuICAgICAqL1xuICAgIG9wZW4oKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHR5cGVoZWFkIHNlYXJjaGJveC5cbiAgICAgKi9cbiAgICBjbG9zZShldmVudDogVUlFdmVudCwgZm9yY2U/OiBib29sZWFuKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgYmx1clNlYXJjaEJveChldmVudDogVUlFdmVudCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc1NlYXJjaGJveEZvY3VzZWQ7XG4gICAgLyoqXG4gICAgICogRXNwZWNpYWxseSBpbiBtb2JpbGUgd2UgZG8gbm90IHdhbnQgdGhlIHNlYXJjaCBpY29uXG4gICAgICogdG8gZm9jdXMgdGhlIGlucHV0IGFnYWluIHdoZW4gaXQncyBhbHJlYWR5IG9wZW4uXG4gICAgICogKi9cbiAgICBhdm9pZFJlb3BlbihldmVudDogVUlFdmVudCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRSZXN1bHRFbGVtZW50cztcbiAgICBwcml2YXRlIGdldEZvY3VzZWRFbGVtZW50O1xuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZEluZGV4O1xuICAgIGZvY3VzUHJldmlvdXNDaGlsZChldmVudDogYW55KTogdm9pZDtcbiAgICBmb2N1c05leHRDaGlsZChldmVudDogYW55KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgUExQIHdpdGggdGhlIGdpdmVuIHF1ZXJ5LlxuICAgICAqXG4gICAgICogVE9ETzogaWYgdGhlcmUncyBhIHNpbmdsZSBwcm9kdWN0IG1hdGNoLCB3ZSBjb3VsZCBvcGVuIHRoZSBQRFAuXG4gICAgICovXG4gICAgbGF1bmNoU2VhcmNoUmVzdWx0KGV2ZW50OiBVSUV2ZW50LCBxdWVyeTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBjbG9zaW5nIHRoZSBzZWFyY2ggcmVzdWx0IGxpc3QuXG4gICAgICovXG4gICAgZGlzYWJsZUNsb3NlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBzZWFyY2ggYm94IGlucHV0IGZpZWxkXG4gICAgICovXG4gICAgY2xlYXIoZWw6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkO1xufVxuIl19