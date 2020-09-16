import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FocusDirective } from './focus.directive';
const directives = [
    // PersistFocusDirective,
    // VisibleFocusDirective,
    // BlockFocusDirective,
    // AutoFocusDirective,
    // EscapeFocusDirective,
    // LockFocusDirective,
    // TrapFocusDirective,
    // TabFocusDirective,
    FocusDirective,
];
export class KeyboardFocusModule {
}
KeyboardFocusModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...directives],
                exports: [...directives],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtZm9jdXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMva2V5Ym9hcmQtZm9jdXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxNQUFNLFVBQVUsR0FBRztJQUNqQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDZixDQUFDO0FBT0YsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTC9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2ZvY3VzLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXG4gIC8vIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZSxcbiAgLy8gVmlzaWJsZUZvY3VzRGlyZWN0aXZlLFxuICAvLyBCbG9ja0ZvY3VzRGlyZWN0aXZlLFxuICAvLyBBdXRvRm9jdXNEaXJlY3RpdmUsXG4gIC8vIEVzY2FwZUZvY3VzRGlyZWN0aXZlLFxuICAvLyBMb2NrRm9jdXNEaXJlY3RpdmUsXG4gIC8vIFRyYXBGb2N1c0RpcmVjdGl2ZSxcbiAgLy8gVGFiRm9jdXNEaXJlY3RpdmUsXG4gIEZvY3VzRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLmRpcmVjdGl2ZXNdLFxuICBleHBvcnRzOiBbLi4uZGlyZWN0aXZlc10sXG59KVxuZXhwb3J0IGNsYXNzIEtleWJvYXJkRm9jdXNNb2R1bGUge31cbiJdfQ==