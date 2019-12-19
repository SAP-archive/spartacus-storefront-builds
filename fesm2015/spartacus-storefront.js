import { CommonModule, isPlatformServer, isPlatformBrowser, DOCUMENT, Location } from '@angular/common';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, ElementRef, Input, HostBinding, NgModule, EventEmitter, Output, isDevMode, ChangeDetectionStrategy, forwardRef, Renderer2, ViewChild, Directive, HostListener, Optional, Injector, Inject, PLATFORM_ID, INJECTOR, InjectionToken, TemplateRef, ComponentFactory, ViewContainerRef, ComponentFactoryResolver, NgZone, APP_INITIALIZER, RendererFactory2, ViewEncapsulation, ChangeDetectorRef, Pipe } from '@angular/core';
import { WindowRef, ConfigModule, Config, isFeatureLevel, AnonymousConsentsConfig, AnonymousConsentsService, I18nModule, OccConfig, UrlModule, GlobalMessageType, GlobalMessageService, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, ContextServiceMap, SiteContextModule, provideConfig, EMAIL_PATTERN, PASSWORD_PATTERN, FeaturesConfigModule, DeferLoadingStrategy, CmsConfig, TranslationService, TranslationChunkService, CmsService, PageType, RoutingService, SemanticPathService, ProtectedRoutesGuard, AuthService, CartService, CartDataService, CheckoutService, CheckoutDeliveryService, CheckoutPaymentService, PageMetaService, FeatureConfigService, KymaService, OccEndpointsService, ProductService, ProductSearchService, ProductReviewService, ProductReferenceService, SearchboxService, CurrencyService, LanguageService, BaseSiteService, UserService, UserAddressService, UserConsentService, UserOrderService, UserPaymentService, UserNotificationPreferenceService, UserInterestsService, DynamicAttributeService, PageRobotsMeta, AsmAuthService, AsmConfig, AsmService, AsmModule as AsmModule$1, CartVoucherService, OCC_USER_ID_ANONYMOUS, WishListService, CartModule, RoutingConfigService, AuthRedirectService, ANONYMOUS_CONSENT_STATUS, isFeatureEnabled, ANONYMOUS_CONSENTS_FEATURE, AuthGuard, NotAuthGuard, CmsPageTitleModule, NotificationType, StoreDataService, StoreFinderService, GoogleMapRendererService, StoreFinderCoreModule, ProtectedRoutesService, RoutingModule as RoutingModule$1, StateModule, AuthModule, AnonymousConsentsModule as AnonymousConsentsModule$1, ConfigInitializerModule, CmsModule, GlobalMessageModule, ProcessModule, CheckoutModule, UserModule, ProductModule, provideConfigFromMetaTags, SmartEditModule, PersonalizationModule, OccModule, ExternalRoutesModule } from '@spartacus/core';
import { Subscription, combineLatest, of, fromEvent, BehaviorSubject, concat, isObservable, from, Observable } from 'rxjs';
import { take, distinctUntilChanged, tap, map, debounceTime, startWith, filter, switchMap, first, skipWhile, endWith, withLatestFrom, flatMap, mergeMap, shareReplay, scan, pluck } from 'rxjs/operators';
import { NgbModalRef, NgbModal, NgbModule, NgbActiveModal, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { __awaiter } from 'tslib';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { Subscription as Subscription$1 } from 'rxjs/internal/Subscription';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ICON_TYPE = {
    STAR: 'STAR',
    SEARCH: 'SEARCH',
    CART: 'CART',
    INFO: 'INFO',
    GRID: 'GRID',
    LIST: 'LIST',
    CARET_DOWN: 'CARET_DOWN',
    CARET_LEFT: 'CARET_LEFT',
    CARET_RIGHT: 'CARET_RIGHT',
    CLOSE: 'CLOSE',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    SUCCESS: 'SUCCESS',
    VISA: 'VISA',
    MASTER_CARD: 'MASTER_CARD',
    AMEX: 'AMEX',
    DINERS_CLUB: 'DINERS_CLUB',
    CREDIT_CARD: 'CREDIT_CARD',
    EXPAND: 'EXPAND',
    COLLAPSE: 'COLLAPSE',
    RESET: 'RESET',
    CIRCLE: 'CIRCLE',
    HEART: 'HEART',
    EMPTY_HEART: 'EMPTY_HEART',
};
/**
 * @abstract
 */
class IconConfig {
}
if (false) {
    /** @type {?} */
    IconConfig.prototype.icon;
}
/**
 * @record
 */
function IconConfigResource() { }
if (false) {
    /** @type {?} */
    IconConfigResource.prototype.type;
    /** @type {?|undefined} */
    IconConfigResource.prototype.url;
    /** @type {?|undefined} */
    IconConfigResource.prototype.types;
}
/** @enum {string} */
const IconResourceType = {
    SVG: 'svg',
    LINK: 'link',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconLoaderService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.loadedResources = [];
    }
    /**
     * Indicates whether the given icon type is configured to use SVG.
     * @param {?} iconType
     * @return {?}
     */
    useSvg(iconType) {
        return (this.config.icon.resources &&
            !!this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            res => res.types &&
                res.type === IconResourceType.SVG &&
                res.types.includes(iconType))));
    }
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     * @param {?} iconType
     * @return {?}
     */
    getSvgPath(iconType) {
        /** @type {?} */
        const svgResource = this.config.icon.resources.find((/**
         * @param {?} res
         * @return {?}
         */
        res => res.type === IconResourceType.SVG &&
            res.types &&
            res.types.includes(iconType)));
        if (svgResource) {
            return svgResource.url
                ? `${svgResource.url}#${this.getSymbol(iconType)}`
                : `#${this.getSymbol(iconType)}`;
        }
    }
    /**
     *
     * Returns the symbol class(es) for the icon type.
     * @param {?} iconType
     * @return {?}
     */
    getStyleClasses(iconType) {
        return this.getSymbol(iconType) || '';
    }
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     * @param {?} iconType
     * @return {?}
     */
    addLinkResource(iconType) {
        /** @type {?} */
        const resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource && resource.url) {
            if (!this.loadedResources.includes(resource.url)) {
                this.loadedResources.push(resource.url);
                /** @type {?} */
                const head = this.winRef.document.getElementsByTagName('head')[0];
                /** @type {?} */
                const link = this.winRef.document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = resource.url;
                head.appendChild(link);
            }
        }
    }
    /**
     * @private
     * @param {?} iconType
     * @param {?} resourceType
     * @return {?}
     */
    findResource(iconType, resourceType) {
        if (!this.config.icon.resources) {
            return;
        }
        /** @type {?} */
        let resource = this.config.icon.resources.find((/**
         * @param {?} res
         * @return {?}
         */
        res => res.type === resourceType && res.types && res.types.includes(iconType)));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            res => (res.type === resourceType && !res.types) || res.types === []));
        }
        return resource;
    }
    /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    getSymbol(iconType) {
        if (this.config.icon &&
            this.config.icon.symbols &&
            this.config.icon.symbols[iconType]) {
            return this.config.icon.symbols[iconType];
        }
    }
}
IconLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IconLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: IconConfig }
];
/** @nocollapse */ IconLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(ɵɵinject(WindowRef), ɵɵinject(IconConfig)); }, token: IconLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconLoaderService.prototype.loadedResources;
    /**
     * @type {?}
     * @protected
     */
    IconLoaderService.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    IconLoaderService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconComponent {
    /**
     * @param {?} iconLoader
     * @param {?} elementRef
     */
    constructor(iconLoader, elementRef) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        /**
         * Keeps the given style classes so that we can
         * clean them up when the icon changes
         */
        this.styleClasses = '';
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        this._type = type;
        this.addStyleClasses(type);
    }
    /**
     * Indicates whether the icon is configured to use SVG or not.
     * @return {?}
     */
    get useSvg() {
        return this.iconLoader.useSvg(this._type);
    }
    /**
     * Returns the path to the svg symbol. The path could include an
     * external URL to an svg (sprite) file, but can also reference
     * an existing SVG symbol in the DOM.
     * @return {?}
     */
    get svgPath() {
        return this.iconLoader.getSvgPath(this._type);
    }
    /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @param {?} type
     * @return {?}
     */
    addStyleClasses(type) {
        if (this.useSvg) {
            return;
        }
        if (this.staticStyleClasses === undefined) {
            this.staticStyleClasses = this.elementRef.nativeElement.classList.value
                ? this.elementRef.nativeElement.classList.value + ' '
                : '';
        }
        this.styleClasses =
            this.staticStyleClasses + this.iconLoader.getStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-icon',
                template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef }
];
IconComponent.propDecorators = {
    type: [{ type: Input, args: ['type',] }],
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /**
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     * @type {?}
     */
    IconComponent.prototype._type;
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     * @type {?}
     */
    IconComponent.prototype.styleClasses;
    /**
     * Style class names from the host element are taken into account
     * when classes are set dynamically.
     * @type {?}
     * @private
     */
    IconComponent.prototype.staticStyleClasses;
    /**
     * @type {?}
     * @protected
     */
    IconComponent.prototype.iconLoader;
    /**
     * @type {?}
     * @protected
     */
    IconComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconModule {
}
IconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IconComponent],
                imports: [CommonModule, ConfigModule.withConfig(fontawesomeIconConfig)],
                providers: [{ provide: IconConfig, useExisting: Config }],
                exports: [IconComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options available for modal instance
 *
 * \@todo remove ngb dependency and create our own set of props for this interface
 * @record
 */
function ModalOptions() { }
if (false) {
    /** @type {?|undefined} */
    ModalOptions.prototype.temp;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A reference to a newly opened modal
 *
 * \@todo remove ngb dependency and create our own implementation of ModalRef
 */
class ModalRef extends NgbModalRef {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service to handle modal
 */
class ModalService {
    /**
     * @param {?} ngbModalService
     */
    constructor(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    open(content, options) {
        /** @type {?} */
        let activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        return activeModal;
    }
    /**
     * @return {?}
     */
    getActiveModal() {
        /** @type {?} */
        const modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissActiveModal(reason) {
        /** @type {?} */
        const modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    closeActiveModal(reason) {
        /** @type {?} */
        const modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
        }
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: NgbModal }
];
/** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(NgbModal)); }, token: ModalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.modals;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.ngbModalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnonymousConsentDialogComponent {
    /**
     * @param {?} config
     * @param {?} modalService
     * @param {?} anonymousConsentsService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    closeModal(reason) {
        this.modalService.closeActiveModal(reason);
    }
    /**
     * @return {?}
     */
    rejectAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, consents]) => templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            /** @type {?} */
            const consent = this.getCorrespondingConsent(template, consents);
            if (this.anonymousConsentsService.isConsentGiven(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.withdrawConsent(template.id);
            }
        })))))
            .subscribe());
        this.closeModal('rejectAll');
    }
    /**
     * @return {?}
     */
    allowAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templates, consents]) => templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            /** @type {?} */
            const consent = this.getCorrespondingConsent(template, consents);
            if (consent.consentState == null ||
                this.anonymousConsentsService.isConsentWithdrawn(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                this.anonymousConsentsService.giveConsent(template.id);
            }
        })))))
            .subscribe());
        this.closeModal('allowAll');
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    isRequiredConsent(template) {
        return (Boolean(this.config.anonymousConsents) &&
            Boolean(this.config.anonymousConsents.requiredConsents) &&
            this.config.anonymousConsents.requiredConsents.includes(template.id));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onConsentChange({ given, template, }) {
        if (given) {
            this.anonymousConsentsService.giveConsent(template.id);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(template.id);
        }
    }
    /**
     * @param {?} template
     * @param {?=} consents
     * @return {?}
     */
    getCorrespondingConsent(template, consents = []) {
        for (const consent of consents) {
            if (template.id === consent.templateCode) {
                return consent;
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AnonymousConsentDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-dialog',
                template: "<div #dialog>\n  <div *ngIf=\"loading$ | async; else dialogBody\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <!-- Modal Header -->\n  <ng-template #dialogBody>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"closeModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Separator -->\n    <div\n      class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n    ></div>\n    <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n      {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n      <div\n        class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n      ></div>\n    </div>\n    <!-- Actions -->\n    <div class=\"cx-dialog-buttons\">\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n        'anonymousConsents.dialog.clearAll' | cxTranslate\n      }}</a>\n      <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n        'anonymousConsents.dialog.selectAll' | cxTranslate\n      }}</a>\n    </div>\n    <!-- Modal Body -->\n    <div\n      class=\"cx-dialog-body modal-body\"\n      *ngIf=\"templates$ | async as templates\"\n    >\n      <div *ngIf=\"consents$ | async as consents\">\n        <div\n          class=\"cx-dialog-row col-sm-12 col-md-6\"\n          *ngFor=\"let template of templates\"\n        >\n          <cx-consent-management-form\n            [consentTemplate]=\"template\"\n            [requiredConsents]=\"requiredConsents\"\n            [consent]=\"getCorrespondingConsent(template, consents)\"\n            [isAnonymousConsentsEnabled]=\"true\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentDialogComponent.ctorParameters = () => [
    { type: AnonymousConsentsConfig },
    { type: ModalService },
    { type: AnonymousConsentsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.subscriptions;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.showLegalDescription;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.iconTypes;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.requiredConsents;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.loading$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.templates$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.consents$;
    /** @type {?} */
    AnonymousConsentDialogComponent.prototype.isLevel13;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentDialogComponent.prototype.anonymousConsentsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnonymousConsentManagementBannerComponent {
    /**
     * @param {?} modalService
     * @param {?} anonymousConsentsService
     */
    constructor(modalService, anonymousConsentsService) {
        this.modalService = modalService;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscriptions = new Subscription();
        this.bannerVisible$ = this.anonymousConsentsService.isBannerVisible();
    }
    /**
     * @return {?}
     */
    viewDetails() {
        this.hideBanner();
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    }
    /**
     * @return {?}
     */
    allowAll() {
        this.subscriptions.add(this.anonymousConsentsService
            .giveAllConsents()
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.hideBanner())))
            .subscribe());
    }
    /**
     * @return {?}
     */
    hideBanner() {
        this.anonymousConsentsService.toggleBannerDismissed(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AnonymousConsentManagementBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-management-banner',
                template: "<ng-container *ngIf=\"bannerVisible$ | async as bannerVisible\">\n  <div\n    [ngClass]=\"{ 'anonymous-consent-banner-hidden': !bannerVisible }\"\n    class=\"anonymous-consent-banner\"\n  >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-xs-12\">\n          <div class=\"cx-banner-title\">\n            {{ 'anonymousConsents.banner.title' | cxTranslate }}\n          </div>\n          <div class=\"cx-banner-description\">\n            {{ 'anonymousConsents.banner.description' | cxTranslate }}\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-xs-12 cx-banner-buttons\">\n          <button class=\"btn btn-action\" (click)=\"viewDetails()\">\n            {{ 'anonymousConsents.banner.viewDetails' | cxTranslate }}\n          </button>\n          <button class=\"btn btn-primary\" (click)=\"allowAll()\">\n            {{ 'anonymousConsents.banner.allowAll' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentManagementBannerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: AnonymousConsentsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentManagementBannerComponent.prototype.subscriptions;
    /** @type {?} */
    AnonymousConsentManagementBannerComponent.prototype.bannerVisible$;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentManagementBannerComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    AnonymousConsentManagementBannerComponent.prototype.anonymousConsentsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CardAction() { }
if (false) {
    /** @type {?} */
    CardAction.prototype.event;
    /** @type {?} */
    CardAction.prototype.name;
}
/**
 * @record
 */
function CardLinkAction() { }
if (false) {
    /** @type {?} */
    CardLinkAction.prototype.link;
    /** @type {?} */
    CardLinkAction.prototype.name;
}
/**
 * @record
 */
function Card() { }
if (false) {
    /** @type {?|undefined} */
    Card.prototype.header;
    /** @type {?|undefined} */
    Card.prototype.title;
    /** @type {?|undefined} */
    Card.prototype.textBold;
    /** @type {?|undefined} */
    Card.prototype.text;
    /** @type {?|undefined} */
    Card.prototype.img;
    /** @type {?|undefined} */
    Card.prototype.actions;
    /** @type {?|undefined} */
    Card.prototype.deleteMsg;
}
class CardComponent {
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
    /**
     * @return {?}
     */
    setEditMode() {
        this.editMode = true;
    }
    /**
     * @return {?}
     */
    cancelEdit() {
        this.editMode = false;
        this.cancelCard.emit(5);
    }
    /**
     * @return {?}
     */
    delete() {
        this.deleteCard.emit(1);
    }
    /**
     * @return {?}
     */
    setDefault() {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    }
    /**
     * @return {?}
     */
    send() {
        this.sendCard.emit(3);
    }
    /**
     * @return {?}
     */
    edit() {
        this.editCard.emit(4);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-card',
                template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    deleteCard: [{ type: Output }],
    setDefaultCard: [{ type: Output }],
    sendCard: [{ type: Output }],
    editCard: [{ type: Output }],
    cancelCard: [{ type: Output }],
    border: [{ type: Input }],
    editMode: [{ type: Input }],
    isDefault: [{ type: Input }],
    content: [{ type: Input }],
    fitToContainer: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.iconTypes;
    /** @type {?} */
    CardComponent.prototype.deleteCard;
    /** @type {?} */
    CardComponent.prototype.setDefaultCard;
    /** @type {?} */
    CardComponent.prototype.sendCard;
    /** @type {?} */
    CardComponent.prototype.editCard;
    /** @type {?} */
    CardComponent.prototype.cancelCard;
    /** @type {?} */
    CardComponent.prototype.border;
    /** @type {?} */
    CardComponent.prototype.editMode;
    /** @type {?} */
    CardComponent.prototype.isDefault;
    /** @type {?} */
    CardComponent.prototype.content;
    /** @type {?} */
    CardComponent.prototype.fitToContainer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, I18nModule, IconModule],
                declarations: [CardComponent],
                exports: [CardComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselService {
    /**
     * @param {?} winRef
     */
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
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    getItemsPerSlide(nativeElement, itemWidth) {
        return this.winRef.resize$.pipe(map((/**
         * @return {?}
         */
        () => ((/** @type {?} */ (nativeElement))).clientWidth)), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        totalWidth => this.calculateItems(totalWidth, itemWidth))));
    }
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @private
     * @param {?} availableWidth The available width in pixels for the carousel items.
     * @param {?} itemWidth The width per carousel item, in px or percentage.
     * @return {?}
     */
    calculateItems(availableWidth, itemWidth) {
        /** @type {?} */
        let calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            /** @type {?} */
            const num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / (/** @type {?} */ (((/** @type {?} */ (num)))));
        }
        if (itemWidth.endsWith('%')) {
            /** @type {?} */
            const perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * ((/** @type {?} */ (((/** @type {?} */ (perc))))) / 100));
        }
        return Math.floor(calculatedItems) || 1;
    }
}
CarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CarouselService.ctorParameters = () => [
    { type: WindowRef }
];
/** @nocollapse */ CarouselService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(ɵɵinject(WindowRef)); }, token: CarouselService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CarouselService.prototype.winRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class CarouselComponent {
    /**
     * @param {?} el
     * @param {?} service
     */
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
    /**
     * @param {?} inputItems
     * @return {?}
     */
    set setItems(inputItems) {
        this.items = inputItems;
        //Reset slider when changing products
        this.activeSlide = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap((/**
         * @return {?}
         */
        () => (this.activeSlide = 0))));
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-carousel',
                template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"0\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"0\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: CarouselService }
];
CarouselComponent.propDecorators = {
    title: [{ type: Input }],
    setItems: [{ type: Input, args: ['items',] }],
    template: [{ type: Input }],
    itemWidth: [{ type: Input }],
    hideIndicators: [{ type: Input }],
    indicatorIcon: [{ type: Input }],
    previousIcon: [{ type: Input }],
    nextIcon: [{ type: Input }]
};
if (false) {
    /**
     * The title is rendered as the carousel heading.
     * @type {?}
     */
    CarouselComponent.prototype.title;
    /**
     * The items$ represent the carousel items. The items$ are
     * observables so that the items can be loaded on demand.
     * @type {?}
     */
    CarouselComponent.prototype.items;
    /**
     * The template is rendered for each item, so that the actual
     * view can be given by the compoent that uses the `CarouselComponent`.
     * @type {?}
     */
    CarouselComponent.prototype.template;
    /**
     * Specifies the minimum size of the carousel item, either in px or %.
     * This value is used for the calculation of numbers per carousel, so that
     * the number of carousel items is dynamic. The calculation uses the `itemWidth`
     * and the host element `clientWidth`, so that the carousel is reusable in
     * different layouts (for example in a 50% grid).
     * @type {?}
     */
    CarouselComponent.prototype.itemWidth;
    /**
     * Indicates whether the visual indicators are used.
     * @type {?}
     */
    CarouselComponent.prototype.hideIndicators;
    /** @type {?} */
    CarouselComponent.prototype.indicatorIcon;
    /** @type {?} */
    CarouselComponent.prototype.previousIcon;
    /** @type {?} */
    CarouselComponent.prototype.nextIcon;
    /** @type {?} */
    CarouselComponent.prototype.activeSlide;
    /** @type {?} */
    CarouselComponent.prototype.size$;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const BREAKPOINT = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
class LayoutConfig {
}
if (false) {
    /**
     * The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints.
     * @type {?}
     */
    LayoutConfig.prototype.breakpoints;
    /** @type {?} */
    LayoutConfig.prototype.layoutSlots;
    /**
     * Deferrred loading is a technique to hold of with the loading / creation
     * of DOM elements which are not not in the initial view port.
     * This technique wil increase performance.
     * @type {?}
     */
    LayoutConfig.prototype.deferredLoading;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_BREAKPOINTS = {
    [BREAKPOINT.xs]: 576,
    [BREAKPOINT.sm]: 768,
    [BREAKPOINT.md]: 992,
    [BREAKPOINT.lg]: 1200,
};
class BreakpointService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
    constructor(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    getSize(breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    }
    /**
     * @return {?}
     */
    get breakpoint$() {
        if (!this.window) {
            return of(BREAKPOINT.xs);
        }
        return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map((/**
         * @param {?} event
         * @return {?}
         */
        event => this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth))), distinctUntilChanged());
    }
    /**
     * @return {?}
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
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    getBreakpoint(windowWidth) {
        /** @type {?} */
        const breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    }
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    getClosest(windowWidth) {
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find((/**
             * @param {?} br
             * @return {?}
             */
            br => windowWidth >= this.getSize(br)));
    }
    /**
     * @return {?}
     */
    get window() {
        return this.winRef.nativeWindow;
    }
}
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BreakpointService.ctorParameters = () => [
    { type: WindowRef },
    { type: LayoutConfig }
];
/** @nocollapse */ BreakpointService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(ɵɵinject(WindowRef), ɵɵinject(LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreakpointService.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    BreakpointService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * the default format is used for browsers that do not support
 * @type {?}
 */
const DEFAULT_MEDIA_FORMAT = 'tablet';
class MediaService {
    /**
     * @param {?} config
     * @param {?} breakpointService
     */
    constructor(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @param {?} container
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    getMedia(container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    }
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    getMainImage(media, format) {
        if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media && media.url) {
            return this.getImageUrl(media.url);
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
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
     * @private
     * @param {?} media
     * @return {?}
     */
    getSrcSet(media) {
        if (!media) {
            return undefined;
        }
        /** @type {?} */
        const srcset = this.mediaFormats.reduce((/**
         * @param {?} set
         * @param {?} format
         * @return {?}
         */
        (set, format) => {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += `${this.getImageUrl(media[format.code].url)} ${format.threshold}w`;
            }
            return set;
        }), '');
        return srcset === '' ? undefined : srcset;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getImageUrl(url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    }
    /**
     * @private
     * @return {?}
     */
    getBaseUrl() {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    }
}
MediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MediaService.ctorParameters = () => [
    { type: OccConfig },
    { type: BreakpointService }
];
/** @nocollapse */ MediaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(ɵɵinject(OccConfig), ɵɵinject(BreakpointService)); }, token: MediaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MediaService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    MediaService.prototype.breakpointService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaComponent {
    /**
     * @param {?} mediaService
     */
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
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.create();
    }
    /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    create() {
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
            this.handleMissing();
        }
    }
    /**
     * This handler is called from the UI when the image is loaded.
     * @return {?}
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
     * @return {?}
     */
    errorHandler() {
        this.handleMissing();
    }
    /**
     * @private
     * @return {?}
     */
    handleMissing() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-media',
                template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MediaComponent.ctorParameters = () => [
    { type: MediaService }
];
MediaComponent.propDecorators = {
    container: [{ type: Input }],
    format: [{ type: Input }],
    alt: [{ type: Input }],
    loaded: [{ type: Output }],
    isInitialized: [{ type: HostBinding, args: ['class.is-initialized',] }],
    isLoading: [{ type: HostBinding, args: ['class.is-loading',] }],
    isMissing: [{ type: HostBinding, args: ['class.is-missing',] }]
};
if (false) {
    /**
     * The media container can hold multiple media items, so that
     * a specific media (by format) can be used or multiple media
     * can be provided in a `srcset` so the browser will figure out
     * the best media for the device.
     * @type {?}
     */
    MediaComponent.prototype.container;
    /**
     * if a media format is given, a media for the given format will be rendered
     * @type {?}
     */
    MediaComponent.prototype.format;
    /**
     * A specific alt text for an image, which overrules the alt text
     * from the container data.
     * @type {?}
     */
    MediaComponent.prototype.alt;
    /**
     * Once the media is loaded, we emit an event.
     * @type {?}
     */
    MediaComponent.prototype.loaded;
    /**
     * The media contains the info for the UI to create the image. This media
     * object might contain more info once other media types (i.e. video) is supported.
     * @type {?}
     */
    MediaComponent.prototype.media;
    /**
     * The `cx-media` component has an `is-initialized` class as long as the
     * media is being initialized.
     * @type {?}
     */
    MediaComponent.prototype.isInitialized;
    /**
     * The `cx-media` component has a `is-loading` class as long as the
     * media is loaded. Wehn the media is loaded, the `is-initialized` class
     * is added.
     * @type {?}
     */
    MediaComponent.prototype.isLoading;
    /**
     * When there's no media provided for the content, or in case an error
     * happened during loading, we add the `is-missing` class. Visual effects
     * can be controlled by CSS.
     * @type {?}
     */
    MediaComponent.prototype.isMissing;
    /**
     * @type {?}
     * @protected
     */
    MediaComponent.prototype.mediaService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediaModule {
}
MediaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MediaComponent],
                exports: [MediaComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
}
CarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
                declarations: [CarouselComponent],
                exports: [CarouselComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ItemCounterComponent)),
    multi: true,
};
class ItemCounterComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.value = 0;
        this.step = 1;
        this.async = false;
        this.cartIsLoading = false;
        this.isValueChangeable = false;
        this.update = new EventEmitter();
        this.isValueOutOfRange = false;
        this.inputValue = new FormControl({
            disabled: this.isValueChangeable,
        });
        this.onTouch = (/**
         * @return {?}
         */
        () => { });
        this.onModelChange = (/**
         * @param {?} _rating
         * @return {?}
         */
        (_rating) => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.writeValue(this.min || 0);
        this.subscription = this.inputValue.valueChanges
            .pipe(debounceTime(300))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.manualChange(Number(value));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.cartIsLoading) {
            this.inputValue.disable({
                onlySelf: true,
                emitEvent: false,
            });
        }
        else {
            this.inputValue.enable({
                onlySelf: true,
                emitEvent: false,
            });
        }
    }
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    adjustValueInRange(incomingValue) {
        return incomingValue < this.min || !this.min
            ? this.min
            : incomingValue > this.max || !this.max
                ? this.max
                : incomingValue;
    }
    /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    manualChange(newValue) {
        newValue = this.adjustValueInRange(newValue);
        this.updateValue(newValue);
        /* We use the value from the input, however, this value
          is not the correct value that should be displayed. The correct value to display
          is this.value, which the parent updates if the async call succeed. If the call
          fails, then the input will need to display this.value, and not what the user
          recently typed in */
        this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const handlers = {
            ArrowDown: (/**
             * @return {?}
             */
            () => this.decrement()),
            ArrowUp: (/**
             * @return {?}
             */
            () => this.increment()),
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }
    /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    increment() {
        this.manualChange(this.value + this.step);
        this.setFocus(true);
    }
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    decrement() {
        this.manualChange(this.value - this.step);
        this.setFocus(false);
    }
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value || this.min || 0;
        this.onModelChange(this.value);
    }
    /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateValue(updatedQuantity) {
        if (!this.async) {
            // If the async flag is true, then the parent component is responsible for updating the form
            this.writeValue(updatedQuantity);
        }
        // Additionally, we emit a change event, so that users may optionally do something on change
        this.update.emit(updatedQuantity);
        this.onTouch();
    }
    /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    setFocus(isIncremented) {
        if (this.isMaxOrMinValueOrBeyond()) {
            this.input.nativeElement.focus();
        }
        else if (isIncremented) {
            this.incrementBtn.nativeElement.focus();
        }
        else {
            this.decrementBtn.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    isMaxOrMinValueOrBeyond() {
        return this.value >= this.max || this.value <= this.min;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-item-counter',
                template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n      *ngIf=\"isValueChangeable\"\n    >\n      -\n    </button>\n\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n      *ngIf=\"isValueChangeable\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                providers: [COUNTER_CONTROL_ACCESSOR]
            }] }
];
/** @nocollapse */
ItemCounterComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ItemCounterComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['itemCounterInput', { static: false },] }],
    incrementBtn: [{ type: ViewChild, args: ['incrementBtn', { static: false },] }],
    decrementBtn: [{ type: ViewChild, args: ['decrementBtn', { static: false },] }],
    value: [{ type: Input }],
    step: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    async: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    isValueChangeable: [{ type: Input }],
    update: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ItemCounterComponent.prototype.input;
    /** @type {?} */
    ItemCounterComponent.prototype.incrementBtn;
    /** @type {?} */
    ItemCounterComponent.prototype.decrementBtn;
    /** @type {?} */
    ItemCounterComponent.prototype.value;
    /** @type {?} */
    ItemCounterComponent.prototype.step;
    /** @type {?} */
    ItemCounterComponent.prototype.min;
    /** @type {?} */
    ItemCounterComponent.prototype.max;
    /** @type {?} */
    ItemCounterComponent.prototype.async;
    /** @type {?} */
    ItemCounterComponent.prototype.cartIsLoading;
    /** @type {?} */
    ItemCounterComponent.prototype.isValueChangeable;
    /** @type {?} */
    ItemCounterComponent.prototype.update;
    /** @type {?} */
    ItemCounterComponent.prototype.focus;
    /** @type {?} */
    ItemCounterComponent.prototype.isValueOutOfRange;
    /** @type {?} */
    ItemCounterComponent.prototype.inputValue;
    /** @type {?} */
    ItemCounterComponent.prototype.subscription;
    /** @type {?} */
    ItemCounterComponent.prototype.onTouch;
    /** @type {?} */
    ItemCounterComponent.prototype.onModelChange;
    /**
     * @type {?}
     * @private
     */
    ItemCounterComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OnlyNumberDirective {
    /**
     * Class constructor
     * @param {?} hostElement
     * @param {?} renderer
     */
    constructor(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.previousValue = '';
        this.integerUnsigned = '^[0-9]*$';
    }
    /**
     * Event handler for host's change event
     * @return {?}
     */
    onChange() {
        this.validateValue(this.hostElement.nativeElement.value);
    }
    /**
     * Event handler for host's change event
     * @return {?}
     */
    onInput() {
        this.validateValue(this.hostElement.nativeElement.value);
    }
    /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    onPaste(e) {
        /** @type {?} */
        const value = e.clipboardData.getData('text/plain');
        this.validateValue(value);
        e.preventDefault();
    }
    /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    onKeyUp(e) {
        /** @type {?} */
        const value = e.target['value'];
        this.validateValue(value);
    }
    /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const originalValue = e.target['value'];
        /** @type {?} */
        const key = this.getName(e);
        /** @type {?} */
        const controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        // allowed keys apart from numeric characters
        /** @type {?} */
        const allowedKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'Escape',
            'Tab',
        ];
        // allow some non-numeric characters
        if (allowedKeys.includes(key) ||
            // Allow: Ctrl+A and Command+A
            (key === 'a' && controlOrCommand) ||
            // Allow: Ctrl+C and Command+C
            (key === 'c' && controlOrCommand) ||
            // Allow: Ctrl+V and Command+V
            (key === 'v' && controlOrCommand) ||
            // Allow: Ctrl+X and Command+X
            (key === 'x' && controlOrCommand)) {
            // let it happen, don't do anything
            return;
        }
        // save value before keydown event
        this.previousValue = originalValue;
        // allow number characters only
        /** @type {?} */
        const isNumber = new RegExp(this.integerUnsigned).test(key);
        if (isNumber) {
            return;
        }
        else {
            e.preventDefault();
        }
    }
    /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    validateValue(value) {
        value = value.replace(/[^0-9]+/g, '');
        this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
    }
    /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    getName(e) {
        return e.key;
    }
}
OnlyNumberDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOnlyNumber]',
            },] }
];
/** @nocollapse */
OnlyNumberDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
OnlyNumberDirective.propDecorators = {
    onChange: [{ type: HostListener, args: ['change',] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    OnlyNumberDirective.prototype.previousValue;
    /** @type {?} */
    OnlyNumberDirective.prototype.integerUnsigned;
    /**
     * @type {?}
     * @private
     */
    OnlyNumberDirective.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    OnlyNumberDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OnlyNumberDirectiveModule {
}
OnlyNumberDirectiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OnlyNumberDirective],
                exports: [OnlyNumberDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemCounterModule {
}
ItemCounterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    OnlyNumberDirectiveModule,
                ],
                declarations: [ItemCounterComponent],
                exports: [ItemCounterComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
class GenericLinkComponent {
    constructor() {
        this.protocolRegex = /^https?:\/\//i;
    }
    /**
     * @return {?}
     */
    get rel() {
        return this.target === '_blank' ? 'noopener' : null;
    }
    /**
     * @return {?}
     */
    get routerUrl() {
        if (typeof this.url === 'string') {
            return [this.getAbsoluteUrl(this.url)];
        }
        return this.url;
    }
    /**
     * @return {?}
     */
    isExternalUrl() {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    }
}
GenericLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-generic-link',
                template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
            }] }
];
GenericLinkComponent.propDecorators = {
    url: [{ type: Input }],
    target: [{ type: Input }],
    class: [{ type: Input }],
    id: [{ type: Input }],
    style: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    GenericLinkComponent.prototype.protocolRegex;
    /** @type {?} */
    GenericLinkComponent.prototype.url;
    /** @type {?} */
    GenericLinkComponent.prototype.target;
    /** @type {?} */
    GenericLinkComponent.prototype.class;
    /** @type {?} */
    GenericLinkComponent.prototype.id;
    /** @type {?} */
    GenericLinkComponent.prototype.style;
    /** @type {?} */
    GenericLinkComponent.prototype.title;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GenericLinkModule {
}
GenericLinkModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                declarations: [GenericLinkComponent],
                exports: [GenericLinkComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGE_FIRST = 1;
/** @type {?} */
const PAGE_WINDOW_SIZE = 3;
class PaginationComponent {
    constructor() {
        this.hideOnSinglePage = false;
        this.viewPageEvent = new EventEmitter();
    }
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    /**
     * @private
     * @return {?}
     */
    getCurrentPageNumber() {
        return this.pagination.currentPage + 1;
    }
    /**
     * @return {?}
     */
    getPagePrevious() {
        return this.getCurrentPageNumber() - 1;
    }
    /**
     * @return {?}
     */
    getPageNext() {
        return this.getCurrentPageNumber() + 1;
    }
    /**
     * @return {?}
     */
    getPageIndicies() {
        return Array(this.pagination.totalPages);
    }
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    getPageWindowMinIndex() {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE);
    }
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    getPageWindowMaxIndex() {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE +
            2);
    }
    /**
     * @return {?}
     */
    hasPages() {
        return this.pagination.totalPages > 0;
    }
    /**
     * @return {?}
     */
    onFirstPage() {
        return this.pagination.currentPage === 0;
    }
    /**
     * @return {?}
     */
    onLastPage() {
        return this.pagination.currentPage === this.pagination.totalPages - 1;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndex(index) {
        return this.pagination.currentPage === index;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hidePageIndex(index) {
        return ((this.getPageWindowMinIndex() > index ||
            this.getPageWindowMaxIndex() < index) &&
            (index > 0 && index < this.pagination.totalPages - 1));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showDots(index) {
        return (this.hidePageIndex(index) &&
            (index === this.getPageWindowMaxIndex() + 1 ||
                index === this.getPageWindowMinIndex() - 1));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    clickPageNo(page) {
        // Change page on valid index
        if (page >= PAGE_FIRST &&
            page <= this.pagination.totalPages &&
            page !== this.getCurrentPageNumber()) {
            this.pageChange(page);
            return page;
        }
        // Page stays the same on invalid index
        return this.pagination.currentPage;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.viewPageEvent.emit(page - 1);
    }
    /**
     * @return {?}
     */
    showPagination() {
        return !(this.hideOnSinglePage && this.pagination.totalPages <= 1);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-pagination',
                template: "<ul class=\"pagination\" *ngIf=\"showPagination()\">\n  <!-- Previous -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onFirstPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPagePrevious())\">\u00AB</a>\n  </li>\n\n  <!-- Page Index -->\n  <li\n    class=\"page-item\"\n    *ngFor=\"let page of getPageIndicies(); let i = index\"\n    [ngClass]=\"{ active: onPageIndex(i), disabled: showDots(i) }\"\n  >\n    <a class=\"page-link\" *ngIf=\"showDots(i)\">...</a>\n    <a\n      class=\"page-link\"\n      *ngIf=\"!hidePageIndex(i)\"\n      (click)=\"clickPageNo(i + 1)\"\n      >{{ i + 1 }}</a\n    >\n  </li>\n\n  <!-- Next -->\n  <li class=\"page-item\" [ngClass]=\"{ disabled: onLastPage() || !hasPages() }\">\n    <a class=\"page-link\" (click)=\"clickPageNo(getPageNext())\">\u00BB</a>\n  </li>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
PaginationComponent.propDecorators = {
    pagination: [{ type: Input }],
    hideOnSinglePage: [{ type: Input }],
    viewPageEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.hideOnSinglePage;
    /** @type {?} */
    PaginationComponent.prototype.viewPageEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortingComponent {
    constructor() {
        this.sortListEvent = new EventEmitter();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.sortListEvent.emit(sortCode);
    }
}
SortingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-sorting',
                template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SortingComponent.ctorParameters = () => [];
SortingComponent.propDecorators = {
    sortOptions: [{ type: Input }],
    selectedOption: [{ type: Input }],
    placeholder: [{ type: Input }],
    sortLabels: [{ type: Input }],
    sortListEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SortingComponent.prototype.sortOptions;
    /** @type {?} */
    SortingComponent.prototype.selectedOption;
    /** @type {?} */
    SortingComponent.prototype.placeholder;
    /** @type {?} */
    SortingComponent.prototype.sortLabels;
    /** @type {?} */
    SortingComponent.prototype.sortListEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListNavigationModule {
}
ListNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NgSelectModule, FormsModule],
                declarations: [PaginationComponent, SortingComponent],
                exports: [PaginationComponent, SortingComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Media() { }
if (false) {
    /** @type {?} */
    Media.prototype.src;
    /** @type {?|undefined} */
    Media.prototype.srcset;
    /** @type {?|undefined} */
    Media.prototype.alt;
}
/**
 * @record
 */
function MediaFormats() { }
if (false) {
    /** @type {?} */
    MediaFormats.prototype.code;
    /** @type {?} */
    MediaFormats.prototype.threshold;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: Improve a11y with better text appropriate to usage (example: loading cart spinner)
class SpinnerComponent {
    constructor() { }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-spinner',
                template: "<div class=\"loader-container\">\n  <div class=\"loader\">{{ 'spinner.loading' | cxTranslate }}</div>\n</div>\n"
            }] }
];
/** @nocollapse */
SpinnerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, I18nModule],
                declarations: [SpinnerComponent],
                exports: [SpinnerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageComponent {
    /**
     * @param {?} globalMessageService
     */
    constructor(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPE;
        this.messageType = GlobalMessageType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.messages$ = this.globalMessageService.get();
    }
    /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    clear(type, index) {
        this.globalMessageService.remove(type, index);
    }
}
GlobalMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-global-message',
                template: "<div *ngIf=\"messages$ | async as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
GlobalMessageComponent.ctorParameters = () => [
    { type: GlobalMessageService }
];
if (false) {
    /** @type {?} */
    GlobalMessageComponent.prototype.iconTypes;
    /** @type {?} */
    GlobalMessageComponent.prototype.messages$;
    /** @type {?} */
    GlobalMessageComponent.prototype.messageType;
    /**
     * @type {?}
     * @protected
     */
    GlobalMessageComponent.prototype.globalMessageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalMessageComponentModule {
}
GlobalMessageComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, IconModule, I18nModule],
                declarations: [GlobalMessageComponent],
                exports: [GlobalMessageComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class QualtricsConfig {
}
if (false) {
    /** @type {?} */
    QualtricsConfig.prototype.qualtrics;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QualtricsLoaderService {
    /**
     * @param {?} winRef
     * @param {?} config
     */
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
    /**
     * @private
     * @return {?}
     */
    initialize() {
        fromEvent(this.winRef.nativeWindow, 'qsi_js_loaded').subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.qualtricsLoaded$.next(true)));
    }
    /**
     * @private
     * @return {?}
     */
    setup() {
        /** @type {?} */
        const qualtricsScript = this.winRef.document.createElement('script');
        qualtricsScript.type = 'text/javascript';
        qualtricsScript.defer = true;
        qualtricsScript.src = 'assets/qualtricsIntegration.js';
        /** @type {?} */
        const idScript = this.winRef.document.createElement('div');
        idScript.id = this.config.qualtrics.projectId;
        this.winRef.document
            .getElementsByTagName('head')[0]
            .appendChild(qualtricsScript);
        this.winRef.document.getElementsByTagName('head')[0].appendChild(idScript);
    }
    /**
     * @private
     * @return {?}
     */
    isQualtricsConfigured() {
        return (Boolean(this.config.qualtrics) && Boolean(this.config.qualtrics.projectId));
    }
    /**
     * @return {?}
     */
    load() {
        return this.qualtricsLoaded$.pipe(filter((/**
         * @param {?} loaded
         * @return {?}
         */
        loaded => loaded)), switchMap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            /** @type {?} */
            const qsi = this.winRef.nativeWindow['QSI'];
            return this.isDataLoaded().pipe(distinctUntilChanged(), tap((/**
             * @param {?} dataLoaded
             * @return {?}
             */
            dataLoaded => {
                if (dataLoaded) {
                    qsi.API.unload();
                    qsi.API.load().done(qsi.API.run());
                }
            })));
        })));
    }
    /**
     * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data
     * If client(s) does not extend this service to override this implementation, it returns true
     * Return false otherwise.
     * @protected
     * @return {?}
     */
    isDataLoaded() {
        return of(true);
    }
}
QualtricsLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
QualtricsLoaderService.ctorParameters = () => [
    { type: WindowRef },
    { type: QualtricsConfig }
];
/** @nocollapse */ QualtricsLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function QualtricsLoaderService_Factory() { return new QualtricsLoaderService(ɵɵinject(WindowRef), ɵɵinject(QualtricsConfig)); }, token: QualtricsLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    QualtricsLoaderService.prototype.qualtricsLoaded$;
    /**
     * @type {?}
     * @private
     */
    QualtricsLoaderService.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    QualtricsLoaderService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QualtricsComponent {
    /**
     * @param {?} qualtricsLoader
     */
    constructor(qualtricsLoader) {
        this.qualtricsLoader = qualtricsLoader;
        this.qualtricsEnabled$ = this.qualtricsLoader.load();
    }
}
QualtricsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-qualtrics',
                template: `
    <ng-container *ngIf="qualtricsEnabled$ | async"></ng-container>
  `
            }] }
];
/** @nocollapse */
QualtricsComponent.ctorParameters = () => [
    { type: QualtricsLoaderService }
];
if (false) {
    /** @type {?} */
    QualtricsComponent.prototype.qualtricsEnabled$;
    /**
     * @type {?}
     * @private
     */
    QualtricsComponent.prototype.qualtricsLoader;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultQualtricsConfig = {
    qualtrics: {},
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QualtricsModule {
}
QualtricsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            QualtricsComponent: {
                                component: QualtricsComponent,
                            },
                        },
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LanguageCurrencyComponent {
}
LanguageCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-language-currency-selector',
                template: `
    <cx-site-context-selector context="language"></cx-site-context-selector>
    <cx-site-context-selector context="currency"></cx-site-context-selector>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class CmsComponentData {
}
if (false) {
    /** @type {?} */
    CmsComponentData.prototype.uid;
    /** @type {?} */
    CmsComponentData.prototype.data$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LABELS = {
    [LANGUAGE_CONTEXT_ID]: 'Language',
    [CURRENCY_CONTEXT_ID]: 'Currency',
};
class SiteContextComponentService {
    /**
     * @param {?} componentData
     * @param {?} contextServiceMap
     * @param {?} injector
     */
    constructor(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getItems(context) {
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        (service) => service.getAll())), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => this.getContext(context).pipe(switchMap((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => {
            /** @type {?} */
            const itemsCopy = [];
            for (const item of items) {
                itemsCopy.push(Object.assign({}, item, { label: this.getOptionLabel(item, ctx) }));
            }
            return of(itemsCopy);
        }))))));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getActiveItem(context) {
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        (service) => service.getActive())));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getLabel(context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => {
            return LABELS[ctx];
        })));
    }
    /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe((/**
         * @param {?} service
         * @return {?}
         */
        service => {
            service.setActive(value);
        }));
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getService(context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        (ctx) => this.getInjectedService(ctx))), filter((/**
         * @param {?} s
         * @return {?}
         */
        s => !!s)));
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getContext(context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => data.context)), map((/**
             * @param {?} ctx
             * @return {?}
             */
            ctx => {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            })));
        }
    }
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    getInjectedService(context) {
        return this.injector.get(this.contextServiceMap[context], null);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
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
}
SiteContextComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ContextServiceMap },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SiteContextComponentService.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    SiteContextComponentService.prototype.contextServiceMap;
    /**
     * @type {?}
     * @protected
     */
    SiteContextComponentService.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SiteContextType = {
    LANGUAGE: 'LANGUAGE',
    CURRENCY: 'CURRENCY',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextSelectorComponent {
    /**
     * @param {?} componentService
     */
    constructor(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    get items$() {
        return this.componentService.getItems(this.context);
    }
    /**
     * @return {?}
     */
    get activeItem$() {
        return this.componentService.getActiveItem(this.context);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this.componentService.setActive(value, this.context);
    }
    /**
     * @return {?}
     */
    get label$() {
        return this.componentService.getLabel(this.context);
    }
}
SiteContextSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-site-context-selector',
                template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SiteContextSelectorComponent.ctorParameters = () => [
    { type: SiteContextComponentService }
];
SiteContextSelectorComponent.propDecorators = {
    context: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SiteContextSelectorComponent.prototype.siteContextService;
    /** @type {?} */
    SiteContextSelectorComponent.prototype.iconTypes;
    /**
     * the context type can be set as an input. If the context is
     * not given, the context will be loaded from the backend.
     * @type {?}
     */
    SiteContextSelectorComponent.prototype.context;
    /**
     * @type {?}
     * @private
     */
    SiteContextSelectorComponent.prototype.componentService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SiteContextSelectorModule {
}
SiteContextSelectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                    SiteContextModule,
                    IconModule,
                ],
                providers: [SiteContextComponentService],
                declarations: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                entryComponents: [SiteContextSelectorComponent, LanguageCurrencyComponent],
                exports: [SiteContextSelectorComponent, LanguageCurrencyComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StarRatingComponent {
    /**
     * @param {?} el
     * @param {?=} renderer
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setRate(this.rating, true);
    }
    /**
     * @param {?} value
     * @param {?=} force
     * @return {?}
     */
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
    /**
     * @param {?} rating
     * @return {?}
     */
    saveRate(rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-star-rating',
                template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
StarRatingComponent.propDecorators = {
    disabled: [{ type: Input }, { type: HostBinding, args: ['attr.disabled',] }],
    rating: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /**
     * The rating component can be used in disabled mode,
     * so that the interation is not provided.
     * @type {?}
     */
    StarRatingComponent.prototype.disabled;
    /**
     * The rating will be used to render some colorful stars in the UI.
     * @type {?}
     */
    StarRatingComponent.prototype.rating;
    /**
     * Emits the given rating when the user clicks on a star.
     * @type {?}
     */
    StarRatingComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    StarRatingComponent.prototype.initialRate;
    /** @type {?} */
    StarRatingComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @protected
     */
    StarRatingComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    StarRatingComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StarRatingModule {
}
StarRatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IconModule],
                declarations: [StarRatingComponent],
                exports: [StarRatingComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ViewConfig {
}
if (false) {
    /** @type {?} */
    ViewConfig.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ViewConfigModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ViewConfigModule,
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
}
ViewConfigModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoFocusDirective {
    /**
     * @param {?} hostElement
     */
    constructor(hostElement) {
        this.hostElement = hostElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.hostElement.nativeElement.focus();
    }
}
AutoFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxAutoFocus]',
            },] }
];
/** @nocollapse */
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AutoFocusDirective.prototype.hostElement;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoFocusDirectiveModule {
}
AutoFocusDirectiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AutoFocusDirective],
                exports: [AutoFocusDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * @param {?} form Form with fields to check
     * @param {?} formControlName Name of the form field to check
     * @param {?} submitted Has the form been submitted
     * @return {?}
     */
    static isNotValidField(form, formControlName, submitted) {
        /** @type {?} */
        const control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomFormValidators {
    /**
     * @param {?} control
     * @return {?}
     */
    static emailDomainValidator(control) {
        /** @type {?} */
        const email = (/** @type {?} */ (control.value));
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static emailValidator(control) {
        /** @type {?} */
        const email = (/** @type {?} */ (control.value));
        return email.match(EMAIL_PATTERN) ? null : { InvalidEmail: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static passwordValidator(control) {
        /** @type {?} */
        const password = (/** @type {?} */ (control.value));
        return password.match(PASSWORD_PATTERN) ? null : { InvalidPassword: true };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static matchPassword(control) {
        if (control.get('password').value !== control.get('passwordconf').value) {
            return { NotEqual: true };
        }
        return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const titleScores = {
    mr: 1,
    mrs: 2,
    miss: 3,
    ms: 4,
    dr: 5,
    rev: 6,
};
/**
 * @param {?} title1
 * @param {?} title2
 * @return {?}
 */
function sortTitles(title1, title2) {
    if (!titleScores[title1.code] || !titleScores[title2.code]) {
        return 1;
    }
    else {
        return titleScores[title1.code] - titleScores[title2.code];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnonymousConsentOpenDialogComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.modalService.open(AnonymousConsentDialogComponent, {
            centered: true,
            size: 'lg',
        });
    }
}
AnonymousConsentOpenDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-anonymous-consent-open-dialog',
                template: "<div class=\"anonymous-consents\">\n  <button class=\"btn btn-link\" (click)=\"openDialog()\">\n    {{ 'anonymousConsents.preferences' | cxTranslate }}\n  </button>\n</div>\n"
            }] }
];
/** @nocollapse */
AnonymousConsentOpenDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AnonymousConsentOpenDialogComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnonymousConsentManagementBannerModule {
}
AnonymousConsentManagementBannerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    FeaturesConfigModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AnonymousConsentManagementBannerComponent: {
                                component: AnonymousConsentManagementBannerComponent,
                                deferLoading: DeferLoadingStrategy.INSTANT,
                            },
                            AnonymousConsentOpenDialogComponent: {
                                component: AnonymousConsentOpenDialogComponent,
                            },
                        },
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Please don't put that service in public API.
 *
 */
class CmsMappingService {
    /**
     * @param {?} config
     * @param {?} platformId
     */
    constructor(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @param {?} flexType
     * @return {?}
     */
    isComponentEnabled(flexType) {
        /** @type {?} */
        const isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        const isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getRoutesForComponents(componentTypes) {
        /** @type {?} */
        const routes = [];
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                routes.push(...this.getRoutesForComponent(componentType));
            }
        }
        return routes;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getGuardsForComponents(componentTypes) {
        /** @type {?} */
        const guards = new Set();
        for (const componentType of componentTypes) {
            this.getGuardsForComponent(componentType).forEach((/**
             * @param {?} guard
             * @return {?}
             */
            guard => guards.add(guard)));
        }
        return Array.from(guards);
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    getI18nKeysForComponents(componentTypes) {
        /** @type {?} */
        const i18nKeys = new Set();
        for (const componentType of componentTypes) {
            if (this.isComponentEnabled(componentType)) {
                this.getI18nKeysForComponent(componentType).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => i18nKeys.add(key)));
            }
        }
        return Array.from(i18nKeys);
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getRoutesForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getGuardsForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    }
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getI18nKeysForComponent(componentType) {
        /** @type {?} */
        const mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    }
}
CmsMappingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsMappingService.ctorParameters = () => [
    { type: CmsConfig },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ CmsMappingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(ɵɵinject(CmsConfig), ɵɵinject(PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsMappingService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CmsMappingService.prototype.platformId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Please don't put that service in public API.
 *
 */
class CmsGuardsService {
    /**
     * @param {?} cmsMapping
     * @param {?} injector
     */
    constructor(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    cmsPageCanActivate(componentTypes, route, state) {
        /** @type {?} */
        const guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            /** @type {?} */
            const canActivateObservables = guards.map((/**
             * @param {?} guardClass
             * @return {?}
             */
            guardClass => {
                /** @type {?} */
                const guard = this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            }));
            return concat(...canActivateObservables).pipe(skipWhile((/**
             * @param {?} canActivate
             * @return {?}
             */
            (canActivate) => canActivate === true)), endWith(true), first());
        }
        else {
            return of(true);
        }
    }
}
CmsGuardsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsGuardsService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: Injector }
];
/** @nocollapse */ CmsGuardsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(ɵɵinject(CmsMappingService), ɵɵinject(INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsGuardsService.prototype.cmsMapping;
    /**
     * @type {?}
     * @private
     */
    CmsGuardsService.prototype.injector;
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return from(Promise.resolve(value));
    }
    return of(value);
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
/**
 * @param {?} guard
 * @return {?}
 */
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
/**
 * @template T
 * @param {?} v
 * @return {?}
 */
function isFunction(v) {
    return typeof v === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Please don't put that service in public API.
 *
 */
class CmsI18nService {
    /**
     * @param {?} cmsMapping
     * @param {?} translation
     * @param {?} translationChunk
     */
    constructor(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    loadChunksForComponents(componentTypes) {
        /** @type {?} */
        const i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        const i18nChunks = new Set();
        for (const key of i18nKeys) {
            i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    }
}
CmsI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsI18nService.ctorParameters = () => [
    { type: CmsMappingService },
    { type: TranslationService },
    { type: TranslationChunkService }
];
/** @nocollapse */ CmsI18nService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(ɵɵinject(CmsMappingService), ɵɵinject(TranslationService), ɵɵinject(TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsI18nService.prototype.cmsMapping;
    /**
     * @type {?}
     * @private
     */
    CmsI18nService.prototype.translation;
    /**
     * @type {?}
     * @private
     */
    CmsI18nService.prototype.translationChunk;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGE_LAYOUT_HANDLER = new InjectionToken('PageLayoutHandler');
/**
 * @record
 */
function PageLayoutHandler() { }
if (false) {
    /**
     * @param {?} slots
     * @param {?=} pageTemplate
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    PageLayoutHandler.prototype.handle = function (slots, pageTemplate, section, breakpoint) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLayoutService {
    /**
     * @param {?} cms
     * @param {?} config
     * @param {?} breakpointService
     * @param {?} handlers
     */
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
    /**
     * @param {?=} section
     * @return {?}
     */
    getSlots(section) {
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([page, breakpoint]) => {
            /** @type {?} */
            const pageTemplate = page.template;
            /** @type {?} */
            const slots = this.resolveSlots(page, section, breakpoint);
            return { slots, pageTemplate, breakpoint };
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ slots, pageTemplate, breakpoint }) => {
            /** @type {?} */
            let result = of(slots);
            for (const handler of this.handlers || []) {
                result = handler.handle(result, pageTemplate, section, breakpoint);
            }
            return result;
        })), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a.length !== b.length) {
                return false;
            }
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        })));
    }
    /**
     * Returns an observable with the last page slot above-the-fold
     * for the given pageTemplate / breakpoint.
     *
     * The page fold is configurable in the `LayoutConfig` for each page layout.
     * @param {?} pageTemplate
     * @return {?}
     */
    getPageFoldSlot(pageTemplate) {
        return this.breakpointService.breakpoint$.pipe(map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        breakpoint => {
            /** @type {?} */
            const pageTemplateConfig = this.config.layoutSlots[pageTemplate];
            /** @type {?} */
            const config = this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), 'pageFold', breakpoint);
            return config ? config.pageFold : null;
        })));
    }
    /**
     * @private
     * @param {?} page
     * @param {?} section
     * @param {?} breakpoint
     * @return {?}
     */
    resolveSlots(page, section, breakpoint) {
        /** @type {?} */
        const config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            /** @type {?} */
            const pageSlots = Object.keys(page.slots);
            return config.slots.filter((/**
             * @param {?} slot
             * @return {?}
             */
            slot => pageSlots.includes(slot)));
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
    /**
     * @return {?}
     */
    get page$() {
        return this.cms.getCurrentPage().pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        page => !!page)));
    }
    /**
     * @return {?}
     */
    get templateName$() {
        return this.page$.pipe(filter((/**
         * @param {?} page
         * @return {?}
         */
        page => !!page.template)), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => page.template)));
    }
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    getSlotConfig(templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        /** @type {?} */
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), configAttribute, breakpoint);
        }
    }
    /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    getSlotConfigForSection(templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        const pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        /** @type {?} */
        const sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        /** @type {?} */
        const responsiveConfig = this.getResponsiveSlotConfig((/** @type {?} */ (sectionConfig)), configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return (/** @type {?} */ (this.config.layoutSlots[section]));
        }
    }
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     * @protected
     * @param {?} layoutSlotConfig
     * @param {?} configAttribute
     * @param {?=} breakpoint
     * @return {?}
     */
    getResponsiveSlotConfig(layoutSlotConfig, configAttribute, breakpoint) {
        /** @type {?} */
        let slotConfig = (/** @type {?} */ (layoutSlotConfig));
        // fallback to default slot config
        if (!layoutSlotConfig || !breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return (/** @type {?} */ (layoutSlotConfig[breakpoint]));
        }
        // find closest config
        /** @type {?} */
        const all = this.breakpointService.breakpoints;
        for (const br of all.splice(0, all.indexOf(breakpoint))) {
            if (layoutSlotConfig[br] &&
                layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                slotConfig = (/** @type {?} */ (layoutSlotConfig[br]));
            }
        }
        return slotConfig;
    }
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     * @private
     * @param {?} page
     * @param {?=} section
     * @return {?}
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
        /** @type {?} */
        const cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn(`No layout config found for ${cacheKey}, you can configure a 'LayoutConfig' to control the rendering of page slots.`);
            this.warnLogMessages[cacheKey] = true;
        }
    }
}
PageLayoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageLayoutService.ctorParameters = () => [
    { type: CmsService },
    { type: LayoutConfig },
    { type: BreakpointService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.warnLogMessages;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.logSlots;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.cms;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.breakpointService;
    /**
     * @type {?}
     * @private
     */
    PageLayoutService.prototype.handlers;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLayoutComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} pageLayoutService
     */
    constructor(el, renderer, pageLayoutService) {
        this.el = el;
        this.renderer = renderer;
        this.pageLayoutService = pageLayoutService;
        this.section$ = new BehaviorSubject(undefined);
        this.templateName$ = this.pageLayoutService
            .templateName$;
        this.layoutName$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        section => (section ? of(section) : this.templateName$))), tap((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.styleClass = name;
        })));
        this.slots$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        section => this.pageLayoutService.getSlots(section))));
        this.pageFoldSlot$ = this.templateName$.pipe(switchMap((/**
         * @param {?} templateName
         * @return {?}
         */
        templateName => this.pageLayoutService.getPageFoldSlot(templateName))), distinctUntilChanged());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set section(value) {
        this.section$.next(value);
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    set styleClass(cls) {
        if (this.currentClass) {
            this.renderer.removeClass(this.el.nativeElement, this.currentClass);
        }
        this.renderer.addClass(this.el.nativeElement, cls);
        this.currentClass = cls;
    }
}
PageLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-layout',
                template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n    [isPageFold]=\"slot === (pageFoldSlot$ | async)\"\n  ></cx-page-slot>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: PageLayoutService }
];
PageLayoutComponent.propDecorators = {
    section: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PageLayoutComponent.prototype.section$;
    /** @type {?} */
    PageLayoutComponent.prototype.templateName$;
    /** @type {?} */
    PageLayoutComponent.prototype.layoutName$;
    /** @type {?} */
    PageLayoutComponent.prototype.slots$;
    /** @type {?} */
    PageLayoutComponent.prototype.pageFoldSlot$;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.currentClass;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PageLayoutComponent.prototype.pageLayoutService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Please don't put that service in public API.
 *
 */
class CmsRoutesService {
    /**
     * @param {?} router
     * @param {?} cmsMapping
     */
    constructor(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    cmsRouteExist(url) {
        /** @type {?} */
        const isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        /** @type {?} */
        const routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find((/**
             * @param {?} route
             * @return {?}
             */
            (route) => route.data && route.data.cxCmsRouteContext && route.path === routePath)));
    }
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param {?} pageContext
     * @param {?} componentTypes
     * @param {?} currentUrl
     * @param {?} currentPageLabel
     * @return {?}
     */
    handleCmsRoutesInGuard(pageContext, componentTypes, currentUrl, currentPageLabel) {
        /** @type {?} */
        const componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageLabel
     * @param {?} routes
     * @return {?}
     */
    updateRouting(pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            /** @type {?} */
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
}
CmsRoutesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsRoutesService.ctorParameters = () => [
    { type: Router },
    { type: CmsMappingService }
];
/** @nocollapse */ CmsRoutesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(ɵɵinject(Router), ɵɵinject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsRoutesService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CmsRoutesService.prototype.cmsMapping;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsPageGuard {
    /**
     * @param {?} routingService
     * @param {?} cmsService
     * @param {?} cmsRoutes
     * @param {?} cmsI18n
     * @param {?} cmsGuards
     * @param {?} semanticPathService
     * @param {?=} protectedRoutesGuard
     */
    constructor(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
        this.routingService = routingService;
        this.cmsService = cmsService;
        this.cmsRoutes = cmsRoutes;
        this.cmsI18n = cmsI18n;
        this.cmsGuards = cmsGuards;
        this.semanticPathService = semanticPathService;
        this.protectedRoutesGuard = protectedRoutesGuard;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        /**
         * TODO(issue:4646) Expect that `ProtectedRoutesGuard` dependency is required (remove `if` logic)
         */
        return this.protectedRoutesGuard
            ? this.protectedRoutesGuard
                .canActivate(route)
                .pipe(switchMap((/**
             * @param {?} result
             * @return {?}
             */
            result => result ? this.getCmsPage(route, state) : of(result))))
            : this.getCmsPage(route, state);
    }
    /**
     * @private
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    getCmsPage(route, state) {
        return this.routingService.getNextPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.cmsService.getPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext))))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([pageData, pageContext]) => pageData
            ? this.resolveCmsPageLogic(pageContext, pageData, route, state)
            : this.handleNotFoundPage(pageContext, route, state))));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageData
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolveCmsPageLogic(pageContext, pageData, route, state) {
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((/**
         * @param {?} componentTypes
         * @return {?}
         */
        componentTypes => this.cmsGuards
            .cmsPageCanActivate(componentTypes, route, state)
            .pipe(withLatestFrom(of(componentTypes))))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([canActivate, componentTypes]) => {
            if (canActivate === true) {
                this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([canActivate, componentTypes]) => {
            /** @type {?} */
            const pageLabel = pageData.label || pageContext.id;
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        })));
    }
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    handleNotFoundPage(pageContext, route, state) {
        /** @type {?} */
        const notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap((/**
         * @param {?} notFoundPage
         * @return {?}
         */
        notFoundPage => {
            if (notFoundPage) {
                return this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                notFoundIndex => {
                    this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                })), switchMap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                notFoundIndex => this.cmsService.getPageIndex(pageContext).pipe(
                // we have to wait for page index update
                filter((/**
                 * @param {?} index
                 * @return {?}
                 */
                index => index === notFoundIndex))))), switchMap((/**
                 * @return {?}
                 */
                () => this.resolveCmsPageLogic(pageContext, notFoundPage, route, state))));
            }
            return of(false);
        })));
    }
}
CmsPageGuard.guardName = 'CmsPageGuard';
CmsPageGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsPageGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: CmsService },
    { type: CmsRoutesService },
    { type: CmsI18nService },
    { type: CmsGuardsService },
    { type: SemanticPathService },
    { type: ProtectedRoutesGuard }
];
/** @nocollapse */ CmsPageGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(ɵɵinject(RoutingService), ɵɵinject(CmsService), ɵɵinject(CmsRoutesService), ɵɵinject(CmsI18nService), ɵɵinject(CmsGuardsService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
if (false) {
    /** @type {?} */
    CmsPageGuard.guardName;
    /**
     * @type {?}
     * @protected
     */
    CmsPageGuard.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CmsPageGuard.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsRoutes;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsI18n;
    /**
     * @type {?}
     * @private
     */
    CmsPageGuard.prototype.cmsGuards;
    /**
     * @type {?}
     * @protected
     */
    CmsPageGuard.prototype.semanticPathService;
    /**
     * @type {?}
     * @protected
     */
    CmsPageGuard.prototype.protectedRoutesGuard;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const OutletPosition = {
    REPLACE: 'replace',
    BEFORE: 'before',
    AFTER: 'after',
};
/** @type {?} */
const AVOID_STACKED_OUTLETS = false;
/** @type {?} */
const USE_STACKED_OUTLETS = true;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class OutletService {
    constructor() {
        this.templatesRefs = new Map();
        this.templatesRefsBefore = new Map();
        this.templatesRefsAfter = new Map();
    }
    /**
     * @param {?} outlet
     * @param {?} templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     * @param {?=} position
     * @return {?}
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
     * @param {?} outlet The outlet reference
     * @param {?=} position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param {?=} stacked Indicates whether an array of outlet components is returned
     * @return {?}
     */
    get(outlet, position = OutletPosition.REPLACE, stacked = AVOID_STACKED_OUTLETS) {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} store
     * @param {?} outlet
     * @param {?} value
     * @return {?}
     */
    store(store, outlet, value) {
        /** @type {?} */
        const existing = store.get(outlet) || [];
        /** @type {?} */
        const newValue = existing.concat([value]);
        store.set(outlet, newValue);
    }
}
OutletService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ OutletService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefs;
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefsBefore;
    /**
     * @type {?}
     * @private
     */
    OutletService.prototype.templatesRefsAfter;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletRefDirective {
    /**
     * @param {?} tpl
     * @param {?} outletService
     */
    constructor(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
}
OutletRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutletRef]',
            },] }
];
/** @nocollapse */
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService }
];
OutletRefDirective.propDecorators = {
    cxOutletRef: [{ type: Input }],
    cxOutletPos: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OutletRefDirective.prototype.cxOutletRef;
    /** @type {?} */
    OutletRefDirective.prototype.cxOutletPos;
    /**
     * @type {?}
     * @private
     */
    OutletRefDirective.prototype.tpl;
    /**
     * @type {?}
     * @private
     */
    OutletRefDirective.prototype.outletService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletRefModule {
}
OutletRefModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [OutletRefDirective],
                exports: [OutletRefDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The IntersectionService uses the native IntersectionObserver (v2), which
 * can be used to implement pre-loading and deferred loading of DOM content.
 *
 */
class IntersectionService {
    /**
     * @param {?} config
     */
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
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    isIntersected(element, options) {
        return this.intersects(element, options).pipe(first((/**
         * @param {?} v
         * @return {?}
         */
        v => v === true)));
    }
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     * @private
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    intersects(element, options) {
        /** @type {?} */
        const elementVisible$ = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            /** @type {?} */
            const rootMargin = this.getRootMargin(options);
            /** @type {?} */
            const intersectOptions = { rootMargin };
            /** @type {?} */
            const intersectionObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @return {?}
             */
            entries => {
                observer.next(entries);
            }), intersectOptions);
            intersectionObserver.observe(element);
            return (/**
             * @return {?}
             */
            () => {
                intersectionObserver.disconnect();
            });
        })).pipe(flatMap((/**
         * @param {?} entries
         * @return {?}
         */
        (entries) => entries)), map((/**
         * @param {?} entry
         * @return {?}
         */
        (entry) => entry.isIntersecting)), distinctUntilChanged());
        return elementVisible$;
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    getRootMargin(options) {
        if (options.rootMargin) {
            return options.rootMargin;
        }
        /** @type {?} */
        const layoutConfig = (/** @type {?} */ (this.config));
        if (layoutConfig.deferredLoading &&
            layoutConfig.deferredLoading.intersectionMargin) {
            return layoutConfig.deferredLoading.intersectionMargin;
        }
    }
}
IntersectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IntersectionService.ctorParameters = () => [
    { type: LayoutConfig }
];
/** @nocollapse */ IntersectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IntersectionService_Factory() { return new IntersectionService(ɵɵinject(LayoutConfig)); }, token: IntersectionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IntersectionService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The defer loading serivce is used to defer loading of DOM elements
 * until the elements are required for the user experience.
 */
class DeferLoaderService {
    /**
     * @param {?} platformId
     * @param {?} config
     * @param {?} intersectionService
     */
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
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    load(element, options) {
        if (this.shouldLoadInstantly((options || {}).deferLoading)) {
            return of(true);
        }
        else {
            return this.intersectionService.isIntersected(element, options);
        }
    }
    /**
     * @private
     * @param {?} elementLoadingStrategy
     * @return {?}
     */
    shouldLoadInstantly(elementLoadingStrategy) {
        return (isPlatformServer(this.platformId) ||
            elementLoadingStrategy === DeferLoadingStrategy.INSTANT ||
            (elementLoadingStrategy !== DeferLoadingStrategy.DEFER &&
                this.globalLoadStrategy === DeferLoadingStrategy.INSTANT));
    }
}
DeferLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DeferLoaderService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LayoutConfig },
    { type: IntersectionService }
];
/** @nocollapse */ DeferLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DeferLoaderService_Factory() { return new DeferLoaderService(ɵɵinject(PLATFORM_ID), ɵɵinject(LayoutConfig), ɵɵinject(IntersectionService)); }, token: DeferLoaderService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DeferLoaderService.prototype.globalLoadStrategy;
    /**
     * @type {?}
     * @private
     */
    DeferLoaderService.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    DeferLoaderService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    DeferLoaderService.prototype.intersectionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletDirective {
    /**
     * @param {?} vcr
     * @param {?} templateRef
     * @param {?} outletService
     * @param {?=} deferLoaderService
     */
    constructor(vcr, templateRef, outletService, deferLoaderService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    }
    /**
     * @private
     * @return {?}
     */
    deferLoading() {
        this.loaded.emit(false);
        /** @type {?} */
        const hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // allthought the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.render();
            this.loaded.emit(true);
        })));
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    renderOutlet(position) {
        /** @type {?} */
        let templates = (/** @type {?} */ ((this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS))));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        templates.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        obj => {
            this.create(obj);
        }));
    }
    /**
     * @private
     * @param {?} tmplOrFactory
     * @return {?}
     */
    create(tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            /** @type {?} */
            const view = this.vcr.createEmbeddedView((/** @type {?} */ (tmplOrFactory)), {
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
     * @private
     * @param {?} element
     * @return {?}
     */
    getHostElement(element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutlet]',
            },] }
];
/** @nocollapse */
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService },
    { type: DeferLoaderService }
];
OutletDirective.propDecorators = {
    cxOutlet: [{ type: Input }],
    cxOutletContext: [{ type: Input }],
    cxOutletDefer: [{ type: Input }],
    loaded: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OutletDirective.prototype.cxOutlet;
    /** @type {?} */
    OutletDirective.prototype.cxOutletContext;
    /**
     * Defers loading options for the the templates of this outlet.
     * @type {?}
     */
    OutletDirective.prototype.cxOutletDefer;
    /** @type {?} */
    OutletDirective.prototype.loaded;
    /** @type {?} */
    OutletDirective.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.outletService;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.deferLoaderService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OutletModule {
}
OutletModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [OutletDirective],
                providers: [OutletService],
                exports: [OutletDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentMapperService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} config
     * @param {?} document
     * @param {?} platform
     */
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
     * @protected
     * @param {?} typeCode the component type
     * @return {?}
     */
    getComponent(typeCode) {
        /** @type {?} */
        const componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn(`No component implementation found for the CMS component type '${typeCode}'.\n`, `Make sure you implement a component and register it in the mapper.`);
            }
        }
        return componentConfig ? componentConfig.component : null;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    getComponentFactoryByCode(typeCode) {
        /** @type {?} */
        const component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn(`No component factory found for the CMS component type '${typeCode}'.\n`, `Make sure you add a component to the 'entryComponents' array in the NgModule.`);
            return null;
        }
        return factory;
    }
    /**
     * @param {?} typeCode
     * @return {?}
     */
    isWebComponent(typeCode) {
        /** @type {?} */
        const component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    }
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    initWebComponent(componentType, renderer) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            const [path, selector] = this.getComponent(componentType).split('#');
            /** @type {?} */
            let script = this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(this.document.body, script);
                    if (isPlatformBrowser(this.platform)) {
                        script.onload = (/**
                         * @return {?}
                         */
                        () => {
                            script.onload = null;
                        });
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
                /** @type {?} */
                const chainedOnload = script.onload;
                script.onload = (/**
                 * @return {?}
                 */
                () => {
                    chainedOnload();
                    resolve(selector);
                });
            }
            else {
                resolve(selector);
            }
        }));
    }
}
ComponentMapperService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ComponentMapperService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: CmsConfig },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ ComponentMapperService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(CmsConfig), ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ComponentMapperService.prototype.missingComponents;
    /**
     * @type {?}
     * @private
     */
    ComponentMapperService.prototype.loadedWebComponents;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    ComponentMapperService.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CxApiService {
    /**
     * @param {?} auth
     * @param {?} cart
     * @param {?} cartData
     * @param {?} checkout
     * @param {?} checkoutDelivery
     * @param {?} checkoutPayment
     * @param {?} cms
     * @param {?} pageMeta
     * @param {?} featureConfig
     * @param {?} globalMessage
     * @param {?} translation
     * @param {?} kyma
     * @param {?} occEndpoints
     * @param {?} product
     * @param {?} productSearch
     * @param {?} productReview
     * @param {?} productReference
     * @param {?} searchbox
     * @param {?} routing
     * @param {?} currency
     * @param {?} language
     * @param {?} baseSite
     * @param {?} user
     * @param {?} userAddress
     * @param {?} userConsent
     * @param {?} userOrder
     * @param {?} userPayment
     * @param {?} userNotificationPreferenceService
     * @param {?} userInterestsService
     * @param {?} ngZone
     */
    constructor(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, userNotificationPreferenceService, userInterestsService, ngZone) {
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
        this.ngZone = ngZone;
    }
}
CxApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
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
    { type: NgZone }
];
/** @nocollapse */ CxApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(ɵɵinject(AuthService, 8), ɵɵinject(CartService, 8), ɵɵinject(CartDataService, 8), ɵɵinject(CheckoutService, 8), ɵɵinject(CheckoutDeliveryService, 8), ɵɵinject(CheckoutPaymentService, 8), ɵɵinject(CmsService, 8), ɵɵinject(PageMetaService, 8), ɵɵinject(FeatureConfigService, 8), ɵɵinject(GlobalMessageService, 8), ɵɵinject(TranslationService, 8), ɵɵinject(KymaService, 8), ɵɵinject(OccEndpointsService, 8), ɵɵinject(ProductService, 8), ɵɵinject(ProductSearchService, 8), ɵɵinject(ProductReviewService, 8), ɵɵinject(ProductReferenceService, 8), ɵɵinject(SearchboxService, 8), ɵɵinject(RoutingService, 8), ɵɵinject(CurrencyService, 8), ɵɵinject(LanguageService, 8), ɵɵinject(BaseSiteService, 8), ɵɵinject(UserService, 8), ɵɵinject(UserAddressService, 8), ɵɵinject(UserConsentService, 8), ɵɵinject(UserOrderService, 8), ɵɵinject(UserPaymentService, 8), ɵɵinject(UserNotificationPreferenceService, 8), ɵɵinject(UserInterestsService, 8), ɵɵinject(NgZone)); }, token: CxApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CxApiService.prototype.cmsComponentData;
    /** @type {?} */
    CxApiService.prototype.auth;
    /** @type {?} */
    CxApiService.prototype.cart;
    /** @type {?} */
    CxApiService.prototype.cartData;
    /** @type {?} */
    CxApiService.prototype.checkout;
    /** @type {?} */
    CxApiService.prototype.checkoutDelivery;
    /** @type {?} */
    CxApiService.prototype.checkoutPayment;
    /** @type {?} */
    CxApiService.prototype.cms;
    /** @type {?} */
    CxApiService.prototype.pageMeta;
    /** @type {?} */
    CxApiService.prototype.featureConfig;
    /** @type {?} */
    CxApiService.prototype.globalMessage;
    /** @type {?} */
    CxApiService.prototype.translation;
    /** @type {?} */
    CxApiService.prototype.kyma;
    /** @type {?} */
    CxApiService.prototype.occEndpoints;
    /** @type {?} */
    CxApiService.prototype.product;
    /** @type {?} */
    CxApiService.prototype.productSearch;
    /** @type {?} */
    CxApiService.prototype.productReview;
    /** @type {?} */
    CxApiService.prototype.productReference;
    /** @type {?} */
    CxApiService.prototype.searchbox;
    /** @type {?} */
    CxApiService.prototype.routing;
    /** @type {?} */
    CxApiService.prototype.currency;
    /** @type {?} */
    CxApiService.prototype.language;
    /** @type {?} */
    CxApiService.prototype.baseSite;
    /** @type {?} */
    CxApiService.prototype.user;
    /** @type {?} */
    CxApiService.prototype.userAddress;
    /** @type {?} */
    CxApiService.prototype.userConsent;
    /** @type {?} */
    CxApiService.prototype.userOrder;
    /** @type {?} */
    CxApiService.prototype.userPayment;
    /** @type {?} */
    CxApiService.prototype.userNotificationPreferenceService;
    /** @type {?} */
    CxApiService.prototype.userInterestsService;
    /** @type {?} */
    CxApiService.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentWrapperDirective {
    /**
     * @param {?} vcr
     * @param {?} componentMapper
     * @param {?} injector
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} config
     * @param {?} platformId
     */
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
    /**
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    shouldRenderComponent() {
        /** @type {?} */
        const isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        const isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    }
    /**
     * @private
     * @return {?}
     */
    launchComponent() {
        /** @type {?} */
        const factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    launchWebComponent() {
        return __awaiter(this, void 0, void 0, /** @this {!ComponentWrapperDirective} */ function* () {
            /** @type {?} */
            const elementName = yield this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer);
            if (elementName) {
                this.webElement = this.renderer.createElement(elementName);
                /** @type {?} */
                const cmsComponentData = this.getCmsDataForComponent();
                this.webElement.cxApi = Object.assign({}, this.injector.get(CxApiService), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                    cmsComponentData });
                this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                if (this.cmsService.isLaunchInSmartEdit()) {
                    this.addSmartEditContract(this.webElement);
                }
            }
        });
    }
    /**
     * @private
     * @template T
     * @return {?}
     */
    getCmsDataForComponent() {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getInjectorForComponent() {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    addSmartEditContract(element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    }
}
ComponentWrapperDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxComponentWrapper]',
            },] }
];
/** @nocollapse */
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
ComponentWrapperDirective.propDecorators = {
    cxComponentWrapper: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ComponentWrapperDirective.prototype.cxComponentWrapper;
    /** @type {?} */
    ComponentWrapperDirective.prototype.cmpRef;
    /** @type {?} */
    ComponentWrapperDirective.prototype.webElement;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.componentMapper;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.dynamicAttributeService;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ComponentWrapperDirective.prototype.platformId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageComponentModule {
}
PageComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [],
                declarations: [ComponentWrapperDirective],
                exports: [ComponentWrapperDirective],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageSlotComponent {
    /**
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?=} config
     */
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
        this.components$ = this.position$.pipe(switchMap((/**
         * @param {?} position
         * @return {?}
         */
        position => this.cmsService.getContentSlot(position).pipe(tap((/**
         * @param {?} slot
         * @return {?}
         */
        slot => this.addSmartEditSlotClass(slot))), map((/**
         * @param {?} slot
         * @return {?}
         */
        slot => (slot && slot.components ? slot.components : []))), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.length === b.length &&
            !a.find((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => el.uid !== b[index].uid))))))));
        this.subscription = new Subscription();
    }
    // need to have this host binding at the top as it will override the entire class
    /**
     * @param {?} position
     * @return {?}
     */
    set position(position) {
        this.position$.next(position);
    }
    /**
     * @return {?}
     */
    get position() {
        return this.position$.value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.components$.subscribe((/**
         * @param {?} components
         * @return {?}
         */
        components => {
            this.hasComponents = components && components.length > 0;
            this.pendingComponentCount = components ? components.length : 0;
            this.isPending = this.pendingComponentCount > 0;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     * @param {?} loadState
     * @return {?}
     */
    isLoaded(loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    }
    /**
     * @param {?} componentType
     * @return {?}
     */
    getComponentDeferOptions(componentType) {
        /** @type {?} */
        const deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getDeferLoadingStrategy(componentType) {
        if (this.config) {
            return (((/** @type {?} */ (this.config))).cmsComponents[componentType] || {})
                .deferLoading;
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditSlotClass(slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
}
PageSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-slot',
                template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsConfig }
];
PageSlotComponent.propDecorators = {
    position: [{ type: HostBinding, args: ['class',] }, { type: Input }],
    isPending: [{ type: HostBinding, args: ['class.cx-pending',] }],
    hasComponents: [{ type: HostBinding, args: ['class.has-components',] }],
    isPageFold: [{ type: HostBinding, args: ['class.page-fold',] }, { type: Input }]
};
if (false) {
    /** @type {?} */
    PageSlotComponent.prototype.isPending;
    /** @type {?} */
    PageSlotComponent.prototype.hasComponents;
    /** @type {?} */
    PageSlotComponent.prototype.isPageFold;
    /**
     * @type {?}
     * @private
     */
    PageSlotComponent.prototype.pendingComponentCount;
    /** @type {?} */
    PageSlotComponent.prototype.position$;
    /** @type {?} */
    PageSlotComponent.prototype.components$;
    /**
     * @type {?}
     * @private
     */
    PageSlotComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.dynamicAttributeService;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.hostElement;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageSlotModule {
}
PageSlotModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OutletModule, PageComponentModule],
                providers: [],
                declarations: [PageSlotComponent],
                exports: [PageSlotComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLayoutModule {
}
PageLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OutletModule, PageSlotModule],
                declarations: [PageLayoutComponent],
                providers: [PageLayoutService],
                exports: [PageLayoutComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PWAModuleConfig {
}
if (false) {
    /** @type {?} */
    PWAModuleConfig.prototype.pwa;
}
/** @type {?} */
const defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToHomeScreenService {
    /**
     * @param {?} config
     * @param {?} globalMessageService
     * @param {?} winRef
     */
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
    /**
     * @return {?}
     */
    init() {
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                event.preventDefault();
                this.deferredEvent = event;
                this.enableAddToHomeScreen();
            }));
            this.winRef.nativeWindow.addEventListener('appinstalled', (/**
             * @return {?}
             */
            () => {
                this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                this.disableAddToHomeScreen();
                this.deferredEvent = null;
            }));
        }
    }
    /**
     * @return {?}
     */
    enableAddToHomeScreen() {
        this.canPrompt.next(true);
    }
    /**
     * @return {?}
     */
    disableAddToHomeScreen() {
        this.canPrompt.next(false);
    }
    /**
     * @return {?}
     */
    firePrompt() {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    }
}
AddToHomeScreenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddToHomeScreenService.ctorParameters = () => [
    { type: PWAModuleConfig },
    { type: GlobalMessageService },
    { type: WindowRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.deferredEvent;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.canPrompt;
    /** @type {?} */
    AddToHomeScreenService.prototype.canPrompt$;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    AddToHomeScreenService.prototype.winRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    }
    /**
     * @return {?}
     */
    prompt() {
        this.addToHomeScreenService.firePrompt();
    }
}
if (false) {
    /** @type {?} */
    AddToHomeScreenComponent.prototype.canPrompt$;
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenComponent.prototype.addToHomeScreenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToHomeScreenBannerComponent extends AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
}
AddToHomeScreenBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-home-screen-banner',
                template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AddToHomeScreenBannerComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenBannerComponent.prototype.addToHomeScreenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToHomeScreenBtnComponent extends AddToHomeScreenComponent {
    /**
     * @param {?} addToHomeScreenService
     */
    constructor(addToHomeScreenService) {
        super(addToHomeScreenService);
        this.addToHomeScreenService = addToHomeScreenService;
    }
}
AddToHomeScreenBtnComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-home-screen-btn',
                template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"canPrompt$ | async\"></ng-content>\n</span>\n"
            }] }
];
/** @nocollapse */
AddToHomeScreenBtnComponent.ctorParameters = () => [
    { type: AddToHomeScreenService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AddToHomeScreenBtnComponent.prototype.addToHomeScreenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} pwaConfig
 * @return {?}
 */
function pwaConfigurationFactory(pwaConfig) {
    return { enabled: (!isDevMode() && pwaConfig.pwa.enabled) || false };
}
/**
 * @param {?} addToHomeScreenService
 * @return {?}
 */
function pwaFactory(addToHomeScreenService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => addToHomeScreenService);
    return result;
}
class PwaModule {
}
PwaModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cmsRoute = {
    path: '**',
    canActivate: [CmsPageGuard],
    component: PageLayoutComponent,
};
/**
 * @param {?} injector
 * @return {?}
 */
function addCmsRoute(injector) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const router = injector.get(Router);
        router.config.push(cmsRoute);
    });
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = addCmsRoute;
class CmsRouteModule {
}
CmsRouteModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        multi: true,
                        deps: [Injector],
                        useFactory: ɵ0,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SeoMetaService {
    /**
     * @param {?} ngTitle
     * @param {?} ngMeta
     * @param {?} pageMetaService
     */
    constructor(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    init() {
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => (this.meta = meta)));
    }
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    set meta(meta) {
        this.title = meta.title;
        this.description = meta.description;
        this.image = meta.image;
        this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
    }
    /**
     * @protected
     * @param {?} title
     * @return {?}
     */
    set title(title) {
        this.ngTitle.setTitle(title || '');
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set description(value) {
        this.addTag({ name: 'description', content: value });
    }
    /**
     * @protected
     * @param {?} imageUrl
     * @return {?}
     */
    set image(imageUrl) {
        if (imageUrl) {
            this.addTag({ name: 'og:image', content: imageUrl });
        }
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set robots(value) {
        if (value) {
            this.addTag({ name: 'robots', content: value.join(', ') });
        }
    }
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    addTag(meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    }
}
SeoMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SeoMetaService.ctorParameters = () => [
    { type: Title },
    { type: Meta },
    { type: PageMetaService }
];
/** @nocollapse */ SeoMetaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(ɵɵinject(Title), ɵɵinject(Meta), ɵɵinject(PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SeoMetaService.prototype.ngTitle;
    /**
     * @type {?}
     * @protected
     */
    SeoMetaService.prototype.ngMeta;
    /**
     * @type {?}
     * @protected
     */
    SeoMetaService.prototype.pageMetaService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const htmlLangProvider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: setHtmlLangAttribute,
    deps: [WindowRef, LanguageService],
};
/**
 * Sets active language in <html lang="">
 * @param {?} winRef
 * @param {?} languageService
 * @return {?}
 */
function setHtmlLangAttribute(winRef, languageService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => {
        languageService.getActive().subscribe((/**
         * @param {?} lang
         * @return {?}
         */
        lang => {
            winRef.document.documentElement.lang = lang;
        }));
    });
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JsonLdScriptFactory {
    /**
     * @param {?} platformId
     * @param {?} winRef
     * @param {?} rendererFactory
     */
    constructor(platformId, winRef, rendererFactory) {
        this.platformId = platformId;
        this.winRef = winRef;
        this.rendererFactory = rendererFactory;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    build(schema) {
        if (schema && this.isJsonLdRequired()) {
            this.createJsonLdScriptElement().innerHTML = JSON.stringify(schema);
        }
    }
    /**
     * Only return schema data in case of SSR or development mode,
     * to not waste memory unnecessary.
     * @return {?}
     */
    isJsonLdRequired() {
        return !isPlatformBrowser(this.platformId) || isDevMode();
    }
    /**
     * @private
     * @return {?}
     */
    createJsonLdScriptElement() {
        /** @type {?} */
        const id = 'json-ld';
        /** @type {?} */
        let scriptElement = (/** @type {?} */ ((this.winRef.document.getElementById(id))));
        if (!scriptElement) {
            /** @type {?} */
            const renderer = this.rendererFactory.createRenderer(null, null);
            /** @type {?} */
            const script = renderer.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            renderer.appendChild(this.winRef.document.body, script);
            scriptElement = script;
        }
        return scriptElement;
    }
}
JsonLdScriptFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
JsonLdScriptFactory.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: RendererFactory2 }
];
/** @nocollapse */ JsonLdScriptFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonLdScriptFactory_Factory() { return new JsonLdScriptFactory(ɵɵinject(PLATFORM_ID), ɵɵinject(WindowRef), ɵɵinject(RendererFactory2)); }, token: JsonLdScriptFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.platformId;
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    JsonLdScriptFactory.prototype.rendererFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
class JsonLdDirective {
    /**
     * @param {?} jsonLdScriptFactory
     * @param {?} sanitizer
     */
    constructor(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    set cxJsonLd(schema) {
        this.writeJsonLd(schema);
    }
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    writeJsonLd(schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            /** @type {?} */
            const html = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    }
}
JsonLdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxJsonLd]',
            },] }
];
/** @nocollapse */
JsonLdDirective.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: DomSanitizer }
];
JsonLdDirective.propDecorators = {
    cxJsonLd: [{ type: Input }],
    jsonLD: [{ type: HostBinding, args: ['innerHTML',] }]
};
if (false) {
    /** @type {?} */
    JsonLdDirective.prototype.jsonLD;
    /**
     * @type {?}
     * @protected
     */
    JsonLdDirective.prototype.jsonLdScriptFactory;
    /**
     * @type {?}
     * @protected
     */
    JsonLdDirective.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to extend schema builders for adding structural data (json-ld).
 *
 * Some builders (i.e. `JSONLD_PRODUCT_BUILDER`) might have additional
 * lowever level builder to further extend the schema.
 * @type {?}
 */
const SCHEMA_BUILDER = new InjectionToken('SchemaBuilderToken');
/**
 * Injection token to add specific json-ld builders for product related schema's.
 * See see https://schema.org/product for more information.
 * @type {?}
 */
const JSONLD_PRODUCT_BUILDER = new InjectionToken('JsonLdProductBuilderToken');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StructuredDataFactory {
    /**
     * @param {?} scriptBuilder
     * @param {?} builders
     */
    constructor(scriptBuilder, builders) {
        this.scriptBuilder = scriptBuilder;
        this.builders = builders;
    }
    /**
     * @return {?}
     */
    build() {
        this.collectSchemas().subscribe((/**
         * @param {?} schema
         * @return {?}
         */
        (schema) => {
            this.scriptBuilder.build(schema);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    collectSchemas() {
        if (!this.scriptBuilder.isJsonLdRequired() || !this.builders) {
            return of();
        }
        return combineLatest(this.builders.map((/**
         * @param {?} builder
         * @return {?}
         */
        builder => builder.build()))).pipe();
    }
}
StructuredDataFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
StructuredDataFactory.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [SCHEMA_BUILDER,] }] }
];
/** @nocollapse */ StructuredDataFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function StructuredDataFactory_Factory() { return new StructuredDataFactory(ɵɵinject(JsonLdScriptFactory), ɵɵinject(SCHEMA_BUILDER, 8)); }, token: StructuredDataFactory, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructuredDataFactory.prototype.scriptBuilder;
    /**
     * @type {?}
     * @private
     */
    StructuredDataFactory.prototype.builders;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory to build the structure data
 * without any interaction with the UI.
 * @param {?} injector
 * @return {?}
 */
function getStructuredDataFactory(injector) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const factory = injector.get(StructuredDataFactory);
        factory.build();
    });
    return result;
}
class StructuredDataModule {
}
StructuredDataModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function initSeoService(injector) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const service = injector.get(SeoMetaService);
        service.init();
    });
    return result;
}
class SeoModule {
}
SeoModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbSchemaBuilder {
    /**
     * @param {?} pageMetaService
     */
    constructor(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    build() {
        return this.pageMetaService
            .getMeta()
            .pipe(map((/**
         * @param {?} pageMeta
         * @return {?}
         */
        (pageMeta) => this.collect(pageMeta))));
    }
    /**
     * @protected
     * @param {?} pageMeta
     * @return {?}
     */
    collect(pageMeta) {
        if (!pageMeta.breadcrumbs) {
            return;
        }
        /** @type {?} */
        const crumbs = pageMeta.breadcrumbs.map((/**
         * @param {?} crumb
         * @param {?} index
         * @return {?}
         */
        (crumb, index) => {
            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@id': crumb.link,
                    name: crumb.label,
                },
            };
        }));
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
}
BreadcrumbSchemaBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BreadcrumbSchemaBuilder.ctorParameters = () => [
    { type: PageMetaService }
];
/** @nocollapse */ BreadcrumbSchemaBuilder.ngInjectableDef = ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(ɵɵinject(PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbSchemaBuilder.prototype.pageMetaService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builds the basic structured data for the product, see https://schema.org/product.
 * This builder includes data for sku number, name, description, brand and main image.
 */
class JsonLdBaseProductBuilder {
    /**
     * @param {?} product
     * @return {?}
     */
    build(product) {
        return of(Object.assign({}, this.getProductBase(product), this.getProductBrand(product), this.getProductImage(product)));
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    getProductBase(product) {
        /** @type {?} */
        const result = { sku: product.code };
        if (product.name) {
            result.name = product.name;
        }
        if (product.summary) {
            result.description = product.summary;
        }
        return result;
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    getProductBrand(product) {
        return product['manufacturer']
            ? {
                brand: product['manufacturer'],
            }
            : null;
    }
}
JsonLdBaseProductBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ JsonLdBaseProductBuilder.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonLdBaseProductBuilder_Factory() { return new JsonLdBaseProductBuilder(); }, token: JsonLdBaseProductBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builds the structured data for the product offer, see https://schema.org/offers.
 * The data includes the price, currency and availability level.
 */
class JsonLdProductOfferBuilder {
    /**
     * @param {?} product
     * @return {?}
     */
    build(product) {
        /** @type {?} */
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
}
JsonLdProductOfferBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ JsonLdProductOfferBuilder.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonLdProductOfferBuilder_Factory() { return new JsonLdProductOfferBuilder(); }, token: JsonLdProductOfferBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builds the structured data for the product reviews, see https://schema.org/Review.
 * The data includes the aggregated product rating and the individual reviews.
 */
class JsonLdProductReviewBuilder {
    /**
     * @param {?} reviewService
     */
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    build(product) {
        return this.reviewService.getByProductCode(product.code).pipe(filter(Boolean), map((/**
         * @param {?} reviews
         * @return {?}
         */
        (reviews) => {
            return {
                aggregateRating: this.buildAggregatedReviews(product, reviews),
                review: reviews.map((/**
                 * @param {?} review
                 * @return {?}
                 */
                review => this.buildReviews(review))),
            };
        })));
    }
    /**
     * @private
     * @param {?} product
     * @param {?} reviews
     * @return {?}
     */
    buildAggregatedReviews(product, reviews) {
        /** @type {?} */
        const aggregated = {
            '@type': 'AggregateRating',
        };
        if (product.averageRating) {
            aggregated.ratingValue = product.averageRating;
        }
        if (reviews) {
            aggregated.ratingCount = reviews.filter((/**
             * @param {?} rev
             * @return {?}
             */
            rev => !!rev.rating)).length;
            aggregated.reviewCount = reviews.filter((/**
             * @param {?} rev
             * @return {?}
             */
            rev => !!rev.comment)).length;
        }
        return aggregated;
    }
    /**
     * @private
     * @param {?} review
     * @return {?}
     */
    buildReviews(review) {
        /** @type {?} */
        const reviewSchema = {
            '@type': 'review',
        };
        if (review.principal && review.principal.name) {
            reviewSchema.author = review.principal.name;
        }
        if (review.date) {
            /** @type {?} */
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
}
JsonLdProductReviewBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
JsonLdProductReviewBuilder.ctorParameters = () => [
    { type: ProductReviewService }
];
/** @nocollapse */ JsonLdProductReviewBuilder.ngInjectableDef = ɵɵdefineInjectable({ factory: function JsonLdProductReviewBuilder_Factory() { return new JsonLdProductReviewBuilder(ɵɵinject(ProductReviewService)); }, token: JsonLdProductReviewBuilder, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonLdProductReviewBuilder.prototype.reviewService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrentProductService {
    /**
     * @param {?} routingService
     * @param {?} productService
     * @param {?=} features
     */
    constructor(routingService, productService, features) {
        this.routingService = routingService;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? ['details'] : '';
    }
    /**
     * @return {?}
     */
    getProduct() {
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        state => state.state.params['productCode'])), filter(Boolean), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        (productCode) => this.productService.get(productCode, this.PRODUCT_SCOPE))));
    }
}
CurrentProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CurrentProductService.ctorParameters = () => [
    { type: RoutingService },
    { type: ProductService },
    { type: FeatureConfigService }
];
/** @nocollapse */ CurrentProductService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(ɵɵinject(RoutingService), ɵɵinject(ProductService), ɵɵinject(FeatureConfigService)); }, token: CurrentProductService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CurrentProductService.prototype.PRODUCT_SCOPE;
    /**
     * @type {?}
     * @private
     */
    CurrentProductService.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CurrentProductService.prototype.productService;
    /**
     * @type {?}
     * @protected
     */
    CurrentProductService.prototype.features;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Adds the minimal structured data for the product, see https://schema.org/product.
 * The actual data collection is delegated to `JsonLdBuilder`s, which can be injected
 * using the `JSONLD_PRODUCT_BUILDER` token.
 */
class ProductSchemaBuilder {
    /**
     * @param {?} currentProduct
     * @param {?} builders
     */
    constructor(currentProduct, builders) {
        this.currentProduct = currentProduct;
        this.builders = builders;
    }
    /**
     * @return {?}
     */
    build() {
        return this.currentProduct.getProduct().pipe(startWith((/** @type {?} */ (null))), switchMap((/**
         * @param {?} product
         * @return {?}
         */
        (product) => {
            if (product) {
                return combineLatest(this.collect(product)).pipe(map((/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => Object.assign({}, ...res))));
            }
            return of({});
        })));
    }
    /**
     * @protected
     * @param {?} product
     * @return {?}
     */
    collect(product) {
        if (!product || !product.code) {
            return [];
        }
        /** @type {?} */
        const builders = this.builders
            ? this.builders.map((/**
             * @param {?} builder
             * @return {?}
             */
            builder => builder.build(product)))
            : [];
        return [
            of({
                '@context': 'http://schema.org',
                '@type': 'Product',
            }),
            ...builders,
        ];
    }
}
ProductSchemaBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductSchemaBuilder.ctorParameters = () => [
    { type: CurrentProductService },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [JSONLD_PRODUCT_BUILDER,] }] }
];
/** @nocollapse */ ProductSchemaBuilder.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductSchemaBuilder_Factory() { return new ProductSchemaBuilder(ɵɵinject(CurrentProductService), ɵɵinject(JSONLD_PRODUCT_BUILDER, 8)); }, token: ProductSchemaBuilder, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductSchemaBuilder.prototype.currentProduct;
    /**
     * @type {?}
     * @protected
     */
    ProductSchemaBuilder.prototype.builders;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides several standard json-ld builders that contribute
 * to colleting and building json-ld data.
 */
class JsonLdBuilderModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SchemaBuilder() { }
if (false) {
    /**
     * @return {?}
     */
    SchemaBuilder.prototype.build = function () { };
}
/**
 * @record
 * @template T
 */
function JsonLdBuilder() { }
if (false) {
    /**
     * @param {?} data
     * @return {?}
     */
    JsonLdBuilder.prototype.build = function (data) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ASM_ENABLED_LOCAL_STORAGE_KEY = 'asm_enabled';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AsmComponentService {
    /**
     * @param {?} authService
     * @param {?} asmAuthService
     * @param {?} routingService
     * @param {?} winRef
     */
    constructor(authService, asmAuthService, routingService, winRef) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.routingService = routingService;
        this.winRef = winRef;
    }
    /**
     * @return {?}
     */
    logoutCustomerSupportAgentAndCustomer() {
        this.authService
            .getUserToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (this.asmAuthService.isCustomerEmulationToken(token)) {
                this.logoutCustomer();
            }
            this.asmAuthService.logoutCustomerSupportAgent();
        }));
    }
    /**
     * @return {?}
     */
    logoutCustomer() {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @return {?}
     */
    isCustomerEmulationSessionInProgress() {
        return this.authService
            .getUserToken()
            .pipe(mergeMap((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => of(this.asmAuthService.isCustomerEmulationToken(userToken)))));
    }
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     * @return {?}
     */
    unload() {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    }
}
AsmComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmComponentService.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthService },
    { type: RoutingService },
    { type: WindowRef }
];
/** @nocollapse */ AsmComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(ɵɵinject(AuthService), ɵɵinject(AsmAuthService), ɵɵinject(RoutingService), ɵɵinject(WindowRef)); }, token: AsmComponentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.asmAuthService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.winRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AsmMainUiComponent {
    /**
     * @param {?} authService
     * @param {?} asmAuthService
     * @param {?} userService
     * @param {?} asmComponentService
     * @param {?} globalMessageService
     * @param {?} routingService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.csAgentToken$ = this.asmAuthService.getCustomerSupportAgentToken();
        this.csAgentTokenLoading$ = this.asmAuthService.getCustomerSupportAgentTokenLoading();
        this.customer$ = this.authService.getUserToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token && !!token.access_token) {
                this.handleCustomerSessionStartRedirection(token);
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
    }
    /**
     * @private
     * @param {?} token
     * @return {?}
     */
    handleCustomerSessionStartRedirection(token) {
        if (this.startingCustomerSession &&
            this.asmAuthService.isCustomerEmulationToken(token)) {
            this.startingCustomerSession = false;
            this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this.routingService.go('/');
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    loginCustomerSupportAgent({ userId, password, }) {
        this.asmAuthService.authorizeCustomerSupportAgent(userId, password);
    }
    /**
     * @return {?}
     */
    logout() {
        this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    startCustomerEmulationSession({ customerId }) {
        this.asmAuthService
            .getCustomerSupportAgentToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} customerSupportAgentToken
         * @return {?}
         */
        customerSupportAgentToken => this.asmAuthService.startCustomerEmulationSession(customerSupportAgentToken, customerId)))
            .unsubscribe();
        this.startingCustomerSession = true;
    }
    /**
     * @return {?}
     */
    hideUi() {
        this.disabled = true;
        this.asmComponentService.unload();
    }
}
AsmMainUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-asm-main-ui',
                template: "<div class=\"asm-bar\">\n  <div class=\"asm-bar-branding\">\n    <img\n      class=\"logo\"\n      src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAYAAADuFn/PAAAAAXNSR0IArs4c6QAAD7RJREFUeAHtW3twVGcVP7t795V30rwJBBJeASq01NJgnZa2otTW2nHAqrRak+rUKfgYZ/xDW5lRR2e0/mGtAadqq6WjUAdNa4udqVZaEdtCKQ2FQEh5JSQh5Lnvp7/ft9lkd9l7swkhwMiZ3N27937fd8533ufcG9P1L/VE5SpMOwdMmk0iocDzWjAUnnbk/9cITSYx2xwS9Xs3Wzs7NmqhcOT/mh/Tunkw32SzScjr2Vy2v3XDa5tWhbRI5KoHmi4hmGx2ifi8mz8UmvHI9k2VyvVokasWMC38N8HtRHyezUejex5pXbdu1O9r5qsCuLgCUD4fmu/1bq5sbd9wdNMY84lYM10VwMUTAJlvtUnU491c0XZc+fxUZFo0Mn4QjiJMMFREcKJG4xxrC/7ETCQ854+JAtbBny5Mak3d1ab3BsKtCrhhuJ2K9lNpmU+KYAHpWRAFa4K4x7t5NouU5WhS4rRIvt0idotJ3MGIDPgj0usNSZ8vLMOBiIQhJQukoZkpHGOJcGXLiPD0WBNStOmvQ8ETAjp7iN0d++RelBLhBFsAnVQe/fXHZk7wDEuarXaJBrxNFe2nNzLb0VsBMWA0HoyO8WNDDnDxIzOy5ONzcuX6MqdU5VhxLZlYWoUvFJEud0iODQZkb5dXHa19PnEFw2LDBi0QRqqac14BBPnz2yul0GEZxZt68vzhQXm6pS+Gl9xLANL4uUWFsm5hPmiIjiPu2EQqSY8nJCeHAnK4zy+tOLrdQXXTClqVLFLwJKDM7BSLmMD8iN/btCRn3obtm+adz+CElTTlW0YuEDe1qR6M//oNJXJDRVbC0PNPqYFZVrPUFNjU8bHqHGUF3NxLx4ZkZ/uQdLnOF34Acad+To6srDRe/7ML8+T5Q/3KEpNFD5lijVKnWa4tdpxPWIZXeiGM/3S65Y/vD8hbnR6lLBdkEdR8DZrv9zUtyT+wYfu6+YbMJ5mjQZjMZ1H20HXF8s0VZWKjjU4C6IIWgyk8PlqVLY0vnhDGkMTVNJjA3bV5464+t9AhS4vtsqfDBWuiKY0Bk4dIhq5nbFbyWXGWJnfPzZc1NRT0gDy+p1uG/WHlmpJHZvALG6TmR/2epoOFBzccTEg1jWabTXBBpkhYgoGQNCy9Rr6zsnzSzE9ERKZvazknAX9IzFhf4QGuMFofNXmarKjMThye9pwWtqYmV6Jwc2R4fI3Rb/qyKQDGgvsWF8ovVlcJSEOPJsaTUTzkkdGBRMZstorA7SwqXLRBMmQ+STczC/IHwnA3TvlGfdkUbCe2xBsnhmVna79YTQi3YB7x8AhA0LfPzpNsW7JG6yG+BWOLHWYJgwHxNUa/KeUphPqZOfKt+nKlJIk0j+Ib2UPyb8QfMD/q8zYV9/Ru3L7ONK7bSSTZHIUZm6FJDdeXIrsZnynMdBh4jfbuR1B8YnenhBCIVZZFV4GDuLLh2j4xLz+RBsPzylyrspYAlIRrJB1TZAGJBHxmUZFcV5YFRUmDLxU/fpP5aC80Fff1GWY7iTgSzzWa26wCu6yA9I3g7VPDsu1Ar3zQ75MAGEwNLnBoUgtfv2JmriybkSM5SFcJO1p65Z3Tw2JnPgqtiUMIgluGsXUlzviljL7vnF8gLx86h7UShnNdIy3A0NeODcrrHwwqn56LrKv2GtA6K0+K4Pv1wAoF+STw7T05lBy4kibQ8lhkMdvxNZUMD06K+VxSC0NLawtto8xLwjPyYx+Y2bCtVVwjAYrpGvdOBXzlcFSeguVUF9rlzroiuXlOgfzmv2fEwgFwG4kQhitag80xUE8EbgLTZsISOgb9Y3MhzPEE8NapIdmyu0McyNRIDjOcmVC2x1ZXy621BbokLK/KEZQ8CPLJ9I9OwDpm9POR7fzqYPXyjTJBtzO6Dk4QH8MosPQ1goND4DSDNFCKDT4dHk99O8xRRSjKaTnR65Ff7jolX37ufTnT78UYBE1oafygT2Uhd9vcwkT8GZ3noVa4tSY/5tIS1jQBrxFYIWdkqurIAkMdoL2jzyvf/1u7dA8HdKdW5FmlCHEnFozH9qASAfDCYtLYz2+qe7P9gphPAhADEBipTQZwIzTwJ3fVSmm2VTy+kARgNeyiqkDFbzDFooQioh7w4PfovZFxDL7U5Mp8W1pMrLppYXqwBtbFuJ2MF2ptAFEwK4kO0MWkoGPAK/s7hnVnMhZmw30m4eI+aEZgPtzOr+pqTmzYvj25saa7oMENiDIq3UN+gyGxW5+6tkRurM6XHe/2yIstZ6XtrEcJTgOxTOPoluIVbypb+JvK+slF1+jiae/1yuvH+qVx5Yy0Y66tzJX5xVnScsYlrFpZA5AfRkCGcVwEljoKoDOMaz5UxXqgIQ7Aa6lxo1Mxj3l+OOD73eEFKze2rKvX1xa9hdNcx1aicqjLJb0ufZOMzyvPs8nDH62SPzculWceWAJmVUkNAlsAgdwFywhCS0LQstTDz0BfZJebEB/0YM8HA7Jjf7eqpNONYWF4x4JC8QVDav0g8LCvYwS8z3GJ9NDaEY9lfql+Fc4kg/sJJ8wNm20S9nu3+sKBr12Iz0+l10wtOQ2fTa3OFBjUbpqdL9/9xBz5y1eXyVNfWCy0EA0bc6Pw4oZJfPzwwWXdPr9IcrhzHdjV1icHod20LD1YXVes1qCgufZ4AmDKTOFTQUgDafPg+PwNFbIAqaYeuOEKe90B5XIUHgseIwa9W/3RYOPxTat8evMmc121o+m/m/51QlaBSdVFE0sRnVaLmse5LZ0ueeK14/IShKk6nbQvCDiLqd3iYl36uuAC950cFK8/KK9DEAvK0lfJc0uyZHlVrvzzyLmY+xnHAvIg8CpYrQM0ZiGAVF+TJXdDUe6+ttSwC9ra7ZJ+eASVraG3A5+/1VLqbmjfeOf4vlp3l+lvQAAoxHDvNLKDh7e+J1vWf0hmogczGVhSmSNbPr9EnvnPafnB344iINP8o3Lj7AJZDB+uB3va+6V70KcC+T9bz0nDyplpny8wzty1pFRePXQ2IwE8WD9DPgdtN2EiBWBFvMoEXnm/V/xwddnOLHY1n9OGfQ1tP5x65pMW1PgIRjiYYew/MSj3bdkrfz/YkwmdumO+WF8lP753IVLQqEod74LWscDRg1cP9ap+jxWMOgBL6BjQt/JVC4qkIgfv1JBurG8E1PyCLKvkI83OlPknoYgvvtslDjzDDQe8W8H8L7c9cXGYT9qRa2ETPJAZ2OEyTvS65StPvysP//6AvH18wGh/hvfWLq+QtcvLhW5g9aIS3bH96Mf/tw09IygAApL0DvlkdxuqXh0oy7PLzaglmNbGzEBn4CQuM2b86IUjctYFrxD0bTU5LI0Xk/kk0RxhMEs4GCbplnbs7ZC1T74lX9jytvzpzQ45Y6CVentdf1OVrIHLmGkQV/a098mpc24xgfmKDmj2Ky3GFnjX0jIIi3pjbAF6dKW7zjrksR2Hpfm9PtEi/q3RLG3KA246vBrdRCrQWTjgL1kJ/gPM4FGe75Dl8OV3LC6VW5CNVBSMHycWVuTKN1fXpi6f9Jsuh81Atq0JVIAPetwyhEedeToV+sraIvSgnOhank+7WmSCH0eRhv8Ymr8TzwSQ7zxr7rc9dPzxqc129Egy1Xz9paRd8Eeqt+Y1lVNjwzwvRz/l08tnyCNgbhH88YUAU8O2brd0IhX24zlzCVzMbGQ7FLDR06nvbTsodvitR++tmxT6QU9QDqEafuGdTmned0b6fSaxg/mRwa6Hjj/9oH4QmhQ2/UnnWQALFWYbDFpxQfCb+QMrRAqgH02xJ3celdOIF5sbl+NhRHykPiK9O9l2TZbOyleH3ph019fADe05qh8rOOeNw72y+0gv6I7thSnxOaSXp895YGUelfmxTnA4nGKPBrfCrTW2P/3glKea6eiPX9Ms8P9xYMq4/iOzlAvY09qrLttIfDr+QiLtnUMqflM40w3LqgtQNxh3A954v0cebz4szpE2OWnkXpiWMsdnC8XuQLaDgBs1WxoudsBNxyNYQEwAZP6c0hx5dO0SVUTthGlu//cJOXC8X4bx8JouSAkCJsAZOXgW8NAdtcoq0i18sa9lA//NC/WLO+Jnzygbb3Kkvs2haIMgzKhwI0g1oxbrJWE+6dAs9CmAIPzvA7fORsESaxfcc2OVfOrDVXKsa1gOnhyQDrSbB1Ce0y+XoVBbsaBEFs3M/MlWDMvUfjoSNDvdyrRM7i++x8QxJjI/6Hs2rFkveqqZiDf1XFkAU7B55Tny6fpZSfep8XORyfC4IoEtWFp4BBsZAb4wpv45Iuh/1uvvY8CdVp8fpyP+rbH4iSIQrV81B2kfnuxPA/AlgJ9tf0/KUR8sqi6U8kInyn6rCvpMAs6hGDuJVHQ/CrL7bquRuZXjv8KSjmy0/tWTOfV0bmSAcjsh/7OewMC0Zjvp6OM1ja+J1MGVrL1ljt6YKb/ehuD93KvHVJfSjnaB06aJNvLWHRXWj86lF+mpF4IqRTo6WQHwAQULPB4EExtrYL7X6Wg8/utLq/lxpppZUfrQ+37tnTNq4/Ebk/lmoH793TOKeUbzd2EM35jIBvMZcfxgthvxhYfXizYwqmEnnkjxIf+/W7rQqoox0GjNdPdoASw0eZjRzxf4fG+H45L6/FQ6zVS8M2dd8u0nd8v9P/yH/H7nETnd40odZ/ib7NmHfPurP90lbx7uESdyeyPYtb8TjwbBHAiMLpDtcAoifvAa7/Hd0kNoVUyUnjhu9b4n10fANQX8f3BndTa2vXzxGmtxvBP5Nl33pW1KvUCnejWR2laEarQOvnnZvGKpm10olXgUWJhrFxs0lsCxLk9AulG9toBBb0Cj6a/d3qCsva1W5lTQZ6tl1fjEj0Fo+XOvHAUuMHksNiYOSTpnS/tOJAcLZvFhfvo1kyYk/Njd0i1vHxlAbAltc3VlP3C5MZ+kmq574E/n7YquhO+JsuPLgsWJjiaDZLylywk+uI1hMJzpKythK1wGGcrfRi6DYyjIDHgfYyUGBrDmZP6XzWZHO0NCzR6LfX3rb+/Rfwofw3RJPrV4gErErlwBKmDlE3AjDAYMBn1J3V8ykk+9NPaRCTQL/KmXeg16/6Nj1UkGH1iT/48AZBkMHhvCt5Qj4UCzW3NctswntRr5lgmo/DmVBzGeZzJ9WseQ+eFgoNkz5Frf2vzZy1Lz4wxBDM5QAvEZl/m32cJUE8y3kfkNlzXzyUr1XtBlztOMyVNuJ+Rvdg571u+7Apg/IoCM93dZD+S7mnA7f/W4PPdfKcwfEcCV74KU26HPd3vvvxLcTqImX4pWfiL+Cz7nf6ZEI8G/ut3eK8Lnp254pAOTevnK+G0yI4RFQvtzQ9r6vc0NEyvfL5Mt/g8XIbTVhsig+gAAAABJRU5ErkJggg==\"\n      width=\"48\"\n      height=\"24\"\n      alt=\"{{ 'asm.mainLogoLabel' | cxTranslate }}\"\n    />\n\n    <div class=\"asm-title\">\n      {{ 'asm.mainTitle' | cxTranslate }}\n    </div>\n  </div>\n  <div class=\"asm-bar-actions\">\n    <cx-asm-session-timer\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n    ></cx-asm-session-timer>\n\n    <a\n      class=\"close\"\n      title=\"{{ 'asm.hideUi' | cxTranslate }}\"\n      *ngIf=\"\n        !(csAgentToken$ | async)?.access_token &&\n        !(csAgentTokenLoading$ | async)\n      \"\n      (click)=\"hideUi()\"\n    ></a>\n\n    <a\n      class=\"logout\"\n      title=\"{{ 'asm.logout' | cxTranslate }}\"\n      *ngIf=\"(csAgentToken$ | async)?.access_token\"\n      (click)=\"logout()\"\n    >\n    </a>\n  </div>\n</div>\n\n<ng-container *ngIf=\"(csAgentToken$ | async)?.access_token; else showLoginForm\">\n  <cx-customer-emulation\n    *ngIf=\"customer$ | async as customer; else showCustomerSelection\"\n  ></cx-customer-emulation>\n  <ng-template #showCustomerSelection>\n    <cx-customer-selection\n      (submitEvent)=\"startCustomerEmulationSession($event)\"\n    ></cx-customer-selection>\n  </ng-template>\n</ng-container>\n\n<ng-template #showLoginForm>\n  <cx-csagent-login-form\n    (submitEvent)=\"loginCustomerSupportAgent($event)\"\n    [csAgentTokenLoading]=\"csAgentTokenLoading$ | async\"\n  ></cx-csagent-login-form>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-asm-main-ui{font-family:Arial,sans-serif;font-size:14px;width:100%;display:flex;flex-direction:column}cx-asm-main-ui .close,cx-asm-main-ui .logout{cursor:pointer;width:16px;height:16px}cx-asm-main-ui .close{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'/%3E%3C/svg%3E\")}cx-asm-main-ui .logout{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M11,2.7c1.2,0.6,2.2,1.5,2.9,2.6c1.3,1.9,1.5,4.4,0.6,6.5c-0.3,0.8-0.8,1.6-1.5,2.2c-0.6,0.6-1.4,1.1-2.2,1.5 C9.9,15.8,9,16,8,16c-0.9,0-1.9-0.2-2.7-0.5c-0.8-0.4-1.6-0.9-2.2-1.5c-0.6-0.6-1.1-1.4-1.5-2.2C0.7,9.6,0.9,7.2,2.1,5.3 c0.7-1.1,1.7-2,2.9-2.6v1.1C4.1,4.3,3.3,5.1,2.8,6C2.3,6.9,2,7.9,2,9c0,1.6,0.6,3.2,1.8,4.3c0.5,0.5,1.2,1,1.9,1.3 c1.5,0.6,3.2,0.6,4.7,0c0.7-0.3,1.4-0.7,1.9-1.3C13.4,12.1,14,10.6,14,9c0-1.1-0.3-2.1-0.8-3c-0.5-0.9-1.3-1.7-2.2-2.2 C11,3.8,11,2.7,11,2.7z M8,9C7.7,9,7.5,8.9,7.3,8.7C7.1,8.5,7,8.3,7,8V1c0-0.3,0.1-0.5,0.3-0.7c0.4-0.4,1-0.4,1.4,0 C8.9,0.5,9,0.7,9,1v7c0,0.3-0.1,0.5-0.3,0.7C8.5,8.9,8.2,9,8,9z'/%3E%3C/svg%3E%0A\")}cx-asm-main-ui button{padding:0 12px;white-space:nowrap;border-radius:4px;height:36px;font-weight:400;border-style:solid;border-width:1px}cx-asm-main-ui button:disabled{opacity:.4;cursor:not-allowed}cx-asm-main-ui .spinner{display:flex;justify-content:center;width:100%;color:#0a6ed1}cx-asm-main-ui .spinner>div{width:8px;height:8px;margin:6px;border-radius:100%;background-color:currentColor;-webkit-animation:1s infinite spinner-dots-pulse;animation:1s infinite spinner-dots-pulse}cx-asm-main-ui .spinner>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes spinner-dots-pulse{0%,100%,60%{-webkit-transform:scale(1);transform:scale(1)}30%{-webkit-transform:scale(2);transform:scale(2)}}@keyframes spinner-dots-pulse{0%,100%,60%{-webkit-transform:scale(1);transform:scale(1)}30%{-webkit-transform:scale(2);transform:scale(2)}}cx-asm-main-ui.hidden{display:none}cx-asm-main-ui .asm-bar{color:#fff;background-color:#354a5f;height:48px;display:flex;padding:0 32px;justify-content:space-between;z-index:1}cx-asm-main-ui .asm-bar-branding{display:flex;align-items:center}cx-asm-main-ui .asm-bar-branding .logo{-webkit-margin-end:8px;margin-inline-end:8px}cx-asm-main-ui .asm-bar-branding .asm-title{font-size:16px;font-weight:700}cx-asm-main-ui .asm-bar-actions{display:flex;justify-content:flex-end;align-items:center}cx-asm-main-ui>:nth-child(2){margin:32px;display:flex;width:calc(100vw - 4rem)}@media (min-width:767px){cx-asm-main-ui>:nth-child(2){width:50vw}}cx-asm-main-ui input{outline:0;border:1px solid #89919a;color:#32363a;background-color:#fff;border-radius:4px;padding:0 12px;height:36px}cx-asm-main-ui input:focus{box-shadow:0 0 0 1px #fafafa}cx-asm-main-ui input:hover{border-color:#085caf}cx-asm-main-ui input::-webkit-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-moz-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input:-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::-ms-input-placeholder{color:#74777a;font-style:italic}cx-asm-main-ui input::placeholder{color:#74777a;font-style:italic}@media (max-width:575px){cx-asm-main-ui .asm-bar-branding .asm-title{display:none}cx-asm-main-ui .asm-alert{margin-top:30px}}"]
            }] }
];
/** @nocollapse */
AsmMainUiComponent.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthService },
    { type: UserService },
    { type: AsmComponentService },
    { type: GlobalMessageService },
    { type: RoutingService }
];
AsmMainUiComponent.propDecorators = {
    disabled: [{ type: HostBinding, args: ['class.hidden',] }]
};
if (false) {
    /** @type {?} */
    AsmMainUiComponent.prototype.csAgentToken$;
    /** @type {?} */
    AsmMainUiComponent.prototype.csAgentTokenLoading$;
    /** @type {?} */
    AsmMainUiComponent.prototype.customer$;
    /** @type {?} */
    AsmMainUiComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    AsmMainUiComponent.prototype.startingCustomerSession;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.asmAuthService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.asmComponentService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    AsmMainUiComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
class AsmEnablerService {
    /**
     * @param {?} location
     * @param {?} winRef
     * @param {?} componentFactoryResolver
     * @param {?} outletService
     */
    constructor(location, winRef, componentFactoryResolver, outletService) {
        this.location = location;
        this.winRef = winRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletService = outletService;
        /**
         * indicates whether the ASM UI has been added already
         */
        this.isUiAdded = false;
    }
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     * @return {?}
     */
    load() {
        if (this.isEnabled()) {
            this.addUi();
        }
    }
    /**
     * Indicates whether the ASM module is enabled.
     * @private
     * @return {?}
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
     * @private
     * @return {?}
     */
    isLaunched() {
        /** @type {?} */
        const params = this.location.path().split('?')[1];
        return params && params.split('&').includes('asm=true');
    }
    /**
     * Evaluates local storage where we persist the usage of ASM.
     * @private
     * @return {?}
     */
    isUsedBefore() {
        return (this.winRef.localStorage &&
            this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === 'true');
    }
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     * @private
     * @return {?}
     */
    addUi() {
        if (this.isUiAdded) {
            return;
        }
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(AsmMainUiComponent);
        this.outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
        this.isUiAdded = true;
    }
}
AsmEnablerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmEnablerService.ctorParameters = () => [
    { type: Location },
    { type: WindowRef },
    { type: ComponentFactoryResolver },
    { type: OutletService }
];
/** @nocollapse */ AsmEnablerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AsmEnablerService_Factory() { return new AsmEnablerService(ɵɵinject(Location), ɵɵinject(WindowRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(OutletService)); }, token: AsmEnablerService, providedIn: "root" });
if (false) {
    /**
     * indicates whether the ASM UI has been added already
     * @type {?}
     * @private
     */
    AsmEnablerService.prototype.isUiAdded;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @protected
     */
    AsmEnablerService.prototype.outletService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
class AsmLoaderModule {
}
AsmLoaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, PageComponentModule],
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        useFactory: asmFactory,
                        deps: [AsmEnablerService],
                        multi: true,
                    },
                ],
            },] }
];
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 * @param {?} asmEnablerService
 * @return {?}
 */
function asmFactory(asmEnablerService) {
    /** @type {?} */
    const isReady = (/**
     * @return {?}
     */
    () => {
        asmEnablerService.load();
    });
    return isReady;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AsmSessionTimerComponent {
    /**
     * @param {?} config
     * @param {?} asmComponentService
     * @param {?} authService
     * @param {?} routingService
     * @param {?} changeDetectorRef
     */
    constructor(config, asmComponentService, authService, routingService, changeDetectorRef) {
        this.config = config;
        this.asmComponentService = asmComponentService;
        this.authService = authService;
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = new Subscription();
        this.maxStartDelayInSeconds = 60000;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timeLeft = this.getTimerStartDelayInSeconds();
        this.interval = setInterval((/**
         * @return {?}
         */
        () => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                clearInterval(this.interval);
                this.asmComponentService.logoutCustomerSupportAgentAndCustomer();
            }
            this.changeDetectorRef.markForCheck();
        }), 1000);
        this.resetOnNavigate();
        this.resetOnCustomerSessionChange();
    }
    /**
     * @private
     * @return {?}
     */
    resetOnNavigate() {
        this.subscriptions.add(this.routingService.isNavigating().subscribe((/**
         * @param {?} isNavigating
         * @return {?}
         */
        isNavigating => {
            if (isNavigating) {
                this.resetTimer();
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    resetOnCustomerSessionChange() {
        this.subscriptions.add(this.authService
            .getOccUserId()
            .pipe(distinctUntilChanged())
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.resetTimer())));
    }
    /**
     * @return {?}
     */
    resetTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft = this.getTimerStartDelayInSeconds();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getTimerStartDelayInSeconds() {
        if (this.config.asm.agentSessionTimer.startingDelayInSeconds >
            this.maxStartDelayInSeconds) {
            return this.maxStartDelayInSeconds;
        }
        else {
            return this.config.asm.agentSessionTimer.startingDelayInSeconds;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}
AsmSessionTimerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-asm-session-timer',
                template: "<span class=\"label\">{{ 'asm.agentSessionTimer.label' | cxTranslate }}:</span>\n<span class=\"time\"\n  >{{ timeLeft | formatTimer }}\n  {{ 'asm.agentSessionTimer.minutes' | cxTranslate }}</span\n>\n<a\n  class=\"reset\"\n  title=\"{{ 'asm.agentSessionTimer.reset' | cxTranslate }}\"\n  (click)=\"resetTimer()\"\n>\n</a>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-asm-session-timer{display:flex;align-items:center;height:16px;margin:0 15px}cx-asm-session-timer .label{margin:0 6px}@media (max-width:575px){cx-asm-session-timer .label{display:none}}cx-asm-session-timer .time{font-weight:600}cx-asm-session-timer .reset{margin:0 15px;cursor:pointer;width:16px;height:16px;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23d1e3ff' d='M14.9,7.5l-1,0.2c0.2,0.9,0.1,1.7-0.1,2.5c-0.3,1-0.8,2-1.5,2.7c-1.1,1.1-2.7,1.8-4.2,1.8 c-0.8,0-1.5-0.1-2.3-0.4c-1.5-0.6-2.7-1.8-3.3-3.3C2.1,10.2,2,9.5,2,8.7c0-1.6,0.7-3.1,1.8-4.3c0.7-0.8,1.7-1.3,2.7-1.5 c1-0.3,2-0.2,3,0l0,0v-1c-1-0.2-2.1-0.2-3.1,0C4.2,2.4,2.4,4,1.5,6.1C1.2,6.9,1,7.8,1,8.7c0,0.9,0.2,1.8,0.5,2.6 c0.4,0.9,0.9,1.7,1.5,2.3c0.7,0.7,1.4,1.2,2.3,1.5c0.8,0.3,1.7,0.5,2.6,0.5c0.9,0,1.8-0.2,2.6-0.5c2.1-0.9,3.7-2.7,4.2-5 C15,9.3,15,8.4,14.9,7.5z'/%3E%3Cpolygon fill='%23d1e3ff' points='11.5,2.8 9.2,4.5 9.7,0.5 '/%3E%3C/svg%3E%0A\") center center no-repeat}"]
            }] }
];
/** @nocollapse */
AsmSessionTimerComponent.ctorParameters = () => [
    { type: AsmConfig },
    { type: AsmComponentService },
    { type: AuthService },
    { type: RoutingService },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.interval;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.maxStartDelayInSeconds;
    /** @type {?} */
    AsmSessionTimerComponent.prototype.timeLeft;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.asmComponentService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    AsmSessionTimerComponent.prototype.changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatTimerPipe {
    /**
     * @param {?} totalSeconds
     * @return {?}
     */
    transform(totalSeconds) {
        if (totalSeconds < 0) {
            totalSeconds = 0;
        }
        /** @type {?} */
        const minutes = Math.floor(totalSeconds / 60);
        /** @type {?} */
        const seconds = totalSeconds % 60;
        /** @type {?} */
        let zeroPaddedMinutes;
        if (minutes < 10) {
            zeroPaddedMinutes = ('00' + minutes).slice(-2);
        }
        else {
            zeroPaddedMinutes = minutes + '';
        }
        /** @type {?} */
        const zeroPaddedSeconds = ('00' + seconds).slice(-2);
        return `${zeroPaddedMinutes}:${zeroPaddedSeconds}`;
    }
}
FormatTimerPipe.decorators = [
    { type: Pipe, args: [{
                name: 'formatTimer',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CSAgentLoginFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.csAgentTokenLoading = false;
        this.submitEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            userId: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
}
CSAgentLoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-csagent-login-form',
                template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"!csAgentTokenLoading\">\n  <label>\n    <input\n      type=\"text\"\n      [class.is-invalid]=\"isNotValid('userId')\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'asm.loginForm.userId.label' | cxTranslate }}\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('userId')\">\n      <span>{{ 'asm.loginForm.userId.required' | cxTranslate }}</span>\n    </div>\n  </label>\n\n  <label>\n    <input\n      type=\"password\"\n      [class.is-invalid]=\"isNotValid('password')\"\n      placeholder=\"{{ 'asm.loginForm.password.label' | cxTranslate }}\"\n      formControlName=\"password\"\n    />\n    <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n      <span>{{ 'asm.loginForm.password.required' | cxTranslate }}</span>\n    </div>\n  </label>\n  <button type=\"submit\">\n    {{ 'asm.loginForm.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div\n  *ngIf=\"csAgentTokenLoading\"\n  class=\"spinner\"\n  aria-hidden=\"false\"\n  aria-label=\"Loading\"\n>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-csagent-login-form form{display:flex;width:100%}@media (max-width:575px){cx-csagent-login-form form{flex-direction:column}cx-csagent-login-form form>*{margin-bottom:12px}}cx-csagent-login-form form label input{width:100%}cx-csagent-login-form button[type=submit]{color:#fff;border-color:#0a6ed1;background-color:#0a6ed1}cx-csagent-login-form button[type=submit]:hover{background-color:#085caf}@media (min-width:575px){cx-csagent-login-form label:nth-child(2){margin:0 8px}}"]
            }] }
];
/** @nocollapse */
CSAgentLoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
CSAgentLoginFormComponent.propDecorators = {
    csAgentTokenLoading: [{ type: Input }],
    submitEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CSAgentLoginFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    CSAgentLoginFormComponent.prototype.submitClicked;
    /** @type {?} */
    CSAgentLoginFormComponent.prototype.csAgentTokenLoading;
    /** @type {?} */
    CSAgentLoginFormComponent.prototype.submitEvent;
    /**
     * @type {?}
     * @private
     */
    CSAgentLoginFormComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerEmulationComponent {
    /**
     * @param {?} asmComponentService
     * @param {?} userService
     */
    constructor(asmComponentService, userService) {
        this.asmComponentService = asmComponentService;
        this.userService = userService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.userService.get().subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => (this.customer = user))));
        this.isCustomerEmulationSessionInProgress$ = this.asmComponentService.isCustomerEmulationSessionInProgress();
    }
    /**
     * @return {?}
     */
    logoutCustomer() {
        this.asmComponentService.logoutCustomer();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CustomerEmulationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-customer-emulation',
                template: "<ng-container\n  *ngIf=\"\n    isCustomerEmulationSessionInProgress$ | async;\n    else realCustomerSession\n  \"\n>\n  <input\n    formcontrolname=\"customer\"\n    type=\"text\"\n    disabled=\"true\"\n    placeholder=\"{{ customer?.name }}, {{ customer?.uid }}\"\n  />\n  <button (click)=\"logoutCustomer()\">\n    {{ 'asm.endSession' | cxTranslate }}\n  </button>\n</ng-container>\n\n<ng-template #realCustomerSession>\n  <div class=\"asm-alert\" role=\"alert\">\n    {{ 'asm.standardSessionInProgress' | cxTranslate }}\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["cx-customer-emulation{display:flex}@media (max-width:575px){cx-customer-emulation{flex-direction:column}cx-customer-emulation>*{margin-bottom:12px}}cx-customer-emulation button{padding-left:35px;color:#b00;border-color:#b00;background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23bb0000' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat}@media (min-width:575px){cx-customer-emulation input{flex:1}cx-customer-emulation button{-webkit-margin-start:8px;margin-inline-start:8px}}cx-customer-emulation button:hover{background:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M14.8,8c0-3.7-3-6.8-6.8-6.8S1.3,4.2,1.3,8s3,6.8,6.8,6.8S14.8,11.7,14.8,8z M2.6,8c0-3,2.4-5.5,5.5-5.5S13.5,5,13.5,8 s-2.4,5.5-5.5,5.5S2.6,11,2.6,8z M10.7,5.8v4.4c0,0.2-0.2,0.4-0.4,0.4H5.9c-0.2,0-0.4-0.2-0.4-0.4V5.8c0-0.2,0.2-0.4,0.4-0.4h4.4 C10.5,5.4,10.7,5.6,10.7,5.8z'/%3E%3C/svg%3E%0A\") 10px center no-repeat #b00;color:#fff;fill:#fff}.asm-alert{padding:9px 12px;border-radius:4px;border:1px solid #89919a;background-color:#f4f4f4;color:#32363a;text-align:center;flex:1}"]
            }] }
];
/** @nocollapse */
CustomerEmulationComponent.ctorParameters = () => [
    { type: AsmComponentService },
    { type: UserService }
];
if (false) {
    /** @type {?} */
    CustomerEmulationComponent.prototype.customer;
    /** @type {?} */
    CustomerEmulationComponent.prototype.isCustomerEmulationSessionInProgress$;
    /**
     * @type {?}
     * @private
     */
    CustomerEmulationComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.asmComponentService;
    /**
     * @type {?}
     * @protected
     */
    CustomerEmulationComponent.prototype.userService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerSelectionComponent {
    /**
     * @param {?} fb
     * @param {?} asmService
     * @param {?} config
     */
    constructor(fb, asmService, config) {
        this.fb = fb;
        this.asmService = asmService;
        this.config = config;
        this.subscription = new Subscription();
        this.submitEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            searchTerm: [''],
        });
        this.asmService.customerSearchReset();
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.searchResults = this.asmService.getCustomerSearchResults();
        this.subscription.add(this.form.controls.searchTerm.valueChanges
            .pipe(debounceTime(300))
            .subscribe((/**
         * @param {?} searchTermValue
         * @return {?}
         */
        searchTermValue => {
            this.handleSearchTerm(searchTermValue);
        })));
    }
    /**
     * @private
     * @param {?} searchTermValue
     * @return {?}
     */
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
    /**
     * @param {?} customer
     * @return {?}
     */
    selectCustomerFromList(customer) {
        this.selectedCustomer = customer;
        this.form.controls.searchTerm.setValue(this.selectedCustomer.name);
        this.asmService.customerSearchReset();
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (Boolean(this.selectedCustomer)) {
            this.submitEvent.emit({ customerId: this.selectedCustomer.customerId });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    closeResults() {
        this.asmService.customerSearchReset();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.asmService.customerSearchReset();
    }
}
CustomerSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-customer-selection',
                template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <input\n    #searchTerm\n    type=\"text\"\n    formControlName=\"searchTerm\"\n    placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n  />\n  <button type=\"submit\" [disabled]=\"!selectedCustomer\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <a\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n    ><span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span></a\n  >\n  <a\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      (!!results.entries && results.entries.length <= 0)\n    \"\n    >{{ 'asm.customerSearch.noMatch' | cxTranslate }}</a\n  >\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                host: {
                    '(document:click)': 'onDocumentClick($event)',
                },
                styles: ["cx-customer-selection button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAKtmlDQ1BEaXNwbGF5AABIx62Wd1BT+RbHf/fe9EILICAl9N6lSwk9dOkgKiEJJJQYEoKIDZHFFVwLKiKgrugiRcFGkbUgFiwsgg2sC7IoqOtiwYbKu8Aj7L6Z98ebeWfm3N9nzpzf+Z1z7/3NfAGgApZQmA7LAZAhyBKF+3nSY+Pi6fghAAEYEIE+cGaxxUJGWFgQQG12/ad9uIdmo3bbfKoW+N9MnsMVswGAwlBO4ojZGSifQv0ZWyjKAgCpROO6K7KEU9yOsqIIbRDlO1OcMsMjU5w0w1+ncyLDvQDAoFMRKCyWKAUAijoap2ezU9A6lIUoWwk4fAHKU/26sXksDspHUDbLyFg+xf0oGyX9rU7KP2omSWuyWClSnpll2gjefLEwnbUS/L8tI10ye4YB6hSeyD8cXWXQd9aftjxQyoKkkNBZ5nOm86eZJ/GPmmW22Ct+ljks70Dp3vSQoFlO5vsypXWymJGzzBX7RMyyaHm49KxkkRdjllmiuXMlaVHSOI/LlNbP5UXGzHI2PzpklsVpEYFzOV7SuEgSLu2fK/DznDvXVzp7hvhv8/KZ0r1ZvEh/6eysuf65AsZcTXGstDcO19tnLidKmi/M8pSeJUwPk+Zz0/2kcXF2hHRvFvpDzu0Nk77DVFZA2CwDfxAG6MAGWIEcwAcgi5uTNTWE13LhShE/hZdFZ6C3i0tnCtgWZnQbK2snAKbu6syv8K5/+g5CyoS5WGY+AE7ofUCC52JLFwNwvAEAhdC5mMFn9Mqg3+DsdrZElD0Tw0w9sIAEZIEiUAWaQBcYAXO0O3vgAjyADwgAoSASxIGlgA14IAOIwAqwGqwHhaAYbAO7QDnYDw6CGnAUnAAt4Ay4AK6AG6AH3AUPwQAYBi/BGPgAJiAIwkNUiAapQlqQPmQK2UCOkBvkAwVB4VAclAilQAJIAq2GNkDFUAlUDh2AaqHj0GnoAnQN6oXuQ4PQKPQW+gIjMAVWhDVgA9gSdoQZcCAcCS+BU+BMOBcugLfAZXAVfARuhi/AN+C78AD8Eh5HAEJGlBFtxBxxRLyQUCQeSUZEyFqkCClFqpAGpA3pRG4jA8gr5DMGh6Fh6BhzjAvGHxOFYWMyMWsxmzHlmBpMM+YS5jZmEDOG+Y6lYtWxplhnLBMbi03BrsAWYkux1dgm7GXsXeww9gMOh1PGGeIccP64OFwqbhVuM24vrhHXjuvFDeHG8Xi8Kt4U74oPxbPwWfhC/B78Efx5/C38MP4TgUzQItgQfAnxBAEhn1BKqCOcI9wiPCdMEOWI+kRnYiiRQ1xJ3Eo8RGwj3iQOEydI8iRDkispkpRKWk8qIzWQLpMekd6RyWQdshN5EZlPziOXkY+Rr5IHyZ8pChQTihclgSKhbKEcprRT7lPeUalUA6oHNZ6aRd1CraVepD6hfpKhyVjIMGU4MutkKmSaZW7JvJYlyurLMmSXyubKlsqelL0p+0qOKGcg5yXHklsrVyF3Wq5PblyeJm8tHyqfIb9Zvk7+mvyIAl7BQMFHgaNQoHBQ4aLCEA2h6dK8aGzaBtoh2mXasCJO0VCRqZiqWKx4VLFbcUxJQWmBUrRSjlKF0lmlAWVE2UCZqZyuvFX5hPI95S/zNOYx5nHnbZrXMO/WvI8q81U8VLgqRSqNKndVvqjSVX1U01S3q7aoPlbDqJmoLVJbobZP7bLaq/mK813ms+cXzT8x/4E6rG6iHq6+Sv2gepf6uIamhp+GUGOPxkWNV5rKmh6aqZo7Nc9pjmrRtNy0+Fo7tc5rvaAr0Rn0dHoZ/RJ9TFtd219bon1Au1t7QsdQJ0onX6dR57EuSddRN1l3p26H7piell6w3mq9er0H+kR9R32e/m79Tv2PBoYGMQYbDVoMRgxVDJmGuYb1ho+MqEbuRplGVUZ3jHHGjsZpxnuNe0xgEzsTnkmFyU1T2NTelG+617TXDGvmZCYwqzLrM6eYM8yzzevNBy2ULYIs8i1aLF5b6lnGW2637LT8bmVnlW51yOqhtYJ1gHW+dZv1WxsTG7ZNhc0dW6qtr+0621bbNwtMF3AX7FvQb0ezC7bbaNdh983ewV5k32A/6qDnkOhQ6dDnqOgY5rjZ8aoT1snTaZ3TGafPzvbOWc4nnP9yMXdJc6lzGVlouJC78NDCIVcdV5brAdcBN7pbotvPbgPu2u4s9yr3px66HhyPao/nDGNGKuMI47WnlafIs8nzo5ez1xqvdm/E28+7yLvbR8Enyqfc54mvjm+Kb73vmJ+d3yq/dn+sf6D/dv8+pgaTzaxljgU4BKwJuBRICYwILA98GmQSJApqC4aDA4J3BD8K0Q8RhLSEglBm6I7Qx2GGYZlhvy7CLQpbVLHoWbh1+OrwzghaxLKIuogPkZ6RWyMfRhlFSaI6omWjE6Jroz/GeMeUxAzEWsauib0RpxbHj2uNx8dHx1fHjy/2Wbxr8XCCXUJhwr0lhktyllxbqrY0fenZZbLLWMtOJmITYxLrEr+yQllVrPEkZlJl0hjbi72b/ZLjwdnJGeW6cku4z5Ndk0uSR1JcU3akjPLceaW8V3wvfjn/Tap/6v7Uj2mhaYfTJtNj0hszCBmJGacFCoI0waXlmstzlvcKTYWFwoFM58xdmWOiQFG1GBIvEbdmKaKiqEtiJPlBMpjtll2R/WlF9IqTOfI5gpyulSYrN618nuub+8sqzCr2qo7V2qvXrx5cw1hzYC20NmltxzrddQXrhvP88mrWk9anrf8t3yq/JP/9hpgNbQUaBXkFQz/4/VBfKFMoKuzb6LJx/4+YH/k/dm+y3bRn0/ciTtH1Yqvi0uKvm9mbr/9k/VPZT5Nbkrd0b7Xfum8bbptg273t7ttrSuRLckuGdgTvaN5J31m08/2uZbuulS4o3b+btFuye6AsqKx1j96ebXu+lvPK71Z4VjRWqlduqvy4l7P31j6PfQ37NfYX7//yM//n/gN+B5qrDKpKD+IOZh98dij6UOcvjr/UVqtVF1d/Oyw4PFATXnOp1qG2tk69bms9XC+pHz2ScKTnqPfR1gbzhgONyo3Fx8AxybEXxxOP3zsReKLjpOPJhlP6pyqbaE1FzVDzyuaxFl7LQGtca+/pgNMdbS5tTb9a/Hr4jPaZirNKZ7eeI50rODd5Pvf8eLuw/dWFlAtDHcs6Hl6MvXjn0qJL3ZcDL1+94nvlYiej8/xV16tnrjlfO33d8XrLDfsbzV12XU2/2f3W1G3f3XzT4WZrj1NPW+/C3nO33G9duO19+8od5p0bd0Pu9t6Lutffl9A30M/pH7mffv/Ng+wHEw/zHmEfFT2We1z6RP1J1e/GvzcO2A+cHfQe7Hoa8fThEHvo5R/iP74OFzyjPit9rvW8dsRm5Myo72jPi8Uvhl8KX068KvxT/s/K10avT/3l8VfXWOzY8BvRm8m3m9+pvjv8fsH7jvGw8ScfMj5MfCz6pPqp5rPj584vMV+eT6z4iv9a9s34W9v3wO+PJjMmJ4UsEWtaCiCow8nJALw9DAA1DgBaDwCkxTNaetqgGf0/TeC/8YzenjZ7AA55ABCJ6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection form{display:flex;width:100%}@media (min-width:575px){cx-customer-selection button[type=submit]{-webkit-margin-start:8px;margin-inline-start:8px}cx-customer-selection form input{flex:1}}@media (max-width:575px){cx-customer-selection form{flex-direction:column}cx-customer-selection form>*{margin-bottom:12px}}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{width:calc(100vw - 4rem);border:1px solid #89919a;position:absolute;z-index:11;margin-top:40px;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;min-height:50px}cx-customer-selection .asm-results a{color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px}@media (min-width:767px){cx-customer-selection .asm-results,cx-customer-selection form{width:50vw}cx-customer-selection .asm-results a{flex-direction:row}}cx-customer-selection .asm-results a *{flex:1}cx-customer-selection .asm-results a:hover{color:#32363a;background-color:#fafafa}"]
            }] }
];
/** @nocollapse */
CustomerSelectionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AsmService },
    { type: AsmConfig }
];
CustomerSelectionComponent.propDecorators = {
    submitEvent: [{ type: Output }],
    resultList: [{ type: ViewChild, args: ['resultList', { static: false },] }],
    searchTerm: [{ type: ViewChild, args: ['searchTerm', { static: false },] }]
};
if (false) {
    /** @type {?} */
    CustomerSelectionComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.subscription;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchResultsLoading$;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchResults;
    /** @type {?} */
    CustomerSelectionComponent.prototype.selectedCustomer;
    /** @type {?} */
    CustomerSelectionComponent.prototype.submitEvent;
    /** @type {?} */
    CustomerSelectionComponent.prototype.resultList;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchTerm;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.asmService;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AsmModule {
}
AsmModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddedToCartDialogComponent {
    /**
     * @param {?} modalService
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(modalService, cartService, fb) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.fb = fb;
        this.iconTypes = ICON_TYPE;
        this.modalIsOpen = false;
        this.quantity = 0;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.entry$ = this.entry$.pipe(tap((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            if (entry) {
                const { code } = entry.product;
                if (!this.form.controls[code]) {
                    this.form.setControl(code, this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    const entryForm = (/** @type {?} */ (this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                this.form.markAsPristine();
                if (!this.modalIsOpen) {
                    this.modalIsOpen = true;
                }
            }
        })));
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.dismissModal('Removed');
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
}
AddedToCartDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-added-to-cart-dialog',
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"form.dirty\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice?.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
AddedToCartDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: CartService },
    { type: FormBuilder }
];
AddedToCartDialogComponent.propDecorators = {
    dialog: [{ type: ViewChild, args: ['dialog', { static: false, read: ElementRef },] }]
};
if (false) {
    /** @type {?} */
    AddedToCartDialogComponent.prototype.iconTypes;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.entry$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.cart$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.loaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.increment;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.modalIsOpen;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.quantity;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.dialog;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.form;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToCartComponent {
    /**
     * @param {?} cartService
     * @param {?} modalService
     * @param {?} currentProductService
     * @param {?} cd
     */
    constructor(cartService, modalService, currentProductService, cd) {
        this.cartService = cartService;
        this.modalService = modalService;
        this.currentProductService = currentProductService;
        this.cd = cd;
        this.showQuantity = true;
        this.hasStock = false;
        this.quantity = 1;
        this.increment = false;
    }
    /**
     * @return {?}
     */
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
                .subscribe((/**
             * @param {?} product
             * @return {?}
             */
            (product) => {
                this.productCode = product.code;
                this.setStockInfo(product);
                this.cartEntry$ = this.cartService.getEntry(this.productCode);
                this.cd.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    setStockInfo(product) {
        this.quantity = 1;
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
        if (this.hasStock && product.stock.stockLevel) {
            this.maxQuantity = product.stock.stockLevel;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateCount(value) {
        this.quantity = value;
    }
    /**
     * @return {?}
     */
    addToCart() {
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        // check item is already present in the cart
        // so modal will have proper header text displayed
        this.cartService
            .getEntry(this.productCode)
            .subscribe((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            if (entry) {
                this.increment = true;
            }
            this.openModal();
            this.cartService.addEntry(this.productCode, this.quantity);
            this.increment = false;
        }))
            .unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    openModal() {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AddToCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-cart',
                template: "<div class=\"quantity\" *ngIf=\"productCode && showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    [value]=\"quantity\"\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity || null\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AddToCartComponent.ctorParameters = () => [
    { type: CartService },
    { type: ModalService },
    { type: CurrentProductService },
    { type: ChangeDetectorRef }
];
AddToCartComponent.propDecorators = {
    productCode: [{ type: Input }],
    showQuantity: [{ type: Input }],
    product: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.showQuantity;
    /**
     * As long as we do not support #5026, we require product input, as we need
     *  a reference to the product model to fetch the stock data.
     * @type {?}
     */
    AddToCartComponent.prototype.product;
    /** @type {?} */
    AddToCartComponent.prototype.maxQuantity;
    /** @type {?} */
    AddToCartComponent.prototype.modalRef;
    /** @type {?} */
    AddToCartComponent.prototype.hasStock;
    /** @type {?} */
    AddToCartComponent.prototype.quantity;
    /** @type {?} */
    AddToCartComponent.prototype.increment;
    /** @type {?} */
    AddToCartComponent.prototype.cartEntry$;
    /** @type {?} */
    AddToCartComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    AddToCartComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PromotionsComponent {
    constructor() { }
}
PromotionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-promotions',
                template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <strong *ngFor=\"let promotion of promotions\">\n    <li>{{ promotion.description }}</li>\n  </strong>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PromotionsComponent.ctorParameters = () => [];
PromotionsComponent.propDecorators = {
    promotions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PromotionsComponent.prototype.promotions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PromotionsModule {
}
PromotionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PromotionsComponent],
                exports: [PromotionsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppliedCouponsComponent {
    /**
     * @param {?} cartVoucherService
     */
    constructor(cartVoucherService) {
        this.cartVoucherService = cartVoucherService;
        this.cartIsLoading = false;
        this.isReadOnly = false;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    get sortedVouchers() {
        this.vouchers = this.vouchers || [];
        return this.vouchers.slice().sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            return a.code.localeCompare(b.code);
        }));
    }
    /**
     * @param {?} voucherId
     * @return {?}
     */
    removeVoucher(voucherId) {
        this.cartVoucherService.removeVoucher(voucherId);
    }
}
AppliedCouponsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-applied-coupons',
                template: "<div *ngIf=\"isReadOnly; else editableCoupons\">\r\n  <div *ngIf=\"sortedVouchers.length > 0\">\r\n    <div class=\"cx-applied-coupon-title\">\r\n      {{ 'voucher.vouchersApplied' | cxTranslate }}\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngFor=\"let voucher of sortedVouchers\"\r\n    class=\"coupon-summary cx-coupon-card textonly\"\r\n    role=\"filter\"\r\n  >\r\n    <span class=\"cx-applied-coupon-code\">{{ voucher.voucherCode }}</span>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #editableCoupons>\r\n  <div class=\"row\">\r\n    <div\r\n      *ngFor=\"let voucher of sortedVouchers\"\r\n      class=\"col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid\"\r\n      role=\"filter\"\r\n    >\r\n      <div class=\"cx-coupon-apply cx-coupon-card cx-coupon-list-wrap\">\r\n        <span class=\"cx-cart-coupon-code\">{{ voucher.voucherCode }}</span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"removeVoucher(voucher.voucherCode)\"\r\n          [disabled]=\"cartIsLoading\"\r\n          [class.disabled]=\"cartIsLoading\"\r\n        >\r\n          <span aria-hidden=\"true\">\r\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\r\n          </span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AppliedCouponsComponent.ctorParameters = () => [
    { type: CartVoucherService }
];
AppliedCouponsComponent.propDecorators = {
    vouchers: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    isReadOnly: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppliedCouponsComponent.prototype.vouchers;
    /** @type {?} */
    AppliedCouponsComponent.prototype.cartIsLoading;
    /** @type {?} */
    AppliedCouponsComponent.prototype.isReadOnly;
    /** @type {?} */
    AppliedCouponsComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    AppliedCouponsComponent.prototype.cartVoucherService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartCouponComponent {
    /**
     * @param {?} cartService
     * @param {?} authService
     * @param {?} cartVoucherService
     * @param {?} formBuilder
     */
    constructor(cartService, authService, cartVoucherService, formBuilder) {
        this.cartService = cartService;
        this.authService = authService;
        this.cartVoucherService = cartVoucherService;
        this.formBuilder = formBuilder;
        this.subscription = new Subscription$1();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = combineLatest([
            this.cartService.getActive(),
            this.authService.getOccUserId(),
        ]).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart, userId]) => (this.cartId =
            userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => cart)));
        this.cartIsLoading$ = this.cartService
            .getLoaded()
            .pipe(map((/**
         * @param {?} loaded
         * @return {?}
         */
        loaded => !loaded)));
        this.cartVoucherService.resetAddVoucherProcessingState();
        this.form = this.formBuilder.group({
            couponCode: ['', [Validators.required]],
        });
        this.submitDisabled$ = combineLatest([
            this.cartIsLoading$,
            this.form.valueChanges.pipe(startWith(true), map((/**
             * @return {?}
             */
            () => this.form.valid))),
            this.cartVoucherService.getAddVoucherResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cartIsLoading, btnEnabled, addVoucherIsLoading]) => cartIsLoading || !btnEnabled || addVoucherIsLoading)));
        this.subscription.add(this.cartVoucherService
            .getAddVoucherResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            this.onSuccess(success);
        })));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.form.reset();
            this.cartVoucherService.resetAddVoucherProcessingState();
        }
    }
    /**
     * @return {?}
     */
    applyVoucher() {
        this.cartVoucherService.addVoucher(this.form.value.couponCode, this.cartId);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.cartVoucherService.resetAddVoucherProcessingState();
    }
}
CartCouponComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-coupon',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-cart-coupon-title\">\n    {{ 'voucher.coupon' | cxTranslate }}\n  </div>\n  <div class=\"form-group \">\n    <form (submit)=\"applyVoucher()\" [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <input\n            type=\"text\"\n            class=\"form-control input-coupon-code\"\n            id=\"applyVoucher\"\n            formControlName=\"couponCode\"\n            placeholder=\"{{ 'voucher.placeholder' | cxTranslate }}\"\n          />\n        </div>\n        <div class=\"col-md-4\">\n          <button\n            class=\"btn btn-block btn-action apply-coupon-button\"\n            type=\"submit\"\n            [disabled]=\"submitDisabled$ | async\"\n            [class.disabled]=\"submitDisabled$ | async\"\n          >\n            {{ 'voucher.apply' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [cartIsLoading]=\"cartIsLoading$ | async\"\n    [isReadOnly]=\"false\"\n  >\n  </cx-applied-coupons>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
CartCouponComponent.ctorParameters = () => [
    { type: CartService },
    { type: AuthService },
    { type: CartVoucherService },
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    CartCouponComponent.prototype.form;
    /** @type {?} */
    CartCouponComponent.prototype.cartIsLoading$;
    /** @type {?} */
    CartCouponComponent.prototype.submitDisabled$;
    /** @type {?} */
    CartCouponComponent.prototype.cart$;
    /** @type {?} */
    CartCouponComponent.prototype.cartId;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.cartVoucherService;
    /**
     * @type {?}
     * @private
     */
    CartCouponComponent.prototype.formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartCouponModule {
}
CartCouponModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CartCouponComponent, AppliedCouponsComponent],
                exports: [CartCouponComponent, AppliedCouponsComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    I18nModule,
                    IconModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CartApplyCouponComponent: {
                                component: CartCouponComponent,
                            },
                        },
                    }))),
                ],
                entryComponents: [CartCouponComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartItemListComponent {
    /**
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(cartService, fb) {
        this.cartService = cartService;
        this.fb = fb;
        this.isReadOnly = false;
        this.hasHeader = true;
        this.potentialProductPromotions = [];
        this.cartIsLoading = false;
        this.form = this.fb.group({});
        this._items = [];
    }
    /**
     * @param {?} _items
     * @return {?}
     */
    set items(_items) {
        this._items = _items;
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            const { code } = item.product;
            if (!this.form.controls[code]) {
                this.form.setControl(code, this.createEntryFormGroup(item));
            }
            else {
                /** @type {?} */
                const entryForm = (/** @type {?} */ (this.form.controls[code]));
                entryForm.controls.quantity.setValue(item.quantity);
            }
        }));
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    // TODO remove for 2.0 - left to keep backward compatibility
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity, }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getPotentialProductPromotionsForItem(item) {
        /** @type {?} */
        const entryPromotions = [];
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
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    isConsumedByEntry(consumedEntry, entry) {
        /** @type {?} */
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
}
CartItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item-list',
                template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CartItemListComponent.ctorParameters = () => [
    { type: CartService },
    { type: FormBuilder }
];
CartItemListComponent.propDecorators = {
    isReadOnly: [{ type: Input }],
    hasHeader: [{ type: Input }],
    items: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    cartIsLoading: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CartItemListComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemListComponent.prototype.hasHeader;
    /** @type {?} */
    CartItemListComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemListComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemListComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    CartItemListComponent.prototype._items;
    /**
     * @type {?}
     * @protected
     */
    CartItemListComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CartItemListComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Item() { }
if (false) {
    /** @type {?|undefined} */
    Item.prototype.product;
    /** @type {?|undefined} */
    Item.prototype.quantity;
    /** @type {?|undefined} */
    Item.prototype.basePrice;
    /** @type {?|undefined} */
    Item.prototype.totalPrice;
    /** @type {?|undefined} */
    Item.prototype.updateable;
}
class CartItemComponent {
    constructor() {
        this.compact = false;
        this.isReadOnly = false;
        this.cartIsLoading = false;
        this.remove = new EventEmitter();
        this.update = new EventEmitter();
        this.view = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} product
     * @return {?}
     */
    isProductOutOfStock(product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    }
    /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    updateItem(updatedQuantity) {
        this.update.emit({ item: this.item, updatedQuantity });
    }
    /**
     * @return {?}
     */
    removeItem() {
        this.remove.emit(this.item);
    }
    /**
     * @return {?}
     */
    viewItem() {
        this.view.emit();
    }
}
CartItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-item',
                template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            [isValueChangeable]=\"item.updateable\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly && item.updateable\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
            }] }
];
CartItemComponent.propDecorators = {
    compact: [{ type: Input }],
    item: [{ type: Input }],
    potentialProductPromotions: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    cartIsLoading: [{ type: Input }],
    remove: [{ type: Output }],
    update: [{ type: Output }],
    view: [{ type: Output }],
    parent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CartItemComponent.prototype.compact;
    /** @type {?} */
    CartItemComponent.prototype.item;
    /** @type {?} */
    CartItemComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemComponent.prototype.remove;
    /** @type {?} */
    CartItemComponent.prototype.update;
    /** @type {?} */
    CartItemComponent.prototype.view;
    /** @type {?} */
    CartItemComponent.prototype.parent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderSummaryComponent {
}
OrderSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-summary',
                template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.subTotal?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.net\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.totalDiscounts?.value > 0\">\n    {{ 'orderCost.discount' | cxTranslate }}\n    {{ cart.totalDiscounts?.formattedValue }}\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"!cart.net\">\n    {{ 'orderCost.grossTax' | cxTranslate }}\n    {{ cart.totalTax?.formattedValue }}.\n  </div>\n</div>\n\n<!--\n<cx-promotions\n  *ngIf=\"cart\"\n  [promotions]=\"cart.appliedOrderPromotions\"\n></cx-promotions>\n-->\n\n<div *cxFeatureLevel=\"'1.3'\">\n  <cx-applied-coupons\n    [vouchers]=\"cart.appliedVouchers\"\n    [isReadOnly]=\"true\"\n  ></cx-applied-coupons>\n</div>\n"
            }] }
];
OrderSummaryComponent.propDecorators = {
    cart: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OrderSummaryComponent.prototype.cart;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartSharedModule {
}
CartSharedModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToCartModule {
}
AddToCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CommonModule,
                    RouterModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductAddToCartComponent: {
                                component: AddToCartComponent,
                            },
                        },
                    }))),
                    UrlModule,
                    IconModule,
                    I18nModule,
                    ItemCounterModule,
                    AutoFocusDirectiveModule,
                ],
                declarations: [AddToCartComponent, AddedToCartDialogComponent],
                entryComponents: [AddToCartComponent, AddedToCartDialogComponent],
                exports: [AddToCartComponent, AddedToCartDialogComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartDetailsComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        entries => entries.length > 0)));
        this.cartLoaded$ = this.cartService.getLoaded();
    }
    /**
     * @param {?} cart
     * @return {?}
     */
    getAllPromotionsForCart(cart) {
        /** @type {?} */
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        potentialPromotions.push(...(cart.potentialProductPromotions || []));
        /** @type {?} */
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        appliedPromotions.push(...(cart.appliedProductPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
}
CartDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-details',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CartDetailsComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CartDetailsComponent.prototype.cart$;
    /** @type {?} */
    CartDetailsComponent.prototype.entries$;
    /** @type {?} */
    CartDetailsComponent.prototype.cartLoaded$;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartDetailsModule {
}
CartDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CommonModule,
                    CartCouponModule,
                    RouterModule,
                    UrlModule,
                    PromotionsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CartComponent: {
                                component: CartDetailsComponent,
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [CartDetailsComponent],
                exports: [CartDetailsComponent],
                entryComponents: [CartDetailsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartNotEmptyGuard {
    /**
     * @param {?} cartService
     * @param {?} routingService
     */
    constructor(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return combineLatest([
            this.cartService.getActive(),
            this.cartService.getLoaded(),
        ]).pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, loaded]) => loaded)), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => {
            if (this.isEmpty(cart)) {
                this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        })));
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return cart && !cart.totalItems;
    }
}
CartNotEmptyGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartNotEmptyGuard.ctorParameters = () => [
    { type: CartService },
    { type: RoutingService }
];
/** @nocollapse */ CartNotEmptyGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(ɵɵinject(CartService), ɵɵinject(RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartNotEmptyGuard.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CartNotEmptyGuard.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartPageLayoutHandler {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    handle(slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ([slots, cart]) => {
                if (cart.totalItems) {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    slot => slot !== 'EmptyCartMiddleContent'));
                }
                else {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    slot => slot !== 'TopContent' && slot !== 'CenterRightContentSlot'));
                }
            })));
        }
        return slots$;
    }
}
CartPageLayoutHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartPageLayoutHandler.ctorParameters = () => [
    { type: CartService }
];
/** @nocollapse */ CartPageLayoutHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function CartPageLayoutHandler_Factory() { return new CartPageLayoutHandler(ɵɵinject(CartService)); }, token: CartPageLayoutHandler, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartPageLayoutHandler.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartTotalsComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        entries => entries.length > 0)));
    }
}
CartTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-totals',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n    <button\n      [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n      *ngIf=\"entries.length\"\n      class=\"btn btn-primary btn-block\"\n      type=\"button\"\n    >\n      {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CartTotalsComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CartTotalsComponent.prototype.cart$;
    /** @type {?} */
    CartTotalsComponent.prototype.entries$;
    /**
     * @type {?}
     * @protected
     */
    CartTotalsComponent.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartTotalsModule {
}
CartTotalsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CartTotalsComponent: {
                                component: CartTotalsComponent,
                            },
                        },
                    }))),
                    CartSharedModule,
                    I18nModule,
                    CartCouponModule,
                ],
                declarations: [CartTotalsComponent],
                exports: [CartTotalsComponent],
                entryComponents: [CartTotalsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MiniCartComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.deliveryItemsQuantity || 0)));
        this.total$ = this.cartService.getActive().pipe(filter((/**
         * @param {?} cart
         * @return {?}
         */
        cart => !!cart.totalPrice)), map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => cart.totalPrice.formattedValue)));
    }
}
MiniCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-mini-cart',
                template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MiniCartComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    MiniCartComponent.prototype.iconTypes;
    /** @type {?} */
    MiniCartComponent.prototype.quantity$;
    /** @type {?} */
    MiniCartComponent.prototype.total$;
    /**
     * @type {?}
     * @protected
     */
    MiniCartComponent.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MiniCartModule {
}
MiniCartModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MiniCartComponent: {
                                component: MiniCartComponent,
                            },
                        },
                    }))),
                    UrlModule,
                    IconModule,
                    I18nModule,
                ],
                declarations: [MiniCartComponent],
                exports: [MiniCartComponent],
                entryComponents: [MiniCartComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToWishListComponent {
    /**
     * @param {?} wishListService
     * @param {?} currentProductService
     * @param {?} authService
     */
    constructor(wishListService, currentProductService, authService) {
        this.wishListService = wishListService;
        this.currentProductService = currentProductService;
        this.authService = authService;
        this.product$ = this.currentProductService.getProduct().pipe(filter((/**
         * @param {?} product
         * @return {?}
         */
        product => Boolean(product))), tap((/**
         * @param {?} product
         * @return {?}
         */
        product => this.setStockInfo(product))));
        this.wishListEntries$ = this.wishListService.getWishList().pipe(filter((/**
         * @param {?} wishlist
         * @return {?}
         */
        wishlist => Boolean(wishlist))), map((/**
         * @param {?} wishList
         * @return {?}
         */
        wishList => wishList.entries)));
        this.userLoggedIn$ = this.authService.isUserLoggedIn();
        this.loading$ = this.wishListService.getWishListLoading();
        this.hasStock = false;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} product
     * @return {?}
     */
    add(product) {
        this.wishListService.addEntry(product.code);
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    remove(entry) {
        this.wishListService.removeEntry(entry);
    }
    /**
     * @param {?} product
     * @param {?} entries
     * @return {?}
     */
    getProductInWishList(product, entries) {
        /** @type {?} */
        const item = entries.find((/**
         * @param {?} entry
         * @return {?}
         */
        entry => entry.product.code === product.code));
        return item;
    }
    /**
     * @private
     * @param {?} product
     * @return {?}
     */
    setStockInfo(product) {
        this.hasStock =
            product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    }
}
AddToWishListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-wishlist',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-container *ngIf=\"userLoggedIn$ | async; else loginPrompt\">\n    <ng-container *ngIf=\"wishListEntries$ | async as entries\">\n      <ng-container *ngIf=\"hasStock\">\n        <div\n          *ngIf=\"getProductInWishList(product, entries) as entry; else addItem\"\n        >\n          <button\n            class=\"btn btn-link button-remove\"\n            (click)=\"remove(entry)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.remove' | cxTranslate\n            }}</span>\n          </button>\n        </div>\n        <ng-template #addItem>\n          <button\n            class=\"btn btn-link button-add\"\n            (click)=\"add(product)\"\n            [disabled]=\"loading$ | async\"\n          >\n            <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n            <span class=\"button-text\">{{\n              'addToWishList.add' | cxTranslate\n            }}</span>\n          </button>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #loginPrompt>\n  <ng-container *ngIf=\"hasStock\">\n    <a\n      class=\"btn btn-link button-add-link\"\n      [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >\n      <cx-icon [type]=\"iconTypes.EMPTY_HEART\"></cx-icon>\n      <span class=\"button-text\">{{\n        'addToWishList.anonymous' | cxTranslate\n      }}</span>\n    </a>\n  </ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AddToWishListComponent.ctorParameters = () => [
    { type: WishListService },
    { type: CurrentProductService },
    { type: AuthService }
];
if (false) {
    /** @type {?} */
    AddToWishListComponent.prototype.product$;
    /** @type {?} */
    AddToWishListComponent.prototype.wishListEntries$;
    /** @type {?} */
    AddToWishListComponent.prototype.userLoggedIn$;
    /** @type {?} */
    AddToWishListComponent.prototype.loading$;
    /** @type {?} */
    AddToWishListComponent.prototype.hasStock;
    /** @type {?} */
    AddToWishListComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @protected
     */
    AddToWishListComponent.prototype.wishListService;
    /**
     * @type {?}
     * @protected
     */
    AddToWishListComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @protected
     */
    AddToWishListComponent.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddToWishListModule {
}
AddToWishListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AddToWishListComponent: {
                                component: AddToWishListComponent,
                            },
                        },
                    }))),
                    I18nModule,
                    IconModule,
                    RouterModule,
                    UrlModule,
                ],
                declarations: [AddToWishListComponent],
                entryComponents: [AddToWishListComponent],
                exports: [AddToWishListComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CartComponentModule {
}
CartComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgbModule, CartDetailsModule, CartTotalsModule, CartSharedModule],
                exports: [
                    AddToWishListModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                    AddToCartModule,
                    MiniCartModule,
                    CartModule,
                ],
                declarations: [],
                providers: [
                    {
                        provide: PAGE_LAYOUT_HANDLER,
                        useExisting: CartPageLayoutHandler,
                        multi: true,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DeliveryModePreferences = {
    FREE: 'FREE',
    LEAST_EXPENSIVE: 'LEAST_EXPENSIVE',
    MOST_EXPENSIVE: 'MOST_EXPENSIVE',
};
/**
 * @abstract
 */
class CheckoutConfig {
}
if (false) {
    /** @type {?} */
    CheckoutConfig.prototype.checkout;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CheckoutStepType = {
    SHIPPING_ADDRESS: 'shippingAddress',
    DELIVERY_MODE: 'deliveryMode',
    PAYMENT_DETAILS: 'paymentDetails',
    REVIEW_ORDER: 'reviewOrder',
};
/**
 * @record
 */
function CheckoutStep() { }
if (false) {
    /** @type {?} */
    CheckoutStep.prototype.id;
    /** @type {?} */
    CheckoutStep.prototype.name;
    /** @type {?} */
    CheckoutStep.prototype.routeName;
    /** @type {?} */
    CheckoutStep.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutConfigService {
    /**
     * @param {?} checkoutConfig
     * @param {?} routingConfigService
     */
    constructor(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
        this.express = this.checkoutConfig.checkout.express;
        this.guest = this.checkoutConfig.checkout.guest;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    getCheckoutStep(currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    getCheckoutStepRoute(currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    }
    /**
     * @return {?}
     */
    getFirstCheckoutStepRoute() {
        return this.steps[0].routeName;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getNextCheckoutStepUrl(activatedRoute) {
        /** @type {?} */
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getPreviousCheckoutStepUrl(activatedRoute) {
        /** @type {?} */
        const stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getCurrentStepIndex(activatedRoute) {
        /** @type {?} */
        const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        let stepIndex;
        /** @type {?} */
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
    /**
     * @protected
     * @param {?} deliveryMode1
     * @param {?} deliveryMode2
     * @return {?}
     */
    compareDeliveryCost(deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    }
    /**
     * @protected
     * @param {?} deliveryModes
     * @param {?=} index
     * @return {?}
     */
    findMatchingDeliveryMode(deliveryModes, index = 0) {
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                /** @type {?} */
                const leastExpensiveFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                deliveryMode => deliveryMode.deliveryCost.value !== 0));
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                /** @type {?} */
                const codeFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                deliveryMode => deliveryMode.code === this.defaultDeliveryMode[index]));
                if (codeFound) {
                    return codeFound.code;
                }
        }
        /** @type {?} */
        const lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    }
    /**
     * @param {?} deliveryModes
     * @return {?}
     */
    getPreferredDeliveryMode(deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    }
    /**
     * @return {?}
     */
    isExpressCheckout() {
        return this.express;
    }
    /**
     * @return {?}
     */
    isGuestCheckout() {
        return this.guest;
    }
    /**
     * @private
     * @param {?} activatedRoute
     * @return {?}
     */
    getStepUrlFromActivatedRoute(activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? `/${activatedRoute.snapshot.url.join('/')}`
            : null;
    }
    /**
     * @private
     * @param {?} stepRoute
     * @return {?}
     */
    getStepUrlFromStepRoute(stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    getCheckoutStepIndex(key, value) {
        return key && value
            ? this.steps.findIndex((/**
             * @param {?} step
             * @return {?}
             */
            (step) => step[key].includes(value)))
            : null;
    }
}
CheckoutConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutConfigService.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
/** @nocollapse */ CheckoutConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CheckoutConfigService.prototype.steps;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.express;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.guest;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.defaultDeliveryMode;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.checkoutConfig;
    /**
     * @type {?}
     * @private
     */
    CheckoutConfigService.prototype.routingConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutAuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     * @param {?} authRedirectService
     * @param {?} cartService
     * @param {?} checkoutConfigService
     */
    constructor(routingService, authService, authRedirectService, cartService, checkoutConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.checkoutConfigService = checkoutConfigService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([token, user]) => {
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
        })));
    }
}
CheckoutAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: AuthRedirectService },
    { type: CartService },
    { type: CheckoutConfigService }
];
/** @nocollapse */ CheckoutAuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CartService), ɵɵinject(CheckoutConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.authRedirectService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CheckoutAuthGuard.prototype.checkoutConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutDetailsService {
    /**
     * @param {?} checkoutService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} cartService
     */
    constructor(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map((/**
         * @param {?} cartData
         * @return {?}
         */
        cartData => {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                this.cartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        })), filter((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => !!cartId)));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.checkoutService.loadCheckoutDetails(cartId))), shareReplay(1), switchMap((/**
         * @return {?}
         */
        () => this.checkoutService.getCheckoutDetailsLoaded())), skipWhile((/**
         * @param {?} loaded
         * @return {?}
         */
        loaded => !loaded)));
    }
    /**
     * @return {?}
     */
    getDeliveryAddress() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutDeliveryService.getDeliveryAddress())));
    }
    /**
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutDeliveryService.getSelectedDeliveryModeCode())));
    }
    /**
     * @return {?}
     */
    getPaymentDetails() {
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.checkoutPaymentService.getPaymentDetails())));
    }
}
CheckoutDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDetailsService.ctorParameters = () => [
    { type: CheckoutService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: CartService }
];
/** @nocollapse */ CheckoutDetailsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(ɵɵinject(CheckoutService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CheckoutDetailsService.prototype.cartId$;
    /** @type {?} */
    CheckoutDetailsService.prototype.getCheckoutDetailsLoaded$;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsService.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExpressCheckoutService {
    /**
     * @param {?} userAddressService
     * @param {?} userPaymentService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} checkoutDetailsService
     * @param {?} checkoutConfigService
     */
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
    /**
     * @protected
     * @return {?}
     */
    setShippingAddress() {
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, addressesLoadedSuccess]) => {
            if (!addressesLoadedSuccess) {
                this.userAddressService.loadAddresses();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, addressesLoadedSuccess]) => addressesLoadedSuccess)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([addresses, , setDeliveryAddressProcess]) => {
            /** @type {?} */
            const defaultAddress = addresses.find((/**
             * @param {?} address
             * @return {?}
             */
            address => address.defaultAddress)) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                (setDeliveryAddressProcessState) => {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                })), switchMap((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                (setDeliveryAddressProcessState) => {
                    if (setDeliveryAddressProcessState.success) {
                        return this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => Boolean(data && Object.keys(data).length))));
            }
            return of(false);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    setPaymentMethod() {
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, paymentMethodsLoadedSuccess]) => {
            if (!paymentMethodsLoadedSuccess) {
                this.userPaymentService.loadPaymentMethods();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, success]) => success)), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([payments, , setPaymentDetailsProcess]) => {
            /** @type {?} */
            const defaultPayment = payments.find((/**
             * @param {?} address
             * @return {?}
             */
            address => address.defaultPayment)) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                (setPaymentDetailsProcessState) => {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                })), switchMap((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                (setPaymentDetailsProcessState) => {
                    if (setPaymentDetailsProcessState.success) {
                        return this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => Boolean(data && Object.keys(data).length))));
            }
            return of(false);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    setDeliveryMode() {
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([addressSet, supportedDeliveryModes, setDeliveryModeStatusFlag, loadSupportedDeliveryModeStatus,]) => {
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([, , supportedDeliveryModeStatus]) => supportedDeliveryModeStatus.success)), switchMap((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([deliveryModes, setDeliveryModeStatus, ,]) => {
                    if (Boolean(deliveryModes.length)) {
                        /** @type {?} */
                        const preferredDeliveryMode = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ([deliveryMode, deliveryModeLoadingStatus]) => {
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        })), filter((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ([, deliveryModeLoadingStatus]) => {
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        })), switchMap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        ([, deliveryModeLoadingStatus]) => {
                            if (deliveryModeLoadingStatus.success) {
                                return this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        })), map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        data => Boolean(data))));
                    }
                    return of(false);
                })));
            }
            else {
                return of(false);
            }
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    resetCheckoutProcesses() {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    }
    /**
     * @return {?}
     */
    trySetDefaultCheckoutDetails() {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([deliveryModeSet, paymentMethodSet]) => Boolean(deliveryModeSet && paymentMethodSet))));
    }
}
ExpressCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ExpressCheckoutService.ctorParameters = () => [
    { type: UserAddressService },
    { type: UserPaymentService },
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService }
];
/** @nocollapse */ ExpressCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(ɵɵinject(UserAddressService), ɵɵinject(UserPaymentService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExpressCheckoutService.prototype.shippingAddressSet$;
    /**
     * @type {?}
     * @private
     */
    ExpressCheckoutService.prototype.deliveryModeSet$;
    /**
     * @type {?}
     * @private
     */
    ExpressCheckoutService.prototype.paymentMethodSet$;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.userPaymentService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @protected
     */
    ExpressCheckoutService.prototype.checkoutConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutGuard {
    /**
     * @param {?} router
     * @param {?} config
     * @param {?} routingConfigService
     * @param {?=} checkoutConfigService
     * @param {?=} expressCheckoutService
     * @param {?=} cartService
     */
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
    /**
     * @return {?}
     */
    canActivate() {
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService &&
            this.expressCheckoutService &&
            this.cartService) {
            if (this.checkoutConfigService.isExpressCheckout() &&
                !this.cartService.isGuestCart()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((/**
                 * @param {?} expressCheckoutPossible
                 * @return {?}
                 */
                (expressCheckoutPossible) => {
                    return expressCheckoutPossible
                        ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : this.firstStep$;
                })));
            }
        }
        return this.firstStep$;
    }
}
CheckoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: CheckoutConfig },
    { type: RoutingConfigService },
    { type: CheckoutConfigService },
    { type: ExpressCheckoutService },
    { type: CartService }
];
/** @nocollapse */ CheckoutGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(ɵɵinject(Router), ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutConfigService), ɵɵinject(ExpressCheckoutService), ɵɵinject(CartService)); }, token: CheckoutGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.firstStep$;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.expressCheckoutService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutGuard.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutOrchestratorComponent {
    constructor() { }
}
CheckoutOrchestratorComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-orchestrator',
                template: "",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CheckoutOrchestratorComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutOrchestratorModule {
}
CheckoutOrchestratorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig(defaultCheckoutConfig),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutOrchestrator: {
                                component: CheckoutOrchestratorComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard],
                            },
                        },
                    }))),
                ],
                providers: [{ provide: CheckoutConfig, useExisting: Config }],
                declarations: [CheckoutOrchestratorComponent],
                entryComponents: [CheckoutOrchestratorComponent],
                exports: [CheckoutOrchestratorComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutOrderSummaryComponent {
    /**
     * @param {?} cartService
     */
    constructor(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
}
CheckoutOrderSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-order-summary',
                template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CheckoutOrderSummaryComponent.ctorParameters = () => [
    { type: CartService }
];
if (false) {
    /** @type {?} */
    CheckoutOrderSummaryComponent.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    CheckoutOrderSummaryComponent.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutOrderSummaryModule {
}
CheckoutOrderSummaryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartSharedModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutOrderSummary: {
                                component: CheckoutOrderSummaryComponent,
                            },
                        },
                    }))),
                ],
                declarations: [CheckoutOrderSummaryComponent],
                entryComponents: [CheckoutOrderSummaryComponent],
                exports: [CheckoutOrderSummaryComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutProgressMobileBottomComponent {
    /**
     * @param {?} config
     * @param {?} routingService
     * @param {?} routingConfigService
     */
    constructor(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        router => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                /** @type {?} */
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            }));
        })));
    }
}
CheckoutProgressMobileBottomComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress-mobile-bottom',
                template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CheckoutProgressMobileBottomComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService }
];
if (false) {
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.steps;
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.routerState$;
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.activeStepIndex;
    /** @type {?} */
    CheckoutProgressMobileBottomComponent.prototype.activeStepUrl;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileBottomComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileBottomComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileBottomComponent.prototype.routingConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutProgressMobileBottomModule {
}
CheckoutProgressMobileBottomModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    UrlModule,
                    I18nModule,
                    RouterModule,
                    ConfigModule.withConfig(defaultCheckoutConfig),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutProgressMobileBottom: {
                                component: CheckoutProgressMobileBottomComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                            },
                        },
                    }))),
                ],
                declarations: [CheckoutProgressMobileBottomComponent],
                entryComponents: [CheckoutProgressMobileBottomComponent],
                exports: [CheckoutProgressMobileBottomComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutProgressMobileTopComponent {
    /**
     * @param {?} config
     * @param {?} routingService
     * @param {?} cartService
     * @param {?} routingConfigService
     */
    constructor(config, routingService, cartService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.cartService = cartService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.cart$ = this.cartService.getActive();
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        router => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                /** @type {?} */
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            }));
        })));
    }
}
CheckoutProgressMobileTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress-mobile-top',
                template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
CheckoutProgressMobileTopComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: CartService },
    { type: RoutingConfigService }
];
if (false) {
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.steps;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.routerState$;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.cart$;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.activeStepIndex;
    /** @type {?} */
    CheckoutProgressMobileTopComponent.prototype.activeStepUrl;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressMobileTopComponent.prototype.routingConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutProgressMobileTopModule {
}
CheckoutProgressMobileTopModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    UrlModule,
                    I18nModule,
                    RouterModule,
                    ConfigModule.withConfig(defaultCheckoutConfig),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutProgressMobileTop: {
                                component: CheckoutProgressMobileTopComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                            },
                        },
                    }))),
                ],
                declarations: [CheckoutProgressMobileTopComponent],
                entryComponents: [CheckoutProgressMobileTopComponent],
                exports: [CheckoutProgressMobileTopComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutProgressComponent {
    /**
     * @param {?} config
     * @param {?} routingService
     * @param {?} routingConfigService
     */
    constructor(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        router => {
            this.activeStepUrl = router.state.context.id;
            this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            (step, index) => {
                /** @type {?} */
                const routeUrl = `/${this.routingConfigService.getRouteConfig(step.routeName).paths[0]}`;
                if (routeUrl === this.activeStepUrl) {
                    this.activeStepIndex = index;
                }
            }));
        })));
    }
}
CheckoutProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-progress',
                template: "<section *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [ngClass]=\"{\n            ' is-active': i === activeStepIndex,\n            ' is-disabled': i > activeStepIndex\n          }\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CheckoutProgressComponent.ctorParameters = () => [
    { type: CheckoutConfig },
    { type: RoutingService },
    { type: RoutingConfigService }
];
if (false) {
    /** @type {?} */
    CheckoutProgressComponent.prototype.steps;
    /** @type {?} */
    CheckoutProgressComponent.prototype.routerState$;
    /** @type {?} */
    CheckoutProgressComponent.prototype.activeStepIndex;
    /** @type {?} */
    CheckoutProgressComponent.prototype.activeStepUrl;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutProgressComponent.prototype.routingConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutProgressModule {
}
CheckoutProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    UrlModule,
                    I18nModule,
                    RouterModule,
                    ConfigModule.withConfig(defaultCheckoutConfig),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutProgress: {
                                component: CheckoutProgressComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                            },
                        },
                    }))),
                ],
                declarations: [CheckoutProgressComponent],
                entryComponents: [CheckoutProgressComponent],
                exports: [CheckoutProgressComponent],
                providers: [{ provide: CheckoutConfig, useExisting: Config }],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShippingAddressSetGuard {
    /**
     * @param {?} checkoutDetailsService
     * @param {?} checkoutConfigService
     * @param {?} routingConfigService
     * @param {?} router
     */
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.SHIPPING_ADDRESS} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map((/**
         * @param {?} deliveryAddress
         * @return {?}
         */
        (deliveryAddress) => deliveryAddress && Object.keys(deliveryAddress).length
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]))));
    }
}
ShippingAddressSetGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ShippingAddressSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
/** @nocollapse */ ShippingAddressSetGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: ShippingAddressSetGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressSetGuard.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryModeComponent {
    /**
     * @param {?} fb
     * @param {?} checkoutDeliveryService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        this.deliveryModeSub = this.supportedDeliveryModes$
            .pipe(withLatestFrom(this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(map((/**
         * @param {?} deliveryMode
         * @return {?}
         */
        (deliveryMode) => deliveryMode && deliveryMode.code ? deliveryMode.code : null)))))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([deliveryModes, code]) => {
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
        }));
    }
    /**
     * @param {?} code
     * @return {?}
     */
    changeMode(code) {
        if (code !== this.currentDeliveryModeId) {
            this.currentDeliveryModeId = code;
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    back() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @return {?}
     */
    get deliveryModeInvalid() {
        return this.mode.controls['deliveryModeId'].invalid;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    }
}
DeliveryModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-delivery-mode',
                template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DeliveryModeComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: RoutingService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    DeliveryModeComponent.prototype.supportedDeliveryModes$;
    /** @type {?} */
    DeliveryModeComponent.prototype.selectedDeliveryMode$;
    /** @type {?} */
    DeliveryModeComponent.prototype.currentDeliveryModeId;
    /** @type {?} */
    DeliveryModeComponent.prototype.checkoutStepUrlNext;
    /** @type {?} */
    DeliveryModeComponent.prototype.checkoutStepUrlPrevious;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.allowRedirect;
    /** @type {?} */
    DeliveryModeComponent.prototype.deliveryModeSub;
    /** @type {?} */
    DeliveryModeComponent.prototype.mode;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeComponent.prototype.activatedRoute;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryModeModule {
}
DeliveryModeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    I18nModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                declarations: [DeliveryModeComponent],
                entryComponents: [DeliveryModeComponent],
                exports: [DeliveryModeComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeliveryModeSetGuard {
    /**
     * @param {?} checkoutDetailsService
     * @param {?} checkoutConfigService
     * @param {?} routingConfigService
     * @param {?} router
     */
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.DELIVERY_MODE} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => mode && mode.length
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]))));
    }
}
DeliveryModeSetGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DeliveryModeSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
/** @nocollapse */ DeliveryModeSetGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    DeliveryModeSetGuard.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingAddressFormComponent {
    /**
     * @param {?} userAddressService
     */
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
        this.selectedCountry$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        country => this.userAddressService.getRegions(country))), tap((/**
         * @param {?} regions
         * @return {?}
         */
        regions => {
            /** @type {?} */
            const regionControl = this.billingAddress.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        })));
    }
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    /**
     * @param {?} region
     * @return {?}
     */
    regionSelected(region) {
        this.billingAddress['controls'].region['controls'].isocodeShort.setValue(region.isocodeShort);
    }
}
BillingAddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-billing-address-form',
                template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"countries$ | async as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <ng-container *ngIf=\"regions$ | async as regions\" formGroupName=\"region\">\n        <div *ngIf=\"regions.length !== 0\">\n          <label aria-required=\"true\">\n            <span class=\"label-content required\">{{\n              'addressForm.state' | cxTranslate\n            }}</span>\n            <ng-select\n              class=\"region-select\"\n              formControlName=\"isocodeShort\"\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"regions\"\n              bindLabel=\"{{ regions[0].name ? 'name' : 'isocodeShort' }}\"\n              bindValue=\"{{ regions[0].name ? 'isocodeShort' : 'region' }}\"\n              placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n              (change)=\"regionSelected($event)\"\n            >\n            </ng-select>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BillingAddressFormComponent.ctorParameters = () => [
    { type: UserAddressService }
];
BillingAddressFormComponent.propDecorators = {
    billingAddress: [{ type: Input }],
    countries$: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BillingAddressFormComponent.prototype.regions$;
    /** @type {?} */
    BillingAddressFormComponent.prototype.billingAddress;
    /** @type {?} */
    BillingAddressFormComponent.prototype.countries$;
    /** @type {?} */
    BillingAddressFormComponent.prototype.selectedCountry$;
    /**
     * @type {?}
     * @protected
     */
    BillingAddressFormComponent.prototype.userAddressService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingAddressFormModule {
}
BillingAddressFormModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SuggestedAddressDialogComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    closeModal(reason) {
        this.modalService.closeActiveModal(reason);
    }
}
SuggestedAddressDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-suggested-addresses-dialog',
                template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SuggestedAddressDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
SuggestedAddressDialogComponent.propDecorators = {
    suggestedAddresses: [{ type: Input }],
    enteredAddress: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.iconTypes;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.suggestedAddresses;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.enteredAddress;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.selectedAddress;
    /**
     * @type {?}
     * @protected
     */
    SuggestedAddressDialogComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentFormComponent {
    /**
     * @param {?} checkoutPaymentService
     * @param {?} checkoutDeliveryService
     * @param {?} userPaymentService
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?} modalService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.expMonthAndYear();
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        countries => {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                this.userPaymentService.loadBillingCountries();
            }
        })));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap((/**
         * @param {?} cardTypes
         * @return {?}
         */
        cardTypes => {
            if (Object.keys(cardTypes).length === 0) {
                this.checkoutPaymentService.loadSupportedCardTypes();
            }
        })));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((/**
         * @param {?} shouldShowCheckbox
         * @return {?}
         */
        (shouldShowCheckbox) => {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            this.sameAsShippingAddress = shouldShowCheckbox;
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
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
        }));
    }
    /**
     * @return {?}
     */
    expMonthAndYear() {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    toggleDefaultPaymentMethod() {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    }
    /**
     * @param {?} card
     * @return {?}
     */
    paymentSelected(card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    monthSelected(month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    yearSelected(year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    }
    /**
     * @return {?}
     */
    toggleSameAsShippingAddress() {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    }
    /**
     * @return {?}
     */
    isContinueButtonDisabled() {
        return (this.payment.invalid ||
            (!this.sameAsShippingAddress && this.billingAddress.invalid));
    }
    /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    showSameAsShippingAddressCheckbox() {
        return combineLatest([this.countries$, this.shippingAddress$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([countries, address]) => {
            return (address !== undefined &&
                address.country !== undefined &&
                !!countries.filter((/**
                 * @param {?} country
                 * @return {?}
                 */
                (country) => country.isocode === address.country.isocode)).length);
        })));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getAddressCardContent(address) {
        /** @type {?} */
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
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then((/**
             * @return {?}
             */
            () => {
                this.checkoutDeliveryService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutDeliveryService.clearAddressVerificationResults();
                this.suggestedAddressModalRef = null;
            }));
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.closeForm.emit();
    }
    /**
     * @return {?}
     */
    back() {
        this.goBack.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutDeliveryService.verifyAddress(this.billingAddress.value);
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.setPaymentDetails.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    }
}
PaymentFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-form',
                template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n          </label>\n          <div class=\"cx-payment-form-exp-date row\">\n            <div class=\"col-sm-6 col-md-5\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"months\"\n                bindLabel=\"name\"\n                bindValue=\"expiryMonth\"\n                placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                (change)=\"monthSelected($event)\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"col-sm-6 col-md-7\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"years\"\n                bindLabel=\"name\"\n                bindValue=\"expiryYear\"\n                placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                (change)=\"yearSelected($event)\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"showSameAsShippingAddressCheckbox() | async\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            sameAsShippingAddress && shippingAddress$\n              | async as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PaymentFormComponent.ctorParameters = () => [
    { type: CheckoutPaymentService },
    { type: CheckoutDeliveryService },
    { type: UserPaymentService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: ModalService }
];
PaymentFormComponent.propDecorators = {
    setAsDefaultField: [{ type: Input }],
    paymentMethodsCount: [{ type: Input }],
    goBack: [{ type: Output }],
    closeForm: [{ type: Output }],
    setPaymentDetails: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaymentFormComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.checkboxSub;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.addressVerifySub;
    /** @type {?} */
    PaymentFormComponent.prototype.suggestedAddressModalRef;
    /** @type {?} */
    PaymentFormComponent.prototype.months;
    /** @type {?} */
    PaymentFormComponent.prototype.years;
    /** @type {?} */
    PaymentFormComponent.prototype.cardTypes$;
    /** @type {?} */
    PaymentFormComponent.prototype.shippingAddress$;
    /** @type {?} */
    PaymentFormComponent.prototype.countries$;
    /** @type {?} */
    PaymentFormComponent.prototype.sameAsShippingAddress;
    /** @type {?} */
    PaymentFormComponent.prototype.setAsDefaultField;
    /** @type {?} */
    PaymentFormComponent.prototype.paymentMethodsCount;
    /** @type {?} */
    PaymentFormComponent.prototype.goBack;
    /** @type {?} */
    PaymentFormComponent.prototype.closeForm;
    /** @type {?} */
    PaymentFormComponent.prototype.setPaymentDetails;
    /** @type {?} */
    PaymentFormComponent.prototype.payment;
    /** @type {?} */
    PaymentFormComponent.prototype.billingAddress;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.userPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    PaymentFormComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentFormModule {
}
PaymentFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    CardModule,
                    BillingAddressFormModule,
                    I18nModule,
                    IconModule,
                ],
                declarations: [PaymentFormComponent],
                entryComponents: [PaymentFormComponent],
                exports: [PaymentFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodComponent {
    /**
     * @param {?} userPaymentService
     * @param {?} checkoutService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} globalMessageService
     * @param {?} routingService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     * @param {?=} cartService
     */
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
    /**
     * @return {?}
     */
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
            .subscribe((/**
         * @param {?} address
         * @return {?}
         */
        (address) => {
            this.deliveryAddress = address;
        }));
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        paymentInfo => paymentInfo && !!Object.keys(paymentInfo).length)))
            .subscribe((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        paymentInfo => {
            if (this.allowRouting) {
                this.routingService.go(this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    if (key.startsWith('InvalidField')) {
                        this.sendPaymentMethodFailGlobalMessage(paymentInfo[key]);
                    }
                }));
                this.checkoutService.clearCheckoutStep(3);
            }
        }));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
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
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textExpires, textUseThisPayment, textDefaultPaymentMethod, textSelected,]) => {
            return this.createCard(payment, {
                textExpires,
                textUseThisPayment,
                textDefaultPaymentMethod,
                textSelected,
            });
        })));
    }
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    selectPaymentMethod(paymentDetails) {
        this.selectedPayment = paymentDetails;
    }
    /**
     * @return {?}
     */
    showNewPaymentForm() {
        this.newPaymentFormManuallyOpened = true;
    }
    /**
     * @return {?}
     */
    hideNewPaymentForm() {
        this.newPaymentFormManuallyOpened = false;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment = true, }) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
    }
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    getCardIcon(code) {
        /** @type {?} */
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
    /**
     * @protected
     * @param {?} msg
     * @return {?}
     */
    sendPaymentMethodFailGlobalMessage(msg) {
        this.globalMessageService.add({
            key: 'paymentMethods.invalidField',
            params: { field: msg },
        }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    /**
     * @protected
     * @param {?} paymentDetails
     * @param {?} cardLabels
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    goNext() {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    }
    /**
     * @return {?}
     */
    goPrevious() {
        this.routingService.go(this.checkoutStepUrlPrevious);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#4992) deprecated since 1.3
     * @return {?}
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#4992) deprecated since 1.3
     * @return {?}
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use selectPaymentMethod() instead.
     * TODO(issue:#4992) deprecated since 1.3
     * @param {?} paymentDetails
     * @return {?}
     */
    paymentMethodSelected(paymentDetails) {
        this.selectPaymentMethod(paymentDetails);
    }
}
PaymentMethodComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-method',
                template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        (existingPaymentMethods$ | async).length &&\n          !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
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
if (false) {
    /** @type {?} */
    PaymentMethodComponent.prototype.iconTypes;
    /** @type {?} */
    PaymentMethodComponent.prototype.newPaymentFormManuallyOpened;
    /** @type {?} */
    PaymentMethodComponent.prototype.existingPaymentMethods$;
    /** @type {?} */
    PaymentMethodComponent.prototype.isLoading$;
    /** @type {?} */
    PaymentMethodComponent.prototype.selectedPayment;
    /** @type {?} */
    PaymentMethodComponent.prototype.allowRouting;
    /** @type {?} */
    PaymentMethodComponent.prototype.isGuestCheckout;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.getPaymentDetailsSub;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.deliveryAddress;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.checkoutStepUrlNext;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodComponent.prototype.checkoutStepUrlPrevious;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.userPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.translation;
    /**
     * @type {?}
     * @protected
     */
    PaymentMethodComponent.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodModule {
}
PaymentMethodModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    PaymentFormModule,
                    CardModule,
                    SpinnerModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                providers: [UserService],
                declarations: [PaymentMethodComponent],
                entryComponents: [PaymentMethodComponent],
                exports: [PaymentMethodComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlaceOrderComponent {
    /**
     * @param {?} checkoutService
     * @param {?} routingService
     */
    constructor(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    /**
     * @return {?}
     */
    toggleTAndC() {
        this.tAndCToggler = !this.tAndCToggler;
    }
    /**
     * @return {?}
     */
    placeOrder() {
        this.checkoutService.placeOrder();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        order => Object.keys(order).length !== 0)))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.routingService.go({ cxRoute: 'orderConfirmation' });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    }
}
PlaceOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-place-order',
                template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PlaceOrderComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    PlaceOrderComponent.prototype.tAndCToggler;
    /** @type {?} */
    PlaceOrderComponent.prototype.placeOrderSubscription;
    /**
     * @type {?}
     * @private
     */
    PlaceOrderComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    PlaceOrderComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlaceOrderModule {
}
PlaceOrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutPlaceOrder: {
                                component: PlaceOrderComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                            },
                        },
                    }))),
                ],
                declarations: [PlaceOrderComponent],
                entryComponents: [PlaceOrderComponent],
                exports: [PlaceOrderComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentDetailsSetGuard {
    /**
     * @param {?} checkoutDetailsService
     * @param {?} checkoutConfigService
     * @param {?} routingConfigService
     * @param {?} router
     */
    constructor(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    canActivate() {
        /** @type {?} */
        const checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && isDevMode()) {
            console.warn(`Missing step with type ${CheckoutStepType.PAYMENT_DETAILS} in checkout configuration.`);
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map((/**
         * @param {?} paymentDetails
         * @return {?}
         */
        paymentDetails => paymentDetails && Object.keys(paymentDetails).length !== 0
            ? true
            : this.router.parseUrl(checkoutStep &&
                this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]))));
    }
}
PaymentDetailsSetGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PaymentDetailsSetGuard.ctorParameters = () => [
    { type: CheckoutDetailsService },
    { type: CheckoutConfigService },
    { type: RoutingConfigService },
    { type: Router }
];
/** @nocollapse */ PaymentDetailsSetGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.checkoutDetailsService;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    PaymentDetailsSetGuard.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReviewSubmitComponent {
    /**
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutPaymentService
     * @param {?} userAddressService
     * @param {?} cartService
     * @param {?} translation
     * @param {?=} checkoutConfigService
     */
    constructor(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation, checkoutConfigService) {
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.translation = translation;
        this.checkoutConfigService = checkoutConfigService;
        this.checkoutStepType = CheckoutStepType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService.getEntries();
        this.deliveryAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.paymentDetails$ = this.checkoutPaymentService.getPaymentDetails();
        this.deliveryMode$ = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(tap((/**
         * @param {?} selected
         * @return {?}
         */
        (selected) => {
            if (selected === null) {
                this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        })));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap((/**
         * @param {?} address
         * @return {?}
         */
        (address) => this.userAddressService.getCountry(address.country.isocode))), tap((/**
         * @param {?} country
         * @return {?}
         */
        (country) => {
            if (country === null) {
                this.userAddressService.loadDeliveryCountries();
            }
        })), map((/**
         * @param {?} country
         * @return {?}
         */
        (country) => country && country.name)));
    }
    /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    getShippingAddressCard(deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
            /** @type {?} */
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
        })));
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getDeliveryModeCard(deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        })));
    }
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    getPaymentMethodCard(paymentDetails) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: paymentDetails.expiryMonth,
                year: paymentDetails.expiryYear,
            }),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        })));
    }
    /**
     * @param {?} stepType
     * @return {?}
     */
    getCheckoutStepUrl(stepType) {
        // TODO(issue:#4121) Deprecated since 1.1.0
        if (this.checkoutConfigService) {
            /** @type {?} */
            const step = this.checkoutConfigService.getCheckoutStep(stepType);
            return step && step.routeName;
        }
    }
}
ReviewSubmitComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-review-submit',
                template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ReviewSubmitComponent.ctorParameters = () => [
    { type: CheckoutDeliveryService },
    { type: CheckoutPaymentService },
    { type: UserAddressService },
    { type: CartService },
    { type: TranslationService },
    { type: CheckoutConfigService }
];
if (false) {
    /** @type {?} */
    ReviewSubmitComponent.prototype.checkoutStepType;
    /** @type {?} */
    ReviewSubmitComponent.prototype.entries$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.cart$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.deliveryMode$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.countryName$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.deliveryAddress$;
    /** @type {?} */
    ReviewSubmitComponent.prototype.paymentDetails$;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.checkoutPaymentService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.translation;
    /**
     * @type {?}
     * @protected
     */
    ReviewSubmitComponent.prototype.checkoutConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReviewSubmitModule {
}
ReviewSubmitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CardModule,
                    CartSharedModule,
                    I18nModule,
                    UrlModule,
                    RouterModule,
                    FeaturesConfigModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                declarations: [ReviewSubmitComponent],
                entryComponents: [ReviewSubmitComponent],
                exports: [ReviewSubmitComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressFormComponent {
    /**
     * @param {?} fb
     * @param {?} checkoutDeliveryService
     * @param {?} userService
     * @param {?} userAddressService
     * @param {?} globalMessageService
     * @param {?} modalService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        countries => {
            if (Object.keys(countries).length === 0) {
                this.userAddressService.loadDeliveryCountries();
            }
        })));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            titles.sort(sortTitles);
            /** @type {?} */
            const noneTitle = { code: '', name: 'Title' };
            return [noneTitle, ...titles];
        })));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        country => this.userAddressService.getRegions(country))), tap((/**
         * @param {?} regions
         * @return {?}
         */
        regions => {
            /** @type {?} */
            const regionControl = this.address.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        })));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
            if (results.decision === 'FAIL') {
                this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                this.submitAddress.emit(this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => error.subject === 'titleCode'))) {
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
        }));
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.address['controls'].titleCode.setValue(title.code);
    }
    /**
     * @param {?} country
     * @return {?}
     */
    countrySelected(country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    }
    /**
     * @param {?} region
     * @return {?}
     */
    regionSelected(region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    }
    /**
     * @return {?}
     */
    toggleDefaultAddress() {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    }
    /**
     * @return {?}
     */
    back() {
        this.backToAddress.emit();
    }
    /**
     * @return {?}
     */
    verifyAddress() {
        if (this.address.controls['region'].value.isocode) {
            this.regionsSub = this.regions$.pipe(take(1)).subscribe((/**
             * @param {?} regions
             * @return {?}
             */
            regions => {
                /** @type {?} */
                const obj = regions.find((/**
                 * @param {?} region
                 * @return {?}
                 */
                region => region.isocode === this.address.controls['region'].value.isocode));
                Object.assign(this.address.value.region, {
                    isocodeShort: obj.isocodeShort,
                });
            }));
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
    /**
     * @param {?} results
     * @return {?}
     */
    openSuggestedAddress(results) {
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.address.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then((/**
             * @param {?} address
             * @return {?}
             */
            address => {
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
            }))
                .catch((/**
             * @return {?}
             */
            () => {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                this.checkoutDeliveryService.clearAddressVerificationResults();
                /** @type {?} */
                const address = Object.assign({
                    selected: true,
                }, this.address.value);
                this.submitAddress.emit(address);
                this.suggestedAddressModalRef = null;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    }
}
AddressFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-form',
                template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"regions$ | async as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                  (change)=\"regionSelected($event)\"\n                >\n                </ng-select>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AddressFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CheckoutDeliveryService },
    { type: UserService },
    { type: UserAddressService },
    { type: GlobalMessageService },
    { type: ModalService }
];
AddressFormComponent.propDecorators = {
    addressData: [{ type: Input }],
    actionBtnLabel: [{ type: Input }],
    cancelBtnLabel: [{ type: Input }],
    setAsDefaultField: [{ type: Input }],
    showTitleCode: [{ type: Input }],
    showCancelBtn: [{ type: Input }],
    submitAddress: [{ type: Output }],
    backToAddress: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AddressFormComponent.prototype.countries$;
    /** @type {?} */
    AddressFormComponent.prototype.titles$;
    /** @type {?} */
    AddressFormComponent.prototype.regions$;
    /** @type {?} */
    AddressFormComponent.prototype.selectedCountry$;
    /** @type {?} */
    AddressFormComponent.prototype.addressData;
    /** @type {?} */
    AddressFormComponent.prototype.actionBtnLabel;
    /** @type {?} */
    AddressFormComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    AddressFormComponent.prototype.setAsDefaultField;
    /** @type {?} */
    AddressFormComponent.prototype.showTitleCode;
    /** @type {?} */
    AddressFormComponent.prototype.showCancelBtn;
    /** @type {?} */
    AddressFormComponent.prototype.submitAddress;
    /** @type {?} */
    AddressFormComponent.prototype.backToAddress;
    /** @type {?} */
    AddressFormComponent.prototype.addressVerifySub;
    /** @type {?} */
    AddressFormComponent.prototype.regionsSub;
    /** @type {?} */
    AddressFormComponent.prototype.suggestedAddressModalRef;
    /** @type {?} */
    AddressFormComponent.prototype.address;
    /**
     * @type {?}
     * @private
     */
    AddressFormComponent.prototype.fb;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    AddressFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    AddressFormComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressFormModule {
}
AddressFormModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutDetailsLoadedGuard {
    /**
     * @param {?} checkoutDetailsService
     */
    constructor(checkoutDetailsService) {
        this.checkoutDetailsService = checkoutDetailsService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.checkoutDetailsService.getCheckoutDetailsLoaded$;
    }
}
CheckoutDetailsLoadedGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDetailsLoadedGuard.ctorParameters = () => [
    { type: CheckoutDetailsService }
];
/** @nocollapse */ CheckoutDetailsLoadedGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutDetailsLoadedGuard_Factory() { return new CheckoutDetailsLoadedGuard(ɵɵinject(CheckoutDetailsService)); }, token: CheckoutDetailsLoadedGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsLoadedGuard.prototype.checkoutDetailsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CardWithAddress() { }
if (false) {
    /** @type {?} */
    CardWithAddress.prototype.card;
    /** @type {?} */
    CardWithAddress.prototype.address;
}
class ShippingAddressComponent {
    /**
     * @param {?} userAddressService
     * @param {?} cartService
     * @param {?} routingService
     * @param {?} checkoutDeliveryService
     * @param {?} checkoutConfigService
     * @param {?} activatedRoute
     * @param {?} translation
     */
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
        // this helps with smoother steps transition
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
    /**
     * @return {?}
     */
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
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([addresses, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected,]) => {
            // Select default address if none selected
            if (addresses.length &&
                (!selected ||
                    Object.keys(selected).length === 0 ||
                    !this.selectedAddress)) {
                /** @type {?} */
                const defaultAddress = addresses.find((/**
                 * @param {?} address
                 * @return {?}
                 */
                address => address.defaultAddress));
                selected = defaultAddress;
                this.selectAddress(defaultAddress);
            }
            return addresses.map((/**
             * @param {?} address
             * @return {?}
             */
            address => {
                /** @type {?} */
                const card = this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address,
                    card,
                };
            }));
        })));
        if (!this.cartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
    }
    /**
     * @param {?} address
     * @param {?} selected
     * @param {?} textDefaultShippingAddress
     * @param {?} textShipToThisAddress
     * @param {?} textSelected
     * @return {?}
     */
    getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        /** @type {?} */
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
    /**
     * @param {?} address
     * @return {?}
     */
    selectAddress(address) {
        this.selectedAddress = address;
        this.checkoutDeliveryService.setDeliveryAddress(address);
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddress(address) {
        // TODO(issue:#3921) deprecated since 1.3 - Remove temp address
        /** @type {?} */
        const tempAddress = address['address']
            ? address['address']
            : address;
        /** @type {?} */
        const selectedSub = this.selectedAddress$.subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        selected => {
            if (selected && selected.shippingAddress) {
                this.goNext();
                selectedSub.unsubscribe();
            }
        }));
        this.forceLoader = true;
        // TODO(issue:#3921) deprecated since 1.3 - Remove this condition
        if (address['address'] || address['newAddress']) {
            address['newAddress']
                ? this.checkoutDeliveryService.createAndSetAddress(tempAddress)
                : this.selectAddress(tempAddress);
        }
        else {
            // TODO(issue:#3921) deprecated since 1.3 - Use instead of condition
            this.existingAddresses$.pipe(take(1)).subscribe((/**
             * @param {?} addresses
             * @return {?}
             */
            addresses => {
                addresses.includes(tempAddress)
                    ? this.selectAddress(tempAddress)
                    : this.checkoutDeliveryService.createAndSetAddress(tempAddress);
            }));
        }
    }
    /**
     * @return {?}
     */
    showNewAddressForm() {
        this.newAddressFormManuallyOpened = true;
    }
    /**
     * @param {?=} goPrevious
     * @return {?}
     */
    hideNewAddressForm(goPrevious = false) {
        this.newAddressFormManuallyOpened = false;
        if (goPrevious) {
            this.goPrevious();
        }
    }
    /**
     * @return {?}
     */
    goNext() {
        this.routingService.go(this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute));
    }
    /**
     * @return {?}
     */
    goPrevious() {
        this.routingService.go(this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) || 'cart');
    }
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @param {?} address
     * @return {?}
     */
    addressSelected(address) {
        this.selectAddress(address);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @return {?}
     */
    back() {
        this.goPrevious();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @return {?}
     */
    next() {
        this.goNext();
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use addAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @param {?} address
     * @return {?}
     */
    addNewAddress(address) {
        this.addAddress(address);
    }
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Remove.
     * TODO(issue:#3921) deprecated since 1.3
     * @return {?}
     */
    ngOnDestroy() {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    }
}
ShippingAddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-shipping-address',
                template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!forceLoader && !(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"\n              (!selectedAddress || !selectedAddress.id) &&\n              !(selectedAddress$ | async)?.shippingAddress\n            \"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"setAddress\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ShippingAddressComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CartService },
    { type: RoutingService },
    { type: CheckoutDeliveryService },
    { type: CheckoutConfigService },
    { type: ActivatedRoute },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    ShippingAddressComponent.prototype.existingAddresses$;
    /** @type {?} */
    ShippingAddressComponent.prototype.newAddressFormManuallyOpened;
    /** @type {?} */
    ShippingAddressComponent.prototype.isLoading$;
    /** @type {?} */
    ShippingAddressComponent.prototype.cards$;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddress$;
    /** @type {?} */
    ShippingAddressComponent.prototype.forceLoader;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use cards$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.cards;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Avoid using it.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.goTo;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectAddress(address: Address) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.setAddress;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Avoid using it.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.setAddressSub;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectedAddress$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.selectedAddressSub;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use CheckoutConfigService.getNextCheckoutStepUrl(this.activatedRoute) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.checkoutStepUrlNext;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use CheckoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute) instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.checkoutStepUrlPrevious;
    /** @type {?} */
    ShippingAddressComponent.prototype.isGuestCheckout;
    /**
     * @deprecated since version 1.3
     * This variable will no longer be in use. Use selectedAddress$ observable instead.
     * TODO(issue:#3921) deprecated since 1.3
     * @type {?}
     */
    ShippingAddressComponent.prototype.selectedAddress;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    ShippingAddressComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressComponent.prototype.checkoutConfigService;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    ShippingAddressComponent.prototype.translation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShippingAddressModule {
}
ShippingAddressModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    AddressFormModule,
                    CardModule,
                    SpinnerModule,
                    I18nModule,
                    CheckoutProgressMobileTopModule,
                    CheckoutProgressMobileBottomModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                declarations: [ShippingAddressComponent],
                entryComponents: [ShippingAddressComponent],
                exports: [ShippingAddressComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutComponentModule {
}
CheckoutComponentModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotCheckoutAuthGuard {
    /**
     * @param {?} routingService
     * @param {?} authService
     * @param {?} cartService
     */
    constructor(routingService, authService, cartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.authService.getUserToken().pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (token.access_token) {
                this.routingService.go({ cxRoute: 'home' });
            }
            else if (this.cartService.isGuestCart()) {
                this.routingService.go({ cxRoute: 'cart' });
                return false;
            }
            return !token.access_token;
        })));
    }
}
NotCheckoutAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
NotCheckoutAuthGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: AuthService },
    { type: CartService }
];
/** @nocollapse */ NotCheckoutAuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function NotCheckoutAuthGuard_Factory() { return new NotCheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(CartService)); }, token: NotCheckoutAuthGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotCheckoutAuthGuard.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    NotCheckoutAuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    NotCheckoutAuthGuard.prototype.cartService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HamburgerMenuService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationStart)))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.toggle(true);
        }));
    }
    /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    toggle(forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    }
}
HamburgerMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HamburgerMenuService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ HamburgerMenuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(ɵɵinject(Router)); }, token: HamburgerMenuService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HamburgerMenuService.prototype.isExpanded;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HamburgerMenuComponent {
    /**
     * @param {?} hamburgerMenuService
     */
    constructor(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.hamburgerMenuService.toggle();
    }
    /**
     * @return {?}
     */
    get isExpanded() {
        return this.hamburgerMenuService.isExpanded;
    }
}
HamburgerMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-hamburger-menu',
                template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HamburgerMenuComponent.ctorParameters = () => [
    { type: HamburgerMenuService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HamburgerMenuComponent.prototype.hamburgerMenuService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HamburgerMenuModule {
}
HamburgerMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            HamburgerMenuComponent: {
                                component: HamburgerMenuComponent,
                            },
                        },
                    }))),
                ],
                declarations: [HamburgerMenuComponent],
                exports: [HamburgerMenuComponent],
                entryComponents: [HamburgerMenuComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const layoutModules = [OutletRefModule];
class LayoutModule {
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [...layoutModules],
                providers: [{ provide: LayoutConfig, useExisting: Config }],
                exports: [...layoutModules],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsentManagementFormComponent {
    constructor() {
        this.consentGiven = false;
        this.requiredConsents = [];
        this.isAnonymousConsentsEnabled = false;
        // TODO(issue:4989) Anonymous consents - remove
        this.isLevel13 = false;
        this.consentChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    onConsentChange() {
        this.consentGiven = !this.consentGiven;
        this.consentChanged.emit({
            given: this.consentGiven,
            template: this.consentTemplate,
        });
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    isRequired(templateId) {
        return this.isAnonymousConsentsEnabled
            ? this.requiredConsents.includes(templateId)
            : false;
    }
}
ConsentManagementFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consent-management-form',
                template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      (change)=\"onConsentChange()\"\n      [checked]=\"consentGiven\"\n      [disabled]=\"isRequired(consentTemplate?.id)\"\n    />\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <span *ngIf=\"isLevel13\" class=\"form-check-label cx-be-bold\">\n      {{ consentTemplate?.name }}\n    </span>\n    <!-- TODO(issue:4989) Anonymous consents - remove the *ngIf=\"isLevel13\" -->\n    <br *ngIf=\"isLevel13\" />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
            }] }
];
/** @nocollapse */
ConsentManagementFormComponent.ctorParameters = () => [];
ConsentManagementFormComponent.propDecorators = {
    consentTemplate: [{ type: Input }],
    requiredConsents: [{ type: Input }],
    isAnonymousConsentsEnabled: [{ type: Input }],
    consent: [{ type: Input }],
    isLevel13: [{ type: Input }],
    consentChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentGiven;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentTemplate;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.requiredConsents;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.isAnonymousConsentsEnabled;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consent;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.isLevel13;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentChanged;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsentManagementComponent {
    /**
     * @param {?} userConsentService
     * @param {?} globalMessageService
     * @param {?=} anonymousConsentsConfig
     * @param {?=} anonymousConsentsService
     * @param {?=} authService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([consentLoading, giveConsentLoading, withdrawConsentLoading, isUserLoggedIn, allConsentsLoading,]) => consentLoading ||
            giveConsentLoading ||
            withdrawConsentLoading ||
            !isUserLoggedIn ||
            allConsentsLoading)));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    /**
     * @private
     * @return {?}
     */
    consentListInit() {
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_templateList, _anonymousTemplates, isUserLoggedIn]) => isUserLoggedIn)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([templateList, _anonymousTemplates]) => {
            if (!this.consentsExists(templateList)) {
                this.userConsentService.loadConsents();
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([templateList, anonymousTemplates]) => {
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
        })));
    }
    /**
     * @private
     * @param {?} templateList
     * @param {?=} anonymousTemplates
     * @return {?}
     */
    hideAnonymousConsents(templateList, anonymousTemplates = []) {
        /** @type {?} */
        let hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map((/**
             * @param {?} template
             * @return {?}
             */
            template => template.id));
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
    /**
     * @private
     * @return {?}
     */
    giveConsentInit() {
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onConsentGivenSuccess(success))));
    }
    /**
     * @private
     * @return {?}
     */
    withdrawConsentInit() {
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, withdrawalSuccess]) => withdrawalSuccess)), tap((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        withdrawalSuccess => {
            if (withdrawalSuccess) {
                this.userConsentService.loadConsents();
            }
        })))
            .subscribe((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        withdrawalSuccess => this.onConsentWithdrawnSuccess(withdrawalSuccess))));
    }
    /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    consentsExists(templateList) {
        return Boolean(templateList) && templateList.length > 0;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onConsentChange({ given, template, }) {
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    }
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    onConsentGivenSuccess(success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    onConsentWithdrawnSuccess(success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    /**
     * @param {?=} templates
     * @return {?}
     */
    rejectAll(templates = []) {
        /** @type {?} */
        const consentsToWithdraw = [];
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            if (this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        }));
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap((/**
         * @param {?} _timesLoaded
         * @return {?}
         */
        _timesLoaded => this.allConsentsLoading.next(false))))
            .subscribe());
    }
    /**
     * @private
     * @param {?=} consentsToWithdraw
     * @return {?}
     */
    setupWithdrawalStream(consentsToWithdraw = []) {
        /** @type {?} */
        const loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter((/**
         * @param {?} loading
         * @return {?}
         */
        loading => !loading)));
        /** @type {?} */
        const count$ = loading$.pipe(scan((/**
         * @param {?} acc
         * @param {?} _value
         * @return {?}
         */
        (acc, _value) => acc + 1), -1));
        /** @type {?} */
        const withdraw$ = count$.pipe(tap((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            if (i < consentsToWithdraw.length) {
                this.userConsentService.withdrawConsent(consentsToWithdraw[i].currentConsent.code);
            }
        })));
        /** @type {?} */
        const checkTimesLoaded$ = withdraw$.pipe(filter((/**
         * @param {?} timesLoaded
         * @return {?}
         */
        timesLoaded => timesLoaded === consentsToWithdraw.length)));
        return checkTimesLoaded$;
    }
    /**
     * @param {?=} templates
     * @return {?}
     */
    allowAll(templates = []) {
        /** @type {?} */
        const consentsToGive = [];
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            if (this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToGive.push(template);
            }
        }));
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap((/**
         * @param {?} _timesLoaded
         * @return {?}
         */
        _timesLoaded => this.allConsentsLoading.next(false))))
            .subscribe());
    }
    /**
     * @private
     * @param {?=} consentsToGive
     * @return {?}
     */
    setupGiveStream(consentsToGive = []) {
        /** @type {?} */
        const loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter((/**
         * @param {?} loading
         * @return {?}
         */
        loading => !loading)));
        /** @type {?} */
        const count$ = loading$.pipe(scan((/**
         * @param {?} acc
         * @param {?} _value
         * @return {?}
         */
        (acc, _value) => acc + 1), -1));
        /** @type {?} */
        const giveConsent$ = count$.pipe(tap((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            if (i < consentsToGive.length) {
                this.userConsentService.giveConsent(consentsToGive[i].id, consentsToGive[i].version);
            }
        })));
        /** @type {?} */
        const checkTimesLoaded$ = giveConsent$.pipe(filter((/**
         * @param {?} timesLoaded
         * @return {?}
         */
        timesLoaded => timesLoaded === consentsToGive.length)));
        return checkTimesLoaded$;
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    isRequiredConsent(template) {
        if (!this.isAnonymousConsentsEnabled) {
            return false;
        }
        return (Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    }
}
ConsentManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consent-management',
                template: "<!-- TODO(issue:4989) Anonymous consents - remove the wrapping `<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">` -->\n<ng-container *ngIf=\"isLevel13; else legacyConsentManagementPage\">\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <ng-container *ngIf=\"templateList$ | async as templateList\">\n      <div class=\"cx-consent-action-links\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"rejectAll(templateList)\"\n            >{{ 'consentManagementForm.clearAll' | cxTranslate }}</a\n          >\n          <a\n            tabindex=\"0\"\n            class=\"btn-link cx-action-link\"\n            (click)=\"allowAll(templateList)\"\n            >{{ 'consentManagementForm.selectAll' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"cx-consent-toggles\">\n        <div class=\"col-sm-12 col-md-8 col-lg-6\">\n          <cx-consent-management-form\n            *ngFor=\"let consentTemplate of templateList\"\n            [consentTemplate]=\"consentTemplate\"\n            [requiredConsents]=\"requiredConsents\"\n            [isAnonymousConsentsEnabled]=\"isAnonymousConsentsEnabled\"\n            [isLevel13]=\"isLevel13\"\n            (consentChanged)=\"onConsentChange($event)\"\n          ></cx-consent-management-form>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n\n<!-- TODO(issue:4989) Anonymous consents - remove this whole `<ng-template>` -->\n<ng-template #legacyConsentManagementPage>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
ConsentManagementComponent.ctorParameters = () => [
    { type: UserConsentService },
    { type: GlobalMessageService },
    { type: AnonymousConsentsConfig },
    { type: AnonymousConsentsService },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.allConsentsLoading;
    /** @type {?} */
    ConsentManagementComponent.prototype.templateList$;
    /** @type {?} */
    ConsentManagementComponent.prototype.loading$;
    /** @type {?} */
    ConsentManagementComponent.prototype.requiredConsents;
    /** @type {?} */
    ConsentManagementComponent.prototype.isAnonymousConsentsEnabled;
    /** @type {?} */
    ConsentManagementComponent.prototype.isLevel13;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.userConsentService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.anonymousConsentsConfig;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsentManagementModule {
}
ConsentManagementModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    SpinnerModule,
                    I18nModule,
                    IconModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ConsentManagementComponent: {
                                component: ConsentManagementComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                ],
                declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
                exports: [ConsentManagementComponent, ConsentManagementFormComponent],
                entryComponents: [ConsentManagementComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnonymousConsentsModule {
}
AnonymousConsentsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorefrontComponent {
    /**
     * @param {?} hamburgerMenuService
     * @param {?} routingService
     */
    constructor(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this.startNavigating = val === true;
            this.stopNavigating = val === false;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    collapseMenuIfClickOutside(event) {
        if (((/** @type {?} */ (event.target))).className.includes('is-expanded')) {
            this.collapseMenu();
        }
    }
    /**
     * @return {?}
     */
    collapseMenu() {
        this.hamburgerMenuService.toggle(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    }
}
StorefrontComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-storefront',
                template: "<ng-template cxOutlet=\"cx-storefront\">\n  <ng-template cxOutlet=\"cx-header\">\n    <header\n      [class.is-expanded]=\"isExpanded$ | async\"\n      (keydown.escape)=\"collapseMenu()\"\n      (click)=\"collapseMenuIfClickOutside($event)\"\n    >\n      <cx-page-layout section=\"header\"></cx-page-layout>\n      <cx-page-layout section=\"navigation\"></cx-page-layout>\n    </header>\n    <cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n    <cx-global-message></cx-global-message>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n  <ng-template cxOutlet=\"cx-footer\">\n    <footer>\n      <cx-page-layout section=\"footer\"></cx-page-layout>\n    </footer>\n  </ng-template>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StorefrontComponent.ctorParameters = () => [
    { type: HamburgerMenuService },
    { type: RoutingService }
];
StorefrontComponent.propDecorators = {
    startNavigating: [{ type: HostBinding, args: ['class.start-navigating',] }],
    stopNavigating: [{ type: HostBinding, args: ['class.stop-navigating',] }]
};
if (false) {
    /** @type {?} */
    StorefrontComponent.prototype.navigateSubscription;
    /** @type {?} */
    StorefrontComponent.prototype.isExpanded$;
    /** @type {?} */
    StorefrontComponent.prototype.startNavigating;
    /** @type {?} */
    StorefrontComponent.prototype.stopNavigating;
    /**
     * @type {?}
     * @private
     */
    StorefrontComponent.prototype.hamburgerMenuService;
    /**
     * @type {?}
     * @private
     */
    StorefrontComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainModule {
}
MainModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generic carousel that renders CMS Components.
 */
class BannerCarouselComponent {
    /**
     * @param {?} componentData
     * @param {?} cmsService
     */
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((/**
         * @param {?} d
         * @return {?}
         */
        (d) => (this.theme = `${d.effect}-theme`))));
        this.items$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.banners.trim().split(' '))), map((/**
         * @param {?} codes
         * @return {?}
         */
        codes => codes.map((/**
         * @param {?} code
         * @return {?}
         */
        code => this.cmsService.getComponentData(code))))));
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
     * @return {?}
     */
    getItems() {
        return this.items$;
    }
}
BannerCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner-carousel',
                template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BannerCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService }
];
BannerCarouselComponent.propDecorators = {
    theme: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.componentData$;
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.items$;
    /**
     * Adds a specific theme for the carousel. The effect can be
     * used in CSS customisations.
     * @type {?}
     */
    BannerCarouselComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.cmsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerCarouselModule {
}
BannerCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            RotatingImagesComponent: {
                                component: BannerCarouselComponent,
                            },
                        },
                    }))),
                    PageComponentModule,
                    CarouselModule,
                    MediaModule,
                ],
                declarations: [BannerCarouselComponent],
                entryComponents: [BannerCarouselComponent],
                exports: [BannerCarouselComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerComponent {
    /**
     * @param {?} component
     */
    constructor(component) {
        this.component = component;
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-banner',
                template: "<ng-container *ngIf=\"component.data$ | async as data\">\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <p *ngIf=\"data.headline\" [innerHTML]=\"data.headline\"></p>\n    <cx-media [container]=\"data.media\"></cx-media>\n    <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n  </cx-generic-link>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BannerComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
if (false) {
    /** @type {?} */
    BannerComponent.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerModule {
}
BannerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GenericLinkModule,
                    MediaModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                declarations: [BannerComponent],
                entryComponents: [BannerComponent],
                exports: [BannerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkComponent {
    /**
     * @param {?} component
     */
    constructor(component) {
        this.component = component;
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-link',
                template: "<cx-generic-link\n  *ngIf=\"component.data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
if (false) {
    /** @type {?} */
    LinkComponent.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinkModule {
}
LinkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GenericLinkModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSLinkComponent: { component: LinkComponent },
                        },
                    }))),
                ],
                declarations: [LinkComponent],
                exports: [LinkComponent],
                entryComponents: [LinkComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParagraphComponent {
    /**
     * @param {?} component
     */
    constructor(component) {
        this.component = component;
    }
}
ParagraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-paragraph',
                template: "<p *ngIf=\"component.data$ | async as data\" [innerHTML]=\"data.content\"></p>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ParagraphComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
if (false) {
    /** @type {?} */
    ParagraphComponent.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsParagraphModule {
}
CmsParagraphModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSParagraphComponent: {
                                component: ParagraphComponent,
                            },
                            CMSTabParagraphComponent: {
                                component: ParagraphComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ParagraphComponent],
                exports: [ParagraphComponent],
                entryComponents: [ParagraphComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabParagraphContainerComponent {
    /**
     * @param {?} componentData
     * @param {?} cmsService
     */
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.activeTabNum = 0;
        this.components$ = this.componentData.data$.pipe(switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => combineLatest(data.components.split(' ').map((/**
         * @param {?} component
         * @return {?}
         */
        component => this.cmsService.getComponentData(component).pipe(map((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            if (!tab.flexType) {
                tab = Object.assign({}, tab, { flexType: tab.typeCode });
            }
            return Object.assign({}, tab, { title: `CMSTabParagraphContainer.tabs.${tab.uid}` });
        })))))))));
    }
    /**
     * @param {?} tabNum
     * @return {?}
     */
    select(tabNum) {
        this.activeTabNum = tabNum;
    }
}
TabParagraphContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-tab-paragraph-container',
                template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TabParagraphContainerComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService }
];
if (false) {
    /** @type {?} */
    TabParagraphContainerComponent.prototype.activeTabNum;
    /** @type {?} */
    TabParagraphContainerComponent.prototype.components$;
    /** @type {?} */
    TabParagraphContainerComponent.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    TabParagraphContainerComponent.prototype.cmsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabParagraphContainerModule {
}
TabParagraphContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSTabParagraphContainer: {
                                component: TabParagraphContainerComponent,
                            },
                        },
                    }))),
                    PageComponentModule,
                    OutletModule,
                    I18nModule,
                ],
                declarations: [TabParagraphContainerComponent],
                entryComponents: [TabParagraphContainerComponent],
                exports: [TabParagraphContainerComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressBookComponentService {
    /**
     * @param {?} userAddressService
     * @param {?=} checkoutDeliveryService
     * @param {?=} featureConfigService
     */
    constructor(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @return {?}
     */
    getAddresses() {
        return this.userAddressService.getAddresses();
    }
    /**
     * @return {?}
     */
    getAddressesStateLoading() {
        return this.userAddressService.getAddressesLoading();
    }
    /**
     * @return {?}
     */
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addUserAddress(address) {
        this.userAddressService.addUserAddress(address);
    }
    /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
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
}
AddressBookComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddressBookComponentService.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: FeatureConfigService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    AddressBookComponentService.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    AddressBookComponentService.prototype.featureConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressBookComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    }
    /**
     * @return {?}
     */
    addAddressButtonHandle() {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    editAddressButtonHandle(address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    addAddressSubmit(address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    }
    /**
     * @return {?}
     */
    addAddressCancel() {
        this.showAddAddressForm = false;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    editAddressSubmit(address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    }
    /**
     * @return {?}
     */
    editAddressCancel() {
        this.showEditAddressForm = false;
    }
}
AddressBookComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-book',
                template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of addresses$ | async\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
AddressBookComponent.ctorParameters = () => [
    { type: AddressBookComponentService }
];
if (false) {
    /** @type {?} */
    AddressBookComponent.prototype.addresses$;
    /** @type {?} */
    AddressBookComponent.prototype.addressesStateLoading$;
    /** @type {?} */
    AddressBookComponent.prototype.currentAddress;
    /** @type {?} */
    AddressBookComponent.prototype.showAddAddressForm;
    /** @type {?} */
    AddressBookComponent.prototype.showEditAddressForm;
    /** @type {?} */
    AddressBookComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressCardComponent {
    /**
     * @param {?} userAddressService
     * @param {?=} checkoutDeliveryService
     * @param {?=} featureConfigService
     */
    constructor(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
        this.editEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    openEditFormEvent() {
        this.editEvent.emit();
    }
    /**
     * @return {?}
     */
    cancelEdit() {
        this.editMode = false;
    }
    /**
     * @return {?}
     */
    setEditMode() {
        this.editMode = true;
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    setAddressAsDefault(addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
    /**
     * @param {?} addressId
     * @return {?}
     */
    deleteAddress(addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    }
}
AddressCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-address-card',
                template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
AddressCardComponent.ctorParameters = () => [
    { type: UserAddressService },
    { type: CheckoutDeliveryService },
    { type: FeatureConfigService }
];
AddressCardComponent.propDecorators = {
    address: [{ type: Input }],
    editEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AddressCardComponent.prototype.editMode;
    /** @type {?} */
    AddressCardComponent.prototype.isDefault;
    /** @type {?} */
    AddressCardComponent.prototype.address;
    /** @type {?} */
    AddressCardComponent.prototype.editEvent;
    /**
     * @type {?}
     * @private
     */
    AddressCardComponent.prototype.userAddressService;
    /**
     * @type {?}
     * @protected
     */
    AddressCardComponent.prototype.checkoutDeliveryService;
    /**
     * @type {?}
     * @private
     */
    AddressCardComponent.prototype.featureConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddressBookModule {
}
AddressBookModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                    CardModule,
                    AddressFormModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [AddressBookComponent, AddressCardComponent],
                exports: [AddressBookComponent, AddressCardComponent],
                providers: [UserAddressService, AddressBookComponentService],
                entryComponents: [AddressBookComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseAccountModalComponent {
    /**
     * @param {?} modalService
     * @param {?} userService
     * @param {?} authService
     * @param {?} globalMessageService
     * @param {?} routingService
     * @param {?} translationService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userToken$ = this.authService.getUserToken();
        this.userService.resetRemoveUserProcessState();
        this.subscription.add(this.userService
            .getRemoveUserResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onSuccess(success))));
        this.subscription.add(this.userService
            .getRemoveUserResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        error => this.onError(error))));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe((/**
             * @param {?} text
             * @return {?}
             */
            text => {
                this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }));
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    onError(error) {
        if (error) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedFailure')
                .pipe(first())
                .subscribe((/**
             * @param {?} text
             * @return {?}
             */
            text => {
                this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
            }));
        }
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
    /**
     * @return {?}
     */
    closeAccount() {
        this.userService.remove();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
CloseAccountModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-close-account-modal',
                template: "<ng-container *ngIf=\"userToken$ | async as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"dismissModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CloseAccountModalComponent.ctorParameters = () => [
    { type: ModalService },
    { type: UserService },
    { type: AuthService },
    { type: GlobalMessageService },
    { type: RoutingService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    CloseAccountModalComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.subscription;
    /** @type {?} */
    CloseAccountModalComponent.prototype.userToken$;
    /** @type {?} */
    CloseAccountModalComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    CloseAccountModalComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CloseAccountModalComponent.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseAccountComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    openModal() {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    }
}
CloseAccountComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-close-account',
                template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CloseAccountComponent.ctorParameters = () => [
    { type: ModalService }
];
if (false) {
    /** @type {?} */
    CloseAccountComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    CloseAccountComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseAccountModule {
}
CloseAccountModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlModule,
                    I18nModule,
                    IconModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CloseAccountComponent: {
                                component: CloseAccountComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                ],
                declarations: [CloseAccountComponent, CloseAccountModalComponent],
                exports: [CloseAccountComponent, CloseAccountModalComponent],
                entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ForgotPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} userService
     * @param {?} routingService
     */
    constructor(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.submited = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    }
    /**
     * @return {?}
     */
    requestForgotPasswordEmail() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ cxRoute: 'login' });
    }
}
ForgotPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-forgot-password',
                template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
            }] }
];
/** @nocollapse */
ForgotPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UserService },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    ForgotPasswordComponent.prototype.form;
    /** @type {?} */
    ForgotPasswordComponent.prototype.submited;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    ForgotPasswordComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ForgotPasswordModule {
}
ForgotPasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ForgotPasswordComponent: {
                                component: ForgotPasswordComponent,
                                guards: [NotAuthGuard],
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [ForgotPasswordComponent],
                exports: [ForgotPasswordComponent],
                entryComponents: [ForgotPasswordComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailsService {
    /**
     * @param {?} userOrderService
     * @param {?} routingService
     */
    constructor(userOrderService, routingService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} routingData
         * @return {?}
         */
        routingData => routingData.state.params.orderCode)));
        this.orderLoad$ = this.orderCode$.pipe(tap((/**
         * @param {?} orderCode
         * @return {?}
         */
        orderCode => {
            if (orderCode) {
                this.userOrderService.loadOrderDetails(orderCode);
            }
            else {
                this.userOrderService.clearOrderDetails();
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    getOrderDetails() {
        return this.orderLoad$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.userOrderService.getOrderDetails())));
    }
}
OrderDetailsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsService.ctorParameters = () => [
    { type: UserOrderService },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    OrderDetailsService.prototype.orderCode$;
    /** @type {?} */
    OrderDetailsService.prototype.orderLoad$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailHeadlineComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
}
OrderDetailHeadlineComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-headline',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | cxDate }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\" *ngIf=\"order?.statusDisplay\">\n        {{\n          'orderDetails.statusDisplay'\n            | cxTranslate: { context: order?.statusDisplay }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailHeadlineComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    OrderDetailHeadlineComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailHeadlineComponent.prototype.orderDetailsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailItemsComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    /**
     * @param {?} consignment
     * @return {?}
     */
    getConsignmentProducts(consignment) {
        /** @type {?} */
        const products = [];
        consignment.entries.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            products.push(element.orderEntry);
        }));
        return products;
    }
}
OrderDetailItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-items',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        <span *ngIf=\"consignment\">\n          {{\n            'orderDetails.deliveryStatus'\n              | cxTranslate: { context: consignment.status }\n          }}\n        </span>\n      </div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | cxDate }}</div>\n      </div>\n\n      <cx-consignment-tracking\n        [orderCode]=\"order.code\"\n        [consignment]=\"consignment\"\n        *cxFeature=\"'consignmentTracking'\"\n      >\n      </cx-consignment-tracking>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.pending' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailItemsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    OrderDetailItemsComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailItemsComponent.prototype.orderDetailsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailShippingComponent {
    /**
     * @param {?} orderDetailsService
     * @param {?} translation
     */
    constructor(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
    /**
     * @param {?} address
     * @return {?}
     */
    getAddressCardContent(address) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
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
        })));
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
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
        })));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getPaymentCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: payment.expiryMonth,
                year: payment.expiryYear,
            }),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle, textExpires]) => {
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        })));
    }
    /**
     * @param {?} shipping
     * @return {?}
     */
    getShippingMethodCardContent(shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle]) => {
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        })));
    }
}
OrderDetailShippingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-shipping',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailShippingComponent.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    OrderDetailShippingComponent.prototype.order$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.orderDetailsService;
    /**
     * @type {?}
     * @private
     */
    OrderDetailShippingComponent.prototype.translation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderDetailTotalsComponent {
    /**
     * @param {?} orderDetailsService
     */
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.orderDetailsService.getOrderDetails();
    }
}
OrderDetailTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-details-totals',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderDetailTotalsComponent.ctorParameters = () => [
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    OrderDetailTotalsComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderDetailTotalsComponent.prototype.orderDetailsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrackingEventsComponent {
    /**
     * @param {?} activeModal
     * @param {?} userOrderService
     */
    constructor(activeModal, userOrderService) {
        this.activeModal = activeModal;
        this.userOrderService = userOrderService;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.userOrderService.clearConsignmentTracking();
    }
}
TrackingEventsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-tracking-events',
                template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"tracking$ | async as consignmentTracking; else loading\">\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\" data-test=\"head-track\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title \">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <label>\n                {{ consignmentTracking?.trackingID }}\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\" data-test=\"body-event\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\" data-test=\"head-notrack\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\" data-test=\"loading-track\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          data-test=\"btn-dismiss\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
TrackingEventsComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: UserOrderService }
];
if (false) {
    /** @type {?} */
    TrackingEventsComponent.prototype.tracking$;
    /** @type {?} */
    TrackingEventsComponent.prototype.shipDate;
    /** @type {?} */
    TrackingEventsComponent.prototype.consignmentCode;
    /** @type {?} */
    TrackingEventsComponent.prototype.activeModal;
    /**
     * @type {?}
     * @private
     */
    TrackingEventsComponent.prototype.userOrderService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsignmentTrackingComponent {
    /**
     * @param {?} userOrderService
     * @param {?} modalService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
    }
    /**
     * @param {?} consignment
     * @return {?}
     */
    openTrackingDialog(consignment) {
        this.userOrderService.loadConsignmentTracking(this.orderCode, consignment.code);
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.userOrderService.clearConsignmentTracking();
    }
}
ConsignmentTrackingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consignment-tracking',
                template: "<ng-container *ngIf=\"consignment && consignment.status\">\n  <div *ngIf=\"consignmentStatus.includes(consignment.status)\">\n    <button\n      (click)=\"openTrackingDialog(consignment)\"\n      class=\"btn btn-action\"\n      data-test=\"btn-events\"\n    >\n      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ConsignmentTrackingComponent.ctorParameters = () => [
    { type: UserOrderService },
    { type: ModalService }
];
ConsignmentTrackingComponent.propDecorators = {
    consignment: [{ type: Input }],
    orderCode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.consignmentStatus;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.modalRef;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.consignment;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.orderCode;
    /** @type {?} */
    ConsignmentTrackingComponent.prototype.consignmentTracking$;
    /**
     * @type {?}
     * @private
     */
    ConsignmentTrackingComponent.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    ConsignmentTrackingComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
];
const ɵ0$1 = { pageLabel: 'order' }, ɵ1 = { cxRoute: 'orderDetails' };
class OrderDetailsModule {
}
OrderDetailsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartSharedModule,
                    CardModule,
                    CommonModule,
                    I18nModule,
                    FeaturesConfigModule,
                    RouterModule.forChild([
                        {
                            path: 'guest/order/:orderCode',
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0$1,
                        },
                        {
                            path: null,
                            canActivate: [AuthGuard, CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ1,
                        },
                    ]),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
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
                    }))),
                    SpinnerModule,
                ],
                providers: [OrderDetailsService],
                declarations: [...moduleComponents],
                exports: [...moduleComponents],
                entryComponents: [...moduleComponents],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderHistoryComponent {
    /**
     * @param {?} routing
     * @param {?} userOrderService
     * @param {?} translation
     */
    constructor(routing, userOrderService, translation) {
        this.routing = routing;
        this.userOrderService = userOrderService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.orders$ = this.userOrderService
            .getOrderHistoryList(this.PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} orders
         * @return {?}
         */
        (orders) => {
            if (orders.pagination) {
                this.sortType = orders.pagination.sort;
            }
        })));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.userOrderService.clearOrderList();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    changeSortCode(sortCode) {
        /** @type {?} */
        const event = {
            sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        /** @type {?} */
        const event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    }
    /**
     * @param {?} order
     * @return {?}
     */
    goToOrderDetail(order) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: order,
        });
    }
    /**
     * @return {?}
     */
    getSortLabels() {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textByDate, textByOrderNumber]) => {
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        })));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    fetchOrders(event) {
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
}
OrderHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-history',
                template: "<ng-container *ngIf=\"orders$ | async as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"isLoaded$ | async\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
OrderHistoryComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserOrderService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    OrderHistoryComponent.prototype.orders$;
    /** @type {?} */
    OrderHistoryComponent.prototype.isLoaded$;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.PAGE_SIZE;
    /** @type {?} */
    OrderHistoryComponent.prototype.sortType;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.routing;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    OrderHistoryComponent.prototype.translation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderHistoryModule {
}
OrderHistoryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountOrderHistoryComponent: {
                                component: OrderHistoryComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderModule {
}
OrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [OrderHistoryModule, OrderDetailsModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodsComponent {
    /**
     * @param {?} userPaymentService
     * @param {?} translation
     */
    constructor(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap((/**
         * @param {?} paymentDetails
         * @return {?}
         */
        paymentDetails => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find((/**
                 * @param {?} paymentDetail
                 * @return {?}
                 */
                paymentDetail => paymentDetail.defaultPayment))) {
                this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        })));
        this.editCard = null;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }) {
        return combineLatest([
            this.translation.translate('paymentCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('paymentCard.deleteConfirmation'),
            this.translation.translate('paymentCard.expires', {
                month: expiryMonth,
                year: expiryYear,
            }),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textSetAsDefault, textDelete, textDeleteConfirmation, textExpires, textDefaultPaymentMethod,]) => {
            /** @type {?} */
            const actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            /** @type {?} */
            const card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions,
                deleteMsg: textDeleteConfirmation,
            };
            return card;
        })));
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    deletePaymentMethod(paymentMethod) {
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
        this.editCard = null;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    setEdit(paymentMethod) {
        this.editCard = paymentMethod.id;
    }
    /**
     * @return {?}
     */
    cancelCard() {
        this.editCard = null;
    }
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    setDefaultPaymentMethod(paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
    }
}
PaymentMethodsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-payment-methods',
                template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"paymentMethods$ | async as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
PaymentMethodsComponent.ctorParameters = () => [
    { type: UserPaymentService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    PaymentMethodsComponent.prototype.paymentMethods$;
    /** @type {?} */
    PaymentMethodsComponent.prototype.editCard;
    /** @type {?} */
    PaymentMethodsComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.userPaymentService;
    /**
     * @type {?}
     * @private
     */
    PaymentMethodsComponent.prototype.translation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentMethodsModule {
}
PaymentMethodsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CardModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            AccountPaymentDetailsComponent: {
                                component: PaymentMethodsComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    I18nModule,
                ],
                providers: [UserService],
                declarations: [PaymentMethodsComponent],
                exports: [PaymentMethodsComponent],
                entryComponents: [PaymentMethodsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResetPasswordFormComponent {
    /**
     * @param {?} fb
     * @param {?} routingService
     * @param {?} userService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => (this.token = state.state.queryParams['token']))));
        this.subscription.add(this.userService.isPasswordReset().subscribe((/**
         * @param {?} reset
         * @return {?}
         */
        reset => {
            if (reset) {
                this.routingService.go({ cxRoute: 'login' });
            }
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    resetPassword() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        const password = this.form.value['password'];
        this.userService.resetPassword(this.token, password);
    }
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    matchPassword(ac) {
        if (ac.get('password').value !== ac.get('repassword').value) {
            return { NotEqual: true };
        }
    }
}
ResetPasswordFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-reset-password-form',
                template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
            }] }
];
/** @nocollapse */
ResetPasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: RoutingService },
    { type: UserService }
];
if (false) {
    /** @type {?} */
    ResetPasswordFormComponent.prototype.token;
    /** @type {?} */
    ResetPasswordFormComponent.prototype.subscription;
    /** @type {?} */
    ResetPasswordFormComponent.prototype.submited;
    /** @type {?} */
    ResetPasswordFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordFormComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordFormComponent.prototype.userService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResetPasswordModule {
}
ResetPasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ResetPasswordComponent: {
                                component: ResetPasswordFormComponent,
                                guards: [NotAuthGuard],
                            },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    I18nModule,
                ],
                declarations: [ResetPasswordFormComponent],
                exports: [ResetPasswordFormComponent],
                entryComponents: [ResetPasswordFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateEmailFormComponent {
    /**
     * @param {?} fb
     */
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
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isEmailConfirmNotValid(formControlName) {
        return (this.form.hasError('NotEqual') &&
            (this.submited ||
                (this.form.get(formControlName).touched &&
                    this.form.get(formControlName).dirty)));
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submited);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        const newUid = this.form.value.confirmEmail;
        /** @type {?} */
        const password = this.form.value.password;
        this.saveEmail.emit({ newUid, password });
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelEmail.emit();
    }
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    matchEmail(ac) {
        if (ac.get('email').value !== ac.get('confirmEmail').value) {
            return { NotEqual: true };
        }
    }
}
UpdateEmailFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-email-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"new-password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
            }] }
];
/** @nocollapse */
UpdateEmailFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdateEmailFormComponent.propDecorators = {
    saveEmail: [{ type: Output }],
    cancelEmail: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UpdateEmailFormComponent.prototype.submited;
    /** @type {?} */
    UpdateEmailFormComponent.prototype.saveEmail;
    /** @type {?} */
    UpdateEmailFormComponent.prototype.cancelEmail;
    /** @type {?} */
    UpdateEmailFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailFormComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateEmailComponent {
    /**
     * @param {?} routingService
     * @param {?} globalMessageService
     * @param {?} userService
     * @param {?} authService
     */
    constructor(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onSuccess(success))));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSubmit({ newUid, password }) {
        this.newUid = newUid;
        this.userService.updateEmail(password, newUid);
    }
    /**
     * @param {?} success
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetUpdateEmailResultState();
    }
}
UpdateEmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-email',
                template: "<ng-container>\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
UpdateEmailComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: UserService },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.newUid;
    /** @type {?} */
    UpdateEmailComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailComponent.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateEmailModule {
}
UpdateEmailModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdateEmailComponent: {
                                component: UpdateEmailComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
                exports: [UpdateEmailComponent, UpdateEmailFormComponent],
                entryComponents: [UpdateEmailComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    isPasswordConfirmNotValid() {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelled.emit();
    }
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    matchPassword(abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    }
}
UpdatePasswordFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-password-form',
                template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
            }] }
];
/** @nocollapse */
UpdatePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdatePasswordFormComponent.propDecorators = {
    submited: [{ type: Output }],
    cancelled: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordFormComponent.prototype.submitClicked;
    /** @type {?} */
    UpdatePasswordFormComponent.prototype.form;
    /** @type {?} */
    UpdatePasswordFormComponent.prototype.submited;
    /** @type {?} */
    UpdatePasswordFormComponent.prototype.cancelled;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordFormComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordComponent {
    /**
     * @param {?} routingService
     * @param {?} userService
     * @param {?} globalMessageService
     */
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onSuccess(success))));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSubmit({ oldPassword, newPassword, }) {
        this.userService.updatePassword(oldPassword, newPassword);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetUpdatePasswordProcessState();
    }
}
UpdatePasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-password',
                template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
UpdatePasswordComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.subscription;
    /** @type {?} */
    UpdatePasswordComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdatePasswordComponent.prototype.globalMessageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdatePasswordModule {
}
UpdatePasswordModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdatePasswordComponent: {
                                component: UpdatePasswordComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [UpdatePasswordComponent, UpdatePasswordFormComponent],
                exports: [UpdatePasswordComponent, UpdatePasswordFormComponent],
                entryComponents: [UpdatePasswordComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateProfileFormComponent {
    /**
     * @param {?} fb
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            userUpdates: Object.assign({}, this.form.value),
        });
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelled.emit();
    }
}
UpdateProfileFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-profile-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
            }] }
];
/** @nocollapse */
UpdateProfileFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
UpdateProfileFormComponent.propDecorators = {
    user: [{ type: Input }],
    titles: [{ type: Input }],
    submited: [{ type: Output }],
    cancelled: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UpdateProfileFormComponent.prototype.user;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.titles;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.submited;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.cancelled;
    /** @type {?} */
    UpdateProfileFormComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileFormComponent.prototype.submitClicked;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileFormComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateProfileComponent {
    /**
     * @param {?} routingService
     * @param {?} userService
     * @param {?} globalMessageService
     */
    constructor(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => this.onSuccess(success))));
    }
    /**
     * @param {?} success
     * @return {?}
     */
    onSuccess(success) {
        if (success) {
            this.globalMessageService.add({ key: 'updateProfileForm.profileUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSubmit({ userUpdates }) {
        this.userService.updatePersonalDetails(userUpdates);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    }
}
UpdateProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-update-profile',
                template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
UpdateProfileComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: UserService },
    { type: GlobalMessageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.subscription;
    /** @type {?} */
    UpdateProfileComponent.prototype.titles$;
    /** @type {?} */
    UpdateProfileComponent.prototype.user$;
    /** @type {?} */
    UpdateProfileComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UpdateProfileComponent.prototype.globalMessageService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpdateProfileModule {
}
UpdateProfileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            UpdateProfileComponent: {
                                component: UpdateProfileComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                    SpinnerModule,
                    I18nModule,
                ],
                declarations: [UpdateProfileComponent, UpdateProfileFormComponent],
                exports: [UpdateProfileComponent, UpdateProfileFormComponent],
                entryComponents: [UpdateProfileComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationPreferenceComponent {
    /**
     * @param {?} notificationPreferenceService
     */
    constructor(notificationPreferenceService) {
        this.notificationPreferenceService = notificationPreferenceService;
        this.preferences = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.notificationPreferenceService.resetNotificationPreferences();
        this.preferences$ = this.notificationPreferenceService
            .getPreferences()
            .pipe(tap((/**
         * @param {?} preferences
         * @return {?}
         */
        preferences => (this.preferences = preferences))));
        this.notificationPreferenceService.loadPreferences();
        this.isLoading$ = combineLatest([
            this.notificationPreferenceService.getPreferencesLoading(),
            this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([prefsLoading, updateLoading]) => prefsLoading || updateLoading)));
    }
    /**
     * @param {?} preference
     * @return {?}
     */
    updatePreference(preference) {
        /** @type {?} */
        const updatedPreferences = [];
        this.preferences.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            if (p.channel === preference.channel) {
                updatedPreferences.push(Object.assign({}, p, { enabled: !p.enabled }));
            }
            else {
                updatedPreferences.push(p);
            }
        }));
        this.notificationPreferenceService.updatePreferences(updatedPreferences);
    }
}
NotificationPreferenceComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-notification-preference',
                template: "<ng-container *ngIf=\"preferences$ | async as preferences\">\n  <div *ngIf=\"preferences.length > 0; else loading\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <div class=\"pref-header\">\n          {{ 'notificationPreference.message' | cxTranslate }}\n        </div>\n        <div class=\"form-check cx-notification-channels\">\n          <ng-container *ngFor=\"let preference of preferences\">\n            <label *ngIf=\"preference.visible\" class=\"pref-channel\">\n              <input\n                class=\"form-check-input cx-np-checkbox\"\n                role=\"checkbox\"\n                type=\"checkbox\"\n                [checked]=\"preference.enabled\"\n                (change)=\"updatePreference(preference)\"\n                [disabled]=\"isLoading$ | async\"\n              />\n              <span class=\"form-check-label\">\n                {{\n                  'notificationPreference.' + preference.channel | cxTranslate\n                }}\n                {{ preference.value }}\n              </span>\n            </label>\n          </ng-container>\n        </div>\n        <label class=\"pref-note\"\n          ><strong>{{ 'notificationPreference.note' | cxTranslate }}</strong\n          >{{ 'notificationPreference.noteMessage' | cxTranslate }}\n        </label>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NotificationPreferenceComponent.ctorParameters = () => [
    { type: UserNotificationPreferenceService }
];
if (false) {
    /** @type {?} */
    NotificationPreferenceComponent.prototype.preferences$;
    /** @type {?} */
    NotificationPreferenceComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @protected
     */
    NotificationPreferenceComponent.prototype.preferences;
    /**
     * @type {?}
     * @private
     */
    NotificationPreferenceComponent.prototype.notificationPreferenceService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationPreferenceModule {
}
NotificationPreferenceModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NotificationPreferenceComponent],
                imports: [
                    CommonModule,
                    SpinnerModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            NotificationPreferenceComponent: {
                                component: NotificationPreferenceComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                ],
                exports: [NotificationPreferenceComponent],
                entryComponents: [NotificationPreferenceComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ProductInterestSearchResultUI() { }
if (false) {
    /** @type {?|undefined} */
    ProductInterestSearchResultUI.prototype.results;
}
class MyInterestsComponent {
    /**
     * @param {?} productInterestService
     * @param {?} translationService
     * @param {?} productService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.interests$ = this.productInterestService
            .getAndLoadProductInterests(this.DEFAULT_PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} interests
         * @return {?}
         */
        interests => (this.pagination = {
            currentPage: interests.pagination.page,
            pageSize: interests.pagination.count,
            totalPages: interests.pagination.totalPages,
            totalResults: interests.pagination.totalCount,
            sort: 'byNameAsc',
        }))), map((/**
         * @param {?} interest
         * @return {?}
         */
        interest => (Object.assign({}, interest, { results: interest.results
                ? interest.results.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => (Object.assign({}, result, { product$: this.getProduct(result) }))))
                : interest.results })))));
        this.getInterestsloading$ = this.productInterestService.getProdutInterestsLoading();
        this.isRemoveDisabled$ = combineLatest([
            this.getInterestsloading$,
            this.productInterestService.getRemoveProdutInterestLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([getLoading, removeLoading]) => getLoading || removeLoading)));
        this.sortLabels = this.getSortLabels();
    }
    /**
     * @private
     * @return {?}
     */
    getSortLabels() {
        return combineLatest([
            this.translationService.translate('myInterests.sorting.byNameAsc'),
            this.translationService.translate('myInterests.sorting.byNameDesc'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([asc, desc]) => {
            return {
                byNameAsc: asc,
                byNameDesc: desc,
            };
        })));
    }
    /**
     * @private
     * @param {?} interest
     * @return {?}
     */
    getProduct(interest) {
        return this.productService.get(interest.product.code, 'details');
    }
    /**
     * @param {?} relation
     * @return {?}
     */
    removeInterest(relation) {
        this.productInterestService.removeProdutInterest({
            product: relation.product,
            productInterestEntry: relation.productInterestEntry,
        });
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortChange(sort) {
        this.sort = sort;
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, 0, this.sortMapping[sort]);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.productInterestService.loadProductInterests(this.DEFAULT_PAGE_SIZE, page, this.sortMapping[this.sort]);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.productInterestService.clearProductInterests();
        this.productInterestService.resetRemoveInterestState();
    }
}
MyInterestsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-my-interests',
                template: "<div *ngIf=\"interests$ | async as interests\" class=\"container\">\n  <div class=\"cx-product-interests-title h3\">\n    <h3>{{ 'myInterests.header' | cxTranslate }}</h3>\n  </div>\n  <div\n    class=\"cx-product-interests-body\"\n    *ngIf=\"!(getInterestsloading$ | async); else loading\"\n  >\n    <ng-container *ngIf=\"interests.pagination.totalCount > 0; else noInterest\">\n      <div class=\"cx-product-interests-sort top row\">\n        <div\n          class=\"cx-product-interests-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div\n          class=\"cx-product-interests-pagination cx-product-interests-thead-mobile\"\n        >\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n      <table class=\"table cx-product-interests-table\">\n        <thead class=\"cx-product-interests-thead-mobile\">\n          <th scope=\"col\">\n            {{ 'myInterests.item' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">\n            {{ 'myInterests.price' | cxTranslate }}\n          </th>\n          <th scope=\"col\">\n            {{ 'myInterests.notifications' | cxTranslate }}\n          </th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let interest of interests.results\"\n            class=\"cx-product-interests-product-item\"\n          >\n            <ng-container *ngIf=\"interest.product$ | async as product\">\n              <td>\n                <div class=\"cx-product-interests-label\">\n                  <a\n                    class=\"cx-product-interests-product-image-link\"\n                    [routerLink]=\"\n                      { cxRoute: 'product', params: product } | cxUrl\n                    \"\n                  >\n                    <cx-media\n                      [container]=\"product.images?.PRIMARY\"\n                      format=\"thumbnail\"\n                    ></cx-media>\n                  </a>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-info col-10\">\n                  <div class=\"cx-info-container row \">\n                    <div>\n                      <div *ngIf=\"product.name\" class=\"cx-name\">\n                        <a\n                          class=\"cx-link cx-product-interests-product-code-link\"\n                          [routerLink]=\"\n                            { cxRoute: 'product', params: product } | cxUrl\n                          \"\n                        >\n                          {{ product.name }}\n                        </a>\n                      </div>\n                      <div *ngIf=\"product.code\" class=\"cx-code\">\n                        <span>{{\n                          'myInterests.productId'\n                            | cxTranslate: { code: product.code }\n                        }}</span>\n                      </div>\n\n                      <ng-container\n                        *ngFor=\"let baseOptions of product.baseOptions\"\n                      >\n                        <div\n                          *ngFor=\"\n                            let variant of baseOptions.selected\n                              ?.variantOptionQualifiers\n                          \"\n                          class=\"cx-property\"\n                        >\n                          <div\n                            class=\"cx-label cx-product-interests-variant-name\"\n                          >\n                            {{ variant.name }}\n                          </div>\n                          <div\n                            class=\"cx-value cx-product-interests-variant-value\"\n                          >\n                            {{ variant.value }}\n                          </div>\n                        </div>\n                      </ng-container>\n                      <div\n                        class=\"cx-property\"\n                        *ngIf=\"product.stock.stockLevelStatus === 'outOfStock'\"\n                      >\n                        <div\n                          class=\"cx-label cx-product-interests-product-stock\"\n                        >\n                          {{ 'myInterests.outOfStock' | cxTranslate }}\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-product-price\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.price' | cxTranslate }}\n                  </div>\n                  <span>{{ product.price.formattedValue }}</span>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-product-interests-subscriptions\">\n                  <div class=\"d-md-none cx-product-interests-label\">\n                    {{ 'myInterests.notifications' | cxTranslate }}\n                  </div>\n                  <div\n                    class=\"cx-product-interests-notification\"\n                    *ngFor=\"let interestEntry of interest.productInterestEntry\"\n                  >\n                    <span class=\"cx-product-interests-type\">\n                      {{\n                        'myInterests.' + interestEntry.interestType\n                          | cxTranslate\n                      }}\n                    </span>\n                    <span class=\"cx-product-interests-expiration-date\">\n                      {{\n                        'myInterests.expirationDate'\n                          | cxTranslate\n                            : {\n                                expirationDate:\n                                  interestEntry.expirationDate | date\n                              }\n                      }}\n                    </span>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div class=\"cx-actions cx-product-interests-remove-button\">\n                  <button\n                    type=\"button\"\n                    class=\"link cx-product-interests-remove-btn\"\n                    [disabled]=\"isRemoveDisabled$ | async\"\n                    (click)=\"removeInterest(interest)\"\n                  >\n                    {{ 'myInterests.remove' | cxTranslate }}\n                  </button>\n                </div>\n              </td>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"cx-product-interests-sort bottom row\">\n        <div\n          class=\"cx-product-interests-form-group cx-product-interests-thead-mobile form-group col-sm-12 col-md-4 col-lg-4\"\n        >\n          <cx-sorting\n            [sortOptions]=\"sortOptions\"\n            [sortLabels]=\"sortLabels | async\"\n            (sortListEvent)=\"sortChange($event)\"\n            [selectedOption]=\"sort\"\n            placeholder=\"{{ 'myInterests.sortByMostRecent' | cxTranslate }}\"\n          >\n          </cx-sorting>\n        </div>\n        <div class=\"cx-product-interests-pagination\">\n          <cx-pagination\n            [pagination]=\"pagination\"\n            (viewPageEvent)=\"pageChange($event)\"\n          ></cx-pagination>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n<ng-template #noInterest>\n  <div class=\"cx-product-interests-message\">\n    {{ 'myInterests.noInterests' | cxTranslate }}\n  </div>\n</ng-template>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MyInterestsComponent.ctorParameters = () => [
    { type: UserInterestsService },
    { type: TranslationService },
    { type: ProductService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.DEFAULT_PAGE_SIZE;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.sortMapping;
    /** @type {?} */
    MyInterestsComponent.prototype.sort;
    /** @type {?} */
    MyInterestsComponent.prototype.sortOptions;
    /** @type {?} */
    MyInterestsComponent.prototype.pagination;
    /** @type {?} */
    MyInterestsComponent.prototype.interests$;
    /** @type {?} */
    MyInterestsComponent.prototype.isRemoveDisabled$;
    /** @type {?} */
    MyInterestsComponent.prototype.getInterestsloading$;
    /** @type {?} */
    MyInterestsComponent.prototype.sortLabels;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.productInterestService;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    MyInterestsComponent.prototype.productService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyInterestsModule {
}
MyInterestsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyInterestsComponent],
                imports: [
                    CommonModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MyInterestsComponent: {
                                component: MyInterestsComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                    RouterModule,
                    ListNavigationModule,
                    I18nModule,
                    UrlModule,
                    MediaModule,
                    SpinnerModule,
                ],
                exports: [MyInterestsComponent],
                entryComponents: [MyInterestsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} component
     * @param {?} pageMetaService
     * @param {?} translation
     */
    constructor(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setTitle();
        this.setCrumbs();
    }
    /**
     * @private
     * @return {?}
     */
    setTitle() {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => meta.heading || meta.title)));
    }
    /**
     * @private
     * @return {?}
     */
    setCrumbs() {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([meta, textHome]) => meta && meta.breadcrumbs
            ? meta.breadcrumbs
            : [{ label: textHome, link: '/' }])));
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-breadcrumb',
                template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: PageMetaService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.title$;
    /** @type {?} */
    BreadcrumbComponent.prototype.crumbs$;
    /** @type {?} */
    BreadcrumbComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbComponent.prototype.pageMetaService;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.translation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbModule {
}
BreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            BreadcrumbComponent: {
                                component: BreadcrumbComponent,
                            },
                        },
                    }))),
                    CmsPageTitleModule,
                ],
                declarations: [BreadcrumbComponent],
                exports: [BreadcrumbComponent],
                entryComponents: [BreadcrumbComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationService {
    /**
     * @param {?} cmsService
     * @param {?} semanticPathService
     */
    constructor(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @param {?} data$
     * @return {?}
     */
    createNavigation(data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([data, nav]) => {
            return {
                title: data.name,
                children: [nav],
            };
        })));
    }
    /**
     * returns an observable with the `NavigationNode` for the given `CmsNavigationComponent`.
     * This function will load the navigation underlying entries and childs if they haven't been
     * loaded so far.
     * @param {?} data$
     * @return {?}
     */
    getNavigationNode(data$) {
        if (!data$) {
            return of();
        }
        return data$.pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => !!data)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const navigation = data.navigationNode ? data.navigationNode : data;
            return this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap((/**
             * @param {?} items
             * @return {?}
             */
            items => {
                if (items === undefined) {
                    this.loadNavigationEntryItems(navigation, true);
                }
            })), filter(Boolean), map((/**
             * @param {?} items
             * @return {?}
             */
            items => this.populateNavigationNode(navigation, items))));
        })));
    }
    /**
     * Loads all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    loadNavigationEntryItems(nodeData, root, itemsList = []) {
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            }));
        }
        if (nodeData.children && nodeData.children.length > 0) {
            nodeData.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            child => this.loadNavigationEntryItems(child, false, itemsList)));
        }
        if (root) {
            this.cmsService.loadNavigationItems(nodeData.uid, itemsList);
        }
    }
    /**
     * Create a new node tree for the view
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    populateNavigationNode(nodeData, items) {
        /** @type {?} */
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
            /** @type {?} */
            const children = nodeData.children
                .map((/**
             * @param {?} child
             * @return {?}
             */
            child => this.populateNavigationNode(child, items)))
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
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    populateLink(node, entry, items) {
        /** @type {?} */
        const item = items[`${entry.itemId}_${entry.itemSuperType}`];
        // now we only consider CMSLinkComponent
        if (item && entry.itemType === 'CMSLinkComponent') {
            if (!node.title) {
                node.title = item.linkName;
            }
            /** @type {?} */
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
     * @private
     * @param {?} item
     * @return {?}
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
}
NavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
NavigationService.ctorParameters = () => [
    { type: CmsService },
    { type: SemanticPathService }
];
/** @nocollapse */ NavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(ɵɵinject(CmsService), ɵɵinject(SemanticPathService)); }, token: NavigationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NavigationService.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    NavigationService.prototype.semanticPathService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryNavigationComponent {
    /**
     * @param {?} componentData
     * @param {?} service
     */
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.data$ = this.componentData.data$;
    }
}
CategoryNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-category-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [ngClass]=\"(data$ | async).styleClass\"\n  [wrapAfter]=\"(data$ | async).wrapAfter\"\n  [allowAlignToRight]=\"true\"\n></cx-navigation-ui>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CategoryNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
if (false) {
    /** @type {?} */
    CategoryNavigationComponent.prototype.node$;
    /** @type {?} */
    CategoryNavigationComponent.prototype.data$;
    /**
     * @type {?}
     * @protected
     */
    CategoryNavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    CategoryNavigationComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationUIComponent {
    /**
     * @param {?} router
     * @param {?} renderer
     * @param {?} elemRef
     */
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
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd)))
            .subscribe((/**
         * @return {?}
         */
        () => this.clear())));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe((/**
         * @return {?}
         */
        () => {
            this.alignWrappersToRightIfStickOut();
        })));
    }
    /**
     * @return {?}
     */
    onResize() {
        this.resize.next();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleOpen(event) {
        /** @type {?} */
        const node = (/** @type {?} */ (event.currentTarget));
        if (this.openNodes.includes(node)) {
            this.openNodes = this.openNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n !== node));
            this.renderer.removeClass(node, 'is-open');
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    back() {
        this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
        this.openNodes.pop();
        this.updateClasses();
    }
    /**
     * @return {?}
     */
    clear() {
        this.openNodes = [];
        this.updateClasses();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseEnter(event) {
        this.alignWrapperToRightIfStickOut((/** @type {?} */ (event.currentTarget)));
        this.focusAfterPreviousClicked(event);
    }
    /**
     * @param {?} node
     * @param {?=} depth
     * @return {?}
     */
    getDepth(node, depth = 0) {
        if (node.children && node.children.length > 0) {
            return Math.max(...node.children.map((/**
             * @param {?} n
             * @return {?}
             */
            n => this.getDepth(n, depth + 1))));
        }
        else {
            return depth;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focusAfterPreviousClicked(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (((event.target || event.relatedTarget))));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    alignWrapperToRightIfStickOut(node) {
        if (this.allowAlignToRight) {
            /** @type {?} */
            const wrapper = (/** @type {?} */ (node.querySelector('.wrapper')));
            /** @type {?} */
            const navBar = (/** @type {?} */ (this.elemRef.nativeElement));
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', `${node.offsetWidth - wrapper.offsetWidth}px`);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    alignWrappersToRightIfStickOut() {
        /** @type {?} */
        const navs = (/** @type {?} */ (this.elemRef.nativeElement.childNodes));
        Array.from(navs)
            .filter((/**
         * @param {?} node
         * @return {?}
         */
        node => node.tagName === 'NAV'))
            .forEach((/**
         * @param {?} nav
         * @return {?}
         */
        nav => this.alignWrapperToRightIfStickOut((/** @type {?} */ (nav)))));
    }
    /**
     * @private
     * @return {?}
     */
    updateClasses() {
        this.openNodes.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => {
            if (i + 1 < this.openNodes.length) {
                this.renderer.addClass(node, 'is-opened');
                this.renderer.removeClass(node, 'is-open');
            }
            else {
                this.renderer.removeClass(node, 'is-opened');
                this.renderer.addClass(node, 'is-open');
            }
        }));
        this.isOpen = this.openNodes.length > 0;
    }
}
NavigationUIComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation-ui',
                template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    tabindex=\"0\"\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}!\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NavigationUIComponent.ctorParameters = () => [
    { type: Router },
    { type: Renderer2 },
    { type: ElementRef }
];
NavigationUIComponent.propDecorators = {
    node: [{ type: Input }],
    wrapAfter: [{ type: Input }],
    allowAlignToRight: [{ type: Input }],
    flyout: [{ type: Input }, { type: HostBinding, args: ['class.flyout',] }],
    isOpen: [{ type: Input }, { type: HostBinding, args: ['class.is-open',] }],
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /**
     * The navigation node to render.
     * @type {?}
     */
    NavigationUIComponent.prototype.node;
    /**
     * The number of child nodes that must be wrapped.
     * @type {?}
     */
    NavigationUIComponent.prototype.wrapAfter;
    /** @type {?} */
    NavigationUIComponent.prototype.allowAlignToRight;
    /**
     * the icon type that will be used for navigation nodes
     * with children.
     * @type {?}
     */
    NavigationUIComponent.prototype.iconType;
    /**
     * Indicates whether the navigation should support flyout.
     * If flyout is set to true, the
     * nested child navitation nodes will only appear on hover or focus.
     * @type {?}
     */
    NavigationUIComponent.prototype.flyout;
    /** @type {?} */
    NavigationUIComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.openNodes;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.resize;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.elemRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationComponent {
    /**
     * @param {?} componentData
     * @param {?} service
     */
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.createNavigation(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation',
                template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
if (false) {
    /** @type {?} */
    NavigationComponent.prototype.node$;
    /** @type {?} */
    NavigationComponent.prototype.styleClass$;
    /**
     * @type {?}
     * @protected
     */
    NavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    NavigationComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationModule {
}
NavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    IconModule,
                    GenericLinkModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            NavigationComponent: {
                                component: NavigationComponent,
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [NavigationComponent, NavigationUIComponent],
                entryComponents: [NavigationComponent],
                exports: [NavigationComponent, NavigationUIComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryNavigationModule {
}
CategoryNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NavigationModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CategoryNavigationComponent: {
                                component: CategoryNavigationComponent,
                            },
                        },
                    }))),
                ],
                declarations: [CategoryNavigationComponent],
                entryComponents: [CategoryNavigationComponent],
                exports: [CategoryNavigationComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterNavigationComponent {
    /**
     * @param {?} componentData
     * @param {?} service
     * @param {?=} anonymousConsentsConfig
     */
    constructor(componentData, service, anonymousConsentsConfig) {
        this.componentData = componentData;
        this.service = service;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
        // in order to preserve the backwards compatibility, this should render only if anonymous consents feature is disabled
        this.data$ = this.componentData.data$.pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => !isFeatureEnabled(this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE))));
    }
}
FooterNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-footer-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService },
    { type: AnonymousConsentsConfig }
];
if (false) {
    /** @type {?} */
    FooterNavigationComponent.prototype.node$;
    /** @type {?} */
    FooterNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    FooterNavigationComponent.prototype.data$;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.service;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.anonymousConsentsConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterNavigationModule {
}
FooterNavigationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    NavigationModule,
                    GenericLinkModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            FooterNavigationComponent: {
                                component: FooterNavigationComponent,
                            },
                        },
                    }))),
                ],
                declarations: [FooterNavigationComponent],
                entryComponents: [FooterNavigationComponent],
                exports: [FooterNavigationComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NavigationNode() { }
if (false) {
    /** @type {?|undefined} */
    NavigationNode.prototype.title;
    /**
     * The url or route (parts)
     * @type {?|undefined}
     */
    NavigationNode.prototype.url;
    /** @type {?|undefined} */
    NavigationNode.prototype.target;
    /** @type {?|undefined} */
    NavigationNode.prototype.children;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
class SearchBoxComponentService {
    /**
     * @param {?} searchService
     * @param {?} routingService
     * @param {?} translationService
     * @param {?} winRef
     */
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
     * @param {?} query
     * @param {?} config
     * @return {?}
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
     * @param {?} config
     * @return {?}
     */
    getResults(config) {
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([productResults, suggestions, message]) => {
            return {
                products: productResults ? productResults.products : null,
                suggestions,
                message,
            };
        })), tap((/**
         * @param {?} results
         * @return {?}
         */
        results => this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, this.hasResults(results)))));
    }
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    clearResults() {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    }
    /**
     * @param {?} className
     * @return {?}
     */
    hasBodyClass(className) {
        return this.winRef.document.body.classList.contains(className);
    }
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
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
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    hasResults(results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
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
     * @private
     * @param {?} config
     * @return {?}
     */
    getProductSuggestions(config) {
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            res => res.map((/**
             * @param {?} suggestion
             * @return {?}
             */
            suggestion => suggestion.value)))), switchMap((/**
             * @param {?} suggestions
             * @return {?}
             */
            suggestions => {
                if (suggestions.length === 0) {
                    return this.getExactSuggestion(config).pipe(map((/**
                     * @param {?} match
                     * @return {?}
                     */
                    match => (match ? [match] : []))));
                }
                else {
                    return of(suggestions);
                }
            })));
        }
    }
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    getExactSuggestion(config) {
        return this.getProductResults(config).pipe(switchMap((/**
         * @param {?} productResult
         * @return {?}
         */
        productResult => {
            return productResult.products && productResult.products.length > 0
                ? this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        })));
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getSearchMessage(config) {
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
        ]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([productResult, suggestions]) => {
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        })));
    }
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    launchSearchPage(query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query },
        });
    }
    /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    fetchTranslation(translationKey, options) {
        return this.translationService.translate(translationKey, options);
    }
}
SearchBoxComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SearchBoxComponentService.ctorParameters = () => [
    { type: SearchboxService },
    { type: RoutingService },
    { type: TranslationService },
    { type: WindowRef }
];
/** @nocollapse */ SearchBoxComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(ɵɵinject(SearchboxService), ɵɵinject(RoutingService), ɵɵinject(TranslationService), ɵɵinject(WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SearchBoxComponentService.prototype.searchService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.translationService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponentService.prototype.winRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 1,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    maxSuggestions: 5,
    displayProductImages: true,
};
class SearchBoxComponent {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     * @param {?} searchBoxComponentService
     * @param {?} componentData
     */
    constructor(searchBoxComponentService, componentData) {
        this.searchBoxComponentService = searchBoxComponentService;
        this.componentData = componentData;
        this.iconTypes = ICON_TYPE;
        /**
         * In some occasions we need to ignore the close event,
         * for example when we click inside the search result section.
         */
        this.ignoreCloseEvent = false;
        this.results$ = this.config$.pipe(tap((/**
         * @param {?} c
         * @return {?}
         */
        c => (this.config = c))), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.searchBoxComponentService.getResults(config))));
    }
    /**
     * Sets the search box input field
     * @param {?} value
     * @return {?}
     */
    set queryText(value) {
        if (value) {
            this.search(value);
        }
    }
    /**
     * Returns the backend configuration or default configuration for the searchbox.
     * @private
     * @return {?}
     */
    get config$() {
        if (this.componentData) {
            return (/** @type {?} */ (this.componentData.data$.pipe(
            // Since the backend returns string values (i.e. displayProducts: "true") for
            // boolean values, we replace them with boolean values.
            map((/**
             * @param {?} c
             * @return {?}
             */
            c => {
                return Object.assign({}, c, { displayProducts: (/** @type {?} */ (c.displayProducts)) === 'true' || c.displayProducts === true, displayProductImages: (/** @type {?} */ (c.displayProductImages)) === 'true' ||
                        c.displayProductImages === true, displaySuggestions: (/** @type {?} */ (c.displaySuggestions)) === 'true' ||
                        c.displaySuggestions === true });
            })))));
        }
        else {
            return of(DEFAULT_SEARCHBOX_CONFIG);
        }
    }
    /**
     * Closes the searchbox and opens the search result page.
     * @param {?} query
     * @return {?}
     */
    search(query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    }
    /**
     * Opens the typeahead searchbox
     * @return {?}
     */
    open() {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    }
    /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @return {?}
     */
    close(event) {
        if (!this.ignoreCloseEvent) {
            this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
            if (event && event.target) {
                ((/** @type {?} */ (event.target))).blur();
            }
        }
        this.ignoreCloseEvent = false;
    }
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     *
     * @param {?} event
     * @return {?}
     */
    avoidReopen(event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    }
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a single product match, we could open the PDP.
     * @param {?} event
     * @param {?} query
     * @return {?}
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
     * @return {?}
     */
    disableClose() {
        this.ignoreCloseEvent = true;
    }
    /**
     * Clears the search box input field
     * @param {?} el
     * @return {?}
     */
    clear(el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-searchbox',
                template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div *ngIf=\"results$ | async as result\" class=\"results\" (click)=\"close($event)\">\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = () => [
    { type: SearchBoxComponentService },
    { type: CmsComponentData, decorators: [{ type: Optional }] }
];
SearchBoxComponent.propDecorators = {
    queryText: [{ type: Input, args: ['queryText',] }]
};
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.config;
    /** @type {?} */
    SearchBoxComponent.prototype.iconTypes;
    /**
     * In some occasions we need to ignore the close event,
     * for example when we click inside the search result section.
     * @type {?}
     * @private
     */
    SearchBoxComponent.prototype.ignoreCloseEvent;
    /** @type {?} */
    SearchBoxComponent.prototype.results$;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponent.prototype.searchBoxComponentService;
    /**
     * @type {?}
     * @protected
     */
    SearchBoxComponent.prototype.componentData;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SearchBoxConfig() { }
if (false) {
    /** @type {?} */
    SearchBoxConfig.prototype.displaySuggestions;
    /** @type {?} */
    SearchBoxConfig.prototype.displayProducts;
    /** @type {?|undefined} */
    SearchBoxConfig.prototype.displayProductImages;
    /** @type {?|undefined} */
    SearchBoxConfig.prototype.maxProducts;
    /** @type {?|undefined} */
    SearchBoxConfig.prototype.maxSuggestions;
    /** @type {?|undefined} */
    SearchBoxConfig.prototype.minCharactersBeforeRequest;
}
/**
 * @record
 */
function SearchResults() { }
if (false) {
    /** @type {?|undefined} */
    SearchResults.prototype.message;
    /** @type {?|undefined} */
    SearchResults.prototype.products;
    /** @type {?|undefined} */
    SearchResults.prototype.suggestions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighlightPipe {
    /**
     * @param {?} text
     * @param {?=} match
     * @return {?}
     */
    transform(text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), `<span class="highlight">${match.trim()}</span>`);
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{ name: 'cxHighlight' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchBoxModule {
}
SearchBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MediaModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            SearchBoxComponent: {
                                component: SearchBoxComponent,
                            },
                        },
                    }))),
                    IconModule,
                    UrlModule,
                    I18nModule,
                ],
                declarations: [SearchBoxComponent, HighlightPipe],
                entryComponents: [SearchBoxComponent],
                exports: [SearchBoxComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationItemsComponent {
    /**
     * @param {?} checkoutService
     */
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
}
OrderConfirmationItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-items',
                template: "<div class=\"cx-order-items container\" *ngIf=\"order$ | async as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [isReadOnly]=\"true\"\n  ></cx-cart-item-list>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
OrderConfirmationItemsComponent.ctorParameters = () => [
    { type: CheckoutService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationItemsComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationItemsComponent.prototype.checkoutService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationOverviewComponent {
    /**
     * @param {?} checkoutService
     * @param {?} translation
     */
    constructor(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
    /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    getAddressCardContent(deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => Boolean(deliveryAddress))), map((/**
         * @param {?} textTitle
         * @return {?}
         */
        textTitle => ({
            title: textTitle,
            textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                `${deliveryAddress.town}, ${deliveryAddress.country.isocode}, ${deliveryAddress.postalCode}`,
                deliveryAddress.phone,
            ],
        }))));
    }
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    getDeliveryModeCardContent(deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => Boolean(deliveryMode))), map((/**
         * @param {?} textTitle
         * @return {?}
         */
        textTitle => ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        }))));
    }
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    getBillingAddressCardContent(billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => Boolean(billingAddress))), map((/**
         * @param {?} textTitle
         * @return {?}
         */
        textTitle => ({
            title: textTitle,
            textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                `${billingAddress.town}, ${billingAddress.country.isocode}, ${billingAddress.postalCode}`,
                billingAddress.phone,
            ],
        }))));
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    getPaymentInfoCardContent(payment) {
        return combineLatest([
            this.translation.translate('paymentForm.payment'),
            this.translation.translate('paymentCard.expires', {
                month: Boolean(payment) ? payment.expiryMonth : '',
                year: Boolean(payment) ? payment.expiryYear : '',
            }),
        ]).pipe(filter((/**
         * @param {?} _
         * @return {?}
         */
        _ => Boolean(payment))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([textTitle, textExpires]) => ({
            title: textTitle,
            textBold: payment.accountHolderName,
            text: [payment.cardNumber, textExpires],
        }))));
    }
}
OrderConfirmationOverviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-overview',
                template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
OrderConfirmationOverviewComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationOverviewComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationOverviewComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationOverviewComponent.prototype.translation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationThankYouMessageComponent {
    /**
     * @param {?} checkoutService
     */
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
        this.isGuestCustomer = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            this.isGuestCustomer = order.guestCustomer;
            this.orderGuid = order.guid;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
}
OrderConfirmationThankYouMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-thank-you-message',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <header class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation-message\">\n    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n    <p>\n      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n    </p>\n    <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n  </div>\n\n  <div *ngIf=\"isGuestCustomer\">\n    <cx-guest-register-form\n      [guid]=\"orderGuid\"\n      [email]=\"order.paymentInfo.billingAddress.email\"\n    ></cx-guest-register-form>\n  </div>\n\n  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
OrderConfirmationThankYouMessageComponent.ctorParameters = () => [
    { type: CheckoutService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.order$;
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.isGuestCustomer;
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.orderGuid;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationThankYouMessageComponent.prototype.checkoutService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationTotalsComponent {
    /**
     * @param {?} checkoutService
     */
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
}
OrderConfirmationTotalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-totals',
                template: "<div class=\"cx-order-summary container\" *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
OrderConfirmationTotalsComponent.ctorParameters = () => [
    { type: CheckoutService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationTotalsComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationTotalsComponent.prototype.checkoutService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GuestRegisterFormComponent {
    /**
     * @param {?} userService
     * @param {?} routingService
     * @param {?} authService
     * @param {?} fb
     */
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
    /**
     * @return {?}
     */
    submit() {
        this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
        if (!this.subscription) {
            this.subscription = this.authService.getUserToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            token => {
                if (token.access_token) {
                    this.routingService.go({ cxRoute: 'home' });
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GuestRegisterFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-guest-register-form',
                template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n          >\n            <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').value !==\n              guestRegisterForm.get('passwordconf').value\n            \"\n            type=\"password\"\n            name=\"confirmpassword\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').value !==\n                guestRegisterForm.get('passwordconf').value &&\n              guestRegisterForm.get('passwordconf').value\n            \"\n          >\n            <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <button\n        type=\"submit\"\n        (click)=\"submit()\"\n        [disabled]=\"guestRegisterForm.invalid\"\n        class=\"btn btn-block btn-primary\"\n      >\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
GuestRegisterFormComponent.ctorParameters = () => [
    { type: UserService },
    { type: RoutingService },
    { type: AuthService },
    { type: FormBuilder }
];
GuestRegisterFormComponent.propDecorators = {
    guid: [{ type: Input }],
    email: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GuestRegisterFormComponent.prototype.guid;
    /** @type {?} */
    GuestRegisterFormComponent.prototype.email;
    /** @type {?} */
    GuestRegisterFormComponent.prototype.subscription;
    /** @type {?} */
    GuestRegisterFormComponent.prototype.guestRegisterForm;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    GuestRegisterFormComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderConfirmationGuard {
    /**
     * @param {?} checkoutService
     * @param {?} router
     * @param {?} semanticPathService
     */
    constructor(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.checkoutService.getOrderDetails().pipe(map((/**
         * @param {?} orderDetails
         * @return {?}
         */
        orderDetails => {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                return this.router.parseUrl(this.semanticPathService.get('orders'));
            }
        })));
    }
}
OrderConfirmationGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OrderConfirmationGuard.ctorParameters = () => [
    { type: CheckoutService },
    { type: Router },
    { type: SemanticPathService }
];
/** @nocollapse */ OrderConfirmationGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(ɵɵinject(CheckoutService), ɵɵinject(Router), ɵɵinject(SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationGuard.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationGuard.prototype.semanticPathService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
class OrderConfirmationModule {
}
OrderConfirmationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartSharedModule,
                    CardModule,
                    PwaModule,
                    I18nModule,
                    ReactiveFormsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
                ],
                declarations: [...orderConfirmationComponents],
                exports: [...orderConfirmationComponents],
                entryComponents: [...orderConfirmationComponents],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ProductCarouselItem() { }
if (false) {
    /** @type {?|undefined} */
    ProductCarouselItem.prototype.title;
    /** @type {?|undefined} */
    ProductCarouselItem.prototype.media;
    /** @type {?|undefined} */
    ProductCarouselItem.prototype.price;
    /** @type {?|undefined} */
    ProductCarouselItem.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductCarouselService {
    /**
     * @param {?} productService
     * @param {?} referenceService
     * @param {?} semanticPathService
     */
    constructor(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     * @param {?} code
     * @return {?}
     */
    loadProduct(code) {
        return this.productService.get(code).pipe(filter(Boolean), map((/**
         * @param {?} product
         * @return {?}
         */
        product => this.convertProduct(product))));
    }
    /**
     * @param {?} code
     * @param {?} referenceType
     * @param {?} displayTitle
     * @param {?} displayProductPrices
     * @return {?}
     */
    getProductReferences(code, referenceType, displayTitle, displayProductPrices) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        (refs) => refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        ref => this.convertProduct(ref.target, displayTitle, displayProductPrices))))));
    }
    /**
     * Converts the product to a generic CarouselItem
     * @private
     * @param {?} source
     * @param {?=} displayTitle
     * @param {?=} displayProductPrices
     * @return {?}
     */
    convertProduct(source, displayTitle = true, displayProductPrices = true) {
        /** @type {?} */
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
}
ProductCarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductCarouselService.ctorParameters = () => [
    { type: ProductService },
    { type: ProductReferenceService },
    { type: SemanticPathService }
];
/** @nocollapse */ ProductCarouselService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(ɵɵinject(ProductService), ɵɵinject(ProductReferenceService), ɵɵinject(SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.productService;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.referenceService;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.semanticPathService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductCarouselComponent {
    /**
     * @param {?} componentData
     * @param {?} productService
     * @param {?=} features
     */
    constructor(componentData, productService, features) {
        this.componentData = componentData;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? 'list' : '';
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.title)));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.productCodes.trim().split(' '))), map((/**
         * @param {?} codes
         * @return {?}
         */
        codes => codes.map((/**
         * @param {?} code
         * @return {?}
         */
        code => this.productService.get(code, this.PRODUCT_SCOPE))))));
    }
}
ProductCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-carousel',
                template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService },
    { type: FeatureConfigService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.PRODUCT_SCOPE;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselComponent.prototype.componentData$;
    /**
     * returns an Obervable string for the title.
     * @type {?}
     */
    ProductCarouselComponent.prototype.title$;
    /**
     * Obervable that holds an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @type {?}
     */
    ProductCarouselComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.productService;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.features;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductCarouselModule {
}
ProductCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CarouselModule,
                    MediaModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductCarouselComponent: {
                                component: ProductCarouselComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductCarouselComponent],
                entryComponents: [ProductCarouselComponent],
                exports: [ProductCarouselComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferencesComponent {
    /**
     * @param {?} component
     * @param {?} current
     * @param {?} referenceService
     */
    constructor(component, current, referenceService) {
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.title)));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((/**
         * @param {?} p
         * @return {?}
         */
        (p) => p.code)), distinctUntilChanged(), tap((/**
         * @return {?}
         */
        () => this.referenceService.cleanReferences())));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([code, data]) => this.getProductReferences(code, data.productReferenceTypes))));
    }
    /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    getProductReferences(code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        (refs) => refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        ref => of(ref.target))))));
    }
}
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CurrentProductService },
    { type: ProductReferenceService }
];
if (false) {
    /**
     * returns an Obervable string for the title
     * @type {?}
     */
    ProductReferencesComponent.prototype.title$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesComponent.prototype.currentProductCode$;
    /**
     * Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @type {?}
     */
    ProductReferencesComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.current;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.referenceService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReferencesModule {
}
ProductReferencesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CarouselModule,
                    MediaModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductReferencesComponent: {
                                component: ProductReferencesComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductReferencesComponent],
                entryComponents: [ProductReferencesComponent],
                exports: [ProductReferencesComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultScrollConfig = {
    view: {
        infiniteScroll: {
            active: false,
            productLimit: 0,
            showMoreButton: false,
        },
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductImagesComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {}))));
        this.thumbs$ = this.product$.pipe(map((/**
         * @param {?} product
         * @return {?}
         */
        product => this.createThumbs(product))), tap((/**
         * @param {?} thumbs
         * @return {?}
         */
        thumbs => {
            this.isThumbsEmpty = thumbs.length === 0;
        })));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, container]) => container)));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    openImage(item) {
        this.mainMediaContainer.next(item);
    }
    /**
     * @param {?} thumbnail
     * @return {?}
     */
    isActive(thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        (container) => {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        })));
    }
    /**
     * find the index of the main media in the list of media
     * @param {?} thumbs
     * @return {?}
     */
    getActive(thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        (container) => {
            /** @type {?} */
            const current = thumbs.find((/**
             * @param {?} t
             * @return {?}
             */
            t => t.media &&
                container.zoom &&
                t.media.container &&
                t.media.container.zoom &&
                t.media.container.zoom.url === container.zoom.url));
            return thumbs.indexOf(current);
        })));
    }
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     * @private
     * @param {?} product
     * @return {?}
     */
    createThumbs(product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return ((/** @type {?} */ (product.images.GALLERY))).map((/**
         * @param {?} c
         * @return {?}
         */
        c => of({ container: c })));
    }
}
ProductImagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-images',
                template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<cx-carousel\n  *ngIf=\"!isThumbsEmpty\"\n  class=\"thumbs\"\n  [items]=\"thumbs$ | async\"\n  itemWidth=\"120px\"\n  [hideIndicators]=\"false\"\n  [template]=\"thumb\"\n></cx-carousel>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductImagesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.mainMediaContainer;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.product$;
    /** @type {?} */
    ProductImagesComponent.prototype.isThumbsEmpty;
    /** @type {?} */
    ProductImagesComponent.prototype.thumbs$;
    /** @type {?} */
    ProductImagesComponent.prototype.mainImage$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.currentProductService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductImagesModule {
}
ProductImagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MediaModule,
                    OutletModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductImagesComponent: {
                                component: ProductImagesComponent,
                            },
                        },
                    }))),
                    CarouselModule,
                ],
                declarations: [ProductImagesComponent],
                entryComponents: [ProductImagesComponent],
                exports: [ProductImagesComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductIntroComponent {
    /**
     * @param {?} currentProductService
     * @param {?} translationService
     * @param {?} winRef
     */
    constructor(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    }
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    showReviews() {
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('CMSTabParagraphContainer.tabs.ProductReviewsTabComponent')
            .subscribe((/**
         * @param {?} reviewsTabLabel
         * @return {?}
         */
        reviewsTabLabel => {
            /** @type {?} */
            const tabsComponent = this.getTabsComponent();
            /** @type {?} */
            const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
            /** @type {?} */
            const reviewsComponent = this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                this.clickTabIfInactive(reviewsTab);
                setTimeout((/**
                 * @return {?}
                 */
                () => reviewsComponent.scrollIntoView({ behavior: 'smooth' })), 0);
            }
        }))
            .unsubscribe();
    }
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    getReviewsComponent() {
        return this.winRef.document.querySelector('cx-product-reviews');
    }
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    getTabsComponent() {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    }
    // Click to activate tab if not already active
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    clickTabIfInactive(tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    }
    // Get Tab by label if exists on page
    /**
     * @private
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    getTabByLabel(label, tabsComponent) {
        if (tabsComponent) {
            // NOTE: Reads through h3 tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            /** @type {?} */
            const h3Elements = tabsComponent.getElementsByTagName('h3');
            // Look through h3 tab elements until finding tab with label
            for (const h3Element of Array.from(h3Elements)) {
                if (h3Element.innerHTML.includes(label)) {
                    return h3Element;
                }
            }
        }
    }
}
ProductIntroComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-intro',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"reviewsTabAvailable | async\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductIntroComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: TranslationService },
    { type: WindowRef }
];
if (false) {
    /** @type {?} */
    ProductIntroComponent.prototype.reviewsTabAvailable;
    /** @type {?} */
    ProductIntroComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductIntroComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    ProductIntroComponent.prototype.translationService;
    /**
     * @type {?}
     * @protected
     */
    ProductIntroComponent.prototype.winRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductIntroModule {
}
ProductIntroModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    StarRatingModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductIntroComponent: {
                                component: ProductIntroComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductIntroComponent],
                exports: [ProductIntroComponent],
                entryComponents: [ProductIntroComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ProductListRouteParams() { }
if (false) {
    /** @type {?|undefined} */
    ProductListRouteParams.prototype.brandCode;
    /** @type {?|undefined} */
    ProductListRouteParams.prototype.categoryCode;
    /** @type {?|undefined} */
    ProductListRouteParams.prototype.query;
}
/**
 * @record
 */
function SearchCriteria() { }
if (false) {
    /** @type {?|undefined} */
    SearchCriteria.prototype.currentPage;
    /** @type {?|undefined} */
    SearchCriteria.prototype.pageSize;
    /** @type {?|undefined} */
    SearchCriteria.prototype.sortCode;
    /** @type {?|undefined} */
    SearchCriteria.prototype.query;
}
class ProductListComponentService {
    /**
     * @param {?} productSearchService
     * @param {?} routing
     * @param {?} activatedRoute
     * @param {?} currencyService
     * @param {?} languageService
     * @param {?} router
     */
    constructor(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.router = router;
        this.defaultPageSize = 10;
        this.RELEVANCE_CATEGORY = ':relevance:category:';
        this.RELEVANCE_BRAND = ':relevance:brand:';
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => Object.keys(searchResult).length > 0)));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((/**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */
            (x, y) => {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            }))),
            // also trigger search on site context changes
            this.languageService.getActive(),
            this.currencyService.getActive(),
        ]).pipe(pluck(0, 'state'), tap((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            /** @type {?} */
            const criteria = this.getCriteriaFromRoute(state.params, state.queryParams);
            this.search(criteria);
        })));
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
    /**
     * @return {?}
     */
    clearSearchResults() {
        this.productSearchService.clearResults();
    }
    /**
     * @private
     * @param {?} routeParams
     * @param {?} queryParams
     * @return {?}
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
     * @private
     * @param {?} __0
     * @return {?}
     */
    getQueryFromRouteParams({ brandCode, categoryCode, query, }) {
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_CATEGORY + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_BRAND + brandCode;
        }
    }
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    search(criteria) {
        /** @type {?} */
        const query = criteria.query;
        /** @type {?} */
        const searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    }
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    getSearchConfig(criteria) {
        /** @type {?} */
        const result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => !result[key] && delete result[key]));
        return result;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    setQuery(query) {
        this.setQueryParams({ query, currentPage: undefined });
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    }
    /**
     * Get items from a given page without using navigation
     * @param {?} pageNumber
     * @return {?}
     */
    getPageItems(pageNumber) {
        this.routing
            .getRouterState()
            .subscribe((/**
         * @param {?} route
         * @return {?}
         */
        route => {
            /** @type {?} */
            const routeCriteria = this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            /** @type {?} */
            const criteria = Object.assign({}, routeCriteria, { currentPage: pageNumber });
            this.search(criteria);
        }))
            .unsubscribe();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sort(sortCode) {
        this.setQueryParams({ sortCode });
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    setQueryParams(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    }
}
ProductListComponentService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ProductListComponentService.ctorParameters = () => [
    { type: ProductSearchService },
    { type: RoutingService },
    { type: ActivatedRoute },
    { type: CurrencyService },
    { type: LanguageService },
    { type: Router }
];
/** @nocollapse */ ProductListComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(ɵɵinject(ProductSearchService), ɵɵinject(RoutingService), ɵɵinject(ActivatedRoute), ɵɵinject(CurrencyService), ɵɵinject(LanguageService), ɵɵinject(Router)); }, token: ProductListComponentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.defaultPageSize;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.sub;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.RELEVANCE_CATEGORY;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.RELEVANCE_BRAND;
    /**
     * @type {?}
     * @private
     */
    ProductListComponentService.prototype.searchResults$;
    /**
     * @type {?}
     * @private
     */
    ProductListComponentService.prototype.searchByRouting$;
    /**
     * This stream should be used only on the Product Listing Page.
     *
     * It not only emits search results, but also performs a search on every change
     * of the route (i.e. route params or query params).
     *
     * When a user leaves the PLP route, the PLP component unsubscribes from this stream
     * so no longer the search is performed on route change.
     * @type {?}
     */
    ProductListComponentService.prototype.model$;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.productSearchService;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.activatedRoute;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.currencyService;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.languageService;
    /**
     * @type {?}
     * @protected
     */
    ProductListComponentService.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ViewModes = {
    Grid: 'grid',
    List: 'list',
};
class ProductViewComponent {
    constructor() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get buttonClass() {
        /** @type {?} */
        const viewName = this.viewMode.toLowerCase();
        return `cx-product-${viewName}`;
    }
    /**
     *   Display icons inversely to allow users
     *   to see the view they will navigate to
     * @return {?}
     */
    get viewMode() {
        if (this.mode === 'list') {
            return this.iconTypes.GRID;
        }
        else if (this.mode === 'grid') {
            return this.iconTypes.LIST;
        }
    }
    /**
     * @return {?}
     */
    changeMode() {
        /** @type {?} */
        const newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    }
}
ProductViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-view',
                template: "<div class=\"cx-product-layout\" (click)=\"changeMode()\">\n  <div [ngClass]=\"buttonClass\">\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.GRID\"\n      [type]=\"iconTypes.GRID\"\n    ></cx-icon>\n    <cx-icon\n      *ngIf=\"viewMode === iconTypes.LIST\"\n      [type]=\"iconTypes.LIST\"\n    ></cx-icon>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
ProductViewComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProductViewComponent.prototype.iconTypes;
    /** @type {?} */
    ProductViewComponent.prototype.mode;
    /** @type {?} */
    ProductViewComponent.prototype.modeChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductListComponent {
    /**
     * @param {?} pageLayoutService
     * @param {?} productListComponentService
     * @param {?=} scrollConfig
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
        this.productListComponentService.clearSearchResults();
        this.subscription.add(this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => {
            this.viewMode$.next(template === 'ProductGridPageTemplate'
                ? ViewModes.Grid
                : ViewModes.List);
        })));
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.productListComponentService.viewPage(pageNumber);
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    sortList(sortCode) {
        this.productListComponentService.sort(sortCode);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setViewMode(mode) {
        this.viewMode$.next(mode);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ProductListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list',
                template: "<div class=\"cx-page\" *ngIf=\"model$ | async as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"viewMode$ | async as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div *ngIf=\"!isInfiniteScroll\" class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    (viewPageEvent)=\"viewPage($event)\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <!-- Product list when using pagination -->\n            <ng-container *ngIf=\"!isInfiniteScroll; else infiniteScroll\">\n              <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"viewMode === ViewModes.List\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </ng-container>\n\n            <!-- Product list when using infinite scroll -->\n            <ng-template #infiniteScroll>\n              <cx-product-scroll\n                [scrollConfig]=\"scrollConfig\"\n                [model]=\"model\"\n                [inputViewMode]=\"viewMode\"\n              ></cx-product-scroll>\n            </ng-template>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!isInfiniteScroll\"\n                class=\"col-auto\"\n                aria-label=\"product search pagination\"\n              >\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    (viewPageEvent)=\"viewPage($event)\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
            }] }
];
/** @nocollapse */
ProductListComponent.ctorParameters = () => [
    { type: PageLayoutService },
    { type: ProductListComponentService },
    { type: ViewConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.subscription;
    /** @type {?} */
    ProductListComponent.prototype.isInfiniteScroll;
    /** @type {?} */
    ProductListComponent.prototype.model$;
    /** @type {?} */
    ProductListComponent.prototype.viewMode$;
    /** @type {?} */
    ProductListComponent.prototype.ViewModes;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.pageLayoutService;
    /**
     * @type {?}
     * @private
     */
    ProductListComponent.prototype.productListComponentService;
    /** @type {?} */
    ProductListComponent.prototype.scrollConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductScrollComponent {
    /**
     * @param {?} productListComponentService
     * @param {?} ref
     */
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
    /**
     * @param {?} inputConfig
     * @return {?}
     */
    set setConfig(inputConfig) {
        this.setComponentConfigurations(inputConfig);
    }
    /**
     * @param {?} inputModel
     * @return {?}
     */
    set setModel(inputModel) {
        this.infiniteScrollOperations(inputModel);
    }
    /**
     * @param {?} inputViewMode
     * @return {?}
     */
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
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    scrollPage(pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    loadNextPage(pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    }
    /**
     * @return {?}
     */
    scrollToTop() {
        window.scroll(0, 0);
    }
    /**
     * @private
     * @param {?} scrollConfig
     * @return {?}
     */
    setComponentConfigurations(scrollConfig) {
        /** @type {?} */
        const isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        /** @type {?} */
        const configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    }
    /**
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    infiniteScrollOperations(inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = Object.assign({}, inputModel, { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    resetListOnViewModeChange() {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    }
    //Set booleans after model has been retrieved
    /**
     * @private
     * @return {?}
     */
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
     * @private
     * @param {?} inputModel
     * @return {?}
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ProductScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-scroll',
                template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
ProductScrollComponent.ctorParameters = () => [
    { type: ProductListComponentService },
    { type: ChangeDetectorRef }
];
ProductScrollComponent.propDecorators = {
    setConfig: [{ type: Input, args: ['scrollConfig',] }],
    setModel: [{ type: Input, args: ['model',] }],
    setViewMode: [{ type: Input, args: ['inputViewMode',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductScrollComponent.prototype.subscription;
    /** @type {?} */
    ProductScrollComponent.prototype.model;
    /** @type {?} */
    ProductScrollComponent.prototype.inputViewMode;
    /** @type {?} */
    ProductScrollComponent.prototype.viewMode;
    /** @type {?} */
    ProductScrollComponent.prototype.productLimit;
    /** @type {?} */
    ProductScrollComponent.prototype.maxProducts;
    /** @type {?} */
    ProductScrollComponent.prototype.ViewModes;
    /** @type {?} */
    ProductScrollComponent.prototype.appendProducts;
    /** @type {?} */
    ProductScrollComponent.prototype.resetList;
    /** @type {?} */
    ProductScrollComponent.prototype.isMaxProducts;
    /** @type {?} */
    ProductScrollComponent.prototype.isLastPage;
    /** @type {?} */
    ProductScrollComponent.prototype.isEmpty;
    /**
     * @type {?}
     * @private
     */
    ProductScrollComponent.prototype.productListComponentService;
    /**
     * @type {?}
     * @private
     */
    ProductScrollComponent.prototype.ref;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductFacetNavigationComponent {
    /**
     * @param {?} modalService
     * @param {?} activatedRoute
     * @param {?} productListComponentService
     */
    constructor(modalService, activatedRoute, productListComponentService) {
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.productListComponentService = productListComponentService;
        this.iconTypes = ICON_TYPE;
        this.minPerFacet = 6;
        this.collapsedFacets = new Set();
        this.showAllPerFacetMap = new Map();
        this.queryCodec = new HttpUrlEncodingCodec();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productListComponentService.model$.pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => {
            if (searchResult.facets) {
                searchResult.facets.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                el => {
                    this.showAllPerFacetMap.set(el.name, false);
                }));
            }
        })));
        this.visibleFacets$ = this.searchResult$.pipe(map((/**
         * @param {?} searchResult
         * @return {?}
         */
        searchResult => {
            return searchResult.facets
                ? searchResult.facets.filter((/**
                 * @param {?} facet
                 * @return {?}
                 */
                facet => facet.visible))
                : [];
        })));
    }
    /**
     * @param {?} content
     * @return {?}
     */
    openFilterModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    /**
     * @param {?} query
     * @return {?}
     */
    toggleValue(query) {
        this.productListComponentService.setQuery(this.queryCodec.decodeValue(query));
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    showLess(facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    showMore(facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    }
    /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    updateShowAllPerFacetMap(facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    isFacetCollapsed(facetName) {
        return this.collapsedFacets.has(facetName);
    }
    /**
     * @param {?} facetName
     * @return {?}
     */
    toggleFacet(facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    getVisibleFacetValues(facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : this.minPerFacet);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
ProductFacetNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-facet-navigation',
                template: "<ng-container *ngIf=\"searchResult$ | async as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"visibleFacets$ | async as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > minPerFacet\n                \"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ActivatedRoute },
    { type: ProductListComponentService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.sub;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.iconTypes;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.activeFacetValueCode;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.searchResult;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.minPerFacet;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.showAllPerFacetMap;
    /**
     * @type {?}
     * @protected
     */
    ProductFacetNavigationComponent.prototype.queryCodec;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.collapsedFacets;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.searchResult$;
    /** @type {?} */
    ProductFacetNavigationComponent.prototype.visibleFacets$;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    ProductFacetNavigationComponent.prototype.productListComponentService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductGridItemComponent {
}
ProductGridItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-grid-item',
                template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    *ngIf=\"product.averageRating\"\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n  <div *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price?.formattedValue }}\n  </div>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [product]=\"product\"\n></cx-add-to-cart>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
ProductGridItemComponent.propDecorators = {
    product: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProductGridItemComponent.prototype.product;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductListItemComponent {
}
ProductListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-list-item',
                template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-image-container\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.nameHtml\"\n    ></a>\n    <cx-star-rating\n      *ngIf=\"product.averageRating\"\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div *ngIf=\"!product.averageRating\">\n      {{ 'productDetails.noReviews' | cxTranslate }}\n    </div>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock?.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [product]=\"product\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
ProductListItemComponent.propDecorators = {
    product: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProductListItemComponent.prototype.product;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductListModule {
}
ProductListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ (defaultScrollConfig))),
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CMSProductListComponent: {
                                component: ProductListComponent,
                            },
                            SearchResultsListComponent: {
                                component: ProductListComponent,
                            },
                            ProductRefinementComponent: {
                                component: ProductFacetNavigationComponent,
                            },
                        },
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ProductDetailOutlets = {
    INTRO: 'PDP.INTRO',
    PRICE: 'PDP.PRICE',
    SHARE: 'PDP.SHARE',
    SUMMARY: 'PDP.SUMMARY',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductSummaryComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.outlets = ProductDetailOutlets;
        this.product$ = this.currentProductService.getProduct();
    }
}
ProductSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-summary',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-template\n    [cxOutlet]=\"outlets.PRICE\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <div class=\"price\" aria-label=\"new item price\">\n      {{ product?.price?.formattedValue }}\n    </div>\n  </ng-template>\n\n  <ng-template\n    [cxOutlet]=\"outlets.SUMMARY\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <p [innerHTML]=\"product?.summary\" class=\"summary\"></p>\n  </ng-template>\n\n  <!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n  <!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n        <div>\n          <a href=\"#\" class=\"share btn-link\">\n            {{ 'productSummary.share' | cxTranslate }}\n          </a>\n        </div>\n      </ng-container> -->\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductSummaryComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
if (false) {
    /** @type {?} */
    ProductSummaryComponent.prototype.outlets;
    /** @type {?} */
    ProductSummaryComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductSummaryComponent.prototype.currentProductService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductSummaryModule {
}
ProductSummaryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OutletModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductSummaryComponent: {
                                component: ProductSummaryComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductSummaryComponent],
                entryComponents: [ProductSummaryComponent],
                exports: [ProductSummaryComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductAttributesComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct();
    }
}
ProductAttributesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-attributes',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductAttributesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
if (false) {
    /** @type {?} */
    ProductAttributesComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductAttributesComponent.prototype.currentProductService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductAttributesModule {
}
ProductAttributesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductSpecsTabComponent: {
                                component: ProductAttributesComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductAttributesComponent],
                entryComponents: [ProductAttributesComponent],
                exports: [ProductAttributesComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductDetailsTabComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct();
    }
}
ProductDetailsTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-details-tab',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductDetailsTabComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
if (false) {
    /** @type {?} */
    ProductDetailsTabComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductDetailsTabComponent.prototype.currentProductService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductDetailsTabModule {
}
ProductDetailsTabModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductDetailsTabComponent: {
                                component: ProductDetailsTabComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductDetailsTabComponent],
                entryComponents: [ProductDetailsTabComponent],
                exports: [ProductDetailsTabComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsComponent {
    /**
     * @param {?} reviewService
     * @param {?} currentProductService
     * @param {?} fb
     */
    constructor(reviewService, currentProductService, fb) {
        this.reviewService = reviewService;
        this.currentProductService = currentProductService;
        this.fb = fb;
        this.isWritingReview = false;
        // TODO: configurable
        this.initialMaxListItems = 5;
        this.product$ = this.currentProductService.getProduct();
        this.reviews$ = this.product$.pipe(filter((/**
         * @param {?} p
         * @return {?}
         */
        p => !!p)), map((/**
         * @param {?} p
         * @return {?}
         */
        p => p.code)), distinctUntilChanged(), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        productCode => this.reviewService.getByProductCode(productCode))), tap((/**
         * @return {?}
         */
        () => {
            this.resetReviewForm();
            this.maxListItems = this.initialMaxListItems;
        })));
    }
    /**
     * @return {?}
     */
    initiateWriteReview() {
        this.isWritingReview = true;
    }
    /**
     * @return {?}
     */
    cancelWriteReview() {
        this.isWritingReview = false;
        this.resetReviewForm();
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    setRating(rating) {
        this.reviewForm.controls.rating.setValue(rating);
    }
    /**
     * @param {?} product
     * @return {?}
     */
    submitReview(product) {
        /** @type {?} */
        const reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        const review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
    }
    /**
     * @private
     * @return {?}
     */
    resetReviewForm() {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    }
}
ProductReviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-reviews',
                template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        *ngIf=\"product.averageRating\"\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n      <div class=\"rating\" *ngIf=\"!product.averageRating\">\n        {{ 'productDetails.noReviews' | cxTranslate }}\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReviewsComponent.ctorParameters = () => [
    { type: ProductReviewService },
    { type: CurrentProductService },
    { type: FormBuilder }
];
if (false) {
    /** @type {?} */
    ProductReviewsComponent.prototype.isWritingReview;
    /** @type {?} */
    ProductReviewsComponent.prototype.initialMaxListItems;
    /** @type {?} */
    ProductReviewsComponent.prototype.maxListItems;
    /** @type {?} */
    ProductReviewsComponent.prototype.reviewForm;
    /** @type {?} */
    ProductReviewsComponent.prototype.product$;
    /** @type {?} */
    ProductReviewsComponent.prototype.reviews$;
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsComponent.prototype.reviewService;
    /**
     * @type {?}
     * @protected
     */
    ProductReviewsComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    ProductReviewsComponent.prototype.fb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductReviewsModule {
}
ProductReviewsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    I18nModule,
                    StarRatingModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ProductReviewsTabComponent: {
                                component: ProductReviewsComponent,
                            },
                        },
                    }))),
                ],
                declarations: [ProductReviewsComponent],
                entryComponents: [ProductReviewsComponent],
                exports: [ProductReviewsComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProductTabsModule {
}
ProductTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ProductAttributesModule,
                    ProductDetailsTabModule,
                    ProductReviewsModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StockNotificationDialogComponent {
    /**
     * @param {?} modalService
     * @param {?} interestsService
     */
    constructor(modalService, interestsService) {
        this.modalService = modalService;
        this.interestsService = interestsService;
        this.enabledPrefs = [];
    }
    /**
     * @return {?}
     */
    close() {
        this.modalService.dismissActiveModal();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscribeSuccess$) {
            this.subscribeSuccess$
                .subscribe((/**
             * @param {?} success
             * @return {?}
             */
            success => {
                if (success) {
                    this.interestsService.resetAddInterestState();
                }
            }))
                .unsubscribe();
        }
    }
}
StockNotificationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-stock-notification-dialog',
                template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'stockNotification.subscriptionDialog.header' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<ng-container *ngIf=\"subscribeSuccess$ | async; else loading\">\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"container\">\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedPrefix' | cxTranslate\n        }}\n      </p>\n      <p *ngFor=\"let preference of enabledPrefs\" class=\"channels\">\n        <span>{{ preference.channel }}</span\n        ><span *ngIf=\"preference.value\">{{ ': ' + preference.value }}</span>\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.notifiedSuffix' | cxTranslate\n        }}\n      </p>\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/notification-preference']\"\n          class=\"link-prefs\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageChannelsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageChannelsSuffix'\n            | cxTranslate\n        }}\n      </p>\n\n      <p>\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsPrefix'\n            | cxTranslate\n        }}\n        <a\n          (click)=\"close()\"\n          [routerLink]=\"['/my-account/my-interests']\"\n          class=\"link-interests\"\n        >\n          {{\n            'stockNotification.subscriptionDialog.manageSubscriptionsLink'\n              | cxTranslate\n          }}</a\n        >\n        {{\n          'stockNotification.subscriptionDialog.manageSubscriptionsSuffix'\n            | cxTranslate\n        }}\n      </p>\n      <div class=\"row\">\n        <div class=\"cx-dialog-actions col-sm-12 col-md-3 offset-md-9\">\n          <button\n            class=\"btn btn-primary btn-block btn-ok\"\n            type=\"button\"\n            (click)=\"close()\"\n          >\n            {{ 'stockNotification.subscriptionDialog.okBtn' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <p>\n      {{ 'stockNotification.subscriptionDialog.subscribing' | cxTranslate }}\n    </p>\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StockNotificationDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: UserInterestsService }
];
if (false) {
    /** @type {?} */
    StockNotificationDialogComponent.prototype.subscribeSuccess$;
    /** @type {?} */
    StockNotificationDialogComponent.prototype.enabledPrefs;
    /**
     * @type {?}
     * @private
     */
    StockNotificationDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationDialogComponent.prototype.interestsService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StockNotificationComponent {
    /**
     * @param {?} authService
     * @param {?} currentProductService
     * @param {?} globalMessageService
     * @param {?} translationService
     * @param {?} interestsService
     * @param {?} modalService
     * @param {?} notificationPrefService
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outOfStock$ = combineLatest([
            this.currentProductService.getProduct().pipe(filter(Boolean)),
            this.authService.getOccUserId(),
        ]).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([product, userId]) => {
            this.productCode = product.code;
            if (userId !== OCC_USER_ID_ANONYMOUS) {
                this.anonymous = false;
                this.notificationPrefService.loadPreferences();
                this.interestsService.loadProductInterests(null, null, null, product.code, NotificationType.BACK_IN_STOCK);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([product]) => !!product.stock && product.stock.stockLevelStatus === 'outOfStock')));
        this.hasProductInterests$ = this.interestsService
            .getProductInterests()
            .pipe(map((/**
         * @param {?} interests
         * @return {?}
         */
        interests => !!interests.results && interests.results.length === 1)));
        this.subscribeSuccess$ = this.interestsService.getAddProductInterestSuccess();
        this.isRemoveInterestLoading$ = this.interestsService.getRemoveProdutInterestLoading();
        this.prefsEnabled$ = this.notificationPrefService
            .getEnabledPreferences()
            .pipe(tap((/**
         * @param {?} prefs
         * @return {?}
         */
        prefs => (this.enabledPrefs = prefs))), map((/**
         * @param {?} prefs
         * @return {?}
         */
        prefs => prefs.length > 0)));
        this.subscriptions.add(this.interestsService.getAddProductInterestError().subscribe((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (error) {
                this.onInterestAddingError();
            }
        })));
        this.subscriptions.add(this.interestsService
            .getRemoveProdutInterestSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            if (success) {
                this.onInterestRemovingSuccess();
            }
        })));
    }
    /**
     * @return {?}
     */
    subscribe() {
        this.openDialog();
        this.interestsService.addProductInterest(this.productCode, NotificationType.BACK_IN_STOCK);
    }
    /**
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    onInterestRemovingSuccess() {
        this.subscriptions.add(this.translationService
            .translate('stockNotification.unsubscribeSuccess')
            .pipe(first())
            .subscribe((/**
         * @param {?} text
         * @return {?}
         */
        text => this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_INFO))));
        this.interestsService.resetRemoveInterestState();
    }
    /**
     * @private
     * @return {?}
     */
    onInterestAddingError() {
        this.modalService.dismissActiveModal();
        this.interestsService.resetAddInterestState();
    }
    /**
     * @private
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const modalInstance = this.modalService.open(StockNotificationDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        modalInstance.subscribeSuccess$ = this.subscribeSuccess$;
        modalInstance.enabledPrefs = this.enabledPrefs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.interestsService.clearProductInterests();
        this.notificationPrefService.clearPreferences();
    }
}
StockNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-stock-notification',
                template: "<ng-container *ngIf=\"outOfStock$ | async\">\n  <ng-container *ngIf=\"!(hasProductInterests$ | async); else stopNotify\">\n    <ng-container *ngIf=\"prefsEnabled$ | async; else disableNotify\">\n      <div class=\"stock-notification-notes\">\n        <label>{{ 'stockNotification.getNotified' | cxTranslate }}</label>\n      </div>\n      <button\n        class=\"btn btn-primary btn-block btn-notify\"\n        type=\"button\"\n        (click)=\"subscribe()\"\n      >\n        {{ 'stockNotification.notifyMe' | cxTranslate }}\n      </button>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #disableNotify>\n  <div class=\"stock-notification-notes\">\n    <label>\n      <ng-container *ngIf=\"anonymous; else loggedIn\">\n        <a [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">\n          {{ 'miniLogin.signInRegister' | cxTranslate }}</a\n        >\n        {{ 'stockNotification.getNotifySuffix' | cxTranslate }}<br />\n      </ng-container>\n      <ng-template #loggedIn>\n        {{ 'stockNotification.getNotify' | cxTranslate }}<br />\n        {{ 'stockNotification.activateChannelsPrefix' | cxTranslate\n        }}<a [routerLink]=\"['/my-account/notification-preference']\">{{\n          'stockNotification.channelsLink' | cxTranslate\n        }}</a\n        >{{ 'stockNotification.activateChannelsSuffix' | cxTranslate }}\n      </ng-template>\n    </label>\n  </div>\n  <button\n    class=\"btn btn-primary btn-block btn-notify\"\n    type=\"button\"\n    disabled=\"true\"\n  >\n    {{ 'stockNotification.notifyMe' | cxTranslate }}\n  </button>\n</ng-template>\n\n<ng-template #stopNotify>\n  <ng-container *ngIf=\"!(isRemoveInterestLoading$ | async); else loading\">\n    <div class=\"stock-notification-notes\">\n      <label>{{ 'stockNotification.notified' | cxTranslate }}</label>\n    </div>\n    <button\n      class=\"btn btn-primary btn-block btn-stop-notify\"\n      type=\"button\"\n      (click)=\"unsubscribe()\"\n    >\n      {{ 'stockNotification.stopNotify' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-template>\n\n<ng-template #loading>\n  <div class=\"cx-dialog-body modal-body\">\n    <div class=\"cx-dialog-row\">\n      <div class=\"col-sm-12\">\n        <cx-spinner></cx-spinner>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StockNotificationComponent.ctorParameters = () => [
    { type: AuthService },
    { type: CurrentProductService },
    { type: GlobalMessageService },
    { type: TranslationService },
    { type: UserInterestsService },
    { type: ModalService },
    { type: UserNotificationPreferenceService }
];
if (false) {
    /** @type {?} */
    StockNotificationComponent.prototype.hasProductInterests$;
    /** @type {?} */
    StockNotificationComponent.prototype.prefsEnabled$;
    /** @type {?} */
    StockNotificationComponent.prototype.outOfStock$;
    /** @type {?} */
    StockNotificationComponent.prototype.isRemoveInterestLoading$;
    /** @type {?} */
    StockNotificationComponent.prototype.anonymous;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.enabledPrefs;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.productCode;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.subscribeSuccess$;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.interestsService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    StockNotificationComponent.prototype.notificationPrefService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StockNotificationModule {
}
StockNotificationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StockNotificationComponent, StockNotificationDialogComponent],
                imports: [
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            StockNotificationComponent: {
                                component: StockNotificationComponent,
                            },
                        },
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const WEEK_DAYS_NUMBER = 7;
class ScheduleComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.location && this.location) {
            /** @type {?} */
            const initialDate = this.getInitialDate();
            this.displayDays = [];
            for (let i = 0; i < WEEK_DAYS_NUMBER; i++) {
                /** @type {?} */
                const date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    }
    /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    getStoreOpeningTime(date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    }
    /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    getStoreClosingTime(date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    }
    /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    getInitialDate() {
        /** @type {?} */
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    }
}
ScheduleComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-schedule',
                template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
ScheduleComponent.ctorParameters = () => [
    { type: StoreDataService }
];
ScheduleComponent.propDecorators = {
    location: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ScheduleComponent.prototype.location;
    /** @type {?} */
    ScheduleComponent.prototype.displayDays;
    /**
     * @type {?}
     * @private
     */
    ScheduleComponent.prototype.storeDataService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderGridComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     * @param {?} routingService
     */
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} location
     * @return {?}
     */
    viewStore(location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    prepareRouteUrl(location) {
        /** @type {?} */
        const countryParam = this.route.snapshot.params.country
            ? `country/${this.route.snapshot.params.country}/`
            : '';
        /** @type {?} */
        const regionParam = this.route.snapshot.params.region
            ? `region/${this.route.snapshot.params.region}/`
            : '';
        return `store-finder/${countryParam}${regionParam}${location.name}`;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
StoreFinderGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-grid',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderGridComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    StoreFinderGridComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderGridComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderGridComponent.prototype.defaultLocation;
    /** @type {?} */
    StoreFinderGridComponent.prototype.country;
    /** @type {?} */
    StoreFinderGridComponent.prototype.region;
    /**
     * @type {?}
     * @private
     */
    StoreFinderGridComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderGridComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    StoreFinderGridComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderHeaderComponent {
}
StoreFinderHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-header',
                template: "<ng-container>\n  <cx-store-finder-search></cx-store-finder-search>\n</ng-container>\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        this.storeDataService = storeDataService;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getDirections(location) {
        /** @type {?} */
        const google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        /** @type {?} */
        const latitude = this.storeDataService.getStoreLatitude(location);
        /** @type {?} */
        const longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    }
    /**
     * @param {?} addressParts
     * @return {?}
     */
    getFormattedStoreAddress(addressParts) {
        return addressParts.filter(Boolean).join(', ');
    }
}
AbstractStoreItemComponent.propDecorators = {
    location: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AbstractStoreItemComponent.prototype.location;
    /**
     * @type {?}
     * @protected
     */
    AbstractStoreItemComponent.prototype.storeDataService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
        this.locationIndex = null;
        this.storeItemClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleStoreItemClick() {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    }
}
StoreFinderListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list-item',
                template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      {{ location.displayName || location.name }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
StoreFinderListItemComponent.ctorParameters = () => [
    { type: StoreDataService }
];
StoreFinderListItemComponent.propDecorators = {
    locationIndex: [{ type: Input }],
    listOrderLabel: [{ type: Input }],
    displayDistance: [{ type: Input }],
    storeItemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StoreFinderListItemComponent.prototype.locationIndex;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.listOrderLabel;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.displayDistance;
    /** @type {?} */
    StoreFinderListItemComponent.prototype.storeItemClick;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderListItemComponent.prototype.storeDataService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderMapComponent {
    /**
     * @param {?} googleMapRendererService
     */
    constructor(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.locations && this.locations) {
            this.renderMap();
        }
    }
    /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    centerMap(latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    }
    /**
     * @return {?}
     */
    renderMap() {
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (/**
         * @param {?} markerIndex
         * @return {?}
         */
        markerIndex => {
            this.selectStoreItemClickHandle(markerIndex);
        }));
    }
    /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    selectStoreItemClickHandle(markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    }
}
StoreFinderMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-map',
                template: "<div #mapElement class=\"cx-store-map\"></div>\n"
            }] }
];
/** @nocollapse */
StoreFinderMapComponent.ctorParameters = () => [
    { type: GoogleMapRendererService }
];
StoreFinderMapComponent.propDecorators = {
    mapElement: [{ type: ViewChild, args: ['mapElement', { static: true },] }],
    locations: [{ type: Input }],
    selectedStoreItem: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StoreFinderMapComponent.prototype.mapElement;
    /** @type {?} */
    StoreFinderMapComponent.prototype.locations;
    /** @type {?} */
    StoreFinderMapComponent.prototype.selectedStoreItem;
    /**
     * @type {?}
     * @private
     */
    StoreFinderMapComponent.prototype.googleMapRendererService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderPaginationDetailsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    getResultsPerPage() {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            /** @type {?} */
            const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            /** @type {?} */
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
}
StoreFinderPaginationDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-pagination-details',
                template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
            }] }
];
/** @nocollapse */
StoreFinderPaginationDetailsComponent.ctorParameters = () => [];
StoreFinderPaginationDetailsComponent.propDecorators = {
    pagination: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StoreFinderPaginationDetailsComponent.prototype.pagination;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderListComponent {
    /**
     * @param {?} storeDataService
     * @param {?} document
     */
    constructor(storeDataService, document) {
        this.storeDataService = storeDataService;
        this.document = document;
        this.iconTypes = ICON_TYPE;
        this.isDetailsModeVisible = false;
    }
    /**
     * @param {?} index
     * @param {?} location
     * @return {?}
     */
    centerStoreOnMapByIndex(index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectStoreItemList(index) {
        this.selectedStoreIndex = index;
        /** @type {?} */
        const storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
    /**
     * @param {?} location
     * @return {?}
     */
    showStoreDetails(location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    }
    /**
     * @return {?}
     */
    hideStoreDetails() {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    }
}
StoreFinderListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-list',
                template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
StoreFinderListComponent.ctorParameters = () => [
    { type: StoreDataService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
StoreFinderListComponent.propDecorators = {
    locations: [{ type: Input }],
    useMylocation: [{ type: Input }],
    storeMap: [{ type: ViewChild, args: ['storeMap', { static: false },] }]
};
if (false) {
    /** @type {?} */
    StoreFinderListComponent.prototype.locations;
    /** @type {?} */
    StoreFinderListComponent.prototype.useMylocation;
    /** @type {?} */
    StoreFinderListComponent.prototype.storeMap;
    /** @type {?} */
    StoreFinderListComponent.prototype.selectedStore;
    /** @type {?} */
    StoreFinderListComponent.prototype.selectedStoreIndex;
    /** @type {?} */
    StoreFinderListComponent.prototype.isDetailsModeVisible;
    /** @type {?} */
    StoreFinderListComponent.prototype.storeDetails;
    /** @type {?} */
    StoreFinderListComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    StoreFinderListComponent.prototype.storeDataService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderListComponent.prototype.document;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderSearchResultComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     */
    constructor(storeFinderService, route) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.countryCode = null;
        this.searchConfig = {
            currentPage: 0,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => this.initialize(params)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    viewPage(pageNumber) {
        this.searchConfig = Object.assign({}, this.searchConfig, { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    initialize(params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = Object.assign({}, this.searchConfig, { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    parseParameters(queryParams) {
        /** @type {?} */
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
}
StoreFinderSearchResultComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search-result',
                template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderSearchResultComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.locations;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.searchQuery;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.geolocation;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.subscription;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.useMyLocation;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.countryCode;
    /** @type {?} */
    StoreFinderSearchResultComponent.prototype.searchConfig;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchResultComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchResultComponent.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderSearchComponent {
    /**
     * @param {?} routingService
     */
    constructor(routingService) {
        this.routingService = routingService;
        this.searchBox = new FormControl();
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    findStores(address) {
        this.routingService.go(['store-finder/find'], { query: address });
    }
    /**
     * @return {?}
     */
    viewStoresWithMyLoc() {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKey(event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
}
StoreFinderSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-search',
                template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
StoreFinderSearchComponent.ctorParameters = () => [
    { type: RoutingService }
];
if (false) {
    /** @type {?} */
    StoreFinderSearchComponent.prototype.searchBox;
    /** @type {?} */
    StoreFinderSearchComponent.prototype.iconTypes;
    /**
     * @type {?}
     * @private
     */
    StoreFinderSearchComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    /**
     * @param {?} storeDataService
     */
    constructor(storeDataService) {
        super(storeDataService);
        this.storeDataService = storeDataService;
    }
}
StoreFinderStoreDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-store-description',
                template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
StoreFinderStoreDescriptionComponent.ctorParameters = () => [
    { type: StoreDataService }
];
StoreFinderStoreDescriptionComponent.propDecorators = {
    location: [{ type: Input }],
    disableMap: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.location;
    /** @type {?} */
    StoreFinderStoreDescriptionComponent.prototype.disableMap;
    /**
     * @type {?}
     * @protected
     */
    StoreFinderStoreDescriptionComponent.prototype.storeDataService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoresCountComponent {
    /**
     * @param {?} storeFinderService
     */
    constructor(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    }
}
StoreFinderStoresCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-stores-count',
                template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div class=\"row\" *ngIf=\"locations?.length\">\n      <div\n        *ngFor=\"let country of locations\"\n        class=\"cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3\"\n      >\n        <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n          <div class=\"cx-title\">\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              class=\"cx-name\"\n              >{{ country.name }}</span\n            >\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              *ngIf=\"!country?.storeCountDataList\"\n              class=\"cx-country-count\"\n              >({{ country.count }})</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!locations?.length\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderStoresCountComponent.ctorParameters = () => [
    { type: StoreFinderService }
];
if (false) {
    /** @type {?} */
    StoreFinderStoresCountComponent.prototype.locations$;
    /** @type {?} */
    StoreFinderStoresCountComponent.prototype.isLoading$;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoresCountComponent.prototype.storeFinderService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderComponent {
}
StoreFinderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder',
                template: "<ng-container>\n  <div class=\"cx-store-finder-wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderStoreComponent {
    /**
     * @param {?} storeFinderService
     * @param {?} route
     * @param {?} routingService
     */
    constructor(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    }
    /**
     * @return {?}
     */
    requestStoresData() {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    }
    /**
     * @return {?}
     */
    goBack() {
        this.routingService.go([
            `store-finder/country/${this.route.snapshot.params.country}`,
        ]);
    }
}
StoreFinderStoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-store',
                template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
StoreFinderStoreComponent.ctorParameters = () => [
    { type: StoreFinderService },
    { type: ActivatedRoute },
    { type: RoutingService }
];
StoreFinderStoreComponent.propDecorators = {
    location: [{ type: Input }],
    disableMap: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StoreFinderStoreComponent.prototype.location$;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.isLoading$;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.iconTypes;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.location;
    /** @type {?} */
    StoreFinderStoreComponent.prototype.disableMap;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreComponent.prototype.storeFinderService;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    StoreFinderStoreComponent.prototype.routingService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StoreFinderModule {
}
StoreFinderModule.decorators = [
    { type: NgModule, args: [{
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
                    ConfigModule.withConfig((/** @type {?} */ ({
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
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutLoginComponent {
    /**
     * @param {?} formBuilder
     * @param {?} cartService
     * @param {?} authRedirectService
     */
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
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    isEmailConfirmInvalid() {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('emailConfirmation').touched &&
                    this.form.get('emailConfirmation').dirty)));
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        const email = this.form.value.email;
        this.cartService.addEmail(email);
        if (!this.sub) {
            this.sub = this.cartService.getAssignedUser().subscribe((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                if (this.cartService.isGuestCart()) {
                    this.authRedirectService.redirect();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    emailsMatch(abstractControl) {
        return abstractControl.get('email').value !==
            abstractControl.get('emailConfirmation').value
            ? { NotEqual: true }
            : null;
    }
}
CheckoutLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-checkout-login',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isNotValid('email')\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n        <span>{{ 'checkoutLogin.emailIsRequired' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isEmailConfirmInvalid()\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isEmailConfirmInvalid()\">\n        <span>{{ 'checkoutLogin.emailsMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
            }] }
];
/** @nocollapse */
CheckoutLoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: CartService },
    { type: AuthRedirectService }
];
if (false) {
    /** @type {?} */
    CheckoutLoginComponent.prototype.form;
    /** @type {?} */
    CheckoutLoginComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    CheckoutLoginComponent.prototype.submitClicked;
    /**
     * @type {?}
     * @private
     */
    CheckoutLoginComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    CheckoutLoginComponent.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CheckoutLoginComponent.prototype.authRedirectService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckoutLoginModule {
}
CheckoutLoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    I18nModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            GuestCheckoutLoginComponent: {
                                component: CheckoutLoginComponent,
                                guards: [NotCheckoutAuthGuard],
                            },
                        },
                    }))),
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: [CheckoutLoginComponent],
                exports: [CheckoutLoginComponent],
                entryComponents: [CheckoutLoginComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginFormComponent {
    /**
     * @param {?} auth
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?} authRedirectService
     * @param {?=} winRef
     * @param {?=} activatedRoute
     * @param {?=} checkoutConfigService
     */
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
    /**
     * @return {?}
     */
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
            /** @type {?} */
            const routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    }
    /**
     * @return {?}
     */
    login() {
        const { userId, password } = this.form.controls;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                if (data && data.access_token) {
                    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    this.authRedirectService.redirect();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    prefillForm(field, value) {
        this.form.patchValue({
            [field]: value,
        });
        this.form.get(field).markAsTouched(); // this action will check field validity on load
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login-form',
                template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
            }] }
];
/** @nocollapse */
LoginFormComponent.ctorParameters = () => [
    { type: AuthService },
    { type: GlobalMessageService },
    { type: FormBuilder },
    { type: AuthRedirectService },
    { type: WindowRef },
    { type: ActivatedRoute },
    { type: CheckoutConfigService }
];
if (false) {
    /** @type {?} */
    LoginFormComponent.prototype.sub;
    /** @type {?} */
    LoginFormComponent.prototype.form;
    /** @type {?} */
    LoginFormComponent.prototype.loginAsGuest;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.authRedirectService;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    LoginFormComponent.prototype.checkoutConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginFormModule {
}
LoginFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            ReturningCustomerLoginComponent: {
                                component: LoginFormComponent,
                                guards: [NotAuthGuard],
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [LoginFormComponent],
                exports: [LoginFormComponent],
                entryComponents: [LoginFormComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} auth
     * @param {?} userService
     */
    constructor(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.user$ = this.auth.isUserLoggedIn().pipe(switchMap((/**
         * @param {?} isUserLoggedIn
         * @return {?}
         */
        isUserLoggedIn => {
            if (isUserLoggedIn) {
                return this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-login',
                template: "<ng-container *ngIf=\"user$ | async as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n    'miniLogin.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService }
];
if (false) {
    /** @type {?} */
    LoginComponent.prototype.user$;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.userService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlModule,
                    PageSlotModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            LoginComponent: {
                                component: LoginComponent,
                            },
                        },
                    }))),
                    I18nModule,
                ],
                declarations: [LoginComponent],
                entryComponents: [LoginComponent],
                exports: [LoginComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LogoutGuard {
    /**
     * @deprecated since 1.4
     * Check #5666 for more info
     *
     * TODO(issue:5666) Deprecated since 1.4
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} semanticPathService
     * @param {?=} protectedRoutes
     * @param {?=} featureConfig
     */
    constructor(auth, cms, routing, semanticPathService, protectedRoutes, featureConfig) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
        this.protectedRoutes = protectedRoutes;
        this.featureConfig = featureConfig;
    }
    /**
     * @return {?}
     */
    canActivate() {
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap((/**
         * @param {?} hasPage
         * @return {?}
         */
        hasPage => {
            if (!hasPage) {
                this.redirect();
            }
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    redirect() {
        // TODO(issue:5666) Deprecated since 1.4
        /** @type {?} */
        const cxRoute = this.featureConfig.isLevel('1.4') &&
            this.protectedRoutes &&
            this.protectedRoutes.shouldProtect
            ? 'login'
            : 'home';
        this.routing.go({ cxRoute });
    }
    /**
     * @protected
     * @return {?}
     */
    logout() {
        this.auth.logout();
    }
}
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService },
    { type: RoutingService },
    { type: SemanticPathService },
    { type: ProtectedRoutesService },
    { type: FeatureConfigService }
];
/** @nocollapse */ LogoutGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(ɵɵinject(AuthService), ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesService), ɵɵinject(FeatureConfigService)); }, token: LogoutGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.auth;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.cms;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.semanticPathService;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.protectedRoutes;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.featureConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$2 = { cxRoute: 'logout' };
class LogoutModule {
}
LogoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    PageLayoutModule,
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [LogoutGuard],
                            component: PageLayoutComponent,
                            data: ɵ0$2,
                        },
                    ]),
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterComponent {
    /**
     * @param {?} auth
     * @param {?} authRedirectService
     * @param {?} userService
     * @param {?} globalMessageService
     * @param {?} fb
     * @param {?=} router
     * @param {?=} featureConfig
     * @param {?=} anonymousConsentsService
     * @param {?=} anonymousConsentsConfig
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            if (Object.keys(titles).length === 0) {
                this.userService.loadTitles();
            }
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        titles => {
            return titles.sort(sortTitles);
        })));
        // TODO(issue:4237) Register flow
        if (this.isNewRegisterFlowEnabled) {
            this.loading$ = this.userService.getRegisterUserResultLoading();
            this.registerUserProcessInit();
        }
        else {
            if (this.auth && this.authRedirectService) {
                this.subscription.add(this.userService
                    .getRegisterUserResultSuccess()
                    .subscribe((/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
                    if (success) {
                        const { uid, password } = this.collectDataFromRegisterForm(this.userRegistrationForm.value);
                        this.auth.authorize(uid, password);
                    }
                })));
                this.subscription.add(this.auth.getUserToken().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    if (data && data.access_token) {
                        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                        this.authRedirectService.redirect();
                    }
                })));
            }
        }
        // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
        this.subscription.add(this.globalMessageService
            .get()
            .pipe(filter((/**
         * @param {?} messages
         * @return {?}
         */
        messages => !!Object.keys(messages).length)))
            .subscribe((/**
         * @param {?} globalMessageEntities
         * @return {?}
         */
        (globalMessageEntities) => {
            /** @type {?} */
            const messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some((/**
                 * @param {?} message
                 * @return {?}
                 */
                message => message === 'This field is required.'))) {
                this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        })));
        if (this.isAnonymousConsentEnabled &&
            Boolean(this.anonymousConsentsConfig) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent)) {
            this.anonymousConsent$ = combineLatest([
                this.anonymousConsentsService.getConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
                this.anonymousConsentsService.getTemplate(this.anonymousConsentsConfig.anonymousConsents.registerConsent),
            ]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ([consent, template]) => {
                return {
                    consent,
                    template: template.description,
                };
            })));
            this.subscription.add(this.userRegistrationForm
                .get('newsletter')
                .valueChanges.subscribe((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                this.toggleAnonymousConsent();
            })));
        }
    }
    /**
     * @return {?}
     */
    submit() {
        this.userService.register(this.collectDataFromRegisterForm(this.userRegistrationForm.value));
    }
    /**
     * @param {?} title
     * @return {?}
     */
    titleSelected(title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
    }
    /**
     * @param {?} formData
     * @return {?}
     */
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
    /**
     * @param {?} consent
     * @return {?}
     */
    isConsentGiven(consent) {
        return this.anonymousConsentsService.isConsentGiven(consent);
    }
    /**
     * @private
     * @return {?}
     */
    isConsentRequired() {
        if (Boolean(this.anonymousConsentsService) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.registerConsent) &&
            Boolean(this.anonymousConsentsConfig.anonymousConsents.requiredConsents)) {
            return this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        return false;
    }
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    onRegisterUserSuccess(success) {
        if (this.router && success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    /**
     * @return {?}
     */
    toggleAnonymousConsent() {
        if (Boolean(this.userRegistrationForm.get('newsletter').value)) {
            this.anonymousConsentsService.giveConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
        else {
            this.anonymousConsentsService.withdrawConsent(this.anonymousConsentsConfig.anonymousConsents.registerConsent);
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerUserProcessInit() {
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe((/**
         * @param {?} success
         * @return {?}
         */
        success => {
            this.onRegisterUserSuccess(success);
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-register',
                template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('email').errors &&\n                  (userRegistrationForm.get('email').errors['email'] ||\n                    userRegistrationForm.get('email').errors['InvalidEmail']) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <ng-container\n                *ngIf=\"isAnonymousConsentEnabled; else hardcodedNewsletter\"\n              >\n                <label *ngIf=\"anonymousConsent$ | async as anonymousConsent\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                    [checked]=\"isConsentGiven(anonymousConsent.consent)\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ anonymousConsent.template }}\n                  </span>\n                </label>\n              </ng-container>\n              <ng-template #hardcodedNewsletter\n                ><label>\n                  <input\n                    type=\"checkbox\"\n                    name=\"newsletter\"\n                    class=\"form-check-input\"\n                    formControlName=\"newsletter\"\n                  />\n                  <span class=\"form-check-label\">\n                    {{ 'register.emailMarketing' | cxTranslate }}\n                  </span>\n                </label>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
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
if (false) {
    /** @type {?} */
    RegisterComponent.prototype.titles$;
    /** @type {?} */
    RegisterComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.subscription;
    /** @type {?} */
    RegisterComponent.prototype.anonymousConsent$;
    /** @type {?} */
    RegisterComponent.prototype.isNewRegisterFlowEnabled;
    /** @type {?} */
    RegisterComponent.prototype.isAnonymousConsentEnabled;
    /** @type {?} */
    RegisterComponent.prototype.userRegistrationForm;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.auth;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.authRedirectService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.userService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.fb;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.featureConfig;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.anonymousConsentsService;
    /**
     * @type {?}
     * @protected
     */
    RegisterComponent.prototype.anonymousConsentsConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterComponentModule {
}
RegisterComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LoginModule,
                    ReactiveFormsModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            RegisterCustomerComponent: {
                                component: RegisterComponent,
                                guards: [NotAuthGuard],
                            },
                        },
                    }))),
                    I18nModule,
                    SpinnerModule,
                ],
                declarations: [RegisterComponent],
                exports: [RegisterComponent],
                entryComponents: [RegisterComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserComponentModule {
}
UserComponentModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WishListItemComponent {
    constructor() {
        this.isLoading = false;
        this.remove = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.remove.emit(item);
    }
}
WishListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-wish-list-item',
                template: "<div class=\"row\">\n  <!-- Item Image -->\n  <div class=\"cx-image-container col-2\">\n    <a [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\">\n      <cx-media\n        [container]=\"cartEntry.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div class=\"col-md-5 col-lg-5 col-xl-5\">\n        <div *ngIf=\"cartEntry.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { cxRoute: 'product', params: cartEntry.product } | cxUrl\n            \"\n            >{{ cartEntry.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"cartEntry.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product.code }}\n        </div>\n        <!-- Variants -->\n        <!-- TODO #5593 <div\n          *ngFor=\"let variant of cartEntry.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div> -->\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"cartEntry.basePrice\"\n        class=\"cx-price col-md-3 col-lg-4 col-xl-4\"\n      >\n        <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"cartEntry.basePrice\" class=\"cx-value\">\n          {{ cartEntry.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Total -->\n      <div class=\"col-sm-8 col-md-4 col-lg-3 col-xl-3 cx-add-to-cart\">\n        <cx-add-to-cart\n          *ngIf=\"\n            cartEntry.product.stock.stockLevelStatus !== 'outOfStock';\n            else outOfStock\n          \"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n        <ng-template #outOfStock>\n          <span class=\"cx-out-of-stock\">\n            {{ 'addToCart.outOfStock' | cxTranslate }}\n          </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"cx-return-button col-12\">\n      <button\n        class=\"btn btn-link\"\n        (click)=\"removeEntry(cartEntry)\"\n        [disabled]=\"isLoading\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
WishListItemComponent.propDecorators = {
    isLoading: [{ type: Input }],
    cartEntry: [{ type: Input }],
    remove: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    WishListItemComponent.prototype.isLoading;
    /** @type {?} */
    WishListItemComponent.prototype.cartEntry;
    /** @type {?} */
    WishListItemComponent.prototype.remove;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WishListComponent {
    /**
     * @param {?} wishListService
     */
    constructor(wishListService) {
        this.wishListService = wishListService;
        this.wishList$ = this.wishListService.getWishList();
        this.loading$ = this.wishListService.getWishListLoading();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.wishListService.removeEntry(item);
    }
}
WishListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-wish-list',
                template: "<ng-container *ngIf=\"wishList$ | async as wishList\">\n  <ng-container *ngIf=\"wishList?.entries?.length > 0; else emptyWishList\">\n    <div class=\"d-none d-md-block d-lg-block d-xl-block\">\n      <div class=\"cx-item-list-header row\">\n        <div class=\"cx-item-list-desc col-md-7 col-lg-6 col-xl-6\">\n          {{ 'cartItems.description' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-price col-md-3 col-lg-4 col-xl-4\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"cx-item-list-row\" *ngFor=\"let entry of wishList?.entries\">\n      <cx-wish-list-item\n        [cartEntry]=\"entry\"\n        [isLoading]=\"loading$ | async\"\n        class=\"cx-wish-list-items\"\n        (remove)=\"removeEntry($event)\"\n      ></cx-wish-list-item>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #emptyWishList>\n  <h2>{{ 'wishlist.empty' | cxTranslate }}</h2>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
WishListComponent.ctorParameters = () => [
    { type: WishListService }
];
if (false) {
    /** @type {?} */
    WishListComponent.prototype.wishList$;
    /** @type {?} */
    WishListComponent.prototype.loading$;
    /**
     * @type {?}
     * @protected
     */
    WishListComponent.prototype.wishListService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WishListModule {
}
WishListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AddToCartModule,
                    CommonModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            WishListComponent: {
                                component: WishListComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CmsLibModule {
}
CmsLibModule.decorators = [
    { type: NgModule, args: [{
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
                    ProductIntroModule,
                    CheckoutComponentModule,
                    ForgotPasswordModule,
                    ResetPasswordModule,
                    BannerCarouselModule,
                    UserComponentModule,
                    WishListModule,
                    NotificationPreferenceModule,
                    MyInterestsModule,
                    StockNotificationModule,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SuffixRoute() { }
if (false) {
    /** @type {?} */
    SuffixRoute.prototype.data;
}
/**
 * Matches the pattern '[ ** / ] marker / :paramName'
 *
 * @param {?} segments
 * @param {?} _segmentGroup
 * @param {?} route
 * @return {?}
 */
function suffixUrlMatcher(segments, _segmentGroup, route) {
    /** @type {?} */
    const config = route.data.cxSuffixUrlMatcher;
    const { marker, paramName } = config;
    /** @type {?} */
    const precedingParamName = config.precedingParamName || 'param';
    /** @type {?} */
    const markerIndex = findLastIndex(segments, (/**
     * @param {?} __0
     * @return {?}
     */
    ({ path }) => path === marker));
    /** @type {?} */
    const isMarkerLastSegment = markerIndex === segments.length - 1;
    if (markerIndex === -1 || isMarkerLastSegment) {
        return null;
    }
    /** @type {?} */
    const paramIndex = markerIndex + 1;
    /** @type {?} */
    const posParams = {
        [paramName]: segments[paramIndex],
    };
    for (let i = 0; i < markerIndex; i++) {
        posParams[`${precedingParamName}${i}`] = segments[i];
    }
    return { consumed: segments.slice(0, paramIndex + 1), posParams };
}
/**
 * @template T
 * @param {?} elements
 * @param {?} predicate
 * @return {?}
 */
function findLastIndex(elements, predicate) {
    for (let index = elements.length - 1; index >= 0; index--) {
        if (predicate(elements[index])) {
            return index;
        }
    }
    return -1;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$3 = { cxRoute: 'product' }, ɵ1$1 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
};
class ProductDetailsPageModule {
}
ProductDetailsPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0$3,
                        },
                        {
                            matcher: suffixUrlMatcher,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ1$1,
                        },
                    ]),
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$4 = { cxRoute: 'category' }, ɵ1$2 = { pageLabel: 'search', cxRoute: 'search' }, ɵ2 = { cxRoute: 'brand' }, ɵ3 = {
    cxSuffixUrlMatcher: {
        marker: 'c',
        paramName: 'categoryCode',
    },
};
class ProductListingPageModule {
}
ProductListingPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forChild([
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ0$4,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ1$2,
                        },
                        {
                            path: null,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ2,
                        },
                        {
                            matcher: suffixUrlMatcher,
                            canActivate: [CmsPageGuard],
                            component: PageLayoutComponent,
                            data: ɵ3,
                        },
                    ]),
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
            slots: ['ProductListSlot', 'ProductLeftRefinements'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'SearchResultsListSlot',
                'ProductLeftRefinements',
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
/** @type {?} */
const defaultPageHeaderConfig = {
    PreHeader: {
        componentIds: ['HamburgerMenuComponent'],
    },
    SiteLogin: {
        componentIds: ['LoginComponent'],
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultCmsContentConfig() {
    return {
        cmsStructure: {
            components: Object.assign({}, headerComponents),
            slots: Object.assign({}, defaultPageHeaderConfig),
            pages: [],
        },
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
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
    orderDetails: {
        paths: ['my-account/order/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    orders: {
        paths: ['my-account/orders'],
    },
};
/** @type {?} */
const defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: RoutingModule,
            providers: [provideConfig(defaultRoutingConfig)],
        };
    }
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RoutingModule$1.forRoot(), CmsRouteModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorefrontFoundationModule {
}
StorefrontFoundationModule.decorators = [
    { type: NgModule, args: [{
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
                    FeaturesConfigModule.forRoot('1.0'),
                    LayoutModule,
                ],
                exports: [LayoutModule],
                providers: [...provideConfigFromMetaTags()],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorefrontModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: StorefrontModule,
            providers: [provideConfig(config)],
        };
    }
}
StorefrontModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class B2cStorefrontModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: B2cStorefrontModule,
            providers: [provideConfig(config)],
        };
    }
}
B2cStorefrontModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StorefrontModule.withConfig((/** @type {?} */ ({
                        pwa: {
                            enabled: true,
                            addToHomeScreen: true,
                        },
                    }))),
                    ConfigModule.withConfig(b2cLayoutConfig),
                    ConfigModule.withConfigFactory(defaultCmsContentConfig),
                    // the cms lib module contains all components that added in the bundle
                    CmsLibModule,
                ],
                exports: [StorefrontModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AVOID_STACKED_OUTLETS, AbstractStoreItemComponent, AddToCartComponent, AddToCartModule, AddToHomeScreenBannerComponent, AddToHomeScreenBtnComponent, AddToHomeScreenComponent, AddedToCartDialogComponent, AddressBookComponent, AddressBookComponentService, AddressBookModule, AddressCardComponent, AddressFormComponent, AddressFormModule, AnonymousConsentManagementBannerComponent, AnonymousConsentManagementBannerModule, AnonymousConsentOpenDialogComponent, AsmModule, AutoFocusDirective, AutoFocusDirectiveModule, B2cStorefrontModule, BREAKPOINT, BannerCarouselComponent, BannerCarouselModule, BannerComponent, BannerModule, BillingAddressFormComponent, BillingAddressFormModule, BreadcrumbComponent, BreadcrumbModule, BreadcrumbSchemaBuilder, BreakpointService, CardComponent, CardModule, CarouselComponent, CarouselModule, CarouselService, CartComponentModule, CartCouponComponent, CartCouponModule, CartDetailsComponent, CartDetailsModule, CartItemComponent, CartItemListComponent, CartNotEmptyGuard, CartPageLayoutHandler, CartSharedModule, CartTotalsComponent, CartTotalsModule, CategoryNavigationComponent, CategoryNavigationModule, CheckoutAuthGuard, CheckoutComponentModule, CheckoutConfig, CheckoutConfigService, CheckoutDetailsLoadedGuard, CheckoutDetailsService, CheckoutGuard, CheckoutLoginModule, CheckoutOrchestratorComponent, CheckoutOrchestratorModule, CheckoutOrderSummaryComponent, CheckoutOrderSummaryModule, CheckoutProgressComponent, CheckoutProgressMobileBottomComponent, CheckoutProgressMobileBottomModule, CheckoutProgressMobileTopComponent, CheckoutProgressMobileTopModule, CheckoutProgressModule, CheckoutStepType, CloseAccountComponent, CloseAccountModalComponent, CloseAccountModule, CmsComponentData, CmsLibModule, CmsPageGuard, CmsParagraphModule, CmsRouteModule, ComponentWrapperDirective, ConsentManagementComponent, ConsentManagementFormComponent, ConsentManagementModule, CurrentProductService, CustomFormValidators, DeliveryModeComponent, DeliveryModeModule, DeliveryModePreferences, DeliveryModeSetGuard, FooterNavigationComponent, FooterNavigationModule, ForgotPasswordComponent, ForgotPasswordModule, FormUtils, GenericLinkComponent, GenericLinkModule, GlobalMessageComponent, GlobalMessageComponentModule, HamburgerMenuComponent, HamburgerMenuModule, HamburgerMenuService, HighlightPipe, ICON_TYPE, IconComponent, IconConfig, IconLoaderService, IconModule, IconResourceType, ItemCounterComponent, ItemCounterModule, JSONLD_PRODUCT_BUILDER, JsonLdBaseProductBuilder, JsonLdBuilderModule, JsonLdDirective, JsonLdProductOfferBuilder, JsonLdProductReviewBuilder, JsonLdScriptFactory, LanguageCurrencyComponent, LayoutConfig, LayoutModule, LinkComponent, LinkModule, ListNavigationModule, LoginComponent, LoginFormComponent, LoginFormModule, LoginModule, LogoutGuard, LogoutModule, MainModule, MediaComponent, MediaModule, MediaService, MiniCartComponent, MiniCartModule, ModalRef, ModalService, MyInterestsComponent, MyInterestsModule, NavigationComponent, NavigationModule, NavigationService, NavigationUIComponent, NotCheckoutAuthGuard, NotificationPreferenceComponent, NotificationPreferenceModule, OnlyNumberDirective, OnlyNumberDirectiveModule, OrderConfirmationGuard, OrderConfirmationItemsComponent, OrderConfirmationModule, OrderConfirmationOverviewComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderDetailHeadlineComponent, OrderDetailItemsComponent, OrderDetailShippingComponent, OrderDetailTotalsComponent, OrderDetailsModule, OrderDetailsService, OrderHistoryComponent, OrderHistoryModule, OrderModule, OrderSummaryComponent, OutletDirective, OutletModule, OutletPosition, OutletRefDirective, OutletRefModule, OutletService, PAGE_LAYOUT_HANDLER, PWAModuleConfig, PageComponentModule, PageLayoutComponent, PageLayoutModule, PageLayoutService, PageSlotComponent, PageSlotModule, PaginationComponent, ParagraphComponent, PaymentDetailsSetGuard, PaymentFormComponent, PaymentFormModule, PaymentMethodComponent, PaymentMethodModule, PaymentMethodsComponent, PaymentMethodsModule, PlaceOrderComponent, PlaceOrderModule, ProductAttributesComponent, ProductAttributesModule, ProductCarouselComponent, ProductCarouselModule, ProductCarouselService, ProductDetailOutlets, ProductDetailsPageModule, ProductDetailsTabComponent, ProductDetailsTabModule, ProductFacetNavigationComponent, ProductGridItemComponent, ProductImagesComponent, ProductImagesModule, ProductIntroComponent, ProductIntroModule, ProductListComponent, ProductListComponentService, ProductListItemComponent, ProductListModule, ProductListingPageModule, ProductReferencesComponent, ProductReferencesModule, ProductReviewsComponent, ProductReviewsModule, ProductSchemaBuilder, ProductScrollComponent, ProductSummaryComponent, ProductSummaryModule, ProductTabsModule, ProductViewComponent, PromotionsComponent, PromotionsModule, PwaModule, QualtricsComponent, QualtricsConfig, QualtricsLoaderService, QualtricsModule, RegisterComponent, RegisterComponentModule, ResetPasswordFormComponent, ResetPasswordModule, ReviewSubmitComponent, ReviewSubmitModule, SCHEMA_BUILDER, ScheduleComponent, SearchBoxComponent, SearchBoxComponentService, SearchBoxModule, SeoMetaService, SeoModule, ShippingAddressComponent, ShippingAddressModule, ShippingAddressSetGuard, SiteContextComponentService, SiteContextSelectorComponent, SiteContextSelectorModule, SiteContextType, SortingComponent, SpinnerComponent, SpinnerModule, StarRatingComponent, StarRatingModule, StockNotificationComponent, StockNotificationDialogComponent, StockNotificationModule, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderModule, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StorefrontComponent, StorefrontFoundationModule, StorefrontModule, StructuredDataModule, SuggestedAddressDialogComponent, TabParagraphContainerComponent, TabParagraphContainerModule, USE_STACKED_OUTLETS, UpdateEmailComponent, UpdateEmailFormComponent, UpdateEmailModule, UpdatePasswordComponent, UpdatePasswordFormComponent, UpdatePasswordModule, UpdateProfileComponent, UpdateProfileFormComponent, UpdateProfileModule, UserComponentModule, ViewConfig, ViewConfigModule, ViewModes, WishListComponent, WishListItemComponent, WishListModule, b2cLayoutConfig, defaultCmsContentConfig, defaultPWAModuleConfig, defaultPageHeaderConfig, defaultScrollConfig, fontawesomeIconConfig, getStructuredDataFactory, headerComponents, initSeoService, pwaConfigurationFactory, pwaFactory, sortTitles, titleScores, AsmLoaderModule as ɵa, asmFactory as ɵb, suffixUrlMatcher as ɵba, addCmsRoute as ɵbb, htmlLangProvider as ɵbc, setHtmlLangAttribute as ɵbd, AnonymousConsentsModule as ɵbe, AnonymousConsentDialogComponent as ɵbf, RoutingModule as ɵbg, defaultStorefrontRoutesConfig as ɵbh, defaultRoutingConfig as ɵbi, ComponentMapperService as ɵc, AsmEnablerService as ɵd, AsmMainUiComponent as ɵe, AsmComponentService as ɵf, CSAgentLoginFormComponent as ɵg, CustomerSelectionComponent as ɵh, AsmSessionTimerComponent as ɵi, FormatTimerPipe as ɵj, CustomerEmulationComponent as ɵk, AppliedCouponsComponent as ɵl, AddToWishListModule as ɵm, AddToWishListComponent as ɵn, defaultCheckoutConfig as ɵo, ExpressCheckoutService as ɵp, defaultQualtricsConfig as ɵq, CmsRoutesService as ɵr, CmsMappingService as ɵs, CmsI18nService as ɵt, CmsGuardsService as ɵu, TrackingEventsComponent as ɵv, ConsignmentTrackingComponent as ɵw, AddToHomeScreenService as ɵx, GuestRegisterFormComponent as ɵy, CheckoutLoginComponent as ɵz, DeferLoaderService as θDeferLoaderService, IntersectionService as θIntersectionService };
//# sourceMappingURL=spartacus-storefront.js.map
