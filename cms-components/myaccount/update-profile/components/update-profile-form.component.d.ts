import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title, User } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateProfileFormComponent implements OnInit {
    private fb;
    user: User;
    titles: Title[];
    submited: EventEmitter<{
        userUpdates: User;
    }>;
    cancelled: EventEmitter<void>;
    form: import("@angular/forms").FormGroup;
    private submitClicked;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    isNotValid(formControlName: string): boolean;
    onSubmit(): void;
    onCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileFormComponent, "cx-update-profile-form", never, {
    "user": "user";
    "titles": "titles";
}, {
    "submited": "submited";
    "cancelled": "cancelled";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlUHJvZmlsZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgdXNlcjogVXNlcjtcbiAgICB0aXRsZXM6IFRpdGxlW107XG4gICAgc3VibWl0ZWQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIHVzZXJVcGRhdGVzOiBVc2VyO1xuICAgIH0+O1xuICAgIGNhbmNlbGxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIGZvcm06IGltcG9ydChcIkBhbmd1bGFyL2Zvcm1zXCIpLkZvcm1Hcm91cDtcbiAgICBwcml2YXRlIHN1Ym1pdENsaWNrZWQ7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgb25DYW5jZWwoKTogdm9pZDtcbn1cbiJdfQ==