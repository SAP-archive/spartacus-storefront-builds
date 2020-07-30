import { __read, __spread, __values } from "tslib";
import { InjectFlags, } from '@angular/core';
var NOT_FOUND_SYMBOL = {};
/**
 * CombinedInjector is able to combine more than one injector together in a way
 * that main injector is supported by complementary injectors.
 *
 * Should be used as a parent injector for components, when we want to have access
 * to both providers from component hierarchical injectors and providers from any
 * number of additional injectors (lazy loaded modules for example).
 */
var CombinedInjector = /** @class */ (function () {
    /**
     * @param mainInjector Component hierarchical injector
     * @param complementaryInjectors Additional injector that will be taken into an account when resolving dependencies
     */
    function CombinedInjector(mainInjector, complementaryInjectors) {
        this.mainInjector = mainInjector;
        this.complementaryInjectors = complementaryInjectors;
    }
    CombinedInjector.prototype.get = function (token, notFoundValue, flags) {
        var e_1, _a;
        // tslint:disable-next-line:no-bitwise
        if (flags & InjectFlags.Self) {
            if (notFoundValue !== undefined) {
                return notFoundValue;
            }
            throw new Error("CombinedInjector should be used as a parent injector / doesn't support self dependencies");
        }
        try {
            for (var _b = __values(__spread([
                this.mainInjector
            ], this.complementaryInjectors)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var injector = _c.value;
                // First we are resolving providers provided at Self level in all injectors,
                // starting with main injector and going through complementary ones...
                var service = injector.get(token, NOT_FOUND_SYMBOL, InjectFlags.Self);
                if (service !== NOT_FOUND_SYMBOL) {
                    return service;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // ...and then fallback to main injector passing the flag
        return this.mainInjector.get(token, notFoundValue, flags);
    };
    return CombinedInjector;
}());
export { CombinedInjector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtaW5qZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvdXRpbHMvY29tYmluZWQtaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxXQUFXLEdBSVosTUFBTSxlQUFlLENBQUM7QUFFdkIsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFFNUI7Ozs7Ozs7R0FPRztBQUNIO0lBQ0U7OztPQUdHO0lBQ0gsMEJBQ1UsWUFBc0IsRUFDdEIsc0JBQWtDO1FBRGxDLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBWTtJQUN6QyxDQUFDO0lBUUosOEJBQUcsR0FBSCxVQUFJLEtBQUssRUFBRSxhQUFtQixFQUFFLEtBQW1COztRQUNqRCxzQ0FBc0M7UUFDdEMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYiwwRkFBMEYsQ0FDM0YsQ0FBQztTQUNIOztZQUVELEtBQXVCLElBQUEsS0FBQTtnQkFDckIsSUFBSSxDQUFDLFlBQVk7ZUFDZCxJQUFJLENBQUMsc0JBQXNCLEVBQy9CLGdCQUFBLDRCQUFFO2dCQUhFLElBQU0sUUFBUSxXQUFBO2dCQUlqQiw0RUFBNEU7Z0JBQzVFLHNFQUFzRTtnQkFDdEUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLE9BQU8sS0FBSyxnQkFBZ0IsRUFBRTtvQkFDaEMsT0FBTyxPQUFPLENBQUM7aUJBQ2hCO2FBQ0Y7Ozs7Ozs7OztRQUNELHlEQUF5RDtRQUN6RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFic3RyYWN0VHlwZSxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IE5PVF9GT1VORF9TWU1CT0wgPSB7fTtcblxuLyoqXG4gKiBDb21iaW5lZEluamVjdG9yIGlzIGFibGUgdG8gY29tYmluZSBtb3JlIHRoYW4gb25lIGluamVjdG9yIHRvZ2V0aGVyIGluIGEgd2F5XG4gKiB0aGF0IG1haW4gaW5qZWN0b3IgaXMgc3VwcG9ydGVkIGJ5IGNvbXBsZW1lbnRhcnkgaW5qZWN0b3JzLlxuICpcbiAqIFNob3VsZCBiZSB1c2VkIGFzIGEgcGFyZW50IGluamVjdG9yIGZvciBjb21wb25lbnRzLCB3aGVuIHdlIHdhbnQgdG8gaGF2ZSBhY2Nlc3NcbiAqIHRvIGJvdGggcHJvdmlkZXJzIGZyb20gY29tcG9uZW50IGhpZXJhcmNoaWNhbCBpbmplY3RvcnMgYW5kIHByb3ZpZGVycyBmcm9tIGFueVxuICogbnVtYmVyIG9mIGFkZGl0aW9uYWwgaW5qZWN0b3JzIChsYXp5IGxvYWRlZCBtb2R1bGVzIGZvciBleGFtcGxlKS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbWJpbmVkSW5qZWN0b3IgaW1wbGVtZW50cyBJbmplY3RvciB7XG4gIC8qKlxuICAgKiBAcGFyYW0gbWFpbkluamVjdG9yIENvbXBvbmVudCBoaWVyYXJjaGljYWwgaW5qZWN0b3JcbiAgICogQHBhcmFtIGNvbXBsZW1lbnRhcnlJbmplY3RvcnMgQWRkaXRpb25hbCBpbmplY3RvciB0aGF0IHdpbGwgYmUgdGFrZW4gaW50byBhbiBhY2NvdW50IHdoZW4gcmVzb2x2aW5nIGRlcGVuZGVuY2llc1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYWluSW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY29tcGxlbWVudGFyeUluamVjdG9yczogSW5qZWN0b3JbXVxuICApIHt9XG5cbiAgZ2V0PFQ+KFxuICAgIHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4gfCBBYnN0cmFjdFR5cGU8VD4sXG4gICAgbm90Rm91bmRWYWx1ZT86IFQsXG4gICAgZmxhZ3M/OiBJbmplY3RGbGFnc1xuICApOiBUO1xuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk6IGFueTtcbiAgZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlPzogYW55LCBmbGFncz86IEluamVjdEZsYWdzKTogYW55IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgIGlmIChmbGFncyAmIEluamVjdEZsYWdzLlNlbGYpIHtcbiAgICAgIGlmIChub3RGb3VuZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kVmFsdWU7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ29tYmluZWRJbmplY3RvciBzaG91bGQgYmUgdXNlZCBhcyBhIHBhcmVudCBpbmplY3RvciAvIGRvZXNuJ3Qgc3VwcG9ydCBzZWxmIGRlcGVuZGVuY2llc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaW5qZWN0b3Igb2YgW1xuICAgICAgdGhpcy5tYWluSW5qZWN0b3IsXG4gICAgICAuLi50aGlzLmNvbXBsZW1lbnRhcnlJbmplY3RvcnMsXG4gICAgXSkge1xuICAgICAgLy8gRmlyc3Qgd2UgYXJlIHJlc29sdmluZyBwcm92aWRlcnMgcHJvdmlkZWQgYXQgU2VsZiBsZXZlbCBpbiBhbGwgaW5qZWN0b3JzLFxuICAgICAgLy8gc3RhcnRpbmcgd2l0aCBtYWluIGluamVjdG9yIGFuZCBnb2luZyB0aHJvdWdoIGNvbXBsZW1lbnRhcnkgb25lcy4uLlxuICAgICAgY29uc3Qgc2VydmljZSA9IGluamVjdG9yLmdldCh0b2tlbiwgTk9UX0ZPVU5EX1NZTUJPTCwgSW5qZWN0RmxhZ3MuU2VsZik7XG4gICAgICBpZiAoc2VydmljZSAhPT0gTk9UX0ZPVU5EX1NZTUJPTCkge1xuICAgICAgICByZXR1cm4gc2VydmljZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gLi4uYW5kIHRoZW4gZmFsbGJhY2sgdG8gbWFpbiBpbmplY3RvciBwYXNzaW5nIHRoZSBmbGFnXG4gICAgcmV0dXJuIHRoaXMubWFpbkluamVjdG9yLmdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZSwgZmxhZ3MpO1xuICB9XG59XG4iXX0=