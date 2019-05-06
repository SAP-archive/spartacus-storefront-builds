/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UserService } from '@spartacus/core';
import { CardModule } from '../../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../../shared/components/spinner/spinner.module';
import { PaymentFormModule } from './payment-form/payment-form.module';
import { PaymentMethodComponent } from './payment-method.component';
export class PaymentMethodModule {
}
PaymentMethodModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    PaymentFormModule,
                    CardModule,
                    SpinnerModule,
                    I18nModule,
                ],
                providers: [UserService],
                declarations: [PaymentMethodComponent],
                entryComponents: [PaymentMethodComponent],
                exports: [PaymentMethodComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFnQnBFLE1BQU0sT0FBTyxtQkFBbUI7OztZQWQvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFVBQVU7b0JBQ1YsYUFBYTtvQkFDYixVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRGb3JtTW9kdWxlIH0gZnJvbSAnLi9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBQYXltZW50Rm9ybU1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudE1ldGhvZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZE1vZHVsZSB7fVxuIl19