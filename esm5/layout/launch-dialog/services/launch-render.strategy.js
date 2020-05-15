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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDTCxXQUFXLEdBSVosTUFBTSxXQUFXLENBQUM7QUFFbkI7SUEyQkUsOEJBQzhCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQTVCN0MsNkRBQTZEO1FBQ25ELG9CQUFlLEdBSXBCLEVBQUUsQ0FBQztRQUVSOztXQUVHO1FBQ08sa0JBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9EOztXQUVHO1FBQ08sbUJBQWMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQ7O1dBRUc7UUFDTyxzQkFBaUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQ7O1dBRUc7UUFDTyx3QkFBbUIsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFRbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBb0JEOzs7OztPQUtHO0lBQ08sMkNBQVksR0FBdEIsVUFDRSxNQUE4QixFQUM5QixNQUFvQjtRQUVwQixPQUFPLENBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDekIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFwQixDQUFvQixDQUFDO2dCQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1YsQ0FBQztJQUNKLENBQUM7SUFFUywyQ0FBWSxHQUF0QixVQUNFLFNBQTRCLEVBQzVCLFVBQXVCOztRQUV2QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsa0NBQWtDO1FBQ2xDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsV0FBVztnQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLGFBQWE7Z0JBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE1BQU07U0FDVDs7WUFFRCxLQUF1QixJQUFBLFlBQUEsU0FBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQTNCLElBQU0sUUFBUSxvQkFBQTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEU7Ozs7Ozs7OztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxxQ0FBTSxHQUFiLFVBQWMsTUFBOEIsRUFBRSxNQUFxQjs7UUFDakUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBcEIsQ0FBb0IsQ0FDN0IsQ0FBQztRQUVGLElBQUksT0FBQyxNQUF1QiwwQ0FBRSxVQUFVLE1BQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UscUJBQW9CLENBQUMsaUNBQWlDO0lBQ3hELENBQUM7SUFySG1CLG9CQUFvQjtRQTRCckMsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7T0E1QkMsb0JBQW9CLENBc0h6QztJQUFELDJCQUFDO0NBQUEsQUF0SEQsSUFzSEM7U0F0SHFCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwbGljYWJsZSwgUHJpb3JpdHkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRElBTE9HX1RZUEUsXG4gIExhdW5jaERpYWxvZyxcbiAgTGF1bmNoT3B0aW9ucyxcbiAgTEFVTkNIX0NBTExFUixcbn0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExhdW5jaFJlbmRlclN0cmF0ZWd5IGltcGxlbWVudHMgQXBwbGljYWJsZSB7XG4gIC8vIExpc3Qgb2YgY2FsbGVkIHJlZmVyZW5jZXM7IG9ubHkgdXNlZCBmb3IgcmVuZGVyZWQgZWxlbWVudHNcbiAgcHJvdGVjdGVkIHJlbmRlcmVkQ2FsbGVyczogQXJyYXk8e1xuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZztcbiAgICBlbGVtZW50PzogYW55O1xuICAgIGNvbXBvbmVudD86IENvbXBvbmVudFJlZjxhbnk+O1xuICB9PiA9IFtdO1xuXG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgRElBTE9HXG4gICAqL1xuICBwcm90ZWN0ZWQgZGlhbG9nQ2xhc3NlcyA9IFsnZC1ibG9jaycsICdmYWRlJywgJ21vZGFsJywgJ3Nob3cnXTtcbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBQT1BPVkVSXG4gICAqL1xuICBwcm90ZWN0ZWQgcG9wb3ZlckNsYXNzZXMgPSBbJ2N4LWRpYWxvZy1wb3BvdmVyJ107XG4gIC8qKlxuICAgKiBDbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd2hlbiB0aGUgZGlhbG9nIGlzIGEgU0lERUJBUl9FTkRcbiAgICovXG4gIHByb3RlY3RlZCBzaWRlYmFyRW5kQ2xhc3NlcyA9IFsnY3gtc2lkZWJhci1lbmQnXTtcbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBTSURFQkFSX1NUQVJUXG4gICAqL1xuICBwcm90ZWN0ZWQgc2lkZWJhclN0YXJ0Q2xhc3NlcyA9IFsnY3gtc2lkZWJhci1zdGFydCddO1xuXG4gIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbWV0aG9kIHRvIGltcGxlbWVudCBiYXNlZCBvbiB0aGUgc3RyYXRlZ3lcbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBMYXVuY2ggY29uZmlndXJhdGlvblxuICAgKi9cbiAgYWJzdHJhY3QgcmVuZGVyKFxuICAgIGNvbmZpZzogTGF1bmNoT3B0aW9ucyxcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsXG4gICAgdmNyPzogVmlld0NvbnRhaW5lclJlZlxuICApOiB2b2lkIHwgT2JzZXJ2YWJsZTxDb21wb25lbnRSZWY8YW55Pj47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIHN0cmF0ZWd5IGlzIHRoZSByaWdodCBvbmUgZm9yIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGFic3RyYWN0IGhhc01hdGNoKGNvbmZpZzogTGF1bmNoT3B0aW9ucyk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgZWxlbWVudCBzaG91bGQgcmVuZGVyXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsZXJcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHNob3VsZFJlbmRlcihcbiAgICBjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsXG4gICAgY29uZmlnOiBMYXVuY2hEaWFsb2dcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIEJvb2xlYW4oY29uZmlnLmNvbXBvbmVudCkgJiZcbiAgICAgICh0aGlzLnJlbmRlcmVkQ2FsbGVycy5zb21lKChlbCkgPT4gZWwuY2FsbGVyID09PSBjYWxsZXIpXG4gICAgICAgID8gISFjb25maWcubXVsdGlcbiAgICAgICAgOiB0cnVlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXBwbHlDbGFzc2VzKFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT4sXG4gICAgZGlhbG9nVHlwZTogRElBTE9HX1RZUEVcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNsYXNzZXMgPSBbXTtcblxuICAgIC8vIFRPRE86IG1ha2UgY2xhc3NlcyBjb25maWd1cmFibGVcbiAgICBzd2l0Y2ggKGRpYWxvZ1R5cGUpIHtcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuRElBTE9HOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5kaWFsb2dDbGFzc2VzO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQUxPR19UWVBFLlBPUE9WRVI6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnBvcG92ZXJDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuU0lERUJBUl9FTkQ6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLnNpZGViYXJFbmRDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuU0lERUJBUl9TVEFSVDpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuc2lkZWJhclN0YXJ0Q2xhc3NlcztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBuZXdDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBvbmVudC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LCBuZXdDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjYWxsIHdoZW4gcmVuZGVyZWQgZWxlbWVudCBpcyBkZXN0cm95ZWRcbiAgICogVGhlIGVsZW1lbnQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGxpc3Qgb2YgcmVuZGVyZWQgZWxlbWVudHNcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gX2NvbmZpZyBvcHRpb25hbCBwYXJhbWV0ZXJzIHVzZWQgaW4gY2hpbGRyZW4gc3RyYXRlZ2llc1xuICAgKi9cbiAgcHVibGljIHJlbW92ZShjYWxsZXI6IExBVU5DSF9DQUxMRVIgfCBzdHJpbmcsIGNvbmZpZzogTGF1bmNoT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZWRDYWxsZXJzID0gdGhpcy5yZW5kZXJlZENhbGxlcnMuZmlsdGVyKFxuICAgICAgKGVsKSA9PiBlbC5jYWxsZXIgIT09IGNhbGxlclxuICAgICk7XG5cbiAgICBpZiAoKGNvbmZpZyBhcyBMYXVuY2hEaWFsb2cpPy5kaWFsb2dUeXBlID09PSBESUFMT0dfVFlQRS5ESUFMT0cpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByaW9yaXR5KCk6IFByaW9yaXR5IHtcbiAgICByZXR1cm4gUHJpb3JpdHkuTE9XOyAvLyBsb3csIGFzIGl0J3MgYSBkZWZhdWx0IG1hdGNoZXJcbiAgfVxufVxuIl19