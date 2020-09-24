import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
/**
 * Guard that can be used in split-view based child routes. This guard
 * delays the guard to be removed with 500ms, so that any css transition can be
 * finished before the DOM is destroyed.
 */
import * as ɵngcc0 from '@angular/core';
export declare class SplitViewDeactivateGuard implements CanDeactivate<boolean> {
    canDeactivate(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SplitViewDeactivateGuard, never>;
}

//# sourceMappingURL=split-view-deactivate.guard.d.ts.map