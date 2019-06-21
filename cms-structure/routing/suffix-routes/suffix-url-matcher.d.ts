import { UrlSegment, UrlMatchResult, Route, UrlSegmentGroup } from '@angular/router';
export interface SuffixRoute extends Route {
    data: {
        cxSuffixUrlMatcher: {
            marker: string;
            paramName: string;
            precedingParamName?: string;
        };
    };
}
/**
 * Matches the pattern '[ ** / ] marker / :paramName [ / ** ]'
 *
 * @param marker phrase that indicates the start of the match
 * @param paramName name of the parameter present after the marker
 * @param precedingParamName name of the parameter for every preceding url segment
 *        i.e. `param` will result in `param0`, `param1`, ...
 */
export declare function suffixUrlMatcher(segments: UrlSegment[], _segmentGroup: UrlSegmentGroup, route: SuffixRoute): UrlMatchResult | null;
export declare function findLastIndex<T>(elements: T[], predicate: (el: T) => boolean): number;
