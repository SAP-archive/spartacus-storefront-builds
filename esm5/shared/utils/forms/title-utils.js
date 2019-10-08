/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var titleScores = {
    mr: 1,
    mrs: 2,
    miss: 3,
    ms: 4,
    dr: 5,
    rev: 6,
};
/**
 * @param {?} title1
 * @param {?} title2
 * @return {?}
 */
export function sortTitles(title1, title2) {
    if (!titleScores[title1.code] || !titleScores[title2.code]) {
        return 1;
    }
    else {
        return titleScores[title1.code] - titleScores[title2.code];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvdXRpbHMvZm9ybXMvdGl0bGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sV0FBVyxHQUFHO0lBQ3pCLEVBQUUsRUFBRSxDQUFDO0lBQ0wsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUUsQ0FBQztJQUNQLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxHQUFHLEVBQUUsQ0FBQztDQUNQOzs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMxRCxPQUFPLENBQUMsQ0FBQztLQUNWO1NBQU07UUFDTCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1RDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCB0aXRsZVNjb3JlcyA9IHtcbiAgbXI6IDEsXG4gIG1yczogMixcbiAgbWlzczogMyxcbiAgbXM6IDQsXG4gIGRyOiA1LFxuICByZXY6IDYsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc29ydFRpdGxlcyh0aXRsZTE6IFRpdGxlLCB0aXRsZTI6IFRpdGxlKSB7XG4gIGlmICghdGl0bGVTY29yZXNbdGl0bGUxLmNvZGVdIHx8ICF0aXRsZVNjb3Jlc1t0aXRsZTIuY29kZV0pIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGl0bGVTY29yZXNbdGl0bGUxLmNvZGVdIC0gdGl0bGVTY29yZXNbdGl0bGUyLmNvZGVdO1xuICB9XG59XG4iXX0=