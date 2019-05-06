import { Observable } from 'rxjs';
import { HamburgerMenuService } from '../header/index';
export declare class StorefrontComponent {
    private hamburgerMenuService;
    constructor(hamburgerMenuService: HamburgerMenuService);
    readonly isExpanded: Observable<boolean>;
    collapseMenu(): void;
}
