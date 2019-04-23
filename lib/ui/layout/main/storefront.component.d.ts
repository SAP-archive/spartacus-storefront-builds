import { Observable } from 'rxjs';
import { HamburgerMenuService } from '../../../../layout/header/hamburger-menu/hamburger-menu.service';
export declare class StorefrontComponent {
    private hamburgerMenuService;
    constructor(hamburgerMenuService: HamburgerMenuService);
    readonly isExpanded: Observable<boolean>;
    collapseMenu(): void;
}
