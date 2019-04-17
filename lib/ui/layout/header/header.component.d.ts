import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
export declare class HeaderComponent implements OnDestroy {
    private router;
    private subscription;
    showMenu: boolean;
    constructor(router: Router);
    toggleMenu(): void;
    ngOnDestroy(): void;
}
