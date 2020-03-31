import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { BehaviorSubject, fromEvent, of } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { QualtricsConfig } from './config/qualtrics-config';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./config/qualtrics-config";
let QualtricsLoaderService = class QualtricsLoaderService {
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
    initialize() {
        fromEvent(this.winRef.nativeWindow, 'qsi_js_loaded').subscribe(() => this.qualtricsLoaded$.next(true));
    }
    setup() {
        const qualtricsScript = this.winRef.document.createElement('script');
        qualtricsScript.type = 'text/javascript';
        qualtricsScript.defer = true;
        qualtricsScript.src = 'assets/qualtricsIntegration.js';
        const idScript = this.winRef.document.createElement('div');
        idScript.id = this.config.qualtrics.projectId;
        this.winRef.document
            .getElementsByTagName('head')[0]
            .appendChild(qualtricsScript);
        this.winRef.document.getElementsByTagName('head')[0].appendChild(idScript);
    }
    isQualtricsConfigured() {
        return (Boolean(this.config.qualtrics) && Boolean(this.config.qualtrics.projectId));
    }
    load() {
        return this.qualtricsLoaded$.pipe(filter((loaded) => loaded), switchMap(() => {
            const qsi = this.winRef.nativeWindow['QSI'];
            return this.isDataLoaded().pipe(distinctUntilChanged(), tap((dataLoaded) => {
                if (dataLoaded) {
                    qsi.API.unload();
                    qsi.API.load().done(qsi.API.run());
                }
            }));
        }));
    }
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     */
    isDataLoaded() {
        return of(true);
    }
};
QualtricsLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: QualtricsConfig }
];
QualtricsLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.QualtricsConfig)); }, token: QualtricsLoaderService, providedIn: "root" });
QualtricsLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], QualtricsLoaderService);
export { QualtricsLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9xdWFsdHJpY3MvcXVhbHRyaWNzLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBSzVELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBR2pDLFlBQW9CLE1BQWlCLEVBQVUsTUFBdUI7UUFBbEQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRjlELHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRzdELElBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDNUI7WUFDQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRU8sVUFBVTtRQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVPLEtBQUs7UUFDWCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsZUFBZSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUN6QyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM3QixlQUFlLENBQUMsR0FBRyxHQUFHLGdDQUFnQyxDQUFDO1FBRXZELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUU5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7YUFDakIsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixPQUFPLENBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQy9CLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQzFCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzdCLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNqQixJQUFJLFVBQVUsRUFBRTtvQkFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFlBQVk7UUFDcEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUE7O1lBakU2QixTQUFTO1lBQWtCLGVBQWU7OztBQUgzRCxzQkFBc0I7SUFIbEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHNCQUFzQixDQW9FbEM7U0FwRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBRdWFsdHJpY3NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9xdWFsdHJpY3MtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFF1YWx0cmljc0xvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIHF1YWx0cmljc0xvYWRlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmLCBwcml2YXRlIGNvbmZpZzogUXVhbHRyaWNzQ29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpICYmXG4gICAgICBCb29sZWFuKHRoaXMud2luUmVmLmRvY3VtZW50KSAmJlxuICAgICAgdGhpcy5pc1F1YWx0cmljc0NvbmZpZ3VyZWQoKVxuICAgICkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB0aGlzLnNldHVwKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGZyb21FdmVudCh0aGlzLndpblJlZi5uYXRpdmVXaW5kb3csICdxc2lfanNfbG9hZGVkJykuc3Vic2NyaWJlKCgpID0+XG4gICAgICB0aGlzLnF1YWx0cmljc0xvYWRlZCQubmV4dCh0cnVlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuICAgIGNvbnN0IHF1YWx0cmljc1NjcmlwdCA9IHRoaXMud2luUmVmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHF1YWx0cmljc1NjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgcXVhbHRyaWNzU2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBxdWFsdHJpY3NTY3JpcHQuc3JjID0gJ2Fzc2V0cy9xdWFsdHJpY3NJbnRlZ3JhdGlvbi5qcyc7XG5cbiAgICBjb25zdCBpZFNjcmlwdCA9IHRoaXMud2luUmVmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlkU2NyaXB0LmlkID0gdGhpcy5jb25maWcucXVhbHRyaWNzLnByb2plY3RJZDtcblxuICAgIHRoaXMud2luUmVmLmRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgICAgLmFwcGVuZENoaWxkKHF1YWx0cmljc1NjcmlwdCk7XG5cbiAgICB0aGlzLndpblJlZi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGlkU2NyaXB0KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNRdWFsdHJpY3NDb25maWd1cmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBCb29sZWFuKHRoaXMuY29uZmlnLnF1YWx0cmljcykgJiYgQm9vbGVhbih0aGlzLmNvbmZpZy5xdWFsdHJpY3MucHJvamVjdElkKVxuICAgICk7XG4gIH1cblxuICBsb2FkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnF1YWx0cmljc0xvYWRlZCQucGlwZShcbiAgICAgIGZpbHRlcigobG9hZGVkKSA9PiBsb2FkZWQpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgY29uc3QgcXNpID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93WydRU0knXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEYXRhTG9hZGVkKCkucGlwZShcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIHRhcCgoZGF0YUxvYWRlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFMb2FkZWQpIHtcbiAgICAgICAgICAgICAgcXNpLkFQSS51bmxvYWQoKTtcbiAgICAgICAgICAgICAgcXNpLkFQSS5sb2FkKCkuZG9uZShxc2kuQVBJLnJ1bigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbG9naWMgZXhpc3QgaW4gb3JkZXIgdG8gbGV0IHRoZSBjbGllbnQocykgYWRkIHRoZWlyIG93biBsb2dpYyB0byB3YWl0IGZvciBhbnkga2luZCBvZiBwYWdlIGRhdGFcbiAgICogSWYgY2xpZW50KHMpIGRvZXMgbm90IGV4dGVuZCB0aGlzIHNlcnZpY2UgdG8gb3ZlcnJpZGUgdGhpcyBpbXBsZW1lbnRhdGlvbiwgaXQgcmV0dXJucyB0cnVlXG4gICAqIFJldHVybiBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBwcm90ZWN0ZWQgaXNEYXRhTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxufVxuIl19