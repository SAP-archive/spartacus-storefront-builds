import { DOCUMENT } from '@angular/common';
import { Inject, RendererFactory2, } from '@angular/core';
import { DIALOG_TYPE, } from '../config';
export class LaunchRenderStrategy {
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
         * Classes to apply to the component when the dialog is a POPOVER_CENTER
         */
        this.popoverCenterClasses = ['cx-dialog-popover-center'];
        /**
         * Classes to apply to the component when the dialog is a POPOVER_CENTER with a backdrop
         */
        this.popoverCenterBackdropClasses = [
            'cx-dialog-popover-center-backdrop',
        ];
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
            case DIALOG_TYPE.POPOVER_CENTER:
                classes = this.popoverCenterClasses;
                break;
            case DIALOG_TYPE.POPOVER_CENTER_BACKDROP:
                classes = this.popoverCenterBackdropClasses;
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
}
LaunchRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxNQUFNLEVBRU4sZ0JBQWdCLEdBRWpCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDTCxXQUFXLEdBSVosTUFBTSxXQUFXLENBQUM7QUFFbkIsTUFBTSxPQUFnQixvQkFBb0I7SUFxQ3hDLFlBQzhCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQXRDN0MsNkRBQTZEO1FBQ25ELG9CQUFlLEdBSXBCLEVBQUUsQ0FBQztRQUVSOztXQUVHO1FBQ08sa0JBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9EOztXQUVHO1FBQ08sbUJBQWMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQ7O1dBRUc7UUFDTyx5QkFBb0IsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDOUQ7O1dBRUc7UUFDTyxpQ0FBNEIsR0FBRztZQUN2QyxtQ0FBbUM7U0FDcEMsQ0FBQztRQUNGOztXQUVHO1FBQ08sc0JBQWlCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pEOztXQUVHO1FBQ08sd0JBQW1CLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBUW5ELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQW9CRDs7Ozs7T0FLRztJQUNPLFlBQVksQ0FDcEIsTUFBOEIsRUFDOUIsTUFBb0I7UUFFcEIsT0FBTyxDQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3pCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO2dCQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1YsQ0FBQztJQUNKLENBQUM7SUFFUyxZQUFZLENBQ3BCLFNBQTRCLEVBQzVCLFVBQXVCO1FBRXZCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixrQ0FBa0M7UUFDbEMsUUFBUSxVQUFVLEVBQUU7WUFDbEIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLFdBQVcsQ0FBQyxjQUFjO2dCQUM3QixPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsdUJBQXVCO2dCQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsV0FBVztnQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLGFBQWE7Z0JBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE1BQU07U0FDVDtRQUVELEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxNQUE4QixFQUFFLE1BQXFCOztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUNoRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQzdCLENBQUM7UUFFRixJQUFJLE9BQUMsTUFBdUIsMENBQUUsVUFBVSxNQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULHFCQUFvQixDQUFDLGlDQUFpQztJQUN4RCxDQUFDOzs7NENBL0ZFLE1BQU0sU0FBQyxRQUFRO1lBbERsQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcGxpY2FibGUsIFByaW9yaXR5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIERJQUxPR19UWVBFLFxuICBMYXVuY2hEaWFsb2csXG4gIExhdW5jaE9wdGlvbnMsXG4gIExBVU5DSF9DQUxMRVIsXG59IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXVuY2hSZW5kZXJTdHJhdGVneSBpbXBsZW1lbnRzIEFwcGxpY2FibGUge1xuICAvLyBMaXN0IG9mIGNhbGxlZCByZWZlcmVuY2VzOyBvbmx5IHVzZWQgZm9yIHJlbmRlcmVkIGVsZW1lbnRzXG4gIHByb3RlY3RlZCByZW5kZXJlZENhbGxlcnM6IEFycmF5PHtcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmc7XG4gICAgZWxlbWVudD86IGFueTtcbiAgICBjb21wb25lbnQ/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgfT4gPSBbXTtcblxuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIERJQUxPR1xuICAgKi9cbiAgcHJvdGVjdGVkIGRpYWxvZ0NsYXNzZXMgPSBbJ2QtYmxvY2snLCAnZmFkZScsICdtb2RhbCcsICdzaG93J107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgUE9QT1ZFUlxuICAgKi9cbiAgcHJvdGVjdGVkIHBvcG92ZXJDbGFzc2VzID0gWydjeC1kaWFsb2ctcG9wb3ZlciddO1xuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIFBPUE9WRVJfQ0VOVEVSXG4gICAqL1xuICBwcm90ZWN0ZWQgcG9wb3ZlckNlbnRlckNsYXNzZXMgPSBbJ2N4LWRpYWxvZy1wb3BvdmVyLWNlbnRlciddO1xuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIFBPUE9WRVJfQ0VOVEVSIHdpdGggYSBiYWNrZHJvcFxuICAgKi9cbiAgcHJvdGVjdGVkIHBvcG92ZXJDZW50ZXJCYWNrZHJvcENsYXNzZXMgPSBbXG4gICAgJ2N4LWRpYWxvZy1wb3BvdmVyLWNlbnRlci1iYWNrZHJvcCcsXG4gIF07XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgU0lERUJBUl9FTkRcbiAgICovXG4gIHByb3RlY3RlZCBzaWRlYmFyRW5kQ2xhc3NlcyA9IFsnY3gtc2lkZWJhci1lbmQnXTtcbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBTSURFQkFSX1NUQVJUXG4gICAqL1xuICBwcm90ZWN0ZWQgc2lkZWJhclN0YXJ0Q2xhc3NlcyA9IFsnY3gtc2lkZWJhci1zdGFydCddO1xuXG4gIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbWV0aG9kIHRvIGltcGxlbWVudCBiYXNlZCBvbiB0aGUgc3RyYXRlZ3lcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBMYXVuY2ggY29uZmlndXJhdGlvblxuICAgKi9cbiAgYWJzdHJhY3QgcmVuZGVyKFxuICAgIGNvbmZpZzogTGF1bmNoT3B0aW9ucyxcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsXG4gICAgdmNyPzogVmlld0NvbnRhaW5lclJlZlxuICApOiB2b2lkIHwgT2JzZXJ2YWJsZTxDb21wb25lbnRSZWY8YW55Pj47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIHN0cmF0ZWd5IGlzIHRoZSByaWdodCBvbmUgZm9yIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGFic3RyYWN0IGhhc01hdGNoKGNvbmZpZzogTGF1bmNoT3B0aW9ucyk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgZWxlbWVudCBzaG91bGQgcmVuZGVyXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXJcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHNob3VsZFJlbmRlcihcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsXG4gICAgY29uZmlnOiBMYXVuY2hEaWFsb2dcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oY29uZmlnLmNvbXBvbmVudCkgJiZcbiAgICAgICh0aGlzLnJlbmRlcmVkQ2FsbGVycy5zb21lKChlbCkgPT4gZWwuY2FsbGVyID09PSBjYWxsZXIpXG4gICAgICAgID8gISFjb25maWcubXVsdGlcbiAgICAgICAgOiB0cnVlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXBwbHlDbGFzc2VzKFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT4sXG4gICAgZGlhbG9nVHlwZTogRElBTE9HX1RZUEVcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNsYXNzZXMgPSBbXTtcblxuICAgIC8vIFRPRE86IG1ha2UgY2xhc3NlcyBjb25maWd1cmFibGVcbiAgICBzd2l0Y2ggKGRpYWxvZ1R5cGUpIHtcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuRElBTE9HOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5kaWFsb2dDbGFzc2VzO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLlBPUE9WRVI6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnBvcG92ZXJDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuUE9QT1ZFUl9DRU5URVI6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnBvcG92ZXJDZW50ZXJDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuUE9QT1ZFUl9DRU5URVJfQkFDS0RST1A6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnBvcG92ZXJDZW50ZXJCYWNrZHJvcENsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5TSURFQkFSX0VORDpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuc2lkZWJhckVuZENsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5TSURFQkFSX1NUQVJUOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5zaWRlYmFyU3RhcnRDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5ld0NsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGwgd2hlbiByZW5kZXJlZCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgKiBUaGUgZWxlbWVudCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBvZiByZW5kZXJlZCBlbGVtZW50c1xuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSBfY29uZmlnIG9wdGlvbmFsIHBhcmFtZXRlcnMgdXNlZCBpbiBjaGlsZHJlbiBzdHJhdGVnaWVzXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZywgY29uZmlnOiBMYXVuY2hPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlZENhbGxlcnMgPSB0aGlzLnJlbmRlcmVkQ2FsbGVycy5maWx0ZXIoXG4gICAgICAoZWwpID0+IGVsLmNhbGxlciAhPT0gY2FsbGVyXG4gICAgKTtcblxuICAgIGlmICgoY29uZmlnIGFzIExhdW5jaERpYWxvZyk/LmRpYWxvZ1R5cGUgPT09IERJQUxPR19UWVBFLkRJQUxPRykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7IC8vIGxvdywgYXMgaXQncyBhIGRlZmF1bHQgbWF0Y2hlclxuICB9XG59XG4iXX0=