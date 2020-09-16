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
}
LaunchRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXJlbmRlci5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9sYXVuY2gtZGlhbG9nL3NlcnZpY2VzL2xhdW5jaC1yZW5kZXIuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxNQUFNLEVBRU4sZ0JBQWdCLEdBRWpCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFDTCxXQUFXLEdBSVosTUFBTSxXQUFXLENBQUM7QUFFbkIsTUFBTSxPQUFnQixvQkFBb0I7SUEyQnhDLFlBQzhCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQTVCN0MsNkRBQTZEO1FBQ25ELG9CQUFlLEdBSXBCLEVBQUUsQ0FBQztRQUVSOztXQUVHO1FBQ08sa0JBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9EOztXQUVHO1FBQ08sbUJBQWMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQ7O1dBRUc7UUFDTyxzQkFBaUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakQ7O1dBRUc7UUFDTyx3QkFBbUIsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFRbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBb0JEOzs7OztPQUtHO0lBQ08sWUFBWSxDQUNwQixNQUE4QixFQUM5QixNQUFvQjtRQUVwQixPQUFPLENBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDekIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDVixDQUFDO0lBQ0osQ0FBQztJQUVTLFlBQVksQ0FDcEIsU0FBNEIsRUFDNUIsVUFBdUI7UUFFdkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGtDQUFrQztRQUNsQyxRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07WUFDUixLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLFdBQVc7Z0JBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE1BQU07WUFDUixLQUFLLFdBQVcsQ0FBQyxhQUFhO2dCQUM1QixPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxNQUFNO1NBQ1Q7UUFFRCxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsTUFBOEIsRUFBRSxNQUFxQjs7UUFDakUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUM3QixDQUFDO1FBRUYsSUFBSSxPQUFDLE1BQXVCLDBDQUFFLFVBQVUsTUFBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxxQkFBb0IsQ0FBQyxpQ0FBaUM7SUFDeEQsQ0FBQzs7OzRDQXpGRSxNQUFNLFNBQUMsUUFBUTtZQXhDbEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBsaWNhYmxlLCBQcmlvcml0eSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBESUFMT0dfVFlQRSxcbiAgTGF1bmNoRGlhbG9nLFxuICBMYXVuY2hPcHRpb25zLFxuICBMQVVOQ0hfQ0FMTEVSLFxufSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF1bmNoUmVuZGVyU3RyYXRlZ3kgaW1wbGVtZW50cyBBcHBsaWNhYmxlIHtcbiAgLy8gTGlzdCBvZiBjYWxsZWQgcmVmZXJlbmNlczsgb25seSB1c2VkIGZvciByZW5kZXJlZCBlbGVtZW50c1xuICBwcm90ZWN0ZWQgcmVuZGVyZWRDYWxsZXJzOiBBcnJheTx7XG4gICAgY2FsbGVyOiBMQVVOQ0hfQ0FMTEVSIHwgc3RyaW5nO1xuICAgIGVsZW1lbnQ/OiBhbnk7XG4gICAgY29tcG9uZW50PzogQ29tcG9uZW50UmVmPGFueT47XG4gIH0+ID0gW107XG5cbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBESUFMT0dcbiAgICovXG4gIHByb3RlY3RlZCBkaWFsb2dDbGFzc2VzID0gWydkLWJsb2NrJywgJ2ZhZGUnLCAnbW9kYWwnLCAnc2hvdyddO1xuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIFBPUE9WRVJcbiAgICovXG4gIHByb3RlY3RlZCBwb3BvdmVyQ2xhc3NlcyA9IFsnY3gtZGlhbG9nLXBvcG92ZXInXTtcbiAgLyoqXG4gICAqIENsYXNzZXMgdG8gYXBwbHkgdG8gdGhlIGNvbXBvbmVudCB3aGVuIHRoZSBkaWFsb2cgaXMgYSBTSURFQkFSX0VORFxuICAgKi9cbiAgcHJvdGVjdGVkIHNpZGViYXJFbmRDbGFzc2VzID0gWydjeC1zaWRlYmFyLWVuZCddO1xuICAvKipcbiAgICogQ2xhc3NlcyB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdoZW4gdGhlIGRpYWxvZyBpcyBhIFNJREVCQVJfU1RBUlRcbiAgICovXG4gIHByb3RlY3RlZCBzaWRlYmFyU3RhcnRDbGFzc2VzID0gWydjeC1zaWRlYmFyLXN0YXJ0J107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBtZXRob2QgdG8gaW1wbGVtZW50IGJhc2VkIG9uIHRoZSBzdHJhdGVneVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIExhdW5jaCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBhYnN0cmFjdCByZW5kZXIoXG4gICAgY29uZmlnOiBMYXVuY2hPcHRpb25zLFxuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyxcbiAgICB2Y3I/OiBWaWV3Q29udGFpbmVyUmVmXG4gICk6IHZvaWQgfCBPYnNlcnZhYmxlPENvbXBvbmVudFJlZjxhbnk+PjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgc3RyYXRlZ3kgaXMgdGhlIHJpZ2h0IG9uZSBmb3IgdGhlIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgYWJzdHJhY3QgaGFzTWF0Y2goY29uZmlnOiBMYXVuY2hPcHRpb25zKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBlbGVtZW50IHNob3VsZCByZW5kZXJcbiAgICpcbiAgICogQHBhcmFtIGNhbGxlclxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBwcm90ZWN0ZWQgc2hvdWxkUmVuZGVyKFxuICAgIGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZyxcbiAgICBjb25maWc6IExhdW5jaERpYWxvZ1xuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbihjb25maWcuY29tcG9uZW50KSAmJlxuICAgICAgKHRoaXMucmVuZGVyZWRDYWxsZXJzLnNvbWUoKGVsKSA9PiBlbC5jYWxsZXIgPT09IGNhbGxlcilcbiAgICAgICAgPyAhIWNvbmZpZy5tdWx0aVxuICAgICAgICA6IHRydWUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhcHBseUNsYXNzZXMoXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PixcbiAgICBkaWFsb2dUeXBlOiBESUFMT0dfVFlQRVxuICApOiB2b2lkIHtcbiAgICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gICAgLy8gVE9ETzogbWFrZSBjbGFzc2VzIGNvbmZpZ3VyYWJsZVxuICAgIHN3aXRjaCAoZGlhbG9nVHlwZSkge1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5ESUFMT0c6XG4gICAgICAgIGNsYXNzZXMgPSB0aGlzLmRpYWxvZ0NsYXNzZXM7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnbW9kYWwtb3BlbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRElBTE9HX1RZUEUuUE9QT1ZFUjpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMucG9wb3ZlckNsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5TSURFQkFSX0VORDpcbiAgICAgICAgY2xhc3NlcyA9IHRoaXMuc2lkZWJhckVuZENsYXNzZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUFMT0dfVFlQRS5TSURFQkFSX1NUQVJUOlxuICAgICAgICBjbGFzc2VzID0gdGhpcy5zaWRlYmFyU3RhcnRDbGFzc2VzO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5ld0NsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsIG5ld0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNhbGwgd2hlbiByZW5kZXJlZCBlbGVtZW50IGlzIGRlc3Ryb3llZFxuICAgKiBUaGUgZWxlbWVudCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBvZiByZW5kZXJlZCBlbGVtZW50c1xuICAgKlxuICAgKiBAcGFyYW0gY2FsbGVyXG4gICAqIEBwYXJhbSBfY29uZmlnIG9wdGlvbmFsIHBhcmFtZXRlcnMgdXNlZCBpbiBjaGlsZHJlbiBzdHJhdGVnaWVzXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKGNhbGxlcjogTEFVTkNIX0NBTExFUiB8IHN0cmluZywgY29uZmlnOiBMYXVuY2hPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlZENhbGxlcnMgPSB0aGlzLnJlbmRlcmVkQ2FsbGVycy5maWx0ZXIoXG4gICAgICAoZWwpID0+IGVsLmNhbGxlciAhPT0gY2FsbGVyXG4gICAgKTtcblxuICAgIGlmICgoY29uZmlnIGFzIExhdW5jaERpYWxvZyk/LmRpYWxvZ1R5cGUgPT09IERJQUxPR19UWVBFLkRJQUxPRykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7IC8vIGxvdywgYXMgaXQncyBhIGRlZmF1bHQgbWF0Y2hlclxuICB9XG59XG4iXX0=