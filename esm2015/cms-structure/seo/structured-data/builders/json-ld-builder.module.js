import { NgModule } from '@angular/core';
import { BreadcrumbSchemaBuilder } from './breadcrumb/index';
import { JsonLdBaseProductBuilder, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, ProductSchemaBuilder, } from './product/index';
import { JSONLD_PRODUCT_BUILDER, SCHEMA_BUILDER } from './tokens';
/**
 * Provides several standard json-ld builders that contribute
 * to collecting and building json-ld data.
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
                    // lower level json-ld builder classes offering fine-grained control
                    // for product related schemas
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1idWlsZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9qc29uLWxkLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEU7OztHQUdHO0FBZ0NILE1BQU0sT0FBTyxtQkFBbUI7OztZQS9CL0IsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsV0FBVyxFQUFFLG9CQUFvQjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGNBQWM7d0JBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELG9FQUFvRTtvQkFDcEUsOEJBQThCO29CQUM5Qjt3QkFDRSxPQUFPLEVBQUUsc0JBQXNCO3dCQUMvQixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsc0JBQXNCO3dCQUMvQixXQUFXLEVBQUUseUJBQXlCO3dCQUN0QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsc0JBQXNCO3dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO3dCQUN2QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9icmVhZGNydW1iL2luZGV4JztcbmltcG9ydCB7XG4gIEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlcixcbiAgSnNvbkxkUHJvZHVjdE9mZmVyQnVpbGRlcixcbiAgSnNvbkxkUHJvZHVjdFJldmlld0J1aWxkZXIsXG4gIFByb2R1Y3RTY2hlbWFCdWlsZGVyLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgSlNPTkxEX1BST0RVQ1RfQlVJTERFUiwgU0NIRU1BX0JVSUxERVIgfSBmcm9tICcuL3Rva2Vucyc7XG5cbi8qKlxuICogUHJvdmlkZXMgc2V2ZXJhbCBzdGFuZGFyZCBqc29uLWxkIGJ1aWxkZXJzIHRoYXQgY29udHJpYnV0ZVxuICogdG8gY29sbGVjdGluZyBhbmQgYnVpbGRpbmcganNvbi1sZCBkYXRhLlxuICovXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTQ0hFTUFfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0U2NoZW1hQnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU0NIRU1BX0JVSUxERVIsXG4gICAgICB1c2VFeGlzdGluZzogQnJlYWRjcnVtYlNjaGVtYUJ1aWxkZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIC8vIGxvd2VyIGxldmVsIGpzb24tbGQgYnVpbGRlciBjbGFzc2VzIG9mZmVyaW5nIGZpbmUtZ3JhaW5lZCBjb250cm9sXG4gICAgLy8gZm9yIHByb2R1Y3QgcmVsYXRlZCBzY2hlbWFzXG4gICAge1xuICAgICAgcHJvdmlkZTogSlNPTkxEX1BST0RVQ1RfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBKc29uTGRCYXNlUHJvZHVjdEJ1aWxkZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEpTT05MRF9QUk9EVUNUX0JVSUxERVIsXG4gICAgICB1c2VFeGlzdGluZzogSnNvbkxkUHJvZHVjdE9mZmVyQnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSlNPTkxEX1BST0RVQ1RfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBKc29uTGRQcm9kdWN0UmV2aWV3QnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZEJ1aWxkZXJNb2R1bGUge31cbiJdfQ==