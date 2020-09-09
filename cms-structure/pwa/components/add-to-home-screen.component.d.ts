import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddToHomeScreenService } from '../services/add-to-home-screen.service';
export declare abstract class AddToHomeScreenComponent implements OnInit {
    protected addToHomeScreenService: AddToHomeScreenService;
    canPrompt$: Observable<boolean>;
    constructor(addToHomeScreenService: AddToHomeScreenService);
    ngOnInit(): void;
    prompt(): void;
}
