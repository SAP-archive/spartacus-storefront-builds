import { __decorate, __param, __awaiter } from 'tslib';
import { CommonModule, isPlatformBrowser, DOCUMENT, isPlatformServer, Location, formatCurrency, getCurrencySymbol } from '@angular/common';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, Renderer2, Input, Component, NgModule, ComponentFactoryResolver, Inject, PLATFORM_ID, Optional, NgZone, Injector, ViewContainerRef, Directive, INJECTOR, InjectionToken, isDevMode, ChangeDetectionStrategy, TemplateRef, EventEmitter, ComponentFactory, Output, HostBinding, APP_INITIALIZER, SecurityContext, RendererFactory2, ViewEncapsulation, ChangeDetectorRef, Pipe, ViewChild, HostListener, ViewChildren, inject } from '@angular/core';
import { WindowRef, ConfigModule, Config, isFeatureLevel, AnonymousConsentsConfig, AnonymousConsentsService, I18nModule, FeaturesConfigModule, DeferLoadingStrategy, CmsConfig, AuthService, CartService, CartDataService, CheckoutService, CheckoutDeliveryService, CheckoutPaymentService, CmsService, PageMetaService, FeatureConfigService, GlobalMessageService, TranslationService, KymaService, OccEndpointsService, ProductService, ProductSearchService, ProductReviewService, ProductReferenceService, SearchboxService, RoutingService, CurrencyService, LanguageService, BaseSiteService, UserService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserNotificationPreferenceService, UserInterestsService, SelectiveCartService, DynamicAttributeService, TranslationChunkService, PageType, SemanticPathService, ProtectedRoutesGuard, GlobalMessageType, provideConfig, RoutingModule as RoutingModule$1, PageRobotsMeta, ProductScope, AsmAuthService, AsmConfig, AsmService, AsmModule as AsmModule$1, PromotionLocation, OccConfig, UrlModule, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, ContextServiceMap, SiteContextModule, EMAIL_PATTERN, PASSWORD_PATTERN, CartVoucherService, OCC_USER_ID_ANONYMOUS, CustomerCouponService, WishListService, ActiveCartService, CartModule, RoutingConfigService, AuthRedirectService, ANONYMOUS_CONSENT_STATUS, isFeatureEnabled, ANONYMOUS_CONSENTS_FEATURE, AuthGuard, NotAuthGuard, OrderReturnRequestService, CmsPageTitleModule, VariantType, VariantQualifier, NotificationType, StoreDataService, StoreFinderService, GoogleMapRendererService, StoreFinderCoreModule, ProtectedRoutesService, UrlMatcherService, DEFAULT_URL_MATCHER, StateModule, AuthModule, AnonymousConsentsModule as AnonymousConsentsModule$1, ConfigInitializerModule, CmsModule, GlobalMessageModule, ProcessModule, CheckoutModule, UserModule, ProductModule, provideConfigFromMetaTags, SmartEditModule, PersonalizationModule, OccModule, ExternalRoutesModule } from '@spartacus/core';
import { Subscription, combineLatest, concat, of, isObservable, from, fromEvent, BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { take, distinctUntilChanged, tap, first, skipWhile, endWith, debounceTime, startWith, map, switchMap, filter, withLatestFrom, flatMap, observeOn, mergeMap, shareReplay, scan, distinctUntilKeyChanged, pluck } from 'rxjs/operators';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { NgbModalRef, NgbModal, NgbModule, NgbActiveModal, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
})(ICON_TYPE || (ICON_TYPE = {}));
class IconConfig {
}
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
            !!this.config.resources.find(res => res.types && res.type === resourceType && res.types.includes(iconType)));
    }
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config a[[s been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    getSvgPath(iconType) {
        const svgResource = this.config.resources.find(res => res.type === IconResourceType.SVG &&
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
        let resource = this.config.resources.find(res => res.type === resourceType && res.types && res.types.includes(iconType));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.resources.find(res => (res.type === resourceType && !res.types) || res.types === []);
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
            this.styleClasses.forEach(cls => this.renderer.removeClass(this.host, cls));
        }
        this.styleClasses = this.iconLoader.getStyleClasses(type).split(' ');
        this.styleClasses.forEach(cls => {
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
        imports: [CommonModule, ConfigModule.withConfig(fontawesomeIconConfig)],
        providers: [{ provide: IconConfig, useExisting: Config }],
        exports: [IconComponent],
    })
], IconModule);

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

let AnonymousConsentDialogComponent = class AnonymousConsentDialogComponent {
    constructor(config, modalService, anonymousConsentsService) {
        this.config = config;
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.showLegalDescription = true;
        this.iconTypes = ICON_TYPE;
        this.requiredConsents = [];
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = isFeatureLevel(this.config, '1.3');
        if (Boolean(this.config.anonymousConsents)) {
            this.showLegalDescription = this.config.anonymousConsents.showLegalDescriptionInDialog;
            if (Boolean(this.config.anonymousConsents.requiredConsents)) {
                this.requiredConsents = this.config.anonymousConsents.requiredConsents;
            }
        }
    }
    ngOnInit() {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
    }
    closeModal(reason) {
        this.modalService.closeActiveModal(reason);
    }
    rejectAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(([templates, consents]) => templates.forEach(template => {
            const consent = this.getCorrespondingConsent(template, consents);
            if (this.anonymousConsentsService.isConsentGiven(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.withdrawConsent(template.id);
            }
        })))
            .subscribe());
        this.closeModal('rejectAll');
    }
    allowAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(([templates, consents]) => templates.forEach(template => {
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
        this.closeModal('allowAll');
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
    { type: ModalService },
    { type: AnonymousConsentsService }
];
AnonymousConsentDialogComponent = __decorate([
    Component({
        selector: 'cx-anonymous-consent-dialog',
        template: "<div #dialog>\n  <div *ngIf=\"loading$ | async; else dialogBody\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <!-- Modal Header -->\n  <ng-template #dialogBody>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"closeModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Separator -->\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n    <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n      {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n      <div\n        class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n      ></div>\n    </div>\n    <!-- Actions -->\n    <div class=\"cx-dialog-buttons\">\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n        'anonymousConsents.dialog.clearAll' | cxTranslate\n      }}</a>\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n        'anonymousConsents.dialog.selectAll' | cxTranslate\n      }}</a>\n    </div>\n    <!-- Modal Body -->\n    <div\n      class=\"cx-dialog-body modal-body\"\n      *ngIf=\"templates$ | async as templates\"\n    >\n      <div *ngIf=\"consents$ | async as consents\">\n        <div\n          class=\"cx-dialog-row col-sm-12 col-md-6\"\n          *ngFor=\"let template of templates\"\n        >\n          <cx-consent-management-form\n            [consentTemplate]=\"template\"\n            [requiredConsents]=\"requiredConsents\"\n            [consent]=\"getCorrespondingConsent(template, consents)\"\n            [isAnonymousConsentsEnabled]=\"true\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
    })
], AnonymousConsentDialogComponent);

let AnonymousConsentManagementBannerComponent = class AnonymousConsentManagementBannerComponent {
    constructor(modalService, anonymousConsentsService) {
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    viewDetails() {
        this.hideBanner();
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    }
    allowAll() {
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap(_ => this.hideBanner()))
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
    { type: ModalService },
    { type: AnonymousConsentsService }
];
AnonymousConsentManagementBannerComponent = __decorate([
    Component({
        selector: 'cx-anonymous-consent-management-banner',
        template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
    })
], AnonymousConsentManagementBannerComponent);

let AnonymousConsentOpenDialogComponent = class AnonymousConsentOpenDialogComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openDialog() {
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    }
};
AnonymousConsentOpenDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
AnonymousConsentOpenDialogComponent = __decorate([
    Component({
        selector: 'cx-anonymous-consent-open-dialog',
        template: "<div class=\"anonymous-consents\">\n  <button class=\"btn btn-link\" (click)=\"openDialog()\">\n    {{ 'anonymousConsents.preferences' | cxTranslate }}\n  </button>\n</div>\n"
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
            ConfigModule.withConfig({
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

class CmsComponentData {
}

let ComponentMapperService = class ComponentMapperService {
    constructor(componentFactoryResolver, config, document, platform) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.config = config;
        this.document = document;
        this.platform = platform;
        this.missingComponents = [];
        this.loadedWebComponents = {};
    }
    /**
     * @desc
     * returns a web component for the CMS typecode.
     *
     * The mapping of CMS components to web componetns requires a mapping.
     * This is configurable when the module is loaded.
     *
     * For example:
     *
     *  {
     *      'CMSLinkComponent': 'LinkComponent',
     *      'SimpleResponsiveBannerComponent': 'SimpleResponsiveBannerComponent',
     *      [etc.]
     *  }
     *
     * The type codes are dynamic since they depend on the implementation.
     * Customer will add, extend or ingore standard components.
     *
     * @param typeCode the component type
     */
    getComponent(typeCode) {
        const componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn(`No component implementation found for the CMS component type '${typeCode}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig ? componentConfig.component : null;
    }
    getComponentFactoryByCode(typeCode) {
        const component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn(`No component factory found for the CMS component type '${typeCode}'.\n`, `Make sure you add a component to the 'entryComponents' array in the NgModule.`);
            return null;
        }
        return factory;
    }
    isWebComponent(typeCode) {
        const component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    }
    initWebComponent(componentType, renderer) {
        return new Promise(resolve => {
            const [path, selector] = this.getComponent(componentType).split('#');
            let script = this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(this.document.body, script);
                    if (isPlatformBrowser(this.platform)) {
                        script.onload = () => {
                            script.onload = null;
                        };
                    }
                }
                else {
                    script = {};
                }
            }
            if (script.onload) {
                // If script is still loading (has onload callback defined)
                // add new callback and chain it with the existing one.
                // Needed to support loading multiple components from one script
                const chainedOnload = script.onload;
                script.onload = () => {
                    chainedOnload();
                    resolve(selector);
                };
            }
            else {
                resolve(selector);
            }
        });
    }
};
ComponentMapperService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: CmsConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ComponentMapperService.ɵprov = ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(CmsConfig), ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
ComponentMapperService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(2, Inject(DOCUMENT)),
    __param(3, Inject(PLATFORM_ID))
], ComponentMapperService);

let CxApiService = class CxApiService {
    constructor(
    // auth
    auth, 
    // cart
    cart, cartData, 
    // checkout
    checkout, checkoutDelivery, checkoutPayment, 
    // cms
    cms, pageMeta, 
    // features config
    featureConfig, 
    // global message
    globalMessage, 
    // i18n
    translation, 
    // kyma
    kyma, 
    // occ
    occEndpoints, 
    // product
    product, productSearch, productReview, productReference, searchbox, 
    // routing
    routing, 
    // site context
    currency, language, baseSite, 
    // user
    user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, selectiveCartService, 
    // framework
    ngZone) {
        this.auth = auth;
        this.cart = cart;
        this.cartData = cartData;
        this.checkout = checkout;
        this.checkoutDelivery = checkoutDelivery;
        this.checkoutPayment = checkoutPayment;
        this.cms = cms;
        this.pageMeta = pageMeta;
        this.featureConfig = featureConfig;
        this.globalMessage = globalMessage;
        this.translation = translation;
        this.kyma = kyma;
        this.occEndpoints = occEndpoints;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.productReference = productReference;
        this.searchbox = searchbox;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.baseSite = baseSite;
        this.user = user;
        this.userAddress = userAddress;
        this.userConsent = userConsent;
        this.userOrder = userOrder;
        this.userPayment = userPayment;
        this.userNotificationPreferenceService = userNotificationPreferenceService;
        this.userInterestsService = userInterestsService;
        this.selectiveCartService = selectiveCartService;
        this.ngZone = ngZone;
    }
};
CxApiService.ctorParameters = () => [
    { type: AuthService, decorators: [{ type: Optional }] },
    { type: CartService, decorators: [{ type: Optional }] },
    { type: CartDataService, decorators: [{ type: Optional }] },
    { type: CheckoutService, decorators: [{ type: Optional }] },
    { type: CheckoutDeliveryService, decorators: [{ type: Optional }] },
    { type: CheckoutPaymentService, decorators: [{ type: Optional }] },
    { type: CmsService, decorators: [{ type: Optional }] },
    { type: PageMetaService, decorators: [{ type: Optional }] },
    { type: FeatureConfigService, decorators: [{ type: Optional }] },
    { type: GlobalMessageService, decorators: [{ type: Optional }] },
    { type: TranslationService, decorators: [{ type: Optional }] },
    { type: KymaService, decorators: [{ type: Optional }] },
    { type: OccEndpointsService, decorators: [{ type: Optional }] },
    { type: ProductService, decorators: [{ type: Optional }] },
    { type: ProductSearchService, decorators: [{ type: Optional }] },
    { type: ProductReviewService, decorators: [{ type: Optional }] },
    { type: ProductReferenceService, decorators: [{ type: Optional }] },
    { type: SearchboxService, decorators: [{ type: Optional }] },
    { type: RoutingService, decorators: [{ type: Optional }] },
    { type: CurrencyService, decorators: [{ type: Optional }] },
    { type: LanguageService, decorators: [{ type: Optional }] },
    { type: BaseSiteService, decorators: [{ type: Optional }] },
    { type: UserService, decorators: [{ type: Optional }] },
    { type: UserAddressService, decorators: [{ type: Optional }] },
    { type: UserConsentService, decorators: [{ type: Optional }] },
    { type: UserOrderService, decorators: [{ type: Optional }] },
    { type: UserPaymentService, decorators: [{ type: Optional }] },
    { type: UserNotificationPreferenceService, decorators: [{ type: Optional }] },
    { type: UserInterestsService, decorators: [{ type: Optional }] },
    { type: SelectiveCartService, decorators: [{ type: Optional }] },
    { type: NgZone }
];
CxApiService.ɵprov = ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(ɵɵinject(AuthService, 8), ɵɵinject(CartService, 8), ɵɵinject(CartDataService, 8), ɵɵinject(CheckoutService, 8), ɵɵinject(CheckoutDeliveryService, 8), ɵɵinject(CheckoutPaymentService, 8), ɵɵinject(CmsService, 8), ɵɵinject(PageMetaService, 8), ɵɵinject(FeatureConfigService, 8), ɵɵinject(GlobalMessageService, 8), ɵɵinject(TranslationService, 8), ɵɵinject(KymaService, 8), ɵɵinject(OccEndpointsService, 8), ɵɵinject(ProductService, 8), ɵɵinject(ProductSearchService, 8), ɵɵinject(ProductReviewService, 8), ɵɵinject(ProductReferenceService, 8), ɵɵinject(SearchboxService, 8), ɵɵinject(RoutingService, 8), ɵɵinject(CurrencyService, 8), ɵɵinject(LanguageService, 8), ɵɵinject(BaseSiteService, 8), ɵɵinject(UserService, 8), ɵɵinject(UserAddressService, 8), ɵɵinject(UserConsentService, 8), ɵɵinject(UserOrderService, 8), ɵɵinject(UserPaymentService, 8), ɵɵinject(UserNotificationPreferenceService, 8), ɵɵinject(UserInterestsService, 8), ɵɵinject(SelectiveCartService, 8), ɵɵinject(NgZone)); }, token: CxApiService, providedIn: "root" });
CxApiService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Optional()),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(3, Optional()),
    __param(4, Optional()),
    __param(5, Optional()),
    __param(6, Optional()),
    __param(7, Optional()),
    __param(8, Optional()),
    __param(9, Optional()),
    __param(10, Optional()),
    __param(11, Optional()),
    __param(12, Optional()),
    __param(13, Optional()),
    __param(14, Optional()),
    __param(15, Optional()),
    __param(16, Optional()),
    __param(17, Optional()),
    __param(18, Optional()),
    __param(19, Optional()),
    __param(20, Optional()),
    __param(21, Optional()),
    __param(22, Optional()),
    __param(23, Optional()),
    __param(24, Optional()),
    __param(25, Optional()),
    __param(26, Optional()),
    __param(27, Optional()),
    __param(28, Optional()),
    __param(29, Optional())
], CxApiService);

let ComponentWrapperDirective = class ComponentWrapperDirective {
    constructor(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, config, platformId) {
        this.vcr = vcr;
        this.componentMapper = componentMapper;
        this.injector = injector;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.config = config;
        this.platformId = platformId;
    }
    ngOnInit() {
        if (!this.shouldRenderComponent()) {
            return;
        }
        if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
            this.launchWebComponent();
        }
        else {
            this.launchComponent();
        }
    }
    shouldRenderComponent() {
        const isSSR = isPlatformServer(this.platformId);
        const isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    launchComponent() {
        const factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    }
    launchWebComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            const elementName = yield this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer);
            if (elementName) {
                this.webElement = this.renderer.createElement(elementName);
                const cmsComponentData = this.getCmsDataForComponent();
                this.webElement.cxApi = Object.assign(Object.assign({}, this.injector.get(CxApiService)), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                    cmsComponentData });
                this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                if (this.cmsService.isLaunchInSmartEdit()) {
                    this.addSmartEditContract(this.webElement);
                }
            }
        });
    }
    getCmsDataForComponent() {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    }
    getInjectorForComponent() {
        const configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: [
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                },
                ...configProviders,
            ],
            parent: this.injector,
        });
    }
    addSmartEditContract(element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    }
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    }
};
ComponentWrapperDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentMapperService },
    { type: Injector },
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input()
], ComponentWrapperDirective.prototype, "cxComponentWrapper", void 0);
ComponentWrapperDirective = __decorate([
    Directive({
        selector: '[cxComponentWrapper]',
    }),
    __param(7, Inject(PLATFORM_ID))
], ComponentWrapperDirective);

let PageComponentModule = class PageComponentModule {
};
PageComponentModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [],
        declarations: [ComponentWrapperDirective],
        exports: [ComponentWrapperDirective],
    })
], PageComponentModule);

/**
 * Please don't put that service in public API.
 * */
let CmsMappingService = class CmsMappingService {
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    isComponentEnabled(flexType) {
        const isSSR = isPlatformServer(this.platformId);
        const isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    getRoutesForComponents(componentTypes) {
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                routes.push(...this.getRoutesForComponent(componentType));
            }
        }
        return routes;
    }
    getGuardsForComponents(componentTypes) {
        const guards = new Set();
        for (const componentType of componentTypes) {
            this.getGuardsForComponent(componentType).forEach(guard => guards.add(guard));
        }
        return Array.from(guards);
    }
    getI18nKeysForComponents(componentTypes) {
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach(key => i18nKeys.add(key));
            }
        }
        return Array.from(i18nKeys);
    }
    getRoutesForComponent(componentType) {
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    }
    getGuardsForComponent(componentType) {
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    }
    getI18nKeysForComponent(componentType) {
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    }
};
CmsMappingService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
CmsMappingService.ɵprov = ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(ɵɵinject(CmsConfig), ɵɵinject(PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
CmsMappingService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Inject(PLATFORM_ID))
], CmsMappingService);

/**
 * Please don't put that service in public API.
 * */
let CmsGuardsService = class CmsGuardsService {
    constructor(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    cmsPageCanActivate(componentTypes, route, state) {
        const guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            const canActivateObservables = guards.map(guardClass => {
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
    { type: CmsMappingService },
    { type: Injector }
];
CmsGuardsService.ɵprov = ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(ɵɵinject(CmsMappingService), ɵɵinject(INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
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

/**
 * Please don't put that service in public API.
 * */
let CmsI18nService = class CmsI18nService {
    constructor(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    loadChunksForComponents(componentTypes) {
        const i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        const i18nChunks = new Set();
        for (const key of i18nKeys) {
            i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    }
};
CmsI18nService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: TranslationService },
    { type: TranslationChunkService }
];
CmsI18nService.ɵprov = ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(ɵɵinject(CmsMappingService), ɵɵinject(TranslationService), ɵɵinject(TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
CmsI18nService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsI18nService);

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
class LayoutConfig {
}

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
    getSize(breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    }
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map(event => this.getBreakpoint(event.target.innerWidth)), distinctUntilChanged());
    }
    get breakpoints() {
        return [
            BREAKPOINT.xs,
            BREAKPOINT.sm,
            BREAKPOINT.md,
            BREAKPOINT.lg,
            BREAKPOINT.xl,
        ];
    }
    getBreakpoint(windowWidth) {
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find(br => windowWidth >= this.getSize(br));
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

const PAGE_LAYOUT_HANDLER = new InjectionToken('PageLayoutHandler');

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
        return this.breakpointService.breakpoint$.pipe(map(breakpoint => {
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
            return config.slots.filter(slot => pageSlots.includes(slot));
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
        return this.cms.getCurrentPage().pipe(filter(page => !!page));
    }
    get templateName$() {
        return this.page$.pipe(filter(page => !!page.template), map((page) => page.template));
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
PageLayoutService = __decorate([
    Injectable(),
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
        this.layoutName$ = this.section$.pipe(switchMap(section => (section ? of(section) : this.templateName$)), tap(name => {
            this.styleClass = name;
        }));
        this.slots$ = this.section$.pipe(switchMap(section => this.pageLayoutService.getSlots(section)));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap(templateName => this.pageLayoutService.getPageFoldSlot(templateName)), distinctUntilChanged());
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

/**
 * Please don't put that service in public API.
 * */
let CmsRoutesService = class CmsRoutesService {
    constructor(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    cmsRouteExist(url) {
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
        const componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
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
CmsRoutesService.ctorParameters = () => [
    { type: Router },
    { type: CmsMappingService }
];
CmsRoutesService.ɵprov = ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(ɵɵinject(Router), ɵɵinject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
CmsRoutesService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsRoutesService);

let CmsPageGuard = class CmsPageGuard {
    constructor(
    // expose as `protected` only services from public API:
    routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
        this.protectedRoutesGuard = protectedRoutesGuard;
    }
    canActivate(route, state) {
        /**
         * TODO(issue:4646) Expect that `ProtectedRoutesGuard` dependency is required (remove `if` logic)
         */
        return this.protectedRoutesGuard
            ? this.protectedRoutesGuard
                .canActivate(route)
                .pipe(switchMap(result => result ? this.getCmsPage(route, state) : of(result)))
            : this.getCmsPage(route, state);
    }
    getCmsPage(route, state) {
        return this.routingService.getNextPageContext().pipe(switchMap(pageContext => this.cmsService
            .getPage(pageContext, true)
            .pipe(first(), withLatestFrom(of(pageContext)))), switchMap(([pageData, pageContext]) => pageData
            ? this.resolveCmsPageLogic(pageContext, pageData, route, state)
            : this.handleNotFoundPage(pageContext, route, state)));
    }
    resolveCmsPageLogic(pageContext, pageData, route, state) {
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap(componentTypes => this.cmsGuards
            .cmsPageCanActivate(componentTypes, route, state)
            .pipe(withLatestFrom(of(componentTypes)))), tap(([canActivate, componentTypes]) => {
            if (canActivate === true) {
                this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        }), map(([canActivate, componentTypes]) => {
            const pageLabel = pageData.label || pageContext.id; // for content pages the page label returned from backend can be different than ID initially assumed from route
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        }));
    }
    handleNotFoundPage(pageContext, route, state) {
        const notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap(notFoundPage => {
            if (notFoundPage) {
                return this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap(notFoundIndex => {
                    this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                }), switchMap(notFoundIndex => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter(index => index === notFoundIndex))), switchMap(() => this.resolveCmsPageLogic(pageContext, notFoundPage, route, state)));
            }
            return of(false);
        }));
    }
};
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService },
    { type: SemanticPathService },
    { type: ProtectedRoutesGuard }
];
CmsPageGuard.ɵprov = ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(ɵɵinject(RoutingService), ɵɵinject(CmsService), ɵɵinject(CmsRoutesService), ɵɵinject(CmsI18nService), ɵɵinject(CmsGuardsService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
CmsPageGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsPageGuard);

var OutletPosition;
(function (OutletPosition) {
    OutletPosition["REPLACE"] = "replace";
    OutletPosition["BEFORE"] = "before";
    OutletPosition["AFTER"] = "after";
})(OutletPosition || (OutletPosition = {}));
const AVOID_STACKED_OUTLETS = false;
const USE_STACKED_OUTLETS = true;

let OutletService = class OutletService {
    constructor() {
        this.templatesRefs = new Map();
        this.templatesRefsBefore = new Map();
        this.templatesRefsAfter = new Map();
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    add(outlet, templateOrFactory, position = OutletPosition.REPLACE) {
        if (position === OutletPosition.BEFORE) {
            this.store(this.templatesRefsBefore, outlet, templateOrFactory);
        }
        if (position === OutletPosition.REPLACE) {
            this.store(this.templatesRefs, outlet, templateOrFactory);
        }
        if (position === OutletPosition.AFTER) {
            this.store(this.templatesRefsAfter, outlet, templateOrFactory);
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
        let templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore.get(outlet);
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter.get(outlet);
                break;
            default:
                templateRef = this.templatesRefs.get(outlet);
        }
        if (templateRef && !stacked) {
            return templateRef[0];
        }
        return templateRef;
    }
    store(store, outlet, value) {
        const existing = store.get(outlet) || [];
        const newValue = existing.concat([value]);
        store.set(outlet, newValue);
    }
};
OutletService.ɵprov = ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
OutletService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OutletService);

let OutletRefDirective = class OutletRefDirective {
    constructor(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
};
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService }
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
     * The returned obervable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first(v => v === true));
    }
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    intersects(element, options) {
        const elementVisible$ = new Observable(observer => {
            const rootMargin = this.getRootMargin(options);
            const intersectOptions = { rootMargin };
            const intersectionObserver = new IntersectionObserver(entries => {
                observer.next(entries);
            }, intersectOptions);
            intersectionObserver.observe(element);
            return () => {
                intersectionObserver.disconnect();
            };
        }).pipe(flatMap((entries) => entries), map((entry) => entry.isIntersecting), distinctUntilChanged());
        return elementVisible$;
    }
    getRootMargin(options) {
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
     * We evalutes whether we instantly load the element for different reasons:
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
    constructor(vcr, templateRef, outletService, deferLoaderService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    initializeOutlet() {
        this.vcr.clear();
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    }
    ngOnChanges(changes) {
        if (changes.cxOutlet) {
            this.initializeOutlet();
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
            this.render();
            this.loaded.emit(true);
        }));
    }
    render() {
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    }
    renderOutlet(position) {
        let templates = (this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        templates.forEach(obj => {
            this.create(obj);
        });
    }
    create(tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            const view = this.vcr.createEmbeddedView(tmplOrFactory, {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
        }
    }
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @param element
     */
    getHostElement(element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService },
    { type: DeferLoaderService }
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

let PageSlotComponent = class PageSlotComponent {
    constructor(cmsService, dynamicAttributeService, renderer, hostElement, config) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.config = config;
        this.isPending = true;
        this.hasComponents = false;
        this.isPageFold = false;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         *
         * @deprecated we'll stop supporting this property in 2.0 as
         * it is not used separately.
         */
        this.slot$ = this.position$.pipe(switchMap(position => this.cmsService.getContentSlot(position)), tap(slot => this.addSmartEditSlotClass(slot)));
        this.components$ = this.slot$.pipe(map(slot => (slot && slot.components ? slot.components : [])), distinctUntilChanged((a, b) => a.length === b.length && !a.find((el, index) => el.uid !== b[index].uid)));
        this.subscription = new Subscription();
    }
    /**
     * The position is used to find the CMS page slot (and optional outlet)
     * that is rendered in the PageSlotComponent. Furthermore, the position
     * is added as a CSS class name to the host element.
     */
    set position(position) {
        this.position$.next(position);
        this.renderer.addClass(this.hostElement.nativeElement, position);
    }
    get position() {
        return this.position$.value;
    }
    ngOnInit() {
        this.subscription.add(this.components$.subscribe(components => {
            this.hasComponents = components && components.length > 0;
            this.pendingComponentCount = components ? components.length : 0;
            this.isPending = this.pendingComponentCount > 0;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    isLoaded(loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    }
    getComponentDeferOptions(componentType) {
        const deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    getDeferLoadingStrategy(componentType) {
        if (this.config) {
            return (this.config.cmsComponents[componentType] || {})
                .deferLoading;
        }
    }
    addSmartEditSlotClass(slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
};
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsConfig }
];
__decorate([
    Input()
], PageSlotComponent.prototype, "position", null);
__decorate([
    HostBinding('class.cx-pending')
], PageSlotComponent.prototype, "isPending", void 0);
__decorate([
    HostBinding('class.has-components')
], PageSlotComponent.prototype, "hasComponents", void 0);
__decorate([
    HostBinding('class.page-fold'), Input()
], PageSlotComponent.prototype, "isPageFold", void 0);
PageSlotComponent = __decorate([
    Component({
        selector: 'cx-page-slot,[cx-page-slot]',
        template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PageSlotComponent);

class SkipLinkConfig {
}
class SkipLink {
}
var SkipLinkScrollPosition;
(function (SkipLinkScrollPosition) {
    SkipLinkScrollPosition["BEFORE"] = "BEFORE";
    SkipLinkScrollPosition["AFTER"] = "AFTER";
})(SkipLinkScrollPosition || (SkipLinkScrollPosition = {}));

let SkipLinkService = class SkipLinkService {
    constructor(config) {
        this.config = config;
        this.skipLinks$ = new BehaviorSubject([]);
    }
    getSkipLinks() {
        return this.skipLinks$;
    }
    add(key, target) {
        const found = this.config.skipLinks.find(skipLink => skipLink.key === key);
        if (found) {
            const existing = this.skipLinks$.value;
            existing.splice(this.getSkipLinkIndexInArray(key), 0, {
                target: target,
                i18nKey: found.i18nKey,
                position: found.position,
                key: key,
            });
            this.skipLinks$.next(existing);
        }
    }
    remove(key) {
        const found = this.config.skipLinks.find(skipLink => skipLink.key === key);
        if (found) {
            let existing = this.skipLinks$.value;
            existing = existing.filter(skipLink => skipLink.key !== key);
            this.skipLinks$.next(existing);
        }
    }
    scrollToTarget(target, position, event) {
        target = target.parentNode;
        event.target.blur();
        const options = position === SkipLinkScrollPosition.AFTER ? { inline: 'end' } : {};
        target.scrollIntoView(options);
    }
    getSkipLinkIndexInArray(key) {
        let index = this.config.skipLinks.findIndex(skipLink => skipLink.key === key);
        while (index > 0) {
            index--;
            const previous = this.config.skipLinks[index];
            if (previous) {
                const existing = this.skipLinks$.value;
                const found = existing.findIndex(skipLink => skipLink.key === previous.key);
                if (found > -1) {
                    return found + 1;
                }
            }
        }
        return 0;
    }
};
SkipLinkService.ctorParameters = () => [
    { type: SkipLinkConfig }
];
SkipLinkService.ɵprov = ɵɵdefineInjectable({ factory: function SkipLinkService_Factory() { return new SkipLinkService(ɵɵinject(SkipLinkConfig)); }, token: SkipLinkService, providedIn: "root" });
SkipLinkService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SkipLinkService);

let SkipLinkComponent = class SkipLinkComponent {
    constructor(skipLinkService) {
        this.skipLinkService = skipLinkService;
        this.skipLinks$ = this.skipLinkService
            .getSkipLinks()
            .pipe(observeOn(asyncScheduler)); // delay view's update to avoid ExpressionChangedAfterItHasBeenCheckedError
    }
    scrollToTarget(skipLink, event) {
        this.skipLinkService.scrollToTarget(skipLink.target, skipLink.position, event);
    }
    /**
     * Hides the skip link by removing the focus.
     */
    blur(event) {
        event.target.blur();
    }
    tabNext(event) {
        if (this.isElement(event.target.nextSibling)) {
            event.target.nextSibling.focus();
        }
    }
    tabPrev(event) {
        if (this.isElement(event.target.previousSibling)) {
            event.target.previousSibling.focus();
        }
    }
    isElement(element) {
        return !!element && element instanceof HTMLElement;
    }
};
SkipLinkComponent.ctorParameters = () => [
    { type: SkipLinkService }
];
SkipLinkComponent = __decorate([
    Component({
        selector: 'cx-skip-link',
        template: "<button\n  *ngFor=\"let skipLink of skipLinks$ | async\"\n  (click)=\"scrollToTarget(skipLink, $event)\"\n  (keydown.esc)=\"blur($event)\"\n  (keydown.arrowright)=\"tabNext($event)\"\n  (keydown.arrowleft)=\"tabPrev($event)\"\n>\n  {{ 'skipLink.skipTo' | cxTranslate }}\n  {{ skipLink.i18nKey | cxTranslate }}\n</button>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SkipLinkComponent);

const defaultSkipLinkConfig = {
    skipLinks: [
        {
            key: 'SiteContext',
            i18nKey: 'skipLink.labels.header',
        },
        {
            key: 'BottomHeaderSlot',
            position: SkipLinkScrollPosition.AFTER,
            i18nKey: 'skipLink.labels.main',
        },
        {
            key: 'ProductLeftRefinements',
            i18nKey: 'skipLink.labels.productFacets',
        },
        { key: 'ProductListSlot', i18nKey: 'skipLink.labels.productList' },
        { key: 'Footer', i18nKey: 'skipLink.labels.footer' },
    ],
};

let SkipLinkDirective = class SkipLinkDirective {
    constructor(elRef, skipLinkService) {
        this.elRef = elRef;
        this.skipLinkService = skipLinkService;
    }
    ngOnInit() {
        this.skipLinkService.add(this.cxSkipLink, this.elRef.nativeElement);
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
        ],
        declarations: [SkipLinkComponent, SkipLinkDirective],
        exports: [SkipLinkDirective],
        entryComponents: [SkipLinkComponent],
        providers: [
            { provide: SkipLinkConfig, useExisting: Config },
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

let PageSlotModule = class PageSlotModule {
};
PageSlotModule = __decorate([
    NgModule({
        imports: [CommonModule, OutletModule, PageComponentModule, SkipLinkModule],
        providers: [],
        declarations: [PageSlotComponent],
        exports: [PageSlotComponent],
    })
], PageSlotModule);

let PageLayoutModule = class PageLayoutModule {
};
PageLayoutModule = __decorate([
    NgModule({
        imports: [CommonModule, OutletModule, PageSlotModule],
        declarations: [PageLayoutComponent],
        providers: [PageLayoutService],
        exports: [PageLayoutComponent],
    })
], PageLayoutModule);

class PWAModuleConfig {
}
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
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', event => {
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
AddToHomeScreenService = __decorate([
    Injectable()
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
            ConfigModule.withConfig(defaultPWAModuleConfig),
            ServiceWorkerModule.register('/ngsw-worker.js'),
            I18nModule,
        ],
        providers: [
            { provide: PWAModuleConfig, useExisting: Config },
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
            AddToHomeScreenService,
        ],
        declarations: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
        exports: [AddToHomeScreenBtnComponent, AddToHomeScreenBannerComponent],
    })
], PwaModule);

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
            providers: [provideConfig(defaultRoutingConfig)],
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

let SeoMetaService = class SeoMetaService {
    constructor(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    init() {
        this.pageMetaService
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
        languageService.getActive().subscribe(lang => {
            winRef.document.documentElement.lang = lang;
        });
    };
    return result;
}

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
        this.collectSchemas().subscribe((schema) => {
            this.scriptBuilder.build(schema);
        });
    }
    collectSchemas() {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map(builder => builder.build())).pipe();
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
        var _a;
        if (!((_a = pageMeta) === null || _a === void 0 ? void 0 : _a.breadcrumbs)) {
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
                review: reviews.map(review => this.buildReviews(review)),
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
            aggregated.ratingCount = reviews.filter(rev => !!rev.rating).length;
            aggregated.reviewCount = reviews.filter(rev => !!rev.comment).length;
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
            reviewSchema.datePublished = `${date.getFullYear()}-${date.getMonth() +
                1}-${date.getDate()}`;
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

let CurrentProductService = class CurrentProductService {
    constructor(routingService, productService, features) {
        this.routingService = routingService;
        this.productService = productService;
        this.features = features;
        this.DEFAULT_PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.DETAILS : '';
    }
    getProduct(scopes) {
        return this.routingService.getRouterState().pipe(map(state => state.state.params['productCode']), filter(Boolean), switchMap((productCode) => this.productService.get(productCode, 
        // TODO deprecated since 1.4 - should be replaced with 'scopes || this.DEFAULT_PRODUCT_SCOPE'
        this.features && this.features.isLevel('1.4')
            ? scopes || this.DEFAULT_PRODUCT_SCOPE
            : undefined
        // deprecated END
        )));
    }
};
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: FeatureConfigService }
];
CurrentProductService.ɵprov = ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(ɵɵinject(RoutingService), ɵɵinject(ProductService), ɵɵinject(FeatureConfigService)); }, token: CurrentProductService, providedIn: "root" });
CurrentProductService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CurrentProductService);

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
        return this.currentProduct.getProduct().pipe(startWith(null), switchMap((product) => {
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
            ? this.builders.map(builder => builder.build(product))
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

const ASM_ENABLED_LOCAL_STORAGE_KEY = 'asm_enabled';

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
            .subscribe(token => {
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
            .pipe(mergeMap(userToken => of(this.asmAuthService.isCustomerEmulationToken(userToken))));
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
    constructor(authService, asmAuthService, userService, asmComponentService, globalMessageService, routingService) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.userService = userService;
        this.asmComponentService = asmComponentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.disabled = false;
        this.startingCustomerSession = false;
    }
    ngOnInit() {
        this.csAgentToken$ = this.asmAuthService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.asmAuthService.getCustomerSupportAgentTokenLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap(token => {
            if (token && !!token.access_token) {
                this.handleCustomerSessionStartRedirection(token);
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        }));
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
            .subscribe(customerSupportAgentToken => this.asmAuthService.startCustomerEmulationSession(customerSupportAgentToken, customerId))
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
    { type: RoutingService }
];
__decorate([
    HostBinding('class.hidden')
], AsmMainUiComponent.prototype, "disabled", void 0);
AsmMainUiComponent = __decorate([
    Component({
        selector: 'cx-asm-main-ui',
        template: "<div class=\"asm-bar\">\n  <div class=\"asm-bar-branding\">\n    <img\n      class=\"logo\"\n      src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAAAXNSR0IArs4c6QAAD7RJREFUeAHtW3twVGcVP7t795V30rwJBBJeASq01NJgnZa2otTW2nHAqrRak+rUKfgYZ/xDW5lRR2e0/mGtAadqq6WjUAdNa4udqVZaEdtCKQ2FQEh5JSQh5Lnvp7/ft9lkd9l7swkhwMiZ3N27937fd8533ufcG9P1L/VE5SpMOwdMmk0iocDzWjAUnnbk/9cITSYx2xwS9Xs3Wzs7NmqhcOT/mh/Tunkw32SzScjr2Vy2v3XDa5tWhbRI5KoHmi4hmGx2ifi8mz8UmvHI9k2VyvVokasWMC38N8HtRHyezUejex5pXbdu1O9r5qsCuLgCUD4fmu/1bq5sbd9wdNMY84lYM10VwMUTAJlvtUnU491c0XZc+fxUZFo0Mn4QjiJMMFREcKJG4xxrC/7ETCQ854+JAtbBny5Mak3d1ab3BsKtCrhhuJ2K9lNpmU+KYAHpWRAFa4K4x7t5NouU5WhS4rRIvt0idotJ3MGIDPgj0usNSZ8vLMOBiIQhJQukoZkpHGOJcGXLiPD0WBNStOmvQ8ETAjp7iN0d++RelBLhBFsAnVQe/fXHZk7wDEuarXaJBrxNFe2nNzLb0VsBMWA0HoyO8WNDDnDxIzOy5ONzcuX6MqdU5VhxLZlYWoUvFJEud0iODQZkb5dXHa19PnEFw2LDBi0QRqqac14BBPnz2yul0GEZxZt68vzhQXm6pS+Gl9xLANL4uUWFsm5hPmiIjiPu2EQqSY8nJCeHAnK4zy+tOLrdQXXTClqVLFLwJKDM7BSLmMD8iN/btCRn3obtm+adz+CElTTlW0YuEDe1qR6M//oNJXJDRVbC0PNPqYFZVrPUFNjU8bHqHGUF3NxLx4ZkZ/uQdLnOF34Acad+To6srDRe/7ML8+T5Q/3KEpNFD5lijVKnWa4tdpxPWIZXeiGM/3S65Y/vD8hbnR6lLBdkEdR8DZrv9zUtyT+wYfu6+YbMJ5mjQZjMZ1H20HXF8s0VZWKjjU4C6IIWgyk8PlqVLY0vnhDGkMTVNJjA3bV5464+t9AhS4vtsqfDBWuiKY0Bk4dIhq5nbFbyWXGWJnfPzZc1NRT0gDy+p1uG/WHlmpJHZvALG6TmR/2epoOFBzccTEg1jWabTXBBpkhYgoGQNCy9Rr6zsnzSzE9ERKZvazknAX9IzFhf4QGuMFofNXmarKjMThye9pwWtqYmV6Jwc2R4fI3Rb/qyKQDGgvsWF8ovVlcJSEOPJsaTUTzkkdGBRMZstorA7SwqXLRBMmQ+STczC/IHwnA3TvlGfdkUbCe2xBsnhmVna79YTQi3YB7x8AhA0LfPzpNsW7JG6yG+BWOLHWYJgwHxNUa/KeUphPqZOfKt+nKlJIk0j+Ib2UPyb8QfMD/q8zYV9/Ru3L7ONK7bSSTZHIUZm6FJDdeXIrsZnynMdBh4jfbuR1B8YnenhBCIVZZFV4GDuLLh2j4xLz+RBsPzylyrspYAlIRrJB1TZAGJBHxmUZFcV5YFRUmDLxU/fpP5aC80Fff1GWY7iTgSzzWa26wCu6yA9I3g7VPDsu1Ar3zQ75MAGEwNLnBoUgtfv2JmriybkSM5SFcJO1p65Z3Tw2JnPgqtiUMIgluGsXUlzviljL7vnF8gLx86h7UShnNdIy3A0NeODcrrHwwqn56LrKv2GtA6K0+K4Pv1wAoF+STw7T05lBy4kibQ8lhkMdvxNZUMD06K+VxSC0NLawtto8xLwjPyYx+Y2bCtVVwjAYrpGvdOBXzlcFSeguVUF9rlzroiuXlOgfzmv2fEwgFwG4kQhitag80xUE8EbgLTZsISOgb9Y3MhzPEE8NapIdmyu0McyNRIDjOcmVC2x1ZXy621BbokLK/KEZQ8CPLJ9I9OwDpm9POR7fzqYPXyjTJBtzO6Dk4QH8MosPQ1goND4DSDNFCKDT4dHk99O8xRRSjKaTnR65Ff7jolX37ufTnT78UYBE1oafygT2Uhd9vcwkT8GZ3noVa4tSY/5tIS1jQBrxFYIWdkqurIAkMdoL2jzyvf/1u7dA8HdKdW5FmlCHEnFozH9qASAfDCYtLYz2+qe7P9gphPAhADEBipTQZwIzTwJ3fVSmm2VTy+kARgNeyiqkDFbzDFooQioh7w4PfovZFxDL7U5Mp8W1pMrLppYXqwBtbFuJ2MF2ptAFEwK4kO0MWkoGPAK/s7hnVnMhZmw30m4eI+aEZgPtzOr+pqTmzYvj25saa7oMENiDIq3UN+gyGxW5+6tkRurM6XHe/2yIstZ6XtrEcJTgOxTOPoluIVbypb+JvK+slF1+jiae/1yuvH+qVx5Yy0Y66tzJX5xVnScsYlrFpZA5AfRkCGcVwEljoKoDOMaz5UxXqgIQ7Aa6lxo1Mxj3l+OOD73eEFKze2rKvX1xa9hdNcx1aicqjLJb0ufZOMzyvPs8nDH62SPzculWceWAJmVUkNAlsAgdwFywhCS0LQstTDz0BfZJebEB/0YM8HA7Jjf7eqpNONYWF4x4JC8QVDav0g8LCvYwS8z3GJ9NDaEY9lfql+Fc4kg/sJJ8wNm20S9nu3+sKBr12Iz0+l10wtOQ2fTa3OFBjUbpqdL9/9xBz5y1eXyVNfWCy0EA0bc6Pw4oZJfPzwwWXdPr9IcrhzHdjV1icHod20LD1YXVes1qCgufZ4AmDKTOFTQUgDafPg+PwNFbIAqaYeuOEKe90B5XIUHgseIwa9W/3RYOPxTat8evMmc121o+m/m/51QlaBSdVFE0sRnVaLmse5LZ0ueeK14/IShKk6nbQvCDiLqd3iYl36uuAC950cFK8/KK9DEAvK0lfJc0uyZHlVrvzzyLmY+xnHAvIg8CpYrQM0ZiGAVF+TJXdDUe6+ttSwC9ra7ZJ+eASVraG3A5+/1VLqbmjfeOf4vlp3l+lvQAAoxHDvNLKDh7e+J1vWf0hmogczGVhSmSNbPr9EnvnPafnB344iINP8o3Lj7AJZDB+uB3va+6V70KcC+T9bz0nDyplpny8wzty1pFRePXQ2IwE8WD9DPgdtN2EiBWBFvMoEXnm/V/xwddnOLHY1n9OGfQ1tP5x65pMW1PgIRjiYYew/MSj3bdkrfz/YkwmdumO+WF8lP753IVLQqEod74LWscDRg1cP9ap+jxWMOgBL6BjQt/JVC4qkIgfv1JBurG8E1PyCLKvkI83OlPknoYgvvtslDjzDDQe8W8H8L7c9cXGYT9qRa2ETPJAZ2OEyTvS65StPvysP//6AvH18wGh/hvfWLq+QtcvLhW5g9aIS3bH96Mf/tw09IygAApL0DvlkdxuqXh0oy7PLzaglmNbGzEBn4CQuM2b86IUjctYFrxD0bTU5LI0Xk/kk0RxhMEs4GCbplnbs7ZC1T74lX9jytvzpzQ45Y6CVentdf1OVrIHLmGkQV/a098mpc24xgfmKDmj2Ky3GFnjX0jIIi3pjbAF6dKW7zjrksR2Hpfm9PtEi/q3RLG3KA246vBrdRCrQWTjgL1kJ/gPM4FGe75Dl8OV3LC6VW5CNVBSMHycWVuTKN1fXpi6f9Jsuh81Atq0JVIAPetwyhEedeToV+sraIvSgnOhank+7WmSCH0eRhv8Ymr8TzwSQ7zxr7rc9dPzxqc129Egy1Xz9paRd8Eeqt+Y1lVNjwzwvRz/l08tnyCNgbhH88YUAU8O2brd0IhX24zlzCVzMbGQ7FLDR06nvbTsodvitR++tmxT6QU9QDqEafuGdTmned0b6fSaxg/mRwa6Hjj/9oH4QmhQ2/UnnWQALFWYbDFpxQfCb+QMrRAqgH02xJ3celdOIF5sbl+NhRHykPiK9O9l2TZbOyleH3ph019fADe05qh8rOOeNw72y+0gv6I7thSnxOaSXp895YGUelfmxTnA4nGKPBrfCrTW2P/3glKea6eiPX9Ms8P9xYMq4/iOzlAvY09qrLttIfDr+QiLtnUMqflM40w3LqgtQNxh3A954v0cebz4szpE2OWnkXpiWMsdnC8XuQLaDgBs1WxoudsBNxyNYQEwAZP6c0hx5dO0SVUTthGlu//cJOXC8X4bx8JouSAkCJsAZOXgW8NAdtcoq0i18sa9lA//NC/WLO+Jnzygbb3Kkvs2haIMgzKhwI0g1oxbrJWE+6dAs9CmAIPzvA7fORsESaxfcc2OVfOrDVXKsa1gOnhyQDrSbB1Ce0y+XoVBbsaBEFs3M/MlWDMvUfjoSNDvdyrRM7i++x8QxJjI/6Hs2rFkveqqZiDf1XFkAU7B55Tny6fpZSfep8XORyfC4IoEtWFp4BBsZAb4wpv45Iuh/1uvvY8CdVp8fpyP+rbH4iSIQrV81B2kfnuxPA/AlgJ9tf0/KUR8sqi6U8kInyn6rCvpMAs6hGDuJVHQ/CrL7bquRuZXjv8KSjmy0/tWTOfV0bmSAcjsh/7OewMC0Zjvp6OM1ja+J1MGVrL1ljt6YKb/ehuD93KvHVJfSjnaB06aJNvLWHRXWj86lF+mpF4IqRTo6WQHwAQULPB4EExtrYL7X6Wg8/utLq/lxpppZUfrQ+37tnTNq4/Ebk/lmoH793TOKeUbzd2EM35jIBvMZcfxgthvxhYfXizYwqmEnnkjxIf+/W7rQqoox0GjNdPdoASw0eZjRzxf4fG+H45L6/FQ6zVS8M2dd8u0nd8v9P/yH/H7nETnd40odZ/ib7NmHfPurP90lbx7uESdyeyPYtb8TjwbBHAiMLpDtcAoifvAa7/Hd0kNoVUyUnjhu9b4n10fANQX8f3BndTa2vXzxGmtxvBP5Nl33pW1KvUCnejWR2laEarQOvnnZvGKpm10olXgUWJhrFxs0lsCxLk9AulG9toBBb0Cj6a/d3qCsva1W5lTQZ6tl1fjEj0Fo+XOvHAUuMHksNiYOSTpnS/tOJAcLZvFhfvo1kyYk/Njd0i1vHxlAbAltc3VlP3C5MZ+kmq574E/n7YquhO+JsuPLgsWJjiaDZLylywk+uI1hMJzpKythK1wGGcrfRi6DYyjIDHgfYyUGBrDmZP6XzWZHO0NCzR6LfX3rb+/Rfwofw3RJPrV4gErErlwBKmDlE3AjDAYMBn1J3V8ykk+9NPaRCTQL/KmXeg16/6Nj1UkGH1iT/48AZBkMHhvCt5Qj4UCzW3NctswntRr5lgmo/DmVBzGeZzJ9WseQ+eFgoNkz5Frf2vzZy1Lz4wxBDM5QAvEZl/m32cJUE8y3kfkNlzXzyUr1XtBlztOMyVNuJ+Rvdg571u+7Apg/IoCM93dZD+S7mnA7f/W4PPdfKcwfEcCV74KU26HPd3vvvxLcTqImX4pWfiL+Cz7nf6ZEI8G/ut3eK8Lnp254pAOTevnK+G0yI4RFQvtzQ9r6vc0NEyvfL5Mt/g8XIbTVhsig+gAAAABJRU5ErkJggg==\"\n      width=\"48\"\n      height=\"24\"\n      alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    />\n\n    <div class=\"asm-title\">\n      {{ 'asm.mainTitle' | cxTranslate }}\n    </div>\n  </div>\n  <div class=\"asm-bar-actions\">\n    <cx-asm-session-timer\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n    ></cx-asm-session-timer>\n\n    <a\n      class=\"close\"\n      title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n      *ngIf=\"\n        !(csAgentToken$ | async)?.access_token &&\n        !(csAgentTokenLoading$ | async)\n      \"\n      (click)=\"hideUi()\"\n    ></a>\n\n    <a\n      class=\"logout\"\n      title=\"{{ 'asm.logout' | cxTranslate }}\"\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n      (click)=\"logout()\"\n    >\n    </a>\n  </div>\n</div>\n\n<ng-container *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\">\n  <cx-customer-emulation\n    *ngIf=\"customer$ | async as customer; else showCustomerSelection\"\n  ></cx-customer-emulation>\n  <ng-template #showCustomerSelection>\n    <cx-customer-selection\n      (submitEvent)=\"startCustomerEmulationSession($event)\"\n    ></cx-customer-selection>\n  </ng-template>\n</ng-container>\n\n<ng-template #showLoginForm>\n  <cx-csagent-login-form\n    (submitEvent)=\"loginCustomerSupportAgent($event)\"\n    [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n  ></cx-csagent-login-form>\n</ng-template>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-asm-main-ui{font-family:Arial,sans-serif;font-size:14px;width:100%;display:flex;flex-direction:column}cx-asm-main-ui .close,cx-asm-main-ui .logout{cursor:pointer;width:16px;height:16px}cx-asm-main-ui .close{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'/%3E%3C/svg%3E\")}cx-asm-main-ui .logout{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M11,2.7c1.2,0.6,2.2,1.5,2.9,2.6c1.3,1.9,1.5,4.4,0.6,6.5c-0.3,0.8-0.8,1.6-1.5,2.2c-0.6,0.6-1.4,1.1-2.2,1.5 C9.9,15.8,9,16,8,16c-0.9,0-1.9-0.2-2.7-0.5c-0.8-0.4-1.6-0.9-2.2-1.5c-0.6-0.6-1.1-1.4-1.5-2.2C0.7,9.6,0.9,7.2,2.1,5.3 c0.7-1.1,1.7-2,2.9-2.6v1.1C4.1,4.3,3.3,5.1,2.8,6C2.3,6.9,2,7.9,2,9c0,1.6,0.6,3.2,1.8,4.3c0.5,0.5,1.2,1,1.9,1.3 c1.5,0.6,3.2,0.6,4.7,0c0.7-0.3,1.4-0.7,1.9-1.3C13.4,12.1,14,10.6,14,9c0-1.1-0.3-2.1-0.8-3c-0.5-0.9-1.3-1.7-2.2-2.2 C11,3.8,11,2.7,11,2.7z M8,9C7.7,9,7.5,8.9,7.3,8.7C7.1,8.5,7,8.3,7,8V1c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0 C8.9,0.5,9,0.7,9,1v7c0,0.3-0.1,0.5-0.3,0.7C8.5,8.9,8.2,9,8,9z'/%3E%3C/svg%3E%0A\")}cx-asm-main-ui button{padding:0 12px;white-space:nowrap;border-radius:4px;height:36px;font-weight:400;border-style:solid;border-width:1px}cx-asm-main-ui button:disabled{opacity:.4;cursor:not-allowed}cx-asm-main-ui .spinner{display:flex;justify-content:center;width:100%;color:#0a6ed1}cx-asm-main-ui .spinner>div{width:8px;height:8px;margin:6px;border-radius:100%;background-color:currentColor;-webkit-animation:1s infinite spinner-dots-pulse;animation:1s infinite spinner-dots-pulse}cx-asm-main-ui .spinner>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}@keyframes spinner-dots-pulse{0%,100%,60%{transform:scale(1)}30%{transform:scale(2)}}cx-asm-main-ui.hidden{display:none}cx-asm-main-ui .asm-bar{color:#fff;background-color:#354a5f;height:48px;display:flex;padding:0 32px;justify-content:space-between;z-index:1}cx-asm-main-ui .asm-bar-branding{display:flex;align-items:center}cx-asm-main-ui .asm-bar-branding .logo{-webkit-margin-end:8px;margin-inline-end:8px}cx-asm-main-ui .asm-bar-branding .asm-title{font-size:16px;font-weight:700}cx-asm-main-ui .asm-bar-actions{display:flex;justify-content:flex-end;align-items:center}cx-asm-main-ui>:nth-child(2){margin:32px;display:flex;width:calc(100vw - 4rem)}@media (min-width:767px){cx-asm-main-ui>:nth-child(2){width:50vw}}cx-asm-main-ui input{outline:0;border:1px solid #89919a;color:#32363a;background-color:#fff;border-radius:4px;padding:0 12px;height:36px}cx-asm-main-ui input:focus{box-shadow:0 0 0 1px #fafafa}cx-asm-main-ui input:hover{border-color:#085caf}cx-asm-main-ui input::-webkit-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-moz-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input:-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::placeholder{color:#74777a;font-style:italic}@media (max-width:575px){cx-asm-main-ui .asm-bar-branding .asm-title{display:none}cx-asm-main-ui .asm-alert{margin-top:30px}}"]
    })
], AsmMainUiComponent);

/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
let AsmEnablerService = class AsmEnablerService {
    constructor(location, winRef, componentFactoryResolver, outletService) {
        this.location = location;
        this.winRef = winRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletService = outletService;
        /** indicates whether the ASM UI has been added already */
        this.isUiAdded = false;
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
        if (this.isUiAdded) {
            return;
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    }
};
AsmEnablerService.ctorParameters = () => [
    { type: Location },
    { type: WindowRef },
    { type: ComponentFactoryResolver },
    { type: OutletService }
];
AsmEnablerService.ɵprov = ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(ɵɵinject(Location), ɵɵinject(WindowRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(OutletService)); }, token: AsmEnablerService, providedIn: "root" });
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
        this.subscriptions.add(this.routingService.isNavigating().subscribe(isNavigating => {
            if (isNavigating) {
                this.resetTimer();
            }
        }));
    }
    resetOnCustomerSessionChange() {
        this.subscriptions.add(this.authService
            .getOccUserId()
            .pipe(distinctUntilChanged())
            .subscribe(_ => this.resetTimer()));
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
        template: "<span class=\"label\">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>\n<span class=\"time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"reset\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n</a>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-asm-session-timer{display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-session-timer .label{margin:0 6px}@media (max-width:575px){cx-asm-session-timer .label{display:none}}cx-asm-session-timer .time{font-weight:600}cx-asm-session-timer .reset{margin:0 15px;cursor:pointer;width:16px;height:16px;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M14.9,7.5l-1,0.2c0.2,0.9,0.1,1.7-0.1,2.5c-0.3,1-0.8,2-1.5,2.7c-1.1,1.1-2.7,1.8-4.2,1.8 c-0.8,0-1.5-0.1-2.3-0.4c-1.5-0.6-2.7-1.8-3.3-3.3C2.1,10.2,2,9.5,2,8.7c0-1.6,0.7-3.1,1.8-4.3c0.7-0.8,1.7-1.3,2.7-1.5 c1-0.3,2-0.2,3,0l0,0v-1c-1-0.2-2.1-0.2-3.1,0C4.2,2.4,2.4,4,1.5,6.1C1.2,6.9,1,7.8,1,8.7c0,0.9,0.2,1.8,0.5,2.6 c0.4,0.9,0.9,1.7,1.5,2.3c0.7,0.7,1.4,1.2,2.3,1.5c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c2.1-0.9,3.7-2.7,4.2-5 C15,9.3,15,8.4,14.9,7.5z'/%3E%3Cpolygon fill='%23d1e3ff' points='11.5,2.8 9.2,4.5 9.7,0.5 '/%3E%3C/svg%3E%0A\") center center no-repeat}"]
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

/**
 * Utility class when working with forms.
 */
class FormUtils {
    /**
     *
     * Validates a field of the given form group
     *
     * If the field is NOT valid (or invalid), the method returns `true`.
     *
     * @param form Form with fields to check
     * @param formControlName Name of the form field to check
     * @param submitted Has the form been submitted
     */
    static isNotValidField(form, formControlName, submitted) {
        const control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    }
}

let CSAgentLoginFormComponent = class CSAgentLoginFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    ngOnInit() {
        this.form = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submitEvent.emit({
            userId: this.form.controls.userId.value,
            password: this.form.controls.password.value,
        });
    }
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
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
        template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <label>\n    <input\n      type=\"text\"\n      [class.is-invalid]=\"isNotValid('userId')\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n      <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n    </div>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      [class.is-invalid]=\"isNotValid('password')\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n      <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n    </div>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        styles: ["cx-csagent-login-form .invalid-feedback{display:block}cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}cx-csagent-login-form form>*{margin-bottom:12px}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}@media (min-width:575px){cx-csagent-login-form label:nth-child(2){margin:0 8px}}"]
    })
], CSAgentLoginFormComponent);

let CustomerEmulationComponent = class CustomerEmulationComponent {
    constructor(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.userService.get().subscribe(user => (this.customer = user)));
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
        this.form = this.fb.group({
            searchTerm: [''],
        });
        this.asmService.customerSearchReset();
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.searchResults = this.asmService.getCustomerSearchResults();
        this.subscription.add(this.form.controls.searchTerm.valueChanges
            .pipe(debounceTime(300))
            .subscribe(searchTermValue => {
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
        this.form.controls.searchTerm.setValue(this.selectedCustomer.name);
        this.asmService.customerSearchReset();
    }
    onSubmit() {
        if (Boolean(this.selectedCustomer)) {
            this.submitEvent.emit({ customerId: this.selectedCustomer.customerId });
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
        template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <input\n    #searchTerm\n    type=\"text\"\n    formControlName=\"searchTerm\"\n    placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n  />\n  <button type=\"submit\" [disabled]=\"!selectedCustomer\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <a\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n    ><span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span></a\n  >\n  <a\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      !!results.entries &&\n      results.entries.length <= 0\n    \"\n    >{{ 'asm.customerSearch.noMatch' | cxTranslate }}</a\n  >\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        host: {
            '(document:click)': 'onDocumentClick($event)',
        },
        styles: ["cx-customer-selection button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAKtmlDQ1BEaXNwbGF5AABIx62Wd1BT+RbHf/fe9EILICAl9N6lSwk9dOkgKiEJJJQYEoKIDZHFFVwLKiKgrugiRcFGkbUgFiwsgg2sC7IoqOtiwYbKu8Aj7L6Z98ebeWfm3N9nzpzf+Z1z7/3NfAGgApZQmA7LAZAhyBKF+3nSY+Pi6fghAAEYEIE+cGaxxUJGWFgQQG12/ad9uIdmo3bbfKoW+N9MnsMVswGAwlBO4ojZGSifQv0ZWyjKAgCpROO6K7KEU9yOsqIIbRDlO1OcMsMjU5w0w1+ncyLDvQDAoFMRKCyWKAUAijoap2ezU9A6lIUoWwk4fAHKU/26sXksDspHUDbLyFg+xf0oGyX9rU7KP2omSWuyWClSnpll2gjefLEwnbUS/L8tI10ye4YB6hSeyD8cXWXQd9aftjxQyoKkkNBZ5nOm86eZJ/GPmmW22Ct+ljks70Dp3vSQoFlO5vsypXWymJGzzBX7RMyyaHm49KxkkRdjllmiuXMlaVHSOI/LlNbP5UXGzHI2PzpklsVpEYFzOV7SuEgSLu2fK/DznDvXVzp7hvhv8/KZ0r1ZvEh/6eysuf65AsZcTXGstDcO19tnLidKmi/M8pSeJUwPk+Zz0/2kcXF2hHRvFvpDzu0Nk77DVFZA2CwDfxAG6MAGWIEcwAcgi5uTNTWE13LhShE/hZdFZ6C3i0tnCtgWZnQbK2snAKbu6syv8K5/+g5CyoS5WGY+AE7ofUCC52JLFwNwvAEAhdC5mMFn9Mqg3+DsdrZElD0Tw0w9sIAEZIEiUAWaQBcYAXO0O3vgAjyADwgAoSASxIGlgA14IAOIwAqwGqwHhaAYbAO7QDnYDw6CGnAUnAAt4Ay4AK6AG6AH3AUPwQAYBi/BGPgAJiAIwkNUiAapQlqQPmQK2UCOkBvkAwVB4VAclAilQAJIAq2GNkDFUAlUDh2AaqHj0GnoAnQN6oXuQ4PQKPQW+gIjMAVWhDVgA9gSdoQZcCAcCS+BU+BMOBcugLfAZXAVfARuhi/AN+C78AD8Eh5HAEJGlBFtxBxxRLyQUCQeSUZEyFqkCClFqpAGpA3pRG4jA8gr5DMGh6Fh6BhzjAvGHxOFYWMyMWsxmzHlmBpMM+YS5jZmEDOG+Y6lYtWxplhnLBMbi03BrsAWYkux1dgm7GXsXeww9gMOh1PGGeIccP64OFwqbhVuM24vrhHXjuvFDeHG8Xi8Kt4U74oPxbPwWfhC/B78Efx5/C38MP4TgUzQItgQfAnxBAEhn1BKqCOcI9wiPCdMEOWI+kRnYiiRQ1xJ3Eo8RGwj3iQOEydI8iRDkispkpRKWk8qIzWQLpMekd6RyWQdshN5EZlPziOXkY+Rr5IHyZ8pChQTihclgSKhbKEcprRT7lPeUalUA6oHNZ6aRd1CraVepD6hfpKhyVjIMGU4MutkKmSaZW7JvJYlyurLMmSXyubKlsqelL0p+0qOKGcg5yXHklsrVyF3Wq5PblyeJm8tHyqfIb9Zvk7+mvyIAl7BQMFHgaNQoHBQ4aLCEA2h6dK8aGzaBtoh2mXasCJO0VCRqZiqWKx4VLFbcUxJQWmBUrRSjlKF0lmlAWVE2UCZqZyuvFX5hPI95S/zNOYx5nHnbZrXMO/WvI8q81U8VLgqRSqNKndVvqjSVX1U01S3q7aoPlbDqJmoLVJbobZP7bLaq/mK813ms+cXzT8x/4E6rG6iHq6+Sv2gepf6uIamhp+GUGOPxkWNV5rKmh6aqZo7Nc9pjmrRtNy0+Fo7tc5rvaAr0Rn0dHoZ/RJ9TFtd219bon1Au1t7QsdQJ0onX6dR57EuSddRN1l3p26H7piell6w3mq9er0H+kR9R32e/m79Tv2PBoYGMQYbDVoMRgxVDJmGuYb1ho+MqEbuRplGVUZ3jHHGjsZpxnuNe0xgEzsTnkmFyU1T2NTelG+617TXDGvmZCYwqzLrM6eYM8yzzevNBy2ULYIs8i1aLF5b6lnGW2637LT8bmVnlW51yOqhtYJ1gHW+dZv1WxsTG7ZNhc0dW6qtr+0621bbNwtMF3AX7FvQb0ezC7bbaNdh983ewV5k32A/6qDnkOhQ6dDnqOgY5rjZ8aoT1snTaZ3TGafPzvbOWc4nnP9yMXdJc6lzGVlouJC78NDCIVcdV5brAdcBN7pbotvPbgPu2u4s9yr3px66HhyPao/nDGNGKuMI47WnlafIs8nzo5ez1xqvdm/E28+7yLvbR8Enyqfc54mvjm+Kb73vmJ+d3yq/dn+sf6D/dv8+pgaTzaxljgU4BKwJuBRICYwILA98GmQSJApqC4aDA4J3BD8K0Q8RhLSEglBm6I7Qx2GGYZlhvy7CLQpbVLHoWbh1+OrwzghaxLKIuogPkZ6RWyMfRhlFSaI6omWjE6Jroz/GeMeUxAzEWsauib0RpxbHj2uNx8dHx1fHjy/2Wbxr8XCCXUJhwr0lhktyllxbqrY0fenZZbLLWMtOJmITYxLrEr+yQllVrPEkZlJl0hjbi72b/ZLjwdnJGeW6cku4z5Ndk0uSR1JcU3akjPLceaW8V3wvfjn/Tap/6v7Uj2mhaYfTJtNj0hszCBmJGacFCoI0waXlmstzlvcKTYWFwoFM58xdmWOiQFG1GBIvEbdmKaKiqEtiJPlBMpjtll2R/WlF9IqTOfI5gpyulSYrN618nuub+8sqzCr2qo7V2qvXrx5cw1hzYC20NmltxzrddQXrhvP88mrWk9anrf8t3yq/JP/9hpgNbQUaBXkFQz/4/VBfKFMoKuzb6LJx/4+YH/k/dm+y3bRn0/ciTtH1Yqvi0uKvm9mbr/9k/VPZT5Nbkrd0b7Xfum8bbptg273t7ttrSuRLckuGdgTvaN5J31m08/2uZbuulS4o3b+btFuye6AsqKx1j96ebXu+lvPK71Z4VjRWqlduqvy4l7P31j6PfQ37NfYX7//yM//n/gN+B5qrDKpKD+IOZh98dij6UOcvjr/UVqtVF1d/Oyw4PFATXnOp1qG2tk69bms9XC+pHz2ScKTnqPfR1gbzhgONyo3Fx8AxybEXxxOP3zsReKLjpOPJhlP6pyqbaE1FzVDzyuaxFl7LQGtca+/pgNMdbS5tTb9a/Hr4jPaZirNKZ7eeI50rODd5Pvf8eLuw/dWFlAtDHcs6Hl6MvXjn0qJL3ZcDL1+94nvlYiej8/xV16tnrjlfO33d8XrLDfsbzV12XU2/2f3W1G3f3XzT4WZrj1NPW+/C3nO33G9duO19+8od5p0bd0Pu9t6Lutffl9A30M/pH7mffv/Ng+wHEw/zHmEfFT2We1z6RP1J1e/GvzcO2A+cHfQe7Hoa8fThEHvo5R/iP74OFzyjPit9rvW8dsRm5Myo72jPi8Uvhl8KX068KvxT/s/K10avT/3l8VfXWOzY8BvRm8m3m9+pvjv8fsH7jvGw8ScfMj5MfCz6pPqp5rPj584vMV+eT6z4iv9a9s34W9v3wO+PJjMmJ4UsEWtaCiCow8nJALw9DAA1DgBaDwCkxTNaetqgGf0/TeC/8YzenjZ7AA55ABCJ6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection form{display:flex;width:100%}@media (min-width:575px){cx-customer-selection button[type=submit]{-webkit-margin-start:8px;margin-inline-start:8px}cx-customer-selection form input{flex:1}}@media (max-width:575px){cx-customer-selection form{flex-direction:column}cx-customer-selection form>*{margin-bottom:12px}}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{width:calc(100vw - 4rem);border:1px solid #89919a;position:absolute;z-index:11;margin-top:40px;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;min-height:50px}cx-customer-selection .asm-results a{color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px}@media (min-width:767px){cx-customer-selection .asm-results,cx-customer-selection form{width:50vw}cx-customer-selection .asm-results a{flex-direction:row}}cx-customer-selection .asm-results a *{flex:1}cx-customer-selection .asm-results a:hover{color:#32363a;background-color:#fafafa}"]
    })
], CustomerSelectionComponent);

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
        ],
        declarations: [
            AsmMainUiComponent,
            CSAgentLoginFormComponent,
            CustomerSelectionComponent,
            AsmSessionTimerComponent,
            FormatTimerPipe,
            CustomerEmulationComponent,
        ],
        entryComponents: [AsmMainUiComponent],
    })
], AsmModule);

let OrderDetailsService = class OrderDetailsService {
    constructor(userOrderService, routingService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(routingData => routingData.state.params.orderCode));
        this.orderLoad$ = this.orderCode$.pipe(tap(orderCode => {
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
    constructor(cartService, orderDetailsService, checkoutService) {
        this.cartService = cartService;
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
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
        return this.cartService
            .getActive()
            .pipe(map(cart => this.getOrderPromotionsFromCartHelper(cart)));
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
            .pipe(map(order => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrder() {
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map(order => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrderHelper(order) {
        const appliedOrderPromotions = [];
        appliedOrderPromotions.push(...(order.appliedOrderPromotions || []));
        return appliedOrderPromotions;
    }
    getProductPromotionForEntry(item, promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.cartService
                    .getActive()
                    .pipe(map(cart => this.getProductPromotion(item, cart.appliedProductPromotions || [])));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map(order => this.getProductPromotion(item, order.appliedProductPromotions || [])));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map(order => this.getProductPromotion(item, order.appliedProductPromotions || [])));
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
    { type: CartService },
    { type: OrderDetailsService },
    { type: CheckoutService }
];
PromotionService.ɵprov = ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(ɵɵinject(CartService), ɵɵinject(OrderDetailsService), ɵɵinject(CheckoutService)); }, token: PromotionService, providedIn: "root" });
PromotionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PromotionService);

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
            this.quantityControl$ = this.entry$.pipe(filter(e => !!e), map(entry => this.getFormControl(entry)), switchMap(() => this.form.valueChanges.pipe(
            // tslint:disable-next-line:deprecation
            startWith(null), tap(valueChange => {
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
    { type: CartService },
    { type: PromotionService }
];
__decorate([
    ViewChild('dialog', { read: ElementRef })
], AddedToCartDialogComponent.prototype, "dialog", void 0);
AddedToCartDialogComponent = __decorate([
    Component({
        selector: 'cx-added-to-cart-dialog',
        template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart'\n          ) | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [quantityControl]=\"getQuantityControl() | async\"\n            [promotionLocation]=\"promotionLocation\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n\n            <div>{{ cart.subTotal?.formattedValue }}</div>\n          </div>\n\n          <!-- Promotions -->\n          <ng-container *cxFeatureLevel=\"'1.5'\">\n            <div\n              class=\"cx-dialog-promotions\"\n              *ngIf=\"orderPromotions$ | async as orderPromotions\"\n            >\n              <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n            </div>\n          </ng-container>\n\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
    })
], AddedToCartDialogComponent);

let AddToCartComponent = class AddToCartComponent {
    constructor(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
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
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.setStockInfo(this.product);
            this.cd.markForCheck();
        }
        else if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
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
                this.cartEntry$ = this.cartService.getEntry(this.productCode);
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
        this.cartService
            .getEntry(this.productCode)
            .subscribe(entry => {
            if (entry) {
                this.increment = true;
            }
            this.openModal();
            this.cartService.addEntry(this.productCode, quantity);
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
        modalInstance.cart$ = this.cartService.getActive();
        modalInstance.loaded$ = this.cartService.getLoaded();
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
    { type: CartService },
    { type: ModalService },
    { type: CurrentProductService },
    { type: ChangeDetectorRef }
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

let AutoFocusDirective = class AutoFocusDirective {
    constructor(hostElement) {
        this.hostElement = hostElement;
    }
    ngAfterViewInit() {
        this.hostElement.nativeElement.focus();
    }
};
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
AutoFocusDirective = __decorate([
    Directive({
        selector: '[cxAutoFocus]',
    })
], AutoFocusDirective);

let AutoFocusDirectiveModule = class AutoFocusDirectiveModule {
};
AutoFocusDirectiveModule = __decorate([
    NgModule({
        declarations: [AutoFocusDirective],
        exports: [AutoFocusDirective],
    })
], AutoFocusDirectiveModule);

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
        template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-primary\"\n          (click)=\"delete()\"\n          cxAutoFocus\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            (keydown.enter)=\"delete()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            (keydown.enter)=\"setDefault()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            (keydown.enter)=\"send()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            (keydown.enter)=\"edit()\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            tabindex=\"0\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], CardComponent);

let CardModule = class CardModule {
};
CardModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule, IconModule, AutoFocusDirectiveModule],
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
        return this.winRef.resize$.pipe(map(() => nativeElement.clientWidth), map(totalWidth => this.calculateItems(totalWidth, itemWidth)));
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
        template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"-1\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"-1\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CarouselComponent);

/** the default format is used for browsers that do not support   */
const DEFAULT_MEDIA_FORMAT = 'tablet';
let MediaService = class MediaService {
    constructor(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    get mediaFormats() {
        return [
            {
                code: 'mobile',
                threshold: this.breakpointService.getSize(BREAKPOINT.xs),
            },
            {
                code: 'tablet',
                threshold: this.breakpointService.getSize(BREAKPOINT.sm),
            },
            {
                code: 'desktop',
                threshold: this.breakpointService.getSize(BREAKPOINT.md),
            },
            {
                code: 'widescreen',
                threshold: this.breakpointService.getSize(BREAKPOINT.lg),
            },
        ];
    }
    getMedia(container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    }
    getMainImage(media, format) {
        if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media && media.url) {
            return this.getImageUrl(media.url);
        }
        else if (media && media[this.getHighestAvailableFormat(media)]) {
            return this.getImageUrl(media[this.getHighestAvailableFormat(media)].url);
        }
        else {
            return null;
        }
    }
    /**
     * returns highest resolution format name from media formats
     */
    getHighestAvailableFormat(media) {
        if (media) {
            let mediaFormat;
            this.mediaFormats.forEach(format => {
                if (!mediaFormat ||
                    (mediaFormat.threshold < format.threshold && media[format.code])) {
                    mediaFormat = format;
                }
            });
            return mediaFormat.code;
        }
        return null;
    }
    getAlt(media, format) {
        if (!media) {
            return undefined;
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return media[format || DEFAULT_MEDIA_FORMAT].altText;
        }
        else if (media.altText) {
            return media.altText;
        }
    }
    /**
     * builds a set of images aligned with the breakpoints
     */
    getSrcSet(media) {
        if (!media) {
            return undefined;
        }
        const srcset = this.mediaFormats.reduce((set, format) => {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += `${this.getImageUrl(media[format.code].url)} ${format.threshold}w`;
            }
            return set;
        }, '');
        return srcset === '' ? undefined : srcset;
    }
    getImageUrl(url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    }
    getBaseUrl() {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    }
};
MediaService.ctorParameters = () => [
    { type: OccConfig },
    { type: BreakpointService }
];
MediaService.ɵprov = ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(ɵɵinject(OccConfig), ɵɵinject(BreakpointService)); }, token: MediaService, providedIn: "root" });
MediaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
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
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
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

let MediaModule = class MediaModule {
};
MediaModule = __decorate([
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
 * Provides a UI to manage the count of the quantity, typically by using
 * increase and decrease functinality. The item counter expects an input `FormControl`
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
         * positive inteteger or float.
         * @default 1
         */
        this.step = 1;
        /**
         * Inidicates that the input can be manually set to zero,
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
     * Returns an observable with the control. The value changes of the
     * control are intercepted in order to suppress invalid values.
     */
    getControl() {
        if (!this._control$) {
            this._control$ = this.control.valueChanges.pipe(startWith(this.control.value), tap(value => this.control.setValue(this.getValidCount(value), { emitEvent: false })), map(() => this.control));
        }
        return this._control$;
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
        template: "<button\n  type=\"button\"\n  (click)=\"decrement()\"\n  [disabled]=\"qty.disabled || qty?.value <= min\"\n  tabindex=\"-1\"\n>\n  -\n</button>\n\n<input\n  #qty\n  type=\"number\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [step]=\"step\"\n  [formControl]=\"getControl() | async\"\n/>\n\n<button\n  type=\"button\"\n  (click)=\"increment()\"\n  [disabled]=\"qty.disabled || qty?.value >= max\"\n  tabindex=\"-1\"\n>\n  +\n</button>\n"
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

/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
let GenericLinkComponent = class GenericLinkComponent {
    constructor() {
        this.protocolRegex = /^https?:\/\//i;
    }
    get rel() {
        return this.target === '_blank' ? 'noopener' : null;
    }
    get routerUrl() {
        if (typeof this.url === 'string') {
            return [this.getAbsoluteUrl(this.url)];
        }
        return this.url;
    }
    isExternalUrl() {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    }
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    }
};
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
        template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
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

const defaultPaginationConfig = {
    pagination: {
        addStart: true,
        addEnd: true,
    },
};

class PaginationConfig {
}

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
        providers: [
            provideConfig(defaultPaginationConfig),
            { provide: PaginationConfig, useExisting: Config },
        ],
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

class QualtricsConfig {
}

let QualtricsLoaderService = class QualtricsLoaderService {
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.qualtricsLoaded$ = new BehaviorSubject(false);
        if (Boolean(this.winRef.nativeWindow) &&
            Boolean(this.winRef.document) &&
            this.isQualtricsConfigured()) {
            this.initialize();
            this.setup();
        }
    }
    initialize() {
        fromEvent(this.winRef.nativeWindow, 'qsi_js_loaded').subscribe(_ => this.qualtricsLoaded$.next(true));
    }
    setup() {
        const qualtricsScript = this.winRef.document.createElement('script');
        qualtricsScript.type = 'text/javascript';
        qualtricsScript.defer = true;
        qualtricsScript.src = 'assets/qualtricsIntegration.js';
        const idScript = this.winRef.document.createElement('div');
        idScript.id = this.config.qualtrics.projectId;
        this.winRef.document
            .getElementsByTagName('head')[0]
            .appendChild(qualtricsScript);
        this.winRef.document.getElementsByTagName('head')[0].appendChild(idScript);
    }
    isQualtricsConfigured() {
        return (Boolean(this.config.qualtrics) && Boolean(this.config.qualtrics.projectId));
    }
    load() {
        return this.qualtricsLoaded$.pipe(filter(loaded => loaded), switchMap(_ => {
            const qsi = this.winRef.nativeWindow['QSI'];
            return this.isDataLoaded().pipe(distinctUntilChanged(), tap(dataLoaded => {
                if (dataLoaded) {
                    qsi.API.unload();
                    qsi.API.load().done(qsi.API.run());
                }
            }));
        }));
    }
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     */
    isDataLoaded() {
        return of(true);
    }
};
QualtricsLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: QualtricsConfig }
];
QualtricsLoaderService.ɵprov = ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(ɵɵinject(WindowRef), ɵɵinject(QualtricsConfig)); }, token: QualtricsLoaderService, providedIn: "root" });
QualtricsLoaderService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], QualtricsLoaderService);

let QualtricsComponent = class QualtricsComponent {
    constructor(qualtricsLoader) {
        this.qualtricsLoader = qualtricsLoader;
        this.qualtricsEnabled$ = this.qualtricsLoader.load();
    }
};
QualtricsComponent.ctorParameters = () => [
    { type: QualtricsLoaderService }
];
QualtricsComponent = __decorate([
    Component({
        selector: 'cx-qualtrics',
        template: `
    <ng-container *ngIf="qualtricsEnabled$ | async"></ng-container>
  `
    })
], QualtricsComponent);

const defaultQualtricsConfig = {
    qualtrics: {},
};

let QualtricsModule = class QualtricsModule {
};
QualtricsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    QualtricsComponent: {
                        component: QualtricsComponent,
                    },
                },
            }),
            ConfigModule.withConfig(defaultQualtricsConfig),
        ],
        declarations: [QualtricsComponent],
        entryComponents: [QualtricsComponent],
        providers: [
            {
                provide: QualtricsConfig,
                useExisting: Config,
            },
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
        return this.getService(context).pipe(switchMap((service) => service.getAll()), switchMap(items => this.getContext(context).pipe(switchMap(ctx => {
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
        return this.getContext(context).pipe(map(ctx => {
            return LABELS[ctx];
        }));
    }
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe(service => {
            service.setActive(value);
        });
    }
    getService(context) {
        return this.getContext(context).pipe(map((ctx) => this.getInjectedService(ctx)), filter(s => !!s));
    }
    getContext(context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(data => data.context), map(ctx => {
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
        imports: [
            CommonModule,
            RouterModule,
            ConfigModule.withConfig({
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
            SiteContextModule,
            IconModule,
        ],
        providers: [SiteContextComponentService],
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
        this.change = new EventEmitter();
        this.initialRate = 0;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.setRate(this.rating, true);
    }
    setRate(value, force) {
        if (!this.disabled || force) {
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', `--star-fill:${value || this.initialRate};`);
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
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
        template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n  [attr.tabindex]=\"disabled ? null : 0\"\n></cx-icon>\n",
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

class ViewConfig {
}

var ViewConfigModule_1;
let ViewConfigModule = ViewConfigModule_1 = class ViewConfigModule {
    static forRoot() {
        return {
            ngModule: ViewConfigModule_1,
            providers: [
                provideConfig({
                    view: {},
                }),
                {
                    provide: ViewConfig,
                    useExisting: Config,
                },
            ],
        };
    }
};
ViewConfigModule = ViewConfigModule_1 = __decorate([
    NgModule({})
], ViewConfigModule);

class CustomFormValidators {
    static emailDomainValidator(control) {
        const email = control.value;
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    }
    static emailValidator(control) {
        const email = control.value;
        return email.match(EMAIL_PATTERN) ? null : { InvalidEmail: true };
    }
    static passwordValidator(control) {
        const password = control.value;
        return password.match(PASSWORD_PATTERN) ? null : { InvalidPassword: true };
    }
    static matchPassword(control) {
        if (control.get('password').value !== control.get('passwordconf').value) {
            return { NotEqual: true };
        }
        return null;
    }
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

let PromotionsComponent = class PromotionsComponent {
    constructor() { }
};
__decorate([
    Input()
], PromotionsComponent.prototype, "promotions", void 0);
PromotionsComponent = __decorate([
    Component({
        selector: 'cx-promotions',
        template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <ng-container *cxFeatureLevel=\"'!1.4'\">\n    <strong *ngFor=\"let promotion of promotions\">\n      <li>{{ promotion.description }}</li>\n    </strong>\n  </ng-container>\n\n  <ng-container *cxFeatureLevel=\"'1.4'\">\n    <ul *ngFor=\"let promotion of promotions\">\n      <li>{{ promotion.description }}</li>\n    </ul>\n  </ng-container>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PromotionsComponent);

let PromotionsModule = class PromotionsModule {
};
PromotionsModule = __decorate([
    NgModule({
        imports: [CommonModule, FeaturesConfigModule],
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
        template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\r\n  <div *ngIf=\"sortedVouchers.length > 0\">\r\n    <div class=\"cx-applied-coupon-title\">\r\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let voucher of sortedVouchers\"\r\n    class=\"coupon-summary cx-coupon-card textonly\"\r\n    role=\"filter\"\r\n  >\r\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #editableCoupons>\r\n  <div class=\"row\">\r\n    <div\r\n      *ngFor=\"let voucher of sortedVouchers\"\r\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\r\n      role=\"filter\"\r\n    >\r\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\r\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"removeVoucher(voucher.voucherCode)\"\r\n          [disabled]=\"cartIsLoading\"\r\n          [class.disabled]=\"cartIsLoading\"\r\n        >\r\n          <span aria-hidden=\"true\">\r\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AppliedCouponsComponent);

let CartCouponComponent = class CartCouponComponent {
    constructor(cartService, authService, cartVoucherService, formBuilder, customerCouponService, featureConfig) {
        this.cartService = cartService;
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.customerCouponService = customerCouponService;
        this.featureConfig = featureConfig;
        this.MAX_CUSTOMER_COUPON_PAGE = 100;
        this.ignoreCloseEvent = false;
        this.subscription = new Subscription();
        this.couponBoxIsActive = false;
    }
    ngOnInit() {
        if (this.customerCouponService) {
            this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
        }
        if (this.featureConfig && this.featureConfig.isLevel('1.5')) {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
                this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE),
            ]).pipe(tap(([cart, userId, customerCoupons]) => {
                this.cartId =
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code;
                this.getApplicableCustomerCoupons(cart, customerCoupons.coupons);
            }), map(([cart]) => cart));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        else {
            this.cart$ = combineLatest([
                this.cartService.getActive(),
                this.authService.getOccUserId(),
            ]).pipe(tap(([cart, userId]) => (this.cartId =
                userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code)), map(([cart]) => cart));
        }
        //TODO(issue:#5971) Deprecated since 1.5
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map(loaded => !loaded));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map(() => this.form.valid)),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map(([cartIsLoading, btnEnabled, addVoucherIsLoading]) => cartIsLoading || !btnEnabled || addVoucherIsLoading));
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe(success => {
            this.onSuccess(success);
        }));
        this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe(error => {
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
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    getApplicableCustomerCoupons(cart, coupons) {
        this.applicableCoupons = coupons || [];
        if (cart.appliedVouchers) {
            cart.appliedVouchers.forEach(appliedVoucher => {
                this.applicableCoupons = this.applicableCoupons.filter(coupon => coupon.couponId !== appliedVoucher.code);
            });
        }
        this.filteredCoupons = this.applicableCoupons;
    }
    applyVoucher() {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    }
    applyCustomerCoupon(couponId) {
        this.cartVoucherService.addVoucher(couponId, this.cartId);
        this.couponBoxIsActive = false;
    }
    filter(query) {
        const filterValue = query.toLowerCase();
        this.filteredCoupons = this.applicableCoupons.filter(coupon => coupon.couponId.toLowerCase().indexOf(filterValue) > -1);
    }
    open() {
        this.filteredCoupons = this.applicableCoupons;
        if (this.applicableCoupons.length > 0) {
            this.couponBoxIsActive = true;
        }
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
    { type: CartService },
    { type: AuthService },
    { type: CartVoucherService },
    { type: FormBuilder },
    { type: CustomerCouponService },
    { type: FeatureConfigService }
];
CartCouponComponent = __decorate([
    Component({
        selector: 'cx-cart-coupon',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"cx-apply-voucher\">\n              <input\n                #couponInput\n                class=\"form-control input-coupon-code\"\n                id=\"applyVoucher\"\n                formControlName=\"couponCode\"\n                [placeholder]=\"'voucher.placeholder' | cxTranslate\"\n                aria-label=\"applyVoucher\"\n                (focus)=\"open()\"\n                (input)=\"filter(couponInput.value)\"\n                (blur)=\"close($event)\"\n                (keydown.escape)=\"close($event)\"\n                autocomplete=\"off\"\n              />\n\n              <div [class.couponbox-is-active]=\"couponBoxIsActive\">\n                <div\n                  *ngIf=\"filteredCoupons && filteredCoupons.length > 0\"\n                  class=\"cx-customer-coupons\"\n                  (click)=\"close($event)\"\n                >\n                  <div class=\"coupons\" (mousedown)=\"disableClose()\">\n                    <a\n                      *ngFor=\"let coupon of filteredCoupons\"\n                      (click)=\"applyCustomerCoupon(coupon.couponId)\"\n                    >\n                      <div class=\"coupon-id\">{{ coupon.couponId }}</div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <input\n              type=\"text\"\n              class=\"form-control input-coupon-code\"\n              id=\"applyVoucher\"\n              formControlName=\"couponCode\"\n              placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n            />\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-block btn-action apply-coupon-button\"\n              type=\"submit\"\n              [disabled]=\"submitDisabled$ | async\"\n              [class.disabled]=\"submitDisabled$ | async\"\n            >\n              {{ 'voucher.apply' | cxTranslate }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
    })
], CartCouponComponent);

let CartCouponModule = class CartCouponModule {
};
CartCouponModule = __decorate([
    NgModule({
        declarations: [CartCouponComponent, AppliedCouponsComponent],
        exports: [CartCouponComponent, AppliedCouponsComponent],
        imports: [
            FeaturesConfigModule,
            CommonModule,
            NgSelectModule,
            FormsModule,
            ReactiveFormsModule,
            I18nModule,
            IconModule,
            ConfigModule.withConfig({
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
    constructor(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
        this.potentialProductPromotions = [];
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
    //TODO remove feature flag for #5958
    isSaveForLaterEnabled() {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    }
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    resolveItems(items) {
        if (items.every(item => item.hasOwnProperty('orderEntry'))) {
            this._items = items.map(consignmentEntry => {
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
        this._items.forEach(item => {
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
            this.cartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    }
    getControl(item) {
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map(value => {
            if (value && this.selectiveCartService && this.options.isSaveForLater) {
                this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                this.cartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(() => this.form.get(item.product.code)));
    }
    getPotentialProductPromotionsForItem(item) {
        const entryPromotions = [];
        //don't show promotions in saveforlater
        if (this.options.isSaveForLater) {
            return entryPromotions;
        }
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            for (const promotion of this.potentialProductPromotions) {
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
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
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
], CartItemListComponent.prototype, "potentialProductPromotions", void 0);
__decorate([
    Input()
], CartItemListComponent.prototype, "promotionLocation", void 0);
__decorate([
    Input('cartIsLoading')
], CartItemListComponent.prototype, "setLoading", null);
CartItemListComponent = __decorate([
    Component({
        selector: 'cx-cart-item-list',
        template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [potentialProductPromotions]=\"getPotentialProductPromotionsForItem(item)\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CartItemListComponent);

let CartItemComponent = class CartItemComponent {
    constructor(promotionService, featureConfig) {
        this.promotionService = promotionService;
        this.featureConfig = featureConfig;
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
    //TODO remove feature flag for #5958
    isSaveForLaterEnabled() {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    }
    //TODO remove feature flag for #5958
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
    { type: PromotionService },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], CartItemComponent.prototype, "compact", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "item", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "potentialProductPromotions", void 0);
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
        template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *cxFeatureLevel=\"'!1.5'\">\n          <div\n            *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\">{{ variant.name }}</div>\n            <div class=\"cx-value\">{{ variant.value }}</div>\n          </div>\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"item.product.baseOptions?.length\">\n            <div\n              *ngFor=\"\n                let variant of item.product.baseOptions[0]?.selected\n                  ?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n                {{ variant.name }}: {{ variant.value }}\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"\n              !item.updateable ||\n              readonly ||\n              (isSaveForLaterEnabled() && options.isSaveForLater)\n            \"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container\n        *ngIf=\"isSaveForLaterEnabled() && options.isSaveForLater; else total\"\n      >\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <ng-container\n        *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n      >\n        <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n      </ng-container>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
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
        template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.subTotal?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.net\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.totalDiscounts?.value > 0\">\n    {{ 'orderCost.discount' | cxTranslate }}\n    {{ cart.totalDiscounts?.formattedValue }}\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"!cart.net\">\n    {{ 'orderCost.grossTax' | cxTranslate }}\n    {{ cart.totalTax?.formattedValue }}.\n  </div>\n</div>\n\n<!--\n<cx-promotions\n  *ngIf=\"cart\"\n  [promotions]=\"cart.appliedOrderPromotions\"\n></cx-promotions>\n-->\n\n<ng-container *cxFeatureLevel=\"'1.3'\">\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [isReadOnly]=\"true\"\n  ></cx-applied-coupons>\n</ng-container>\n"
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
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductAddToCartComponent: {
                        component: AddToCartComponent,
                    },
                },
            }),
            UrlModule,
            IconModule,
            I18nModule,
            ItemCounterModule,
            AutoFocusDirectiveModule,
        ],
        declarations: [AddToCartComponent, AddedToCartDialogComponent],
        entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
        exports: [AddToCartComponent, AddedToCartDialogComponent],
    })
], AddToCartModule);

let CartDetailsComponent = class CartDetailsComponent {
    constructor(cartService, promotionService, selectiveCartService, authService, routingService, featureConfig) {
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.selectiveCartService = selectiveCartService;
        this.authService = authService;
        this.routingService = routingService;
        this.featureConfig = featureConfig;
        this.loggedIn = false;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        /**
         * TODO Remove the check for promotion service
         * Issue: GH-5670
         */
        if (this.promotionService) {
            this.promotions$ = this.promotionService.getOrderPromotionsFromCart();
        }
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
        if (this.isSaveForLaterEnabled()) {
            this.cartLoaded$ = combineLatest([
                this.cartService.getLoaded(),
                this.selectiveCartService.getLoaded(),
                this.authService.isUserLoggedIn(),
            ]).pipe(tap(([, , loggedIn]) => (this.loggedIn = loggedIn)), map(([cartLoaded, sflLoaded, loggedIn]) => loggedIn ? cartLoaded && sflLoaded : cartLoaded));
        }
        //TODO remove for #5958
        else {
            this.cartLoaded$ = this.cartService.getLoaded();
        }
        //TODO  remove for #5958 end
        if (this.promotionService) {
            this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        }
    }
    //TODO remove feature flag for #5958
    isSaveForLaterEnabled() {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    }
    //TODO remove feature flag for #5958 end
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    getAllPromotionsForCart(cart) {
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        potentialPromotions.push(...(cart.potentialProductPromotions || []));
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        appliedPromotions.push(...(cart.appliedProductPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
    saveForLater(item) {
        if (this.loggedIn) {
            this.cartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    }
};
CartDetailsComponent.ctorParameters = () => [
    { type: CartService },
    { type: PromotionService },
    { type: SelectiveCartService },
    { type: AuthService },
    { type: RoutingService },
    { type: FeatureConfigService }
];
CartDetailsComponent = __decorate([
    Component({
        selector: 'cx-cart-details',
        template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-promotions [promotions]=\"promotions$ | async\"></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n          [options]=\"{\n            isSaveForLater: false,\n            optionalBtn: isSaveForLaterEnabled() ? saveForLaterBtn : null\n          }\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
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
            ConfigModule.withConfig({
                cmsComponents: {
                    CartComponent: {
                        component: CartDetailsComponent,
                    },
                },
            }),
            I18nModule,
        ],
        declarations: [CartDetailsComponent],
        exports: [CartDetailsComponent],
        entryComponents: [CartDetailsComponent],
    })
], CartDetailsModule);

let CartNotEmptyGuard = class CartNotEmptyGuard {
    constructor(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    canActivate() {
        return combineLatest([
            this.cartService.getActive(),
            this.cartService.getLoaded(),
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
    { type: CartService },
    { type: RoutingService }
];
CartNotEmptyGuard.ɵprov = ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(ɵɵinject(CartService), ɵɵinject(RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
CartNotEmptyGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartNotEmptyGuard);

let CartPageLayoutHandler = class CartPageLayoutHandler {
    constructor(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
    }
    handle(slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            if (this.featureConfig && this.featureConfig.isEnabled('saveForLater')) {
                return combineLatest([
                    slots$,
                    this.cartService.getActive(),
                    this.selectiveCartService.getCart(),
                ]).pipe(map(([slots, cart, selectiveCart]) => {
                    if (cart.totalItems) {
                        return slots.filter(slot => slot !== 'EmptyCartMiddleContent');
                    }
                    else if (selectiveCart.totalItems) {
                        return slots.filter(slot => slot !== 'EmptyCartMiddleContent' &&
                            slot !== 'CenterRightContentSlot');
                    }
                    else {
                        return slots.filter(slot => slot !== 'TopContent' && slot !== 'CenterRightContentSlot');
                    }
                }));
            }
            //TODO remove old code for #5958
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map(([slots, cart]) => {
                if (cart.totalItems) {
                    return slots.filter(slot => slot !== 'EmptyCartMiddleContent');
                }
                else {
                    return slots.filter(slot => slot !== 'TopContent' && slot !== 'CenterRightContentSlot');
                }
            }));
            ////TODO remove old code for #5958
        }
        return slots$;
    }
};
CartPageLayoutHandler.ctorParameters = () => [
    { type: CartService },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
];
CartPageLayoutHandler.ɵprov = ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(ɵɵinject(CartService), ɵɵinject(SelectiveCartService), ɵɵinject(FeatureConfigService)); }, token: CartPageLayoutHandler, providedIn: "root" });
CartPageLayoutHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartPageLayoutHandler);

let CartTotalsComponent = class CartTotalsComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
    }
};
CartTotalsComponent.ctorParameters = () => [
    { type: CartService }
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
            ConfigModule.withConfig({
                cmsComponents: {
                    CartTotalsComponent: {
                        component: CartTotalsComponent,
                    },
                },
            }),
            CartSharedModule,
            I18nModule,
            CartCouponModule,
        ],
        declarations: [CartTotalsComponent],
        exports: [CartTotalsComponent],
        entryComponents: [CartTotalsComponent],
    })
], CartTotalsModule);

let MiniCartComponent = class MiniCartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map(cart => cart.deliveryItemsQuantity || 0));
        this.total$ = this.cartService.getActive().pipe(filter(cart => !!cart.totalPrice), map(cart => cart.totalPrice.formattedValue));
    }
};
MiniCartComponent.ctorParameters = () => [
    { type: CartService }
];
MiniCartComponent = __decorate([
    Component({
        selector: 'cx-mini-cart',
        template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], MiniCartComponent);

let MiniCartModule = class MiniCartModule {
};
MiniCartModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    MiniCartComponent: {
                        component: MiniCartComponent,
                    },
                },
            }),
            UrlModule,
            IconModule,
            I18nModule,
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
        this.product$ = this.currentProductService.getProduct().pipe(filter(product => Boolean(product)), tap(product => this.setStockInfo(product)));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter(wishlist => Boolean(wishlist)), map(wishList => wishList.entries));
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
        const item = entries.find(entry => entry.product.code === product.code);
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
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], AddToWishListComponent);

let AddToWishListModule = class AddToWishListModule {
};
AddToWishListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    AddToWishListComponent: {
                        component: AddToWishListComponent,
                    },
                },
            }),
            I18nModule,
            IconModule,
            RouterModule,
            UrlModule,
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
            .pipe(map(cart => !(cart && cart.totalItems && cart.totalItems > 0)));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter(entries => entries.length > 0));
        this.cartLoaded$ = combineLatest([
            this.cartService.getLoaded(),
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
        template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"moveToCart(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n"
    })
], SaveForLaterComponent);

let SaveForLaterModule = class SaveForLaterModule {
};
SaveForLaterModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    SaveForLaterComponent: {
                        component: SaveForLaterComponent,
                    },
                },
                features: {
                    saveForLater: '1.5',
                },
            }),
            I18nModule,
            CartSharedModule,
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

var DeliveryModePreferences;
(function (DeliveryModePreferences) {
    DeliveryModePreferences["FREE"] = "FREE";
    DeliveryModePreferences["LEAST_EXPENSIVE"] = "LEAST_EXPENSIVE";
    DeliveryModePreferences["MOST_EXPENSIVE"] = "MOST_EXPENSIVE";
})(DeliveryModePreferences || (DeliveryModePreferences = {}));
class CheckoutConfig {
}

var CheckoutStepType;
(function (CheckoutStepType) {
    CheckoutStepType["SHIPPING_ADDRESS"] = "shippingAddress";
    CheckoutStepType["DELIVERY_MODE"] = "deliveryMode";
    CheckoutStepType["PAYMENT_DETAILS"] = "paymentDetails";
    CheckoutStepType["REVIEW_ORDER"] = "reviewOrder";
})(CheckoutStepType || (CheckoutStepType = {}));

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
                const leastExpensiveFound = deliveryModes.find(deliveryMode => deliveryMode.deliveryCost.value !== 0);
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                const codeFound = deliveryModes.find(deliveryMode => deliveryMode.code === this.defaultDeliveryMode[index]);
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
    constructor(routingService, authService, authRedirectService, cartService, checkoutConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.checkoutConfigService = checkoutConfigService;
    }
    canActivate() {
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map(([token, user]) => {
            if (!token.access_token) {
                if (this.cartService.isGuestCart()) {
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
    { type: CartService },
    { type: CheckoutConfigService }
];
CheckoutAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CartService), ɵɵinject(CheckoutConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
CheckoutAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutAuthGuard);

let CheckoutDetailsService = class CheckoutDetailsService {
    constructor(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map(cartData => {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                this.cartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        }), filter(cartId => !!cartId));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap(cartId => this.checkoutService.loadCheckoutDetails(cartId)), shareReplay(1), switchMap(() => this.checkoutService.getCheckoutDetailsLoaded()), skipWhile(loaded => !loaded));
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
    { type: CartService }
];
CheckoutDetailsService.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(ɵɵinject(CheckoutService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
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
            const defaultAddress = addresses.find(address => address.defaultAddress) || addresses[0];
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
                }), map(data => Boolean(data && Object.keys(data).length)));
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
            const defaultPayment = payments.find(address => address.defaultPayment) || payments[0];
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
                }), map(data => Boolean(data && Object.keys(data).length)));
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
                        }), map(data => Boolean(data)));
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
    constructor(router, config, routingConfigService, checkoutConfigService, expressCheckoutService, cartService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.cartService = cartService;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService) {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
        }
        else {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
        }
    }
    canActivate() {
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService &&
            this.expressCheckoutService &&
            this.cartService) {
            if (this.checkoutConfigService.isExpressCheckout() &&
                !this.cartService.isGuestCart()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((expressCheckoutPossible) => {
                    return expressCheckoutPossible
                        ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : this.firstStep$;
                }));
            }
        }
        return this.firstStep$;
    }
};
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: CheckoutConfig },
    { type: RoutingConfigService },
    { type: CheckoutConfigService },
    { type: ExpressCheckoutService },
    { type: CartService }
];
CheckoutGuard.ɵprov = ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(ɵɵinject(Router), ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutConfigService), ɵɵinject(ExpressCheckoutService), ɵɵinject(CartService)); }, token: CheckoutGuard, providedIn: "root" });
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
        imports: [
            CommonModule,
            ConfigModule.withConfig(defaultCheckoutConfig),
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutOrchestrator: {
                        component: CheckoutOrchestratorComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
                    },
                },
            }),
        ],
        providers: [{ provide: CheckoutConfig, useExisting: Config }],
        declarations: [CheckoutOrchestratorComponent],
        entryComponents: [CheckoutOrchestratorComponent],
        exports: [CheckoutOrchestratorComponent],
    })
], CheckoutOrchestratorModule);

let CheckoutOrderSummaryComponent = class CheckoutOrderSummaryComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
};
CheckoutOrderSummaryComponent.ctorParameters = () => [
    { type: CartService }
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
        imports: [
            CommonModule,
            CartSharedModule,
            ConfigModule.withConfig({
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
        this.routerState$ = this.routingService.getRouterState().pipe(tap(router => {
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
        imports: [
            CommonModule,
            UrlModule,
            I18nModule,
            RouterModule,
            ConfigModule.withConfig(defaultCheckoutConfig),
            ConfigModule.withConfig({
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
    constructor(config, routingService, cartService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.cartService = cartService;
        this.routingConfigService = routingConfigService;
    }
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.cart$ = this.cartService.getActive();
        this.routerState$ = this.routingService.getRouterState().pipe(tap(router => {
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
    { type: CartService },
    { type: RoutingConfigService }
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
        imports: [
            CommonModule,
            UrlModule,
            I18nModule,
            RouterModule,
            ConfigModule.withConfig(defaultCheckoutConfig),
            ConfigModule.withConfig({
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
        this.routerState$ = this.routingService.getRouterState().pipe(tap(router => {
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
        imports: [
            CommonModule,
            UrlModule,
            I18nModule,
            RouterModule,
            ConfigModule.withConfig(defaultCheckoutConfig),
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutProgress: {
                        component: CheckoutProgressComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutProgressComponent],
        entryComponents: [CheckoutProgressComponent],
        exports: [CheckoutProgressComponent],
        providers: [{ provide: CheckoutConfig, useExisting: Config }],
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
            this.currentDeliveryModeId = code;
            if (code) {
                this.mode.controls['deliveryModeId'].setValue(code);
            }
        });
    }
    changeMode(code) {
        if (code !== this.currentDeliveryModeId) {
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
        this.routingService.go(this.checkoutStepUrlNext);
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
        template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], DeliveryModeComponent);

let DeliveryModeModule = class DeliveryModeModule {
};
DeliveryModeModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            I18nModule,
            SpinnerModule,
            ConfigModule.withConfig({
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

let BillingAddressFormComponent = class BillingAddressFormComponent {
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
        this.selectedCountry$ = new BehaviorSubject('');
    }
    ngOnInit() {
        this.regions$ = this.selectedCountry$.pipe(switchMap(country => this.userAddressService.getRegions(country)), tap(regions => {
            const regionControl = this.billingAddress.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        }));
    }
    countrySelected(country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    regionSelected(region) {
        this.billingAddress['controls'].region['controls'].isocodeShort.setValue(region.isocodeShort);
    }
};
BillingAddressFormComponent.ctorParameters = () => [
    { type: UserAddressService }
];
__decorate([
    Input()
], BillingAddressFormComponent.prototype, "billingAddress", void 0);
__decorate([
    Input()
], BillingAddressFormComponent.prototype, "countries$", void 0);
BillingAddressFormComponent = __decorate([
    Component({
        selector: 'cx-billing-address-form',
        template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"countries$ | async as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <ng-container *ngIf=\"regions$ | async as regions\" formGroupName=\"region\">\n        <div *ngIf=\"regions.length !== 0\">\n          <label aria-required=\"true\">\n            <span class=\"label-content required\">{{\n              'addressForm.state' | cxTranslate\n            }}</span>\n            <ng-select\n              class=\"region-select\"\n              formControlName=\"isocodeShort\"\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"regions\"\n              bindLabel=\"{{ regions[0].name ? 'name' : 'isocodeShort' }}\"\n              bindValue=\"{{ regions[0].name ? 'isocodeShort' : 'region' }}\"\n              placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n              (change)=\"regionSelected($event)\"\n            >\n            </ng-select>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BillingAddressFormComponent);

let BillingAddressFormModule = class BillingAddressFormModule {
};
BillingAddressFormModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            RouterModule,
            NgSelectModule,
            I18nModule,
        ],
        declarations: [BillingAddressFormComponent],
        exports: [BillingAddressFormComponent],
    })
], BillingAddressFormModule);

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
    constructor(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService) {
        this.checkoutPaymentService = checkoutPaymentService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.userPaymentService = userPaymentService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
        this.months = [];
        this.years = [];
        this.sameAsShippingAddress = true;
        this.goBack = new EventEmitter();
        this.closeForm = new EventEmitter();
        this.setPaymentDetails = new EventEmitter();
        this.payment = this.fb.group({
            defaultPayment: [false],
            accountHolderName: ['', Validators.required],
            cardNumber: ['', Validators.required],
            cardType: this.fb.group({
                code: ['', Validators.required],
            }),
            expiryMonth: ['', Validators.required],
            expiryYear: ['', Validators.required],
            cvn: ['', Validators.required],
        });
        this.billingAddress = this.fb.group({
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
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap(countries => {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                this.userPaymentService.loadBillingCountries();
            }
        }));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap(cardTypes => {
            if (Object.keys(cardTypes).length === 0) {
                this.checkoutPaymentService.loadSupportedCardTypes();
            }
        }));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.loading$ = this.checkoutPaymentService.getSetPaymentDetailsResultProcess();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((shouldShowCheckbox) => {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            this.sameAsShippingAddress = shouldShowCheckbox;
        });
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
    }
    expMonthAndYear() {
        const year = new Date().getFullYear();
        for (let i = 0; i < 10; i++) {
            this.years.push({ id: i + 1, name: year + i });
        }
        for (let j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push({ id: j, name: '0' + j.toString() });
            }
            else {
                this.months.push({ id: j, name: j.toString() });
            }
        }
    }
    toggleDefaultPaymentMethod() {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    }
    paymentSelected(card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    }
    monthSelected(month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    }
    yearSelected(year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    }
    toggleSameAsShippingAddress() {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    }
    /**
     * Check if the shipping address can also be a billing address
     *
     * @memberof PaymentFormComponent
     */
    showSameAsShippingAddressCheckbox() {
        return combineLatest([this.countries$, this.shippingAddress$]).pipe(map(([countries, address]) => {
            return (address !== undefined &&
                address.country !== undefined &&
                !!countries.filter((country) => country.isocode === address.country.isocode).length);
        }));
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
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
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
            this.checkoutDeliveryService.verifyAddress(this.billingAddress.value);
        }
    }
    next() {
        this.setPaymentDetails.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    }
    ngOnDestroy() {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
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
    { type: ModalService }
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
        template: "<!-- FORM -->\n<div *ngIf=\"!(loading$ | async).loading; else spinner\" [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n          </label>\n          <div class=\"cx-payment-form-exp-date row\">\n            <div class=\"col-sm-6 col-md-5\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"months\"\n                bindLabel=\"name\"\n                bindValue=\"expiryMonth\"\n                placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                (change)=\"monthSelected($event)\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"col-sm-6 col-md-7\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"years\"\n                bindLabel=\"name\"\n                bindValue=\"expiryYear\"\n                placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                (change)=\"yearSelected($event)\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"showSameAsShippingAddressCheckbox() | async\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            sameAsShippingAddress && shippingAddress$\n              | async as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"next()\">\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #spinner>\n  <cx-spinner></cx-spinner>\n</ng-template>\n",
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
            BillingAddressFormModule,
            I18nModule,
            IconModule,
            SpinnerModule,
        ],
        declarations: [PaymentFormComponent],
        entryComponents: [PaymentFormComponent],
        exports: [PaymentFormComponent],
    })
], PaymentFormModule);

let PaymentMethodComponent = class PaymentMethodComponent {
    constructor(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, cartService) {
        this.userPaymentService = userPaymentService;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.newPaymentFormManuallyOpened = false;
        this.isGuestCheckout = false;
    }
    ngOnInit() {
        this.allowRouting = false;
        this.isLoading$ = this.userPaymentService.getPaymentMethodsLoading();
        if (!this.cartService.isGuestCart()) {
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
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter(paymentInfo => paymentInfo && !!Object.keys(paymentInfo).length))
            .subscribe(paymentInfo => {
            if (this.allowRouting) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach(key => {
                    if (key.startsWith('InvalidField')) {
                        this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                    }
                });
                this.checkoutService.clearCheckoutStep(3);
            }
        });
    }
    getCardContent(payment) {
        if (!this.selectedPayment && payment.defaultPayment) {
            this.selectedPayment = payment;
        }
        return combineLatest([
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
            this.translation.translate('paymentForm.useThisPayment'),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
            this.translation.translate('paymentCard.selected'),
        ]).pipe(map(([textExpires, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
            return this.createCard(payment, {
                textExpires,
                textUseThisPayment,
                textDefaultPaymentMethod,
                textSelected,
            });
        }));
    }
    selectPaymentMethod(paymentDetails) {
        this.selectedPayment = paymentDetails;
    }
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment = true, }) {
        const details = Object.assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
    }
    ngOnDestroy() {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
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
    sendPaymentMethodFailGlobalMessage(msg) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: msg },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    createCard(paymentDetails, cardLabels) {
        return {
            title: paymentDetails.defaultPayment
                ? cardLabels.textDefaultPaymentMethod
                : '',
            textBold: paymentDetails.accountHolderName,
            text: [paymentDetails.cardNumber, cardLabels.textExpires],
            img: this.getCardIcon(paymentDetails.cardType.code),
            actions: [{ name: cardLabels.textUseThisPayment, event: 'send' }],
            header: this.selectedPayment && this.selectedPayment.id === paymentDetails.id
                ? cardLabels.textSelected
                : undefined,
        };
    }
    goNext() {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    }
    goPrevious() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use selectPaymentMethod() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    paymentMethodSelected(paymentDetails) {
        this.selectPaymentMethod(paymentDetails);
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
    { type: CartService }
];
PaymentMethodComponent = __decorate([
    Component({
        selector: 'cx-payment-method',
        template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        (existingPaymentMethods$ | async).length &&\n          !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
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
            ConfigModule.withConfig({
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
        providers: [UserService],
        declarations: [PaymentMethodComponent],
        entryComponents: [PaymentMethodComponent],
        exports: [PaymentMethodComponent],
    })
], PaymentMethodModule);

let PlaceOrderComponent = class PlaceOrderComponent {
    constructor(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    toggleTAndC() {
        this.tAndCToggler = !this.tAndCToggler;
    }
    placeOrder() {
        this.checkoutService.placeOrder();
    }
    ngOnInit() {
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter(order => Object.keys(order).length !== 0))
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
    { type: RoutingService }
];
PlaceOrderComponent = __decorate([
    Component({
        selector: 'cx-place-order',
        template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
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
            ConfigModule.withConfig({
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
            .pipe(map(paymentDetails => paymentDetails && Object.keys(paymentDetails).length !== 0
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
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation, checkoutConfigService, promotionService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.translation = translation;
        this.checkoutConfigService = checkoutConfigService;
        this.promotionService = promotionService;
        this.checkoutStepType = CheckoutStepType;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
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
        // TODO(issue:#4121) Deprecated since 1.1.0
        if (this.checkoutConfigService) {
            const step = this.checkoutConfigService.getCheckoutStep(stepType);
            return step && step.routeName;
        }
    }
};
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: UserAddressService },
    { type: CartService },
    { type: TranslationService },
    { type: CheckoutConfigService },
    { type: PromotionService }
];
ReviewSubmitComponent = __decorate([
    Component({
        selector: 'cx-review-submit',
        template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n",
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
            ConfigModule.withConfig({
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
        this.showCancelBtn = true;
        this.submitAddress = new EventEmitter();
        this.backToAddress = new EventEmitter();
        this.address = this.fb.group({
            defaultAddress: [false],
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            country: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
        });
    }
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap(countries => {
            if (Object.keys(countries).length === 0) {
                this.userAddressService.loadDeliveryCountries();
            }
        }));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map(titles => {
            titles.sort(sortTitles);
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        }));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap(country => this.userAddressService.getRegions(country)), tap(regions => {
            const regionControl = this.address.get('region.isocode');
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
                this.submitAddress.emit(this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some(error => error.subject === 'titleCode')) {
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
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    }
    titleSelected(title) {
        this.address['controls'].titleCode.setValue(title.code);
    }
    countrySelected(country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    regionSelected(region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    toggleDefaultAddress() {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    }
    back() {
        this.backToAddress.emit();
    }
    verifyAddress() {
        if (this.address.controls['region'].value.isocode) {
            this.regionsSub = this.regions$.pipe(take(1)).subscribe(regions => {
                const obj = regions.find(region => region.isocode === this.address.controls['region'].value.isocode);
                Object.assign(this.address.value.region, {
                    isocodeShort: obj.isocodeShort,
                });
            });
        }
        if (this.address.dirty) {
            this.checkoutDeliveryService.verifyAddress(this.address.value);
        }
        else {
            // address form value not changed
            // ignore duplicate address
            this.submitAddress.emit(undefined);
        }
    }
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then(address => {
                this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: this.address.value.titleCode,
                        phone: this.address.value.phone,
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
                }, this.address.value);
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
        template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"regions$ | async as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                  (change)=\"regionSelected($event)\"\n                >\n                </ng-select>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" (click)=\"verifyAddress()\">\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
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
            AutoFocusDirectiveModule,
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
    constructor(userAddressService, cartService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation) {
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.newAddressFormManuallyOpened = false;
        this.forceLoader = false; // this helps with smoother steps transition
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use cards$ observable instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.cards = [];
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Avoid using it.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.goTo = null;
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use CheckoutConfigService.getNextCheckoutStepUrl(this.activatedRoute) instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        /**
         * @deprecated since version 1.3
         * This variable will no longer be in use. Use CheckoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) instead.
         * TODO(issue:#3921) deprecated since 1.3
         */
        this.checkoutStepUrlPrevious = 'cart';
        this.isGuestCheckout = false;
    }
    ngOnInit() {
        this.goTo = null;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = 'cart';
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
                (!selected ||
                    Object.keys(selected).length === 0 ||
                    !this.selectedAddress)) {
                const defaultAddress = addresses.find(address => address.defaultAddress);
                selected = defaultAddress;
                this.selectAddress(defaultAddress);
            }
            return addresses.map(address => {
                const card = this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address,
                    card,
                };
            });
        }));
        if (!this.cartService.isGuestCart()) {
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
        this.selectedAddress = address;
        this.checkoutDeliveryService.setDeliveryAddress(address);
    }
    addAddress(address) {
        // TODO(issue:#3921) deprecated since 1.3 - Remove temp address
        const tempAddress = address['address']
            ? address['address']
            : address;
        const selectedSub = this.selectedAddress$.subscribe(selected => {
            if (selected && selected.shippingAddress) {
                this.goNext();
                selectedSub.unsubscribe();
            }
        });
        this.forceLoader = true;
        // TODO(issue:#3921) deprecated since 1.3 - Remove this condition
        if (address['address'] || address['newAddress']) {
            address['newAddress']
                ? this.checkoutDeliveryService.createAndSetAddress(tempAddress)
                : this.selectAddress(tempAddress);
        }
        else {
            // TODO(issue:#3921) deprecated since 1.3 - Use instead of condition
            this.existingAddresses$.pipe(take(1)).subscribe(addresses => {
                addresses.includes(tempAddress)
                    ? this.selectAddress(tempAddress)
                    : this.checkoutDeliveryService.createAndSetAddress(tempAddress);
            });
        }
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
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    addressSelected(address) {
        this.selectAddress(address);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     */
    addNewAddress(address) {
        this.addAddress(address);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Remove.
     * TODO(issue:#3921) deprecated since 1.3
     */
    ngOnDestroy() {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    }
};
ShippingAddressComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CartService },
    { type: RoutingService },
    { type: CheckoutDeliveryService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService }
];
ShippingAddressComponent = __decorate([
    Component({
        selector: 'cx-shipping-address',
        template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"\n              (!selectedAddress || !selectedAddress.id) &&\n              !(selectedAddress$ | async)?.shippingAddress\n            \"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"setAddress\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
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
            ConfigModule.withConfig({
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
    constructor(routingService, authService, cartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.cartService = cartService;
    }
    canActivate() {
        return this.authService.getUserToken().pipe(map(token => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            else if (this.cartService.isGuestCart()) {
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
    { type: CartService }
];
NotCheckoutAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function NotCheckoutAuthGuard_Factory() { return new NotCheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(CartService)); }, token: NotCheckoutAuthGuard, providedIn: "root" });
NotCheckoutAuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], NotCheckoutAuthGuard);

let HamburgerMenuService = class HamburgerMenuService {
    constructor(router) {
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter(event => event instanceof NavigationStart))
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
        imports: [
            CommonModule,
            ConfigModule.withConfig({
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
        imports: [OutletRefModule],
        providers: [{ provide: LayoutConfig, useExisting: Config }],
        exports: [OutletRefModule],
    })
], LayoutModule);

let ConsentManagementFormComponent = class ConsentManagementFormComponent {
    constructor() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = false;
        this.consentChanged = new EventEmitter();
    }
    ngOnInit() {
        if (this.isAnonymousConsentsEnabled && this.consent) {
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
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
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
], ConsentManagementFormComponent.prototype, "isAnonymousConsentsEnabled", void 0);
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "consent", void 0);
__decorate([
    Input()
], ConsentManagementFormComponent.prototype, "isLevel13", void 0);
__decorate([
    Output()
], ConsentManagementFormComponent.prototype, "consentChanged", void 0);
ConsentManagementFormComponent = __decorate([
    Component({
        selector: 'cx-consent-management-form',
        template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <span *ngIf=\"isLevel13\" class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <br *ngIf=\"isLevel13\" />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
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
        this.isAnonymousConsentsEnabled = isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE);
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = isFeatureLevel(this.anonymousConsentsConfig, '1.3');
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
            if (!this.isAnonymousConsentsEnabled) {
                return templateList;
            }
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
            hideTemplateIds = anonymousTemplates.map(template => template.id);
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
            .subscribe(success => this.onConsentGivenSuccess(success)));
    }
    withdrawConsentInit() {
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map(([, withdrawalSuccess]) => withdrawalSuccess), tap(withdrawalSuccess => {
            if (withdrawalSuccess) {
                this.userConsentService.loadConsents();
            }
        }))
            .subscribe(withdrawalSuccess => this.onConsentWithdrawnSuccess(withdrawalSuccess)));
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
        templates.forEach(template => {
            if (this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap(_timesLoaded => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupWithdrawalStream(consentsToWithdraw = []) {
        const loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter(loading => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const withdraw$ = count$.pipe(tap(i => {
            if (i < consentsToWithdraw.length) {
                this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        }));
        const checkTimesLoaded$ = withdraw$.pipe(filter(timesLoaded => timesLoaded === consentsToWithdraw.length));
        return checkTimesLoaded$;
    }
    allowAll(templates = []) {
        const consentsToGive = [];
        templates.forEach(template => {
            if (this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap(_timesLoaded => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupGiveStream(consentsToGive = []) {
        const loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter(loading => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const giveConsent$ = count$.pipe(tap(i => {
            if (i < consentsToGive.length) {
                this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        }));
        const checkTimesLoaded$ = giveConsent$.pipe(filter(timesLoaded => timesLoaded === consentsToGive.length));
        return checkTimesLoaded$;
    }
    isRequiredConsent(template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
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
        template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <button\n            tabindex=\"0\"\n            class=\"btn cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n          >\n            {{ 'consentManagementForm.clearAll' | cxTranslate }}\n          </button>\n          <button\n            tabindex=\"0\"\n            class=\"btn cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n          >\n            {{ 'consentManagementForm.selectAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
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
            ConfigModule.withConfig({
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

let AnonymousConsentsModule = class AnonymousConsentsModule {
};
AnonymousConsentsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            IconModule,
            SpinnerModule,
            ConsentManagementModule,
        ],
        declarations: [AnonymousConsentDialogComponent],
        entryComponents: [AnonymousConsentDialogComponent],
        exports: [AnonymousConsentDialogComponent],
    })
], AnonymousConsentsModule);

let StorefrontComponent = class StorefrontComponent {
    constructor(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    ngOnInit() {
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe(val => {
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
    { type: RoutingService }
];
__decorate([
    HostBinding('class.start-navigating')
], StorefrontComponent.prototype, "startNavigating", void 0);
__decorate([
    HostBinding('class.stop-navigating')
], StorefrontComponent.prototype, "stopNavigating", void 0);
StorefrontComponent = __decorate([
    Component({
        selector: 'cx-storefront',
        template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer>\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
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
            AnonymousConsentsModule,
            FeaturesConfigModule,
        ],
        declarations: [StorefrontComponent],
        exports: [StorefrontComponent],
    })
], MainModule);

/**
 * Generic carousel that renders CMS Components.
 */
let BannerCarouselComponent = class BannerCarouselComponent {
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((d) => (this.theme = `${d.effect}-theme`)));
        this.items$ = this.componentData$.pipe(map(data => data.banners.trim().split(' ')), map(codes => codes.map(code => this.cmsService.getComponentData(code))));
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
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    RotatingImagesComponent: {
                        component: BannerCarouselComponent,
                    },
                },
            }),
            PageComponentModule,
            CarouselModule,
            MediaModule,
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
        imports: [
            CommonModule,
            RouterModule,
            GenericLinkModule,
            MediaModule,
            ConfigModule.withConfig({
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
        imports: [
            CommonModule,
            RouterModule,
            GenericLinkModule,
            ConfigModule.withConfig({
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
        imports: [
            CommonModule,
            ConfigModule.withConfig({
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
    constructor(componentData, cmsService, winRef) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.winRef = winRef;
        this.activeTabNum = 0;
        this.tabTitleParams = [];
        this.components$ = this.componentData.data$.pipe(distinctUntilKeyChanged('components'), switchMap(data => combineLatest(data.components.split(' ').map(component => this.cmsService.getComponentData(component).pipe(distinctUntilChanged(), map(tab => {
            if (!tab.flexType) {
                tab = Object.assign(Object.assign({}, tab), { flexType: tab.typeCode });
            }
            return Object.assign(Object.assign({}, tab), { title: `${data.uid}.tabs.${tab.uid}` });
        }))))));
    }
    select(tabNum) {
        this.activeTabNum = tabNum;
    }
    ngOnInit() {
        if (this.winRef && this.winRef.nativeWindow) {
            const routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['activeTab']) {
                this.activeTabNum = routeState['activeTab'];
            }
        }
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
        children.forEach(comp => {
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
    }
};
TabParagraphContainerComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService },
    { type: WindowRef }
];
__decorate([
    ViewChildren(ComponentWrapperDirective)
], TabParagraphContainerComponent.prototype, "children", void 0);
TabParagraphContainerComponent = __decorate([
    Component({
        selector: 'cx-tab-paragraph-container',
        template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <button [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate: { param: tabTitleParams[i] | async } }}\n  </button>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], TabParagraphContainerComponent);

let TabParagraphContainerModule = class TabParagraphContainerModule {
};
TabParagraphContainerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CMSTabParagraphContainer: {
                        component: TabParagraphContainerComponent,
                    },
                },
            }),
            PageComponentModule,
            OutletModule,
            I18nModule,
        ],
        declarations: [TabParagraphContainerComponent],
        entryComponents: [TabParagraphContainerComponent],
        exports: [TabParagraphContainerComponent],
    })
], TabParagraphContainerModule);

let AddressBookComponentService = class AddressBookComponentService {
    constructor(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
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
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
};
AddressBookComponentService.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: FeatureConfigService }
];
AddressBookComponentService = __decorate([
    Injectable()
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
            ConfigModule.withConfig({
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
            CardModule,
            AddressFormModule,
            SpinnerModule,
            I18nModule,
        ],
        declarations: [AddressBookComponent],
        exports: [AddressBookComponent],
        providers: [UserAddressService, AddressBookComponentService],
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
            .subscribe(success => this.onSuccess(success)));
        this.subscription.add(this.userService
            .getRemoveUserResultError()
            .subscribe(error => this.onError(error)));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    }
    onSuccess(success) {
        if (success) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe(text => {
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
                .subscribe(text => {
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
            ConfigModule.withConfig({
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
        this.submited = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    }
    requestForgotPasswordEmail() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ cxRoute: 'login' });
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
        template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
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
            ConfigModule.withConfig({
                cmsComponents: {
                    ForgotPasswordComponent: {
                        component: ForgotPasswordComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
            I18nModule,
        ],
        declarations: [ForgotPasswordComponent],
        exports: [ForgotPasswordComponent],
        entryComponents: [ForgotPasswordComponent],
    })
], ForgotPasswordModule);

let AmendOrderActionsComponent = class AmendOrderActionsComponent {
    constructor() {
        this.styles = 'row';
    }
};
__decorate([
    Input()
], AmendOrderActionsComponent.prototype, "orderCode", void 0);
__decorate([
    Input()
], AmendOrderActionsComponent.prototype, "isValid", void 0);
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
        template: "<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    [routerLink]=\"\n      {\n        cxRoute: backRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n    class=\"btn btn-block btn-action\"\n  >\n    {{ 'common.back' | cxTranslate }}\n  </a>\n</div>\n<div class=\"col-xs-12 col-md-4 col-lg-3\">\n  <a\n    *ngIf=\"forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    [class.disabled]=\"!isValid\"\n    [routerLink]=\"\n      {\n        cxRoute: forwardRoute,\n        params: { code: orderCode }\n      } | cxUrl\n    \"\n  >\n    {{ 'common.continue' | cxTranslate }}\n  </a>\n\n  <button\n    *ngIf=\"!forwardRoute\"\n    class=\"btn btn-block btn-primary\"\n    type=\"submit\"\n    [disabled]=\"!isValid\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}\n  </button>\n</div>\n",
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

function ValidateQuantity(control) {
    let q = 0;
    Object.keys(control.value).forEach(key => (q += control.value[key]));
    return q > 0 ? null : { required: true };
}
let OrderAmendService = class OrderAmendService {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * Returns entries with an amended quantity.
     */
    getAmendedEntries() {
        return this.getForm().pipe(switchMap(form => {
            return this.getEntries().pipe(map(entries => entries.filter(entry => this.getFormControl(form, entry).value > 0)));
        }));
    }
    getOrder() {
        return this.orderDetailsService.getOrderDetails();
    }
    /**
     * returns the form with form data at runtime
     */
    getForm() {
        return this.getOrder().pipe(tap(order => {
            if (!this.form || this.form.get('orderCode').value !== order.code) {
                this.buildForm(order);
            }
        }), map(() => this.form));
    }
    buildForm(order) {
        this.form = new FormGroup({});
        this.form.addControl('orderCode', new FormControl(order.code));
        const entryGroup = new FormGroup({}, { validators: [ValidateQuantity] });
        this.form.addControl('entries', entryGroup);
        (order.entries || []).forEach(entry => {
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
        if (this.isConfirmation) {
            control.disable();
        }
        return control;
    }
    setAll(form) {
        this.entries.forEach(entry => this.getControl(form, entry).setValue(this.getMaxAmendQuantity(entry)));
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
        template: "<div *ngIf=\"form$ | async as form\">\n  <button\n    *ngIf=\"!isConfirmation\"\n    class=\"btn btn-link cx-action-link\"\n    (click)=\"setAll(form)\"\n  >\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n\n  <div class=\"d-none d-md-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-xl-6\">\n        {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-2\">\n        {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n      </div>\n      <div *ngIf=\"!isConfirmation\" class=\"cx-item-list-qty col-md-3 col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-2\">\n        {{\n          (isCancellation()\n            ? 'orderDetails.cancellationAndReturn.cancelQty'\n            : 'orderDetails.cancellationAndReturn.returnQty'\n          ) | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"isConfirmation\" class=\"cx-item-list-total col-md-3  col-xl-2\">\n        {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n    <div class=\"row cx-item-list-items\">\n      <!-- Item Image -->\n      <cx-media\n        class=\"col-2 cx-image-container\"\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n\n      <!-- Item Information -->\n      <div class=\"cx-info col-10\">\n        <div class=\"cx-info-container row\">\n          <!-- Item Description -->\n          <div class=\"col-md-3 col-xl-5\">\n            <div *ngIf=\"item.product.name\" class=\"cx-name\">\n              {{ item.product.name }}\n            </div>\n            <div *ngIf=\"item.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n            </div>\n            <!-- Variants -->\n            <ng-container *cxFeatureLevel=\"'!1.5'\">\n              <div\n                *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n                class=\"cx-property\"\n              >\n                <div class=\"cx-label\">{{ variant.name }}</div>\n                <div class=\"cx-value\">{{ variant.value }}</div>\n              </div>\n            </ng-container>\n            <ng-container *cxFeatureLevel=\"'1.5'\">\n              <ng-container *ngIf=\"item.product.baseOptions?.length\">\n                <div\n                  *ngFor=\"\n                    let variant of item.product.baseOptions[0]?.selected\n                      ?.variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\" *ngIf=\"variant.name\">\n                    {{ variant.name }}:\n                  </div>\n                  <div class=\"cx-value\" *ngIf=\"variant.value\">\n                    {{ variant.value }}\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n          <!-- Price -->\n          <div\n            *ngIf=\"item.basePrice\"\n            class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n          >\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n            </div>\n            <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n              {{ item.basePrice?.formattedValue }}\n            </div>\n          </div>\n          <!-- item Quantity -->\n          <div *ngIf=\"!isConfirmation\" class=\"cx-request-qty col-md-3\">\n            <div\n              class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n              placement=\"left\"\n              title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n            >\n              {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getMaxAmendQuantity(item) }}\n            </div>\n          </div>\n          <!-- Amended Quantity -->\n          <div class=\"cx-quantity col-md-3 col-xl-2\">\n            <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n              {{\n                (isCancellation()\n                  ? 'orderDetails.cancellationAndReturn.cancelQty'\n                  : 'orderDetails.cancellationAndReturn.returnQty'\n                ) | cxTranslate\n              }}\n            </div>\n\n            <cx-item-counter\n              [min]=\"0\"\n              [max]=\"getMaxAmendQuantity(item)\"\n              [control]=\"getControl(form, item)\"\n              [readonly]=\"isConfirmation\"\n            >\n            </cx-item-counter>\n          </div>\n          <!-- Total Price -->\n          <div *ngIf=\"isConfirmation\" class=\"cx-total col-3\">\n            <div class=\"cx-label d-block d-md-none\">\n              {{\n                'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate\n              }}\n            </div>\n            <div class=\"cx-value\">\n              {{ getItemPrice(item)?.formattedValue }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
            .pipe(tap(form => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    submit(form) {
        form.disable();
        this.orderAmendService.save();
    }
};
CancelOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
CancelOrderConfirmationComponent = __decorate([
    Component({
        selector: 'cx-cancel-order-confirmation',
        template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
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
        return this.getOrder().pipe(filter(order => Boolean(order)), map(order => order.entries.filter(entry => entry.entryNumber !== -1 && entry.cancellableQuantity > 0)));
    }
    save() {
        const orderCode = this.form.value.orderCode;
        const entries = this.form.value.entries;
        const inputs = Object.keys(entries)
            .filter(entryNumber => entries[entryNumber] > 0)
            .map(entryNumber => ({
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
        return this.orderAmendService.getForm().pipe(map(form => {
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
            ConfigModule.withConfig({
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
            AmendOrderItemsModule,
            AmendOrderActionsModule,
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
            .pipe(tap(form => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getEntries();
    }
};
CancelOrderComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
CancelOrderComponent = __decorate([
    Component({
        selector: 'cx-cancel-order',
        template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderCancelConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
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
            ConfigModule.withConfig({
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
            AmendOrderItemsModule,
            AmendOrderActionsModule,
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
        return this.getOrder().pipe(filter(order => !!order.entries), map(order => order.entries.filter(entry => entry.entryNumber !== -1 && entry.returnableQuantity > 0)));
    }
    save() {
        const orderCode = this.form.value.orderCode;
        const entries = this.form.value.entries;
        const inputs = Object.keys(entries)
            .filter(entryNumber => entries[entryNumber] > 0)
            .map(entryNumber => ({
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
            .pipe(first(r => !!r))
            .subscribe(returnRequest => {
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
        return this.orderAmendService.getForm().pipe(map(form => {
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
            .pipe(tap(form => (this.orderCode = form.value.orderCode)));
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
        template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderReturn\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
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
            ConfigModule.withConfig({
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
            AmendOrderItemsModule,
            I18nModule,
            ReactiveFormsModule,
            AmendOrderActionsModule,
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
            .pipe(tap(form => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getEntries();
    }
};
ReturnOrderComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
ReturnOrderComponent = __decorate([
    Component({
        selector: 'cx-return-order',
        template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderReturnConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
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
            ConfigModule.withConfig({
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
            AmendOrderItemsModule,
            AmendOrderActionsModule,
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
        return this.order$.pipe(map(order => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter(consignment => consignmentStatus.includes(consignment.status));
            }
        }));
    }
    getOtherStatus(...consignmentStatus) {
        return this.order$.pipe(map(order => {
            if (Boolean(order.consignments)) {
                return order.consignments.filter(consignment => !consignmentStatus.includes(consignment.status));
            }
        }));
    }
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     */
    getConsignmentProducts(consignment) {
        const products = [];
        consignment.entries.forEach(element => {
            products.push(element.orderEntry);
        });
        return products;
    }
};
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: PromotionService }
];
OrderDetailItemsComponent = __decorate([
    Component({
        selector: 'cx-order-details-items',
        template: "<ng-container *ngIf=\"order$ | async as order\">\n  <!-- consigned entries -->\n  <div *cxFeatureLevel=\"'1.4'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n\n    <cx-order-consigned-entries\n      *ngIf=\"others$ | async as others\"\n      [order]=\"order\"\n      [consignments]=\"others\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"completed$ | async as completed\"\n      [order]=\"order\"\n      [consignments]=\"completed\"\n    ></cx-order-consigned-entries>\n\n    <cx-order-consigned-entries\n      *ngIf=\"cancel$ | async as cancel\"\n      [order]=\"order\"\n      [consignments]=\"cancel\"\n    ></cx-order-consigned-entries>\n  </div>\n\n  <div *cxFeatureLevel=\"'!1.4'\">\n    <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          <span *ngIf=\"consignment\">\n            {{\n              'orderDetails.deliveryStatus'\n                | cxTranslate: { context: consignment.status }\n            }}\n          </span>\n        </div>\n        <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n          <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n          <div>{{ consignment?.statusDate | cxDate }}</div>\n        </div>\n\n        <cx-consignment-tracking\n          [orderCode]=\"order.code\"\n          [consignment]=\"consignment\"\n          *cxFeature=\"'consignmentTracking'\"\n        >\n        </cx-consignment-tracking>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n            <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n          </ng-container>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"getConsignmentProducts(consignment)\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n    <!-- unconsigned entries -->\n    <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n      <div class=\"cx-list-header col-12\">\n        <div class=\"cx-list-status\">\n          {{ 'orderDetails.pending' | cxTranslate }}\n        </div>\n      </div>\n      <div class=\"cx-list-item col-12\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"order?.unconsignedEntries\"\n          [readonly]=\"true\"\n          [promotionLocation]=\"promotionLocation\"\n        ></cx-cart-item-list>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
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
        template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"tracking$ | async as consignmentTracking; else loading\">\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title \">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <ng-container *ngIf=\"consignmentTracking?.trackingUrl\">\n                <a target=\"_blank\" [href]=\"consignmentTracking.trackingUrl\">{{\n                  consignmentTracking?.trackingID\n                }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!consignmentTracking?.trackingUrl\">\n                <label>\n                  {{ consignmentTracking?.trackingID }}\n                </label>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close btn-dismiss\"\n          aria-label=\"Close\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
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
        consignment.entries.forEach(element => {
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
                    canActivate: [CmsPageGuard],
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
            ConfigModule.withConfig({
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
            SpinnerModule,
        ],
        providers: [OrderDetailsService],
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
        this.tabTitleParam$ = this.orders$.pipe(map(order => order.pagination.totalResults), filter(totalResults => totalResults !== undefined), take(1));
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
            ConfigModule.withConfig({
                cmsComponents: {
                    AccountOrderHistoryComponent: {
                        component: OrderHistoryComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            RouterModule,
            FormsModule,
            NgSelectModule,
            ListNavigationModule,
            UrlModule,
            I18nModule,
        ],
        declarations: [OrderHistoryComponent],
        exports: [OrderHistoryComponent],
        providers: [UserService],
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
            .pipe(tap(returnRequest => (this.rma = returnRequest.rma)));
        this.isCancelling$ = this.returnRequestService.isCancelling$;
    }
    ngOnInit() {
        this.subscription = this.returnRequestService.isCancelSuccess$.subscribe(success => {
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
        template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n    <div class=\"cx-item-list-header row\">\n      <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n        {{ 'returnRequest.item' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-price col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.itemPrice' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-qty col-md-3 col-lg-3 col-xl-2\">\n        {{ 'returnRequest.returnQty' | cxTranslate }}\n      </div>\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'returnRequest.total' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n\n  <div\n    class=\"cx-item-list-row\"\n    *ngFor=\"let returnEntry of returnRequest.returnEntries; let i = index\"\n  >\n    <div class=\"cx-item-list-items\">\n      <div class=\"row\">\n        <!-- Item Image -->\n        <div class=\"col-2 cx-image-container\">\n          <cx-media\n            [container]=\"returnEntry.orderEntry?.product.images?.PRIMARY\"\n            format=\"thumbnail\"\n          ></cx-media>\n        </div>\n        <!-- Item Information -->\n        <div class=\"cx-info col-10\">\n          <div class=\"cx-info-container row \">\n            <!-- Item Description -->\n            <div class=\"col-md-3 col-lg-4 col-xl-5\">\n              <div *ngIf=\"returnEntry.orderEntry?.product.name\" class=\"cx-name\">\n                {{ returnEntry.orderEntry?.product.name }}\n              </div>\n              <div *ngIf=\"returnEntry.orderEntry?.product.code\" class=\"cx-code\">\n                {{ 'cartItems.id' | cxTranslate }}\n                {{ returnEntry.orderEntry?.product.code }}\n              </div>\n              <!-- Variants -->\n              <ng-container *cxFeatureLevel=\"'!1.5'\">\n                <div\n                  *ngFor=\"\n                    let variant of returnEntry.orderEntry?.product\n                      .variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\">{{ variant.name }}</div>\n                  <div class=\"cx-value\">{{ variant.value }}</div>\n                </div>\n              </ng-container>\n              <ng-container *cxFeatureLevel=\"'1.5'\">\n                <div\n                  *ngFor=\"\n                    let variant of (returnEntry.orderEntry?.product\n                      .baseOptions)[0]?.selected?.variantOptionQualifiers\n                  \"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\" *ngIf=\"variant.name\">\n                    {{ variant.name }}:\n                  </div>\n                  <div class=\"cx-value\" *ngIf=\"variant.value\">\n                    {{ variant.value }}\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n            <!-- Item Price -->\n            <div\n              *ngIf=\"returnEntry.orderEntry?.basePrice\"\n              class=\"cx-price col-md-3 col-lg-2 col-xl-2\"\n            >\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.itemPrice' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.orderEntry?.basePrice?.formattedValue }}\n              </div>\n            </div>\n            <!-- return Quantity -->\n            <div class=\"cx-quantity col-md-3 col-lg-3 col-xl-3\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.returnQty' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.expectedQuantity }}\n              </div>\n            </div>\n            <!-- Total Price -->\n            <div class=\"cx-total col-md-3 col-lg-3 col-xl-2\">\n              <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                {{ 'returnRequest.total' | cxTranslate }}\n              </div>\n              <div class=\"cx-value\">\n                {{ returnEntry.refundAmount?.formattedValue }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
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
            ConfigModule.withConfig({
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
            RouterModule,
            UrlModule,
            I18nModule,
            MediaModule,
            FeaturesConfigModule,
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
        this.tabTitleParam$ = this.returnRequests$.pipe(map(returnRequests => returnRequests.pagination.totalResults), filter(totalResults => totalResults !== undefined), take(1));
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
            ConfigModule.withConfig({
                cmsComponents: {
                    OrderReturnRequestListComponent: {
                        component: OrderReturnRequestListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            RouterModule,
            ListNavigationModule,
            UrlModule,
            I18nModule,
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
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap(paymentDetails => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find(paymentDetail => paymentDetail.defaultPayment)) {
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
        imports: [
            CommonModule,
            CardModule,
            SpinnerModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    AccountPaymentDetailsComponent: {
                        component: PaymentMethodsComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            I18nModule,
        ],
        providers: [UserService],
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
        this.submited = false;
        this.form = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            repassword: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    ngOnInit() {
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe(state => (this.token = state.state.queryParams['token'])));
        this.subscription.add(this.userService.isPasswordReset().subscribe(reset => {
            if (reset) {
                this.routingService.go({ cxRoute: 'login' });
            }
        }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    resetPassword() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        const password = this.form.value['password'];
        this.userService.resetPassword(this.token, password);
    }
    matchPassword(ac) {
        if (ac.get('password').value !== ac.get('repassword').value) {
            return { NotEqual: true };
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
        template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
    })
], ResetPasswordFormComponent);

let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ResetPasswordComponent: {
                        component: ResetPasswordFormComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            I18nModule,
        ],
        declarations: [ResetPasswordFormComponent],
        exports: [ResetPasswordFormComponent],
        entryComponents: [ResetPasswordFormComponent],
    })
], ResetPasswordModule);

let UpdateEmailFormComponent = class UpdateEmailFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submited = false;
        this.saveEmail = new EventEmitter();
        this.cancelEmail = new EventEmitter();
        this.form = this.fb.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            confirmEmail: ['', [Validators.required]],
            password: ['', [Validators.required]],
        }, { validator: this.matchEmail });
    }
    isEmailConfirmNotValid(formControlName) {
        return (this.form.hasError('NotEqual') &&
            (this.submited ||
                (this.form.get(formControlName).touched &&
                    this.form.get(formControlName).dirty)));
    }
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submited);
    }
    onSubmit() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        const newUid = this.form.value.confirmEmail;
        const password = this.form.value.password;
        this.saveEmail.emit({ newUid, password });
    }
    onCancel() {
        this.cancelEmail.emit();
    }
    matchEmail(ac) {
        if (ac.get('email').value !== ac.get('confirmEmail').value) {
            return { NotEqual: true };
        }
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
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"new-password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
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
            .subscribe(success => this.onSuccess(success)));
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
            ConfigModule.withConfig({
                cmsComponents: {
                    UpdateEmailComponent: {
                        component: UpdateEmailComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
        ],
        declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
        exports: [UpdateEmailComponent, UpdateEmailFormComponent],
        entryComponents: [UpdateEmailComponent],
    })
], UpdateEmailModule);

let UpdatePasswordFormComponent = class UpdatePasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    ngOnInit() {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    }
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    isPasswordConfirmNotValid() {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    }
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    }
    onCancel() {
        this.cancelled.emit();
    }
    matchPassword(abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    }
};
UpdatePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Output()
], UpdatePasswordFormComponent.prototype, "submited", void 0);
__decorate([
    Output()
], UpdatePasswordFormComponent.prototype, "cancelled", void 0);
UpdatePasswordFormComponent = __decorate([
    Component({
        selector: 'cx-update-password-form',
        template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
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
            .subscribe(success => this.onSuccess(success)));
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
        template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
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
            ConfigModule.withConfig({
                cmsComponents: {
                    UpdatePasswordComponent: {
                        component: UpdatePasswordComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            SpinnerModule,
            I18nModule,
        ],
        declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
        exports: [UpdatePasswordComponent, UpdatePasswordFormComponent],
        entryComponents: [UpdatePasswordComponent],
    })
], UpdatePasswordModule);

let UpdateProfileFormComponent = class UpdateProfileFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
        this.form = this.fb.group({
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
        this.submitClicked = false;
    }
    ngOnInit() {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    }
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            userUpdates: Object.assign({}, this.form.value),
        });
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
], UpdateProfileFormComponent.prototype, "submited", void 0);
__decorate([
    Output()
], UpdateProfileFormComponent.prototype, "cancelled", void 0);
UpdateProfileFormComponent = __decorate([
    Component({
        selector: 'cx-update-profile-form',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
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
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe(success => this.onSuccess(success)));
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
        template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
    })
], UpdateProfileComponent);

let UpdateProfileModule = class UpdateProfileModule {
};
UpdateProfileModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    UpdateProfileComponent: {
                        component: UpdateProfileComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
            SpinnerModule,
            I18nModule,
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
        this.couponService.loadCustomerCoupons(this.PAGE_SIZE);
        this.couponResult$ = this.couponService
            .getCustomerCoupons(this.PAGE_SIZE)
            .pipe(tap(coupons => (this.pagination = {
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
            .subscribe(error => {
            this.subscriptionFail(error);
        }))
            .add(this.couponService
            .getUnsubscribeCustomerCouponResultError()
            .subscribe(error => {
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
            .subscribe(k => {
            const couponCode = k.state.params.couponCode;
            if (couponCode) {
                this.couponService.claimCustomerCoupon(couponCode);
                this.subscription = this.couponService
                    .getClaimCustomerCouponResultSuccess()
                    .subscribe(success => {
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
            ConfigModule.withConfig({
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
            .pipe(tap(preferences => (this.preferences = preferences)));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map(([prefsLoading, updateLoading]) => prefsLoading || updateLoading));
    }
    updatePreference(preference) {
        const updatedPreferences = [];
        this.preferences.forEach(p => {
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
        imports: [
            CommonModule,
            SpinnerModule,
            I18nModule,
            ConfigModule.withConfig({
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
            .pipe(tap(interests => (this.pagination = {
            currentPage: interests.pagination.page,
            pageSize: interests.pagination.count,
            totalPages: interests.pagination.totalPages,
            totalResults: interests.pagination.totalCount,
            sort: 'byNameAsc',
        })), map(interest => (Object.assign(Object.assign({}, interest), { results: interest.results
                ? interest.results.map(result => (Object.assign(Object.assign({}, result), { product$: this.getProduct(result) })))
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
        template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    tabindex=\"-1\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media\n                      [container]=\"product.images?.PRIMARY\"\n                      format=\"thumbnail\"\n                    ></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row \">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
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
            ConfigModule.withConfig({
                cmsComponents: {
                    MyInterestsComponent: {
                        component: MyInterestsComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            RouterModule,
            ListNavigationModule,
            I18nModule,
            UrlModule,
            MediaModule,
            SpinnerModule,
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
            this.translation.translate('common.home').pipe(observeOn(asyncScheduler)),
        ]).pipe(map(([meta, textHome]) => { var _a; return ((_a = meta) === null || _a === void 0 ? void 0 : _a.breadcrumbs) ? meta.breadcrumbs : [{ label: textHome, link: '/' }]; }));
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
        imports: [
            CommonModule,
            RouterModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    BreadcrumbComponent: {
                        component: BreadcrumbComponent,
                    },
                },
            }),
            CmsPageTitleModule,
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
            return {
                title: data.name,
                children: [nav],
            };
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
        return data$.pipe(filter(data => !!data), switchMap(data => {
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap(items => {
                if (items === undefined) {
                    this.loadNavigationEntryItems(navigation, true);
                }
                else {
                    // we should check whether the existing node items are what expected
                    const expectedItems = [];
                    this.loadNavigationEntryItems(navigation, false, expectedItems);
                    const existingItems = Object.keys(items).map(key => items[key].uid);
                    const missingItems = expectedItems.filter(it => !existingItems.includes(it.id));
                    if (missingItems.length > 0) {
                        this.cmsService.loadNavigationItems(navigation.uid, missingItems);
                    }
                }
            }), filter(Boolean), map(items => this.populateNavigationNode(navigation, items)));
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
            nodeData.entries.forEach(entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            });
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach(child => this.loadNavigationEntryItems(child, false, itemsList));
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
                .map(child => this.populateNavigationNode(child, items))
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
     * Gets the URL or link to a related item (category)
     */
    getLink(item) {
        if (item.url) {
            return item.url;
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
        template: "<cx-navigation-ui\n  *ngIf=\"data$ | async as data\"\n  [node]=\"node$ | async\"\n  [ngClass]=\"data.styleClass\"\n  [wrapAfter]=\"data.wrapAfter\"\n  [allowAlignToRight]=\"true\"\n></cx-navigation-ui>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CategoryNavigationComponent);

let NavigationUIComponent = class NavigationUIComponent {
    constructor(router, renderer, elemRef) {
        this.router = router;
        this.renderer = renderer;
        this.elemRef = elemRef;
        this.allowAlignToRight = false;
        /**
         * the icon type that will be used for navigation nodes
         * with children.
         */
        this.iconType = ICON_TYPE;
        /**
         * Indicates whether the navigation should support flyout.
         * If flyout is set to true, the
         * nested child navitation nodes will only appear on hover or focus.
         */
        this.flyout = true;
        this.isOpen = false;
        this.openNodes = [];
        this.subscriptions = new Subscription();
        this.resize = new EventEmitter();
        this.subscriptions.add(this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.clear()));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe(() => {
            this.alignWrappersToRightIfStickOut();
        }));
    }
    onResize() {
        this.resize.next();
    }
    toggleOpen(event) {
        event.preventDefault();
        const node = event.currentTarget;
        if (this.openNodes.includes(node)) {
            if (event.type === 'keydown') {
                this.back();
            }
            else {
                this.openNodes = this.openNodes.filter(n => n !== node);
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
    getDepth(node, depth = 0) {
        if (node.children && node.children.length > 0) {
            return Math.max(...node.children.map(n => this.getDepth(n, depth + 1)));
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
        if (this.allowAlignToRight) {
            const wrapper = node.querySelector('.wrapper');
            const navBar = this.elemRef.nativeElement;
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', `${node.offsetWidth - wrapper.offsetWidth}px`);
                }
            }
        }
    }
    alignWrappersToRightIfStickOut() {
        const navs = this.elemRef.nativeElement.childNodes;
        Array.from(navs)
            .filter(node => node.tagName === 'NAV')
            .forEach(nav => this.alignWrapperToRightIfStickOut(nav));
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
    isTabbable(node) {
        return this.flyout && node.children && node.children.length;
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
    Input()
], NavigationUIComponent.prototype, "allowAlignToRight", void 0);
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
        template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n    (keydown.space)=\"toggleOpen($event)\"\n    (keydown.esc)=\"back()\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\" [attr.tabindex]=\"flyout ? 0 : -1\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], NavigationUIComponent);

let NavigationComponent = class NavigationComponent {
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.createNavigation(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map(d => d.styleClass));
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
            ConfigModule.withConfig({
                cmsComponents: {
                    NavigationComponent: {
                        component: NavigationComponent,
                    },
                },
            }),
            I18nModule,
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
        imports: [
            CommonModule,
            NavigationModule,
            ConfigModule.withConfig({
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
    constructor(componentData, service, anonymousConsentsConfig) {
        this.componentData = componentData;
        this.service = service;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map(d => d.styleClass));
        // in order to preserve the backwards compatibility, this should render only if anonymous consents feature is disabled
        this.data$ = this.componentData.data$.pipe(filter(_ => !isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE)));
    }
};
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService },
    { type: AnonymousConsentsConfig }
];
FooterNavigationComponent = __decorate([
    Component({
        selector: 'cx-footer-navigation',
        template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
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
            ConfigModule.withConfig({
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
        }), tap(results => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results))));
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
            return this.searchService.getSuggestionResults().pipe(map(res => res.map(suggestion => suggestion.value)), switchMap(suggestions => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map(match => (match ? [match] : [])));
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
        return this.getProductResults(config).pipe(switchMap(productResult => {
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
        this.results$ = this.config$.pipe(tap(c => (this.config = c)), switchMap(config => this.searchBoxComponentService.getResults(config)));
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
            map(c => {
                return Object.assign(Object.assign({}, c), { displayProducts: c.displayProducts === 'true' || c.displayProducts === true, displayProductImages: c.displayProductImages === 'true' ||
                        c.displayProductImages === true, displaySuggestions: c.displaySuggestions === 'true' ||
                        c.displaySuggestions === true });
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
        template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"\n      close($event, true); launchSearchResult($event, searchInput.value)\n    \"\n    (keydown.arrowup)=\"focusPreviousChild($event)\"\n    (keydown.arrowdown)=\"focusNextChild($event)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    (keydown.enter)=\"clear(searchInput)\"\n    class=\"reset\"\n    tabindex=\"0\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n    (keydown.enter)=\"avoidReopen($event)\"\n    tabindex=\"0\"\n  ></cx-icon>\n</label>\n\n<div\n  *ngIf=\"results$ | async as result\"\n  class=\"results\"\n  (click)=\"close($event, true)\"\n>\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n      (keydown.arrowup)=\"focusPreviousChild($event)\"\n      (keydown.arrowdown)=\"focusNextChild($event)\"\n      (keydown.enter)=\"close($event, true)\"\n      (keydown.escape)=\"close($event, true)\"\n      (blur)=\"close($event)\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
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
            ConfigModule.withConfig({
                cmsComponents: {
                    SearchBoxComponent: {
                        component: SearchBoxComponent,
                    },
                },
            }),
            IconModule,
            UrlModule,
            I18nModule,
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
        template: "<div class=\"cx-order-items container\" *ngIf=\"order$ | async as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n\n  <ng-container *cxFeatureLevel=\"'1.5'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n  </ng-container>\n\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [readonly]=\"true\"\n    [promotionLocation]=\"promotionLocation\"\n  ></cx-cart-item-list>\n</div>\n",
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
        return this.translation.translate('addressCard.shipTo').pipe(filter(_ => Boolean(deliveryAddress)), map(textTitle => ({
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
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(filter(_ => Boolean(deliveryMode)), map(textTitle => ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        })));
    }
    getBillingAddressCardContent(billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(filter(_ => Boolean(billingAddress)), map(textTitle => ({
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
        ]).pipe(filter(_ => Boolean(payment)), map(([textTitle, textExpires]) => ({
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
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap(order => {
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
        }, { validator: CustomFormValidators.matchPassword });
    }
    submit() {
        this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
        if (!this.subscription) {
            this.subscription = this.authService.getUserToken().subscribe(token => {
                if (token.access_token) {
                    this.routingService.go({ cxRoute: 'home' });
                }
            });
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
        template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n          >\n            <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').value !==\n              guestRegisterForm.get('passwordconf').value\n            \"\n            type=\"password\"\n            name=\"confirmpassword\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').value !==\n                guestRegisterForm.get('passwordconf').value &&\n              guestRegisterForm.get('passwordconf').value\n            \"\n          >\n            <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <button\n        type=\"submit\"\n        (click)=\"submit()\"\n        [disabled]=\"guestRegisterForm.invalid\"\n        class=\"btn btn-block btn-primary\"\n      >\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
    })
], GuestRegisterFormComponent);

let OrderConfirmationGuard = class OrderConfirmationGuard {
    constructor(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    canActivate() {
        return this.checkoutService.getOrderDetails().pipe(map(orderDetails => {
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
            ConfigModule.withConfig({
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
        return this.productService.get(code).pipe(filter(Boolean), map(product => this.convertProduct(product)));
    }
    getProductReferences(code, referenceType, displayTitle, displayProductPrices) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map(ref => this.convertProduct(ref.target, displayTitle, displayProductPrices))));
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
    constructor(componentData, productService, features) {
        this.componentData = componentData;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ProductScope.LIST : '';
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map(data => data.title));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map(data => data.productCodes.trim().split(' ')), map(codes => codes.map(code => this.productService.get(code, this.PRODUCT_SCOPE))));
    }
};
ProductCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService },
    { type: FeatureConfigService }
];
ProductCarouselComponent = __decorate([
    Component({
        selector: 'cx-product-carousel',
        template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductCarouselComponent);

let ProductCarouselModule = class ProductCarouselModule {
};
ProductCarouselModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CarouselModule,
            MediaModule,
            RouterModule,
            UrlModule,
            ConfigModule.withConfig({
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
        this.title$ = this.component.data$.pipe(map(d => d.title));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((p) => p.code), distinctUntilChanged(), tap(() => this.referenceService.cleanReferences()));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap(([code, data]) => this.getProductReferences(code, data.productReferenceTypes)));
    }
    getProductReferences(code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map(ref => of(ref.target))));
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
        template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductReferencesComponent);

let ProductReferencesModule = class ProductReferencesModule {
};
ProductReferencesModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CarouselModule,
            MediaModule,
            RouterModule,
            UrlModule,
            ConfigModule.withConfig({
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
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((p) => this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {})));
        this.thumbs$ = this.product$.pipe(map(product => this.createThumbs(product)), 
        // TODO: deprecated, remove the below tap (issue:#6166)
        tap(thumbs => {
            this.isThumbsEmpty = thumbs.length === 0;
        }));
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
            const current = thumbs.find(t => t.media &&
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
        return product.images.GALLERY.map(c => of({ container: c }));
    }
};
ProductImagesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
ProductImagesComponent = __decorate([
    Component({
        selector: 'cx-product-images',
        template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
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
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductImagesComponent: {
                        component: ProductImagesComponent,
                    },
                },
            }),
            CarouselModule,
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
            .subscribe(reviewsTabLabel => {
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
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n\n    <button\n      *ngIf=\"reviewsTabAvailable | async\"\n      class=\"btn btn-link\"\n      (click)=\"showReviews()\"\n    >\n      {{ 'productSummary.showReviews' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductIntroComponent);

let ProductIntroModule = class ProductIntroModule {
};
ProductIntroModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            StarRatingModule,
            ConfigModule.withConfig({
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
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter(searchResult => Object.keys(searchResult).length > 0));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((x, y) => {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            })),
            // also trigger search on site context changes
            this.languageService.getActive(),
            this.currencyService.getActive(),
        ]).pipe(pluck(0, 'state'), tap((state) => {
            const criteria = this.getCriteriaFromRoute(state.params, state.queryParams);
            this.search(criteria);
        }));
        /**
         * This stream should be used only on the Product Listing Page.
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
    clearSearchResults() {
        this.productSearchService.clearResults();
    }
    getCriteriaFromRoute(routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    }
    getQueryFromRouteParams({ brandCode, categoryCode, query, }) {
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
        }
    }
    search(criteria) {
        const query = criteria.query;
        const searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    }
    getSearchConfig(criteria) {
        const result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach(key => !result[key] && delete result[key]);
        return result;
    }
    setQuery(query) {
        this.setQueryParams({ query, currentPage: undefined });
    }
    viewPage(pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    }
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber) {
        this.routing
            .getRouterState()
            .subscribe(route => {
            const routeCriteria = this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            const criteria = Object.assign(Object.assign({}, routeCriteria), { currentPage: pageNumber });
            this.search(criteria);
        })
            .unsubscribe();
    }
    sort(sortCode) {
        this.setQueryParams({ sortCode });
    }
    setQueryParams(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
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
        this.productListComponentService.clearSearchResults();
        this.subscription.add(this.pageLayoutService.templateName$.pipe(take(1)).subscribe(template => {
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
        if (this.isSamePage(inputModel)) {
            return;
        }
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
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     */
    isSamePage(inputModel) {
        if (!this.resetList &&
            this.model &&
            this.model.breadcrumbs &&
            inputModel.breadcrumbs &&
            this.model.breadcrumbs.length > 0 &&
            inputModel.breadcrumbs.length > 0) {
            if (this.model.breadcrumbs.length === inputModel.breadcrumbs.length) {
                for (let i = 0; i < this.model.breadcrumbs.length; i++) {
                    if (this.model.breadcrumbs[i].facetCode ===
                        inputModel.breadcrumbs[i].facetCode &&
                        this.model.breadcrumbs[i].facetValueCode ===
                            inputModel.breadcrumbs[i].facetValueCode &&
                        this.model.breadcrumbs[i].removeQuery.query.value ===
                            inputModel.breadcrumbs[i].removeQuery.query.value &&
                        this.model.pagination.currentPage ===
                            inputModel.pagination.currentPage) {
                        return true;
                    }
                }
            }
        }
        return false;
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

let ProductFacetNavigationComponent = class ProductFacetNavigationComponent {
    constructor(modalService, activatedRoute, productListComponentService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productListComponentService = productListComponentService;
        this.iconTypes = ICON_TYPE;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.activeFacetValueCode = params.categoryCode || params.brandCode;
        });
        this.searchResult$ = this.productListComponentService.model$.pipe(tap(searchResult => {
            if (searchResult.facets) {
                searchResult.facets.forEach(el => {
                    this.showAllPerFacetMap.set(el.name, false);
                });
            }
        }));
        this.visibleFacets$ = this.searchResult$.pipe(map(searchResult => {
            return searchResult.facets
                ? searchResult.facets.filter(facet => facet.visible)
                : [];
        }));
    }
    openFilterModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    toggleValue(query) {
        this.productListComponentService.setQuery(this.queryCodec.decodeValue(query));
    }
    showLess(facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    }
    showMore(facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    }
    updateShowAllPerFacetMap(facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    }
    isFacetCollapsed(facetName) {
        return this.collapsedFacets.has(facetName);
    }
    toggleFacet(facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    }
    getVisibleFacetValues(facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : facet.topValueCount);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ActivatedRoute },
    { type: ProductListComponentService }
];
ProductFacetNavigationComponent = __decorate([
    Component({
        selector: 'cx-product-facet-navigation',
        template: "<ng-container *ngIf=\"searchResult$ | async as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"visibleFacets$ | async as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n              tabindex=\"0\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > facet.topValueCount\n                \"\n                tabindex=\"0\"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductFacetNavigationComponent);

let ProductGridItemComponent = class ProductGridItemComponent {
};
__decorate([
    Input()
], ProductGridItemComponent.prototype, "product", void 0);
ProductGridItemComponent = __decorate([
    Component({
        selector: 'cx-product-grid-item',
        template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n  tabindex=\"-1\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    *ngIf=\"product.averageRating\"\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n  <div *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price?.formattedValue }}\n  </div>\n</div>\n\n<ng-container *cxFeatureLevel=\"'1.5'\">\n  <div class=\"cx-variant-style-icons\" *ngIf=\"product.variantOptions\">\n    <cx-variant-style-icons\n      [variants]=\"product.variantOptions\"\n    ></cx-variant-style-icons>\n  </div>\n</ng-container>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [product]=\"product\"\n></cx-add-to-cart>\n",
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
        template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-image-container\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.nameHtml\"\n    ></a>\n    <cx-star-rating\n      *ngIf=\"product.averageRating\"\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div *ngIf=\"!product.averageRating\" class=\"cx-product-no-review\">\n      {{ 'productDetails.noReviews' | cxTranslate }}\n    </div>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <cx-variant-style-icons\n        *ngIf=\"product.variantOptions\"\n        [variants]=\"product.variantOptions\"\n      ></cx-variant-style-icons>\n    </ng-container>\n\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [product]=\"product\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
        this.product$ = this.currentProductService.getProduct().pipe(filter(product => !!(product && product.baseOptions)), distinctUntilChanged(), tap(product => {
            product.baseOptions.forEach(option => {
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
        const obj = qualifiers.find(q => q.qualifier === VariantQualifier.STYLE);
        return obj ? obj.value : '';
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const qualifier = variantOptionQualifiers.find(item => item.image);
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
        const obj = qualifiers.find(q => q.qualifier === VariantQualifier.SIZE);
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
        const obj = qualifiers.find(q => q.qualifier === VariantQualifier.COLOR);
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
        this.variants.forEach(variant => {
            this.variantNames[variant.code] = this.getVariantName(variant.variantOptionQualifiers);
        });
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const thumbnail = variantOptionQualifiers.find(item => item.qualifier === VariantQualifier.THUMBNAIL);
        return thumbnail
            ? `${this.config.backend.occ.baseUrl}${thumbnail.image.url}`
            : '';
    }
    getVariantName(variantOptionQualifiers) {
        const rollupProperty = variantOptionQualifiers.find(item => item.qualifier === VariantQualifier.ROLLUP_PROPERTY);
        const property = rollupProperty
            ? variantOptionQualifiers.find(item => item.qualifier === rollupProperty.value)
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
        return this.routingService.getRouterState().pipe(map(state => state.nextState.params.productCode), switchMap((productCode) => {
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
        const results = variants.filter(variant => {
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
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductVariantSelectorComponent: {
                        component: ProductVariantsComponent,
                        guards: [ProductVariantGuard],
                    },
                },
            }),
            I18nModule,
            VariantStyleSelectorModule,
            VariantSizeSelectorModule,
            VariantColorSelectorModule,
            VariantStyleIconsModule,
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
            ConfigModule.withConfig(defaultScrollConfig),
            ConfigModule.withConfig({
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
                    ProductRefinementComponent: {
                        component: ProductFacetNavigationComponent,
                    },
                },
            }),
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
        declarations: [
            ProductListComponent,
            ProductFacetNavigationComponent,
            ProductListItemComponent,
            ProductGridItemComponent,
            ProductViewComponent,
            ProductScrollComponent,
        ],
        exports: [
            ProductListComponent,
            ProductFacetNavigationComponent,
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
        imports: [
            CommonModule,
            OutletModule,
            I18nModule,
            ConfigModule.withConfig({
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
    // TODO deprecated since 1.4, remove
    ngOnInit() { }
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
        imports: [
            CommonModule,
            I18nModule,
            ConfigModule.withConfig({
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
        imports: [
            CommonModule,
            ConfigModule.withConfig({
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
        this.reviews$ = this.product$.pipe(filter(p => !!p), map(p => p.code), distinctUntilChanged(), switchMap(productCode => this.reviewService.getByProductCode(productCode)), tap(() => {
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
    markFormAsTouched() {
        Object.keys(this.reviewForm.controls).forEach(key => {
            this.reviewForm.controls[key].markAsTouched();
        });
    }
    submitReview(product) {
        if (this.reviewForm.valid) {
            this.addReview(product);
        }
        else {
            this.markFormAsTouched();
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
            rating: [0, [Validators.min(1), Validators.max(5)]],
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
        template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button\n        #writeReviewButton\n        class=\"btn btn-primary\"\n        (click)=\"initiateWriteReview()\"\n      >\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input\n            #titleInput\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"title\"\n            [class.is-invalid]=\"\n              reviewForm.controls['title'].invalid &&\n              (reviewForm.controls['title'].touched ||\n                reviewForm.controls['title'].dirty)\n            \"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n            [class.is-invalid]=\"\n              reviewForm.controls['comment'].invalid &&\n              (reviewForm.controls['comment'].touched ||\n                reviewForm.controls['comment'].dirty)\n            \"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"button\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
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
            ConfigModule.withConfig({
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
                .subscribe(success => {
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
            .pipe(map(interests => !!interests.results && interests.results.length === 1));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap(prefs => (this.enabledPrefs = prefs)), map(prefs => prefs.length > 0));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe(error => {
            if (error) {
                this.onInterestAddingError();
            }
        }));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe(success => {
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
            .subscribe(text => this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO)));
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
        template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <label>{{ 'stockNotification.getNotified' | cxTranslate }}</label>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <label>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </label>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <label>{{ 'stockNotification.notified' | cxTranslate }}</label>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], StockNotificationComponent);

let StockNotificationModule = class StockNotificationModule {
};
StockNotificationModule = __decorate([
    NgModule({
        declarations: [StockNotificationComponent, StockNotificationDialogComponent],
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    StockNotificationComponent: {
                        component: StockNotificationComponent,
                    },
                },
            }),
            RouterModule,
            I18nModule,
            SpinnerModule,
            UrlModule,
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
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
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
    viewStore(location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    }
    prepareRouteUrl(location) {
        const countryParam = this.route.snapshot.params.country
            ? `country/${this.route.snapshot.params.country}/`
            : '';
        const regionParam = this.route.snapshot.params.region
            ? `region/${this.route.snapshot.params.region}/`
            : '';
        return `store-finder/${countryParam}${regionParam}${location.name}`;
    }
    ngOnDestroy() { }
};
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
StoreFinderGridComponent = __decorate([
    Component({
        selector: 'cx-store-finder-grid',
        template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
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
    Output()
], StoreFinderListItemComponent.prototype, "storeItemClick", void 0);
StoreFinderListItemComponent = __decorate([
    Component({
        selector: 'cx-store-finder-list-item',
        template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      {{ location.displayName || location.name }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
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
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, markerIndex => {
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
        template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
    }),
    __param(1, Inject(DOCUMENT))
], StoreFinderListComponent);

let StoreFinderSearchResultComponent = class StoreFinderSearchResultComponent {
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe(params => this.initialize(params));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    viewPage(pageNumber) {
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    }
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = Object.assign(Object.assign({}, this.searchConfig), { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
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
    { type: ActivatedRoute }
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
        template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
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
        template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
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
            ConfigModule.withConfig({
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
    constructor(formBuilder, cartService, authRedirectService) {
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.authRedirectService = authRedirectService;
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, CustomFormValidators.emailValidator]],
            emailConfirmation: ['', [Validators.required]],
        }, { validator: this.emailsMatch });
        this.submitClicked = false;
    }
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    isEmailConfirmInvalid() {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('emailConfirmation').touched &&
                    this.form.get('emailConfirmation').dirty)));
    }
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        const email = this.form.value.email;
        this.cartService.addEmail(email);
        if (!this.sub) {
            this.sub = this.cartService.getAssignedUser().subscribe(_ => {
                if (this.cartService.isGuestCart()) {
                    this.authRedirectService.redirect();
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    emailsMatch(abstractControl) {
        return abstractControl.get('email').value !==
            abstractControl.get('emailConfirmation').value
            ? { NotEqual: true }
            : null;
    }
};
CheckoutLoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CartService },
    { type: AuthRedirectService }
];
CheckoutLoginComponent = __decorate([
    Component({
        selector: 'cx-checkout-login',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isNotValid('email')\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n        <span>{{ 'checkoutLogin.emailIsRequired' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isEmailConfirmInvalid()\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isEmailConfirmInvalid()\">\n        <span>{{ 'checkoutLogin.emailsMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
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
            ConfigModule.withConfig({
                cmsComponents: {
                    GuestCheckoutLoginComponent: {
                        component: CheckoutLoginComponent,
                        guards: [NotCheckoutAuthGuard],
                    },
                },
            }),
            FormsModule,
            ReactiveFormsModule,
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
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.checkoutConfigService &&
            this.checkoutConfigService.isGuestCheckout()) {
            this.loginAsGuest = this.activatedRoute.snapshot.queryParams['forced'];
        }
        // TODO(issue:#4055) Deprecated since 1.1.0
        if (this.winRef && this.winRef.nativeWindow) {
            const routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    }
    login() {
        if (this.form.valid) {
            this.submitLogin();
        }
        else {
            this.markFormAsTouched();
        }
    }
    submitLogin() {
        const { userId, password } = this.form.controls;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe(data => {
                if (data && data.access_token) {
                    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    this.authRedirectService.redirect();
                }
            });
        }
    }
    markFormAsTouched() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsTouched();
        });
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    prefillForm(field, value) {
        this.form.patchValue({
            [field]: value,
        });
        this.form.get(field).markAsTouched(); // this action will check field validity on load
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
        template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
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
            ConfigModule.withConfig({
                cmsComponents: {
                    ReturningCustomerLoginComponent: {
                        component: LoginFormComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
            I18nModule,
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
        this.user$ = this.auth.isUserLoggedIn().pipe(switchMap(isUserLoggedIn => {
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
        imports: [
            CommonModule,
            RouterModule,
            UrlModule,
            PageSlotModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    LoginComponent: {
                        component: LoginComponent,
                    },
                },
            }),
            I18nModule,
        ],
        declarations: [LoginComponent],
        entryComponents: [LoginComponent],
        exports: [LoginComponent],
    })
], LoginModule);

let LogoutGuard = class LogoutGuard {
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     */
    constructor(auth, cms, routing, semanticPathService, protectedRoutes, featureConfig) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.featureConfig = featureConfig;
    }
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap(hasPage => {
            if (!hasPage) {
                this.redirect();
            }
        }));
    }
    redirect() {
        // TODO(issue:5666) Deprecated since 1.4
        const cxRoute = this.featureConfig.isLevel('1.4') &&
            this.protectedRoutes &&
            this.protectedRoutes.shouldProtect
            ? 'login'
            : 'home';
        this.routing.go({ cxRoute });
    }
    logout() {
        this.auth.logout();
    }
};
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService },
    { type: FeatureConfigService }
];
LogoutGuard.ɵprov = ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(ɵɵinject(AuthService), ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesService), ɵɵinject(FeatureConfigService)); }, token: LogoutGuard, providedIn: "root" });
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
    constructor(auth, authRedirectService, userService, globalMessageService, fb, router, featureConfig, anonymousConsentsService, anonymousConsentsConfig) {
        this.auth = auth;
        this.authRedirectService = authRedirectService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.featureConfig = featureConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.subscription = new Subscription();
        // TODO(issue:4237) Register flow
        this.isNewRegisterFlowEnabled = this.featureConfig && this.featureConfig.isLevel('1.1');
        this.isAnonymousConsentEnabled = this.featureConfig &&
            this.featureConfig.isEnabled(ANONYMOUS_CONSENTS_FEATURE);
        this.userRegistrationForm = this.fb.group({
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
                disabled: this.isAnonymousConsentEnabled
                    ? this.isConsentRequired()
                    : false,
            }),
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: CustomFormValidators.matchPassword });
    }
    ngOnInit() {
        this.titles$ = this.userService.getTitles().pipe(tap(titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        }), map(titles => {
            return titles.sort(sortTitles);
        }));
        // TODO(issue:4237) Register flow
        if (this.isNewRegisterFlowEnabled) {
            this.loading$ = this.userService.getRegisterUserResultLoading();
            this.registerUserProcessInit();
        }
        else {
            if (this.auth && this.authRedirectService) {
                this.subscription.add(this.userService
                    .getRegisterUserResultSuccess()
                    .subscribe((success) => {
                    if (success) {
                        const { uid, password } = this.collectDataFromRegisterForm(this.userRegistrationForm.value);
                        this.auth.authorize(uid, password);
                    }
                }));
                this.subscription.add(this.auth.getUserToken().subscribe(data => {
                    if (data && data.access_token) {
                        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                        this.authRedirectService.redirect();
                    }
                }));
            }
        }
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter(messages => !!Object.keys(messages).length))
            .subscribe((globalMessageEntities) => {
            const messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some(message => message === 'This field is required.')) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }));
        if (this.isAnonymousConsentEnabled &&
            Boolean(this.anonymousConsentsConfig) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent)) {
            this.anonymousConsent$ = combineLatest([
                this.anonymousConsentsService.getConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
                this.anonymousConsentsService.getTemplate(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
            ]).pipe(map(([consent, template]) => {
                return {
                    consent,
                    template: template ? template.description : '',
                };
            }));
            this.subscription.add(this.userRegistrationForm
                .get('newsletter')
                .valueChanges.subscribe(_ => {
                this.toggleAnonymousConsent();
            }));
        }
    }
    submit() {
        this.userService.register(this.collectDataFromRegisterForm(this.userRegistrationForm.value));
    }
    titleSelected(title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
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
        if (Boolean(this.anonymousConsentsService) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
            return this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        return false;
    }
    onRegisterUserSuccess(success) {
        if (this.router && success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    toggleAnonymousConsent() {
        if (Boolean(this.userRegistrationForm.get('newsletter').value)) {
            this.anonymousConsentsService.giveConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
    }
    registerUserProcessInit() {
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe(success => {
            this.onRegisterUserSuccess(success);
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: AuthService },
    { type: AuthRedirectService },
    { type: UserService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: RoutingService },
    { type: FeatureConfigService },
    { type: AnonymousConsentsService },
    { type: AnonymousConsentsConfig }
];
RegisterComponent = __decorate([
    Component({
        selector: 'cx-register',
        template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('email').errors &&\n                  (userRegistrationForm.get('email').errors['email'] ||\n                    userRegistrationForm.get('email').errors['InvalidEmail']) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <ng-container\n                *ngIf=\"isAnonymousConsentEnabled; else hardcodedNewsletter\"\n              >\n                <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                    [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ anonymousConsent.template }}\n                  </span>\n                </label>\n              </ng-container>\n              <ng-template #hardcodedNewsletter\n                ><label>\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ 'register.emailMarketing' | cxTranslate }}\n                  </span>\n                </label>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
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
            ConfigModule.withConfig({
                cmsComponents: {
                    RegisterCustomerComponent: {
                        component: RegisterComponent,
                        guards: [NotAuthGuard],
                    },
                },
            }),
            I18nModule,
            SpinnerModule,
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
        template: "<div class=\"row\">\n  <!-- Item Image -->\n  <div class=\"cx-image-container col-2\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        [container]=\"cartEntry.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div class=\"col-md-5 col-lg-5 col-xl-5\">\n        <div *ngIf=\"cartEntry.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { cxRoute: 'product', params: cartEntry.product } | cxUrl\n            \"\n            >{{ cartEntry.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"cartEntry.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"cartEntry.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of cartEntry.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"cartEntry.basePrice\"\n        class=\"cx-price col-md-3 col-lg-4 col-xl-4\"\n      >\n        <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"cartEntry.basePrice\" class=\"cx-value\">\n          {{ cartEntry.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Total -->\n      <div class=\"col-sm-8 col-md-4 col-lg-3 col-xl-3 cx-add-to-cart\">\n        <cx-add-to-cart\n          *ngIf=\"\n            cartEntry.product.stock.stockLevelStatus !== 'outOfStock';\n            else outOfStock\n          \"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n        <ng-template #outOfStock>\n          <span class=\"cx-out-of-stock\">\n            {{ 'addToCart.outOfStock' | cxTranslate }}\n          </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"cx-return-button col-12\">\n      <button\n        class=\"btn btn-link\"\n        (click)=\"removeEntry(cartEntry)\"\n        [disabled]=\"isLoading\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
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
            ConfigModule.withConfig({
                cmsComponents: {
                    WishListComponent: {
                        component: WishListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            I18nModule,
            MediaModule,
            RouterModule,
            StarRatingModule,
            UrlModule,
            ItemCounterModule,
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
            ConfigModule.withConfig({
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
            ConfigModule.withConfig({
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
            md: {
                slots: [
                    'PreHeader',
                    'SiteContext',
                    'SiteLinks',
                    'SiteLogo',
                    'SearchBox',
                    'SiteLogin',
                    'MiniCart',
                    'NavigationBar',
                ],
            },
            xs: {
                slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
            },
        },
        navigation: {
            md: { slots: [] },
            xs: {
                slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
            },
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
            md: {
                pageFold: 'UpSelling',
            },
            xs: {
                pageFold: 'Summary',
            },
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
            AnonymousConsentsModule$1.forRoot(),
            ConfigModule.forRoot(),
            ConfigInitializerModule.forRoot(),
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
            StoreModule.forRoot({}, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictStateSerializability: true,
                    strictActionImmutability: true,
                    strictActionSerializability: true,
                },
            }),
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
            StorefrontModule.withConfig({
                pwa: {
                    enabled: true,
                    addToHomeScreen: true,
                },
            }),
            ConfigModule.withConfig(b2cLayoutConfig),
            ConfigModule.withConfigFactory(defaultCmsContentConfig),
            // the cms lib module contains all components that added in the bundle
            CmsLibModule,
        ],
        exports: [StorefrontModule],
    })
], B2cStorefrontModule);

/**
 * @deprecated since 2.0.0
 * NOTE: delete this file altogether, move below slots to the main default layout config
 */
const PLPAccessibilityLayoutConfig = {
    layoutSlots: {
        ProductListPageTemplate: {
            slots: ['ProductLeftRefinements', 'ProductListSlot'],
        },
    },
};

/*
 * Public API Surface of storefrontlib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AVOID_STACKED_OUTLETS, AbstractStoreItemComponent, AddToCartComponent, AddToCartModule, AddToHomeScreenBannerComponent, AddToHomeScreenBtnComponent, AddToHomeScreenComponent, AddToWishListComponent, AddToWishListModule, AddedToCartDialogComponent, AddressBookComponent, AddressBookComponentService, AddressBookModule, AddressFormComponent, AddressFormModule, AmendOrderActionsComponent, AmendOrderActionsModule, AmendOrderItemsModule, AmendOrderType, AnonymousConsentManagementBannerComponent, AnonymousConsentManagementBannerModule, AnonymousConsentOpenDialogComponent, AppliedCouponsComponent, AsmModule, AutoFocusDirective, B2cStorefrontModule, BREAKPOINT, BannerCarouselComponent, BannerCarouselModule, BannerComponent, BannerModule, BillingAddressFormComponent, BillingAddressFormModule, BreadcrumbComponent, BreadcrumbModule, BreadcrumbSchemaBuilder, BreakpointService, CancelOrReturnItemsComponent, CancelOrderComponent, CancelOrderConfirmationComponent, CancelOrderConfirmationModule, CancelOrderModule, CardComponent, CardModule, CarouselComponent, CarouselModule, CarouselService, CartComponentModule, CartCouponComponent, CartCouponModule, CartDetailsComponent, CartDetailsModule, CartItemComponent, CartItemListComponent, CartNotEmptyGuard, CartPageLayoutHandler, CartSharedModule, CartTotalsComponent, CartTotalsModule, CategoryNavigationComponent, CategoryNavigationModule, CheckoutAuthGuard, CheckoutComponentModule, CheckoutConfig, CheckoutConfigService, CheckoutDetailsLoadedGuard, CheckoutDetailsService, CheckoutGuard, CheckoutLoginComponent, CheckoutLoginModule, CheckoutOrchestratorComponent, CheckoutOrchestratorModule, CheckoutOrderSummaryComponent, CheckoutOrderSummaryModule, CheckoutProgressComponent, CheckoutProgressMobileBottomComponent, CheckoutProgressMobileBottomModule, CheckoutProgressMobileTopComponent, CheckoutProgressMobileTopModule, CheckoutProgressModule, CheckoutStepType, CloseAccountComponent, CloseAccountModalComponent, CloseAccountModule, CmsComponentData, CmsLibModule, CmsPageGuard, CmsParagraphModule, CmsRouteModule, ComponentWrapperDirective, ConsentManagementComponent, ConsentManagementFormComponent, ConsentManagementModule, ConsignmentTrackingComponent, CouponCardComponent, CouponClaimComponent, CouponDialogComponent, CurrentProductService, CustomFormValidators, DeliveryModeComponent, DeliveryModeModule, DeliveryModePreferences, DeliveryModeSetGuard, FooterNavigationComponent, FooterNavigationModule, ForgotPasswordComponent, ForgotPasswordModule, FormUtils, GenericLinkComponent, GenericLinkModule, GlobalMessageComponent, GlobalMessageComponentModule, GuestRegisterFormComponent, HamburgerMenuComponent, HamburgerMenuModule, HamburgerMenuService, HighlightPipe, ICON_TYPE, IconComponent, IconConfig, IconLoaderService, IconModule, IconResourceType, ItemCounterComponent, ItemCounterModule, JSONLD_PRODUCT_BUILDER, JsonLdBaseProductBuilder, JsonLdBuilderModule, JsonLdDirective, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, JsonLdScriptFactory, LanguageCurrencyComponent, LayoutConfig, LayoutModule, LinkComponent, LinkModule, ListNavigationModule, LoginComponent, LoginFormComponent, LoginFormModule, LoginModule, LogoutGuard, LogoutModule, MainModule, MediaComponent, MediaModule, MediaService, MiniCartComponent, MiniCartModule, ModalRef, ModalService, MyCouponsComponent, MyCouponsModule, MyInterestsComponent, MyInterestsModule, NavigationComponent, NavigationModule, NavigationService, NavigationUIComponent, NotCheckoutAuthGuard, NotificationPreferenceComponent, NotificationPreferenceModule, OrderAmendService, OrderCancellationGuard, OrderCancellationModule, OrderCancellationService, OrderConfirmationGuard, OrderConfirmationItemsComponent, OrderConfirmationModule, OrderConfirmationOverviewComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderConsignedEntriesComponent, OrderDetailActionsComponent, OrderDetailHeadlineComponent, OrderDetailItemsComponent, OrderDetailShippingComponent, OrderDetailTotalsComponent, OrderDetailsModule, OrderDetailsService, OrderHistoryComponent, OrderHistoryModule, OrderModule, OrderReturnGuard, OrderReturnModule, OrderReturnRequestListComponent, OrderReturnService, OrderSummaryComponent, OutletDirective, OutletModule, OutletPosition, OutletRefDirective, OutletRefModule, OutletService, PAGE_LAYOUT_HANDLER, PLPAccessibilityLayoutConfig, PRODUCT_DETAILS_URL_MATCHER, PRODUCT_LISTING_URL_MATCHER, PWAModuleConfig, PageComponentModule, PageLayoutComponent, PageLayoutModule, PageLayoutService, PageSlotComponent, PageSlotModule, PaginationBuilder, PaginationComponent, PaginationConfig, PaginationItemType, PaginationModule, PaginationNavigationPosition, ParagraphComponent, PaymentDetailsSetGuard, PaymentFormComponent, PaymentFormModule, PaymentMethodComponent, PaymentMethodModule, PaymentMethodsComponent, PaymentMethodsModule, PlaceOrderComponent, PlaceOrderModule, ProductAttributesComponent, ProductAttributesModule, ProductCarouselComponent, ProductCarouselModule, ProductCarouselService, ProductDetailOutlets, ProductDetailsPageModule, ProductDetailsTabComponent, ProductDetailsTabModule, ProductFacetNavigationComponent, ProductGridItemComponent, ProductImagesComponent, ProductImagesModule, ProductIntroComponent, ProductIntroModule, ProductListComponent, ProductListComponentService, ProductListItemComponent, ProductListModule, ProductListingPageModule, ProductReferencesComponent, ProductReferencesModule, ProductReviewsComponent, ProductReviewsModule, ProductSchemaBuilder, ProductScrollComponent, ProductSummaryComponent, ProductSummaryModule, ProductTabsModule, ProductVariantGuard, ProductVariantsComponent, ProductVariantsModule, ProductViewComponent, PromotionService, PromotionsComponent, PromotionsModule, PwaModule, QualtricsComponent, QualtricsConfig, QualtricsLoaderService, QualtricsModule, RegisterComponent, RegisterComponentModule, ResetPasswordFormComponent, ResetPasswordModule, ReturnOrderComponent, ReturnOrderConfirmationComponent, ReturnOrderConfirmationModule, ReturnOrderModule, ReturnRequestDetailModule, ReturnRequestItemsComponent, ReturnRequestListModule, ReturnRequestOverviewComponent, ReturnRequestTotalsComponent, ReviewSubmitComponent, ReviewSubmitModule, RoutingModule, SCHEMA_BUILDER, SaveForLaterComponent, SaveForLaterModule, ScheduleComponent, SearchBoxComponent, SearchBoxComponentService, SearchBoxModule, SeoMetaService, SeoModule, ShippingAddressComponent, ShippingAddressModule, ShippingAddressSetGuard, SiteContextComponentService, SiteContextSelectorComponent, SiteContextSelectorModule, SiteContextType, SortingComponent, SpinnerComponent, SpinnerModule, StarRatingComponent, StarRatingModule, StockNotificationComponent, StockNotificationDialogComponent, StockNotificationModule, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderModule, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StorefrontComponent, StorefrontFoundationModule, StorefrontModule, StructuredDataModule, SuggestedAddressDialogComponent, TabParagraphContainerComponent, TabParagraphContainerModule, TrackingEventsComponent, USE_STACKED_OUTLETS, UpdateEmailComponent, UpdateEmailFormComponent, UpdateEmailModule, UpdatePasswordComponent, UpdatePasswordFormComponent, UpdatePasswordModule, UpdateProfileComponent, UpdateProfileFormComponent, UpdateProfileModule, UserComponentModule, VariantColorSelectorComponent, VariantColorSelectorModule, VariantSizeSelectorComponent, VariantSizeSelectorModule, VariantStyleIconsComponent, VariantStyleIconsModule, VariantStyleSelectorComponent, VariantStyleSelectorModule, ViewConfig, ViewConfigModule, ViewModes, WishListComponent, WishListItemComponent, WishListModule, b2cLayoutConfig, defaultCmsContentConfig, defaultPWAModuleConfig, defaultPageHeaderConfig, defaultPaginationConfig, defaultScrollConfig, fontawesomeIconConfig, getStructuredDataFactory, getSuffixUrlMatcher, headerComponents, initSeoService, pwaConfigurationFactory, pwaFactory, sortTitles, titleScores, ɵ0$1 as ɵ0, ɵ1, ɵ2, AsmLoaderModule as ɵa, asmFactory as ɵb, SkipLinkComponent as ɵba, SkipLinkService as ɵbb, SkipLinkDirective as ɵbc, MyCouponsComponentService as ɵbd, addCmsRoute as ɵbe, defaultStorefrontRoutesConfig as ɵbf, defaultRoutingConfig as ɵbg, htmlLangProvider as ɵbh, setHtmlLangAttribute as ɵbi, AnonymousConsentsModule as ɵbj, AnonymousConsentDialogComponent as ɵbk, ComponentMapperService as ɵc, AsmEnablerService as ɵd, AsmMainUiComponent as ɵe, AsmComponentService as ɵf, CSAgentLoginFormComponent as ɵg, CustomerSelectionComponent as ɵh, AsmSessionTimerComponent as ɵi, FormatTimerPipe as ɵj, CustomerEmulationComponent as ɵk, AutoFocusDirectiveModule as ɵl, defaultCheckoutConfig as ɵm, ExpressCheckoutService as ɵn, defaultQualtricsConfig as ɵo, CmsRoutesService as ɵp, CmsMappingService as ɵq, CmsI18nService as ɵr, CmsGuardsService as ɵs, ReturnRequestService as ɵt, AddToHomeScreenService as ɵu, SkipLinkModule as ɵv, skipLinkFactory as ɵw, defaultSkipLinkConfig as ɵx, SkipLinkConfig as ɵy, SkipLinkScrollPosition as ɵz, DeferLoaderService as θDeferLoaderService, IntersectionService as θIntersectionService };
//# sourceMappingURL=spartacus-storefront.js.map
