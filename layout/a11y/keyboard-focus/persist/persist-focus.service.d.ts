import { BaseFocusService } from '../base/base-focus.service';
import { PersistFocusConfig } from '../keyboard-focus.model';
/**
 * Shared service to persist the focus for an element or a group
 * of elements. The persisted element focus can be used to persist
 * the focus for a DOM tree, so that the focus remains after a repaint
 * or reoccurs when a DOM tree is "unlocked".
 */
import * as ɵngcc0 from '@angular/core';
export declare class PersistFocusService extends BaseFocusService {
    protected focus: Map<string, string>;
    get(group?: string): string;
    set(value: string, group?: string): void;
    getPersistenceGroup(host: HTMLElement, config?: PersistFocusConfig): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PersistFocusService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInBlcnNpc3QtZm9jdXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVyc2lzdEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuLyoqXG4gKiBTaGFyZWQgc2VydmljZSB0byBwZXJzaXN0IHRoZSBmb2N1cyBmb3IgYW4gZWxlbWVudCBvciBhIGdyb3VwXG4gKiBvZiBlbGVtZW50cy4gVGhlIHBlcnNpc3RlZCBlbGVtZW50IGZvY3VzIGNhbiBiZSB1c2VkIHRvIHBlcnNpc3RcbiAqIHRoZSBmb2N1cyBmb3IgYSBET00gdHJlZSwgc28gdGhhdCB0aGUgZm9jdXMgcmVtYWlucyBhZnRlciBhIHJlcGFpbnRcbiAqIG9yIHJlb2NjdXJzIHdoZW4gYSBET00gdHJlZSBpcyBcInVubG9ja2VkXCIuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBlcnNpc3RGb2N1c1NlcnZpY2UgZXh0ZW5kcyBCYXNlRm9jdXNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgZm9jdXM6IE1hcDxzdHJpbmcsIHN0cmluZz47XG4gICAgZ2V0KGdyb3VwPzogc3RyaW5nKTogc3RyaW5nO1xuICAgIHNldCh2YWx1ZTogc3RyaW5nLCBncm91cD86IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0UGVyc2lzdGVuY2VHcm91cChob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnPzogUGVyc2lzdEZvY3VzQ29uZmlnKTogc3RyaW5nO1xufVxuIl19