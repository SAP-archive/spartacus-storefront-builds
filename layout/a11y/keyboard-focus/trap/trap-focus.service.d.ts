import { MOVE_FOCUS, TrapFocusConfig, TrapFocusType } from '../keyboard-focus.model';
import { TabFocusService } from '../tab/tab-focus.service';
export declare class TrapFocusService extends TabFocusService {
    /**
     * Indicates whether any of the child elements of the host are focusable.
     *
     * @param host `HTMLElement` that is used to query the focusable elements.
     */
    hasFocusableChildren(host: HTMLElement): boolean;
    /**
     * Focus the next or previous element of all available focusable elements.
     * The focus is _trapped_ in case there's no next or previous available element.
     * The focus will automatically move the start or end of the list.
     */
    moveFocus(host: HTMLElement, config: TrapFocusConfig, increment: MOVE_FOCUS, event: UIEvent): void;
    protected getTrapStart(trap: TrapFocusType): boolean;
    protected getTrapEnd(trap: TrapFocusType): boolean;
}
