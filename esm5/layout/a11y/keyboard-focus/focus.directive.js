import { __decorate, __extends } from "tslib";
import { Directive, Input } from '@angular/core';
import { LockFocusDirective } from './lock';
var FocusDirective = /** @class */ (function (_super) {
    __extends(FocusDirective, _super);
    function FocusDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:disable-next-line: no-input-rename
        _this.config = {};
        return _this;
    }
    __decorate([
        Input('cxFocus')
    ], FocusDirective.prototype, "config", void 0);
    FocusDirective = __decorate([
        Directive({
            selector: '[cxFocus]',
        })
    ], FocusDirective);
    return FocusDirective;
}(LockFocusDirective));
export { FocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFLNUM7SUFBb0Msa0NBQWtCO0lBQXREO1FBQUEscUVBR0M7UUFGQyw0Q0FBNEM7UUFDaEIsWUFBTSxHQUFnQixFQUFFLENBQUM7O0lBQ3ZELENBQUM7SUFEbUI7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQztrREFBb0M7SUFGMUMsY0FBYztRQUgxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztTQUN0QixDQUFDO09BQ1csY0FBYyxDQUcxQjtJQUFELHFCQUFDO0NBQUEsQUFIRCxDQUFvQyxrQkFBa0IsR0FHckQ7U0FIWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IExvY2tGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vbG9jayc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeEZvY3VzXScsXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgTG9ja0ZvY3VzRGlyZWN0aXZlIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdjeEZvY3VzJykgcHJvdGVjdGVkIGNvbmZpZzogRm9jdXNDb25maWcgPSB7fTtcbn1cbiJdfQ==