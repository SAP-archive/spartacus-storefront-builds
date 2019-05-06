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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR25FO0lBQUE7SUFNeUMsQ0FBQzs7Z0JBTnpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxZQUFrRDtvQkFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7SUFDd0MsaUNBQUM7Q0FBQSxBQU4xQyxJQU0wQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QnhDO1NBOUJVLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEFic3RyYWN0UHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXByb2R1Y3QtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZWZlcmVuY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQge30gLypleHRlbmRzIEFic3RyYWN0UHJvZHVjdENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBwcm9kdWN0Q29kZTtcblxuICAgIHByb2R1Y3RDb2RlczogQXJyYXk8U3RyaW5nPiA9IFtdO1xuXG4gICAgcHJvdGVjdGVkIGZldGNoRGF0YSgpIHtcbiAgICAgICAgLy8gbG9hZCB0aGUgcHJvZHVjdCBkYXRhIGJ5IGNvbnRleHQgcGFyYW1ldGVyc1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0UGFyYW1ldGVycy5wcm9kdWN0Q29kZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TG9hZGVyLmxvYWRSZWZlcmVuY2VzKHRoaXMuY29udGV4dFBhcmFtZXRlcnMucHJvZHVjdENvZGUpO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TG9hZGVyLmdldFN1YnNjcmlwdGlvbih0aGlzLmNvbnRleHRQYXJhbWV0ZXJzLnByb2R1Y3RDb2RlICsgJ3JlZmVyZW5jZXMnKS5zdWJzY3JpYmUoKHJlZkRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVmRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvZGVMaXN0KHJlZkRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5mZXRjaERhdGEoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb2RlTGlzdChyZWZlcmVuY2VzKSB7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnQgfHwgIXRoaXMuY29tcG9uZW50LnByb2R1Y3RSZWZlcmVuY2VUeXBlcyB8fCAhcmVmZXJlbmNlc1t0aGlzLmNvbXBvbmVudC5wcm9kdWN0UmVmZXJlbmNlVHlwZXNdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVmZXJlbmNlc1t0aGlzLmNvbXBvbmVudC5wcm9kdWN0UmVmZXJlbmNlVHlwZXNdLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50Lm1heGltdW1OdW1iZXJQcm9kdWN0cyB8fCBpbmRleCA8IHRoaXMuY29tcG9uZW50Lm1heGltdW1OdW1iZXJQcm9kdWN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdENvZGVzLnB1c2goaXRlbS50YXJnZXQuY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0qL1xuIl19