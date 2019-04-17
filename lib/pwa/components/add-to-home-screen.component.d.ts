import { OnInit } from '@angular/core';
import { AddToHomeScreenService } from './../services/add-to-home-screen.service';
import { Observable } from 'rxjs';
export declare abstract class AddToHomeScreenComponent implements OnInit {
    protected addToHomeScreenService: AddToHomeScreenService;
    canPrompt$: Observable<boolean>;
    constructor(addToHomeScreenService: AddToHomeScreenService);
    ngOnInit(): void;
    prompt(): void;
}
