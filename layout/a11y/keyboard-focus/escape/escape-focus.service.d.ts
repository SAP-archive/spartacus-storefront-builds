import { EscapeFocusConfig } from '../keyboard-focus.model';
import { PersistFocusService } from '../persist/persist-focus.service';
import { SelectFocusUtility } from '../services/select-focus.util';
export declare class EscapeFocusService extends PersistFocusService {
    protected selectFocusUtil: SelectFocusUtility;
    constructor(selectFocusUtil: SelectFocusUtility);
    shouldFocus(config: EscapeFocusConfig): boolean;
    handleEscape(host: HTMLElement, config: EscapeFocusConfig, event: KeyboardEvent): void;
}
