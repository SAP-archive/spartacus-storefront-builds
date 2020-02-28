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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGVzOiBUaXRsZVtdO1xuICAgIHN1Ym1pdGVkOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICB1c2VyVXBkYXRlczogVXNlcjtcbiAgICB9PjtcbiAgICBjYW5jZWxsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBmb3JtOiBpbXBvcnQoXCJAYW5ndWxhci9mb3Jtc1wiKS5Gb3JtR3JvdXA7XG4gICAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBvblN1Ym1pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG59XG4iXX0=