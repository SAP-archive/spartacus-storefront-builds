/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class HighlightPipe {
    /**
     * @param {?} text
     * @param {?=} match
     * @return {?}
     */
    transform(text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), `<span class="highlight">${match.trim()}</span>`);
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{ name: 'cxHighlight' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvaGlnaGxpZ2h0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDeEIsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFjO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNqQixLQUFLLENBQUMsSUFBSSxFQUFFLEVBQ1osMkJBQTJCLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUNqRCxDQUFDO0lBQ0osQ0FBQzs7O1lBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hIaWdobGlnaHQnIH0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogc3RyaW5nLCBtYXRjaD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoXG4gICAgICBtYXRjaC50cmltKCksXG4gICAgICBgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj4ke21hdGNoLnRyaW0oKX08L3NwYW4+YFxuICAgICk7XG4gIH1cbn1cbiJdfQ==