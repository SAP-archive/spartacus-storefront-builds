/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { BehaviorSubject, fromEvent, of } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { QualtricsConfig } from './config/qualtrics-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./config/qualtrics-config";
export class QualtricsLoaderService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.qualtricsLoaded$ = new BehaviorSubject(false);
        if (Boolean(this.winRef.nativeWindow) &&
            Boolean(this.winRef.document) &&
            this.isQualtricsConfigured()) {
            this.initialize();
            this.setup();
        }
    }
    /**
     * @private
     * @return {?}
     */
    initialize() {
        fromEvent(this.winRef.nativeWindow, 'qsi_js_loaded').subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.qualtricsLoaded$.next(true)));
    }
    /**
     * @private
     * @return {?}
     */
    setup() {
        /** @type {?} */
        const qualtricsScript = this.winRef.document.createElement('script');
        qualtricsScript.type = 'text/javascript';
        qualtricsScript.defer = true;
        qualtricsScript.src = 'assets/qualtricsIntegration.js';
        /** @type {?} */
        const idScript = this.winRef.document.createElement('div');
        idScript.id = this.config.qualtrics.projectId;
        this.winRef.document
            .getElementsByTagName('head')[0]
            .appendChild(qualtricsScript);
        this.winRef.document.getElementsByTagName('head')[0].appendChild(idScript);
    }
    /**
     * @private
     * @return {?}
     */
    isQualtricsConfigured() {
        return (Boolean(this.config.qualtrics) && Boolean(this.config.qualtrics.projectId));
    }
    /**
     * @return {?}
     */
    load() {
        return this.qualtricsLoaded$.pipe(filter((/**
         * @param {?} loaded
         * @return {?}
         */
        loaded => loaded)), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            /** @type {?} */
            const qsi = this.winRef.nativeWindow['QSI'];
            return this.isDataLoaded().pipe(distinctUntilChanged(), tap((/**
             * @param {?} dataLoaded
             * @return {?}
             */
            dataLoaded => {
                if (dataLoaded) {
                    qsi.API.unload();
                    qsi.API.load().done(qsi.API.run());
                }
            })));
        })));
    }
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     * @protected
     * @return {?}
     */
    isDataLoaded() {
        return of(true);
    }
}
QualtricsLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
QualtricsLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: QualtricsConfig }
];
/** @nocollapse */ QualtricsLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.QualtricsConfig)); }, token: QualtricsLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    QualtricsLoaderService.prototype.qualtricsLoaded$;
    /**
     * @type {?}
     * @private
     */
    QualtricsLoaderService.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    QualtricsLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9xdWFsdHJpY3MvcXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBSzVELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBR2pDLFlBQW9CLE1BQWlCLEVBQVUsTUFBdUI7UUFBbEQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRjlELHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRzdELElBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDNUI7WUFDQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVPLFVBQVU7UUFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNqQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxLQUFLOztjQUNMLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3BFLGVBQWUsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDekMsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDN0IsZUFBZSxDQUFDLEdBQUcsR0FBRyxnQ0FBZ0MsQ0FBQzs7Y0FFakQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDMUQsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO2FBQ2pCLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQixXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRU8scUJBQXFCO1FBQzNCLE9BQU8sQ0FDTCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDL0IsTUFBTTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFDLEVBQ3hCLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ04sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzdCLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7WUFBQyxVQUFVLENBQUMsRUFBRTtnQkFDZixJQUFJLFVBQVUsRUFBRTtvQkFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQU9TLFlBQVk7UUFDcEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7O1lBdEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFNBQVM7WUFHVCxlQUFlOzs7Ozs7OztJQU10QixrREFBK0Q7Ozs7O0lBRW5ELHdDQUF5Qjs7Ozs7SUFBRSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFF1YWx0cmljc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3F1YWx0cmljcy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzTG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgcXVhbHRyaWNzTG9hZGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsIHByaXZhdGUgY29uZmlnOiBRdWFsdHJpY3NDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICBCb29sZWFuKHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykgJiZcbiAgICAgIEJvb2xlYW4odGhpcy53aW5SZWYuZG9jdW1lbnQpICYmXG4gICAgICB0aGlzLmlzUXVhbHRyaWNzQ29uZmlndXJlZCgpXG4gICAgKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgZnJvbUV2ZW50KHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdywgJ3FzaV9qc19sb2FkZWQnKS5zdWJzY3JpYmUoXyA9PlxuICAgICAgdGhpcy5xdWFsdHJpY3NMb2FkZWQkLm5leHQodHJ1ZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcbiAgICBjb25zdCBxdWFsdHJpY3NTY3JpcHQgPSB0aGlzLndpblJlZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBxdWFsdHJpY3NTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHF1YWx0cmljc1NjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgcXVhbHRyaWNzU2NyaXB0LnNyYyA9ICdhc3NldHMvcXVhbHRyaWNzSW50ZWdyYXRpb24uanMnO1xuXG4gICAgY29uc3QgaWRTY3JpcHQgPSB0aGlzLndpblJlZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZFNjcmlwdC5pZCA9IHRoaXMuY29uZmlnLnF1YWx0cmljcy5wcm9qZWN0SWQ7XG5cbiAgICB0aGlzLndpblJlZi5kb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgICAgIC5hcHBlbmRDaGlsZChxdWFsdHJpY3NTY3JpcHQpO1xuXG4gICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChpZFNjcmlwdCk7XG4gIH1cblxuICBwcml2YXRlIGlzUXVhbHRyaWNzQ29uZmlndXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgQm9vbGVhbih0aGlzLmNvbmZpZy5xdWFsdHJpY3MpICYmIEJvb2xlYW4odGhpcy5jb25maWcucXVhbHRyaWNzLnByb2plY3RJZClcbiAgICApO1xuICB9XG5cbiAgbG9hZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5xdWFsdHJpY3NMb2FkZWQkLnBpcGUoXG4gICAgICBmaWx0ZXIobG9hZGVkID0+IGxvYWRlZCksXG4gICAgICBzd2l0Y2hNYXAoXyA9PiB7XG4gICAgICAgIGNvbnN0IHFzaSA9IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvd1snUVNJJ107XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGF0YUxvYWRlZCgpLnBpcGUoXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgICB0YXAoZGF0YUxvYWRlZCA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgICBxc2kuQVBJLnVubG9hZCgpO1xuICAgICAgICAgICAgICBxc2kuQVBJLmxvYWQoKS5kb25lKHFzaS5BUEkucnVuKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBsb2dpYyBleGlzdCBpbiBvcmRlciB0byBsZXQgdGhlIGNsaWVudChzKSBhZGQgdGhlaXIgb3duIGxvZ2ljIHRvIHdhaXQgZm9yIGFueSBraW5kIG9mIHBhZ2UgZGF0YVxuICAgKiBJZiBjbGllbnQocykgZG9lcyBub3QgZXh0ZW5kIHRoaXMgc2VydmljZSB0byBvdmVycmlkZSB0aGlzIGltcGxlbWVudGF0aW9uLCBpdCByZXR1cm5zIHRydWVcbiAgICogUmV0dXJuIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIHByb3RlY3RlZCBpc0RhdGFMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG59XG4iXX0=