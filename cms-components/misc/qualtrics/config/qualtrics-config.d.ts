/**
 * Configuration options for the Qualtrics integration, which allows you to
 * specify the qualtrics project and deployment script.
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class QualtricsConfig {
    /**
     * Holds the qualtrics integration options.
     */
    qualtrics?: {
        /**
         * Deployment script, loaded from a resource, to integrate the deployment of the qualtrics project.
         * You would typically store the file in the local assets folder.
         *
         * Defaults to `assets/qualtricsIntegration.js`
         */
        scriptSource?: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<QualtricsConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJxdWFsdHJpY3MtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIFF1YWx0cmljcyBpbnRlZ3JhdGlvbiwgd2hpY2ggYWxsb3dzIHlvdSB0b1xuICogc3BlY2lmeSB0aGUgcXVhbHRyaWNzIHByb2plY3QgYW5kIGRlcGxveW1lbnQgc2NyaXB0LlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBRdWFsdHJpY3NDb25maWcge1xuICAgIC8qKlxuICAgICAqIEhvbGRzIHRoZSBxdWFsdHJpY3MgaW50ZWdyYXRpb24gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBxdWFsdHJpY3M/OiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXBsb3ltZW50IHNjcmlwdCwgbG9hZGVkIGZyb20gYSByZXNvdXJjZSwgdG8gaW50ZWdyYXRlIHRoZSBkZXBsb3ltZW50IG9mIHRoZSBxdWFsdHJpY3MgcHJvamVjdC5cbiAgICAgICAgICogWW91IHdvdWxkIHR5cGljYWxseSBzdG9yZSB0aGUgZmlsZSBpbiB0aGUgbG9jYWwgYXNzZXRzIGZvbGRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogRGVmYXVsdHMgdG8gYGFzc2V0cy9xdWFsdHJpY3NJbnRlZ3JhdGlvbi5qc2BcbiAgICAgICAgICovXG4gICAgICAgIHNjcmlwdFNvdXJjZT86IHN0cmluZztcbiAgICB9O1xufVxuIl19