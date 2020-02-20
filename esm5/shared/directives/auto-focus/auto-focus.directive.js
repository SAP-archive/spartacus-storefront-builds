import { __decorate } from "tslib";
import { AfterViewInit, Directive, ElementRef } from '@angular/core';
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(hostElement) {
        this.hostElement = hostElement;
    }
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        this.hostElement.nativeElement.focus();
    };
    AutoFocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AutoFocusDirective = __decorate([
        Directive({
            selector: '[cxAutoFocus]',
        })
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());
export { AutoFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvZGlyZWN0aXZlcy9hdXRvLWZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLckU7SUFDRSw0QkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFBRyxDQUFDO0lBRS9DLDRDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztnQkFKZ0MsVUFBVTs7SUFEaEMsa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUM7T0FDVyxrQkFBa0IsQ0FNOUI7SUFBRCx5QkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hBdXRvRm9jdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=