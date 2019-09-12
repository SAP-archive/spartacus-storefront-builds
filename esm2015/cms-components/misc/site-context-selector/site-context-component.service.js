/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Optional } from '@angular/core';
import { ContextServiceMap, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
/** @type {?} */
const LABELS = {
    [LANGUAGE_CONTEXT_ID]: 'Language',
    [CURRENCY_CONTEXT_ID]: 'Currency',
};
export class SiteContextComponentService {
    /**
     * @param {?} componentData
     * @param {?} contextServiceMap
     * @param {?} injector
     */
    constructor(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getItems(context) {
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        (service) => service.getAll())), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => this.getContext(context).pipe(switchMap((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => {
            /** @type {?} */
            const itemsCopy = [];
            for (const item of items) {
                itemsCopy.push(Object.assign({}, item, { label: this.getOptionLabel(item, ctx) }));
            }
            return of(itemsCopy);
        }))))));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getActiveItem(context) {
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        (service) => service.getActive())));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getLabel(context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => {
            return LABELS[ctx];
        })));
    }
    /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe((/**
         * @param {?} service
         * @return {?}
         */
        service => {
            service.setActive(value);
        }));
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getService(context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        (ctx) => this.getInjectedService(ctx))), filter((/**
         * @param {?} s
         * @return {?}
         */
        s => !!s)));
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getContext(context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => data.context)), map((/**
             * @param {?} ctx
             * @return {?}
             */
            ctx => {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            })));
        }
    }
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    getInjectedService(context) {
        return this.injector.get(this.contextServiceMap[context], null);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    getOptionLabel(item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
            default:
                return item.isocode;
        }
    }
}
SiteContextComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ContextServiceMap },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SiteContextComponentService.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    SiteContextComponentService.prototype.contextServiceMap;
    /**
     * @type {?}
     * @protected
     */
    SiteContextComponentService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBRXBCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O01BR2xGLE1BQU0sR0FBRztJQUNiLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0lBQ2pDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0NBQ2xDO0FBR0QsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBQ3RDLFlBRVksYUFBZ0UsRUFDbEUsaUJBQW9DLEVBQ2xDLFFBQWtCO1FBRmxCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNsRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQzs7Ozs7SUFFSixRQUFRLENBQUMsT0FBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsU0FBUzs7OztRQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFB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bUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxtQkFBbUI7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMxQztnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUFoR0YsVUFBVTs7OztZQVJGLGdCQUFnQix1QkFXcEIsUUFBUTtZQWxCWCxpQkFBaUI7WUFIRSxRQUFROzs7Ozs7O0lBcUJ6QixvREFDMEU7Ozs7O0lBQzFFLHdEQUE0Qzs7Ozs7SUFDNUMsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LFxuICBDb250ZXh0U2VydmljZU1hcCxcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbiAgU2l0ZUNvbnRleHQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VHlwZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0Lm1vZGVsJztcblxuY29uc3QgTEFCRUxTID0ge1xuICBbTEFOR1VBR0VfQ09OVEVYVF9JRF06ICdMYW5ndWFnZScsXG4gIFtDVVJSRU5DWV9DT05URVhUX0lEXTogJ0N1cnJlbmN5Jyxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2VNYXA6IENvbnRleHRTZXJ2aWNlTWFwLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGdldEl0ZW1zKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBbGwoKSksXG4gICAgICBzd2l0Y2hNYXAoaXRlbXMgPT5cbiAgICAgICAgdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGN0eCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc0NvcHkgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICBpdGVtc0NvcHkucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbChpdGVtLCBjdHgpLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihpdGVtc0NvcHkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWN0aXZlSXRlbShjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWN0aXZlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldExhYmVsKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgIG1hcChjdHggPT4ge1xuICAgICAgICByZXR1cm4gTEFCRUxTW2N0eF07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXRBY3RpdmUodmFsdWU6IHN0cmluZywgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoc2VydmljZSA9PiB7XG4gICAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlcnZpY2UoXG4gICAgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZVxuICApOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoKGN0eDogc3RyaW5nKSA9PiB0aGlzLmdldEluamVjdGVkU2VydmljZShjdHgpKSxcbiAgICAgIGZpbHRlcihzID0+ICEhcylcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbnRleHQoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBvZihjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBkYXRhLmNvbnRleHQpLFxuICAgICAgICBtYXAoY3R4ID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGN0eCkge1xuICAgICAgICAgICAgY2FzZSAnTEFOR1VBR0UnOlxuICAgICAgICAgICAgICByZXR1cm4gTEFOR1VBR0VfQ09OVEVYVF9JRDtcbiAgICAgICAgICAgIGNhc2UgJ0NVUlJFTkNZJzpcbiAgICAgICAgICAgICAgcmV0dXJuIENVUlJFTkNZX0NPTlRFWFRfSUQ7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEluamVjdGVkU2VydmljZShjb250ZXh0OiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4oXG4gICAgICB0aGlzLmNvbnRleHRTZXJ2aWNlTWFwW2NvbnRleHRdLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgTEFOR1VBR0VfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmF0aXZlTmFtZTtcbiAgICAgIGNhc2UgQ1VSUkVOQ1lfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3ltYm9sICsgJyAnICsgaXRlbS5pc29jb2RlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNvY29kZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==