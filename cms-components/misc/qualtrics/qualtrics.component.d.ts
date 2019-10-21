import { QualtricsLoaderService } from './qualtrics-loader.service';
export declare class QualtricsComponent {
    private qualtricsLoader;
    qualtricsEnabled$: import("rxjs").Observable<boolean>;
    constructor(qualtricsLoader: QualtricsLoaderService);
}
