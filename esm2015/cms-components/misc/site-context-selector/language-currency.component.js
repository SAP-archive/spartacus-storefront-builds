import { ChangeDetectionStrategy, Component } from '@angular/core';
export class LanguageCurrencyComponent {
}
LanguageCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-language-currency-selector',
                template: `
    <cx-site-context-selector context="language"></cx-site-context-selector>
    <cx-site-context-selector context="currency"></cx-site-context-selector>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3IvbGFuZ3VhZ2UtY3VycmVuY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVbkUsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBUnJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUU7OztHQUdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1sYW5ndWFnZS1jdXJyZW5jeS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGN4LXNpdGUtY29udGV4dC1zZWxlY3RvciBjb250ZXh0PVwibGFuZ3VhZ2VcIj48L2N4LXNpdGUtY29udGV4dC1zZWxlY3Rvcj5cbiAgICA8Y3gtc2l0ZS1jb250ZXh0LXNlbGVjdG9yIGNvbnRleHQ9XCJjdXJyZW5jeVwiPjwvY3gtc2l0ZS1jb250ZXh0LXNlbGVjdG9yPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VDdXJyZW5jeUNvbXBvbmVudCB7fVxuIl19