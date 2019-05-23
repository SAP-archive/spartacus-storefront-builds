import { OnInit } from '@angular/core';
import { CmsSearchBoxComponent } from '@spartacus/core';
import { CmsComponentData } from 'projects/storefrontlib/src/cms-structure/page/model/cms-component-data';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { SearchBoxComponentService } from './search-box-component.service';
import { SearchResults } from './search-box.model';
export declare class SearchBoxComponent implements OnInit {
    protected searchBoxComponentService: SearchBoxComponentService;
    protected componentData: CmsComponentData<CmsSearchBoxComponent>;
    /**
     * Sets the search box input field
     */
    queryText: string;
    iconTypes: typeof ICON_TYPE;
    private config;
    /**
     * In some occasions we need to ignore the close event,
     * for example when we click inside the search result section.
     */
    private ignoreCloseEvent;
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    constructor(searchBoxComponentService: SearchBoxComponentService, componentData: CmsComponentData<CmsSearchBoxComponent>);
    results$: Observable<SearchResults>;
    ngOnInit(): void;
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
    close(event: UIEvent): void;
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    avoidReopen(event: UIEvent): void;
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
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
}
