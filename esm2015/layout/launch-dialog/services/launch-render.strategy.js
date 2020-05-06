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
        this.popoverClasses = [];
        /**
         * Classes to apply to the component when the dialog is a SIDEBAR_END
         */
        this.sidebarEndClasses = [];
        /**
         * Classes to apply to the component when the dialog is a SIDEBAR_START
         */
        this.sidebarStartClasses = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDTCxXQUFXLEdBSVosTUFBTSxXQUFXLENBQUM7QUFFbkIsSUFBc0Isb0JBQW9CLEdBQTFDLE1BQXNCLG9CQUFvQjtJQTJCeEMsWUFDOEIsUUFBYSxFQUMvQixlQUFpQztRQURmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBNUI3Qyw2REFBNkQ7UUFDbkQsb0JBQWUsR0FJcEIsRUFBRSxDQUFDO1FBRVI7O1dBRUc7UUFDTyxrQkFBYSxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0Q7O1dBRUc7UUFDTyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUM5Qjs7V0FFRztRQUNPLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUNqQzs7V0FFRztRQUNPLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQVFqQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFvQkQ7Ozs7O09BS0c7SUFDTyxZQUFZLENBQ3BCLE1BQThCLEVBQzlCLE1BQW9CO1FBRXBCLE9BQU8sQ0FDTCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN6QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNWLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWSxDQUNwQixTQUE0QixFQUM1QixVQUF1QjtRQUV2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsa0NBQWtDO1FBQ2xDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsV0FBVztnQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLGFBQWE7Z0JBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE1BQU07U0FDVDtRQUVELEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxNQUE4QixFQUFFLE1BQXFCOztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQzdCLENBQUM7UUFFRixJQUFJLE9BQUMsTUFBdUIsMENBQUUsVUFBVSxNQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULHFCQUFvQixDQUFDLGlDQUFpQztJQUN4RCxDQUFDO0NBQ0YsQ0FBQTtBQXRIcUIsb0JBQW9CO0lBNEJyQyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQTVCQyxvQkFBb0IsQ0FzSHpDO1NBdEhxQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcGxpY2FibGUsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIERJQUxPR19UWVBFLFxuICBMYXVuY2hEaWFsb2csXG4gIExhdW5jaE9wdGlvbnMsXG4gIExBVU5DSF9DQUxMRVIsXG59IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXVuY2hSZW5kZXJTdHJhdGVneSBpbXBsZW1lbnRzIEFwcGxpY2FibGUge1xuICAvLyBMaXN0IG9mIGNhbGxlZCByZWZlcmVuY2VzOyBvbmx5IHVzZWQgZm9yIHJlbmRlcmVkIGVsZW1lbnRzXG4gIHByb3RlY3RlZCByZW5kZXJlZENhbGxlcnM6IEFycmF5PHtcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmc7XG4gICAgZWxlbWVudD86IGFueTtcbiAgICBjb21wb25lbnQ/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgfT4gPSBbXTtcblxuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIERJQUxPR1xuICAgKi9cbiAgcHJvdGVjdGVkIGRpYWxvZ0NsYXNzZXMgPSBbJ2QtYmxvY2snLCAnZmFkZScsICdtb2RhbCcsICdzaG93J107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgUE9QT1ZFUlxuICAgKi9cbiAgcHJvdGVjdGVkIHBvcG92ZXJDbGFzc2VzID0gW107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgU0lERUJBUl9FTkRcbiAgICovXG4gIHByb3RlY3RlZCBzaWRlYmFyRW5kQ2xhc3NlcyA9IFtdO1xuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIFNJREVCQVJfU1RBUlRcbiAgICovXG4gIHByb3RlY3RlZCBzaWRlYmFyU3RhcnRDbGFzc2VzID0gW107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBtZXRob2QgdG8gaW1wbGVtZW50IGJhc2VkIG9uIHRoZSBzdHJhdGVneVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIExhdW5jaCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBhYnN0cmFjdCByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hPcHRpb25zLFxuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyxcbiAgICB2Y3I/OiBWaWV3Q29udGFpbmVyUmVmXG4gICk6IHZvaWQgfCBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+PjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgc3RyYXRlZ3kgaXMgdGhlIHJpZ2h0IG9uZSBmb3IgdGhlIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgYWJzdHJhY3QgaGFzTWF0Y2goY29uZmlnOiBMYXVuY2hPcHRpb25zKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBlbGVtZW50IHNob3VsZCByZW5kZXJcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBwcm90ZWN0ZWQgc2hvdWxkUmVuZGVyKFxuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyxcbiAgICBjb25maWc6IExhdW5jaERpYWxvZ1xuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbihjb25maWcuY29tcG9uZW50KSAmJlxuICAgICAgKHRoaXMucmVuZGVyZWRDYWxsZXJzLnNvbWUoKGVsKSA9PiBlbC5jYWxsZXIgPT09IGNhbGxlcilcbiAgICAgICAgPyAhIWNvbmZpZy5tdWx0aVxuICAgICAgICA6IHRydWUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhcHBseUNsYXNzZXMoXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PixcbiAgICBkaWFsb2dUeXBlOiBESUFMT0dfVFlQRVxuICApOiB2b2lkIHtcbiAgICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gICAgLy8gVE9ETzogbWFrZSBjbGFzc2VzIGNvbmZpZ3VyYWJsZVxuICAgIHN3aXRjaCAoZGlhbG9nVHlwZSkge1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5ESUFMT0c6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLmRpYWxvZ0NsYXNzZXM7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuUE9QT1ZFUjpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMucG9wb3ZlckNsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5TSURFQkFSX0VORDpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuc2lkZWJhckVuZENsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5TSURFQkFSX1NUQVJUOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5zaWRlYmFyU3RhcnRDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5ld0NsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGwgd2hlbiByZW5kZXJlZCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgKiBUaGUgZWxlbWVudCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBvZiByZW5kZXJlZCBlbGVtZW50c1xuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSBfY29uZmlnIG9wdGlvbmFsIHBhcmFtZXRlcnMgdXNlZCBpbiBjaGlsZHJlbiBzdHJhdGVnaWVzXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZywgY29uZmlnOiBMYXVuY2hPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlZENhbGxlcnMgPSB0aGlzLnJlbmRlcmVkQ2FsbGVycy5maWx0ZXIoXG4gICAgICAoZWwpID0+IGVsLmNhbGxlciAhPT0gY2FsbGVyXG4gICAgKTtcblxuICAgIGlmICgoY29uZmlnIGFzIExhdW5jaERpYWxvZyk/LmRpYWxvZ1R5cGUgPT09IERJQUxPR19UWVBFLkRJQUxPRykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7IC8vIGxvdywgYXMgaXQncyBhIGRlZmF1bHQgbWF0Y2hlclxuICB9XG59XG4iXX0=