import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './autofocus/index';
import { BlockFocusDirective } from './block/index';
import { EscapeFocusDirective } from './escape/index';
import { FocusDirective } from './focus.directive';
import { LockFocusDirective } from './lock/index';
import { PersistFocusDirective } from './persist/index';
import { TabFocusDirective } from './tab/index';
import { TrapFocusDirective } from './trap/index';
var directives = [
    PersistFocusDirective,
    AutoFocusDirective,
    BlockFocusDirective,
    EscapeFocusDirective,
    LockFocusDirective,
    TrapFocusDirective,
    TabFocusDirective,
    FocusDirective,
];
var KeyboardFocusModule = /** @class */ (function () {
    function KeyboardFocusModule() {
    }
    KeyboardFocusModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: __spread(directives),
            exports: __spread(directives),
        })
    ], KeyboardFocusModule);
    return KeyboardFocusModule;
}());
export { KeyboardFocusModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtZm9jdXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMva2V5Ym9hcmQtZm9jdXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxELElBQU0sVUFBVSxHQUFHO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2YsQ0FBQztBQU9GO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixtQkFBbUI7UUFML0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksV0FBTSxVQUFVLENBQUM7WUFDN0IsT0FBTyxXQUFNLFVBQVUsQ0FBQztTQUN6QixDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9hdXRvZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgQmxvY2tGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vYmxvY2svaW5kZXgnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2VzY2FwZS9pbmRleCc7XG5pbXBvcnQgeyBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2tGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vbG9jay9pbmRleCc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL3BlcnNpc3QvaW5kZXgnO1xuaW1wb3J0IHsgVGFiRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi9pbmRleCc7XG5pbXBvcnQgeyBUcmFwRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL3RyYXAvaW5kZXgnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gW1xuICBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUsXG4gIEF1dG9Gb2N1c0RpcmVjdGl2ZSxcbiAgQmxvY2tGb2N1c0RpcmVjdGl2ZSxcbiAgRXNjYXBlRm9jdXNEaXJlY3RpdmUsXG4gIExvY2tGb2N1c0RpcmVjdGl2ZSxcbiAgVHJhcEZvY3VzRGlyZWN0aXZlLFxuICBUYWJGb2N1c0RpcmVjdGl2ZSxcbiAgRm9jdXNEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uZGlyZWN0aXZlc10sXG4gIGV4cG9ydHM6IFsuLi5kaXJlY3RpdmVzXSxcbn0pXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRGb2N1c01vZHVsZSB7fVxuIl19