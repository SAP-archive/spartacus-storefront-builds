import { Injectable } from '@angular/core';
import { LockFocusService } from '../lock/lock-focus.service';
import * as i0 from "@angular/core";
import * as i1 from "./select-focus.util";
export class KeyboardFocusService extends LockFocusService {
}
KeyboardFocusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KeyboardFocusService_Factory() { return new KeyboardFocusService(i0.ɵɵinject(i1.SelectFocusUtility)); }, token: KeyboardFocusService, providedIn: "root" });
KeyboardFocusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtZm9jdXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL3NlcnZpY2VzL2tleWJvYXJkLWZvY3VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSzlELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7Ozs7WUFIekQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4uL2xvY2svbG9jay1mb2N1cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEtleWJvYXJkRm9jdXNTZXJ2aWNlIGV4dGVuZHMgTG9ja0ZvY3VzU2VydmljZSB7fVxuIl19