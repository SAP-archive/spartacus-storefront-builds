import { Observable } from 'rxjs';
import { NavigationNode } from './navigation-node.model';
import { NavigationComponentService } from './navigation.component.service';
export declare class NavigationComponent {
    service: NavigationComponentService;
    dropdownMode: string;
    node: NavigationNode;
    node$: Observable<NavigationNode>;
    constructor(service: NavigationComponentService);
}
