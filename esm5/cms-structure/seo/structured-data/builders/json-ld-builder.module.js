import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BreadcrumbSchemaBuilder } from './breadcrumb/index';
import { JsonLdBaseProductBuilder, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, ProductSchemaBuilder, } from './product/index';
import { JSONLD_PRODUCT_BUILDER, SCHEMA_BUILDER } from './tokens';
/**
 * Provides several standard json-ld builders that contribute
 * to colleting and building json-ld data.
 */
var JsonLdBuilderModule = /** @class */ (function () {
    function JsonLdBuilderModule() {
    }
    JsonLdBuilderModule = __decorate([
        NgModule({
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
        })
    ], JsonLdBuilderModule);
    return JsonLdBuilderModule;
}());
export { JsonLdBuilderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC1idWlsZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9qc29uLWxkLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIseUJBQXlCLEVBQ3pCLDBCQUEwQixFQUMxQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxFOzs7R0FHRztBQWdDSDtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBL0IvQixRQUFRLENBQUM7WUFDUixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFdBQVcsRUFBRSxvQkFBb0I7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRCxvRUFBb0U7Z0JBQ3BFLCtCQUErQjtnQkFDL0I7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsV0FBVyxFQUFFLHlCQUF5QjtvQkFDdEMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxtQkFBbUIsQ0FBRztJQUFELDBCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi9icmVhZGNydW1iL2luZGV4JztcbmltcG9ydCB7XG4gIEpzb25MZEJhc2VQcm9kdWN0QnVpbGRlcixcbiAgSnNvbkxkUHJvZHVjdE9mZmVyQnVpbGRlcixcbiAgSnNvbkxkUHJvZHVjdFJldmlld0J1aWxkZXIsXG4gIFByb2R1Y3RTY2hlbWFCdWlsZGVyLFxufSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgSlNPTkxEX1BST0RVQ1RfQlVJTERFUiwgU0NIRU1BX0JVSUxERVIgfSBmcm9tICcuL3Rva2Vucyc7XG5cbi8qKlxuICogUHJvdmlkZXMgc2V2ZXJhbCBzdGFuZGFyZCBqc29uLWxkIGJ1aWxkZXJzIHRoYXQgY29udHJpYnV0ZVxuICogdG8gY29sbGV0aW5nIGFuZCBidWlsZGluZyBqc29uLWxkIGRhdGEuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNDSEVNQV9CVUlMREVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByb2R1Y3RTY2hlbWFCdWlsZGVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTQ0hFTUFfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBCcmVhZGNydW1iU2NoZW1hQnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgLy8gbG93ZXIgbGV2ZWwganNvbi1sZCBidWlsZGVyIGNsYXNzZXMgb2ZmZXJpbmcgZmluZS1ncmFpZW5kIGNvbnRyb2xcbiAgICAvLyBmb3IgcHJvZHVjdCByZWxhdGVkIHNjaGVtYSdzXG4gICAge1xuICAgICAgcHJvdmlkZTogSlNPTkxEX1BST0RVQ1RfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBKc29uTGRCYXNlUHJvZHVjdEJ1aWxkZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEpTT05MRF9QUk9EVUNUX0JVSUxERVIsXG4gICAgICB1c2VFeGlzdGluZzogSnNvbkxkUHJvZHVjdE9mZmVyQnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSlNPTkxEX1BST0RVQ1RfQlVJTERFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBKc29uTGRQcm9kdWN0UmV2aWV3QnVpbGRlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZEJ1aWxkZXJNb2R1bGUge31cbiJdfQ==