import { Observable } from 'rxjs';
import { HamburgerMenuService } from './hamburger-menu.service';
export declare class HamburgerMenuComponent {
    private hamburgerMenuService;
    constructor(hamburgerMenuService: HamburgerMenuService);
    toggle(): void;
    readonly isExpanded: Observable<boolean>;
}
