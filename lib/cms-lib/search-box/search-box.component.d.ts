import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { SearchBoxComponentService } from './search-box-component.service';
export declare class SearchBoxComponent implements OnInit {
    protected service: SearchBoxComponentService;
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
