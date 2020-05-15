import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, } from '@angular/core';
import { DIALOG_TYPE, } from '../config';
let LaunchRenderStrategy = class LaunchRenderStrategy {
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        // List of called references; only used for rendered elements
        this.renderedCallers = [];
        /**
         * Classes to apply to the component when the dialog is a DIALOG
         */
        this.dialogClasses = ['d-block', 'fade', 'modal', 'show'];
        /**
         * Classes to apply to the component when the dialog is a POPOVER
         */
        this.popoverClasses = ['cx-dialog-popover'];
        /**
         * Classes to apply to the component when the dialog is a SIDEBAR_END
         */
        this.sidebarEndClasses = ['cx-sidebar-end'];
        /**
         * Classes to apply to the component when the dialog is a SIDEBAR_START
         */
        this.sidebarStartClasses = ['cx-sidebar-start'];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Determines if element should render
     *
     * @param caller
     * @param config
     */
    shouldRender(caller, config) {
        return (Boolean(config.component) &&
            (this.renderedCallers.some((el) => el.caller === caller)
                ? !!config.multi
                : true));
    }
    applyClasses(component, dialogType) {
        let classes = [];
        // TODO: make classes configurable
        switch (dialogType) {
            case DIALOG_TYPE.DIALOG:
                classes = this.dialogClasses;
                this.renderer.addClass(this.document.body, 'modal-open');
                break;
            case DIALOG_TYPE.POPOVER:
                classes = this.popoverClasses;
                break;
            case DIALOG_TYPE.SIDEBAR_END:
                classes = this.sidebarEndClasses;
                break;
            case DIALOG_TYPE.SIDEBAR_START:
                classes = this.sidebarStartClasses;
                break;
        }
        for (const newClass of classes) {
            this.renderer.addClass(component.location.nativeElement, newClass);
        }
    }
    /**
     * Method to call when rendered element is destroyed
     * The element will be removed from the list of rendered elements
     *
     * @param caller
     * @param _config optional parameters used in children strategies
     */
    remove(caller, config) {
        var _a;
        this.renderedCallers = this.renderedCallers.filter((el) => el.caller !== caller);
        if (((_a = config) === null || _a === void 0 ? void 0 : _a.dialogType) === DIALOG_TYPE.DIALOG) {
            this.renderer.removeClass(this.document.body, 'modal-open');
        }
    }
    getPriority() {
        return -10 /* LOW */; // low, as it's a default matcher
    }
};
LaunchRenderStrategy = __decorate([
    __param(0, Inject(DOCUMENT))
], LaunchRenderStrategy);
export { LaunchRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDTCxXQUFXLEdBSVosTUFBTSxXQUFXLENBQUM7QUFFbkIsSUFBc0Isb0JBQW9CLEdBQTFDLE1BQXNCLG9CQUFvQjtJQTJCeEMsWUFDOEIsUUFBYSxFQUMvQixlQUFpQztRQURmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBNUI3Qyw2REFBNkQ7UUFDbkQsb0JBQWUsR0FJcEIsRUFBRSxDQUFDO1FBRVI7O1dBRUc7UUFDTyxrQkFBYSxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0Q7O1dBRUc7UUFDTyxtQkFBYyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqRDs7V0FFRztRQUNPLHNCQUFpQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRDs7V0FFRztRQUNPLHdCQUFtQixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQVFuRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFvQkQ7Ozs7O09BS0c7SUFDTyxZQUFZLENBQ3BCLE1BQThCLEVBQzlCLE1BQW9CO1FBRXBCLE9BQU8sQ0FDTCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN6QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNWLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWSxDQUNwQixTQUE0QixFQUM1QixVQUF1QjtRQUV2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsa0NBQWtDO1FBQ2xDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsV0FBVztnQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLGFBQWE7Z0JBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE1BQU07U0FDVDtRQUVELEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxNQUE4QixFQUFFLE1BQXFCOztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQzdCLENBQUM7UUFFRixJQUFJLE9BQUMsTUFBdUIsMENBQUUsVUFBVSxNQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULHFCQUFvQixDQUFDLGlDQUFpQztJQUN4RCxDQUFDO0NBQ0YsQ0FBQTtBQXRIcUIsb0JBQW9CO0lBNEJyQyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQTVCQyxvQkFBb0IsQ0FzSHpDO1NBdEhxQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcGxpY2FibGUsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIERJQUxPR19UWVBFLFxuICBMYXVuY2hEaWFsb2csXG4gIExhdW5jaE9wdGlvbnMsXG4gIExBVU5DSF9DQUxMRVIsXG59IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXVuY2hSZW5kZXJTdHJhdGVneSBpbXBsZW1lbnRzIEFwcGxpY2FibGUge1xuICAvLyBMaXN0IG9mIGNhbGxlZCByZWZlcmVuY2VzOyBvbmx5IHVzZWQgZm9yIHJlbmRlcmVkIGVsZW1lbnRzXG4gIHByb3RlY3RlZCByZW5kZXJlZENhbGxlcnM6IEFycmF5PHtcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmc7XG4gICAgZWxlbWVudD86IGFueTtcbiAgICBjb21wb25lbnQ/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgfT4gPSBbXTtcblxuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIERJQUxPR1xuICAgKi9cbiAgcHJvdGVjdGVkIGRpYWxvZ0NsYXNzZXMgPSBbJ2QtYmxvY2snLCAnZmFkZScsICdtb2RhbCcsICdzaG93J107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgUE9QT1ZFUlxuICAgKi9cbiAgcHJvdGVjdGVkIHBvcG92ZXJDbGFzc2VzID0gWydjeC1kaWFsb2ctcG9wb3ZlciddO1xuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIFNJREVCQVJfRU5EXG4gICAqL1xuICBwcm90ZWN0ZWQgc2lkZWJhckVuZENsYXNzZXMgPSBbJ2N4LXNpZGViYXItZW5kJ107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgU0lERUJBUl9TVEFSVFxuICAgKi9cbiAgcHJvdGVjdGVkIHNpZGViYXJTdGFydENsYXNzZXMgPSBbJ2N4LXNpZGViYXItc3RhcnQnXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIG1ldGhvZCB0byBpbXBsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5XG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgTGF1bmNoIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGFic3RyYWN0IHJlbmRlcihcbiAgICBjb25maWc6IExhdW5jaE9wdGlvbnMsXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWZcbiAgKTogdm9pZCB8IE9ic2VydmFibGU8Q29tcG9uZW50UmVmPGFueT4+O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBzdHJhdGVneSBpcyB0aGUgcmlnaHQgb25lIGZvciB0aGUgcHJvdmlkZWQgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBhYnN0cmFjdCBoYXNNYXRjaChjb25maWc6IExhdW5jaE9wdGlvbnMpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIGVsZW1lbnQgc2hvdWxkIHJlbmRlclxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHByb3RlY3RlZCBzaG91bGRSZW5kZXIoXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIGNvbmZpZzogTGF1bmNoRGlhbG9nXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKGNvbmZpZy5jb21wb25lbnQpICYmXG4gICAgICAodGhpcy5yZW5kZXJlZENhbGxlcnMuc29tZSgoZWwpID0+IGVsLmNhbGxlciA9PT0gY2FsbGVyKVxuICAgICAgICA/ICEhY29uZmlnLm11bHRpXG4gICAgICAgIDogdHJ1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFwcGx5Q2xhc3NlcyhcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+LFxuICAgIGRpYWxvZ1R5cGU6IERJQUxPR19UWVBFXG4gICk6IHZvaWQge1xuICAgIGxldCBjbGFzc2VzID0gW107XG5cbiAgICAvLyBUT0RPOiBtYWtlIGNsYXNzZXMgY29uZmlndXJhYmxlXG4gICAgc3dpdGNoIChkaWFsb2dUeXBlKSB7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLkRJQUxPRzpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuZGlhbG9nQ2xhc3NlcztcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5QT1BPVkVSOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5wb3BvdmVyQ2xhc3NlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLlNJREVCQVJfRU5EOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5zaWRlYmFyRW5kQ2xhc3NlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLlNJREVCQVJfU1RBUlQ6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnNpZGViYXJTdGFydENsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbmV3Q2xhc3Mgb2YgY2xhc3Nlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2FsbCB3aGVuIHJlbmRlcmVkIGVsZW1lbnQgaXMgZGVzdHJveWVkXG4gICAqIFRoZSBlbGVtZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IG9mIHJlbmRlcmVkIGVsZW1lbnRzXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXJcbiAgICogQHBhcmFtIF9jb25maWcgb3B0aW9uYWwgcGFyYW1ldGVycyB1c2VkIGluIGNoaWxkcmVuIHN0cmF0ZWdpZXNcbiAgICovXG4gIHB1YmxpYyByZW1vdmUoY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLCBjb25maWc6IExhdW5jaE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycyA9IHRoaXMucmVuZGVyZWRDYWxsZXJzLmZpbHRlcihcbiAgICAgIChlbCkgPT4gZWwuY2FsbGVyICE9PSBjYWxsZXJcbiAgICApO1xuXG4gICAgaWYgKChjb25maWcgYXMgTGF1bmNoRGlhbG9nKT8uZGlhbG9nVHlwZSA9PT0gRElBTE9HX1RZUEUuRElBTE9HKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eSB7XG4gICAgcmV0dXJuIFByaW9yaXR5LkxPVzsgLy8gbG93LCBhcyBpdCdzIGEgZGVmYXVsdCBtYXRjaGVyXG4gIH1cbn1cbiJdfQ==