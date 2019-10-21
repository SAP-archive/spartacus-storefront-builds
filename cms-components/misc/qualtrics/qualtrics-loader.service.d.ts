import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { QualtricsConfig } from './config/qualtrics-config';
export declare class QualtricsLoaderService {
    private winRef;
    private config;
    private qualtricsLoaded$;
    constructor(winRef: WindowRef, config: QualtricsConfig);
    private initialize;
    private setup;
    private isQualtricsConfigured;
    load(): Observable<boolean>;
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     */
    protected isDataLoaded(): Observable<boolean>;
}
