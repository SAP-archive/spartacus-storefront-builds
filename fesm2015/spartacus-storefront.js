import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Inject, isDevMode, RendererFactory2, ComponentFactoryResolver, TemplateRef, Input, Directive, NgModule, PLATFORM_ID, EventEmitter, ComponentFactory, ViewContainerRef, Output, ElementRef, HostBinding, HostListener, Renderer2, Component, ViewChild, ChangeDetectionStrategy, Optional, Injector, INJECTOR, ChangeDetectorRef, APP_INITIALIZER, ViewEncapsulation, Pipe, InjectionToken, SecurityContext, ViewChildren, inject } from '@angular/core';
import { of, BehaviorSubject, Observable, Subscription, combineLatest, concat, timer, fromEvent, from, isObservable, asapScheduler, interval } from 'rxjs';
import { map, filter, first, flatMap, distinctUntilChanged, tap, take, withLatestFrom, skipWhile, scan, startWith, switchMap, shareReplay, mergeMap, debounceTime, endWith, pluck, observeOn, delayWhen } from 'rxjs/operators';
import { Config, resolveApplicable, FeatureConfigService, DeferLoadingStrategy, RoutingService, AnonymousConsentsService, WindowRef, provideDefaultConfig, AnonymousConsentsConfig, I18nModule, FeaturesConfigModule, provideConfig, ANONYMOUS_CONSENT_STATUS, GlobalMessageType, UserConsentService, GlobalMessageService, AuthService, AuthGuard, UrlModule, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, ContextServiceMap, SiteContextModule, UserOrderService, PromotionLocation, CheckoutService, ActiveCartService, EMAIL_PATTERN, PASSWORD_PATTERN, CmsConfig, CmsService, DynamicAttributeService, AsmAuthService, UserService, AsmService, AsmConfig, AsmModule as AsmModule$1, ProductScope, ProductService, CartVoucherService, CustomerCouponService, SelectiveCartService, WishListService, CartModule, RoutingConfigService, AuthRedirectService, OCC_USER_ID_ANONYMOUS, CheckoutDeliveryService, CheckoutPaymentService, UserAddressService, UserPaymentService, TranslationService, ConfigModule, LanguageService, PageRobotsMeta, PageMetaService, TranslationChunkService, PageType, SemanticPathService, ProtectedRoutesGuard, RoutingModule as RoutingModule$1, ProductReviewService, NotAuthGuard, OrderReturnRequestService, UserNotificationPreferenceService, UserInterestsService, CmsPageTitleModule, SearchboxService, ProductReferenceService, ProductSearchService, CurrencyService, VariantType, VariantQualifier, OccConfig, NotificationType, StoreDataService, StoreFinderService, GoogleMapRendererService, StoreFinderConfig, StoreFinderCoreModule, ProtectedRoutesService, UrlMatcherService, DEFAULT_URL_MATCHER, StateModule, AuthModule, AnonymousConsentsModule, ConfigInitializerModule, ConfigValidatorModule, CmsModule, GlobalMessageModule, ProcessModule, CheckoutModule, UserModule, ProductModule, provideConfigFromMetaTags, SmartEditModule, PersonalizationModule, OccModule, ExternalRoutesModule, provideDefaultConfigFactory } from '@spartacus/core';
import { DOCUMENT, CommonModule, isPlatformServer, Location, isPlatformBrowser, formatCurrency, getCurrencySymbol } from '@angular/common';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModalRef, NgbModal, NgbModule, NgbActiveModal, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

/**
 * Types of dialog openings supported
 */
var DIALOG_TYPE;
(function (DIALOG_TYPE) {
    DIALOG_TYPE["POPOVER"] = "POPOVER";
    DIALOG_TYPE["DIALOG"] = "DIALOG";
    DIALOG_TYPE["SIDEBAR_START"] = "SIDEBAR_START";
    DIALOG_TYPE["SIDEBAR_END"] = "SIDEBAR_END";
})(DIALOG_TYPE || (DIALOG_TYPE = {}));
/**
 * List of available callers
 */
var LAUNCH_CALLER;
(function (LAUNCH_CALLER) {
    LAUNCH_CALLER["ASM"] = "ASM";
    LAUNCH_CALLER["SKIP_LINKS"] = "SKIP_LINKS";
    LAUNCH_CALLER["ANONYMOUS_CONSENT"] = "ANONYMOUS_CONSENT";
})(LAUNCH_CALLER || (LAUNCH_CALLER = {}));

var BREAKPOINT;
(function (BREAKPOINT) {
    BREAKPOINT["xs"] = "xs";
    BREAKPOINT["sm"] = "sm";
    BREAKPOINT["md"] = "md";
    BREAKPOINT["lg"] = "lg";
    BREAKPOINT["xl"] = "xl";
})(BREAKPOINT || (BREAKPOINT = {}));
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 */
let LayoutConfig = class LayoutConfig {
};
LayoutConfig.ɵprov = ɵɵdefineInjectable({ factory: function LayoutConfig_Factory() { return ɵɵinject(Config); }, token: LayoutConfig, providedIn: "root" });
LayoutConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], LayoutConfig);

let LaunchRenderStrategy = class LaunchRenderStrategy {
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        // List of called references; only used for rendered elements
        this.renderedCallers = [];
        /**
         * Classes to apply to the component when the dialog is a DIALOG
         */
        this.dialogClasses = ['d-block', 'fade', 'modal', 'show'];
        /**
         * Classes to apply to the component when the dialog is a POPOVER
         */
        this.popoverClasses = ['cx-dialog-popover'];
        /**
         * Classes to apply to the component when the dialog is a SIDEBAR_END
         */
        this.sidebarEndClasses = ['cx-sidebar-end'];
        /**
         * Classes to apply to the component when the dialog is a SIDEBAR_START
         */
        this.sidebarStartClasses = ['cx-sidebar-start'];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Determines if element should render
     *
     * @param caller
     * @param config
     */
    shouldRender(caller, config) {
        return (Boolean(config.component) &&
            (this.renderedCallers.some((el) => el.caller === caller)
                ? !!config.multi
                : true));
    }
    applyClasses(component, dialogType) {
        let classes = [];
        // TODO: make classes configurable
        switch (dialogType) {
            case DIALOG_TYPE.DIALOG:
                classes = this.dialogClasses;
                this.renderer.addClass(this.document.body, 'modal-open');
                break;
            case DIALOG_TYPE.POPOVER:
                classes = this.popoverClasses;
                break;
            case DIALOG_TYPE.SIDEBAR_END:
                classes = this.sidebarEndClasses;
                break;
            case DIALOG_TYPE.SIDEBAR_START:
                classes = this.sidebarStartClasses;
                break;
        }
        for (const newClass of classes) {
            this.renderer.addClass(component.location.nativeElement, newClass);
        }
    }
    /**
     * Method to call when rendered element is destroyed
     * The element will be removed from the list of rendered elements
     *
     * @param caller
     * @param _config optional parameters used in children strategies
     */
    remove(caller, config) {
        var _a;
        this.renderedCallers = this.renderedCallers.filter((el) => el.caller !== caller);
        if (((_a = config) === null || _a === void 0 ? void 0 : _a.dialogType) === DIALOG_TYPE.DIALOG) {
            this.renderer.removeClass(this.document.body, 'modal-open');
        }
    }
    getPriority() {
        return -10 /* LOW */; // low, as it's a default matcher
    }
};
LaunchRenderStrategy = __decorate([
    __param(0, Inject(DOCUMENT))
], LaunchRenderStrategy);

let InlineRenderStrategy = class InlineRenderStrategy extends LaunchRenderStrategy {
    constructor(document, rendererFactory, componentFactoryResolver) {
        super(document, rendererFactory);
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * Renders the component from the configuration in the view container ref
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config, caller, vcr) {
        // Only render if a ViewContainerRef is provided
        if (vcr && this.shouldRender(caller, config)) {
            const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            const component = vcr.createComponent(template);
            if (config === null || config === void 0 ? void 0 : config.dialogType) {
                this.applyClasses(component, config === null || config === void 0 ? void 0 : config.dialogType);
            }
            this.renderedCallers.push({ caller, element: vcr.element, component });
            return of(component);
        }
        else if (isDevMode()) {
            if (!vcr) {
                console.warn(`No view container ref provided for ${caller}`);
            }
            else {
                console.warn(`Element for ${caller} already rendered. To allow multi rendering add property multi: true.`);
            }
        }
    }
    hasMatch(config) {
        return Boolean(config.inline);
    }
};
InlineRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: ComponentFactoryResolver }
];
InlineRenderStrategy.ɵprov = ɵɵdefineInjectable({ factory: function InlineRenderStrategy_Factory() { return new InlineRenderStrategy(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2), ɵɵinject(ComponentFactoryResolver)); }, token: InlineRenderStrategy, providedIn: "root" });
InlineRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT))
], InlineRenderStrategy);

let LaunchDialogService = class LaunchDialogService {
    constructor(renderStrategies, layoutConfig) {
        this.renderStrategies = renderStrategies;
        this.layoutConfig = layoutConfig;
        this._dialogClose = new BehaviorSubject(undefined);
        this.renderStrategies = this.renderStrategies || [];
    }
    /**
     * Render the element based on the strategy from the launch configuration
     *
     * @param caller LAUNCH_CALLER
     * @param vcr View Container Ref of the container for inline rendering
     */
    launch(caller, vcr) {
        const config = this.findConfiguration(caller);
        if (config) {
            const renderer = this.getStrategy(config);
            // Render if the strategy exists
            if (renderer) {
                this._dialogClose.next(undefined);
                return renderer.render(config, caller, vcr);
            }
        }
        else if (isDevMode()) {
            console.warn('No configuration provided for caller ' + caller);
        }
    }
    /**
     * Util method to remove element from rendered elements list
     *
     * @param caller LAUNCH_CALLER
     */
    clear(caller) {
        const config = this.findConfiguration(caller);
        const renderer = this.getStrategy(config);
        // Render if the strategy exists
        if (renderer) {
            renderer.remove(caller, config);
        }
    }
    get dialogClose() {
        return this._dialogClose.asObservable();
    }
    closeDialog(reason) {
        this._dialogClose.next(reason);
    }
    /**
     * Returns the configuration for the caller
     *
     * @param caller LAUNCH_CALLER
     */
    findConfiguration(caller) {
        var _a;
        if ((_a = this.layoutConfig) === null || _a === void 0 ? void 0 : _a.launch) {
            return this.layoutConfig.launch[caller];
        }
        return undefined;
    }
    /**
     * Returns the render strategy based on the configuration
     *
     * @param config Configuration for launch
     */
    getStrategy(config) {
        return resolveApplicable(this.renderStrategies, [config]);
    }
};
LaunchDialogService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [LaunchRenderStrategy,] }] },
    { type: LayoutConfig }
];
LaunchDialogService.ɵprov = ɵɵdefineInjectable({ factory: function LaunchDialogService_Factory() { return new LaunchDialogService(ɵɵinject(LaunchRenderStrategy), ɵɵinject(LayoutConfig)); }, token: LaunchDialogService, providedIn: "root" });
LaunchDialogService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(LaunchRenderStrategy))
], LaunchDialogService);

var OutletPosition;
(function (OutletPosition) {
    OutletPosition["REPLACE"] = "replace";
    OutletPosition["BEFORE"] = "before";
    OutletPosition["AFTER"] = "after";
})(OutletPosition || (OutletPosition = {}));
const AVOID_STACKED_OUTLETS = false;
const USE_STACKED_OUTLETS = true;

let OutletService = class OutletService {
    constructor(features) {
        this.features = features;
        this.templatesRefs = {
            [OutletPosition.BEFORE]: new Map(),
            [OutletPosition.REPLACE]: new Map(),
            [OutletPosition.AFTER]: new Map(),
        };
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    add(outlet, templateOrFactory, position = OutletPosition.REPLACE) {
        const store = this.templatesRefs[position];
        if (store) {
            const existing = store.get(outlet) || [];
            const newValue = existing.concat([templateOrFactory]);
            store.set(outlet, newValue);
        }
    }
    /**
     *
     * Returns a single object or multiple objects for the given outlet reference,
     * depending on the `stacked` argument.
     *
     * @param outlet The outlet reference
     * @param position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param stacked Indicates whether an array of outlet components is returned
     */
    get(outlet, position = OutletPosition.REPLACE, stacked = AVOID_STACKED_OUTLETS) {
        const store = this.templatesRefs[position] ||
            this.templatesRefs[OutletPosition.REPLACE];
        const templateRef = store.get(outlet);
        if (templateRef && !stacked) {
            return templateRef[0];
        }
        return templateRef;
    }
    remove(outlet, position = OutletPosition.REPLACE, value) {
        const store = this.templatesRefs[position] ||
            this.templatesRefs[OutletPosition.REPLACE];
        this.removeValueOrAll(store, outlet, value);
    }
    removeValueOrAll(store, outlet, value) {
        var _a;
        if (!value && store.has(outlet)) {
            store.delete(outlet);
        }
        else if (value && store.has(outlet)) {
            let existing = store.get(outlet);
            if ((_a = this.features) === null || _a === void 0 ? void 0 : _a.isLevel('2.1')) {
                existing = existing.filter((val) => val !== value);
            }
            else {
                // deprecated since 2.1, see #8116:
                existing = existing.filter((val) => val === value);
            }
            store.set(outlet, existing);
        }
    }
};
OutletService.ctorParameters = () => [
    { type: FeatureConfigService }
];
OutletService.ɵprov = ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
OutletService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OutletService);

let OutletRefDirective = class OutletRefDirective {
    constructor(tpl, outletService, features) {
        this.tpl = tpl;
        this.outletService = outletService;
        this.features = features;
    }
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this.features) === null || _a === void 0 ? void 0 : _a.isLevel('2.1')) {
            this.outletService.remove(this.cxOutletRef, this.cxOutletPos, this.tpl);
        }
    }
};
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], OutletRefDirective.prototype, "cxOutletRef", void 0);
__decorate([
    Input()
], OutletRefDirective.prototype, "cxOutletPos", void 0);
OutletRefDirective = __decorate([
    Directive({
        selector: '[cxOutletRef]',
    })
], OutletRefDirective);

let OutletRefModule = class OutletRefModule {
};
OutletRefModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [OutletRefDirective],
        exports: [OutletRefDirective],
    })
], OutletRefModule);

let OutletRendererService = class OutletRendererService {
    constructor() {
        this.outletRefs = new BehaviorSubject(new Map());
    }
    /**
     * Dynamically render the templates in the specified array
     *
     * @param outlet
     */
    render(outlet) {
        if (this.outletRefs.value.size !== 0) {
            this.outletRefs.value.get(outlet).render();
        }
    }
    /**
     * Register outlet to be available to render dynamically
     *
     * @param cxOutlet
     * @param context
     */
    register(cxOutlet, context) {
        this.outletRefs.next(this.outletRefs.value.set(cxOutlet, context));
    }
    /**
     * Returns map of outlets
     *
     */
    getOutletRef(outlet) {
        return this.outletRefs.asObservable().pipe(map((val) => val.get(outlet)), filter((val) => Boolean(val)));
    }
};
OutletRendererService.ɵprov = ɵɵdefineInjectable({ factory: function OutletRendererService_Factory() { return new OutletRendererService(); }, token: OutletRendererService, providedIn: "root" });
OutletRendererService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OutletRendererService);

/**
 * The IntersectionService uses the native IntersectionObserver (v2), which
 * can be used to implement pre-loading and deferred loading of DOM content.
 *
 */
let IntersectionService = class IntersectionService {
    constructor(config) {
        this.config = config;
    }
    /**
     * Returns an Observable that emits only once a boolean value whenever
     * the given element has shown in the view port.
     *
     * The returned observable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first((v) => v === true));
    }
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    intersects(element, options = {}) {
        const elementVisible$ = new Observable((observer) => {
            const rootMargin = this.getRootMargin(options);
            const intersectOptions = { rootMargin, threshold: options.threshold };
            const intersectionObserver = new IntersectionObserver((entries) => {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap((entries) => entries), map((entry) => entry.isIntersecting), distinctUntilChanged());
        return elementVisible$;
    }
    getRootMargin(options = {}) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        const layoutConfig = this.config;
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    }
};
IntersectionService.ctorParameters = () => [
    { type: LayoutConfig }
];
IntersectionService.ɵprov = ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(ɵɵinject(LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
IntersectionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], IntersectionService);

/**
 * The defer loading serivce is used to defer loading of DOM elements
 * until the elements are required for the user experience.
 */
let DeferLoaderService = class DeferLoaderService {
    constructor(platformId, config, intersectionService) {
        this.platformId = platformId;
        this.config = config;
        this.intersectionService = intersectionService;
        this.globalLoadStrategy = config.deferredLoading
            ? config.deferredLoading.strategy
            : DeferLoadingStrategy.INSTANT;
    }
    /**
     * Defer loading till the element intersects the viewport.
     *
     * We evaluate whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     */
    load(element, options) {
        if (this.shouldLoadInstantly((options || {}).deferLoading)) {
            return of(true);
        }
        else {
            return this.intersectionService.isIntersected(element, options);
        }
    }
    shouldLoadInstantly(elementLoadingStrategy) {
        return (isPlatformServer(this.platformId) ||
            elementLoadingStrategy === DeferLoadingStrategy.INSTANT ||
            (elementLoadingStrategy !== DeferLoadingStrategy.DEFER &&
                this.globalLoadStrategy === DeferLoadingStrategy.INSTANT));
    }
};
DeferLoaderService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LayoutConfig },
    { type: IntersectionService }
];
DeferLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function DeferLoaderService_Factory() { return new DeferLoaderService(ɵɵinject(PLATFORM_ID), ɵɵinject(LayoutConfig), ɵɵinject(IntersectionService)); }, token: DeferLoaderService, providedIn: "root" });
DeferLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(PLATFORM_ID))
], DeferLoaderService);

let OutletDirective = class OutletDirective {
    constructor(vcr, templateRef, outletService, deferLoaderService, outletRendererService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.outletRendererService = outletRendererService;
        this.renderedTemplate = [];
        this.renderedComponents = new Map();
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    render() {
        this.vcr.clear();
        this.renderedTemplate = [];
        this.renderedComponents.clear();
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.build();
        }
    }
    ngOnChanges(changes) {
        if (changes.cxOutlet) {
            this.render();
            this.outletRendererService.register(this.cxOutlet, this);
        }
    }
    deferLoading() {
        this.loaded.emit(false);
        const hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // Although the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe(() => {
            this.build();
            this.loaded.emit(true);
        }));
    }
    build() {
        this.buildOutlet(OutletPosition.BEFORE);
        this.buildOutlet(OutletPosition.REPLACE);
        this.buildOutlet(OutletPosition.AFTER);
    }
    buildOutlet(position) {
        let templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        templates = templates === null || templates === void 0 ? void 0 : templates.filter((el) => !this.renderedTemplate.includes(el));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        const components = [];
        templates.forEach((obj) => {
            const component = this.create(obj);
            components.push(component);
        });
        this.renderedComponents.set(position, components);
    }
    create(tmplOrFactory) {
        this.renderedTemplate.push(tmplOrFactory);
        if (tmplOrFactory instanceof ComponentFactory) {
            const component = this.vcr.createComponent(tmplOrFactory);
            return component;
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            const view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
            return view;
        }
    }
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent nodes of the given element.
     *
     * We avoid traversing the parent _elements_, as this is blocking
     * ie11 implementations. One of the spare exclusions we make to not
     * supporting ie11.
     *
     * @param element
     */
    getHostElement(element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentNode);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService },
    { type: DeferLoaderService },
    { type: OutletRendererService }
];
__decorate([
    Input()
], OutletDirective.prototype, "cxOutlet", void 0);
__decorate([
    Input()
], OutletDirective.prototype, "cxOutletContext", void 0);
__decorate([
    Input()
], OutletDirective.prototype, "cxOutletDefer", void 0);
__decorate([
    Output()
], OutletDirective.prototype, "loaded", void 0);
OutletDirective = __decorate([
    Directive({
        selector: '[cxOutlet]',
    })
], OutletDirective);

let OutletModule = class OutletModule {
};
OutletModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [OutletDirective],
        providers: [OutletService],
        exports: [OutletDirective],
    })
], OutletModule);

let OutletRenderStrategy = class OutletRenderStrategy extends LaunchRenderStrategy {
    constructor(document, rendererFactory, outletService, componentFactoryResolver, outletRendererService) {
        super(document, rendererFactory);
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.outletService = outletService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletRendererService = outletRendererService;
    }
    /**
     * Renders the element in the configured outlet
     *
     * @param config
     * @param caller
     * @param vcr
     */
    render(config, caller) {
        if (this.shouldRender(caller, config)) {
            const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
            this.outletService.add(config.outlet, template, config.position ? config.position : OutletPosition.BEFORE);
            this.outletRendererService.render(config.outlet);
            this.renderedCallers.push({ caller });
            return this.outletRendererService.getOutletRef(config.outlet).pipe(map((outletDirective) => {
                const components = outletDirective.renderedComponents.get(config.position ? config.position : OutletPosition.BEFORE);
                return components
                    .reverse()
                    .find((component) => component.componentType === template.componentType);
            }), tap((component) => {
                if (config === null || config === void 0 ? void 0 : config.dialogType) {
                    this.applyClasses(component, config === null || config === void 0 ? void 0 : config.dialogType);
                }
            }));
        }
    }
    hasMatch(config) {
        return Boolean(config.outlet);
    }
    remove(caller, config) {
        const template = this.componentFactoryResolver.resolveComponentFactory(config.component);
        this.outletService.remove(config.outlet, config.position ? config.position : OutletPosition.BEFORE, template);
        super.remove(caller, config);
    }
};
OutletRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: OutletService },
    { type: ComponentFactoryResolver },
    { type: OutletRendererService }
];
OutletRenderStrategy.ɵprov = ɵɵdefineInjectable({ factory: function OutletRenderStrategy_Factory() { return new OutletRenderStrategy(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2), ɵɵinject(OutletService), ɵɵinject(ComponentFactoryResolver), ɵɵinject(OutletRendererService)); }, token: OutletRenderStrategy, providedIn: "root" });
OutletRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT))
], OutletRenderStrategy);

let RoutingRenderStrategy = class RoutingRenderStrategy extends LaunchRenderStrategy {
    constructor(document, rendererFactory, routingService) {
        super(document, rendererFactory);
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.routingService = routingService;
    }
    /**
     * Navigates to the route configured for the caller
     */
    render(config, _caller) {
        this.routingService.go(config);
    }
    hasMatch(config) {
        return Boolean(config.cxRoute);
    }
};
RoutingRenderStrategy.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 },
    { type: RoutingService }
];
RoutingRenderStrategy.ɵprov = ɵɵdefineInjectable({ factory: function RoutingRenderStrategy_Factory() { return new RoutingRenderStrategy(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2), ɵɵinject(RoutingService)); }, token: RoutingRenderStrategy, providedIn: "root" });
RoutingRenderStrategy = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT))
], RoutingRenderStrategy);

var LaunchDialogModule_1;
let LaunchDialogModule = LaunchDialogModule_1 = class LaunchDialogModule {
    static forRoot() {
        return {
            ngModule: LaunchDialogModule_1,
            providers: [{ provide: LayoutConfig, useExisting: Config }],
        };
    }
};
LaunchDialogModule = LaunchDialogModule_1 = __decorate([
    NgModule({
        providers: [
            {
                provide: LaunchRenderStrategy,
                useExisting: OutletRenderStrategy,
                multi: true,
            },
            {
                provide: LaunchRenderStrategy,
                useExisting: InlineRenderStrategy,
                multi: true,
            },
            {
                provide: LaunchRenderStrategy,
                useExisting: RoutingRenderStrategy,
                multi: true,
            },
        ],
    })
], LaunchDialogModule);

let AnonymousConsentLaunchDialogService = class AnonymousConsentLaunchDialogService {
    constructor(launchDialogService) {
        this.launchDialogService = launchDialogService;
    }
    openDialog(openElement, vcr) {
        const component = this.launchDialogService.launch(LAUNCH_CALLER.ANONYMOUS_CONSENT, vcr);
        if (component) {
            return combineLatest([
                component,
                this.launchDialogService.dialogClose,
            ]).pipe(filter(([, close]) => close && close !== undefined), tap(([comp]) => {
                openElement === null || openElement === void 0 ? void 0 : openElement.nativeElement.focus();
                this.launchDialogService.clear(LAUNCH_CALLER.ANONYMOUS_CONSENT);
                comp.destroy();
            }), map(([comp]) => comp));
        }
    }
};
AnonymousConsentLaunchDialogService.ctorParameters = () => [
    { type: LaunchDialogService }
];
AnonymousConsentLaunchDialogService.ɵprov = ɵɵdefineInjectable({ factory: function AnonymousConsentLaunchDialogService_Factory() { return new AnonymousConsentLaunchDialogService(ɵɵinject(LaunchDialogService)); }, token: AnonymousConsentLaunchDialogService, providedIn: "root" });
AnonymousConsentLaunchDialogService = __decorate([
    Injectable({ providedIn: 'root' })
], AnonymousConsentLaunchDialogService);

/** The element attribute used to store the focus state */
const FOCUS_ATTR = 'data-cx-focus';
/** The element attribute used to store the focus group state */
const FOCUS_GROUP_ATTR = 'data-cx-focus-group';

let BaseFocusService = class BaseFocusService {
};
BaseFocusService.ɵprov = ɵɵdefineInjectable({ factory: function BaseFocusService_Factory() { return new BaseFocusService(); }, token: BaseFocusService, providedIn: "root" });
BaseFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BaseFocusService);

/**
 * Abstract directive that provides a common interface for all focus directives:
 * - Block Focus
 * - Persist Focus
 * - Escape Focus
 * - Auto Focus
 * - Tab Focus
 * - Trap Focus
 * - Lock Focus
 */
let BaseFocusDirective = class BaseFocusDirective {
    constructor(elementRef, service) {
        this.elementRef = elementRef;
        this.service = service;
        /**
         * A default config can be provided for each directive if a specific focus directive
         * is used directly. i.e. `<div cxAutoFocus></div>`
         */
        this.defaultConfig = {};
    }
    ngOnInit() {
        this.setDefaultConfiguration();
        this.requiredTabindex = -1;
    }
    /**
     * Override the (input) config if it undefined or an empty string, with the
     * `defaultConfig`. The `defaultConfig` might be specified for each directive
     * differently. If a specific directive is used (i.e. `cxAutoFocus`), the
     * specific (inherited) defaultConfig will be used.
     */
    setDefaultConfiguration() {
        if ((!this.config || this.config === '') && this.defaultConfig) {
            this.config = this.defaultConfig;
        }
    }
    /**
     * Helper method to return the host element for the directive
     * given by the `elementRef`.
     */
    get host() {
        return this.elementRef.nativeElement;
    }
    /**
     * Force a tabindex on the host element if it is _requried_ to make the element
     * focusable. If the element is focusable by nature or by a given tabindex, the
     * `tabindex` is not applied.
     *
     * Buttons, active links, etc. do no need an explicit tabindex to receive focus.
     */
    set requiredTabindex(tabindex) {
        if (this.requiresExplicitTabIndex) {
            this.tabindex = tabindex;
        }
    }
    /**
     * Returns true if the host element does not have a tabindex defined
     * and it also doesn't get focus by browsers nature (i.e. button or
     * active link).
     */
    get requiresExplicitTabIndex() {
        return (this.tabindex === undefined &&
            ['button', 'input', 'select', 'textarea'].indexOf(this.host.tagName.toLowerCase()) === -1 &&
            !(this.host.tagName === 'A' &&
                (this.host.hasAttribute('href') || this.host.hasAttribute('routerlink'))));
    }
};
BaseFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BaseFocusService }
];
__decorate([
    Input(), HostBinding('attr.tabindex')
], BaseFocusDirective.prototype, "tabindex", void 0);
BaseFocusDirective = __decorate([
    Directive()
], BaseFocusDirective);

/**
 * Directive implementation that adds a CSS class to the host element
 * when the moused is used to focus an element. As soon as the keyboard
 * is used, the class is removed.
 */
let VisibleFocusDirective = class VisibleFocusDirective extends BaseFocusDirective {
    constructor() {
        super(...arguments);
        this.defaultConfig = { disableMouseFocus: true };
        /** controls a polyfill class for the lacking focus-visible feature */
        this.mouseFocus = false;
    }
    handleMousedown() {
        if (this.shouldFocusVisible) {
            this.mouseFocus = true;
        }
    }
    handleKeydown() {
        if (this.shouldFocusVisible) {
            this.mouseFocus = false;
        }
    }
    get shouldFocusVisible() {
        var _a;
        return (_a = this.config) === null || _a === void 0 ? void 0 : _a.disableMouseFocus;
    }
};
__decorate([
    HostBinding('class.mouse-focus')
], VisibleFocusDirective.prototype, "mouseFocus", void 0);
__decorate([
    HostListener('mousedown')
], VisibleFocusDirective.prototype, "handleMousedown", null);
__decorate([
    HostListener('keydown')
], VisibleFocusDirective.prototype, "handleKeydown", null);
VisibleFocusDirective = __decorate([
    Directive() // selector: '[cxVisibleFocus]'
], VisibleFocusDirective);

let BlockFocusDirective = 
// { selector: '[cxBlockFocus]' }
class BlockFocusDirective extends VisibleFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { block: true };
        // @Input('cxBlockFocus')
        this.config = {};
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.config.block) {
            this.tabindex = -1;
        }
    }
};
BlockFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BaseFocusService }
];
BlockFocusDirective = __decorate([
    Directive()
    // { selector: '[cxBlockFocus]' }
], BlockFocusDirective);

const GLOBAL_GROUP = '_g_';
/**
 * Shared service to persist the focus for an element or a group
 * of elements. The persisted element focus can be used to persist
 * the focus for a DOM tree, so that the focus remains after a repaint
 * or reoccurs when a DOM tree is "unlocked".
 */
let PersistFocusService = class PersistFocusService extends BaseFocusService {
    constructor() {
        super(...arguments);
        // this is going to fail as we have sub services. They will al have their own map.
        // We must bring this to a singleton map.
        this.focus = new Map();
    }
    get(group) {
        return this.focus.get(group || GLOBAL_GROUP);
    }
    /**
     * Persist the keyboard focus state for the given key. The focus is stored globally
     * or for the given group.
     */
    set(key, group) {
        if (key) {
            this.focus.set(group || GLOBAL_GROUP, key);
        }
    }
    /**
     * Clears the persisted keyboard focus state globally or for the given group.
     */
    clear(group) {
        this.focus.delete(group || GLOBAL_GROUP);
    }
    /**
     * Returns the group for the host element based on the configured group or
     * by the `data-cx-focus-group` attribute stored on the host.
     */
    getPersistenceGroup(host, config) {
        return (config === null || config === void 0 ? void 0 : config.group) ? config.group : host.getAttribute(FOCUS_GROUP_ATTR);
    }
};
PersistFocusService.ɵprov = ɵɵdefineInjectable({ factory: function PersistFocusService_Factory() { return new PersistFocusService(); }, token: PersistFocusService, providedIn: "root" });
PersistFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PersistFocusService);

/**
 * Directive that provides persistence of the focused state. This is useful
 * when a group of focusable elements got refocused or even recreated. That
 * happens often when the DOM is constructed with an `*ngIf` or `*ngFor`.
 *
 * The focus state is based on a configured _key_, which can be passed in the
 * config input, either by using a string primitive or `PersistFocusConfig.key`:
 *
 * ```html
 * <button cxPersistFocus="myKey"></button>
 * <button cxFocus="myKey"></button>
 * <button [cxFocus]="{{key:'myKey'}"></button>
 * ```
 *
 * The focus state can be part of a focus _group_, so that the state is shared
 * and remember for the given group. In order to detect the persistence for a
 * given element, we store the persistence key as a data attribute (`data-cx-focus`):
 *
 * ```html
 * <button data-cx-focus="myKey"></button>
 * ```
 *
 * Other keyboard focus directives can read the key to understand whether the element
 * should retrieve focus.
 *
 */
let PersistFocusDirective = class PersistFocusDirective extends BlockFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = {};
        /**
         * The persistence key can be passed directly or through the `FocusConfig.key`.
         * While this could be considered a global key, the likeliness of conflicts
         * is very small since the key is cleared when the focus is changed.
         */
        // @Input('cxPersistFocus')
        this.config = {};
    }
    handleFocus(event) {
        this.service.set(this.key, this.group);
        event === null || event === void 0 ? void 0 : event.preventDefault();
        event === null || event === void 0 ? void 0 : event.stopPropagation();
    }
    ngOnInit() {
        super.ngOnInit();
        this.attr = this.key ? this.key : undefined;
    }
    setDefaultConfiguration() {
        if (typeof this.config === 'string' && this.config !== '') {
            this.config = { key: this.config };
        }
        super.setDefaultConfiguration();
    }
    /**
     * Focus the element explicitly if it was focused before.
     */
    ngAfterViewInit() {
        if (this.isPersisted) {
            this.host.focus({ preventScroll: true });
        }
    }
    get isPersisted() {
        return !!this.key && this.service.get(this.group) === this.key;
    }
    /**
     * Returns the key for the host element, which is used to persist the
     * focus state. This is useful in cases where the DOM is rebuild.
     */
    get key() {
        var _a;
        return (_a = this.config) === null || _a === void 0 ? void 0 : _a.key;
    }
    /**
     * returns the persistence group (if any) for the focusable elements.
     */
    get group() {
        return this.service.getPersistenceGroup(this.host, this.config);
    }
};
PersistFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: PersistFocusService }
];
__decorate([
    HostBinding(`attr.${FOCUS_ATTR}`)
], PersistFocusDirective.prototype, "attr", void 0);
__decorate([
    HostListener('focus', ['$event'])
], PersistFocusDirective.prototype, "handleFocus", null);
PersistFocusDirective = __decorate([
    Directive() // selector: '[cxPersistFocus]',
], PersistFocusDirective);

let SelectFocusUtility = class SelectFocusUtility {
    constructor() {
        /**
         * Query selectors used to query focusable child elements of the host element.
         * The selectors are supplemented with `:not([disabled])` and `:not([hidden])`.
         */
        this.focusableSelectors = [
            'a[href]',
            'button',
            '[tabindex]',
            'input',
            'select',
            'textarea',
        ];
        // like to leave out the following as we don't use it, and make this list exensible.
        //   `[contentEditable=true]`, // very unlikely to suport as we're not a business tool
        //   `iframe`, // we really don't like iframes...
        //   `area[href]`, // very debatable!
        this.focusableSelectorSuffix = ':not([disabled]):not([hidden])';
    }
    query(host, selector) {
        if (!selector || selector === '') {
            return [];
        }
        return Array.from(host.querySelectorAll(selector));
    }
    findFirstFocusable(host, config = { autofocus: true }) {
        const selector = typeof (config === null || config === void 0 ? void 0 : config.autofocus) === 'string' ? config.autofocus : '[autofocus]';
        // fallback to first focusable
        return (this.query(host, selector).find((el) => !this.isHidden(el)) ||
            this.findFocusable(host).find((el) => Boolean(el)));
    }
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returned
     * @param invisible indicates whether hidden focusable elements should be returned
     */
    findFocusable(host, locked = false, invisible = false) {
        let suffix = this.focusableSelectorSuffix;
        if (!locked) {
            suffix += `:not([tabindex='-1'])`;
        }
        const selector = this.focusableSelectors
            .map((s) => (s += suffix))
            .join(',');
        return this.query(host, selector).filter((el) => !invisible ? !this.isHidden(el) : Boolean(el));
    }
    /**
     * Indicates whether the element is hidden by CSS. There are various CSS rules and
     * HTML structures which can lead to an hidden or invisible element. An `offsetParent`
     * of null indicates that the element or any of it's decendants is hidden (`display:none`).
     *
     * Oother techniques use the visibility (`visibility: hidden`), opacity (`opacity`) or
     * phyisical location on the element itself or any of it's anchestor elements. Those
     * technique require to work with the _computed styles_, which will cause a performance
     * downgrade. We don't do this in the standard implementaton.
     */
    isHidden(el) {
        return el.offsetParent === null;
    }
};
SelectFocusUtility.ɵprov = ɵɵdefineInjectable({ factory: function SelectFocusUtility_Factory() { return new SelectFocusUtility(); }, token: SelectFocusUtility, providedIn: "root" });
SelectFocusUtility = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SelectFocusUtility);

let EscapeFocusService = class EscapeFocusService extends PersistFocusService {
    constructor(selectFocusUtil) {
        super();
        this.selectFocusUtil = selectFocusUtil;
    }
    shouldFocus(config) {
        return !!(config === null || config === void 0 ? void 0 : config.focusOnEscape);
    }
    handleEscape(host, config, event) {
        var _a;
        if (this.shouldFocus(config)) {
            if (host !== event.target) {
                host.focus({ preventScroll: true });
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                if (config === null || config === void 0 ? void 0 : config.focusOnDoubleEscape) {
                    (_a = this.selectFocusUtil
                        .findFirstFocusable(host, { autofocus: true })) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
        }
    }
};
EscapeFocusService.ctorParameters = () => [
    { type: SelectFocusUtility }
];
EscapeFocusService.ɵprov = ɵɵdefineInjectable({ factory: function EscapeFocusService_Factory() { return new EscapeFocusService(ɵɵinject(SelectFocusUtility)); }, token: EscapeFocusService, providedIn: "root" });
EscapeFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], EscapeFocusService);

/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
let EscapeFocusDirective = class EscapeFocusDirective extends PersistFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { focusOnEscape: true };
        this.esc = new EventEmitter();
    }
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    handleEscape(event) {
        if (this.service.shouldFocus(this.config)) {
            this.service.handleEscape(this.host, this.config, event);
        }
        this.esc.emit(this.service.shouldFocus(this.config));
    }
    ngOnInit() {
        if (this.service.shouldFocus(this.config)) {
            this.requiredTabindex = -1;
        }
        super.ngOnInit();
    }
};
EscapeFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: EscapeFocusService }
];
__decorate([
    Output()
], EscapeFocusDirective.prototype, "esc", void 0);
__decorate([
    HostListener('keydown.escape', ['$event'])
], EscapeFocusDirective.prototype, "handleEscape", null);
EscapeFocusDirective = __decorate([
    Directive() // selector: '[cxEscFocus]',
], EscapeFocusDirective);

let AutoFocusService = class AutoFocusService extends EscapeFocusService {
    /**
     * Returns the first focusable child element of the host element.
     */
    findFirstFocusable(host, config = { autofocus: true }) {
        if ((config === null || config === void 0 ? void 0 : config.autofocus) === ':host') {
            return host;
        }
        else if (this.hasPersistedFocus(host, config)) {
            return this.getPersisted(host, this.getPersistenceGroup(host, config));
        }
        else {
            return this.selectFocusUtil.findFirstFocusable(host, config) || host;
        }
    }
    /**
     * Indicates whether any of the focusabe child elements is focused.
     */
    hasPersistedFocus(host, config) {
        return !!this.getPersisted(host, this.getPersistenceGroup(host, config));
    }
    /**
     * Returns the element that has a persisted focus state.
     *
     * @param host the `HTMLElement` used to query for focusable children
     * @param group the optional group for the persistent state, to separate different focus
     *   groups and remain the persistence
     */
    getPersisted(host, group) {
        if (!this.get(group)) {
            return;
        }
        const focussed = Array.from(host.querySelectorAll(`[${FOCUS_ATTR}='${this.get(group)}']`));
        return focussed.length > 0 ? focussed[0] : null;
    }
};
AutoFocusService.ɵprov = ɵɵdefineInjectable({ factory: function AutoFocusService_Factory() { return new AutoFocusService(ɵɵinject(SelectFocusUtility)); }, token: AutoFocusService, providedIn: "root" });
AutoFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AutoFocusService);

/**
 * Directive that focus the first nested _focusable_ element based on state and configuration:
 *
 * 1. focusable element that was left in a focused state (aka _persisted_ focus)
 * 2. focusable element selected by configured CSS selector (i.e. 'button[type=submit]')
 * 3. focusable element marked with the native HTML5 `autofocus` attribute
 * 4. first focusable element
 * 5. the host element, in case the configured CSS selector is `:host`.
 *
 * Example configurations:
 *
 * `<div cxAutoFocus>[...]</div>`
 *
 * `<div [cxAutoFocus]="{autofocus: false}">[...]</div>`
 *
 * `<div [cxAutoFocus]="{autofocus: 'button.active'}">[...]</div>`
 *
 * `<div [cxAutoFocus]="{autofocus: ':host'}">[...]</div>`
 *
 */
let AutoFocusDirective = class AutoFocusDirective extends EscapeFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        /** The AutoFocusDirective will be using autofocus by default  */
        this.defaultConfig = { autofocus: true };
    }
    /**
     * Focus the element explicitly if it was focussed before.
     */
    ngAfterViewInit() {
        if (this.shouldAutofocus) {
            this.handleFocus();
        }
        if (!this.shouldAutofocus || this.hasPersistedFocus) {
            super.ngAfterViewInit();
        }
    }
    /**
     * Mimic the focus without setting the actual focus on the host. The first
     * focusable child element will be focussed.
     */
    handleFocus(event) {
        var _a;
        if (this.shouldAutofocus) {
            if (!(event === null || event === void 0 ? void 0 : event.target) || event.target === this.host) {
                (_a = this.firstFocusable) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                event.target.focus();
            }
        }
        super.handleFocus(event);
    }
    /**
     * Helper function to get the first focusable child element
     */
    get hasPersistedFocus() {
        return this.service.hasPersistedFocus(this.host, this.config);
    }
    /**
     * Helper function to indicate whether we should use autofocus for the
     * child elements.
     */
    get shouldAutofocus() {
        var _a;
        return !!((_a = this.config) === null || _a === void 0 ? void 0 : _a.autofocus);
    }
    /**
     * Helper function to get the first focusable child element.
     *
     * We keep this private to not polute the API.
     */
    get firstFocusable() {
        return this.service.findFirstFocusable(this.host, this.config);
    }
};
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AutoFocusService }
];
AutoFocusDirective = __decorate([
    Directive() // selector: '[cxAutoFocus]'
], AutoFocusDirective);

let TabFocusService = class TabFocusService extends AutoFocusService {
    /**
     * Moves to the next (or previous) tab.
     */
    moveTab(host, config, increment, event) {
        if (config === null || config === void 0 ? void 0 : config.tab) {
            const next = config.tab === 'scroll'
                ? this.findNextScrollable(host, config, increment)
                : this.findNext(host, config, increment);
            next === null || next === void 0 ? void 0 : next.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * builds out virtual slides out of the full scrollable area, to allow
     * for maximum flexibility for the underlying layout without using hardcoded
     * slide sizes.
     */
    findNextScrollable(host, config, increment) {
        var _a;
        const active = this.getActiveChild(host, config);
        if (!active) {
            return;
        }
        // slide count
        const virtualSlideCount = Math.round(host.scrollWidth / host.clientWidth);
        // find current virtual slide
        const currentVirtualSlide = Math.round(active.offsetLeft / (host.scrollWidth / virtualSlideCount));
        let nextVirtualSlide = currentVirtualSlide + increment;
        if (increment === 1 /* NEXT */ &&
            nextVirtualSlide >= virtualSlideCount) {
            nextVirtualSlide = 0;
        }
        if (increment === -1 /* PREV */ && nextVirtualSlide < 0) {
            nextVirtualSlide = virtualSlideCount - 1;
        }
        const firstItemOnNextSlide = (_a = this.getChildren(host, config)) === null || _a === void 0 ? void 0 : _a.find((tab) => tab.offsetLeft >=
            (host.scrollWidth / virtualSlideCount) * nextVirtualSlide);
        return firstItemOnNextSlide;
    }
    findNext(host, config, increment) {
        const childs = this.getChildren(host, config);
        let activeIndex = childs === null || childs === void 0 ? void 0 : childs.findIndex((c) => c === this.getActiveChild(host, config));
        if (!activeIndex || activeIndex === -1) {
            activeIndex = 0;
        }
        activeIndex += increment;
        if (increment === 1 /* NEXT */ && activeIndex >= (childs === null || childs === void 0 ? void 0 : childs.length)) {
            activeIndex = childs.length - 1;
        }
        if (increment === -1 /* PREV */ && activeIndex < 0) {
            activeIndex = 0;
        }
        return childs ? childs[activeIndex] : undefined;
    }
    /**
     * Returns the active focusable child element. If there's no active
     * focusable child element, the first focusable child is returned.
     */
    getActiveChild(host, config) {
        const persisted = this.getPersisted(host, config === null || config === void 0 ? void 0 : config.group);
        if (persisted) {
            return persisted;
        }
        const children = this.getChildren(host, config);
        let index = children.findIndex((tab) => this.isActive(tab));
        if (!index || index === -1) {
            index = 0;
        }
        return children[index];
    }
    getChildren(host, config) {
        if (typeof config.tab === 'string' && config.tab !== 'scroll') {
            return this.selectFocusUtil.query(host, config.tab);
        }
        else {
            return this.findFocusable(host, true);
        }
    }
    /**
     * Returns all focusable child elements of the host element.
     *
     * @param host The host element is used to query child focusable elements.
     * @param locked Indicates if locked elements (tabindex=-1) should be returned, defaults to false.
     * @param invisible Indicates if invisible child elements should be returned, defaults to false.
     */
    findFocusable(host, locked = false, invisible = false) {
        return this.selectFocusUtil.findFocusable(host, locked, invisible);
    }
    isActive(el) {
        const child = document.activeElement;
        const selector = child.tagName;
        return (el === child ||
            !!Array.from(el.querySelectorAll(selector)).find((e) => e === child));
    }
};
TabFocusService.ɵprov = ɵɵdefineInjectable({ factory: function TabFocusService_Factory() { return new TabFocusService(ɵɵinject(SelectFocusUtility)); }, token: TabFocusService, providedIn: "root" });
TabFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TabFocusService);

/**
 * Directive to move the focus of ("locked") child elements. This is useful
 * for a nested list of tabs, carousel slides or any group of elements that
 * requires horizontal navigation.
 */
let TabFocusDirective = class TabFocusDirective extends AutoFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        /** `tab` defaults to true if the directive `cxTabFocus` is used. */
        this.defaultConfig = { tab: true };
        // @Input('cxTabFocus')
        this.config = {};
    }
    handleNextTab(event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, 1 /* NEXT */, event);
        }
    }
    handlePreviousTab(event) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.tab) {
            this.service.moveTab(this.host, this.config, -1 /* PREV */, event);
        }
    }
};
TabFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TabFocusService }
];
__decorate([
    HostListener('keydown.arrowRight', ['$event'])
], TabFocusDirective.prototype, "handleNextTab", null);
__decorate([
    HostListener('keydown.arrowLeft', ['$event'])
], TabFocusDirective.prototype, "handlePreviousTab", null);
TabFocusDirective = __decorate([
    Directive() // selector: '[cxTabFocus]'
], TabFocusDirective);

let TrapFocusService = class TrapFocusService extends TabFocusService {
    /**
     * Indicates whether any of the child elements of the host are focusable.
     *
     * @param host `HTMLElement` that is used to query the focusable elements.
     */
    hasFocusableChildren(host) {
        return this.findFocusable(host).length > 0;
    }
    /**
     * Focus the next or previous element of all available focusable elements.
     * The focus is _trapped_ in case there's no next or previous available element.
     * The focus will automatically move the start or end of the list.
     */
    moveFocus(host, config, increment, event) {
        const focusable = this.findFocusable(host);
        let index = focusable.findIndex((v) => v === event.target) + increment;
        const shouldMoveFocus = (index >= 0 && index < focusable.length) ||
            (index < 0 && this.getTrapStart(config.trap)) ||
            (index >= focusable.length && this.getTrapEnd(config.trap));
        if (shouldMoveFocus) {
            if (index >= focusable.length) {
                index = 0;
            }
            if (index < 0) {
                index = focusable.length - 1;
            }
            event.preventDefault();
            event.stopPropagation();
            const el = focusable[index];
            el.focus();
        }
    }
    getTrapStart(trap) {
        return trap === true || trap === 'start';
    }
    getTrapEnd(trap) {
        return trap === true || trap === 'end';
    }
};
TrapFocusService.ɵprov = ɵɵdefineInjectable({ factory: function TrapFocusService_Factory() { return new TrapFocusService(ɵɵinject(SelectFocusUtility)); }, token: TrapFocusService, providedIn: "root" });
TrapFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TrapFocusService);

/**
 * Directive that keeps the focus inside the focussable child elements,
 * also known as a _focus trap_.
 */
let TrapFocusDirective = class TrapFocusDirective extends TabFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = { trap: true };
        // @Input('cxTrapFocus')
        this.config = {};
        this.handleTrapDown = (event) => {
            if (!!this.config.trap) {
                this.moveFocus(event, 1 /* NEXT */);
            }
        };
        this.handleTrapUp = (event) => {
            if (!!this.config.trap) {
                this.moveFocus(event, -1 /* PREV */);
            }
        };
    }
    /**
     * Moves the focus of the element reference up or down, depending on the increment.
     * The focus of the element is trapped to avoid it from going out of the group.
     *
     * @param event UIEvent that is used to get the target element. The event is blocked
     *   from standard execution and further bubbling.
     * @param increment indicates whether the next or previous is focussed.
     */
    moveFocus(event, increment) {
        if (this.service.hasFocusableChildren(this.host)) {
            this.service.moveFocus(this.host, this.config, increment, event);
        }
    }
};
TrapFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TrapFocusService }
];
__decorate([
    HostListener('keydown.arrowdown', ['$event']),
    HostListener('keydown.tab', ['$event'])
], TrapFocusDirective.prototype, "handleTrapDown", void 0);
__decorate([
    HostListener('keydown.arrowup', ['$event']),
    HostListener('keydown.shift.tab', ['$event'])
], TrapFocusDirective.prototype, "handleTrapUp", void 0);
TrapFocusDirective = __decorate([
    Directive() // selector: '[cxTrapFocus]'
], TrapFocusDirective);

let LockFocusService = class LockFocusService extends TrapFocusService {
};
LockFocusService.ɵprov = ɵɵdefineInjectable({ factory: function LockFocusService_Factory() { return new LockFocusService(ɵɵinject(SelectFocusUtility)); }, token: LockFocusService, providedIn: "root" });
LockFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LockFocusService);

/**
 * Focusable elements exclude hidden elements by default, but this contradicts with
 * unlocking (hidden) elements.
 */
const UNLOCK_HIDDEN_ELEMENTS = true;
/**
 * Directive that adds persistence for focussed element in case
 * the elements are being rebuild. This happens often when change
 * detection kicks in because of new data set from the backend.
 */
let LockFocusDirective = class LockFocusDirective extends TrapFocusDirective {
    constructor(elementRef, service, renderer) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.renderer = renderer;
        this.defaultConfig = { lock: true };
        // @Input('cxLockFocus')
        this.config = {};
        /**
         * Emits an event when the host is unlocked.
         */
        this.unlock = new EventEmitter();
    }
    /**
     * When the user selects enter or space, the focusable childs are
     * unlocked, which means that the tabindex is set to 0.
     */
    handleEnter(event) {
        if (this.shouldLock && this.host === event.target) {
            this.unlockFocus(event);
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * In case any of the children elements is touched by the mouse,
     * we unlock the group to not break the mouse-experience.
     */
    handleClick(event) {
        if (this.shouldLock && this.isLocked) {
            this.unlockFocus(event);
            event.stopPropagation();
        }
    }
    lockFocus() {
        this.addTabindexToChildren(-1);
    }
    unlockFocus(event) {
        this.unlock.emit(true);
        this.addTabindexToChildren(0);
        // we focus the host if the event was triggered from a child
        if ((event === null || event === void 0 ? void 0 : event.target) === this.host) {
            // we wait a few milliseconds, mainly because firefox will otherwise apply
            // the mouse event on the new focused child element
            setTimeout(() => {
                super.handleFocus(event);
            }, 100);
        }
    }
    ngOnInit() {
        var _a, _b;
        super.ngOnInit();
        this.shouldLock = (_a = this.config) === null || _a === void 0 ? void 0 : _a.lock;
        if (this.shouldLock) {
            this.tabindex = 0;
            // Locked elements will be set to `autofocus` by default if it's not
            // been configured. This will ensure that autofocus kicks in upon unlock.
            if (!this.config.hasOwnProperty('autofocus')) {
                this.config.autofocus = true;
            }
            // Locked elements will be set to `focusOnEscape` by default if it's not
            // been configured. This will ensure that  the host gets locked again when
            // `escape` is pressed.
            if (!this.config.hasOwnProperty('focusOnEscape')) {
                this.config.focusOnEscape = !(((_b = this.config) === null || _b === void 0 ? void 0 : _b.focusOnEscape) === false);
            }
        }
    }
    ngAfterViewInit() {
        if (this.shouldLock) {
            /**
             * If the component hosts a group of focusable children elements,
             * we persist the group key to the children, so that they can taken this
             * into account when they persist their focus state.
             */
            if (!!this.group) {
                this.service.findFocusable(this.host).forEach((el) => 
                // we must do this in after view init as
                this.renderer.setAttribute(el, FOCUS_GROUP_ATTR, this.group));
            }
            if (this.shouldAutofocus) {
                this.handleFocus();
            }
        }
        super.ngAfterViewInit();
    }
    handleFocus(event) {
        if (this.shouldLock) {
            if (this.shouldUnlockAfterAutofocus(event)) {
                // Delay unlocking in case the host is using `ChangeDetectionStrategy.Default`
                setTimeout(() => this.unlockFocus(event));
            }
            else {
                setTimeout(() => this.lockFocus());
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                return;
            }
        }
        super.handleFocus(event);
    }
    handleEscape(event) {
        if (this.shouldLock) {
            this.service.clear(this.config.group);
        }
        super.handleEscape(event);
    }
    /**
     * When the handleFocus is called without an actual event, it's coming from Autofocus.
     * In this case we unlock the focusable children in case there's a focusable child that
     * was unlocked before.
     *
     * We keep this private to not polute the API.
     */
    shouldUnlockAfterAutofocus(event) {
        return !event && this.service.hasPersistedFocus(this.host, this.config);
    }
    /**
     * Add the tabindex attribute to the focusable children elements
     */
    addTabindexToChildren(i = 0) {
        if (this.shouldLock) {
            this.isLocked = i === -1;
            if (!(this.hasFocusableChildren && i === 0) || i === 0) {
                this.focusable.forEach((el) => this.renderer.setAttribute(el, 'tabindex', i.toString()));
            }
        }
    }
    /**
     * Utility method, returns all focusable children for the host element.
     *
     * We keep this private to not polute the API.
     */
    get hasFocusableChildren() {
        return this.service.hasFocusableChildren(this.host);
    }
    /**
     * Returns the focusable children of the host element. If the host element
     * is configured to be locked, the query is restricted to child elements
     * with a tabindex !== `-1`.
     *
     * We keep this private to not polute the API.
     */
    get focusable() {
        return this.service.findFocusable(this.host, this.shouldLock, UNLOCK_HIDDEN_ELEMENTS);
    }
};
LockFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LockFocusService },
    { type: Renderer2 }
];
__decorate([
    HostBinding('class.focus-lock')
], LockFocusDirective.prototype, "shouldLock", void 0);
__decorate([
    HostBinding('class.is-locked')
], LockFocusDirective.prototype, "isLocked", void 0);
__decorate([
    Output()
], LockFocusDirective.prototype, "unlock", void 0);
__decorate([
    HostListener('keydown.enter', ['$event']),
    HostListener('keydown.space', ['$event'])
], LockFocusDirective.prototype, "handleEnter", null);
__decorate([
    HostListener('click', ['$event'])
], LockFocusDirective.prototype, "handleClick", null);
LockFocusDirective = __decorate([
    Directive() // selector: '[cxLockFocus]'
], LockFocusDirective);

let KeyboardFocusService = class KeyboardFocusService extends LockFocusService {
};
KeyboardFocusService.ɵprov = ɵɵdefineInjectable({ factory: function KeyboardFocusService_Factory() { return new KeyboardFocusService(ɵɵinject(SelectFocusUtility)); }, token: KeyboardFocusService, providedIn: "root" });
KeyboardFocusService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], KeyboardFocusService);

let FocusDirective = class FocusDirective extends LockFocusDirective {
    constructor(elementRef, service, renderer) {
        super(elementRef, service, renderer);
        this.elementRef = elementRef;
        this.service = service;
        this.renderer = renderer;
        this.defaultConfig = {};
        // tslint:disable-next-line: no-input-rename
        this.config = {};
    }
};
FocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: KeyboardFocusService },
    { type: Renderer2 }
];
__decorate([
    Input('cxFocus')
], FocusDirective.prototype, "config", void 0);
FocusDirective = __decorate([
    Directive({
        selector: '[cxFocus]',
    })
], FocusDirective);

const directives = [
    // PersistFocusDirective,
    // VisibleFocusDirective,
    // BlockFocusDirective,
    // AutoFocusDirective,
    // EscapeFocusDirective,
    // LockFocusDirective,
    // TrapFocusDirective,
    // TabFocusDirective,
    FocusDirective,
];
let KeyboardFocusModule = class KeyboardFocusModule {
};
KeyboardFocusModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [...directives],
        exports: [...directives],
    })
], KeyboardFocusModule);

// given that we're likely going to refactor the directives, we're
// export * from './autofocus/index';
// export * from './base/index';
// export * from './block/index';
// export * from './escape/index';
// export * from './lock/index';
// export * from './persist/index';
// export * from './tab/index';
// export * from './trap/index';
// export * from './visible/index';
// export * from './keyboard-focus.model';

let AnonymousConsentManagementBannerComponent = class AnonymousConsentManagementBannerComponent {
    constructor(anonymousConsentsService, anonymousConsentLaunchDialogService, vcr) {
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentLaunchDialogService = anonymousConsentLaunchDialogService;
        this.vcr = vcr;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    viewDetails() {
        this.hideBanner();
        const dialog = this.anonymousConsentLaunchDialogService.openDialog(null, this.vcr);
        if (dialog) {
            this.subscriptions.add(dialog.subscribe());
        }
    }
    allowAll() {
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap(() => this.hideBanner()))
            .subscribe());
    }
    hideBanner() {
        this.anonymousConsentsService.toggleBannerDismissed(true);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
AnonymousConsentManagementBannerComponent.ctorParameters = () => [
    { type: AnonymousConsentsService },
    { type: AnonymousConsentLaunchDialogService },
    { type: ViewContainerRef }
];
AnonymousConsentManagementBannerComponent = __decorate([
    Component({
        selector: 'cx-anonymous-consent-management-banner',
        template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
    })
], AnonymousConsentManagementBannerComponent);

var ICON_TYPE;
(function (ICON_TYPE) {
    ICON_TYPE["STAR"] = "STAR";
    ICON_TYPE["SEARCH"] = "SEARCH";
    ICON_TYPE["CART"] = "CART";
    ICON_TYPE["INFO"] = "INFO";
    ICON_TYPE["GRID"] = "GRID";
    ICON_TYPE["LIST"] = "LIST";
    ICON_TYPE["CARET_DOWN"] = "CARET_DOWN";
    ICON_TYPE["CARET_LEFT"] = "CARET_LEFT";
    ICON_TYPE["CARET_RIGHT"] = "CARET_RIGHT";
    ICON_TYPE["CLOSE"] = "CLOSE";
    ICON_TYPE["ERROR"] = "ERROR";
    ICON_TYPE["WARNING"] = "WARNING";
    ICON_TYPE["SUCCESS"] = "SUCCESS";
    ICON_TYPE["VISA"] = "VISA";
    ICON_TYPE["MASTER_CARD"] = "MASTER_CARD";
    ICON_TYPE["AMEX"] = "AMEX";
    ICON_TYPE["DINERS_CLUB"] = "DINERS_CLUB";
    ICON_TYPE["CREDIT_CARD"] = "CREDIT_CARD";
    ICON_TYPE["EXPAND"] = "EXPAND";
    ICON_TYPE["COLLAPSE"] = "COLLAPSE";
    ICON_TYPE["RESET"] = "RESET";
    ICON_TYPE["CIRCLE"] = "CIRCLE";
    ICON_TYPE["HEART"] = "HEART";
    ICON_TYPE["EMPTY_HEART"] = "EMPTY_HEART";
    ICON_TYPE["FILTER"] = "FILTER";
})(ICON_TYPE || (ICON_TYPE = {}));
let IconConfig = class IconConfig {
};
IconConfig.ɵprov = ɵɵdefineInjectable({ factory: function IconConfig_Factory() { return ɵɵinject(Config); }, token: IconConfig, providedIn: "root" });
IconConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], IconConfig);
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automitacally loaded in case they're required for the `ICON_TYPE`.
 */
var IconResourceType;
(function (IconResourceType) {
    /**
     * An svg based icon requires an SVG resource that must be loaded,
     * this is typically a sprite svg file.
     */
    IconResourceType["SVG"] = "svg";
    /**
     * A font based ICON might require an additional CSS file to be loaded.
     */
    IconResourceType["LINK"] = "link";
    /**
     * Text based icons will simply add the ICON string to the DOM. Text icons do not need an image
     * or CSS pseudo class (i.e. :before), as the text itself is the icon (i.e. +)
     */
    IconResourceType["TEXT"] = "text";
})(IconResourceType || (IconResourceType = {}));

const fontawesomeIconConfig = {
    icon: {
        symbols: {
            SEARCH: 'fas fa-search',
            CART: 'fas fa-shopping-cart',
            INFO: 'fas fa-info-circle',
            STAR: 'fas fa-star',
            GRID: 'fas fa-th-large',
            LIST: 'fas fa-bars',
            CARET_DOWN: 'fas fa-angle-down',
            CARET_RIGHT: 'fas fa-angle-right',
            CARET_LEFT: 'fas fa-angle-left',
            ERROR: 'fas fa-exclamation-circle',
            WARNING: 'fas fa-exclamation-triangle',
            SUCCESS: 'fas fa-check-circle',
            CLOSE: 'fas fa-times',
            VISA: 'fab fa-cc-visa',
            MASTER_CARD: 'fab fa-cc-mastercard',
            AMEX: 'fab fa-cc-amex',
            DINERS_CLUB: 'fab fa-cc-diners-club',
            CREDIT_CARD: 'fas fa-credit-card',
            COLLAPSE: 'fas fa-minus',
            EXPAND: 'fas fa-plus',
            RESET: 'fas fa-times-circle',
            CIRCLE: 'fas fa-circle',
            HEART: 'fas fa-heart',
            EMPTY_HEART: 'far fa-heart',
            FILTER: 'fas fa-filter',
        },
        resources: [
            {
                type: IconResourceType.LINK,
                url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
            },
        ],
    },
};

let IconLoaderService = class IconLoaderService {
    constructor(winRef, iconConfig, sanitizer) {
        this.winRef = winRef;
        this.iconConfig = iconConfig;
        this.sanitizer = sanitizer;
        this.loadedResources = [];
    }
    /**
     * Returns an html fragment which can be added to the DOM in a safe way.
     */
    getHtml(type) {
        if (this.isResourceType(type, IconResourceType.SVG)) {
            return this.sanitizer.bypassSecurityTrustHtml(`<svg><use xlink:href="${this.getSvgPath(type)}"></use></svg>`);
        }
        if (this.isResourceType(type, IconResourceType.TEXT)) {
            return this.sanitizer.bypassSecurityTrustHtml(this.getSymbol(type));
        }
    }
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    getStyleClasses(iconType) {
        return this.getSymbol(iconType) || '';
    }
    /**
     * Indicates whether the given `ICON_TYPE` is configured for
     * the given `IconResourceType`.
     */
    isResourceType(iconType, resourceType) {
        return (this.config.resources &&
            !!this.config.resources.find((res) => res.types && res.type === resourceType && res.types.includes(iconType)));
    }
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    getSvgPath(iconType) {
        const svgResource = this.config.resources.find((res) => res.type === IconResourceType.SVG &&
            res.types &&
            res.types.includes(iconType));
        if (svgResource) {
            return svgResource.url
                ? `${svgResource.url}#${this.getSymbol(iconType)}`
                : `#${this.getSymbol(iconType)}`;
        }
    }
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    addLinkResource(iconType) {
        const resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource &&
            resource.url &&
            !this.loadedResources.includes(resource.url)) {
            this.loadedResources.push(resource.url);
            const head = this.winRef.document.getElementsByTagName('head')[0];
            const link = this.winRef.document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = resource.url;
            head.appendChild(link);
        }
    }
    findResource(iconType, resourceType) {
        if (!this.config.resources) {
            return;
        }
        let resource = this.config.resources.find((res) => res.type === resourceType && res.types && res.types.includes(iconType));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.resources.find((res) => (res.type === resourceType && !res.types) || res.types === []);
        }
        return resource;
    }
    getSymbol(iconType) {
        if (this.config && this.config.symbols && this.config.symbols[iconType]) {
            return this.config.symbols[iconType];
        }
    }
    get config() {
        return this.iconConfig.icon;
    }
};
IconLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: IconConfig },
    { type: DomSanitizer }
];
IconLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(ɵɵinject(WindowRef), ɵɵinject(IconConfig), ɵɵinject(DomSanitizer)); }, token: IconLoaderService, providedIn: "root" });
IconLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], IconLoaderService);

/**
 *
 * The icon component can be added in different ways:
 *
 * With the component selector:
 * `<cx-icon type="SEARCH"></cx-icon>`
 *
 * With the attribute selector:
 * `<span cxIcon="STAR"></span>`
 *
 * Additionally, content can be projected to the icon:
 *
 * `<button cxIcon="HAPPY">happy label</button>`
 *
 * The above button would become (based on a TEXT resource type):
 * `<button>😊happy label</button>`
 *
 * While the content is projected, the icon itself doesn't require an
 * additional DOM node which is an advantage over the component selector.
 */
let IconComponent = class IconComponent {
    constructor(iconLoader, elementRef, renderer) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * The cxIcon directive is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set cxIcon(type) {
        this.setIcon(type);
    }
    /**
     * The type input parameter is bound to the icon type. You can feed the `ICON_TYPE` to
     * accomplish a configurable button in the UI.
     */
    set type(type) {
        this.setIcon(type);
    }
    setIcon(type) {
        if (!type || type === '') {
            return;
        }
        this.icon = this.iconLoader.getHtml(type);
        this.addStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    }
    /**
     * Adds the style classes and the link resource (if available).
     */
    addStyleClasses(type) {
        this.renderer.addClass(this.host, 'cx-icon');
        if (this.styleClasses) {
            this.styleClasses.forEach((cls) => this.renderer.removeClass(this.host, cls));
        }
        this.styleClasses = this.iconLoader.getStyleClasses(type).split(' ');
        this.styleClasses.forEach((cls) => {
            if (cls !== '') {
                this.renderer.addClass(this.host, cls);
            }
        });
    }
    get host() {
        return this.elementRef.nativeElement;
    }
};
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], IconComponent.prototype, "cxIcon", null);
__decorate([
    Input()
], IconComponent.prototype, "type", null);
IconComponent = __decorate([
    Component({
        selector: 'cx-icon,[cxIcon]',
        template: "<i [outerHTML]=\"icon\"></i><ng-content></ng-content>\n"
    })
], IconComponent);

let IconModule = class IconModule {
};
IconModule = __decorate([
    NgModule({
        declarations: [IconComponent],
        imports: [CommonModule],
        providers: [provideDefaultConfig(fontawesomeIconConfig)],
        exports: [IconComponent],
    })
], IconModule);

let AnonymousConsentDialogComponent = class AnonymousConsentDialogComponent {
    constructor(config, anonymousConsentsService, el, launchDialogService) {
        this.config = config;
        this.anonymousConsentsService = anonymousConsentsService;
        this.el = el;
        this.launchDialogService = launchDialogService;
        this.role = 'dialog';
        this.modal = true;
        this.subscriptions = new Subscription();
        this.showLegalDescription = true;
        this.iconTypes = ICON_TYPE;
        this.requiredConsents = [];
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'input[type="checkbox"]',
            focusOnEscape: true,
        };
        if (Boolean(this.config.anonymousConsents)) {
            this.showLegalDescription = this.config.anonymousConsents.showLegalDescriptionInDialog;
            if (Boolean(this.config.anonymousConsents.requiredConsents)) {
                this.requiredConsents = this.config.anonymousConsents.requiredConsents;
            }
        }
    }
    handleClick(event) {
        // Close on click outside the dialog window
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.close('Cross click');
        }
    }
    ngOnInit() {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    rejectAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(([templates, consents]) => templates.forEach((template) => {
            const consent = this.getCorrespondingConsent(template, consents);
            if (this.anonymousConsentsService.isConsentGiven(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.withdrawConsent(template.id);
            }
        })))
            .subscribe());
        this.close('rejectAll');
    }
    allowAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(([templates, consents]) => templates.forEach((template) => {
            const consent = this.getCorrespondingConsent(template, consents);
            if ((consent && consent.consentState == null) ||
                this.anonymousConsentsService.isConsentWithdrawn(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.giveConsent(template.id);
            }
        })))
            .subscribe());
        this.close('allowAll');
    }
    isRequiredConsent(template) {
        return (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents) &&
            this.config.anonymousConsents.requiredConsents.includes(template.id));
    }
    onConsentChange({ given, template, }) {
        if (given) {
            this.anonymousConsentsService.giveConsent(template.id);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(template.id);
        }
    }
    getCorrespondingConsent(template, consents = []) {
        for (const consent of consents) {
            if (template.id === consent.templateCode) {
                return consent;
            }
        }
        return null;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
AnonymousConsentDialogComponent.ctorParameters = () => [
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: ElementRef },
    { type: LaunchDialogService }
];
__decorate([
    HostBinding('attr.role')
], AnonymousConsentDialogComponent.prototype, "role", void 0);
__decorate([
    HostBinding('attr.aria-modal')
], AnonymousConsentDialogComponent.prototype, "modal", void 0);
__decorate([
    HostListener('click', ['$event'])
], AnonymousConsentDialogComponent.prototype, "handleClick", null);
AnonymousConsentDialogComponent = __decorate([
    Component({
        selector: 'cx-anonymous-consent-dialog',
        template: "<div\n  class=\"cx-anonymous-consent-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-dialog-content\">\n    <div *ngIf=\"loading$ | async; else dialogBody\">\n      <cx-spinner></cx-spinner>\n    </div>\n    <ng-template #dialogBody>\n      <div class=\"cx-dialog-header\">\n        <h3>\n          {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n        </h3>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"close('Cross click')\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n      <!-- Separator -->\n      <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n        {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n      </div>\n      <!-- Actions -->\n      <div class=\"cx-dialog-buttons\">\n        <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n          'anonymousConsents.dialog.clearAll' | cxTranslate\n        }}</a>\n        <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n          'anonymousConsents.dialog.selectAll' | cxTranslate\n        }}</a>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"cx-dialog-body\" *ngIf=\"templates$ | async as templates\">\n        <ng-container *ngIf=\"consents$ | async as consents\">\n          <div\n            class=\"cx-dialog-row col-sm-12 col-md-6\"\n            *ngFor=\"let template of templates\"\n          >\n            <cx-consent-management-form\n              [consentTemplate]=\"template\"\n              [requiredConsents]=\"requiredConsents\"\n              [consent]=\"getCorrespondingConsent(template, consents)\"\n              (consentChanged)=\"onConsentChange($event)\"\n            ></cx-consent-management-form>\n          </div>\n        </ng-container>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
    })
], AnonymousConsentDialogComponent);

const defaultAnonymousConsentLayoutConfig = {
    launch: {
        ANONYMOUS_CONSENT: {
            inline: true,
            component: AnonymousConsentDialogComponent,
            dialogType: DIALOG_TYPE.DIALOG,
        },
    },
};

let AnonymousConsentOpenDialogComponent = class AnonymousConsentOpenDialogComponent {
    constructor(vcr, anonymousConsentLaunchDialogService) {
        this.vcr = vcr;
        this.anonymousConsentLaunchDialogService = anonymousConsentLaunchDialogService;
    }
    openDialog() {
        const dialog = this.anonymousConsentLaunchDialogService.openDialog(this.openElement, this.vcr);
        if (dialog) {
            dialog.pipe(take(1)).subscribe();
        }
    }
};
AnonymousConsentOpenDialogComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: AnonymousConsentLaunchDialogService }
];
__decorate([
    ViewChild('open')
], AnonymousConsentOpenDialogComponent.prototype, "openElement", void 0);
AnonymousConsentOpenDialogComponent = __decorate([
    Component({
        selector: 'cx-anonymous-consent-open-dialog',
        template: "<button #open class=\"btn btn-link\" (click)=\"openDialog()\">\n  {{ 'anonymousConsents.preferences' | cxTranslate }}\n</button>\n"
    })
], AnonymousConsentOpenDialogComponent);

let AnonymousConsentManagementBannerModule = class AnonymousConsentManagementBannerModule {
};
AnonymousConsentManagementBannerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            FeaturesConfigModule,
            KeyboardFocusModule,
        ],
        providers: [
            provideConfig(defaultAnonymousConsentLayoutConfig),
            provideDefaultConfig({
                cmsComponents: {
                    AnonymousConsentManagementBannerComponent: {
                        component: AnonymousConsentManagementBannerComponent,
                        deferLoading: DeferLoadingStrategy.INSTANT,
                    },
                    AnonymousConsentOpenDialogComponent: {
                        component: AnonymousConsentOpenDialogComponent,
                    },
                },
            }),
        ],
        declarations: [
            AnonymousConsentManagementBannerComponent,
            AnonymousConsentOpenDialogComponent,
        ],
        exports: [
            AnonymousConsentManagementBannerComponent,
            AnonymousConsentOpenDialogComponent,
        ],
        entryComponents: [
            AnonymousConsentManagementBannerComponent,
            AnonymousConsentOpenDialogComponent,
        ],
    })
], AnonymousConsentManagementBannerModule);

// TODO: Improve a11y with better text appropriate to usage (example: loading cart spinner)
let SpinnerComponent = class SpinnerComponent {
    constructor() { }
};
SpinnerComponent = __decorate([
    Component({
        selector: 'cx-spinner',
        template: "<div class=\"loader-container\">\n  <div class=\"loader\">{{ 'spinner.loading' | cxTranslate }}</div>\n</div>\n"
    })
], SpinnerComponent);

let SpinnerModule = class SpinnerModule {
};
SpinnerModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule],
        declarations: [SpinnerComponent],
        exports: [SpinnerComponent],
    })
], SpinnerModule);

let ConsentManagementFormComponent = class ConsentManagementFormComponent {
    constructor() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.consentChanged = new EventEmitter();
    }
    ngOnInit() {
        if (this.consent) {
            this.consentGiven = Boolean(this.consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        else {
            if (this.consentTemplate && this.consentTemplate.currentConsent) {
                if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                    this.consentGiven = false;
                }
                else if (this.consentTemplate.currentConsent.consentGivenDate) {
                    this.consentGiven = true;
                }
            }
        }
    }
    onConsentChange() {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    }
    isRequired(templateId) {
        return this.requiredConsents.includes(templateId);
    }
};
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "consentTemplate", void 0);
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "requiredConsents", void 0);
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "consent", void 0);
__decorate([
    Output()
], ConsentManagementFormComponent.prototype, "consentChanged", void 0);
ConsentManagementFormComponent = __decorate([
    Component({
        selector: 'cx-consent-management-form',
        template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <span class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <br />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
    })
], ConsentManagementFormComponent);

let ConsentManagementComponent = class ConsentManagementComponent {
    constructor(userConsentService, globalMessageService, anonymousConsentsConfig, anonymousConsentsService, authService) {
        this.userConsentService = userConsentService;
        this.globalMessageService = globalMessageService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.subscriptions = new Subscription();
        this.allConsentsLoading = new BehaviorSubject(false);
        this.requiredConsents = [];
    }
    ngOnInit() {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map(([consentLoading, giveConsentLoading, withdrawConsentLoading, isUserLoggedIn, allConsentsLoading,]) => consentLoading ||
            giveConsentLoading ||
            withdrawConsentLoading ||
            !isUserLoggedIn ||
            allConsentsLoading));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    consentListInit() {
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter(([_templateList, _anonymousTemplates, isUserLoggedIn]) => isUserLoggedIn), tap(([templateList, _anonymousTemplates]) => {
            if (!this.consentsExists(templateList)) {
                this.userConsentService.loadConsents();
            }
        }), map(([templateList, anonymousTemplates]) => {
            if (Boolean(this.anonymousConsentsConfig.anonymousConsents)) {
                if (Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
                    this.requiredConsents = this.anonymousConsentsConfig.anonymousConsents.requiredConsents;
                }
                if (Boolean(this.anonymousConsentsConfig.anonymousConsents
                    .consentManagementPage)) {
                    return this.hideAnonymousConsents(templateList, anonymousTemplates);
                }
            }
            return templateList;
        }));
    }
    hideAnonymousConsents(templateList, anonymousTemplates = []) {
        let hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map((template) => template.id);
            return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
        }
        if (Boolean(this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .hideConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
                .hideConsents.length > 0) {
            hideTemplateIds = this.anonymousConsentsConfig.anonymousConsents
                .consentManagementPage.hideConsents;
        }
        return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
    }
    giveConsentInit() {
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe((success) => this.onConsentGivenSuccess(success)));
    }
    withdrawConsentInit() {
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map(([, withdrawalSuccess]) => withdrawalSuccess), tap((withdrawalSuccess) => {
            if (withdrawalSuccess) {
                this.userConsentService.loadConsents();
            }
        }))
            .subscribe((withdrawalSuccess) => this.onConsentWithdrawnSuccess(withdrawalSuccess)));
    }
    consentsExists(templateList) {
        return Boolean(templateList) && templateList.length > 0;
    }
    onConsentChange({ given, template, }) {
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    }
    onConsentGivenSuccess(success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    onConsentWithdrawnSuccess(success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    rejectAll(templates = []) {
        const consentsToWithdraw = [];
        templates.forEach((template) => {
            if (this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap((_timesLoaded) => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupWithdrawalStream(consentsToWithdraw = []) {
        const loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter((loading) => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const withdraw$ = count$.pipe(tap((i) => {
            if (i < consentsToWithdraw.length) {
                this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        }));
        const checkTimesLoaded$ = withdraw$.pipe(filter((timesLoaded) => timesLoaded === consentsToWithdraw.length));
        return checkTimesLoaded$;
    }
    allowAll(templates = []) {
        const consentsToGive = [];
        templates.forEach((template) => {
            if (this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap((_timesLoaded) => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupGiveStream(consentsToGive = []) {
        const loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter((loading) => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const giveConsent$ = count$.pipe(tap((i) => {
            if (i < consentsToGive.length) {
                this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        }));
        const checkTimesLoaded$ = giveConsent$.pipe(filter((timesLoaded) => timesLoaded === consentsToGive.length));
        return checkTimesLoaded$;
    }
    isRequiredConsent(template) {
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    }
};
ConsentManagementComponent.ctorParameters = () => [
    { type: UserConsentService },
    { type: GlobalMessageService },
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: AuthService }
];
ConsentManagementComponent = __decorate([
    Component({
        selector: 'cx-consent-management',
        template: "<div *ngIf=\"loading$ | async; else consentManagementForm\">\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</div>\n\n<ng-template #consentManagementForm>\n  <ng-container *ngIf=\"templateList$ | async as templateList\">\n    <div class=\"cx-consent-action-links\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <button\n          tabindex=\"0\"\n          class=\"btn btn-link cx-action-link\"\n          (click)=\"rejectAll(templateList)\"\n        >\n          {{ 'consentManagementForm.clearAll' | cxTranslate }}\n        </button>\n        <button\n          tabindex=\"0\"\n          class=\"btn btn-link cx-action-link\"\n          (click)=\"allowAll(templateList)\"\n        >\n          {{ 'consentManagementForm.selectAll' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"cx-consent-toggles\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList\"\n          [consentTemplate]=\"consentTemplate\"\n          [requiredConsents]=\"requiredConsents\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n"
    })
], ConsentManagementComponent);

let ConsentManagementModule = class ConsentManagementModule {
};
ConsentManagementModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
            IconModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ConsentManagementComponent: {
                        component: ConsentManagementComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
        exports: [ConsentManagementComponent, ConsentManagementFormComponent],
        entryComponents: [ConsentManagementComponent],
    })
], ConsentManagementModule);

let AnonymousConsentsDialogModule = class AnonymousConsentsDialogModule {
};
AnonymousConsentsDialogModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            IconModule,
            SpinnerModule,
            ConsentManagementModule,
            KeyboardFocusModule,
        ],
        declarations: [AnonymousConsentDialogComponent],
        entryComponents: [AnonymousConsentDialogComponent],
        exports: [AnonymousConsentDialogComponent],
    })
], AnonymousConsentsDialogModule);

let CardComponent = class CardComponent {
    constructor() {
        this.iconTypes = ICON_TYPE;
        this.deleteCard = new EventEmitter();
        this.setDefaultCard = new EventEmitter();
        this.sendCard = new EventEmitter();
        this.editCard = new EventEmitter();
        this.cancelCard = new EventEmitter();
        this.border = false;
        this.editMode = false;
        this.isDefault = false;
        this.fitToContainer = false;
    }
    // ACTIONS
    setEditMode() {
        this.editMode = true;
    }
    cancelEdit() {
        this.editMode = false;
        this.cancelCard.emit(5);
    }
    delete() {
        this.deleteCard.emit(1);
    }
    setDefault() {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    }
    send() {
        this.sendCard.emit(3);
    }
    edit() {
        this.editCard.emit(4);
    }
    ngOnInit() { }
};
__decorate([
    Output()
], CardComponent.prototype, "deleteCard", void 0);
__decorate([
    Output()
], CardComponent.prototype, "setDefaultCard", void 0);
__decorate([
    Output()
], CardComponent.prototype, "sendCard", void 0);
__decorate([
    Output()
], CardComponent.prototype, "editCard", void 0);
__decorate([
    Output()
], CardComponent.prototype, "cancelCard", void 0);
__decorate([
    Input()
], CardComponent.prototype, "border", void 0);
__decorate([
    Input()
], CardComponent.prototype, "editMode", void 0);
__decorate([
    Input()
], CardComponent.prototype, "isDefault", void 0);
__decorate([
    Input()
], CardComponent.prototype, "content", void 0);
__decorate([
    Input()
], CardComponent.prototype, "fitToContainer", void 0);
CardComponent = __decorate([
    Component({
        selector: 'cx-card',
        template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"delete()\"\n            (keydown.enter)=\"delete()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"setDefault()\"\n            (keydown.enter)=\"setDefault()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"send()\"\n            (keydown.enter)=\"send()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link cx-action-link\"\n            (click)=\"edit()\"\n            (keydown.enter)=\"edit()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link cx-action-link\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CardComponent);

let CardModule = class CardModule {
};
CardModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule, IconModule],
        declarations: [CardComponent],
        exports: [CardComponent],
    })
], CardModule);

let CarouselService = class CarouselService {
    constructor(winRef) {
        this.winRef = winRef;
    }
    /**
     * The number of items per slide is calculated by the help of
     * the item width and the available width of the host element.
     * This appoach makes it possible to place the carousel in different
     * layouts. Instead of using the page breakpoints, the host size is
     * taken into account.
     *
     * Since there's no element resize API available, we use the
     * window `resize` event, so that we can adjust the number of items
     * whenever the window got resized.
     */
    getItemsPerSlide(nativeElement, itemWidth) {
        return this.winRef.resize$.pipe(map(() => nativeElement.clientWidth), map((totalWidth) => this.calculateItems(totalWidth, itemWidth)));
    }
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    calculateItems(availableWidth, itemWidth) {
        let calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            const num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / num;
        }
        if (itemWidth.endsWith('%')) {
            const perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * (perc / 100));
        }
        return Math.floor(calculatedItems) || 1;
    }
};
CarouselService.ctorParameters = () => [
    { type: WindowRef }
];
CarouselService.ɵprov = ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(ɵɵinject(WindowRef)); }, token: CarouselService, providedIn: "root" });
CarouselService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CarouselService);

/**
 * Generic carousel component that can be used to render any carousel items,
 * such as products, images, banners, or any component. Carousel items are
 * rendered in so-called carousel slides, and the previous/next buttons as well as
 * the indicator-buttons can used to navigate the slides.
 *
 * The component uses an array of Observables (`items$`) as an input, to allow
 * for lazy loading of items.
 *
 * The number of items per slide is calculated with the `itemWidth`, which can given
 * in pixels or percentage.
 *
 * To allow for flexible rendering of items, the rendering is delegated to the
 * given `template`. This allows for maximum flexibility.
 */
let CarouselComponent = class CarouselComponent {
    constructor(el, service) {
        this.el = el;
        this.service = service;
        /**
         * Specifies the minimum size of the carousel item, either in px or %.
         * This value is used for the calculation of numbers per carousel, so that
         * the number of carousel items is dynamic. The calculation uses the `itemWidth`
         * and the host element `clientWidth`, so that the carousel is reusable in
         * different layouts (for example in a 50% grid).
         */
        this.itemWidth = '300px';
        /**
         * Indicates whether the visual indicators are used.
         */
        this.hideIndicators = false;
        this.indicatorIcon = ICON_TYPE.CIRCLE;
        this.previousIcon = ICON_TYPE.CARET_LEFT;
        this.nextIcon = ICON_TYPE.CARET_RIGHT;
    }
    set setItems(inputItems) {
        this.items = inputItems;
        //Reset slider when changing products
        this.activeSlide = 0;
    }
    ngOnInit() {
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap(() => (this.activeSlide = 0)));
    }
};
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CarouselService }
];
__decorate([
    Input()
], CarouselComponent.prototype, "title", void 0);
__decorate([
    Input('items')
], CarouselComponent.prototype, "setItems", null);
__decorate([
    Input()
], CarouselComponent.prototype, "template", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "itemWidth", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "hideIndicators", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "indicatorIcon", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "previousIcon", void 0);
__decorate([
    Input()
], CarouselComponent.prototype, "nextIcon", void 0);
CarouselComponent = __decorate([
    Component({
        selector: 'cx-carousel',
        template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div\n          class=\"slide\"\n          *ngIf=\"i % size === 0\"\n          [class.active]=\"i === activeSlide\"\n        >\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"-1\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"-1\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CarouselComponent);

const DEFAULT_BREAKPOINTS = {
    [BREAKPOINT.xs]: 576,
    [BREAKPOINT.sm]: 768,
    [BREAKPOINT.md]: 992,
    [BREAKPOINT.lg]: 1200,
};
let BreakpointService = class BreakpointService {
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return this.winRef.resize$.pipe(map((event) => this.getBreakpoint(event.target.innerWidth)), distinctUntilChanged());
    }
    /**
     * Returns the _maximum_ size for the breakpint, given by the `LayoutConfig.breakpoints`
     * configuration. If no configuration is available for the given breakpoint, the
     * method will return the default values:
     * - xs: 567
     * - sm: 768
     * - md: 992
     * - lg: 1200
     */
    getSize(breakpoint) {
        var _a;
        return ((_a = this.config.breakpoints) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(breakpoint)) ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    }
    /**
     * Returns all available breakpoints for the system.
     */
    get breakpoints() {
        return [
            BREAKPOINT.xs,
            BREAKPOINT.sm,
            BREAKPOINT.md,
            BREAKPOINT.lg,
            BREAKPOINT.xl,
        ];
    }
    /**
     * Indicates whether the current screen size is smaller than the maximum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is smaller than the configured size of `BREAKPOINT.md`.
     */
    isDown(breakpoint) {
        return this.breakpoint$.pipe(map((br) => this.breakpoints
            .slice(0, this.breakpoints.indexOf(breakpoint) + 1)
            .includes(br)));
    }
    /**
     * Indicates whether the current screen size is larger than the minimum size of the
     * given breakpoint.
     *
     * If the given breakpoint is `BREAKPOINT.md`, the method returns `true` when the
     * window innerWidth is larger than the configured size of `BREAKPOINT.sm`.
     */
    isUp(breakpoint) {
        return this.breakpoint$.pipe(map((br) => this.breakpoints
            .slice(this.breakpoints.indexOf(breakpoint))
            .includes(br)));
    }
    /**
     * Indicates whether the current screen size fits to the given breakpoint
     */
    isEqual(breakpoint) {
        return this.breakpoint$.pipe(map((br) => br === breakpoint));
    }
    getBreakpoint(windowWidth) {
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth > this.getSize(BREAKPOINT.lg)
            ? BREAKPOINT.xl
            : this.breakpoints.find((br) => windowWidth <= this.getSize(br));
    }
    get window() {
        return this.winRef.nativeWindow;
    }
};
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
BreakpointService.ɵprov = ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(ɵɵinject(WindowRef), ɵɵinject(LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
BreakpointService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BreakpointService);

/**
 * Service which generates media URLs. It leverage the MediaContainer and MediaFormats so
 * that URLs and sizes are generated for the same media. This helps to improve performance
 * across difference devices and layouts.
 *
 * Media formats are optional, but highly recommended. The format will help the browser to
 * identify the right media for the right experience.
 *
 * The MediaService will generate absolute URLs in case relative URLs are provided for the Media.
 * The baseUrl is read from the `occConfig.backend.media.baseUrl` or
 * `occConfig.backend.occ.baseUrl`.
 */
let MediaService = class MediaService {
    constructor(config, 
    /**
     * The BreakpointService is no longer used in version 2.0 as the different size formats are
     * driven by configuration only. There's however a change that this service will play a role
     * in the near future, which is why we keep the constructor as-is.
     */
    breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    /**
     * Returns a `Media` object with the main media (`src`) and various media (`src`)
     * for specific formats.
     */
    getMedia(mediaContainer, format, alt) {
        if (!mediaContainer) {
            return;
        }
        const mainMedia = mediaContainer.url
            ? mediaContainer
            : this.resolveMedia(mediaContainer, format);
        return {
            src: this.resolveAbsoluteUrl(mainMedia === null || mainMedia === void 0 ? void 0 : mainMedia.url),
            alt: alt || (mainMedia === null || mainMedia === void 0 ? void 0 : mainMedia.altText),
            srcset: this.resolveSrcSet(mediaContainer),
        };
    }
    /**
     * Creates the media formats in a logical sorted order. The map contains the
     * format key and the format size information. We do this only once for performance
     * benefits.
     */
    get sortedFormats() {
        if (!this._sortedFormats) {
            this._sortedFormats = Object.keys(this.config.mediaFormats)
                .map((key) => ({
                code: key,
                size: this.config.mediaFormats[key],
            }))
                .sort((a, b) => (a.size.width > b.size.width ? 1 : -1));
        }
        return this._sortedFormats;
    }
    /**
     * Creates the media formats in a reversed sorted order.
     */
    get reversedFormats() {
        if (!this._reversedFormats) {
            this._reversedFormats = this.sortedFormats.slice().reverse();
        }
        return this._reversedFormats;
    }
    /**
     * Resolves the right media for the given format. The fo
     */
    resolveMedia(media, format) {
        return media[this.resolveFormat(media, format)];
    }
    /**
     * Validates the format against the given mediaContainer. If there is no format available,
     * or if the mediaContainer doesn't contain a media for the given media, the most optimal
     * format is resolved. If even that is not possible, the first format is returned.
     */
    resolveFormat(mediaContainer, format) {
        if (format && mediaContainer[format]) {
            return format;
        }
        return (this.resolveBestFormat(mediaContainer) || Object.keys(mediaContainer)[0]);
    }
    /**
     * Returns the media format code with the best size.
     */
    resolveBestFormat(media) {
        var _a;
        return (_a = this.reversedFormats.find((format) => media.hasOwnProperty(format.code))) === null || _a === void 0 ? void 0 : _a.code;
    }
    /**
     * Returns a set of media for the available media formats. Additionally, the congiured media
     * format width is added to the srcset, so that browsers can select the appropriate media.
     */
    resolveSrcSet(media) {
        if (!media) {
            return undefined;
        }
        const srcset = this.sortedFormats.reduce((set, format) => {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += `${this.resolveAbsoluteUrl(media[format.code].url)} ${format.size.width}w`;
            }
            return set;
        }, '');
        return srcset === '' ? undefined : srcset;
    }
    /**
     * Resolves the absolute URL for the given url. In most cases, this URL represents
     * the relative URL on the backend. In that case, we prefix the url with the baseUrl.
     */
    resolveAbsoluteUrl(url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    }
    /**
     * The base URL is either driven by a specific `backend.media.baseUrl`, or by the
     * `backend.occ.baseUrl`.
     *
     * The `backend.media.baseUrl` can be used to load media from a different location.
     *
     * In Commerce Cloud, a differnt location could mean a different "aspect".
     */
    getBaseUrl() {
        return (this.config.backend.media.baseUrl ||
            this.config.backend.occ.baseUrl ||
            '');
    }
};
MediaService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: BreakpointService }
];
MediaService.ɵprov = ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(ɵɵinject(Config), ɵɵinject(BreakpointService)); }, token: MediaService, providedIn: "root" });
MediaService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(Config))
], MediaService);

let MediaComponent = class MediaComponent {
    constructor(mediaService) {
        this.mediaService = mediaService;
        /**
         * Once the media is loaded, we emit an event.
         */
        this.loaded = new EventEmitter();
        /**
         * The `cx-media` component has an `is-initialized` class as long as the
         * media is being initialized.
         */
        this.isInitialized = false;
        /**
         * The `cx-media` component has a `is-loading` class as long as the
         * media is loaded. Wehn the media is loaded, the `is-initialized` class
         * is added.
         */
        this.isLoading = true;
        /**
         * When there's no media provided for the content, or in case an error
         * happened during loading, we add the `is-missing` class. Visual effects
         * can be controlled by CSS.
         */
        this.isMissing = false;
    }
    ngOnChanges() {
        this.create();
    }
    /**
     * Creates the `Media` object
     */
    create() {
        var _a;
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!((_a = this.media) === null || _a === void 0 ? void 0 : _a.src)) {
            this.handleMissing();
        }
    }
    /**
     * This handler is called from the UI when the image is loaded.
     */
    loadHandler() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = false;
        this.loaded.emit(true);
    }
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    errorHandler() {
        this.handleMissing();
    }
    handleMissing() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    }
};
MediaComponent.ctorParameters = () => [
    { type: MediaService }
];
__decorate([
    Input()
], MediaComponent.prototype, "container", void 0);
__decorate([
    Input()
], MediaComponent.prototype, "format", void 0);
__decorate([
    Input()
], MediaComponent.prototype, "alt", void 0);
__decorate([
    Output()
], MediaComponent.prototype, "loaded", void 0);
__decorate([
    HostBinding('class.is-initialized')
], MediaComponent.prototype, "isInitialized", void 0);
__decorate([
    HostBinding('class.is-loading')
], MediaComponent.prototype, "isLoading", void 0);
__decorate([
    HostBinding('class.is-missing')
], MediaComponent.prototype, "isMissing", void 0);
MediaComponent = __decorate([
    Component({
        selector: 'cx-media',
        template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], MediaComponent);

var MediaModule_1;
let MediaModule = MediaModule_1 = class MediaModule {
    static forRoot() {
        return {
            ngModule: MediaModule_1,
        };
    }
};
MediaModule = MediaModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [MediaComponent],
        exports: [MediaComponent],
    })
], MediaModule);

let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
        declarations: [CarouselComponent],
        exports: [CarouselComponent],
    })
], CarouselModule);

/**
 * This component renders form errors.
 */
let FormErrorsComponent = class FormErrorsComponent {
    set control(control) {
        this._control = control;
        this.errors$ = control === null || control === void 0 ? void 0 : control.statusChanges.pipe(startWith({}), map(() => control.errors || {}), map((errors) => Object.entries(errors)
            .filter((error) => error[1])
            .map((error) => error[0])));
    }
    get control() {
        return this._control;
    }
    get invalid() {
        return this.control.invalid;
    }
    get dirty() {
        return this.control.dirty;
    }
    get touched() {
        return this.control.touched;
    }
};
__decorate([
    Input()
], FormErrorsComponent.prototype, "control", null);
__decorate([
    HostBinding('class.control-invalid')
], FormErrorsComponent.prototype, "invalid", null);
__decorate([
    HostBinding('class.control-dirty')
], FormErrorsComponent.prototype, "dirty", null);
__decorate([
    HostBinding('class.control-touched')
], FormErrorsComponent.prototype, "touched", null);
FormErrorsComponent = __decorate([
    Component({
        selector: 'cx-form-errors',
        template: "<p *ngFor=\"let errorName of errors$ | async\">\n  {{ 'formErrors.' + errorName | cxTranslate }}\n</p>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FormErrorsComponent);

let FormErrorsModule = class FormErrorsModule {
};
FormErrorsModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule],
        declarations: [FormErrorsComponent],
        exports: [FormErrorsComponent],
    })
], FormErrorsModule);

/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
let GenericLinkComponent = class GenericLinkComponent {
    constructor(router) {
        this.router = router;
        /**
         * Pattern matching string starting with `http://` or `https://`.
         */
        this.PROTOCOL_REGEX = /^https?:\/\//i;
        /**
         * Used to split url into 2 parts:
         * 1. the path
         * 2. query params + hash fragment
         */
        this.URL_SPLIT = /(^[^#?]*)(.*)/;
        /**
         * Parsed parts of the @Input `url`, when it's a local URL.
         * It should not be used when the `url` is external.
         * @see `url`
         */
        this.routeParts = {};
    }
    /**
     * Returns true when the @Input `url` is a string starting with `http://` or `https://`.
     */
    isExternalUrl() {
        return typeof this.url === 'string' && this.PROTOCOL_REGEX.test(this.url);
    }
    get rel() {
        return this.target === '_blank' ? 'noopener' : null;
    }
    ngOnChanges(changes) {
        if (changes['url']) {
            this.setUrlParts(changes['url'].currentValue);
        }
    }
    /**
     * The part with the path of the local url.
     */
    get routerUrl() {
        return this.routeParts.path;
    }
    /**
     * The part with the query params of the local url.
     */
    get queryParams() {
        return this.routeParts.queryParams;
    }
    /**
     * The part with the hash fragment of the local url.
     */
    get fragment() {
        return this.routeParts.fragment;
    }
    /**
     * Parses the given url and sets the property `urlParts` accordingly.
     */
    setUrlParts(url) {
        if (typeof url === 'string') {
            url = this.getAbsoluteUrl(url); // string links in CMS sometimes don't have the leading slash, so fix it here
            this.routeParts = this.splitUrl(url);
        }
        else {
            this.routeParts = { path: url };
        }
    }
    /**
     * Parses the given string into 3 parts:
     * - string path (wrapped in an array to be compatible with Angular syntax for the `routerLink`)
     * - query params (as an object)
     * - hash fragment (string)
     */
    splitUrl(url = '') {
        const { queryParams, fragment } = this.router.parseUrl(url);
        const [, path] = url.match(this.URL_SPLIT);
        // wrap path in an array, to have the Angular-like path format
        return { path: [path], queryParams, fragment };
    }
    /**
     * Prepends a leading slash to the given URL string, in case it doesn't have it.
     */
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? url : '/' + url;
    }
};
GenericLinkComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Input()
], GenericLinkComponent.prototype, "url", void 0);
__decorate([
    Input()
], GenericLinkComponent.prototype, "target", void 0);
__decorate([
    Input()
], GenericLinkComponent.prototype, "class", void 0);
__decorate([
    Input()
], GenericLinkComponent.prototype, "id", void 0);
__decorate([
    Input()
], GenericLinkComponent.prototype, "style", void 0);
__decorate([
    Input()
], GenericLinkComponent.prototype, "title", void 0);
GenericLinkComponent = __decorate([
    Component({
        selector: 'cx-generic-link',
        template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [queryParams]=\"queryParams\"\n    [fragment]=\"fragment\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
    })
], GenericLinkComponent);

let GenericLinkModule = class GenericLinkModule {
};
GenericLinkModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        declarations: [GenericLinkComponent],
        exports: [GenericLinkComponent],
    })
], GenericLinkModule);

/**
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functionality. The item counter expects an input `FormControl`
 * so that the state of the control can be managed outside of this component.
 */
let ItemCounterComponent = class ItemCounterComponent {
    constructor() {
        /**
         * This can be used in case an item has a minmum order quantity.
         * @default 1
         */
        this.min = 1;
        /**
         * The step is used to increment the count. It is supposed to be a
         * positive integer or float.
         * @default 1
         */
        this.step = 1;
        /**
         * Indicates that the input can be manually set to zero,
         * despite the fact that the input controls will be limited to
         * the minimum. The zero value can be used to remove an item.
         */
        this.allowZero = false;
        /**
         * In readonly mode the item counter will only be shown as a label,
         * the form controls are not rendered.
         * Please not that readonly is different from the `disabled` form state.
         * @default false
         */
        this.readonly = false;
    }
    handleClick() {
        this.input.nativeElement.focus();
    }
    ngOnInit() {
        this.sub = this.control.valueChanges
            .pipe(startWith(this.control.value))
            .subscribe((value) => this.control.setValue(this.getValidCount(value), { emitEvent: false }));
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    increment() {
        // it's too early to use the `stepUp` and `stepDown` API...
        // let's wait for FF: https://caniuse.com/#search=stepUp
        this.control.setValue(this.control.value + this.step);
        this.control.markAsDirty();
    }
    decrement() {
        this.control.setValue(this.control.value - this.step);
        this.control.markAsDirty();
    }
    /**
     * Validate that the given value is in between
     * the `min` and `max` value. If the value is out
     * of  the min/max range, it will be altered.
     * If `allowZero` is set to true, the 0 value is ignored.
     *
     */
    getValidCount(value) {
        if (value < this.min && !(value === 0 && this.allowZero)) {
            value = this.min;
        }
        if (this.max && value > this.max) {
            value = this.max;
        }
        return value;
    }
};
__decorate([
    Input()
], ItemCounterComponent.prototype, "control", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "min", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "max", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "step", void 0);
__decorate([
    Input()
], ItemCounterComponent.prototype, "allowZero", void 0);
__decorate([
    HostBinding('class.readonly'), Input()
], ItemCounterComponent.prototype, "readonly", void 0);
__decorate([
    ViewChild('qty')
], ItemCounterComponent.prototype, "input", void 0);
__decorate([
    HostListener('click')
], ItemCounterComponent.prototype, "handleClick", null);
ItemCounterComponent = __decorate([
    Component({
        selector: 'cx-item-counter',
        template: "<button\n  type=\"button\"\n  (click)=\"decrement()\"\n  [disabled]=\"control.disabled || control.value <= min\"\n  tabindex=\"-1\"\n>\n  -\n</button>\n\n<input\n  #qty\n  type=\"number\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [step]=\"step\"\n  [readonly]=\"readonly\"\n  [tabindex]=\"readonly ? -1 : 0\"\n  [formControl]=\"control\"\n/>\n\n<button\n  type=\"button\"\n  (click)=\"increment()\"\n  [disabled]=\"control.disabled || control.value >= max\"\n  tabindex=\"-1\"\n>\n  +\n</button>\n"
    })
], ItemCounterComponent);

let ItemCounterModule = class ItemCounterModule {
};
ItemCounterModule = __decorate([
    NgModule({
        imports: [CommonModule, ReactiveFormsModule],
        declarations: [ItemCounterComponent],
        exports: [ItemCounterComponent],
    })
], ItemCounterModule);

const defaultPaginationConfig = {
    pagination: {
        addStart: true,
        addEnd: true,
    },
};

let PaginationConfig = class PaginationConfig {
};
PaginationConfig.ɵprov = ɵɵdefineInjectable({ factory: function PaginationConfig_Factory() { return ɵɵinject(Config); }, token: PaginationConfig, providedIn: "root" });
PaginationConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], PaginationConfig);

/**
 * The item type is used to add semantic structure to the
 * PaginationItem, so that the UI understands the usage.
 */
var PaginationItemType;
(function (PaginationItemType) {
    PaginationItemType["GAP"] = "gap";
    PaginationItemType["FIRST"] = "first";
    PaginationItemType["LAST"] = "last";
    PaginationItemType["PREVIOUS"] = "previous";
    PaginationItemType["NEXT"] = "next";
    PaginationItemType["START"] = "start";
    PaginationItemType["END"] = "end";
    PaginationItemType["PAGE"] = "page";
})(PaginationItemType || (PaginationItemType = {}));
var PaginationNavigationPosition;
(function (PaginationNavigationPosition) {
    PaginationNavigationPosition["ASIDE"] = "aside";
    PaginationNavigationPosition["BEFORE"] = "before";
    PaginationNavigationPosition["AFTER"] = "after";
})(PaginationNavigationPosition || (PaginationNavigationPosition = {}));

const FALLBACK_PAGINATION_OPTIONS = {
    rangeCount: 3,
    dotsLabel: '...',
    startLabel: '«',
    previousLabel: '‹',
    nextLabel: '›',
    endLabel: '»',
};
/**
 * Builds a pagination structures based on a pageCount and current page number.
 * There are various {@link PaginationConfig} options which can be used to configure
 * the behaviour of the build. Alternatively, CSS can be used to further customise
 * the pagination.
 *
 * Examples:
 * The full blown pagination items contain the follow elements:
 *
 * `« ‹ 1 ... 4 (5) 6 ... 9 › »`
 *
 * This includes pagination items to the following pages:
 * - start page
 * - previous page
 * - first page
 * - page range
 * - last page
 * - next page
 * - end page
 *
 * All of those links are configurable, including the size of the page range.
 * The current page will always be centered in the page range to provide direct access
 * to the previous and next page.
 */
let PaginationBuilder = class PaginationBuilder {
    constructor(paginationConfig) {
        this.paginationConfig = paginationConfig;
    }
    /**
     * Builds a list of `PaginationItem`. The give pageCount and current are used
     * to build out the full pagination. There are various {@link PaginationConfig} options
     * which can be used to configure the behaviour of the build. Alternatively, CSS
     * can be used to further specialize visibility of the pagination.
     *
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     * @returns An array of `PaginationItem`
     */
    paginate(pageCount, current) {
        const pages = [];
        if (pageCount < 2) {
            return pages;
        }
        this.addPages(pages, pageCount, current);
        this.addDots(pages, pageCount);
        this.addFirstLast(pages, pageCount);
        this.addNavigation(pages, pageCount, current);
        return pages;
    }
    /**
     * Returns the current page with surrounding pages (based on the `config.rangeCount`).
     * The current page is always centered to provide direct access to the previous and next page.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     */
    addPages(pages, pageCount, current) {
        const start = this.getStartOfRange(pageCount, current);
        const max = Math.min(this.config.rangeCount, pageCount);
        Array.from(Array(max)).forEach((_, i) => {
            pages.push({
                number: i + start,
                label: String(i + start + 1),
                type: PaginationItemType.PAGE,
            });
        });
    }
    /**
     * Adds dots before and after the given pages, if configured (defaults to true).
     * If the dots only represent a single page, the page number is added instead of
     * the dots, unless the configuration requires dots always.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     */
    addDots(pages, pageCount) {
        if (!this.config.addDots) {
            return;
        }
        const addFirstGap = () => {
            const firstItemNumber = pages[0].number;
            const gapNumber = this.config.addFirst ? 1 : 0;
            if (firstItemNumber > gapNumber) {
                const isGap = !this.config.substituteDotsForSingularPage ||
                    firstItemNumber !== gapNumber + 1;
                const isSubstitued = this.config.addFirst &&
                    this.config.substituteDotsForSingularPage &&
                    gapNumber === 0;
                const type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.FIRST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? this.config.dotsLabel : String(gapNumber + 1),
                        type,
                    }, isGap ? null : { number: gapNumber }),
                ];
            }
            else
                return [];
        };
        const addLastGap = () => {
            const nextPageNumber = pages[pages.length - 1].number + 1;
            const last = pageCount - (this.config.addLast ? 2 : 1);
            if (nextPageNumber <= last) {
                const isSubstitued = this.config.addLast &&
                    this.config.substituteDotsForSingularPage &&
                    nextPageNumber === last;
                const isGap = nextPageNumber <
                    pageCount -
                        (this.config.substituteDotsForSingularPage ? 1 : 0) -
                        (this.config.addLast ? 1 : 0);
                const type = isGap
                    ? PaginationItemType.GAP
                    : isSubstitued
                        ? PaginationItemType.LAST
                        : PaginationItemType.PAGE;
                return [
                    Object.assign({
                        label: isGap ? this.config.dotsLabel : String(nextPageNumber + 1),
                        type,
                    }, isGap ? null : { number: nextPageNumber }),
                ];
            }
            else
                return [];
        };
        pages.unshift(...addFirstGap());
        pages.push(...addLastGap());
    }
    /**
     * Add links to the first and last page, if configured to do so.
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     *
     */
    addFirstLast(pages, pageCount) {
        if (this.config.addFirst && pages[0].number !== 0) {
            pages.unshift({
                number: 0,
                label: '1',
                type: PaginationItemType.FIRST,
            });
        }
        if (this.config.addLast &&
            pages[pages.length - 1].number !== pageCount - 1) {
            pages.push({
                number: pageCount - 1,
                label: String(pageCount),
                type: PaginationItemType.LAST,
            });
        }
    }
    /**
     * Add links to the start, previous, next and last page, if configured to do so.
     * The order of the links can be configured by using the {@link PaginationConfig},
     * using the `PaginationNavigationPosition` (`BEFORE` or `AFTER`).
     * The `PaginationNavigationPosition` allows for 3 flavours:
     *
     * - by default the pagination starts with start and previous and ends with the next and end links
     * - BEFORE – all navigation links are added in the front of the pagination list
     * - AFTER – all navigation links are pushed to the end of the pagination list
     *
     * @param pages The list of page items that is used to amend
     * @param pageCount The total number of pages
     * @param current The current page number, 0-index based
     *
     */
    addNavigation(pages, pageCount, current) {
        const before = this.getBeforeLinks(current);
        const after = this.getAfter(pageCount, current);
        const pos = this.config.navigationPosition;
        if (!pos || pos === PaginationNavigationPosition.ASIDE) {
            pages.unshift(...before);
            pages.push(...after);
        }
        else {
            if (pos === PaginationNavigationPosition.BEFORE) {
                pages.unshift(...before, ...after);
            }
            if (pos === PaginationNavigationPosition.AFTER) {
                pages.push(...before, ...after);
            }
        }
    }
    /**
     * Returns the start and previous links, if applicable.
     */
    getBeforeLinks(current) {
        const list = [];
        if (this.config.addStart) {
            const start = () => {
                return Object.assign({
                    label: this.config.startLabel,
                    type: PaginationItemType.START,
                }, current > 0 ? { number: 0 } : null);
            };
            list.push(start());
        }
        if (this.config.addPrevious) {
            const previous = () => {
                return Object.assign({
                    label: this.config.previousLabel,
                    type: PaginationItemType.PREVIOUS,
                }, current > 0 ? { number: current - 1 } : null);
            };
            list.push(previous());
        }
        return list;
    }
    /**
     * Returns the next and end links, if applicable.
     */
    getAfter(pageCount, current) {
        const list = [];
        if (this.config.addNext) {
            const next = () => {
                return Object.assign({
                    label: this.config.nextLabel,
                    type: PaginationItemType.NEXT,
                }, current < pageCount - 1 ? { number: current + 1 } : null);
            };
            list.push(next());
        }
        if (this.config.addEnd) {
            const end = () => {
                return Object.assign({
                    label: this.config.endLabel,
                    type: PaginationItemType.END,
                }, current < pageCount - 1 ? { number: pageCount - 1 } : null);
            };
            list.push(end());
        }
        return list;
    }
    /**
     * Resolves the first page of the range we need to build.
     * This is the page that is leading up to the range of the
     * current page.
     *
     * @param pageCount The total number of pages.
     * @param current The current page number, 0-index based.
     */
    getStartOfRange(pageCount, current) {
        const count = this.config.rangeCount - 1;
        // the least number of pages before and after the current
        const delta = Math.round(count / 2);
        // ensure that we start with at least the first page
        const minStart = Math.max(0, current - delta);
        // ensures that we start with at least 1 and do not pass the last range
        const maxStart = Math.max(0, pageCount - count - 1);
        // ensure that we get at least a full range at the end
        return Math.min(maxStart, minStart);
    }
    get config() {
        return Object.assign(FALLBACK_PAGINATION_OPTIONS, this.paginationConfig.pagination);
    }
};
PaginationBuilder.ctorParameters = () => [
    { type: PaginationConfig }
];
PaginationBuilder.ɵprov = ɵɵdefineInjectable({ factory: function PaginationBuilder_Factory() { return new PaginationBuilder(ɵɵinject(PaginationConfig)); }, token: PaginationBuilder, providedIn: "root" });
PaginationBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PaginationBuilder);

/**
 * The `PaginationComponent` is a generic component that is used for
 * all lists in Spartacus that require pagination. The component supports
 * all common features, which can be configured or hidden by CSS.
 */
let PaginationComponent = class PaginationComponent {
    constructor(paginationBuilder, activatedRoute) {
        this.paginationBuilder = paginationBuilder;
        this.activatedRoute = activatedRoute;
        this.viewPageEvent = new EventEmitter();
        this.pages = [];
    }
    get pagination() {
        return this._pagination;
    }
    set pagination(value) {
        this._pagination = value;
        this.render(value);
    }
    render(pagination) {
        this.pages = this.paginationBuilder.paginate(pagination.totalPages, pagination.currentPage);
    }
    /**
     * Inidicates whether the given item is the current item.
     *
     * @param item PaginationItem
     * @returns boolean
     */
    isCurrent(item) {
        return (item.type === PaginationItemType.PAGE &&
            item.number === this.pagination.currentPage);
    }
    /**
     * Indicates whether the pagination item is inactive. This is used
     * to disabled a link or set the tabindex to `-1`.
     *
     * Defaults to true
     *
     * @param item PaginationItem
     * @returns returns -1 in case of a disabled
     */
    isInactive(item) {
        return (!item.hasOwnProperty('number') ||
            item.number === this.pagination.currentPage);
    }
    getQueryParams(item) {
        const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        if (this.queryParam &&
            item.number < this.pagination.totalPages &&
            !this.isCurrent(item)) {
            queryParams[this.queryParam] = item.number;
        }
        // omit the page number from the query parameters in case it's the default
        // to clean up the experience and avoid unnecessary polluting of the URL
        if (queryParams[this.queryParam] === this.defaultPage) {
            delete queryParams[this.queryParam];
        }
        return queryParams;
    }
    pageChange(page) {
        this.viewPageEvent.emit(page.number);
    }
};
PaginationComponent.ctorParameters = () => [
    { type: PaginationBuilder },
    { type: ActivatedRoute }
];
__decorate([
    Input()
], PaginationComponent.prototype, "pageRoute", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "queryParam", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "defaultPage", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "pagination", null);
__decorate([
    Output()
], PaginationComponent.prototype, "viewPageEvent", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'cx-pagination',
        template: "<a\n  *ngFor=\"let item of pages\"\n  [class]=\"item.type\"\n  [class.disabled]=\"isInactive(item)\"\n  [class.current]=\"isCurrent(item)\"\n  [routerLink]=\"pageRoute\"\n  [queryParams]=\"getQueryParams(item)\"\n  [tabIndex]=\"isInactive(item) ? -1 : 0\"\n  (click)=\"pageChange(item)\"\n>\n  {{ item.label }}\n</a>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaginationComponent);

let PaginationModule = class PaginationModule {
};
PaginationModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        providers: [provideDefaultConfig(defaultPaginationConfig)],
        declarations: [PaginationComponent],
        exports: [PaginationComponent],
    })
], PaginationModule);

let SortingComponent = class SortingComponent {
    constructor() {
        this.sortListEvent = new EventEmitter();
    }
    sortList(sortCode) {
        this.sortListEvent.emit(sortCode);
    }
};
__decorate([
    Input()
], SortingComponent.prototype, "sortOptions", void 0);
__decorate([
    Input()
], SortingComponent.prototype, "selectedOption", void 0);
__decorate([
    Input()
], SortingComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], SortingComponent.prototype, "sortLabels", void 0);
__decorate([
    Output()
], SortingComponent.prototype, "sortListEvent", void 0);
SortingComponent = __decorate([
    Component({
        selector: 'cx-sorting',
        template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SortingComponent);

let ListNavigationModule = class ListNavigationModule {
};
ListNavigationModule = __decorate([
    NgModule({
        imports: [CommonModule, NgSelectModule, FormsModule, PaginationModule],
        declarations: [SortingComponent],
        exports: [SortingComponent, PaginationComponent],
    })
], ListNavigationModule);

/**
 * Provides configuration specific to Media, such as images. This is used to optimize
 * rendering of the media, SEO and performance.
 */
let MediaConfig = class MediaConfig {
};
MediaConfig.ɵprov = ɵɵdefineInjectable({ factory: function MediaConfig_Factory() { return ɵɵinject(Config); }, token: MediaConfig, providedIn: "root" });
MediaConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], MediaConfig);

/**
 * A reference to a newly opened modal
 *
 * @todo remove ngb dependency and create our own implementation of ModalRef
 */
class ModalRef extends NgbModalRef {
}

/**
 * A service to handle modal
 */
let ModalService = class ModalService {
    constructor(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    open(content, options) {
        let activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        return activeModal;
    }
    getActiveModal() {
        const modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    }
    dismissActiveModal(reason) {
        const modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    }
    closeActiveModal(reason) {
        const modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
        }
    }
};
ModalService.ctorParameters = () => [
    { type: NgbModal }
];
ModalService.ɵprov = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(NgbModal)); }, token: ModalService, providedIn: "root" });
ModalService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ModalService);

/**
 * Guard that can be used in split-view based child routes. This guard
 * delays the guard to be removed with 500ms, so that any css transition can be
 * finished before the DOM is destroyed.
 */
let SplitViewDeactivateGuard = class SplitViewDeactivateGuard {
    canDeactivate() {
        return timer(500).pipe(map(() => true));
    }
};
SplitViewDeactivateGuard.ɵprov = ɵɵdefineInjectable({ factory: function SplitViewDeactivateGuard_Factory() { return new SplitViewDeactivateGuard(); }, token: SplitViewDeactivateGuard, providedIn: "root" });
SplitViewDeactivateGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SplitViewDeactivateGuard);

/**
 * Supposed to be injected in the split view component, so that the view state
 * is maintained in the context of a single split view.
 */
let SplitViewService = class SplitViewService {
    constructor() {
        this._views$ = new BehaviorSubject([]);
    }
    /**
     * Resolves the max number of visible views for the split view.
     */
    visibleViewCount() {
        return this._views$.pipe(map((views) => {
            const hidden = views.findIndex((view) => view.hidden);
            return hidden === -1 ? views.length : hidden;
        }), filter((visible) => visible > 0), distinctUntilChanged());
    }
    /**
     * Adds a view to the list of views. The view is initialized with the
     * hide state, which defaults to false.
     */
    add(viewPosition, hide = false) {
        if (!this.views[viewPosition]) {
            this.views[viewPosition] = { hidden: hide };
            this._views$.next(this.views);
        }
    }
    /**
     * Removes a view from the list of views.
     */
    remove(viewPosition) {
        this._views$.next(this.views.splice(0, viewPosition));
    }
    /**
     * Toggles the visible state for the given view. An optional
     * force argument can be used to dictate the visibility.
     */
    toggle(viewPosition, force) {
        if (!this.views[viewPosition]) {
            this.add(viewPosition, force !== null && force !== void 0 ? force : false);
        }
        else {
            this.views[viewPosition].hidden = force !== null && force !== void 0 ? force : !this.views[viewPosition].hidden;
            // Whenever a view is closing, we close all underlying views as well.
            if (!this.views[viewPosition].hidden) {
                this.views
                    .slice(viewPosition + 1)
                    .map((viewState) => (viewState.hidden = true));
            }
            this._views$.next(this.views);
        }
    }
    /**
     * Returns the next view number, that can be used by views to register itself.
     */
    generateNextPosition() {
        return this.views.length;
    }
    /**
     * Utility method that resolves all views.
     */
    get views() {
        return this._views$.value;
    }
};
SplitViewService = __decorate([
    Injectable()
], SplitViewService);

/**
 * The split-view component supports an unlimited number of nested views. The component
 * is a host to those view components and doesn't add any restrictions to it's content;
 * content is projected as-is.
 *
 * ```html
 * <cx-split-view>
 *   <cx-view></cx-view>
 *   <cx-view></cx-view>
 *   <any-wrapper>
 *     <cx-view></cx-view>
 *   </any-wrapper>
 * </cx-split-view>
 * ```
 *
 * The split view component is only concerned with tracking the underlying _visible_
 * view components, so that the `lastVisibleView` can be updated accordingly. The actual
 * visibility of views is controlled by CSS. To allow for maximum flexibility, the CSS
 * implementation is using CSS variables. The `lastVisibleView` is bind to the
 * `--cx-last-visible-view` on the host, so that all descendants views will inherit the
 * property conveniently.
 */
let SplitViewComponent = class SplitViewComponent {
    constructor(splitService) {
        this.splitService = splitService;
        /**
         * Indicates the last visible view in the range of views that is visible. This
         * is bind to a css variable `--cx-last-visible-view` so that the experience
         * can be fully controlled by css.
         */
        this.lastVisibleView = 1;
        this.subscription = this.splitService
            .visibleViewCount()
            .subscribe((lastVisible) => (this.lastVisibleView = lastVisible));
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
SplitViewComponent.ctorParameters = () => [
    { type: SplitViewService }
];
__decorate([
    HostBinding('style.--cx-last-visible-view')
], SplitViewComponent.prototype, "lastVisibleView", void 0);
SplitViewComponent = __decorate([
    Component({
        selector: 'cx-split-view',
        template: "<ng-content></ng-content>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [SplitViewService]
    })
], SplitViewComponent);

/**
 * The view component is part of the `SplitViewComponent`. The view
 * contains the navigable content that should be split up. It maintains
 * a view position and allows to show or hide the view.
 *
 * The ViewComponent interacts with the `SplitViewService` for handing over the
 * view state, so that the overarching `SplitViewComponent` can manage the
 * overall experience.
 */
let ViewComponent = class ViewComponent {
    constructor(splitService) {
        this.splitService = splitService;
        /**
         * An update of the view visibility is emitted to the hiddenChange output.
         */
        this.hiddenChange = new EventEmitter();
    }
    /**
     * The hidden input is used to set the initial visible state of the view.
     * The hidden state defaults to false.
     *
     * The hidden input supports 2-way binding, see `hiddenChange` property.
     */
    set hidden(hidden) {
        this.splitService.toggle(this.viewPosition, hidden);
    }
    ngOnInit() {
        this.splitService.add(this.viewPosition, this.hidden);
        this.subscription = this.splitService
            .visibleViewCount()
            .subscribe((visible) => {
            if (this.hidden !== this.viewPosition >= visible) {
                this.hiddenChange.emit(this.viewPosition >= visible);
            }
        });
    }
    /**
     * Toggles the visibility of the view.
     *
     * An optional force flag can be used to explicitly show or hide view component.
     */
    toggle(force) {
        this.splitService.toggle(this.viewPosition, force);
    }
    /**
     * Returns the position for the view.
     *
     * The position is either taken from the input `position` or generated by the `SplitService`.
     */
    get viewPosition() {
        if (this.position === undefined) {
            this.position = this.splitService.generateNextPosition();
        }
        return this.position;
    }
    /**
     * The view is removed from the `SplitService` so that the view no longer
     * plays a role in the overall split view.
     */
    ngOnDestroy() {
        var _a;
        this.splitService.remove(this.viewPosition);
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
ViewComponent.ctorParameters = () => [
    { type: SplitViewService }
];
__decorate([
    Input(),
    HostBinding('attr.position')
], ViewComponent.prototype, "position", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "hidden", null);
__decorate([
    Output()
], ViewComponent.prototype, "hiddenChange", void 0);
ViewComponent = __decorate([
    Component({
        selector: 'cx-view',
        template: "<ng-content></ng-content>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ViewComponent);

/**
 * The split-view component supports an unlimited number of nested views. Nested views are rendered
 * next to each other. The views can be rendered next to each other, but the max number of visible
 * views can be limisted as well. This is configurable in the CSS layer, so that the max number of views
 * per split-view can be different for each component.
 *
 * The basic structure of the split-view component is shown below:
 *
 *
 * ```
 * <cx-split-view>
 * </cx-split-view>
 * ```
 *
 * The UX pattern used for the split-view is driven by an initial view, which gets splitted into
 * more views as soon as the user starts interacting with the initial and subsequantial views.
 * The views can be driven by routes, which means that you can navigate through the splitted views
 * by using the browser history as well as share or bookmark splitted views.
 *
 * The UI is implemented in the style layer, with only a few generic style rules. Most of the split
 * view style is driven by CSS properties, so that alternative split-view styles can be introduced
 * per page or component.
 *
 * The max number of views per split-view on mobile is limited to 1 by default, where as on tablet
 * (and higher) it is set to 2. Spartacus has a pretty narrow layout, which is why 2 is maximum,
 * but customers could alter the layout to bring in more views in the same split-view at the time.
 *
 */
let SplitViewModule = class SplitViewModule {
};
SplitViewModule = __decorate([
    NgModule({
        declarations: [SplitViewComponent, ViewComponent],
        imports: [CommonModule, RouterModule],
        exports: [SplitViewComponent, ViewComponent],
    })
], SplitViewModule);

let GlobalMessageComponent = class GlobalMessageComponent {
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPE;
        this.messageType = GlobalMessageType;
    }
    ngOnInit() {
        this.messages$ = this.globalMessageService.get();
    }
    clear(type, index) {
        this.globalMessageService.remove(type, index);
    }
};
GlobalMessageComponent.ctorParameters = () => [
    { type: GlobalMessageService }
];
GlobalMessageComponent = __decorate([
    Component({
        selector: 'cx-global-message',
        template: "<div *ngIf=\"messages$ | async as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-info\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"\n      let infoMsg of messages[messageType.MSG_TYPE_WARNING];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n</div>\n"
    })
], GlobalMessageComponent);

let GlobalMessageComponentModule = class GlobalMessageComponentModule {
};
GlobalMessageComponentModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, IconModule, I18nModule],
        declarations: [GlobalMessageComponent],
        exports: [GlobalMessageComponent],
    })
], GlobalMessageComponentModule);

/**
 * Configuration options for the Qualtrics integration, which allows you to
 * specify the qualtrics project and deployment script.
 */
let QualtricsConfig = class QualtricsConfig {
};
QualtricsConfig.ɵprov = ɵɵdefineInjectable({ factory: function QualtricsConfig_Factory() { return ɵɵinject(Config); }, token: QualtricsConfig, providedIn: "root" });
QualtricsConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], QualtricsConfig);

const QUALTRICS_EVENT_NAME = 'qsi_js_loaded';
/**
 * Service to integration Qualtrics.
 *
 * The integration observes the Qualtrics API, and when available, it runs the QSI API
 * to let Qualtrics evaluate the application.
 *
 * The service supports an additional _hook_ (`isDataLoaded()`) that can be used to load application
 * data before pulling the QSI API. This is beneficial in a single page application when additional
 * data is required before the Qualtrics _creatives_ run.
 *
 * This service also supports the creation of the Qualtrics deployment script. This is optional, as
 * the script can be added in alternatives ways.
 */
let QualtricsLoaderService = class QualtricsLoaderService {
    constructor(winRef, rendererFactory) {
        var _a;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        /**
         * QSI load event that happens when the QSI JS file is loaded.
         */
        this.qsiLoaded$ = ((_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow) ? fromEvent(this.winRef.nativeWindow, QUALTRICS_EVENT_NAME)
            : of();
        /**
         * Emits the Qualtrics Site Intercept (QSI) JavaScript API whenever available.
         *
         * The API is emitted when the JavaScript resource holding this API is fully loaded.
         * The API is also stored locally in the service, in case it's required later on.
         */
        this.qsi$ = this.qsiLoaded$.pipe(switchMap(() => this.isDataLoaded()), map(() => { var _a; return (_a = this.winRef) === null || _a === void 0 ? void 0 : _a.nativeWindow['QSI']; }), filter((api) => Boolean(api)), tap((qsi) => (this.qsiApi = qsi)));
        this.initialize();
    }
    /**
     * Starts observing the Qualtrics integration. The integration is based on a
     * Qualtrics specific event (`qsi_js_loaded`). As soon as this events happens,
     * we run the API.
     */
    initialize() {
        this.qsi$.subscribe(() => this.run());
    }
    /**
     * Evaluates the Qualtrics project code for the application.
     *
     * In order to reload the evaluation in Qualtrics, the API requires to unload the API before
     * running it again. We don't do this by default, but offer a flag to conditionally unload the API.
     */
    run(reload = false) {
        var _a;
        if (!((_a = this.qsiApi) === null || _a === void 0 ? void 0 : _a.API)) {
            if (isDevMode()) {
                console.log('The QSI api is not available');
            }
            return;
        }
        if (reload) {
            // Removes any currently displaying creatives
            this.qsiApi.API.unload();
        }
        // Starts the intercept code evaluation right after loading the Site Intercept
        // code for any defined intercepts or creatives
        this.qsiApi.API.load().done(this.qsiApi.API.run());
    }
    /**
     * Adds the deployment script to the DOM.
     *
     * The script will not be added twice if it was loaded before. In that case, we use
     * the Qualtrics API directly to _unload_ and _run_ the project.
     */
    addScript(scriptSource) {
        if (this.hasScript(scriptSource)) {
            this.run(true);
        }
        else {
            const script = this.renderer.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.src = scriptSource;
            this.renderer.appendChild(this.winRef.document.body, script);
        }
    }
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data.
     * You can observe any data in this method.
     *
     * Defaults to true.
     */
    isDataLoaded() {
        return of(true);
    }
    /**
     * Indicates if the script is already added to the DOM.
     */
    hasScript(source) {
        return !!this.winRef.document.querySelector(`script[src="${source}"]`);
    }
    get renderer() {
        return this.rendererFactory.createRenderer(null, null);
    }
};
QualtricsLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: RendererFactory2 }
];
QualtricsLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(ɵɵinject(WindowRef), ɵɵinject(RendererFactory2)); }, token: QualtricsLoaderService, providedIn: "root" });
QualtricsLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], QualtricsLoaderService);

/**
 * Adds the Qualtrics deployment script whenever the component is loaded. The
 * deployment script is loaded from the global configuration (`qualtrics.scriptSource`).
 */
let QualtricsComponent = class QualtricsComponent {
    constructor(qualtricsLoader, config) {
        var _a;
        this.qualtricsLoader = qualtricsLoader;
        this.config = config;
        if ((_a = this.config.qualtrics) === null || _a === void 0 ? void 0 : _a.scriptSource) {
            this.qualtricsLoader.addScript(this.config.qualtrics.scriptSource);
        }
        else if (isDevMode()) {
            console.warn(`We're unable to add the Qualtrics deployment code as there is no script source defined in config.qualtrics.scriptSource.`);
        }
    }
};
QualtricsComponent.ctorParameters = () => [
    { type: QualtricsLoaderService },
    { type: QualtricsConfig }
];
QualtricsComponent = __decorate([
    Component({
        selector: 'cx-qualtrics',
        template: ``
    })
], QualtricsComponent);

const defaultQualtricsConfig = {
    qualtrics: {},
};

let QualtricsModule = class QualtricsModule {
};
QualtricsModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        declarations: [QualtricsComponent],
        entryComponents: [QualtricsComponent],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    QualtricsComponent: {
                        component: QualtricsComponent,
                    },
                },
            }),
            provideDefaultConfig(defaultQualtricsConfig),
        ],
    })
], QualtricsModule);

let LanguageCurrencyComponent = class LanguageCurrencyComponent {
};
LanguageCurrencyComponent = __decorate([
    Component({
        selector: 'cx-language-currency-selector',
        template: `
    <cx-site-context-selector context="language"></cx-site-context-selector>
    <cx-site-context-selector context="currency"></cx-site-context-selector>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], LanguageCurrencyComponent);

class CmsComponentData {
}

const LABELS = {
    [LANGUAGE_CONTEXT_ID]: 'Language',
    [CURRENCY_CONTEXT_ID]: 'Currency',
};
let SiteContextComponentService = class SiteContextComponentService {
    constructor(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    getItems(context) {
        return this.getService(context).pipe(switchMap((service) => service.getAll()), switchMap((items) => this.getContext(context).pipe(switchMap((ctx) => {
            const itemsCopy = [];
            for (const item of items) {
                itemsCopy.push(Object.assign(Object.assign({}, item), { label: this.getOptionLabel(item, ctx) }));
            }
            return of(itemsCopy);
        }))));
    }
    getActiveItem(context) {
        return this.getService(context).pipe(switchMap((service) => service.getActive()));
    }
    getLabel(context) {
        return this.getContext(context).pipe(map((ctx) => {
            return LABELS[ctx];
        }));
    }
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe((service) => {
            service.setActive(value);
        });
    }
    getService(context) {
        return this.getContext(context).pipe(map((ctx) => (ctx ? this.getInjectedService(ctx) : undefined)), filter((s) => !!s));
    }
    getContext(context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map((data) => data === null || data === void 0 ? void 0 : data.context), map((ctx) => {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            }));
        }
    }
    getInjectedService(context) {
        return this.injector.get(this.contextServiceMap[context], null);
    }
    getOptionLabel(item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
            default:
                return item.isocode;
        }
    }
};
SiteContextComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ContextServiceMap },
    { type: Injector }
];
SiteContextComponentService = __decorate([
    Injectable(),
    __param(0, Optional())
], SiteContextComponentService);

let SiteContextSelectorComponent = class SiteContextSelectorComponent {
    constructor(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPE;
    }
    get items$() {
        return this.componentService.getItems(this.context);
    }
    get activeItem$() {
        return this.componentService.getActiveItem(this.context);
    }
    set active(value) {
        this.componentService.setActive(value, this.context);
    }
    get label$() {
        return this.componentService.getLabel(this.context);
    }
};
SiteContextSelectorComponent.ctorParameters = () => [
    { type: SiteContextComponentService }
];
__decorate([
    Input()
], SiteContextSelectorComponent.prototype, "context", void 0);
SiteContextSelectorComponent = __decorate([
    Component({
        selector: 'cx-site-context-selector',
        template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SiteContextSelectorComponent);

let SiteContextSelectorModule = class SiteContextSelectorModule {
};
SiteContextSelectorModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, SiteContextModule, IconModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CMSSiteContextComponent: {
                        component: SiteContextSelectorComponent,
                        providers: [
                            {
                                provide: SiteContextComponentService,
                                useClass: SiteContextComponentService,
                                deps: [CmsComponentData, ContextServiceMap, Injector],
                            },
                        ],
                    },
                    LanguageCurrencyComponent: {
                        component: LanguageCurrencyComponent,
                    },
                },
            }),
            SiteContextComponentService,
        ],
        declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
        entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
        exports: [SiteContextSelectorComponent, LanguageCurrencyComponent],
    })
], SiteContextSelectorModule);

var SiteContextType;
(function (SiteContextType) {
    SiteContextType["LANGUAGE"] = "LANGUAGE";
    SiteContextType["CURRENCY"] = "CURRENCY";
})(SiteContextType || (SiteContextType = {}));

let StarRatingComponent = class StarRatingComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * The rating component can be used in disabled mode,
         * so that the interation is not provided.
         */
        this.disabled = false;
        /**
         * Emits the given rating when the user clicks on a star.
         */
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.initialRate = 0;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.setRate(this.rating, true);
    }
    setRate(value, force) {
        if (!this.disabled || force) {
            this.renderer.setAttribute(this.el.nativeElement, 'style', `--star-fill:${value || this.initialRate};`);
        }
    }
    saveRate(rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    }
    setRateOnEvent(event, rating) {
        if (event.code === 'Space') {
            event.preventDefault();
            this.setRate(rating);
        }
    }
};
StarRatingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(), HostBinding('attr.disabled')
], StarRatingComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], StarRatingComponent.prototype, "rating", void 0);
__decorate([
    Output()
], StarRatingComponent.prototype, "change", void 0);
StarRatingComponent = __decorate([
    Component({
        selector: 'cx-star-rating',
        template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (keydown)=\"setRateOnEvent($event, i)\"\n  (click)=\"saveRate(i)\"\n  [attr.tabindex]=\"disabled ? null : 0\"\n></cx-icon>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], StarRatingComponent);

let StarRatingModule = class StarRatingModule {
};
StarRatingModule = __decorate([
    NgModule({
        imports: [CommonModule, IconModule],
        declarations: [StarRatingComponent],
        exports: [StarRatingComponent],
    })
], StarRatingModule);

/**
 * The `TableConfig` provides table configurations. The configuration allows for a
 * an optional breakpoint specific structure, so a dedicated table structure per
 * screen size can be generated (see `TableService`).
 *
 * The string based key is used to define a configuration for a specific type. The type
 * binds to a specific component, such as the cost-center table. The various table types
 * should be exposed by feature modules, to ease the configuration.
 *
 * The `TableConfiguration` is added in an array, so that any opinionated default configurations
 * can be replaced by customer configurations.
 */
let TableConfig = class TableConfig {
};
TableConfig.ɵprov = ɵɵdefineInjectable({ factory: function TableConfig_Factory() { return ɵɵinject(Config); }, token: TableConfig, providedIn: "root" });
TableConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], TableConfig);

/**
 * The table component provides a generic DOM structure based on the `dataset` input.
 * The `Table` dataset contains both a type, table structure, table data and controls
 * for pagination and sorting.
 *
 * The table component only supports horizontal table structure.
 *
 * The implementation is fairly "dumb" and only provides the following features:
 * - Use outlet for table headers (`<th>`) and cells (`<td>`).
 * - Localizing table headers, using the `I18nModule`.
 * - Sorting table columns.
 * - Add CSS classes on each cell to
 *
 * Al features are optional.
 *
 * By default, the headers and columns are rendered with an outlet template. The template
 * reference is generated by concatenating the table _type_ and table _label key_.
 * The following snippet shows an outlet generated for the table type "cost-center" with
 * a label "name":
 *
 * ```
 * <th>
 *   <template cxOutlet="tbl.cost-center.header.name">
 *     [localized label is generated here]
 *   </template>
 * </th>
 * ```
 *
 * Similarly, the `<td>` is generated with the outlet template reference `tbl.cost-center.data.name`.
 *
 * This allows container components (and customers) to further customize the table rendering.
 *
 *
 */
let TableComponent = class TableComponent {
    constructor() {
        /**
         * The paginateEvent is triggered when a new page is required. This includes sorting.
         */
        this.paginateEvent = new EventEmitter();
    }
    set dataset(dataset) {
        this._dataset = dataset;
        this.addTableDebugInfo();
    }
    get dataset() {
        return this._dataset;
    }
    /**
     * Returns the configured data value by the label key.
     * If there's no headerKey available, or no corresponding value, the
     * first value in the data row is returned.
     */
    getDataValue(dataRow, headerKey, index) {
        return dataRow[headerKey] || Object.values(dataRow)[index];
    }
    /**
     * Sorts the table by emitting the pagination to the container/host component.
     */
    sort(header) {
        if (header.sortCode) {
            this.paginateEvent.emit(Object.assign(Object.assign({}, this.dataset.pagination), { sort: header.sortCode }));
        }
    }
    /**
     * Generates the table type into the UI in devMode, so that developers
     * can easily get the notion of the table type.
     */
    addTableDebugInfo() {
        var _a, _b;
        if (isDevMode) {
            this.tableType = (_b = (_a = this.dataset) === null || _a === void 0 ? void 0 : _a.structure) === null || _b === void 0 ? void 0 : _b.type;
        }
    }
};
__decorate([
    HostBinding('attr.cx-table-type')
], TableComponent.prototype, "tableType", void 0);
__decorate([
    Input()
], TableComponent.prototype, "dataset", null);
__decorate([
    Output()
], TableComponent.prototype, "paginateEvent", void 0);
TableComponent = __decorate([
    Component({
        selector: 'cx-table',
        template: "<table *ngIf=\"dataset?.structure as structure\">\n  <thead *ngIf=\"!structure.hideHeader\">\n    <tr>\n      <th\n        scope=\"col\"\n        *ngFor=\"let header of structure.headers; let i = index\"\n        (click)=\"sort(header)\"\n        [class.sortable]=\"!!header.sortCode\"\n        [class]=\"header.key\"\n      >\n        <!-- render an outlet for each column header -->\n        <ng-template\n          [cxOutlet]=\"\n            'table.' + structure.type + '.header.' + (header.key || i)\n          \"\n          [cxOutletContext]=\"header\"\n        >\n          <!-- Render the label by default, fallback to localize the label by it's key -->\n          {{\n            header.label || (structure.type + '.' + header.key | cxTranslate)\n          }}\n        </ng-template>\n      </th>\n    </tr>\n  </thead>\n\n  <tr *ngFor=\"let row of dataset.data$ | async\">\n    <td *ngFor=\"let col of structure.headers; let i = index\" [class]=\"col.key\">\n      <!-- render an outlet for each cell -->\n      <ng-template\n        [cxOutlet]=\"'table.' + structure.type + '.data.' + (col.key || i)\"\n        [cxOutletContext]=\"row\"\n      >\n        {{ getDataValue(row, col.key, i) }}\n      </ng-template>\n    </td>\n  </tr>\n</table>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TableComponent);

/**
 * The TableModule provides a table component that is driven by (responsible) configuration.
 */
let TableModule = class TableModule {
};
TableModule = __decorate([
    NgModule({
        imports: [CommonModule, OutletModule, I18nModule],
        declarations: [TableComponent],
        exports: [TableComponent],
    })
], TableModule);

/**
 * Responsive table service.
 *
 * The `TableService` is used to generate a `TableStructure` based on configuration. The table
 * structure configuration allows for breakpoint specific configuration, so that the table
 * experience can be differentiated various screen sizes.
 *
 * The table structure configuration is driven by a table type. The various supported
 * table types are exposed in feature libraries.
 *
 * If there is no table configuration for the given type found, a table header structure
 * is generated based on the actual data or randomly (in case no data is passed in) by
 * generating 5 headers. In case of a generated header, we warn the developer in devMode that
 * there is no configuration available.
 */
let TableService = class TableService {
    constructor(breakpointService, config) {
        this.breakpointService = breakpointService;
        this.config = config;
    }
    /**
     * Builds the table structure. The table structure can be created by the help of
     * the `tableType`. The `tableType` can be used in the configuration `TableConfig`,
     * so that the table headers can be defined.
     */
    buildStructure(tableType, data$) {
        if (this.hasTableConfig(tableType)) {
            return this.buildStructureFromConfig(tableType);
        }
        else {
            if (data$) {
                return this.buildStructureFromData(tableType, data$);
            }
            else {
                return this.buildRandomStructure(tableType);
            }
        }
    }
    /**
     * Returns the table structure by configuration. The configuration can be
     * breakpoint-driven, which means that an alternative header structure can
     * be created per screen size.
     *
     * The breakpoint is resolved by teh `BreakpointService`.
     */
    buildStructureFromConfig(type) {
        return this.breakpointService.breakpoint$.pipe(map((breakpoint) => (Object.assign(Object.assign({}, this.getTableConfig(type, breakpoint)), { type }))));
    }
    /**
     * This method generates a table structure by the help of the first data row.
     */
    buildStructureFromData(type, data$) {
        this.warn(`No table configuration found to render table with type "${type}". The table header for "${type}" is generated by the help of the first data item`);
        return data$.pipe(map((data) => {
            const headers = Object.keys(data === null || data === void 0 ? void 0 : data[0]).map((key) => ({
                key,
                label: key,
            }));
            return {
                type: type,
                headers,
            };
        }));
    }
    /**
     * As a last resort, the table structure is randomly created. We add 5 unknown headers
     * and use the `hideHeader` to avoid the unknown headers to be rendered.
     */
    buildRandomStructure(type) {
        this.warn(`No data available for "${type}", a random structure is generated (with hidden table headers).`);
        return of({
            type,
            headers: [
                { key: 'unknown' },
                { key: 'unknown' },
                { key: 'unknown' },
                { key: 'unknown' },
                { key: 'unknown' },
            ],
            hideHeader: true,
        });
    }
    /**
     * Finds the best applicable table configuration for the given type
     * and breakpoint. If there is no configuration available for the breakpoint,
     * the best match will be returned, using mobile first approach.
     *
     * If there is no match for any breakpoint, the fallback is a configuration
     * without the notion of a breakpoint. Otherwise we fallback to the first
     * available config.
     */
    getTableConfig(type, breakpoint) {
        const tableConfig = this.config.table[type];
        // find all relevant breakpoints
        const current = this.breakpointService.breakpoints.indexOf(breakpoint);
        const relevant = this.breakpointService.breakpoints
            .slice(0, current + 1)
            .reverse();
        const bestMatch = relevant.find((br) => !!tableConfig.find((structure) => structure.breakpoint === br));
        return bestMatch
            ? tableConfig.find((config) => config.breakpoint === bestMatch)
            : tableConfig.find((structure) => !structure.breakpoint) ||
                tableConfig[0];
    }
    hasTableConfig(tableType) {
        var _a;
        return !!((_a = this.config.table) === null || _a === void 0 ? void 0 : _a[tableType]);
    }
    /**
     * Prints a convenient message in the console to increase developer experience.
     */
    warn(message) {
        if (isDevMode) {
            console.warn(message);
        }
    }
};
TableService.ctorParameters = () => [
    { type: BreakpointService },
    { type: TableConfig }
];
TableService.ɵprov = ɵɵdefineInjectable({ factory: function TableService_Factory() { return new TableService(ɵɵinject(BreakpointService), ɵɵinject(TableConfig)); }, token: TableService, providedIn: "root" });
TableService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TableService);

let ViewConfig = class ViewConfig {
};
ViewConfig.ɵprov = ɵɵdefineInjectable({ factory: function ViewConfig_Factory() { return ɵɵinject(Config); }, token: ViewConfig, providedIn: "root" });
ViewConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], ViewConfig);

var ViewConfigModule_1;
let ViewConfigModule = ViewConfigModule_1 = class ViewConfigModule {
    static forRoot() {
        return {
            ngModule: ViewConfigModule_1,
            providers: [
                provideDefaultConfig({
                    view: {},
                }),
            ],
        };
    }
};
ViewConfigModule = ViewConfigModule_1 = __decorate([
    NgModule({})
], ViewConfigModule);

let OrderDetailsService = class OrderDetailsService {
    constructor(userOrderService, routingService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map((routingData) => routingData.state.params.orderCode));
        this.orderLoad$ = this.orderCode$.pipe(tap((orderCode) => {
            if (orderCode) {
                this.userOrderService.loadOrderDetails(orderCode);
            }
            else {
                this.userOrderService.clearOrderDetails();
            }
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    getOrderDetails() {
        return this.orderLoad$.pipe(switchMap(() => this.userOrderService.getOrderDetails()));
    }
};
OrderDetailsService.ctorParameters = () => [
    { type: UserOrderService },
    { type: RoutingService }
];
OrderDetailsService.ɵprov = ɵɵdefineInjectable({ factory: function OrderDetailsService_Factory() { return new OrderDetailsService(ɵɵinject(UserOrderService), ɵɵinject(RoutingService)); }, token: OrderDetailsService, providedIn: "root" });
OrderDetailsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderDetailsService);

let PromotionService = class PromotionService {
    constructor(orderDetailsService, checkoutService, activeCartService) {
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
        this.activeCartService = activeCartService;
    }
    getOrderPromotions(promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.getOrderPromotionsFromCart();
            case PromotionLocation.Checkout:
                return this.getOrderPromotionsFromCheckout();
            case PromotionLocation.Order:
                return this.getOrderPromotionsFromOrder();
            default:
                return of([]);
        }
    }
    getOrderPromotionsFromCart() {
        return this.activeCartService
            .getActive()
            .pipe(map((cart) => this.getOrderPromotionsFromCartHelper(cart)));
    }
    getOrderPromotionsFromCartHelper(cart) {
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
    getOrderPromotionsFromCheckout() {
        return this.checkoutService
            .getOrderDetails()
            .pipe(map((order) => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrder() {
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map((order) => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrderHelper(order) {
        const appliedOrderPromotions = [];
        appliedOrderPromotions.push(...(order.appliedOrderPromotions || []));
        return appliedOrderPromotions;
    }
    getProductPromotionForEntry(item, promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.activeCartService
                    .getActive()
                    .pipe(map((cart) => this.getProductPromotion(item, cart.appliedProductPromotions || [])));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map((order) => this.getProductPromotion(item, order.appliedProductPromotions || [])));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map((order) => this.getProductPromotion(item, order.appliedProductPromotions || [])));
        }
    }
    getProductPromotion(item, promotions) {
        const entryPromotions = [];
        if (promotions && promotions.length > 0) {
            for (const promotion of promotions) {
                if (promotion.description &&
                    promotion.consumedEntries &&
                    promotion.consumedEntries.length > 0) {
                    for (const consumedEntry of promotion.consumedEntries) {
                        if (this.isConsumedByEntry(consumedEntry, item)) {
                            entryPromotions.push(promotion);
                        }
                    }
                }
            }
        }
        return entryPromotions;
    }
    isConsumedByEntry(consumedEntry, entry) {
        const consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            for (const subEntry of entry.entries) {
                if (subEntry.entryNumber === consumedEntryNumber) {
                    return true;
                }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    }
};
PromotionService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: CheckoutService },
    { type: ActiveCartService }
];
PromotionService.ɵprov = ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(ɵɵinject(OrderDetailsService), ɵɵinject(CheckoutService), ɵɵinject(ActiveCartService)); }, token: PromotionService, providedIn: "root" });
PromotionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PromotionService);

class CustomFormValidators {
    /**
     * Checks control's value with predefined email regexp
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxInvalidEmail' validator error
     * @memberof CustomFormValidators
     */
    static emailValidator(control) {
        const email = control.value;
        return !email.length || email.match(EMAIL_PATTERN)
            ? null
            : { cxInvalidEmail: true };
    }
    /**
     * Checks control's value with predefined password regexp
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxInvalidPassword' validator error
     * @memberof CustomFormValidators
     */
    static passwordValidator(control) {
        const password = control.value;
        return !password.length || password.match(PASSWORD_PATTERN)
            ? null
            : { cxInvalidPassword: true };
    }
    /**
     * Checks if control's value is between 1 and 5
     *
     * NOTE: Use it as a control validator
     *
     * @static
     * @param {AbstractControl} control
     * @returns {(ValidationErrors | null)} Uses 'cxStarRatingEmpty' validator error
     * @memberof CustomFormValidators
     */
    static starRatingEmpty(control) {
        const rating = control.value;
        return rating >= 1 && rating <= 5 ? null : { cxStarRatingEmpty: true };
    }
    /**
     * Checks if two password controls match
     *
     * NOTE: Use it as a form validator and pass password control names as parameters
     *
     * @static
     * @param {string} password First password control name
     * @param {string} passwordConfirmation Second password control name
     * @returns Uses 'cxPasswordsMustMatch' validator error
     * @memberof CustomFormValidators
     */
    static passwordsMustMatch(password, passwordConfirmation) {
        const validator = (formGroup) => controlsMustMatch(formGroup, password, passwordConfirmation, 'cxPasswordsMustMatch');
        return validator;
    }
    /**
     * Checks if two email controls match
     *
     * NOTE: Use it as a form validator and pass email control names as parameters
     *
     * @static
     * @param {string} email First email control name
     * @param {string} emailConfirmation Second email control name
     * @returns Uses 'cxEmailsMustMatch' validator error
     * @memberof CustomFormValidators
     */
    static emailsMustMatch(email, emailConfirmation) {
        const validator = (formGroup) => controlsMustMatch(formGroup, email, emailConfirmation, 'cxEmailsMustMatch');
        return validator;
    }
}
/**
 * Generic function for validators, which checks if two passed controls match.
 *
 * @param formGroup
 * @param firstControlName First control to check
 * @param secondControlName Second control to check
 * @param errorName Error which will be returned by validator
 */
function controlsMustMatch(formGroup, firstControlName, secondControlName, errorName) {
    const firstControl = formGroup.controls[firstControlName];
    const secondControl = formGroup.controls[secondControlName];
    if (secondControl.errors && !secondControl.errors[errorName]) {
        return;
    }
    secondControl.setErrors(firstControl.value !== secondControl.value ? { [errorName]: true } : null);
}

const titleScores = {
    mr: 1,
    mrs: 2,
    miss: 3,
    ms: 4,
    dr: 5,
    rev: 6,
};
function sortTitles(title1, title2) {
    if (!titleScores[title1.code] || !titleScores[title2.code]) {
        return 1;
    }
    else {
        return titleScores[title1.code] - titleScores[title2.code];
    }
}

let CmsComponentsService = class CmsComponentsService {
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
        this.missingComponents = [];
    }
    /**
     * Should be called to make sure all component mappings are determined,
     * especially lazy loaded ones.
     *
     * It's recommended way to make sure all other methods of CmsComponentService
     * will be able to work synchronously for asked component types and avoid risk
     * of potential errors that could be thrown otherwise.
     */
    determineMappings(componentTypes) {
        return of(componentTypes);
    }
    /**
     * Return collection of component mapping configuration for specified list of
     * component types.
     *
     * If component mapping can't be determined synchronously, for example, lazy
     * loaded one, it will throw an error.
     *
     * To make sure component mapping is available, determineMappings()
     * should be called and completed first.
     */
    getMapping(componentType) {
        var _a;
        const componentConfig = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType];
        if (!componentConfig) {
            if (!this.missingComponents.includes(componentType)) {
                this.missingComponents.push(componentType);
                console.warn(`No component implementation found for the CMS component type '${componentType}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig;
    }
    /**
     * Checks, if component should be rendered as some components
     * could be disabled for server side renderings
     */
    shouldRender(componentType) {
        var _a;
        const isSSR = isPlatformServer(this.platformId);
        return !(isSSR && ((_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.disableSSR));
    }
    /**
     * Return DeferLoadingStrategy for component type.
     */
    getDeferLoadingStrategy(componentType) {
        var _a, _b;
        return (_b = (_a = this.config.cmsComponents) === null || _a === void 0 ? void 0 : _a[componentType]) === null || _b === void 0 ? void 0 : _b.deferLoading;
    }
    /**
     * Get cms driven child routes for components
     */
    getChildRoutes(componentTypes) {
        var _a, _b;
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                routes.push(...((_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.childRoutes) !== null && _b !== void 0 ? _b : []));
            }
        }
        return routes;
    }
    /**
     * Get cms driven guards for components
     */
    getGuards(componentTypes) {
        var _a, _b;
        const guards = new Set();
        for (const componentType of componentTypes) {
            (_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.guards) === null || _b === void 0 ? void 0 : _b.forEach((guard) => guards.add(guard));
        }
        return Array.from(guards);
    }
    /**
     * Get i18n keys associated with components
     */
    getI18nKeys(componentTypes) {
        var _a, _b;
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.shouldRender(componentType)) {
                (_b = (_a = this.getMapping(componentType)) === null || _a === void 0 ? void 0 : _a.i18nKeys) === null || _b === void 0 ? void 0 : _b.forEach((key) => i18nKeys.add(key));
            }
        }
        return Array.from(i18nKeys);
    }
};
CmsComponentsService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
CmsComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function CmsComponentsService_Factory() { return new CmsComponentsService(ɵɵinject(CmsConfig), ɵɵinject(PLATFORM_ID)); }, token: CmsComponentsService, providedIn: "root" });
CmsComponentsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Inject(PLATFORM_ID))
], CmsComponentsService);

/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
let CmsInjectorService = class CmsInjectorService {
    constructor(cmsComponentsService, injector) {
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
    }
    getCmsData(uid, parentInjector) {
        return {
            uid: uid,
            data$: (parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector)
                .get(CmsService)
                .getComponentData(uid),
        };
    }
    getInjector(type, uid, parentInjector) {
        var _a, _b;
        const configProviders = (_b = (_a = this.cmsComponentsService.getMapping(type)) === null || _a === void 0 ? void 0 : _a.providers) !== null && _b !== void 0 ? _b : [];
        return Injector.create({
            providers: [
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsData(uid),
                },
                ...configProviders,
            ],
            parent: parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector,
        });
    }
};
CmsInjectorService.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: Injector }
];
CmsInjectorService.ɵprov = ɵɵdefineInjectable({ factory: function CmsInjectorService_Factory() { return new CmsInjectorService(ɵɵinject(CmsComponentsService), ɵɵinject(INJECTOR)); }, token: CmsInjectorService, providedIn: "root" });
CmsInjectorService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsInjectorService);

/**
 * ComponentHandler implementations can be used for instantiating and launching
 * different types of CMS mapped components
 */
class ComponentHandler {
}

/**
 * Responsible for obtaining component handler for specified component mapping
 */
let ComponentHandlerService = class ComponentHandlerService {
    constructor(handlers) {
        this.handlers = handlers;
        this.invalidMappings = new Set();
    }
    /**
     * Get best matching component handler
     *
     * @param componentMapping
     */
    resolve(componentMapping) {
        const handler = resolveApplicable(this.handlers, [componentMapping]);
        if (isDevMode() && !handler) {
            if (!this.invalidMappings.has(componentMapping)) {
                this.invalidMappings.add(componentMapping);
                console.warn("Can't resolve handler for component mapping: ", componentMapping);
            }
        }
        return handler;
    }
    /**
     * Get launcher for specified component mapping
     *
     * @param componentMapping
     * @param viewContainerRef
     * @param elementInjector
     */
    getLauncher(componentMapping, viewContainerRef, elementInjector) {
        var _a;
        return (_a = this.resolve(componentMapping)) === null || _a === void 0 ? void 0 : _a.launcher(componentMapping, viewContainerRef, elementInjector);
    }
};
ComponentHandlerService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [ComponentHandler,] }] }
];
ComponentHandlerService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentHandlerService_Factory() { return new ComponentHandlerService(ɵɵinject(ComponentHandler, 8)); }, token: ComponentHandlerService, providedIn: "root" });
ComponentHandlerService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Optional()),
    __param(0, Inject(ComponentHandler))
], ComponentHandlerService);

/**
 * Directive used to facilitate instantiation of CMS driven dynamic components
 */
let ComponentWrapperDirective = class ComponentWrapperDirective {
    constructor(vcr, cmsComponentsService, injector, dynamicAttributeService, renderer, componentHandler, cmsInjector) {
        this.vcr = vcr;
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.componentHandler = componentHandler;
        this.cmsInjector = cmsInjector;
    }
    ngOnInit() {
        this.cmsComponentsService
            .determineMappings([this.cxComponentWrapper.flexType])
            .subscribe(() => {
            if (this.cmsComponentsService.shouldRender(this.cxComponentWrapper.flexType)) {
                this.launchComponent();
            }
        });
    }
    launchComponent() {
        var _a;
        const componentMapping = this.cmsComponentsService.getMapping(this.cxComponentWrapper.flexType);
        if (!componentMapping) {
            return;
        }
        this.launcherResource = (_a = this.componentHandler
            .getLauncher(componentMapping, this.vcr, this.cmsInjector.getInjector(this.cxComponentWrapper.flexType, this.cxComponentWrapper.uid, this.injector))) === null || _a === void 0 ? void 0 : _a.subscribe(({ elementRef, componentRef }) => {
            this.cmpRef = componentRef;
            this.decorate(elementRef);
            this.injector.get(ChangeDetectorRef).markForCheck();
        });
    }
    decorate(elementRef) {
        this.dynamicAttributeService.addDynamicAttributes(elementRef.nativeElement, this.renderer, { componentData: this.cxComponentWrapper });
    }
    ngOnDestroy() {
        if (this.launcherResource) {
            this.launcherResource.unsubscribe();
        }
    }
};
ComponentWrapperDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: CmsComponentsService },
    { type: Injector },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ComponentHandlerService },
    { type: CmsInjectorService }
];
__decorate([
    Input()
], ComponentWrapperDirective.prototype, "cxComponentWrapper", void 0);
ComponentWrapperDirective = __decorate([
    Directive({
        selector: '[cxComponentWrapper]',
    })
], ComponentWrapperDirective);

/**
 * Default component handler used for dynamically launching cms components implemented
 * as native Angular components.
 */
let DefaultComponentHandler = class DefaultComponentHandler {
    hasMatch(componentMapping) {
        return typeof componentMapping.component === 'function';
    }
    getPriority() {
        return -50 /* FALLBACK */;
    }
    launcher(componentMapping, viewContainerRef, elementInjector) {
        return new Observable((subscriber) => {
            let componentRef;
            const injector = elementInjector !== null && elementInjector !== void 0 ? elementInjector : viewContainerRef.injector;
            const dispose = () => {
                if (componentRef) {
                    componentRef.destroy();
                }
            };
            const factory = this.getComponentFactory(injector, componentMapping.component);
            if (factory) {
                componentRef = viewContainerRef.createComponent(factory, undefined, injector);
                subscriber.next({ elementRef: componentRef.location, componentRef });
            }
            return dispose;
        });
    }
    getComponentFactory(injector, component) {
        if (!component) {
            return null;
        }
        const factory = injector
            .get(ComponentFactoryResolver)
            .resolveComponentFactory(component);
        return factory;
    }
};
DefaultComponentHandler.ɵprov = ɵɵdefineInjectable({ factory: function DefaultComponentHandler_Factory() { return new DefaultComponentHandler(); }, token: DefaultComponentHandler, providedIn: "root" });
DefaultComponentHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DefaultComponentHandler);

/**
 * Lazy component handler used for launching lazy loaded cms components implemented
 * as native Angular components.
 */
let LazyComponentHandler = class LazyComponentHandler {
    constructor(defaultHandler) {
        this.defaultHandler = defaultHandler;
    }
    /**
     * We want to mach dynamic import signature () => import('')
     */
    hasMatch(componentMapping) {
        return (typeof componentMapping.component === 'function' &&
            this.isNotClass(componentMapping.component));
    }
    isNotClass(symbol) {
        const signature = symbol.toString().substr(0, 20).replace(' ', '');
        return signature.startsWith('function()') || signature.startsWith('()=>');
    }
    getPriority() {
        return -10 /* LOW */;
    }
    launcher(componentMapping, viewContainerRef, elementInjector) {
        return from(componentMapping.component()).pipe(switchMap((component) => this.defaultHandler.launcher(Object.assign(Object.assign({}, componentMapping), { component }), viewContainerRef, elementInjector)));
    }
};
LazyComponentHandler.ctorParameters = () => [
    { type: DefaultComponentHandler }
];
LazyComponentHandler.ɵprov = ɵɵdefineInjectable({ factory: function LazyComponentHandler_Factory() { return new LazyComponentHandler(ɵɵinject(DefaultComponentHandler)); }, token: LazyComponentHandler, providedIn: "root" });
LazyComponentHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LazyComponentHandler);

let PageComponentModule = class PageComponentModule {
};
PageComponentModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            {
                provide: ComponentHandler,
                useExisting: DefaultComponentHandler,
                multi: true,
            },
            {
                provide: ComponentHandler,
                useExisting: LazyComponentHandler,
                multi: true,
            },
        ],
        declarations: [ComponentWrapperDirective],
        exports: [ComponentWrapperDirective],
    })
], PageComponentModule);

const ASM_ENABLED_LOCAL_STORAGE_KEY = 'asm_enabled';

/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
let AsmEnablerService = class AsmEnablerService {
    constructor(location, winRef, launchDialogService) {
        this.location = location;
        this.winRef = winRef;
        this.launchDialogService = launchDialogService;
    }
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     */
    load() {
        if (this.isEnabled()) {
            this.addUi();
        }
    }
    /**
     * Indicates whether the ASM module is enabled.
     */
    isEnabled() {
        if (this.isLaunched() && !this.isUsedBefore()) {
            if (this.winRef.localStorage) {
                this.winRef.localStorage.setItem(ASM_ENABLED_LOCAL_STORAGE_KEY, 'true');
            }
        }
        return this.isLaunched() || this.isUsedBefore();
    }
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     */
    isLaunched() {
        const params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    }
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    isUsedBefore() {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    }
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    addUi() {
        this.launchDialogService.launch(LAUNCH_CALLER.ASM);
    }
};
AsmEnablerService.ctorParameters = () => [
    { type: Location },
    { type: WindowRef },
    { type: LaunchDialogService }
];
AsmEnablerService.ɵprov = ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(ɵɵinject(Location), ɵɵinject(WindowRef), ɵɵinject(LaunchDialogService)); }, token: AsmEnablerService, providedIn: "root" });
AsmEnablerService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmEnablerService);

/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
let AsmLoaderModule = class AsmLoaderModule {
};
AsmLoaderModule = __decorate([
    NgModule({
        imports: [CommonModule, PageComponentModule],
        providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: asmFactory,
                deps: [AsmEnablerService],
                multi: true,
            },
        ],
    })
], AsmLoaderModule);
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 */
function asmFactory(asmEnablerService) {
    const isReady = () => {
        asmEnablerService.load();
    };
    return isReady;
}

let AsmComponentService = class AsmComponentService {
    constructor(authService, asmAuthService, routingService, winRef) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.routingService = routingService;
        this.winRef = winRef;
    }
    logoutCustomerSupportAgentAndCustomer() {
        this.authService
            .getUserToken()
            .pipe(take(1))
            .subscribe((token) => {
            if (this.asmAuthService.isCustomerEmulationToken(token)) {
                this.logoutCustomer();
            }
            this.asmAuthService.logoutCustomerSupportAgent();
        });
    }
    logoutCustomer() {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    }
    isCustomerEmulationSessionInProgress() {
        return this.authService
            .getUserToken()
            .pipe(mergeMap((userToken) => of(this.asmAuthService.isCustomerEmulationToken(userToken))));
    }
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    unload() {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    }
};
AsmComponentService.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthService },
    { type: RoutingService },
    { type: WindowRef }
];
AsmComponentService.ɵprov = ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(ɵɵinject(AuthService), ɵɵinject(AsmAuthService), ɵɵinject(RoutingService), ɵɵinject(WindowRef)); }, token: AsmComponentService, providedIn: "root" });
AsmComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AsmComponentService);

let AsmMainUiComponent = class AsmMainUiComponent {
    constructor(authService, asmAuthService, userService, asmComponentService, globalMessageService, routingService, asmService) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.userService = userService;
        this.asmComponentService = asmComponentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.asmService = asmService;
        this.disabled = false;
        this.startingCustomerSession = false;
    }
    ngOnInit() {
        this.csAgentToken$ = this.asmAuthService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.asmAuthService.getCustomerSupportAgentTokenLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap((token) => {
            if (token && !!token.access_token) {
                this.handleCustomerSessionStartRedirection(token);
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        }));
        this.isCollapsed$ = this.asmService
            .getAsmUiState()
            .pipe(map((uiState) => uiState.collapsed));
    }
    handleCustomerSessionStartRedirection(token) {
        if (this.startingCustomerSession &&
            this.asmAuthService.isCustomerEmulationToken(token)) {
            this.startingCustomerSession = false;
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this.routingService.go('/');
        }
    }
    loginCustomerSupportAgent({ userId, password, }) {
        this.asmAuthService.authorizeCustomerSupportAgent(userId, password);
    }
    logout() {
        this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
    }
    startCustomerEmulationSession({ customerId }) {
        this.asmAuthService
            .getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe((customerSupportAgentToken) => this.asmAuthService.startCustomerEmulationSession(customerSupportAgentToken, customerId))
            .unsubscribe();
        this.startingCustomerSession = true;
    }
    hideUi() {
        this.disabled = true;
        this.asmComponentService.unload();
    }
};
AsmMainUiComponent.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthService },
    { type: UserService },
    { type: AsmComponentService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: AsmService }
];
__decorate([
    HostBinding('class.hidden')
], AsmMainUiComponent.prototype, "disabled", void 0);
AsmMainUiComponent = __decorate([
    Component({
        selector: 'cx-asm-main-ui',
        template: "<div class=\"asm-bar\">\n  <div class=\"asm-bar-branding\">\n    <img\n      class=\"logo\"\n      src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAAAXNSR0IArs4c6QAAD7RJREFUeAHtW3twVGcVP7t795V30rwJBBJeASq01NJgnZa2otTW2nHAqrRak+rUKfgYZ/xDW5lRR2e0/mGtAadqq6WjUAdNa4udqVZaEdtCKQ2FQEh5JSQh5Lnvp7/ft9lkd9l7swkhwMiZ3N27937fd8533ufcG9P1L/VE5SpMOwdMmk0iocDzWjAUnnbk/9cITSYx2xwS9Xs3Wzs7NmqhcOT/mh/Tunkw32SzScjr2Vy2v3XDa5tWhbRI5KoHmi4hmGx2ifi8mz8UmvHI9k2VyvVokasWMC38N8HtRHyezUejex5pXbdu1O9r5qsCuLgCUD4fmu/1bq5sbd9wdNMY84lYM10VwMUTAJlvtUnU491c0XZc+fxUZFo0Mn4QjiJMMFREcKJG4xxrC/7ETCQ854+JAtbBny5Mak3d1ab3BsKtCrhhuJ2K9lNpmU+KYAHpWRAFa4K4x7t5NouU5WhS4rRIvt0idotJ3MGIDPgj0usNSZ8vLMOBiIQhJQukoZkpHGOJcGXLiPD0WBNStOmvQ8ETAjp7iN0d++RelBLhBFsAnVQe/fXHZk7wDEuarXaJBrxNFe2nNzLb0VsBMWA0HoyO8WNDDnDxIzOy5ONzcuX6MqdU5VhxLZlYWoUvFJEud0iODQZkb5dXHa19PnEFw2LDBi0QRqqac14BBPnz2yul0GEZxZt68vzhQXm6pS+Gl9xLANL4uUWFsm5hPmiIjiPu2EQqSY8nJCeHAnK4zy+tOLrdQXXTClqVLFLwJKDM7BSLmMD8iN/btCRn3obtm+adz+CElTTlW0YuEDe1qR6M//oNJXJDRVbC0PNPqYFZVrPUFNjU8bHqHGUF3NxLx4ZkZ/uQdLnOF34Acad+To6srDRe/7ML8+T5Q/3KEpNFD5lijVKnWa4tdpxPWIZXeiGM/3S65Y/vD8hbnR6lLBdkEdR8DZrv9zUtyT+wYfu6+YbMJ5mjQZjMZ1H20HXF8s0VZWKjjU4C6IIWgyk8PlqVLY0vnhDGkMTVNJjA3bV5464+t9AhS4vtsqfDBWuiKY0Bk4dIhq5nbFbyWXGWJnfPzZc1NRT0gDy+p1uG/WHlmpJHZvALG6TmR/2epoOFBzccTEg1jWabTXBBpkhYgoGQNCy9Rr6zsnzSzE9ERKZvazknAX9IzFhf4QGuMFofNXmarKjMThye9pwWtqYmV6Jwc2R4fI3Rb/qyKQDGgvsWF8ovVlcJSEOPJsaTUTzkkdGBRMZstorA7SwqXLRBMmQ+STczC/IHwnA3TvlGfdkUbCe2xBsnhmVna79YTQi3YB7x8AhA0LfPzpNsW7JG6yG+BWOLHWYJgwHxNUa/KeUphPqZOfKt+nKlJIk0j+Ib2UPyb8QfMD/q8zYV9/Ru3L7ONK7bSSTZHIUZm6FJDdeXIrsZnynMdBh4jfbuR1B8YnenhBCIVZZFV4GDuLLh2j4xLz+RBsPzylyrspYAlIRrJB1TZAGJBHxmUZFcV5YFRUmDLxU/fpP5aC80Fff1GWY7iTgSzzWa26wCu6yA9I3g7VPDsu1Ar3zQ75MAGEwNLnBoUgtfv2JmriybkSM5SFcJO1p65Z3Tw2JnPgqtiUMIgluGsXUlzviljL7vnF8gLx86h7UShnNdIy3A0NeODcrrHwwqn56LrKv2GtA6K0+K4Pv1wAoF+STw7T05lBy4kibQ8lhkMdvxNZUMD06K+VxSC0NLawtto8xLwjPyYx+Y2bCtVVwjAYrpGvdOBXzlcFSeguVUF9rlzroiuXlOgfzmv2fEwgFwG4kQhitag80xUE8EbgLTZsISOgb9Y3MhzPEE8NapIdmyu0McyNRIDjOcmVC2x1ZXy621BbokLK/KEZQ8CPLJ9I9OwDpm9POR7fzqYPXyjTJBtzO6Dk4QH8MosPQ1goND4DSDNFCKDT4dHk99O8xRRSjKaTnR65Ff7jolX37ufTnT78UYBE1oafygT2Uhd9vcwkT8GZ3noVa4tSY/5tIS1jQBrxFYIWdkqurIAkMdoL2jzyvf/1u7dA8HdKdW5FmlCHEnFozH9qASAfDCYtLYz2+qe7P9gphPAhADEBipTQZwIzTwJ3fVSmm2VTy+kARgNeyiqkDFbzDFooQioh7w4PfovZFxDL7U5Mp8W1pMrLppYXqwBtbFuJ2MF2ptAFEwK4kO0MWkoGPAK/s7hnVnMhZmw30m4eI+aEZgPtzOr+pqTmzYvj25saa7oMENiDIq3UN+gyGxW5+6tkRurM6XHe/2yIstZ6XtrEcJTgOxTOPoluIVbypb+JvK+slF1+jiae/1yuvH+qVx5Yy0Y66tzJX5xVnScsYlrFpZA5AfRkCGcVwEljoKoDOMaz5UxXqgIQ7Aa6lxo1Mxj3l+OOD73eEFKze2rKvX1xa9hdNcx1aicqjLJb0ufZOMzyvPs8nDH62SPzculWceWAJmVUkNAlsAgdwFywhCS0LQstTDz0BfZJebEB/0YM8HA7Jjf7eqpNONYWF4x4JC8QVDav0g8LCvYwS8z3GJ9NDaEY9lfql+Fc4kg/sJJ8wNm20S9nu3+sKBr12Iz0+l10wtOQ2fTa3OFBjUbpqdL9/9xBz5y1eXyVNfWCy0EA0bc6Pw4oZJfPzwwWXdPr9IcrhzHdjV1icHod20LD1YXVes1qCgufZ4AmDKTOFTQUgDafPg+PwNFbIAqaYeuOEKe90B5XIUHgseIwa9W/3RYOPxTat8evMmc121o+m/m/51QlaBSdVFE0sRnVaLmse5LZ0ueeK14/IShKk6nbQvCDiLqd3iYl36uuAC950cFK8/KK9DEAvK0lfJc0uyZHlVrvzzyLmY+xnHAvIg8CpYrQM0ZiGAVF+TJXdDUe6+ttSwC9ra7ZJ+eASVraG3A5+/1VLqbmjfeOf4vlp3l+lvQAAoxHDvNLKDh7e+J1vWf0hmogczGVhSmSNbPr9EnvnPafnB344iINP8o3Lj7AJZDB+uB3va+6V70KcC+T9bz0nDyplpny8wzty1pFRePXQ2IwE8WD9DPgdtN2EiBWBFvMoEXnm/V/xwddnOLHY1n9OGfQ1tP5x65pMW1PgIRjiYYew/MSj3bdkrfz/YkwmdumO+WF8lP753IVLQqEod74LWscDRg1cP9ap+jxWMOgBL6BjQt/JVC4qkIgfv1JBurG8E1PyCLKvkI83OlPknoYgvvtslDjzDDQe8W8H8L7c9cXGYT9qRa2ETPJAZ2OEyTvS65StPvysP//6AvH18wGh/hvfWLq+QtcvLhW5g9aIS3bH96Mf/tw09IygAApL0DvlkdxuqXh0oy7PLzaglmNbGzEBn4CQuM2b86IUjctYFrxD0bTU5LI0Xk/kk0RxhMEs4GCbplnbs7ZC1T74lX9jytvzpzQ45Y6CVentdf1OVrIHLmGkQV/a098mpc24xgfmKDmj2Ky3GFnjX0jIIi3pjbAF6dKW7zjrksR2Hpfm9PtEi/q3RLG3KA246vBrdRCrQWTjgL1kJ/gPM4FGe75Dl8OV3LC6VW5CNVBSMHycWVuTKN1fXpi6f9Jsuh81Atq0JVIAPetwyhEedeToV+sraIvSgnOhank+7WmSCH0eRhv8Ymr8TzwSQ7zxr7rc9dPzxqc129Egy1Xz9paRd8Eeqt+Y1lVNjwzwvRz/l08tnyCNgbhH88YUAU8O2brd0IhX24zlzCVzMbGQ7FLDR06nvbTsodvitR++tmxT6QU9QDqEafuGdTmned0b6fSaxg/mRwa6Hjj/9oH4QmhQ2/UnnWQALFWYbDFpxQfCb+QMrRAqgH02xJ3celdOIF5sbl+NhRHykPiK9O9l2TZbOyleH3ph019fADe05qh8rOOeNw72y+0gv6I7thSnxOaSXp895YGUelfmxTnA4nGKPBrfCrTW2P/3glKea6eiPX9Ms8P9xYMq4/iOzlAvY09qrLttIfDr+QiLtnUMqflM40w3LqgtQNxh3A954v0cebz4szpE2OWnkXpiWMsdnC8XuQLaDgBs1WxoudsBNxyNYQEwAZP6c0hx5dO0SVUTthGlu//cJOXC8X4bx8JouSAkCJsAZOXgW8NAdtcoq0i18sa9lA//NC/WLO+Jnzygbb3Kkvs2haIMgzKhwI0g1oxbrJWE+6dAs9CmAIPzvA7fORsESaxfcc2OVfOrDVXKsa1gOnhyQDrSbB1Ce0y+XoVBbsaBEFs3M/MlWDMvUfjoSNDvdyrRM7i++x8QxJjI/6Hs2rFkveqqZiDf1XFkAU7B55Tny6fpZSfep8XORyfC4IoEtWFp4BBsZAb4wpv45Iuh/1uvvY8CdVp8fpyP+rbH4iSIQrV81B2kfnuxPA/AlgJ9tf0/KUR8sqi6U8kInyn6rCvpMAs6hGDuJVHQ/CrL7bquRuZXjv8KSjmy0/tWTOfV0bmSAcjsh/7OewMC0Zjvp6OM1ja+J1MGVrL1ljt6YKb/ehuD93KvHVJfSjnaB06aJNvLWHRXWj86lF+mpF4IqRTo6WQHwAQULPB4EExtrYL7X6Wg8/utLq/lxpppZUfrQ+37tnTNq4/Ebk/lmoH793TOKeUbzd2EM35jIBvMZcfxgthvxhYfXizYwqmEnnkjxIf+/W7rQqoox0GjNdPdoASw0eZjRzxf4fG+H45L6/FQ6zVS8M2dd8u0nd8v9P/yH/H7nETnd40odZ/ib7NmHfPurP90lbx7uESdyeyPYtb8TjwbBHAiMLpDtcAoifvAa7/Hd0kNoVUyUnjhu9b4n10fANQX8f3BndTa2vXzxGmtxvBP5Nl33pW1KvUCnejWR2laEarQOvnnZvGKpm10olXgUWJhrFxs0lsCxLk9AulG9toBBb0Cj6a/d3qCsva1W5lTQZ6tl1fjEj0Fo+XOvHAUuMHksNiYOSTpnS/tOJAcLZvFhfvo1kyYk/Njd0i1vHxlAbAltc3VlP3C5MZ+kmq574E/n7YquhO+JsuPLgsWJjiaDZLylywk+uI1hMJzpKythK1wGGcrfRi6DYyjIDHgfYyUGBrDmZP6XzWZHO0NCzR6LfX3rb+/Rfwofw3RJPrV4gErErlwBKmDlE3AjDAYMBn1J3V8ykk+9NPaRCTQL/KmXeg16/6Nj1UkGH1iT/48AZBkMHhvCt5Qj4UCzW3NctswntRr5lgmo/DmVBzGeZzJ9WseQ+eFgoNkz5Frf2vzZy1Lz4wxBDM5QAvEZl/m32cJUE8y3kfkNlzXzyUr1XtBlztOMyVNuJ+Rvdg571u+7Apg/IoCM93dZD+S7mnA7f/W4PPdfKcwfEcCV74KU26HPd3vvvxLcTqImX4pWfiL+Cz7nf6ZEI8G/ut3eK8Lnp254pAOTevnK+G0yI4RFQvtzQ9r6vc0NEyvfL5Mt/g8XIbTVhsig+gAAAABJRU5ErkJggg==\"\n      width=\"48\"\n      height=\"24\"\n      alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    />\n\n    <div class=\"asm-title\">\n      {{ 'asm.mainTitle' | cxTranslate }}\n    </div>\n  </div>\n  <div class=\"asm-bar-actions\">\n    <cx-asm-toggle-ui></cx-asm-toggle-ui>\n\n    <cx-asm-session-timer\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n    ></cx-asm-session-timer>\n\n    <button\n      class=\"close\"\n      title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n      *ngIf=\"\n        !(csAgentToken$ | async)?.access_token &&\n        !(csAgentTokenLoading$ | async)\n      \"\n      (click)=\"hideUi()\"\n    ></button>\n\n    <button\n      class=\"logout\"\n      title=\"{{ 'asm.logout' | cxTranslate }}\"\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n      (click)=\"logout()\"\n    ></button>\n  </div>\n</div>\n\n<ng-container *ngIf=\"!(isCollapsed$ | async) as notCollapsed\">\n  <ng-container\n    *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\"\n  >\n    <ng-container *ngIf=\"customer$ | async; else showCustomerSelection\">\n      <cx-customer-emulation *ngIf=\"notCollapsed\"></cx-customer-emulation>\n    </ng-container>\n    <ng-template #showCustomerSelection>\n      <cx-customer-selection\n        *ngIf=\"notCollapsed\"\n        (submitEvent)=\"startCustomerEmulationSession($event)\"\n      ></cx-customer-selection>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #showLoginForm>\n    <cx-csagent-login-form\n      *ngIf=\"notCollapsed\"\n      (submitEvent)=\"loginCustomerSupportAgent($event)\"\n      [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n    ></cx-csagent-login-form>\n  </ng-template>\n</ng-container>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-asm-main-ui{font-family:Arial,sans-serif;font-size:14px;width:100%;display:flex;flex-direction:column}cx-asm-main-ui .close,cx-asm-main-ui .logout{cursor:pointer;width:16px;height:16px;border:transparent;background-color:transparent}cx-asm-main-ui .close{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'/%3E%3C/svg%3E\")}cx-asm-main-ui .logout{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M11,2.7c1.2,0.6,2.2,1.5,2.9,2.6c1.3,1.9,1.5,4.4,0.6,6.5c-0.3,0.8-0.8,1.6-1.5,2.2c-0.6,0.6-1.4,1.1-2.2,1.5 C9.9,15.8,9,16,8,16c-0.9,0-1.9-0.2-2.7-0.5c-0.8-0.4-1.6-0.9-2.2-1.5c-0.6-0.6-1.1-1.4-1.5-2.2C0.7,9.6,0.9,7.2,2.1,5.3 c0.7-1.1,1.7-2,2.9-2.6v1.1C4.1,4.3,3.3,5.1,2.8,6C2.3,6.9,2,7.9,2,9c0,1.6,0.6,3.2,1.8,4.3c0.5,0.5,1.2,1,1.9,1.3 c1.5,0.6,3.2,0.6,4.7,0c0.7-0.3,1.4-0.7,1.9-1.3C13.4,12.1,14,10.6,14,9c0-1.1-0.3-2.1-0.8-3c-0.5-0.9-1.3-1.7-2.2-2.2 C11,3.8,11,2.7,11,2.7z M8,9C7.7,9,7.5,8.9,7.3,8.7C7.1,8.5,7,8.3,7,8V1c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0 C8.9,0.5,9,0.7,9,1v7c0,0.3-0.1,0.5-0.3,0.7C8.5,8.9,8.2,9,8,9z'/%3E%3C/svg%3E%0A\")}cx-asm-main-ui button[type=submit]{padding:0 12px;white-space:nowrap;border-radius:4px;height:36px;font-weight:400;border-style:solid;border-width:1px}cx-asm-main-ui button[type=submit]:disabled{opacity:.4;cursor:not-allowed}cx-asm-main-ui .spinner{display:flex;justify-content:center;width:100%;color:#0a6ed1}cx-asm-main-ui .spinner>div{width:8px;height:8px;margin:6px;border-radius:100%;background-color:currentColor;-webkit-animation:1s infinite spinner-dots-pulse;animation:1s infinite spinner-dots-pulse}cx-asm-main-ui .spinner>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}@keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}cx-asm-main-ui.hidden{display:none}cx-asm-main-ui .asm-bar{color:#fff;background-color:#354a5f;height:48px;display:flex;padding:0 2rem;justify-content:space-between;z-index:1}cx-asm-main-ui .asm-bar-branding{display:flex;align-items:center}cx-asm-main-ui .asm-bar-branding .logo{-webkit-margin-end:8px;margin-inline-end:8px}cx-asm-main-ui .asm-bar-branding .asm-title{font-size:16px;font-weight:700}cx-asm-main-ui .asm-bar-actions{display:flex;justify-content:flex-end;align-items:center}cx-asm-main-ui>:nth-child(2){padding:1rem 2rem;display:flex;width:100%}cx-asm-main-ui input{outline:0;border:1px solid #89919a;color:#32363a;background-color:#fff;border-radius:4px;padding:0 12px;height:36px}cx-asm-main-ui input:focus{box-shadow:0 0 0 1px #fafafa}cx-asm-main-ui input:hover{border-color:#085caf}cx-asm-main-ui input::-moz-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input:-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::placeholder{color:#74777a;font-style:italic}@media (max-width:575px){cx-asm-main-ui .asm-bar-branding .asm-title{display:none}cx-asm-main-ui .asm-alert{margin-top:30px}}"]
    })
], AsmMainUiComponent);

let AsmSessionTimerComponent = class AsmSessionTimerComponent {
    constructor(config, asmComponentService, authService, routingService, changeDetectorRef) {
        this.config = config;
        this.asmComponentService = asmComponentService;
        this.authService = authService;
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = new Subscription();
        this.maxStartDelayInSeconds = 60000;
    }
    ngOnInit() {
        this.timeLeft = this.getTimerStartDelayInSeconds();
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                clearInterval(this.interval);
                this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
            }
            this.changeDetectorRef.markForCheck();
        }, 1000);
        this.resetOnNavigate();
        this.resetOnCustomerSessionChange();
    }
    resetOnNavigate() {
        this.subscriptions.add(this.routingService.isNavigating().subscribe((isNavigating) => {
            if (isNavigating) {
                this.resetTimer();
            }
        }));
    }
    resetOnCustomerSessionChange() {
        this.subscriptions.add(this.authService
            .getOccUserId()
            .pipe(distinctUntilChanged())
            .subscribe(() => this.resetTimer()));
    }
    resetTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft = this.getTimerStartDelayInSeconds();
        }
    }
    getTimerStartDelayInSeconds() {
        if (this.config.asm.agentSessionTimer.startingDelayInSeconds >
            this.maxStartDelayInSeconds) {
            return this.maxStartDelayInSeconds;
        }
        else {
            return this.config.asm.agentSessionTimer.startingDelayInSeconds;
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
};
AsmSessionTimerComponent.ctorParameters = () => [
    { type: AsmConfig },
    { type: AsmComponentService },
    { type: AuthService },
    { type: RoutingService },
    { type: ChangeDetectorRef }
];
AsmSessionTimerComponent = __decorate([
    Component({
        selector: 'cx-asm-session-timer',
        template: "<span class=\"label\">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>\n<span class=\"time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<button\n  class=\"reset\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n></button>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-asm-session-timer{display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-session-timer .label{margin:0 6px}@media (max-width:575px){cx-asm-session-timer .label{display:none}}cx-asm-session-timer .time{font-weight:600}cx-asm-session-timer .reset{margin:0 15px;cursor:pointer;width:16px;height:16px;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M14.9,7.5l-1,0.2c0.2,0.9,0.1,1.7-0.1,2.5c-0.3,1-0.8,2-1.5,2.7c-1.1,1.1-2.7,1.8-4.2,1.8 c-0.8,0-1.5-0.1-2.3-0.4c-1.5-0.6-2.7-1.8-3.3-3.3C2.1,10.2,2,9.5,2,8.7c0-1.6,0.7-3.1,1.8-4.3c0.7-0.8,1.7-1.3,2.7-1.5 c1-0.3,2-0.2,3,0l0,0v-1c-1-0.2-2.1-0.2-3.1,0C4.2,2.4,2.4,4,1.5,6.1C1.2,6.9,1,7.8,1,8.7c0,0.9,0.2,1.8,0.5,2.6 c0.4,0.9,0.9,1.7,1.5,2.3c0.7,0.7,1.4,1.2,2.3,1.5c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c2.1-0.9,3.7-2.7,4.2-5 C15,9.3,15,8.4,14.9,7.5z'/%3E%3Cpolygon fill='%23d1e3ff' points='11.5,2.8 9.2,4.5 9.7,0.5 '/%3E%3C/svg%3E%0A\") center center no-repeat;border:transparent}"]
    })
], AsmSessionTimerComponent);

let FormatTimerPipe = class FormatTimerPipe {
    transform(totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        let zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        const zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return `${zeroPaddedMinutes}:${zeroPaddedSeconds}`;
    }
};
FormatTimerPipe = __decorate([
    Pipe({
        name: 'formatTimer',
    })
], FormatTimerPipe);

let AsmToggleUiComponent = class AsmToggleUiComponent {
    constructor(asmService) {
        this.asmService = asmService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.asmService.getAsmUiState().subscribe((uiState) => {
            this.isCollapsed = uiState.collapsed;
        }));
    }
    toggleUi() {
        this.asmService.updateAsmUiState({ collapsed: !this.isCollapsed });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AsmToggleUiComponent.ctorParameters = () => [
    { type: AsmService }
];
AsmToggleUiComponent = __decorate([
    Component({
        selector: 'cx-asm-toggle-ui',
        template: "<a class=\"toggleUi\" (click)=\"toggleUi()\">\n  <span [ngClass]=\"!isCollapsed ? 'collapseIcon' : 'expandIcon'\"></span>\n  <span *ngIf=\"!isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.collapse' | cxTranslate }}\n  </span>\n  <span *ngIf=\"isCollapsed\" class=\"label\">\n    {{ 'asm.toggleUi.expand' | cxTranslate }}\n  </span>\n</a>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-asm-toggle-ui{cursor:pointer;display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-toggle-ui .toggleUi{display:inherit;align-items:inherit}cx-asm-toggle-ui .toggleUi .label{margin-left:5px}@media (max-width:575px){cx-asm-toggle-ui .toggleUi .label{display:none}}cx-asm-toggle-ui .toggleUi .collapseIcon,cx-asm-toggle-ui .toggleUi .expandIcon{width:16px;height:16px}cx-asm-toggle-ui .toggleUi .collapseIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-up' class='svg-inline--fa fa-chevron-circle-up fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z'%3E%3C/path%3E%3C/svg%3E\") center center no-repeat}cx-asm-toggle-ui .toggleUi .expandIcon{background:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-circle-down' class='svg-inline--fa fa-chevron-circle-down fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23d1e3ff' d='M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z'%3E%3C/path%3E%3C/svg%3E\") center center no-repeat}"]
    })
], AsmToggleUiComponent);

let CSAgentLoginFormComponent = class CSAgentLoginFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    ngOnInit() {
        this.csAgentLoginForm = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    onSubmit() {
        if (this.csAgentLoginForm.valid) {
            this.submitEvent.emit({
                userId: this.csAgentLoginForm.get('userId').value,
                password: this.csAgentLoginForm.get('password').value,
            });
        }
        else {
            this.csAgentLoginForm.markAllAsTouched();
        }
    }
};
CSAgentLoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Input()
], CSAgentLoginFormComponent.prototype, "csAgentTokenLoading", void 0);
__decorate([
    Output()
], CSAgentLoginFormComponent.prototype, "submitEvent", void 0);
CSAgentLoginFormComponent = __decorate([
    Component({
        selector: 'cx-csagent-login-form',
        template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"csAgentLoginForm\"\n  *ngIf=\"!csAgentTokenLoading\"\n>\n  <label>\n    <input\n      type=\"text\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <cx-form-errors [control]=\"csAgentLoginForm.get('userId')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <cx-form-errors\n      [control]=\"csAgentLoginForm.get('password')\"\n    ></cx-form-errors>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}}cx-csagent-login-form form label{margin:0 0 15px;min-width:auto}@media (min-width:575px){cx-csagent-login-form form label{margin:0 15px 0 0;min-width:15rem}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}"]
    })
], CSAgentLoginFormComponent);

let CustomerEmulationComponent = class CustomerEmulationComponent {
    constructor(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.userService.get().subscribe((user) => (this.customer = user)));
        this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
    }
    logoutCustomer() {
        this.asmComponentService.logoutCustomer();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
CustomerEmulationComponent.ctorParameters = () => [
    { type: AsmComponentService },
    { type: UserService }
];
CustomerEmulationComponent = __decorate([
    Component({
        selector: 'cx-customer-emulation',
        template: "<ng-container\n  *ngIf=\"\n    isCustomerEmulationSessionInProgress$ | async;\n    else realCustomerSession\n  \"\n>\n  <input\n    formcontrolname=\"customer\"\n    type=\"text\"\n    disabled=\"true\"\n    placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n  />\n  <button (click)=\"logoutCustomer()\">\n    {{ 'asm.endSession' | cxTranslate }}\n  </button>\n</ng-container>\n\n<ng-template #realCustomerSession>\n  <div class=\"asm-alert\" role=\"alert\">\n    {{ 'asm.standardSessionInProgress' | cxTranslate }}\n  </div>\n</ng-template>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-customer-emulation{display:flex}@media (max-width:575px){cx-customer-emulation{flex-direction:column}cx-customer-emulation>*{margin-bottom:12px}}cx-customer-emulation button{padding-left:35px;color:#b00;border-color:#b00;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23bb0000' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat}@media (min-width:575px){cx-customer-emulation input{flex:1}cx-customer-emulation button{-webkit-margin-start:8px;margin-inline-start:8px}}cx-customer-emulation button:hover{background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat #b00;color:#fff;fill:#fff}.asm-alert{padding:9px 12px;border-radius:4px;border:1px solid #89919a;background-color:#f4f4f4;color:#32363a;text-align:center;flex:1}"]
    })
], CustomerEmulationComponent);

let CustomerSelectionComponent = class CustomerSelectionComponent {
    constructor(fb, asmService, config) {
        this.fb = fb;
        this.asmService = asmService;
        this.config = config;
        this.subscription = new Subscription();
        this.submitEvent = new EventEmitter();
    }
    ngOnInit() {
        this.customerSelectionForm = this.fb.group({
            searchTerm: ['', Validators.required],
        });
        this.asmService.customerSearchReset();
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.searchResults = this.asmService.getCustomerSearchResults();
        this.subscription.add(this.customerSelectionForm.controls.searchTerm.valueChanges
            .pipe(debounceTime(300))
            .subscribe((searchTermValue) => {
            this.handleSearchTerm(searchTermValue);
        }));
    }
    handleSearchTerm(searchTermValue) {
        if (Boolean(this.selectedCustomer) &&
            searchTermValue !== this.selectedCustomer.name) {
            this.selectedCustomer = undefined;
        }
        if (Boolean(this.selectedCustomer)) {
            return;
        }
        this.asmService.customerSearchReset();
        if (searchTermValue.trim().length >= 3) {
            this.asmService.customerSearch({
                query: searchTermValue,
                pageSize: this.config.asm.customerSearch.maxResults,
            });
        }
    }
    selectCustomerFromList(customer) {
        this.selectedCustomer = customer;
        this.customerSelectionForm.controls.searchTerm.setValue(this.selectedCustomer.name);
        this.asmService.customerSearchReset();
    }
    onSubmit() {
        if (this.customerSelectionForm.valid && Boolean(this.selectedCustomer)) {
            this.submitEvent.emit({ customerId: this.selectedCustomer.customerId });
        }
        else {
            this.customerSelectionForm.markAllAsTouched();
        }
    }
    onDocumentClick(event) {
        if (Boolean(this.resultList)) {
            if (this.resultList.nativeElement.contains(event.target) ||
                this.searchTerm.nativeElement.contains(event.target)) {
                return;
            }
            else {
                this.asmService.customerSearchReset();
            }
        }
    }
    closeResults() {
        this.asmService.customerSearchReset();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.asmService.customerSearchReset();
    }
};
CustomerSelectionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AsmService },
    { type: AsmConfig }
];
__decorate([
    Output()
], CustomerSelectionComponent.prototype, "submitEvent", void 0);
__decorate([
    ViewChild('resultList')
], CustomerSelectionComponent.prototype, "resultList", void 0);
__decorate([
    ViewChild('searchTerm')
], CustomerSelectionComponent.prototype, "searchTerm", void 0);
CustomerSelectionComponent = __decorate([
    Component({
        selector: 'cx-customer-selection',
        template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"customerSelectionForm\">\n  <label>\n    <input\n      #searchTerm\n      type=\"text\"\n      formControlName=\"searchTerm\"\n      placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n    />\n    <cx-form-errors\n      [control]=\"customerSelectionForm.get('searchTerm')\"\n    ></cx-form-errors>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <button\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n  >\n    <span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span>\n  </button>\n  <button\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      !!results.entries &&\n      results.entries.length <= 0\n    \"\n  >\n    {{ 'asm.customerSearch.noMatch' | cxTranslate }}\n  </button>\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        // tslint:disable-next-line:no-host-metadata-property
        host: {
            '(document:click)': 'onDocumentClick($event)',
        },
        styles: ["cx-customer-selection{position:relative}cx-customer-selection form{display:flex;width:100%}@media (max-width:575px){cx-customer-selection form{flex-direction:column}}cx-customer-selection form label{margin:0 0 15px;min-width:auto}cx-customer-selection form label input{width:100%}cx-customer-selection form button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAKtmlDQ1BEaXNwbGF5AABIx62Wd1BT+RbHf/fe9EILICAl9N6lSwk9dOkgKiEJJJQYEoKIDZHFFVwLKiKgrugiRcFGkbUgFiwsgg2sC7IoqOtiwYbKu8Aj7L6Z98ebeWfm3N9nzpzf+Z1z7/3NfAGgApZQmA7LAZAhyBKF+3nSY+Pi6fghAAEYEIE+cGaxxUJGWFgQQG12/ad9uIdmo3bbfKoW+N9MnsMVswGAwlBO4ojZGSifQv0ZWyjKAgCpROO6K7KEU9yOsqIIbRDlO1OcMsMjU5w0w1+ncyLDvQDAoFMRKCyWKAUAijoap2ezU9A6lIUoWwk4fAHKU/26sXksDspHUDbLyFg+xf0oGyX9rU7KP2omSWuyWClSnpll2gjefLEwnbUS/L8tI10ye4YB6hSeyD8cXWXQd9aftjxQyoKkkNBZ5nOm86eZJ/GPmmW22Ct+ljks70Dp3vSQoFlO5vsypXWymJGzzBX7RMyyaHm49KxkkRdjllmiuXMlaVHSOI/LlNbP5UXGzHI2PzpklsVpEYFzOV7SuEgSLu2fK/DznDvXVzp7hvhv8/KZ0r1ZvEh/6eysuf65AsZcTXGstDcO19tnLidKmi/M8pSeJUwPk+Zz0/2kcXF2hHRvFvpDzu0Nk77DVFZA2CwDfxAG6MAGWIEcwAcgi5uTNTWE13LhShE/hZdFZ6C3i0tnCtgWZnQbK2snAKbu6syv8K5/+g5CyoS5WGY+AE7ofUCC52JLFwNwvAEAhdC5mMFn9Mqg3+DsdrZElD0Tw0w9sIAEZIEiUAWaQBcYAXO0O3vgAjyADwgAoSASxIGlgA14IAOIwAqwGqwHhaAYbAO7QDnYDw6CGnAUnAAt4Ay4AK6AG6AH3AUPwQAYBi/BGPgAJiAIwkNUiAapQlqQPmQK2UCOkBvkAwVB4VAclAilQAJIAq2GNkDFUAlUDh2AaqHj0GnoAnQN6oXuQ4PQKPQW+gIjMAVWhDVgA9gSdoQZcCAcCS+BU+BMOBcugLfAZXAVfARuhi/AN+C78AD8Eh5HAEJGlBFtxBxxRLyQUCQeSUZEyFqkCClFqpAGpA3pRG4jA8gr5DMGh6Fh6BhzjAvGHxOFYWMyMWsxmzHlmBpMM+YS5jZmEDOG+Y6lYtWxplhnLBMbi03BrsAWYkux1dgm7GXsXeww9gMOh1PGGeIccP64OFwqbhVuM24vrhHXjuvFDeHG8Xi8Kt4U74oPxbPwWfhC/B78Efx5/C38MP4TgUzQItgQfAnxBAEhn1BKqCOcI9wiPCdMEOWI+kRnYiiRQ1xJ3Eo8RGwj3iQOEydI8iRDkispkpRKWk8qIzWQLpMekd6RyWQdshN5EZlPziOXkY+Rr5IHyZ8pChQTihclgSKhbKEcprRT7lPeUalUA6oHNZ6aRd1CraVepD6hfpKhyVjIMGU4MutkKmSaZW7JvJYlyurLMmSXyubKlsqelL0p+0qOKGcg5yXHklsrVyF3Wq5PblyeJm8tHyqfIb9Zvk7+mvyIAl7BQMFHgaNQoHBQ4aLCEA2h6dK8aGzaBtoh2mXasCJO0VCRqZiqWKx4VLFbcUxJQWmBUrRSjlKF0lmlAWVE2UCZqZyuvFX5hPI95S/zNOYx5nHnbZrXMO/WvI8q81U8VLgqRSqNKndVvqjSVX1U01S3q7aoPlbDqJmoLVJbobZP7bLaq/mK813ms+cXzT8x/4E6rG6iHq6+Sv2gepf6uIamhp+GUGOPxkWNV5rKmh6aqZo7Nc9pjmrRtNy0+Fo7tc5rvaAr0Rn0dHoZ/RJ9TFtd219bon1Au1t7QsdQJ0onX6dR57EuSddRN1l3p26H7piell6w3mq9er0H+kR9R32e/m79Tv2PBoYGMQYbDVoMRgxVDJmGuYb1ho+MqEbuRplGVUZ3jHHGjsZpxnuNe0xgEzsTnkmFyU1T2NTelG+617TXDGvmZCYwqzLrM6eYM8yzzevNBy2ULYIs8i1aLF5b6lnGW2637LT8bmVnlW51yOqhtYJ1gHW+dZv1WxsTG7ZNhc0dW6qtr+0621bbNwtMF3AX7FvQb0ezC7bbaNdh983ewV5k32A/6qDnkOhQ6dDnqOgY5rjZ8aoT1snTaZ3TGafPzvbOWc4nnP9yMXdJc6lzGVlouJC78NDCIVcdV5brAdcBN7pbotvPbgPu2u4s9yr3px66HhyPao/nDGNGKuMI47WnlafIs8nzo5ez1xqvdm/E28+7yLvbR8Enyqfc54mvjm+Kb73vmJ+d3yq/dn+sf6D/dv8+pgaTzaxljgU4BKwJuBRICYwILA98GmQSJApqC4aDA4J3BD8K0Q8RhLSEglBm6I7Qx2GGYZlhvy7CLQpbVLHoWbh1+OrwzghaxLKIuogPkZ6RWyMfRhlFSaI6omWjE6Jroz/GeMeUxAzEWsauib0RpxbHj2uNx8dHx1fHjy/2Wbxr8XCCXUJhwr0lhktyllxbqrY0fenZZbLLWMtOJmITYxLrEr+yQllVrPEkZlJl0hjbi72b/ZLjwdnJGeW6cku4z5Ndk0uSR1JcU3akjPLceaW8V3wvfjn/Tap/6v7Uj2mhaYfTJtNj0hszCBmJGacFCoI0waXlmstzlvcKTYWFwoFM58xdmWOiQFG1GBIvEbdmKaKiqEtiJPlBMpjtll2R/WlF9IqTOfI5gpyulSYrN618nuub+8sqzCr2qo7V2qvXrx5cw1hzYC20NmltxzrddQXrhvP88mrWk9anrf8t3yq/JP/9hpgNbQUaBXkFQz/4/VBfKFMoKuzb6LJx/4+YH/k/dm+y3bRn0/ciTtH1Yqvi0uKvm9mbr/9k/VPZT5Nbkrd0b7Xfum8bbptg273t7ttrSuRLckuGdgTvaN5J31m08/2uZbuulS4o3b+btFuye6AsqKx1j96ebXu+lvPK71Z4VjRWqlduqvy4l7P31j6PfQ37NfYX7//yM//n/gN+B5qrDKpKD+IOZh98dij6UOcvjr/UVqtVF1d/Oyw4PFATXnOp1qG2tk69bms9XC+pHz2ScKTnqPfR1gbzhgONyo3Fx8AxybEXxxOP3zsReKLjpOPJhlP6pyqbaE1FzVDzyuaxFl7LQGtca+/pgNMdbS5tTb9a/Hr4jPaZirNKZ7eeI50rODd5Pvf8eLuw/dWFlAtDHcs6Hl6MvXjn0qJL3ZcDL1+94nvlYiej8/xV16tnrjlfO33d8XrLDfsbzV12XU2/2f3W1G3f3XzT4WZrj1NPW+/C3nO33G9duO19+8od5p0bd0Pu9t6Lutffl9A30M/pH7mffv/Ng+wHEw/zHmEfFT2We1z6RP1J1e/GvzcO2A+cHfQe7Hoa8fThEHvo5R/iP74OFzyjPit9rvW8dsRm5Myo72jPi8Uvhl8KX068KvxT/s/K10avT/3l8VfXWOzY8BvRm8m3m9+pvjv8fsH7jvGw8ScfMj5MfCz6pPqp5rPj584vMV+eT6z4iv9a9s34W9v3wO+PJjMmJ4UsEWtaCiCow8nJALw9DAA1DgBaDwCkxTNaetqgGf0/TeC/8YzenjZ7AA55ABCJ6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{border:1px solid #89919a;position:absolute;line-height:1.5rem;left:2rem;top:4rem;z-index:11;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;width:100%;max-width:50vw}@media (max-width:1200px){cx-customer-selection .asm-results{max-width:calc(100% - 4rem)}}cx-customer-selection .asm-results button{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;border:0;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;background-color:transparent;color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px;width:100%;align-items:flex-start;justify-content:flex-start}@media (min-width:767px){cx-customer-selection .asm-results button{flex-direction:row}}cx-customer-selection .asm-results button:hover{color:#32363a;background-color:#d3d6db}cx-customer-selection .asm-results button span{margin:0 15px 0 0;word-break:break-all;white-space:normal;text-align:left}@media (min-width:575px){cx-customer-selection form label{margin:0 15px 0 0;min-width:20rem}cx-customer-selection .asm-results button span:last-of-type{margin:0}}"]
    })
], CustomerSelectionComponent);

const defaultAsmLayoutConfig = {
    launch: {
        ASM: {
            outlet: 'cx-storefront',
            component: AsmMainUiComponent,
        },
    },
};

let AsmModule = class AsmModule {
};
AsmModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            I18nModule,
            AsmModule$1.forRoot(),
            AsmLoaderModule,
            FormErrorsModule,
        ],
        declarations: [
            AsmMainUiComponent,
            CSAgentLoginFormComponent,
            CustomerSelectionComponent,
            AsmSessionTimerComponent,
            FormatTimerPipe,
            CustomerEmulationComponent,
            AsmToggleUiComponent,
        ],
        providers: [provideConfig(defaultAsmLayoutConfig)],
        entryComponents: [AsmMainUiComponent],
    })
], AsmModule);

let CurrentProductService = class CurrentProductService {
    constructor(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
        this.DEFAULT_PRODUCT_SCOPE = ProductScope.DETAILS;
    }
    /**
     * Will emit current product or null, if there is no current product (i.e. we are not on PDP)
     *
     * @param scopes
     */
    getProduct(scopes) {
        return this.routingService.getRouterState().pipe(map((state) => state.state.params['productCode']), switchMap((productCode) => {
            return productCode
                ? this.productService.get(productCode, scopes || this.DEFAULT_PRODUCT_SCOPE)
                : of(null);
        }), filter((x) => x !== undefined), distinctUntilChanged());
    }
};
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService }
];
CurrentProductService.ɵprov = ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(ɵɵinject(RoutingService), ɵɵinject(ProductService)); }, token: CurrentProductService, providedIn: "root" });
CurrentProductService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CurrentProductService);

let AddedToCartDialogComponent = class AddedToCartDialogComponent {
    constructor(modalService, cartService, promotionService) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.iconTypes = ICON_TYPE;
        this.promotionLocation = PromotionLocation.ActiveCart;
        this.quantity = 0;
        this.modalIsOpen = false;
        this.form = new FormGroup({});
    }
    /**
     * Returns an observable formControl with the quantity of the cartEntry,
     * but also updates the entry in case of a changed value.
     * The quantity can be set to zero in order to remove the entry.
     */
    getQuantityControl() {
        if (!this.quantityControl$) {
            this.quantityControl$ = this.entry$.pipe(filter((e) => !!e), map((entry) => this.getFormControl(entry)), switchMap(() => this.form.valueChanges.pipe(
            // tslint:disable-next-line:deprecation
            startWith(null), tap((valueChange) => {
                if (valueChange) {
                    this.cartService.updateEntry(valueChange.entryNumber, valueChange.quantity);
                    if (valueChange.quantity === 0) {
                        this.dismissModal('Removed');
                    }
                }
                else {
                    this.form.markAsPristine();
                }
            }))), map(() => this.form.get('quantity')));
        }
        return this.quantityControl$;
    }
    ngOnInit() {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    getFormControl(entry) {
        if (!this.form.get('quantity')) {
            const quantity = new FormControl(entry.quantity, { updateOn: 'blur' });
            this.form.addControl('quantity', quantity);
            const entryNumber = new FormControl(entry.entryNumber);
            this.form.addControl('entryNumber', entryNumber);
        }
        return this.form.get('quantity');
    }
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
};
AddedToCartDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ActiveCartService },
    { type: PromotionService }
];
__decorate([
    ViewChild('dialog', { read: ElementRef })
], AddedToCartDialogComponent.prototype, "dialog", void 0);
AddedToCartDialogComponent = __decorate([
    Component({
        selector: 'cx-added-to-cart-dialog',
        template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart'\n          ) | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [quantityControl]=\"getQuantityControl() | async\"\n            [promotionLocation]=\"promotionLocation\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n\n            <div>{{ cart.subTotal?.formattedValue }}</div>\n          </div>\n\n          <!-- Promotions -->\n          <div\n            class=\"cx-dialog-promotions\"\n            *ngIf=\"orderPromotions$ | async as orderPromotions\"\n          >\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </div>\n\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              autofocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
    })
], AddedToCartDialogComponent);

let AddToCartComponent = class AddToCartComponent {
    constructor(modalService, currentProductService, cd, activeCartService) {
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.activeCartService = activeCartService;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
        this.addToCartForm = new FormGroup({
            quantity: new FormControl(1),
        });
    }
    ngOnInit() {
        if (this.product) {
            this.productCode = this.product.code;
            this.cartEntry$ = this.activeCartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.activeCartService.getEntry(this.productCode);
            // force hasStock and quantity for the time being, as we do not have more info:
            this.quantity = 1;
            this.hasStock = true;
            this.cd.markForCheck();
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe((product) => {
                this.productCode = product.code;
                this.setStockInfo(product);
                this.cartEntry$ = this.activeCartService.getEntry(this.productCode);
                this.cd.markForCheck();
            });
        }
    }
    setStockInfo(product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    }
    updateCount(value) {
        this.quantity = value;
    }
    addToCart() {
        const quantity = this.addToCartForm.get('quantity').value;
        if (!this.productCode || quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.activeCartService
            .getEntry(this.productCode)
            .subscribe((entry) => {
            if (entry) {
                this.increment = true;
            }
            this.openModal();
            this.activeCartService.addEntry(this.productCode, quantity);
            this.increment = false;
        })
            .unsubscribe();
    }
    openModal() {
        let modalInstance;
        this.modalRef = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.entry$ = this.cartEntry$;
        modalInstance.cart$ = this.activeCartService.getActive();
        modalInstance.loaded$ = this.activeCartService.isStable();
        modalInstance.quantity = this.quantity;
        modalInstance.increment = this.increment;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
AddToCartComponent.ctorParameters = () => [
    { type: ModalService },
    { type: CurrentProductService },
    { type: ChangeDetectorRef },
    { type: ActiveCartService }
];
__decorate([
    Input()
], AddToCartComponent.prototype, "productCode", void 0);
__decorate([
    Input()
], AddToCartComponent.prototype, "showQuantity", void 0);
__decorate([
    Input()
], AddToCartComponent.prototype, "product", void 0);
AddToCartComponent = __decorate([
    Component({
        selector: 'cx-add-to-cart',
        template: "<form *ngIf=\"productCode\" [formGroup]=\"addToCartForm\" (submit)=\"addToCart()\">\n  <div class=\"quantity\" *ngIf=\"showQuantity\">\n    <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      *ngIf=\"hasStock\"\n      [max]=\"maxQuantity\"\n      [control]=\"addToCartForm.get('quantity')\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('addToCart.inStock' | cxTranslate)\n        : ('addToCart.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n\n  <button\n    *ngIf=\"hasStock\"\n    class=\"btn btn-primary btn-block\"\n    type=\"submit\"\n    [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  >\n    {{ 'addToCart.addToCart' | cxTranslate }}\n  </button>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AddToCartComponent);

let PromotionsComponent = class PromotionsComponent {
    constructor() { }
};
__decorate([
    Input()
], PromotionsComponent.prototype, "promotions", void 0);
PromotionsComponent = __decorate([
    Component({
        selector: 'cx-promotions',
        template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <ul *ngFor=\"let promotion of promotions\">\n    <li>{{ promotion.description }}</li>\n  </ul>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PromotionsComponent);

let PromotionsModule = class PromotionsModule {
};
PromotionsModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PromotionsComponent],
        exports: [PromotionsComponent],
    })
], PromotionsModule);

let AppliedCouponsComponent = class AppliedCouponsComponent {
    constructor(cartVoucherService) {
        this.cartVoucherService = cartVoucherService;
        this.cartIsLoading = false;
        this.isReadOnly = false;
        this.iconTypes = ICON_TYPE;
    }
    get sortedVouchers() {
        this.vouchers = this.vouchers || [];
        return this.vouchers.slice().sort((a, b) => {
            return a.code.localeCompare(b.code);
        });
    }
    removeVoucher(voucherId) {
        this.cartVoucherService.removeVoucher(voucherId);
    }
};
AppliedCouponsComponent.ctorParameters = () => [
    { type: CartVoucherService }
];
__decorate([
    Input()
], AppliedCouponsComponent.prototype, "vouchers", void 0);
__decorate([
    Input()
], AppliedCouponsComponent.prototype, "cartIsLoading", void 0);
__decorate([
    Input()
], AppliedCouponsComponent.prototype, "isReadOnly", void 0);
AppliedCouponsComponent = __decorate([
    Component({
        selector: 'cx-applied-coupons',
        template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\n  <div *ngIf=\"sortedVouchers.length > 0\">\n    <div class=\"cx-applied-coupon-title\">\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\n    </div>\n  </div>\n  <div\n    *ngFor=\"let voucher of sortedVouchers\"\n    class=\"coupon-summary cx-coupon-card textonly\"\n    role=\"filter\"\n  >\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\n  </div>\n</div>\n\n<ng-template #editableCoupons>\n  <div class=\"row\">\n    <div\n      *ngFor=\"let voucher of sortedVouchers\"\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\n      role=\"filter\"\n    >\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          (click)=\"removeVoucher(voucher.voucherCode)\"\n          [disabled]=\"cartIsLoading\"\n          [class.disabled]=\"cartIsLoading\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AppliedCouponsComponent);

let CartCouponComponent = class CartCouponComponent {
    constructor(cartVoucherService, formBuilder, customerCouponService, activeCartService) {
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.activeCartService = activeCartService;
        this.MAX_CUSTOMER_COUPON_PAGE = 100;
        this.ignoreCloseEvent = false;
        this.subscription = new Subscription();
        this.couponBoxIsActive = false;
    }
    ngOnInit() {
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        this.cart$ = combineLatest([
            this.activeCartService.getActive(),
            this.activeCartService.getActiveCartId(),
            this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
        ]).pipe(tap(([cart, activeCardId, customerCoupons]) => {
            this.cartId = activeCardId;
            this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
        }), map(([cart]) => cart));
        this.cartIsLoading$ = this.activeCartService
            .isStable()
            .pipe(map((loaded) => !loaded));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.couponForm = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe((success) => {
            this.onSuccess(success);
        }));
        // TODO(#7241): Replace process subscriptions with event listeners and drop process for ADD_VOUCHER
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe((error) => {
            this.onError(error);
        }));
    }
    onError(error) {
        if (error) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    onSuccess(success) {
        if (success) {
            this.couponForm.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    getApplicableCustomerCoupons(cart, coupons) {
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach((appliedVoucher) => {
                this.applicableCoupons = this.applicableCoupons.filter((coupon) => coupon.couponId !== appliedVoucher.code);
            });
        }
    }
    applyVoucher() {
        if (this.couponForm.valid) {
            this.cartVoucherService.addVoucher(this.couponForm.value.couponCode, this.cartId);
        }
        else {
            this.couponForm.markAllAsTouched();
        }
    }
    applyCustomerCoupon(couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    }
    close(event) {
        if (!this.ignoreCloseEvent) {
            this.couponBoxIsActive = false;
            if (event && event.target) {
                event.target.blur();
            }
        }
        this.ignoreCloseEvent = false;
    }
    disableClose() {
        this.ignoreCloseEvent = true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    }
};
CartCouponComponent.ctorParameters = () => [
    { type: CartVoucherService },
    { type: FormBuilder },
    { type: CustomerCouponService },
    { type: ActiveCartService }
];
CartCouponComponent = __decorate([
    Component({
        selector: 'cx-cart-coupon',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group\">\n    <form (ngSubmit)=\"applyVoucher()\" [formGroup]=\"couponForm\">\n      <div class=\"cx-cart-coupon-container\">\n        <input\n          type=\"text\"\n          class=\"form-control input-coupon-code\"\n          formControlName=\"couponCode\"\n          placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n        />\n        <button\n          class=\"btn btn-block btn-action apply-coupon-button\"\n          type=\"submit\"\n          [disabled]=\"cartIsLoading$ | async\"\n          [class.disabled]=\"cartIsLoading$ | async\"\n        >\n          {{ 'voucher.apply' | cxTranslate }}\n        </button>\n        <cx-form-errors\n          [control]=\"couponForm.get('couponCode')\"\n        ></cx-form-errors>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n\n  <ng-container *ngIf=\"applicableCoupons && applicableCoupons.length > 0\">\n    <div class=\"cx-available-coupon\">\n      <div class=\"title cx-cart-coupon-title\">\n        {{ 'voucher.availableCoupons' | cxTranslate }}\n      </div>\n      <div class=\"message\">\n        {{ 'voucher.availableCouponsLabel' | cxTranslate }}\n      </div>\n      <div class=\"scroll\">\n        <div class=\"coupons card\" *ngFor=\"let coupon of applicableCoupons\">\n          <button\n            (click)=\"applyCustomerCoupon(coupon.couponId)\"\n            class=\"coupon-id link\"\n            [disabled]=\"cartIsLoading$ | async\"\n            [class.disabled]=\"cartIsLoading$ | async\"\n          >\n            {{ coupon.couponId }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
    })
], CartCouponComponent);

let CartCouponModule = class CartCouponModule {
};
CartCouponModule = __decorate([
    NgModule({
        declarations: [CartCouponComponent, AppliedCouponsComponent],
        exports: [CartCouponComponent, AppliedCouponsComponent],
        imports: [
            CommonModule,
            NgSelectModule,
            FormsModule,
            ReactiveFormsModule,
            I18nModule,
            IconModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CartApplyCouponComponent: {
                        component: CartCouponComponent,
                    },
                },
            }),
        ],
        entryComponents: [CartCouponComponent],
    })
], CartCouponModule);

let CartItemListComponent = class CartItemListComponent {
    constructor(activeCartService, selectiveCartService) {
        this.activeCartService = activeCartService;
        this.selectiveCartService = selectiveCartService;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    set items(items) {
        this.resolveItems(items);
        this.createForm();
    }
    get items() {
        return this._items;
    }
    set setLoading(value) {
        if (!this.readonly) {
            // Whenver the cart is loading, we disable the complete form
            // to avoid any user interaction with the cart.
            value
                ? this.form.disable({ emitEvent: false })
                : this.form.enable({ emitEvent: false });
        }
    }
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    resolveItems(items) {
        if (items.every((item) => item.hasOwnProperty('orderEntry'))) {
            this._items = items.map((consignmentEntry) => {
                const entry = Object.assign({}, consignmentEntry.orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            });
        }
        else {
            this._items = items;
        }
    }
    createForm() {
        this.form = new FormGroup({});
        this._items.forEach((item) => {
            const { code } = item.product;
            const group = new FormGroup({
                entryNumber: new FormControl(item.entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || this.readonly) {
                group.disable();
            }
            this.form.addControl(code, group);
        });
    }
    removeEntry(item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.activeCartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    }
    getControl(item) {
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map((value) => {
            if (value && this.selectiveCartService && this.options.isSaveForLater) {
                this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                this.activeCartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(() => this.form.get(item.product.code)));
    }
};
CartItemListComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
__decorate([
    Input()
], CartItemListComponent.prototype, "readonly", void 0);
__decorate([
    Input()
], CartItemListComponent.prototype, "hasHeader", void 0);
__decorate([
    Input()
], CartItemListComponent.prototype, "options", void 0);
__decorate([
    Input('items')
], CartItemListComponent.prototype, "items", null);
__decorate([
    Input()
], CartItemListComponent.prototype, "promotionLocation", void 0);
__decorate([
    Input('cartIsLoading')
], CartItemListComponent.prototype, "setLoading", null);
CartItemListComponent = __decorate([
    Component({
        selector: 'cx-cart-item-list',
        template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container *ngIf=\"options.isSaveForLater; else totalHeader\">\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartItemListComponent);

let CartItemComponent = class CartItemComponent {
    constructor(promotionService) {
        this.promotionService = promotionService;
        this.compact = false;
        this.readonly = false;
        this.view = new EventEmitter();
        this.promotionLocation = PromotionLocation.ActiveCart;
        // TODO: evaluate whether this is generic enough
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
    }
    ngOnInit() {
        this.appliedProductPromotions$ = this.promotionService.getProductPromotionForEntry(this.item, this.promotionLocation);
    }
    isProductOutOfStock(product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    }
    removeItem() {
        this.quantityControl.setValue(0);
        this.quantityControl.markAsDirty();
    }
    viewItem() {
        this.view.emit();
    }
};
CartItemComponent.ctorParameters = () => [
    { type: PromotionService }
];
__decorate([
    Input()
], CartItemComponent.prototype, "compact", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "item", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "readonly", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "quantityControl", void 0);
__decorate([
    Output()
], CartItemComponent.prototype, "view", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "promotionLocation", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "options", void 0);
CartItemComponent = __decorate([
    Component({
        selector: 'cx-cart-item',
        template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n      tabindex=\"-1\"\n    >\n      <cx-media [container]=\"item.product.images?.PRIMARY\"></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row\">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"item.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of item.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"!item.updateable || readonly || options.isSaveForLater\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container *ngIf=\"options.isSaveForLater; else total\">\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n\n    <ng-container\n      *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n    >\n      <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link cx-action-link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
    })
], CartItemComponent);

let OrderSummaryComponent = class OrderSummaryComponent {
};
__decorate([
    Input()
], OrderSummaryComponent.prototype, "cart", void 0);
OrderSummaryComponent = __decorate([
    Component({
        selector: 'cx-order-summary',
        template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.subTotal?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{\n        (cart.deliveryCost?.formattedValue\n          ? 'orderCost.shipping'\n          : 'orderCost.estimatedShipping'\n        ) | cxTranslate\n      }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.net\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.totalDiscounts?.value > 0\">\n    {{ 'orderCost.discount' | cxTranslate }}\n    {{ cart.totalDiscounts?.formattedValue }}\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"!cart.net\">\n    {{ 'orderCost.grossTax' | cxTranslate }}\n    {{ cart.totalTax?.formattedValue }}.\n  </div>\n</div>\n\n<!--\n<cx-promotions\n  *ngIf=\"cart\"\n  [promotions]=\"cart.appliedOrderPromotions\"\n></cx-promotions>\n-->\n\n<ng-container *cxFeatureLevel=\"'1.3'\">\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [isReadOnly]=\"true\"\n  ></cx-applied-coupons>\n</ng-container>\n"
    })
], OrderSummaryComponent);

let CartSharedModule = class CartSharedModule {
};
CartSharedModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            CartCouponModule,
            ReactiveFormsModule,
            UrlModule,
            NgbModule,
            PromotionsModule,
            I18nModule,
            MediaModule,
            ItemCounterModule,
            FeaturesConfigModule,
        ],
        declarations: [
            CartItemComponent,
            OrderSummaryComponent,
            CartItemListComponent,
        ],
        exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
    })
], CartSharedModule);

let AddToCartModule = class AddToCartModule {
};
AddToCartModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            CartSharedModule,
            RouterModule,
            SpinnerModule,
            PromotionsModule,
            FeaturesConfigModule,
            UrlModule,
            IconModule,
            I18nModule,
            ItemCounterModule,
            KeyboardFocusModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductAddToCartComponent: {
                        component: AddToCartComponent,
                    },
                },
            }),
        ],
        declarations: [AddToCartComponent, AddedToCartDialogComponent],
        entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
        exports: [AddToCartComponent, AddedToCartDialogComponent],
    })
], AddToCartModule);

let CartDetailsComponent = class CartDetailsComponent {
    constructor(activeCartService, promotionService, selectiveCartService, authService, routingService) {
        this.activeCartService = activeCartService;
        this.promotionService = promotionService;
        this.selectiveCartService = selectiveCartService;
        this.authService = authService;
        this.routingService = routingService;
        this.loggedIn = false;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ngOnInit() {
        this.cart$ = this.activeCartService.getActive();
        this.promotions$ = this.promotionService.getOrderPromotionsFromCart();
        this.entries$ = this.activeCartService
            .getEntries()
            .pipe(filter((entries) => entries.length > 0));
        this.selectiveCartEnabled = this.selectiveCartService.isEnabled();
        this.cartLoaded$ = combineLatest([
            this.activeCartService.isStable(),
            this.selectiveCartEnabled
                ? this.selectiveCartService.getLoaded()
                : of(false),
            this.authService.isUserLoggedIn(),
        ]).pipe(tap(([, , loggedIn]) => (this.loggedIn = loggedIn)), map(([cartLoaded, sflLoaded, loggedIn]) => loggedIn && this.selectiveCartEnabled
            ? cartLoaded && sflLoaded
            : cartLoaded));
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    saveForLater(item) {
        if (this.loggedIn) {
            this.activeCartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    }
};
CartDetailsComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: PromotionService },
    { type: SelectiveCartService },
    { type: AuthService },
    { type: RoutingService }
];
CartDetailsComponent = __decorate([
    Component({
        selector: 'cx-cart-details',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [promotionLocation]=\"promotionLocation\"\n        [options]=\"{\n          isSaveForLater: false,\n          optionalBtn: saveForLaterBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div\n    *ngIf=\"selectiveCartEnabled\"\n    class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\"\n  >\n    <button\n      class=\"link cx-action-link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartDetailsComponent);

let CartDetailsModule = class CartDetailsModule {
};
CartDetailsModule = __decorate([
    NgModule({
        imports: [
            CartSharedModule,
            CommonModule,
            CartCouponModule,
            RouterModule,
            UrlModule,
            PromotionsModule,
            FeaturesConfigModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CartComponent: {
                        component: CartDetailsComponent,
                    },
                },
            }),
        ],
        declarations: [CartDetailsComponent],
        exports: [CartDetailsComponent],
        entryComponents: [CartDetailsComponent],
    })
], CartDetailsModule);

let CartNotEmptyGuard = class CartNotEmptyGuard {
    constructor(routingService, activeCartService) {
        this.routingService = routingService;
        this.activeCartService = activeCartService;
    }
    canActivate() {
        return combineLatest([
            this.activeCartService.getActive(),
            this.activeCartService.isStable(),
        ]).pipe(filter(([_, loaded]) => loaded), map(([cart]) => {
            if (this.isEmpty(cart)) {
                this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        }));
    }
    isEmpty(cart) {
        return cart && !cart.totalItems;
    }
};
CartNotEmptyGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: ActiveCartService }
];
CartNotEmptyGuard.ɵprov = ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(ɵɵinject(RoutingService), ɵɵinject(ActiveCartService)); }, token: CartNotEmptyGuard, providedIn: "root" });
CartNotEmptyGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartNotEmptyGuard);

let CartPageLayoutHandler = class CartPageLayoutHandler {
    constructor(activeCartService, selectiveCartService) {
        this.activeCartService = activeCartService;
        this.selectiveCartService = selectiveCartService;
    }
    handle(slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest([
                slots$,
                this.activeCartService.getActive(),
                this.selectiveCartService.isEnabled()
                    ? this.selectiveCartService.getCart()
                    : of({}),
                this.activeCartService.getLoading(),
            ]).pipe(map(([slots, cart, selectiveCart, loadingCart]) => {
                const exclude = (arr, args) => arr.filter((item) => args.every((arg) => arg !== item));
                return Object.keys(cart).length === 0 && loadingCart
                    ? exclude(slots, [
                        'TopContent',
                        'CenterRightContentSlot',
                        'EmptyCartMiddleContent',
                    ])
                    : cart.totalItems
                        ? exclude(slots, ['EmptyCartMiddleContent'])
                        : selectiveCart.totalItems
                            ? exclude(slots, [
                                'EmptyCartMiddleContent',
                                'CenterRightContentSlot',
                            ])
                            : exclude(slots, ['TopContent', 'CenterRightContentSlot']);
            }));
        }
        return slots$;
    }
};
CartPageLayoutHandler.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
CartPageLayoutHandler.ɵprov = ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(ɵɵinject(ActiveCartService), ɵɵinject(SelectiveCartService)); }, token: CartPageLayoutHandler, providedIn: "root" });
CartPageLayoutHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartPageLayoutHandler);

let CartTotalsComponent = class CartTotalsComponent {
    constructor(activeCartService) {
        this.activeCartService = activeCartService;
    }
    ngOnInit() {
        this.cart$ = this.activeCartService.getActive();
        this.entries$ = this.activeCartService
            .getEntries()
            .pipe(filter((entries) => entries.length > 0));
    }
};
CartTotalsComponent.ctorParameters = () => [
    { type: ActiveCartService }
];
CartTotalsComponent = __decorate([
    Component({
        selector: 'cx-cart-totals',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n    <button\n      [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n      *ngIf=\"entries.length\"\n      class=\"btn btn-primary btn-block\"\n      type=\"button\"\n    >\n      {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartTotalsComponent);

let CartTotalsModule = class CartTotalsModule {
};
CartTotalsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            CartSharedModule,
            I18nModule,
            CartCouponModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CartTotalsComponent: {
                        component: CartTotalsComponent,
                    },
                },
            }),
        ],
        declarations: [CartTotalsComponent],
        exports: [CartTotalsComponent],
        entryComponents: [CartTotalsComponent],
    })
], CartTotalsModule);

const PAGE_LAYOUT_HANDLER = new InjectionToken('PageLayoutHandler');

let MiniCartComponent = class MiniCartComponent {
    constructor(activeCartService) {
        this.activeCartService = activeCartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.activeCartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map((cart) => cart.deliveryItemsQuantity || 0));
        this.total$ = this.activeCartService.getActive().pipe(filter((cart) => !!cart.totalPrice), map((cart) => cart.totalPrice.formattedValue));
    }
};
MiniCartComponent.ctorParameters = () => [
    { type: ActiveCartService }
];
MiniCartComponent = __decorate([
    Component({
        selector: 'cx-mini-cart',
        template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">\n    {{ 'miniCart.total' | cxTranslate: { total: total$ | async } }}\n  </span>\n\n  <span class=\"count\">\n    {{ 'miniCart.count' | cxTranslate: { count: quantity$ | async } }}\n  </span>\n</a>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], MiniCartComponent);

let MiniCartModule = class MiniCartModule {
};
MiniCartModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    MiniCartComponent: {
                        component: MiniCartComponent,
                    },
                },
            }),
        ],
        declarations: [MiniCartComponent],
        exports: [MiniCartComponent],
        entryComponents: [MiniCartComponent],
    })
], MiniCartModule);

let AddToWishListComponent = class AddToWishListComponent {
    constructor(wishListService, currentProductService, authService) {
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter((product) => Boolean(product)), tap((product) => this.setStockInfo(product)));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter((wishlist) => Boolean(wishlist)), map((wishList) => wishList.entries));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    add(product) {
        this.wishListService.addEntry(product.code);
    }
    remove(entry) {
        this.wishListService.removeEntry(entry);
    }
    getProductInWishList(product, entries) {
        const item = entries.find((entry) => entry.product.code === product.code);
        return item;
    }
    setStockInfo(product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    }
};
AddToWishListComponent.ctorParameters = () => [
    { type: WishListService },
    { type: CurrentProductService },
    { type: AuthService }
];
AddToWishListComponent = __decorate([
    Component({
        selector: 'cx-add-to-wishlist',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove cx-action-link\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add cx-action-link\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link cx-action-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AddToWishListComponent);

let AddToWishListModule = class AddToWishListModule {
};
AddToWishListModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    AddToWishListComponent: {
                        component: AddToWishListComponent,
                    },
                },
            }),
        ],
        declarations: [AddToWishListComponent],
        entryComponents: [AddToWishListComponent],
        exports: [AddToWishListComponent],
    })
], AddToWishListModule);

let SaveForLaterComponent = class SaveForLaterComponent {
    constructor(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
    }
    ngOnInit() {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map((cart) => !(cart && cart.totalItems && cart.totalItems > 0)));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter((entries) => entries.length > 0));
        this.cartLoaded$ = combineLatest([
            this.cartService.isStable(),
            this.selectiveCartService.getLoaded(),
        ]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    }
    moveToCart(item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product.code, item.quantity);
    }
};
SaveForLaterComponent.ctorParameters = () => [
    { type: CmsService },
    { type: ActiveCartService },
    { type: SelectiveCartService }
];
SaveForLaterComponent = __decorate([
    Component({
        selector: 'cx-save-for-later',
        template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link cx-action-link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
    })
], SaveForLaterComponent);

let SaveForLaterModule = class SaveForLaterModule {
};
SaveForLaterModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule, CartSharedModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    SaveForLaterComponent: {
                        component: SaveForLaterComponent,
                    },
                },
            }),
        ],
        declarations: [SaveForLaterComponent],
        exports: [SaveForLaterComponent],
        entryComponents: [SaveForLaterComponent],
    })
], SaveForLaterModule);

let CartComponentModule = class CartComponentModule {
};
CartComponentModule = __decorate([
    NgModule({
        imports: [
            NgbModule,
            CartDetailsModule,
            CartTotalsModule,
            CartSharedModule,
            SaveForLaterModule,
        ],
        exports: [
            AddToWishListModule,
            CartDetailsModule,
            CartTotalsModule,
            CartSharedModule,
            AddToCartModule,
            MiniCartModule,
            CartModule,
            SaveForLaterModule,
        ],
        declarations: [],
        providers: [
            {
                provide: PAGE_LAYOUT_HANDLER,
                useExisting: CartPageLayoutHandler,
                multi: true,
            },
        ],
    })
], CartComponentModule);

var CheckoutStepType;
(function (CheckoutStepType) {
    CheckoutStepType["SHIPPING_ADDRESS"] = "shippingAddress";
    CheckoutStepType["DELIVERY_MODE"] = "deliveryMode";
    CheckoutStepType["PAYMENT_DETAILS"] = "paymentDetails";
    CheckoutStepType["REVIEW_ORDER"] = "reviewOrder";
})(CheckoutStepType || (CheckoutStepType = {}));

var DeliveryModePreferences;
(function (DeliveryModePreferences) {
    DeliveryModePreferences["FREE"] = "FREE";
    DeliveryModePreferences["LEAST_EXPENSIVE"] = "LEAST_EXPENSIVE";
    DeliveryModePreferences["MOST_EXPENSIVE"] = "MOST_EXPENSIVE";
})(DeliveryModePreferences || (DeliveryModePreferences = {}));
let CheckoutConfig = class CheckoutConfig {
};
CheckoutConfig.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutConfig_Factory() { return ɵɵinject(Config); }, token: CheckoutConfig, providedIn: "root" });
CheckoutConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], CheckoutConfig);

const defaultCheckoutConfig = {
    checkout: {
        steps: [
            {
                id: 'shippingAddress',
                name: 'checkoutProgress.shippingAddress',
                routeName: 'checkoutShippingAddress',
                type: [CheckoutStepType.SHIPPING_ADDRESS],
            },
            {
                id: 'deliveryMode',
                name: 'checkoutProgress.deliveryMode',
                routeName: 'checkoutDeliveryMode',
                type: [CheckoutStepType.DELIVERY_MODE],
            },
            {
                id: 'paymentDetails',
                name: 'checkoutProgress.paymentDetails',
                routeName: 'checkoutPaymentDetails',
                type: [CheckoutStepType.PAYMENT_DETAILS],
            },
            {
                id: 'reviewOrder',
                name: 'checkoutProgress.reviewOrder',
                routeName: 'checkoutReviewOrder',
                type: [CheckoutStepType.REVIEW_ORDER],
            },
        ],
        express: false,
        defaultDeliveryMode: [DeliveryModePreferences.FREE],
        guest: false,
    },
};

let CheckoutConfigService = class CheckoutConfigService {
    constructor(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
        this.express = this.checkoutConfig.checkout.express;
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    getCheckoutStep(currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    }
    getCheckoutStepRoute(currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    }
    getFirstCheckoutStepRoute() {
        return this.steps[0].routeName;
    }
    getNextCheckoutStepUrl(activatedRoute) {
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    }
    getPreviousCheckoutStepUrl(activatedRoute) {
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    }
    getCurrentStepIndex(activatedRoute) {
        const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        let stepIndex;
        let index = 0;
        for (const step of this.steps) {
            if (currentStepUrl === `/${this.getStepUrlFromStepRoute(step.routeName)}`) {
                stepIndex = index;
            }
            else {
                index++;
            }
        }
        return stepIndex >= 0 ? stepIndex : null;
    }
    compareDeliveryCost(deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    }
    findMatchingDeliveryMode(deliveryModes, index = 0) {
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                const leastExpensiveFound = deliveryModes.find((deliveryMode) => deliveryMode.deliveryCost.value !== 0);
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                const codeFound = deliveryModes.find((deliveryMode) => deliveryMode.code === this.defaultDeliveryMode[index]);
                if (codeFound) {
                    return codeFound.code;
                }
        }
        const lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    }
    getPreferredDeliveryMode(deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    }
    isExpressCheckout() {
        return this.express;
    }
    isGuestCheckout() {
        return this.guest;
    }
    getStepUrlFromActivatedRoute(activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? `/${activatedRoute.snapshot.url.join('/')}`
            : null;
    }
    getStepUrlFromStepRoute(stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    }
    getCheckoutStepIndex(key, value) {
        return key && value
            ? this.steps.findIndex((step) => step[key].includes(value))
            : null;
    }
};
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
CheckoutConfigService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
CheckoutConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutConfigService);

let CheckoutAuthGuard = class CheckoutAuthGuard {
    constructor(routingService, authService, authRedirectService, checkoutConfigService, activeCartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.checkoutConfigService = checkoutConfigService;
        this.activeCartService = activeCartService;
    }
    canActivate() {
        return combineLatest([
            this.authService.getUserToken(),
            this.activeCartService.getAssignedUser(),
        ]).pipe(map(([token, user]) => {
            if (!token.access_token) {
                if (this.activeCartService.isGuestCart()) {
                    return Boolean(user);
                }
                if (this.checkoutConfigService.isGuestCheckout()) {
                    this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    this.routingService.go({ cxRoute: 'login' });
                }
                this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        }));
    }
};
CheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService },
    { type: CheckoutConfigService },
    { type: ActiveCartService }
];
CheckoutAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CheckoutConfigService), ɵɵinject(ActiveCartService)); }, token: CheckoutAuthGuard, providedIn: "root" });
CheckoutAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutAuthGuard);

let CheckoutDetailsService = class CheckoutDetailsService {
    constructor(checkoutService, checkoutDeliveryService, checkoutPaymentService, activeCartService) {
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.activeCartService = activeCartService;
        this.cartId$ = this.activeCartService.getActive().pipe(map((cartData) => {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                this.activeCartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        }), filter((cartId) => !!cartId));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap((cartId) => this.checkoutService.loadCheckoutDetails(cartId)), shareReplay(1), switchMap(() => this.checkoutService.getCheckoutDetailsLoaded()), skipWhile((loaded) => !loaded));
    }
    getDeliveryAddress() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(() => this.checkoutDeliveryService.getDeliveryAddress()));
    }
    getSelectedDeliveryModeCode() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(() => this.checkoutDeliveryService.getSelectedDeliveryModeCode()));
    }
    getPaymentDetails() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap(() => this.checkoutPaymentService.getPaymentDetails()));
    }
};
CheckoutDetailsService.ctorParameters = () => [
    { type: CheckoutService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: ActiveCartService }
];
CheckoutDetailsService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(ɵɵinject(CheckoutService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(ActiveCartService)); }, token: CheckoutDetailsService, providedIn: "root" });
CheckoutDetailsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutDetailsService);

let ExpressCheckoutService = class ExpressCheckoutService {
    constructor(userAddressService, userPaymentService, checkoutDeliveryService, checkoutPaymentService, checkoutDetailsService, checkoutConfigService) {
        this.userAddressService = userAddressService;
        this.userPaymentService = userPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.setShippingAddress();
        this.setDeliveryMode();
        this.setPaymentMethod();
    }
    setShippingAddress() {
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap(([, addressesLoadedSuccess]) => {
            if (!addressesLoadedSuccess) {
                this.userAddressService.loadAddresses();
            }
        }), filter(([, addressesLoadedSuccess]) => addressesLoadedSuccess), switchMap(([addresses, , setDeliveryAddressProcess]) => {
            const defaultAddress = addresses.find((address) => address.defaultAddress) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter((setDeliveryAddressProcessState) => {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                }), switchMap((setDeliveryAddressProcessState) => {
                    if (setDeliveryAddressProcessState.success) {
                        return this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                }), map((data) => Boolean(data && Object.keys(data).length)));
            }
            return of(false);
        }));
    }
    setPaymentMethod() {
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap(([, paymentMethodsLoadedSuccess]) => {
            if (!paymentMethodsLoadedSuccess) {
                this.userPaymentService.loadPaymentMethods();
            }
        }), filter(([, success]) => success), switchMap(([payments, , setPaymentDetailsProcess]) => {
            const defaultPayment = payments.find((address) => address.defaultPayment) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter((setPaymentDetailsProcessState) => {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                }), switchMap((setPaymentDetailsProcessState) => {
                    if (setPaymentDetailsProcessState.success) {
                        return this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                }), map((data) => Boolean(data && Object.keys(data).length)));
            }
            return of(false);
        }));
    }
    setDeliveryMode() {
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap(([addressSet, supportedDeliveryModes, setDeliveryModeStatusFlag, loadSupportedDeliveryModeStatus,]) => {
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter(([, , supportedDeliveryModeStatus]) => supportedDeliveryModeStatus.success), switchMap(([deliveryModes, setDeliveryModeStatus, ,]) => {
                    if (Boolean(deliveryModes.length)) {
                        const preferredDeliveryMode = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap(([deliveryMode, deliveryModeLoadingStatus]) => {
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        }), filter(([, deliveryModeLoadingStatus]) => {
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        }), switchMap(([, deliveryModeLoadingStatus]) => {
                            if (deliveryModeLoadingStatus.success) {
                                return this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        }), map((data) => Boolean(data)));
                    }
                    return of(false);
                }));
            }
            else {
                return of(false);
            }
        }));
    }
    resetCheckoutProcesses() {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    }
    trySetDefaultCheckoutDetails() {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map(([deliveryModeSet, paymentMethodSet]) => Boolean(deliveryModeSet && paymentMethodSet)));
    }
};
ExpressCheckoutService.ctorParameters = () => [
    { type: UserAddressService },
    { type: UserPaymentService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService }
];
ExpressCheckoutService.ɵprov = ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(ɵɵinject(UserAddressService), ɵɵinject(UserPaymentService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
ExpressCheckoutService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ExpressCheckoutService);

let CheckoutGuard = class CheckoutGuard {
    constructor(router, routingConfigService, checkoutConfigService, expressCheckoutService, activeCartService) {
        this.router = router;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.activeCartService = activeCartService;
        this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
    }
    canActivate() {
        if (this.checkoutConfigService.isExpressCheckout() &&
            !this.activeCartService.isGuestCart()) {
            return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((expressCheckoutPossible) => {
                return expressCheckoutPossible
                    ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                    : this.firstStep$;
            }));
        }
        return this.firstStep$;
    }
};
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: RoutingConfigService },
    { type: CheckoutConfigService },
    { type: ExpressCheckoutService },
    { type: ActiveCartService }
];
CheckoutGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(ɵɵinject(Router), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutConfigService), ɵɵinject(ExpressCheckoutService), ɵɵinject(ActiveCartService)); }, token: CheckoutGuard, providedIn: "root" });
CheckoutGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutGuard);

let CheckoutOrchestratorComponent = class CheckoutOrchestratorComponent {
    constructor() { }
};
CheckoutOrchestratorComponent = __decorate([
    Component({
        selector: 'cx-checkout-orchestrator',
        template: "",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CheckoutOrchestratorComponent);

let CheckoutOrchestratorModule = class CheckoutOrchestratorModule {
};
CheckoutOrchestratorModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            provideDefaultConfig(defaultCheckoutConfig),
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutOrchestrator: {
                        component: CheckoutOrchestratorComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutOrchestratorComponent],
        entryComponents: [CheckoutOrchestratorComponent],
        exports: [CheckoutOrchestratorComponent],
    })
], CheckoutOrchestratorModule);

let CheckoutOrderSummaryComponent = class CheckoutOrderSummaryComponent {
    constructor(activeCartService) {
        this.activeCartService = activeCartService;
        this.cart$ = this.activeCartService.getActive();
    }
};
CheckoutOrderSummaryComponent.ctorParameters = () => [
    { type: ActiveCartService }
];
CheckoutOrderSummaryComponent = __decorate([
    Component({
        selector: 'cx-checkout-order-summary',
        template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CheckoutOrderSummaryComponent);

let CheckoutOrderSummaryModule = class CheckoutOrderSummaryModule {
};
CheckoutOrderSummaryModule = __decorate([
    NgModule({
        imports: [CommonModule, CartSharedModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutOrderSummary: {
                        component: CheckoutOrderSummaryComponent,
                    },
                },
            }),
        ],
        declarations: [CheckoutOrderSummaryComponent],
        entryComponents: [CheckoutOrderSummaryComponent],
        exports: [CheckoutOrderSummaryComponent],
    })
], CheckoutOrderSummaryModule);

let CheckoutProgressMobileBottomComponent = class CheckoutProgressMobileBottomComponent {
    constructor(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((router) => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((step, index) => {
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            });
        }));
    }
};
CheckoutProgressMobileBottomComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService }
];
CheckoutProgressMobileBottomComponent = __decorate([
    Component({
        selector: 'cx-checkout-progress-mobile-bottom',
        template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CheckoutProgressMobileBottomComponent);

let CheckoutProgressMobileBottomModule = class CheckoutProgressMobileBottomModule {
};
CheckoutProgressMobileBottomModule = __decorate([
    NgModule({
        imports: [CommonModule, UrlModule, I18nModule, RouterModule],
        providers: [
            provideDefaultConfig(defaultCheckoutConfig),
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutProgressMobileBottom: {
                        component: CheckoutProgressMobileBottomComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutProgressMobileBottomComponent],
        entryComponents: [CheckoutProgressMobileBottomComponent],
        exports: [CheckoutProgressMobileBottomComponent],
    })
], CheckoutProgressMobileBottomModule);

let CheckoutProgressMobileTopComponent = class CheckoutProgressMobileTopComponent {
    constructor(config, routingService, routingConfigService, activeCartService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
        this.activeCartService = activeCartService;
    }
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.cart$ = this.activeCartService.getActive();
        this.routerState$ = this.routingService.getRouterState().pipe(tap((router) => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((step, index) => {
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            });
        }));
    }
};
CheckoutProgressMobileTopComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService },
    { type: ActiveCartService }
];
CheckoutProgressMobileTopComponent = __decorate([
    Component({
        selector: 'cx-checkout-progress-mobile-top',
        template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CheckoutProgressMobileTopComponent);

let CheckoutProgressMobileTopModule = class CheckoutProgressMobileTopModule {
};
CheckoutProgressMobileTopModule = __decorate([
    NgModule({
        imports: [CommonModule, UrlModule, I18nModule, RouterModule],
        providers: [
            provideDefaultConfig(defaultCheckoutConfig),
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutProgressMobileTop: {
                        component: CheckoutProgressMobileTopComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutProgressMobileTopComponent],
        entryComponents: [CheckoutProgressMobileTopComponent],
        exports: [CheckoutProgressMobileTopComponent],
    })
], CheckoutProgressMobileTopModule);

let CheckoutProgressComponent = class CheckoutProgressComponent {
    constructor(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((router) => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((step, index) => {
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            });
        }));
    }
    getTabIndex(stepIndex) {
        return !this.isActive(stepIndex) && !this.isDisabled(stepIndex) ? 0 : -1;
    }
    isActive(index) {
        return index === this.activeStepIndex;
    }
    isDisabled(index) {
        return index > this.activeStepIndex;
    }
};
CheckoutProgressComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService }
];
CheckoutProgressComponent = __decorate([
    Component({
        selector: 'cx-checkout-progress',
        template: "<section *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [class.active]=\"isActive(i)\"\n          [class.disabled]=\"isDisabled(i)\"\n          [tabindex]=\"getTabIndex(i)\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CheckoutProgressComponent);

let CheckoutProgressModule = class CheckoutProgressModule {
};
CheckoutProgressModule = __decorate([
    NgModule({
        imports: [CommonModule, UrlModule, I18nModule, RouterModule],
        declarations: [CheckoutProgressComponent],
        entryComponents: [CheckoutProgressComponent],
        exports: [CheckoutProgressComponent],
        providers: [
            provideDefaultConfig(defaultCheckoutConfig),
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutProgress: {
                        component: CheckoutProgressComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
    })
], CheckoutProgressModule);

let ShippingAddressSetGuard = class ShippingAddressSetGuard {
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    canActivate() {
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.SHIPPING_ADDRESS} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map((deliveryAddress) => deliveryAddress && Object.keys(deliveryAddress).length
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
};
ShippingAddressSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
ShippingAddressSetGuard.ɵprov = ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: ShippingAddressSetGuard, providedIn: "root" });
ShippingAddressSetGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ShippingAddressSetGuard);

let DeliveryModeComponent = class DeliveryModeComponent {
    constructor(fb, checkoutDeliveryService, routingService, checkoutConfigService, activatedRoute) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.allowRedirect = false;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    ngOnInit() {
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        this.deliveryModeSub = this.supportedDeliveryModes$
            .pipe(withLatestFrom(this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(map((deliveryMode) => deliveryMode && deliveryMode.code ? deliveryMode.code : null))))
            .subscribe(([deliveryModes, code]) => {
            if (!code && deliveryModes && deliveryModes.length) {
                code = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
            }
            if (this.allowRedirect &&
                !!code &&
                code === this.currentDeliveryModeId) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
            if (code) {
                this.mode.controls['deliveryModeId'].setValue(code);
                if (code !== this.currentDeliveryModeId) {
                    this.checkoutDeliveryService.setDeliveryMode(code);
                }
            }
            this.currentDeliveryModeId = code;
        });
    }
    changeMode(code) {
        if (code !== this.currentDeliveryModeId) {
            this.checkoutDeliveryService.setDeliveryMode(code);
            this.currentDeliveryModeId = code;
        }
    }
    next() {
        this.allowRedirect = true;
        if (this.mode.valid && this.mode.value) {
            if (!this.currentDeliveryModeId) {
                this.currentDeliveryModeId = this.mode.value.deliveryModeId;
            }
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
    }
    back() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    get deliveryModeInvalid() {
        return this.mode.controls['deliveryModeId'].invalid;
    }
    ngOnDestroy() {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    }
};
DeliveryModeComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute }
];
DeliveryModeComponent = __decorate([
    Component({
        selector: 'cx-delivery-mode',
        template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], DeliveryModeComponent);

let DeliveryModeModule = class DeliveryModeModule {
};
DeliveryModeModule = __decorate([
    NgModule({
        imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutDeliveryMode: {
                        component: DeliveryModeComponent,
                        guards: [
                            CheckoutAuthGuard,
                            CartNotEmptyGuard,
                            ShippingAddressSetGuard,
                        ],
                    },
                },
            }),
        ],
        declarations: [DeliveryModeComponent],
        entryComponents: [DeliveryModeComponent],
        exports: [DeliveryModeComponent],
    })
], DeliveryModeModule);

let DeliveryModeSetGuard = class DeliveryModeSetGuard {
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    canActivate() {
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.DELIVERY_MODE} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((mode) => mode && mode.length
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
};
DeliveryModeSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
DeliveryModeSetGuard.ɵprov = ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
DeliveryModeSetGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DeliveryModeSetGuard);

let SuggestedAddressDialogComponent = class SuggestedAddressDialogComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    }
    closeModal(reason) {
        this.modalService.closeActiveModal(reason);
    }
};
SuggestedAddressDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
__decorate([
    Input()
], SuggestedAddressDialogComponent.prototype, "suggestedAddresses", void 0);
__decorate([
    Input()
], SuggestedAddressDialogComponent.prototype, "enteredAddress", void 0);
SuggestedAddressDialogComponent = __decorate([
    Component({
        selector: 'cx-suggested-addresses-dialog',
        template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SuggestedAddressDialogComponent);

let PaymentFormComponent = class PaymentFormComponent {
    constructor(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService, userAddressService) {
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userPaymentService = userPaymentService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.userAddressService = userAddressService;
        this.iconTypes = ICON_TYPE;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.selectedCountry$ = new BehaviorSubject('');
        this.goBack = new EventEmitter();
        this.closeForm = new EventEmitter();
        this.setPaymentDetails = new EventEmitter();
        this.paymentForm = this.fb.group({
            cardType: this.fb.group({
                code: [null, Validators.required],
            }),
            accountHolderName: ['', Validators.required],
            cardNumber: ['', Validators.required],
            expiryMonth: [null, Validators.required],
            expiryYear: [null, Validators.required],
            cvn: ['', Validators.required],
            defaultPayment: [false],
        });
        this.billingAddressForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocodeShort: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
        });
    }
    ngOnInit() {
        this.expMonthAndYear();
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap((countries) => {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                this.userPaymentService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap((cardTypes) => {
            if (Object.keys(cardTypes).length === 0) {
                this.checkoutPaymentService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.loading$ = this.checkoutPaymentService.getSetPaymentDetailsResultProcess();
        this.showSameAsShippingAddressCheckbox$ = combineLatest([
            this.countries$,
            this.shippingAddress$,
        ]).pipe(map(([countries, address]) => {
            return ((address === null || address === void 0 ? void 0 : address.country) &&
                !!countries.filter((country) => country.isocode === address.country.isocode).length);
        }), tap((shouldShowCheckbox) => {
            this.sameAsShippingAddress = shouldShowCheckbox;
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results.decision === 'FAIL') {
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.next();
            }
            else if (results.decision === 'REJECT') {
                this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
        this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
            const regionControl = this.billingAddressForm.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
    }
    expMonthAndYear() {
        const year = new Date().getFullYear();
        for (let i = 0; i < 10; i++) {
            this.years.push(year + i);
        }
        for (let j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push(`0${j}`);
            }
            else {
                this.months.push(j.toString());
            }
        }
    }
    toggleDefaultPaymentMethod() {
        this.paymentForm.value.defaultPayment = !this.paymentForm.value
            .defaultPayment;
    }
    toggleSameAsShippingAddress() {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    }
    getAddressCardContent(address) {
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
        };
    }
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddressForm.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(() => {
                this.checkoutDeliveryService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutDeliveryService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            });
        }
    }
    close() {
        this.closeForm.emit();
    }
    back() {
        this.goBack.emit();
    }
    verifyAddress() {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutDeliveryService.verifyAddress(this.billingAddressForm.value);
        }
    }
    countrySelected(country) {
        this.billingAddressForm.get('country.isocode').setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    next() {
        if (this.paymentForm.valid) {
            if (this.sameAsShippingAddress) {
                this.setPaymentDetails.emit({
                    paymentDetails: this.paymentForm.value,
                    billingAddress: null,
                });
            }
            else {
                if (this.billingAddressForm.valid) {
                    this.setPaymentDetails.emit({
                        paymentDetails: this.paymentForm.value,
                        billingAddress: this.billingAddressForm.value,
                    });
                }
                else {
                    this.billingAddressForm.markAllAsTouched();
                }
            }
        }
        else {
            this.paymentForm.markAllAsTouched();
            if (!this.sameAsShippingAddress) {
                this.billingAddressForm.markAllAsTouched();
            }
        }
    }
    ngOnDestroy() {
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    }
};
PaymentFormComponent.ctorParameters = () => [
    { type: CheckoutPaymentService },
    { type: CheckoutDeliveryService },
    { type: UserPaymentService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: ModalService },
    { type: UserAddressService }
];
__decorate([
    Input()
], PaymentFormComponent.prototype, "setAsDefaultField", void 0);
__decorate([
    Input()
], PaymentFormComponent.prototype, "paymentMethodsCount", void 0);
__decorate([
    Output()
], PaymentFormComponent.prototype, "goBack", void 0);
__decorate([
    Output()
], PaymentFormComponent.prototype, "closeForm", void 0);
__decorate([
    Output()
], PaymentFormComponent.prototype, "setPaymentDetails", void 0);
PaymentFormComponent = __decorate([
    Component({
        selector: 'cx-payment-form',
        template: "<!-- FORM -->\n<ng-container *ngIf=\"!(loading$ | async).loading; else spinner\">\n  <form (ngSubmit)=\"next()\" [formGroup]=\"paymentForm\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xl-10\">\n        <div class=\"form-group\" formGroupName=\"cardType\">\n          <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n            <div *ngIf=\"cardTypes.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'paymentForm.paymentType' | cxTranslate\n                }}</span>\n                <ng-select\n                  [searchable]=\"false\"\n                  [clearable]=\"false\"\n                  [items]=\"cardTypes\"\n                  bindLabel=\"name\"\n                  bindValue=\"code\"\n                  placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                  formControlName=\"code\"\n                >\n                </ng-select>\n                <cx-form-errors\n                  [control]=\"paymentForm.get('cardType.code')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n\n        <div class=\"form-group\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.accountHolderName.label' | cxTranslate\n            }}</span>\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"{{\n                'paymentForm.accountHolderName.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"accountHolderName\"\n            />\n            <cx-form-errors\n              [control]=\"paymentForm.get('accountHolderName')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n\n        <div class=\"form-group\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.cardNumber' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"cardNumber\"\n            />\n            <cx-form-errors\n              [control]=\"paymentForm.get('cardNumber')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-8\">\n            <label>\n              <span class=\"label-content\">{{\n                'paymentForm.expirationDate' | cxTranslate\n              }}</span>\n              <div class=\"cx-payment-form-exp-date\">\n                <div class=\"cx-payment-form-exp-date-wrapper\">\n                  <ng-select\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"months\"\n                    placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                    formControlName=\"expiryMonth\"\n                  >\n                  </ng-select>\n                  <cx-form-errors\n                    [control]=\"paymentForm.get('expiryMonth')\"\n                  ></cx-form-errors>\n                </div>\n                <div class=\"cx-payment-form-exp-date-wrapper\">\n                  <ng-select\n                    [searchable]=\"false\"\n                    [clearable]=\"false\"\n                    [items]=\"years\"\n                    placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                    formControlName=\"expiryYear\"\n                  >\n                  </ng-select>\n                  <cx-form-errors\n                    [control]=\"paymentForm.get('expiryYear')\"\n                  ></cx-form-errors>\n                </div>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group col-md-4\">\n            <label>\n              <span class=\"label-content\">\n                {{ 'paymentForm.securityCode' | cxTranslate }}\n                <cx-icon\n                  [type]=\"iconTypes.INFO\"\n                  class=\"cx-payment-form-tooltip\"\n                  placement=\"right\"\n                  title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                  alt=\"\"\n                ></cx-icon>\n              </span>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cVVNumber\"\n                formControlName=\"cvn\"\n              />\n              <cx-form-errors\n                [control]=\"paymentForm.get('cvn')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n          <div class=\"form-check\">\n            <label>\n              <input\n                type=\"checkbox\"\n                class=\"form-check-input\"\n                (change)=\"toggleDefaultPaymentMethod()\"\n              />\n              <span class=\"form-check-label\">{{\n                'paymentForm.setAsDefault' | cxTranslate\n              }}</span>\n            </label>\n          </div>\n        </div>\n\n        <!-- BILLING -->\n        <div class=\"cx-payment-form-billing\">\n          <div class=\"cx-payment-form-billing-address\">\n            {{ 'paymentForm.billingAddress' | cxTranslate }}\n          </div>\n\n          <!-- SAME AS SHIPPING CHECKBOX -->\n          <ng-container *ngIf=\"showSameAsShippingAddressCheckbox$ | async\">\n            <div class=\"form-group\">\n              <div class=\"form-check\">\n                <label>\n                  <input\n                    type=\"checkbox\"\n                    class=\"form-check-input\"\n                    [checked]=\"sameAsShippingAddress\"\n                    (change)=\"toggleSameAsShippingAddress()\"\n                  />\n                  <span class=\"form-check-label\">{{\n                    'paymentForm.sameAsShippingAddress' | cxTranslate\n                  }}</span>\n                </label>\n              </div>\n            </div>\n          </ng-container>\n\n          <!-- BILLING INFO COMPONENT -->\n          <ng-container\n            *ngIf=\"\n              sameAsShippingAddress && shippingAddress$\n                | async as shippingAddress;\n              else billingAddress\n            \"\n          >\n            <cx-card\n              [content]=\"getAddressCardContent(shippingAddress)\"\n            ></cx-card>\n          </ng-container>\n\n          <ng-template #billingAddress>\n            <div [formGroup]=\"billingAddressForm\">\n              <div class=\"form-group\" formGroupName=\"country\">\n                <ng-container *ngIf=\"countries$ | async as countries\">\n                  <div *ngIf=\"countries.length !== 0\">\n                    <label aria-required=\"true\">\n                      <span class=\"label-content required\">{{\n                        'addressForm.country' | cxTranslate\n                      }}</span>\n                      <ng-select\n                        [searchable]=\"true\"\n                        [clearable]=\"false\"\n                        [items]=\"countries\"\n                        bindLabel=\"name\"\n                        bindValue=\"isocode\"\n                        placeholder=\"{{\n                          'addressForm.selectOne' | cxTranslate\n                        }}\"\n                        (change)=\"countrySelected($event)\"\n                        formControlName=\"isocode\"\n                      >\n                      </ng-select>\n                      <cx-form-errors\n                        [control]=\"billingAddressForm.get('country.isocode')\"\n                      ></cx-form-errors>\n                    </label>\n                  </div>\n                </ng-container>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.firstName.label' | cxTranslate\n                  }}</span>\n                  <input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"{{\n                      'addressForm.firstName.placeholder' | cxTranslate\n                    }}\"\n                    formControlName=\"firstName\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('firstName')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.lastName.label' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{\n                      'addressForm.lastName.placeholder' | cxTranslate\n                    }}\"\n                    formControlName=\"lastName\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('lastName')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content required\">{{\n                    'addressForm.address1' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{\n                      'addressForm.streetAddress' | cxTranslate\n                    }}\"\n                    formControlName=\"line1\"\n                  />\n                  <cx-form-errors\n                    [control]=\"billingAddressForm.get('line1')\"\n                  ></cx-form-errors>\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  <span class=\"label-content\">{{\n                    'addressForm.address2' | cxTranslate\n                  }}</span>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n                    formControlName=\"line2\"\n                  />\n                </label>\n              </div>\n              <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                  <label>\n                    <span class=\"label-content required\">{{\n                      'addressForm.city.label' | cxTranslate\n                    }}</span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"{{\n                        'addressForm.city.placeholder' | cxTranslate\n                      }}\"\n                      formControlName=\"town\"\n                    />\n                    <cx-form-errors\n                      [control]=\"billingAddressForm.get('town')\"\n                    ></cx-form-errors>\n                  </label>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <label>\n                    <span class=\"label-content required\">{{\n                      'addressForm.zipCode.label' | cxTranslate\n                    }}</span>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"{{\n                        'addressForm.zipCode.placeholder' | cxTranslate\n                      }}\"\n                      formControlName=\"postalCode\"\n                    />\n                    <cx-form-errors\n                      [control]=\"billingAddressForm.get('postalCode')\"\n                    ></cx-form-errors>\n                  </label>\n                </div>\n                <ng-container\n                  *ngIf=\"regions$ | async as regions\"\n                  formGroupName=\"region\"\n                >\n                  <ng-container *ngIf=\"regions.length !== 0\">\n                    <div class=\"form-group col-md-6\">\n                      <label aria-required=\"true\">\n                        <span class=\"label-content required\">{{\n                          'addressForm.state' | cxTranslate\n                        }}</span>\n                        <ng-select\n                          class=\"region-select\"\n                          formControlName=\"isocodeShort\"\n                          [searchable]=\"true\"\n                          [clearable]=\"false\"\n                          [items]=\"regions\"\n                          bindLabel=\"{{\n                            regions[0].name ? 'name' : 'isocodeShort'\n                          }}\"\n                          bindValue=\"{{\n                            regions[0].name ? 'isocodeShort' : 'region'\n                          }}\"\n                          placeholder=\"{{\n                            'addressForm.selectOne' | cxTranslate\n                          }}\"\n                        >\n                        </ng-select>\n                        <cx-form-errors\n                          [control]=\"\n                            billingAddressForm.get('region.isocodeShort')\n                          \"\n                        ></cx-form-errors>\n                      </label>\n                    </div>\n                  </ng-container>\n                </ng-container>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <!-- BUTTON SECTION -->\n    <div class=\"cx-checkout-btns row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <button\n          *ngIf=\"paymentMethodsCount === 0\"\n          class=\"btn btn-block btn-action\"\n          (click)=\"back()\"\n        >\n          {{ 'common.back' | cxTranslate }}\n        </button>\n        <button\n          *ngIf=\"paymentMethodsCount > 0\"\n          class=\"btn btn-block btn-action\"\n          (click)=\"close()\"\n        >\n          {{ 'paymentForm.changePayment' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-primary\" type=\"submit\">\n          {{ 'common.continue' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-container>\n\n<ng-template #spinner>\n  <cx-spinner></cx-spinner>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaymentFormComponent);

let PaymentFormModule = class PaymentFormModule {
};
PaymentFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            NgSelectModule,
            CardModule,
            I18nModule,
            IconModule,
            SpinnerModule,
            FormErrorsModule,
        ],
        declarations: [PaymentFormComponent],
        entryComponents: [PaymentFormComponent],
        exports: [PaymentFormComponent],
    })
], PaymentFormModule);

let PaymentMethodComponent = class PaymentMethodComponent {
    constructor(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, activeCartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.iconTypes = ICON_TYPE;
        this.isGuestCheckout = false;
        this.newPaymentFormManuallyOpened = false;
    }
    ngOnInit() {
        this.shouldRedirect = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.activeCartService.isGuestCart()) {
            this.userPaymentService.loadPaymentMethods();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.checkoutDeliveryService
            .getDeliveryAddress()
            .pipe(take(1))
            .subscribe((address) => {
            this.deliveryAddress = address;
        });
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.selectedMethod$ = this.checkoutPaymentService.getPaymentDetails().pipe(tap((paymentInfo) => {
            if (paymentInfo && !!Object.keys(paymentInfo).length) {
                if (paymentInfo['hasError']) {
                    Object.keys(paymentInfo).forEach((key) => {
                        if (key.startsWith('InvalidField')) {
                            this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                        }
                    });
                    this.checkoutService.clearCheckoutStep(3);
                }
                else if (this.shouldRedirect) {
                    this.routingService.go(this.checkoutStepUrlNext);
                }
            }
        }));
        this.cards$ = combineLatest([
            this.existingPaymentMethods$.pipe(switchMap((methods) => {
                return !(methods === null || methods === void 0 ? void 0 : methods.length)
                    ? of([])
                    : combineLatest(methods.map((method) => combineLatest([
                        of(method),
                        this.translation.translate('paymentCard.expires', {
                            month: method.expiryMonth,
                            year: method.expiryYear,
                        }),
                    ]).pipe(map(([payment, translation]) => ({
                        payment,
                        expiryTranslation: translation,
                    })))));
            })),
            this.selectedMethod$,
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(([paymentMethods, selectedMethod, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
            if (paymentMethods.length &&
                (!selectedMethod || Object.keys(selectedMethod).length === 0)) {
                const defaultPaymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.payment.defaultPayment);
                if (defaultPaymentMethod) {
                    selectedMethod = defaultPaymentMethod.payment;
                    this.checkoutPaymentService.setPaymentDetails(selectedMethod);
                }
            }
            return paymentMethods.map((payment) => ({
                content: this.createCard(payment.payment, {
                    textExpires: payment.expiryTranslation,
                    textUseThisPayment,
                    textDefaultPaymentMethod,
                    textSelected,
                }, selectedMethod),
                paymentMethod: payment.payment,
            }));
        }));
    }
    selectPaymentMethod(paymentDetails) {
        this.checkoutPaymentService.setPaymentDetails(paymentDetails);
    }
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    setPaymentDetails({ paymentDetails, billingAddress, }) {
        const details = Object.assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        this.checkoutPaymentService.createPaymentDetails(details);
        this.shouldRedirect = true;
    }
    ngOnDestroy() {
        this.checkoutPaymentService.paymentProcessSuccess();
    }
    getCardIcon(code) {
        let ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    }
    sendPaymentMethodFailGlobalMessage(field) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    createCard(paymentDetails, cardLabels, selected) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: (selected === null || selected === void 0 ? void 0 : selected.id) === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    }
    goNext() {
        this.routingService.go(this.checkoutStepUrlNext);
    }
    goPrevious() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
};
PaymentMethodComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: CheckoutService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: ActiveCartService }
];
PaymentMethodComponent = __decorate([
    Component({
        selector: 'cx-payment-method',
        template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.content\"\n              (sendCard)=\"selectPaymentMethod(card.paymentMethod)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"goPrevious()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!(selectedMethod$ | async)?.id\"\n            (click)=\"goNext()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"goPrevious()\"\n        [paymentMethodsCount]=\"cards?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PaymentMethodComponent);

let PaymentMethodModule = class PaymentMethodModule {
};
PaymentMethodModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            PaymentFormModule,
            CardModule,
            SpinnerModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutPaymentDetails: {
                        component: PaymentMethodComponent,
                        guards: [
                            CheckoutAuthGuard,
                            CartNotEmptyGuard,
                            ShippingAddressSetGuard,
                            DeliveryModeSetGuard,
                        ],
                    },
                },
            }),
        ],
        declarations: [PaymentMethodComponent],
        entryComponents: [PaymentMethodComponent],
        exports: [PaymentMethodComponent],
    })
], PaymentMethodModule);

let PlaceOrderComponent = class PlaceOrderComponent {
    constructor(checkoutService, routingService, fb) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.fb = fb;
        this.checkoutSubmitForm = this.fb.group({
            termsAndConditions: [false, Validators.requiredTrue],
        });
    }
    submitForm() {
        if (this.checkoutSubmitForm.valid) {
            this.checkoutService.placeOrder();
        }
        else {
            this.checkoutSubmitForm.markAllAsTouched();
        }
    }
    ngOnInit() {
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter((order) => Object.keys(order).length !== 0))
            .subscribe(() => {
            this.routingService.go({ cxRoute: 'orderConfirmation' });
        });
    }
    ngOnDestroy() {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    }
};
PlaceOrderComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService },
    { type: FormBuilder }
];
PlaceOrderComponent = __decorate([
    Component({
        selector: 'cx-place-order',
        template: "<form\n  (ngSubmit)=\"submitForm()\"\n  class=\"cx-place-order-form form-check\"\n  [formGroup]=\"checkoutSubmitForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n      <cx-form-errors\n        [control]=\"checkoutSubmitForm.get('termsAndConditions')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary btn-block\">\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PlaceOrderComponent);

let PlaceOrderModule = class PlaceOrderModule {
};
PlaceOrderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            I18nModule,
            ReactiveFormsModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutPlaceOrder: {
                        component: PlaceOrderComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [PlaceOrderComponent],
        entryComponents: [PlaceOrderComponent],
        exports: [PlaceOrderComponent],
    })
], PlaceOrderModule);

let PaymentDetailsSetGuard = class PaymentDetailsSetGuard {
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    canActivate() {
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.PAYMENT_DETAILS} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map((paymentDetails) => paymentDetails && Object.keys(paymentDetails).length !== 0
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0])));
    }
};
PaymentDetailsSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
PaymentDetailsSetGuard.ɵprov = ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
PaymentDetailsSetGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PaymentDetailsSetGuard);

let ReviewSubmitComponent = class ReviewSubmitComponent {
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, activeCartService, translation, checkoutConfigService, promotionService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.activeCartService = activeCartService;
        this.translation = translation;
        this.checkoutConfigService = checkoutConfigService;
        this.promotionService = promotionService;
        this.checkoutStepType = CheckoutStepType;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ngOnInit() {
        this.cart$ = this.activeCartService.getActive();
        this.entries$ = this.activeCartService.getEntries();
        this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.deliveryMode$ = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(tap((selected) => {
            if (selected === null) {
                this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        }));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap((address) => this.userAddressService.getCountry(address.country.isocode)), tap((country) => {
            if (country === null) {
                this.userAddressService.loadDeliveryCountries();
            }
        }), map((country) => country && country.name));
    }
    getShippingAddressCard(deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(([textTitle]) => {
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
            let region = '';
            if (deliveryAddress.region && deliveryAddress.region.isocode) {
                region = deliveryAddress.region.isocode + ', ';
            }
            return {
                title: textTitle,
                textBold: deliveryAddress.firstName + ' ' + deliveryAddress.lastName,
                text: [
                    deliveryAddress.line1,
                    deliveryAddress.line2,
                    deliveryAddress.town + ', ' + region + countryName,
                    deliveryAddress.postalCode,
                    deliveryAddress.phone,
                ],
            };
        }));
    }
    getDeliveryModeCard(deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        }));
    }
    getPaymentMethodCard(paymentDetails) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map(([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        }));
    }
    getCheckoutStepUrl(stepType) {
        const step = this.checkoutConfigService.getCheckoutStep(stepType);
        return step && step.routeName;
    }
};
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: UserAddressService },
    { type: ActiveCartService },
    { type: TranslationService },
    { type: CheckoutConfigService },
    { type: PromotionService }
];
ReviewSubmitComponent = __decorate([
    Component({
        selector: 'cx-review-submit',
        template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n        <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n      </ng-container>\n\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"true\"\n        [promotionLocation]=\"promotionLocation\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReviewSubmitComponent);

let ReviewSubmitModule = class ReviewSubmitModule {
};
ReviewSubmitModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CardModule,
            CartSharedModule,
            I18nModule,
            UrlModule,
            RouterModule,
            PromotionsModule,
            FeaturesConfigModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutReviewOrder: {
                        component: ReviewSubmitComponent,
                        guards: [
                            CheckoutAuthGuard,
                            CartNotEmptyGuard,
                            ShippingAddressSetGuard,
                            DeliveryModeSetGuard,
                            PaymentDetailsSetGuard,
                        ],
                    },
                },
            }),
        ],
        declarations: [ReviewSubmitComponent],
        entryComponents: [ReviewSubmitComponent],
        exports: [ReviewSubmitComponent],
    })
], ReviewSubmitModule);

let AddressFormComponent = class AddressFormComponent {
    constructor(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userService = userService;
        this.userAddressService = userAddressService;
        this.globalMessageService = globalMessageService;
        this.modalService = modalService;
        this.selectedCountry$ = new BehaviorSubject('');
        this.setAsDefaultField = true;
        this.showCancelBtn = true;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.addressForm = this.fb.group({
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
            defaultAddress: [false],
        });
    }
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
            if (Object.keys(countries).length === 0) {
                this.userAddressService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap((titles) => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map((titles) => {
            titles.sort(sortTitles);
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        }));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
            const regionControl = this.addressForm.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((results) => {
            if (results.decision === 'FAIL') {
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.submitAddress.emit(this.addressForm.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some((error) => error.subject === 'titleCode')) {
                    this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                this.openSuggestedAddress(results);
            }
        });
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
            this.addressForm.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
        this.addresses$ = this.userAddressService.getAddresses();
    }
    countrySelected(country) {
        this.addressForm['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    regionSelected(region) {
        this.addressForm['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    toggleDefaultAddress() {
        this.addressForm['controls'].defaultAddress.setValue(this.addressForm.value.defaultAddress);
    }
    back() {
        this.backToAddress.emit();
    }
    verifyAddress() {
        if (this.addressForm.valid) {
            if (this.addressForm.get('region').value.isocode) {
                this.regionsSub = this.regions$.pipe(take(1)).subscribe((regions) => {
                    const obj = regions.find((region) => region.isocode ===
                        this.addressForm.controls['region'].value.isocode);
                    Object.assign(this.addressForm.value.region, {
                        isocodeShort: obj.isocodeShort,
                    });
                });
            }
            if (this.addressForm.dirty) {
                this.checkoutDeliveryService.verifyAddress(this.addressForm.value);
            }
            else {
                // address form value not changed
                // ignore duplicate address
                this.submitAddress.emit(undefined);
            }
        }
        else {
            this.addressForm.markAllAsTouched();
        }
    }
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.addressForm.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then((address) => {
                this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: this.addressForm.value.titleCode,
                        phone: this.addressForm.value.phone,
                        selected: true,
                    }, address);
                    this.submitAddress.emit(address);
                }
                this.suggestedAddressModalRef = null;
            })
                .catch(() => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutDeliveryService.clearAddressVerificationResults();
                const address = Object.assign({
                    selected: true,
                }, this.addressForm.value);
                this.submitAddress.emit(address);
                this.suggestedAddressModalRef = null;
            });
        }
    }
    ngOnDestroy() {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    }
};
AddressFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: UserService },
    { type: UserAddressService },
    { type: GlobalMessageService },
    { type: ModalService }
];
__decorate([
    Input()
], AddressFormComponent.prototype, "addressData", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "actionBtnLabel", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "cancelBtnLabel", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "setAsDefaultField", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "showTitleCode", void 0);
__decorate([
    Input()
], AddressFormComponent.prototype, "showCancelBtn", void 0);
__decorate([
    Output()
], AddressFormComponent.prototype, "submitAddress", void 0);
__decorate([
    Output()
], AddressFormComponent.prototype, "backToAddress", void 0);
AddressFormComponent = __decorate([
    Component({
        selector: 'cx-address-form',
        template: "<form (ngSubmit)=\"verifyAddress()\" [formGroup]=\"addressForm\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n              <cx-form-errors\n                [control]=\"addressForm.get('country.isocode')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n          <cx-form-errors\n            [control]=\"addressForm.get('firstName')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n          <cx-form-errors\n            [control]=\"addressForm.get('lastName')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n          <cx-form-errors [control]=\"addressForm.get('line1')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n            <cx-form-errors\n              [control]=\"addressForm.get('town')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n            <cx-form-errors\n              [control]=\"addressForm.get('postalCode')\"\n            ></cx-form-errors>\n          </label>\n        </div>\n        <ng-container\n          *ngIf=\"regions$ | async as regions\"\n          formGroupName=\"region\"\n        >\n          <ng-container *ngIf=\"regions.length !== 0\">\n            <div class=\"form-group col-md-6\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                >\n                </ng-select>\n                <cx-form-errors\n                  [control]=\"addressForm.get('region.isocode')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"tel\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div\n        class=\"form-group\"\n        *ngIf=\"(addresses$ | async).length && setAsDefaultField\"\n      >\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AddressFormComponent);

let AddressFormModule = class AddressFormModule {
};
AddressFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            RouterModule,
            NgSelectModule,
            IconModule,
            I18nModule,
            FormErrorsModule,
        ],
        declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
        entryComponents: [SuggestedAddressDialogComponent],
        exports: [AddressFormComponent, SuggestedAddressDialogComponent],
    })
], AddressFormModule);

let CheckoutDetailsLoadedGuard = class CheckoutDetailsLoadedGuard {
    constructor(checkoutDetailsService) {
        this.checkoutDetailsService = checkoutDetailsService;
    }
    canActivate() {
        return this.checkoutDetailsService.getCheckoutDetailsLoaded$;
    }
};
CheckoutDetailsLoadedGuard.ctorParameters = () => [
    { type: CheckoutDetailsService }
];
CheckoutDetailsLoadedGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDetailsLoadedGuard_Factory() { return new CheckoutDetailsLoadedGuard(ɵɵinject(CheckoutDetailsService)); }, token: CheckoutDetailsLoadedGuard, providedIn: "root" });
CheckoutDetailsLoadedGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutDetailsLoadedGuard);

let ShippingAddressComponent = class ShippingAddressComponent {
    constructor(userAddressService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation, activeCartService) {
        this.userAddressService = userAddressService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.activeCartService = activeCartService;
        this.newAddressFormManuallyOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
        this.isGuestCheckout = false;
    }
    ngOnInit() {
        this.isLoading$ = this.userAddressService.getAddressesLoading();
        this.existingAddresses$ = this.userAddressService.getAddresses();
        this.selectedAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.cards$ = combineLatest([
            this.existingAddresses$,
            this.selectedAddress$,
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(map(([addresses, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected,]) => {
            // Select default address if none selected
            if (addresses.length &&
                (!selected || Object.keys(selected).length === 0)) {
                const defaultAddress = addresses.find((address) => address.defaultAddress);
                selected = defaultAddress;
                this.selectAddress(defaultAddress);
            }
            return addresses.map((address) => {
                const card = this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address,
                    card,
                };
            });
        }));
        if (!this.activeCartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
    }
    getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        let region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        return {
            title: address.defaultAddress ? textDefaultShippingAddress : '',
            textBold: address.firstName + ' ' + address.lastName,
            text: [
                address.line1,
                address.line2,
                address.town + ', ' + region + address.country.isocode,
                address.postalCode,
                address.phone,
            ],
            actions: [{ name: textShipToThisAddress, event: 'send' }],
            header: selected && selected.id === address.id ? textSelected : '',
        };
    }
    selectAddress(address) {
        this.checkoutDeliveryService.setDeliveryAddress(address);
    }
    addAddress(address) {
        this.selectedAddress$
            .pipe(filter((selected) => !!(selected === null || selected === void 0 ? void 0 : selected.shippingAddress)), take(1))
            .subscribe(() => this.goNext());
        this.forceLoader = true;
        this.existingAddresses$.pipe(take(1)).subscribe((addresses) => {
            addresses.includes(address)
                ? this.selectAddress(address)
                : this.checkoutDeliveryService.createAndSetAddress(address);
        });
    }
    showNewAddressForm() {
        this.newAddressFormManuallyOpened = true;
    }
    hideNewAddressForm(goPrevious = false) {
        this.newAddressFormManuallyOpened = false;
        if (goPrevious) {
            this.goPrevious();
        }
    }
    goNext() {
        this.routingService.go(this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute));
    }
    goPrevious() {
        this.routingService.go(this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) || 'cart');
    }
};
ShippingAddressComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: RoutingService },
    { type: CheckoutDeliveryService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService },
    { type: ActiveCartService }
];
ShippingAddressComponent = __decorate([
    Component({
        selector: 'cx-shipping-address',
        template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"selectAddress(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"selectAddress(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-action\"\n            (click)=\"goPrevious()\"\n          >\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!(selectedAddress$ | async)?.id\"\n            (click)=\"goNext()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"selectedAddress$ | async\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ShippingAddressComponent);

let ShippingAddressModule = class ShippingAddressModule {
};
ShippingAddressModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            AddressFormModule,
            CardModule,
            SpinnerModule,
            I18nModule,
            CheckoutProgressMobileTopModule,
            CheckoutProgressMobileBottomModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutShippingAddress: {
                        component: ShippingAddressComponent,
                        guards: [
                            CheckoutAuthGuard,
                            CartNotEmptyGuard,
                            CheckoutDetailsLoadedGuard,
                        ],
                    },
                },
            }),
        ],
        declarations: [ShippingAddressComponent],
        entryComponents: [ShippingAddressComponent],
        exports: [ShippingAddressComponent],
    })
], ShippingAddressModule);

let CheckoutComponentModule = class CheckoutComponentModule {
};
CheckoutComponentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CheckoutOrchestratorModule,
            CheckoutOrderSummaryModule,
            CheckoutProgressModule,
            CheckoutProgressMobileTopModule,
            CheckoutProgressMobileBottomModule,
            DeliveryModeModule,
            PaymentMethodModule,
            PlaceOrderModule,
            PromotionsModule,
            ReviewSubmitModule,
            ShippingAddressModule,
        ],
    })
], CheckoutComponentModule);

let NotCheckoutAuthGuard = class NotCheckoutAuthGuard {
    constructor(routingService, authService, activeCartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    canActivate() {
        return this.authService.getUserToken().pipe(map((token) => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            else if (this.activeCartService.isGuestCart()) {
                this.routingService.go({ cxRoute: 'cart' });
                return false;
            }
            return !token.access_token;
        }));
    }
};
NotCheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: ActiveCartService }
];
NotCheckoutAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function NotCheckoutAuthGuard_Factory() { return new NotCheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(ActiveCartService)); }, token: NotCheckoutAuthGuard, providedIn: "root" });
NotCheckoutAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotCheckoutAuthGuard);

let SkipLinkConfig = class SkipLinkConfig {
};
SkipLinkConfig.ɵprov = ɵɵdefineInjectable({ factory: function SkipLinkConfig_Factory() { return ɵɵinject(Config); }, token: SkipLinkConfig, providedIn: "root" });
SkipLinkConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], SkipLinkConfig);
class SkipLink {
}
var SkipLinkScrollPosition;
(function (SkipLinkScrollPosition) {
    SkipLinkScrollPosition["BEFORE"] = "BEFORE";
    SkipLinkScrollPosition["AFTER"] = "AFTER";
})(SkipLinkScrollPosition || (SkipLinkScrollPosition = {}));

let SkipLinkService = class SkipLinkService {
    constructor(config, keyboardFocusService) {
        this.config = config;
        this.keyboardFocusService = keyboardFocusService;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    getSkipLinks() {
        return this.skipLinks$;
    }
    add(key, target) {
        const found = this.config.skipLinks.find((skipLink) => skipLink.key === key);
        if (found) {
            const existing = this.skipLinks$.value;
            existing.splice(this.getSkipLinkIndexInArray(key), 0, {
                target,
                i18nKey: found.i18nKey,
                position: found.position,
                key,
            });
            this.skipLinks$.next(existing);
        }
    }
    remove(key) {
        const found = this.config.skipLinks.find((skipLink) => skipLink.key === key);
        if (found) {
            let existing = this.skipLinks$.value;
            existing = existing.filter((skipLink) => skipLink.key !== key);
            this.skipLinks$.next(existing);
        }
    }
    scrollToTarget(skipLink) {
        const target = skipLink.target instanceof HTMLElement
            ? skipLink.target
            : skipLink.target.parentElement;
        // focus first focusable element in the
        const firstFocusable = this.keyboardFocusService.findFirstFocusable(target) || target;
        // we force a tabindex if not available, to ensure we can focus into the element
        const hasTabindex = firstFocusable.hasAttribute('tabindex');
        if (!hasTabindex) {
            firstFocusable.setAttribute('tabindex', '-1');
        }
        firstFocusable.focus();
        // drop the tmp tabindex
        if (!hasTabindex) {
            firstFocusable.removeAttribute('tabindex');
        }
    }
    getSkipLinkIndexInArray(key) {
        let index = this.config.skipLinks.findIndex((skipLink) => skipLink.key === key);
        while (index > 0) {
            index--;
            const previous = this.config.skipLinks[index];
            if (previous) {
                const existing = this.skipLinks$.value;
                const found = existing.findIndex((skipLink) => skipLink.key === previous.key);
                if (found > -1) {
                    return found + 1;
                }
            }
        }
        return 0;
    }
};
SkipLinkService.ctorParameters = () => [
    { type: SkipLinkConfig },
    { type: KeyboardFocusService }
];
SkipLinkService.ɵprov = ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(ɵɵinject(SkipLinkConfig), ɵɵinject(KeyboardFocusService)); }, token: SkipLinkService, providedIn: "root" });
SkipLinkService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SkipLinkService);

let SkipLinkComponent = class SkipLinkComponent {
    constructor(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService.getSkipLinks();
    }
    scrollToTarget(skipLink) {
        this.skipLinkService.scrollToTarget(skipLink);
    }
};
SkipLinkComponent.ctorParameters = () => [
    { type: SkipLinkService }
];
SkipLinkComponent = __decorate([
    Component({
        selector: 'cx-skip-link',
        template: "<div [cxFocus]=\"{ tab: true }\" *ngIf=\"skipLinks$ | async as links\">\n  <button *ngFor=\"let link of links\" (click)=\"scrollToTarget(link)\">\n    {{ 'skipLink.skipTo' | cxTranslate }}\n    {{ link.i18nKey | cxTranslate }}\n  </button>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SkipLinkComponent);

const defaultSkipLinkConfig = {
    skipLinks: [
        {
            key: 'cx-header',
            i18nKey: 'skipLink.labels.header',
        },
        {
            key: 'cx-main',
            i18nKey: 'skipLink.labels.main',
        },
        { key: 'cx-footer', i18nKey: 'skipLink.labels.footer' },
    ],
};

let SkipLinkDirective = class SkipLinkDirective {
    constructor(elementRef, skipLinkService) {
        this.elementRef = elementRef;
        this.skipLinkService = skipLinkService;
    }
    ngOnInit() {
        this.skipLinkService.add(this.cxSkipLink, this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.skipLinkService.remove(this.cxSkipLink);
    }
};
SkipLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SkipLinkService }
];
__decorate([
    Input()
], SkipLinkDirective.prototype, "cxSkipLink", void 0);
SkipLinkDirective = __decorate([
    Directive({
        selector: '[cxSkipLink]',
    })
], SkipLinkDirective);

let SkipLinkModule = class SkipLinkModule {
};
SkipLinkModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            ConfigModule.withConfig(defaultSkipLinkConfig),
            KeyboardFocusModule,
        ],
        declarations: [SkipLinkComponent, SkipLinkDirective],
        exports: [SkipLinkDirective],
        entryComponents: [SkipLinkComponent],
        providers: [
            provideDefaultConfig(defaultSkipLinkConfig),
            {
                provide: APP_INITIALIZER,
                useFactory: skipLinkFactory,
                deps: [ComponentFactoryResolver, OutletService],
                multi: true,
            },
        ],
    })
], SkipLinkModule);
/**
 * Adds the skip link component before the cx-storefront.
 */
function skipLinkFactory(componentFactoryResolver, outletService) {
    const isReady = () => {
        const factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
    };
    return isReady;
}

let HamburgerMenuService = class HamburgerMenuService {
    constructor(router) {
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe(() => {
            this.toggle(true);
        });
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    toggle(forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    }
};
HamburgerMenuService.ctorParameters = () => [
    { type: Router }
];
HamburgerMenuService.ɵprov = ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(ɵɵinject(Router)); }, token: HamburgerMenuService, providedIn: "root" });
HamburgerMenuService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], HamburgerMenuService);

let HamburgerMenuComponent = class HamburgerMenuComponent {
    constructor(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    toggle() {
        this.hamburgerMenuService.toggle();
    }
    get isExpanded() {
        return this.hamburgerMenuService.isExpanded;
    }
};
HamburgerMenuComponent.ctorParameters = () => [
    { type: HamburgerMenuService }
];
HamburgerMenuComponent = __decorate([
    Component({
        selector: 'cx-hamburger-menu',
        template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], HamburgerMenuComponent);

let HamburgerMenuModule = class HamburgerMenuModule {
};
HamburgerMenuModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    HamburgerMenuComponent: {
                        component: HamburgerMenuComponent,
                    },
                },
            }),
        ],
        declarations: [HamburgerMenuComponent],
        exports: [HamburgerMenuComponent],
        entryComponents: [HamburgerMenuComponent],
    })
], HamburgerMenuModule);

let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [OutletRefModule, LaunchDialogModule.forRoot()],
        exports: [OutletRefModule],
    })
], LayoutModule);

/**
 * The `PageSlotComponent` is used to render the CMS page slot and it's components.
 *
 * The Page slot host element will be supplemented with css classes so that the layout
 * can be fully controlled by customers:
 * - The page slot _position_ is added as a css class by default.
 * - The `cx-pending` is added for as long as the slot hasn't start loading.
 * - The `page-fold` style class is added for the page slot which is configured as the page fold.
 */
let PageSlotComponent = class PageSlotComponent {
    constructor(cmsService, dynamicAttributeService, renderer, elementRef, cmsComponentsService, cd) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cmsComponentsService = cmsComponentsService;
        this.cd = cd;
        /**
         * Indicates that the page slot is the last page slot above the fold.
         */
        this.isPageFold = false;
        /**
         * Indicates that the components of the page slot haven't been loaded as long
         * as the isPending state is true.
         */
        this.isPending = true;
        /**
         * Indicates that the page slot doesn't contain any components. This is no
         * longer used in spartacus, but kept for backwards compatibility.
         */
        this.hasComponents = false;
        this.position$ = new BehaviorSubject(undefined);
        this.slot$ = this.position$.pipe(switchMap((position) => this.cmsService.getContentSlot(position)), distinctUntilChanged(this.isDistinct));
        /** Observes the components for the given page slot. */
        this.components$ = this.slot$.pipe(map((slot) => { var _a; return (_a = slot === null || slot === void 0 ? void 0 : slot.components) !== null && _a !== void 0 ? _a : []; }));
        this.subscription = new Subscription();
        /** Keeps track of the pending components that must be loaded for the page slot */
        this.pendingComponentCount = 0;
    }
    /**
     * The position represents the unique key for a page slot on a single page, but can
     * be reused cross pages.
     *
     * The position is used to find the CMS components for the page slot. It is also
     * added as an additional CSS class so that layoutt can be applied.
     */
    set position(value) {
        this.position$.next(value);
    }
    get position() {
        return this.position$.value;
    }
    ngOnInit() {
        this.subscription.add(this.slot$.pipe(tap((slot) => this.decorate(slot))).subscribe((value) => {
            this.components = (value === null || value === void 0 ? void 0 : value.components) || [];
            this.cd.markForCheck();
        }));
    }
    decorate(slot) {
        var _a, _b;
        let cls = this.class || '';
        if (this.lastPosition && cls.indexOf(this.lastPosition) > -1) {
            cls = cls.replace(this.lastPosition, '');
        }
        if (this.position$.value) {
            cls += ` ${this.position$.value}`;
            this.lastPosition = this.position$.value;
        }
        // host bindings
        this.pending = ((_a = slot === null || slot === void 0 ? void 0 : slot.components) === null || _a === void 0 ? void 0 : _a.length) || 0;
        this.hasComponents = ((_b = slot === null || slot === void 0 ? void 0 : slot.components) === null || _b === void 0 ? void 0 : _b.length) > 0;
        if (cls && cls !== this.class) {
            this.class = cls;
        }
        this.addSmartEditSlotClass(slot);
    }
    /**
     * Sets the pending count for the page slot components. Once all pending components are
     * loaded, the `isPending` flag is updated, so that the associated class can be updated
     */
    set pending(count) {
        this.pendingComponentCount = count;
        this.isPending = this.pendingComponentCount > 0;
    }
    get pending() {
        return this.pendingComponentCount;
    }
    /*
     * Is triggered when a component is added to the view. This is used to
     * update the pending count
     */
    isLoaded(loadState) {
        if (loadState) {
            this.pending--;
            this.cd.markForCheck();
        }
    }
    /**
     * The `DeferLoadingStrategy` indicates whether the component should be
     * rendered instantly or whether it should be deferred.
     */
    getComponentDeferOptions(componentType) {
        const deferLoading = this.cmsComponentsService.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    isDistinct(old, current) {
        var _a;
        return (current.components &&
            ((_a = old.components) === null || _a === void 0 ? void 0 : _a.length) === current.components.length &&
            !old.components.find((el, index) => el.uid !== current.components[index].uid));
    }
    addSmartEditSlotClass(slot) {
        if (slot) {
            this.dynamicAttributeService.addDynamicAttributes(this.elementRef.nativeElement, this.renderer, { slotData: slot });
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsComponentsService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], PageSlotComponent.prototype, "position", null);
__decorate([
    Input(), HostBinding()
], PageSlotComponent.prototype, "class", void 0);
__decorate([
    HostBinding('class.page-fold'), Input()
], PageSlotComponent.prototype, "isPageFold", void 0);
__decorate([
    HostBinding('class.cx-pending')
], PageSlotComponent.prototype, "isPending", void 0);
__decorate([
    HostBinding('class.has-components'), Input()
], PageSlotComponent.prototype, "hasComponents", void 0);
PageSlotComponent = __decorate([
    Component({
        selector: 'cx-page-slot,[cx-page-slot]',
        template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-template\n    *ngFor=\"let component of components\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PageSlotComponent);

let PageSlotModule = class PageSlotModule {
};
PageSlotModule = __decorate([
    NgModule({
        imports: [CommonModule, OutletModule, PageComponentModule],
        providers: [],
        declarations: [PageSlotComponent],
        exports: [PageSlotComponent],
    })
], PageSlotModule);

let PageLayoutService = class PageLayoutService {
    constructor(cms, config, breakpointService, handlers) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        this.handlers = handlers;
        // Prints warn messages for missing layout configs.
        // The warnings are only printed once per config
        // to not pollute the console log.
        this.warnLogMessages = {};
        this.logSlots = {};
    }
    getSlots(section) {
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map(([page, breakpoint]) => {
            const pageTemplate = page.template;
            const slots = this.resolveSlots(page, section, breakpoint);
            return { slots, pageTemplate, breakpoint };
        }), switchMap(({ slots, pageTemplate, breakpoint }) => {
            let result = of(slots);
            for (const handler of this.handlers || []) {
                result = handler.handle(result, pageTemplate, section, breakpoint);
            }
            return result;
        }), distinctUntilChanged((a, b) => {
            if (a.length !== b.length) {
                return false;
            }
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        }));
    }
    /**
     * Returns an observable with the last page slot above-the-fold
     * for the given pageTemplate / breakpoint.
     *
     * The page fold is configurable in the `LayoutConfig` for each page layout.
     */
    getPageFoldSlot(pageTemplate) {
        return this.breakpointService.breakpoint$.pipe(map((breakpoint) => {
            if (!this.config.layoutSlots) {
                // no layout config available
                return null;
            }
            const pageTemplateConfig = this.config.layoutSlots[pageTemplate];
            const config = this.getResponsiveSlotConfig(pageTemplateConfig, 'pageFold', breakpoint);
            return config ? config.pageFold : null;
        }));
    }
    resolveSlots(page, section, breakpoint) {
        const config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            const pageSlots = Object.keys(page.slots);
            return config.slots.filter((slot) => pageSlots.includes(slot));
        }
        else if (!section) {
            this.logMissingLayoutConfig(page);
            return Object.keys(page.slots);
        }
        else {
            this.logMissingLayoutConfig(page, section);
            return [];
        }
    }
    get page$() {
        return this.cms.getCurrentPage().pipe(filter((page) => !!page));
    }
    get templateName$() {
        return this.page$.pipe(filter((page) => !!page.template), map((page) => page.template));
    }
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     */
    getSlotConfig(templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig(pageTemplateConfig, configAttribute, breakpoint);
        }
    }
    getSlotConfigForSection(templateUid, configAttribute, section, breakpoint) {
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        const sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        const responsiveConfig = this.getResponsiveSlotConfig(sectionConfig, configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return this.config.layoutSlots[section];
        }
    }
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
    getResponsiveSlotConfig(layoutSlotConfig, configAttribute, breakpoint) {
        let slotConfig = layoutSlotConfig;
        // fallback to default slot config
        if (!layoutSlotConfig || !breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return layoutSlotConfig[breakpoint];
        }
        // find closest config
        const all = this.breakpointService.breakpoints;
        for (const br of all.splice(0, all.indexOf(breakpoint))) {
            if (layoutSlotConfig[br] &&
                layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                slotConfig = layoutSlotConfig[br];
            }
        }
        return slotConfig;
    }
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     */
    logMissingLayoutConfig(page, section) {
        if (!isDevMode()) {
            return;
        }
        if (!this.logSlots[page.template]) {
            // the info log is not printed in production
            // tslint:disable-next-line: no-console
            console.info(`Available CMS page slots: '${Object.keys(page.slots).join(`','`)}'`);
            this.logSlots[page.template] = true;
        }
        const cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn(`No layout config found for ${cacheKey}, you can configure a 'LayoutConfig' to control the rendering of page slots.`);
            this.warnLogMessages[cacheKey] = true;
        }
    }
};
PageLayoutService.ctorParameters = () => [
    { type: CmsService },
    { type: LayoutConfig },
    { type: BreakpointService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
];
PageLayoutService.ɵprov = ɵɵdefineInjectable({ factory: function PageLayoutService_Factory() { return new PageLayoutService(ɵɵinject(CmsService), ɵɵinject(LayoutConfig), ɵɵinject(BreakpointService), ɵɵinject(PAGE_LAYOUT_HANDLER, 8)); }, token: PageLayoutService, providedIn: "root" });
PageLayoutService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(3, Optional()),
    __param(3, Inject(PAGE_LAYOUT_HANDLER))
], PageLayoutService);

let PageLayoutComponent = class PageLayoutComponent {
    constructor(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap((section) => (section ? of(section) : this.templateName$)), tap((name) => {
            this.styleClass = name;
        }));
        this.slots$ = this.section$.pipe(switchMap((section) => this.pageLayoutService.getSlots(section)));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap((templateName) => this.pageLayoutService.getPageFoldSlot(templateName)), distinctUntilChanged());
    }
    set section(value) {
        this.section$.next(value);
    }
    set styleClass(cls) {
        if (this.currentClass) {
            this.renderer.removeClass(this.el.nativeElement, this.currentClass);
        }
        this.renderer.addClass(this.el.nativeElement, cls);
        this.currentClass = cls;
    }
};
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
__decorate([
    Input()
], PageLayoutComponent.prototype, "section", null);
PageLayoutComponent = __decorate([
    Component({
        selector: 'cx-page-layout',
        template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PageLayoutComponent);

let PageLayoutModule = class PageLayoutModule {
};
PageLayoutModule = __decorate([
    NgModule({
        imports: [CommonModule, OutletModule, PageSlotModule],
        declarations: [PageLayoutComponent],
        exports: [PageLayoutComponent],
    })
], PageLayoutModule);

let PWAModuleConfig = class PWAModuleConfig {
};
PWAModuleConfig.ɵprov = ɵɵdefineInjectable({ factory: function PWAModuleConfig_Factory() { return ɵɵinject(Config); }, token: PWAModuleConfig, providedIn: "root" });
PWAModuleConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], PWAModuleConfig);
const defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};

let AddToHomeScreenService = class AddToHomeScreenService {
    constructor(config, globalMessageService, winRef) {
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.winRef = winRef;
        this.canPrompt = new BehaviorSubject(false);
        this.canPrompt$ = this.canPrompt.asObservable();
        if (this.config.pwa.addToHomeScreen) {
            this.init();
        }
    }
    init() {
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', (event) => {
                event.preventDefault();
                this.deferredEvent = event;
                this.enableAddToHomeScreen();
            });
            this.winRef.nativeWindow.addEventListener('appinstalled', () => {
                this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.disableAddToHomeScreen();
                this.deferredEvent = null;
            });
        }
    }
    enableAddToHomeScreen() {
        this.canPrompt.next(true);
    }
    disableAddToHomeScreen() {
        this.canPrompt.next(false);
    }
    firePrompt() {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    }
};
AddToHomeScreenService.ctorParameters = () => [
    { type: PWAModuleConfig },
    { type: GlobalMessageService },
    { type: WindowRef }
];
AddToHomeScreenService.ɵprov = ɵɵdefineInjectable({ factory: function AddToHomeScreenService_Factory() { return new AddToHomeScreenService(ɵɵinject(PWAModuleConfig), ɵɵinject(GlobalMessageService), ɵɵinject(WindowRef)); }, token: AddToHomeScreenService, providedIn: "root" });
AddToHomeScreenService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AddToHomeScreenService);

class AddToHomeScreenComponent {
    constructor(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    ngOnInit() {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    }
    prompt() {
        this.addToHomeScreenService.firePrompt();
    }
}

let AddToHomeScreenBannerComponent = class AddToHomeScreenBannerComponent extends AddToHomeScreenComponent {
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
};
AddToHomeScreenBannerComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
AddToHomeScreenBannerComponent = __decorate([
    Component({
        selector: 'cx-add-to-home-screen-banner',
        template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
    })
], AddToHomeScreenBannerComponent);

let AddToHomeScreenBtnComponent = class AddToHomeScreenBtnComponent extends AddToHomeScreenComponent {
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
};
AddToHomeScreenBtnComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
AddToHomeScreenBtnComponent = __decorate([
    Component({
        selector: 'cx-add-to-home-screen-btn',
        template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"canPrompt$ | async\"></ng-content>\n</span>\n"
    })
], AddToHomeScreenBtnComponent);

function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (!isDevMode() && pwaConfig.pwa.enabled) || false };
}
function pwaFactory(addToHomeScreenService) {
    const result = () => addToHomeScreenService;
    return result;
}
let PwaModule = class PwaModule {
};
PwaModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ServiceWorkerModule.register('/ngsw-worker.js'),
            I18nModule,
        ],
        providers: [
            provideDefaultConfig(defaultPWAModuleConfig),
            {
                provide: SwRegistrationOptions,
                useFactory: pwaConfigurationFactory,
                deps: [Config],
            },
            {
                provide: APP_INITIALIZER,
                useFactory: pwaFactory,
                deps: [AddToHomeScreenService],
                multi: true,
            },
        ],
        declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
        exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
    })
], PwaModule);

const htmlLangProvider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: setHtmlLangAttribute,
    deps: [WindowRef, LanguageService],
};
/**
 * Sets active language in <html lang="">
 */
function setHtmlLangAttribute(winRef, languageService) {
    const result = () => {
        languageService.getActive().subscribe((lang) => {
            winRef.document.documentElement.lang = lang.replace(/_/g, '-');
        });
    };
    return result;
}

let SeoMetaService = class SeoMetaService {
    constructor(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    init() {
        this.subscription = this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((meta) => (this.meta = meta));
    }
    set meta(meta) {
        this.title = meta.title;
        this.description = meta.description;
        this.image = meta.image;
        this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
    }
    set title(title) {
        this.ngTitle.setTitle(title || '');
    }
    set description(value) {
        this.addTag({ name: 'description', content: value });
    }
    set image(imageUrl) {
        if (imageUrl) {
            this.addTag({ name: 'og:image', content: imageUrl });
        }
    }
    set robots(value) {
        if (value) {
            this.addTag({ name: 'robots', content: value.join(', ') });
        }
    }
    addTag(meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
SeoMetaService.ctorParameters = () => [
    { type: Title },
    { type: Meta },
    { type: PageMetaService }
];
SeoMetaService.ɵprov = ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(ɵɵinject(Title), ɵɵinject(Meta), ɵɵinject(PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
SeoMetaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SeoMetaService);

let JsonLdScriptFactory = class JsonLdScriptFactory {
    constructor(platformId, winRef, rendererFactory, sanitizer) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
    }
    build(schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = this.sanitize(schema);
        }
    }
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     */
    isJsonLdRequired() {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    }
    createJsonLdScriptElement() {
        const id = 'json-ld';
        let scriptElement = (this.winRef.document.getElementById(id));
        if (!scriptElement) {
            const renderer = this.rendererFactory.createRenderer(null, null);
            const script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    }
    /**
     * Sanitizes the given json-ld schema by leveraging the angular HTML sanitizer.
     *
     * The given schema is not trusted, as malicious code could be injected (XSS)
     * into the json-ld script.
     */
    sanitize(schema) {
        return JSON.stringify(schema, (_key, value) => typeof value === 'string'
            ? this.sanitizer.sanitize(SecurityContext.HTML, value)
            : value);
    }
};
JsonLdScriptFactory.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: RendererFactory2 },
    { type: DomSanitizer }
];
JsonLdScriptFactory.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(ɵɵinject(PLATFORM_ID), ɵɵinject(WindowRef), ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer)); }, token: JsonLdScriptFactory, providedIn: "root" });
JsonLdScriptFactory = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(PLATFORM_ID))
], JsonLdScriptFactory);

/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
let JsonLdDirective = class JsonLdDirective {
    constructor(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    set cxJsonLd(schema) {
        this.writeJsonLd(schema);
    }
    writeJsonLd(schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            const sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            const html = `<script type="application/ld+json">${sanitizedSchema}</script>`;
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    }
};
JsonLdDirective.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: DomSanitizer }
];
__decorate([
    Input()
], JsonLdDirective.prototype, "cxJsonLd", null);
__decorate([
    HostBinding('innerHTML')
], JsonLdDirective.prototype, "jsonLD", void 0);
JsonLdDirective = __decorate([
    Directive({
        selector: '[cxJsonLd]',
    })
], JsonLdDirective);

/**
 * Injection token to extend schema builders for adding structural data (json-ld).
 *
 * Some builders (i.e. `JSONLD_PRODUCT_BUILDER`) might have additional
 * lowever level builder to further extend the schema.
 */
const SCHEMA_BUILDER = new InjectionToken('SchemaBuilderToken');
/**
 * Injection token to add specific json-ld builders for product related schema's.
 * See see https://schema.org/product for more information.
 */
const JSONLD_PRODUCT_BUILDER = new InjectionToken('JsonLdProductBuilderToken');

let StructuredDataFactory = class StructuredDataFactory {
    constructor(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
    }
    build() {
        this.subscription = this.collectSchemas().subscribe((schema) => {
            this.scriptBuilder.build(schema);
        });
    }
    collectSchemas() {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map((builder) => builder.build())).pipe();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
StructuredDataFactory.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
];
StructuredDataFactory.ɵprov = ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(ɵɵinject(JsonLdScriptFactory), ɵɵinject(SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
StructuredDataFactory = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional()),
    __param(1, Inject(SCHEMA_BUILDER))
], StructuredDataFactory);

/**
 * Factory to build the structure data
 * without any interaction with the UI.
 */
function getStructuredDataFactory(injector) {
    const result = () => {
        const factory = injector.get(StructuredDataFactory);
        factory.build();
    };
    return result;
}
let StructuredDataModule = class StructuredDataModule {
};
StructuredDataModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [JsonLdDirective],
        exports: [JsonLdDirective],
        providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: getStructuredDataFactory,
                deps: [Injector],
                multi: true,
            },
        ],
    })
], StructuredDataModule);

function initSeoService(injector) {
    const result = () => {
        const service = injector.get(SeoMetaService);
        service.init();
    };
    return result;
}
let SeoModule = class SeoModule {
};
SeoModule = __decorate([
    NgModule({
        imports: [StructuredDataModule],
        providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: initSeoService,
                deps: [Injector],
                multi: true,
            },
            htmlLangProvider,
        ],
    })
], SeoModule);

let StorefrontComponent = class StorefrontComponent {
    constructor(hamburgerMenuService, routingService, elementRef, keyboardFocusService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.elementRef = elementRef;
        this.keyboardFocusService = keyboardFocusService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
        // required by esc focus
        this.tabindex = '0';
        this.keyboardFocusConfig = {
            focusOnEscape: true,
            focusOnDoubleEscape: true,
        };
    }
    handleEscape(event) {
        this.keyboardFocusService.handleEscape(this.elementRef.nativeElement, this.keyboardFocusConfig, event);
    }
    ngOnInit() {
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe((val) => {
            this.startNavigating = val === true;
            this.stopNavigating = val === false;
        });
    }
    collapseMenuIfClickOutside(event) {
        if (event.target.className.includes('is-expanded')) {
            this.collapseMenu();
        }
    }
    collapseMenu() {
        this.hamburgerMenuService.toggle(true);
    }
    ngOnDestroy() {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    }
};
StorefrontComponent.ctorParameters = () => [
    { type: HamburgerMenuService },
    { type: RoutingService },
    { type: ElementRef },
    { type: KeyboardFocusService }
];
__decorate([
    HostBinding('class.start-navigating')
], StorefrontComponent.prototype, "startNavigating", void 0);
__decorate([
    HostBinding('class.stop-navigating')
], StorefrontComponent.prototype, "stopNavigating", void 0);
__decorate([
    HostBinding('tabindex')
], StorefrontComponent.prototype, "tabindex", void 0);
__decorate([
    ViewChild(SkipLinkComponent)
], StorefrontComponent.prototype, "child", void 0);
__decorate([
    HostListener('keydown.escape', ['$event'])
], StorefrontComponent.prototype, "handleEscape", null);
StorefrontComponent = __decorate([
    Component({
        selector: 'cx-storefront',
        template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      cxSkipLink=\"cx-header\"\n      [cxFocus]=\"{ disableMouseFocus: true }\"\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <main cxSkipLink=\"cx-main\" [cxFocus]=\"{ disableMouseFocus: true }\">\n    <router-outlet></router-outlet>\n  </main>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer cxSkipLink=\"cx-footer\" [cxFocus]=\"{ disableMouseFocus: true }\">\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
    })
], StorefrontComponent);

let MainModule = class MainModule {
};
MainModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            GlobalMessageComponentModule,
            OutletModule,
            OutletRefModule,
            PwaModule,
            PageLayoutModule,
            SeoModule,
            PageSlotModule,
            AnonymousConsentsDialogModule,
            FeaturesConfigModule,
            SkipLinkModule,
            KeyboardFocusModule,
        ],
        declarations: [StorefrontComponent],
        exports: [StorefrontComponent],
    })
], MainModule);

let CmsGuardsService = class CmsGuardsService {
    constructor(cmsComponentsService, injector) {
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
    }
    cmsPageCanActivate(componentTypes, route, state) {
        const guards = this.cmsComponentsService.getGuards(componentTypes);
        if (guards.length) {
            const canActivateObservables = guards.map((guardClass) => {
                const guard = this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            });
            return concat(...canActivateObservables).pipe(skipWhile((canActivate) => canActivate === true), endWith(true), first());
        }
        else {
            return of(true);
        }
    }
};
CmsGuardsService.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: Injector }
];
CmsGuardsService.ɵprov = ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(ɵɵinject(CmsComponentsService), ɵɵinject(INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
CmsGuardsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsGuardsService);
function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return from(Promise.resolve(value));
    }
    return of(value);
}
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
function isFunction(v) {
    return typeof v === 'function';
}

let CmsI18nService = class CmsI18nService {
    constructor(cmsComponentsService, translation, translationChunk) {
        this.cmsComponentsService = cmsComponentsService;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    loadForComponents(componentTypes) {
        const i18nKeys = this.cmsComponentsService.getI18nKeys(componentTypes);
        const i18nChunks = new Set();
        for (const key of i18nKeys) {
            i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    }
};
CmsI18nService.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: TranslationService },
    { type: TranslationChunkService }
];
CmsI18nService.ɵprov = ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(ɵɵinject(CmsComponentsService), ɵɵinject(TranslationService), ɵɵinject(TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
CmsI18nService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsI18nService);

// This service should be exposed in public API only after the refactor planned in https://github.com/SAP/spartacus/issues/7070
let CmsRoutesImplService = class CmsRoutesImplService {
    constructor(router, cmsComponentsService) {
        this.router = router;
        this.cmsComponentsService = cmsComponentsService;
    }
    cmsRouteExists(url) {
        const isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        const routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find((route) => route.data && route.data.cxCmsRouteContext && route.path === routePath));
    }
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
    handleCmsRoutesInGuard(pageContext, componentTypes, currentUrl, currentPageLabel) {
        if (this.cmsRouteExists(currentPageLabel)) {
            return true;
        }
        const componentRoutes = this.cmsComponentsService.getChildRoutes(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    updateRouting(pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            const newRoute = {
                path: pageLabel.substr(1),
                component: PageLayoutComponent,
                children: routes,
                data: {
                    cxCmsRouteContext: {
                        type: pageContext.type,
                        id: pageLabel,
                    },
                },
            };
            this.router.resetConfig([newRoute, ...this.router.config]);
            return true;
        }
        return false;
    }
};
CmsRoutesImplService.ctorParameters = () => [
    { type: Router },
    { type: CmsComponentsService }
];
CmsRoutesImplService.ɵprov = ɵɵdefineInjectable({ factory: function CmsRoutesImplService_Factory() { return new CmsRoutesImplService(ɵɵinject(Router), ɵɵinject(CmsComponentsService)); }, token: CmsRoutesImplService, providedIn: "root" });
CmsRoutesImplService = __decorate([
    Injectable({ providedIn: 'root' })
], CmsRoutesImplService);

// Public injection token for the private implementation of the service `CmsRoutesImplService`.
// After #7070, this class should be replaced with a real implementation.
let CmsRoutesService = class CmsRoutesService {
};
CmsRoutesService.ɵprov = ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return ɵɵinject(CmsRoutesImplService); }, token: CmsRoutesService, providedIn: "root" });
CmsRoutesService = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: CmsRoutesImplService,
    })
], CmsRoutesService);

/**
 * Helper service for `CmsPageGuard`
 */
let CmsPageGuardService = class CmsPageGuardService {
    constructor(semanticPathService, cmsService, cmsRoutes, cmsI18n, cmsGuards, cmsComponentsService) {
        this.semanticPathService = semanticPathService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.cmsComponentsService = cmsComponentsService;
    }
    /**
     * Takes CMS components types in the current CMS page, triggers (configurable) side effects and returns a boolean - whether the route can be activated.
     *
     * Based on `cmsComponents` config for the components in the page:
     * - Evaluates components' guards; if one of them emits false or UrlTree - the route cannot be activated or redirects to the given UrlTree, respectively.
     * - If all components' guards emitted true, then the route can be activated
     * - Then we trigger loading of configured i18n chunks in parallel
     * - And we register the configured children routes of cms components
     *
     * @param pageContext current cms page context
     * @param pageData cms page data
     * @param route activated route snapshot
     * @param state router state snapshot
     *
     * @returns boolean observable - whether the route can be activated
     */
    canActivatePage(pageContext, pageData, route, state) {
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((componentTypes) => this.cmsComponentsService.determineMappings(componentTypes)), switchMap((componentTypes) => this.cmsGuards
            .cmsPageCanActivate(componentTypes, route, state)
            .pipe(withLatestFrom(of(componentTypes)))), tap(([canActivate, componentTypes]) => {
            if (canActivate === true) {
                this.cmsI18n.loadForComponents(componentTypes);
            }
        }), map(([canActivate, componentTypes]) => {
            var _a;
            const pageLabel = pageData.label || pageContext.id; // for content pages the page label returned from backend can be different than ID initially assumed from route
            if (canActivate === true && !((_a = route === null || route === void 0 ? void 0 : route.data) === null || _a === void 0 ? void 0 : _a.cxCmsRouteContext)) {
                return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        }));
    }
    /**
     * Activates the "NOT FOUND" cms page.
     *
     * It loads cms page data for the "NOT FOUND" page and puts it in the state of the the requested page label.
     * Then it processes its CMS components with the method `canActivatePage()` of this service. For more, see its docs.
     */
    canActivateNotFoundPage(pageContext, route, state) {
        const notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap((notFoundPage) => {
            if (notFoundPage) {
                return this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap((notFoundIndex) => {
                    this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap((notFoundIndex) => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter((index) => index === notFoundIndex))), switchMap(() => this.canActivatePage(pageContext, notFoundPage, route, state)));
            }
            return of(false);
        }));
    }
};
CmsPageGuardService.ctorParameters = () => [
    { type: SemanticPathService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService },
    { type: CmsComponentsService }
];
CmsPageGuardService.ɵprov = ɵɵdefineInjectable({ factory: function CmsPageGuardService_Factory() { return new CmsPageGuardService(ɵɵinject(SemanticPathService), ɵɵinject(CmsService), ɵɵinject(CmsRoutesService), ɵɵinject(CmsI18nService), ɵɵinject(CmsGuardsService), ɵɵinject(CmsComponentsService)); }, token: CmsPageGuardService, providedIn: "root" });
CmsPageGuardService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageGuardService);

let CmsPageGuard = class CmsPageGuard {
    constructor(routingService, cmsService, protectedRoutesGuard, service, routingConfig) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.protectedRoutesGuard = protectedRoutesGuard;
        this.service = service;
        this.routingConfig = routingConfig;
    }
    /**
     * Tries to load the CMS page data for the anticipated route and returns:
     * - `true` - if it can be activated
     * - `false` - if it cannot be activated
     * - `UrlTree` - if user should be redirected to a given `UrlTree`
     *
     * If the route can be activated, it fires additional calculations on the CMS components present on this CMS page,
     * based on their configuration (`cmsComponents` config).
     *
     * For more, see docs of the `CmsPageGuardService.canActivatePage`.
     */
    canActivate(route, state) {
        return this.protectedRoutesGuard.canActivate(route).pipe(switchMap((canActivate) => canActivate
            ? this.routingService.getNextPageContext().pipe(switchMap((pageContext) => this.cmsService.getPage(pageContext, this.shouldReload()).pipe(first(), switchMap((pageData) => pageData
                ? this.service.canActivatePage(pageContext, pageData, route, state)
                : this.service.canActivateNotFoundPage(pageContext, route, state)))))
            : of(false)));
    }
    /**
     * Returns whether we should reload the CMS page data, even when it was loaded before.
     */
    shouldReload() {
        return this.routingConfig.getLoadStrategy() !== "once" /* ONCE */;
    }
};
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: ProtectedRoutesGuard },
    { type: CmsPageGuardService },
    { type: RoutingConfigService }
];
CmsPageGuard.ɵprov = ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(ɵɵinject(RoutingService), ɵɵinject(CmsService), ɵɵinject(ProtectedRoutesGuard), ɵɵinject(CmsPageGuardService), ɵɵinject(RoutingConfigService)); }, token: CmsPageGuard, providedIn: "root" });
CmsPageGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageGuard);

const cmsRoute = {
    path: '**',
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
};
function addCmsRoute(injector) {
    const result = () => {
        const router = injector.get(Router);
        router.config.push(cmsRoute);
    };
    return result;
}

const ɵ0 = addCmsRoute;
let CmsRouteModule = class CmsRouteModule {
};
CmsRouteModule = __decorate([
    NgModule({
        providers: [
            {
                provide: APP_INITIALIZER,
                multi: true,
                deps: [Injector],
                useFactory: ɵ0,
            },
        ],
    })
], CmsRouteModule);

const defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    notFound: { paths: ['not-found'] },
    cart: { paths: ['cart'] },
    // semantic links for login related pages
    login: { paths: ['login'], protected: false },
    register: { paths: ['login/register'], protected: false },
    forgotPassword: { paths: ['login/forgot-password'], protected: false },
    resetPassword: { paths: ['login/pw/change'], protected: false },
    logout: { paths: ['logout'] },
    checkoutLogin: { paths: ['checkout-login'] },
    checkout: { paths: ['checkout'] },
    checkoutShippingAddress: { paths: ['checkout/shipping-address'] },
    checkoutDeliveryMode: { paths: ['checkout/delivery-mode'] },
    checkoutPaymentDetails: { paths: ['checkout/payment-details'] },
    checkoutReviewOrder: { paths: ['checkout/review-order'] },
    orderConfirmation: { paths: ['order-confirmation'] },
    // plp routes
    search: { paths: ['search/:query'] },
    category: {
        paths: ['category/:categoryCode'],
        paramsMapping: { categoryCode: 'code' },
    },
    brand: { paths: ['Brands/:brandName/c/:brandCode'] },
    // pdp routes
    product: {
        paths: ['product/:productCode/:name'],
        paramsMapping: { productCode: 'code' },
    },
    termsAndConditions: { paths: ['terms-and-conditions'] },
    orders: {
        paths: ['my-account/orders'],
    },
    orderDetails: {
        paths: ['my-account/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderGuest: {
        paths: ['guest/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturn: {
        paths: ['my-account/order/return/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderReturnConfirmation: {
        paths: ['my-account/order/return/confirmation/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancel: {
        paths: ['my-account/order/cancel/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orderCancelConfirmation: {
        paths: ['my-account/order/cancel/confirmation/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    returnRequestDetails: {
        paths: ['my-account/return-request/:returnCode'],
        paramsMapping: { returnCode: 'rma' },
    },
    coupons: { paths: ['my-account/coupons'] },
    couponClaim: {
        paths: ['my-account/coupon/claim/:couponCode'],
        paramsMapping: { couponCode: 'code' },
    },
};
const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};

var RoutingModule_1;
let RoutingModule = RoutingModule_1 = class RoutingModule {
    static forRoot() {
        return {
            ngModule: RoutingModule_1,
            providers: [provideDefaultConfig(defaultRoutingConfig)],
        };
    }
};
RoutingModule = RoutingModule_1 = __decorate([
    NgModule({
        imports: [RoutingModule$1.forRoot(), CmsRouteModule],
    })
], RoutingModule);

/**
 * Matches the pattern '[ ** / ] marker / :paramName'
 *
 * @param marker phrase that indicates the start of the match
 * @param paramName name of the parameter present after the marker
 * @param precedingParamName name of the parameter for every preceding url segment
 *        i.e. `param` will result in `param0`, `param1`, ...
 */
function getSuffixUrlMatcher({ marker, paramName, precedingParamName, }) {
    precedingParamName = precedingParamName || 'param';
    const matcher = function suffixUrlMatcher(segments) {
        const markerIndex = findLastIndex(segments, ({ path }) => path === marker);
        const isMarkerLastSegment = markerIndex === segments.length - 1;
        if (markerIndex === -1 || isMarkerLastSegment) {
            return null;
        }
        const paramIndex = markerIndex + 1;
        const posParams = {
            [paramName]: segments[paramIndex],
        };
        for (let i = 0; i < markerIndex; i++) {
            posParams[`${precedingParamName}${i}`] = segments[i];
        }
        return { consumed: segments.slice(0, paramIndex + 1), posParams };
    };
    if (isDevMode()) {
        matcher['_suffixRouteConfig'] = { marker, paramName, precedingParamName }; // property added for easier debugging of routes
    }
    return matcher;
}
function findLastIndex(elements, predicate) {
    for (let index = elements.length - 1; index >= 0; index--) {
        if (predicate(elements[index])) {
            return index;
        }
    }
    return -1;
}

let BreadcrumbSchemaBuilder = class BreadcrumbSchemaBuilder {
    constructor(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    build() {
        return this.pageMetaService
            .getMeta()
            .pipe(map((pageMeta) => this.collect(pageMeta)));
    }
    collect(pageMeta) {
        if (!(pageMeta === null || pageMeta === void 0 ? void 0 : pageMeta.breadcrumbs)) {
            return;
        }
        const crumbs = pageMeta.breadcrumbs.map((crumb, index) => {
            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@id': crumb.link,
                    name: crumb.label,
                },
            };
        });
        if (pageMeta.title) {
            crumbs.push({
                '@type': 'ListItem',
                position: crumbs.length + 1,
                item: {
                    '@id': pageMeta.title,
                    name: pageMeta.title,
                },
            });
        }
        return {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs,
        };
    }
};
BreadcrumbSchemaBuilder.ctorParameters = () => [
    { type: PageMetaService }
];
BreadcrumbSchemaBuilder.ɵprov = ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(ɵɵinject(PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
BreadcrumbSchemaBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BreadcrumbSchemaBuilder);

/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
let JsonLdBaseProductBuilder = class JsonLdBaseProductBuilder {
    build(product) {
        return of(Object.assign(Object.assign(Object.assign({}, this.getProductBase(product)), this.getProductBrand(product)), this.getProductImage(product)));
    }
    getProductBase(product) {
        const result = { sku: product.code };
        if (product.name) {
            result.name = product.name;
        }
        if (product.summary) {
            result.description = product.summary;
        }
        return result;
    }
    getProductImage(product) {
        return product.images &&
            product.images.PRIMARY &&
            product.images.PRIMARY['zoom'] &&
            product.images.PRIMARY['zoom'].url
            ? {
                image: product.images.PRIMARY['zoom'].url,
            }
            : {};
    }
    getProductBrand(product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    }
};
JsonLdBaseProductBuilder.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });
JsonLdBaseProductBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JsonLdBaseProductBuilder);

/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
let JsonLdProductOfferBuilder = class JsonLdProductOfferBuilder {
    build(product) {
        const schema = { '@type': 'Offer' };
        if (product.price) {
            if (product.price.value) {
                schema.price = product.price.value;
            }
            if (product.price.currencyIso) {
                schema.priceCurrency = product.price.currencyIso;
            }
        }
        if (product.stock && product.stock.stockLevelStatus) {
            schema.availability =
                product.stock.stockLevelStatus === 'inStock' ? 'InStock' : 'OutOfStock';
        }
        return of({
            offers: schema,
        });
    }
};
JsonLdProductOfferBuilder.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });
JsonLdProductOfferBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JsonLdProductOfferBuilder);

/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
let JsonLdProductReviewBuilder = class JsonLdProductReviewBuilder {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    build(product) {
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map((reviews) => {
            return {
                aggregateRating: this.buildAggregatedReviews(product, reviews),
                review: reviews.map((review) => this.buildReviews(review)),
            };
        }));
    }
    buildAggregatedReviews(product, reviews) {
        const aggregated = {
            '@type': 'AggregateRating',
        };
        if (product.averageRating) {
            aggregated.ratingValue = product.averageRating;
        }
        if (reviews) {
            aggregated.ratingCount = reviews.filter((rev) => !!rev.rating).length;
            aggregated.reviewCount = reviews.filter((rev) => !!rev.comment).length;
        }
        return aggregated;
    }
    buildReviews(review) {
        const reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            const date = new Date(review.date);
            reviewSchema.datePublished = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        }
        if (review.headline) {
            reviewSchema.name = review.headline;
        }
        if (review.comment) {
            reviewSchema.description = review.comment;
        }
        if (review.rating) {
            reviewSchema.reviewRating = {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
            };
        }
        return reviewSchema;
    }
};
JsonLdProductReviewBuilder.ctorParameters = () => [
    { type: ProductReviewService }
];
JsonLdProductReviewBuilder.ɵprov = ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(ɵɵinject(ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
JsonLdProductReviewBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JsonLdProductReviewBuilder);

/**
 * Adds the minimal structured data for the product, see https://schema.org/product.
 * The actual data collection is delegated to `JsonLdBuilder`s, which can be injected
 * using the `JSONLD_PRODUCT_BUILDER` token.
 */
let ProductSchemaBuilder = class ProductSchemaBuilder {
    constructor(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    build() {
        return this.currentProduct.getProduct().pipe(switchMap((product) => {
            if (product) {
                return combineLatest(this.collect(product)).pipe(map((res) => Object.assign({}, ...res)));
            }
            return of({});
        }));
    }
    collect(product) {
        if (!product || !product.code) {
            return [];
        }
        const builders = this.builders
            ? this.builders.map((builder) => builder.build(product))
            : [];
        return [
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            }),
            ...builders,
        ];
    }
};
ProductSchemaBuilder.ctorParameters = () => [
    { type: CurrentProductService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
];
ProductSchemaBuilder.ɵprov = ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(ɵɵinject(CurrentProductService), ɵɵinject(JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
ProductSchemaBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional()),
    __param(1, Inject(JSONLD_PRODUCT_BUILDER))
], ProductSchemaBuilder);

/**
 * Provides several standard json-ld builders that contribute
 * to colleting and building json-ld data.
 */
let JsonLdBuilderModule = class JsonLdBuilderModule {
};
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

/**
 * Generic carousel that renders CMS Components.
 */
let BannerCarouselComponent = class BannerCarouselComponent {
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((d) => (this.theme = `${d.effect}-theme`)));
        this.items$ = this.componentData$.pipe(map((data) => data.banners.trim().split(' ')), map((codes) => codes.map((code) => this.cmsService.getComponentData(code))));
        /**
         * Adds a specific theme for the carousel. The effect can be
         * used in CSS customisations.
         */
        this.theme = '';
    }
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    getItems() {
        return this.items$;
    }
};
BannerCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService }
];
__decorate([
    HostBinding('class')
], BannerCarouselComponent.prototype, "theme", void 0);
BannerCarouselComponent = __decorate([
    Component({
        selector: 'cx-banner-carousel',
        template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BannerCarouselComponent);

let BannerCarouselModule = class BannerCarouselModule {
};
BannerCarouselModule = __decorate([
    NgModule({
        imports: [CommonModule, PageComponentModule, CarouselModule, MediaModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    RotatingImagesComponent: {
                        component: BannerCarouselComponent,
                    },
                },
            }),
        ],
        declarations: [BannerCarouselComponent],
        entryComponents: [BannerCarouselComponent],
        exports: [BannerCarouselComponent],
    })
], BannerCarouselModule);

let BannerComponent = class BannerComponent {
    constructor(component) {
        this.component = component;
    }
};
BannerComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
BannerComponent = __decorate([
    Component({
        selector: 'cx-banner',
        template: "<ng-container *ngIf=\"component.data$ | async as data\">\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <p *ngIf=\"data.headline\" [innerHTML]=\"data.headline\"></p>\n    <cx-media [container]=\"data.media\"></cx-media>\n    <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n  </cx-generic-link>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BannerComponent);

let BannerModule = class BannerModule {
};
BannerModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, GenericLinkModule, MediaModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    SimpleResponsiveBannerComponent: {
                        component: BannerComponent,
                    },
                    BannerComponent: {
                        component: BannerComponent,
                    },
                    SimpleBannerComponent: {
                        component: BannerComponent,
                    },
                },
            }),
        ],
        declarations: [BannerComponent],
        entryComponents: [BannerComponent],
        exports: [BannerComponent],
    })
], BannerModule);

let LinkComponent = class LinkComponent {
    constructor(component) {
        this.component = component;
    }
};
LinkComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
LinkComponent = __decorate([
    Component({
        selector: 'cx-link',
        template: "<cx-generic-link\n  *ngIf=\"component.data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], LinkComponent);

let LinkModule = class LinkModule {
};
LinkModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, GenericLinkModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CMSLinkComponent: { component: LinkComponent },
                },
            }),
        ],
        declarations: [LinkComponent],
        exports: [LinkComponent],
        entryComponents: [LinkComponent],
    })
], LinkModule);

let ParagraphComponent = class ParagraphComponent {
    constructor(component) {
        this.component = component;
    }
};
ParagraphComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
ParagraphComponent = __decorate([
    Component({
        selector: 'cx-paragraph',
        template: "<p *ngIf=\"component.data$ | async as data\" [innerHTML]=\"data.content\"></p>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ParagraphComponent);

let CmsParagraphModule = class CmsParagraphModule {
};
CmsParagraphModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CMSParagraphComponent: {
                        component: ParagraphComponent,
                    },
                    CMSTabParagraphComponent: {
                        component: ParagraphComponent,
                    },
                },
            }),
        ],
        declarations: [ParagraphComponent],
        exports: [ParagraphComponent],
        entryComponents: [ParagraphComponent],
    })
], CmsParagraphModule);

let TabParagraphContainerComponent = class TabParagraphContainerComponent {
    constructor(componentData, cmsService, winRef, breakpointService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.breakpointService = breakpointService;
        this.activeTabNum = 0;
        this.tabTitleParams = [];
        this.components$ = this.componentData.data$.pipe(distinctUntilChanged((x, y) => (x === null || x === void 0 ? void 0 : x.components) === (y === null || y === void 0 ? void 0 : y.components)), switchMap((data) => {
            var _a;
            return combineLatest(((_a = data === null || data === void 0 ? void 0 : data.components) !== null && _a !== void 0 ? _a : '').split(' ').map((component) => this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map((tab) => {
                if (!tab) {
                    return undefined;
                }
                if (!tab.flexType) {
                    tab = Object.assign(Object.assign({}, tab), { flexType: tab.typeCode });
                }
                return Object.assign(Object.assign({}, tab), { title: `${data.uid}.tabs.${tab.uid}` });
            }))));
        }));
    }
    select(tabNum, event) {
        this.tabSubscription = this.breakpointService
            .isDown(BREAKPOINT.sm)
            .subscribe((res) => {
            if (res) {
                this.activeTabNum = this.activeTabNum === tabNum ? -1 : tabNum;
                window.scrollTo(0, event.path[1].offsetTop);
            }
            else {
                this.activeTabNum = tabNum;
            }
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.activeTabNum = (_d = (_c = (_b = (_a = this.winRef.nativeWindow) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.activeTab) !== null && _d !== void 0 ? _d : this.activeTabNum;
    }
    ngAfterViewInit() {
        // If the sub cms components data exist, the components created before ngAfterViewInit are called.
        // In this case, the title parameters are directly pulled from them.
        // If the sub cms components data does not exist, it should should be loaded first.
        // In this case, listen to the changes to wait for them to be created.
        if (this.children.length > 0) {
            this.getTitleParams(this.children);
        }
        else {
            this.subscription = this.children.changes.subscribe((tabComps) => this.getTitleParams(tabComps));
        }
    }
    getTitleParams(children) {
        children.forEach((comp) => {
            if (comp.cmpRef && comp.cmpRef.instance.tabTitleParam$) {
                this.tabTitleParams.push(comp.cmpRef.instance.tabTitleParam$);
            }
            else {
                this.tabTitleParams.push(null);
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.tabSubscription) {
            this.tabSubscription.unsubscribe();
        }
    }
};
TabParagraphContainerComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService },
    { type: WindowRef },
    { type: BreakpointService }
];
__decorate([
    ViewChildren(ComponentWrapperDirective)
], TabParagraphContainerComponent.prototype, "children", void 0);
TabParagraphContainerComponent = __decorate([
    Component({
        selector: 'cx-tab-paragraph-container',
        template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <ng-container *ngIf=\"component\">\n    <button [class.active]=\"i === activeTabNum\" (click)=\"select(i, $event)\">\n      {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n    </button>\n    <div [class.active]=\"i === activeTabNum\">\n      <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n        <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n      </ng-template>\n    </div>\n  </ng-container>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TabParagraphContainerComponent);

let TabParagraphContainerModule = class TabParagraphContainerModule {
};
TabParagraphContainerModule = __decorate([
    NgModule({
        imports: [CommonModule, PageComponentModule, OutletModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CMSTabParagraphContainer: {
                        component: TabParagraphContainerComponent,
                    },
                },
            }),
        ],
        declarations: [TabParagraphContainerComponent],
        entryComponents: [TabParagraphContainerComponent],
        exports: [TabParagraphContainerComponent],
    })
], TabParagraphContainerModule);

let AddressBookComponentService = class AddressBookComponentService {
    constructor(userAddressService, checkoutDeliveryService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
    }
    getAddresses() {
        return this.userAddressService.getAddresses();
    }
    getAddressesStateLoading() {
        return this.userAddressService.getAddressesLoading();
    }
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
    addUserAddress(address) {
        this.userAddressService.addUserAddress(address);
    }
    updateUserAddress(addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    }
};
AddressBookComponentService.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService }
];
AddressBookComponentService.ɵprov = ɵɵdefineInjectable({ factory: function AddressBookComponentService_Factory() { return new AddressBookComponentService(ɵɵinject(UserAddressService), ɵɵinject(CheckoutDeliveryService)); }, token: AddressBookComponentService, providedIn: "root" });
AddressBookComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AddressBookComponentService);

let AddressBookComponent = class AddressBookComponent {
    constructor(service, translation, userAddressService, checkoutDeliveryService) {
        this.service = service;
        this.translation = translation;
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    ngOnInit() {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    }
    addAddressButtonHandle() {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    }
    editAddressButtonHandle(address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    }
    addAddressSubmit(address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    }
    addAddressCancel() {
        this.showAddAddressForm = false;
    }
    editAddressSubmit(address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    }
    editAddressCancel() {
        this.showEditAddressForm = false;
    }
    getCardContent(address) {
        return combineLatest([
            this.translation.translate('addressCard.default'),
            this.translation.translate('addressCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('common.edit'),
            this.translation.translate('addressBook.areYouSureToDeleteAddress'),
        ]).pipe(map(([defaultText, setAsDefaultText, textDelete, textEdit, textVerifyDeleteMsg,]) => {
            let region = '';
            if (address.region && address.region.isocode) {
                region = address.region.isocode + ', ';
            }
            const actions = [];
            if (!address.defaultAddress) {
                actions.push({ name: setAsDefaultText, event: 'default' });
            }
            actions.push({ name: textEdit, event: 'edit' });
            actions.push({ name: textDelete, event: 'delete' });
            return {
                textBold: address.firstName + ' ' + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ', ' + region + address.country.isocode,
                    address.postalCode,
                    address.phone,
                ],
                actions: actions,
                header: address.defaultAddress ? `✓ ${defaultText}` : '',
                deleteMsg: textVerifyDeleteMsg,
            };
        }));
    }
    setAddressAsDefault(addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    }
    deleteAddress(addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
    }
    setEdit(addressId) {
        if (this.editCard !== addressId) {
            this.editCard = addressId;
        }
        else {
            this.deleteAddress(addressId);
        }
    }
    cancelCard() {
        this.editCard = null;
    }
};
AddressBookComponent.ctorParameters = () => [
    { type: AddressBookComponentService },
    { type: TranslationService },
    { type: UserAddressService },
    { type: CheckoutDeliveryService }
];
AddressBookComponent = __decorate([
    Component({
        selector: 'cx-address-book',
        template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of addresses$ | async\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-card\n          [border]=\"true\"\n          [fitToContainer]=\"true\"\n          [content]=\"getCardContent(address) | async\"\n          (editCard)=\"editAddressButtonHandle(address)\"\n          (setDefaultCard)=\"setAddressAsDefault(address.id)\"\n          (deleteCard)=\"setEdit(address.id)\"\n          [editMode]=\"address.id === editCard\"\n          (cancelCard)=\"cancelCard()\"\n        ></cx-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n        (cancelCard)=\"cancelCard()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
    })
], AddressBookComponent);

let AddressBookModule = class AddressBookModule {
};
AddressBookModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CardModule,
            AddressFormModule,
            SpinnerModule,
            I18nModule,
        ],
        declarations: [AddressBookComponent],
        exports: [AddressBookComponent],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    AccountAddressBookComponent: {
                        component: AddressBookComponent,
                        providers: [
                            {
                                provide: AddressBookComponentService,
                                useClass: AddressBookComponentService,
                                deps: [UserAddressService],
                            },
                        ],
                        guards: [AuthGuard],
                    },
                },
            }),
            UserAddressService,
        ],
        entryComponents: [AddressBookComponent],
    })
], AddressBookModule);

let CloseAccountModalComponent = class CloseAccountModalComponent {
    constructor(modalService, userService, authService, globalMessageService, routingService, translationService) {
        this.modalService = modalService;
        this.userService = userService;
        this.authService = authService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.iconTypes = ICON_TYPE;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.userToken$ = this.authService.getUserToken();
        this.userService.resetRemoveUserProcessState();
        this.subscription.add(this.userService
            .getRemoveUserResultSuccess()
            .subscribe((success) => this.onSuccess(success)));
        this.subscription.add(this.userService
            .getRemoveUserResultError()
            .subscribe((error) => this.onError(error)));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    }
    onSuccess(success) {
        if (success) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe((text) => {
                this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            });
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    onError(error) {
        if (error) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedFailure')
                .pipe(first())
                .subscribe((text) => {
                this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
            });
        }
    }
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
    closeAccount() {
        this.userService.remove();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
CloseAccountModalComponent.ctorParameters = () => [
    { type: ModalService },
    { type: UserService },
    { type: AuthService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: TranslationService }
];
CloseAccountModalComponent = __decorate([
    Component({
        selector: 'cx-close-account-modal',
        template: "<ng-container *ngIf=\"userToken$ | async as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"dismissModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CloseAccountModalComponent);

let CloseAccountComponent = class CloseAccountComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal() {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    }
};
CloseAccountComponent.ctorParameters = () => [
    { type: ModalService }
];
CloseAccountComponent = __decorate([
    Component({
        selector: 'cx-close-account',
        template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CloseAccountComponent);

let CloseAccountModule = class CloseAccountModule {
};
CloseAccountModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            I18nModule,
            IconModule,
            SpinnerModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CloseAccountComponent: {
                        component: CloseAccountComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [CloseAccountComponent, CloseAccountModalComponent],
        exports: [CloseAccountComponent, CloseAccountModalComponent],
        entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
    })
], CloseAccountModule);

let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    }
    requestForgotPasswordEmail() {
        if (this.forgotPasswordForm.valid) {
            this.userService.requestForgotPasswordEmail(this.forgotPasswordForm.value.userEmail);
            this.routingService.go({ cxRoute: 'login' });
        }
        else {
            this.forgotPasswordForm.markAllAsTouched();
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserService },
    { type: RoutingService }
];
ForgotPasswordComponent = __decorate([
    Component({
        selector: 'cx-forgot-password',
        template: "<form\n  (ngSubmit)=\"requestForgotPasswordEmail()\"\n  [formGroup]=\"forgotPasswordForm\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n      />\n      <cx-form-errors\n        [control]=\"forgotPasswordForm.get('userEmail')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
    })
], ForgotPasswordComponent);

let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RouterModule,
            UrlModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ForgotPasswordComponent: {
                        component: ForgotPasswordComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
        ],
        declarations: [ForgotPasswordComponent],
        exports: [ForgotPasswordComponent],
        entryComponents: [ForgotPasswordComponent],
    })
], ForgotPasswordModule);

let AmendOrderActionsComponent = class AmendOrderActionsComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.styles = 'row';
    }
    continue(event) {
        if (this.amendOrderForm.valid) {
            this.routingService.go({
                cxRoute: this.forwardRoute,
                params: { code: this.orderCode },
            });
        }
        else {
            this.amendOrderForm.markAllAsTouched();
            event.stopPropagation();
        }
    }
};
AmendOrderActionsComponent.ctorParameters = () => [
    { type: RoutingService }
];
__decorate([
    Input()
], AmendOrderActionsComponent.prototype, "orderCode", void 0);
__decorate([
    Input()
], AmendOrderActionsComponent.prototype, "amendOrderForm", void 0);
__decorate([
    Input()
], AmendOrderActionsComponent.prototype, "backRoute", void 0);
__decorate([
    Input()
], AmendOrderActionsComponent.prototype, "forwardRoute", void 0);
__decorate([
    HostBinding('class')
], AmendOrderActionsComponent.prototype, "styles", void 0);
AmendOrderActionsComponent = __decorate([
    Component({
        selector: 'cx-amend-order-actions',
        template: "<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    [routerLink]=\"\n      {\n        cxRoute: backRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n    class=\"btn btn-block btn-action\"\n  >\n    {{ 'common.back' | cxTranslate }}\n  </a>\n</div>\n<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <button\n    *ngIf=\"forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    (click)=\"continue($event)\"\n  >\n    {{ 'common.continue' | cxTranslate }}\n  </button>\n\n  <button *ngIf=\"!forwardRoute\" class=\"btn btn-block btn-primary\" type=\"submit\">\n    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n  </button>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AmendOrderActionsComponent);

let AmendOrderActionsModule = class AmendOrderActionsModule {
};
AmendOrderActionsModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, I18nModule],
        declarations: [AmendOrderActionsComponent],
        exports: [AmendOrderActionsComponent],
    })
], AmendOrderActionsModule);

var AmendOrderType;
(function (AmendOrderType) {
    AmendOrderType[AmendOrderType["CANCEL"] = 0] = "CANCEL";
    AmendOrderType[AmendOrderType["RETURN"] = 1] = "RETURN";
})(AmendOrderType || (AmendOrderType = {}));

function ValidateQuantityToCancel(control) {
    if (!control.value) {
        return null;
    }
    const quantity = Object.values(control.value).reduce((acc, val) => acc + val, 0);
    return quantity > 0 ? null : { cxNoSelectedItemToCancel: true };
}
let OrderAmendService = class OrderAmendService {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     */
    getAmendedEntries() {
        return this.getForm().pipe(switchMap((form) => {
            return this.getEntries().pipe(map((entries) => entries.filter((entry) => this.getFormControl(form, entry).value > 0)));
        }));
    }
    getOrder() {
        return this.orderDetailsService.getOrderDetails();
    }
    /**
     * returns the form with form data at runtime
     */
    getForm() {
        return this.getOrder().pipe(tap((order) => {
            if (!this.form || this.form.get('orderCode').value !== order.code) {
                this.buildForm(order);
            }
        }), map(() => this.form));
    }
    buildForm(order) {
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        const entryGroup = new FormGroup({}, { validators: [ValidateQuantityToCancel] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach((entry) => {
            const key = entry.entryNumber.toString();
            entryGroup.addControl(key, new FormControl(0, {
                validators: [
                    Validators.min(0),
                    Validators.max(this.getMaxAmendQuantity(entry)),
                ],
            }));
        });
    }
    getFormControl(form, entry) {
        return form.get('entries').get(entry.entryNumber.toString());
    }
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    getAmendedPrice(entry) {
        const amendedQuantity = this.getFormControl(this.form, entry).value;
        const amendedPrice = Object.assign({}, entry.basePrice);
        amendedPrice.value =
            Math.round(entry.basePrice.value * amendedQuantity * 100) / 100;
        amendedPrice.formattedValue = formatCurrency(amendedPrice.value, 
        // TODO: user current language
        'en', getCurrencySymbol(amendedPrice.currencyIso, 'narrow'), amendedPrice.currencyIso);
        return amendedPrice;
    }
    getMaxAmendQuantity(entry) {
        return ((this.isCancellation()
            ? entry.cancellableQuantity
            : entry.returnableQuantity) || entry.quantity);
    }
    isCancellation() {
        return this.amendType === AmendOrderType.CANCEL;
    }
};
OrderAmendService.ctorParameters = () => [
    { type: OrderDetailsService }
];
OrderAmendService = __decorate([
    Injectable()
], OrderAmendService);

let CancelOrReturnItemsComponent = class CancelOrReturnItemsComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.isConfirmation = false;
        this.form$ = this.orderAmendService.getForm();
    }
    getControl(form, entry) {
        const control = (form.get('entries').get(entry.entryNumber.toString()));
        return control;
    }
    setAll(form) {
        this.entries.forEach((entry) => this.getControl(form, entry).setValue(this.getMaxAmendQuantity(entry)));
    }
    getItemPrice(entry) {
        return this.orderAmendService.getAmendedPrice(entry);
    }
    getMaxAmendQuantity(entry) {
        return this.orderAmendService.getMaxAmendQuantity(entry);
    }
    isCancellation() {
        return this.orderAmendService.isCancellation();
    }
};
CancelOrReturnItemsComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
__decorate([
    Input()
], CancelOrReturnItemsComponent.prototype, "entries", void 0);
__decorate([
    Input()
], CancelOrReturnItemsComponent.prototype, "isConfirmation", void 0);
CancelOrReturnItemsComponent = __decorate([
    Component({
        selector: 'cx-amend-order-items',
        template: "<div *ngIf=\"form$ | async as form\">\n  <button\n    *ngIf=\"!isConfirmation\"\n    class=\"btn btn-link cx-action-link\"\n    (click)=\"setAll(form)\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n\n  <div class=\"d-none d-md-block cx-item-list-header\">\n    <div class=\"row\">\n      <div class=\"text-left col-6\">\n        {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n      </div>\n      <div class=\"text-center col-2\">\n        {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n      </div>\n      <div *ngIf=\"!isConfirmation\" class=\"text-center col-2\">\n        {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-2 text-right\">\n        {{\n          (isCancellation()\n            ? 'orderDetails.cancellationAndReturn.cancelQty'\n            : 'orderDetails.cancellationAndReturn.returnQty'\n          ) | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"isConfirmation\" class=\"cx-item-list-total col-2\">\n        {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n    <div class=\"row cx-item-list-items\">\n      <!-- Item Image -->\n      <cx-media\n        class=\"col-2\"\n        [container]=\"item.product.images?.PRIMARY\"\n      ></cx-media>\n\n      <!-- Item Information -->\n      <div class=\"cx-info col-10\">\n        <div class=\"cx-info-container row\">\n          <!-- Item Description -->\n          <div class=\"col-md-4 col-xl-5 cx-list-item-desc\">\n            <div *ngIf=\"item.product.name\" class=\"cx-name\">\n              {{ item.product.name }}\n            </div>\n            <div *ngIf=\"item.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n            </div>\n            <!-- Variants -->\n            <ng-container *ngIf=\"item.product.baseOptions?.length\">\n              <div\n                *ngFor=\"\n                  let variant of item.product.baseOptions[0]?.selected\n                    ?.variantOptionQualifiers\n                \"\n                class=\"cx-property\"\n              >\n                <div class=\"cx-label\" *ngIf=\"variant.name\">\n                  {{ variant.name }}:\n                </div>\n                <div class=\"cx-value\" *ngIf=\"variant.value\">\n                  {{ variant.value }}\n                </div>\n              </div>\n            </ng-container>\n          </div>\n          <!-- Price -->\n          <div\n            *ngIf=\"item.basePrice\"\n            class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n          >\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n            </div>\n            <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n              {{ item.basePrice?.formattedValue }}\n            </div>\n          </div>\n          <!-- item Quantity -->\n          <div *ngIf=\"!isConfirmation\" class=\"cx-request-qty col-md-3\">\n            <div\n              class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n              placement=\"left\"\n              title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n            >\n              {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getMaxAmendQuantity(item) }}\n            </div>\n          </div>\n          <!-- Amended Quantity -->\n          <div class=\"cx-quantity col-xs-12 col-md-2 col-sm-12\">\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{\n                (isCancellation()\n                  ? 'orderDetails.cancellationAndReturn.cancelQty'\n                  : 'orderDetails.cancellationAndReturn.returnQty'\n                ) | cxTranslate\n              }}\n            </div>\n\n            <div\n              *ngIf=\"isConfirmation\"\n              class=\"w-100 text-center cx-order-quantity-value\"\n            >\n              {{ getControl(form, item).value }}\n            </div>\n            <cx-item-counter\n              *ngIf=\"!isConfirmation\"\n              [min]=\"0\"\n              [max]=\"getMaxAmendQuantity(item)\"\n              [control]=\"getControl(form, item)\"\n            >\n            </cx-item-counter>\n          </div>\n          <!-- Total Price -->\n          <div *ngIf=\"isConfirmation\" class=\"cx-total col-3\">\n            <div class=\"cx-label d-block d-md-none\">\n              {{\n                'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate\n              }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getItemPrice(item)?.formattedValue }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CancelOrReturnItemsComponent);

let AmendOrderItemsModule = class AmendOrderItemsModule {
};
AmendOrderItemsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            I18nModule,
            MediaModule,
            ItemCounterModule,
            FeaturesConfigModule,
            FormErrorsModule,
        ],
        declarations: [CancelOrReturnItemsComponent],
        exports: [CancelOrReturnItemsComponent],
        entryComponents: [CancelOrReturnItemsComponent],
    })
], AmendOrderItemsModule);

let CancelOrderConfirmationComponent = class CancelOrderConfirmationComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((form) => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    submit(form) {
        if (form.valid) {
            this.orderAmendService.save();
        }
        else {
            form.markAllAsTouched();
        }
    }
};
CancelOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
CancelOrderConfirmationComponent = __decorate([
    Component({
        selector: 'cx-cancel-order-confirmation',
        template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CancelOrderConfirmationComponent);

let OrderCancellationService = class OrderCancellationService extends OrderAmendService {
    constructor(orderDetailsService, userOrderService, routing, globalMessageService) {
        super(orderDetailsService);
        this.orderDetailsService = orderDetailsService;
        this.userOrderService = userOrderService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.amendType = AmendOrderType.CANCEL;
    }
    /**
     * Return cancellable order entries.
     */
    getEntries() {
        return this.getOrder().pipe(filter((order) => !!(order === null || order === void 0 ? void 0 : order.entries)), map((order) => order.entries.filter((entry) => entry.entryNumber !== -1 && entry.cancellableQuantity > 0)));
    }
    save() {
        const orderCode = this.form.value.orderCode;
        const entries = this.form.value.entries;
        const inputs = Object.keys(entries)
            .filter((entryNumber) => entries[entryNumber] > 0)
            .map((entryNumber) => ({
            orderEntryNumber: Number(entryNumber),
            quantity: entries[entryNumber],
        }));
        this.form.reset();
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: inputs,
        });
        this.userOrderService
            .getCancelOrderSuccess()
            .pipe(first(Boolean))
            .subscribe(() => this.afterSave(orderCode));
    }
    afterSave(orderCode) {
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    }
};
OrderCancellationService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: UserOrderService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
OrderCancellationService.ɵprov = ɵɵdefineInjectable({ factory: function OrderCancellationService_Factory() { return new OrderCancellationService(ɵɵinject(OrderDetailsService), ɵɵinject(UserOrderService), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService)); }, token: OrderCancellationService, providedIn: "root" });
OrderCancellationService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderCancellationService);

let OrderCancellationGuard = class OrderCancellationGuard {
    constructor(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    canActivate() {
        return this.orderAmendService.getForm().pipe(map((form) => {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                this.routing.go({ cxRoute: 'orders' });
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
OrderCancellationGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: OrderCancellationService }
];
OrderCancellationGuard.ɵprov = ɵɵdefineInjectable({ factory: function OrderCancellationGuard_Factory() { return new OrderCancellationGuard(ɵɵinject(RoutingService), ɵɵinject(OrderCancellationService)); }, token: OrderCancellationGuard, providedIn: "root" });
OrderCancellationGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderCancellationGuard);

const ɵ0$1 = {
    cxRoute: 'orderCancelConfirmation',
};
let CancelOrderConfirmationModule = class CancelOrderConfirmationModule {
};
CancelOrderConfirmationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$1,
                },
            ]),
            ReactiveFormsModule,
            AmendOrderItemsModule,
            AmendOrderActionsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CancelOrderConfirmationComponent: {
                        component: CancelOrderConfirmationComponent,
                        guards: [AuthGuard, OrderCancellationGuard],
                        providers: [
                            {
                                provide: OrderAmendService,
                                useExisting: OrderCancellationService,
                            },
                        ],
                    },
                },
            }),
        ],
        declarations: [CancelOrderConfirmationComponent],
        exports: [CancelOrderConfirmationComponent],
        entryComponents: [CancelOrderConfirmationComponent],
    })
], CancelOrderConfirmationModule);

let CancelOrderComponent = class CancelOrderComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((form) => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getEntries();
    }
};
CancelOrderComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
CancelOrderComponent = __decorate([
    Component({
        selector: 'cx-cancel-order',
        template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <cx-form-errors [control]=\"form.get('entries')\"></cx-form-errors>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderCancelConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CancelOrderComponent);

const ɵ0$2 = {
    cxRoute: 'orderCancel',
};
let CancelOrderModule = class CancelOrderModule {
};
CancelOrderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$2,
                },
            ]),
            AmendOrderItemsModule,
            AmendOrderActionsModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CancelOrderComponent: {
                        component: CancelOrderComponent,
                        guards: [AuthGuard],
                        providers: [
                            {
                                provide: OrderAmendService,
                                useExisting: OrderCancellationService,
                            },
                        ],
                    },
                },
            }),
        ],
        declarations: [CancelOrderComponent],
        exports: [CancelOrderComponent],
        entryComponents: [CancelOrderComponent],
    })
], CancelOrderModule);

let OrderCancellationModule = class OrderCancellationModule {
};
OrderCancellationModule = __decorate([
    NgModule({
        imports: [CancelOrderModule, CancelOrderConfirmationModule],
    })
], OrderCancellationModule);

let OrderReturnService = class OrderReturnService extends OrderAmendService {
    constructor(orderDetailsService, returnRequestService, routing, globalMessageService) {
        super(orderDetailsService);
        this.orderDetailsService = orderDetailsService;
        this.returnRequestService = returnRequestService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.amendType = AmendOrderType.RETURN;
    }
    getEntries() {
        return this.getOrder().pipe(filter((order) => !!order.entries), map((order) => order.entries.filter((entry) => entry.entryNumber !== -1 && entry.returnableQuantity > 0)));
    }
    save() {
        const orderCode = this.form.value.orderCode;
        const entries = this.form.value.entries;
        const inputs = Object.keys(entries)
            .filter((entryNumber) => entries[entryNumber] > 0)
            .map((entryNumber) => ({
            orderEntryNumber: Number(entryNumber),
            quantity: entries[entryNumber],
        }));
        this.form.reset();
        this.returnRequestService.createOrderReturnRequest({
            orderCode,
            returnRequestEntryInputs: inputs,
        });
        this.returnRequestService
            .getReturnRequestSuccess()
            .pipe(first(Boolean))
            .subscribe(() => this.afterSave());
    }
    afterSave() {
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(first((r) => !!r))
            .subscribe((returnRequest) => {
            const rma = returnRequest.rma;
            this.globalMessageService.add({
                key: 'orderDetails.cancellationAndReturn.returnSuccess',
                params: { rma },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routing.go({
                cxRoute: 'returnRequestDetails',
                params: { rma },
            });
        });
    }
};
OrderReturnService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: OrderReturnRequestService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
OrderReturnService.ɵprov = ɵɵdefineInjectable({ factory: function OrderReturnService_Factory() { return new OrderReturnService(ɵɵinject(OrderDetailsService), ɵɵinject(OrderReturnRequestService), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService)); }, token: OrderReturnService, providedIn: "root" });
OrderReturnService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderReturnService);

let OrderReturnGuard = class OrderReturnGuard {
    constructor(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    canActivate() {
        return this.orderAmendService.getForm().pipe(map((form) => {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                this.routing.go({ cxRoute: 'orders' });
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
OrderReturnGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: OrderReturnService }
];
OrderReturnGuard.ɵprov = ɵɵdefineInjectable({ factory: function OrderReturnGuard_Factory() { return new OrderReturnGuard(ɵɵinject(RoutingService), ɵɵinject(OrderReturnService)); }, token: OrderReturnGuard, providedIn: "root" });
OrderReturnGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderReturnGuard);

let ReturnOrderConfirmationComponent = class ReturnOrderConfirmationComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((form) => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    submit(form) {
        form.disable();
        this.orderAmendService.save();
    }
};
ReturnOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
ReturnOrderConfirmationComponent = __decorate([
    Component({
        selector: 'cx-return-order-confirmation',
        template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderReturn\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnOrderConfirmationComponent);

const ɵ0$3 = {
    cxRoute: 'orderReturnConfirmation',
};
let ReturnOrderConfirmationModule = class ReturnOrderConfirmationModule {
};
ReturnOrderConfirmationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$3,
                },
            ]),
            AmendOrderItemsModule,
            I18nModule,
            ReactiveFormsModule,
            AmendOrderActionsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ReturnOrderConfirmationComponent: {
                        component: ReturnOrderConfirmationComponent,
                        guards: [AuthGuard, OrderReturnGuard],
                        providers: [
                            {
                                provide: OrderAmendService,
                                useExisting: OrderReturnService,
                            },
                        ],
                    },
                },
            }),
        ],
        declarations: [ReturnOrderConfirmationComponent],
        exports: [ReturnOrderConfirmationComponent],
        entryComponents: [ReturnOrderConfirmationComponent],
    })
], ReturnOrderConfirmationModule);

let ReturnOrderComponent = class ReturnOrderComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((form) => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getEntries();
    }
};
ReturnOrderComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
ReturnOrderComponent = __decorate([
    Component({
        selector: 'cx-return-order',
        template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderReturnConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnOrderComponent);

const ɵ0$4 = {
    cxRoute: 'orderReturn',
};
let ReturnOrderModule = class ReturnOrderModule {
};
ReturnOrderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$4,
                },
            ]),
            AmendOrderItemsModule,
            AmendOrderActionsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ReturnOrderComponent: {
                        component: ReturnOrderComponent,
                        guards: [AuthGuard],
                        providers: [
                            {
                                provide: OrderAmendService,
                                useExisting: OrderReturnService,
                            },
                        ],
                    },
                },
            }),
        ],
        declarations: [ReturnOrderComponent],
        exports: [ReturnOrderComponent],
        entryComponents: [ReturnOrderComponent],
    })
], ReturnOrderModule);

let OrderReturnModule = class OrderReturnModule {
};
OrderReturnModule = __decorate([
    NgModule({
        imports: [ReturnOrderModule, ReturnOrderConfirmationModule],
    })
], OrderReturnModule);

let OrderDetailHeadlineComponent = class OrderDetailHeadlineComponent {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
};
OrderDetailHeadlineComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
OrderDetailHeadlineComponent = __decorate([
    Component({
        selector: 'cx-order-details-headline',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | cxDate }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\" *ngIf=\"order?.statusDisplay\">\n        {{\n          'orderDetails.statusDisplay'\n            | cxTranslate: { context: order?.statusDisplay }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailHeadlineComponent);

const completedValues = ['DELIVERY_COMPLETED', 'PICKUP_COMPLETE'];
const cancelledValues = ['CANCELLED'];

let OrderDetailItemsComponent = class OrderDetailItemsComponent {
    constructor(orderDetailsService, promotionService) {
        this.orderDetailsService = orderDetailsService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Order;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    ngOnInit() {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        this.others$ = this.getOtherStatus(...completedValues, ...cancelledValues);
        this.completed$ = this.getExactStatus(completedValues);
        this.cancel$ = this.getExactStatus(cancelledValues);
    }
    getExactStatus(consignmentStatus) {
        return this.order$.pipe(map((order) => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((consignment) => consignmentStatus.includes(consignment.status));
            }
        }));
    }
    getOtherStatus(...consignmentStatus) {
        return this.order$.pipe(map((order) => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter((consignment) => !consignmentStatus.includes(consignment.status));
            }
        }));
    }
};
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: PromotionService }
];
OrderDetailItemsComponent = __decorate([
    Component({
        selector: 'cx-order-details-items',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <ng-container\n    *ngIf=\"order.consignments?.length || order.unconsignedEntries?.length\"\n  >\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n  </ng-container>\n\n  <!-- consigned entries -->\n  <ng-container *ngIf=\"order.consignments?.length\">\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </ng-container>\n\n  <!-- unconsigned entries -->\n  <ng-container *ngIf=\"order.unconsignedEntries?.length\">\n    <div class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          {{\n            'orderDetails.statusDisplay'\n              | cxTranslate: { context: order.statusDisplay }\n          }}\n        </div>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <cx-cart-item-list\n          [items]=\"order?.unconsignedEntries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n"
    })
], OrderDetailItemsComponent);

let TrackingEventsComponent = class TrackingEventsComponent {
    constructor(activeModal, userOrderService) {
        this.activeModal = activeModal;
        this.userOrderService = userOrderService;
    }
    ngOnDestroy() {
        this.userOrderService.clearConsignmentTracking();
    }
};
TrackingEventsComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: UserOrderService }
];
TrackingEventsComponent = __decorate([
    Component({
        selector: 'cx-tracking-events',
        template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"tracking$ | async as consignmentTracking; else loading\">\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <ng-container *ngIf=\"consignmentTracking?.trackingUrl\">\n                <a target=\"_blank\" [href]=\"consignmentTracking.trackingUrl\">{{\n                  consignmentTracking?.trackingID\n                }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!consignmentTracking?.trackingUrl\">\n                <label>\n                  {{ consignmentTracking?.trackingID }}\n                </label>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close btn-dismiss\"\n          aria-label=\"Close\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
    })
], TrackingEventsComponent);

let ConsignmentTrackingComponent = class ConsignmentTrackingComponent {
    constructor(userOrderService, modalService) {
        this.userOrderService = userOrderService;
        this.modalService = modalService;
        this.consignmentStatus = [
            'SHIPPED',
            'IN_TRANSIT',
            'DELIVERY_COMPLETED',
            'DELIVERY_REJECTED',
            'DELIVERING',
        ];
    }
    ngOnInit() {
        this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
    }
    openTrackingDialog(consignment) {
        this.userOrderService.loadConsignmentTracking(this.orderCode, consignment.code);
        let modalInstance;
        this.modalRef = this.modalService.open(TrackingEventsComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.tracking$ = this.consignmentTracking$;
        modalInstance.shipDate = consignment.statusDate;
        modalInstance.consignmentCode = consignment.code;
    }
    ngOnDestroy() {
        this.userOrderService.clearConsignmentTracking();
    }
};
ConsignmentTrackingComponent.ctorParameters = () => [
    { type: UserOrderService },
    { type: ModalService }
];
__decorate([
    Input()
], ConsignmentTrackingComponent.prototype, "consignment", void 0);
__decorate([
    Input()
], ConsignmentTrackingComponent.prototype, "orderCode", void 0);
ConsignmentTrackingComponent = __decorate([
    Component({
        selector: 'cx-consignment-tracking',
        template: "<ng-container *ngIf=\"consignment && consignment.status\">\n  <div *ngIf=\"consignmentStatus.includes(consignment.status)\">\n    <button\n      (click)=\"openTrackingDialog(consignment)\"\n      class=\"btn btn-action btn-track\"\n      type=\"button\"\n    >\n      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n"
    })
], ConsignmentTrackingComponent);

let OrderConsignedEntriesComponent = class OrderConsignedEntriesComponent {
    constructor() {
        this.promotionLocation = PromotionLocation.Order;
    }
    getConsignmentProducts(consignment) {
        const products = [];
        consignment.entries.forEach((element) => {
            products.push(element.orderEntry);
        });
        return products;
    }
};
__decorate([
    Input()
], OrderConsignedEntriesComponent.prototype, "consignments", void 0);
__decorate([
    Input()
], OrderConsignedEntriesComponent.prototype, "order", void 0);
OrderConsignedEntriesComponent = __decorate([
    Component({
        selector: 'cx-order-consigned-entries',
        template: "<div *ngFor=\"let consignment of consignments\" class=\"cx-list row\">\n  <div class=\"cx-list-header col-12\">\n    <div class=\"cx-list-status\">\n      <span *ngIf=\"consignment\">\n        {{\n          'orderDetails.deliveryStatus'\n            | cxTranslate: { context: consignment.status }\n        }}\n      </span>\n    </div>\n    <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n      <div>{{ consignment?.statusDate | cxDate }}</div>\n    </div>\n\n    <cx-consignment-tracking\n      [orderCode]=\"order.code\"\n      [consignment]=\"consignment\"\n      *cxFeature=\"'consignmentTracking'\"\n    >\n    </cx-consignment-tracking>\n  </div>\n  <div class=\"cx-list-item col-12\">\n    <cx-cart-item-list\n      [items]=\"consignment.entries\"\n      [readonly]=\"true\"\n      [promotionLocation]=\"promotionLocation\"\n    ></cx-cart-item-list>\n  </div>\n</div>\n"
    })
], OrderConsignedEntriesComponent);

let OrderDetailShippingComponent = class OrderDetailShippingComponent {
    constructor(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    getAddressCardContent(address) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: `${address.firstName} ${address.lastName}`,
                text: [
                    address.line1,
                    address.line2,
                    `${address.town}, ${address.country.isocode}, ${address.postalCode}`,
                    address.phone,
                ],
            };
        }));
    }
    getBillingAddressCardContent(billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
                text: [
                    billingAddress.line1,
                    billingAddress.line2,
                    `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                    billingAddress.phone,
                ],
            };
        }));
    }
    getPaymentCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map(([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        }));
    }
    getShippingMethodCardContent(shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map(([textTitle]) => {
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        }));
    }
};
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: TranslationService }
];
OrderDetailShippingComponent = __decorate([
    Component({
        selector: 'cx-order-details-shipping',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailShippingComponent);

let OrderDetailTotalsComponent = class OrderDetailTotalsComponent {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
};
OrderDetailTotalsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
OrderDetailTotalsComponent = __decorate([
    Component({
        selector: 'cx-order-details-totals',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailTotalsComponent);

let OrderDetailActionsComponent = class OrderDetailActionsComponent {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
};
OrderDetailActionsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
OrderDetailActionsComponent = __decorate([
    Component({
        selector: 'cx-order-details-actions',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        [routerLink]=\"{ cxRoute: 'orders' } | cxUrl\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <a\n        *ngIf=\"order.cancellable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderCancel',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.cancelAction' | cxTranslate }}\n      </a>\n\n      <a\n        *ngIf=\"order.returnable\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orderReturn',\n            params: order\n          } | cxUrl\n        \"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'orderDetails.cancellationAndReturn.returnAction' | cxTranslate }}\n      </a>\n    </div>\n  </div>\n</ng-container>\n"
    })
], OrderDetailActionsComponent);

const moduleComponents = [
    OrderDetailActionsComponent,
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
    OrderConsignedEntriesComponent,
];
const ɵ0$5 = { pageLabel: 'order', cxRoute: 'orderGuest' }, ɵ1 = { cxRoute: 'orderDetails' };
let OrderDetailsModule = class OrderDetailsModule {
};
OrderDetailsModule = __decorate([
    NgModule({
        imports: [
            CartSharedModule,
            CardModule,
            CommonModule,
            I18nModule,
            FeaturesConfigModule,
            PromotionsModule,
            UrlModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$5,
                },
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ1,
                },
            ]),
            SpinnerModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    AccountOrderDetailsActionsComponent: {
                        component: OrderDetailActionsComponent,
                    },
                    AccountOrderDetailsHeadlineComponent: {
                        component: OrderDetailHeadlineComponent,
                    },
                    AccountOrderDetailsItemsComponent: {
                        component: OrderDetailItemsComponent,
                    },
                    AccountOrderDetailsTotalsComponent: {
                        component: OrderDetailTotalsComponent,
                    },
                    AccountOrderDetailsShippingComponent: {
                        component: OrderDetailShippingComponent,
                    },
                },
                features: {
                    consignmentTracking: '1.2',
                },
            }),
            OrderDetailsService,
        ],
        declarations: [...moduleComponents],
        exports: [...moduleComponents],
        entryComponents: [...moduleComponents],
    })
], OrderDetailsModule);

let OrderHistoryComponent = class OrderHistoryComponent {
    constructor(routing, userOrderService, translation) {
        this.routing = routing;
        this.userOrderService = userOrderService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.orders$ = this.userOrderService.getOrderHistoryList(this.PAGE_SIZE).pipe(tap((orders) => {
            if (orders.pagination) {
                this.sortType = orders.pagination.sort;
            }
        }));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.orders$.pipe(map((order) => order.pagination.totalResults), filter((totalResults) => totalResults !== undefined), take(1));
    }
    ngOnDestroy() {
        this.userOrderService.clearOrderList();
    }
    changeSortCode(sortCode) {
        const event = {
            sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    }
    pageChange(page) {
        const event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    }
    goToOrderDetail(order) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: order,
        });
    }
    getSortLabels() {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map(([textByDate, textByOrderNumber]) => {
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        }));
    }
    fetchOrders(event) {
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
};
OrderHistoryComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserOrderService },
    { type: TranslationService }
];
OrderHistoryComponent = __decorate([
    Component({
        selector: 'cx-order-history',
        template: "<ng-container *ngIf=\"orders$ | async as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"isLoaded$ | async\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderHistoryComponent);

const ɵ0$6 = { cxRoute: 'orders' };
let OrderHistoryModule = class OrderHistoryModule {
};
OrderHistoryModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$6,
                },
            ]),
            RouterModule,
            FormsModule,
            NgSelectModule,
            ListNavigationModule,
            UrlModule,
            I18nModule,
        ],
        declarations: [OrderHistoryComponent],
        exports: [OrderHistoryComponent],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    AccountOrderHistoryComponent: {
                        component: OrderHistoryComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        entryComponents: [OrderHistoryComponent],
    })
], OrderHistoryModule);

let ReturnRequestService = class ReturnRequestService {
    constructor(routingService, returnRequestService, globalMessageService) {
        this.routingService = routingService;
        this.returnRequestService = returnRequestService;
        this.globalMessageService = globalMessageService;
    }
    get isCancelling$() {
        return this.returnRequestService.getCancelReturnRequestLoading();
    }
    get isCancelSuccess$() {
        return this.returnRequestService.getCancelReturnRequestSuccess();
    }
    getReturnRequest() {
        return combineLatest([
            this.routingService.getRouterState(),
            this.returnRequestService.getOrderReturnRequest(),
            this.returnRequestService.getReturnRequestLoading(),
        ]).pipe(map(([routingState, returnRequest, isLoading]) => [
            routingState.state.params['returnCode'],
            returnRequest,
            isLoading,
        ]), filter(([returnCode]) => Boolean(returnCode)), tap(([returnCode, returnRequest, isLoading]) => {
            if ((returnRequest === undefined || returnRequest.rma !== returnCode) &&
                !isLoading) {
                this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
            }
        }), map(([_, returnRequest]) => returnRequest), filter(Boolean), distinctUntilChanged());
    }
    clearReturnRequest() {
        this.returnRequestService.clearOrderReturnRequestDetail();
    }
    cancelReturnRequest(returnRequestCode) {
        this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
            status: 'CANCELLING',
        });
    }
    cancelSuccess(rma) {
        this.returnRequestService.resetCancelReturnRequestProcessState();
        this.globalMessageService.add({
            key: 'returnRequest.cancelSuccess',
            params: { rma },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routingService.go({
            cxRoute: 'orders',
        });
    }
    backToList() {
        this.routingService.go({ cxRoute: 'orders' }, null, {
            state: {
                activeTab: 1,
            },
        });
    }
};
ReturnRequestService.ctorParameters = () => [
    { type: RoutingService },
    { type: OrderReturnRequestService },
    { type: GlobalMessageService }
];
ReturnRequestService.ɵprov = ɵɵdefineInjectable({ factory: function ReturnRequestService_Factory() { return new ReturnRequestService(ɵɵinject(RoutingService), ɵɵinject(OrderReturnRequestService), ɵɵinject(GlobalMessageService)); }, token: ReturnRequestService, providedIn: "root" });
ReturnRequestService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ReturnRequestService);

let ReturnRequestOverviewComponent = class ReturnRequestOverviewComponent {
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService
            .getReturnRequest()
            .pipe(tap((returnRequest) => (this.rma = returnRequest.rma)));
        this.isCancelling$ = this.returnRequestService.isCancelling$;
    }
    ngOnInit() {
        this.subscription = this.returnRequestService.isCancelSuccess$.subscribe((success) => {
            if (success) {
                this.returnRequestService.cancelSuccess(this.rma);
            }
        });
    }
    cancelReturn(returnRequestCode) {
        this.returnRequestService.cancelReturnRequest(returnRequestCode);
    }
    back() {
        this.returnRequestService.backToList();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
ReturnRequestOverviewComponent.ctorParameters = () => [
    { type: ReturnRequestService }
];
ReturnRequestOverviewComponent = __decorate([
    Component({
        selector: 'cx-return-request-overview',
        template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button (click)=\"back()\" class=\"btn btn-block btn-action\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        *ngIf=\"returnRequest.cancellable\"\n        class=\"btn btn-block btn-primary\"\n        (click)=\"cancelReturn(returnRequest.rma)\"\n        [disabled]=\"isCancelling$ | async\"\n      >\n        {{ 'returnRequest.cancel' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.returnRequestId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.rma }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.orderCode' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">\n        {{\n          'returnRequestList.statusDisplay'\n            | cxTranslate: { context: returnRequest.status }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnRequestOverviewComponent);

let ReturnRequestItemsComponent = class ReturnRequestItemsComponent {
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
};
ReturnRequestItemsComponent.ctorParameters = () => [
    { type: ReturnRequestService }
];
ReturnRequestItemsComponent = __decorate([
    Component({
        selector: 'cx-return-request-items',
        template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n        {{ 'returnRequest.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.itemPrice' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-md-3 col-lg-3 col-xl-2\">\n        {{ 'returnRequest.returnQty' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.total' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div\n    class=\"cx-item-list-row\"\n    *ngFor=\"let returnEntry of returnRequest.returnEntries; let i = index\"\n  >\n    <div class=\"cx-item-list-items\">\n      <div class=\"row\">\n        <!-- Item Image -->\n        <div class=\"col-2 cx-image-container\">\n          <cx-media\n            [container]=\"returnEntry.orderEntry?.product.images?.PRIMARY\"\n          ></cx-media>\n        </div>\n        <!-- Item Information -->\n        <div class=\"cx-info col-10\">\n          <div class=\"cx-info-container row\">\n            <!-- Item Description -->\n            <div class=\"col-md-3 col-lg-4 col-xl-5\">\n              <div *ngIf=\"returnEntry.orderEntry?.product.name\" class=\"cx-name\">\n                {{ returnEntry.orderEntry?.product.name }}\n              </div>\n              <div *ngIf=\"returnEntry.orderEntry?.product.code\" class=\"cx-code\">\n                {{ 'cartItems.id' | cxTranslate }}\n                {{ returnEntry.orderEntry?.product.code }}\n              </div>\n              <!-- Variants -->\n              <div\n                *ngFor=\"\n                  let variant of (returnEntry.orderEntry?.product\n                    .baseOptions)[0]?.selected?.variantOptionQualifiers\n                \"\n                class=\"cx-property\"\n              >\n                <div class=\"cx-label\" *ngIf=\"variant.name\">\n                  {{ variant.name }}:\n                </div>\n                <div class=\"cx-value\" *ngIf=\"variant.value\">\n                  {{ variant.value }}\n                </div>\n              </div>\n            </div>\n            <!-- Item Price -->\n            <div\n              *ngIf=\"returnEntry.orderEntry?.basePrice\"\n              class=\"cx-price col-md-3 col-lg-2 col-xl-2\"\n            >\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.itemPrice' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.orderEntry?.basePrice?.formattedValue }}\n              </div>\n            </div>\n            <!-- return Quantity -->\n            <div class=\"cx-quantity col-md-3 col-lg-3 col-xl-3\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.returnQty' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.expectedQuantity }}\n              </div>\n            </div>\n            <!-- Total Price -->\n            <div class=\"cx-total col-md-3 col-lg-3 col-xl-2\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.total' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.refundAmount?.formattedValue }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnRequestItemsComponent);

let ReturnRequestTotalsComponent = class ReturnRequestTotalsComponent {
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
    ngOnDestroy() {
        this.returnRequestService.clearReturnRequest();
    }
};
ReturnRequestTotalsComponent.ctorParameters = () => [
    { type: ReturnRequestService }
];
ReturnRequestTotalsComponent = __decorate([
    Component({
        selector: 'cx-return-request-totals',
        template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <h4>{{ 'returnRequest.summary' | cxTranslate }}</h4>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.subtotal' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.subTotal?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.deliveryCode' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.deliveryCost?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-summary-total\">\n        <div class=\"col-6 cx-summary-label\">\n          {{ 'returnRequest.estimatedRefund' | cxTranslate }}\n        </div>\n        <div class=\"col-6 cx-summary-amount\">\n          {{ returnRequest.totalPrice?.formattedValue }}\n        </div>\n      </div>\n      <div class=\"cx-summary-row cx-footnote\">\n        {{ 'returnRequest.note' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnRequestTotalsComponent);

const components = [
    ReturnRequestOverviewComponent,
    ReturnRequestItemsComponent,
    ReturnRequestTotalsComponent,
];
const ɵ0$7 = { cxRoute: 'returnRequestDetails' };
let ReturnRequestDetailModule = class ReturnRequestDetailModule {
};
ReturnRequestDetailModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$7,
                },
            ]),
            RouterModule,
            UrlModule,
            I18nModule,
            MediaModule,
            FeaturesConfigModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ReturnRequestOverviewComponent: {
                        component: ReturnRequestOverviewComponent,
                    },
                    ReturnRequestItemsComponent: {
                        component: ReturnRequestItemsComponent,
                    },
                    ReturnRequestTotalsComponent: {
                        component: ReturnRequestTotalsComponent,
                    },
                },
            }),
        ],
        declarations: [...components],
        exports: [...components],
        entryComponents: [...components],
    })
], ReturnRequestDetailModule);

let OrderReturnRequestListComponent = class OrderReturnRequestListComponent {
    constructor(returnRequestService, translation) {
        this.returnRequestService = returnRequestService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.returnRequests$ = this.returnRequestService.getOrderReturnRequestList(this.PAGE_SIZE).pipe(tap((requestList) => {
            if (requestList.pagination) {
                this.sortType = requestList.pagination.sort;
            }
        }));
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.returnRequests$.pipe(map((returnRequests) => returnRequests.pagination.totalResults), filter((totalResults) => totalResults !== undefined), take(1));
    }
    ngOnDestroy() {
        this.returnRequestService.clearOrderReturnRequestList();
    }
    changeSortCode(sortCode) {
        const event = {
            sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchReturnRequests(event);
    }
    pageChange(page) {
        const event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchReturnRequests(event);
    }
    getSortLabels() {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.rma'),
        ]).pipe(map(([textByDate, textByRma]) => {
            return {
                byDate: textByDate,
                byRMA: textByRma,
            };
        }));
    }
    fetchReturnRequests(event) {
        this.returnRequestService.loadOrderReturnRequestList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
};
OrderReturnRequestListComponent.ctorParameters = () => [
    { type: OrderReturnRequestService },
    { type: TranslationService }
];
OrderReturnRequestListComponent = __decorate([
    Component({
        selector: 'cx-order-return-request-list',
        template: "<ng-container *ngIf=\"returnRequests$ | async as returnRequests\">\n  <div class=\"container\">\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"returnRequests.pagination.totalResults > 0\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              placeholder=\"{{\n                'returnRequestList.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.orderId' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'returnRequestList.date' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.status' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let return of returnRequests.returnRequests\">\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'returnRequestDetails',\n                      params: return\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.rma }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: return?.order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.order?.code }}</a\n                >\n              </td>\n\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.date' | cxTranslate }}\n                </div>\n                {{ return?.creationTime | cxDate: 'longDate' }}\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'returnRequestList.status' | cxTranslate }}\n                </div>\n                {{\n                  'returnRequestList.statusDisplay'\n                    | cxTranslate: { context: return?.status }\n                }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              placeholder=\"{{\n                'returnRequestList.sortByMostRecent' | cxTranslate\n              }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderReturnRequestListComponent);

let ReturnRequestListModule = class ReturnRequestListModule {
};
ReturnRequestListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            ListNavigationModule,
            UrlModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    OrderReturnRequestListComponent: {
                        component: OrderReturnRequestListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [OrderReturnRequestListComponent],
        exports: [OrderReturnRequestListComponent],
        entryComponents: [OrderReturnRequestListComponent],
    })
], ReturnRequestListModule);

let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    NgModule({
        imports: [
            OrderHistoryModule,
            OrderDetailsModule,
            OrderCancellationModule,
            OrderReturnModule,
            ReturnRequestListModule,
            ReturnRequestDetailModule,
        ],
    })
], OrderModule);

let PaymentMethodsComponent = class PaymentMethodsComponent {
    constructor(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap((paymentDetails) => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find((paymentDetail) => paymentDetail.defaultPayment)) {
                this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        }));
        this.editCard = null;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    }
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, cardType, }) {
        return combineLatest([
            this.translation.translate('paymentCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('paymentCard.deleteConfirmation'),
            this.translation.translate('paymentCard.expires', {
                month: expiryMonth,
                year: expiryYear,
            }),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
        ]).pipe(map(([textSetAsDefault, textDelete, textDeleteConfirmation, textExpires, textDefaultPaymentMethod,]) => {
            const actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            const card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions,
                deleteMsg: textDeleteConfirmation,
                img: this.getCardIcon(cardType.code),
            };
            return card;
        }));
    }
    deletePaymentMethod(paymentMethod) {
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
        this.editCard = null;
    }
    setEdit(paymentMethod) {
        this.editCard = paymentMethod.id;
    }
    cancelCard() {
        this.editCard = null;
    }
    setDefaultPaymentMethod(paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
    }
    getCardIcon(code) {
        let ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    }
};
PaymentMethodsComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: TranslationService }
];
PaymentMethodsComponent = __decorate([
    Component({
        selector: 'cx-payment-methods',
        template: "<ng-container *ngIf=\"paymentMethods$ | async as paymentMethods\">\n  <div class=\"cx-payment container\">\n    <div class=\"cx-header\">\n      <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n    </div>\n\n    <div class=\"cx-body\">\n      <div class=\"cx-msg\">\n        {{\n          'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n      <ng-template #cards>\n        <div class=\"cx-existing row\">\n          <div\n            class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n            *ngFor=\"let paymentMethod of paymentMethods\"\n          >\n            <div class=\"cx-payment-inner\">\n              <cx-card\n                [border]=\"true\"\n                [fitToContainer]=\"true\"\n                [content]=\"getCardContent(paymentMethod) | async\"\n                (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n                (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n                (editCard)=\"setEdit(paymentMethod)\"\n                [editMode]=\"editCard === paymentMethod.id\"\n                (cancelCard)=\"cancelCard()\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
    })
], PaymentMethodsComponent);

let PaymentMethodsModule = class PaymentMethodsModule {
};
PaymentMethodsModule = __decorate([
    NgModule({
        imports: [CommonModule, CardModule, SpinnerModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    AccountPaymentDetailsComponent: {
                        component: PaymentMethodsComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [PaymentMethodsComponent],
        exports: [PaymentMethodsComponent],
        entryComponents: [PaymentMethodsComponent],
    })
], PaymentMethodsModule);

let ResetPasswordFormComponent = class ResetPasswordFormComponent {
    constructor(fb, routingService, userService) {
        this.fb = fb;
        this.routingService = routingService;
        this.userService = userService;
        this.subscription = new Subscription();
        this.resetPasswordForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            repassword: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'repassword'),
        });
    }
    ngOnInit() {
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe((state) => (this.token = state.state.queryParams['token'])));
        this.subscription.add(this.userService.isPasswordReset().subscribe((reset) => {
            if (reset) {
                this.routingService.go({ cxRoute: 'login' });
            }
        }));
    }
    resetPassword() {
        if (this.resetPasswordForm.valid) {
            const password = this.resetPasswordForm.get('password').value;
            this.userService.resetPassword(this.token, password);
        }
        else {
            this.resetPasswordForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
ResetPasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: RoutingService },
    { type: UserService }
];
ResetPasswordFormComponent = __decorate([
    Component({
        selector: 'cx-reset-password-form',
        template: "<form\n  (ngSubmit)=\"resetPassword()\"\n  [formGroup]=\"resetPasswordForm\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <cx-form-errors\n        [control]=\"resetPasswordForm.get('password')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <cx-form-errors\n        [control]=\"resetPasswordForm.get('repassword')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
    })
], ResetPasswordFormComponent);

let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ResetPasswordComponent: {
                        component: ResetPasswordFormComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
        ],
        declarations: [ResetPasswordFormComponent],
        exports: [ResetPasswordFormComponent],
        entryComponents: [ResetPasswordFormComponent],
    })
], ResetPasswordModule);

let UpdateEmailFormComponent = class UpdateEmailFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.saveEmail = new EventEmitter();
        this.cancelEmail = new EventEmitter();
        this.updateEmailForm = this.fb.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            confirmEmail: ['', [Validators.required]],
            password: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.emailsMustMatch('email', 'confirmEmail'),
        });
    }
    onSubmit() {
        if (this.updateEmailForm.valid) {
            const newUid = this.updateEmailForm.get('confirmEmail').value;
            const password = this.updateEmailForm.get('password').value;
            this.saveEmail.emit({ newUid, password });
        }
        else {
            this.updateEmailForm.markAllAsTouched();
        }
    }
    onCancel() {
        this.cancelEmail.emit();
    }
};
UpdateEmailFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Output()
], UpdateEmailFormComponent.prototype, "saveEmail", void 0);
__decorate([
    Output()
], UpdateEmailFormComponent.prototype, "cancelEmail", void 0);
UpdateEmailFormComponent = __decorate([
    Component({
        selector: 'cx-update-email-form',
        template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"updateEmailForm\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n        />\n        <cx-form-errors\n          [control]=\"updateEmailForm.get('email')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n        />\n        <cx-form-errors\n          [control]=\"updateEmailForm.get('confirmEmail')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          autocomplete=\"new-password\"\n        />\n        <cx-form-errors\n          [control]=\"updateEmailForm.get('password')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
    })
], UpdateEmailFormComponent);

let UpdateEmailComponent = class UpdateEmailComponent {
    constructor(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe((success) => this.onSuccess(success)));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    }
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    onSubmit({ newUid, password }) {
        this.newUid = newUid;
        this.userService.updateEmail(password, newUid);
    }
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({
                key: 'updateEmailForm.emailUpdateSuccess',
                params: { newUid: this.newUid },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.authService.logout();
            this.routingService.go({ cxRoute: 'login' }, null, {
                state: {
                    newUid: this.newUid,
                },
            });
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetUpdateEmailResultState();
    }
};
UpdateEmailComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: UserService },
    { type: AuthService }
];
UpdateEmailComponent = __decorate([
    Component({
        selector: 'cx-update-email',
        template: "<ng-container>\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
    })
], UpdateEmailComponent);

let UpdateEmailModule = class UpdateEmailModule {
};
UpdateEmailModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    UpdateEmailComponent: {
                        component: UpdateEmailComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
        exports: [UpdateEmailComponent, UpdateEmailFormComponent],
        entryComponents: [UpdateEmailComponent],
    })
], UpdateEmailModule);

let UpdatePasswordFormComponent = class UpdatePasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submitted = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    ngOnInit() {
        this.updatePasswordForm = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('newPassword', 'newPasswordConfirm'),
        });
    }
    onSubmit() {
        if (this.updatePasswordForm.valid) {
            this.submitted.emit({
                oldPassword: this.updatePasswordForm.value.oldPassword,
                newPassword: this.updatePasswordForm.value.newPassword,
            });
        }
        else {
            this.updatePasswordForm.markAllAsTouched();
        }
    }
    onCancel() {
        this.cancelled.emit();
    }
};
UpdatePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Output()
], UpdatePasswordFormComponent.prototype, "submitted", void 0);
__decorate([
    Output()
], UpdatePasswordFormComponent.prototype, "cancelled", void 0);
UpdatePasswordFormComponent = __decorate([
    Component({
        selector: 'cx-update-password-form',
        template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"updatePasswordForm\"\n  class=\"cx-update-password-component\"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <cx-form-errors\n          [control]=\"updatePasswordForm.get('oldPassword')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <cx-form-errors\n          [control]=\"updatePasswordForm.get('newPassword')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <cx-form-errors\n          [control]=\"updatePasswordForm.get('newPasswordConfirm')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
    })
], UpdatePasswordFormComponent);

let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe((success) => this.onSuccess(success)));
    }
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    onSubmit({ oldPassword, newPassword, }) {
        this.userService.updatePassword(oldPassword, newPassword);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetUpdatePasswordProcessState();
    }
};
UpdatePasswordComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];
UpdatePasswordComponent = __decorate([
    Component({
        selector: 'cx-update-password',
        template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submitted)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
    })
], UpdatePasswordComponent);

let UpdatePasswordModule = class UpdatePasswordModule {
};
UpdatePasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    UpdatePasswordComponent: {
                        component: UpdatePasswordComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
        exports: [UpdatePasswordComponent, UpdatePasswordFormComponent],
        entryComponents: [UpdatePasswordComponent],
    })
], UpdatePasswordModule);

let UpdateProfileFormComponent = class UpdateProfileFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submitted = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.updateProfileForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
    }
    ngOnInit() {
        if (this.user) {
            this.updateProfileForm.patchValue(this.user);
        }
    }
    onSubmit() {
        if (this.updateProfileForm.valid) {
            this.submitted.emit({
                userUpdates: Object.assign({}, this.updateProfileForm.value),
            });
        }
        else {
            this.updateProfileForm.markAllAsTouched();
        }
    }
    onCancel() {
        this.cancelled.emit();
    }
};
UpdateProfileFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Input()
], UpdateProfileFormComponent.prototype, "user", void 0);
__decorate([
    Input()
], UpdateProfileFormComponent.prototype, "titles", void 0);
__decorate([
    Output()
], UpdateProfileFormComponent.prototype, "submitted", void 0);
__decorate([
    Output()
], UpdateProfileFormComponent.prototype, "cancelled", void 0);
UpdateProfileFormComponent = __decorate([
    Component({
        selector: 'cx-update-profile-form',
        template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"updateProfileForm\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n        />\n        <cx-form-errors\n          [control]=\"updateProfileForm.get('firstName')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n        />\n        <cx-form-errors\n          [control]=\"updateProfileForm.get('lastName')\"\n        ></cx-form-errors>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
    })
], UpdateProfileFormComponent);

let UpdateProfileComponent = class UpdateProfileComponent {
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap((titles) => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe((success) => this.onSuccess(success)));
    }
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({ key: 'updateProfileForm.profileUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    onSubmit({ userUpdates }) {
        this.userService.updatePersonalDetails(userUpdates);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    }
};
UpdateProfileComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];
UpdateProfileComponent = __decorate([
    Component({
        selector: 'cx-update-profile',
        template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submitted)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
    })
], UpdateProfileComponent);

let UpdateProfileModule = class UpdateProfileModule {
};
UpdateProfileModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    UpdateProfileComponent: {
                        component: UpdateProfileComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
        exports: [UpdateProfileComponent, UpdateProfileFormComponent],
        entryComponents: [UpdateProfileComponent],
    })
], UpdateProfileModule);

let MyCouponsComponentService = class MyCouponsComponentService {
    constructor(routingService, translation) {
        this.routingService = routingService;
        this.translation = translation;
        this.RELEVANCE = ':relevance';
        this.CUSTOMER_COUPON_CODE = ':customerCouponCode:';
    }
    launchSearchPage(coupon) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: this.buildSearchParam(coupon) },
        }, { couponcode: coupon.couponId });
    }
    buildSearchParam(coupon) {
        return coupon.allProductsApplicable
            ? this.RELEVANCE
            : this.RELEVANCE + this.CUSTOMER_COUPON_CODE + coupon.couponId;
    }
    getSortLabels() {
        return combineLatest([
            this.translation.translate('myCoupons.startDateAsc'),
            this.translation.translate('myCoupons.startDateDesc'),
            this.translation.translate('myCoupons.endDateAsc'),
            this.translation.translate('myCoupons.endDateDesc'),
        ]).pipe(map(([textByStartDateAsc, textByStartDateDesc, textByEndDateAsc, textByEndDateDesc,]) => {
            return {
                byStartDateAsc: textByStartDateAsc,
                byStartDateDesc: textByStartDateDesc,
                byEndDateAsc: textByEndDateAsc,
                byEndDateDesc: textByEndDateDesc,
            };
        }));
    }
};
MyCouponsComponentService.ctorParameters = () => [
    { type: RoutingService },
    { type: TranslationService }
];
MyCouponsComponentService.ɵprov = ɵɵdefineInjectable({ factory: function MyCouponsComponentService_Factory() { return new MyCouponsComponentService(ɵɵinject(RoutingService), ɵɵinject(TranslationService)); }, token: MyCouponsComponentService, providedIn: "root" });
MyCouponsComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], MyCouponsComponentService);

let MyCouponsComponent = class MyCouponsComponent {
    constructor(couponService, myCouponsComponentService) {
        this.couponService = couponService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.iconTypes = ICON_TYPE;
        this.subscriptions = new Subscription();
        this.PAGE_SIZE = 10;
        this.sortMapping = {
            byStartDateAsc: 'startDate:asc',
            byStartDateDesc: 'startDate:desc',
            byEndDateAsc: 'endDate:asc',
            byEndDateDesc: 'endDate:desc',
        };
        this.sort = 'byStartDateAsc';
        this.sortOptions = [
            {
                code: 'byStartDateAsc',
                selected: false,
            },
            {
                code: 'byStartDateDesc',
                selected: false,
            },
            {
                code: 'byEndDateAsc',
                selected: false,
            },
            {
                code: 'byEndDateDesc',
                selected: false,
            },
        ];
    }
    ngOnInit() {
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap((coupons) => (this.pagination = {
            currentPage: coupons.pagination.page,
            pageSize: coupons.pagination.count,
            totalPages: coupons.pagination.totalPages,
            totalResults: coupons.pagination.totalCount,
            sort: this.sort,
        })));
        this.couponsLoading$ = this.couponService.getCustomerCouponsLoading();
        this.couponSubscriptionLoading$ = combineLatest([
            this.couponService.getSubscribeCustomerCouponResultLoading(),
            this.couponService.getUnsubscribeCustomerCouponResultLoading(),
        ]).pipe(map(([subscribing, unsubscribing]) => subscribing || unsubscribing));
        this.sortLabels = this.myCouponsComponentService.getSortLabels();
        this.subscriptions
            .add(this.couponService
            .getSubscribeCustomerCouponResultError()
            .subscribe((error) => {
            this.subscriptionFail(error);
        }))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe((error) => {
            this.subscriptionFail(error);
        }));
    }
    subscriptionFail(error) {
        if (error) {
            this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        }
    }
    sortChange(sort) {
        this.sort = sort;
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, this.pagination.currentPage, this.sortMapping[sort]);
    }
    pageChange(page) {
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE, page, this.sortMapping[this.sort]);
    }
    notificationChange({ couponId, notification, }) {
        if (notification) {
            this.couponService.subscribeCustomerCoupon(couponId);
        }
        else {
            this.couponService.unsubscribeCustomerCoupon(couponId);
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
MyCouponsComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: MyCouponsComponentService }
];
MyCouponsComponent = __decorate([
    Component({
        selector: 'cx-my-coupons',
        template: "<div class=\"cx-section\">\n  <ng-container *ngIf=\"!(couponsLoading$ | async); else loading\">\n    <ng-container *ngIf=\"couponResult$ | async as couponResult\">\n      <div class=\"cx-my-coupons-header\">\n        <h3>{{ 'myCoupons.myCoupons' | cxTranslate }}</h3>\n      </div>\n\n      <ng-container\n        *ngIf=\"couponResult.pagination.totalCount > 0; else noCoupons\"\n      >\n        <div class=\"cx-my-coupons-sort top row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination cx-mycoupon-thead-mobile\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n\n        <div class=\"row cx-coupon-deck\">\n          <div\n            *ngFor=\"let coupon of couponResult.coupons\"\n            class=\"col-md-6 cx-coupon-card\"\n          >\n            <cx-coupon-card\n              [coupon]=\"coupon\"\n              [couponSubscriptionLoading$]=\"couponSubscriptionLoading$\"\n              (notificationChanged)=\"notificationChange($event)\"\n            ></cx-coupon-card>\n          </div>\n        </div>\n\n        <div class=\"cx-my-coupons-sort bottom row\">\n          <div\n            class=\"cx-my-coupons-form-group form-group cx-mycoupon-thead-mobile col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"sortOptions\"\n              [sortLabels]=\"sortLabels | async\"\n              (sortListEvent)=\"sortChange($event)\"\n              [selectedOption]=\"sort\"\n              placeholder=\"{{ 'myCoupons.sortByMostRecent' | cxTranslate }}\"\n            >\n            </cx-sorting>\n          </div>\n          <div class=\"cx-my-coupons-pagination\">\n            <cx-pagination\n              [pagination]=\"pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <div class=\"cx-my-coupons-notes\">\n          <span>\n            <cx-icon [type]=\"iconTypes.INFO\"></cx-icon>\n            {{ 'myCoupons.notesPreffix' | cxTranslate\n            }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n              'myCoupons.notesLink' | cxTranslate\n            }}</a\n            >{{ 'myCoupons.notesSuffix' | cxTranslate }}</span\n          >\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #noCoupons>\n      <section>\n        <p class=\"cx-section-msg\">\n          {{ 'myCoupons.noCouponsMessage' | cxTranslate }}\n        </p>\n      </section>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"col-md-12 cx-coupon-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</div>\n"
    })
], MyCouponsComponent);

let CouponDialogComponent = class CouponDialogComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
};
CouponDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
__decorate([
    ViewChild('dialog', { read: ElementRef })
], CouponDialogComponent.prototype, "dialog", void 0);
CouponDialogComponent = __decorate([
    Component({
        selector: 'cx-coupon-dialog',
        template: "<div #dialog>\n  <!-- Modal Header -->\n\n  <div class=\"cx-dialog-header modal-header\">\n    <div class=\"cx-dialog-title modal-title\">\n      {{ 'myCoupons.dialogTitle' | cxTranslate }}\n    </div>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n  <!-- Modal Body -->\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"cx-dialog-item col-sm-12 col-md-12\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n        <div class=\"cx-coupon-description\">{{ coupon?.description }}</div>\n\n        <div class=\"cx-coupon-dialog-date\">\n          <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n          <div class=\"cx-coupon-date\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n\n        <div class=\"cx-coupon-dialog-status\">\n          <p>{{ 'myCoupons.status' | cxTranslate }}</p>\n          <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n            {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CouponDialogComponent);

let CouponCardComponent = class CouponCardComponent {
    constructor(modalService, myCouponsComponentService) {
        this.modalService = modalService;
        this.myCouponsComponentService = myCouponsComponentService;
        this.notificationChanged = new EventEmitter();
    }
    onSubscriptionChange() {
        this.notificationChanged.emit({
            couponId: this.coupon.couponId,
            notification: !this.coupon.notificationOn,
        });
    }
    readMore() {
        let modalInstance;
        this.modalRef = this.modalService.open(CouponDialogComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.coupon = this.coupon;
    }
    findProducts() {
        this.myCouponsComponentService.launchSearchPage(this.coupon);
    }
};
CouponCardComponent.ctorParameters = () => [
    { type: ModalService },
    { type: MyCouponsComponentService }
];
__decorate([
    Input()
], CouponCardComponent.prototype, "coupon", void 0);
__decorate([
    Input()
], CouponCardComponent.prototype, "couponSubscriptionLoading$", void 0);
__decorate([
    Output()
], CouponCardComponent.prototype, "notificationChanged", void 0);
CouponCardComponent = __decorate([
    Component({
        selector: 'cx-coupon-card',
        template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CouponCardComponent);

let CouponClaimComponent = class CouponClaimComponent {
    constructor(couponService, routingService, messageService) {
        this.couponService = couponService;
        this.routingService = routingService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.routingService
            .getRouterState()
            .subscribe((k) => {
            const couponCode = k.state.params.couponCode;
            if (couponCode) {
                this.couponService.claimCustomerCoupon(couponCode);
                this.subscription = this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe((success) => {
                    if (success) {
                        this.messageService.add({ key: 'myCoupons.claimCustomerCoupon' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                    }
                    this.routingService.go({ cxRoute: 'coupons' });
                });
            }
            else {
                this.routingService.go({ cxRoute: 'notFound' });
            }
        })
            .unsubscribe();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
CouponClaimComponent.ctorParameters = () => [
    { type: CustomerCouponService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
CouponClaimComponent = __decorate([
    Component({
        template: "",
        selector: 'cx-coupon-claim'
    })
], CouponClaimComponent);

const ɵ0$8 = { cxRoute: 'couponClaim' };
let MyCouponsModule = class MyCouponsModule {
};
MyCouponsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CardModule,
            SpinnerModule,
            I18nModule,
            RouterModule,
            UrlModule,
            IconModule,
            ListNavigationModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [AuthGuard, CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$8,
                },
            ]),
        ],
        declarations: [
            MyCouponsComponent,
            CouponCardComponent,
            CouponDialogComponent,
            CouponClaimComponent,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    MyCouponsComponent: {
                        component: MyCouponsComponent,
                        guards: [AuthGuard],
                    },
                    CouponClaimComponent: {
                        component: CouponClaimComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        exports: [MyCouponsComponent, CouponClaimComponent],
        entryComponents: [
            MyCouponsComponent,
            CouponDialogComponent,
            CouponClaimComponent,
        ],
    })
], MyCouponsModule);

let NotificationPreferenceComponent = class NotificationPreferenceComponent {
    constructor(notificationPreferenceService) {
        this.notificationPreferenceService = notificationPreferenceService;
        this.preferences = [];
    }
    ngOnInit() {
        this.notificationPreferenceService.resetNotificationPreferences();
        this.preferences$ = this.notificationPreferenceService
            .getPreferences()
            .pipe(tap((preferences) => (this.preferences = preferences)));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map(([prefsLoading, updateLoading]) => prefsLoading || updateLoading));
    }
    updatePreference(preference) {
        const updatedPreferences = [];
        this.preferences.forEach((p) => {
            if (p.channel === preference.channel) {
                updatedPreferences.push(Object.assign(Object.assign({}, p), { enabled: !p.enabled }));
            }
            else {
                updatedPreferences.push(p);
            }
        });
        this.notificationPreferenceService.updatePreferences(updatedPreferences);
    }
};
NotificationPreferenceComponent.ctorParameters = () => [
    { type: UserNotificationPreferenceService }
];
NotificationPreferenceComponent = __decorate([
    Component({
        selector: 'cx-notification-preference',
        template: "<ng-container *ngIf=\"preferences$ | async as preferences\">\n  <div *ngIf=\"preferences.length > 0; else loading\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"pref-header\">\n          {{ 'notificationPreference.message' | cxTranslate }}\n        </div>\n        <div class=\"form-check cx-notification-channels\">\n          <ng-container *ngFor=\"let preference of preferences\">\n            <label *ngIf=\"preference.visible\" class=\"pref-channel\">\n              <input\n                class=\"form-check-input cx-np-checkbox\"\n                role=\"checkbox\"\n                type=\"checkbox\"\n                [checked]=\"preference.enabled\"\n                (change)=\"updatePreference(preference)\"\n                [disabled]=\"isLoading$ | async\"\n              />\n              <span class=\"form-check-label\">\n                {{\n                  'notificationPreference.' + preference.channel | cxTranslate\n                }}\n                {{ preference.value }}\n              </span>\n            </label>\n          </ng-container>\n        </div>\n        <label class=\"pref-note\"\n          ><strong>{{ 'notificationPreference.note' | cxTranslate }}</strong\n          >{{ 'notificationPreference.noteMessage' | cxTranslate }}\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], NotificationPreferenceComponent);

let NotificationPreferenceModule = class NotificationPreferenceModule {
};
NotificationPreferenceModule = __decorate([
    NgModule({
        declarations: [NotificationPreferenceComponent],
        imports: [CommonModule, SpinnerModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    NotificationPreferenceComponent: {
                        component: NotificationPreferenceComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        exports: [NotificationPreferenceComponent],
        entryComponents: [NotificationPreferenceComponent],
    })
], NotificationPreferenceModule);

let MyInterestsComponent = class MyInterestsComponent {
    constructor(productInterestService, translationService, productService) {
        this.productInterestService = productInterestService;
        this.translationService = translationService;
        this.productService = productService;
        this.DEFAULT_PAGE_SIZE = 10;
        this.sortMapping = {
            byNameAsc: 'name:asc',
            byNameDesc: 'name:desc',
        };
        this.sort = 'byNameAsc';
        this.sortOptions = [
            {
                code: 'byNameAsc',
                selected: false,
            },
            {
                code: 'byNameDesc',
                selected: false,
            },
        ];
    }
    ngOnInit() {
        this.interests$ = this.productInterestService
            .getAndLoadProductInterests(this.DEFAULT_PAGE_SIZE)
            .pipe(tap((interests) => (this.pagination = {
            currentPage: interests.pagination.page,
            pageSize: interests.pagination.count,
            totalPages: interests.pagination.totalPages,
            totalResults: interests.pagination.totalCount,
            sort: 'byNameAsc',
        })), map((interest) => (Object.assign(Object.assign({}, interest), { results: interest.results
                ? interest.results.map((result) => (Object.assign(Object.assign({}, result), { product$: this.getProduct(result) })))
                : interest.results }))));
        this.getInterestsloading$ = this.productInterestService.getProdutInterestsLoading();
        this.isRemoveDisabled$ = combineLatest([
            this.getInterestsloading$,
            this.productInterestService.getRemoveProdutInterestLoading(),
        ]).pipe(map(([getLoading, removeLoading]) => getLoading || removeLoading));
        this.sortLabels = this.getSortLabels();
    }
    getSortLabels() {
        return combineLatest([
            this.translationService.translate('myInterests.sorting.byNameAsc'),
            this.translationService.translate('myInterests.sorting.byNameDesc'),
        ]).pipe(map(([asc, desc]) => {
            return {
                byNameAsc: asc,
                byNameDesc: desc,
            };
        }));
    }
    getProduct(interest) {
        return this.productService.get(interest.product.code, ProductScope.DETAILS);
    }
    removeInterest(relation) {
        this.productInterestService.removeProdutInterest({
            product: relation.product,
            productInterestEntry: relation.productInterestEntry,
        });
    }
    sortChange(sort) {
        this.sort = sort;
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, 0, this.sortMapping[sort]);
    }
    pageChange(page) {
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, page, this.sortMapping[this.sort]);
    }
    ngOnDestroy() {
        this.productInterestService.clearProductInterests();
        this.productInterestService.resetRemoveInterestState();
    }
};
MyInterestsComponent.ctorParameters = () => [
    { type: UserInterestsService },
    { type: TranslationService },
    { type: ProductService }
];
MyInterestsComponent = __decorate([
    Component({
        selector: 'cx-my-interests',
        template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    tabindex=\"-1\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media [container]=\"product.images?.PRIMARY\"></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row\">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], MyInterestsComponent);

let MyInterestsModule = class MyInterestsModule {
};
MyInterestsModule = __decorate([
    NgModule({
        declarations: [MyInterestsComponent],
        imports: [
            CommonModule,
            I18nModule,
            RouterModule,
            ListNavigationModule,
            I18nModule,
            UrlModule,
            MediaModule,
            SpinnerModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    MyInterestsComponent: {
                        component: MyInterestsComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        exports: [MyInterestsComponent],
        entryComponents: [MyInterestsComponent],
    })
], MyInterestsModule);

let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    ngOnInit() {
        this.setTitle();
        this.setCrumbs();
    }
    setTitle() {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((meta) => meta.heading || meta.title));
    }
    setCrumbs() {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home'),
        ]).pipe(map(([meta, textHome]) => (meta === null || meta === void 0 ? void 0 : meta.breadcrumbs) ? meta.breadcrumbs : [{ label: textHome, link: '/' }]));
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: PageMetaService },
    { type: TranslationService }
];
BreadcrumbComponent = __decorate([
    Component({
        selector: 'cx-breadcrumb',
        template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BreadcrumbComponent);

let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, CmsPageTitleModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    BreadcrumbComponent: {
                        component: BreadcrumbComponent,
                    },
                },
            }),
        ],
        declarations: [BreadcrumbComponent],
        exports: [BreadcrumbComponent],
        entryComponents: [BreadcrumbComponent],
    })
], BreadcrumbModule);

let NavigationService = class NavigationService {
    constructor(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    createNavigation(data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map(([data, nav]) => {
            return data
                ? {
                    title: data.name,
                    children: [nav],
                }
                : undefined;
        }));
    }
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     */
    getNavigationNode(data$) {
        if (!data$) {
            return of();
        }
        return data$.pipe(filter((data) => !!data), switchMap((data) => {
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap((items) => {
                if (items === undefined) {
                    this.loadNavigationEntryItems(navigation, true);
                }
                else {
                    // we should check whether the existing node items are what expected
                    const expectedItems = [];
                    this.loadNavigationEntryItems(navigation, false, expectedItems);
                    const existingItems = Object.keys(items).map((key) => items[key].uid);
                    const missingItems = expectedItems.filter((it) => !existingItems.includes(it.id));
                    if (missingItems.length > 0) {
                        this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
                }
            }), filter(Boolean), map((items) => this.populateNavigationNode(navigation, items)));
        }));
    }
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    loadNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach((entry) => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach((child) => this.loadNavigationEntryItems(child, false, itemsList));
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    }
    /**
     * Create a new node tree for the view
     * @param nodeData
     * @param items
     */
    populateNavigationNode(nodeData, items) {
        const node = {};
        if (nodeData.title) {
            // the node title will be populated by the first entry (if any)
            // if there's no nodeData.title available
            node.title = nodeData.title;
        }
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.populateLink(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            const children = nodeData.children
                .map((child) => this.populateNavigationNode(child, items))
                .filter(Boolean);
            if (children.length > 0) {
                node.children = children;
            }
        }
        // return null in case there are no children
        return Object.keys(node).length === 0 ? null : node;
    }
    /**
     * The node link is driven by the first entry.
     */
    populateLink(node, entry, items) {
        const item = items[`${entry.itemId}_${entry.itemSuperType}`];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
            const url = this.getLink(item);
            // only populate the node link if we have a visible node
            if (node.title && url) {
                node.url = url;
                // the backend provide boolean value for the target
                // in case the link should be opened in a new window
                node.target = !!item.target ? '_blank' : '';
            }
        }
    }
    /**
     *
     * Gets the URL or link to a related item (category),
     * also taking into account content pages (contentPageLabelOrId)
     * and product pages (productCode)
     */
    getLink(item) {
        if (item.url) {
            return item.url;
        }
        else if (item.contentPageLabelOrId) {
            return item.contentPageLabelOrId;
        }
        else if (item.categoryCode) {
            return this.semanticPathService.transform({
                cxRoute: 'category',
                params: {
                    code: item.categoryCode,
                    name: item.name,
                },
            });
        }
        else if (item.productCode) {
            return this.semanticPathService.transform({
                cxRoute: 'product',
                params: {
                    code: item.productCode,
                    name: item.name,
                },
            });
        }
    }
};
NavigationService.ctorParameters = () => [
    { type: CmsService },
    { type: SemanticPathService }
];
NavigationService.ɵprov = ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(ɵɵinject(CmsService), ɵɵinject(SemanticPathService)); }, token: NavigationService, providedIn: "root" });
NavigationService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NavigationService);

let CategoryNavigationComponent = class CategoryNavigationComponent {
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.data$ = this.componentData.data$;
    }
};
CategoryNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
CategoryNavigationComponent = __decorate([
    Component({
        selector: 'cx-category-navigation',
        template: "<cx-navigation-ui\n  *ngIf=\"data$ | async as data\"\n  [node]=\"node$ | async\"\n  [ngClass]=\"data.styleClass\"\n  [wrapAfter]=\"data.wrapAfter\"\n></cx-navigation-ui>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CategoryNavigationComponent);

let NavigationUIComponent = class NavigationUIComponent {
    constructor(router, renderer, elemRef) {
        this.router = router;
        this.renderer = renderer;
        this.elemRef = elemRef;
        /**
         * the icon type that will be used for navigation nodes
         * with children.
         */
        this.iconType = ICON_TYPE;
        /**
         * Indicates whether the navigation should support flyout.
         * If flyout is set to true, the
         * nested child navigation nodes will only appear on hover or focus.
         */
        this.flyout = true;
        this.isOpen = false;
        this.openNodes = [];
        this.subscriptions = new Subscription();
        this.resize = new EventEmitter();
        this.subscriptions.add(this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => this.clear()));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe(() => {
            this.alignWrappersToRightIfStickOut();
        }));
    }
    onResize() {
        this.resize.next();
    }
    toggleOpen(event) {
        if (event.type === 'keydown') {
            event.preventDefault();
        }
        const node = event.currentTarget;
        if (this.openNodes.includes(node)) {
            if (event.type === 'keydown') {
                this.back();
            }
            else {
                this.openNodes = this.openNodes.filter((n) => n !== node);
                this.renderer.removeClass(node, 'is-open');
            }
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    back() {
        if (this.openNodes[this.openNodes.length - 1]) {
            this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
            this.openNodes.pop();
            this.updateClasses();
        }
    }
    clear() {
        this.openNodes = [];
        this.updateClasses();
    }
    onMouseEnter(event) {
        this.alignWrapperToRightIfStickOut(event.currentTarget);
        this.focusAfterPreviousClicked(event);
    }
    getTotalDepth(node, depth = 0) {
        if (node.children && node.children.length > 0) {
            return Math.max(...node.children.map((n) => this.getTotalDepth(n, depth + 1)));
        }
        else {
            return depth;
        }
    }
    getColumnCount(length) {
        return Math.round(length / (this.wrapAfter || length));
    }
    focusAfterPreviousClicked(event) {
        const target = ((event.target || event.relatedTarget));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
    alignWrapperToRightIfStickOut(node) {
        const wrapper = node.querySelector('.wrapper');
        const body = node.closest('body');
        if (wrapper) {
            this.renderer.removeStyle(wrapper, 'margin-left');
            if (wrapper.offsetLeft + wrapper.offsetWidth >
                body.offsetLeft + body.offsetWidth) {
                this.renderer.setStyle(wrapper, 'margin-left', `${node.offsetWidth - wrapper.offsetWidth}px`);
            }
        }
    }
    alignWrappersToRightIfStickOut() {
        const navs = this.elemRef.nativeElement.childNodes;
        Array.from(navs)
            .filter((node) => node.tagName === 'NAV')
            .forEach((nav) => this.alignWrapperToRightIfStickOut(nav));
    }
    updateClasses() {
        this.openNodes.forEach((node, i) => {
            if (i + 1 < this.openNodes.length) {
                this.renderer.addClass(node, 'is-opened');
                this.renderer.removeClass(node, 'is-open');
            }
            else {
                this.renderer.removeClass(node, 'is-opened');
                this.renderer.addClass(node, 'is-open');
            }
        });
        this.isOpen = this.openNodes.length > 0;
    }
};
NavigationUIComponent.ctorParameters = () => [
    { type: Router },
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input()
], NavigationUIComponent.prototype, "node", void 0);
__decorate([
    Input()
], NavigationUIComponent.prototype, "wrapAfter", void 0);
__decorate([
    Input(), HostBinding('class.flyout')
], NavigationUIComponent.prototype, "flyout", void 0);
__decorate([
    Input(), HostBinding('class.is-open')
], NavigationUIComponent.prototype, "isOpen", void 0);
__decorate([
    HostListener('window:resize')
], NavigationUIComponent.prototype, "onResize", null);
NavigationUIComponent = __decorate([
    Component({
        selector: 'cx-navigation-ui',
        template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child, depth: 0 }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\" let-depth=\"depth\">\n  <nav\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n    (keydown.space)=\"toggleOpen($event)\"\n    (keydown.esc)=\"back()\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5\n        [attr.aria-label]=\"node.title\"\n        [attr.tabindex]=\"flyout && (depth === 0 || node.url) ? 0 : -1\"\n      >\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getTotalDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container\n            *ngTemplateOutlet=\"nav; context: { node: child, depth: depth + 1 }\"\n          >\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], NavigationUIComponent);

let NavigationComponent = class NavigationComponent {
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.createNavigation(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((d) => d === null || d === void 0 ? void 0 : d.styleClass));
    }
};
NavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
NavigationComponent = __decorate([
    Component({
        selector: 'cx-navigation',
        template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], NavigationComponent);

let NavigationModule = class NavigationModule {
};
NavigationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            IconModule,
            GenericLinkModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    NavigationComponent: {
                        component: NavigationComponent,
                    },
                },
            }),
        ],
        declarations: [NavigationComponent, NavigationUIComponent],
        entryComponents: [NavigationComponent],
        exports: [NavigationComponent, NavigationUIComponent],
    })
], NavigationModule);

let CategoryNavigationModule = class CategoryNavigationModule {
};
CategoryNavigationModule = __decorate([
    NgModule({
        imports: [CommonModule, NavigationModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CategoryNavigationComponent: {
                        component: CategoryNavigationComponent,
                    },
                },
            }),
        ],
        declarations: [CategoryNavigationComponent],
        entryComponents: [CategoryNavigationComponent],
        exports: [CategoryNavigationComponent],
    })
], CategoryNavigationModule);

let FooterNavigationComponent = class FooterNavigationComponent {
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((d) => d === null || d === void 0 ? void 0 : d.styleClass));
    }
};
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
FooterNavigationComponent = __decorate([
    Component({
        selector: 'cx-footer-navigation',
        template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FooterNavigationComponent);

let FooterNavigationModule = class FooterNavigationModule {
};
FooterNavigationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            NavigationModule,
            GenericLinkModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    FooterNavigationComponent: {
                        component: FooterNavigationComponent,
                    },
                },
            }),
        ],
        declarations: [FooterNavigationComponent],
        entryComponents: [FooterNavigationComponent],
        exports: [FooterNavigationComponent],
    })
], FooterNavigationModule);

const HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
let SearchBoxComponentService = class SearchBoxComponentService {
    constructor(searchService, routingService, translationService, winRef) {
        this.searchService = searchService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.winRef = winRef;
    }
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     */
    search(query, config) {
        if (!query || query === '') {
            this.clearResults();
            return;
        }
        if (config.minCharactersBeforeRequest &&
            query.length < config.minCharactersBeforeRequest) {
            return;
        }
        if (config.displayProducts) {
            this.searchService.search(query, {
                pageSize: config.maxProducts,
            });
        }
        if (config.displaySuggestions) {
            this.searchService.searchSuggestions(query, {
                pageSize: config.maxSuggestions,
            });
        }
    }
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    getResults(config) {
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map(([productResults, suggestions, message]) => {
            return {
                products: productResults ? productResults.products : null,
                suggestions,
                message,
            };
        }), tap((results) => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results))));
    }
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    clearResults() {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    }
    hasBodyClass(className) {
        return this.winRef.document.body.classList.contains(className);
    }
    toggleBodyClass(className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    }
    hasResults(results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    }
    getProductResults(config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    }
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    getProductSuggestions(config) {
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map((res) => res.map((suggestion) => suggestion.value)), switchMap((suggestions) => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map((match) => (match ? [match] : [])));
                }
                else {
                    return of(suggestions);
                }
            }));
        }
    }
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    getExactSuggestion(config) {
        return this.getProductResults(config).pipe(switchMap((productResult) => {
            return productResult.products && productResult.products.length > 0
                ? this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        }));
    }
    getSearchMessage(config) {
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
        ]).pipe(switchMap(([productResult, suggestions]) => {
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                suggestions &&
                suggestions.length === 0) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        }));
    }
    /**
     * Navigates to the search result page with a given query
     */
    launchSearchPage(query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query },
        });
    }
    fetchTranslation(translationKey, options) {
        return this.translationService.translate(translationKey, options);
    }
};
SearchBoxComponentService.ctorParameters = () => [
    { type: SearchboxService },
    { type: RoutingService },
    { type: TranslationService },
    { type: WindowRef }
];
SearchBoxComponentService.ɵprov = ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(ɵɵinject(SearchboxService), ɵɵinject(RoutingService), ɵɵinject(TranslationService), ɵɵinject(WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
SearchBoxComponentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SearchBoxComponentService);

const DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 1,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    maxSuggestions: 5,
    displayProductImages: true,
};
let SearchBoxComponent = class SearchBoxComponent {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    constructor(searchBoxComponentService, componentData, winRef) {
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.winRef = winRef;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.config$.pipe(tap((c) => (this.config = c)), switchMap((config) => this.searchBoxComponentService.getResults(config)));
    }
    /**
     * Sets the search box input field
     */
    set queryText(value) {
        if (value) {
            this.search(value);
        }
    }
    /**
     * Returns the backend configuration or default configuration for the searchbox.
     */
    get config$() {
        if (this.componentData) {
            return this.componentData.data$.pipe(
            // Since the backend returns string values (i.e. displayProducts: "true") for
            // boolean values, we replace them with boolean values.
            map((c) => {
                return Object.assign(Object.assign({}, c), { displayProducts: (c === null || c === void 0 ? void 0 : c.displayProducts) === 'true' || (c === null || c === void 0 ? void 0 : c.displayProducts) === true, displayProductImages: (c === null || c === void 0 ? void 0 : c.displayProductImages) === 'true' ||
                        (c === null || c === void 0 ? void 0 : c.displayProductImages) === true, displaySuggestions: (c === null || c === void 0 ? void 0 : c.displaySuggestions) === 'true' ||
                        (c === null || c === void 0 ? void 0 : c.displaySuggestions) === true });
            }));
        }
        else {
            return of(DEFAULT_SEARCHBOX_CONFIG);
        }
    }
    /**
     * Closes the searchbox and opens the search result page.
     */
    search(query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    }
    /**
     * Opens the typeahead searchbox
     */
    open() {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    }
    /**
     * Closes the typehead searchbox.
     */
    close(event, force) {
        // Use timeout to detect changes
        setTimeout(() => {
            if ((!this.ignoreCloseEvent && !this.isSearchboxFocused()) || force) {
                this.blurSearchBox(event);
            }
        });
    }
    blurSearchBox(event) {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
        if (event && event.target) {
            event.target.blur();
        }
    }
    // Check if focus is on searchbox or result list elements
    isSearchboxFocused() {
        return (this.getResultElements().includes(this.getFocusedElement()) ||
            this.winRef.document.querySelector('input[aria-label="search"]') ===
                this.getFocusedElement());
    }
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    avoidReopen(event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    }
    // Return result list as HTMLElement array
    getResultElements() {
        return Array.from(this.winRef.document.querySelectorAll('.products > a, .suggestions > a'));
    }
    // Return focused element as HTMLElement
    getFocusedElement() {
        return this.winRef.document.activeElement;
    }
    getFocusedIndex() {
        return this.getResultElements().indexOf(this.getFocusedElement());
    }
    // Focus on previous item in results list
    focusPreviousChild(event) {
        event.preventDefault(); // Negate normal keyscroll
        const [results, focusedIndex] = [
            this.getResultElements(),
            this.getFocusedIndex(),
        ];
        // Focus on last index moving to first
        if (results.length) {
            if (focusedIndex < 1) {
                results[results.length - 1].focus();
            }
            else {
                results[focusedIndex - 1].focus();
            }
        }
    }
    // Focus on next item in results list
    focusNextChild(event) {
        event.preventDefault(); // Negate normal keyscroll
        const [results, focusedIndex] = [
            this.getResultElements(),
            this.getFocusedIndex(),
        ];
        // Focus on first index moving to last
        if (results.length) {
            if (focusedIndex >= results.length - 1) {
                results[0].focus();
            }
            else {
                results[focusedIndex + 1].focus();
            }
        }
    }
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a single product match, we could open the PDP.
     */
    launchSearchResult(event, query) {
        if (!query || query.trim().length === 0) {
            return;
        }
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    }
    /**
     * Disables closing the search result list.
     */
    disableClose() {
        this.ignoreCloseEvent = true;
    }
    /**
     * Clears the search box input field
     */
    clear(el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    }
};
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService },
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: WindowRef }
];
__decorate([
    Input('queryText')
], SearchBoxComponent.prototype, "queryText", null);
SearchBoxComponent = __decorate([
    Component({
        selector: 'cx-searchbox',
        template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(1, Optional())
], SearchBoxComponent);

let HighlightPipe = class HighlightPipe {
    transform(text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), `<span class="highlight">${match.trim()}</span>`);
    }
};
HighlightPipe = __decorate([
    Pipe({ name: 'cxHighlight' })
], HighlightPipe);

let SearchBoxModule = class SearchBoxModule {
};
SearchBoxModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            MediaModule,
            IconModule,
            UrlModule,
            I18nModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    SearchBoxComponent: {
                        component: SearchBoxComponent,
                    },
                },
            }),
        ],
        declarations: [SearchBoxComponent, HighlightPipe],
        entryComponents: [SearchBoxComponent],
        exports: [SearchBoxComponent],
    })
], SearchBoxModule);

let OrderConfirmationItemsComponent = class OrderConfirmationItemsComponent {
    constructor(checkoutService, promotionService) {
        this.checkoutService = checkoutService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Checkout;
    }
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
};
OrderConfirmationItemsComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: PromotionService }
];
OrderConfirmationItemsComponent = __decorate([
    Component({
        selector: 'cx-order-confirmation-items',
        template: "<div class=\"cx-order-items container\" *ngIf=\"order$ | async as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n\n  <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n    <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n  </ng-container>\n\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [readonly]=\"true\"\n    [promotionLocation]=\"promotionLocation\"\n  ></cx-cart-item-list>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderConfirmationItemsComponent);

let OrderConfirmationOverviewComponent = class OrderConfirmationOverviewComponent {
    constructor(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
    getAddressCardContent(deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(filter(() => Boolean(deliveryAddress)), map((textTitle) => ({
            title: textTitle,
            textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                `${deliveryAddress.town}, ${deliveryAddress.country.isocode}, ${deliveryAddress.postalCode}`,
                deliveryAddress.phone,
            ],
        })));
    }
    getDeliveryModeCardContent(deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(filter(() => Boolean(deliveryMode)), map((textTitle) => ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        })));
    }
    getBillingAddressCardContent(billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(filter(() => Boolean(billingAddress)), map((textTitle) => ({
            title: textTitle,
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                billingAddress.phone,
            ],
        })));
    }
    getPaymentInfoCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: Boolean(payment) ? payment.expiryMonth : '',
                year: Boolean(payment) ? payment.expiryYear : '',
            }),
        ]).pipe(filter(() => Boolean(payment)), map(([textTitle, textExpires]) => ({
            title: textTitle,
            textBold: payment.accountHolderName,
            text: [payment.cardNumber, textExpires],
        })));
    }
};
OrderConfirmationOverviewComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: TranslationService }
];
OrderConfirmationOverviewComponent = __decorate([
    Component({
        selector: 'cx-order-confirmation-overview',
        template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderConfirmationOverviewComponent);

let OrderConfirmationThankYouMessageComponent = class OrderConfirmationThankYouMessageComponent {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
        this.isGuestCustomer = false;
    }
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap((order) => {
            this.isGuestCustomer = order.guestCustomer;
            this.orderGuid = order.guid;
        }));
    }
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
};
OrderConfirmationThankYouMessageComponent.ctorParameters = () => [
    { type: CheckoutService }
];
OrderConfirmationThankYouMessageComponent = __decorate([
    Component({
        selector: 'cx-order-confirmation-thank-you-message',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </div>\n\n  <div class=\"cx-order-confirmation-message\">\n    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n    <p>\n      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n    </p>\n    <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n  </div>\n\n  <div *ngIf=\"isGuestCustomer\">\n    <cx-guest-register-form\n      [guid]=\"orderGuid\"\n      [email]=\"order.paymentInfo.billingAddress.email\"\n    ></cx-guest-register-form>\n  </div>\n\n  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderConfirmationThankYouMessageComponent);

let OrderConfirmationTotalsComponent = class OrderConfirmationTotalsComponent {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
};
OrderConfirmationTotalsComponent.ctorParameters = () => [
    { type: CheckoutService }
];
OrderConfirmationTotalsComponent = __decorate([
    Component({
        selector: 'cx-order-confirmation-totals',
        template: "<div class=\"cx-order-summary container\" *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderConfirmationTotalsComponent);

let GuestRegisterFormComponent = class GuestRegisterFormComponent {
    constructor(userService, routingService, authService, fb) {
        this.userService = userService;
        this.routingService = routingService;
        this.authService = authService;
        this.fb = fb;
        this.guestRegisterForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'passwordconf'),
        });
    }
    submit() {
        if (this.guestRegisterForm.valid) {
            this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
            if (!this.subscription) {
                this.subscription = this.authService
                    .getUserToken()
                    .subscribe((token) => {
                    if (token.access_token) {
                        this.routingService.go({ cxRoute: 'home' });
                    }
                });
            }
        }
        else {
            this.guestRegisterForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
GuestRegisterFormComponent.ctorParameters = () => [
    { type: UserService },
    { type: RoutingService },
    { type: AuthService },
    { type: FormBuilder }
];
__decorate([
    Input()
], GuestRegisterFormComponent.prototype, "guid", void 0);
__decorate([
    Input()
], GuestRegisterFormComponent.prototype, "email", void 0);
GuestRegisterFormComponent = __decorate([
    Component({
        selector: 'cx-guest-register-form',
        template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form (ngSubmit)=\"submit()\" [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('password')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"password\"\n            name=\"passwordconf\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('passwordconf')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
    })
], GuestRegisterFormComponent);

let OrderConfirmationGuard = class OrderConfirmationGuard {
    constructor(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    canActivate() {
        return this.checkoutService.getOrderDetails().pipe(map((orderDetails) => {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                return this.router.parseUrl(this.semanticPathService.get('orders'));
            }
        }));
    }
};
OrderConfirmationGuard.ctorParameters = () => [
    { type: CheckoutService },
    { type: Router },
    { type: SemanticPathService }
];
OrderConfirmationGuard.ɵprov = ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(ɵɵinject(CheckoutService), ɵɵinject(Router), ɵɵinject(SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
OrderConfirmationGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderConfirmationGuard);

const orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
let OrderConfirmationModule = class OrderConfirmationModule {
};
OrderConfirmationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CartSharedModule,
            CardModule,
            PwaModule,
            PromotionsModule,
            I18nModule,
            ReactiveFormsModule,
            FeaturesConfigModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    OrderConfirmationThankMessageComponent: {
                        component: OrderConfirmationThankYouMessageComponent,
                        guards: [OrderConfirmationGuard],
                    },
                    OrderConfirmationItemsComponent: {
                        component: OrderConfirmationItemsComponent,
                        guards: [OrderConfirmationGuard],
                    },
                    OrderConfirmationTotalsComponent: {
                        component: OrderConfirmationTotalsComponent,
                        guards: [OrderConfirmationGuard],
                    },
                    OrderConfirmationOverviewComponent: {
                        component: OrderConfirmationOverviewComponent,
                        guards: [OrderConfirmationGuard],
                    },
                },
            }),
        ],
        declarations: [...orderConfirmationComponents],
        exports: [...orderConfirmationComponents],
        entryComponents: [...orderConfirmationComponents],
    })
], OrderConfirmationModule);

let ProductCarouselService = class ProductCarouselService {
    constructor(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    loadProduct(code) {
        return this.productService.get(code).pipe(filter(Boolean), map((product) => this.convertProduct(product)));
    }
    getProductReferences(code, referenceType, displayTitle, displayProductPrices) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map((ref) => this.convertProduct(ref.target, displayTitle, displayProductPrices))));
    }
    /**
     * Converts the product to a generic CarouselItem
     */
    convertProduct(source, displayTitle = true, displayProductPrices = true) {
        const item = {};
        if (displayTitle) {
            item.title = source.name;
        }
        if (displayProductPrices && source.price && source.price.formattedValue) {
            item.price = source.price.formattedValue;
        }
        if (source.images && source.images.PRIMARY) {
            item.media = {
                container: source.images.PRIMARY,
                format: 'product',
            };
        }
        item.route = this.semanticPathService.transform({
            cxRoute: 'product',
            params: source,
        });
        return item;
    }
};
ProductCarouselService.ctorParameters = () => [
    { type: ProductService },
    { type: ProductReferenceService },
    { type: SemanticPathService }
];
ProductCarouselService.ɵprov = ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(ɵɵinject(ProductService), ɵɵinject(ProductReferenceService), ɵɵinject(SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
ProductCarouselService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductCarouselService);

let ProductCarouselComponent = class ProductCarouselComponent {
    constructor(componentData, productService) {
        this.componentData = componentData;
        this.productService = productService;
        this.PRODUCT_SCOPE = ProductScope.LIST;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map((data) => data.title));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map((data) => data.productCodes.trim().split(' ')), map((codes) => codes.map((code) => this.productService.get(code, this.PRODUCT_SCOPE))));
    }
};
ProductCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService }
];
ProductCarouselComponent = __decorate([
    Component({
        selector: 'cx-product-carousel',
        template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\"></cx-media>\n    <h4>\n      {{ item.name }}\n    </h4>\n    <div class=\"price\">\n      {{ item.price?.formattedValue }}\n    </div>\n  </a>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductCarouselComponent);

let ProductCarouselModule = class ProductCarouselModule {
};
ProductCarouselModule = __decorate([
    NgModule({
        imports: [CommonModule, CarouselModule, MediaModule, RouterModule, UrlModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductCarouselComponent: {
                        component: ProductCarouselComponent,
                    },
                },
            }),
        ],
        declarations: [ProductCarouselComponent],
        entryComponents: [ProductCarouselComponent],
        exports: [ProductCarouselComponent],
    })
], ProductCarouselModule);

let ProductReferencesComponent = class ProductReferencesComponent {
    constructor(component, current, referenceService) {
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map((d) => d === null || d === void 0 ? void 0 : d.title));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((p) => p.code), distinctUntilChanged(), tap(() => this.referenceService.cleanReferences()));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap(([code, data]) => this.getProductReferences(code, data === null || data === void 0 ? void 0 : data.productReferenceTypes)));
    }
    getProductReferences(code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map((ref) => of(ref.target))));
    }
};
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CurrentProductService },
    { type: ProductReferenceService }
];
ProductReferencesComponent = __decorate([
    Component({
        selector: 'cx-product-references',
        template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\"></cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductReferencesComponent);

let ProductReferencesModule = class ProductReferencesModule {
};
ProductReferencesModule = __decorate([
    NgModule({
        imports: [CommonModule, CarouselModule, MediaModule, RouterModule, UrlModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductReferencesComponent: {
                        component: ProductReferencesComponent,
                    },
                },
            }),
        ],
        declarations: [ProductReferencesComponent],
        entryComponents: [ProductReferencesComponent],
        exports: [ProductReferencesComponent],
    })
], ProductReferencesModule);

const defaultScrollConfig = {
    view: {
        infiniteScroll: {
            active: false,
            productLimit: 0,
            showMoreButton: false,
        },
    },
};

let ProductImagesComponent = class ProductImagesComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((p) => {
            var _a;
            this.mainMediaContainer.next(((_a = p.images) === null || _a === void 0 ? void 0 : _a.PRIMARY) ? p.images.PRIMARY : {});
        }));
        this.thumbs$ = this.product$.pipe(map((p) => this.createThumbs(p)));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map(([, container]) => container));
    }
    openImage(item) {
        this.mainMediaContainer.next(item);
    }
    isActive(thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((container) => {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        }));
    }
    /** find the index of the main media in the list of media */
    getActive(thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((container) => {
            const current = thumbs.find((t) => t.media &&
                container.zoom &&
                t.media.container &&
                t.media.container.zoom &&
                t.media.container.zoom.url === container.zoom.url);
            return thumbs.indexOf(current);
        }));
    }
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    createThumbs(product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return product.images.GALLERY.map((c) => of({ container: c }));
    }
};
ProductImagesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductImagesComponent = __decorate([
    Component({
        selector: 'cx-product-images',
        template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductImagesComponent);

let ProductImagesModule = class ProductImagesModule {
};
ProductImagesModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            MediaModule,
            OutletModule,
            CarouselModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductImagesComponent: {
                        component: ProductImagesComponent,
                    },
                },
            }),
        ],
        declarations: [ProductImagesComponent],
        entryComponents: [ProductImagesComponent],
        exports: [ProductImagesComponent],
    })
], ProductImagesModule);

let ProductIntroComponent = class ProductIntroComponent {
    constructor(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    ngAfterContentChecked() {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    }
    // Scroll to views component on page and click "Reviews" tab
    showReviews() {
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
            .subscribe((reviewsTabLabel) => {
            const tabsComponent = this.getTabsComponent();
            const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
            const reviewsComponent = this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                this.clickTabIfInactive(reviewsTab);
                setTimeout(() => reviewsComponent.scrollIntoView({ behavior: 'smooth' }), 0);
            }
        })
            .unsubscribe();
    }
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    getReviewsComponent() {
        return this.winRef.document.querySelector('cx-product-reviews');
    }
    // Get Tabs Component if exists on page
    getTabsComponent() {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    }
    // Click to activate tab if not already active
    clickTabIfInactive(tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    }
    // Get Tab by label if exists on page
    getTabByLabel(label, tabsComponent) {
        if (tabsComponent) {
            // NOTE: Reads through button tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            const tabElements = tabsComponent.getElementsByTagName('button');
            // Look through button tab elements until finding tab with label
            for (const buttonElement of Array.from(tabElements)) {
                if (buttonElement.innerHTML.includes(label)) {
                    return buttonElement;
                }
            }
        }
    }
};
ProductIntroComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: TranslationService },
    { type: WindowRef }
];
ProductIntroComponent = __decorate([
    Component({
        selector: 'cx-product-intro',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n\n    <button\n      *ngIf=\"reviewsTabAvailable | async\"\n      class=\"btn btn-link cx-action-link\"\n      (click)=\"showReviews()\"\n    >\n      {{ 'productSummary.showReviews' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductIntroComponent);

let ProductIntroModule = class ProductIntroModule {
};
ProductIntroModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule, StarRatingModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductIntroComponent: {
                        component: ProductIntroComponent,
                    },
                },
            }),
        ],
        declarations: [ProductIntroComponent],
        exports: [ProductIntroComponent],
        entryComponents: [ProductIntroComponent],
    })
], ProductIntroModule);

/**
 * The `ProductListComponentService` is used to search products. The service is used
 * on the Product Listing Page, for listing products and the facet navigation.
 *
 * The service exposes the product search results based on the category and search
 * route parameters. The route parameters are used to query products by the help of
 * the `ProductSearchService`.
 */
let ProductListComponentService = class ProductListComponentService {
    constructor(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.router = router;
        // TODO: make it configurable
        this.defaultPageSize = 10;
        this.RELEVANCE_ALLCATEGORIES = ':relevance:allCategories:';
        /**
         * Emits the search results for the current search query.
         *
         * The `searchResults$` is _not_ concerned with querying, it only observes the
         * `productSearchService.getResults()`
         */
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter((searchResult) => Object.keys(searchResult).length > 0));
        /**
         * Observes the route and performs a search on each route change.
         *
         * Context changes, such as language and currencies are also taken
         * into account, so that the search is performed again.
         */
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((x, y) => {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            })),
            ...this.siteContext,
        ]).pipe(map(([routerState, ..._context]) => routerState.state), tap((state) => {
            const criteria = this.getCriteriaFromRoute(state.params, state.queryParams);
            this.search(criteria);
        }));
        /**
         * This stream is used for the Product Listing and Product Facets.
         *
         * It not only emits search results, but also performs a search on every change
         * of the route (i.e. route params or query params).
         *
         * When a user leaves the PLP route, the PLP component unsubscribes from this stream
         * so no longer the search is performed on route change.
         */
        this.model$ = combineLatest([
            this.searchResults$,
            this.searchByRouting$,
        ]).pipe(pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Expose the `SearchCriteria`. The search criteria are driven by the route parameters.
     *
     * This search route configuration is not yet configurable
     * (see https://github.com/SAP/spartacus/issues/7191).
     */
    getCriteriaFromRoute(routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    }
    /**
     * Resolves the search query from the given `ProductListRouteParams`.
     */
    getQueryFromRouteParams({ query, categoryCode, brandCode, }) {
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        // TODO: drop support for brands as they should be treated
        // similarly as any category.
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
        }
    }
    /**
     * Performs a search based on the given search criteria.
     *
     * The search is delegated to the `ProductSearchService`.
     */
    search(criteria) {
        const currentPage = criteria.currentPage;
        const pageSize = criteria.pageSize;
        const sortCode = criteria.sortCode;
        this.productSearchService.search(criteria.query, 
        // TODO: consider dropping this complex passing of cleaned object
        Object.assign({}, currentPage && { currentPage }, pageSize && { pageSize }, sortCode && { sortCode }));
    }
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber) {
        this.routing
            .getRouterState()
            .subscribe((route) => {
            const routeCriteria = this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            const criteria = Object.assign(Object.assign({}, routeCriteria), { currentPage: pageNumber });
            this.search(criteria);
        })
            .unsubscribe();
    }
    /**
     * Sort the search results by the given sort code.
     */
    sort(sortCode) {
        this.route({ sortCode });
    }
    /**
     * Routes to the next product listing page, using the given `queryParams`. The
     * `queryParams` support sorting, pagination and querying.
     *
     * The `queryParams` are delegated to the Angular router `NavigationExtras`.
     */
    route(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    }
    /**
     * The site context is used to update the search query in case of a
     * changing context. The context will typically influence the search data.
     *
     * We keep this private for now, as we're likely refactoring this in the next
     * major version.
     */
    get siteContext() {
        // TODO: we should refactor this so that custom context will be taken
        // into account automatically. Ideally, we drop the specific context
        // from the constructor, and query a ContextService for all contexts.
        return [this.languageService.getActive(), this.currencyService.getActive()];
    }
    /**
     * @deprecated will be dropped in version 3.0 as it's no longer in use
     */
    setQuery(query) {
        this.route({ query, currentPage: undefined });
    }
    /**
     * @deprecated will be dropped in version 3.0 as it's no longer in use
     */
    viewPage(pageNumber) {
        this.route({ currentPage: pageNumber });
    }
};
ProductListComponentService.ctorParameters = () => [
    { type: ProductSearchService },
    { type: RoutingService },
    { type: ActivatedRoute },
    { type: CurrencyService },
    { type: LanguageService },
    { type: Router }
];
ProductListComponentService.ɵprov = ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(ɵɵinject(ProductSearchService), ɵɵinject(RoutingService), ɵɵinject(ActivatedRoute), ɵɵinject(CurrencyService), ɵɵinject(LanguageService), ɵɵinject(Router)); }, token: ProductListComponentService, providedIn: "root" });
ProductListComponentService = __decorate([
    Injectable({ providedIn: 'root' })
], ProductListComponentService);

var ViewModes;
(function (ViewModes) {
    ViewModes["Grid"] = "grid";
    ViewModes["List"] = "list";
})(ViewModes || (ViewModes = {}));
let ProductViewComponent = class ProductViewComponent {
    constructor() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    get buttonClass() {
        const viewName = this.viewMode.toLowerCase();
        return `cx-product-${viewName}`;
    }
    /**
     *   Display icons inversely to allow users
     *   to see the view they will navigate to
     */
    get viewMode() {
        if (this.mode === 'list') {
            return this.iconTypes.GRID;
        }
        else if (this.mode === 'grid') {
            return this.iconTypes.LIST;
        }
    }
    changeMode() {
        const newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    }
};
__decorate([
    Input()
], ProductViewComponent.prototype, "mode", void 0);
__decorate([
    Output()
], ProductViewComponent.prototype, "modeChange", void 0);
ProductViewComponent = __decorate([
    Component({
        selector: 'cx-product-view',
        template: "<button\n  class=\"btn cx-product-layout\"\n  [ngClass]=\"buttonClass\"\n  (click)=\"changeMode()\"\n>\n  <cx-icon\n    *ngIf=\"viewMode === iconTypes.GRID\"\n    [type]=\"iconTypes.GRID\"\n  ></cx-icon>\n  <cx-icon\n    *ngIf=\"viewMode === iconTypes.LIST\"\n    [type]=\"iconTypes.LIST\"\n  ></cx-icon>\n</button>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductViewComponent);

let ProductListComponent = class ProductListComponent {
    constructor(pageLayoutService, productListComponentService, scrollConfig) {
        this.pageLayoutService = pageLayoutService;
        this.productListComponentService = productListComponentService;
        this.scrollConfig = scrollConfig;
        this.subscription = new Subscription();
        this.model$ = this.productListComponentService
            .model$;
        this.viewMode$ = new BehaviorSubject(ViewModes.Grid);
        this.ViewModes = ViewModes;
    }
    ngOnInit() {
        this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
        this.subscription.add(this.pageLayoutService.templateName$
            .pipe(take(1))
            .subscribe((template) => {
            this.viewMode$.next(template === 'ProductGridPageTemplate'
                ? ViewModes.Grid
                : ViewModes.List);
        }));
    }
    sortList(sortCode) {
        this.productListComponentService.sort(sortCode);
    }
    setViewMode(mode) {
        this.viewMode$.next(mode);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProductListComponent.ctorParameters = () => [
    { type: PageLayoutService },
    { type: ProductListComponentService },
    { type: ViewConfig }
];
ProductListComponent = __decorate([
    Component({
        selector: 'cx-product-list',
        template: "<div class=\"cx-page\" *ngIf=\"model$ | async as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"viewMode$ | async as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div *ngIf=\"!isInfiniteScroll\" class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <!-- Product list when using pagination -->\n            <ng-container *ngIf=\"!isInfiniteScroll; else infiniteScroll\">\n              <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"viewMode === ViewModes.List\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </ng-container>\n\n            <!-- Product list when using infinite scroll -->\n            <ng-template #infiniteScroll>\n              <cx-product-scroll\n                [scrollConfig]=\"scrollConfig\"\n                [model]=\"model\"\n                [inputViewMode]=\"viewMode\"\n              ></cx-product-scroll>\n            </ng-template>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!isInfiniteScroll\"\n                class=\"col-auto\"\n                aria-label=\"product search pagination\"\n              >\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    queryParam=\"currentPage\"\n                    [defaultPage]=\"0\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
    })
], ProductListComponent);

let ProductScrollComponent = class ProductScrollComponent {
    constructor(productListComponentService, ref) {
        this.productListComponentService = productListComponentService;
        this.ref = ref;
        this.subscription = new Subscription();
        this.ViewModes = ViewModes;
        this.appendProducts = false;
        this.resetList = false;
        this.isMaxProducts = false;
        this.isLastPage = false;
        this.isEmpty = false;
    }
    set setConfig(inputConfig) {
        this.setComponentConfigurations(inputConfig);
    }
    set setModel(inputModel) {
        this.infiniteScrollOperations(inputModel);
    }
    set setViewMode(inputViewMode) {
        this.inputViewMode = inputViewMode;
        //If viewMode is already set (meaning it is not the first load)
        //Reset the product list
        if (this.viewMode) {
            this.resetListOnViewModeChange();
        }
        else {
            //If viewMode is not set (meaning it is the first load)
            //Set the viewMode
            this.viewMode = inputViewMode;
        }
    }
    scrollPage(pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    }
    loadNextPage(pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    }
    scrollToTop() {
        window.scroll(0, 0);
    }
    setComponentConfigurations(scrollConfig) {
        const isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        const configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    }
    infiniteScrollOperations(inputModel) {
        if (this.appendProducts) {
            this.model = Object.assign(Object.assign({}, inputModel), { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    }
    resetListOnViewModeChange() {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    }
    //Set booleans after model has been retrieved
    setConditions() {
        this.isEmpty = !this.model.products || this.model.products.length === 0;
        this.isLastPage =
            this.model.pagination.currentPage ===
                this.model.pagination.totalPages - 1;
        this.isMaxProducts =
            this.productLimit &&
                this.productLimit !== 0 &&
                this.model.products.length >= this.maxProducts;
        //Add the productLimit to the current number of products to determine the next max number of products
        if (this.isMaxProducts) {
            this.maxProducts = this.model.products.length + this.productLimit;
        }
        //Only change viewMode once the new model is set
        //This prevents flickering issues
        if (this.viewMode !== this.inputViewMode) {
            this.viewMode = this.inputViewMode;
        }
        this.resetList = false;
        this.appendProducts = false;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProductScrollComponent.ctorParameters = () => [
    { type: ProductListComponentService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input('scrollConfig')
], ProductScrollComponent.prototype, "setConfig", null);
__decorate([
    Input('model')
], ProductScrollComponent.prototype, "setModel", null);
__decorate([
    Input('inputViewMode')
], ProductScrollComponent.prototype, "setViewMode", null);
ProductScrollComponent = __decorate([
    Component({
        selector: 'cx-product-scroll',
        template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
    })
], ProductScrollComponent);

var FacetGroupCollapsedState;
(function (FacetGroupCollapsedState) {
    FacetGroupCollapsedState["EXPANDED"] = "EXPANDED";
    FacetGroupCollapsedState["COLLAPSED"] = "COLLAPSED";
})(FacetGroupCollapsedState || (FacetGroupCollapsedState = {}));

/**
 * Provides access to all the facets and active facets for the Product Listing Page.
 */
let ProductFacetService = class ProductFacetService {
    constructor(routing, productListComponentService) {
        this.routing = routing;
        this.productListComponentService = productListComponentService;
        this.routeState$ = this.routing
            .getRouterState()
            .pipe(pluck('state'));
        this.searchResult$ = this.routeState$.pipe(switchMap((state) => this.productListComponentService.model$.pipe(filter((page) => this.filterForPage(state, page)), map((page) => this.mapResults(state, page)))));
        /**
         * Observes the facets and active facets for the given page. The facet data
         * is provided in a `FacetList`.
         */
        this.facetList$ = this.searchResult$.pipe(map((result) => ({
            facets: result.facets,
            activeFacets: result.breadcrumbs,
        })));
    }
    /**
     * Filters the current result by verifying if the result is related to the page.
     * This is done to avoid a combination of the next page and the current search results.
     */
    filterForPage(state, page) {
        var _a, _b, _c;
        if (state.context.type === PageType.CATEGORY_PAGE) {
            return (((_c = (_b = (_a = page.currentQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.indexOf(`allCategories:${state.context.id}`)) > -1);
        }
        if (state.context.type === PageType.CONTENT_PAGE &&
            state.context.id === 'search') {
            return page.currentQuery.query.value.startsWith(`${state.params.query}:`);
        }
        return false;
    }
    mapResults(state, page) {
        return Object.assign(Object.assign({}, page), { breadcrumbs: this.filterBreadcrumbs(page.breadcrumbs, state.params) });
    }
    /**
     * filter breadcrumbs which are not actively selected
     * but coming from the route navigation
     */
    filterBreadcrumbs(breadcrumbs, params) {
        return breadcrumbs
            ? breadcrumbs.filter((breadcrumb) => !this.hasBreadcrumb(breadcrumb, params))
            : [];
    }
    /**
     * Indicates whether the breadcrumb is related to navigation parameters,
     * since either the category or brand code should match those codes.
     */
    hasBreadcrumb(breadcrumb, params) {
        return (breadcrumb.facetCode === 'allCategories' &&
            (breadcrumb.facetValueCode === params.categoryCode ||
                breadcrumb.facetValueCode === params.brandCode));
    }
};
ProductFacetService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductListComponentService }
];
ProductFacetService.ɵprov = ɵɵdefineInjectable({ factory: function ProductFacetService_Factory() { return new ProductFacetService(ɵɵinject(RoutingService), ɵɵinject(ProductListComponentService)); }, token: ProductFacetService, providedIn: "root" });
ProductFacetService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductFacetService);

/**
 * Provides access to the facets as well as their UI state. The UI state
 * represents user related changes on the facets, such as expanding or
 * collapsing a facet group or expanding the number of _visible_ facet values.
 */
let FacetService = class FacetService {
    constructor(productFacetService) {
        this.productFacetService = productFacetService;
        /**
         * An internal map where we keep the UI state of the facets.
         */
        this.facetState = new Map();
        /**
         * Observes the facets for the given page and configures the initial UI state.
         *
         * Facets are configured on each emission so that we keep the facet UI state.
         * This is mainly done to keep the state during usage of the facet, but also
         * benefitial when the facets are rebuild while using them.
         */
        this.facetList$ = this.productFacetService.facetList$.pipe(tap((facetList) => {
            facetList.facets.forEach((facet) => this.initialize(facet));
        }));
    }
    /**
     * Returns the observed UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    getState(facet) {
        this.initialize(facet);
        return this.facetState.get(facet.name);
    }
    /**
     * Returns the UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    getStateSnapshot(facet) {
        return this.getState(facet).value;
    }
    /**
     * Toggles the facet expanded state. If the expanded state becomes false,
     * the visible values will decrease to the top values only.
     *
     * If the optional value argument is provided the expanded state will be set
     * to this value, regardless of the current `expanded` state.
     */
    toggle(facet, isExpanded) {
        const state = this.getStateSnapshot(facet);
        const toggledState = {
            toggled: isExpanded
                ? FacetGroupCollapsedState.COLLAPSED
                : FacetGroupCollapsedState.EXPANDED,
        };
        if (toggledState.toggled === FacetGroupCollapsedState.COLLAPSED) {
            toggledState.maxVisible = state.topVisible;
        }
        this.updateState(facet, toggledState);
    }
    /**
     * Increases the visible values to the maximum values of the facet.
     */
    increaseVisibleValues(facet) {
        this.updateState(facet, { maxVisible: facet.values.length });
    }
    /**
     * Decreases the visible values to the topValueCount.
     *
     * The topValueCount defaults to 6, but can be controlled in
     * the backend as well.
     */
    decreaseVisibleValues(facet) {
        this.updateState(facet, { maxVisible: facet.topValueCount });
    }
    /**
     * Persists the facet state and initializes the default values for the top
     * and max visible values.
     */
    initialize(facet) {
        if (!this.hasState(facet)) {
            this.facetState.set(facet.name, new BehaviorSubject({
                topVisible: facet.topValueCount || 0,
                maxVisible: facet.topValueCount || 0,
            }));
        }
    }
    /**
     * Updates the state of the facet in the local facet map.
     */
    updateState(facet, property) {
        const state = Object.assign(Object.assign({}, this.getStateSnapshot(facet)), property);
        this.facetState.get(facet.name).next(state);
    }
    hasState(facet) {
        return this.facetState.has(facet.name);
    }
    getLinkParams(query) {
        return {
            // to avoid encoding issues with facets that have space (' ') in their name,
            // we replace the decoded '+' back to empty space ' '.
            // For more, see https://github.com/SAP/spartacus/issues/7348
            query: new HttpUrlEncodingCodec().decodeValue(query).replace(/\+/g, ' '),
        };
    }
};
FacetService.ctorParameters = () => [
    { type: ProductFacetService }
];
FacetService.ɵprov = ɵɵdefineInjectable({ factory: function FacetService_Factory() { return new FacetService(ɵɵinject(ProductFacetService)); }, token: FacetService, providedIn: "root" });
FacetService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FacetService);

/**
 * Active facets render the applied facet values as a list of focusable buttons
 * which can be used to remove the applied facet value.
 */
let ActiveFacetsComponent = class ActiveFacetsComponent {
    constructor(facetService) {
        this.facetService = facetService;
        /** Active facets which are applied to the product results. */
        this.facetList$ = this.facetService.facetList$;
        /** Configurable icon which is used for the active facet close button */
        this.closeIcon = ICON_TYPE.CLOSE;
    }
    getLinkParams(facet) {
        var _a, _b;
        return this.facetService.getLinkParams((_b = (_a = facet.removeQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value);
    }
    /**
     * The focus key is used to persist the focus on the facet when the DOM is being
     * recreated. We only apply the focus key for the given _active_ facet when there
     * the original facets is not available. This happens for non multi-valued facets.
     *
     * With this approach, the we keep the focus, either at the facet list or on the
     * active facets.
     */
    getFocusKey(facetList, facet) {
        var _a;
        return ((_a = facetList.facets) === null || _a === void 0 ? void 0 : _a.find((f) => { var _a; return (_a = f.values) === null || _a === void 0 ? void 0 : _a.find((val) => val.name === facet.facetValueName); })) ? ''
            : facet.facetValueName;
    }
};
ActiveFacetsComponent.ctorParameters = () => [
    { type: FacetService }
];
__decorate([
    Input()
], ActiveFacetsComponent.prototype, "closeIcon", void 0);
ActiveFacetsComponent = __decorate([
    Component({
        selector: 'cx-active-facets',
        template: "<ng-container *ngIf=\"facetList$ | async as facetList\">\n  <h4 *ngIf=\"facetList?.activeFacets?.length > 0\">\n    {{ 'productList.appliedFilter' | cxTranslate }}\n  </h4>\n\n  <a\n    *ngFor=\"let facet of facetList?.activeFacets\"\n    routerLink=\"./\"\n    [queryParams]=\"getLinkParams(facet)\"\n    [cxFocus]=\"getFocusKey(facetList, facet)\"\n  >\n    <span>{{ facet.facetValueName }}</span>\n    <cx-icon aria-hidden=\"true\" [type]=\"closeIcon\"></cx-icon>\n  </a>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.Default
    })
], ActiveFacetsComponent);

let ActiveFacetsModule = class ActiveFacetsModule {
};
ActiveFacetsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            I18nModule,
            IconModule,
            KeyboardFocusModule,
        ],
        declarations: [ActiveFacetsComponent],
        exports: [ActiveFacetsComponent],
    })
], ActiveFacetsModule);

let FacetListComponent = class FacetListComponent {
    constructor(facetService, elementRef, renderer) {
        this.facetService = facetService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** Emits when the list must close */
        this.closeList = new EventEmitter();
        /** The list of all facet and values related to the products in the list */
        this.facetList$ = this.facetService.facetList$;
        this.iconTypes = ICON_TYPE;
        this.dialogFocusConfig = {
            trap: true,
            block: true,
            focusOnEscape: true,
            autofocus: 'cx-facet',
        };
    }
    /**
     * Indicates that the facet navigation is rendered in dialog.
     */
    set isDialog(value) {
        this._isDialog = value;
        if (value) {
            this.renderer.addClass(document.body, 'modal-open');
        }
    }
    get isDialog() {
        return this._isDialog;
    }
    handleClick() {
        this.close();
    }
    /**
     * Toggles the facet group in case it is not expanded.
     */
    expandFacetGroup(facet, ref) {
        if (!ref.isExpanded) {
            this.facetService.toggle(facet, ref.isExpanded);
        }
    }
    /**
     * Indicates that the facet group has been expanded.
     */
    isExpanded(facet) {
        return this.facetService
            .getState(facet)
            .pipe(map((value) => value.toggled === FacetGroupCollapsedState.EXPANDED));
    }
    /**
     * Indicates that the facet group has been collapsed.
     */
    isCollapsed(facet) {
        return this.facetService
            .getState(facet)
            .pipe(map((value) => value.toggled === FacetGroupCollapsedState.COLLAPSED));
    }
    close(event) {
        this.renderer.removeClass(document.body, 'modal-open');
        this.closeList.emit(event);
    }
    block(event) {
        event.stopPropagation();
    }
};
FacetListComponent.ctorParameters = () => [
    { type: FacetService },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], FacetListComponent.prototype, "isDialog", null);
__decorate([
    Output()
], FacetListComponent.prototype, "closeList", void 0);
__decorate([
    HostListener('click')
], FacetListComponent.prototype, "handleClick", null);
FacetListComponent = __decorate([
    Component({
        selector: 'cx-facet-list',
        template: "<div\n  class=\"inner\"\n  *ngIf=\"(facetList$ | async)?.facets as facets\"\n  [cxFocus]=\"isDialog ? dialogFocusConfig : {}\"\n  (esc)=\"close($event)\"\n  (click)=\"block($event)\"\n>\n  <h4>\n    {{ 'productList.filterBy.label' | cxTranslate }}\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <cx-icon aria-hidden=\"true\" [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </h4>\n\n  <!-- \n      Here we'd like to introduce configurable facet components, \n      either by using specific configuration or generic sproutlets \n  -->\n  <cx-facet\n    *ngFor=\"let facet of facets\"\n    #facetRef\n    [facet]=\"facet\"\n    [cxFocus]=\"{ lock: true, trap: true, autofocus: 'a' }\"\n    (unlock)=\"expandFacetGroup(facet, facetRef)\"\n    [class.expanded]=\"isExpanded(facet) | async\"\n    [class.collapsed]=\"isCollapsed(facet) | async\"\n  ></cx-facet>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FacetListComponent);

let FacetComponent = class FacetComponent {
    constructor(facetService, elementRef, cd) {
        this.facetService = facetService;
        this.elementRef = elementRef;
        this.cd = cd;
        /** configurable icon that is used to collapse the facet group  */
        this.expandIcon = ICON_TYPE.EXPAND;
        this.collapseIcon = ICON_TYPE.COLLAPSE;
    }
    set facet(value) {
        this._facet = value;
        this.isMultiSelect = !!value.multiSelect;
        this.state$ = this.facetService.getState(value);
    }
    get facet() {
        return this._facet;
    }
    /**
     * Handles clicking the heading of the facet group, which means toggling
     * the visibility of the group (collapse / expand) and optionally focusing
     * the group.
     */
    toggleGroup(event) {
        var _a;
        const host = this.elementRef.nativeElement;
        const isLocked = (_a = this.keyboardFocus) === null || _a === void 0 ? void 0 : _a.isLocked;
        this.facetService.toggle(this.facet, this.isExpanded);
        if (!isLocked || this.isExpanded) {
            host.focus();
            // we stop propagating the event as otherwise the focus on the host will trigger
            // an unlock event from the LockFocus directive.
            event.stopPropagation();
        }
    }
    get isExpanded() {
        return this.values.first.nativeElement.offsetParent !== null;
    }
    openLink(event) {
        event.target.click();
        event.preventDefault();
    }
    /**
     * Increases the number of visible values for the facet. This is delegated
     * to `facetService.increaseVisibleValues`.
     */
    increaseVisibleValues() {
        this.facetService.increaseVisibleValues(this.facet);
    }
    /**
     * Decreases the number of visible values for the facet. This is delegated
     * to `facetService.decreaseVisibleValues`.
     */
    decreaseVisibleValues() {
        this.facetService.decreaseVisibleValues(this.facet);
    }
    getLinkParams(value) {
        var _a;
        return this.facetService.getLinkParams((_a = value.query) === null || _a === void 0 ? void 0 : _a.query.value);
    }
};
FacetComponent.ctorParameters = () => [
    { type: FacetService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], FacetComponent.prototype, "expandIcon", void 0);
__decorate([
    Input()
], FacetComponent.prototype, "collapseIcon", void 0);
__decorate([
    HostBinding('class.multi-select')
], FacetComponent.prototype, "isMultiSelect", void 0);
__decorate([
    ViewChildren('facetValue')
], FacetComponent.prototype, "values", void 0);
__decorate([
    ViewChild(FocusDirective)
], FacetComponent.prototype, "keyboardFocus", void 0);
__decorate([
    Input()
], FacetComponent.prototype, "facet", null);
FacetComponent = __decorate([
    Component({
        selector: 'cx-facet',
        template: "<ng-container *ngIf=\"state$ | async as state\">\n  <button class=\"heading\" (click)=\"toggleGroup($event)\">\n    {{ facet.name }}\n    <cx-icon class=\"collapse-icon\" [type]=\"collapseIcon\"></cx-icon>\n    <cx-icon class=\"expand-icon\" [type]=\"expandIcon\"></cx-icon>\n  </button>\n\n  <a\n    *ngFor=\"let value of facet.values | slice: 0:state.topVisible\"\n    #facetValue\n    routerLink=\"./\"\n    [queryParams]=\"getLinkParams(value)\"\n    class=\"value\"\n    [class.selected]=\"value.selected\"\n    [cxFocus]=\"value.name\"\n    (keydown.space)=\"openLink($event)\"\n  >\n    <span>\n      <span class=\"label\">{{ value.name }}</span>\n      <span class=\"count\">{{ value.count }}</span>\n    </span>\n  </a>\n\n  <div class=\"more\">\n    <a\n      *ngFor=\"\n        let value of facet.values | slice: state.topVisible:state.maxVisible\n      \"\n      #facetValue\n      routerLink=\"./\"\n      [queryParams]=\"getLinkParams(value)\"\n      class=\"value\"\n      [class.selected]=\"value.selected\"\n      [cxFocus]=\"value.name\"\n      (keydown.space)=\"openLink($event)\"\n    >\n      <span\n        >{{ value.name }}<span class=\"count\">{{ value.count }}</span></span\n      >\n    </a>\n\n    <button\n      *ngIf=\"state.maxVisible > state.topVisible\"\n      (click)=\"decreaseVisibleValues()\"\n      class=\"cx-action-link\"\n      cxFocus=\"moreorless\"\n    >\n      {{ 'productList.showLess' | cxTranslate }}\n    </button>\n\n    <button\n      *ngIf=\"state.maxVisible > 0 && state.maxVisible < facet.values.length\"\n      (click)=\"increaseVisibleValues()\"\n      class=\"cx-action-link\"\n      cxFocus=\"moreorless\"\n    >\n      {{ 'productList.showMore' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FacetComponent);

let FacetModule = class FacetModule {
};
FacetModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            I18nModule,
            IconModule,
            KeyboardFocusModule,
        ],
        declarations: [FacetComponent],
        exports: [FacetComponent],
    })
], FacetModule);

let FacetListModule = class FacetListModule {
};
FacetListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            IconModule,
            FacetModule,
            KeyboardFocusModule,
        ],
        declarations: [FacetListComponent],
        exports: [FacetListComponent],
    })
], FacetListModule);

let ProductFacetNavigationComponent = class ProductFacetNavigationComponent {
    constructor(breakpointService) {
        this.breakpointService = breakpointService;
        this.iconTypes = ICON_TYPE;
        /**
         * We delay the removal of DOM so that animations can finish playing before the
         * DOM is removed. Removing the DOM, as hidding is not enough to stop elements
         * to be focused.
         */
        this.CLOSE_DELAY = 300;
        this.open$ = new BehaviorSubject(false);
        /**
         * Emits the open state that indicates whether the facet list should be rendered.
         * This is either done instantly, or after the user triggers this by using the trigger
         * button. This driven by the visiibility of the trigger, so that the CSS drives
         * the behaviour. This can differ per breakpoint.
         *
         * There's a configurable delay for the closed state, so that the DOM is not removed
         * before some CSS animations are done.
         */
        this.isOpen$ = this.breakpointService.breakpoint$.pipe(
        // deffer emitting a new value to the next micro-task to ensure that the `hasTrigger`
        // method represents the actual UI state.
        observeOn(asapScheduler), switchMap(() => (this.hasTrigger ? this.open$ : of(true))), delayWhen((launched) => interval(launched ? 0 : this.CLOSE_DELAY)));
        /**
         * Emits the active state that indicates whether the facet list is activated. Activation
         * is related to the css, so that a animation or transition can visualize opening/closing
         * the list (i.e. dialog).
         */
        this.isActive$ = this.open$.pipe(
        // deffer emitting a new value to the next micro-task to ensure the active class is
        //  applied after the DOM is created
        observeOn(asapScheduler));
    }
    launch() {
        this.open$.next(true);
    }
    close() {
        this.open$.next(false);
        this.trigger.nativeElement.focus();
    }
    /**
     * Indicates that the facet navigation should be open explicitely by a trigger.
     * This is fully controlled by CSS, where the trigger button can be hidden
     * (display:none) for certain screen sizes.
     */
    get hasTrigger() {
        return this.trigger.nativeElement.offsetParent !== null;
    }
};
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: BreakpointService }
];
__decorate([
    ViewChild('trigger')
], ProductFacetNavigationComponent.prototype, "trigger", void 0);
ProductFacetNavigationComponent = __decorate([
    Component({
        selector: 'cx-product-facet-navigation',
        template: "<button\n  #trigger\n  class=\"btn btn-action btn-block dialog-trigger\"\n  (click)=\"launch()\"\n>\n  <cx-icon [type]=\"iconTypes.FILTER\"></cx-icon>\n  {{ 'productList.filterBy.label' | cxTranslate }}\n</button>\n\n<cx-active-facets></cx-active-facets>\n\n<cx-facet-list\n  *ngIf=\"isOpen$ | async\"\n  [isDialog]=\"hasTrigger\"\n  (closeList)=\"close()\"\n  [class.active]=\"isActive$ | async\"\n  [class.dialog]=\"hasTrigger\"\n></cx-facet-list>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductFacetNavigationComponent);

let ProductFacetNavigationModule = class ProductFacetNavigationModule {
};
ProductFacetNavigationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FacetListModule,
            ActiveFacetsModule,
            IconModule,
            I18nModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductRefinementComponent: {
                        component: ProductFacetNavigationComponent,
                    },
                },
            }),
        ],
        declarations: [ProductFacetNavigationComponent],
        exports: [ProductFacetNavigationComponent],
    })
], ProductFacetNavigationModule);

let ProductGridItemComponent = class ProductGridItemComponent {
};
__decorate([
    Input()
], ProductGridItemComponent.prototype, "product", void 0);
ProductGridItemComponent = __decorate([
    Component({
        selector: 'cx-product-grid-item',
        template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n  tabindex=\"-1\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    *ngIf=\"product.averageRating\"\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n  <div *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price?.formattedValue }}\n  </div>\n</div>\n\n<div class=\"cx-variant-style-icons\" *ngIf=\"product.variantOptions\">\n  <cx-variant-style-icons\n    [variants]=\"product.variantOptions\"\n  ></cx-variant-style-icons>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [product]=\"product\"\n></cx-add-to-cart>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductGridItemComponent);

let ProductListItemComponent = class ProductListItemComponent {
};
__decorate([
    Input()
], ProductListItemComponent.prototype, "product", void 0);
ProductListItemComponent = __decorate([
    Component({
        selector: 'cx-product-list-item',
        template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-image-container\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.nameHtml\"\n    ></a>\n    <cx-star-rating\n      *ngIf=\"product.averageRating\"\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div *ngIf=\"!product.averageRating\" class=\"cx-product-no-review\">\n      {{ 'productDetails.noReviews' | cxTranslate }}\n    </div>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n\n    <cx-variant-style-icons\n      *ngIf=\"product.variantOptions\"\n      [variants]=\"product.variantOptions\"\n    ></cx-variant-style-icons>\n\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [product]=\"product\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductListItemComponent);

let ProductVariantsComponent = class ProductVariantsComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.variants = [];
        this.variantType = VariantType;
    }
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct().pipe(filter((product) => !!(product && product.baseOptions)), distinctUntilChanged(), tap((product) => {
            product.baseOptions.forEach((option) => {
                if (option && option.variantType) {
                    this.variants[option.variantType] = option;
                }
            });
        }));
    }
};
ProductVariantsComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductVariantsComponent = __decorate([
    Component({
        selector: 'cx-product-variants',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"variant-section\" *ngIf=\"product.baseOptions?.length\">\n    <cx-variant-style-selector\n      *ngIf=\"variants[variantType.STYLE]\"\n      [variants]=\"variants[variantType.STYLE]\"\n    ></cx-variant-style-selector>\n    <cx-variant-size-selector\n      *ngIf=\"variants[variantType.SIZE]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.SIZE]\"\n    ></cx-variant-size-selector>\n    <cx-variant-color-selector\n      *ngIf=\"variants[variantType.COLOR]\"\n      [product]=\"product\"\n      [variants]=\"variants[variantType.COLOR]\"\n    ></cx-variant-color-selector>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductVariantsComponent);

let VariantStyleSelectorComponent = class VariantStyleSelectorComponent {
    constructor(config, productService, routingService) {
        this.config = config;
        this.productService = productService;
        this.routingService = routingService;
        this.variantQualifier = VariantQualifier;
    }
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.STYLE);
        return obj ? obj.value : '';
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const qualifier = variantOptionQualifiers.find((item) => item.image);
        return qualifier
            ? `${this.config.backend.occ.baseUrl}${qualifier.image.url}`
            : '';
    }
    changeStyle(code) {
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe((product) => {
                this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    }
};
VariantStyleSelectorComponent.ctorParameters = () => [
    { type: OccConfig },
    { type: ProductService },
    { type: RoutingService }
];
__decorate([
    Input()
], VariantStyleSelectorComponent.prototype, "variants", void 0);
VariantStyleSelectorComponent = __decorate([
    Component({
        selector: 'cx-variant-style-selector',
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <img\n          (click)=\"changeStyle(v.code)\"\n          src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n          title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n        />\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantStyleSelectorComponent);

let VariantStyleSelectorModule = class VariantStyleSelectorModule {
};
VariantStyleSelectorModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, I18nModule],
        declarations: [VariantStyleSelectorComponent],
        entryComponents: [VariantStyleSelectorComponent],
        exports: [VariantStyleSelectorComponent],
    })
], VariantStyleSelectorModule);

let VariantSizeSelectorComponent = class VariantSizeSelectorComponent {
    constructor(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    changeSize(code) {
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe((product) => {
                this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    }
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.SIZE);
        return obj ? obj.value : '';
    }
};
VariantSizeSelectorComponent.ctorParameters = () => [
    { type: ProductService },
    { type: RoutingService }
];
__decorate([
    Input()
], VariantSizeSelectorComponent.prototype, "product", void 0);
__decorate([
    Input()
], VariantSizeSelectorComponent.prototype, "variants", void 0);
VariantSizeSelectorComponent = __decorate([
    Component({
        selector: 'cx-variant-size-selector',
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.size' | cxTranslate }}:</div>\n    <select\n      (change)=\"changeSize($event.target.value)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n    <a\n      href=\"#\"\n      class=\"size-guide\"\n      title=\"{{ 'variant.sizeGuideLabel' | cxTranslate }}\"\n    >\n      {{ 'variant.sizeGuideLabel' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantSizeSelectorComponent);

let VariantSizeSelectorModule = class VariantSizeSelectorModule {
};
VariantSizeSelectorModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, I18nModule],
        declarations: [VariantSizeSelectorComponent],
        entryComponents: [VariantSizeSelectorComponent],
        exports: [VariantSizeSelectorComponent],
    })
], VariantSizeSelectorModule);

let VariantColorSelectorComponent = class VariantColorSelectorComponent {
    constructor(routingService) {
        this.routingService = routingService;
    }
    changeColor(code, name) {
        if (code) {
            this.routingService.go({
                cxRoute: 'product',
                params: { code, name },
            });
        }
        return null;
    }
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.COLOR);
        return obj ? obj.value : '';
    }
};
VariantColorSelectorComponent.ctorParameters = () => [
    { type: RoutingService }
];
__decorate([
    Input()
], VariantColorSelectorComponent.prototype, "product", void 0);
__decorate([
    Input()
], VariantColorSelectorComponent.prototype, "variants", void 0);
VariantColorSelectorComponent = __decorate([
    Component({
        selector: 'cx-variant-color-selector',
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.color' | cxTranslate }}:</div>\n\n    <select\n      (change)=\"changeColor($event.target.value, product?.name)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantColorSelectorComponent);

let VariantColorSelectorModule = class VariantColorSelectorModule {
};
VariantColorSelectorModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, I18nModule],
        declarations: [VariantColorSelectorComponent],
        entryComponents: [VariantColorSelectorComponent],
        exports: [VariantColorSelectorComponent],
    })
], VariantColorSelectorModule);

let VariantStyleIconsComponent = class VariantStyleIconsComponent {
    constructor(config) {
        this.config = config;
        this.variantNames = {};
    }
    ngOnInit() {
        this.variants.forEach((variant) => {
            this.variantNames[variant.code] = this.getVariantName(variant.variantOptionQualifiers);
        });
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const thumbnail = variantOptionQualifiers.find((item) => item.qualifier === VariantQualifier.THUMBNAIL);
        return thumbnail
            ? `${this.config.backend.occ.baseUrl}${thumbnail.image.url}`
            : '';
    }
    getVariantName(variantOptionQualifiers) {
        const rollupProperty = variantOptionQualifiers.find((item) => item.qualifier === VariantQualifier.ROLLUP_PROPERTY);
        const property = rollupProperty
            ? variantOptionQualifiers.find((item) => item.qualifier === rollupProperty.value)
            : null;
        return property ? property.value : '';
    }
};
VariantStyleIconsComponent.ctorParameters = () => [
    { type: OccConfig }
];
__decorate([
    Input()
], VariantStyleIconsComponent.prototype, "variants", void 0);
VariantStyleIconsComponent = __decorate([
    Component({
        selector: 'cx-variant-style-icons',
        template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["ul{padding:0;white-space:nowrap;overflow:hidden}ul li{display:inline}ul li img{width:50px}"]
    })
], VariantStyleIconsComponent);

let VariantStyleIconsModule = class VariantStyleIconsModule {
};
VariantStyleIconsModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, I18nModule],
        declarations: [VariantStyleIconsComponent],
        entryComponents: [VariantStyleIconsComponent],
        exports: [VariantStyleIconsComponent],
    })
], VariantStyleIconsModule);

let ProductVariantGuard = class ProductVariantGuard {
    constructor(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    canActivate() {
        return this.routingService.getRouterState().pipe(map((state) => state.nextState.params.productCode), switchMap((productCode) => {
            // if open pdp from smartedit
            if (!productCode) {
                return of(true);
            }
            return this.productService.get(productCode, ProductScope.VARIANTS).pipe(filter(Boolean), map((product) => {
                if (!product.purchasable) {
                    const variant = this.findVariant(product.variantOptions);
                    // below call might looks redundant but in fact this data is going to be loaded anyways
                    // we're just calling it earlier and storing
                    this.productService
                        .get(variant.code, ProductScope.LIST)
                        .pipe(filter(Boolean), take(1))
                        .subscribe((_product) => {
                        this.routingService.go({
                            cxRoute: 'product',
                            params: _product,
                        });
                    });
                    return false;
                }
                else {
                    return true;
                }
            }));
        }));
    }
    findVariant(variants) {
        const results = variants.filter((variant) => {
            return variant.stock && variant.stock.stockLevel ? variant : false;
        });
        return !results.length && variants.length ? variants[0] : results[0];
    }
};
ProductVariantGuard.ctorParameters = () => [
    { type: ProductService },
    { type: RoutingService }
];
ProductVariantGuard.ɵprov = ɵɵdefineInjectable({ factory: function ProductVariantGuard_Factory() { return new ProductVariantGuard(ɵɵinject(ProductService), ɵɵinject(RoutingService)); }, token: ProductVariantGuard, providedIn: "root" });
ProductVariantGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductVariantGuard);

let ProductVariantsModule = class ProductVariantsModule {
};
ProductVariantsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            I18nModule,
            VariantStyleSelectorModule,
            VariantSizeSelectorModule,
            VariantColorSelectorModule,
            VariantStyleIconsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductVariantSelectorComponent: {
                        component: ProductVariantsComponent,
                        guards: [ProductVariantGuard],
                    },
                },
            }),
        ],
        declarations: [ProductVariantsComponent],
        entryComponents: [ProductVariantsComponent],
        exports: [VariantStyleIconsComponent],
    })
], ProductVariantsModule);

let ProductListModule = class ProductListModule {
};
ProductListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            MediaModule,
            AddToCartModule,
            ItemCounterModule,
            ListNavigationModule,
            UrlModule,
            I18nModule,
            StarRatingModule,
            IconModule,
            SpinnerModule,
            InfiniteScrollModule,
            ViewConfigModule,
            ProductVariantsModule,
            FeaturesConfigModule,
        ],
        providers: [
            provideDefaultConfig(defaultScrollConfig),
            provideDefaultConfig({
                cmsComponents: {
                    CMSProductListComponent: {
                        component: ProductListComponent,
                    },
                    ProductGridComponent: {
                        component: ProductListComponent,
                    },
                    SearchResultsListComponent: {
                        component: ProductListComponent,
                    },
                },
            }),
        ],
        declarations: [
            ProductListComponent,
            ProductListItemComponent,
            ProductGridItemComponent,
            ProductViewComponent,
            ProductScrollComponent,
        ],
        exports: [
            ProductListComponent,
            ProductListItemComponent,
            ProductGridItemComponent,
            ProductViewComponent,
            ProductScrollComponent,
        ],
        entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
    })
], ProductListModule);

var ProductDetailOutlets;
(function (ProductDetailOutlets) {
    ProductDetailOutlets["INTRO"] = "PDP.INTRO";
    ProductDetailOutlets["PRICE"] = "PDP.PRICE";
    ProductDetailOutlets["SHARE"] = "PDP.SHARE";
    ProductDetailOutlets["SUMMARY"] = "PDP.SUMMARY";
})(ProductDetailOutlets || (ProductDetailOutlets = {}));

let ProductSummaryComponent = class ProductSummaryComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.outlets = ProductDetailOutlets;
        this.product$ = this.currentProductService.getProduct();
    }
};
ProductSummaryComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductSummaryComponent = __decorate([
    Component({
        selector: 'cx-product-summary',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-template\n    [cxOutlet]=\"outlets.PRICE\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <div class=\"price\" aria-label=\"new item price\">\n      {{ product?.price?.formattedValue }}\n    </div>\n  </ng-template>\n\n  <ng-template\n    [cxOutlet]=\"outlets.SUMMARY\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <p [innerHTML]=\"product?.summary\" class=\"summary\"></p>\n  </ng-template>\n\n  <!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n  <!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n        <div>\n          <a href=\"#\" class=\"share btn-link\">\n            {{ 'productSummary.share' | cxTranslate }}\n          </a>\n        </div>\n      </ng-container> -->\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductSummaryComponent);

let ProductSummaryModule = class ProductSummaryModule {
};
ProductSummaryModule = __decorate([
    NgModule({
        imports: [CommonModule, OutletModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductSummaryComponent: {
                        component: ProductSummaryComponent,
                    },
                },
            }),
        ],
        declarations: [ProductSummaryComponent],
        entryComponents: [ProductSummaryComponent],
        exports: [ProductSummaryComponent],
    })
], ProductSummaryModule);

let ProductAttributesComponent = class ProductAttributesComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.product$ = this.currentProductService.getProduct(ProductScope.ATTRIBUTES);
    }
};
ProductAttributesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductAttributesComponent = __decorate([
    Component({
        selector: 'cx-product-attributes',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductAttributesComponent);

let ProductAttributesModule = class ProductAttributesModule {
};
ProductAttributesModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductSpecsTabComponent: {
                        component: ProductAttributesComponent,
                    },
                },
            }),
        ],
        declarations: [ProductAttributesComponent],
        entryComponents: [ProductAttributesComponent],
        exports: [ProductAttributesComponent],
    })
], ProductAttributesModule);

let ProductDetailsTabComponent = class ProductDetailsTabComponent {
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
    }
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct();
    }
};
ProductDetailsTabComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductDetailsTabComponent = __decorate([
    Component({
        selector: 'cx-product-details-tab',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductDetailsTabComponent);

let ProductDetailsTabModule = class ProductDetailsTabModule {
};
ProductDetailsTabModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductDetailsTabComponent: {
                        component: ProductDetailsTabComponent,
                    },
                },
            }),
        ],
        declarations: [ProductDetailsTabComponent],
        entryComponents: [ProductDetailsTabComponent],
        exports: [ProductDetailsTabComponent],
    })
], ProductDetailsTabModule);

let ProductReviewsComponent = class ProductReviewsComponent {
    constructor(reviewService, currentProductService, fb, cd) {
        this.reviewService = reviewService;
        this.currentProductService = currentProductService;
        this.fb = fb;
        this.cd = cd;
        this.isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
        this.product$ = this.currentProductService.getProduct();
        this.reviews$ = this.product$.pipe(filter((p) => !!p), map((p) => p.code), distinctUntilChanged(), switchMap((productCode) => this.reviewService.getByProductCode(productCode)), tap(() => {
            this.resetReviewForm();
            this.maxListItems = this.initialMaxListItems;
        }));
    }
    initiateWriteReview() {
        this.isWritingReview = true;
        this.cd.detectChanges();
        if (this.titleInput && this.titleInput.nativeElement) {
            this.titleInput.nativeElement.focus();
        }
    }
    cancelWriteReview() {
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    }
    setRating(rating) {
        this.reviewForm.controls.rating.setValue(rating);
    }
    submitReview(product) {
        if (this.reviewForm.valid) {
            this.addReview(product);
        }
        else {
            this.reviewForm.markAllAsTouched();
        }
    }
    addReview(product) {
        const reviewFormControls = this.reviewForm.controls;
        const review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
        this.cd.detectChanges();
        if (this.writeReviewButton && this.writeReviewButton.nativeElement) {
            this.writeReviewButton.nativeElement.focus();
        }
    }
    resetReviewForm() {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [null, CustomFormValidators.starRatingEmpty],
            reviewerName: '',
        });
    }
};
ProductReviewsComponent.ctorParameters = () => [
    { type: ProductReviewService },
    { type: CurrentProductService },
    { type: FormBuilder },
    { type: ChangeDetectorRef }
];
__decorate([
    ViewChild('titleInput', { static: false })
], ProductReviewsComponent.prototype, "titleInput", void 0);
__decorate([
    ViewChild('writeReviewButton', { static: false })
], ProductReviewsComponent.prototype, "writeReviewButton", void 0);
ProductReviewsComponent = __decorate([
    Component({
        selector: 'cx-product-reviews',
        template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button\n        #writeReviewButton\n        class=\"btn btn-primary\"\n        (click)=\"initiateWriteReview()\"\n      >\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form (ngSubmit)=\"submitReview(product)\" [formGroup]=\"reviewForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input\n            #titleInput\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"title\"\n          />\n          <cx-form-errors [control]=\"reviewForm.get('title')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n          <cx-form-errors\n            [control]=\"reviewForm.get('comment')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <input type=\"number\" formControlName=\"rating\" class=\"rating-input\" />\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n          <cx-form-errors [control]=\"reviewForm.get('rating')\"></cx-form-errors>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"button\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductReviewsComponent);

let ProductReviewsModule = class ProductReviewsModule {
};
ProductReviewsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            I18nModule,
            StarRatingModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ProductReviewsTabComponent: {
                        component: ProductReviewsComponent,
                    },
                },
            }),
        ],
        declarations: [ProductReviewsComponent],
        entryComponents: [ProductReviewsComponent],
        exports: [ProductReviewsComponent],
    })
], ProductReviewsModule);

let ProductTabsModule = class ProductTabsModule {
};
ProductTabsModule = __decorate([
    NgModule({
        imports: [
            ProductAttributesModule,
            ProductDetailsTabModule,
            ProductReviewsModule,
        ],
    })
], ProductTabsModule);

let StockNotificationDialogComponent = class StockNotificationDialogComponent {
    constructor(modalService, interestsService) {
        this.modalService = modalService;
        this.interestsService = interestsService;
        this.enabledPrefs = [];
    }
    close() {
        this.modalService.dismissActiveModal();
    }
    ngOnDestroy() {
        if (this.subscribeSuccess$) {
            this.subscribeSuccess$
                .subscribe((success) => {
                if (success) {
                    this.interestsService.resetAddInterestState();
                }
            })
                .unsubscribe();
        }
    }
};
StockNotificationDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: UserInterestsService }
];
StockNotificationDialogComponent = __decorate([
    Component({
        selector: 'cx-stock-notification-dialog',
        template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'stockNotification.subscriptionDialog.header' | cxTranslate }}\n  </div>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    tabindex=\"-1\"\n    (click)=\"close()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<ng-container *ngIf=\"subscribeSuccess$ | async; else loading\">\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"container\">\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedPrefix' | cxTranslate\n        }}\n      </p>\n      <p *ngFor=\"let preference of enabledPrefs\" class=\"channels\">\n        <span>{{ preference.channel }}</span\n        ><span *ngIf=\"preference.value\">{{ ': ' + preference.value }}</span>\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedSuffix' | cxTranslate\n        }}\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/notification-preference']\"\n          class=\"link-prefs\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageChannelsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsSuffix'\n            | cxTranslate\n        }}\n      </p>\n\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/my-interests']\"\n          class=\"link-interests\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageSubscriptionsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsSuffix'\n            | cxTranslate\n        }}\n      </p>\n      <div class=\"row\">\n        <div class=\"cx-dialog-actions col-sm-12 col-md-3 offset-md-9\">\n          <button\n            class=\"btn btn-primary btn-block btn-ok\"\n            type=\"button\"\n            (click)=\"close()\"\n          >\n            {{ 'stockNotification.subscriptionDialog.okBtn' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <p>\n      {{ 'stockNotification.subscriptionDialog.subscribing' | cxTranslate }}\n    </p>\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
    })
], StockNotificationDialogComponent);

let StockNotificationComponent = class StockNotificationComponent {
    constructor(authService, currentProductService, globalMessageService, translationService, interestsService, modalService, notificationPrefService) {
        this.authService = authService;
        this.currentProductService = currentProductService;
        this.globalMessageService = globalMessageService;
        this.translationService = translationService;
        this.interestsService = interestsService;
        this.modalService = modalService;
        this.notificationPrefService = notificationPrefService;
        this.anonymous = true;
        this.enabledPrefs = [];
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.outOfStock$ = combineLatest([
            this.currentProductService.getProduct().pipe(filter(Boolean)),
            this.authService.getOccUserId(),
        ]).pipe(tap(([product, userId]) => {
            this.productCode = product.code;
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.anonymous = false;
                this.notificationPrefService.loadPreferences();
                this.interestsService.loadProductInterests(null, null, null, product.code, NotificationType.BACK_IN_STOCK);
            }
        }), map(([product]) => !!product.stock && product.stock.stockLevelStatus === 'outOfStock'));
        this.hasProductInterests$ = this.interestsService
            .getProductInterests()
            .pipe(map((interests) => !!interests.results && interests.results.length === 1));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap((prefs) => (this.enabledPrefs = prefs)), map((prefs) => prefs.length > 0));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe((error) => {
            if (error) {
                this.onInterestAddingError();
            }
        }));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe((success) => {
            if (success) {
                this.onInterestRemovingSuccess();
            }
        }));
    }
    subscribe() {
        this.openDialog();
        this.interestsService.addProductInterest(this.productCode, NotificationType.BACK_IN_STOCK);
    }
    unsubscribe() {
        this.interestsService.removeProdutInterest({
            product: {
                code: this.productCode,
            },
            productInterestEntry: [
                {
                    interestType: NotificationType.BACK_IN_STOCK,
                },
            ],
        }, true);
    }
    onInterestRemovingSuccess() {
        this.subscriptions.add(this.translationService
            .translate('stockNotification.unsubscribeSuccess')
            .pipe(first())
            .subscribe((text) => this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO)));
        this.interestsService.resetRemoveInterestState();
    }
    onInterestAddingError() {
        this.modalService.dismissActiveModal();
        this.interestsService.resetAddInterestState();
    }
    openDialog() {
        const modalInstance = this.modalService.open(StockNotificationDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        modalInstance.subscribeSuccess$ = this.subscribeSuccess$;
        modalInstance.enabledPrefs = this.enabledPrefs;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.interestsService.clearProductInterests();
        this.notificationPrefService.clearPreferences();
    }
};
StockNotificationComponent.ctorParameters = () => [
    { type: AuthService },
    { type: CurrentProductService },
    { type: GlobalMessageService },
    { type: TranslationService },
    { type: UserInterestsService },
    { type: ModalService },
    { type: UserNotificationPreferenceService }
];
StockNotificationComponent = __decorate([
    Component({
        selector: 'cx-stock-notification',
        template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <p>{{ 'stockNotification.getNotified' | cxTranslate }}</p>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <p>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </p>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <p>{{ 'stockNotification.notified' | cxTranslate }}</p>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], StockNotificationComponent);

let StockNotificationModule = class StockNotificationModule {
};
StockNotificationModule = __decorate([
    NgModule({
        declarations: [StockNotificationComponent, StockNotificationDialogComponent],
        imports: [CommonModule, RouterModule, I18nModule, SpinnerModule, UrlModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    StockNotificationComponent: {
                        component: StockNotificationComponent,
                    },
                },
            }),
        ],
        entryComponents: [
            StockNotificationComponent,
            StockNotificationDialogComponent,
        ],
        exports: [StockNotificationComponent, StockNotificationDialogComponent],
    })
], StockNotificationModule);

const WEEK_DAYS_NUMBER = 7;
let ScheduleComponent = class ScheduleComponent {
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    ngOnChanges(changes) {
        if (changes.location && this.location) {
            const initialDate = this.getInitialDate();
            this.displayDays = [];
            for (let i = 0; i < WEEK_DAYS_NUMBER; i++) {
                const date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    }
    /**
     * Returns the store's opening time for the given date
     * @param date date
     */
    getStoreOpeningTime(date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    }
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    getStoreClosingTime(date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    }
    /**
     * return initial (first) date to be displayed in the schedule
     */
    getInitialDate() {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    }
};
ScheduleComponent.ctorParameters = () => [
    { type: StoreDataService }
];
__decorate([
    Input()
], ScheduleComponent.prototype, "location", void 0);
ScheduleComponent = __decorate([
    Component({
        selector: 'cx-schedule',
        template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
    })
], ScheduleComponent);

let StoreFinderGridComponent = class StoreFinderGridComponent {
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
    }
    ngOnInit() {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
        }
    }
    ngOnDestroy() { }
};
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute }
];
StoreFinderGridComponent = __decorate([
    Component({
        selector: 'cx-store-finder-grid',
        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], StoreFinderGridComponent);

let StoreFinderHeaderComponent = class StoreFinderHeaderComponent {
};
StoreFinderHeaderComponent = __decorate([
    Component({
        selector: 'cx-store-finder-header',
        template: "<ng-container>\n  <cx-store-finder-search></cx-store-finder-search>\n</ng-container>\n"
    })
], StoreFinderHeaderComponent);

// tslint:disable:directive-class-suffix
let AbstractStoreItemComponent = class AbstractStoreItemComponent {
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
    }
    getDirections(location) {
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        const latitude = this.storeDataService.getStoreLatitude(location);
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    getFormattedStoreAddress(addressParts) {
        return addressParts.filter(Boolean).join(', ');
    }
};
AbstractStoreItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
__decorate([
    Input()
], AbstractStoreItemComponent.prototype, "location", void 0);
AbstractStoreItemComponent = __decorate([
    Directive()
], AbstractStoreItemComponent);

let StoreFinderListItemComponent = class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.locationIndex = null;
        this.storeItemClick = new EventEmitter();
    }
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.handleStoreItemClick();
        }
    }
};
StoreFinderListItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "locationIndex", void 0);
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "listOrderLabel", void 0);
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "displayDistance", void 0);
__decorate([
    Input()
], StoreFinderListItemComponent.prototype, "useClickEvent", void 0);
__decorate([
    Output()
], StoreFinderListItemComponent.prototype, "storeItemClick", void 0);
StoreFinderListItemComponent = __decorate([
    Component({
        selector: 'cx-store-finder-list-item',
        template: "<ng-container>\n  <div>\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      <button\n        *ngIf=\"useClickEvent\"\n        (click)=\"handleStoreItemClick()\"\n        (keyup)=\"onKey($event)\"\n      >\n        {{ location.displayName || location.name }}\n      </button>\n      <a *ngIf=\"!useClickEvent\" [routerLink]=\"[location.name]\">{{\n        location.displayName || location.name\n      }}</a>\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
    })
], StoreFinderListItemComponent);

let StoreFinderMapComponent = class StoreFinderMapComponent {
    constructor(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            this.renderMap();
        }
    }
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    }
    renderMap() {
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (markerIndex) => {
            this.selectStoreItemClickHandle(markerIndex);
        });
    }
    selectStoreItemClickHandle(markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    }
};
StoreFinderMapComponent.ctorParameters = () => [
    { type: GoogleMapRendererService }
];
__decorate([
    ViewChild('mapElement', { static: true })
], StoreFinderMapComponent.prototype, "mapElement", void 0);
__decorate([
    Input()
], StoreFinderMapComponent.prototype, "locations", void 0);
__decorate([
    Output()
], StoreFinderMapComponent.prototype, "selectedStoreItem", void 0);
StoreFinderMapComponent = __decorate([
    Component({
        selector: 'cx-store-finder-map',
        template: "<div #mapElement class=\"cx-store-map\"></div>\n"
    })
], StoreFinderMapComponent);

let StoreFinderPaginationDetailsComponent = class StoreFinderPaginationDetailsComponent {
    constructor() { }
    getResultsPerPage() {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            let resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return `${firstItem} - ${resultsPerPage}`;
        }
        else {
            return `1 - ${this.pagination.totalResults}`;
        }
    }
};
__decorate([
    Input()
], StoreFinderPaginationDetailsComponent.prototype, "pagination", void 0);
StoreFinderPaginationDetailsComponent = __decorate([
    Component({
        selector: 'cx-store-finder-pagination-details',
        template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
    })
], StoreFinderPaginationDetailsComponent);

let StoreFinderListComponent = class StoreFinderListComponent {
    constructor(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.iconTypes = ICON_TYPE;
        this.isDetailsModeVisible = false;
    }
    centerStoreOnMapByIndex(index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    selectStoreItemList(index) {
        this.selectedStoreIndex = index;
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
    showStoreDetails(location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    }
    hideStoreDetails() {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    }
};
StoreFinderListComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input()
], StoreFinderListComponent.prototype, "locations", void 0);
__decorate([
    Input()
], StoreFinderListComponent.prototype, "useMylocation", void 0);
__decorate([
    ViewChild('storeMap')
], StoreFinderListComponent.prototype, "storeMap", void 0);
StoreFinderListComponent = __decorate([
    Component({
        selector: 'cx-store-finder-list',
        template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              [useClickEvent]=\"true\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    [useClickEvent]=\"true\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
    }),
    __param(1, Inject(DOCUMENT))
], StoreFinderListComponent);

let StoreFinderSearchResultComponent = class StoreFinderSearchResultComponent {
    constructor(storeFinderService, route, config) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.config = config;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe((params) => this.initialize(params));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    viewPage(pageNumber) {
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
    }
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: 0 });
        this.radius = this.config.googleMaps.radius;
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    }
    parseParameters(queryParams) {
        let searchQuery;
        if (queryParams.query) {
            searchQuery = { queryText: queryParams.query };
        }
        else {
            searchQuery = { queryText: '' };
        }
        searchQuery.useMyLocation =
            queryParams.useMyLocation != null &&
                queryParams.useMyLocation.toUpperCase() === 'TRUE';
        return searchQuery;
    }
};
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: StoreFinderConfig }
];
StoreFinderSearchResultComponent = __decorate([
    Component({
        selector: 'cx-store-finder-search-result',
        template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
    })
], StoreFinderSearchResultComponent);

let StoreFinderSearchComponent = class StoreFinderSearchComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.searchBox = new FormControl();
        this.iconTypes = ICON_TYPE;
    }
    findStores(address) {
        this.routingService.go(['store-finder/find'], { query: address });
    }
    viewStoresWithMyLoc() {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    }
    onKey(event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
};
StoreFinderSearchComponent.ctorParameters = () => [
    { type: RoutingService }
];
StoreFinderSearchComponent = __decorate([
    Component({
        selector: 'cx-store-finder-search',
        template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          (keyup)=\"onKey($event)\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], StoreFinderSearchComponent);

let StoreFinderStoreDescriptionComponent = class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
    }
};
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: StoreDataService }
];
__decorate([
    Input()
], StoreFinderStoreDescriptionComponent.prototype, "location", void 0);
__decorate([
    Input()
], StoreFinderStoreDescriptionComponent.prototype, "disableMap", void 0);
StoreFinderStoreDescriptionComponent = __decorate([
    Component({
        selector: 'cx-store-finder-store-description',
        template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
    })
], StoreFinderStoreDescriptionComponent);

let StoreFinderStoresCountComponent = class StoreFinderStoresCountComponent {
    constructor(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    ngOnInit() {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    }
};
StoreFinderStoresCountComponent.ctorParameters = () => [
    { type: StoreFinderService }
];
StoreFinderStoresCountComponent = __decorate([
    Component({
        selector: 'cx-store-finder-stores-count',
        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div class=\"row\" *ngIf=\"locations?.length\">\n      <div\n        *ngFor=\"let country of locations\"\n        class=\"cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3\"\n      >\n        <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n          <div class=\"cx-title\">\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              class=\"cx-name\"\n              >{{ country.name }}</span\n            >\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              *ngIf=\"!country?.storeCountDataList\"\n              class=\"cx-country-count\"\n              >({{ country.count }})</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!locations?.length\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], StoreFinderStoresCountComponent);

let StoreFinderComponent = class StoreFinderComponent {
};
StoreFinderComponent = __decorate([
    Component({
        selector: 'cx-store-finder',
        template: "<ng-container>\n  <div class=\"cx-store-finder-wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n"
    })
], StoreFinderComponent);

let StoreFinderStoreComponent = class StoreFinderStoreComponent {
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    }
    requestStoresData() {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    }
    goBack() {
        this.routingService.go([
            `store-finder/country/${this.route.snapshot.params.country}`,
        ]);
    }
};
StoreFinderStoreComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
__decorate([
    Input()
], StoreFinderStoreComponent.prototype, "location", void 0);
__decorate([
    Input()
], StoreFinderStoreComponent.prototype, "disableMap", void 0);
StoreFinderStoreComponent = __decorate([
    Component({
        selector: 'cx-store-finder-store',
        template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], StoreFinderStoreComponent);

let StoreFinderModule = class StoreFinderModule {
};
StoreFinderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RouterModule,
            ListNavigationModule,
            NgbTabsetModule,
            SpinnerModule,
            UrlModule,
            StoreFinderCoreModule,
            I18nModule,
            IconModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    StoreFinderComponent: {
                        component: StoreFinderComponent,
                        childRoutes: [
                            {
                                path: 'find',
                                component: StoreFinderSearchResultComponent,
                            },
                            {
                                path: 'view-all',
                                component: StoreFinderStoresCountComponent,
                            },
                            {
                                path: 'country/:country',
                                component: StoreFinderGridComponent,
                            },
                            {
                                path: 'country/:country/region/:region',
                                component: StoreFinderGridComponent,
                            },
                            {
                                path: 'country/:country/region/:region/:store',
                                component: StoreFinderStoreComponent,
                            },
                            {
                                path: 'country/:country/:store',
                                component: StoreFinderStoreComponent,
                            },
                        ],
                    },
                },
                layoutSlots: {
                    StoreFinderPageTemplate: {
                        slots: ['MiddleContent', 'SideContent'],
                    },
                },
            }),
        ],
        declarations: [
            StoreFinderSearchComponent,
            StoreFinderListComponent,
            StoreFinderMapComponent,
            StoreFinderListItemComponent,
            StoreFinderStoresCountComponent,
            StoreFinderGridComponent,
            StoreFinderStoreDescriptionComponent,
            ScheduleComponent,
            StoreFinderHeaderComponent,
            StoreFinderSearchResultComponent,
            StoreFinderComponent,
            StoreFinderPaginationDetailsComponent,
            StoreFinderStoreComponent,
        ],
        exports: [
            ScheduleComponent,
            StoreFinderComponent,
            StoreFinderGridComponent,
            StoreFinderHeaderComponent,
            StoreFinderListItemComponent,
            StoreFinderMapComponent,
            StoreFinderPaginationDetailsComponent,
            StoreFinderSearchComponent,
            StoreFinderSearchResultComponent,
            StoreFinderListComponent,
            StoreFinderStoreDescriptionComponent,
            StoreFinderStoresCountComponent,
            StoreFinderStoreComponent,
        ],
        entryComponents: [
            StoreFinderComponent,
            StoreFinderSearchResultComponent,
            StoreFinderStoresCountComponent,
            StoreFinderGridComponent,
            StoreFinderStoreComponent,
        ],
    })
], StoreFinderModule);

let CheckoutLoginComponent = class CheckoutLoginComponent {
    constructor(formBuilder, authRedirectService, activeCartService) {
        this.formBuilder = formBuilder;
        this.authRedirectService = authRedirectService;
        this.activeCartService = activeCartService;
        this.checkoutLoginForm = this.formBuilder.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            emailConfirmation: ['', [Validators.required]],
        }, {
            validators: CustomFormValidators.emailsMustMatch('email', 'emailConfirmation'),
        });
    }
    onSubmit() {
        if (this.checkoutLoginForm.valid) {
            const email = this.checkoutLoginForm.get('email').value;
            this.activeCartService.addEmail(email);
            if (!this.sub) {
                this.sub = this.activeCartService.getAssignedUser().subscribe(() => {
                    if (this.activeCartService.isGuestCart()) {
                        this.authRedirectService.redirect();
                    }
                });
            }
        }
        else {
            this.checkoutLoginForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
CheckoutLoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: ActiveCartService }
];
CheckoutLoginComponent = __decorate([
    Component({
        selector: 'cx-checkout-login',
        template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"checkoutLoginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('email')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n      />\n      <cx-form-errors\n        [control]=\"checkoutLoginForm.get('emailConfirmation')\"\n      ></cx-form-errors>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
    })
], CheckoutLoginComponent);

let CheckoutLoginModule = class CheckoutLoginModule {
};
CheckoutLoginModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            FormsModule,
            ReactiveFormsModule,
            FormsModule,
            ReactiveFormsModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    GuestCheckoutLoginComponent: {
                        component: CheckoutLoginComponent,
                        guards: [NotCheckoutAuthGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutLoginComponent],
        exports: [CheckoutLoginComponent],
        entryComponents: [CheckoutLoginComponent],
    })
], CheckoutLoginModule);

let LoginFormComponent = class LoginFormComponent {
    constructor(auth, globalMessageService, fb, authRedirectService, winRef, activatedRoute, checkoutConfigService) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
        this.activatedRoute = activatedRoute;
        this.checkoutConfigService = checkoutConfigService;
        this.loginAsGuest = false;
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        const routeState = (_b = (_a = this.winRef.nativeWindow) === null || _a === void 0 ? void 0 : _a.history) === null || _b === void 0 ? void 0 : _b.state;
        const prefilledEmail = routeState === null || routeState === void 0 ? void 0 : routeState['newUid'];
        this.loginForm = this.fb.group({
            userId: [
                (prefilledEmail === null || prefilledEmail === void 0 ? void 0 : prefilledEmail.length) ? prefilledEmail : '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
            password: ['', Validators.required],
        });
        if (this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = (_e = (_d = (_c = this.activatedRoute) === null || _c === void 0 ? void 0 : _c.snapshot) === null || _d === void 0 ? void 0 : _d.queryParams) === null || _e === void 0 ? void 0 : _e['forced'];
        }
    }
    submitForm() {
        if (this.loginForm.valid) {
            this.loginUser();
        }
        else {
            this.loginForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    loginUser() {
        const { userId, password } = this.loginForm.controls;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe((data) => {
                if (data && data.access_token) {
                    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    this.authRedirectService.redirect();
                }
            });
        }
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: WindowRef },
    { type: ActivatedRoute },
    { type: CheckoutConfigService }
];
LoginFormComponent = __decorate([
    Component({
        selector: 'cx-login-form',
        template: "<form (ngSubmit)=\"submitForm()\" [formGroup]=\"loginForm\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n      <cx-form-errors [control]=\"loginForm.get('userId')\"></cx-form-errors>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <cx-form-errors [control]=\"loginForm.get('password')\"></cx-form-errors>\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <p class=\"cx-section-title\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </p>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
    })
], LoginFormComponent);

let LoginFormModule = class LoginFormModule {
};
LoginFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            UrlModule,
            I18nModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    ReturningCustomerLoginComponent: {
                        component: LoginFormComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
        ],
        declarations: [LoginFormComponent],
        exports: [LoginFormComponent],
        entryComponents: [LoginFormComponent],
    })
], LoginFormModule);

let LoginComponent = class LoginComponent {
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    ngOnInit() {
        this.user$ = this.auth.isUserLoggedIn().pipe(switchMap((isUserLoggedIn) => {
            if (isUserLoggedIn) {
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService }
];
LoginComponent = __decorate([
    Component({
        selector: 'cx-login',
        template: "<ng-container *ngIf=\"user$ | async as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n    'miniLogin.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
    })
], LoginComponent);

let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    LoginComponent: {
                        component: LoginComponent,
                    },
                },
            }),
        ],
        declarations: [LoginComponent],
        entryComponents: [LoginComponent],
        exports: [LoginComponent],
    })
], LoginModule);

/**
 * Guards the _logout_ route.
 *
 * Takes care of routing the user to a logout page (if available) or redirects to
 * the homepage. If the homepage is protected, the user is redirected
 * to the login route instead.
 */
let LogoutGuard = class LogoutGuard {
    constructor(auth, cms, routing, semanticPathService, protectedRoutes) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
    }
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap((hasPage) => {
            if (!hasPage) {
                this.redirect();
            }
        }));
    }
    /**
     * Whenever there is no specific "logout" page configured in the CMS,
     * we redirect after the user is logged out.
     *
     * The user gets redirected to the homepage, unless the homepage is protected
     * (in case of a closed shop). We'll redirect to the login page instead.
     */
    redirect() {
        const cxRoute = this.protectedRoutes.shouldProtect ? 'login' : 'home';
        this.routing.go({ cxRoute });
    }
    /**
     * Log user out.
     *
     * This is delegated to the `AuthService`.
     */
    logout() {
        this.auth.logout();
    }
};
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService }
];
LogoutGuard.ɵprov = ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(ɵɵinject(AuthService), ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesService)); }, token: LogoutGuard, providedIn: "root" });
LogoutGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], LogoutGuard);

const ɵ0$9 = { cxRoute: 'logout' };
let LogoutModule = class LogoutModule {
};
LogoutModule = __decorate([
    NgModule({
        imports: [
            PageLayoutModule,
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [LogoutGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$9,
                },
            ]),
        ],
    })
], LogoutModule);

let RegisterComponent = class RegisterComponent {
    constructor(userService, globalMessageService, fb, router, anonymousConsentsService, anonymousConsentsConfig) {
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.subscription = new Subscription();
        this.registerForm = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
            newsletter: new FormControl({
                value: false,
                disabled: this.isConsentRequired(),
            }),
            termsandconditions: [false, Validators.requiredTrue],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'passwordconf'),
        });
    }
    ngOnInit() {
        var _a;
        this.titles$ = this.userService.getTitles().pipe(tap((titles) => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map((titles) => {
            return titles.sort(sortTitles);
        }));
        this.loading$ = this.userService.getRegisterUserResultLoading();
        this.registerUserProcessInit();
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter((messages) => !!Object.keys(messages).length))
            .subscribe((globalMessageEntities) => {
            const messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some((message) => message === 'This field is required.')) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }));
        const { registerConsent } = (_a = this.anonymousConsentsConfig) === null || _a === void 0 ? void 0 : _a.anonymousConsents;
        this.anonymousConsent$ = combineLatest([
            this.anonymousConsentsService.getConsent(registerConsent),
            this.anonymousConsentsService.getTemplate(registerConsent),
        ]).pipe(map(([consent, template]) => {
            return {
                consent,
                template: template ? template.description : '',
            };
        }));
        this.subscription.add(this.registerForm.get('newsletter').valueChanges.subscribe(() => {
            this.toggleAnonymousConsent();
        }));
    }
    submitForm() {
        if (this.registerForm.valid) {
            this.registerUser();
        }
        else {
            this.registerForm.markAllAsTouched();
        }
    }
    registerUser() {
        this.userService.register(this.collectDataFromRegisterForm(this.registerForm.value));
    }
    titleSelected(title) {
        this.registerForm['controls'].titleCode.setValue(title.code);
    }
    collectDataFromRegisterForm(formData) {
        const { firstName, lastName, email, password, titleCode } = formData;
        return {
            firstName,
            lastName,
            uid: email.toLowerCase(),
            password,
            titleCode,
        };
    }
    isConsentGiven(consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    }
    isConsentRequired() {
        var _a;
        const { requiredConsents, registerConsent, } = (_a = this.anonymousConsentsConfig) === null || _a === void 0 ? void 0 : _a.anonymousConsents;
        if (requiredConsents && registerConsent) {
            return requiredConsents.includes(registerConsent);
        }
        return false;
    }
    onRegisterUserSuccess(success) {
        if (success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    toggleAnonymousConsent() {
        const { registerConsent } = this.anonymousConsentsConfig.anonymousConsents;
        if (Boolean(this.registerForm.get('newsletter').value)) {
            this.anonymousConsentsService.giveConsent(registerConsent);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(registerConsent);
        }
    }
    registerUserProcessInit() {
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe((success) => {
            this.onRegisterUserSuccess(success);
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: RoutingService },
    { type: AnonymousConsentsService },
    { type: AnonymousConsentsConfig }
];
RegisterComponent = __decorate([
    Component({
        selector: 'cx-register',
        template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form (ngSubmit)=\"submitForm()\" [formGroup]=\"registerForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('firstName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('lastName')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('email')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('password')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <cx-form-errors\n                [control]=\"registerForm.get('passwordconf')\"\n              ></cx-form-errors>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                  [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                />\n                <span class=\"form-check-label\">\n                  {{ anonymousConsent.template }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n                <cx-form-errors\n                  [control]=\"registerForm.get('termsandconditions')\"\n                ></cx-form-errors>\n              </label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-block btn-primary\">\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
    })
], RegisterComponent);

let RegisterComponentModule = class RegisterComponentModule {
};
RegisterComponentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LoginModule,
            ReactiveFormsModule,
            RouterModule,
            UrlModule,
            I18nModule,
            SpinnerModule,
            FormErrorsModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    RegisterCustomerComponent: {
                        component: RegisterComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
        ],
        declarations: [RegisterComponent],
        exports: [RegisterComponent],
        entryComponents: [RegisterComponent],
    })
], RegisterComponentModule);

let UserComponentModule = class UserComponentModule {
};
UserComponentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LoginModule,
            LoginFormModule,
            LogoutModule,
            CheckoutLoginModule,
            ReactiveFormsModule,
            RouterModule,
            UrlModule,
            RegisterComponentModule,
        ],
    })
], UserComponentModule);

let WishListItemComponent = class WishListItemComponent {
    constructor() {
        this.isLoading = false;
        this.remove = new EventEmitter();
    }
    removeEntry(item) {
        this.remove.emit(item);
    }
};
__decorate([
    Input()
], WishListItemComponent.prototype, "isLoading", void 0);
__decorate([
    Input()
], WishListItemComponent.prototype, "cartEntry", void 0);
__decorate([
    Output()
], WishListItemComponent.prototype, "remove", void 0);
WishListItemComponent = __decorate([
    Component({
        selector: 'cx-wish-list-item',
        template: "<div class=\"row\">\n  <!-- Item Image -->\n  <div class=\"cx-image-container col-2\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\"\n      tabindex=\"-1\"\n    >\n      <cx-media [container]=\"cartEntry.product.images?.PRIMARY\"></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row\">\n      <!-- Item Description -->\n      <div class=\"col-md-5 col-lg-5 col-xl-5\">\n        <div *ngIf=\"cartEntry.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { cxRoute: 'product', params: cartEntry.product } | cxUrl\n            \"\n            >{{ cartEntry.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"cartEntry.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"cartEntry.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of cartEntry.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"cartEntry.basePrice\"\n        class=\"cx-price col-md-3 col-lg-4 col-xl-4\"\n      >\n        <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"cartEntry.basePrice\" class=\"cx-value\">\n          {{ cartEntry.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Total -->\n      <div class=\"col-sm-8 col-md-4 col-lg-3 col-xl-3 cx-add-to-cart\">\n        <cx-add-to-cart\n          *ngIf=\"\n            cartEntry.product.stock.stockLevelStatus !== 'outOfStock';\n            else outOfStock\n          \"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n        <ng-template #outOfStock>\n          <span class=\"cx-out-of-stock\">\n            {{ 'addToCart.outOfStock' | cxTranslate }}\n          </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"cx-return-button col-12\">\n      <button\n        class=\"btn cx-action-link\"\n        (click)=\"removeEntry(cartEntry)\"\n        [disabled]=\"isLoading\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], WishListItemComponent);

let WishListComponent = class WishListComponent {
    constructor(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    removeEntry(item) {
        this.wishListService.removeEntry(item);
    }
};
WishListComponent.ctorParameters = () => [
    { type: WishListService }
];
WishListComponent = __decorate([
    Component({
        selector: 'cx-wish-list',
        template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
    })
], WishListComponent);

let WishListModule = class WishListModule {
};
WishListModule = __decorate([
    NgModule({
        imports: [
            AddToCartModule,
            CommonModule,
            I18nModule,
            MediaModule,
            RouterModule,
            StarRatingModule,
            UrlModule,
            ItemCounterModule,
        ],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    WishListComponent: {
                        component: WishListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        declarations: [WishListComponent, WishListItemComponent],
        entryComponents: [WishListComponent],
        exports: [WishListComponent, WishListItemComponent],
    })
], WishListModule);

let CmsLibModule = class CmsLibModule {
};
CmsLibModule = __decorate([
    NgModule({
        imports: [
            AnonymousConsentManagementBannerModule,
            AsmModule,
            HamburgerMenuModule,
            CmsParagraphModule,
            LinkModule,
            BannerModule,
            CategoryNavigationModule,
            NavigationModule,
            FooterNavigationModule,
            BreadcrumbModule,
            SearchBoxModule,
            SiteContextSelectorModule,
            QualtricsModule,
            AddressBookModule,
            OrderHistoryModule,
            OrderCancellationModule,
            OrderReturnModule,
            ReturnRequestListModule,
            ReturnRequestDetailModule,
            ProductListModule,
            ProductFacetNavigationModule,
            ProductTabsModule,
            ProductCarouselModule,
            ProductReferencesModule,
            OrderDetailsModule,
            PaymentMethodsModule,
            UpdateEmailModule,
            UpdatePasswordModule,
            UpdateProfileModule,
            ConsentManagementModule,
            CloseAccountModule,
            CartComponentModule,
            TabParagraphContainerModule,
            OrderConfirmationModule,
            StoreFinderModule,
            ProductImagesModule,
            ProductSummaryModule,
            ProductVariantsModule,
            ProductIntroModule,
            CheckoutComponentModule,
            ForgotPasswordModule,
            ResetPasswordModule,
            BannerCarouselModule,
            UserComponentModule,
            MyCouponsModule,
            WishListModule,
            NotificationPreferenceModule,
            MyInterestsModule,
            StockNotificationModule,
        ],
    })
], CmsLibModule);

function getProductDetailsUrlMatcherFactory(service, defaultMatcherFactory) {
    const factory = (route) => {
        const defaultMatcher = defaultMatcherFactory(route);
        const suffixPDPMatcher = getSuffixUrlMatcher({
            marker: 'p',
            paramName: 'productCode',
        });
        return service.getCombined([defaultMatcher, suffixPDPMatcher]);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for PDP.
 * The provided url matcher matches both:
 * - the configured `paths` from routing config and
 * - custom pattern  `** / p / :productCode`
 *
 * If the this matcher doesn't fit the requirements, it can be replaced with the DEFAULT_URL_MATCHER
 * or additional matchers can be added for a specific route.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
const PRODUCT_DETAILS_URL_MATCHER = new InjectionToken('PRODUCT_DETAILS_URL_MATCHER', {
    providedIn: 'root',
    factory: () => getProductDetailsUrlMatcherFactory(inject(UrlMatcherService), inject(DEFAULT_URL_MATCHER)),
});

const ɵ0$a = { cxRoute: 'product' };
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$a,
                },
            ]),
        ],
        providers: [
            provideDefaultConfig({
                routing: {
                    routes: {
                        product: {
                            matchers: [PRODUCT_DETAILS_URL_MATCHER],
                        },
                    },
                },
            }),
        ],
    })
], ProductDetailsPageModule);

function getProductListingUrlMatcherFactory(service, defaultMatcherFactory) {
    const factory = (route) => {
        const defaultMatcher = defaultMatcherFactory(route);
        const suffixPLPMatcher = getSuffixUrlMatcher({
            marker: 'c',
            paramName: 'categoryCode',
        });
        return service.getCombined([defaultMatcher, suffixPLPMatcher]);
    };
    return factory;
}
/**
 * Injection token with url matcher factory for PLP.
 * The provided url matcher matches both:
 * - the configured `paths` from routing config and
 * - custom pattern  `** / c / :categoryCode`
 *
 * If the this matcher doesn't fit the requirements, it can be replaced with the DEFAULT_URL_MATCHER
 * or additional matchers can be added for a specific route.
 *
 * Note: Matchers will "match" a route, but do not contribute to the creation of the route, nor do they guard routes.
 */
const PRODUCT_LISTING_URL_MATCHER = new InjectionToken('PRODUCT_LISTING_URL_MATCHER', {
    providedIn: 'root',
    factory: () => getProductListingUrlMatcherFactory(inject(UrlMatcherService), inject(DEFAULT_URL_MATCHER)),
});

const ɵ0$b = { pageLabel: 'search', cxRoute: 'search' }, ɵ1$1 = { cxRoute: 'brand' }, ɵ2 = { cxRoute: 'category' };
let ProductListingPageModule = class ProductListingPageModule {
};
ProductListingPageModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ0$b,
                },
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ1$1,
                },
                {
                    // The 'category' route  may include a greedy suffix url matcher '**/c/:categoryCode'
                    // So not to shadow the specific 'brand' route, the 'category' is the last route in the sequence.
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ2,
                },
            ]),
        ],
        providers: [
            provideDefaultConfig({
                routing: {
                    routes: {
                        category: {
                            matchers: [PRODUCT_LISTING_URL_MATCHER],
                        },
                    },
                },
            }),
        ],
    })
], ProductListingPageModule);

const b2cLayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            lg: {
                slots: [
                    'SiteContext',
                    'SiteLinks',
                    'SiteLogo',
                    'SearchBox',
                    'SiteLogin',
                    'MiniCart',
                    'NavigationBar',
                ],
            },
            slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
        },
        navigation: {
            lg: { slots: [] },
            slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
        },
        footer: {
            slots: ['Footer'],
        },
        LandingPage2Template: {
            pageFold: 'Section2B',
            slots: [
                'Section1',
                'Section2A',
                'Section2B',
                'Section2C',
                'Section3',
                'Section4',
                'Section5',
            ],
        },
        ContentPage1Template: {
            slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
            pageFold: 'Section2',
            slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductListSlot'],
        },
        ProductGridPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductGridSlot'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'ProductLeftRefinements',
                'SearchResultsListSlot',
                'Section4',
            ],
        },
        SearchResultsGridPageTemplate: {
            slots: [
                'Section2',
                'ProductLeftRefinements',
                'SearchResultsGridSlot',
                'Section4',
            ],
        },
        ProductDetailsPageTemplate: {
            lg: {
                pageFold: 'UpSelling',
            },
            pageFold: 'Summary',
            slots: [
                'Summary',
                'UpSelling',
                'CrossSelling',
                'Tabs',
                'PlaceholderContentSlot',
            ],
        },
        CartPageTemplate: {
            slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
        },
        AccountPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
            slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
            slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
            slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
        },
        CheckoutLoginPageTemplate: {
            slots: ['RightContentSlot'],
        },
    },
};

const mediaConfig = {
    mediaFormats: {
        mobile: {
            width: 400,
        },
        tablet: {
            width: 770,
        },
        desktop: {
            width: 1140,
        },
        widescreen: {
            width: 1400,
        },
        // product media
        cartIcon: {
            width: 65,
        },
        thumbnail: {
            width: 96,
        },
        product: {
            width: 284,
        },
        zoom: {
            width: 515,
        },
    },
};

const headerComponents = {
    HamburgerMenuComponent: {
        typeCode: 'HamburgerMenuComponent',
        flexType: 'HamburgerMenuComponent',
    },
    LoginComponent: {
        typeCode: 'LoginComponent',
        flexType: 'LoginComponent',
        uid: 'LoginComponent',
    },
};
const defaultPageHeaderConfig = {
    PreHeader: {
        componentIds: ['HamburgerMenuComponent'],
    },
    SiteLogin: {
        componentIds: ['LoginComponent'],
    },
};

function defaultCmsContentConfig() {
    return {
        cmsStructure: {
            components: Object.assign({}, headerComponents),
            slots: Object.assign({}, defaultPageHeaderConfig),
            pages: [],
        },
    };
}

let StorefrontFoundationModule = class StorefrontFoundationModule {
};
StorefrontFoundationModule = __decorate([
    NgModule({
        imports: [
            StateModule.forRoot(),
            AuthModule.forRoot(),
            AnonymousConsentsModule.forRoot(),
            ConfigModule.forRoot(),
            ConfigInitializerModule.forRoot(),
            ConfigValidatorModule.forRoot(),
            RoutingModule.forRoot(),
            I18nModule.forRoot(),
            CmsModule.forRoot(),
            GlobalMessageModule.forRoot(),
            ProcessModule.forRoot(),
            CartModule.forRoot(),
            CheckoutModule.forRoot(),
            UserModule.forRoot(),
            ProductModule.forRoot(),
            ViewConfigModule.forRoot(),
            FeaturesConfigModule.forRoot('2.0'),
            LayoutModule,
            MediaModule.forRoot(),
        ],
        exports: [LayoutModule],
        providers: [...provideConfigFromMetaTags()],
    })
], StorefrontFoundationModule);

var StorefrontModule_1;
let StorefrontModule = StorefrontModule_1 = class StorefrontModule {
    static withConfig(config) {
        return {
            ngModule: StorefrontModule_1,
            providers: [provideConfig(config)],
        };
    }
};
StorefrontModule = StorefrontModule_1 = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot([], {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
            StoreModule.forRoot({}),
            EffectsModule.forRoot([]),
            // ASM module must be imported before the `AuthModule (which is imported in `StorefrontFoundationModule`)
            // since we might have conflicting interceptor logic. See #5461.
            AsmModule,
            StorefrontFoundationModule,
            MainModule,
            SiteContextModule.forRoot(),
            SmartEditModule.forRoot(),
            PersonalizationModule.forRoot(),
            // opt-in explicitly
            OccModule.forRoot(),
            ProductDetailsPageModule,
            ProductListingPageModule,
            ExternalRoutesModule.forRoot(),
        ],
        exports: [MainModule, StorefrontFoundationModule],
    })
], StorefrontModule);

var B2cStorefrontModule_1;
let B2cStorefrontModule = B2cStorefrontModule_1 = class B2cStorefrontModule {
    static withConfig(config) {
        return {
            ngModule: B2cStorefrontModule_1,
            providers: [provideConfig(config)],
        };
    }
};
B2cStorefrontModule = B2cStorefrontModule_1 = __decorate([
    NgModule({
        imports: [
            StorefrontModule,
            // the cms lib module contains all components that added in the bundle
            CmsLibModule,
        ],
        providers: [
            provideDefaultConfig({
                pwa: {
                    enabled: true,
                    addToHomeScreen: true,
                },
            }),
            provideDefaultConfig(b2cLayoutConfig),
            provideDefaultConfig(mediaConfig),
            provideDefaultConfigFactory(defaultCmsContentConfig),
        ],
        exports: [StorefrontModule],
    })
], B2cStorefrontModule);

/*
 * Public API Surface of storefrontlib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AVOID_STACKED_OUTLETS, AbstractStoreItemComponent, ActiveFacetsComponent, ActiveFacetsModule, AddToCartComponent, AddToCartModule, AddToHomeScreenBannerComponent, AddToHomeScreenBtnComponent, AddToHomeScreenComponent, AddToHomeScreenService, AddToWishListComponent, AddToWishListModule, AddedToCartDialogComponent, AddressBookComponent, AddressBookComponentService, AddressBookModule, AddressFormComponent, AddressFormModule, AmendOrderActionsComponent, AmendOrderActionsModule, AmendOrderItemsModule, AmendOrderType, AnonymousConsentDialogComponent, AnonymousConsentLaunchDialogService, AnonymousConsentManagementBannerComponent, AnonymousConsentManagementBannerModule, AnonymousConsentOpenDialogComponent, AnonymousConsentsDialogModule, AppliedCouponsComponent, AsmModule, B2cStorefrontModule, BREAKPOINT, BannerCarouselComponent, BannerCarouselModule, BannerComponent, BannerModule, BreadcrumbComponent, BreadcrumbModule, BreadcrumbSchemaBuilder, BreakpointService, CancelOrReturnItemsComponent, CancelOrderComponent, CancelOrderConfirmationComponent, CancelOrderConfirmationModule, CancelOrderModule, CardComponent, CardModule, CarouselComponent, CarouselModule, CarouselService, CartComponentModule, CartCouponComponent, CartCouponModule, CartDetailsComponent, CartDetailsModule, CartItemComponent, CartItemListComponent, CartNotEmptyGuard, CartPageLayoutHandler, CartSharedModule, CartTotalsComponent, CartTotalsModule, CategoryNavigationComponent, CategoryNavigationModule, CheckoutAuthGuard, CheckoutComponentModule, CheckoutConfig, CheckoutConfigService, CheckoutDetailsLoadedGuard, CheckoutDetailsService, CheckoutGuard, CheckoutLoginComponent, CheckoutLoginModule, CheckoutOrchestratorComponent, CheckoutOrchestratorModule, CheckoutOrderSummaryComponent, CheckoutOrderSummaryModule, CheckoutProgressComponent, CheckoutProgressMobileBottomComponent, CheckoutProgressMobileBottomModule, CheckoutProgressMobileTopComponent, CheckoutProgressMobileTopModule, CheckoutProgressModule, CheckoutStepType, CloseAccountComponent, CloseAccountModalComponent, CloseAccountModule, CmsComponentData, CmsComponentsService, CmsGuardsService, CmsI18nService, CmsInjectorService, CmsLibModule, CmsPageGuard, CmsParagraphModule, CmsRouteModule, CmsRoutesService, ComponentHandler, ComponentHandlerService, ComponentWrapperDirective, ConsentManagementComponent, ConsentManagementFormComponent, ConsentManagementModule, ConsignmentTrackingComponent, CouponCardComponent, CouponClaimComponent, CouponDialogComponent, CurrentProductService, CustomFormValidators, DIALOG_TYPE, DefaultComponentHandler, DeferLoaderService, DeliveryModeComponent, DeliveryModeModule, DeliveryModePreferences, DeliveryModeSetGuard, ExpressCheckoutService, FacetComponent, FacetGroupCollapsedState, FacetListComponent, FacetListModule, FacetModule, FacetService, FocusDirective, FooterNavigationComponent, FooterNavigationModule, ForgotPasswordComponent, ForgotPasswordModule, FormErrorsComponent, FormErrorsModule, GenericLinkComponent, GenericLinkModule, GlobalMessageComponent, GlobalMessageComponentModule, GuestRegisterFormComponent, HamburgerMenuComponent, HamburgerMenuModule, HamburgerMenuService, HighlightPipe, ICON_TYPE, IconComponent, IconConfig, IconLoaderService, IconModule, IconResourceType, InlineRenderStrategy, IntersectionService, ItemCounterComponent, ItemCounterModule, JSONLD_PRODUCT_BUILDER, JsonLdBaseProductBuilder, JsonLdBuilderModule, JsonLdDirective, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, JsonLdScriptFactory, KeyboardFocusModule, KeyboardFocusService, LAUNCH_CALLER, LanguageCurrencyComponent, LaunchDialogModule, LaunchDialogService, LaunchRenderStrategy, LayoutConfig, LayoutModule, LazyComponentHandler, LinkComponent, LinkModule, ListNavigationModule, LoginComponent, LoginFormComponent, LoginFormModule, LoginModule, LogoutGuard, LogoutModule, MainModule, MediaComponent, MediaConfig, MediaModule, MediaService, MiniCartComponent, MiniCartModule, ModalRef, ModalService, MyCouponsComponent, MyCouponsModule, MyInterestsComponent, MyInterestsModule, NavigationComponent, NavigationModule, NavigationService, NavigationUIComponent, NotCheckoutAuthGuard, NotificationPreferenceComponent, NotificationPreferenceModule, OrderAmendService, OrderCancellationGuard, OrderCancellationModule, OrderCancellationService, OrderConfirmationGuard, OrderConfirmationItemsComponent, OrderConfirmationModule, OrderConfirmationOverviewComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderConsignedEntriesComponent, OrderDetailActionsComponent, OrderDetailHeadlineComponent, OrderDetailItemsComponent, OrderDetailShippingComponent, OrderDetailTotalsComponent, OrderDetailsModule, OrderDetailsService, OrderHistoryComponent, OrderHistoryModule, OrderModule, OrderReturnGuard, OrderReturnModule, OrderReturnRequestListComponent, OrderReturnService, OrderSummaryComponent, OutletDirective, OutletModule, OutletPosition, OutletRefDirective, OutletRefModule, OutletRenderStrategy, OutletRendererService, OutletService, PAGE_LAYOUT_HANDLER, PRODUCT_DETAILS_URL_MATCHER, PRODUCT_LISTING_URL_MATCHER, PWAModuleConfig, PageComponentModule, PageLayoutComponent, PageLayoutModule, PageLayoutService, PageSlotComponent, PageSlotModule, PaginationBuilder, PaginationComponent, PaginationConfig, PaginationItemType, PaginationModule, PaginationNavigationPosition, ParagraphComponent, PaymentDetailsSetGuard, PaymentFormComponent, PaymentFormModule, PaymentMethodComponent, PaymentMethodModule, PaymentMethodsComponent, PaymentMethodsModule, PlaceOrderComponent, PlaceOrderModule, ProductAttributesComponent, ProductAttributesModule, ProductCarouselComponent, ProductCarouselModule, ProductCarouselService, ProductDetailOutlets, ProductDetailsPageModule, ProductDetailsTabComponent, ProductDetailsTabModule, ProductFacetNavigationComponent, ProductFacetNavigationModule, ProductFacetService, ProductGridItemComponent, ProductImagesComponent, ProductImagesModule, ProductIntroComponent, ProductIntroModule, ProductListComponent, ProductListComponentService, ProductListItemComponent, ProductListModule, ProductListingPageModule, ProductReferencesComponent, ProductReferencesModule, ProductReviewsComponent, ProductReviewsModule, ProductSchemaBuilder, ProductScrollComponent, ProductSummaryComponent, ProductSummaryModule, ProductTabsModule, ProductVariantGuard, ProductVariantsComponent, ProductVariantsModule, ProductViewComponent, PromotionService, PromotionsComponent, PromotionsModule, PwaModule, QUALTRICS_EVENT_NAME, QualtricsComponent, QualtricsConfig, QualtricsLoaderService, QualtricsModule, RegisterComponent, RegisterComponentModule, ResetPasswordFormComponent, ResetPasswordModule, ReturnOrderComponent, ReturnOrderConfirmationComponent, ReturnOrderConfirmationModule, ReturnOrderModule, ReturnRequestDetailModule, ReturnRequestItemsComponent, ReturnRequestListModule, ReturnRequestOverviewComponent, ReturnRequestTotalsComponent, ReviewSubmitComponent, ReviewSubmitModule, RoutingModule, RoutingRenderStrategy, SCHEMA_BUILDER, SaveForLaterComponent, SaveForLaterModule, ScheduleComponent, SearchBoxComponent, SearchBoxComponentService, SearchBoxModule, SelectFocusUtility, SeoMetaService, SeoModule, ShippingAddressComponent, ShippingAddressModule, ShippingAddressSetGuard, SiteContextComponentService, SiteContextSelectorComponent, SiteContextSelectorModule, SiteContextType, SkipLink, SkipLinkComponent, SkipLinkConfig, SkipLinkDirective, SkipLinkModule, SkipLinkScrollPosition, SkipLinkService, SortingComponent, SpinnerComponent, SpinnerModule, SplitViewComponent, SplitViewDeactivateGuard, SplitViewModule, SplitViewService, StarRatingComponent, StarRatingModule, StockNotificationComponent, StockNotificationDialogComponent, StockNotificationModule, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderModule, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StorefrontComponent, StorefrontFoundationModule, StorefrontModule, StructuredDataModule, SuggestedAddressDialogComponent, TabParagraphContainerComponent, TabParagraphContainerModule, TableComponent, TableConfig, TableModule, TableService, TrackingEventsComponent, USE_STACKED_OUTLETS, UpdateEmailComponent, UpdateEmailFormComponent, UpdateEmailModule, UpdatePasswordComponent, UpdatePasswordFormComponent, UpdatePasswordModule, UpdateProfileComponent, UpdateProfileFormComponent, UpdateProfileModule, UserComponentModule, VariantColorSelectorComponent, VariantColorSelectorModule, VariantSizeSelectorComponent, VariantSizeSelectorModule, VariantStyleIconsComponent, VariantStyleIconsModule, VariantStyleSelectorComponent, VariantStyleSelectorModule, ViewComponent, ViewConfig, ViewConfigModule, ViewModes, WishListComponent, WishListItemComponent, WishListModule, b2cLayoutConfig, controlsMustMatch, defaultCmsContentConfig, defaultPWAModuleConfig, defaultPageHeaderConfig, defaultPaginationConfig, defaultScrollConfig, defaultSkipLinkConfig, fontawesomeIconConfig, getSuffixUrlMatcher, headerComponents, initSeoService, mediaConfig, sortTitles, titleScores, ɵ0$1 as ɵ0, ɵ1, ɵ2, pwaConfigurationFactory as ɵa, pwaFactory as ɵb, AsmComponentService as ɵba, CSAgentLoginFormComponent as ɵbb, CustomerSelectionComponent as ɵbc, AsmSessionTimerComponent as ɵbd, FormatTimerPipe as ɵbe, CustomerEmulationComponent as ɵbf, AsmToggleUiComponent as ɵbg, defaultAsmLayoutConfig as ɵbh, defaultCheckoutConfig as ɵbi, defaultQualtricsConfig as ɵbj, CmsPageGuardService as ɵbk, CmsRoutesImplService as ɵbl, ReturnRequestService as ɵbm, MyCouponsComponentService as ɵbn, addCmsRoute as ɵbo, defaultStorefrontRoutesConfig as ɵbp, defaultRoutingConfig as ɵbq, htmlLangProvider as ɵbr, setHtmlLangAttribute as ɵbs, getStructuredDataFactory as ɵc, FOCUS_ATTR as ɵd, skipLinkFactory as ɵe, LockFocusDirective as ɵf, TrapFocusDirective as ɵg, TabFocusDirective as ɵh, AutoFocusDirective as ɵi, EscapeFocusDirective as ɵj, PersistFocusDirective as ɵk, BlockFocusDirective as ɵl, VisibleFocusDirective as ɵm, BaseFocusDirective as ɵn, BaseFocusService as ɵo, PersistFocusService as ɵp, EscapeFocusService as ɵq, AutoFocusService as ɵr, TabFocusService as ɵs, TrapFocusService as ɵt, LockFocusService as ɵu, defaultAnonymousConsentLayoutConfig as ɵv, AsmLoaderModule as ɵw, asmFactory as ɵx, AsmEnablerService as ɵy, AsmMainUiComponent as ɵz };
//# sourceMappingURL=spartacus-storefront.js.map
