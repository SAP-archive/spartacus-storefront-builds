import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { SCHEMA_BUILDER } from './builders/tokens';
import { JsonLdScriptFactory } from './json-ld-script.factory';
import * as i0 from "@angular/core";
import * as i1 from "./json-ld-script.factory";
import * as i2 from "./builders/tokens";
/**
 * Factory service that is used to build the structured data for
 * all configured schema builders.
 */
export class StructuredDataFactory {
    constructor(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
        this.subscription = new Subscription();
    }
    /**
     * Initiates the build of structured data by collecting all schema
     * builders.
     */
    build() {
        if (this.scriptBuilder.isJsonLdRequired() && this.builders) {
            this.subscription.add(this.collectSchemas().subscribe((schema) => {
                this.scriptBuilder.build(schema);
            }));
        }
    }
    /**
     * Collects all schema builders and observe their structured data.
     */
    collectSchemas() {
        return combineLatest(this.builders.map((builder) => builder.build()));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
StructuredDataFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(i0.ɵɵinject(i1.JsonLdScriptFactory), i0.ɵɵinject(i2.SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
StructuredDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
StructuredDataFactory.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1kYXRhLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvc3RydWN0dXJlZC1kYXRhLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUUvRDs7O0dBR0c7QUFJSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1UsYUFBa0MsRUFHbEMsUUFBeUI7UUFIekIsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBR2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBR3pCLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFGdkQsQ0FBQztJQUlKOzs7T0FHRztJQUNILEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBWSxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLGNBQWM7UUFDdEIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFwQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSUSxtQkFBbUI7d0NBWXZCLFFBQVEsWUFDUixNQUFNLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9idWlsZGVycy9zY2hlbWEuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNDSEVNQV9CVUlMREVSIH0gZnJvbSAnLi9idWlsZGVycy90b2tlbnMnO1xuaW1wb3J0IHsgSnNvbkxkU2NyaXB0RmFjdG9yeSB9IGZyb20gJy4vanNvbi1sZC1zY3JpcHQuZmFjdG9yeSc7XG5cbi8qKlxuICogRmFjdG9yeSBzZXJ2aWNlIHRoYXQgaXMgdXNlZCB0byBidWlsZCB0aGUgc3RydWN0dXJlZCBkYXRhIGZvclxuICogYWxsIGNvbmZpZ3VyZWQgc2NoZW1hIGJ1aWxkZXJzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlZERhdGFGYWN0b3J5IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzY3JpcHRCdWlsZGVyOiBKc29uTGRTY3JpcHRGYWN0b3J5LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTQ0hFTUFfQlVJTERFUilcbiAgICBwcml2YXRlIGJ1aWxkZXJzOiBTY2hlbWFCdWlsZGVyW11cbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvKipcbiAgICogSW5pdGlhdGVzIHRoZSBidWlsZCBvZiBzdHJ1Y3R1cmVkIGRhdGEgYnkgY29sbGVjdGluZyBhbGwgc2NoZW1hXG4gICAqIGJ1aWxkZXJzLlxuICAgKi9cbiAgYnVpbGQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2NyaXB0QnVpbGRlci5pc0pzb25MZFJlcXVpcmVkKCkgJiYgdGhpcy5idWlsZGVycykge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgICB0aGlzLmNvbGxlY3RTY2hlbWFzKCkuc3Vic2NyaWJlKChzY2hlbWE6IHt9W10pID0+IHtcbiAgICAgICAgICB0aGlzLnNjcmlwdEJ1aWxkZXIuYnVpbGQoc2NoZW1hKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3RzIGFsbCBzY2hlbWEgYnVpbGRlcnMgYW5kIG9ic2VydmUgdGhlaXIgc3RydWN0dXJlZCBkYXRhLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbGxlY3RTY2hlbWFzKCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdCh0aGlzLmJ1aWxkZXJzLm1hcCgoYnVpbGRlcikgPT4gYnVpbGRlci5idWlsZCgpKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=