import { Observable } from 'rxjs';
import { NavigationComponentService } from './navigation.component.service';
import { NavigationNode } from './navigation-node.model';
export declare class NavigationComponent {
    service: NavigationComponentService;
    dropdownMode: string;
    node: NavigationNode;
    node$: Observable<NavigationNode>;
    constructor(service: NavigationComponentService);
}
