import { InjectFlags, } from '@angular/core';
const NOT_FOUND_SYMBOL = {};
/**
 * CombinedInjector is able to combine more than one injector together in a way
 * that main injector is supported by complementary injectors.
 *
 * Should be used as a parent injector for components, when we want to have access
 * to both providers from component hierarchical injectors and providers from any
 * number of additional injectors (lazy loaded modules for example).
 */
export class CombinedInjector {
    /**
     * @param mainInjector Component hierarchical injector
     * @param complementaryInjectors Additional injector that will be taken into an account when resolving dependencies
     */
    constructor(mainInjector, complementaryInjectors) {
        this.mainInjector = mainInjector;
        this.complementaryInjectors = complementaryInjectors;
    }
    get(token, notFoundValue, flags) {
        // tslint:disable-next-line:no-bitwise
        if (flags & InjectFlags.Self) {
            if (notFoundValue !== undefined) {
                return notFoundValue;
            }
            throw new Error("CombinedInjector should be used as a parent injector / doesn't support self dependencies");
        }
        for (const injector of [
            this.mainInjector,
            ...this.complementaryInjectors,
        ]) {
            // First we are resolving providers provided at Self level in all injectors,
            // starting with main injector and going through complementary ones...
            const service = injector.get(token, NOT_FOUND_SYMBOL, InjectFlags.Self);
            if (service !== NOT_FOUND_SYMBOL) {
                return service;
            }
        }
        // ...and then fallback to main injector passing the flag
        return this.mainInjector.get(token, notFoundValue, flags);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtaW5qZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvdXRpbHMvY29tYmluZWQtaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFdBQVcsR0FJWixNQUFNLGVBQWUsQ0FBQztBQUV2QixNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUU1Qjs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjs7O09BR0c7SUFDSCxZQUNVLFlBQXNCLEVBQ3RCLHNCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQVk7SUFDekMsQ0FBQztJQVFKLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBbUIsRUFBRSxLQUFtQjtRQUNqRCxzQ0FBc0M7UUFDdEMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYiwwRkFBMEYsQ0FDM0YsQ0FBQztTQUNIO1FBRUQsS0FBSyxNQUFNLFFBQVEsSUFBSTtZQUNyQixJQUFJLENBQUMsWUFBWTtZQUNqQixHQUFHLElBQUksQ0FBQyxzQkFBc0I7U0FDL0IsRUFBRTtZQUNELDRFQUE0RTtZQUM1RSxzRUFBc0U7WUFDdEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hFLElBQUksT0FBTyxLQUFLLGdCQUFnQixFQUFFO2dCQUNoQyxPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNGO1FBQ0QseURBQXlEO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBYnN0cmFjdFR5cGUsXG4gIEluamVjdEZsYWdzLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0b3IsXG4gIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBOT1RfRk9VTkRfU1lNQk9MID0ge307XG5cbi8qKlxuICogQ29tYmluZWRJbmplY3RvciBpcyBhYmxlIHRvIGNvbWJpbmUgbW9yZSB0aGFuIG9uZSBpbmplY3RvciB0b2dldGhlciBpbiBhIHdheVxuICogdGhhdCBtYWluIGluamVjdG9yIGlzIHN1cHBvcnRlZCBieSBjb21wbGVtZW50YXJ5IGluamVjdG9ycy5cbiAqXG4gKiBTaG91bGQgYmUgdXNlZCBhcyBhIHBhcmVudCBpbmplY3RvciBmb3IgY29tcG9uZW50cywgd2hlbiB3ZSB3YW50IHRvIGhhdmUgYWNjZXNzXG4gKiB0byBib3RoIHByb3ZpZGVycyBmcm9tIGNvbXBvbmVudCBoaWVyYXJjaGljYWwgaW5qZWN0b3JzIGFuZCBwcm92aWRlcnMgZnJvbSBhbnlcbiAqIG51bWJlciBvZiBhZGRpdGlvbmFsIGluamVjdG9ycyAobGF6eSBsb2FkZWQgbW9kdWxlcyBmb3IgZXhhbXBsZSkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21iaW5lZEluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICAvKipcbiAgICogQHBhcmFtIG1haW5JbmplY3RvciBDb21wb25lbnQgaGllcmFyY2hpY2FsIGluamVjdG9yXG4gICAqIEBwYXJhbSBjb21wbGVtZW50YXJ5SW5qZWN0b3JzIEFkZGl0aW9uYWwgaW5qZWN0b3IgdGhhdCB3aWxsIGJlIHRha2VuIGludG8gYW4gYWNjb3VudCB3aGVuIHJlc29sdmluZyBkZXBlbmRlbmNpZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFpbkluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNvbXBsZW1lbnRhcnlJbmplY3RvcnM6IEluamVjdG9yW11cbiAgKSB7fVxuXG4gIGdldDxUPihcbiAgICB0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LFxuICAgIG5vdEZvdW5kVmFsdWU/OiBULFxuICAgIGZsYWdzPzogSW5qZWN0RmxhZ3NcbiAgKTogVDtcbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnk7XG4gIGdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZT86IGFueSwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IGFueSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICBpZiAoZmxhZ3MgJiBJbmplY3RGbGFncy5TZWxmKSB7XG4gICAgICBpZiAobm90Rm91bmRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBub3RGb3VuZFZhbHVlO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvbWJpbmVkSW5qZWN0b3Igc2hvdWxkIGJlIHVzZWQgYXMgYSBwYXJlbnQgaW5qZWN0b3IgLyBkb2Vzbid0IHN1cHBvcnQgc2VsZiBkZXBlbmRlbmNpZXNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGluamVjdG9yIG9mIFtcbiAgICAgIHRoaXMubWFpbkluamVjdG9yLFxuICAgICAgLi4udGhpcy5jb21wbGVtZW50YXJ5SW5qZWN0b3JzLFxuICAgIF0pIHtcbiAgICAgIC8vIEZpcnN0IHdlIGFyZSByZXNvbHZpbmcgcHJvdmlkZXJzIHByb3ZpZGVkIGF0IFNlbGYgbGV2ZWwgaW4gYWxsIGluamVjdG9ycyxcbiAgICAgIC8vIHN0YXJ0aW5nIHdpdGggbWFpbiBpbmplY3RvciBhbmQgZ29pbmcgdGhyb3VnaCBjb21wbGVtZW50YXJ5IG9uZXMuLi5cbiAgICAgIGNvbnN0IHNlcnZpY2UgPSBpbmplY3Rvci5nZXQodG9rZW4sIE5PVF9GT1VORF9TWU1CT0wsIEluamVjdEZsYWdzLlNlbGYpO1xuICAgICAgaWYgKHNlcnZpY2UgIT09IE5PVF9GT1VORF9TWU1CT0wpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIC4uLmFuZCB0aGVuIGZhbGxiYWNrIHRvIG1haW4gaW5qZWN0b3IgcGFzc2luZyB0aGUgZmxhZ1xuICAgIHJldHVybiB0aGlzLm1haW5JbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGZsYWdzKTtcbiAgfVxufVxuIl19