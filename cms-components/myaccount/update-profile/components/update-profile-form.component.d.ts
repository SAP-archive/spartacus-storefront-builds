import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title, User } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateProfileFormComponent implements OnInit {
    private fb;
    user: User;
    titles: Title[];
    submitted: EventEmitter<{
        userUpdates: User;
    }>;
    cancelled: EventEmitter<void>;
    updateProfileForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    onCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileFormComponent, "cx-update-profile-form", never, { "user": "user"; "titles": "titles"; }, { "submitted": "submitted"; "cancelled": "cancelled"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlUHJvZmlsZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgdXNlcjogVXNlcjtcbiAgICB0aXRsZXM6IFRpdGxlW107XG4gICAgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICB1c2VyVXBkYXRlczogVXNlcjtcbiAgICB9PjtcbiAgICBjYW5jZWxsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICB1cGRhdGVQcm9maWxlRm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN1Ym1pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG59XG4iXX0=