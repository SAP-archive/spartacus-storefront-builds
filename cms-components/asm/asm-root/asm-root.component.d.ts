import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsmService, AsmUi } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class AsmRootComponent implements OnInit, OnDestroy {
    protected asmService: AsmService;
    protected activatedRoute: ActivatedRoute;
    private subscription;
    asmUi$: Observable<AsmUi>;
    constructor(asmService: AsmService, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    private showUi;
    ngOnDestroy(): void;
}
