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
    /**
     * Returns the SearchBox configuration. The configuration is driven by multiple
     * layers: default configuration, (optional) backend configuration and (optional)
     * input configuration.
     */
    protected config$: Observable<SearchBoxConfig>;
    results$: Observable<SearchResults>;
    /**
     * Closes the searchBox and opens the search result page.
     */
    search(query: string): void;
    /**
     * Opens the type-ahead searchBox
     */
    open(): void;
    /**
     * Closes the type-ahead searchBox.
     */
    close(event: UIEvent, force?: boolean): void;
    protected blurSearchBox(event: UIEvent): void;
    private isSearchBoxFocused;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchBoxComponent, [null, { optional: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SearchBoxComponent, "cx-searchbox", never, { "config": "config"; "queryText": "queryText"; }, {}, never, never>;
}

//# sourceMappingURL=search-box.component.d.ts.map