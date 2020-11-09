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
            `${this.i18nRoot}.${this.field}`);
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
    get i18nRoot() {
        var _a, _b;
        return (_b = (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b._i18nRoot;
    }
}
TableHeaderCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-table-header-cell',
                template: `{{ header || (localizedHeader | cxTranslate) }}`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TableHeaderCellComponent.ctorParameters = () => [
    { type: OutletContextData }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZGVyLWNlbGwvdGFibGUtaGVhZGVyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFZbEYsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUFzQixNQUFtRDtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUE2QztJQUFHLENBQUM7SUFFN0U7O09BRUc7SUFDSCxJQUFJLE1BQU07O1FBQ1IsSUFBSSxjQUFPLElBQUksQ0FBQyxZQUFZLDBDQUFFLEtBQUssQ0FBQSxLQUFLLFFBQVEsRUFBRTtZQUNoRCxPQUFlLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQUksZUFBZTs7UUFDakIsT0FBTyxDQUNMLE9BQUMsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxLQUFxQiwwQ0FBRSxPQUFPO1lBQ2xELEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBYyxZQUFZOztRQUN4Qix5QkFBTyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsUUFBUSwwQ0FBRSxLQUFLLDBDQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7SUFDNUQsQ0FBQztJQUVELElBQWMsS0FBSzs7UUFDakIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQWMsSUFBSTs7UUFDaEIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELElBQWMsUUFBUTs7UUFDcEIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxTQUFTLENBQUM7SUFDekMsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsaURBQWlEO2dCQUMzRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBWFEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0Q29udGV4dERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHtcbiAgVGFibGVGaWVsZE9wdGlvbnMsXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUhlYWRlck91dGxldENvbnRleHQsXG59IGZyb20gJy4uL3RhYmxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFibGUtaGVhZGVyLWNlbGwnLFxuICB0ZW1wbGF0ZTogYHt7IGhlYWRlciB8fCAobG9jYWxpemVkSGVhZGVyIHwgY3hUcmFuc2xhdGUpIH19YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyQ2VsbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvdXRsZXQ6IE91dGxldENvbnRleHREYXRhPFRhYmxlSGVhZGVyT3V0bGV0Q29udGV4dD4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXRpYyBsYWJlbCBmb3IgdGhlIGdpdmVuIGZpZWxkLCBpZiBhdmFpbGFibGUuXG4gICAqL1xuICBnZXQgaGVhZGVyKCk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkT3B0aW9ucz8ubGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gPHN0cmluZz50aGlzLmZpZWxkT3B0aW9ucy5sYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIGxhYmVsIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqXG4gICAqIFRoZSBsb2NhbGl6ZWQgbGFiZWwgaXMgZWl0aGVyIGRyaXZlbiBieSB0aGUgY29uZmlndXJlZCBgbGFiZWwuaTE4bktleWBcbiAgICogb3IgY29uY2F0ZW5hdGVkIGJ5IHRoZSB0YWJsZSBgdHlwZWAgYW5kIGZpZWxkIGBrZXlgOlxuICAgKlxuICAgKiBgW3RhYmxlVHlwZV0uW2ZpZWxkS2V5XWBcbiAgICpcbiAgICogVGhlIGxvY2FsaXplZCBoZWFkZXIgY2FuIGJlIHRyYW5zbGF0ZWQgd2l0aCB0aGUgYGN4VHJhbnNsYXRlYCBwaXBlIG9yIGBUcmFuc2xhdGlvblNlcnZpY2VgLlxuICAgKi9cbiAgZ2V0IGxvY2FsaXplZEhlYWRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5maWVsZE9wdGlvbnM/LmxhYmVsIGFzIFRhYmxlSGVhZGVyKT8uaTE4bktleSB8fFxuICAgICAgYCR7dGhpcy5pMThuUm9vdH0uJHt0aGlzLmZpZWxkfWBcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBmaWVsZE9wdGlvbnMoKTogVGFibGVGaWVsZE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLm91dGxldD8uY29udGV4dC5fb3B0aW9ucz8uY2VsbHM/Llt0aGlzLmZpZWxkXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmllbGQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXQ/LmNvbnRleHQ/Ll9maWVsZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm91dGxldD8uY29udGV4dD8uX3R5cGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGkxOG5Sb290KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3V0bGV0Py5jb250ZXh0Py5faTE4blJvb3Q7XG4gIH1cbn1cbiJdfQ==