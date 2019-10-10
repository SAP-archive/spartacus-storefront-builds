/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
var JsonLdDirective = /** @class */ (function () {
    function JsonLdDirective(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(JsonLdDirective.prototype, "cxJsonLd", {
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this.writeJsonLd(schema);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    JsonLdDirective.prototype.writeJsonLd = /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            /** @type {?} */
            var html = "<script type=\"application/ld+json\">" + JSON.stringify(schema) + "</script>";
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    };
    JsonLdDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxJsonLd]',
                },] }
    ];
    /** @nocollapse */
    JsonLdDirective.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: DomSanitizer }
    ]; };
    JsonLdDirective.propDecorators = {
        cxJsonLd: [{ type: Input }],
        jsonLD: [{ type: HostBinding, args: ['innerHTML',] }]
    };
    return JsonLdDirective;
}());
export { JsonLdDirective };
if (false) {
    /** @type {?} */
    JsonLdDirective.prototype.jsonLD;
    /**
     * @type {?}
     * @protected
     */
    JsonLdDirective.prototype.jsonLdScriptFactory;
    /**
     * @type {?}
     * @protected
     */
    JsonLdDirective.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU8vRDtJQVVFLHlCQUNZLG1CQUF3QyxFQUN4QyxTQUF1QjtRQUR2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDaEMsQ0FBQztJQVRKLHNCQUFhLHFDQUFROzs7OztRQUFyQixVQUFzQixNQUF1QjtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7Ozs7SUFTTyxxQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsTUFBVTtRQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTs7Z0JBQ25ELElBQUksR0FBRywwQ0FBc0MsSUFBSSxDQUFDLFNBQVMsQ0FDL0QsTUFBTSxDQUNQLGNBQVc7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFUUSxtQkFBbUI7Z0JBRG5CLFlBQVk7OzsyQkFZbEIsS0FBSzt5QkFJTCxXQUFXLFNBQUMsV0FBVzs7SUFlMUIsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXBCWSxlQUFlOzs7SUFLMUIsaUNBQTJDOzs7OztJQUd6Qyw4Q0FBa0Q7Ozs7O0lBQ2xELG9DQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBKc29uTGRTY3JpcHRGYWN0b3J5IH0gZnJvbSAnLi9qc29uLWxkLXNjcmlwdC5mYWN0b3J5JztcblxuLyoqXG4gKiBMb3cgbGV2ZWwgZGlyZWN0aXZlIHRoYXQgYWRkcyBhIGpzb24tbGQgc2NyaXB0IHRhZyB0byB0aGUgY29tcG9uZW50LlxuICogVGhpcyBjb2RlIGJ5cGFzc2VzIHRoZSBzdHJpY3QgWFNTIHNlY3VyaXR5LCBhcyBvdGhlcndpc2Ugd2UncmUgbm90IGFibGVcbiAqIHRvIGFwcGVuZCBhIHNjcmlwdCB0YWcgd2l0aCBKUyBpbnNpZGUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeEpzb25MZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uTGREaXJlY3RpdmUge1xuICBASW5wdXQoKSBzZXQgY3hKc29uTGQoc2NoZW1hOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLndyaXRlSnNvbkxkKHNjaGVtYSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpIGpzb25MRDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGpzb25MZFNjcmlwdEZhY3Rvcnk6IEpzb25MZFNjcmlwdEZhY3RvcnksXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBwcml2YXRlIHdyaXRlSnNvbkxkKHNjaGVtYToge30pIHtcbiAgICBpZiAoc2NoZW1hICYmIHRoaXMuanNvbkxkU2NyaXB0RmFjdG9yeS5pc0pzb25MZFJlcXVpcmVkKCkpIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIHNjaGVtYVxuICAgICAgKX08L3NjcmlwdD5gO1xuICAgICAgdGhpcy5qc29uTEQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==