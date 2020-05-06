import { __decorate, __param, __values } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, } from '@angular/core';
import { DIALOG_TYPE, } from '../config';
var LaunchRenderStrategy = /** @class */ (function () {
    function LaunchRenderStrategy(document, rendererFactory) {
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
    LaunchRenderStrategy.prototype.shouldRender = function (caller, config) {
        return (Boolean(config.component) &&
            (this.renderedCallers.some(function (el) { return el.caller === caller; })
                ? !!config.multi
                : true));
    };
    LaunchRenderStrategy.prototype.applyClasses = function (component, dialogType) {
        var e_1, _a;
        var classes = [];
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
        try {
            for (var classes_1 = __values(classes), classes_1_1 = classes_1.next(); !classes_1_1.done; classes_1_1 = classes_1.next()) {
                var newClass = classes_1_1.value;
                this.renderer.addClass(component.location.nativeElement, newClass);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (classes_1_1 && !classes_1_1.done && (_a = classes_1.return)) _a.call(classes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Method to call when rendered element is destroyed
     * The element will be removed from the list of rendered elements
     *
     * @param caller
     * @param _config optional parameters used in children strategies
     */
    LaunchRenderStrategy.prototype.remove = function (caller, config) {
        var _a;
        this.renderedCallers = this.renderedCallers.filter(function (el) { return el.caller !== caller; });
        if (((_a = config) === null || _a === void 0 ? void 0 : _a.dialogType) === DIALOG_TYPE.DIALOG) {
            this.renderer.removeClass(this.document.body, 'modal-open');
        }
    };
    LaunchRenderStrategy.prototype.getPriority = function () {
        return -10 /* LOW */; // low, as it's a default matcher
    };
    LaunchRenderStrategy = __decorate([
        __param(0, Inject(DOCUMENT))
    ], LaunchRenderStrategy);
    return LaunchRenderStrategy;
}());
export { LaunchRenderStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDTCxXQUFXLEdBSVosTUFBTSxXQUFXLENBQUM7QUFFbkI7SUEyQkUsOEJBQzhCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQTVCN0MsNkRBQTZEO1FBQ25ELG9CQUFlLEdBSXBCLEVBQUUsQ0FBQztRQUVSOztXQUVHO1FBQ08sa0JBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9EOztXQUVHO1FBQ08sbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDOUI7O1dBRUc7UUFDTyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDakM7O1dBRUc7UUFDTyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFRakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBb0JEOzs7OztPQUtHO0lBQ08sMkNBQVksR0FBdEIsVUFDRSxNQUE4QixFQUM5QixNQUFvQjtRQUVwQixPQUFPLENBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDekIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFwQixDQUFvQixDQUFDO2dCQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1YsQ0FBQztJQUNKLENBQUM7SUFFUywyQ0FBWSxHQUF0QixVQUNFLFNBQTRCLEVBQzVCLFVBQXVCOztRQUV2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsa0NBQWtDO1FBQ2xDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsV0FBVztnQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLGFBQWE7Z0JBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE1BQU07U0FDVDs7WUFFRCxLQUF1QixJQUFBLFlBQUEsU0FBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQTNCLElBQU0sUUFBUSxvQkFBQTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEU7Ozs7Ozs7OztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxxQ0FBTSxHQUFiLFVBQWMsTUFBOEIsRUFBRSxNQUFxQjs7UUFDakUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBcEIsQ0FBb0IsQ0FDN0IsQ0FBQztRQUVGLElBQUksT0FBQyxNQUF1QiwwQ0FBRSxVQUFVLE1BQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UscUJBQW9CLENBQUMsaUNBQWlDO0lBQ3hELENBQUM7SUFySG1CLG9CQUFvQjtRQTRCckMsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7T0E1QkMsb0JBQW9CLENBc0h6QztJQUFELDJCQUFDO0NBQUEsQUF0SEQsSUFzSEM7U0F0SHFCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYWJsZSwgUHJpb3JpdHkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRElBTE9HX1RZUEUsXG4gIExhdW5jaERpYWxvZyxcbiAgTGF1bmNoT3B0aW9ucyxcbiAgTEFVTkNIX0NBTExFUixcbn0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExhdW5jaFJlbmRlclN0cmF0ZWd5IGltcGxlbWVudHMgQXBwbGljYWJsZSB7XG4gIC8vIExpc3Qgb2YgY2FsbGVkIHJlZmVyZW5jZXM7IG9ubHkgdXNlZCBmb3IgcmVuZGVyZWQgZWxlbWVudHNcbiAgcHJvdGVjdGVkIHJlbmRlcmVkQ2FsbGVyczogQXJyYXk8e1xuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZztcbiAgICBlbGVtZW50PzogYW55O1xuICAgIGNvbXBvbmVudD86IENvbXBvbmVudFJlZjxhbnk+O1xuICB9PiA9IFtdO1xuXG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgRElBTE9HXG4gICAqL1xuICBwcm90ZWN0ZWQgZGlhbG9nQ2xhc3NlcyA9IFsnZC1ibG9jaycsICdmYWRlJywgJ21vZGFsJywgJ3Nob3cnXTtcbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBQT1BPVkVSXG4gICAqL1xuICBwcm90ZWN0ZWQgcG9wb3ZlckNsYXNzZXMgPSBbXTtcbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBTSURFQkFSX0VORFxuICAgKi9cbiAgcHJvdGVjdGVkIHNpZGViYXJFbmRDbGFzc2VzID0gW107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgU0lERUJBUl9TVEFSVFxuICAgKi9cbiAgcHJvdGVjdGVkIHNpZGViYXJTdGFydENsYXNzZXMgPSBbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIG1ldGhvZCB0byBpbXBsZW1lbnQgYmFzZWQgb24gdGhlIHN0cmF0ZWd5XG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgTGF1bmNoIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGFic3RyYWN0IHJlbmRlcihcbiAgICBjb25maWc6IExhdW5jaE9wdGlvbnMsXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIHZjcj86IFZpZXdDb250YWluZXJSZWZcbiAgKTogdm9pZCB8IE9ic2VydmFibGU8Q29tcG9uZW50UmVmPGFueT4+O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBzdHJhdGVneSBpcyB0aGUgcmlnaHQgb25lIGZvciB0aGUgcHJvdmlkZWQgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBhYnN0cmFjdCBoYXNNYXRjaChjb25maWc6IExhdW5jaE9wdGlvbnMpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIGVsZW1lbnQgc2hvdWxkIHJlbmRlclxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHByb3RlY3RlZCBzaG91bGRSZW5kZXIoXG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLFxuICAgIGNvbmZpZzogTGF1bmNoRGlhbG9nXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKGNvbmZpZy5jb21wb25lbnQpICYmXG4gICAgICAodGhpcy5yZW5kZXJlZENhbGxlcnMuc29tZSgoZWwpID0+IGVsLmNhbGxlciA9PT0gY2FsbGVyKVxuICAgICAgICA/ICEhY29uZmlnLm11bHRpXG4gICAgICAgIDogdHJ1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFwcGx5Q2xhc3NlcyhcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+LFxuICAgIGRpYWxvZ1R5cGU6IERJQUxPR19UWVBFXG4gICk6IHZvaWQge1xuICAgIGxldCBjbGFzc2VzID0gW107XG5cbiAgICAvLyBUT0RPOiBtYWtlIGNsYXNzZXMgY29uZmlndXJhYmxlXG4gICAgc3dpdGNoIChkaWFsb2dUeXBlKSB7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLkRJQUxPRzpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuZGlhbG9nQ2xhc3NlcztcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5QT1BPVkVSOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5wb3BvdmVyQ2xhc3NlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLlNJREVCQVJfRU5EOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5zaWRlYmFyRW5kQ2xhc3NlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLlNJREVCQVJfU1RBUlQ6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnNpZGViYXJTdGFydENsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbmV3Q2xhc3Mgb2YgY2xhc3Nlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCwgbmV3Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2FsbCB3aGVuIHJlbmRlcmVkIGVsZW1lbnQgaXMgZGVzdHJveWVkXG4gICAqIFRoZSBlbGVtZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IG9mIHJlbmRlcmVkIGVsZW1lbnRzXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXJcbiAgICogQHBhcmFtIF9jb25maWcgb3B0aW9uYWwgcGFyYW1ldGVycyB1c2VkIGluIGNoaWxkcmVuIHN0cmF0ZWdpZXNcbiAgICovXG4gIHB1YmxpYyByZW1vdmUoY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nLCBjb25maWc6IExhdW5jaE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVkQ2FsbGVycyA9IHRoaXMucmVuZGVyZWRDYWxsZXJzLmZpbHRlcihcbiAgICAgIChlbCkgPT4gZWwuY2FsbGVyICE9PSBjYWxsZXJcbiAgICApO1xuXG4gICAgaWYgKChjb25maWcgYXMgTGF1bmNoRGlhbG9nKT8uZGlhbG9nVHlwZSA9PT0gRElBTE9HX1RZUEUuRElBTE9HKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eSB7XG4gICAgcmV0dXJuIFByaW9yaXR5LkxPVzsgLy8gbG93LCBhcyBpdCdzIGEgZGVmYXVsdCBtYXRjaGVyXG4gIH1cbn1cbiJdfQ==