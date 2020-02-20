import { Observable } from 'rxjs';
import { SkipLink, SkipLinkConfig, SkipLinkScrollPosition } from '../config/skip-link.config';
export declare class SkipLinkService {
    protected config: SkipLinkConfig;
    private skipLinks$;
    constructor(config: SkipLinkConfig);
    getSkipLinks(): Observable<SkipLink[]>;
    add(key: string, target: HTMLElement): void;
    remove(key: string): void;
    scrollToTarget(target: HTMLElement, position: SkipLinkScrollPosition, event: MouseEvent): void;
    protected getSkipLinkIndexInArray(key: string): number;
}
