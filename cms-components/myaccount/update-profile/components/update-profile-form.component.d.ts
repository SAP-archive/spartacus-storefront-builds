import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    updateProfileForm: import("@angular/forms").FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    onCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileFormComponent, "cx-update-profile-form", never, { "user": "user"; "titles": "titles"; }, { "submitted": "submitted"; "cancelled": "cancelled"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXBkYXRlLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVwZGF0ZVByb2ZpbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGVzOiBUaXRsZVtdO1xuICAgIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgdXNlclVwZGF0ZXM6IFVzZXI7XG4gICAgfT47XG4gICAgY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgdXBkYXRlUHJvZmlsZUZvcm06IGltcG9ydChcIkBhbmd1bGFyL2Zvcm1zXCIpLkZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xufVxuIl19