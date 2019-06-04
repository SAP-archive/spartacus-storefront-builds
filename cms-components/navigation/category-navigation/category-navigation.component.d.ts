import { Observable } from 'rxjs';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationComponentService } from '../navigation/navigation.component.service';
export declare class CategoryNavigationComponent {
    service: NavigationComponentService;
    node$: Observable<NavigationNode>;
    styleClass$: Observable<string>;
    constructor(service: NavigationComponentService);
}
