import { BaseFocusDirective } from '../base/base-focus.directive';
import { VisibleFocusConfig } from '../keyboard-focus.model';
/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 */
export declare class VisibleFocusDirective extends BaseFocusDirective {
    protected defaultConfig: VisibleFocusConfig;
    protected config: VisibleFocusConfig;
    /** controls a polyfill class for the lacking focus-visible feature */
    mouseFocus: boolean;
    handleMousedown(): void;
    handleKeydown(): void;
    protected get shouldFocusVisible(): boolean;
}
