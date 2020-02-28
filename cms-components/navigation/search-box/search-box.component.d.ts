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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2VhcmNoLWJveC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENtc1NlYXJjaEJveENvbXBvbmVudCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbXBvbmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaEJveENvbmZpZywgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vc2VhcmNoLWJveC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NlYXJjaEJveENvbXBvbmVudD47XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIGNvbmZpZzogU2VhcmNoQm94Q29uZmlnO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlYXJjaCBib3ggaW5wdXQgZmllbGRcbiAgICAgKi9cbiAgICBzZXQgcXVlcnlUZXh0KHZhbHVlOiBzdHJpbmcpO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICAvKipcbiAgICAgKiBJbiBzb21lIG9jY2FzaW9ucyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUgY2xvc2UgZXZlbnQsXG4gICAgICogZm9yIGV4YW1wbGUgd2hlbiB3ZSBjbGljayBpbnNpZGUgdGhlIHNlYXJjaCByZXN1bHQgc2VjdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlnbm9yZUNsb3NlRXZlbnQ7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCBkYXRhIGlzIG9wdGlvbmFsLCBzbyB0aGF0IHRoaXMgY29tcG9uZW50XG4gICAgICogY2FuIGJlIHJldXNlZCB3aXRob3V0IENNUyBpbnRlZ3JhdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlOiBTZWFyY2hCb3hDb21wb25lbnRTZXJ2aWNlLCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NlYXJjaEJveENvbXBvbmVudD4sIHdpblJlZjogV2luZG93UmVmKTtcbiAgICByZXN1bHRzJDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRzPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBiYWNrZW5kIGNvbmZpZ3VyYXRpb24gb3IgZGVmYXVsdCBjb25maWd1cmF0aW9uIGZvciB0aGUgc2VhcmNoYm94LlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IGNvbmZpZyQoKTtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHNlYXJjaGJveCBhbmQgb3BlbnMgdGhlIHNlYXJjaCByZXN1bHQgcGFnZS5cbiAgICAgKi9cbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIHR5cGVhaGVhZCBzZWFyY2hib3hcbiAgICAgKi9cbiAgICBvcGVuKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSB0eXBlaGVhZCBzZWFyY2hib3guXG4gICAgICovXG4gICAgY2xvc2UoZXZlbnQ6IFVJRXZlbnQsIGZvcmNlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGJsdXJTZWFyY2hCb3goZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIHByaXZhdGUgaXNTZWFyY2hib3hGb2N1c2VkO1xuICAgIC8qKlxuICAgICAqIEVzcGVjaWFsbHkgaW4gbW9iaWxlIHdlIGRvIG5vdCB3YW50IHRoZSBzZWFyY2ggaWNvblxuICAgICAqIHRvIGZvY3VzIHRoZSBpbnB1dCBhZ2FpbiB3aGVuIGl0J3MgYWxyZWFkeSBvcGVuLlxuICAgICAqICovXG4gICAgYXZvaWRSZW9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0UmVzdWx0RWxlbWVudHM7XG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkRWxlbWVudDtcbiAgICBwcml2YXRlIGdldEZvY3VzZWRJbmRleDtcbiAgICBmb2N1c1ByZXZpb3VzQ2hpbGQoZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgZm9jdXNOZXh0Q2hpbGQoZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIFBMUCB3aXRoIHRoZSBnaXZlbiBxdWVyeS5cbiAgICAgKlxuICAgICAqIFRPRE86IGlmIHRoZXJlJ3MgYSBzaW5nbGUgcHJvZHVjdCBtYXRjaCwgd2UgY291bGQgb3BlbiB0aGUgUERQLlxuICAgICAqL1xuICAgIGxhdW5jaFNlYXJjaFJlc3VsdChldmVudDogVUlFdmVudCwgcXVlcnk6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgY2xvc2luZyB0aGUgc2VhcmNoIHJlc3VsdCBsaXN0LlxuICAgICAqL1xuICAgIGRpc2FibGVDbG9zZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgc2VhcmNoIGJveCBpbnB1dCBmaWVsZFxuICAgICAqL1xuICAgIGNsZWFyKGVsOiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZDtcbn1cbiJdfQ==