import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class CSAgentLoginFormComponent implements OnInit {
    private fb;
    form: FormGroup;
    private submitClicked;
    csAgentTokenLoading: boolean;
    submitEvent: EventEmitter<{
        userId: string;
        password: string;
    }>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    isNotValid(formControlName: string): boolean;
}
