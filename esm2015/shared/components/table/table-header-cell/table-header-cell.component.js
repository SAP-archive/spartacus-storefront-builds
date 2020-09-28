import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OutletContextData } from '../../../../cms-structure/outlet/outlet.model';
export class TableHeaderCellComponent {
    constructor(outlet) {
        this.outlet = outlet;
    }
    /**
     * Returns the static label for the given field, if available.
     */
    get header() {
        var _a;
        if (typeof ((_a = this.fieldOptions) === null || _a === void 0 ? void 0 : _a.label) === 'string') {
            return this.fieldOptions.label;
        }
    }
    /**
     * Returns the localized label for the given field.
     *
     * The localized label is either driven by the configured `label.i18nKey`
     * or concatenated by the table `type` and field `key`:
     *
     * `[tableType].[fieldKey]`
     *
     * The localized header can be translated with the `cxTranslate` pipe or `TranslationService`.
     */
    get localizedHeader() {
        var _a, _b;
        return (((_b = (_a = this.fieldOptions) === null || _a === void 0 ? void 0 : _a.label) === null || _b === void 0 ? void 0 : _b.i18nKey) ||
            `${this.type}.${this.field}`);
    }
    get fieldOptions() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.context._options) === null || _b === void 0 ? void 0 : _b.cells) === null || _c === void 0 ? void 0 : _c[this.field];
    }
    get field() {
        var _a, _b;
        return (_b = (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b._field;
    }
    get type() {
        var _a, _b;
        return (_b = (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b._type;
    }
}
TableHeaderCellComponent.decorators = [
    { type: Component, args: [{
                template: `{{ header || (localizedHeader | cxTranslate) }}`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TableHeaderCellComponent.ctorParameters = () => [
    { type: OutletContextData }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZGVyLWNlbGwvdGFibGUtaGVhZGVyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFXbEYsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUFzQixNQUFtRDtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUE2QztJQUFHLENBQUM7SUFFN0U7O09BRUc7SUFDSCxJQUFJLE1BQU07O1FBQ1IsSUFBSSxjQUFPLElBQUksQ0FBQyxZQUFZLDBDQUFFLEtBQUssQ0FBQSxLQUFLLFFBQVEsRUFBRTtZQUNoRCxPQUFlLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksZUFBZTs7UUFDakIsT0FBTyxDQUNMLE9BQUMsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxLQUFxQiwwQ0FBRSxPQUFPO1lBQ2xELEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBYyxZQUFZOztRQUN4Qix5QkFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsUUFBUSwwQ0FBRSxLQUFLLDBDQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7SUFDNUQsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQWMsSUFBSTs7UUFDaEIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxLQUFLLENBQUM7SUFDckMsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaURBQWlEO2dCQUMzRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBVlEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHtcbiAgVGFibGVGaWVsZE9wdGlvbnMsXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlck91dGxldENvbnRleHQsXG59IGZyb20gJy4uL3RhYmxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBge3sgaGVhZGVyIHx8IChsb2NhbGl6ZWRIZWFkZXIgfCBjeFRyYW5zbGF0ZSkgfX1gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDZWxsQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG91dGxldDogT3V0bGV0Q29udGV4dERhdGE8VGFibGVIZWFkZXJPdXRsZXRDb250ZXh0Pikge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc3RhdGljIGxhYmVsIGZvciB0aGUgZ2l2ZW4gZmllbGQsIGlmIGF2YWlsYWJsZS5cbiAgICovXG4gIGdldCBoZWFkZXIoKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRPcHRpb25zPy5sYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiA8c3RyaW5nPnRoaXMuZmllbGRPcHRpb25zLmxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhbGl6ZWQgbGFiZWwgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICpcbiAgICogVGhlIGxvY2FsaXplZCBsYWJlbCBpcyBlaXRoZXIgZHJpdmVuIGJ5IHRoZSBjb25maWd1cmVkIGBsYWJlbC5pMThuS2V5YFxuICAgKiBvciBjb25jYXRlbmF0ZWQgYnkgdGhlIHRhYmxlIGB0eXBlYCBhbmQgZmllbGQgYGtleWA6XG4gICAqXG4gICAqIGBbdGFibGVUeXBlXS5bZmllbGRLZXldYFxuICAgKlxuICAgKiBUaGUgbG9jYWxpemVkIGhlYWRlciBjYW4gYmUgdHJhbnNsYXRlZCB3aXRoIHRoZSBgY3hUcmFuc2xhdGVgIHBpcGUgb3IgYFRyYW5zbGF0aW9uU2VydmljZWAuXG4gICAqL1xuICBnZXQgbG9jYWxpemVkSGVhZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmZpZWxkT3B0aW9ucz8ubGFiZWwgYXMgVGFibGVIZWFkZXIpPy5pMThuS2V5IHx8XG4gICAgICBgJHt0aGlzLnR5cGV9LiR7dGhpcy5maWVsZH1gXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmllbGRPcHRpb25zKCk6IFRhYmxlRmllbGRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXQ/LmNvbnRleHQuX29wdGlvbnM/LmNlbGxzPy5bdGhpcy5maWVsZF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGZpZWxkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGV0Py5jb250ZXh0Py5fZmllbGQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXQ/LmNvbnRleHQ/Ll90eXBlO1xuICB9XG59XG4iXX0=