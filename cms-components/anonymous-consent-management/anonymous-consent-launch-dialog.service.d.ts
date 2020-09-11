import { ElementRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchDialogService } from '../../layout/launch-dialog/index';
export declare class AnonymousConsentLaunchDialogService {
    protected launchDialogService: LaunchDialogService;
    constructor(launchDialogService: LaunchDialogService);
    openDialog(openElement?: ElementRef, vcr?: ViewContainerRef): Observable<any> | undefined;
}
