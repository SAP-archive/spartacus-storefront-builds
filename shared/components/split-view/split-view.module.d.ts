/**
 * The split-view component supports an unlimited number of nested views. Nested views are rendered
 * next to each other. The views can be rendered next to each other, but the max number of visible
 * views can be limisted as well. This is configurable in the CSS layer, so that the max number of views
 * per split-view can be different for each component.
 *
 * The basic structure of the split-view component is shown below:
 *
 *
 * ```
 * <cx-split-view>
 * </cx-split-view>
 * ```
 *
 * The UX pattern used for the split-view is driven by an initial view, which gets splitted into
 * more views as soon as the user starts interacting with the initial and subsequantial views.
 * The views can be driven by routes, which means that you can navigate through the splitted views
 * by using the browser history as well as share or bookmark splitted views.
 *
 * The UI is implemented in the style layer, with only a few generic style rules. Most of the split
 * view style is driven by CSS properties, so that alternative split-view styles can be introduced
 * per page or component.
 *
 * The max number of views per split-view on mobile is limited to 1 by default, where as on tablet
 * (and higher) it is set to 2. Spartacus has a pretty narrow layout, which is why 2 is maximum,
 * but customers could alter the layout to bring in more views in the same split-view at the time.
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './split/split-view.component';
import * as ɵngcc2 from './view/view.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/router';
export declare class SplitViewModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SplitViewModule, [typeof ɵngcc1.SplitViewComponent, typeof ɵngcc2.ViewComponent], [typeof ɵngcc3.CommonModule, typeof ɵngcc4.RouterModule], [typeof ɵngcc1.SplitViewComponent, typeof ɵngcc2.ViewComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SplitViewModule>;
}

//# sourceMappingURL=split-view.module.d.ts.map