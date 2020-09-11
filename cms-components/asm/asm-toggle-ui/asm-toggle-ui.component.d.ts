import { OnDestroy, OnInit } from '@angular/core';
import { AsmService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class AsmToggleUiComponent implements OnInit, OnDestroy {
    protected asmService: AsmService;
    private subscription;
    isCollapsed: boolean;
    constructor(asmService: AsmService);
    ngOnInit(): void;
    toggleUi(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmToggleUiComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AsmToggleUiComponent, "cx-asm-toggle-ui", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYXNtLXRvZ2dsZS11aS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbVRvZ2dsZVVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgdG9nZ2xlVWkoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19