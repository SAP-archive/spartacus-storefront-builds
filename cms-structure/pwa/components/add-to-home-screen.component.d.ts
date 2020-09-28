import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddToHomeScreenService } from '../services/add-to-home-screen.service';
import * as ɵngcc0 from '@angular/core';
export declare abstract class AddToHomeScreenComponent implements OnInit {
    protected addToHomeScreenService: AddToHomeScreenService;
    canPrompt$: Observable<boolean>;
    constructor(addToHomeScreenService: AddToHomeScreenService);
    ngOnInit(): void;
    prompt(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToHomeScreenComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AddToHomeScreenComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=add-to-home-screen.component.d.ts.map