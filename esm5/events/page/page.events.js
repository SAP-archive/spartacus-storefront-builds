import { __extends } from "tslib";
/**
 * Indicates that a user visited an arbitrary page.
 */
var PageEvent = /** @class */ (function () {
    function PageEvent() {
    }
    return PageEvent;
}());
export { PageEvent };
/**
 * Indicates that a user visited the home page.
 */
var HomePageEvent = /** @class */ (function (_super) {
    __extends(HomePageEvent, _super);
    function HomePageEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HomePageEvent;
}(PageEvent));
export { HomePageEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5ldmVudHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJldmVudHMvcGFnZS9wYWdlLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7O0dBRUc7QUFDSDtJQUFBO0lBS0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7O0dBRUc7QUFDSDtJQUFtQyxpQ0FBUztJQUE1Qzs7SUFBOEMsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUEvQyxDQUFtQyxTQUFTLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgdXNlciB2aXNpdGVkIGFuIGFyYml0cmFyeSBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgUGFnZUV2ZW50IHtcbiAgY29udGV4dDogUGFnZUNvbnRleHQ7XG4gIHNlbWFudGljUm91dGU/OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBwYXJhbXM6IFBhcmFtcztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIHVzZXIgdmlzaXRlZCB0aGUgaG9tZSBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VFdmVudCBleHRlbmRzIFBhZ2VFdmVudCB7fVxuIl19