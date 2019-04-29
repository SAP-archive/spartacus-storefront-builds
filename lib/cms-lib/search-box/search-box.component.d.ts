import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ICON_TYPES } from '../../../cms-components/misc/icon/index';
import { SearchBoxComponentService } from './search-box-component.service';
export declare class SearchBoxComponent implements OnInit {
    protected service: SearchBoxComponentService;
    iconTypes: typeof ICON_TYPES;
    searchBoxControl: FormControl;
    isMobileSearchVisible: boolean;
    queryText$: Subject<string>;
    queryText: string;
    constructor(service: SearchBoxComponentService);
    ngOnInit(): void;
    typeahead: (text$: Observable<string>) => Observable<string[]>;
    submitSearch(): void;
    selectSuggestion(item: any): void;
    onKey(event: KeyboardEvent): void;
    toggleMobileSearchInput(): void;
}
