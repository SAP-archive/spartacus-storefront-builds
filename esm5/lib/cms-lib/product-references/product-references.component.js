/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { AbstractProductComponent } from '../abstract-product-component';
var ProductReferencesComponent = /** @class */ (function () {
    function ProductReferencesComponent() {
    }
    ProductReferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-references',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    return ProductReferencesComponent;
}()); /*extends AbstractProductComponent {

    @Input() productCode;

    productCodes: Array<String> = [];

    protected fetchData() {
        // load the product data by context parameters
        if (this.contextParameters.productCode) {
            this.productLoader.loadReferences(this.contextParameters.productCode);
            this.productLoader.getSubscription(this.contextParameters.productCode + 'references').subscribe((refData) => {
                if (refData) {
                    this.createCodeList(refData);
                    this.cd.detectChanges();
                }
            });
        }
        super.fetchData();
    }

    createCodeList(references) {
        if (!this.component || !this.component.productReferenceTypes || !references[this.component.productReferenceTypes]) {
            return;
        }
        references[this.component.productReferenceTypes].forEach((item, index) => {
            if (!this.component.maximumNumberProducts || index < this.component.maximumNumberProducts) {
                this.productCodes.push(item.target.code);
            }
        });
    }
}*/
export { ProductReferencesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3Byb2R1Y3QtcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUduRTtJQUFBO0lBTXlDLENBQUM7O2dCQU56QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsWUFBa0Q7b0JBRWxELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7O0lBQ3dDLGlDQUFDO0NBQUEsQUFOMUMsSUFNMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJ4QztTQTlCVSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBBYnN0cmFjdFByb2R1Y3RDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1wcm9kdWN0LWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmVmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IHt9IC8qZXh0ZW5kcyBBYnN0cmFjdFByb2R1Y3RDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgcHJvZHVjdENvZGU7XG5cbiAgICBwcm9kdWN0Q29kZXM6IEFycmF5PFN0cmluZz4gPSBbXTtcblxuICAgIHByb3RlY3RlZCBmZXRjaERhdGEoKSB7XG4gICAgICAgIC8vIGxvYWQgdGhlIHByb2R1Y3QgZGF0YSBieSBjb250ZXh0IHBhcmFtZXRlcnNcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dFBhcmFtZXRlcnMucHJvZHVjdENvZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExvYWRlci5sb2FkUmVmZXJlbmNlcyh0aGlzLmNvbnRleHRQYXJhbWV0ZXJzLnByb2R1Y3RDb2RlKTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExvYWRlci5nZXRTdWJzY3JpcHRpb24odGhpcy5jb250ZXh0UGFyYW1ldGVycy5wcm9kdWN0Q29kZSArICdyZWZlcmVuY2VzJykuc3Vic2NyaWJlKChyZWZEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2RlTGlzdChyZWZEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZmV0Y2hEYXRhKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29kZUxpc3QocmVmZXJlbmNlcykge1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50IHx8ICF0aGlzLmNvbXBvbmVudC5wcm9kdWN0UmVmZXJlbmNlVHlwZXMgfHwgIXJlZmVyZW5jZXNbdGhpcy5jb21wb25lbnQucHJvZHVjdFJlZmVyZW5jZVR5cGVzXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlZmVyZW5jZXNbdGhpcy5jb21wb25lbnQucHJvZHVjdFJlZmVyZW5jZVR5cGVzXS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudC5tYXhpbXVtTnVtYmVyUHJvZHVjdHMgfHwgaW5kZXggPCB0aGlzLmNvbXBvbmVudC5tYXhpbXVtTnVtYmVyUHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RDb2Rlcy5wdXNoKGl0ZW0udGFyZ2V0LmNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Ki9cbiJdfQ==