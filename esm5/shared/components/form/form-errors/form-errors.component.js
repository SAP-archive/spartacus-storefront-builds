import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding, } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
/**
 * This component renders form errors.
 */
var FormErrorsComponent = /** @class */ (function () {
    function FormErrorsComponent() {
    }
    Object.defineProperty(FormErrorsComponent.prototype, "control", {
        get: function () {
            return this._control;
        },
        set: function (control) {
            this._control = control;
            this.errors$ = control === null || control === void 0 ? void 0 : control.statusChanges.pipe(startWith({}), map(function () { return control.errors || {}; }), map(function (errors) {
                return Object.entries(errors)
                    .filter(function (error) { return error[1]; })
                    .map(function (error) { return error[0]; });
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormErrorsComponent.prototype, "invalid", {
        get: function () {
            return this.control.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormErrorsComponent.prototype, "dirty", {
        get: function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormErrorsComponent.prototype, "touched", {
        get: function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input()
    ], FormErrorsComponent.prototype, "control", null);
    __decorate([
        HostBinding('class.control-invalid')
    ], FormErrorsComponent.prototype, "invalid", null);
    __decorate([
        HostBinding('class.control-dirty')
    ], FormErrorsComponent.prototype, "dirty", null);
    __decorate([
        HostBinding('class.control-touched')
    ], FormErrorsComponent.prototype, "touched", null);
    FormErrorsComponent = __decorate([
        Component({
            selector: 'cx-form-errors',
            template: "<p *ngFor=\"let errorName of errors$ | async\">\n  {{ 'formErrors.' + errorName | cxTranslate }}\n</p>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormErrorsComponent);
    return FormErrorsComponent;
}());
export { FormErrorsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1lcnJvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvZm9ybS9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRDs7R0FFRztBQU1IO0lBQUE7SUFnQ0EsQ0FBQztJQTNCQyxzQkFBSSx3Q0FBTzthQWNYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFoQkQsVUFBWSxPQUFvQjtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxhQUFhLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxFQUMvQixHQUFHLENBQUMsVUFBQyxNQUFNO2dCQUNULE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7cUJBQ25CLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUM7cUJBQzNCLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUM7WUFGM0IsQ0FFMkIsQ0FDNUIsQ0FDRixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFNcUMsc0JBQUksd0NBQU87YUFBWDtZQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ21DLHNCQUFJLHNDQUFLO2FBQVQ7WUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNxQyxzQkFBSSx3Q0FBTzthQUFYO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUExQkQ7UUFEQyxLQUFLLEVBQUU7c0RBYVA7SUFNcUM7UUFBckMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO3NEQUVwQztJQUNtQztRQUFuQyxXQUFXLENBQUMscUJBQXFCLENBQUM7b0RBRWxDO0lBQ3FDO1FBQXJDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztzREFFcEM7SUEvQlUsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsb0hBQTJDO1lBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxtQkFBbUIsQ0FnQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGZvcm0gZXJyb3JzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb3JtLWVycm9ycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWVycm9ycy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JzQ29tcG9uZW50IHtcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xuICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBASW5wdXQoKVxuICBzZXQgY29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb250cm9sO1xuXG4gICAgdGhpcy5lcnJvcnMkID0gY29udHJvbD8uc3RhdHVzQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKHt9KSxcbiAgICAgIG1hcCgoKSA9PiBjb250cm9sLmVycm9ycyB8fCB7fSksXG4gICAgICBtYXAoKGVycm9ycykgPT5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZXJyb3JzKVxuICAgICAgICAgIC5maWx0ZXIoKGVycm9yKSA9PiBlcnJvclsxXSlcbiAgICAgICAgICAubWFwKChlcnJvcikgPT4gZXJyb3JbMF0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC1pbnZhbGlkJykgZ2V0IGludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5pbnZhbGlkO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC1kaXJ0eScpIGdldCBkaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbC10b3VjaGVkJykgZ2V0IHRvdWNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG59XG4iXX0=