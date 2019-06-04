import { Observable } from 'rxjs';
import { NavigationNode } from './navigation-node.model';
import { NavigationComponentService } from './navigation.component.service';
export declare class NavigationComponent {
    service: NavigationComponentService;
    node$: Observable<NavigationNode>;
    styleClass$: Observable<string>;
    constructor(service: NavigationComponentService);
}
