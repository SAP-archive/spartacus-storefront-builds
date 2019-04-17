/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { AbstractProductComponent } from '../abstract-product-component';
export class ProductReferencesComponent {
} /*extends AbstractProductComponent {

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
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL3Byb2R1Y3QtcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVNuRSxNQUFNLE9BQU8sMEJBQTBCO0VBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCeEM7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxZQUFrRDtnQkFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQWJzdHJhY3RQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtcHJvZHVjdC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJlZmVyZW5jZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCB7fSAvKmV4dGVuZHMgQWJzdHJhY3RQcm9kdWN0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIHByb2R1Y3RDb2RlO1xuXG4gICAgcHJvZHVjdENvZGVzOiBBcnJheTxTdHJpbmc+ID0gW107XG5cbiAgICBwcm90ZWN0ZWQgZmV0Y2hEYXRhKCkge1xuICAgICAgICAvLyBsb2FkIHRoZSBwcm9kdWN0IGRhdGEgYnkgY29udGV4dCBwYXJhbWV0ZXJzXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRQYXJhbWV0ZXJzLnByb2R1Y3RDb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMb2FkZXIubG9hZFJlZmVyZW5jZXModGhpcy5jb250ZXh0UGFyYW1ldGVycy5wcm9kdWN0Q29kZSk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMb2FkZXIuZ2V0U3Vic2NyaXB0aW9uKHRoaXMuY29udGV4dFBhcmFtZXRlcnMucHJvZHVjdENvZGUgKyAncmVmZXJlbmNlcycpLnN1YnNjcmliZSgocmVmRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWZEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29kZUxpc3QocmVmRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmZldGNoRGF0YSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvZGVMaXN0KHJlZmVyZW5jZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudCB8fCAhdGhpcy5jb21wb25lbnQucHJvZHVjdFJlZmVyZW5jZVR5cGVzIHx8ICFyZWZlcmVuY2VzW3RoaXMuY29tcG9uZW50LnByb2R1Y3RSZWZlcmVuY2VUeXBlc10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWZlcmVuY2VzW3RoaXMuY29tcG9uZW50LnByb2R1Y3RSZWZlcmVuY2VUeXBlc10uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnQubWF4aW11bU51bWJlclByb2R1Y3RzIHx8IGluZGV4IDwgdGhpcy5jb21wb25lbnQubWF4aW11bU51bWJlclByb2R1Y3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0Q29kZXMucHVzaChpdGVtLnRhcmdldC5jb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSovXG4iXX0=