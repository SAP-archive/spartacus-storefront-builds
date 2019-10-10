/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BreadcrumbSchemaBuilder } from './breadcrumb/index';
import { JsonLdBaseProductBuilder, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, ProductSchemaBuilder, } from './product/index';
import { JSONLD_PRODUCT_BUILDER, SCHEMA_BUILDER } from './tokens';
/**
 * Provides several standard json-ld builders that contribute
 * to colleting and building json-ld data.
 */
export class JsonLdBuilderModule {
}
JsonLdBuilderModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: SCHEMA_BUILDER,
                        useExisting: ProductSchemaBuilder,
                        multi: true,
                    },
                    {
                        provide: SCHEMA_BUILDER,
                        useExisting: BreadcrumbSchemaBuilder,
                        multi: true,
                    },
                    // lower level json-ld builder classes offering fine-graiend control
                    // for product related schema's
                    {
                        provide: JSONLD_PRODUCT_BUILDER,
                        useExisting: JsonLdBaseProductBuilder,
                        multi: true,
                    },
                    {
                        provide: JSONLD_PRODUCT_BUILDER,
                        useExisting: JsonLdProductOfferBuilder,
                        multi: true,
                    },
                    {
                        provide: JSONLD_PRODUCT_BUILDER,
                        useExisting: JsonLdProductReviewBuilder,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1idWlsZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9qc29uLWxkLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIseUJBQXlCLEVBQ3pCLDBCQUEwQixFQUMxQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztBQXFDbEUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBL0IvQixRQUFRLFNBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxjQUFjO3dCQUN2QixXQUFXLEVBQUUsb0JBQW9CO3dCQUNqQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsV0FBVyxFQUFFLHVCQUF1Qjt3QkFDcEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Qsb0VBQW9FO29CQUNwRSwrQkFBK0I7b0JBQy9CO3dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFdBQVcsRUFBRSx5QkFBeUI7d0JBQ3RDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYlNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuL2JyZWFkY3J1bWIvaW5kZXgnO1xuaW1wb3J0IHtcbiAgSnNvbkxkQmFzZVByb2R1Y3RCdWlsZGVyLFxuICBKc29uTGRQcm9kdWN0T2ZmZXJCdWlsZGVyLFxuICBKc29uTGRQcm9kdWN0UmV2aWV3QnVpbGRlcixcbiAgUHJvZHVjdFNjaGVtYUJ1aWxkZXIsXG59IGZyb20gJy4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBKU09OTERfUFJPRFVDVF9CVUlMREVSLCBTQ0hFTUFfQlVJTERFUiB9IGZyb20gJy4vdG9rZW5zJztcblxuLyoqXG4gKiBQcm92aWRlcyBzZXZlcmFsIHN0YW5kYXJkIGpzb24tbGQgYnVpbGRlcnMgdGhhdCBjb250cmlidXRlXG4gKiB0byBjb2xsZXRpbmcgYW5kIGJ1aWxkaW5nIGpzb24tbGQgZGF0YS5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU0NIRU1BX0JVSUxERVIsXG4gICAgICB1c2VFeGlzdGluZzogUHJvZHVjdFNjaGVtYUJ1aWxkZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNDSEVNQV9CVUlMREVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICAvLyBsb3dlciBsZXZlbCBqc29uLWxkIGJ1aWxkZXIgY2xhc3NlcyBvZmZlcmluZyBmaW5lLWdyYWllbmQgY29udHJvbFxuICAgIC8vIGZvciBwcm9kdWN0IHJlbGF0ZWQgc2NoZW1hJ3NcbiAgICB7XG4gICAgICBwcm92aWRlOiBKU09OTERfUFJPRFVDVF9CVUlMREVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSlNPTkxEX1BST0RVQ1RfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBKc29uTGRQcm9kdWN0T2ZmZXJCdWlsZGVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBKU09OTERfUFJPRFVDVF9CVUlMREVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IEpzb25MZFByb2R1Y3RSZXZpZXdCdWlsZGVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkQnVpbGRlck1vZHVsZSB7fVxuIl19