import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, ElementRef, Input, HostBinding, NgModule, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Directive, EventEmitter, Output, isDevMode, forwardRef, Renderer2, HostListener, Optional, Injector, InjectionToken, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Inject, PLATFORM_ID, NgZone, APP_INITIALIZER, INJECTOR, Pipe } from '@angular/core';
import { RoutingService, ProductService, WindowRef, ConfigModule, Config, CartService, I18nModule, OccConfig, UrlModule, GlobalMessageType, GlobalMessageService, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID, ContextServiceMap, SiteContextModule, CartModule, AuthService, AuthRedirectService, FeatureConfigService, RoutingConfigService, OCC_USER_ID_ANONYMOUS, CheckoutService, CheckoutDeliveryService, CheckoutPaymentService, UserAddressService, UserPaymentService, TranslationService, UserService, FeaturesConfigModule, CmsConfig, CartDataService, CmsService, PageMetaService, KymaService, OccEndpointsService, ProductSearchService, ProductReviewService, ProductReferenceService, SearchboxService, CurrencyService, LanguageService, BaseSiteService, UserConsentService, UserOrderService, DynamicAttributeService, PageRobotsMeta, TranslationChunkService, PageType, SemanticPathService, ProtectedRoutesGuard, AuthGuard, EMAIL_PATTERN, PASSWORD_PATTERN, NotAuthGuard, CmsPageTitleModule, provideConfig, StoreDataService, StoreFinderService, GoogleMapRendererService, StoreFinderCoreModule, RoutingModule as RoutingModule$1, StateModule, AuthModule, CmsModule, GlobalMessageModule, ProcessModule, CheckoutModule, UserModule, ProductModule, provideConfigFromMetaTags, SmartEditModule, PersonalizationModule, OccModule, ExternalRoutesModule } from '@spartacus/core';
import { map, filter, switchMap, tap, debounceTime, startWith, distinctUntilChanged, take, shareReplay, skipWhile, first, endWith, withLatestFrom, pluck } from 'rxjs/operators';
import { __extends, __values, __assign, __spread, __read, __awaiter, __generator } from 'tslib';
import { NgbModalRef, NgbModal, NgbModule, NgbActiveModal, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, NG_VALUE_ACCESSOR, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser, DOCUMENT, isPlatformServer } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { of, fromEvent, combineLatest, BehaviorSubject, concat, isObservable, from, Subscription } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { Title, Meta } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
var  /**
 * A reference to a newly opened modal
 *
 * \@todo remove ngb dependency and create our own implementation of ModalRef
 */
ModalRef = /** @class */ (function (_super) {
    __extends(ModalRef, _super);
    function ModalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalRef;
}(NgbModalRef));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service to handle modal
 */
var ModalService = /** @class */ (function () {
    function ModalService(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        /** @type {?} */
        var activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        return activeModal;
    };
    /**
     * @return {?}
     */
    ModalService.prototype.getActiveModal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    ModalService.prototype.dismissActiveModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        /** @type {?} */
        var modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    ModalService.prototype.closeActiveModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        /** @type {?} */
        var modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
        }
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(NgbModal)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
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
var CurrentProductService = /** @class */ (function () {
    function CurrentProductService(routingService, productService) {
        this.routingService = routingService;
        this.productService = productService;
    }
    /**
     * @return {?}
     */
    CurrentProductService.prototype.getProduct = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService.getRouterState().pipe(map((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.state.params['productCode']; })), filter(Boolean), switchMap((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) { return _this.productService.get(productCode); })));
    };
    CurrentProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CurrentProductService.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService }
    ]; };
    /** @nocollapse */ CurrentProductService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CurrentProductService_Factory() { return new CurrentProductService(ɵɵinject(RoutingService), ɵɵinject(ProductService)); }, token: CurrentProductService, providedIn: "root" });
    return CurrentProductService;
}());
if (false) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ICON_TYPE = {
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
};
/**
 * @abstract
 */
var  /**
 * @abstract
 */
IconConfig = /** @class */ (function () {
    function IconConfig() {
    }
    return IconConfig;
}());
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
var IconResourceType = {
    SVG: 'svg',
    LINK: 'link',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fontawesomeIconConfig = {
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
var IconLoaderService = /** @class */ (function () {
    function IconLoaderService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.loadedResources = [];
    }
    /**
     * Indicates whether the given icon type is configured to use SVG.
     */
    /**
     * Indicates whether the given icon type is configured to use SVG.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.useSvg = /**
     * Indicates whether the given icon type is configured to use SVG.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        return (this.config.icon.resources &&
            !!this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return res.types &&
                    res.type === IconResourceType.SVG &&
                    res.types.includes(iconType);
            })));
    };
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getSvgPath = /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        /** @type {?} */
        var svgResource = this.config.icon.resources.find((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.type === IconResourceType.SVG &&
                res.types &&
                res.types.includes(iconType);
        }));
        if (svgResource) {
            return svgResource.url
                ? svgResource.url + "#" + this.getSymbol(iconType)
                : "#" + this.getSymbol(iconType);
        }
    };
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    /**
     *
     * Returns the symbol class(es) for the icon type.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getStyleClasses = /**
     *
     * Returns the symbol class(es) for the icon type.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        return this.getSymbol(iconType) || '';
    };
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
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
    IconLoaderService.prototype.addLinkResource = /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        /** @type {?} */
        var resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource && resource.url) {
            if (!this.loadedResources.includes(resource.url)) {
                this.loadedResources.push(resource.url);
                /** @type {?} */
                var head = this.winRef.document.getElementsByTagName('head')[0];
                /** @type {?} */
                var link = this.winRef.document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = resource.url;
                head.appendChild(link);
            }
        }
    };
    /**
     * @private
     * @param {?} iconType
     * @param {?} resourceType
     * @return {?}
     */
    IconLoaderService.prototype.findResource = /**
     * @private
     * @param {?} iconType
     * @param {?} resourceType
     * @return {?}
     */
    function (iconType, resourceType) {
        if (!this.config.icon.resources) {
            return;
        }
        /** @type {?} */
        var resource = this.config.icon.resources.find((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.type === resourceType && res.types && res.types.includes(iconType);
        }));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return (res.type === resourceType && !res.types) || res.types === []; }));
        }
        return resource;
    };
    /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getSymbol = /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        if (this.config.icon &&
            this.config.icon.symbols &&
            this.config.icon.symbols[iconType]) {
            return this.config.icon.symbols[iconType];
        }
    };
    IconLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IconLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: IconConfig }
    ]; };
    /** @nocollapse */ IconLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(ɵɵinject(WindowRef), ɵɵinject(IconConfig)); }, token: IconLoaderService, providedIn: "root" });
    return IconLoaderService;
}());
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
var IconComponent = /** @class */ (function () {
    function IconComponent(iconLoader, elementRef) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        /**
         * Keeps the given style classes so that we can
         * clean them up when the icon changes
         */
        this.styleClasses = '';
    }
    Object.defineProperty(IconComponent.prototype, "type", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._type = type;
            this.addStyleClasses(type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "useSvg", {
        /**
         * Indicates whether the icon is configured to use SVG or not.
         */
        get: /**
         * Indicates whether the icon is configured to use SVG or not.
         * @return {?}
         */
        function () {
            return this.iconLoader.useSvg(this._type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "svgPath", {
        /**
         * Returns the path to the svg symbol. The path could include an
         * external URL to an svg (sprite) file, but can also reference
         * an existing SVG symbol in the DOM.
         */
        get: /**
         * Returns the path to the svg symbol. The path could include an
         * external URL to an svg (sprite) file, but can also reference
         * an existing SVG symbol in the DOM.
         * @return {?}
         */
        function () {
            return this.iconLoader.getSvgPath(this._type);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @param {?} type
     * @return {?}
     */
    IconComponent.prototype.addStyleClasses = /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
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
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-icon',
                    template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: IconLoaderService },
        { type: ElementRef }
    ]; };
    IconComponent.propDecorators = {
        type: [{ type: Input, args: ['type',] }],
        styleClasses: [{ type: HostBinding, args: ['class',] }]
    };
    return IconComponent;
}());
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
var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IconComponent],
                    imports: [CommonModule, ConfigModule.withConfig(fontawesomeIconConfig)],
                    providers: [{ provide: IconConfig, useExisting: Config }],
                    exports: [IconComponent],
                },] }
    ];
    return IconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddedToCartDialogComponent = /** @class */ (function () {
    function AddedToCartDialogComponent(modalService, cartService, fb) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.fb = fb;
        this.iconTypes = ICON_TYPE;
        this.quantity = 0;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.entry$ = this.entry$.pipe(tap((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            if (entry) {
                var code = entry.product.code;
                if (!_this.form.controls[code]) {
                    _this.form.setControl(code, _this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                _this.form.markAsPristine();
            }
        })));
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.dismissModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.dismissModal('Removed');
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.updateEntry = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var item = _a.item, updatedQuantity = _a.updatedQuantity;
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    };
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.createEntryFormGroup = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    };
    AddedToCartDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-added-to-cart-dialog',
                    template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"loaded$ | async as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice?.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddedToCartDialogComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: CartService },
        { type: FormBuilder }
    ]; };
    AddedToCartDialogComponent.propDecorators = {
        dialog: [{ type: ViewChild, args: ['dialog', { static: false, read: ElementRef },] }]
    };
    return AddedToCartDialogComponent;
}());
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
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService, currentProductService, cd) {
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
    AddToCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.productCode) {
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
            this.hasStock = true;
        }
        else {
            this.subscription = this.currentProductService
                .getProduct()
                .pipe(filter(Boolean))
                .subscribe((/**
             * @param {?} product
             * @return {?}
             */
            function (product) {
                _this.productCode = product.code;
                _this.quantity = 1;
                if (product.stock &&
                    product.stock.stockLevelStatus !== 'outOfStock' &&
                    product.stock.stockLevel > 0) {
                    _this.maxQuantity = product.stock.stockLevel;
                    _this.hasStock = true;
                }
                else {
                    _this.hasStock = false;
                }
                _this.cartEntry$ = _this.cartService.getEntry(_this.productCode);
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddToCartComponent.prototype.updateCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.quantity = value;
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.addToCart = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (entry) {
            if (entry) {
                _this.increment = true;
            }
            _this.openModal();
            _this.cartService.addEntry(_this.productCode, _this.quantity);
            _this.increment = false;
        }))
            .unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    AddToCartComponent.prototype.openModal = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalInstance;
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
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AddToCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-cart',
                    template: "<div class=\"quantity\" *ngIf=\"productCode && showQuantity\">\n  <label>{{ 'addToCart.quantity' | cxTranslate }}</label>\n  <cx-item-counter\n    [value]=\"quantity\"\n    isValueChangeable=\"true\"\n    [min]=\"1\"\n    [max]=\"maxQuantity\"\n    *ngIf=\"hasStock\"\n    (update)=\"updateCount($event)\"\n  ></cx-item-counter>\n  <span class=\"info\">{{\n    hasStock\n      ? ('addToCart.inStock' | cxTranslate)\n      : ('addToCart.outOfStock' | cxTranslate)\n  }}</span>\n</div>\n<button\n  *ngIf=\"hasStock\"\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: ModalService },
        { type: CurrentProductService },
        { type: ChangeDetectorRef }
    ]; };
    AddToCartComponent.propDecorators = {
        productCode: [{ type: Input }],
        showQuantity: [{ type: Input }]
    };
    return AddToCartComponent;
}());
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.showQuantity;
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
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(hostElement) {
        this.hostElement = hostElement;
    }
    /**
     * @return {?}
     */
    AutoFocusDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.hostElement.nativeElement.focus();
    };
    AutoFocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxAutoFocus]',
                },] }
    ];
    /** @nocollapse */
    AutoFocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AutoFocusDirective;
}());
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
var AutoFocusDirectiveModule = /** @class */ (function () {
    function AutoFocusDirectiveModule() {
    }
    AutoFocusDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AutoFocusDirective],
                    exports: [AutoFocusDirective],
                },] }
    ];
    return AutoFocusDirectiveModule;
}());

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
var CardComponent = /** @class */ (function () {
    function CardComponent() {
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
    // ACTIONS
    /**
     * @return {?}
     */
    CardComponent.prototype.setEditMode = 
    // ACTIONS
    /**
     * @return {?}
     */
    function () {
        this.editMode = true;
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.cancelEdit = /**
     * @return {?}
     */
    function () {
        this.editMode = false;
        this.cancelCard.emit(5);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.delete = /**
     * @return {?}
     */
    function () {
        this.deleteCard.emit(1);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.setDefault = /**
     * @return {?}
     */
    function () {
        this.isDefault = true;
        this.setDefaultCard.emit(2);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.send = /**
     * @return {?}
     */
    function () {
        this.sendCard.emit(3);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.editCard.emit(4);
    };
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-card',
                    template: "<div\n  *ngIf=\"content\"\n  class=\"cx-card\"\n  [class.cx-card-border]=\"border\"\n  [class.cx-card-fit-to-container]=\"fitToContainer\"\n>\n  <!-- Card Header -->\n  <div *ngIf=\"content.header && !editMode\" class=\"card-header\">\n    {{ content.header }}\n  </div>\n  <!-- Card Body -->\n  <div class=\"card-body cx-card-body\" [class.cx-card-delete]=\"editMode\">\n    <!-- Edit message -->\n    <div *ngIf=\"editMode\" class=\"cx-card-delete-msg\">\n      {{ content.deleteMsg }}\n    </div>\n    <!-- Card title -->\n    <h4 *ngIf=\"content.title\" class=\"cx-card-title\">\n      {{ content.title }}\n    </h4>\n    <!-- Card Content -->\n    <div class=\"cx-card-container\">\n      <!-- Card Label -->\n      <div class=\"cx-card-label-container\">\n        <div *ngIf=\"content.textBold\" class=\"cx-card-label-bold\">\n          {{ content.textBold }}\n        </div>\n        <div *ngFor=\"let line of content.text\">\n          <div class=\"cx-card-label\">{{ line }}</div>\n        </div>\n      </div>\n      <!-- Image -->\n      <div *ngIf=\"content.img\" class=\"cx-card-img-container\">\n        <cx-icon [type]=\"content.img\"></cx-icon>\n      </div>\n    </div>\n    <!-- Edit Mode Actions -->\n    <div *ngIf=\"editMode\" class=\"row cx-card-body-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"delete()\">\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <!-- Actions -->\n    <div *ngIf=\"content.actions && !editMode\" class=\"cx-card-actions\">\n      <div *ngFor=\"let action of content.actions\">\n        <div [ngSwitch]=\"action.event\">\n          <a\n            *ngSwitchCase=\"'delete'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"delete()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'default'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"setDefault()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'send'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"send()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchCase=\"'edit'\"\n            class=\"cx-card-link card-link btn-link\"\n            (click)=\"edit()\"\n            >{{ action.name }}</a\n          >\n          <a\n            *ngSwitchDefault\n            href=\"{{ action.link }}\"\n            class=\"card-link btn-link\"\n            >{{ action.name }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
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
    return CardComponent;
}());
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
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, I18nModule, IconModule],
                    declarations: [CardComponent],
                    exports: [CardComponent],
                },] }
    ];
    return CardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselService = /** @class */ (function () {
    function CarouselService(winRef) {
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
    CarouselService.prototype.getItemsPerSlide = /**
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
    function (nativeElement, itemWidth) {
        var _this = this;
        return this.winRef.resize$.pipe(map((/**
         * @return {?}
         */
        function () { return ((/** @type {?} */ (nativeElement))).clientWidth; })), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        function (totalWidth) { return _this.calculateItems(totalWidth, itemWidth); })));
    };
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @private
     * @param {?} availableWidth The available width in pixels for the carousel items.
     * @param {?} itemWidth The width per carousel item, in px or percentage.
     * @return {?}
     */
    CarouselService.prototype.calculateItems = /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @private
     * @param {?} availableWidth The available width in pixels for the carousel items.
     * @param {?} itemWidth The width per carousel item, in px or percentage.
     * @return {?}
     */
    function (availableWidth, itemWidth) {
        /** @type {?} */
        var calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            /** @type {?} */
            var num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / (/** @type {?} */ (((/** @type {?} */ (num)))));
        }
        if (itemWidth.endsWith('%')) {
            /** @type {?} */
            var perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * ((/** @type {?} */ (((/** @type {?} */ (perc))))) / 100));
        }
        return Math.floor(calculatedItems) || 1;
    };
    CarouselService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CarouselService.ctorParameters = function () { return [
        { type: WindowRef }
    ]; };
    /** @nocollapse */ CarouselService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(ɵɵinject(WindowRef)); }, token: CarouselService, providedIn: "root" });
    return CarouselService;
}());
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
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el, service) {
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
    Object.defineProperty(CarouselComponent.prototype, "setItems", {
        set: /**
         * @param {?} inputItems
         * @return {?}
         */
        function (inputItems) {
            this.items = inputItems;
            //Reset slider when changing products
            this.activeSlide = 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.template && isDevMode()) {
            console.error('No template reference provided to render the carousel items for the `cx-carousel`');
            return;
        }
        this.size$ = this.service
            .getItemsPerSlide(this.el.nativeElement, this.itemWidth)
            .pipe(tap((/**
         * @return {?}
         */
        function () { return (_this.activeSlide = 0); })));
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-carousel',
                    template: "<ng-container *ngIf=\"items?.length > 0 && (size$ | async) as size\">\n  <h3 *ngIf=\"title\">{{ title }}</h3>\n\n  <div class=\"carousel-panel\" [ngClass]=\"'size-' + size\">\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"previous\"\n      (click)=\"activeSlide = activeSlide - size\"\n      [disabled]=\"activeSlide === 0\"\n    >\n      <cx-icon [type]=\"previousIcon\"></cx-icon>\n    </button>\n\n    <div class=\"slides\">\n      <ng-container *ngFor=\"let _ of items; let i = index\">\n        <div class=\"slide\" *ngIf=\"i % size === 0\">\n          <ng-container\n            *ngFor=\"let item of items | slice: i:i + size; let j = index\"\n          >\n            <div\n              *ngIf=\"item | async as data\"\n              class=\"item\"\n              [class.active]=\"i === activeSlide\"\n            >\n              <ng-container\n                *ngTemplateOutlet=\"template; context: { item: data }\"\n              ></ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n\n    <button\n      *ngIf=\"size < items.length\"\n      class=\"next\"\n      (click)=\"activeSlide = activeSlide + size\"\n      tabindex=\"0\"\n      [disabled]=\"activeSlide > items.length - size - 1\"\n    >\n      <cx-icon [type]=\"nextIcon\"></cx-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"!hideIndicators && size < items.length\" class=\"indicators\">\n    <ng-container *ngFor=\"let _ of items; let i = index\">\n      <button\n        *ngIf=\"i % size === 0\"\n        (focus)=\"activeSlide = i\"\n        [disabled]=\"i === activeSlide\"\n        tabindex=\"0\"\n      >\n        <cx-icon [type]=\"indicatorIcon\"></cx-icon>\n      </button>\n    </ng-container>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CarouselService }
    ]; };
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
    return CarouselComponent;
}());
if (false) {
    /**
     * The title is rendered as the carousel heading.
     * @type {?}
     */
    CarouselComponent.prototype.title;
    /**
     * The items$ represent the carousel items. The items$ are
     * observables so that the itesm can be loaded on demand.
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
var BREAKPOINT = {
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
var  /**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
LayoutConfig = /** @class */ (function () {
    function LayoutConfig() {
    }
    return LayoutConfig;
}());
if (false) {
    /**
     * The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints.
     * @type {?}
     */
    LayoutConfig.prototype.breakpoints;
    /** @type {?} */
    LayoutConfig.prototype.layoutSlots;
}

var _a;
/** @type {?} */
var DEFAULT_BREAKPOINTS = (_a = {},
    _a[BREAKPOINT.xs] = 576,
    _a[BREAKPOINT.sm] = 768,
    _a[BREAKPOINT.md] = 992,
    _a[BREAKPOINT.lg] = 1200,
    _a);
var BreakpointService = /** @class */ (function () {
    function BreakpointService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    BreakpointService.prototype.getSize = /**
     * @param {?} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        return this.config.breakpoints
            ? this.config.breakpoints[breakpoint]
            : DEFAULT_BREAKPOINTS[breakpoint];
    };
    Object.defineProperty(BreakpointService.prototype, "breakpoint$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.window) {
                return of(BREAKPOINT.xs);
            }
            return fromEvent(this.window, 'resize').pipe(debounceTime(300), startWith({ target: this.window }), map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.getBreakpoint(((/** @type {?} */ (event.target))).innerWidth); })), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakpointService.prototype, "breakpoints", {
        get: /**
         * @return {?}
         */
        function () {
            return [
                BREAKPOINT.xs,
                BREAKPOINT.sm,
                BREAKPOINT.md,
                BREAKPOINT.lg,
                BREAKPOINT.xl,
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    BreakpointService.prototype.getBreakpoint = /**
     * @protected
     * @param {?} windowWidth
     * @return {?}
     */
    function (windowWidth) {
        /** @type {?} */
        var breakpoint = this.getClosest(windowWidth);
        return BREAKPOINT[breakpoint || BREAKPOINT.lg];
    };
    /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    BreakpointService.prototype.getClosest = /**
     * @protected
     * @param {?=} windowWidth
     * @return {?}
     */
    function (windowWidth) {
        var _this = this;
        if (!windowWidth) {
            windowWidth = this.window.innerWidth;
        }
        return windowWidth < this.getSize(BREAKPOINT.xs)
            ? BREAKPOINT.xs
            : this.breakpoints.reverse().find((/**
             * @param {?} br
             * @return {?}
             */
            function (br) { return windowWidth >= _this.getSize(br); }));
    };
    Object.defineProperty(BreakpointService.prototype, "window", {
        get: /**
         * @return {?}
         */
        function () {
            return this.winRef.nativeWindow;
        },
        enumerable: true,
        configurable: true
    });
    BreakpointService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    BreakpointService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: LayoutConfig }
    ]; };
    /** @nocollapse */ BreakpointService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(ɵɵinject(WindowRef), ɵɵinject(LayoutConfig)); }, token: BreakpointService, providedIn: "root" });
    return BreakpointService;
}());
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
var DEFAULT_MEDIA_FORMAT = 'tablet';
var MediaService = /** @class */ (function () {
    function MediaService(config, breakpointService) {
        this.config = config;
        this.breakpointService = breakpointService;
    }
    Object.defineProperty(MediaService.prototype, "mediaFormats", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} container
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    MediaService.prototype.getMedia = /**
     * @param {?} container
     * @param {?=} format
     * @param {?=} alt
     * @return {?}
     */
    function (container, format, alt) {
        return {
            src: this.getMainImage(container, format),
            srcset: this.getSrcSet(container),
            alt: alt || this.getAlt(container, format),
        };
    };
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    MediaService.prototype.getMainImage = /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    function (media, format) {
        if (media && media[format || DEFAULT_MEDIA_FORMAT]) {
            return this.getImageUrl(media[format || DEFAULT_MEDIA_FORMAT].url);
        }
        else if (media && media.url) {
            return this.getImageUrl(media.url);
        }
        else {
            return null;
        }
    };
    /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    MediaService.prototype.getAlt = /**
     * @private
     * @param {?} media
     * @param {?=} format
     * @return {?}
     */
    function (media, format) {
        if (!media) {
            return undefined;
        }
        else if (media[format || DEFAULT_MEDIA_FORMAT]) {
            return media[format || DEFAULT_MEDIA_FORMAT].altText;
        }
        else if (media.altText) {
            return media.altText;
        }
    };
    /**
     * builds a set of images aligned with the breakpoints
     */
    /**
     * builds a set of images aligned with the breakpoints
     * @private
     * @param {?} media
     * @return {?}
     */
    MediaService.prototype.getSrcSet = /**
     * builds a set of images aligned with the breakpoints
     * @private
     * @param {?} media
     * @return {?}
     */
    function (media) {
        var _this = this;
        if (!media) {
            return undefined;
        }
        /** @type {?} */
        var srcset = this.mediaFormats.reduce((/**
         * @param {?} set
         * @param {?} format
         * @return {?}
         */
        function (set, format) {
            if (!!media[format.code]) {
                if (set) {
                    set += ', ';
                }
                set += _this.getImageUrl(media[format.code].url) + " " + format.threshold + "w";
            }
            return set;
        }), '');
        return srcset === '' ? undefined : srcset;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    MediaService.prototype.getImageUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (!url) {
            return null;
        }
        return url.startsWith('http') ? url : this.getBaseUrl() + url;
    };
    /**
     * @private
     * @return {?}
     */
    MediaService.prototype.getBaseUrl = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.config.backend.media.baseUrl || this.config.backend.occ.baseUrl || '');
    };
    MediaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: OccConfig },
        { type: BreakpointService }
    ]; };
    /** @nocollapse */ MediaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MediaService_Factory() { return new MediaService(ɵɵinject(OccConfig), ɵɵinject(BreakpointService)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
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
var MediaComponent = /** @class */ (function () {
    function MediaComponent(mediaService) {
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
    MediaComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.create();
    };
    /**
     * Creates the `Media` object
     */
    /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    MediaComponent.prototype.create = /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    function () {
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
            this.handleMissing();
        }
    };
    /**
     * This handler is called from the UI when the image is loaded.
     */
    /**
     * This handler is called from the UI when the image is loaded.
     * @return {?}
     */
    MediaComponent.prototype.loadHandler = /**
     * This handler is called from the UI when the image is loaded.
     * @return {?}
     */
    function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = false;
        this.loaded.emit(true);
    };
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     * @return {?}
     */
    MediaComponent.prototype.errorHandler = /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     * @return {?}
     */
    function () {
        this.handleMissing();
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.handleMissing = /**
     * @private
     * @return {?}
     */
    function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    };
    MediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-media',
                    template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MediaComponent.ctorParameters = function () { return [
        { type: MediaService }
    ]; };
    MediaComponent.propDecorators = {
        container: [{ type: Input }],
        format: [{ type: Input }],
        alt: [{ type: Input }],
        loaded: [{ type: Output }],
        isInitialized: [{ type: HostBinding, args: ['class.is-initialized',] }],
        isLoading: [{ type: HostBinding, args: ['class.is-loading',] }],
        isMissing: [{ type: HostBinding, args: ['class.is-missing',] }]
    };
    return MediaComponent;
}());
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
var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [MediaComponent],
                    exports: [MediaComponent],
                },] }
    ];
    return MediaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, IconModule, MediaModule, UrlModule],
                    declarations: [CarouselComponent],
                    exports: [CarouselComponent],
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ItemCounterComponent; })),
    multi: true,
};
var ItemCounterComponent = /** @class */ (function () {
    function ItemCounterComponent(renderer) {
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
        function () { });
        this.onModelChange = (/**
         * @param {?} _rating
         * @return {?}
         */
        function (_rating) { });
    }
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.writeValue(this.min || 0);
        this.subscription = this.inputValue.valueChanges
            .pipe(debounceTime(300))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.manualChange(Number(value));
            }
        }));
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     */
    /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    ItemCounterComponent.prototype.adjustValueInRange = /**
     * If value is too small it will be set to min, if is too big it will be set to max.
     * @param {?} incomingValue
     * @return {?}
     */
    function (incomingValue) {
        return incomingValue < this.min || !this.min
            ? this.min
            : incomingValue > this.max || !this.max
                ? this.max
                : incomingValue;
    };
    /**
     * Update model value and refresh input
     */
    /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    ItemCounterComponent.prototype.manualChange = /**
     * Update model value and refresh input
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        newValue = this.adjustValueInRange(newValue);
        this.updateValue(newValue);
        /* We use the value from the input, however, this value
          is not the correct value that should be displayed. The correct value to display
          is this.value, which the parent updates if the async call succeed. If the call
          fails, then the input will need to display this.value, and not what the user
          recently typed in */
        this.renderer.setProperty(this.input.nativeElement, 'value', newValue);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemCounterComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var handlers = {
            ArrowDown: (/**
             * @return {?}
             */
            function () { return _this.decrement(); }),
            ArrowUp: (/**
             * @return {?}
             */
            function () { return _this.increment(); }),
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemCounterComponent.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemCounterComponent.prototype.onFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    };
    /**
     * Verify value that it can be incremented, if yes it does that.
     */
    /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    ItemCounterComponent.prototype.increment = /**
     * Verify value that it can be incremented, if yes it does that.
     * @return {?}
     */
    function () {
        this.manualChange(this.value + this.step);
        this.setFocus(true);
    };
    /**
     * Verify value that it can be decremented, if yes it does that.
     */
    /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    ItemCounterComponent.prototype.decrement = /**
     * Verify value that it can be decremented, if yes it does that.
     * @return {?}
     */
    function () {
        this.manualChange(this.value - this.step);
        this.setFocus(false);
    };
    // ControlValueAccessor interface
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    ItemCounterComponent.prototype.registerOnTouched = 
    // ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ItemCounterComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ItemCounterComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value || this.min || 0;
        this.onModelChange(this.value);
    };
    /**
     * Set up new value for input and emit event outside
     */
    /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    ItemCounterComponent.prototype.updateValue = /**
     * Set up new value for input and emit event outside
     * @param {?} updatedQuantity
     * @return {?}
     */
    function (updatedQuantity) {
        if (!this.async) {
            // If the async flag is true, then the parent component is responsible for updating the form
            this.writeValue(updatedQuantity);
        }
        // Additionally, we emit a change event, so that users may optionally do something on change
        this.update.emit(updatedQuantity);
        this.onTouch();
    };
    /**
     * Determines which HTML element should have focus at a given time
     */
    /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    ItemCounterComponent.prototype.setFocus = /**
     * Determines which HTML element should have focus at a given time
     * @param {?} isIncremented
     * @return {?}
     */
    function (isIncremented) {
        if (this.isMaxOrMinValueOrBeyond()) {
            this.input.nativeElement.focus();
        }
        else if (isIncremented) {
            this.incrementBtn.nativeElement.focus();
        }
        else {
            this.decrementBtn.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.isMaxOrMinValueOrBeyond = /**
     * @return {?}
     */
    function () {
        return this.value >= this.max || this.value <= this.min;
    };
    /**
     * @return {?}
     */
    ItemCounterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ItemCounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-item-counter',
                    template: "<div class=\"cx-counter-wrapper\">\n  <div\n    class=\"cx-counter btn-group\"\n    role=\"group\"\n    tabindex=\"0\"\n    aria-label=\"Add more items\"\n    [class.focused]=\"focus\"\n    (keydown)=\"onKeyDown($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n  >\n    <button\n      #decrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"decrement()\"\n      [disabled]=\"cartIsLoading || value <= min\"\n      *ngIf=\"isValueChangeable\"\n    >\n      -\n    </button>\n\n    <input\n      #itemCounterInput\n      class=\"cx-counter-value\"\n      type=\"text\"\n      name=\"value\"\n      cxOnlyNumber\n      [formControl]=\"inputValue\"\n      [value]=\"value\"\n      *ngIf=\"isValueChangeable\"\n    />\n    <div class=\"cx-counter-value\" *ngIf=\"!isValueChangeable\">\n      {{ value }}\n    </div>\n    <button\n      #incrementBtn\n      type=\"button\"\n      class=\"cx-counter-action\"\n      (click)=\"increment()\"\n      [disabled]=\"cartIsLoading || value >= max\"\n      *ngIf=\"isValueChangeable\"\n    >\n      +\n    </button>\n  </div>\n</div>\n",
                    providers: [COUNTER_CONTROL_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    ItemCounterComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
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
    return ItemCounterComponent;
}());
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
var OnlyNumberDirective = /** @class */ (function () {
    /**
     * Class constructor
     * @param hostElement
     */
    function OnlyNumberDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.previousValue = '';
        this.integerUnsigned = '^[0-9]*$';
    }
    /**
     * Event handler for host's change event
     */
    /**
     * Event handler for host's change event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onChange = /**
     * Event handler for host's change event
     * @return {?}
     */
    function () {
        this.validateValue(this.hostElement.nativeElement.value);
    };
    /**
     * Event handler for host's change event
     */
    /**
     * Event handler for host's change event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onInput = /**
     * Event handler for host's change event
     * @return {?}
     */
    function () {
        this.validateValue(this.hostElement.nativeElement.value);
    };
    /**
     * Event handler for host's paste event
     * @param e
     */
    /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.onPaste = /**
     * Event handler for host's paste event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var value = e.clipboardData.getData('text/plain');
        this.validateValue(value);
        e.preventDefault();
    };
    /**
     * Event handler for host's keyup event
     * @param e
     */
    /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyUp = /**
     * Event handler for host's keyup event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var value = e.target['value'];
        this.validateValue(value);
    };
    /**
     * Event handler for host's keydown event
     * @param e
     */
    /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyDown = /**
     * Event handler for host's keydown event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var originalValue = e.target['value'];
        /** @type {?} */
        var key = this.getName(e);
        /** @type {?} */
        var controlOrCommand = e.ctrlKey === true || e.metaKey === true;
        // allowed keys apart from numeric characters
        /** @type {?} */
        var allowedKeys = [
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
        var isNumber = new RegExp(this.integerUnsigned).test(key);
        if (isNumber) {
            return;
        }
        else {
            e.preventDefault();
        }
    };
    /**
     * Test whether value is a valid number or not
     * @param value
     */
    /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    OnlyNumberDirective.prototype.validateValue = /**
     * Test whether value is a valid number or not
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = value.replace(/[^0-9]+/g, '');
        this.renderer.setProperty(this.hostElement.nativeElement, 'value', value);
    };
    /**
     * Get key's name
     * @param e
     */
    /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    OnlyNumberDirective.prototype.getName = /**
     * Get key's name
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.key;
    };
    OnlyNumberDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOnlyNumber]',
                },] }
    ];
    /** @nocollapse */
    OnlyNumberDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    OnlyNumberDirective.propDecorators = {
        onChange: [{ type: HostListener, args: ['change',] }],
        onInput: [{ type: HostListener, args: ['input',] }],
        onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return OnlyNumberDirective;
}());
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
var OnlyNumberDirectiveModule = /** @class */ (function () {
    function OnlyNumberDirectiveModule() {
    }
    OnlyNumberDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [OnlyNumberDirective],
                    exports: [OnlyNumberDirective],
                },] }
    ];
    return OnlyNumberDirectiveModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemCounterModule = /** @class */ (function () {
    function ItemCounterModule() {
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
    return ItemCounterModule;
}());

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
var GenericLinkComponent = /** @class */ (function () {
    function GenericLinkComponent() {
        this.protocolRegex = /^https?:\/\//i;
    }
    Object.defineProperty(GenericLinkComponent.prototype, "rel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.target === '_blank' ? 'noopener' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.url === 'string') {
                return [this.getAbsoluteUrl(this.url)];
            }
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GenericLinkComponent.prototype.isExternalUrl = /**
     * @return {?}
     */
    function () {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    GenericLinkComponent.prototype.getAbsoluteUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    };
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
    return GenericLinkComponent;
}());
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
var GenericLinkModule = /** @class */ (function () {
    function GenericLinkModule() {
    }
    GenericLinkModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    declarations: [GenericLinkComponent],
                    exports: [GenericLinkComponent],
                },] }
    ];
    return GenericLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGE_FIRST = 1;
/** @type {?} */
var PAGE_WINDOW_SIZE = 3;
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.hideOnSinglePage = false;
        this.viewPageEvent = new EventEmitter();
    }
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    /**
     * @private
     * @return {?}
     */
    PaginationComponent.prototype.getCurrentPageNumber = 
    // Because pagination model uses indexes starting from 0,
    // add 1 to get current page number
    /**
     * @private
     * @return {?}
     */
    function () {
        return this.pagination.currentPage + 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPagePrevious = /**
     * @return {?}
     */
    function () {
        return this.getCurrentPageNumber() - 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageNext = /**
     * @return {?}
     */
    function () {
        return this.getCurrentPageNumber() + 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageIndicies = /**
     * @return {?}
     */
    function () {
        return Array(this.pagination.totalPages);
    };
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageWindowMinIndex = 
    // Gets the minimum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    function () {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE);
    };
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    PaginationComponent.prototype.getPageWindowMaxIndex = 
    // Gets the maximum index of page numbers that can be shown by being within the page window range
    /**
     * @return {?}
     */
    function () {
        return (Math.floor(this.pagination.currentPage / PAGE_WINDOW_SIZE) *
            PAGE_WINDOW_SIZE +
            2);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.hasPages = /**
     * @return {?}
     */
    function () {
        return this.pagination.totalPages > 0;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.onFirstPage = /**
     * @return {?}
     */
    function () {
        return this.pagination.currentPage === 0;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.onLastPage = /**
     * @return {?}
     */
    function () {
        return this.pagination.currentPage === this.pagination.totalPages - 1;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.onPageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.pagination.currentPage === index;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.hidePageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return ((this.getPageWindowMinIndex() > index ||
            this.getPageWindowMaxIndex() < index) &&
            (index > 0 && index < this.pagination.totalPages - 1));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PaginationComponent.prototype.showDots = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (this.hidePageIndex(index) &&
            (index === this.getPageWindowMaxIndex() + 1 ||
                index === this.getPageWindowMinIndex() - 1));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.clickPageNo = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // Change page on valid index
        if (page >= PAGE_FIRST &&
            page <= this.pagination.totalPages &&
            page !== this.getCurrentPageNumber()) {
            this.pageChange(page);
            return page;
        }
        // Page stays the same on invalid index
        return this.pagination.currentPage;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.viewPageEvent.emit(page - 1);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.showPagination = /**
     * @return {?}
     */
    function () {
        return !(this.hideOnSinglePage && this.pagination.totalPages <= 1);
    };
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
    return PaginationComponent;
}());
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
var SortingComponent = /** @class */ (function () {
    function SortingComponent() {
        this.sortListEvent = new EventEmitter();
    }
    /**
     * @param {?} sortCode
     * @return {?}
     */
    SortingComponent.prototype.sortList = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        this.sortListEvent.emit(sortCode);
    };
    SortingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-sorting',
                    template: "<ng-select\n  [searchable]=\"false\"\n  [clearable]=\"false\"\n  placeholder=\"{{ placeholder }}\"\n  (change)=\"sortList($event)\"\n  [ngModel]=\"selectedOption\"\n>\n  <ng-option *ngFor=\"let sort of sortOptions\" [value]=\"sort.code\">{{\n    sort.name ? sort.name : sortLabels ? sortLabels[sort.code] : ''\n  }}</ng-option>\n</ng-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SortingComponent.ctorParameters = function () { return []; };
    SortingComponent.propDecorators = {
        sortOptions: [{ type: Input }],
        selectedOption: [{ type: Input }],
        placeholder: [{ type: Input }],
        sortLabels: [{ type: Input }],
        sortListEvent: [{ type: Output }]
    };
    return SortingComponent;
}());
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
var ListNavigationModule = /** @class */ (function () {
    function ListNavigationModule() {
    }
    ListNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgSelectModule, FormsModule],
                    declarations: [PaginationComponent, SortingComponent],
                    exports: [PaginationComponent, SortingComponent],
                },] }
    ];
    return ListNavigationModule;
}());

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
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-spinner',
                    template: "<div class=\"loader-container\">\n  <div class=\"loader\">{{ 'spinner.loading' | cxTranslate }}</div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    SpinnerComponent.ctorParameters = function () { return []; };
    return SpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, I18nModule],
                    declarations: [SpinnerComponent],
                    exports: [SpinnerComponent],
                },] }
    ];
    return SpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalMessageComponent = /** @class */ (function () {
    function GlobalMessageComponent(globalMessageService) {
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPE;
        this.messageType = GlobalMessageType;
    }
    /**
     * @return {?}
     */
    GlobalMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.messages$ = this.globalMessageService.get();
    };
    /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    GlobalMessageComponent.prototype.clear = /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    function (type, index) {
        this.globalMessageService.remove(type, index);
    };
    GlobalMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-global-message',
                    template: "<div *ngIf=\"messages$ | async as messages\">\n  <div\n    class=\"alert alert-success\"\n    *ngFor=\"\n      let confMsg of messages[messageType.MSG_TYPE_CONFIRMATION];\n      let i = index\n    \"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.SUCCESS\"></cx-icon>\n    </span>\n    <span>{{ confMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_CONFIRMATION, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-warning\"\n    *ngFor=\"let infoMsg of messages[messageType.MSG_TYPE_INFO]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.WARNING\"></cx-icon>\n    </span>\n    <span>{{ infoMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_INFO, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n  <div\n    class=\"alert alert-danger\"\n    *ngFor=\"let errorMsg of messages[messageType.MSG_TYPE_ERROR]; let i = index\"\n  >\n    <span class=\"alert-icon\">\n      <cx-icon [type]=\"iconTypes.ERROR\"></cx-icon>\n    </span>\n    <span>{{ errorMsg | cxTranslate }}</span>\n    <button\n      class=\"close\"\n      type=\"button\"\n      (click)=\"clear(messageType.MSG_TYPE_ERROR, i)\"\n    >\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    GlobalMessageComponent.ctorParameters = function () { return [
        { type: GlobalMessageService }
    ]; };
    return GlobalMessageComponent;
}());
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
var GlobalMessageComponentModule = /** @class */ (function () {
    function GlobalMessageComponentModule() {
    }
    GlobalMessageComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, IconModule, I18nModule],
                    declarations: [GlobalMessageComponent],
                    exports: [GlobalMessageComponent],
                },] }
    ];
    return GlobalMessageComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LanguageCurrencyComponent = /** @class */ (function () {
    function LanguageCurrencyComponent() {
    }
    LanguageCurrencyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-language-currency-selector',
                    template: "\n    <cx-site-context-selector context=\"language\"></cx-site-context-selector>\n    <cx-site-context-selector context=\"currency\"></cx-site-context-selector>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return LanguageCurrencyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
CmsComponentData = /** @class */ (function () {
    function CmsComponentData() {
    }
    return CmsComponentData;
}());
if (false) {
    /** @type {?} */
    CmsComponentData.prototype.uid;
    /** @type {?} */
    CmsComponentData.prototype.data$;
}

var _a$1;
/** @type {?} */
var LABELS = (_a$1 = {},
    _a$1[LANGUAGE_CONTEXT_ID] = 'Language',
    _a$1[CURRENCY_CONTEXT_ID] = 'Currency',
    _a$1);
var SiteContextComponentService = /** @class */ (function () {
    function SiteContextComponentService(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getItems = /**
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        function (service) { return service.getAll(); })), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return _this.getContext(context).pipe(switchMap((/**
             * @param {?} ctx
             * @return {?}
             */
            function (ctx) {
                var e_1, _a;
                /** @type {?} */
                var itemsCopy = [];
                try {
                    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var item = items_1_1.value;
                        itemsCopy.push(__assign({}, item, { label: _this.getOptionLabel(item, ctx) }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return of(itemsCopy);
            })));
        })));
    };
    /**
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getActiveItem = /**
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        function (service) { return service.getActive(); })));
    };
    /**
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getLabel = /**
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx) {
            return LABELS[ctx];
        })));
    };
    /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.setActive = /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    function (value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe((/**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            service.setActive(value);
        }));
    };
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getService = /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx) { return _this.getInjectedService(ctx); })), filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return !!s; })));
    };
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getContext = /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.context; })), map((/**
             * @param {?} ctx
             * @return {?}
             */
            function (ctx) {
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
    };
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getInjectedService = /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    function (context) {
        return this.injector.get(this.contextServiceMap[context], null);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getOptionLabel = /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    function (item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
            default:
                return item.isocode;
        }
    };
    SiteContextComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextComponentService.ctorParameters = function () { return [
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: ContextServiceMap },
        { type: Injector }
    ]; };
    return SiteContextComponentService;
}());
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
var SiteContextType = {
    LANGUAGE: 'LANGUAGE',
    CURRENCY: 'CURRENCY',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SiteContextSelectorComponent = /** @class */ (function () {
    function SiteContextSelectorComponent(componentService) {
        this.componentService = componentService;
        this.iconTypes = ICON_TYPE;
    }
    Object.defineProperty(SiteContextSelectorComponent.prototype, "items$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.getItems(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "activeItem$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.getActiveItem(this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "active", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.componentService.setActive(value, this.context);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextSelectorComponent.prototype, "label$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentService.getLabel(this.context);
        },
        enumerable: true,
        configurable: true
    });
    SiteContextSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-site-context-selector',
                    template: "<label *ngIf=\"(items$ | async)?.length > 1 && (items$ | async) as items\">\n  <span>{{ label$ | async }}</span>\n  <select (change)=\"active = $event.target.value\">\n    <option\n      *ngFor=\"let item of items\"\n      value=\"{{ item.isocode }}\"\n      [selected]=\"(activeItem$ | async) === item.isocode\"\n      >{{ item.label }}</option\n    > </select\n  ><cx-icon [type]=\"iconTypes.CARET_DOWN\" class=\"small\"></cx-icon>\n</label>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SiteContextSelectorComponent.ctorParameters = function () { return [
        { type: SiteContextComponentService }
    ]; };
    SiteContextSelectorComponent.propDecorators = {
        context: [{ type: Input }]
    };
    return SiteContextSelectorComponent;
}());
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
var SiteContextSelectorModule = /** @class */ (function () {
    function SiteContextSelectorModule() {
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
    return SiteContextSelectorModule;
}());

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
var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent(el, renderer) {
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
    StarRatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setRate(this.rating, true);
    };
    /**
     * @param {?} value
     * @param {?=} force
     * @return {?}
     */
    StarRatingComponent.prototype.setRate = /**
     * @param {?} value
     * @param {?=} force
     * @return {?}
     */
    function (value, force) {
        if (!this.disabled || force) {
            // TODO(issue:#3803) deprecated since 1.0.2
            if (this.renderer) {
                this.renderer.setAttribute(this.el.nativeElement, 'style', "--star-fill:" + (value || this.initialRate) + ";");
            }
            else {
                this.el.nativeElement.style.setProperty('--star-fill', value || this.initialRate);
            }
        }
    };
    /**
     * @param {?} rating
     * @return {?}
     */
    StarRatingComponent.prototype.saveRate = /**
     * @param {?} rating
     * @return {?}
     */
    function (rating) {
        if (this.disabled) {
            return;
        }
        this.initialRate = rating;
        this.setRate(rating);
        this.change.emit(rating);
    };
    StarRatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-star-rating',
                    template: "<cx-icon\n  *ngFor=\"let i of [1, 2, 3, 4, 5]\"\n  [type]=\"iconTypes.STAR\"\n  class=\"star\"\n  (mouseover)=\"setRate(i)\"\n  (mouseout)=\"setRate(0)\"\n  (click)=\"saveRate(i)\"\n></cx-icon>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StarRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    StarRatingComponent.propDecorators = {
        disabled: [{ type: Input }, { type: HostBinding, args: ['attr.disabled',] }],
        rating: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StarRatingComponent;
}());
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
var StarRatingModule = /** @class */ (function () {
    function StarRatingModule() {
    }
    StarRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, IconModule],
                    declarations: [StarRatingComponent],
                    exports: [StarRatingComponent],
                },] }
    ];
    return StarRatingModule;
}());

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
 * Utility class when working with forms.
 */
var  /**
 * Utility class when working with forms.
 */
FormUtils = /** @class */ (function () {
    function FormUtils() {
    }
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
    FormUtils.isNotValidField = /**
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
    function (form, formControlName, submitted) {
        /** @type {?} */
        var control = form.get(formControlName);
        return control.invalid && (submitted || (control.touched && control.dirty));
    };
    return FormUtils;
}());

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
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    PromotionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-promotions',
                    template: "<div class=\"cx-promotions\" *ngIf=\"promotions\">\n  <strong *ngFor=\"let promotion of promotions\">\n    <li>{{ promotion.description }}</li>\n  </strong>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PromotionsComponent.ctorParameters = function () { return []; };
    PromotionsComponent.propDecorators = {
        promotions: [{ type: Input }]
    };
    return PromotionsComponent;
}());
if (false) {
    /** @type {?} */
    PromotionsComponent.prototype.promotions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PromotionsModule = /** @class */ (function () {
    function PromotionsModule() {
    }
    PromotionsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PromotionsComponent],
                    exports: [PromotionsComponent],
                },] }
    ];
    return PromotionsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, fb) {
        this.cartService = cartService;
        this.fb = fb;
        this.isReadOnly = false;
        this.hasHeader = true;
        this.items = [];
        this.potentialProductPromotions = [];
        this.cartIsLoading = false;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    CartItemListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var code = item.product.code;
            if (!_this.form.controls[code]) {
                _this.form.setControl(code, _this.createEntryFormGroup(item));
            }
            else {
                /** @type {?} */
                var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                entryForm.controls.quantity.setValue(item.quantity);
            }
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CartItemListComponent.prototype.updateEntry = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var item = _a.item, updatedQuantity = _a.updatedQuantity;
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CartItemListComponent.prototype.getPotentialProductPromotionsForItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var entryPromotions = [];
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            try {
                for (var _c = __values(this.potentialProductPromotions), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var promotion = _d.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _e = (e_2 = void 0, __values(promotion.consumedEntries)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var consumedEntry = _f.value;
                                if (this.isConsumedByEntry(consumedEntry, item)) {
                                    entryPromotions.push(promotion);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return entryPromotions;
    };
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    CartItemListComponent.prototype.createEntryFormGroup = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    };
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    CartItemListComponent.prototype.isConsumedByEntry = /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    function (consumedEntry, entry) {
        var e_3, _a;
        /** @type {?} */
        var consumendEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = __values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    if (subEntry.entryNumber === consumendEntryNumber) {
                        return true;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        }
        else {
            return consumendEntryNumber === entry.entryNumber;
        }
    };
    CartItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-item-list',
                    template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div class=\"cx-item-list-row\" *ngFor=\"let item of items\">\n    <div class=\"cx-item-list-items\">\n      <cx-cart-item\n        [parent]=\"form.controls[item.product.code]\"\n        [item]=\"item\"\n        [potentialProductPromotions]=\"\n          getPotentialProductPromotionsForItem(item)\n        \"\n        [isReadOnly]=\"isReadOnly\"\n        (remove)=\"removeEntry($event)\"\n        [cartIsLoading]=\"cartIsLoading\"\n        (update)=\"updateEntry($event)\"\n      >\n      </cx-cart-item>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CartItemListComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: FormBuilder }
    ]; };
    CartItemListComponent.propDecorators = {
        isReadOnly: [{ type: Input }],
        hasHeader: [{ type: Input }],
        items: [{ type: Input }],
        potentialProductPromotions: [{ type: Input }],
        cartIsLoading: [{ type: Input }]
    };
    return CartItemListComponent;
}());
if (false) {
    /** @type {?} */
    CartItemListComponent.prototype.isReadOnly;
    /** @type {?} */
    CartItemListComponent.prototype.hasHeader;
    /** @type {?} */
    CartItemListComponent.prototype.items;
    /** @type {?} */
    CartItemListComponent.prototype.potentialProductPromotions;
    /** @type {?} */
    CartItemListComponent.prototype.cartIsLoading;
    /** @type {?} */
    CartItemListComponent.prototype.form;
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
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent() {
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
    CartItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} product
     * @return {?}
     */
    CartItemComponent.prototype.isProductOutOfStock = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    };
    /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    CartItemComponent.prototype.updateItem = /**
     * @param {?} updatedQuantity
     * @return {?}
     */
    function (updatedQuantity) {
        this.update.emit({ item: this.item, updatedQuantity: updatedQuantity });
    };
    /**
     * @return {?}
     */
    CartItemComponent.prototype.removeItem = /**
     * @return {?}
     */
    function () {
        this.remove.emit(this.item);
    };
    /**
     * @return {?}
     */
    CartItemComponent.prototype.viewItem = /**
     * @return {?}
     */
    function () {
        this.view.emit();
    };
    CartItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-item',
                    template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <div\n          *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n          class=\"cx-property\"\n        >\n          <div class=\"cx-label\">{{ variant.name }}</div>\n          <div class=\"cx-value\">{{ variant.value }}</div>\n        </div>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.item' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div\n        *ngIf=\"item.quantity\"\n        class=\"cx-quantity\"\n        [ngClass]=\"compact ? '' : ' col-3'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div *ngIf=\"isReadOnly\" class=\"cx-value\">{{ item.quantity }}</div>\n        <div\n          *ngIf=\"!isReadOnly && parent\"\n          class=\"cx-value\"\n          [formGroup]=\"parent\"\n        >\n          <cx-item-counter\n            [isValueChangeable]=\"item.updateable\"\n            [step]=\"1\"\n            [min]=\"1\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            (update)=\"updateItem($event)\"\n            [cartIsLoading]=\"cartIsLoading\"\n            formControlName=\"quantity\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <div\n        *ngIf=\"item.totalPrice\"\n        class=\"cx-total\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n      </div>\n    </div>\n    <!-- Availability -->\n    <div *ngIf=\"isProductOutOfStock(item)\" class=\"cx-availability col-12\">\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    <!-- Actions -->\n    <div *ngIf=\"!isReadOnly && item.updateable\" class=\"cx-actions col-12\">\n      <button\n        class=\"link\"\n        [class.disabled]=\"cartIsLoading\"\n        [disabled]=\"cartIsLoading\"\n        (click)=\"removeItem()\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
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
    return CartItemComponent;
}());
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
var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    OrderSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-summary',
                    template: "<h4>{{ 'orderCost.orderSummary' | cxTranslate }}</h4>\n\n<div class=\"cx-summary-partials\" *ngIf=\"cart\">\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.subtotal' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.subTotal?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.estimatedShipping' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{\n        cart.deliveryCost?.formattedValue\n          ? cart.deliveryCost.formattedValue\n          : 'TBD'\n      }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.net\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.salesTax' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row cx-summary-total\">\n    <div class=\"col-6 cx-summary-label\">\n      {{ 'orderCost.total' | cxTranslate }}\n    </div>\n    <div class=\"col-6 cx-summary-amount\">\n      {{ cart.totalPriceWithTax?.formattedValue }}\n    </div>\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"cart.totalDiscounts?.value > 0\">\n    {{ 'orderCost.discount' | cxTranslate }}\n    {{ cart.totalDiscounts?.formattedValue }}\n  </div>\n  <div class=\"cx-summary-row\" *ngIf=\"!cart.net\">\n    {{ 'orderCost.grossTax' | cxTranslate }}\n    {{ cart.totalTax?.formattedValue }}.\n  </div>\n</div>\n\n<!--\n<cx-promotions\n  *ngIf=\"cart\"\n  [promotions]=\"cart.appliedOrderPromotions\"\n></cx-promotions>\n-->\n"
                }] }
    ];
    OrderSummaryComponent.propDecorators = {
        cart: [{ type: Input }]
    };
    return OrderSummaryComponent;
}());
if (false) {
    /** @type {?} */
    OrderSummaryComponent.prototype.cart;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartSharedModule = /** @class */ (function () {
    function CartSharedModule() {
    }
    CartSharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ReactiveFormsModule,
                        UrlModule,
                        NgbModule,
                        PromotionsModule,
                        I18nModule,
                        MediaModule,
                        ItemCounterModule,
                    ],
                    declarations: [
                        CartItemComponent,
                        OrderSummaryComponent,
                        CartItemListComponent,
                    ],
                    exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
                },] }
    ];
    return CartSharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddToCartModule = /** @class */ (function () {
    function AddToCartModule() {
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
    return AddToCartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    CartDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) { return entries.length > 0; })));
        this.cartLoaded$ = this.cartService.getLoaded();
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartDetailsComponent.prototype.getAllPromotionsForCart = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        /** @type {?} */
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialOrderPromotions || [])));
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialProductPromotions || [])));
        /** @type {?} */
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedOrderPromotions || [])));
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedProductPromotions || [])));
        return __spread(potentialPromotions, appliedPromotions);
    };
    CartDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-details',
                    template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CartDetailsComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return CartDetailsComponent;
}());
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
var CartDetailsModule = /** @class */ (function () {
    function CartDetailsModule() {
    }
    CartDetailsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CartSharedModule,
                        CommonModule,
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
    return CartDetailsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartNotEmptyGuard = /** @class */ (function () {
    function CartNotEmptyGuard(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    CartNotEmptyGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cartService.getActive().pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) {
            if (_this.isEmpty(cart)) {
                _this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        })));
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    CartNotEmptyGuard.prototype.isEmpty = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return cart && !cart.totalItems;
    };
    CartNotEmptyGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartNotEmptyGuard.ctorParameters = function () { return [
        { type: CartService },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ CartNotEmptyGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(ɵɵinject(CartService), ɵɵinject(RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
    return CartNotEmptyGuard;
}());
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
var CartPageLayoutHandler = /** @class */ (function () {
    function CartPageLayoutHandler(cartService) {
        this.cartService = cartService;
    }
    /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    CartPageLayoutHandler.prototype.handle = /**
     * @param {?} slots$
     * @param {?=} pageTemplate
     * @param {?=} section
     * @return {?}
     */
    function (slots$, pageTemplate, section) {
        if (pageTemplate === 'CartPageTemplate' && !section) {
            return combineLatest([slots$, this.cartService.getActive()]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), slots = _b[0], cart = _b[1];
                if (cart.totalItems) {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    function (slot) { return slot !== 'EmptyCartMiddleContent'; }));
                }
                else {
                    return slots.filter((/**
                     * @param {?} slot
                     * @return {?}
                     */
                    function (slot) { return slot !== 'TopContent' && slot !== 'CenterRightContentSlot'; }));
                }
            })));
        }
        return slots$;
    };
    CartPageLayoutHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartPageLayoutHandler.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return CartPageLayoutHandler;
}());
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
var CartTotalsComponent = /** @class */ (function () {
    function CartTotalsComponent(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    CartTotalsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) { return entries.length > 0; })));
    };
    CartTotalsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-totals',
                    template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <cx-order-summary [cart]=\"cart\"></cx-order-summary>\n    <button\n      [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n      *ngIf=\"entries.length\"\n      class=\"btn btn-primary btn-block\"\n      type=\"button\"\n    >\n      {{ 'cartDetails.proceedToCheckout' | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CartTotalsComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return CartTotalsComponent;
}());
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
var CartTotalsModule = /** @class */ (function () {
    function CartTotalsModule() {
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
                    ],
                    declarations: [CartTotalsComponent],
                    exports: [CartTotalsComponent],
                    entryComponents: [CartTotalsComponent],
                },] }
    ];
    return CartTotalsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGE_LAYOUT_HANDLER = new InjectionToken('PageLayoutHandler');
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
var MiniCartComponent = /** @class */ (function () {
    function MiniCartComponent(cartService) {
        this.cartService = cartService;
        this.iconTypes = ICON_TYPE;
        this.quantity$ = this.cartService.getActive().pipe(startWith({ deliveryItemsQuantity: 0 }), map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return cart.deliveryItemsQuantity || 0; })));
        this.total$ = this.cartService.getActive().pipe(filter((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return !!cart.totalPrice; })), map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return cart.totalPrice.formattedValue; })));
    }
    MiniCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-mini-cart',
                    template: "<a\n  [attr.aria-label]=\"\n    'miniCart.item' | cxTranslate: { count: quantity$ | async }\n  \"\n  [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n>\n  <cx-icon [type]=\"iconTypes.CART\"></cx-icon>\n\n  <span class=\"total\">{{ total$ | async }}</span>\n  <span class=\"count\">{{ quantity$ | async }}</span>\n</a>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MiniCartComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return MiniCartComponent;
}());
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
var MiniCartModule = /** @class */ (function () {
    function MiniCartModule() {
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
    return MiniCartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CartComponentModule = /** @class */ (function () {
    function CartComponentModule() {
    }
    CartComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgbModule, CartDetailsModule, CartTotalsModule, CartSharedModule],
                    exports: [
                        CartDetailsModule,
                        CartTotalsModule,
                        CartSharedModule,
                        AddToCartModule,
                        MiniCartModule,
                        CartModule,
                    ],
                    providers: [
                        {
                            provide: PAGE_LAYOUT_HANDLER,
                            useClass: CartPageLayoutHandler,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return CartComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DeliveryModePreferences = {
    FREE: 'FREE',
    LEAST_EXPENSIVE: 'LEAST_EXPENSIVE',
    MOST_EXPENSIVE: 'MOST_EXPENSIVE',
};
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CheckoutConfig = /** @class */ (function () {
    function CheckoutConfig() {
    }
    return CheckoutConfig;
}());
if (false) {
    /** @type {?} */
    CheckoutConfig.prototype.checkout;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CheckoutStepType = {
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
var defaultCheckoutConfig = {
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
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutAuthGuard = /** @class */ (function () {
    function CheckoutAuthGuard(routingService, authService, authRedirectService, cartService, featureConfigService) {
        this.routingService = routingService;
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.cartService = cartService;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutAuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return combineLatest([
            this.authService.getUserToken(),
            this.cartService.getAssignedUser(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), token = _b[0], user = _b[1];
            if (!token.access_token) {
                if (_this.cartService.isGuestCart()) {
                    return Boolean(user);
                }
                if (_this.featureConfigService.isEnabled('guestCheckout')) {
                    _this.routingService.go({ cxRoute: 'login' }, { forced: true });
                }
                else {
                    _this.routingService.go({ cxRoute: 'login' });
                }
                _this.authRedirectService.reportAuthGuard();
            }
            return !!token.access_token;
        })));
    };
    CheckoutAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: AuthRedirectService },
        { type: CartService },
        { type: FeatureConfigService }
    ]; };
    /** @nocollapse */ CheckoutAuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutAuthGuard_Factory() { return new CheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CartService), ɵɵinject(FeatureConfigService)); }, token: CheckoutAuthGuard, providedIn: "root" });
    return CheckoutAuthGuard;
}());
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
    CheckoutAuthGuard.prototype.featureConfigService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutConfigService = /** @class */ (function () {
    function CheckoutConfigService(checkoutConfig, routingConfigService) {
        this.checkoutConfig = checkoutConfig;
        this.routingConfigService = routingConfigService;
        this.steps = this.checkoutConfig.checkout.steps;
        this.express = this.checkoutConfig.checkout.express;
        this.defaultDeliveryMode = this.checkoutConfig.checkout.defaultDeliveryMode || [];
    }
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    CheckoutConfigService.prototype.getCheckoutStep = /**
     * @param {?} currentStepType
     * @return {?}
     */
    function (currentStepType) {
        return this.steps[this.getCheckoutStepIndex('type', currentStepType)];
    };
    /**
     * @param {?} currentStepType
     * @return {?}
     */
    CheckoutConfigService.prototype.getCheckoutStepRoute = /**
     * @param {?} currentStepType
     * @return {?}
     */
    function (currentStepType) {
        return this.getCheckoutStep(currentStepType).routeName;
    };
    /**
     * @return {?}
     */
    CheckoutConfigService.prototype.getFirstCheckoutStepRoute = /**
     * @return {?}
     */
    function () {
        return this.steps[0].routeName;
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getNextCheckoutStepUrl = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        /** @type {?} */
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex + 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex + 1].routeName)
            : null;
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getPreviousCheckoutStepUrl = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        /** @type {?} */
        var stepIndex = this.getCurrentStepIndex(activatedRoute);
        return stepIndex >= 0 && this.steps[stepIndex - 1]
            ? this.getStepUrlFromStepRoute(this.steps[stepIndex - 1].routeName)
            : null;
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getCurrentStepIndex = /**
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        var e_1, _a;
        /** @type {?} */
        var currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
        /** @type {?} */
        var stepIndex;
        /** @type {?} */
        var index = 0;
        try {
            for (var _b = __values(this.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var step = _c.value;
                if (currentStepUrl === "/" + this.getStepUrlFromStepRoute(step.routeName)) {
                    stepIndex = index;
                }
                else {
                    index++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return stepIndex >= 0 ? stepIndex : null;
    };
    /**
     * @protected
     * @param {?} deliveryMode1
     * @param {?} deliveryMode2
     * @return {?}
     */
    CheckoutConfigService.prototype.compareDeliveryCost = /**
     * @protected
     * @param {?} deliveryMode1
     * @param {?} deliveryMode2
     * @return {?}
     */
    function (deliveryMode1, deliveryMode2) {
        if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
            return 1;
        }
        else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
            return -1;
        }
        return 0;
    };
    /**
     * @protected
     * @param {?} deliveryModes
     * @param {?=} index
     * @return {?}
     */
    CheckoutConfigService.prototype.findMatchingDeliveryMode = /**
     * @protected
     * @param {?} deliveryModes
     * @param {?=} index
     * @return {?}
     */
    function (deliveryModes, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        switch (this.defaultDeliveryMode[index]) {
            case DeliveryModePreferences.FREE:
                if (deliveryModes[0].deliveryCost.value === 0) {
                    return deliveryModes[0].code;
                }
                break;
            case DeliveryModePreferences.LEAST_EXPENSIVE:
                /** @type {?} */
                var leastExpensiveFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                function (deliveryMode) { return deliveryMode.deliveryCost.value !== 0; }));
                if (leastExpensiveFound) {
                    return leastExpensiveFound.code;
                }
                break;
            case DeliveryModePreferences.MOST_EXPENSIVE:
                return deliveryModes[deliveryModes.length - 1].code;
            default:
                /** @type {?} */
                var codeFound = deliveryModes.find((/**
                 * @param {?} deliveryMode
                 * @return {?}
                 */
                function (deliveryMode) { return deliveryMode.code === _this.defaultDeliveryMode[index]; }));
                if (codeFound) {
                    return codeFound.code;
                }
        }
        /** @type {?} */
        var lastMode = this.defaultDeliveryMode.length - 1 <= index;
        return lastMode
            ? deliveryModes[0].code
            : this.findMatchingDeliveryMode(deliveryModes, index + 1);
    };
    /**
     * @param {?} deliveryModes
     * @return {?}
     */
    CheckoutConfigService.prototype.getPreferredDeliveryMode = /**
     * @param {?} deliveryModes
     * @return {?}
     */
    function (deliveryModes) {
        deliveryModes.sort(this.compareDeliveryCost);
        return this.findMatchingDeliveryMode(deliveryModes);
    };
    /**
     * @return {?}
     */
    CheckoutConfigService.prototype.isExpressCheckout = /**
     * @return {?}
     */
    function () {
        return this.express;
    };
    /**
     * @private
     * @param {?} activatedRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getStepUrlFromActivatedRoute = /**
     * @private
     * @param {?} activatedRoute
     * @return {?}
     */
    function (activatedRoute) {
        return activatedRoute &&
            activatedRoute.snapshot &&
            activatedRoute.snapshot.url
            ? "/" + activatedRoute.snapshot.url.join('/')
            : null;
    };
    /**
     * @private
     * @param {?} stepRoute
     * @return {?}
     */
    CheckoutConfigService.prototype.getStepUrlFromStepRoute = /**
     * @private
     * @param {?} stepRoute
     * @return {?}
     */
    function (stepRoute) {
        return this.routingConfigService.getRouteConfig(stepRoute).paths[0];
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CheckoutConfigService.prototype.getCheckoutStepIndex = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return key && value
            ? this.steps.findIndex((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step[key].includes(value); }))
            : null;
    };
    CheckoutConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutConfigService.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingConfigService }
    ]; };
    /** @nocollapse */ CheckoutConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutConfigService_Factory() { return new CheckoutConfigService(ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService)); }, token: CheckoutConfigService, providedIn: "root" });
    return CheckoutConfigService;
}());
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
var CheckoutDetailsService = /** @class */ (function () {
    function CheckoutDetailsService(checkoutService, checkoutDeliveryService, checkoutPaymentService, cartService) {
        var _this = this;
        this.checkoutService = checkoutService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutPaymentService = checkoutPaymentService;
        this.cartService = cartService;
        this.cartId$ = this.cartService.getActive().pipe(map((/**
         * @param {?} cartData
         * @return {?}
         */
        function (cartData) {
            if ((cartData.user && cartData.user.uid === OCC_USER_ID_ANONYMOUS) ||
                _this.cartService.isGuestCart()) {
                return cartData.guid;
            }
            return cartData.code;
        })), filter((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return !!cartId; })));
        this.getCheckoutDetailsLoaded$ = this.cartId$.pipe(tap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.checkoutService.loadCheckoutDetails(cartId); })), shareReplay(1), switchMap((/**
         * @return {?}
         */
        function () { return _this.checkoutService.getCheckoutDetailsLoaded(); })), skipWhile((/**
         * @param {?} loaded
         * @return {?}
         */
        function (loaded) { return !loaded; })));
    }
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getDeliveryAddress = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.checkoutDeliveryService.getDeliveryAddress(); })));
    };
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getSelectedDeliveryModeCode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () {
            return _this.checkoutDeliveryService.getSelectedDeliveryModeCode();
        })));
    };
    /**
     * @return {?}
     */
    CheckoutDetailsService.prototype.getPaymentDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getCheckoutDetailsLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.checkoutPaymentService.getPaymentDetails(); })));
    };
    CheckoutDetailsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDetailsService.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CartService }
    ]; };
    /** @nocollapse */ CheckoutDetailsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutDetailsService_Factory() { return new CheckoutDetailsService(ɵɵinject(CheckoutService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CartService)); }, token: CheckoutDetailsService, providedIn: "root" });
    return CheckoutDetailsService;
}());
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
var ExpressCheckoutService = /** @class */ (function () {
    function ExpressCheckoutService(userAddressService, userPaymentService, checkoutDeliveryService, checkoutPaymentService, checkoutDetailsService, checkoutConfigService) {
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
    ExpressCheckoutService.prototype.setShippingAddress = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.shippingAddressSet$ = combineLatest([
            this.userAddressService.getAddresses(),
            this.userAddressService.getAddressesLoadedSuccess(),
            this.checkoutDeliveryService.getSetDeliveryAddressProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), addressesLoadedSuccess = _b[1];
            if (!addressesLoadedSuccess) {
                _this.userAddressService.loadAddresses();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), addressesLoadedSuccess = _b[1];
            return addressesLoadedSuccess;
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), addresses = _b[0], setDeliveryAddressProcess = _b[2];
            /** @type {?} */
            var defaultAddress = addresses.find((/**
             * @param {?} address
             * @return {?}
             */
            function (address) { return address.defaultAddress; })) || addresses[0];
            if (defaultAddress && Object.keys(defaultAddress).length) {
                if (!(setDeliveryAddressProcess.success ||
                    setDeliveryAddressProcess.error ||
                    setDeliveryAddressProcess.loading)) {
                    _this.checkoutDeliveryService.setDeliveryAddress(defaultAddress);
                }
                return of(setDeliveryAddressProcess).pipe(filter((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                function (setDeliveryAddressProcessState) {
                    return ((setDeliveryAddressProcessState.success ||
                        setDeliveryAddressProcessState.error) &&
                        !setDeliveryAddressProcessState.loading);
                })), switchMap((/**
                 * @param {?} setDeliveryAddressProcessState
                 * @return {?}
                 */
                function (setDeliveryAddressProcessState) {
                    if (setDeliveryAddressProcessState.success) {
                        return _this.checkoutDetailsService.getDeliveryAddress();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return Boolean(data && Object.keys(data).length); })));
            }
            return of(false);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.setPaymentMethod = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.paymentMethodSet$ = combineLatest([
            this.userPaymentService.getPaymentMethods(),
            this.userPaymentService.getPaymentMethodsLoadedSuccess(),
            this.checkoutPaymentService.getSetPaymentDetailsResultProcess(),
        ]).pipe(debounceTime(0), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), paymentMethodsLoadedSuccess = _b[1];
            if (!paymentMethodsLoadedSuccess) {
                _this.userPaymentService.loadPaymentMethods();
            }
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), success = _b[1];
            return success;
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), payments = _b[0], setPaymentDetailsProcess = _b[2];
            /** @type {?} */
            var defaultPayment = payments.find((/**
             * @param {?} address
             * @return {?}
             */
            function (address) { return address.defaultPayment; })) || payments[0];
            if (defaultPayment && Object.keys(defaultPayment).length) {
                if (!(setPaymentDetailsProcess.success ||
                    setPaymentDetailsProcess.error ||
                    setPaymentDetailsProcess.loading)) {
                    _this.checkoutPaymentService.setPaymentDetails(defaultPayment);
                }
                return of(setPaymentDetailsProcess).pipe(filter((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                function (setPaymentDetailsProcessState) {
                    return ((setPaymentDetailsProcessState.success ||
                        setPaymentDetailsProcessState.error) &&
                        !setPaymentDetailsProcessState.loading);
                })), switchMap((/**
                 * @param {?} setPaymentDetailsProcessState
                 * @return {?}
                 */
                function (setPaymentDetailsProcessState) {
                    if (setPaymentDetailsProcessState.success) {
                        return _this.checkoutDetailsService.getPaymentDetails();
                    }
                    return of(false);
                })), map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return Boolean(data && Object.keys(data).length); })));
            }
            return of(false);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.setDeliveryMode = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.deliveryModeSet$ = combineLatest([
            this.shippingAddressSet$,
            this.checkoutDeliveryService.getSupportedDeliveryModes(),
            this.checkoutDeliveryService.getSetDeliveryModeProcess(),
            this.checkoutDeliveryService.getLoadSupportedDeliveryModeProcess(),
        ]).pipe(debounceTime(0), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 4), addressSet = _b[0], supportedDeliveryModes = _b[1], setDeliveryModeStatusFlag = _b[2], loadSupportedDeliveryModeStatus = _b[3];
            if (addressSet) {
                return of([
                    supportedDeliveryModes,
                    setDeliveryModeStatusFlag,
                    loadSupportedDeliveryModeStatus,
                ]).pipe(filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 3), supportedDeliveryModeStatus = _b[2];
                    return supportedDeliveryModeStatus.success;
                })), switchMap((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 3), deliveryModes = _b[0], setDeliveryModeStatus = _b[1];
                    if (Boolean(deliveryModes.length)) {
                        /** @type {?} */
                        var preferredDeliveryMode = _this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
                        return of([
                            preferredDeliveryMode,
                            setDeliveryModeStatus,
                        ]).pipe(tap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = __read(_a, 2), deliveryMode = _b[0], deliveryModeLoadingStatus = _b[1];
                            if (deliveryMode &&
                                !(deliveryModeLoadingStatus.success ||
                                    deliveryModeLoadingStatus.error ||
                                    deliveryModeLoadingStatus.loading)) {
                                _this.checkoutDeliveryService.setDeliveryMode(deliveryMode);
                            }
                        })), filter((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = __read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            return ((deliveryModeLoadingStatus.success ||
                                deliveryModeLoadingStatus.error) &&
                                !deliveryModeLoadingStatus.loading);
                        })), switchMap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = __read(_a, 2), deliveryModeLoadingStatus = _b[1];
                            if (deliveryModeLoadingStatus.success) {
                                return _this.checkoutDetailsService.getSelectedDeliveryModeCode();
                            }
                            return of(false);
                        })), map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) { return Boolean(data); })));
                    }
                    return of(false);
                })));
            }
            else {
                return of(false);
            }
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    ExpressCheckoutService.prototype.resetCheckoutProcesses = /**
     * @protected
     * @return {?}
     */
    function () {
        this.checkoutDeliveryService.resetSetDeliveryAddressProcess();
        this.checkoutPaymentService.resetSetPaymentDetailsProcess();
        this.checkoutDeliveryService.resetSetDeliveryModeProcess();
    };
    /**
     * @return {?}
     */
    ExpressCheckoutService.prototype.trySetDefaultCheckoutDetails = /**
     * @return {?}
     */
    function () {
        this.resetCheckoutProcesses();
        return combineLatest([this.deliveryModeSet$, this.paymentMethodSet$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), deliveryModeSet = _b[0], paymentMethodSet = _b[1];
            return Boolean(deliveryModeSet && paymentMethodSet);
        })));
    };
    ExpressCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ExpressCheckoutService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: UserPaymentService },
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService }
    ]; };
    /** @nocollapse */ ExpressCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ExpressCheckoutService_Factory() { return new ExpressCheckoutService(ɵɵinject(UserAddressService), ɵɵinject(UserPaymentService), ɵɵinject(CheckoutDeliveryService), ɵɵinject(CheckoutPaymentService), ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService)); }, token: ExpressCheckoutService, providedIn: "root" });
    return ExpressCheckoutService;
}());
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
var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, config, routingConfigService, checkoutConfigService, expressCheckoutService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
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
    CheckoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService && this.expressCheckoutService) {
            if (this.checkoutConfigService.isExpressCheckout()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((/**
                 * @param {?} expressCheckoutPossible
                 * @return {?}
                 */
                function (expressCheckoutPossible) {
                    return expressCheckoutPossible
                        ? of(_this.router.parseUrl(_this.routingConfigService.getRouteConfig(_this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : _this.firstStep$;
                })));
            }
        }
        return this.firstStep$;
    };
    CheckoutGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutGuard.ctorParameters = function () { return [
        { type: Router },
        { type: CheckoutConfig },
        { type: RoutingConfigService },
        { type: CheckoutConfigService },
        { type: ExpressCheckoutService }
    ]; };
    /** @nocollapse */ CheckoutGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(ɵɵinject(Router), ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutConfigService), ɵɵinject(ExpressCheckoutService)); }, token: CheckoutGuard, providedIn: "root" });
    return CheckoutGuard;
}());
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutOrchestratorComponent = /** @class */ (function () {
    function CheckoutOrchestratorComponent() {
    }
    CheckoutOrchestratorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-orchestrator',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CheckoutOrchestratorComponent.ctorParameters = function () { return []; };
    return CheckoutOrchestratorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutOrchestratorModule = /** @class */ (function () {
    function CheckoutOrchestratorModule() {
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
    return CheckoutOrchestratorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutOrderSummaryComponent = /** @class */ (function () {
    function CheckoutOrderSummaryComponent(cartService) {
        this.cartService = cartService;
        this.cart$ = this.cartService.getActive();
    }
    CheckoutOrderSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-order-summary',
                    template: "<cx-order-summary [cart]=\"cart$ | async\"></cx-order-summary>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CheckoutOrderSummaryComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return CheckoutOrderSummaryComponent;
}());
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
var CheckoutOrderSummaryModule = /** @class */ (function () {
    function CheckoutOrderSummaryModule() {
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
    return CheckoutOrderSummaryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutProgressMobileBottomComponent = /** @class */ (function () {
    function CheckoutProgressMobileBottomComponent(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutProgressMobileBottomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                /** @type {?} */
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            }));
        })));
    };
    CheckoutProgressMobileBottomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-progress-mobile-bottom',
                    template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-media\">\n    <div *ngFor=\"let step of steps; let i = index\">\n      <div class=\"cx-list-media\" *ngIf=\"i > activeStepIndex\">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CheckoutProgressMobileBottomComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: RoutingConfigService }
    ]; };
    return CheckoutProgressMobileBottomComponent;
}());
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
var CheckoutProgressMobileBottomModule = /** @class */ (function () {
    function CheckoutProgressMobileBottomModule() {
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
    return CheckoutProgressMobileBottomModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutProgressMobileTopComponent = /** @class */ (function () {
    function CheckoutProgressMobileTopComponent(config, routingService, cartService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.cartService = cartService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutProgressMobileTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.cart$ = this.cartService.getActive();
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                /** @type {?} */
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            }));
        })));
    };
    CheckoutProgressMobileTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-progress-mobile-top',
                    template: "<div *ngIf=\"routerState$ | async as routerState\">\n  <div *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-media\">\n      <div class=\"cx-list-media\" *ngIf=\"cart?.totalItems && cart?.subTotal\">\n        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:\n        {{ cart.subTotal.formattedValue }}\n      </div>\n      <div *ngFor=\"let step of steps; let i = index\">\n        <div class=\"cx-list-media\" *ngIf=\"i < activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n          <button\n            class=\"btn btn-link\"\n            [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          >\n            {{ 'common.edit' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"cx-list-media is-active\" *ngIf=\"i === activeStepIndex\">\n          <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CheckoutProgressMobileTopComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: CartService },
        { type: RoutingConfigService }
    ]; };
    return CheckoutProgressMobileTopComponent;
}());
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
var CheckoutProgressMobileTopModule = /** @class */ (function () {
    function CheckoutProgressMobileTopModule() {
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
    return CheckoutProgressMobileTopModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutProgressComponent = /** @class */ (function () {
    function CheckoutProgressComponent(config, routingService, routingConfigService) {
        this.config = config;
        this.routingService = routingService;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps = this.config.checkout.steps;
        this.routerState$ = this.routingService.getRouterState().pipe(tap((/**
         * @param {?} router
         * @return {?}
         */
        function (router) {
            _this.activeStepUrl = router.state.context.id;
            _this.steps.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                /** @type {?} */
                var routeUrl = "/" + _this.routingConfigService.getRouteConfig(step.routeName).paths[0];
                if (routeUrl === _this.activeStepUrl) {
                    _this.activeStepIndex = index;
                }
            }));
        })));
    };
    CheckoutProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-progress',
                    template: "<section *ngIf=\"routerState$ | async as routerState\">\n  <div class=\"cx-nav d-none d-lg-block d-xl-block\">\n    <ul class=\"cx-list\">\n      <li class=\"cx-item\" *ngFor=\"let step of steps; let i = index\">\n        <a\n          [routerLink]=\"{ cxRoute: step.routeName } | cxUrl\"\n          class=\"cx-link\"\n          [ngClass]=\"{\n            ' is-active': i === activeStepIndex,\n            ' is-disabled': i > activeStepIndex\n          }\"\n        >\n          {{ i + 1 }}. {{ step.name | cxTranslate }}\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CheckoutProgressComponent.ctorParameters = function () { return [
        { type: CheckoutConfig },
        { type: RoutingService },
        { type: RoutingConfigService }
    ]; };
    return CheckoutProgressComponent;
}());
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
var CheckoutProgressModule = /** @class */ (function () {
    function CheckoutProgressModule() {
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
    return CheckoutProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShippingAddressSetGuard = /** @class */ (function () {
    function ShippingAddressSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    ShippingAddressSetGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.SHIPPING_ADDRESS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.SHIPPING_ADDRESS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getDeliveryAddress()
            .pipe(map((/**
         * @param {?} deliveryAddress
         * @return {?}
         */
        function (deliveryAddress) {
            return deliveryAddress && Object.keys(deliveryAddress).length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        })));
    };
    ShippingAddressSetGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ShippingAddressSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    /** @nocollapse */ ShippingAddressSetGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function ShippingAddressSetGuard_Factory() { return new ShippingAddressSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: ShippingAddressSetGuard, providedIn: "root" });
    return ShippingAddressSetGuard;
}());
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
var DeliveryModeComponent = /** @class */ (function () {
    function DeliveryModeComponent(fb, checkoutDeliveryService, routingService, checkoutConfigService, activatedRoute) {
        this.fb = fb;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.routingService = routingService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.mode = this.fb.group({
            deliveryModeId: ['', Validators.required],
        });
    }
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = this.checkoutConfigService.getPreviousCheckoutStepUrl(this.activatedRoute);
        this.supportedDeliveryModes$ = this.checkoutDeliveryService.getSupportedDeliveryModes();
        this.deliveryModeSub = this.checkoutDeliveryService
            .getSelectedDeliveryMode()
            .pipe(map((/**
         * @param {?} deliveryMode
         * @return {?}
         */
        function (deliveryMode) {
            return deliveryMode && deliveryMode.code ? deliveryMode.code : null;
        })))
            .subscribe((/**
         * @param {?} code
         * @return {?}
         */
        function (code) {
            if (!!code && code === _this.currentDeliveryModeId) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
            _this.currentDeliveryModeId = code;
            if (code) {
                _this.mode.controls['deliveryModeId'].setValue(code);
            }
        }));
    };
    /**
     * @param {?} code
     * @return {?}
     */
    DeliveryModeComponent.prototype.changeMode = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        if (code !== this.currentDeliveryModeId) {
            this.currentDeliveryModeId = code;
        }
    };
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.mode.valid && this.mode.value) {
            if (!this.currentDeliveryModeId) {
                this.currentDeliveryModeId = this.mode.value.deliveryModeId;
            }
            this.checkoutDeliveryService.setDeliveryMode(this.currentDeliveryModeId);
        }
        this.routingService.go(this.checkoutStepUrlNext);
    };
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    Object.defineProperty(DeliveryModeComponent.prototype, "deliveryModeInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode.controls['deliveryModeId'].invalid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DeliveryModeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.deliveryModeSub) {
            this.deliveryModeSub.unsubscribe();
        }
    };
    DeliveryModeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-delivery-mode',
                    template: "<div [formGroup]=\"mode\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n        {{ 'checkoutShipping.shippingMethod' | cxTranslate }}\n      </h3>\n\n      <ng-container\n        *ngIf=\"(supportedDeliveryModes$ | async)?.length; else loading\"\n      >\n        <div\n          class=\"form-check\"\n          *ngFor=\"let mode of supportedDeliveryModes$ | async\"\n        >\n          <input\n            class=\"form-check-input\"\n            role=\"radio\"\n            type=\"radio\"\n            id=\"deliveryMode-{{ mode.code }}\"\n            aria-checked=\"true\"\n            (change)=\"changeMode(mode.code)\"\n            [value]=\"mode.code\"\n            formControlName=\"deliveryModeId\"\n          />\n          <label\n            class=\"cx-delivery-label form-check-label\n                form-radio-label\"\n            for=\"deliveryMode-{{ mode.code }}\"\n          >\n            <div class=\"cx-delivery-mode\">{{ mode.name }}</div>\n            <div class=\"cx-delivery-price\">\n              {{ mode.deliveryCost.formattedValue }}\n            </div>\n            <div class=\"cx-delivery-details\">{{ mode.description }}</div>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <div class=\"row cx-checkout-btns\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"deliveryModeInvalid\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DeliveryModeComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutDeliveryService },
        { type: RoutingService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute }
    ]; };
    return DeliveryModeComponent;
}());
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
var DeliveryModeModule = /** @class */ (function () {
    function DeliveryModeModule() {
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
    return DeliveryModeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeliveryModeSetGuard = /** @class */ (function () {
    function DeliveryModeSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    DeliveryModeSetGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.DELIVERY_MODE + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getSelectedDeliveryModeCode()
            .pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            return mode && mode.length
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        })));
    };
    DeliveryModeSetGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DeliveryModeSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    /** @nocollapse */ DeliveryModeSetGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DeliveryModeSetGuard_Factory() { return new DeliveryModeSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: DeliveryModeSetGuard, providedIn: "root" });
    return DeliveryModeSetGuard;
}());
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
var BillingAddressFormComponent = /** @class */ (function () {
    function BillingAddressFormComponent(userAddressService) {
        this.userAddressService = userAddressService;
        this.selectedCountry$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    BillingAddressFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return _this.userAddressService.getRegions(country); })), tap((/**
         * @param {?} regions
         * @return {?}
         */
        function (regions) {
            /** @type {?} */
            var regionControl = _this.billingAddress.get('region.isocodeShort');
            if (regions.length > 0) {
                regionControl.enable();
            }
            else {
                regionControl.disable();
            }
        })));
    };
    /**
     * @param {?} country
     * @return {?}
     */
    BillingAddressFormComponent.prototype.countrySelected = /**
     * @param {?} country
     * @return {?}
     */
    function (country) {
        this.billingAddress['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    };
    /**
     * @param {?} region
     * @return {?}
     */
    BillingAddressFormComponent.prototype.regionSelected = /**
     * @param {?} region
     * @return {?}
     */
    function (region) {
        this.billingAddress['controls'].region['controls'].isocodeShort.setValue(region.isocodeShort);
    };
    BillingAddressFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-billing-address-form',
                    template: "<div [formGroup]=\"billingAddress\">\n  <div class=\"form-group\">\n    <ng-container *ngIf=\"countries$ | async as countries\">\n      <div *ngIf=\"countries.length !== 0\">\n        <label aria-required=\"true\">\n          <span class=\"label-content required\">{{\n            'addressForm.country' | cxTranslate\n          }}</span>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"countries\"\n            bindLabel=\"name\"\n            bindValue=\"isocode\"\n            placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n            (change)=\"countrySelected($event)\"\n          >\n          </ng-select>\n        </label>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.firstName.label' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'addressForm.firstName.placeholder' | cxTranslate }}\"\n        formControlName=\"firstName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.lastName.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n        formControlName=\"lastName\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content required\">{{\n        'addressForm.address1' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n        formControlName=\"line1\"\n      />\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'addressForm.address2' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n        formControlName=\"line2\"\n      />\n    </label>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.city.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n          formControlName=\"town\"\n        />\n      </label>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <ng-container *ngIf=\"regions$ | async as regions\" formGroupName=\"region\">\n        <div *ngIf=\"regions.length !== 0\">\n          <label aria-required=\"true\">\n            <span class=\"label-content required\">{{\n              'addressForm.state' | cxTranslate\n            }}</span>\n            <ng-select\n              class=\"region-select\"\n              formControlName=\"isocodeShort\"\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"regions\"\n              bindLabel=\"{{ regions[0].name ? 'name' : 'isocodeShort' }}\"\n              bindValue=\"{{ regions[0].name ? 'isocodeShort' : 'region' }}\"\n              placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n              (change)=\"regionSelected($event)\"\n            >\n            </ng-select>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>\n        <span class=\"label-content required\">{{\n          'addressForm.zipCode.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          required\n          placeholder=\"{{ 'addressForm.zipCode.placeholder' | cxTranslate }}\"\n          formControlName=\"postalCode\"\n        />\n      </label>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BillingAddressFormComponent.ctorParameters = function () { return [
        { type: UserAddressService }
    ]; };
    BillingAddressFormComponent.propDecorators = {
        billingAddress: [{ type: Input }],
        countries$: [{ type: Input }]
    };
    return BillingAddressFormComponent;
}());
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
var BillingAddressFormModule = /** @class */ (function () {
    function BillingAddressFormModule() {
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
    return BillingAddressFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SuggestedAddressDialogComponent = /** @class */ (function () {
    function SuggestedAddressDialogComponent(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    SuggestedAddressDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    SuggestedAddressDialogComponent.prototype.closeModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.closeActiveModal(reason);
    };
    SuggestedAddressDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-suggested-addresses-dialog',
                    template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SuggestedAddressDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    SuggestedAddressDialogComponent.propDecorators = {
        suggestedAddresses: [{ type: Input }],
        enteredAddress: [{ type: Input }]
    };
    return SuggestedAddressDialogComponent;
}());
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
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(checkoutPaymentService, checkoutDeliveryService, userPaymentService, globalMessageService, fb, modalService) {
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
    PaymentFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.expMonthAndYear();
        this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        function (countries) {
            // If the store is empty fetch countries. This is also used when changing language.
            if (Object.keys(countries).length === 0) {
                _this.userPaymentService.loadBillingCountries();
            }
        })));
        this.cardTypes$ = this.checkoutPaymentService.getCardTypes().pipe(tap((/**
         * @param {?} cardTypes
         * @return {?}
         */
        function (cardTypes) {
            if (Object.keys(cardTypes).length === 0) {
                _this.checkoutPaymentService.loadSupportedCardTypes();
            }
        })));
        this.shippingAddress$ = this.checkoutDeliveryService.getDeliveryAddress();
        this.checkboxSub = this.showSameAsShippingAddressCheckbox().subscribe((/**
         * @param {?} shouldShowCheckbox
         * @return {?}
         */
        function (shouldShowCheckbox) {
            // this operation makes sure the checkbox is not checked if not shown and vice versa
            _this.sameAsShippingAddress = shouldShowCheckbox;
        }));
        // verify the new added address
        this.addressVerifySub = this.checkoutDeliveryService
            .getAddressVerificationResults()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (results === 'FAIL') {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.next();
            }
            else if (results.decision === 'REJECT') {
                _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        }));
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.expMonthAndYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var year = new Date().getFullYear();
        for (var i = 0; i < 10; i++) {
            this.years.push({ id: i + 1, name: year + i });
        }
        for (var j = 1; j <= 12; j++) {
            if (j < 10) {
                this.months.push({ id: j, name: '0' + j.toString() });
            }
            else {
                this.months.push({ id: j, name: j.toString() });
            }
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.toggleDefaultPaymentMethod = /**
     * @return {?}
     */
    function () {
        this.payment.value.defaultPayment = !this.payment.value.defaultPayment;
    };
    /**
     * @param {?} card
     * @return {?}
     */
    PaymentFormComponent.prototype.paymentSelected = /**
     * @param {?} card
     * @return {?}
     */
    function (card) {
        this.payment['controls'].cardType['controls'].code.setValue(card.code);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    PaymentFormComponent.prototype.monthSelected = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.payment['controls'].expiryMonth.setValue(month.name);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    PaymentFormComponent.prototype.yearSelected = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.payment['controls'].expiryYear.setValue(year.name);
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.toggleSameAsShippingAddress = /**
     * @return {?}
     */
    function () {
        this.sameAsShippingAddress = !this.sameAsShippingAddress;
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.isContinueButtonDisabled = /**
     * @return {?}
     */
    function () {
        return (this.payment.invalid ||
            (!this.sameAsShippingAddress && this.billingAddress.invalid));
    };
    /**
     * Check if the shipping address can also be a billing address
     *
     * @memberof PaymentFormComponent
     */
    /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    PaymentFormComponent.prototype.showSameAsShippingAddressCheckbox = /**
     * Check if the shipping address can also be a billing address
     *
     * \@memberof PaymentFormComponent
     * @return {?}
     */
    function () {
        return combineLatest([this.countries$, this.shippingAddress$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), countries = _b[0], address = _b[1];
            return !!countries.filter((/**
             * @param {?} country
             * @return {?}
             */
            function (country) {
                return country.isocode === address.country.isocode;
            })).length;
        })));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    PaymentFormComponent.prototype.getAddressCardContent = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        /** @type {?} */
        var region = '';
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
    };
    /**
     * @param {?} results
     * @return {?}
     */
    PaymentFormComponent.prototype.openSuggestedAddress = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        var _this = this;
        if (!this.suggestedAddressModalRef) {
            this.suggestedAddressModalRef = this.modalService.open(SuggestedAddressDialogComponent, { centered: true, size: 'lg' });
            this.suggestedAddressModalRef.componentInstance.enteredAddress = this.billingAddress.value;
            this.suggestedAddressModalRef.componentInstance.suggestedAddresses =
                results.suggestedAddresses;
            this.suggestedAddressModalRef.result
                .then((/**
             * @return {?}
             */
            function () {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            }))
                .catch((/**
             * @return {?}
             */
            function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                _this.suggestedAddressModalRef = null;
            }));
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeForm.emit();
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.goBack.emit();
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.verifyAddress = /**
     * @return {?}
     */
    function () {
        if (this.sameAsShippingAddress) {
            this.next();
        }
        else {
            this.checkoutDeliveryService.verifyAddress(this.billingAddress.value);
        }
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setPaymentDetails.emit({
            paymentDetails: this.payment.value,
            billingAddress: this.sameAsShippingAddress
                ? null
                : this.billingAddress.value,
        });
    };
    /**
     * @return {?}
     */
    PaymentFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.checkboxSub) {
            this.checkboxSub.unsubscribe();
        }
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
    };
    PaymentFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-form',
                    template: "<!-- FORM -->\n<div [formGroup]=\"payment\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\">\n        <ng-container *ngIf=\"cardTypes$ | async as cardTypes\">\n          <div *ngIf=\"cardTypes.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'paymentForm.paymentType' | cxTranslate\n              }}</span>\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"cardTypes\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                placeholder=\"{{ 'paymentForm.selectOne' | cxTranslate }}\"\n                (change)=\"paymentSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.accountHolderName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'paymentForm.accountHolderName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"accountHolderName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'paymentForm.cardNumber' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            formControlName=\"cardNumber\"\n          />\n        </label>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">{{\n              'paymentForm.expirationDate' | cxTranslate\n            }}</span>\n          </label>\n          <div class=\"cx-payment-form-exp-date row\">\n            <div class=\"col-sm-6 col-md-5\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"months\"\n                bindLabel=\"name\"\n                bindValue=\"expiryMonth\"\n                placeholder=\"{{ 'paymentForm.monthMask' | cxTranslate }}\"\n                (change)=\"monthSelected($event)\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"col-sm-6 col-md-7\">\n              <ng-select\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"years\"\n                bindLabel=\"name\"\n                bindValue=\"expiryYear\"\n                placeholder=\"{{ 'paymentForm.yearMask' | cxTranslate }}\"\n                (change)=\"yearSelected($event)\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content\">\n              {{ 'paymentForm.securityCode' | cxTranslate }}\n              <cx-icon\n                [type]=\"iconTypes.INFO\"\n                class=\"cx-payment-form-tooltip\"\n                placement=\"right\"\n                title=\"{{ 'paymentForm.securityCodeTitle' | cxTranslate }}\"\n                alt=\"\"\n              ></cx-icon>\n            </span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cVVNumber\"\n              required\n              formControlName=\"cvn\"\n            />\n          </label>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              (change)=\"toggleDefaultPaymentMethod()\"\n            />\n            <span class=\"form-check-label\">{{\n              'paymentForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n\n      <!-- BILLING -->\n      <div class=\"cx-payment-form-billing\">\n        <div class=\"cx-payment-form-billing-address\">\n          {{ 'paymentForm.billingAddress' | cxTranslate }}\n        </div>\n\n        <!-- SAME AS SHIPPING CHECKBOX -->\n        <ng-container *ngIf=\"showSameAsShippingAddressCheckbox() | async\">\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  class=\"form-check-input\"\n                  [checked]=\"sameAsShippingAddress\"\n                  (change)=\"toggleSameAsShippingAddress()\"\n                />\n                <span class=\"form-check-label\">{{\n                  'paymentForm.sameAsShippingAddress' | cxTranslate\n                }}</span>\n              </label>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- BILLING INFO COMPONENT -->\n        <ng-container\n          *ngIf=\"\n            sameAsShippingAddress && shippingAddress$\n              | async as shippingAddress;\n            else billingAddressForm\n          \"\n        >\n          <cx-card [content]=\"getAddressCardContent(shippingAddress)\"></cx-card>\n        </ng-container>\n\n        <ng-template #billingAddressForm>\n          <cx-billing-address-form\n            [billingAddress]=\"billingAddress\"\n            [countries$]=\"countries$\"\n          >\n          </cx-billing-address-form>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- BUTTON SECTION -->\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        *ngIf=\"paymentMethodsCount === 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"back()\"\n      >\n        {{ 'common.back' | cxTranslate }}\n      </button>\n      <button\n        *ngIf=\"paymentMethodsCount > 0\"\n        class=\"btn btn-block btn-action\"\n        (click)=\"close()\"\n      >\n        {{ 'paymentForm.changePayment' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"isContinueButtonDisabled()\"\n        (click)=\"next()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PaymentFormComponent.ctorParameters = function () { return [
        { type: CheckoutPaymentService },
        { type: CheckoutDeliveryService },
        { type: UserPaymentService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: ModalService }
    ]; };
    PaymentFormComponent.propDecorators = {
        setAsDefaultField: [{ type: Input }],
        paymentMethodsCount: [{ type: Input }],
        goBack: [{ type: Output }],
        closeForm: [{ type: Output }],
        setPaymentDetails: [{ type: Output }]
    };
    return PaymentFormComponent;
}());
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
var PaymentFormModule = /** @class */ (function () {
    function PaymentFormModule() {
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
    return PaymentFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaymentMethodComponent = /** @class */ (function () {
    function PaymentMethodComponent(userPaymentService, checkoutService, checkoutDeliveryService, checkoutPaymentService, globalMessageService, routingService, checkoutConfigService, activatedRoute, translation, cartService) {
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
    PaymentMethodComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (address) {
            _this.deliveryAddress = address;
        }));
        this.existingPaymentMethods$ = this.userPaymentService.getPaymentMethods();
        this.getPaymentDetailsSub = this.checkoutPaymentService
            .getPaymentDetails()
            .pipe(filter((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        function (paymentInfo) { return paymentInfo && !!Object.keys(paymentInfo).length; })))
            .subscribe((/**
         * @param {?} paymentInfo
         * @return {?}
         */
        function (paymentInfo) {
            if (_this.allowRouting) {
                _this.routingService.go(_this.checkoutStepUrlNext);
            }
            if (!paymentInfo['hasError']) {
                _this.selectedPayment = paymentInfo;
            }
            else {
                Object.keys(paymentInfo).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (key.startsWith('InvalidField')) {
                        _this.globalMessageService.add({
                            key: 'paymentMethods.invalidField',
                            params: { field: paymentInfo[key] },
                        }, GlobalMessageType.MSG_TYPE_ERROR);
                    }
                }));
                _this.checkoutService.clearCheckoutStep(3);
            }
        }));
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    PaymentMethodComponent.prototype.getCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        var _this = this;
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
        function (_a) {
            var _b = __read(_a, 4), textExpires = _b[0], textUseThisPayment = _b[1], textDefaultPaymentMethod = _b[2], textSelected = _b[3];
            /** @type {?} */
            var card = {
                title: payment.defaultPayment ? textDefaultPaymentMethod : '',
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
                img: _this.getCardIcon(payment.cardType.code),
                actions: [{ name: textUseThisPayment, event: 'send' }],
            };
            if (!_this.selectedPayment && payment.defaultPayment) {
                _this.selectedPayment = payment;
            }
            if (_this.selectedPayment && _this.selectedPayment.id === payment.id) {
                card.header = textSelected;
            }
            return card;
        })));
    };
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    PaymentMethodComponent.prototype.paymentMethodSelected = /**
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
        this.selectedPayment = paymentDetails;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.showNewPaymentForm = /**
     * @return {?}
     */
    function () {
        this.newPaymentFormManuallyOpened = true;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.hideNewPaymentForm = /**
     * @return {?}
     */
    function () {
        this.newPaymentFormManuallyOpened = false;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setPaymentDetails({
            paymentDetails: this.selectedPayment,
            isNewPayment: false,
        });
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PaymentMethodComponent.prototype.setPaymentDetails = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var paymentDetails = _a.paymentDetails, billingAddress = _a.billingAddress, _b = _a.isNewPayment, isNewPayment = _b === void 0 ? true : _b;
        /** @type {?} */
        var details = __assign({}, paymentDetails);
        details.billingAddress = billingAddress || this.deliveryAddress;
        if (isNewPayment) {
            this.checkoutPaymentService.createPaymentDetails(details);
        }
        else if (this.selectedPayment && this.selectedPayment.id === details.id) {
            this.checkoutPaymentService.setPaymentDetails(details);
        }
        this.allowRouting = true;
    };
    /**
     * @return {?}
     */
    PaymentMethodComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.getPaymentDetailsSub) {
            this.getPaymentDetailsSub.unsubscribe();
        }
    };
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    PaymentMethodComponent.prototype.getCardIcon = /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    function (code) {
        /** @type {?} */
        var ccIcon;
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
    };
    PaymentMethodComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-method',
                    template: "<ng-container *ngIf=\"existingPaymentMethods$ | async as existingPaymentMethods\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'paymentForm.payment' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        existingPaymentMethods?.length && !newPaymentFormManuallyOpened;\n        else newPaymentForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewPaymentForm()\"\n          >\n            {{ 'paymentForm.addNewPayment' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-payment-card col-md-12 col-lg-6\"\n          *ngFor=\"let method of existingPaymentMethods; let i = index\"\n        >\n          <div class=\"cx-payment-card-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(method) | async\"\n              (sendCard)=\"paymentMethodSelected(method)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row cx-checkout-btns\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'common.back' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            [disabled]=\"!selectedPayment\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newPaymentForm>\n      <cx-payment-form\n        (setPaymentDetails)=\"setPaymentDetails($event)\"\n        (closeForm)=\"hideNewPaymentForm()\"\n        (goBack)=\"back()\"\n        [paymentMethodsCount]=\"existingPaymentMethods?.length || 0\"\n        [setAsDefaultField]=\"!isGuestCheckout\"\n      ></cx-payment-form>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PaymentMethodComponent.ctorParameters = function () { return [
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
    ]; };
    return PaymentMethodComponent;
}());
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
var PaymentMethodModule = /** @class */ (function () {
    function PaymentMethodModule() {
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
    return PaymentMethodModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.toggleTAndC = /**
     * @return {?}
     */
    function () {
        this.tAndCToggler = !this.tAndCToggler;
    };
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.placeOrder = /**
     * @return {?}
     */
    function () {
        this.checkoutService.placeOrder();
    };
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return Object.keys(order).length !== 0; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.routingService.go({ cxRoute: 'orderConfirmation' });
        }));
    };
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    };
    PlaceOrderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-place-order',
                    template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PlaceOrderComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: RoutingService }
    ]; };
    return PlaceOrderComponent;
}());
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
var PlaceOrderModule = /** @class */ (function () {
    function PlaceOrderModule() {
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
    return PlaceOrderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaymentDetailsSetGuard = /** @class */ (function () {
    function PaymentDetailsSetGuard(checkoutDetailsService, checkoutConfigService, routingConfigService, router) {
        this.checkoutDetailsService = checkoutDetailsService;
        this.checkoutConfigService = checkoutConfigService;
        this.routingConfigService = routingConfigService;
        this.router = router;
    }
    /**
     * @return {?}
     */
    PaymentDetailsSetGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkoutStep = this.checkoutConfigService.getCheckoutStep(CheckoutStepType.PAYMENT_DETAILS);
        if (!checkoutStep && isDevMode()) {
            console.warn("Missing step with type " + CheckoutStepType.PAYMENT_DETAILS + " in checkout configuration.");
        }
        return this.checkoutDetailsService
            .getPaymentDetails()
            .pipe(map((/**
         * @param {?} paymentDetails
         * @return {?}
         */
        function (paymentDetails) {
            return paymentDetails && Object.keys(paymentDetails).length !== 0
                ? true
                : _this.router.parseUrl(checkoutStep &&
                    _this.routingConfigService.getRouteConfig(checkoutStep.routeName).paths[0]);
        })));
    };
    PaymentDetailsSetGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PaymentDetailsSetGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService },
        { type: CheckoutConfigService },
        { type: RoutingConfigService },
        { type: Router }
    ]; };
    /** @nocollapse */ PaymentDetailsSetGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function PaymentDetailsSetGuard_Factory() { return new PaymentDetailsSetGuard(ɵɵinject(CheckoutDetailsService), ɵɵinject(CheckoutConfigService), ɵɵinject(RoutingConfigService), ɵɵinject(Router)); }, token: PaymentDetailsSetGuard, providedIn: "root" });
    return PaymentDetailsSetGuard;
}());
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
var ReviewSubmitComponent = /** @class */ (function () {
    function ReviewSubmitComponent(checkoutDeliveryService, checkoutPaymentService, userAddressService, cartService, translation, checkoutConfigService) {
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
    ReviewSubmitComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (selected) {
            if (selected === null) {
                _this.checkoutDeliveryService.loadSupportedDeliveryModes();
            }
        })));
        this.countryName$ = this.deliveryAddress$.pipe(switchMap((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            return _this.userAddressService.getCountry(address.country.isocode);
        })), tap((/**
         * @param {?} country
         * @return {?}
         */
        function (country) {
            if (country === null) {
                _this.userAddressService.loadDeliveryCountries();
            }
        })), map((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return country && country.name; })));
    };
    /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getShippingAddressCard = /**
     * @param {?} deliveryAddress
     * @param {?} countryName
     * @return {?}
     */
    function (deliveryAddress, countryName) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            if (!countryName) {
                countryName = deliveryAddress.country.isocode;
            }
            /** @type {?} */
            var region = '';
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
    };
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getDeliveryModeCard = /**
     * @param {?} deliveryMode
     * @return {?}
     */
    function (deliveryMode) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: deliveryMode.name,
                text: [deliveryMode.description],
            };
        })));
    };
    /**
     * @param {?} paymentDetails
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getPaymentMethodCard = /**
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
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
        function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: paymentDetails.accountHolderName,
                text: [paymentDetails.cardNumber, textExpires],
            };
        })));
    };
    /**
     * @param {?} stepType
     * @return {?}
     */
    ReviewSubmitComponent.prototype.getCheckoutStepUrl = /**
     * @param {?} stepType
     * @return {?}
     */
    function (stepType) {
        // TODO(issue:#4121) Deprecated since 1.1.0
        if (this.checkoutConfigService) {
            /** @type {?} */
            var step = this.checkoutConfigService.getCheckoutStep(stepType);
            return step && step.routeName;
        }
    };
    ReviewSubmitComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-review-submit',
                    template: "<div class=\"cx-review\">\n  <!-- TITLE -->\n  <h3 class=\"cx-review-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutReview.review' | cxTranslate }}\n  </h3>\n  <div class=\"cx-review-summary row\">\n    <!-- SHIPPING ADDRESS SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-address\">\n          <cx-card\n            [content]=\"\n              getShippingAddressCard(\n                deliveryAddress$ | async,\n                countryName$ | async\n              ) | async\n            \"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              {\n                cxRoute: getCheckoutStepUrl(checkoutStepType.SHIPPING_ADDRESS)\n              } | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingAddress' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- DELIVERY MODE SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-shipping\">\n          <cx-card\n            *ngIf=\"deliveryMode$ | async as deliveryMode\"\n            [content]=\"getDeliveryModeCard(deliveryMode) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.DELIVERY_MODE) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editShippingMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <!-- PAYMENT METHOD SECTION -->\n    <div class=\"col-md-12 col-lg-6 col-xl-4\">\n      <div class=\"cx-review-summary-wrapper\">\n        <div class=\"cx-review-summary-card cx-review-card-payment\">\n          <cx-card\n            [content]=\"getPaymentMethodCard(paymentDetails$ | async) | async\"\n          ></cx-card>\n        </div>\n        <div *cxFeatureLevel=\"'1.1'\" class=\"cx-review-summary-edit-step\">\n          <a\n            [routerLink]=\"\n              { cxRoute: getCheckoutStepUrl(checkoutStepType.PAYMENT_DETAILS) }\n                | cxUrl\n            \"\n            >{{ 'checkoutReview.editPaymentMethod' | cxTranslate }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- CART ITEM SECTION -->\n  <ng-container *ngIf=\"cart$ | async as cart\">\n    <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n      {{\n        'cartItems.cartTotal'\n          | cxTranslate: { count: cart.deliveryItemsQuantity }\n      }}:\n      {{ cart.totalPrice?.formattedValue }}\n    </div>\n    <h4 class=\"cx-review-cart-heading d-block d-lg-none d-xl-none\">\n      {{ 'checkoutReview.placeOrder' | cxTranslate }}\n    </h4>\n    <div\n      class=\"cx-review-cart-item col-md-12\"\n      *ngIf=\"entries$ | async as entries\"\n    >\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [isReadOnly]=\"true\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReviewSubmitComponent.ctorParameters = function () { return [
        { type: CheckoutDeliveryService },
        { type: CheckoutPaymentService },
        { type: UserAddressService },
        { type: CartService },
        { type: TranslationService },
        { type: CheckoutConfigService }
    ]; };
    return ReviewSubmitComponent;
}());
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
var ReviewSubmitModule = /** @class */ (function () {
    function ReviewSubmitModule() {
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
    return ReviewSubmitModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(fb, checkoutDeliveryService, userService, userAddressService, globalMessageService, modalService) {
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
    AddressFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Fetching countries
        this.countries$ = this.userAddressService.getDeliveryCountries().pipe(tap((/**
         * @param {?} countries
         * @return {?}
         */
        function (countries) {
            if (Object.keys(countries).length === 0) {
                _this.userAddressService.loadDeliveryCountries();
            }
        })));
        // Fetching titles
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        })), map((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            /** @type {?} */
            var noneTitle = { code: '', name: 'Title' };
            return __spread([noneTitle], titles);
        })));
        // Fetching regions
        this.regions$ = this.selectedCountry$.pipe(switchMap((/**
         * @param {?} country
         * @return {?}
         */
        function (country) { return _this.userAddressService.getRegions(country); })), tap((/**
         * @param {?} regions
         * @return {?}
         */
        function (regions) {
            /** @type {?} */
            var regionControl = _this.address.get('region.isocode');
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
        function (results) {
            if (results === 'FAIL') {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'ACCEPT') {
                _this.submitAddress.emit(_this.address.value);
            }
            else if (results.decision === 'REJECT') {
                // TODO: Workaround: allow server for decide is titleCode mandatory (if yes, provide personalized message)
                if (results.errors.errors.some((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return error.subject === 'titleCode'; }))) {
                    _this.globalMessageService.add({ key: 'addressForm.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                else {
                    _this.globalMessageService.add({ key: 'addressForm.invalidAddress' }, GlobalMessageType.MSG_TYPE_ERROR);
                }
                _this.checkoutDeliveryService.clearAddressVerificationResults();
            }
            else if (results.decision === 'REVIEW') {
                _this.openSuggestedAddress(results);
            }
        }));
        if (this.addressData && Object.keys(this.addressData).length !== 0) {
            this.address.patchValue(this.addressData);
            this.countrySelected(this.addressData.country);
            if (this.addressData.region) {
                this.regionSelected(this.addressData.region);
            }
        }
    };
    /**
     * @param {?} title
     * @return {?}
     */
    AddressFormComponent.prototype.titleSelected = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.address['controls'].titleCode.setValue(title.code);
    };
    /**
     * @param {?} country
     * @return {?}
     */
    AddressFormComponent.prototype.countrySelected = /**
     * @param {?} country
     * @return {?}
     */
    function (country) {
        this.address['controls'].country['controls'].isocode.setValue(country.isocode);
        this.selectedCountry$.next(country.isocode);
    };
    /**
     * @param {?} region
     * @return {?}
     */
    AddressFormComponent.prototype.regionSelected = /**
     * @param {?} region
     * @return {?}
     */
    function (region) {
        this.address['controls'].region['controls'].isocode.setValue(region.isocode);
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.toggleDefaultAddress = /**
     * @return {?}
     */
    function () {
        this.address['controls'].defaultAddress.setValue(this.address.value.defaultAddress);
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.backToAddress.emit();
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.verifyAddress = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.address.controls['region'].value.isocode) {
            this.regionsSub = this.regions$.pipe(take(1)).subscribe((/**
             * @param {?} regions
             * @return {?}
             */
            function (regions) {
                /** @type {?} */
                var obj = regions.find((/**
                 * @param {?} region
                 * @return {?}
                 */
                function (region) {
                    return region.isocode === _this.address.controls['region'].value.isocode;
                }));
                Object.assign(_this.address.value.region, {
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
    };
    /**
     * @param {?} results
     * @return {?}
     */
    AddressFormComponent.prototype.openSuggestedAddress = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        var _this = this;
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
            function (address) {
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                if (address) {
                    address = Object.assign({
                        titleCode: _this.address.value.titleCode,
                        phone: _this.address.value.phone,
                        selected: true,
                    }, address);
                    _this.submitAddress.emit(address);
                }
                _this.suggestedAddressModalRef = null;
            }))
                .catch((/**
             * @return {?}
             */
            function () {
                // this  callback is called when modal is closed with Esc key or clicking backdrop
                _this.checkoutDeliveryService.clearAddressVerificationResults();
                /** @type {?} */
                var address = Object.assign({
                    selected: true,
                }, _this.address.value);
                _this.submitAddress.emit(address);
                _this.suggestedAddressModalRef = null;
            }));
        }
    };
    /**
     * @return {?}
     */
    AddressFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutDeliveryService.clearAddressVerificationResults();
        if (this.addressVerifySub) {
            this.addressVerifySub.unsubscribe();
        }
        if (this.regionsSub) {
            this.regionsSub.unsubscribe();
        }
    };
    AddressFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-form',
                    template: "<div [formGroup]=\"address\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-9\">\n      <div class=\"form-group\" formGroupName=\"country\">\n        <ng-container *ngIf=\"countries$ | async as countries\">\n          <div *ngIf=\"countries.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.country' | cxTranslate\n              }}</span>\n              <ng-select\n                class=\"country-select\"\n                formControlName=\"isocode\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"countries\"\n                bindLabel=\"name\"\n                bindValue=\"isocode\"\n                placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                (change)=\"countrySelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\" *ngIf=\"showTitleCode\">\n        <ng-container *ngIf=\"titles$ | async as titles\">\n          <div *ngIf=\"titles.length !== 0\">\n            <label aria-required=\"true\">\n              <span class=\"label-content required\">{{\n                'addressForm.title' | cxTranslate\n              }}</span>\n              <ng-select\n                formControlName=\"titleCode\"\n                [searchable]=\"false\"\n                [clearable]=\"false\"\n                [items]=\"titles\"\n                bindLabel=\"name\"\n                bindValue=\"code\"\n                (change)=\"titleSelected($event)\"\n              >\n              </ng-select>\n            </label>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.firstName.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            required\n            placeholder=\"{{\n              'addressForm.firstName.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"firstName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.lastName.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.lastName.placeholder' | cxTranslate }}\"\n            formControlName=\"lastName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content required\">{{\n            'addressForm.address1' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            required\n            placeholder=\"{{ 'addressForm.streetAddress' | cxTranslate }}\"\n            formControlName=\"line1\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.address2' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{ 'addressForm.aptSuite' | cxTranslate }}\"\n            formControlName=\"line2\"\n          />\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.city.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{ 'addressForm.city.placeholder' | cxTranslate }}\"\n              formControlName=\"town\"\n            />\n          </label>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <ng-container\n            *ngIf=\"regions$ | async as regions\"\n            formGroupName=\"region\"\n          >\n            <div *ngIf=\"regions.length !== 0\">\n              <label aria-required=\"true\">\n                <span class=\"label-content required\">{{\n                  'addressForm.state' | cxTranslate\n                }}</span>\n                <ng-select\n                  class=\"region-select\"\n                  formControlName=\"isocode\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"regions\"\n                  bindLabel=\"{{ regions[0].name ? 'name' : 'isocode' }}\"\n                  bindValue=\"{{ regions[0].name ? 'isocode' : 'region' }}\"\n                  placeholder=\"{{ 'addressForm.selectOne' | cxTranslate }}\"\n                  (change)=\"regionSelected($event)\"\n                >\n                </ng-select>\n              </label>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label>\n            <span class=\"label-content required\">{{\n              'addressForm.zipCode.label' | cxTranslate\n            }}</span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              required\n              placeholder=\"{{\n                'addressForm.zipCode.placeholder' | cxTranslate\n              }}\"\n              formControlName=\"postalCode\"\n            />\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'addressForm.phoneNumber.label' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"{{\n              'addressForm.phoneNumber.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"phone\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group\" *ngIf=\"setAsDefaultField\">\n        <div class=\"form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              formControlName=\"defaultAddress\"\n              (change)=\"toggleDefaultAddress()\"\n            />\n            <span class=\"form-check-label\">{{\n              'addressForm.setAsDefault' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cx-checkout-btns row\">\n    <div class=\"col-md-12 col-lg-6\" *ngIf=\"showCancelBtn\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}\n      </button>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"address.invalid\"\n        (click)=\"verifyAddress()\"\n      >\n        {{ actionBtnLabel || ('common.continue' | cxTranslate) }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AddressFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CheckoutDeliveryService },
        { type: UserService },
        { type: UserAddressService },
        { type: GlobalMessageService },
        { type: ModalService }
    ]; };
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
    return AddressFormComponent;
}());
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
var AddressFormModule = /** @class */ (function () {
    function AddressFormModule() {
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
    return AddressFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutDetailsLoadedGuard = /** @class */ (function () {
    function CheckoutDetailsLoadedGuard(checkoutDetailsService) {
        this.checkoutDetailsService = checkoutDetailsService;
    }
    /**
     * @return {?}
     */
    CheckoutDetailsLoadedGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        return this.checkoutDetailsService.getCheckoutDetailsLoaded$;
    };
    CheckoutDetailsLoadedGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDetailsLoadedGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService }
    ]; };
    /** @nocollapse */ CheckoutDetailsLoadedGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CheckoutDetailsLoadedGuard_Factory() { return new CheckoutDetailsLoadedGuard(ɵɵinject(CheckoutDetailsService)); }, token: CheckoutDetailsLoadedGuard, providedIn: "root" });
    return CheckoutDetailsLoadedGuard;
}());
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
var ShippingAddressComponent = /** @class */ (function () {
    function ShippingAddressComponent(userAddressService, cartService, routingService, checkoutDeliveryService, checkoutConfigService, activatedRoute, translation) {
        this.userAddressService = userAddressService;
        this.cartService = cartService;
        this.routingService = routingService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.checkoutConfigService = checkoutConfigService;
        this.activatedRoute = activatedRoute;
        this.translation = translation;
        this.newAddressFormManuallyOpened = false;
        this.cards = [];
        this.selectedAddress$ = new BehaviorSubject(null);
        this.isGuestCheckout = false;
    }
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.goTo = null;
        this.checkoutStepUrlNext = this.checkoutConfigService.getNextCheckoutStepUrl(this.activatedRoute);
        this.checkoutStepUrlPrevious = 'cart';
        this.isLoading$ = this.userAddressService.getAddressesLoading();
        this.existingAddresses$ = this.userAddressService.getAddresses();
        this.cards$ = combineLatest([
            this.existingAddresses$,
            this.selectedAddress$.asObservable(),
            this.translation.translate('checkoutAddress.defaultShippingAddress'),
            this.translation.translate('checkoutAddress.shipToThisAddress'),
            this.translation.translate('addressCard.selected'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 5), addresses = _b[0], selected = _b[1], textDefaultShippingAddress = _b[2], textShipToThisAddress = _b[3], textSelected = _b[4];
            // Select default address if none selected
            if (selected && Object.keys(selected).length > 0) {
                _this.selectedAddress = selected;
            }
            else {
                /** @type {?} */
                var defaultAddress = addresses.find((/**
                 * @param {?} address
                 * @return {?}
                 */
                function (address) { return address.defaultAddress; }));
                selected = defaultAddress;
                _this.selectedAddress = defaultAddress;
            }
            return addresses.map((/**
             * @param {?} address
             * @return {?}
             */
            function (address) {
                /** @type {?} */
                var card = _this.getCardContent(address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected);
                return {
                    address: address,
                    card: card,
                };
            }));
        })));
        if (!this.cartService.isGuestCart()) {
            this.userAddressService.loadAddresses();
        }
        else {
            this.isGuestCheckout = true;
        }
        this.setAddressSub = this.checkoutDeliveryService
            .getDeliveryAddress()
            .subscribe((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            _this.setAddress = address;
            _this.selectedAddress$.next(address);
            if (_this.goTo) {
                _this.goNext();
                _this.goTo = null;
            }
        }));
        this.selectedAddressSub = this.selectedAddress$.subscribe((/**
         * @param {?} address
         * @return {?}
         */
        function (address) {
            _this.selectedAddress = address;
        }));
    };
    /**
     * @param {?} address
     * @param {?} selected
     * @param {?} textDefaultShippingAddress
     * @param {?} textShipToThisAddress
     * @param {?} textSelected
     * @return {?}
     */
    ShippingAddressComponent.prototype.getCardContent = /**
     * @param {?} address
     * @param {?} selected
     * @param {?} textDefaultShippingAddress
     * @param {?} textShipToThisAddress
     * @param {?} textSelected
     * @return {?}
     */
    function (address, selected, textDefaultShippingAddress, textShipToThisAddress, textSelected) {
        /** @type {?} */
        var region = '';
        if (address.region && address.region.isocode) {
            region = address.region.isocode + ', ';
        }
        /** @type {?} */
        var card = {
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
        this.cards.push(card);
        return card;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingAddressComponent.prototype.addressSelected = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.selectedAddress$.next(address);
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.addAddress({ address: this.selectedAddress, newAddress: false });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ShippingAddressComponent.prototype.addAddress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newAddress = _a.newAddress, address = _a.address;
        if (newAddress) {
            this.checkoutDeliveryService.createAndSetAddress(address);
            this.goTo = CheckoutStepType.DELIVERY_MODE;
            return;
        }
        if (this.setAddress &&
            this.selectedAddress &&
            this.setAddress.id === this.selectedAddress.id) {
            this.goNext();
        }
        else {
            this.goTo = CheckoutStepType.DELIVERY_MODE;
            this.checkoutDeliveryService.setDeliveryAddress(address);
        }
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingAddressComponent.prototype.addNewAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        if (address) {
            this.addAddress({ address: address, newAddress: true });
        }
        else {
            this.goNext();
        }
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.showNewAddressForm = /**
     * @return {?}
     */
    function () {
        this.newAddressFormManuallyOpened = true;
    };
    /**
     * @param {?=} goBack
     * @return {?}
     */
    ShippingAddressComponent.prototype.hideNewAddressForm = /**
     * @param {?=} goBack
     * @return {?}
     */
    function (goBack) {
        if (goBack === void 0) { goBack = false; }
        this.newAddressFormManuallyOpened = false;
        if (goBack) {
            this.back();
        }
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.goNext = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlNext);
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.routingService.go(this.checkoutStepUrlPrevious);
    };
    /**
     * @return {?}
     */
    ShippingAddressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.setAddressSub) {
            this.setAddressSub.unsubscribe();
        }
        if (this.selectedAddressSub) {
            this.selectedAddressSub.unsubscribe();
        }
    };
    ShippingAddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-shipping-address',
                    template: "<ng-container *ngIf=\"cards$ | async as cards\">\n  <h3 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}\n  </h3>\n  <ng-container *ngIf=\"!(isLoading$ | async); else loading\">\n    <ng-container\n      *ngIf=\"\n        cards?.length && !newAddressFormManuallyOpened;\n        else newAddressForm\n      \"\n    >\n      <p class=\"cx-checkout-text\">\n        {{ 'checkoutAddress.selectYourShippingAddress' | cxTranslate }}\n      </p>\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"showNewAddressForm()\"\n          >\n            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-body row\">\n        <div\n          class=\"cx-shipping-address-card col-md-12 col-lg-6\"\n          *ngFor=\"let card of cards; let i = index\"\n        >\n          <div\n            class=\"cx-shipping-address-card-inner\"\n            (click)=\"addressSelected(card.address)\"\n          >\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"card.card\"\n              (sendCard)=\"addressSelected(card.address)\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cx-checkout-btns row\">\n        <div class=\"col-md-12 col-lg-6\">\n          <button class=\"cx-btn btn btn-block btn-action\" (click)=\"back()\">\n            {{ 'checkout.backToCart' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <button\n            class=\"cx-btn btn btn-block btn-primary\"\n            [disabled]=\"!selectedAddress || !selectedAddress.id\"\n            (click)=\"next()\"\n          >\n            {{ 'common.continue' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-template #newAddressForm>\n      <ng-container *ngIf=\"cards.length; else initialAddressForm\">\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          (backToAddress)=\"hideNewAddressForm(false)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-container>\n      <ng-template #initialAddressForm>\n        <cx-address-form\n          [showTitleCode]=\"true\"\n          [setAsDefaultField]=\"!isGuestCheckout\"\n          [addressData]=\"setAddress\"\n          cancelBtnLabel=\"{{ 'checkout.backToCart' | cxTranslate }}\"\n          (backToAddress)=\"hideNewAddressForm(true)\"\n          (submitAddress)=\"addNewAddress($event)\"\n        ></cx-address-form>\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ShippingAddressComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CartService },
        { type: RoutingService },
        { type: CheckoutDeliveryService },
        { type: CheckoutConfigService },
        { type: ActivatedRoute },
        { type: TranslationService }
    ]; };
    return ShippingAddressComponent;
}());
if (false) {
    /** @type {?} */
    ShippingAddressComponent.prototype.existingAddresses$;
    /** @type {?} */
    ShippingAddressComponent.prototype.newAddressFormManuallyOpened;
    /** @type {?} */
    ShippingAddressComponent.prototype.cards;
    /** @type {?} */
    ShippingAddressComponent.prototype.isLoading$;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddress;
    /** @type {?} */
    ShippingAddressComponent.prototype.goTo;
    /** @type {?} */
    ShippingAddressComponent.prototype.setAddress;
    /** @type {?} */
    ShippingAddressComponent.prototype.setAddressSub;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddressSub;
    /** @type {?} */
    ShippingAddressComponent.prototype.selectedAddress$;
    /** @type {?} */
    ShippingAddressComponent.prototype.cards$;
    /** @type {?} */
    ShippingAddressComponent.prototype.checkoutStepUrlNext;
    /** @type {?} */
    ShippingAddressComponent.prototype.checkoutStepUrlPrevious;
    /** @type {?} */
    ShippingAddressComponent.prototype.isGuestCheckout;
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
var ShippingAddressModule = /** @class */ (function () {
    function ShippingAddressModule() {
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
    return ShippingAddressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutComponentModule = /** @class */ (function () {
    function CheckoutComponentModule() {
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
    return CheckoutComponentModule;
}());

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
var NotCheckoutAuthGuard = /** @class */ (function () {
    function NotCheckoutAuthGuard(routingService, authService, cartService) {
        this.routingService = routingService;
        this.authService = authService;
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    NotCheckoutAuthGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.authService.getUserToken().pipe(map((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token.access_token) {
                _this.routingService.go({ cxRoute: 'home' });
            }
            else if (_this.cartService.isGuestCart()) {
                _this.routingService.go({ cxRoute: 'cart' });
                return false;
            }
            return !token.access_token;
        })));
    };
    NotCheckoutAuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NotCheckoutAuthGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: AuthService },
        { type: CartService }
    ]; };
    /** @nocollapse */ NotCheckoutAuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function NotCheckoutAuthGuard_Factory() { return new NotCheckoutAuthGuard(ɵɵinject(RoutingService), ɵɵinject(AuthService), ɵɵinject(CartService)); }, token: NotCheckoutAuthGuard, providedIn: "root" });
    return NotCheckoutAuthGuard;
}());
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
var HamburgerMenuService = /** @class */ (function () {
    function HamburgerMenuService(router) {
        var _this = this;
        this.isExpanded = new BehaviorSubject(false);
        router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationStart; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.toggle(true);
        }));
    }
    /**
     * toggles the expand state of the hamburger menu
     */
    /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    HamburgerMenuService.prototype.toggle = /**
     * toggles the expand state of the hamburger menu
     * @param {?=} forceCollapse
     * @return {?}
     */
    function (forceCollapse) {
        if (forceCollapse) {
            this.isExpanded.next(false);
        }
        else {
            this.isExpanded.next(!this.isExpanded.value);
        }
    };
    HamburgerMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HamburgerMenuService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ HamburgerMenuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HamburgerMenuService_Factory() { return new HamburgerMenuService(ɵɵinject(Router)); }, token: HamburgerMenuService, providedIn: "root" });
    return HamburgerMenuService;
}());
if (false) {
    /** @type {?} */
    HamburgerMenuService.prototype.isExpanded;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HamburgerMenuComponent = /** @class */ (function () {
    function HamburgerMenuComponent(hamburgerMenuService) {
        this.hamburgerMenuService = hamburgerMenuService;
    }
    /**
     * @return {?}
     */
    HamburgerMenuComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.hamburgerMenuService.toggle();
    };
    Object.defineProperty(HamburgerMenuComponent.prototype, "isExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hamburgerMenuService.isExpanded;
        },
        enumerable: true,
        configurable: true
    });
    HamburgerMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-hamburger-menu',
                    template: "<button\n  class=\"cx-hamburger\"\n  type=\"button\"\n  (click)=\"toggle()\"\n  [class.is-active]=\"isExpanded | async\"\n  [attr.aria-expanded]=\"isExpanded | async\"\n  aria-label=\"Menu\"\n  aria-controls=\"header-account-container, header-categories-container, header-locale-container\"\n>\n  <span class=\"hamburger-box\">\n    <span class=\"hamburger-inner\"></span>\n  </span>\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HamburgerMenuComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService }
    ]; };
    return HamburgerMenuComponent;
}());
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
var HamburgerMenuModule = /** @class */ (function () {
    function HamburgerMenuModule() {
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
    return HamburgerMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var OutletPosition = {
    REPLACE: 'replace',
    BEFORE: 'before',
    AFTER: 'after',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OutletService = /** @class */ (function () {
    function OutletService() {
        this.templatesRefs = {};
        this.templatesRefsBefore = {};
        this.templatesRefsAfter = {};
    }
    /**
     * @param {?} outlet
     * @param {?} template
     * @param {?=} position
     * @return {?}
     */
    OutletService.prototype.add = /**
     * @param {?} outlet
     * @param {?} template
     * @param {?=} position
     * @return {?}
     */
    function (outlet, template, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (position === OutletPosition.BEFORE) {
            this.templatesRefsBefore[outlet] = template;
        }
        if (position === OutletPosition.REPLACE) {
            this.templatesRefs[outlet] = template;
        }
        if (position === OutletPosition.AFTER) {
            this.templatesRefsAfter[outlet] = template;
        }
    };
    /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    OutletService.prototype.get = /**
     * @param {?} outlet
     * @param {?=} position
     * @return {?}
     */
    function (outlet, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        /** @type {?} */
        var templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore[outlet];
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter[outlet];
                break;
            default:
                templateRef = this.templatesRefs[outlet];
        }
        return templateRef;
        // return this.templatesRefs[outlet] ? this.templatesRefs[outlet] : null;
    };
    OutletService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ OutletService.ngInjectableDef = ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
    return OutletService;
}());
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
var OutletRefDirective = /** @class */ (function () {
    function OutletRefDirective(tpl, outletService) {
        this.tpl = tpl;
        this.outletService = outletService;
    }
    /**
     * @return {?}
     */
    OutletRefDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    };
    OutletRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOutletRef]',
                },] }
    ];
    /** @nocollapse */
    OutletRefDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    OutletRefDirective.propDecorators = {
        cxOutletRef: [{ type: Input }],
        cxOutletPos: [{ type: Input }]
    };
    return OutletRefDirective;
}());
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
var OutletRefModule = /** @class */ (function () {
    function OutletRefModule() {
    }
    OutletRefModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [OutletRefDirective],
                    exports: [OutletRefDirective],
                },] }
    ];
    return OutletRefModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var layoutModules = [OutletRefModule];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(layoutModules),
                    providers: [{ provide: LayoutConfig, useExisting: Config }],
                    exports: __spread(layoutModules),
                },] }
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
    }
    Object.defineProperty(OutletDirective.prototype, "cxOutletContext", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._context = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OutletDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nodes = [];
        nodes.push.apply(nodes, __spread(this.renderTemplate(OutletPosition.BEFORE)));
        nodes.push.apply(nodes, __spread(this.renderTemplate(OutletPosition.REPLACE, true)));
        nodes.push.apply(nodes, __spread(this.renderTemplate(OutletPosition.AFTER)));
    };
    /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    OutletDirective.prototype.renderTemplate = /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    function (position, replace) {
        if (replace === void 0) { replace = false; }
        /** @type {?} */
        var nodes = [];
        /** @type {?} */
        var template = this.outletService.get(this.cxOutlet, position);
        if (template || replace) {
            /** @type {?} */
            var ref = this.vcr.createEmbeddedView(template || this.templateRef, {
                $implicit: this._context,
            });
            nodes.push.apply(nodes, __spread(ref.rootNodes));
        }
        return nodes;
    };
    OutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOutlet]',
                },] }
    ];
    /** @nocollapse */
    OutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    OutletDirective.propDecorators = {
        cxOutlet: [{ type: Input }],
        cxOutletContext: [{ type: Input }]
    };
    return OutletDirective;
}());
if (false) {
    /** @type {?} */
    OutletDirective.prototype.cxOutlet;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype._context;
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OutletModule = /** @class */ (function () {
    function OutletModule() {
    }
    OutletModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [OutletDirective],
                    providers: [OutletService],
                    exports: [OutletDirective],
                },] }
    ];
    return OutletModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentMapperService = /** @class */ (function () {
    function ComponentMapperService(componentFactoryResolver, config, document, platform) {
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
    ComponentMapperService.prototype.getComponent = /**
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
    function (typeCode) {
        /** @type {?} */
        var componentConfig = this.config.cmsComponents[typeCode];
        if (!componentConfig) {
            if (!this.missingComponents.includes(typeCode)) {
                this.missingComponents.push(typeCode);
                console.warn("No component implementation found for the CMS component type '" + typeCode + "'.\n", "Make sure you implement a component and register it in the mapper.");
            }
        }
        return componentConfig ? componentConfig.component : null;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.getComponentFactoryByCode = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var component = this.getComponent(typeCode);
        if (!component) {
            return null;
        }
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!factory) {
            console.warn("No component factory found for the CMS component type '" + typeCode + "'.\n", "Make sure you add a component to the 'entryComponents' array in the NgModule.");
            return null;
        }
        return factory;
    };
    /**
     * @param {?} typeCode
     * @return {?}
     */
    ComponentMapperService.prototype.isWebComponent = /**
     * @param {?} typeCode
     * @return {?}
     */
    function (typeCode) {
        /** @type {?} */
        var component = this.getComponent(typeCode);
        return typeof component === 'string' && (component || '').includes('#');
    };
    /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    ComponentMapperService.prototype.initWebComponent = /**
     * @param {?} componentType
     * @param {?} renderer
     * @return {?}
     */
    function (componentType, renderer) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            var _a = __read(_this.getComponent(componentType).split('#'), 2), path = _a[0], selector = _a[1];
            /** @type {?} */
            var script = _this.loadedWebComponents[path];
            if (!script) {
                if (path) {
                    script = renderer.createElement('script');
                    _this.loadedWebComponents[path] = script;
                    script.setAttribute('src', path);
                    renderer.appendChild(_this.document.body, script);
                    if (isPlatformBrowser(_this.platform)) {
                        script.onload = (/**
                         * @return {?}
                         */
                        function () {
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
                var chainedOnload_1 = script.onload;
                script.onload = (/**
                 * @return {?}
                 */
                function () {
                    chainedOnload_1();
                    resolve(selector);
                });
            }
            else {
                resolve(selector);
            }
        }));
    };
    ComponentMapperService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ComponentMapperService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: CmsConfig },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ ComponentMapperService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentMapperService_Factory() { return new ComponentMapperService(ɵɵinject(ComponentFactoryResolver), ɵɵinject(CmsConfig), ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID)); }, token: ComponentMapperService, providedIn: "root" });
    return ComponentMapperService;
}());
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
var CxApiService = /** @class */ (function () {
    function CxApiService(auth, cart, cartData, checkout, checkoutDelivery, checkoutPayment, cms, pageMeta, featureConfig, globalMessage, translation, kyma, occEndpoints, product, productSearch, productReview, productReference, searchbox, routing, currency, language, baseSite, user, userAddress, userConsent, userOrder, userPayment, ngZone) {
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
        this.ngZone = ngZone;
    }
    CxApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CxApiService.ctorParameters = function () { return [
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
        { type: NgZone }
    ]; };
    /** @nocollapse */ CxApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(ɵɵinject(AuthService, 8), ɵɵinject(CartService, 8), ɵɵinject(CartDataService, 8), ɵɵinject(CheckoutService, 8), ɵɵinject(CheckoutDeliveryService, 8), ɵɵinject(CheckoutPaymentService, 8), ɵɵinject(CmsService, 8), ɵɵinject(PageMetaService, 8), ɵɵinject(FeatureConfigService, 8), ɵɵinject(GlobalMessageService, 8), ɵɵinject(TranslationService, 8), ɵɵinject(KymaService, 8), ɵɵinject(OccEndpointsService, 8), ɵɵinject(ProductService, 8), ɵɵinject(ProductSearchService, 8), ɵɵinject(ProductReviewService, 8), ɵɵinject(ProductReferenceService, 8), ɵɵinject(SearchboxService, 8), ɵɵinject(RoutingService, 8), ɵɵinject(CurrencyService, 8), ɵɵinject(LanguageService, 8), ɵɵinject(BaseSiteService, 8), ɵɵinject(UserService, 8), ɵɵinject(UserAddressService, 8), ɵɵinject(UserConsentService, 8), ɵɵinject(UserOrderService, 8), ɵɵinject(UserPaymentService, 8), ɵɵinject(NgZone)); }, token: CxApiService, providedIn: "root" });
    return CxApiService;
}());
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
    CxApiService.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentWrapperDirective = /** @class */ (function () {
    function ComponentWrapperDirective(vcr, componentMapper, injector, cmsService, dynamicAttributeService, renderer, config, platformId) {
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
    ComponentWrapperDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.shouldRenderComponent()) {
            return;
        }
        if (this.componentMapper.isWebComponent(this.cxComponentWrapper.flexType)) {
            this.launchWebComponent();
        }
        else {
            this.launchComponent();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.shouldRenderComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        var isComponentDisabledInSSR = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {}).disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.launchComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.componentMapper.getComponentFactoryByCode(this.cxComponentWrapper.flexType);
        if (factory) {
            this.cmpRef = this.vcr.createComponent(factory, undefined, this.getInjectorForComponent());
            if (this.cmsService.isLaunchInSmartEdit()) {
                this.addSmartEditContract(this.cmpRef.location.nativeElement);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.launchWebComponent = /**
     * @private
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var elementName, cmsComponentData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.componentMapper.initWebComponent(this.cxComponentWrapper.flexType, this.renderer)];
                    case 1:
                        elementName = _a.sent();
                        if (elementName) {
                            this.webElement = this.renderer.createElement(elementName);
                            cmsComponentData = this.getCmsDataForComponent();
                            this.webElement.cxApi = __assign({}, this.injector.get(CxApiService), { CmsComponentData: cmsComponentData, // TODO: remove / deprecated since 1.0.x
                                cmsComponentData: cmsComponentData });
                            this.renderer.appendChild(this.vcr.element.nativeElement.parentElement, this.webElement);
                            if (this.cmsService.isLaunchInSmartEdit()) {
                                this.addSmartEditContract(this.webElement);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @template T
     * @return {?}
     */
    ComponentWrapperDirective.prototype.getCmsDataForComponent = /**
     * @private
     * @template T
     * @return {?}
     */
    function () {
        return {
            uid: this.cxComponentWrapper.uid,
            data$: this.cmsService.getComponentData(this.cxComponentWrapper.uid),
        };
    };
    /**
     * @private
     * @return {?}
     */
    ComponentWrapperDirective.prototype.getInjectorForComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configProviders = (this.config.cmsComponents[this.cxComponentWrapper.flexType] || {})
            .providers || [];
        return Injector.create({
            providers: __spread([
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsDataForComponent(),
                }
            ], configProviders),
            parent: this.injector,
        });
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ComponentWrapperDirective.prototype.addSmartEditContract = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.dynamicAttributeService.addDynamicAttributes(this.cxComponentWrapper.properties, element, this.renderer);
    };
    /**
     * @return {?}
     */
    ComponentWrapperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        if (this.webElement) {
            this.webElement.remove();
        }
    };
    ComponentWrapperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxComponentWrapper]',
                },] }
    ];
    /** @nocollapse */
    ComponentWrapperDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentMapperService },
        { type: Injector },
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ComponentWrapperDirective.propDecorators = {
        cxComponentWrapper: [{ type: Input }]
    };
    return ComponentWrapperDirective;
}());
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
var PageComponentModule = /** @class */ (function () {
    function PageComponentModule() {
    }
    PageComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [],
                    declarations: [ComponentWrapperDirective],
                    exports: [ComponentWrapperDirective],
                },] }
    ];
    return PageComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         */
        this.slot$ = this.position$.pipe(switchMap((/**
         * @param {?} position
         * @return {?}
         */
        function (position) { return _this.cmsService.getContentSlot(position); })), tap((/**
         * @param {?} slot
         * @return {?}
         */
        function (slot) { return _this.addSmartEditSlotClass(slot); })));
        /**
         * observable with components (`ContentSlotComponentData[]`)
         * for the current slot
         */
        this.components$ = this.slot$.pipe(map((/**
         * @param {?} slot
         * @return {?}
         */
        function (slot) { return (slot && slot.components ? slot.components : []); })), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return a.length === b.length && !a.find((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            function (el, index) { return el.uid !== b[index].uid; }));
        })), tap((/**
         * @param {?} components
         * @return {?}
         */
        function (components) { return _this.addComponentClass(components); })));
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        set: /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.position$.next(position);
            // add the position name as a css class so that
            // layout can be applied to it, using the position based class.
            this.renderer.addClass(this.hostElement.nativeElement, position);
        },
        enumerable: true,
        configurable: true
    });
    // add a class to indicate whether the class is empty or not
    // add a class to indicate whether the class is empty or not
    /**
     * @private
     * @param {?} components
     * @return {?}
     */
    PageSlotComponent.prototype.addComponentClass = 
    // add a class to indicate whether the class is empty or not
    /**
     * @private
     * @param {?} components
     * @return {?}
     */
    function (components) {
        if (components && components.length > 0) {
            this.renderer.addClass(this.hostElement.nativeElement, 'has-components');
        }
    };
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    PageSlotComponent.prototype.addSmartEditSlotClass = /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    function (slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    };
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    PageSlotComponent.prototype.addSmartEditContract = /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    function (slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    };
    PageSlotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-page-slot',
                    template: "<ng-template\n  [cxOutlet]=\"position$ | async\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-container *ngFor=\"let component of components$ | async\">\n    <ng-template\n      [cxOutlet]=\"component.flexType\"\n      [cxOutletContext]=\"{ component: component }\"\n    >\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </ng-container>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    PageSlotComponent.propDecorators = {
        position: [{ type: Input }]
    };
    return PageSlotComponent;
}());
if (false) {
    /** @type {?} */
    PageSlotComponent.prototype.position$;
    /**
     * observable with `ContentSlotData` for the current position
     * @type {?}
     */
    PageSlotComponent.prototype.slot$;
    /**
     * observable with components (`ContentSlotComponentData[]`)
     * for the current slot
     * @type {?}
     */
    PageSlotComponent.prototype.components$;
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageSlotModule = /** @class */ (function () {
    function PageSlotModule() {
    }
    PageSlotModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OutletModule, PageComponentModule],
                    providers: [],
                    declarations: [PageSlotComponent],
                    exports: [PageSlotComponent],
                },] }
    ];
    return PageSlotModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageLayoutService = /** @class */ (function () {
    function PageLayoutService(cms, config, breakpointService, handlers) {
        this.cms = cms;
        this.config = config;
        this.breakpointService = breakpointService;
        this.handlers = handlers;
        // we print warn messages on missing layout configs
        // only once to not polute the console log
        this.warnLogMessages = {};
        this.logSlots = {};
    }
    /**
     * @param {?=} section
     * @return {?}
     */
    PageLayoutService.prototype.getSlots = /**
     * @param {?=} section
     * @return {?}
     */
    function (section) {
        var _this = this;
        return combineLatest([this.page$, this.breakpointService.breakpoint$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), page = _b[0], breakpoint = _b[1];
            /** @type {?} */
            var pageTemplate = page.template;
            /** @type {?} */
            var slots = _this.resolveSlots(page, section, breakpoint);
            return { slots: slots, pageTemplate: pageTemplate, breakpoint: breakpoint };
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var e_1, _b;
            var slots = _a.slots, pageTemplate = _a.pageTemplate, breakpoint = _a.breakpoint;
            /** @type {?} */
            var result = of(slots);
            try {
                for (var _c = __values(_this.handlers || []), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var handler = _d.value;
                    result = handler.handle(result, pageTemplate, section, breakpoint);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        })), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            return true;
        })));
    };
    /**
     * @private
     * @param {?} page
     * @param {?} section
     * @param {?} breakpoint
     * @return {?}
     */
    PageLayoutService.prototype.resolveSlots = /**
     * @private
     * @param {?} page
     * @param {?} section
     * @param {?} breakpoint
     * @return {?}
     */
    function (page, section, breakpoint) {
        /** @type {?} */
        var config = this.getSlotConfig(page.template, 'slots', section, breakpoint);
        if (config && config.slots) {
            /** @type {?} */
            var pageSlots_1 = Object.keys(page.slots);
            return config.slots.filter((/**
             * @param {?} slot
             * @return {?}
             */
            function (slot) { return pageSlots_1.includes(slot); }));
        }
        else if (!section) {
            this.logMissingLayoutConfig(page);
            return Object.keys(page.slots);
        }
        else {
            this.logMissingLayoutConfig(page, section);
            return [];
        }
    };
    Object.defineProperty(PageLayoutService.prototype, "page$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cms.getCurrentPage().pipe(filter((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return !!page; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutService.prototype, "templateName$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.page$.pipe(filter((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return !!page.template; })), map((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return page.template; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * load slots from the layout configuration. The breakpoint is used
     * to load a specific configuration for the given breakpoint. If there's
     * no configuration available for the given breakpoint the default slot
     * configuration is returned.
     */
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
    PageLayoutService.prototype.getSlotConfig = /**
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
    function (templateUid, configAttribute, section, breakpoint) {
        if (!this.config.layoutSlots) {
            return null;
        }
        /** @type {?} */
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (section) {
            return this.getSlotConfigForSection(templateUid, configAttribute, section, breakpoint);
        }
        if (pageTemplateConfig) {
            return this.getResponsiveSlotConfig((/** @type {?} */ (pageTemplateConfig)), configAttribute, breakpoint);
        }
    };
    /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    PageLayoutService.prototype.getSlotConfigForSection = /**
     * @protected
     * @param {?} templateUid
     * @param {?} configAttribute
     * @param {?=} section
     * @param {?=} breakpoint
     * @return {?}
     */
    function (templateUid, configAttribute, section, breakpoint) {
        /** @type {?} */
        var pageTemplateConfig = this.config.layoutSlots[templateUid];
        if (!pageTemplateConfig) {
            return null;
        }
        // if there's no section config on the page layout
        // we fall back to the global section config
        /** @type {?} */
        var sectionConfig = pageTemplateConfig[section]
            ? pageTemplateConfig[section]
            : this.config.layoutSlots[section];
        if (!sectionConfig) {
            return null;
        }
        /** @type {?} */
        var responsiveConfig = this.getResponsiveSlotConfig((/** @type {?} */ (sectionConfig)), configAttribute, breakpoint);
        if (responsiveConfig.hasOwnProperty(configAttribute)) {
            return responsiveConfig;
        }
        else if (pageTemplateConfig[section].hasOwnProperty(configAttribute)) {
            return pageTemplateConfig[section];
        }
        else if (this.config.layoutSlots[section]) {
            return (/** @type {?} */ (this.config.layoutSlots[section]));
        }
    };
    /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     */
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
    PageLayoutService.prototype.getResponsiveSlotConfig = /**
     * Returns a list of slots for a breakpoint specific configuratoin
     * If there's no specific configuration for the breakpoint,
     * the closest available configuration will be returned.
     * @protected
     * @param {?} layoutSlotConfig
     * @param {?} configAttribute
     * @param {?=} breakpoint
     * @return {?}
     */
    function (layoutSlotConfig, configAttribute, breakpoint) {
        var e_2, _a;
        /** @type {?} */
        var slotConfig = (/** @type {?} */ (layoutSlotConfig));
        // fallback to default slot config
        if (!breakpoint) {
            return slotConfig;
        }
        // we have a config for the specific breakpoint
        if (layoutSlotConfig[breakpoint] &&
            layoutSlotConfig[breakpoint].hasOwnProperty(configAttribute)) {
            return (/** @type {?} */ (layoutSlotConfig[breakpoint]));
        }
        // find closest config
        /** @type {?} */
        var all = this.breakpointService.breakpoints;
        try {
            for (var _b = __values(all.splice(0, all.indexOf(breakpoint))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var br = _c.value;
                if (layoutSlotConfig[br] &&
                    layoutSlotConfig[br].hasOwnProperty(configAttribute)) {
                    slotConfig = (/** @type {?} */ (layoutSlotConfig[br]));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return slotConfig;
    };
    /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     */
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
    PageLayoutService.prototype.logMissingLayoutConfig = /**
     * In order to help developers, we print some detailed log information in
     * case there's no layout configuration available for the given page template
     * or section. Additionally, the slot positions are printed in the console
     * in a format that can be copied / paste to the configuration.
     * @private
     * @param {?} page
     * @param {?=} section
     * @return {?}
     */
    function (page, section) {
        if (!isDevMode()) {
            return;
        }
        if (!this.logSlots[page.template]) {
            // the info log is not printed in production
            // tslint:disable-next-line: no-console
            console.info("Available CMS page slots: '" + Object.keys(page.slots).join("','") + "'");
            this.logSlots[page.template] = true;
        }
        /** @type {?} */
        var cacheKey = section || page.template;
        if (!this.warnLogMessages[cacheKey]) {
            console.warn("No layout config found for " + cacheKey + ", you can configure a 'LayoutConfig' to control the rendering of page slots.");
            this.warnLogMessages[cacheKey] = true;
        }
    };
    PageLayoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageLayoutService.ctorParameters = function () { return [
        { type: CmsService },
        { type: LayoutConfig },
        { type: BreakpointService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PAGE_LAYOUT_HANDLER,] }] }
    ]; };
    return PageLayoutService;
}());
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
var PageLayoutComponent = /** @class */ (function () {
    function PageLayoutComponent(el, renderer, pageLayoutService) {
        var _this = this;
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
        function (section) { return (section ? of(section) : _this.templateName$); })), tap((/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            _this.styleClass = name;
        })));
        this.slots$ = this.section$.pipe(switchMap((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return _this.pageLayoutService.getSlots(section); })));
    }
    Object.defineProperty(PageLayoutComponent.prototype, "section", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.section$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageLayoutComponent.prototype, "styleClass", {
        set: /**
         * @param {?} cls
         * @return {?}
         */
        function (cls) {
            if (this.currentClass) {
                this.renderer.removeClass(this.el.nativeElement, this.currentClass);
            }
            this.renderer.addClass(this.el.nativeElement, cls);
            this.currentClass = cls;
        },
        enumerable: true,
        configurable: true
    });
    PageLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-page-layout',
                    template: "<ng-template\n  [cxOutlet]=\"layoutName$ | async\"\n  [cxOutletContext]=\"{\n    templateName$: templateName$,\n    slots$: slots$,\n    section$: section$\n  }\"\n>\n  <ng-content></ng-content>\n\n  <cx-page-slot\n    *ngFor=\"let slot of slots$ | async\"\n    [position]=\"slot\"\n  ></cx-page-slot>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageLayoutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: PageLayoutService }
    ]; };
    PageLayoutComponent.propDecorators = {
        section: [{ type: Input }]
    };
    return PageLayoutComponent;
}());
if (false) {
    /** @type {?} */
    PageLayoutComponent.prototype.section$;
    /** @type {?} */
    PageLayoutComponent.prototype.templateName$;
    /** @type {?} */
    PageLayoutComponent.prototype.layoutName$;
    /** @type {?} */
    PageLayoutComponent.prototype.slots$;
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
var PageLayoutModule = /** @class */ (function () {
    function PageLayoutModule() {
    }
    PageLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OutletModule, PageSlotModule],
                    declarations: [PageLayoutComponent],
                    providers: [PageLayoutService],
                    exports: [PageLayoutComponent],
                },] }
    ];
    return PageLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
PWAModuleConfig = /** @class */ (function () {
    function PWAModuleConfig() {
    }
    return PWAModuleConfig;
}());
if (false) {
    /** @type {?} */
    PWAModuleConfig.prototype.pwa;
}
/** @type {?} */
var defaultPWAModuleConfig = {
    pwa: {
        enabled: false,
        addToHomeScreen: false,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddToHomeScreenService = /** @class */ (function () {
    function AddToHomeScreenService(config, globalMessageService, winRef) {
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
    AddToHomeScreenService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.winRef.nativeWindow) {
            this.winRef.nativeWindow.addEventListener('beforeinstallprompt', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.preventDefault();
                _this.deferredEvent = event;
                _this.enableAddToHomeScreen();
            }));
            this.winRef.nativeWindow.addEventListener('appinstalled', (/**
             * @return {?}
             */
            function () {
                _this.globalMessageService.add({ key: 'pwa.addedToHomeScreen' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
                _this.disableAddToHomeScreen();
                _this.deferredEvent = null;
            }));
        }
    };
    /**
     * @return {?}
     */
    AddToHomeScreenService.prototype.enableAddToHomeScreen = /**
     * @return {?}
     */
    function () {
        this.canPrompt.next(true);
    };
    /**
     * @return {?}
     */
    AddToHomeScreenService.prototype.disableAddToHomeScreen = /**
     * @return {?}
     */
    function () {
        this.canPrompt.next(false);
    };
    /**
     * @return {?}
     */
    AddToHomeScreenService.prototype.firePrompt = /**
     * @return {?}
     */
    function () {
        if (this.deferredEvent) {
            this.deferredEvent.prompt();
        }
    };
    AddToHomeScreenService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddToHomeScreenService.ctorParameters = function () { return [
        { type: PWAModuleConfig },
        { type: GlobalMessageService },
        { type: WindowRef }
    ]; };
    return AddToHomeScreenService;
}());
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
var  /**
 * @abstract
 */
AddToHomeScreenComponent = /** @class */ (function () {
    function AddToHomeScreenComponent(addToHomeScreenService) {
        this.addToHomeScreenService = addToHomeScreenService;
    }
    /**
     * @return {?}
     */
    AddToHomeScreenComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.canPrompt$ = this.addToHomeScreenService.canPrompt$;
    };
    /**
     * @return {?}
     */
    AddToHomeScreenComponent.prototype.prompt = /**
     * @return {?}
     */
    function () {
        this.addToHomeScreenService.firePrompt();
    };
    return AddToHomeScreenComponent;
}());
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
var AddToHomeScreenBannerComponent = /** @class */ (function (_super) {
    __extends(AddToHomeScreenBannerComponent, _super);
    function AddToHomeScreenBannerComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-home-screen-banner',
                    template: "<div *ngIf=\"canPrompt$ | async\">\n  <div class=\"cx-add-to-home-screen-banner\">\n    <div class=\"cx-add-to-home-screen-banner-inner\">\n      <p>\n        {{ 'pwa.addToHomeScreenDescription' | cxTranslate }}\n      </p>\n      <ul>\n        <li>{{ 'pwa.noInstallationNeeded' | cxTranslate }}</li>\n        <li>{{ 'pwa.fastAccessToApplication' | cxTranslate }}</li>\n      </ul>\n      <button (click)=\"prompt()\" class=\"btn btn-primary\">\n        {{ 'pwa.addToHomeScreen' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddToHomeScreenBannerComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    return AddToHomeScreenBannerComponent;
}(AddToHomeScreenComponent));
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
var AddToHomeScreenBtnComponent = /** @class */ (function (_super) {
    __extends(AddToHomeScreenBtnComponent, _super);
    function AddToHomeScreenBtnComponent(addToHomeScreenService) {
        var _this = _super.call(this, addToHomeScreenService) || this;
        _this.addToHomeScreenService = addToHomeScreenService;
        return _this;
    }
    AddToHomeScreenBtnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-home-screen-btn',
                    template: "<span (click)=\"prompt()\">\n  <ng-content *ngIf=\"canPrompt$ | async\"></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    AddToHomeScreenBtnComponent.ctorParameters = function () { return [
        { type: AddToHomeScreenService }
    ]; };
    return AddToHomeScreenBtnComponent;
}(AddToHomeScreenComponent));
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
    var result = (/**
     * @return {?}
     */
    function () { return addToHomeScreenService; });
    return result;
}
var PwaModule = /** @class */ (function () {
    function PwaModule() {
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
    return PwaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SeoMetaService = /** @class */ (function () {
    function SeoMetaService(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    SeoMetaService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return (_this.meta = meta); }));
    };
    Object.defineProperty(SeoMetaService.prototype, "meta", {
        set: /**
         * @protected
         * @param {?} meta
         * @return {?}
         */
        function (meta) {
            this.title = meta.title;
            this.description = meta.description;
            this.image = meta.image;
            this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "title", {
        set: /**
         * @protected
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.ngTitle.setTitle(title || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "description", {
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addTag({ name: 'description', content: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "image", {
        set: /**
         * @protected
         * @param {?} imageUrl
         * @return {?}
         */
        function (imageUrl) {
            if (imageUrl) {
                this.addTag({ name: 'og:image', content: imageUrl });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "robots", {
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.addTag({ name: 'robots', content: value.join(', ') });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    SeoMetaService.prototype.addTag = /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    };
    SeoMetaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SeoMetaService.ctorParameters = function () { return [
        { type: Title },
        { type: Meta },
        { type: PageMetaService }
    ]; };
    /** @nocollapse */ SeoMetaService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(ɵɵinject(Title), ɵɵinject(Meta), ɵɵinject(PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
    return SeoMetaService;
}());
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
var htmlLangProvider = {
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
    var result = (/**
     * @return {?}
     */
    function () {
        languageService.getActive().subscribe((/**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            winRef.document.documentElement.lang = lang;
        }));
    });
    return result;
}

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
    var result = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var service = injector.get(SeoMetaService);
        service.init();
    });
    return result;
}
var SeoModule = /** @class */ (function () {
    function SeoModule() {
    }
    SeoModule.decorators = [
        { type: NgModule, args: [{
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
    return SeoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorefrontComponent = /** @class */ (function () {
    function StorefrontComponent(hamburgerMenuService, routingService) {
        this.hamburgerMenuService = hamburgerMenuService;
        this.routingService = routingService;
        this.isExpanded$ = this.hamburgerMenuService.isExpanded;
    }
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.navigateSubscription = this.routingService
            .isNavigating()
            .subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.startNavigating = val === true;
            _this.stopNavigating = val === false;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StorefrontComponent.prototype.collapseMenuIfClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (event.target))).className.includes('is-expanded')) {
            this.collapseMenu();
        }
    };
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.collapseMenu = /**
     * @return {?}
     */
    function () {
        this.hamburgerMenuService.toggle(true);
    };
    /**
     * @return {?}
     */
    StorefrontComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.navigateSubscription) {
            this.navigateSubscription.unsubscribe();
        }
    };
    StorefrontComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-storefront',
                    template: "<header\n  [class.is-expanded]=\"isExpanded$ | async\"\n  (keydown.escape)=\"collapseMenu()\"\n  (click)=\"collapseMenuIfClickOutside($event)\"\n>\n  <cx-page-layout section=\"header\"></cx-page-layout>\n  <cx-page-layout section=\"navigation\"></cx-page-layout>\n</header>\n\n<cx-page-slot position=\"BottomHeaderSlot\"></cx-page-slot>\n\n<cx-global-message></cx-global-message>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <cx-page-layout section=\"footer\"></cx-page-layout>\n</footer>\n"
                }] }
    ];
    /** @nocollapse */
    StorefrontComponent.ctorParameters = function () { return [
        { type: HamburgerMenuService },
        { type: RoutingService }
    ]; };
    StorefrontComponent.propDecorators = {
        startNavigating: [{ type: HostBinding, args: ['class.start-navigating',] }],
        stopNavigating: [{ type: HostBinding, args: ['class.stop-navigating',] }]
    };
    return StorefrontComponent;
}());
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
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        GlobalMessageComponentModule,
                        OutletRefModule,
                        PwaModule,
                        PageLayoutModule,
                        SeoModule,
                        PageSlotModule,
                    ],
                    declarations: [StorefrontComponent],
                    exports: [StorefrontComponent],
                },] }
    ];
    return MainModule;
}());

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
var CmsMappingService = /** @class */ (function () {
    function CmsMappingService(config, platformId) {
        this.config = config;
        this.platformId = platformId;
    }
    /**
     * @param {?} flexType
     * @return {?}
     */
    CmsMappingService.prototype.isComponentEnabled = /**
     * @param {?} flexType
     * @return {?}
     */
    function (flexType) {
        /** @type {?} */
        var isSSR = isPlatformServer(this.platformId);
        /** @type {?} */
        var isComponentDisabledInSSR = (this.config.cmsComponents[flexType] || {})
            .disableSSR;
        return !(isSSR && isComponentDisabledInSSR);
    };
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsMappingService.prototype.getRoutesForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_1, _a;
        /** @type {?} */
        var routes = [];
        try {
            for (var componentTypes_1 = __values(componentTypes), componentTypes_1_1 = componentTypes_1.next(); !componentTypes_1_1.done; componentTypes_1_1 = componentTypes_1.next()) {
                var componentType = componentTypes_1_1.value;
                if (this.isComponentEnabled(componentType)) {
                    routes.push.apply(routes, __spread(this.getRoutesForComponent(componentType)));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (componentTypes_1_1 && !componentTypes_1_1.done && (_a = componentTypes_1.return)) _a.call(componentTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return routes;
    };
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsMappingService.prototype.getGuardsForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_2, _a;
        /** @type {?} */
        var guards = new Set();
        try {
            for (var componentTypes_2 = __values(componentTypes), componentTypes_2_1 = componentTypes_2.next(); !componentTypes_2_1.done; componentTypes_2_1 = componentTypes_2.next()) {
                var componentType = componentTypes_2_1.value;
                this.getGuardsForComponent(componentType).forEach((/**
                 * @param {?} guard
                 * @return {?}
                 */
                function (guard) {
                    return guards.add(guard);
                }));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (componentTypes_2_1 && !componentTypes_2_1.done && (_a = componentTypes_2.return)) _a.call(componentTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return Array.from(guards);
    };
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsMappingService.prototype.getI18nKeysForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_3, _a;
        /** @type {?} */
        var i18nKeys = new Set();
        try {
            for (var componentTypes_3 = __values(componentTypes), componentTypes_3_1 = componentTypes_3.next(); !componentTypes_3_1.done; componentTypes_3_1 = componentTypes_3.next()) {
                var componentType = componentTypes_3_1.value;
                if (this.isComponentEnabled(componentType)) {
                    this.getI18nKeysForComponent(componentType).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        return i18nKeys.add(key);
                    }));
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (componentTypes_3_1 && !componentTypes_3_1.done && (_a = componentTypes_3.return)) _a.call(componentTypes_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Array.from(i18nKeys);
    };
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    CmsMappingService.prototype.getRoutesForComponent = /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.childRoutes) || [];
    };
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    CmsMappingService.prototype.getGuardsForComponent = /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.guards) || [];
    };
    /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    CmsMappingService.prototype.getI18nKeysForComponent = /**
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var mappingConfig = this.config.cmsComponents[componentType];
        return (mappingConfig && mappingConfig.i18nKeys) || [];
    };
    CmsMappingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsMappingService.ctorParameters = function () { return [
        { type: CmsConfig },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ CmsMappingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsMappingService_Factory() { return new CmsMappingService(ɵɵinject(CmsConfig), ɵɵinject(PLATFORM_ID)); }, token: CmsMappingService, providedIn: "root" });
    return CmsMappingService;
}());
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
var CmsGuardsService = /** @class */ (function () {
    function CmsGuardsService(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
        this.injector = injector;
    }
    /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsGuardsService.prototype.cmsPageCanActivate = /**
     * @param {?} componentTypes
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (componentTypes, route, state) {
        var _this = this;
        /** @type {?} */
        var guards = this.cmsMapping.getGuardsForComponents(componentTypes);
        if (guards.length) {
            /** @type {?} */
            var canActivateObservables = guards.map((/**
             * @param {?} guardClass
             * @return {?}
             */
            function (guardClass) {
                /** @type {?} */
                var guard = _this.injector.get(guardClass, null);
                if (isCanActivate(guard)) {
                    return wrapIntoObservable(guard.canActivate(route, state)).pipe(first());
                }
                else {
                    throw new Error('Invalid CanActivate guard in cmsMapping');
                }
            }));
            return concat.apply(void 0, __spread(canActivateObservables)).pipe(skipWhile((/**
             * @param {?} canActivate
             * @return {?}
             */
            function (canActivate) { return canActivate === true; })), endWith(true), first());
        }
        else {
            return of(true);
        }
    };
    CmsGuardsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsGuardsService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: Injector }
    ]; };
    /** @nocollapse */ CmsGuardsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsGuardsService_Factory() { return new CmsGuardsService(ɵɵinject(CmsMappingService), ɵɵinject(INJECTOR)); }, token: CmsGuardsService, providedIn: "root" });
    return CmsGuardsService;
}());
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
var CmsI18nService = /** @class */ (function () {
    function CmsI18nService(cmsMapping, translation, translationChunk) {
        this.cmsMapping = cmsMapping;
        this.translation = translation;
        this.translationChunk = translationChunk;
    }
    /**
     * @param {?} componentTypes
     * @return {?}
     */
    CmsI18nService.prototype.loadChunksForComponents = /**
     * @param {?} componentTypes
     * @return {?}
     */
    function (componentTypes) {
        var e_1, _a;
        /** @type {?} */
        var i18nKeys = this.cmsMapping.getI18nKeysForComponents(componentTypes);
        /** @type {?} */
        var i18nChunks = new Set();
        try {
            for (var i18nKeys_1 = __values(i18nKeys), i18nKeys_1_1 = i18nKeys_1.next(); !i18nKeys_1_1.done; i18nKeys_1_1 = i18nKeys_1.next()) {
                var key = i18nKeys_1_1.value;
                i18nChunks.add(this.translationChunk.getChunkNameForKey(key));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (i18nKeys_1_1 && !i18nKeys_1_1.done && (_a = i18nKeys_1.return)) _a.call(i18nKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.translation.loadChunks(Array.from(i18nChunks));
    };
    CmsI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsI18nService.ctorParameters = function () { return [
        { type: CmsMappingService },
        { type: TranslationService },
        { type: TranslationChunkService }
    ]; };
    /** @nocollapse */ CmsI18nService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsI18nService_Factory() { return new CmsI18nService(ɵɵinject(CmsMappingService), ɵɵinject(TranslationService), ɵɵinject(TranslationChunkService)); }, token: CmsI18nService, providedIn: "root" });
    return CmsI18nService;
}());
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
var CmsRoutesService = /** @class */ (function () {
    function CmsRoutesService(router, cmsMapping) {
        this.router = router;
        this.cmsMapping = cmsMapping;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    CmsRoutesService.prototype.cmsRouteExist = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var isCmsDrivenRoute = url.startsWith('/');
        if (!isCmsDrivenRoute) {
            return false;
        }
        /** @type {?} */
        var routePath = url.substr(1);
        return (isCmsDrivenRoute &&
            !!this.router.config.find((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                return route.data && route.data.cxCmsRouteContext && route.path === routePath;
            })));
    };
    /**
     * Contains Cms driven routing logic intended for use use in guards, especially in canActivate method.
     *
     * Will return true, when logic wont have to modify routing (so canActivate could be easily resolved to true)
     * or will return false, when routing configuration was updated and redirection to newly generated route was initiated.
     *
     * @param pageContext
     * @param currentUrl
     */
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
    CmsRoutesService.prototype.handleCmsRoutesInGuard = /**
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
    function (pageContext, componentTypes, currentUrl, currentPageLabel) {
        /** @type {?} */
        var componentRoutes = this.cmsMapping.getRoutesForComponents(componentTypes);
        if (componentRoutes.length) {
            if (this.updateRouting(pageContext, currentPageLabel, componentRoutes)) {
                this.router.navigateByUrl(currentUrl);
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageLabel
     * @param {?} routes
     * @return {?}
     */
    CmsRoutesService.prototype.updateRouting = /**
     * @private
     * @param {?} pageContext
     * @param {?} pageLabel
     * @param {?} routes
     * @return {?}
     */
    function (pageContext, pageLabel, routes) {
        if (pageContext.type === PageType.CONTENT_PAGE &&
            pageLabel.startsWith('/') &&
            pageLabel.length > 1) {
            /** @type {?} */
            var newRoute = {
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
            this.router.resetConfig(__spread([newRoute], this.router.config));
            return true;
        }
        return false;
    };
    CmsRoutesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsRoutesService.ctorParameters = function () { return [
        { type: Router },
        { type: CmsMappingService }
    ]; };
    /** @nocollapse */ CmsRoutesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return new CmsRoutesService(ɵɵinject(Router), ɵɵinject(CmsMappingService)); }, token: CmsRoutesService, providedIn: "root" });
    return CmsRoutesService;
}());
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
var CmsPageGuard = /** @class */ (function () {
    function CmsPageGuard(routingService, cmsService, cmsRoutes, cmsI18n, cmsGuards, semanticPathService, protectedRoutesGuard) {
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
    CmsPageGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
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
            function (result) {
                return result ? _this.getCmsPage(route, state) : of(result);
            })))
            : this.getCmsPage(route, state);
    };
    /**
     * @private
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.getCmsPage = /**
     * @private
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        return this.routingService.getNextPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) {
            return _this.cmsService.getPage(pageContext, true).pipe(first(), withLatestFrom(of(pageContext)));
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), pageData = _b[0], pageContext = _b[1];
            return pageData
                ? _this.resolveCmsPageLogic(pageContext, pageData, route, state)
                : _this.handleNotFoundPage(pageContext, route, state);
        })));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} pageData
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.resolveCmsPageLogic = /**
     * @private
     * @param {?} pageContext
     * @param {?} pageData
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (pageContext, pageData, route, state) {
        var _this = this;
        return this.cmsService.getPageComponentTypes(pageContext).pipe(take(1), switchMap((/**
         * @param {?} componentTypes
         * @return {?}
         */
        function (componentTypes) {
            return _this.cmsGuards
                .cmsPageCanActivate(componentTypes, route, state)
                .pipe(withLatestFrom(of(componentTypes)));
        })), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            if (canActivate === true) {
                _this.cmsI18n.loadChunksForComponents(componentTypes);
            }
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), canActivate = _b[0], componentTypes = _b[1];
            /** @type {?} */
            var pageLabel = pageData.label || pageContext.id;
            if (canActivate === true &&
                !route.data.cxCmsRouteContext &&
                !_this.cmsRoutes.cmsRouteExist(pageLabel)) {
                return _this.cmsRoutes.handleCmsRoutesInGuard(pageContext, componentTypes, state.url, pageLabel);
            }
            return canActivate;
        })));
    };
    /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    CmsPageGuard.prototype.handleNotFoundPage = /**
     * @private
     * @param {?} pageContext
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (pageContext, route, state) {
        var _this = this;
        /** @type {?} */
        var notFoundCmsPageContext = {
            type: PageType.CONTENT_PAGE,
            id: this.semanticPathService.get('notFound'),
        };
        return this.cmsService.getPage(notFoundCmsPageContext).pipe(switchMap((/**
         * @param {?} notFoundPage
         * @return {?}
         */
        function (notFoundPage) {
            if (notFoundPage) {
                return _this.cmsService.getPageIndex(notFoundCmsPageContext).pipe(tap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                function (notFoundIndex) {
                    _this.cmsService.setPageFailIndex(pageContext, notFoundIndex);
                })), switchMap((/**
                 * @param {?} notFoundIndex
                 * @return {?}
                 */
                function (notFoundIndex) {
                    return _this.cmsService.getPageIndex(pageContext).pipe(
                    // we have to wait for page index update
                    filter((/**
                     * @param {?} index
                     * @return {?}
                     */
                    function (index) { return index === notFoundIndex; })));
                })), switchMap((/**
                 * @return {?}
                 */
                function () {
                    return _this.resolveCmsPageLogic(pageContext, notFoundPage, route, state);
                })));
            }
            return of(false);
        })));
    };
    CmsPageGuard.guardName = 'CmsPageGuard';
    CmsPageGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsPageGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: CmsService },
        { type: CmsRoutesService },
        { type: CmsI18nService },
        { type: CmsGuardsService },
        { type: SemanticPathService },
        { type: ProtectedRoutesGuard }
    ]; };
    /** @nocollapse */ CmsPageGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function CmsPageGuard_Factory() { return new CmsPageGuard(ɵɵinject(RoutingService), ɵɵinject(CmsService), ɵɵinject(CmsRoutesService), ɵɵinject(CmsI18nService), ɵɵinject(CmsGuardsService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesGuard)); }, token: CmsPageGuard, providedIn: "root" });
    return CmsPageGuard;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cmsRoute = {
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
    var result = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var router = injector.get(Router);
        router.config.push(cmsRoute);
    });
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = addCmsRoute;
var CmsRouteModule = /** @class */ (function () {
    function CmsRouteModule() {
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
    return CmsRouteModule;
}());

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
 * Generic carousel that renders CMS Components.
 */
var BannerCarouselComponent = /** @class */ (function () {
    function BannerCarouselComponent(componentData, cmsService) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return (_this.theme = d.effect + "-theme"); })));
        this.items$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.banners.trim().split(' '); })), map((/**
         * @param {?} codes
         * @return {?}
         */
        function (codes) { return codes.map((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return _this.cmsService.getComponentData(code); })); })));
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
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @return {?}
     */
    BannerCarouselComponent.prototype.getItems = /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @return {?}
     */
    function () {
        return this.items$;
    };
    BannerCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-banner-carousel',
                    template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BannerCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService }
    ]; };
    BannerCarouselComponent.propDecorators = {
        theme: [{ type: HostBinding, args: ['class',] }]
    };
    return BannerCarouselComponent;
}());
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
var BannerCarouselModule = /** @class */ (function () {
    function BannerCarouselModule() {
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
    return BannerCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BannerComponent = /** @class */ (function () {
    function BannerComponent(component) {
        this.component = component;
    }
    BannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-banner',
                    template: "<ng-container *ngIf=\"component.data$ | async as data\">\n  <cx-generic-link\n    [url]=\"data.urlLink\"\n    [target]=\"data.external ? '_blank' : null\"\n    [title]=\"data.media?.altText\"\n  >\n    <p *ngIf=\"data.headline\" [innerHTML]=\"data.headline\"></p>\n    <cx-media [container]=\"data.media\"></cx-media>\n    <p *ngIf=\"data.content\" [innerHTML]=\"data.content\"></p>\n  </cx-generic-link>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BannerComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    return BannerComponent;
}());
if (false) {
    /** @type {?} */
    BannerComponent.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BannerModule = /** @class */ (function () {
    function BannerModule() {
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
    return BannerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinkComponent = /** @class */ (function () {
    function LinkComponent(component) {
        this.component = component;
    }
    LinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-link',
                    template: "<cx-generic-link\n  *ngIf=\"component.data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    LinkComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    return LinkComponent;
}());
if (false) {
    /** @type {?} */
    LinkComponent.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinkModule = /** @class */ (function () {
    function LinkModule() {
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
    return LinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(component) {
        this.component = component;
    }
    ParagraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-paragraph',
                    template: "<p *ngIf=\"component.data$ | async as data\" [innerHTML]=\"data.content\"></p>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ParagraphComponent.ctorParameters = function () { return [
        { type: CmsComponentData }
    ]; };
    return ParagraphComponent;
}());
if (false) {
    /** @type {?} */
    ParagraphComponent.prototype.component;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsParagraphModule = /** @class */ (function () {
    function CmsParagraphModule() {
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
    return CmsParagraphModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabParagraphContainerComponent = /** @class */ (function () {
    function TabParagraphContainerComponent(componentData, cmsService) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.activeTabNum = 0;
        this.components$ = this.componentData.data$.pipe(switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return combineLatest(data.components.split(' ').map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                return _this.cmsService.getComponentData(component).pipe(map((/**
                 * @param {?} tab
                 * @return {?}
                 */
                function (tab) {
                    if (!tab.flexType) {
                        tab = __assign({}, tab, { flexType: tab.typeCode });
                    }
                    return __assign({}, tab, { title: "CMSTabParagraphContainer.tabs." + tab.uid });
                })));
            })));
        })));
    }
    /**
     * @param {?} tabNum
     * @return {?}
     */
    TabParagraphContainerComponent.prototype.select = /**
     * @param {?} tabNum
     * @return {?}
     */
    function (tabNum) {
        this.activeTabNum = tabNum;
    };
    TabParagraphContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-tab-paragraph-container',
                    template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template\n      [cxOutlet]=\"component.flexType\"\n      [cxOutletContext]=\"{}\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-template>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TabParagraphContainerComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService }
    ]; };
    return TabParagraphContainerComponent;
}());
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
var TabParagraphContainerModule = /** @class */ (function () {
    function TabParagraphContainerModule() {
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
    return TabParagraphContainerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddressBookComponentService = /** @class */ (function () {
    function AddressBookComponentService(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.getAddresses = /**
     * @return {?}
     */
    function () {
        return this.userAddressService.getAddresses();
    };
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.getAddressesStateLoading = /**
     * @return {?}
     */
    function () {
        return this.userAddressService.getAddressesLoading();
    };
    /**
     * @return {?}
     */
    AddressBookComponentService.prototype.loadAddresses = /**
     * @return {?}
     */
    function () {
        this.userAddressService.loadAddresses();
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponentService.prototype.addUserAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.userAddressService.addUserAddress(address);
    };
    /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    AddressBookComponentService.prototype.updateUserAddress = /**
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (addressId, address) {
        this.userAddressService.updateUserAddress(addressId, address);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressBookComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddressBookComponentService.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: FeatureConfigService }
    ]; };
    return AddressBookComponentService;
}());
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
var AddressBookComponent = /** @class */ (function () {
    function AddressBookComponent(service) {
        this.service = service;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    };
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.addAddressButtonHandle = /**
     * @return {?}
     */
    function () {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponent.prototype.editAddressButtonHandle = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponent.prototype.addAddressSubmit = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    };
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.addAddressCancel = /**
     * @return {?}
     */
    function () {
        this.showAddAddressForm = false;
    };
    /**
     * @param {?} address
     * @return {?}
     */
    AddressBookComponent.prototype.editAddressSubmit = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.showEditAddressForm = false;
        this.service.updateUserAddress(this.currentAddress['id'], address);
    };
    /**
     * @return {?}
     */
    AddressBookComponent.prototype.editAddressCancel = /**
     * @return {?}
     */
    function () {
        this.showEditAddressForm = false;
    };
    AddressBookComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-book',
                    template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async).length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        *ngFor=\"let address of addresses$ | async\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-address-card\n          (editEvent)=\"editAddressButtonHandle(address)\"\n          [address]=\"address\"\n        ></cx-address-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"!(addresses$ | async).length || showAddAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        showTitleCode=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async).length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async).length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editShippingAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        showTitleCode=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    AddressBookComponent.ctorParameters = function () { return [
        { type: AddressBookComponentService }
    ]; };
    return AddressBookComponent;
}());
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
var AddressCardComponent = /** @class */ (function () {
    function AddressCardComponent(userAddressService, checkoutDeliveryService, featureConfigService) {
        this.userAddressService = userAddressService;
        this.checkoutDeliveryService = checkoutDeliveryService;
        this.featureConfigService = featureConfigService;
        this.editEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AddressCardComponent.prototype.openEditFormEvent = /**
     * @return {?}
     */
    function () {
        this.editEvent.emit();
    };
    /**
     * @return {?}
     */
    AddressCardComponent.prototype.cancelEdit = /**
     * @return {?}
     */
    function () {
        this.editMode = false;
    };
    /**
     * @return {?}
     */
    AddressCardComponent.prototype.setEditMode = /**
     * @return {?}
     */
    function () {
        this.editMode = true;
    };
    /**
     * @param {?} addressId
     * @return {?}
     */
    AddressCardComponent.prototype.setAddressAsDefault = /**
     * @param {?} addressId
     * @return {?}
     */
    function (addressId) {
        this.userAddressService.setAddressAsDefault(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    /**
     * @param {?} addressId
     * @return {?}
     */
    AddressCardComponent.prototype.deleteAddress = /**
     * @param {?} addressId
     * @return {?}
     */
    function (addressId) {
        this.userAddressService.deleteUserAddress(addressId);
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.featureConfigService &&
            this.featureConfigService.isLevel('1.2') &&
            this.checkoutDeliveryService) {
            this.checkoutDeliveryService.clearCheckoutDeliveryDetails();
        }
    };
    AddressCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-address-card',
                    template: "<div class=\"card\">\n  <div class=\"card-header\" *ngIf=\"address?.defaultAddress && !editMode\">\n    &#10003; {{ 'addressCard.default' | cxTranslate }}\n  </div>\n  <div\n    class=\"card-body cx-card-body\"\n    [class.cx-address-card-delete-mode]=\"editMode\"\n  >\n    <div *ngIf=\"editMode\" class=\"cx-address-card-delete-msg\">\n      {{ 'addressBook.areYouSureToDeleteAddress' | cxTranslate }}\n    </div>\n    <div class=\"cx-address-data\">\n      <div class=\"cx-address-card-label-name\">\n        {{ address?.firstName }} {{ address?.lastName }}\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.line1 }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.line2 }}</div>\n      <div class=\"cx-address-card-label\">\n        {{ address?.town }},\n        <span *ngIf=\"!address?.region?.isocode\">{{\n          address?.country?.isocode\n        }}</span\n        ><span>{{ address?.region?.isocode }}</span>\n      </div>\n      <div class=\"cx-address-card-label\">{{ address?.postalCode }}</div>\n      <div class=\"cx-address-card-label\">{{ address?.phone }}</div>\n    </div>\n\n    <div *ngIf=\"editMode\" class=\"row cx-address-card-delete\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-secondary\" (click)=\"cancelEdit()\">\n          {{ 'common.cancel' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-6\">\n        <button\n          (click)=\"deleteAddress(address.id)\"\n          class=\"btn btn-block btn-primary\"\n        >\n          {{ 'common.delete' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"!editMode\" class=\"card-actions\">\n      <a\n        *ngIf=\"!address?.defaultAddress\"\n        (click)=\"setAddressAsDefault(address.id)\"\n        class=\"card-link btn-link set-default\"\n        >{{ 'addressCard.setAsDefault' | cxTranslate }}</a\n      >\n      <a (click)=\"openEditFormEvent()\" class=\"card-link btn-link edit\">{{\n        'common.edit' | cxTranslate\n      }}</a>\n      <a (click)=\"setEditMode()\" class=\"card-link btn-link delete\">{{\n        'common.delete' | cxTranslate\n      }}</a>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddressCardComponent.ctorParameters = function () { return [
        { type: UserAddressService },
        { type: CheckoutDeliveryService },
        { type: FeatureConfigService }
    ]; };
    AddressCardComponent.propDecorators = {
        address: [{ type: Input }],
        editEvent: [{ type: Output }]
    };
    return AddressCardComponent;
}());
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
var AddressBookModule = /** @class */ (function () {
    function AddressBookModule() {
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
    return AddressBookModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CloseAccountModalComponent = /** @class */ (function () {
    function CloseAccountModalComponent(modalService, userService, authService, globalMessageService, routingService, translationService) {
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
    CloseAccountModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userToken$ = this.authService.getUserToken();
        this.userService.resetRemoveUserProcessState();
        this.subscription.add(this.userService
            .getRemoveUserResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onSuccess(success); })));
        this.subscription.add(this.userService
            .getRemoveUserResultError()
            .subscribe((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.onError(error); })));
        this.isLoading$ = this.userService.getRemoveUserResultLoading();
    };
    /**
     * @param {?} success
     * @return {?}
     */
    CloseAccountModalComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        var _this = this;
        if (success) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedSuccessfully')
                .pipe(first())
                .subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            }));
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    CloseAccountModalComponent.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        var _this = this;
        if (error) {
            this.dismissModal();
            this.translationService
                .translate('closeAccount.accountClosedFailure')
                .pipe(first())
                .subscribe((/**
             * @param {?} text
             * @return {?}
             */
            function (text) {
                _this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
            }));
        }
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    CloseAccountModalComponent.prototype.dismissModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.dismissActiveModal(reason);
    };
    /**
     * @return {?}
     */
    CloseAccountModalComponent.prototype.closeAccount = /**
     * @return {?}
     */
    function () {
        this.userService.remove();
    };
    /**
     * @return {?}
     */
    CloseAccountModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CloseAccountModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-close-account-modal',
                    template: "<ng-container *ngIf=\"userToken$ | async as userToken\">\n  <div class=\"modal-header cx-dialog-header\">\n    <h3 class=\"modal-title\">\n      {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n    </h3>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"dismissModal()\"\n    >\n      <span aria-hidden=\"true\">\n        <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n      </span>\n    </button>\n  </div>\n\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"modal-body\">\n      <div class=\"cx-row\">\n        <p class=\"cx-confirmation\">\n          {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n        </p>\n      </div>\n      <div class=\"cx-row\">\n        <div class=\"cx-btn-group\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button (click)=\"dismissModal()\" class=\"btn btn-block btn-secondary\">\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CloseAccountModalComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: UserService },
        { type: AuthService },
        { type: GlobalMessageService },
        { type: RoutingService },
        { type: TranslationService }
    ]; };
    return CloseAccountModalComponent;
}());
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
var CloseAccountComponent = /** @class */ (function () {
    function CloseAccountComponent(modalService) {
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    CloseAccountComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.modal = this.modalService.open(CloseAccountModalComponent, {
            centered: true,
        }).componentInstance;
    };
    CloseAccountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-close-account',
                    template: "<div class=\"col-lg-8 col-md-9\">\n  <div class=\"row cx-btn-group\">\n    <div class=\"col-sm-3\">\n      <a\n        [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n        class=\"btn btn-block btn-secondary\"\n        >{{ 'common.cancel' | cxTranslate }}</a\n      >\n    </div>\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" (click)=\"openModal()\">\n        {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CloseAccountComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    return CloseAccountComponent;
}());
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
var CloseAccountModule = /** @class */ (function () {
    function CloseAccountModule() {
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
    return CloseAccountModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsentManagementFormComponent = /** @class */ (function () {
    function ConsentManagementFormComponent() {
        this.consentChanged = new EventEmitter();
        this.consentGiven = false;
    }
    /**
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.consentTemplate && this.consentTemplate.currentConsent) {
            if (this.consentTemplate.currentConsent.consentWithdrawnDate) {
                this.consentGiven = false;
            }
            else if (this.consentTemplate.currentConsent.consentGivenDate) {
                this.consentGiven = true;
            }
        }
    };
    /**
     * @return {?}
     */
    ConsentManagementFormComponent.prototype.onConsentChange = /**
     * @return {?}
     */
    function () {
        this.consentChanged.emit({
            given: !this.consentGiven,
            template: this.consentTemplate,
        });
    };
    ConsentManagementFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management-form',
                    template: "<div class=\"form-check\">\n  <label>\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      [checked]=\"consentGiven\"\n      (change)=\"onConsentChange()\"\n    />\n    <span class=\"form-check-label\">\n      {{ consentTemplate?.description }}\n    </span>\n  </label>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementFormComponent.ctorParameters = function () { return []; };
    ConsentManagementFormComponent.propDecorators = {
        consentTemplate: [{ type: Input }],
        consentChanged: [{ type: Output }]
    };
    return ConsentManagementFormComponent;
}());
if (false) {
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentTemplate;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentChanged;
    /** @type {?} */
    ConsentManagementFormComponent.prototype.consentGiven;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsentManagementComponent = /** @class */ (function () {
    function ConsentManagementComponent(userConsentService, globalMessageService) {
        this.userConsentService = userConsentService;
        this.globalMessageService = globalMessageService;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    ConsentManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), consentLoading = _b[0], giveConsentLoading = _b[1], withdrawConsentLoading = _b[2];
            return consentLoading || giveConsentLoading || withdrawConsentLoading;
        })));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    };
    /**
     * @private
     * @return {?}
     */
    ConsentManagementComponent.prototype.consentListInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.templateList$ = this.userConsentService.getConsents().pipe(tap((/**
         * @param {?} templateList
         * @return {?}
         */
        function (templateList) {
            if (!_this.consentsExists(templateList)) {
                _this.userConsentService.loadConsents();
            }
        })));
    };
    /**
     * @private
     * @return {?}
     */
    ConsentManagementComponent.prototype.giveConsentInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onConsentGivenSuccess(success); })));
    };
    /**
     * @private
     * @return {?}
     */
    ConsentManagementComponent.prototype.withdrawConsentInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), withdrawalSuccess = _b[1];
            return withdrawalSuccess;
        })), tap((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        function (withdrawalSuccess) {
            if (withdrawalSuccess) {
                _this.userConsentService.loadConsents();
            }
        })))
            .subscribe((/**
         * @param {?} withdrawalSuccess
         * @return {?}
         */
        function (withdrawalSuccess) {
            return _this.onConsentWithdrawnSuccess(withdrawalSuccess);
        })));
    };
    /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    ConsentManagementComponent.prototype.consentsExists = /**
     * @private
     * @param {?} templateList
     * @return {?}
     */
    function (templateList) {
        return Boolean(templateList) && templateList.length > 0;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConsentManagementComponent.prototype.onConsentChange = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var given = _a.given, template = _a.template;
        if (given) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    };
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    ConsentManagementComponent.prototype.onConsentGivenSuccess = /**
     * @private
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    ConsentManagementComponent.prototype.onConsentWithdrawnSuccess = /**
     * @private
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    /**
     * @return {?}
     */
    ConsentManagementComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    };
    ConsentManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consent-management',
                    template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else consentManagementForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #consentManagementForm>\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-8\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList$ | async\"\n          [consentTemplate]=\"consentTemplate\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ConsentManagementComponent.ctorParameters = function () { return [
        { type: UserConsentService },
        { type: GlobalMessageService }
    ]; };
    return ConsentManagementComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConsentManagementComponent.prototype.subscriptions;
    /** @type {?} */
    ConsentManagementComponent.prototype.templateList$;
    /** @type {?} */
    ConsentManagementComponent.prototype.loading$;
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsentManagementModule = /** @class */ (function () {
    function ConsentManagementModule() {
    }
    ConsentManagementModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                ConsentManagementComponent: {
                                    component: ConsentManagementComponent,
                                    guards: [AuthGuard],
                                },
                            },
                        }))),
                        FormsModule,
                        ReactiveFormsModule,
                        SpinnerModule,
                        I18nModule,
                    ],
                    declarations: [ConsentManagementComponent, ConsentManagementFormComponent],
                    exports: [ConsentManagementComponent, ConsentManagementFormComponent],
                    entryComponents: [ConsentManagementComponent],
                },] }
    ];
    return ConsentManagementModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomFormValidators = /** @class */ (function () {
    function CustomFormValidators() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.emailDomainValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var email = (/** @type {?} */ (control.value));
        return email.match('[.][a-zA-Z]+$') ? null : { InvalidEmail: true };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.emailValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var email = (/** @type {?} */ (control.value));
        return email.match(EMAIL_PATTERN) ? null : { InvalidEmail: true };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.passwordValidator = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var password = (/** @type {?} */ (control.value));
        return password.match(PASSWORD_PATTERN) ? null : { InvalidPassword: true };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    CustomFormValidators.matchPassword = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.get('password').value !== control.get('passwordconf').value) {
            return { NotEqual: true };
        }
        return null;
    };
    return CustomFormValidators;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, userService, routingService) {
        this.fb = fb;
        this.userService = userService;
        this.routingService = routingService;
        this.submited = false;
    }
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            userEmail: [
                '',
                [Validators.required, CustomFormValidators.emailValidator],
            ],
        });
    };
    /**
     * @return {?}
     */
    ForgotPasswordComponent.prototype.requestForgotPasswordEmail = /**
     * @return {?}
     */
    function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.requestForgotPasswordEmail(this.form.value.userEmail);
        this.routingService.go({ cxRoute: 'login' });
    };
    ForgotPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-forgot-password',
                    template: "<form (submit)=\"requestForgotPasswordEmail()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'forgottenPassword.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{\n          'forgottenPassword.emailAddress.placeholder' | cxTranslate\n        }}\"\n        formControlName=\"userEmail\"\n        [ngClass]=\"{\n          'is-invalid':\n            form.controls['userEmail'].invalid &&\n            (submited ||\n              (form.controls['userEmail'].touched &&\n                form.controls['userEmail'].dirty))\n        }\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.controls['userEmail'].invalid &&\n          (submited ||\n            (form.controls['userEmail'].touched &&\n              form.controls['userEmail'].dirty))\n        \"\n      >\n        <span>{{ 'forgottenPassword.enterValidEmail' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'common.submit' | cxTranslate }}\n  </button>\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n    >{{ 'common.cancel' | cxTranslate }}</a\n  >\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: UserService },
        { type: RoutingService }
    ]; };
    return ForgotPasswordComponent;
}());
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
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
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
    return ForgotPasswordModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(userOrderService, routingService, cartDataService) {
        var _this = this;
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.cartDataService = cartDataService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} routingData
         * @return {?}
         */
        function (routingData) { return routingData.state.params.orderCode; })));
        this.orderLoad$ = this.orderCode$.pipe(tap((/**
         * @param {?} orderCode
         * @return {?}
         */
        function (orderCode) {
            if (orderCode) {
                if (_this.cartDataService.userId === OCC_USER_ID_ANONYMOUS) {
                    _this.userOrderService.loadOrderDetails(orderCode, OCC_USER_ID_ANONYMOUS);
                }
                else {
                    _this.userOrderService.loadOrderDetails(orderCode);
                }
            }
            else {
                _this.userOrderService.clearOrderDetails();
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    OrderDetailsService.prototype.getOrderDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.orderLoad$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.userOrderService.getOrderDetails(); })));
    };
    OrderDetailsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsService.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: RoutingService },
        { type: CartDataService }
    ]; };
    return OrderDetailsService;
}());
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
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.cartDataService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderDetailHeadlineComponent = /** @class */ (function () {
    function OrderDetailHeadlineComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    OrderDetailHeadlineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    OrderDetailHeadlineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-headline',
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.orderId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.placed' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ order?.created | cxDate }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'orderDetails.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\" *ngIf=\"order?.statusDisplay\">\n        {{\n          'orderDetails.statusDisplay'\n            | cxTranslate: { context: order?.statusDisplay }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailHeadlineComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderDetailHeadlineComponent;
}());
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
var OrderDetailItemsComponent = /** @class */ (function () {
    function OrderDetailItemsComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    /**
     * @param {?} consignment
     * @return {?}
     */
    OrderDetailItemsComponent.prototype.getConsignmentProducts = /**
     * @param {?} consignment
     * @return {?}
     */
    function (consignment) {
        /** @type {?} */
        var products = [];
        consignment.entries.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            products.push(element.orderEntry);
        }));
        return products;
    };
    OrderDetailItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-items',
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div *ngFor=\"let consignment of order.consignments\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        <span *ngIf=\"consignment\">\n          {{\n            'orderDetails.deliveryStatus'\n              | cxTranslate: { context: consignment.status }\n          }}\n        </span>\n      </div>\n      <div *ngIf=\"consignment?.statusDate\" class=\"cx-list-date\">\n        <div>{{ 'orderDetails.shippedOn' | cxTranslate }}&nbsp;</div>\n        <div>{{ consignment?.statusDate | cxDate }}</div>\n      </div>\n\n      <cx-consignment-tracking\n        [orderCode]=\"order.code\"\n        [consignment]=\"consignment\"\n        *cxFeature=\"'consignmentTracking'\"\n      >\n      </cx-consignment-tracking>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"getConsignmentProducts(consignment)\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n\n  <div *ngIf=\"order.unconsignedEntries?.length\" class=\"cx-list row\">\n    <div class=\"cx-list-header col-12\">\n      <div class=\"cx-list-status\">\n        {{ 'orderDetails.pending' | cxTranslate }}\n      </div>\n    </div>\n    <div class=\"cx-list-item col-12\">\n      <cx-cart-item-list\n        [items]=\"order?.unconsignedEntries\"\n        [isReadOnly]=\"true\"\n      ></cx-cart-item-list>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailItemsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderDetailItemsComponent;
}());
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
var OrderDetailShippingComponent = /** @class */ (function () {
    function OrderDetailShippingComponent(orderDetailsService, translation) {
        this.orderDetailsService = orderDetailsService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    /**
     * @param {?} address
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getAddressCardContent = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        return combineLatest([
            this.translation.translate('addressCard.shipTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: address.firstName + " " + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ", " + address.country.isocode + ", " + address.postalCode,
                    address.phone,
                ],
            };
        })));
    };
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getBillingAddressCardContent = /**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) {
        return combineLatest([
            this.translation.translate('addressCard.billTo'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: billingAddress.firstName + " " + billingAddress.lastName,
                text: [
                    billingAddress.line1,
                    billingAddress.line2,
                    billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                    billingAddress.phone,
                ],
            };
        })));
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getPaymentCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
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
        function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return {
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardType.name, payment.cardNumber, textExpires],
            };
        })));
    };
    /**
     * @param {?} shipping
     * @return {?}
     */
    OrderDetailShippingComponent.prototype.getShippingMethodCardContent = /**
     * @param {?} shipping
     * @return {?}
     */
    function (shipping) {
        return combineLatest([
            this.translation.translate('checkoutShipping.shippingMethod'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), textTitle = _b[0];
            return {
                title: textTitle,
                textBold: shipping.name,
                text: [shipping.description],
            };
        })));
    };
    OrderDetailShippingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-shipping',
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-account-summary row\">\n    <div\n      *ngIf=\"order.deliveryAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"getAddressCardContent(order.deliveryAddress) | async\"\n      ></cx-card>\n    </div>\n    <div\n      *ngIf=\"order.paymentInfo?.billingAddress\"\n      class=\"cx-summary-card col-sm-12 col-md-4\"\n    >\n      <cx-card\n        [content]=\"\n          getBillingAddressCardContent(order.paymentInfo.billingAddress) | async\n        \"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.paymentInfo\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getPaymentCardContent(order.paymentInfo) | async\"\n      ></cx-card>\n    </div>\n    <div *ngIf=\"order.deliveryMode\" class=\"cx-summary-card col-sm-12 col-md-4\">\n      <cx-card\n        [content]=\"getShippingMethodCardContent(order.deliveryMode) | async\"\n      ></cx-card>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailShippingComponent.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: TranslationService }
    ]; };
    return OrderDetailShippingComponent;
}());
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
var OrderDetailTotalsComponent = /** @class */ (function () {
    function OrderDetailTotalsComponent(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    /**
     * @return {?}
     */
    OrderDetailTotalsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.orderDetailsService.getOrderDetails();
    };
    OrderDetailTotalsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-details-totals',
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderDetailTotalsComponent.ctorParameters = function () { return [
        { type: OrderDetailsService }
    ]; };
    return OrderDetailTotalsComponent;
}());
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
var TrackingEventsComponent = /** @class */ (function () {
    function TrackingEventsComponent(activeModal, userOrderService) {
        this.activeModal = activeModal;
        this.userOrderService = userOrderService;
    }
    /**
     * @return {?}
     */
    TrackingEventsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userOrderService.clearConsignmentTracking();
    };
    TrackingEventsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-tracking-events',
                    template: "<div class=\"cx-consignment-tracking-dialog\">\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"tracking$ | async as consignmentTracking; else loading\">\n    <div class=\"header modal-header\">\n      <div class=\"title modal-title\">\n        {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <!-- shipment header -->\n    <ng-container\n      *ngIf=\"\n        consignmentTracking?.carrierDetails && consignmentTracking?.trackingID;\n        else noTracking\n      \"\n    >\n      <div class=\"shipment-heading\" data-test=\"head-track\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title \">\n              {{\n                'orderDetails.consignmentTracking.dialog.shipped' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ shipDate | cxDate: 'medium' }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.carrier' | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              {{ consignmentTracking?.carrierDetails?.name }}\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n            <div class=\"shipment-title\">\n              {{\n                'orderDetails.consignmentTracking.dialog.trackingId'\n                  | cxTranslate\n              }}\n            </div>\n            <div class=\"shipment-content\">\n              <label>\n                {{ consignmentTracking?.trackingID }}\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- tracking events -->\n    <div class=\"events modal-body\">\n      <ng-container\n        *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n      >\n        <div class=\"event-body\" data-test=\"body-event\">\n          <div class=\"event-content\">\n            {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n          </div>\n          <div class=\"event-title\">\n            {{ consignmentEvent.referenceCode }}\n          </div>\n          <div class=\"event-content\">{{ consignmentEvent.detail }}</div>\n          <div class=\"event-city\">\n            location: {{ consignmentEvent.location }}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n  <ng-template #noTracking>\n    <div class=\"no-tracking-heading\" data-test=\"head-notrack\">\n      <div class=\"shipment-content\">\n        {{ 'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate }}\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #loading>\n    <div class=\"tracking-loading\" data-test=\"loading-track\">\n      <div class=\"header modal-header\">\n        <div class=\"title modal-title\">\n          {{\n            'orderDetails.consignmentTracking.dialog.loadingHeader'\n              | cxTranslate\n          }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          aria-label=\"Close\"\n          data-test=\"btn-dismiss\"\n          (click)=\"activeModal.dismiss('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"body modal-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <cx-spinner></cx-spinner>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    TrackingEventsComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: UserOrderService }
    ]; };
    return TrackingEventsComponent;
}());
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
var ConsignmentTrackingComponent = /** @class */ (function () {
    function ConsignmentTrackingComponent(userOrderService, modalService) {
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
    ConsignmentTrackingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
    };
    /**
     * @param {?} consignment
     * @return {?}
     */
    ConsignmentTrackingComponent.prototype.openTrackingDialog = /**
     * @param {?} consignment
     * @return {?}
     */
    function (consignment) {
        this.userOrderService.loadConsignmentTracking(this.orderCode, consignment.code);
        /** @type {?} */
        var modalInstance;
        this.modalRef = this.modalService.open(TrackingEventsComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.tracking$ = this.consignmentTracking$;
        modalInstance.shipDate = consignment.statusDate;
        modalInstance.consignmentCode = consignment.code;
    };
    /**
     * @return {?}
     */
    ConsignmentTrackingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userOrderService.clearConsignmentTracking();
    };
    ConsignmentTrackingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-consignment-tracking',
                    template: "<ng-container *ngIf=\"consignment && consignment.status\">\n  <div *ngIf=\"consignmentStatus.includes(consignment.status)\">\n    <button\n      (click)=\"openTrackingDialog(consignment)\"\n      class=\"btn btn-action\"\n      data-test=\"btn-events\"\n    >\n      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ConsignmentTrackingComponent.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: ModalService }
    ]; };
    ConsignmentTrackingComponent.propDecorators = {
        consignment: [{ type: Input }],
        orderCode: [{ type: Input }]
    };
    return ConsignmentTrackingComponent;
}());
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
var moduleComponents = [
    OrderDetailHeadlineComponent,
    OrderDetailItemsComponent,
    OrderDetailTotalsComponent,
    OrderDetailShippingComponent,
    TrackingEventsComponent,
    ConsignmentTrackingComponent,
];
var ɵ0$1 = { pageLabel: 'order' }, ɵ1 = { cxRoute: 'orderDetails' };
var OrderDetailsModule = /** @class */ (function () {
    function OrderDetailsModule() {
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
                    declarations: __spread(moduleComponents),
                    exports: __spread(moduleComponents),
                    entryComponents: __spread(moduleComponents),
                },] }
    ];
    return OrderDetailsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(routing, userOrderService, translation) {
        this.routing = routing;
        this.userOrderService = userOrderService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
    }
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.orders$ = this.userOrderService
            .getOrderHistoryList(this.PAGE_SIZE)
            .pipe(tap((/**
         * @param {?} orders
         * @return {?}
         */
        function (orders) {
            if (orders.pagination) {
                _this.sortType = orders.pagination.sort;
            }
        })));
        this.isLoaded$ = this.userOrderService.getOrderHistoryListLoaded();
    };
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.userOrderService.clearOrderList();
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    OrderHistoryComponent.prototype.changeSortCode = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        /** @type {?} */
        var event = {
            sortCode: sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchOrders(event);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    OrderHistoryComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchOrders(event);
    };
    /**
     * @param {?} order
     * @return {?}
     */
    OrderHistoryComponent.prototype.goToOrderDetail = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: order,
        });
    };
    /**
     * @return {?}
     */
    OrderHistoryComponent.prototype.getSortLabels = /**
     * @return {?}
     */
    function () {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.orderNumber'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), textByDate = _b[0], textByOrderNumber = _b[1];
            return {
                byDate: textByDate,
                byOrderNumber: textByOrderNumber,
            };
        })));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    OrderHistoryComponent.prototype.fetchOrders = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.userOrderService.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    };
    OrderHistoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-history',
                    template: "<ng-container *ngIf=\"orders$ | async as orders\">\n  <div class=\"container\">\n    <!-- HEADER -->\n    <div class=\"cx-order-history-header\">\n      <h3>{{ 'orderHistory.orderHistory' | cxTranslate }}</h3>\n    </div>\n\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"orders.pagination.totalResults > 0; else noOrder\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'orderHistory.orderId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.date' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'orderHistory.status' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'orderHistory.total' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let order of orders.orders\"\n              (click)=\"goToOrderDetail(order)\"\n            >\n              <td class=\"cx-order-history-code\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.code }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-placed\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.date' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                  >{{ order?.placed | cxDate: 'longDate' }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.status' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{\n                    'orderDetails.statusDisplay'\n                      | cxTranslate: { context: order?.statusDisplay }\n                  }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-total\">\n                <div class=\"d-md-none cx-order-history-label\">\n                  {{ 'orderHistory.total' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ order?.total.formattedValue }}</a\n                >\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom row\">\n          <div\n            class=\"cx-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4\"\n          >\n            <cx-sorting\n              [sortOptions]=\"orders.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"orders.pagination.sort\"\n              placeholder=\"{{ 'orderHistory.sortByMostRecent' | cxTranslate }}\"\n            ></cx-sorting>\n          </div>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"orders.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- NO ORDER CONTAINER -->\n      <ng-template #noOrder>\n        <div class=\"cx-order-history-no-order row\" *ngIf=\"isLoaded$ | async\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>\n            <a\n              [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n              routerLinkActive=\"active\"\n              class=\"btn btn-primary btn-block\"\n              >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    OrderHistoryComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserOrderService },
        { type: TranslationService }
    ]; };
    return OrderHistoryComponent;
}());
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
var OrderHistoryModule = /** @class */ (function () {
    function OrderHistoryModule() {
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
    return OrderHistoryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [OrderHistoryModule, OrderDetailsModule],
                },] }
    ];
    return OrderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaymentMethodsComponent = /** @class */ (function () {
    function PaymentMethodsComponent(userPaymentService, translation) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    PaymentMethodsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap((/**
         * @param {?} paymentDetails
         * @return {?}
         */
        function (paymentDetails) {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find((/**
                 * @param {?} paymentDetail
                 * @return {?}
                 */
                function (paymentDetail) { return paymentDetail.defaultPayment; }))) {
                _this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        })));
        this.editCard = null;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PaymentMethodsComponent.prototype.getCardContent = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var defaultPayment = _a.defaultPayment, accountHolderName = _a.accountHolderName, expiryMonth = _a.expiryMonth, expiryYear = _a.expiryYear, cardNumber = _a.cardNumber;
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
        function (_a) {
            var _b = __read(_a, 5), textSetAsDefault = _b[0], textDelete = _b[1], textDeleteConfirmation = _b[2], textExpires = _b[3], textDefaultPaymentMethod = _b[4];
            /** @type {?} */
            var actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            /** @type {?} */
            var card = {
                header: defaultPayment ? textDefaultPaymentMethod : null,
                textBold: accountHolderName,
                text: [cardNumber, textExpires],
                actions: actions,
                deleteMsg: textDeleteConfirmation,
            };
            return card;
        })));
    };
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    PaymentMethodsComponent.prototype.deletePaymentMethod = /**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) {
        this.userPaymentService.deletePaymentMethod(paymentMethod.id);
        this.editCard = null;
    };
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    PaymentMethodsComponent.prototype.setEdit = /**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) {
        this.editCard = paymentMethod.id;
    };
    /**
     * @return {?}
     */
    PaymentMethodsComponent.prototype.cancelCard = /**
     * @return {?}
     */
    function () {
        this.editCard = null;
    };
    /**
     * @param {?} paymentMethod
     * @return {?}
     */
    PaymentMethodsComponent.prototype.setDefaultPaymentMethod = /**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id);
    };
    PaymentMethodsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-payment-methods',
                    template: "<div class=\"cx-payment container\">\n  <div class=\"cx-header\">\n    <h3>{{ 'paymentMethods.paymentMethods' | cxTranslate }}</h3>\n  </div>\n\n  <div class=\"cx-body\">\n    <div class=\"cx-msg\">\n      {{\n        'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n      }}\n    </div>\n    <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n    <ng-template #cards>\n      <div\n        *ngIf=\"paymentMethods$ | async as paymentMethods\"\n        class=\"cx-existing row\"\n      >\n        <div\n          class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n          *ngFor=\"let paymentMethod of paymentMethods\"\n        >\n          <div class=\"cx-payment-inner\">\n            <cx-card\n              [border]=\"true\"\n              [fitToContainer]=\"true\"\n              [content]=\"getCardContent(paymentMethod) | async\"\n              (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n              (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n              (editCard)=\"setEdit(paymentMethod)\"\n              [editMode]=\"editCard === paymentMethod.id\"\n              (cancelCard)=\"cancelCard()\"\n            ></cx-card>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    PaymentMethodsComponent.ctorParameters = function () { return [
        { type: UserPaymentService },
        { type: TranslationService }
    ]; };
    return PaymentMethodsComponent;
}());
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
var PaymentMethodsModule = /** @class */ (function () {
    function PaymentMethodsModule() {
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
    return PaymentMethodsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResetPasswordFormComponent = /** @class */ (function () {
    function ResetPasswordFormComponent(fb, routingService, userService) {
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
    ResetPasswordFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.routingService
            .getRouterState()
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return (_this.token = state.state.queryParams['token']); })));
        this.subscription.add(this.userService.isPasswordReset().subscribe((/**
         * @param {?} reset
         * @return {?}
         */
        function (reset) {
            if (reset) {
                _this.routingService.go({ cxRoute: 'login' });
            }
        })));
    };
    /**
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.resetPassword = /**
     * @return {?}
     */
    function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        var password = this.form.value['password'];
        this.userService.resetPassword(this.token, password);
    };
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    ResetPasswordFormComponent.prototype.matchPassword = /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    function (ac) {
        if (ac.get('password').value !== ac.get('repassword').value) {
            return { NotEqual: true };
        }
    };
    ResetPasswordFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-reset-password-form',
                    template: "<form\n  (submit)=\"resetPassword()\"\n  [formGroup]=\"form\"\n  class=\"cx-reset-password-form-component\"\n>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.newPassword' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.get('password').invalid &&\n          (submited ||\n            (form.get('password').dirty && form.get('password').touched))\n        \"\n      >\n        <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'register.passwordMinRequirements' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n        type=\"password\"\n        name=\"confirmpassword\"\n        placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n        formControlName=\"repassword\"\n      />\n      <div\n        class=\"invalid-feedback\"\n        *ngIf=\"\n          form.hasError('NotEqual') &&\n          (submited ||\n            (form.get('repassword').dirty && form.get('repassword').touched))\n        \"\n      >\n        <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">\n      {{ 'register.resetPassword' | cxTranslate }}\n    </button>\n  </div>\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    ResetPasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: RoutingService },
        { type: UserService }
    ]; };
    return ResetPasswordFormComponent;
}());
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
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
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
    return ResetPasswordModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpdateEmailFormComponent = /** @class */ (function () {
    function UpdateEmailFormComponent(fb) {
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
    UpdateEmailFormComponent.prototype.isEmailConfirmNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return (this.form.hasError('NotEqual') &&
            (this.submited ||
                (this.form.get(formControlName).touched &&
                    this.form.get(formControlName).dirty)));
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submited);
    };
    /**
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submited = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        var newUid = this.form.value.confirmEmail;
        /** @type {?} */
        var password = this.form.value.password;
        this.saveEmail.emit({ newUid: newUid, password: password });
    };
    /**
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelEmail.emit();
    };
    /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    UpdateEmailFormComponent.prototype.matchEmail = /**
     * @private
     * @param {?} ac
     * @return {?}
     */
    function (ac) {
        if (ac.get('email').value !== ac.get('confirmEmail').value) {
            return { NotEqual: true };
        }
    };
    UpdateEmailFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-email-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.newEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"email\"\n          formControlName=\"email\"\n          placeholder=\"{{\n            'updateEmailForm.newEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('email')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n          <span>{{ 'updateEmailForm.enterValidEmail' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"email\"\n          name=\"confirmEmail\"\n          formControlName=\"confirmEmail\"\n          placeholder=\"{{\n            'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isEmailConfirmNotValid('confirmEmail')\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"isEmailConfirmNotValid('confirmEmail')\"\n        >\n          <span>{{ 'updateEmailForm.bothEmailMustMatch' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateEmailForm.password.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"password\"\n          name=\"password\"\n          formControlName=\"password\"\n          placeholder=\"{{\n            'updateEmailForm.password.placeholder' | cxTranslate\n          }}\"\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('password')\"\n          autocomplete=\"new-password\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('password')\">\n          <span>{{ 'updateEmailForm.pleaseInputPassword' | cxTranslate }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    UpdateEmailFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    UpdateEmailFormComponent.propDecorators = {
        saveEmail: [{ type: Output }],
        cancelEmail: [{ type: Output }]
    };
    return UpdateEmailFormComponent;
}());
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
var UpdateEmailComponent = /** @class */ (function () {
    function UpdateEmailComponent(routingService, globalMessageService, userService, authService) {
        this.routingService = routingService;
        this.globalMessageService = globalMessageService;
        this.userService = userService;
        this.authService = authService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetUpdateEmailResultState();
        this.subscription.add(this.userService
            .getUpdateEmailResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onSuccess(success); })));
        this.isLoading$ = this.userService.getUpdateEmailResultLoading();
    };
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdateEmailComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var newUid = _a.newUid, password = _a.password;
        this.newUid = newUid;
        this.userService.updateEmail(password, newUid);
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdateEmailComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
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
    };
    /**
     * @return {?}
     */
    UpdateEmailComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.userService.resetUpdateEmailResultState();
    };
    UpdateEmailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-email',
                    template: "<ng-container>\n  <div *ngIf=\"isLoading$ | async; else loaded\">\n    <div class=\"cx-spinner\">\n      <cx-spinner> </cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #loaded>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-email-form\n          class=\"col-md-6\"\n          (saveEmail)=\"onSubmit($event)\"\n          (cancelEmail)=\"onCancel()\"\n        >\n        </cx-update-email-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    UpdateEmailComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: UserService },
        { type: AuthService }
    ]; };
    return UpdateEmailComponent;
}());
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
var UpdateEmailModule = /** @class */ (function () {
    function UpdateEmailModule() {
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
    return UpdateEmailModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpdatePasswordFormComponent = /** @class */ (function () {
    function UpdatePasswordFormComponent(fb) {
        this.fb = fb;
        this.submitClicked = false;
        this.submited = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required]],
            newPassword: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            newPasswordConfirm: ['', [Validators.required]],
        }, { validator: this.matchPassword });
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.isPasswordConfirmNotValid = /**
     * @return {?}
     */
    function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('newPasswordConfirm').touched &&
                    this.form.get('newPasswordConfirm').dirty)));
    };
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword,
        });
    };
    /**
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelled.emit();
    };
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    UpdatePasswordFormComponent.prototype.matchPassword = /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    function (abstractControl) {
        if (abstractControl.get('newPassword').value !==
            abstractControl.get('newPasswordConfirm').value) {
            return { NotEqual: true };
        }
        return null;
    };
    UpdatePasswordFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-password-form',
                    template: "<form\n  (ngSubmit)=\"onSubmit()\"\n  [formGroup]=\"form\"\n  class=\"cx-update-password-component \"\n>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.oldPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('oldPassword')\"\n          type=\"password\"\n          name=\"oldPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"oldPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('oldPassword')\">\n          <span>{{\n            'updatePasswordForm.oldPasswordIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.newPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isNotValid('newPassword')\"\n          type=\"password\"\n          name=\"newPassword\"\n          placeholder=\"{{\n            'updatePasswordForm.newPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPassword\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('newPassword')\">\n          <span>{{\n            'updatePasswordForm.passwordMinRequirements' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updatePasswordForm.confirmPassword.label' | cxTranslate\n        }}</span>\n        <input\n          class=\"form-control\"\n          [class.is-invalid]=\"isPasswordConfirmNotValid()\"\n          type=\"password\"\n          name=\"newPasswordConfirm\"\n          placeholder=\"{{\n            'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"newPasswordConfirm\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isPasswordConfirmNotValid()\">\n          <span>{{\n            'updatePasswordForm.bothPasswordMustMatch' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    UpdatePasswordFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    UpdatePasswordFormComponent.propDecorators = {
        submited: [{ type: Output }],
        cancelled: [{ type: Output }]
    };
    return UpdatePasswordFormComponent;
}());
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
var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdatePasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetUpdatePasswordProcessState();
        this.loading$ = this.userService.getUpdatePasswordResultLoading();
        this.subscription.add(this.userService
            .getUpdatePasswordResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onSuccess(success); })));
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdatePasswordComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.globalMessageService.add({ key: 'updatePasswordForm.passwordUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    /**
     * @return {?}
     */
    UpdatePasswordComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdatePasswordComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var oldPassword = _a.oldPassword, newPassword = _a.newPassword;
        this.userService.updatePassword(oldPassword, newPassword);
    };
    /**
     * @return {?}
     */
    UpdatePasswordComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.userService.resetUpdatePasswordProcessState();
    };
    UpdatePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-password',
                    template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-password-form\n          class=\"col-md-6\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-password-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    UpdatePasswordComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    return UpdatePasswordComponent;
}());
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
var UpdatePasswordModule = /** @class */ (function () {
    function UpdatePasswordModule() {
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
    return UpdatePasswordModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpdateProfileFormComponent = /** @class */ (function () {
    function UpdateProfileFormComponent(fb) {
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
    UpdateProfileFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.user) {
            this.form.patchValue(this.user);
        }
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    /**
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.submited.emit({
            userUpdates: __assign({}, this.form.value),
        });
    };
    /**
     * @return {?}
     */
    UpdateProfileFormComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelled.emit();
    };
    UpdateProfileFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-profile-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.title' | cxTranslate\n        }}</span>\n        <select formControlName=\"titleCode\" class=\"form-control\">\n          <option value=\"\">{{ 'updateProfileForm.none' | cxTranslate }}</option>\n          <option *ngFor=\"let title of titles\" [value]=\"title.code\">{{\n            title.name\n          }}</option>\n        </select>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.firstName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"firstName\"\n          placeholder=\"{{\n            'updateProfileForm.firstName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"firstName\"\n          [class.is-invalid]=\"isNotValid('firstName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('firstName')\">\n          <span>{{\n            'updateProfileForm.firstNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-12\">\n      <label>\n        <span class=\"label-content\">{{\n          'updateProfileForm.lastName.label' | cxTranslate\n        }}</span>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"lastName\"\n          placeholder=\"{{\n            'updateProfileForm.lastName.placeholder' | cxTranslate\n          }}\"\n          formControlName=\"lastName\"\n          [class.is-invalid]=\"isNotValid('lastName')\"\n        />\n        <div class=\"invalid-feedback\" *ngIf=\"isNotValid('lastName')\">\n          <span>{{\n            'updateProfileForm.lastNameIsRequired' | cxTranslate\n          }}</span>\n        </div>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <button\n        class=\"btn btn-block btn-secondary\"\n        type=\"button\"\n        (click)=\"onCancel()\"\n      >\n        {{ 'common.cancel' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <button class=\"btn btn-block btn-primary\" type=\"submit\">\n        {{ 'common.save' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    UpdateProfileFormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    UpdateProfileFormComponent.propDecorators = {
        user: [{ type: Input }],
        titles: [{ type: Input }],
        submited: [{ type: Output }],
        cancelled: [{ type: Output }]
    };
    return UpdateProfileFormComponent;
}());
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
var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(routingService, userService, globalMessageService) {
        this.routingService = routingService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    UpdateProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // reset the previous form processing state
        this.userService.resetUpdatePersonalDetailsProcessingState();
        this.user$ = this.userService.get();
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
        })));
        this.loading$ = this.userService.getUpdatePersonalDetailsResultLoading();
        this.subscription.add(this.userService
            .getUpdatePersonalDetailsResultSuccess()
            .subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) { return _this.onSuccess(success); })));
    };
    /**
     * @param {?} success
     * @return {?}
     */
    UpdateProfileComponent.prototype.onSuccess = /**
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (success) {
            this.globalMessageService.add({ key: 'updateProfileForm.profileUpdateSuccess' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routingService.go({ cxRoute: 'home' });
        }
    };
    /**
     * @return {?}
     */
    UpdateProfileComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    UpdateProfileComponent.prototype.onSubmit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var userUpdates = _a.userUpdates;
        this.userService.updatePersonalDetails(userUpdates);
    };
    /**
     * @return {?}
     */
    UpdateProfileComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        // clean up the state
        this.userService.resetUpdatePersonalDetailsProcessingState();
    };
    UpdateProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-update-profile',
                    template: "<ng-container>\n  <div *ngIf=\"loading$ | async; else updateForm\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #updateForm>\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <cx-update-profile-form\n          *ngIf=\"(user$ | async)?.uid\"\n          class=\"col-md-6\"\n          [user]=\"user$ | async\"\n          [titles]=\"titles$ | async\"\n          (cancelled)=\"onCancel()\"\n          (submited)=\"onSubmit($event)\"\n        ></cx-update-profile-form>\n      </div>\n    </div>\n  </ng-template>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    UpdateProfileComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: UserService },
        { type: GlobalMessageService }
    ]; };
    return UpdateProfileComponent;
}());
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
var UpdateProfileModule = /** @class */ (function () {
    function UpdateProfileModule() {
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
    return UpdateProfileModule;
}());

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
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setTitle();
        this.setCrumbs();
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.setTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return meta.heading || meta.title; })));
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.setCrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), meta = _b[0], textHome = _b[1];
            return meta && meta.breadcrumbs
                ? meta.breadcrumbs
                : [{ label: textHome, link: '/' }];
        })));
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-breadcrumb',
                    template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: PageMetaService },
        { type: TranslationService }
    ]; };
    return BreadcrumbComponent;
}());
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
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
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
    return BreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(cmsService, semanticPathService) {
        this.cmsService = cmsService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @param {?} data$
     * @return {?}
     */
    NavigationService.prototype.createNavigation = /**
     * @param {?} data$
     * @return {?}
     */
    function (data$) {
        return combineLatest([data$, this.getNavigationNode(data$)]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), data = _b[0], nav = _b[1];
            return {
                title: data.name,
                children: [nav],
            };
        })));
    };
    /**
     * @param {?} data$
     * @return {?}
     */
    NavigationService.prototype.getNavigationNode = /**
     * @param {?} data$
     * @return {?}
     */
    function (data$) {
        var _this = this;
        if (!data$) {
            return of();
        }
        return data$.pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return !!data; })), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var navigation = data.navigationNode ? data.navigationNode : data;
            return _this.cmsService.getNavigationEntryItems(navigation.uid).pipe(tap((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                if (items === undefined) {
                    _this.getNavigationEntryItems(navigation, true);
                }
            })), filter(Boolean), map((/**
             * @param {?} items
             * @return {?}
             */
            function (items) { return _this.createNode(navigation, items); })));
        })));
    };
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @param nodeData
     * @param root
     * @param itemsList
     */
    /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    NavigationService.prototype.getNavigationEntryItems = /**
     * Get all navigation entry items' type and id. Dispatch action to load all these items
     * @private
     * @param {?} nodeData
     * @param {?} root
     * @param {?=} itemsList
     * @return {?}
     */
    function (nodeData, root, itemsList) {
        if (itemsList === void 0) { itemsList = []; }
        if (nodeData.entries && nodeData.entries.length > 0) {
            nodeData.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
                itemsList.push({
                    superType: entry.itemSuperType,
                    id: entry.itemId,
                });
            }));
        }
        if (nodeData.children && nodeData.children.length > 0) {
            this.processChildren(nodeData, itemsList);
        }
        if (root) {
            /** @type {?} */
            var rootUid = nodeData.uid;
            this.cmsService.loadNavigationItems(rootUid, itemsList);
        }
    };
    /**
     * @private
     * @param {?} node
     * @param {?} itemsList
     * @return {?}
     */
    NavigationService.prototype.processChildren = /**
     * @private
     * @param {?} node
     * @param {?} itemsList
     * @return {?}
     */
    function (node, itemsList) {
        var e_1, _a;
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.getNavigationEntryItems(child, false, itemsList);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Create a new node tree for display
     * @param nodeData
     * @param items
     */
    /**
     * Create a new node tree for display
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.createNode = /**
     * Create a new node tree for display
     * @private
     * @param {?} nodeData
     * @param {?} items
     * @return {?}
     */
    function (nodeData, items) {
        /** @type {?} */
        var node = {};
        node.title = nodeData.title;
        if (nodeData.entries && nodeData.entries.length > 0) {
            this.addLinkToNode(node, nodeData.entries[0], items);
        }
        if (nodeData.children && nodeData.children.length > 0) {
            /** @type {?} */
            var children = this.createChildren(nodeData, items);
            node.children = children;
        }
        return node;
    };
    /**
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.addLinkToNode = /**
     * @private
     * @param {?} node
     * @param {?} entry
     * @param {?} items
     * @return {?}
     */
    function (node, entry, items) {
        /** @type {?} */
        var item = items[entry.itemId + "_" + entry.itemSuperType];
        // now we only consider CMSLinkComponent
        if (entry.itemType === 'CMSLinkComponent' && item !== undefined) {
            if (!node.title) {
                node.title = item.linkName;
            }
            node.url = this.getLink(item);
            // if "NEWWINDOW", target is true
            node.target = item.target;
        }
    };
    /**
     *
     * Gets the URL or link to a related item (category)
     */
    /**
     *
     * Gets the URL or link to a related item (category)
     * @private
     * @param {?} item
     * @return {?}
     */
    NavigationService.prototype.getLink = /**
     *
     * Gets the URL or link to a related item (category)
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
    };
    /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    NavigationService.prototype.createChildren = /**
     * @private
     * @param {?} node
     * @param {?} items
     * @return {?}
     */
    function (node, items) {
        var e_2, _a;
        /** @type {?} */
        var children = [];
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                /** @type {?} */
                var childNode = this.createNode(child, items);
                children.push(childNode);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return children;
    };
    NavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: CmsService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ NavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NavigationService_Factory() { return new NavigationService(ɵɵinject(CmsService), ɵɵinject(SemanticPathService)); }, token: NavigationService, providedIn: "root" });
    return NavigationService;
}());
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
var CategoryNavigationComponent = /** @class */ (function () {
    function CategoryNavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.data$ = this.componentData.data$;
    }
    CategoryNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-category-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [ngClass]=\"(data$ | async).styleClass\"\n  [wrapAfter]=\"(data$ | async).wrapAfter\"\n  [allowAlignToRight]=\"true\"\n></cx-navigation-ui>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CategoryNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    return CategoryNavigationComponent;
}());
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
var NavigationUIComponent = /** @class */ (function () {
    function NavigationUIComponent(router, renderer, elemRef) {
        var _this = this;
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
        function (event) { return event instanceof NavigationEnd; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.clear(); })));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.alignWrappersToRightIfStickOut();
        })));
    }
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.resize.next();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.toggleOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var node = (/** @type {?} */ (event.currentTarget));
        if (this.openNodes.includes(node)) {
            this.openNodes = this.openNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n !== node; }));
            this.renderer.removeClass(node, 'is-open');
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
        this.openNodes.pop();
        this.updateClasses();
    };
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.openNodes = [];
        this.updateClasses();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.onMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.alignWrapperToRightIfStickOut((/** @type {?} */ (event.currentTarget)));
        this.focusAfterPreviousClicked(event);
    };
    /**
     * @param {?} node
     * @param {?=} depth
     * @return {?}
     */
    NavigationUIComponent.prototype.getDepth = /**
     * @param {?} node
     * @param {?=} depth
     * @return {?}
     */
    function (node, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        if (node.children && node.children.length > 0) {
            return Math.max.apply(Math, __spread(node.children.map((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return _this.getDepth(n, depth + 1); }))));
        }
        else {
            return depth;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.focusAfterPreviousClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (((event.target || event.relatedTarget))));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    };
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    NavigationUIComponent.prototype.alignWrapperToRightIfStickOut = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.allowAlignToRight) {
            /** @type {?} */
            var wrapper = (/** @type {?} */ (node.querySelector('.wrapper')));
            /** @type {?} */
            var navBar = (/** @type {?} */ (this.elemRef.nativeElement));
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', node.offsetWidth - wrapper.offsetWidth + "px");
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NavigationUIComponent.prototype.alignWrappersToRightIfStickOut = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var navs = (/** @type {?} */ (this.elemRef.nativeElement.childNodes));
        Array.from(navs)
            .filter((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.tagName === 'NAV'; }))
            .forEach((/**
         * @param {?} nav
         * @return {?}
         */
        function (nav) { return _this.alignWrapperToRightIfStickOut((/** @type {?} */ (nav))); }));
    };
    /**
     * @private
     * @return {?}
     */
    NavigationUIComponent.prototype.updateClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.openNodes.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (node, i) {
            if (i + 1 < _this.openNodes.length) {
                _this.renderer.addClass(node, 'is-opened');
                _this.renderer.removeClass(node, 'is-open');
            }
            else {
                _this.renderer.removeClass(node, 'is-opened');
                _this.renderer.addClass(node, 'is-open');
            }
        }));
        this.isOpen = this.openNodes.length > 0;
    };
    NavigationUIComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation-ui',
                    template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    tabindex=\"0\"\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link *ngIf=\"node.url\" [url]=\"node.url\" class=\"all\">\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NavigationUIComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NavigationUIComponent.propDecorators = {
        node: [{ type: Input }],
        wrapAfter: [{ type: Input }],
        allowAlignToRight: [{ type: Input }],
        flyout: [{ type: Input }, { type: HostBinding, args: ['class.flyout',] }],
        isOpen: [{ type: Input }, { type: HostBinding, args: ['class.is-open',] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return NavigationUIComponent;
}());
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
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.createNavigation(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.styleClass; })));
    }
    NavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation',
                    template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    return NavigationComponent;
}());
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
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
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
    return NavigationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryNavigationModule = /** @class */ (function () {
    function CategoryNavigationModule() {
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
    return CategoryNavigationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterNavigationComponent = /** @class */ (function () {
    function FooterNavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.styleClass; })));
        this.data$ = this.componentData.data$;
    }
    FooterNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-footer-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"data$ | async as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FooterNavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    return FooterNavigationComponent;
}());
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterNavigationModule = /** @class */ (function () {
    function FooterNavigationModule() {
    }
    FooterNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        NavigationModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                FooterNavigationComponent: {
                                    component: FooterNavigationComponent,
                                },
                            },
                        }))),
                        GenericLinkModule,
                    ],
                    declarations: [FooterNavigationComponent],
                    entryComponents: [FooterNavigationComponent],
                    exports: [FooterNavigationComponent],
                },] }
    ];
    return FooterNavigationModule;
}());

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
var HAS_SEARCH_RESULT_CLASS = 'has-searchbox-results';
var SearchBoxComponentService = /** @class */ (function () {
    function SearchBoxComponentService(searchService, routingService, translationService, winRef) {
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
    /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.search = /**
     * Executes the search for products and suggestions,
     * unless the configuration is setup to not search for
     * products or suggestions.
     * @param {?} query
     * @param {?} config
     * @return {?}
     */
    function (query, config) {
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
    };
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     */
    /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getResults = /**
     * Returns an observable with the SearchResults. When there's any
     * result, the body tag will get a classname, so that specific style
     * rules can be applied.
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
            this.getSearchMessage(config),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), productResults = _b[0], suggestions = _b[1], message = _b[2];
            return {
                products: productResults ? productResults.products : null,
                suggestions: suggestions,
                message: message,
            };
        })), tap((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            return _this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, _this.hasResults(results));
        })));
    };
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     */
    /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    SearchBoxComponentService.prototype.clearResults = /**
     * Clears the searchbox results, so that old values are
     * no longer emited upon next search.
     * @return {?}
     */
    function () {
        this.searchService.clearResults();
        this.toggleBodyClass(HAS_SEARCH_RESULT_CLASS, false);
    };
    /**
     * @param {?} className
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasBodyClass = /**
     * @param {?} className
     * @return {?}
     */
    function (className) {
        return this.winRef.document.body.classList.contains(className);
    };
    /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    SearchBoxComponentService.prototype.toggleBodyClass = /**
     * @param {?} className
     * @param {?=} add
     * @return {?}
     */
    function (className, add) {
        if (add === undefined) {
            this.winRef.document.body.classList.toggle(className);
        }
        else {
            add
                ? this.winRef.document.body.classList.add(className)
                : this.winRef.document.body.classList.remove(className);
        }
    };
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    SearchBoxComponentService.prototype.hasResults = /**
     * @private
     * @param {?} results
     * @return {?}
     */
    function (results) {
        return ((!!results.products && results.products.length > 0) ||
            (!!results.suggestions && results.suggestions.length > 0) ||
            !!results.message);
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getProductResults = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.displayProducts) {
            return this.searchService.getResults();
        }
        else {
            return of({});
        }
    };
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     */
    /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getProductSuggestions = /**
     * Loads suggestions from the backend. In case there's no suggestion
     * available, we try to get an exact match suggestion.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (!config.displaySuggestions) {
            return of([]);
        }
        else {
            return this.searchService.getSuggestionResults().pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res.map((/**
             * @param {?} suggestion
             * @return {?}
             */
            function (suggestion) { return suggestion.value; })); })), switchMap((/**
             * @param {?} suggestions
             * @return {?}
             */
            function (suggestions) {
                if (suggestions.length === 0) {
                    return _this.getExactSuggestion(config).pipe(map((/**
                     * @param {?} match
                     * @return {?}
                     */
                    function (match) { return (match ? [match] : []); })));
                }
                else {
                    return of(suggestions);
                }
            })));
        }
    };
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     */
    /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getExactSuggestion = /**
     * whenever there is at least 1 product, we simulate
     * a suggestion to provide easy access to the search result page
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return this.getProductResults(config).pipe(switchMap((/**
         * @param {?} productResult
         * @return {?}
         */
        function (productResult) {
            return productResult.products && productResult.products.length > 0
                ? _this.fetchTranslation('searchBox.help.exactMatch', {
                    term: productResult.freeTextSearch,
                })
                : of(null);
        })));
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    SearchBoxComponentService.prototype.getSearchMessage = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return combineLatest([
            this.getProductResults(config),
            this.getProductSuggestions(config),
        ]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), productResult = _b[0], suggestions = _b[1];
            if (productResult &&
                productResult.products &&
                productResult.products.length === 0 &&
                (suggestions && suggestions.length === 0)) {
                return _this.fetchTranslation('searchBox.help.noMatch');
            }
            else {
                return of(null);
            }
        })));
    };
    /**
     * Navigates to the search result page with a given query
     */
    /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponentService.prototype.launchSearchPage = /**
     * Navigates to the search result page with a given query
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.routingService.go({
            cxRoute: 'search',
            params: { query: query },
        });
    };
    /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    SearchBoxComponentService.prototype.fetchTranslation = /**
     * @private
     * @param {?} translationKey
     * @param {?=} options
     * @return {?}
     */
    function (translationKey, options) {
        return this.translationService.translate(translationKey, options);
    };
    SearchBoxComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SearchBoxComponentService.ctorParameters = function () { return [
        { type: SearchboxService },
        { type: RoutingService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SearchBoxComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchBoxComponentService_Factory() { return new SearchBoxComponentService(ɵɵinject(SearchboxService), ɵɵinject(RoutingService), ɵɵinject(TranslationService), ɵɵinject(WindowRef)); }, token: SearchBoxComponentService, providedIn: "root" });
    return SearchBoxComponentService;
}());
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
var DEFAULT_SEARCHBOX_CONFIG = {
    minCharactersBeforeRequest: 1,
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    maxSuggestions: 5,
    displayProductImages: true,
};
var SearchBoxComponent = /** @class */ (function () {
    /**
     * The component data is optional, so that this component
     * can be reused without CMS integration.
     */
    function SearchBoxComponent(searchBoxComponentService, componentData) {
        var _this = this;
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
        function (c) { return (_this.config = c); })), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return _this.searchBoxComponentService.getResults(config); })));
    }
    Object.defineProperty(SearchBoxComponent.prototype, "queryText", {
        /**
         * Sets the search box input field
         */
        set: /**
         * Sets the search box input field
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.search(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBoxComponent.prototype, "config$", {
        /**
         * Returns the backend configuration or default configuration for the searchbox.
         */
        get: /**
         * Returns the backend configuration or default configuration for the searchbox.
         * @private
         * @return {?}
         */
        function () {
            if (this.componentData) {
                return (/** @type {?} */ (this.componentData.data$.pipe(
                // Since the backend returns string values (i.e. displayProducts: "true") for
                // boolean values, we replace them with boolean values.
                map((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) {
                    return __assign({}, c, { displayProducts: (/** @type {?} */ (c.displayProducts)) === 'true' || c.displayProducts === true, displayProductImages: (/** @type {?} */ (c.displayProductImages)) === 'true' ||
                            c.displayProductImages === true, displaySuggestions: (/** @type {?} */ (c.displaySuggestions)) === 'true' ||
                            c.displaySuggestions === true });
                })))));
            }
            else {
                return of(DEFAULT_SEARCHBOX_CONFIG);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the searchbox and opens the search result page.
     */
    /**
     * Closes the searchbox and opens the search result page.
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponent.prototype.search = /**
     * Closes the searchbox and opens the search result page.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.searchBoxComponentService.search(query, this.config);
        // force the searchbox to open
        this.open();
    };
    /**
     * Opens the typeahead searchbox
     */
    /**
     * Opens the typeahead searchbox
     * @return {?}
     */
    SearchBoxComponent.prototype.open = /**
     * Opens the typeahead searchbox
     * @return {?}
     */
    function () {
        this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', true);
    };
    /**
     * Closes the typehead searchbox.
     */
    /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.close = /**
     * Closes the typehead searchbox.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.ignoreCloseEvent) {
            this.searchBoxComponentService.toggleBodyClass('searchbox-is-active', false);
            if (event && event.target) {
                ((/** @type {?} */ (event.target))).blur();
            }
        }
        this.ignoreCloseEvent = false;
    };
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     * */
    /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     *
     * @param {?} event
     * @return {?}
     */
    SearchBoxComponent.prototype.avoidReopen = /**
     * Especially in mobile we do not want the search icon
     * to focus the input again when it's already open.
     *
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.searchBoxComponentService.hasBodyClass('searchbox-is-active')) {
            this.close(event);
            event.preventDefault();
        }
    };
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     */
    /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     * @param {?} event
     * @param {?} query
     * @return {?}
     */
    SearchBoxComponent.prototype.launchSearchResult = /**
     * Opens the PLP with the given query.
     *
     * TODO: if there's a singe product match, we could open the PDP.
     * @param {?} event
     * @param {?} query
     * @return {?}
     */
    function (event, query) {
        this.close(event);
        this.searchBoxComponentService.launchSearchPage(query);
    };
    /**
     * Disables closing the search result list.
     */
    /**
     * Disables closing the search result list.
     * @return {?}
     */
    SearchBoxComponent.prototype.disableClose = /**
     * Disables closing the search result list.
     * @return {?}
     */
    function () {
        this.ignoreCloseEvent = true;
    };
    /**
     * Clears the search box input field
     */
    /**
     * Clears the search box input field
     * @param {?} el
     * @return {?}
     */
    SearchBoxComponent.prototype.clear = /**
     * Clears the search box input field
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this.disableClose();
        el.value = '';
        this.searchBoxComponentService.clearResults();
    };
    SearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-searchbox',
                    template: "<label class=\"searchbox\" [class.dirty]=\"!!searchInput.value\">\n  <input\n    #searchInput\n    [placeholder]=\"'searchBox.placeholder' | cxTranslate\"\n    aria-label=\"search\"\n    (focus)=\"open()\"\n    (input)=\"search(searchInput.value)\"\n    (blur)=\"close($event)\"\n    (keydown.escape)=\"close($event)\"\n    (keydown.enter)=\"launchSearchResult($event, searchInput.value)\"\n  />\n\n  <cx-icon\n    [type]=\"iconTypes.RESET\"\n    aria-label=\"reset\"\n    (mousedown)=\"clear(searchInput)\"\n    class=\"reset\"\n  ></cx-icon>\n\n  <cx-icon\n    [type]=\"iconTypes.SEARCH\"\n    aria-label=\"search\"\n    class=\"search\"\n    (mousedown)=\"avoidReopen($event)\"\n  ></cx-icon>\n</label>\n\n<div *ngIf=\"results$ | async as result\" class=\"results\" (click)=\"close($event)\">\n  <div\n    *ngIf=\"result.message\"\n    class=\"message\"\n    [innerHTML]=\"result.message\"\n  ></div>\n\n  <div class=\"suggestions\" (mousedown)=\"disableClose()\">\n    <a\n      *ngFor=\"let suggestion of result.suggestions\"\n      [innerHTML]=\"suggestion | cxHighlight: searchInput.value\"\n      [routerLink]=\"\n        {\n          cxRoute: 'search',\n          params: { query: suggestion }\n        } | cxUrl\n      \"\n    >\n    </a>\n  </div>\n\n  <div class=\"products\" (mousedown)=\"disableClose()\" *ngIf=\"result.products\">\n    <a\n      *ngFor=\"let product of result.products\"\n      [routerLink]=\"\n        {\n          cxRoute: 'product',\n          params: product\n        } | cxUrl\n      \"\n      [class.has-media]=\"config.displayProductImages\"\n    >\n      <cx-media\n        *ngIf=\"config.displayProductImages\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"thumbnail\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n      <h4 class=\"name\" [innerHTML]=\"product.nameHtml\"></h4>\n      <span class=\"price\">{{ product.price?.formattedValue }}</span>\n    </a>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return [
        { type: SearchBoxComponentService },
        { type: CmsComponentData, decorators: [{ type: Optional }] }
    ]; };
    SearchBoxComponent.propDecorators = {
        queryText: [{ type: Input, args: ['queryText',] }]
    };
    return SearchBoxComponent;
}());
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
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} match
     * @return {?}
     */
    HighlightPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} match
     * @return {?}
     */
    function (text, match) {
        if (!match) {
            return text;
        }
        return text.replace(match.trim(), "<span class=\"highlight\">" + match.trim() + "</span>");
    };
    HighlightPipe.decorators = [
        { type: Pipe, args: [{ name: 'cxHighlight' },] }
    ];
    return HighlightPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchBoxModule = /** @class */ (function () {
    function SearchBoxModule() {
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
    return SearchBoxModule;
}());

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
var OrderConfirmationItemsComponent = /** @class */ (function () {
    function OrderConfirmationItemsComponent(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    /**
     * @return {?}
     */
    OrderConfirmationItemsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation-items',
                    template: "<div class=\"cx-order-items container\" *ngIf=\"order$ | async as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [isReadOnly]=\"true\"\n  ></cx-cart-item-list>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationItemsComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    return OrderConfirmationItemsComponent;
}());
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
var OrderConfirmationOverviewComponent = /** @class */ (function () {
    function OrderConfirmationOverviewComponent(checkoutService, translation) {
        this.checkoutService = checkoutService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    /**
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getAddressCardContent = /**
     * @param {?} deliveryAddress
     * @return {?}
     */
    function (deliveryAddress) {
        return this.translation.translate('addressCard.shipTo').pipe(map((/**
         * @param {?} textTitle
         * @return {?}
         */
        function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryAddress.firstName + " " + deliveryAddress.lastName,
            text: [
                deliveryAddress.line1,
                deliveryAddress.line2,
                deliveryAddress.town + ", " + deliveryAddress.country.isocode + ", " + deliveryAddress.postalCode,
                deliveryAddress.phone,
            ],
        }); })));
    };
    /**
     * @param {?} deliveryMode
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getDeliveryModeCardContent = /**
     * @param {?} deliveryMode
     * @return {?}
     */
    function (deliveryMode) {
        return this.translation.translate('checkoutShipping.shippingMethod').pipe(map((/**
         * @param {?} textTitle
         * @return {?}
         */
        function (textTitle) { return ({
            title: textTitle,
            textBold: deliveryMode.name,
            text: [deliveryMode.description],
        }); })));
    };
    /**
     * @param {?} billingAddress
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getBillingAddressCardContent = /**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) {
        return this.translation.translate('addressCard.billTo').pipe(map((/**
         * @param {?} textTitle
         * @return {?}
         */
        function (textTitle) { return ({
            title: textTitle,
            textBold: billingAddress.firstName + " " + billingAddress.lastName,
            text: [
                billingAddress.line1,
                billingAddress.line2,
                billingAddress.town + ", " + billingAddress.country.isocode + ", " + billingAddress.postalCode,
                billingAddress.phone,
            ],
        }); })));
    };
    /**
     * @param {?} payment
     * @return {?}
     */
    OrderConfirmationOverviewComponent.prototype.getPaymentInfoCardContent = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
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
        function (_a) {
            var _b = __read(_a, 2), textTitle = _b[0], textExpires = _b[1];
            return ({
                title: textTitle,
                textBold: payment.accountHolderName,
                text: [payment.cardNumber, textExpires],
            });
        })));
    };
    OrderConfirmationOverviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation-overview',
                    template: "<div class=\"cx-order-review-summary\" *ngIf=\"order$ | async as order\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getAddressCardContent(order?.deliveryAddress) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"\n              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)\n                | async\n            \"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getDeliveryModeCardContent(order?.deliveryMode) | async\"\n          ></cx-card>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-3\">\n        <div class=\"summary-card\">\n          <cx-card\n            [content]=\"getPaymentInfoCardContent(order?.paymentInfo) | async\"\n          ></cx-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationOverviewComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: TranslationService }
    ]; };
    return OrderConfirmationOverviewComponent;
}());
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
var OrderConfirmationThankYouMessageComponent = /** @class */ (function () {
    function OrderConfirmationThankYouMessageComponent(checkoutService) {
        this.checkoutService = checkoutService;
        this.isGuestCustomer = false;
    }
    /**
     * @return {?}
     */
    OrderConfirmationThankYouMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            _this.isGuestCustomer = order.guestCustomer;
            _this.orderGuid = order.guid;
        })));
    };
    /**
     * @return {?}
     */
    OrderConfirmationThankYouMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationThankYouMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation-thank-you-message',
                    template: "<ng-container *ngIf=\"order$ | async as order\">\n  <header class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </header>\n\n  <div class=\"cx-order-confirmation-message\">\n    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n    <p>\n      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n    </p>\n    <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n  </div>\n\n  <div *ngIf=\"isGuestCustomer\">\n    <cx-guest-register-form\n      [guid]=\"orderGuid\"\n      [email]=\"order.paymentInfo.billingAddress.email\"\n    ></cx-guest-register-form>\n  </div>\n\n  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationThankYouMessageComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    return OrderConfirmationThankYouMessageComponent;
}());
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
var OrderConfirmationTotalsComponent = /** @class */ (function () {
    function OrderConfirmationTotalsComponent(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationTotalsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    /**
     * @return {?}
     */
    OrderConfirmationTotalsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationTotalsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation-totals',
                    template: "<div class=\"cx-order-summary container\" *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationTotalsComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    return OrderConfirmationTotalsComponent;
}());
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
var GuestRegisterFormComponent = /** @class */ (function () {
    function GuestRegisterFormComponent(userService, routingService, authService, fb) {
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
    GuestRegisterFormComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.registerGuest(this.guid, this.guestRegisterForm.value.password);
        if (!this.subscription) {
            this.subscription = this.authService.getUserToken().subscribe((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                if (token.access_token) {
                    _this.routingService.go({ cxRoute: 'home' });
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    GuestRegisterFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    GuestRegisterFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-guest-register-form',
                    template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').invalid &&\n              guestRegisterForm.get('password').dirty\n            \"\n          >\n            <span>{{ 'register.passwordMinRequirements' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            class=\"form-control\"\n            [class.is-invalid]=\"\n              guestRegisterForm.get('password').value !==\n              guestRegisterForm.get('passwordconf').value\n            \"\n            type=\"password\"\n            name=\"confirmpassword\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"\n              guestRegisterForm.get('password').value !==\n                guestRegisterForm.get('passwordconf').value &&\n              guestRegisterForm.get('passwordconf').value\n            \"\n          >\n            <span>{{ 'register.bothPasswordMustMatch' | cxTranslate }}</span>\n          </div>\n        </label>\n      </div>\n\n      <button\n        type=\"submit\"\n        (click)=\"submit()\"\n        [disabled]=\"guestRegisterForm.invalid\"\n        class=\"btn btn-block btn-primary\"\n      >\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    GuestRegisterFormComponent.ctorParameters = function () { return [
        { type: UserService },
        { type: RoutingService },
        { type: AuthService },
        { type: FormBuilder }
    ]; };
    GuestRegisterFormComponent.propDecorators = {
        guid: [{ type: Input }],
        email: [{ type: Input }]
    };
    return GuestRegisterFormComponent;
}());
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
var OrderConfirmationGuard = /** @class */ (function () {
    function OrderConfirmationGuard(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.checkoutService.getOrderDetails().pipe(map((/**
         * @param {?} orderDetails
         * @return {?}
         */
        function (orderDetails) {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                return _this.router.parseUrl(_this.semanticPathService.get('orders'));
            }
        })));
    };
    OrderConfirmationGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderConfirmationGuard.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: Router },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ OrderConfirmationGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(ɵɵinject(CheckoutService), ɵɵinject(Router), ɵɵinject(SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
    return OrderConfirmationGuard;
}());
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
var orderConfirmationComponents = [
    OrderConfirmationItemsComponent,
    OrderConfirmationOverviewComponent,
    OrderConfirmationThankYouMessageComponent,
    OrderConfirmationTotalsComponent,
    GuestRegisterFormComponent,
];
var OrderConfirmationModule = /** @class */ (function () {
    function OrderConfirmationModule() {
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
                    declarations: __spread(orderConfirmationComponents),
                    exports: __spread(orderConfirmationComponents),
                    entryComponents: __spread(orderConfirmationComponents),
                },] }
    ];
    return OrderConfirmationModule;
}());

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
var ProductCarouselService = /** @class */ (function () {
    function ProductCarouselService(productService, referenceService, semanticPathService) {
        this.productService = productService;
        this.referenceService = referenceService;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Loads the product data and converts it `CarouselItem`.
     */
    /**
     * Loads the product data and converts it `CarouselItem`.
     * @param {?} code
     * @return {?}
     */
    ProductCarouselService.prototype.loadProduct = /**
     * Loads the product data and converts it `CarouselItem`.
     * @param {?} code
     * @return {?}
     */
    function (code) {
        var _this = this;
        return this.productService.get(code).pipe(filter(Boolean), map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.convertProduct(product); })));
    };
    /**
     * @param {?} code
     * @param {?} referenceType
     * @param {?} displayTitle
     * @param {?} displayProductPrices
     * @return {?}
     */
    ProductCarouselService.prototype.getProductReferences = /**
     * @param {?} code
     * @param {?} referenceType
     * @param {?} displayTitle
     * @param {?} displayProductPrices
     * @return {?}
     */
    function (code, referenceType, displayTitle, displayProductPrices) {
        var _this = this;
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        function (refs) {
            return refs.map((/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                return _this.convertProduct(ref.target, displayTitle, displayProductPrices);
            }));
        })));
    };
    /**
     * Converts the product to a generic CarouselItem
     */
    /**
     * Converts the product to a generic CarouselItem
     * @private
     * @param {?} source
     * @param {?=} displayTitle
     * @param {?=} displayProductPrices
     * @return {?}
     */
    ProductCarouselService.prototype.convertProduct = /**
     * Converts the product to a generic CarouselItem
     * @private
     * @param {?} source
     * @param {?=} displayTitle
     * @param {?=} displayProductPrices
     * @return {?}
     */
    function (source, displayTitle, displayProductPrices) {
        if (displayTitle === void 0) { displayTitle = true; }
        if (displayProductPrices === void 0) { displayProductPrices = true; }
        /** @type {?} */
        var item = {};
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
    };
    ProductCarouselService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductCarouselService.ctorParameters = function () { return [
        { type: ProductService },
        { type: ProductReferenceService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ ProductCarouselService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductCarouselService_Factory() { return new ProductCarouselService(ɵɵinject(ProductService), ɵɵinject(ProductReferenceService), ɵɵinject(SemanticPathService)); }, token: ProductCarouselService, providedIn: "root" });
    return ProductCarouselService;
}());
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
var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(componentData, productService) {
        var _this = this;
        this.componentData = componentData;
        this.productService = productService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.title; })));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.productCodes.trim().split(' '); })), map((/**
         * @param {?} codes
         * @return {?}
         */
        function (codes) { return codes.map((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return _this.productService.get(code); })); })));
    }
    ProductCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-carousel',
                    template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService }
    ]; };
    return ProductCarouselComponent;
}());
if (false) {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductCarouselModule = /** @class */ (function () {
    function ProductCarouselModule() {
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
    return ProductCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductReferencesComponent = /** @class */ (function () {
    function ProductReferencesComponent(component, current, referenceService) {
        var _this = this;
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
        function (d) { return d.title; })));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.code; })));
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
        function (_a) {
            var _b = __read(_a, 2), code = _b[0], data = _b[1];
            return _this.getProductReferences(code, data.productReferenceTypes);
        })));
    }
    /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    ProductReferencesComponent.prototype.getProductReferences = /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    function (code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        function (refs) { return refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        function (ref) { return of(ref.target); })); })));
    };
    ProductReferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-references',
                    template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductReferencesComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CurrentProductService },
        { type: ProductReferenceService }
    ]; };
    return ProductReferencesComponent;
}());
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
var ProductReferencesModule = /** @class */ (function () {
    function ProductReferencesModule() {
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
    return ProductReferencesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductIntroComponent = /** @class */ (function () {
    function ProductIntroComponent(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    /**
     * @return {?}
     */
    ProductIntroComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    };
    // Scroll to views component on page and click "Reviews" tab
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    ProductIntroComponent.prototype.showReviews = 
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('CMSTabParagraphContainer.tabs.ProductReviewsTabComponent')
            .subscribe((/**
         * @param {?} reviewsTabLabel
         * @return {?}
         */
        function (reviewsTabLabel) {
            /** @type {?} */
            var tabsComponent = _this.getTabsComponent();
            /** @type {?} */
            var reviewsTab = _this.getTabByLabel(reviewsTabLabel, tabsComponent);
            /** @type {?} */
            var reviewsComponent = _this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                _this.clickTabIfInactive(reviewsTab);
                setTimeout((/**
                 * @return {?}
                 */
                function () { return reviewsComponent.scrollIntoView({ behavior: 'smooth' }); }), 0);
            }
        }))
            .unsubscribe();
    };
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    ProductIntroComponent.prototype.getReviewsComponent = 
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    function () {
        return this.winRef.document.querySelector('cx-product-reviews');
    };
    // Get Tabs Component if exists on page
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    ProductIntroComponent.prototype.getTabsComponent = 
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    function () {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    };
    // Click to activate tab if not already active
    // Click to activate tab if not already active
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    ProductIntroComponent.prototype.clickTabIfInactive = 
    // Click to activate tab if not already active
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    };
    // Get Tab by label if exists on page
    // Get Tab by label if exists on page
    /**
     * @private
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    ProductIntroComponent.prototype.getTabByLabel = 
    // Get Tab by label if exists on page
    /**
     * @private
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    function (label, tabsComponent) {
        var e_1, _a;
        if (tabsComponent) {
            // NOTE: Reads through h3 tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            /** @type {?} */
            var h3Elements = tabsComponent.getElementsByTagName('h3');
            try {
                // Look through h3 tab elements until finding tab with label
                for (var _b = __values(Array.from(h3Elements)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var h3Element = _c.value;
                    if (h3Element.innerHTML.includes(label)) {
                        return h3Element;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    ProductIntroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-intro',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"reviewsTabAvailable | async\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductIntroComponent.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: TranslationService },
        { type: WindowRef }
    ]; };
    return ProductIntroComponent;
}());
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
var ProductIntroModule = /** @class */ (function () {
    function ProductIntroModule() {
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
    return ProductIntroModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ViewModes = {
    Grid: 'grid',
    List: 'list',
};
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent() {
        this.iconTypes = ICON_TYPE;
        this.modeChange = new EventEmitter();
    }
    Object.defineProperty(ProductViewComponent.prototype, "buttonClass", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var viewName = this.viewMode.toLowerCase();
            return "cx-product-" + viewName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewComponent.prototype, "viewMode", {
        /**
         *   Display icons inversely to allow users
         *   to see the view they will navigate to
         */
        get: /**
         *   Display icons inversely to allow users
         *   to see the view they will navigate to
         * @return {?}
         */
        function () {
            if (this.mode === 'list') {
                return this.iconTypes.GRID;
            }
            else if (this.mode === 'grid') {
                return this.iconTypes.LIST;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProductViewComponent.prototype.changeMode = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newMode = this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
        this.modeChange.emit(newMode);
    };
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
    return ProductViewComponent;
}());
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
var ProductListComponentService = /** @class */ (function () {
    function ProductListComponentService(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        var _this = this;
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
        function (searchResult) { return Object.keys(searchResult).length > 0; })));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((/**
             * @param {?} x
             * @param {?} y
             * @return {?}
             */
            function (x, y) {
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
        function (state) {
            /** @type {?} */
            var criteria = _this.getCriteriaFromRoute(state.params, state.queryParams);
            _this.search(criteria);
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
    ProductListComponentService.prototype.clearSearchResults = /**
     * @return {?}
     */
    function () {
        this.productSearchService.clearResults();
    };
    /**
     * @private
     * @param {?} routeParams
     * @param {?} queryParams
     * @return {?}
     */
    ProductListComponentService.prototype.getCriteriaFromRoute = /**
     * @private
     * @param {?} routeParams
     * @param {?} queryParams
     * @return {?}
     */
    function (routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    ProductListComponentService.prototype.getQueryFromRouteParams = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var brandCode = _a.brandCode, categoryCode = _a.categoryCode, query = _a.query;
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_CATEGORY + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_BRAND + brandCode;
        }
    };
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    ProductListComponentService.prototype.search = /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        /** @type {?} */
        var query = criteria.query;
        /** @type {?} */
        var searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    };
    /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    ProductListComponentService.prototype.getSearchConfig = /**
     * @private
     * @param {?} criteria
     * @return {?}
     */
    function (criteria) {
        /** @type {?} */
        var result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return !result[key] && delete result[key]; }));
        return result;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ProductListComponentService.prototype.setQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.setQueryParams({ query: query, currentPage: undefined });
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductListComponentService.prototype.viewPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    };
    /**
     * Get items from a given page without using navigation
     */
    /**
     * Get items from a given page without using navigation
     * @param {?} pageNumber
     * @return {?}
     */
    ProductListComponentService.prototype.getPageItems = /**
     * Get items from a given page without using navigation
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        var _this = this;
        this.routing
            .getRouterState()
            .subscribe((/**
         * @param {?} route
         * @return {?}
         */
        function (route) {
            /** @type {?} */
            var routeCriteria = _this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            /** @type {?} */
            var criteria = __assign({}, routeCriteria, { currentPage: pageNumber });
            _this.search(criteria);
        }))
            .unsubscribe();
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    ProductListComponentService.prototype.sort = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        this.setQueryParams({ sortCode: sortCode });
    };
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    ProductListComponentService.prototype.setQueryParams = /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    };
    ProductListComponentService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ProductListComponentService.ctorParameters = function () { return [
        { type: ProductSearchService },
        { type: RoutingService },
        { type: ActivatedRoute },
        { type: CurrencyService },
        { type: LanguageService },
        { type: Router }
    ]; };
    /** @nocollapse */ ProductListComponentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(ɵɵinject(ProductSearchService), ɵɵinject(RoutingService), ɵɵinject(ActivatedRoute), ɵɵinject(CurrencyService), ɵɵinject(LanguageService), ɵɵinject(Router)); }, token: ProductListComponentService, providedIn: "root" });
    return ProductListComponentService;
}());
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
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ViewConfig = /** @class */ (function () {
    function ViewConfig() {
    }
    return ViewConfig;
}());
if (false) {
    /** @type {?} */
    ViewConfig.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(pageLayoutService, productListComponentService, scrollConfig) {
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
    ProductListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;
        this.productListComponentService.clearSearchResults();
        this.subscription.add(this.pageLayoutService.templateName$.pipe(take(1)).subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.viewMode$.next(template === 'ProductGridPageTemplate'
                ? ViewModes.Grid
                : ViewModes.List);
        })));
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductListComponent.prototype.viewPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.productListComponentService.viewPage(pageNumber);
    };
    /**
     * @param {?} sortCode
     * @return {?}
     */
    ProductListComponent.prototype.sortList = /**
     * @param {?} sortCode
     * @return {?}
     */
    function (sortCode) {
        this.productListComponentService.sort(sortCode);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ProductListComponent.prototype.setViewMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.viewMode$.next(mode);
    };
    /**
     * @return {?}
     */
    ProductListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    ProductListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-list',
                    template: "<div class=\"cx-page\" *ngIf=\"model$ | async as model\">\n  <section class=\"cx-page-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-12\" *ngIf=\"viewMode$ | async as viewMode\">\n          <div class=\"cx-sorting top\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div *ngIf=\"!isInfiniteScroll\" class=\"col-auto\">\n                <div\n                  class=\"cx-pagination\"\n                  aria-label=\"product search pagination\"\n                >\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    (viewPageEvent)=\"viewPage($event)\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n          <div class=\"cx-product-container\">\n            <!-- Product list when using pagination -->\n            <ng-container *ngIf=\"!isInfiniteScroll; else infiniteScroll\">\n              <ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n                <div class=\"row\">\n                  <cx-product-grid-item\n                    *ngFor=\"let product of model?.products\"\n                    [product]=\"product\"\n                    class=\"col-12 col-sm-6 col-md-4\"\n                  ></cx-product-grid-item>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"viewMode === ViewModes.List\">\n                <cx-product-list-item\n                  *ngFor=\"let product of model?.products\"\n                  [product]=\"product\"\n                  class=\"cx-product-search-list\"\n                ></cx-product-list-item>\n              </ng-container>\n            </ng-container>\n\n            <!-- Product list when using infinite scroll -->\n            <ng-template #infiniteScroll>\n              <cx-product-scroll\n                [scrollConfig]=\"scrollConfig\"\n                [model]=\"model\"\n                [inputViewMode]=\"viewMode\"\n              ></cx-product-scroll>\n            </ng-template>\n          </div>\n          <div class=\"cx-sorting bottom\">\n            <div class=\"row\">\n              <div class=\"col-12 col-lg-4 mr-auto\">\n                <div class=\"form-group cx-sort-dropdown\">\n                  <cx-sorting\n                    [sortOptions]=\"model.sorts\"\n                    (sortListEvent)=\"sortList($event)\"\n                    [selectedOption]=\"model.pagination.sort\"\n                    placeholder=\"{{\n                      'productList.sortByRelevance' | cxTranslate\n                    }}\"\n                  ></cx-sorting>\n                </div>\n              </div>\n              <div\n                *ngIf=\"!isInfiniteScroll\"\n                class=\"col-auto\"\n                aria-label=\"product search pagination\"\n              >\n                <div class=\"cx-pagination\">\n                  <cx-pagination\n                    [pagination]=\"model.pagination\"\n                    (viewPageEvent)=\"viewPage($event)\"\n                  ></cx-pagination>\n                </div>\n              </div>\n              <div class=\"col-auto ml-auto ml-lg-0\">\n                <cx-product-view\n                  (modeChange)=\"setViewMode($event)\"\n                  [mode]=\"viewMode\"\n                ></cx-product-view>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProductListComponent.ctorParameters = function () { return [
        { type: PageLayoutService },
        { type: ProductListComponentService },
        { type: ViewConfig }
    ]; };
    return ProductListComponent;
}());
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
var ProductFacetNavigationComponent = /** @class */ (function () {
    function ProductFacetNavigationComponent(modalService, activatedRoute, productListComponentService) {
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
    ProductFacetNavigationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.activeFacetValueCode = params.categoryCode || params.brandCode;
        }));
        this.searchResult$ = this.productListComponentService.model$.pipe(tap((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) {
            if (searchResult.facets) {
                searchResult.facets.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    _this.showAllPerFacetMap.set(el.name, false);
                }));
            }
        })));
        this.visibleFacets$ = this.searchResult$.pipe(map((/**
         * @param {?} searchResult
         * @return {?}
         */
        function (searchResult) {
            return searchResult.facets
                ? searchResult.facets.filter((/**
                 * @param {?} facet
                 * @return {?}
                 */
                function (facet) { return facet.visible; }))
                : [];
        })));
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.openFilterModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.toggleValue = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.productListComponentService.setQuery(this.queryCodec.decodeValue(query));
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.showLess = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        this.updateShowAllPerFacetMap(facetName, false);
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.showMore = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        this.updateShowAllPerFacetMap(facetName, true);
    };
    /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.updateShowAllPerFacetMap = /**
     * @private
     * @param {?} facetName
     * @param {?} showAll
     * @return {?}
     */
    function (facetName, showAll) {
        this.showAllPerFacetMap.set(facetName, showAll);
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.isFacetCollapsed = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        return this.collapsedFacets.has(facetName);
    };
    /**
     * @param {?} facetName
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.toggleFacet = /**
     * @param {?} facetName
     * @return {?}
     */
    function (facetName) {
        if (this.collapsedFacets.has(facetName)) {
            this.collapsedFacets.delete(facetName);
        }
        else {
            this.collapsedFacets.add(facetName);
        }
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.getVisibleFacetValues = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        return facet.values.slice(0, this.showAllPerFacetMap.get(facet.name)
            ? facet.values.length
            : this.minPerFacet);
    };
    /**
     * @return {?}
     */
    ProductFacetNavigationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    ProductFacetNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-facet-navigation',
                    template: "<ng-container *ngIf=\"searchResult$ | async as searchResult\">\n  <div class=\"cx-search-facet\">\n    <ng-container *ngIf=\"searchResult.breadcrumbs?.length\">\n      <h4 class=\"cx-facet-filter-header\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <div class=\"cx-facet-filter-container\">\n        <div\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n          [hidden]=\"breadcrumb.facetValueCode === activeFacetValueCode\"\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n        >\n          <span class=\"cx-facet-pill-value\">{{\n            breadcrumb.facetValueName\n          }}</span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"visibleFacets$ | async as visibleFacets\">\n      <ng-container *ngFor=\"let facet of visibleFacets; let facetId = index\">\n        <div class=\"cx-facet-group\">\n          <div class=\"cx-facet-header\">\n            <a\n              class=\"cx-facet-header-link\"\n              (click)=\"toggleFacet(facet.name)\"\n              [attr.aria-expanded]=\"!isFacetCollapsed(facet.name)\"\n              aria-controls=\"\"\n            >\n              {{ facet.name }}\n              <cx-icon\n                [type]=\"\n                  isFacetCollapsed(facet.name)\n                    ? iconTypes.EXPAND\n                    : iconTypes.COLLAPSE\n                \"\n              ></cx-icon>\n            </a>\n          </div>\n          <ng-container *ngIf=\"!isFacetCollapsed(facet.name)\">\n            <ul class=\"cx-facet-list\">\n              <li\n                *ngFor=\"\n                  let value of getVisibleFacetValues(facet);\n                  index as facetValueId\n                \"\n              >\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showLess(facet.name)\"\n                *ngIf=\"showAllPerFacetMap.get(facet.name)\"\n              >\n                {{ 'productList.showLess' | cxTranslate }}\n              </li>\n              <li\n                class=\"cx-facet-toggle-btn\"\n                (click)=\"showMore(facet.name)\"\n                *ngIf=\"\n                  !showAllPerFacetMap.get(facet.name) &&\n                  facet.values.length > minPerFacet\n                \"\n              >\n                {{ 'productList.showMore' | cxTranslate }}\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n\n  <div class=\"cx-facet-mobile\">\n    <div class=\"container\">\n      <button\n        class=\"btn btn-action btn-block cx-facet-mobile-btn\"\n        (click)=\"openFilterModal(content)\"\n      >\n        {{ 'productList.filterBy.action' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <!-- START ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n  <div class=\"container\">\n    <div class=\"cx-facet-mobile\" *ngIf=\"searchResult.breadcrumbs?.length\">\n      <div class=\"cx-facet-filter-container\">\n        <h4 class=\"cx-facet-filter-header\">\n          {{ 'productList.appliedFilter' | cxTranslate }}\n        </h4>\n        <div\n          class=\"cx-facet-filter-pill\"\n          role=\"filter\"\n          *ngFor=\"let breadcrumb of searchResult.breadcrumbs\"\n        >\n          <span class=\"cx-facet-pill-value\">\n            {{ breadcrumb.facetValueName }}\n          </span>\n          <button\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"toggleValue(breadcrumb.removeQuery.query.value)\"\n          >\n            <span aria-hidden=\"true\">\n              <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END ONLY SHOW FILTER SECTION IN MOBILE WHEN THEY ARE SELECTED -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"cx-facet-modal-title\" id=\"modal-title\">\n        {{ 'productList.filterBy.label' | cxTranslate }}\n      </h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <div class=\"modal-body cx-facet-modal-body\">\n      <form>\n        <div\n          class=\"form-group\"\n          *ngFor=\"let facet of searchResult.facets; index as facetId\"\n        >\n          <h4 class=\"cx-facet-modal-label\" for=\"megapixels\">\n            {{ facet.name }}\n          </h4>\n          <div class=\"input-group\">\n            <ul class=\"cx-facet-list\">\n              <li *ngFor=\"let value of facet.values; index as facetValueId\">\n                <div class=\"form-check\">\n                  <label class=\"form-checkbox cx-facet-label\">\n                    <input\n                      class=\"form-check-input cx-facet-checkbox\"\n                      role=\"checkbox\"\n                      type=\"checkbox\"\n                      aria-checked=\"true\"\n                      [checked]=\"value.selected\"\n                      (change)=\"toggleValue(value.query.query.value)\"\n                    />\n                    <span class=\"cx-facet-text\"\n                      >{{ value.name }} ({{ value.count }})</span\n                    >\n                  </label>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductFacetNavigationComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ActivatedRoute },
        { type: ProductListComponentService }
    ]; };
    return ProductFacetNavigationComponent;
}());
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
var ProductGridItemComponent = /** @class */ (function () {
    function ProductGridItemComponent() {
    }
    ProductGridItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-grid-item',
                    template: "<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-image-container\"\n>\n  <cx-media\n    class=\"cx-product-image\"\n    [container]=\"product.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product.summary\"\n  ></cx-media>\n</a>\n<a\n  [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n  class=\"cx-product-name\"\n  [innerHTML]=\"product.nameHtml\"\n></a>\n\n<div class=\"cx-product-rating\">\n  <cx-star-rating\n    [rating]=\"product?.averageRating\"\n    [disabled]=\"true\"\n  ></cx-star-rating>\n</div>\n<div class=\"cx-product-price-container\">\n  <div class=\"cx-product-price\" aria-label=\"Product price\">\n    {{ product.price.formattedValue }}\n  </div>\n</div>\n\n<cx-add-to-cart\n  *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n  [showQuantity]=\"false\"\n  [productCode]=\"product.code\"\n></cx-add-to-cart>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    ProductGridItemComponent.propDecorators = {
        product: [{ type: Input }]
    };
    return ProductGridItemComponent;
}());
if (false) {
    /** @type {?} */
    ProductGridItemComponent.prototype.product;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductListItemComponent = /** @class */ (function () {
    function ProductListItemComponent() {
    }
    ProductListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-list-item',
                    template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-image-container\"\n    >\n      <cx-media\n        class=\"cx-product-image\"\n        [container]=\"product.images?.PRIMARY\"\n        format=\"product\"\n        [alt]=\"product.summary\"\n      ></cx-media>\n    </a>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: product } | cxUrl\"\n      class=\"cx-product-name\"\n      [innerHtml]=\"product.nameHtml\"\n    ></a>\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"cx-product-price\" aria-label=\"Product price\">\n      {{ product.price?.formattedValue }}\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <p class=\"cx-product-summary\" [innerHtml]=\"product.summary\">\n          {{ product.summary }}\n        </p>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <cx-add-to-cart\n          *ngIf=\"product.stock.stockLevelStatus !== 'outOfStock'\"\n          [showQuantity]=\"false\"\n          [productCode]=\"product.code\"\n        ></cx-add-to-cart>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    ProductListItemComponent.propDecorators = {
        product: [{ type: Input }]
    };
    return ProductListItemComponent;
}());
if (false) {
    /** @type {?} */
    ProductListItemComponent.prototype.product;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductScrollComponent = /** @class */ (function () {
    function ProductScrollComponent(productListComponentService, ref) {
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
    Object.defineProperty(ProductScrollComponent.prototype, "setConfig", {
        set: /**
         * @param {?} inputConfig
         * @return {?}
         */
        function (inputConfig) {
            this.setComponentConfigurations(inputConfig);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setModel", {
        set: /**
         * @param {?} inputModel
         * @return {?}
         */
        function (inputModel) {
            this.infiniteScrollOperations(inputModel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductScrollComponent.prototype, "setViewMode", {
        set: /**
         * @param {?} inputViewMode
         * @return {?}
         */
        function (inputViewMode) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductScrollComponent.prototype.scrollPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.appendProducts = true;
        this.ref.markForCheck();
        this.productListComponentService.getPageItems(pageNumber);
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    ProductScrollComponent.prototype.loadNextPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.isMaxProducts = false;
        this.scrollPage(pageNumber);
    };
    /**
     * @return {?}
     */
    ProductScrollComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        window.scroll(0, 0);
    };
    /**
     * @private
     * @param {?} scrollConfig
     * @return {?}
     */
    ProductScrollComponent.prototype.setComponentConfigurations = /**
     * @private
     * @param {?} scrollConfig
     * @return {?}
     */
    function (scrollConfig) {
        /** @type {?} */
        var isButton = scrollConfig.view.infiniteScroll.showMoreButton;
        /** @type {?} */
        var configProductLimit = scrollConfig.view.infiniteScroll.productLimit;
        //Display "show more" button every time when button configuration is true
        //Otherwise, only display "show more" when the configuration product limit is reached
        this.productLimit = isButton ? 1 : configProductLimit;
    };
    /**
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    ProductScrollComponent.prototype.infiniteScrollOperations = /**
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    function (inputModel) {
        if (this.isSamePage(inputModel)) {
            return;
        }
        if (this.appendProducts) {
            this.model = __assign({}, inputModel, { products: this.model.products.concat(inputModel.products) });
        }
        else {
            this.model = inputModel;
            this.maxProducts = this.productLimit;
        }
        this.setConditions();
        this.ref.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    ProductScrollComponent.prototype.resetListOnViewModeChange = /**
     * @private
     * @return {?}
     */
    function () {
        this.scrollToTop();
        this.resetList = true;
        this.productListComponentService.getPageItems(0);
    };
    //Set booleans after model has been retrieved
    //Set booleans after model has been retrieved
    /**
     * @private
     * @return {?}
     */
    ProductScrollComponent.prototype.setConditions = 
    //Set booleans after model has been retrieved
    /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     */
    /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    ProductScrollComponent.prototype.isSamePage = /**
     * @deprecated at release 2.0.
     * If the new list is the same and it is not intended to reset the list then return true
     * Return false otherwise.
     * @private
     * @param {?} inputModel
     * @return {?}
     */
    function (inputModel) {
        if (!this.resetList &&
            this.model &&
            this.model.breadcrumbs &&
            inputModel.breadcrumbs &&
            this.model.breadcrumbs.length > 0 &&
            inputModel.breadcrumbs.length > 0) {
            if (this.model.breadcrumbs.length === inputModel.breadcrumbs.length) {
                for (var i = 0; i < this.model.breadcrumbs.length; i++) {
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
    };
    /**
     * @return {?}
     */
    ProductScrollComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    ProductScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-scroll',
                    template: "<ng-container *ngIf=\"viewMode === ViewModes.Grid\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"5\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <div class=\"row\">\n      <cx-product-grid-item\n        *ngFor=\"let product of model?.products\"\n        [product]=\"product\"\n        class=\"col-12 col-sm-6 col-md-4\"\n      ></cx-product-grid-item>\n    </div>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container grid-btn-padding'\n          : 'cx-single-btn-container grid-btn-padding'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"viewMode === ViewModes.List\">\n  <div\n    infiniteScroll\n    [infiniteScrollDistance]=\"3\"\n    [infiniteScrollThrottle]=\"50\"\n    [infiniteScrollDisabled]=\"isMaxProducts || isLastPage || isEmpty\"\n    (scrolled)=\"scrollPage(model?.pagination?.currentPage + 1)\"\n  >\n    <cx-product-list-item\n      *ngFor=\"let product of model?.products\"\n      [product]=\"product\"\n      class=\"cx-product-search-list\"\n    ></cx-product-list-item>\n    <div\n      [className]=\"\n        !isLastPage && model?.pagination?.currentPage > 0\n          ? 'cx-double-btn-container'\n          : 'cx-single-btn-container'\n      \"\n    >\n      <div\n        *ngIf=\"\n          (isMaxProducts || isLastPage) && model?.pagination?.currentPage > 0\n        \"\n        (click)=\"scrollToTop()\"\n        class=\"btn btn-block btn-action\"\n      >\n        {{ 'productList.backToTopBtn' | cxTranslate }}\n      </div>\n      <div\n        *ngIf=\"isMaxProducts && !isLastPage\"\n        (click)=\"loadNextPage(model?.pagination?.currentPage + 1)\"\n        class=\"btn btn-block btn-action align-btn\"\n      >\n        {{ 'productList.showMoreBtn' | cxTranslate }}\n      </div>\n    </div>\n    <div *ngIf=\"appendProducts\" class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    ProductScrollComponent.ctorParameters = function () { return [
        { type: ProductListComponentService },
        { type: ChangeDetectorRef }
    ]; };
    ProductScrollComponent.propDecorators = {
        setConfig: [{ type: Input, args: ['scrollConfig',] }],
        setModel: [{ type: Input, args: ['model',] }],
        setViewMode: [{ type: Input, args: ['inputViewMode',] }]
    };
    return ProductScrollComponent;
}());
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
/** @type {?} */
var defaultScrollConfig = {
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
var ViewConfigModule = /** @class */ (function () {
    function ViewConfigModule() {
    }
    /**
     * @return {?}
     */
    ViewConfigModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
    ViewConfigModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return ViewConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductListModule = /** @class */ (function () {
    function ProductListModule() {
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
                    ],
                    entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
                },] }
    ];
    return ProductListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ProductDetailOutlets = {
    INTRO: 'PDP.INTRO',
    PRICE: 'PDP.PRICE',
    SHARE: 'PDP.SHARE',
    SUMMARY: 'PDP.SUMMARY',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductSummaryComponent = /** @class */ (function () {
    function ProductSummaryComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.outlets = ProductDetailOutlets;
        this.product$ = this.currentProductService.getProduct();
    }
    ProductSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-summary',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <ng-template\n    [cxOutlet]=\"outlets.PRICE\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <div class=\"price\" aria-label=\"new item price\">\n      {{ product?.price?.formattedValue }}\n    </div>\n  </ng-template>\n\n  <ng-template\n    [cxOutlet]=\"outlets.SUMMARY\"\n    [cxOutletContext]=\"{ product: product }\"\n  >\n    <p [innerHTML]=\"product?.summary\" class=\"summary\"></p>\n  </ng-template>\n\n  <!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n  <!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n        <div>\n          <a href=\"#\" class=\"share btn-link\">\n            {{ 'productSummary.share' | cxTranslate }}\n          </a>\n        </div>\n      </ng-container> -->\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductSummaryComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductSummaryComponent;
}());
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
var ProductSummaryModule = /** @class */ (function () {
    function ProductSummaryModule() {
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
    return ProductSummaryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductAttributesComponent = /** @class */ (function () {
    function ProductAttributesComponent(currentProductService) {
        this.currentProductService = currentProductService;
    }
    /**
     * @return {?}
     */
    ProductAttributesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.product$ = this.currentProductService.getProduct();
    };
    ProductAttributesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-attributes',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\">\n    <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n    <table *ngFor=\"let class of product?.classifications\">\n      <th>\n        <h3>{{ class.name }}</h3>\n      </th>\n      <tr *ngFor=\"let feature of class.features\">\n        <td>{{ feature.name }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let featureValue of feature?.featureValues\">\n              {{ featureValue?.value }}\n            </li>\n          </ul>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductAttributesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductAttributesComponent;
}());
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
var ProductReviewsComponent = /** @class */ (function () {
    function ProductReviewsComponent(reviewService, currentProductService, fb) {
        var _this = this;
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
        function (p) { return !!p; })), switchMap((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.reviewService.getByProductCode(product.code); })), tap((/**
         * @return {?}
         */
        function () {
            _this.resetReviewForm();
            _this.maxListItems = _this.initialMaxListItems;
        })));
    }
    /**
     * @return {?}
     */
    ProductReviewsComponent.prototype.initiateWriteReview = /**
     * @return {?}
     */
    function () {
        this.isWritingReview = true;
    };
    /**
     * @return {?}
     */
    ProductReviewsComponent.prototype.cancelWriteReview = /**
     * @return {?}
     */
    function () {
        this.isWritingReview = false;
        this.resetReviewForm();
    };
    /**
     * @param {?} rating
     * @return {?}
     */
    ProductReviewsComponent.prototype.setRating = /**
     * @param {?} rating
     * @return {?}
     */
    function (rating) {
        this.reviewForm.controls.rating.setValue(rating);
    };
    /**
     * @param {?} product
     * @return {?}
     */
    ProductReviewsComponent.prototype.submitReview = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        /** @type {?} */
        var reviewFormControls = this.reviewForm.controls;
        /** @type {?} */
        var review = {
            headline: reviewFormControls.title.value,
            comment: reviewFormControls.comment.value,
            rating: reviewFormControls.rating.value,
            alias: reviewFormControls.reviewerName.value,
        };
        this.reviewService.add(product.code, review);
        this.isWritingReview = false;
        this.resetReviewForm();
    };
    /**
     * @private
     * @return {?}
     */
    ProductReviewsComponent.prototype.resetReviewForm = /**
     * @private
     * @return {?}
     */
    function () {
        this.reviewForm = this.fb.group({
            title: ['', Validators.required],
            comment: ['', Validators.required],
            rating: [0, [Validators.min(1), Validators.max(5)]],
            reviewerName: '',
        });
    };
    ProductReviewsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-reviews',
                    template: "<div class=\"container\" *ngIf=\"product$ | async as product\">\n  <h2>\n    {{ 'productDetails.reviews' | cxTranslate }} ({{ product.numberOfReviews }})\n  </h2>\n  <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n    <div class=\"header\">\n      <h3>{{ 'productReview.overallRating' | cxTranslate }}</h3>\n      <button class=\"btn btn-primary\" (click)=\"initiateWriteReview()\">\n        {{ 'productReview.writeReview' | cxTranslate }}\n      </button>\n      <cx-star-rating\n        class=\"rating\"\n        [rating]=\"product.averageRating\"\n        [disabled]=\"true\"\n      ></cx-star-rating>\n    </div>\n\n    <ng-container *ngIf=\"!isWritingReview; else writeReview\">\n      <ng-container *ngIf=\"reviews$ | async as reviews\">\n        <div\n          class=\"review\"\n          tabindex=\"0\"\n          *ngFor=\"let review of reviews | slice: 0:maxListItems\"\n        >\n          <div class=\"title\">{{ review.headline }}</div>\n          <cx-star-rating\n            [rating]=\"review.rating\"\n            [disabled]=\"true\"\n          ></cx-star-rating>\n          <div class=\"name\">\n            {{ review.alias ? review.alias : review.principal?.name }}\n          </div>\n          <div class=\"date\">{{ review.date | cxDate }}</div>\n          <div class=\"text\">{{ review.comment }}</div>\n        </div>\n        <div *ngIf=\"reviews.length > initialMaxListItems\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = reviews.length\"\n            *ngIf=\"maxListItems === initialMaxListItems\"\n          >\n            {{ 'productReview.more' | cxTranslate }}\n          </button>\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"maxListItems = initialMaxListItems\"\n            *ngIf=\"maxListItems !== initialMaxListItems\"\n          >\n            {{ 'productReview.less' | cxTranslate }}\n          </button>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-template #writeReview>\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitReview(product)\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewTitle' | cxTranslate\n          }}</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\" />\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.writeYourComments' | cxTranslate\n          }}</span>\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n          ></textarea>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.rating' | cxTranslate\n          }}</span>\n          <cx-star-rating (change)=\"setRating($event)\"></cx-star-rating>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'productReview.reviewerName' | cxTranslate\n          }}</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"reviewerName\"\n          />\n        </label>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-secondary\"\n            (click)=\"cancelWriteReview()\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-block btn-primary\"\n            [ngClass]=\"{ 'submit-btn': reviewForm.valid }\"\n            [disabled]=\"!reviewForm.valid\"\n          >\n            {{ 'common.submit' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductReviewsComponent.ctorParameters = function () { return [
        { type: ProductReviewService },
        { type: CurrentProductService },
        { type: FormBuilder }
    ]; };
    return ProductReviewsComponent;
}());
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
var ProductReviewsModule = /** @class */ (function () {
    function ProductReviewsModule() {
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
    return ProductReviewsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductAttributesModule = /** @class */ (function () {
    function ProductAttributesModule() {
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
    return ProductAttributesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductDetailsTabComponent = /** @class */ (function () {
    function ProductDetailsTabComponent(currentProductService) {
        this.currentProductService = currentProductService;
    }
    /**
     * @return {?}
     */
    ProductDetailsTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.product$ = this.currentProductService.getProduct();
    };
    ProductDetailsTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-details-tab',
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductDetailsTabComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductDetailsTabComponent;
}());
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
var ProductDetailsTabModule = /** @class */ (function () {
    function ProductDetailsTabModule() {
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
    return ProductDetailsTabModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProductTabsModule = /** @class */ (function () {
    function ProductTabsModule() {
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
    return ProductTabsModule;
}());

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
var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent(currentProductService) {
        var _this = this;
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return _this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {});
        })));
        this.thumbs$ = this.product$.pipe(map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.createThumbs(product); })));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), _ = _b[0], container = _b[1];
            return container;
        })));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    ProductImagesComponent.prototype.openImage = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.mainMediaContainer.next(item);
    };
    /**
     * @param {?} thumbnail
     * @return {?}
     */
    ProductImagesComponent.prototype.isActive = /**
     * @param {?} thumbnail
     * @return {?}
     */
    function (thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        })));
    };
    /** find the index of the main media in the list of media */
    /**
     * find the index of the main media in the list of media
     * @param {?} thumbs
     * @return {?}
     */
    ProductImagesComponent.prototype.getActive = /**
     * find the index of the main media in the list of media
     * @param {?} thumbs
     * @return {?}
     */
    function (thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            /** @type {?} */
            var current = thumbs.find((/**
             * @param {?} t
             * @return {?}
             */
            function (t) {
                return t.media &&
                    container.zoom &&
                    t.media.container &&
                    t.media.container.zoom &&
                    t.media.container.zoom.url === container.zoom.url;
            }));
            return thumbs.indexOf(current);
        })));
    };
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductImagesComponent.prototype.createThumbs = /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return ((/** @type {?} */ (product.images.GALLERY))).map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return of({ container: c }); }));
    };
    ProductImagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-images',
                    template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<cx-carousel\n  class=\"thumbs\"\n  [items]=\"thumbs$ | async\"\n  itemWidth=\"120px\"\n  [hideIndicators]=\"false\"\n  [template]=\"thumb\"\n></cx-carousel>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductImagesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductImagesComponent;
}());
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
var ProductImagesModule = /** @class */ (function () {
    function ProductImagesModule() {
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
    return ProductImagesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckoutLoginComponent = /** @class */ (function () {
    function CheckoutLoginComponent(formBuilder, cartService, authRedirectService) {
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
    CheckoutLoginComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    /**
     * @return {?}
     */
    CheckoutLoginComponent.prototype.isEmailConfirmInvalid = /**
     * @return {?}
     */
    function () {
        return (this.form.hasError('NotEqual') &&
            (this.submitClicked ||
                (this.form.get('emailConfirmation').touched &&
                    this.form.get('emailConfirmation').dirty)));
    };
    /**
     * @return {?}
     */
    CheckoutLoginComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        /** @type {?} */
        var email = this.form.value.email;
        this.cartService.addEmail(email);
        if (!this.sub) {
            this.sub = this.cartService.getAssignedUser().subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                if (_this.cartService.isGuestCart()) {
                    _this.authRedirectService.redirect();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    CheckoutLoginComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    CheckoutLoginComponent.prototype.emailsMatch = /**
     * @private
     * @param {?} abstractControl
     * @return {?}
     */
    function (abstractControl) {
        return abstractControl.get('email').value !==
            abstractControl.get('emailConfirmation').value
            ? { NotEqual: true }
            : null;
    };
    CheckoutLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-checkout-login',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        formControlName=\"email\"\n        placeholder=\"{{\n          'checkoutLogin.emailAddress.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isNotValid('email')\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isNotValid('email')\">\n        <span>{{ 'checkoutLogin.emailIsRequired' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'checkoutLogin.confirmEmail.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        name=\"emailConfirmation\"\n        class=\"form-control\"\n        formControlName=\"emailConfirmation\"\n        placeholder=\"{{\n          'checkoutLogin.confirmEmail.placeholder' | cxTranslate\n        }}\"\n        [class.is-invalid]=\"isEmailConfirmInvalid()\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"isEmailConfirmInvalid()\">\n        <span>{{ 'checkoutLogin.emailsMustMatch' | cxTranslate }}</span>\n      </div>\n    </label>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-block btn-primary\">\n    {{ 'checkoutLogin.continue' | cxTranslate }}\n  </button>\n</form>\n"
                }] }
    ];
    /** @nocollapse */
    CheckoutLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: CartService },
        { type: AuthRedirectService }
    ]; };
    return CheckoutLoginComponent;
}());
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
var CheckoutLoginModule = /** @class */ (function () {
    function CheckoutLoginModule() {
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
    return CheckoutLoginModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, globalMessageService, fb, authRedirectService, winRef, activatedRoute, featureConfig) {
        this.auth = auth;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.authRedirectService = authRedirectService;
        this.winRef = winRef;
        this.activatedRoute = activatedRoute;
        this.featureConfig = featureConfig;
        this.loginAsGuest = false;
    }
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            userId: ['', [Validators.required, CustomFormValidators.emailValidator]],
            password: ['', Validators.required],
        });
        if (this.featureConfig.isEnabled('guestCheckout')) {
            this.loginAsGuest = this.activatedRoute.snapshot.queryParams['forced'];
        }
        // TODO(issue:#4055) Deprecated since 1.1.0
        if (this.winRef && this.winRef.nativeWindow) {
            /** @type {?} */
            var routeState = this.winRef.nativeWindow.history &&
                this.winRef.nativeWindow.history.state;
            if (routeState && routeState['newUid'] && routeState['newUid'].length) {
                this.prefillForm('userId', routeState['newUid']);
            }
        }
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.form.controls, userId = _a.userId, password = _a.password;
        this.auth.authorize(userId.value.toLowerCase(), // backend accepts lowercase emails only
        password.value);
        if (!this.sub) {
            this.sub = this.auth.getUserToken().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data && data.access_token) {
                    _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                    _this.authRedirectService.redirect();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    LoginFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    LoginFormComponent.prototype.prefillForm = /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        var _a;
        this.form.patchValue((_a = {},
            _a[field] = value,
            _a));
        this.form.get(field).markAsTouched(); // this action will check field validity on load
    };
    LoginFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login-form',
                    template: "<form (submit)=\"login()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.emailAddress.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"\n          form.controls['userId'].invalid &&\n          (form.controls['userId'].touched || form.controls['userId'].dirty)\n        \"\n        formControlName=\"userId\"\n        placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n      />\n    </label>\n    <div\n      class=\"invalid-feedback\"\n      *ngIf=\"\n        form.controls['userId'].invalid &&\n        (form.controls['userId'].touched || form.controls['userId'].dirty)\n      \"\n    >\n      <span>{{ 'loginForm.wrongEmailFormat' | cxTranslate }}</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>\n      <span class=\"label-content\">{{\n        'loginForm.password.label' | cxTranslate\n      }}</span>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n        formControlName=\"password\"\n      />\n    </label>\n  </div>\n  <p>\n    <a\n      [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\"\n      aria-controls=\"reset-password\"\n      class=\"btn-link\"\n      >{{ 'loginForm.forgotPassword' | cxTranslate }}</a\n    >\n  </p>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.invalid\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n\n<div class=\"register\">\n  <h3 class=\"cx-section-title cx-section-title-alt\">\n    {{ 'loginForm.dontHaveAccount' | cxTranslate }}\n  </h3>\n\n  <ng-container *ngIf=\"!loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'register' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-register\"\n      >{{ 'loginForm.register' | cxTranslate }}</a\n    >\n  </ng-container>\n\n  <ng-container *ngIf=\"loginAsGuest\">\n    <a\n      [routerLink]=\"{ cxRoute: 'checkoutLogin' } | cxUrl\"\n      class=\"btn btn-block btn-secondary btn-guest\"\n      >{{ 'loginForm.guestCheckout' | cxTranslate }}</a\n    >\n  </ng-container>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    LoginFormComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: AuthRedirectService },
        { type: WindowRef },
        { type: ActivatedRoute },
        { type: FeatureConfigService }
    ]; };
    return LoginFormComponent;
}());
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
    LoginFormComponent.prototype.featureConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
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
    return LoginFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.user$ = this.auth.getUserToken().pipe(switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token && !!token.access_token) {
                return _this.userService.get();
            }
            else {
                return of(undefined);
            }
        })));
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-login',
                    template: "<ng-container *ngIf=\"user$ | async as user; else login\">\n  <div class=\"cx-login-greet\">\n    {{ 'miniLogin.userGreeting' | cxTranslate: { name: user.name } }}\n  </div>\n  <cx-page-slot position=\"HeaderLinks\"></cx-page-slot>\n</ng-container>\n\n<ng-template #login>\n  <a role=\"link\" [routerLink]=\"{ cxRoute: 'login' } | cxUrl\">{{\n    'miniLogin.signInRegister' | cxTranslate\n  }}</a>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: UserService }
    ]; };
    return LoginComponent;
}());
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
var LoginModule = /** @class */ (function () {
    function LoginModule() {
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
    return LoginModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogoutGuard = /** @class */ (function () {
    function LogoutGuard(auth, cms, routing, semanticPathService) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @return {?}
     */
    LogoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (hasPage) {
            if (!hasPage) {
                _this.routing.go({ cxRoute: 'home' });
            }
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    LogoutGuard.prototype.logout = /**
     * @protected
     * @return {?}
     */
    function () {
        this.auth.logout();
    };
    LogoutGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LogoutGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: CmsService },
        { type: RoutingService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ LogoutGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(ɵɵinject(AuthService), ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(SemanticPathService)); }, token: LogoutGuard, providedIn: "root" });
    return LogoutGuard;
}());
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$2 = { cxRoute: 'logout' };
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
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
    return LogoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RegisterComponent = /** @class */ (function () {
    /**
     * @deprecated since 1.1.0
     *
     * TODO(issue:4237) Register flow
     */
    function RegisterComponent(auth, authRedirectService, userService, globalMessageService, fb, router, featureConfig) {
        this.auth = auth;
        this.authRedirectService = authRedirectService;
        this.userService = userService;
        this.globalMessageService = globalMessageService;
        this.fb = fb;
        this.router = router;
        this.featureConfig = featureConfig;
        this.subscription = new Subscription();
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
            newsletter: [false],
            termsandconditions: [false, Validators.requiredTrue],
        }, { validator: CustomFormValidators.matchPassword });
        // TODO(issue:4237) Register flow
        this.isNewRegisterFlowEnabled = this.featureConfig && this.featureConfig.isLevel('1.1');
    }
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.titles$ = this.userService.getTitles().pipe(tap((/**
         * @param {?} titles
         * @return {?}
         */
        function (titles) {
            if (Object.keys(titles).length === 0) {
                _this.userService.loadTitles();
            }
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
                function (success) {
                    if (success) {
                        var _a = _this.collectDataFromRegisterForm(_this.userRegistrationForm.value), uid = _a.uid, password = _a.password;
                        _this.auth.authorize(uid, password);
                    }
                })));
                this.subscription.add(this.auth.getUserToken().subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (data && data.access_token) {
                        _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                        _this.authRedirectService.redirect();
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
        function (messages) { return !!Object.keys(messages).length; })))
            .subscribe((/**
         * @param {?} globalMessageEntities
         * @return {?}
         */
        function (globalMessageEntities) {
            /** @type {?} */
            var messages = globalMessageEntities &&
                globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
            if (messages &&
                messages.some((/**
                 * @param {?} message
                 * @return {?}
                 */
                function (message) { return message === 'This field is required.'; }))) {
                _this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
                _this.globalMessageService.add({ key: 'register.titleRequired' }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        })));
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.userService.register(this.collectDataFromRegisterForm(this.userRegistrationForm.value));
    };
    /**
     * @param {?} title
     * @return {?}
     */
    RegisterComponent.prototype.titleSelected = /**
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.userRegistrationForm['controls'].titleCode.setValue(title.code);
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    RegisterComponent.prototype.collectDataFromRegisterForm = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var firstName = formData.firstName, lastName = formData.lastName, email = formData.email, password = formData.password, titleCode = formData.titleCode;
        return {
            firstName: firstName,
            lastName: lastName,
            uid: email.toLowerCase(),
            password: password,
            titleCode: titleCode,
        };
    };
    /**
     * @private
     * @param {?} success
     * @return {?}
     */
    RegisterComponent.prototype.onRegisterUserSuccess = /**
     * @private
     * @param {?} success
     * @return {?}
     */
    function (success) {
        if (this.router && success) {
            this.router.go('login');
            this.globalMessageService.add({ key: 'register.postRegisterMessage' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    };
    /**
     * @private
     * @return {?}
     */
    RegisterComponent.prototype.registerUserProcessInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.resetRegisterUserProcessState();
        this.subscription.add(this.userService.getRegisterUserResultSuccess().subscribe((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            _this.onRegisterUserSuccess(success);
        })));
    };
    /**
     * @return {?}
     */
    RegisterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.userService.resetRegisterUserProcessState();
    };
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-register',
                    template: "<section\n  class=\"cx-page-section container\"\n  *ngIf=\"!(loading$ | async); else loading\"\n>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"cx-section\">\n        <form [formGroup]=\"userRegistrationForm\">\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.title' | cxTranslate\n              }}</span>\n              <select formControlName=\"titleCode\" class=\"form-control\">\n                <option selected value=\"\" disabled>{{\n                  'register.selectTitle' | cxTranslate\n                }}</option>\n                <option\n                  *ngFor=\"let title of titles$ | async\"\n                  [value]=\"title.code\"\n                  >{{ title.name }}</option\n                >\n              </select>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.firstName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"firstname\"\n                placeholder=\"{{\n                  'register.firstName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"firstName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.lastName.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"lastname\"\n                placeholder=\"{{\n                  'register.lastName.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"lastName\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.emailAddress.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('email').errors &&\n                  (userRegistrationForm.get('email').errors['email'] ||\n                    userRegistrationForm.get('email').errors['InvalidEmail']) &&\n                  userRegistrationForm.get('email').dirty\n                \"\n                type=\"email\"\n                name=\"email\"\n                placeholder=\"{{\n                  'register.emailAddress.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"email\"\n              />\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.password.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"{{\n                  'register.password.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"password\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').invalid &&\n                  userRegistrationForm.get('password').dirty\n                \"\n              >\n                <span>{{\n                  'register.passwordMinRequirements' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <label>\n              <span class=\"label-content\">{{\n                'register.confirmPassword.label' | cxTranslate\n              }}</span>\n              <input\n                class=\"form-control\"\n                [class.is-invalid]=\"\n                  userRegistrationForm.get('password').value !==\n                  userRegistrationForm.get('passwordconf').value\n                \"\n                type=\"password\"\n                name=\"confirmpassword\"\n                placeholder=\"{{\n                  'register.confirmPassword.placeholder' | cxTranslate\n                }}\"\n                formControlName=\"passwordconf\"\n              />\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"\n                  userRegistrationForm.get('password').value !==\n                    userRegistrationForm.get('passwordconf').value &&\n                  userRegistrationForm.get('passwordconf').value\n                \"\n              >\n                <span>{{\n                  'register.bothPasswordMustMatch' | cxTranslate\n                }}</span>\n              </div>\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"newsletter\"\n                  class=\"form-check-input\"\n                  formControlName=\"newsletter\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.emailMarketing' | cxTranslate }}\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  name=\"termsandconditions\"\n                  formControlName=\"termsandconditions\"\n                />\n                <span class=\"form-check-label\">\n                  {{ 'register.confirmThatRead' | cxTranslate }}\n                  <a\n                    [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n                    target=\"_blank\"\n                  >\n                    {{ 'register.termsAndConditions' | cxTranslate }}\n                  </a>\n                </span>\n              </label>\n            </div>\n          </div>\n          <button\n            type=\"submit\"\n            (click)=\"submit()\"\n            [disabled]=\"userRegistrationForm.invalid\"\n            class=\"btn btn-block btn-primary\"\n          >\n            {{ 'register.register' | cxTranslate }}\n          </button>\n          <a\n            class=\"cx-login-link btn-link\"\n            [routerLink]=\"{ cxRoute: 'login' } | cxUrl\"\n            >{{ 'register.signIn' | cxTranslate }}</a\n          >\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: AuthRedirectService },
        { type: UserService },
        { type: GlobalMessageService },
        { type: FormBuilder },
        { type: RoutingService },
        { type: FeatureConfigService }
    ]; };
    return RegisterComponent;
}());
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
    RegisterComponent.prototype.userRegistrationForm;
    /** @type {?} */
    RegisterComponent.prototype.isNewRegisterFlowEnabled;
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RegisterComponentModule = /** @class */ (function () {
    function RegisterComponentModule() {
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
    return RegisterComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserComponentModule = /** @class */ (function () {
    function UserComponentModule() {
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
    return UserComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WEEK_DAYS_NUMBER = 7;
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(storeDataService) {
        this.storeDataService = storeDataService;
        this.displayDays = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ScheduleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.location && this.location) {
            /** @type {?} */
            var initialDate = this.getInitialDate();
            this.displayDays = [];
            for (var i = 0; i < WEEK_DAYS_NUMBER; i++) {
                /** @type {?} */
                var date = new Date(initialDate.valueOf());
                date.setDate(date.getDate() + i);
                this.displayDays.push(date);
            }
        }
    };
    /**
     * Returns the store's opening time for the given date
     * @param date date
     */
    /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    ScheduleComponent.prototype.getStoreOpeningTime = /**
     * Returns the store's opening time for the given date
     * @param {?} date date
     * @return {?}
     */
    function (date) {
        return this.storeDataService.getStoreOpeningTime(this.location, date);
    };
    /**
     * Returns the store's closing time for the given date
     * @param date date
     */
    /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    ScheduleComponent.prototype.getStoreClosingTime = /**
     * Returns the store's closing time for the given date
     * @param {?} date date
     * @return {?}
     */
    function (date) {
        return this.storeDataService.getStoreClosingTime(this.location, date);
    };
    /**
     * return initial (first) date to be displayed in the schedule
     */
    /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    ScheduleComponent.prototype.getInitialDate = /**
     * return initial (first) date to be displayed in the schedule
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        return currentDate;
    };
    ScheduleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-schedule',
                    template: "<ng-content></ng-content>\n<div class=\"container cx-store-hours\" *ngIf=\"location.openingHours\">\n  <div *ngFor=\"let day of displayDays\" class=\"row\">\n    <div class=\"cx-days col-4\">{{ day | cxDate: 'EEE' }}</div>\n    <div *ngIf=\"getStoreOpeningTime(day) !== 'closed'\" class=\"cx-hours col-8\">\n      {{ getStoreOpeningTime(day) }} -\n      {{ getStoreClosingTime(day) }}\n    </div>\n    <div\n      *ngIf=\"getStoreOpeningTime(day) === 'closed'\"\n      class=\"cx-hours col-8 closed\"\n    >\n      {{ 'storeFinder.closed' | cxTranslate }}\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ScheduleComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    ScheduleComponent.propDecorators = {
        location: [{ type: Input }]
    };
    return ScheduleComponent;
}());
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
var StoreFinderGridComponent = /** @class */ (function () {
    function StoreFinderGridComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    StoreFinderGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.defaultLocation = {};
        if (this.route.snapshot.params.country) {
            this.storeFinderService.findStoresAction('', {
                pageSize: -1,
            }, undefined, this.route.snapshot.params.country);
        }
    };
    /**
     * @param {?} location
     * @return {?}
     */
    StoreFinderGridComponent.prototype.viewStore = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        this.routingService.go([this.prepareRouteUrl(location)]);
    };
    /**
     * @param {?} location
     * @return {?}
     */
    StoreFinderGridComponent.prototype.prepareRouteUrl = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        /** @type {?} */
        var countryParam = this.route.snapshot.params.country
            ? "country/" + this.route.snapshot.params.country + "/"
            : '';
        /** @type {?} */
        var regionParam = this.route.snapshot.params.region
            ? "region/" + this.route.snapshot.params.region + "/"
            : '';
        return "store-finder/" + countryParam + regionParam + location.name;
    };
    /**
     * @return {?}
     */
    StoreFinderGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    StoreFinderGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-grid',
                    template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div\n        class=\"col-sm-4 col-md-4 col-lg-3 item\"\n        *ngFor=\"let location of locations?.stores\"\n        (click)=\"viewStore(location)\"\n      >\n        <cx-store-finder-list-item\n          [location]=\"location\"\n        ></cx-store-finder-list-item>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderGridComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    return StoreFinderGridComponent;
}());
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
var StoreFinderHeaderComponent = /** @class */ (function () {
    function StoreFinderHeaderComponent() {
    }
    StoreFinderHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-header',
                    template: "<ng-container>\n  <cx-store-finder-search></cx-store-finder-search>\n</ng-container>\n"
                }] }
    ];
    return StoreFinderHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AbstractStoreItemComponent = /** @class */ (function () {
    function AbstractStoreItemComponent(storeDataService) {
        this.storeDataService = storeDataService;
    }
    /**
     * @param {?} location
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.getDirections = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        /** @type {?} */
        var google_map_url = 'https://www.google.com/maps/dir/Current+Location/';
        /** @type {?} */
        var latitude = this.storeDataService.getStoreLatitude(location);
        /** @type {?} */
        var longitude = this.storeDataService.getStoreLongitude(location);
        return google_map_url + latitude + ',' + longitude;
    };
    /**
     * @param {?} addressParts
     * @return {?}
     */
    AbstractStoreItemComponent.prototype.getFormattedStoreAddress = /**
     * @param {?} addressParts
     * @return {?}
     */
    function (addressParts) {
        return addressParts.filter(Boolean).join(', ');
    };
    AbstractStoreItemComponent.propDecorators = {
        location: [{ type: Input }]
    };
    return AbstractStoreItemComponent;
}());
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
var StoreFinderListItemComponent = /** @class */ (function (_super) {
    __extends(StoreFinderListItemComponent, _super);
    function StoreFinderListItemComponent(storeDataService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        _this.locationIndex = null;
        _this.storeItemClick = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    StoreFinderListItemComponent.prototype.handleStoreItemClick = /**
     * @return {?}
     */
    function () {
        if (this.locationIndex !== null) {
            this.storeItemClick.emit(this.locationIndex);
        }
    };
    StoreFinderListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-list-item',
                    template: "<ng-container>\n  <div (click)=\"handleStoreItemClick()\">\n    <div class=\"cx-store-list-order\">\n      {{ listOrderLabel }}\n    </div>\n    <div class=\"cx-store-name\">\n      {{ location.displayName || location.name }}\n    </div>\n    <div class=\"cx-store-address\" *ngIf=\"location.address\">\n      <div class=\"cx-store-address-street\">\n        {{ location.address.line1 }} {{ location.address.line2 }}\n      </div>\n      {{\n        getFormattedStoreAddress([\n          location.address.town,\n          location.address.postalCode,\n          location.address.country.isocode\n        ])\n      }}\n      <div\n        class=\"cx-store-distance\"\n        *ngIf=\"location.formattedDistance && displayDistance\"\n      >\n        {{ location.formattedDistance }}\n      </div>\n    </div>\n    <a\n      href=\"{{ getDirections(location) }}\"\n      target=\"_blank\"\n      class=\"btn btn-sm btn-action btn-block cx-button\"\n      (click)=\"$event.stopPropagation()\"\n      >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n    >\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderListItemComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    StoreFinderListItemComponent.propDecorators = {
        locationIndex: [{ type: Input }],
        listOrderLabel: [{ type: Input }],
        displayDistance: [{ type: Input }],
        storeItemClick: [{ type: Output }]
    };
    return StoreFinderListItemComponent;
}(AbstractStoreItemComponent));
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
var StoreFinderMapComponent = /** @class */ (function () {
    function StoreFinderMapComponent(googleMapRendererService) {
        this.googleMapRendererService = googleMapRendererService;
        this.selectedStoreItem = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StoreFinderMapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.locations && this.locations) {
            this.renderMap();
        }
    };
    /**
     * Sets the center of the map to the given location
     * @param latitude latitude of the new center
     * @param longitude longitude of the new center
     */
    /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    StoreFinderMapComponent.prototype.centerMap = /**
     * Sets the center of the map to the given location
     * @param {?} latitude latitude of the new center
     * @param {?} longitude longitude of the new center
     * @return {?}
     */
    function (latitude, longitude) {
        this.googleMapRendererService.centerMap(latitude, longitude);
    };
    /**
     * @return {?}
     */
    StoreFinderMapComponent.prototype.renderMap = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (/**
         * @param {?} markerIndex
         * @return {?}
         */
        function (markerIndex) {
            _this.selectStoreItemClickHandle(markerIndex);
        }));
    };
    /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    StoreFinderMapComponent.prototype.selectStoreItemClickHandle = /**
     * @private
     * @param {?} markerIndex
     * @return {?}
     */
    function (markerIndex) {
        this.selectedStoreItem.emit(markerIndex);
    };
    StoreFinderMapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-map',
                    template: "<div #mapElement class=\"cx-store-map\"></div>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderMapComponent.ctorParameters = function () { return [
        { type: GoogleMapRendererService }
    ]; };
    StoreFinderMapComponent.propDecorators = {
        mapElement: [{ type: ViewChild, args: ['mapElement', { static: true },] }],
        locations: [{ type: Input }],
        selectedStoreItem: [{ type: Output }]
    };
    return StoreFinderMapComponent;
}());
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
var StoreFinderPaginationDetailsComponent = /** @class */ (function () {
    function StoreFinderPaginationDetailsComponent() {
    }
    /**
     * @return {?}
     */
    StoreFinderPaginationDetailsComponent.prototype.getResultsPerPage = /**
     * @return {?}
     */
    function () {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            /** @type {?} */
            var firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            /** @type {?} */
            var resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return firstItem + " - " + resultsPerPage;
        }
        else {
            return "1 - " + this.pagination.totalResults;
        }
    };
    StoreFinderPaginationDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-pagination-details',
                    template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderPaginationDetailsComponent.ctorParameters = function () { return []; };
    StoreFinderPaginationDetailsComponent.propDecorators = {
        pagination: [{ type: Input }]
    };
    return StoreFinderPaginationDetailsComponent;
}());
if (false) {
    /** @type {?} */
    StoreFinderPaginationDetailsComponent.prototype.pagination;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderListComponent = /** @class */ (function () {
    function StoreFinderListComponent(storeDataService, document) {
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
    StoreFinderListComponent.prototype.centerStoreOnMapByIndex = /**
     * @param {?} index
     * @param {?} location
     * @return {?}
     */
    function (index, location) {
        this.showStoreDetails(location);
        this.selectedStoreIndex = index;
        this.selectedStore = location;
        this.storeMap.centerMap(this.storeDataService.getStoreLatitude(this.locations.stores[index]), this.storeDataService.getStoreLongitude(this.locations.stores[index]));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StoreFinderListComponent.prototype.selectStoreItemList = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedStoreIndex = index;
        /** @type {?} */
        var storeListItem = this.document.getElementById('item-' + index);
        storeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };
    /**
     * @param {?} location
     * @return {?}
     */
    StoreFinderListComponent.prototype.showStoreDetails = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        this.isDetailsModeVisible = true;
        this.storeDetails = location;
    };
    /**
     * @return {?}
     */
    StoreFinderListComponent.prototype.hideStoreDetails = /**
     * @return {?}
     */
    function () {
        this.isDetailsModeVisible = false;
        this.selectedStoreIndex = undefined;
        this.selectedStore = undefined;
        this.storeMap.renderMap();
    };
    StoreFinderListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-list',
                    template: "<ng-container *ngIf=\"locations\">\n  <div class=\"container mb-2\">\n    <div class=\"row\" *ngIf=\"locations?.pagination\">\n      <div class=\"col-md-12\">\n        <cx-store-finder-pagination-details\n          [pagination]=\"locations.pagination\"\n        ></cx-store-finder-pagination-details>\n      </div>\n      <div class=\"col-md-2 text-left cx-back-wrapper\">\n        <button\n          class=\"btn btn-block btn-action\"\n          *ngIf=\"isDetailsModeVisible\"\n          (click)=\"hideStoreDetails()\"\n        >\n          <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n          {{ 'storeFinder.backToList' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"locations?.stores\" class=\"row cx-columns\">\n      <div class=\"col-md-4 cx-address-col\">\n        <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n          <cx-store-finder-store-description\n            [location]=\"storeDetails\"\n            [disableMap]=\"true\"\n          ></cx-store-finder-store-description>\n        </div>\n        <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n          <li\n            *ngFor=\"let location of locations?.stores; let i = index\"\n            id=\"{{ 'item-' + i }}\"\n            [ngClass]=\"{\n              'cx-selected-item': selectedStoreIndex === i\n            }\"\n            class=\"cx-list-items\"\n          >\n            <cx-store-finder-list-item\n              [location]=\"location\"\n              [locationIndex]=\"i\"\n              [displayDistance]=\"useMylocation\"\n              (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n              [listOrderLabel]=\"\n                i +\n                locations.pagination.currentPage *\n                  locations.pagination.pageSize +\n                1\n              \"\n            ></cx-store-finder-list-item>\n          </li>\n        </ol>\n      </div>\n      <div class=\"col-md-8 cx-map-col\">\n        <cx-store-finder-map\n          #storeMap\n          [locations]=\"locations.stores\"\n          (selectedStoreItem)=\"selectStoreItemList($event)\"\n        ></cx-store-finder-map>\n      </div>\n    </div>\n\n    <!-- mobile tabs for column set only -->\n\n    <div *ngIf=\"locations?.stores\" class=\"cx-columns-mobile\">\n      <ngb-tabset justify=\"center\">\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.listView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-address-col\">\n              <div class=\"cx-store-details\" *ngIf=\"isDetailsModeVisible\">\n                <cx-store-finder-store-description\n                  [location]=\"storeDetails\"\n                  [disableMap]=\"true\"\n                ></cx-store-finder-store-description>\n              </div>\n              <ol class=\"cx-list\" *ngIf=\"!isDetailsModeVisible\">\n                <li\n                  *ngFor=\"let location of locations?.stores; let i = index\"\n                  id=\"{{ 'item-' + i }}\"\n                  [ngClass]=\"{\n                    'cx-selected-item': selectedStoreIndex === i\n                  }\"\n                  class=\"cx-list-items\"\n                >\n                  <cx-store-finder-list-item\n                    [location]=\"location\"\n                    [locationIndex]=\"i\"\n                    [displayDistance]=\"useMylocation\"\n                    (storeItemClick)=\"centerStoreOnMapByIndex($event, location)\"\n                    [listOrderLabel]=\"\n                      i +\n                      locations.pagination.currentPage *\n                        locations.pagination.pageSize +\n                      1\n                    \"\n                  ></cx-store-finder-list-item>\n                </li>\n              </ol>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle>\n            {{ 'storeFinder.mapView' | cxTranslate }}\n          </ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"cx-map-col\">\n              <cx-store-finder-map\n                #storeMap\n                [locations]=\"selectedStore ? [selectedStore] : locations.stores\"\n                (selectedStoreItem)=\"selectStoreItemList($event)\"\n              ></cx-store-finder-map>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    <!-- mobile tabs end -->\n\n    <div *ngIf=\"!locations?.stores\" class=\"row\">\n      <div class=\"col-md-12 cx-not-found\">\n        {{ 'storeFinder.noStoreFound' | cxTranslate }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderListComponent.ctorParameters = function () { return [
        { type: StoreDataService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    StoreFinderListComponent.propDecorators = {
        locations: [{ type: Input }],
        useMylocation: [{ type: Input }],
        storeMap: [{ type: ViewChild, args: ['storeMap', { static: false },] }]
    };
    return StoreFinderListComponent;
}());
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
var StoreFinderSearchResultComponent = /** @class */ (function () {
    function StoreFinderSearchResultComponent(storeFinderService, route) {
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
    StoreFinderSearchResultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            return _this.initialize(params);
        }));
    };
    /**
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.viewPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.searchConfig = __assign({}, this.searchConfig, { currentPage: pageNumber });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.initialize = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        this.searchQuery = this.parseParameters(params);
        this.useMyLocation = params && params.useMyLocation ? true : false;
        this.searchConfig = __assign({}, this.searchConfig, { currentPage: 0 });
        this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation);
        this.isLoading$ = this.storeFinderService.getStoresLoading();
        this.locations$ = this.storeFinderService.getFindStoresEntities();
    };
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    StoreFinderSearchResultComponent.prototype.parseParameters = /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    function (queryParams) {
        /** @type {?} */
        var searchQuery;
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
    };
    StoreFinderSearchResultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-search-result',
                    template: "<div\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div *ngIf=\"locations?.stores.length\">\n    <div class=\"cx-pagination\">\n      <cx-pagination\n        [pagination]=\"locations.pagination\"\n        (viewPageEvent)=\"viewPage($event)\"\n      ></cx-pagination>\n    </div>\n  </div>\n  <cx-store-finder-list\n    *ngIf=\"locations?.stores.length\"\n    [locations]=\"locations\"\n    [useMylocation]=\"useMyLocation\"\n  ></cx-store-finder-list>\n  <div class=\"container\" *ngIf=\"!locations?.stores.length\">\n    <div class=\"row\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderSearchResultComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute }
    ]; };
    return StoreFinderSearchResultComponent;
}());
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
var StoreFinderSearchComponent = /** @class */ (function () {
    function StoreFinderSearchComponent(routingService) {
        this.routingService = routingService;
        this.searchBox = new FormControl();
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @param {?} address
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.findStores = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.routingService.go(['store-finder/find'], { query: address });
    };
    /**
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.viewStoresWithMyLoc = /**
     * @return {?}
     */
    function () {
        this.routingService.go(['store-finder/find'], { useMyLocation: true });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StoreFinderSearchComponent.prototype.onKey = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    };
    StoreFinderSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-search',
                    template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-7\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n          required\n        />\n        <cx-icon\n          [type]=\"iconTypes.SEARCH\"\n          aria-label=\"search\"\n          class=\"search\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-5\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderSearchComponent.ctorParameters = function () { return [
        { type: RoutingService }
    ]; };
    return StoreFinderSearchComponent;
}());
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
var StoreFinderStoreDescriptionComponent = /** @class */ (function (_super) {
    __extends(StoreFinderStoreDescriptionComponent, _super);
    function StoreFinderStoreDescriptionComponent(storeDataService) {
        var _this = _super.call(this, storeDataService) || this;
        _this.storeDataService = storeDataService;
        return _this;
    }
    StoreFinderStoreDescriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-store-description',
                    template: "<ng-container *ngIf=\"location\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <article class=\"cx-store col-md-4\">\n        <h2>{{ location.displayName || location.name }}</h2>\n\n        <p *ngIf=\"location.address\" class=\"cx-store-description-address\">\n          {{ location.address.line1 }} {{ location.address.line2 }} <br />\n          {{\n            getFormattedStoreAddress([\n              location.address.town,\n              location.address.postalCode,\n              location.address.country.isocode\n            ])\n          }}\n        </p>\n\n        <section class=\"cx-contact\">\n          <ul class=\"cx-list\">\n            <li class=\"cx-item\">\n              <a\n                class=\"cx-link\"\n                [href]=\"getDirections(location)\"\n                target=\"_blank\"\n                >{{ 'storeFinder.getDirections' | cxTranslate }}</a\n              >\n            </li>\n            <li class=\"cx-item\" *ngIf=\"location.address?.phone\">\n              {{ 'storeFinder.call' | cxTranslate }}\n              {{ location.address?.phone }}\n            </li>\n          </ul>\n        </section>\n        <div class=\"cx-schedule\" *ngIf=\"location.openingHours\">\n          <cx-schedule [location]=\"location\">\n            <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>\n          </cx-schedule>\n        </div>\n\n        <div *ngIf=\"(location.features | json) != '{}'\" class=\"cx-features\">\n          <div class=\"row \">\n            <div class=\"col-lg-12\">\n              <h3 class=\"cx-features-header\">\n                {{ 'storeFinder.storeFeatures' | cxTranslate }}\n              </h3>\n            </div>\n          </div>\n\n          <article class=\"row\">\n            <div\n              class=\"col-lg-12 cx-feature-item\"\n              *ngFor=\"let feature of location.features?.entry\"\n            >\n              <div class=\"cx-feature-value\">{{ feature.value }}</div>\n            </div>\n          </article>\n        </div>\n      </article>\n      <article class=\"cx-storeMap col-lg-8\" *ngIf=\"!disableMap\">\n        <cx-store-finder-map [locations]=\"[location]\"></cx-store-finder-map>\n      </article>\n    </div>\n  </div>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoreDescriptionComponent.ctorParameters = function () { return [
        { type: StoreDataService }
    ]; };
    StoreFinderStoreDescriptionComponent.propDecorators = {
        location: [{ type: Input }],
        disableMap: [{ type: Input }]
    };
    return StoreFinderStoreDescriptionComponent;
}(AbstractStoreItemComponent));
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
var StoreFinderStoresCountComponent = /** @class */ (function () {
    function StoreFinderStoresCountComponent(storeFinderService) {
        this.storeFinderService = storeFinderService;
    }
    /**
     * @return {?}
     */
    StoreFinderStoresCountComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.storeFinderService.viewAllStores();
        this.locations$ = this.storeFinderService.getViewAllStoresEntities();
        this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
    };
    StoreFinderStoresCountComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-stores-count',
                    template: "<ng-container\n  *ngIf=\"\n    !(isLoading$ | async) && (locations$ | async) as locations;\n    else loading\n  \"\n>\n  <div class=\"cx-count container\">\n    <div class=\"row\" *ngIf=\"locations?.length\">\n      <div\n        *ngFor=\"let country of locations\"\n        class=\"cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3\"\n      >\n        <a [routerLink]=\"['../country', country.isoCode]\" class=\"btn-link\">\n          <div class=\"cx-title\">\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              class=\"cx-name\"\n              >{{ country.name }}</span\n            >\n            <span\n              [ngClass]=\"\n                country?.storeCountDataList\n                  ? 'country-header'\n                  : 'country-header-link'\n              \"\n              *ngIf=\"!country?.storeCountDataList\"\n              class=\"cx-country-count\"\n              >({{ country.count }})</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!locations?.length\">\n      <span class=\"cx-no-stores\">{{\n        'storeFinder.noStoresMessage' | cxTranslate\n      }}</span>\n    </div>\n  </div>\n</ng-container>\n<ng-template #loading>\n  <div class=\"cx-count-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoresCountComponent.ctorParameters = function () { return [
        { type: StoreFinderService }
    ]; };
    return StoreFinderStoresCountComponent;
}());
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
var StoreFinderComponent = /** @class */ (function () {
    function StoreFinderComponent() {
    }
    StoreFinderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder',
                    template: "<ng-container>\n  <div class=\"cx-store-finder-wrapper\">\n    <cx-store-finder-header></cx-store-finder-header>\n    <router-outlet></router-outlet>\n  </div>\n</ng-container>\n"
                }] }
    ];
    return StoreFinderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StoreFinderStoreComponent = /** @class */ (function () {
    function StoreFinderStoreComponent(storeFinderService, route, routingService) {
        this.storeFinderService = storeFinderService;
        this.route = route;
        this.routingService = routingService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    StoreFinderStoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.location) {
            this.requestStoresData();
            this.location$ = this.storeFinderService.getFindStoresEntities();
            this.isLoading$ = this.storeFinderService.getStoresLoading();
        }
    };
    /**
     * @return {?}
     */
    StoreFinderStoreComponent.prototype.requestStoresData = /**
     * @return {?}
     */
    function () {
        this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
    };
    /**
     * @return {?}
     */
    StoreFinderStoreComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        this.routingService.go([
            "store-finder/country/" + this.route.snapshot.params.country,
        ]);
    };
    StoreFinderStoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-store',
                    template: "<div\n  class=\"container\"\n  *ngIf=\"\n    location || (!(isLoading$ | async) && (location$ | async)) as location;\n    else loading\n  \"\n>\n  <div class=\"row cx-store-actions\">\n    <div class=\"col-md-4 col-sm-6 col-lg-2\">\n      <button class=\"btn btn-block btn-action\" (click)=\"goBack()\">\n        <cx-icon [type]=\"iconTypes.CARET_LEFT\"></cx-icon>\n        {{ 'storeFinder.backToList' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 p-0\">\n      <cx-store-finder-store-description\n        [disableMap]=\"disableMap\"\n        [location]=\"location\"\n      ></cx-store-finder-store-description>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <div class=\"cx-spinner\"><cx-spinner></cx-spinner></div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderStoreComponent.ctorParameters = function () { return [
        { type: StoreFinderService },
        { type: ActivatedRoute },
        { type: RoutingService }
    ]; };
    StoreFinderStoreComponent.propDecorators = {
        location: [{ type: Input }],
        disableMap: [{ type: Input }]
    };
    return StoreFinderStoreComponent;
}());
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
var StoreFinderModule = /** @class */ (function () {
    function StoreFinderModule() {
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
    return StoreFinderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CmsLibModule = /** @class */ (function () {
    function CmsLibModule() {
    }
    CmsLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
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
                    ],
                },] }
    ];
    return CmsLibModule;
}());

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
    var _a;
    /** @type {?} */
    var config = route.data.cxSuffixUrlMatcher;
    var marker = config.marker, paramName = config.paramName;
    /** @type {?} */
    var precedingParamName = config.precedingParamName || 'param';
    /** @type {?} */
    var markerIndex = findLastIndex(segments, (/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var path = _a.path;
        return path === marker;
    }));
    /** @type {?} */
    var isMarkerLastSegment = markerIndex === segments.length - 1;
    if (markerIndex === -1 || isMarkerLastSegment) {
        return null;
    }
    /** @type {?} */
    var paramIndex = markerIndex + 1;
    /** @type {?} */
    var posParams = (_a = {},
        _a[paramName] = segments[paramIndex],
        _a);
    for (var i = 0; i < markerIndex; i++) {
        posParams["" + precedingParamName + i] = segments[i];
    }
    return { consumed: segments.slice(0, paramIndex + 1), posParams: posParams };
}
/**
 * @template T
 * @param {?} elements
 * @param {?} predicate
 * @return {?}
 */
function findLastIndex(elements, predicate) {
    for (var index = elements.length - 1; index >= 0; index--) {
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
var ɵ0$3 = { cxRoute: 'product' }, ɵ1$1 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
};
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
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
    return ProductDetailsPageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0$4 = { cxRoute: 'category' }, ɵ1$2 = { pageLabel: 'search', cxRoute: 'search' }, ɵ2 = { cxRoute: 'brand' }, ɵ3 = {
    cxSuffixUrlMatcher: {
        marker: 'c',
        paramName: 'categoryCode',
    },
};
var ProductListingPageModule = /** @class */ (function () {
    function ProductListingPageModule() {
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
    return ProductListingPageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var b2cLayoutConfig = {
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
            slots: [
                'TopHeaderSlot',
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
var headerComponents = {
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
var defaultPageHeaderConfig = {
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
            components: __assign({}, headerComponents),
            slots: __assign({}, defaultPageHeaderConfig),
            pages: [],
        },
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultStorefrontRoutesConfig = {
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
var defaultRoutingConfig = {
    routing: {
        routes: defaultStorefrontRoutesConfig,
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    /**
     * @return {?}
     */
    RoutingModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: RoutingModule,
            providers: [provideConfig(defaultRoutingConfig)],
        };
    };
    RoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RoutingModule$1.forRoot(), CmsRouteModule],
                },] }
    ];
    return RoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StateModule.forRoot(),
                        AuthModule.forRoot(),
                        ConfigModule.forRoot(),
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
                    providers: __spread(provideConfigFromMetaTags()),
                },] }
    ];
    return StorefrontFoundationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StorefrontModule = /** @class */ (function () {
    function StorefrontModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    StorefrontModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: StorefrontModule,
            providers: [provideConfig(config)],
        };
    };
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
    return StorefrontModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var B2cStorefrontModule = /** @class */ (function () {
    function B2cStorefrontModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    B2cStorefrontModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: B2cStorefrontModule,
            providers: [provideConfig(config)],
        };
    };
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
    return B2cStorefrontModule;
}());

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

export { AbstractStoreItemComponent, AddToCartComponent, AddToCartModule, AddToHomeScreenBannerComponent, AddToHomeScreenBtnComponent, AddToHomeScreenComponent, AddedToCartDialogComponent, AddressBookComponent, AddressBookComponentService, AddressBookModule, AddressCardComponent, AddressFormComponent, AddressFormModule, AutoFocusDirective, B2cStorefrontModule, BREAKPOINT, BannerCarouselComponent, BannerCarouselModule, BannerComponent, BannerModule, BillingAddressFormComponent, BillingAddressFormModule, BreadcrumbComponent, BreadcrumbModule, BreakpointService, CardComponent, CardModule, CarouselComponent, CarouselModule, CarouselService, CartComponentModule, CartDetailsComponent, CartDetailsModule, CartItemComponent, CartItemListComponent, CartNotEmptyGuard, CartPageLayoutHandler, CartSharedModule, CartTotalsComponent, CartTotalsModule, CategoryNavigationComponent, CategoryNavigationModule, CheckoutAuthGuard, CheckoutComponentModule, CheckoutConfig, CheckoutConfigService, CheckoutDetailsLoadedGuard, CheckoutDetailsService, CheckoutGuard, CheckoutLoginModule, CheckoutOrchestratorComponent, CheckoutOrchestratorModule, CheckoutOrderSummaryComponent, CheckoutOrderSummaryModule, CheckoutProgressComponent, CheckoutProgressMobileBottomComponent, CheckoutProgressMobileBottomModule, CheckoutProgressMobileTopComponent, CheckoutProgressMobileTopModule, CheckoutProgressModule, CheckoutStepType, CloseAccountComponent, CloseAccountModalComponent, CloseAccountModule, CmsComponentData, CmsLibModule, CmsPageGuard, CmsParagraphModule, CmsRouteModule, ComponentWrapperDirective, ConsentManagementComponent, ConsentManagementFormComponent, ConsentManagementModule, CurrentProductService, DeliveryModeComponent, DeliveryModeModule, DeliveryModePreferences, DeliveryModeSetGuard, FooterNavigationComponent, FooterNavigationModule, ForgotPasswordComponent, ForgotPasswordModule, FormUtils, GenericLinkComponent, GenericLinkModule, GlobalMessageComponent, GlobalMessageComponentModule, HamburgerMenuComponent, HamburgerMenuModule, HamburgerMenuService, ICON_TYPE, IconComponent, IconConfig, IconLoaderService, IconModule, IconResourceType, ItemCounterComponent, ItemCounterModule, LanguageCurrencyComponent, LayoutConfig, LayoutModule, LinkComponent, LinkModule, ListNavigationModule, LoginComponent, LoginFormComponent, LoginFormModule, LoginModule, LogoutGuard, LogoutModule, MainModule, MediaComponent, MediaModule, MediaService, MiniCartComponent, MiniCartModule, ModalRef, ModalService, NavigationComponent, NavigationModule, NavigationService, NavigationUIComponent, NotCheckoutAuthGuard, OnlyNumberDirective, OrderConfirmationGuard, OrderConfirmationItemsComponent, OrderConfirmationModule, OrderConfirmationOverviewComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderDetailHeadlineComponent, OrderDetailItemsComponent, OrderDetailShippingComponent, OrderDetailTotalsComponent, OrderDetailsModule, OrderDetailsService, OrderHistoryComponent, OrderHistoryModule, OrderModule, OrderSummaryComponent, OutletDirective, OutletModule, OutletPosition, OutletRefDirective, OutletRefModule, OutletService, PAGE_LAYOUT_HANDLER, PWAModuleConfig, PageComponentModule, PageLayoutComponent, PageLayoutModule, PageLayoutService, PageSlotComponent, PageSlotModule, PaginationComponent, ParagraphComponent, PaymentDetailsSetGuard, PaymentFormComponent, PaymentFormModule, PaymentMethodComponent, PaymentMethodModule, PaymentMethodsComponent, PaymentMethodsModule, PlaceOrderComponent, PlaceOrderModule, ProductAttributesComponent, ProductCarouselComponent, ProductCarouselModule, ProductCarouselService, ProductDetailOutlets, ProductDetailsPageModule, ProductFacetNavigationComponent, ProductGridItemComponent, ProductIntroComponent, ProductIntroModule, ProductListComponent, ProductListItemComponent, ProductListModule, ProductListingPageModule, ProductReferencesComponent, ProductReferencesModule, ProductReviewsComponent, ProductReviewsModule, ProductSummaryComponent, ProductSummaryModule, ProductTabsModule, ProductViewComponent, PromotionsComponent, PromotionsModule, PwaModule, RegisterComponent, RegisterComponentModule, ResetPasswordFormComponent, ResetPasswordModule, ReviewSubmitComponent, ReviewSubmitModule, ScheduleComponent, SearchBoxComponent, SearchBoxComponentService, SearchBoxModule, SeoMetaService, SeoModule, ShippingAddressComponent, ShippingAddressModule, ShippingAddressSetGuard, SiteContextComponentService, SiteContextSelectorComponent, SiteContextSelectorModule, SiteContextType, SortingComponent, SpinnerComponent, SpinnerModule, StarRatingComponent, StarRatingModule, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderModule, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderStoreComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StorefrontComponent, StorefrontFoundationModule, StorefrontModule, SuggestedAddressDialogComponent, TabParagraphContainerComponent, TabParagraphContainerModule, UpdateEmailComponent, UpdateEmailFormComponent, UpdateEmailModule, UpdatePasswordComponent, UpdatePasswordFormComponent, UpdatePasswordModule, UpdateProfileComponent, UpdateProfileFormComponent, UpdateProfileModule, UserComponentModule, ViewModes, b2cLayoutConfig, defaultCmsContentConfig, defaultPWAModuleConfig, defaultPageHeaderConfig, fontawesomeIconConfig, headerComponents, initSeoService, pwaConfigurationFactory, pwaFactory, OnlyNumberDirectiveModule as ɵa, AutoFocusDirectiveModule as ɵb, addCmsRoute as ɵba, htmlLangProvider as ɵbb, setHtmlLangAttribute as ɵbc, RoutingModule as ɵbd, defaultStorefrontRoutesConfig as ɵbe, defaultRoutingConfig as ɵbf, defaultCheckoutConfig as ɵc, ExpressCheckoutService as ɵd, HighlightPipe as ɵe, defaultScrollConfig as ɵf, ProductListComponentService as ɵg, ViewConfig as ɵh, ViewConfigModule as ɵi, ProductScrollComponent as ɵj, ProductAttributesModule as ɵk, ProductDetailsTabModule as ɵl, ProductDetailsTabComponent as ɵm, CmsRoutesService as ɵn, CmsMappingService as ɵo, CmsI18nService as ɵp, CmsGuardsService as ɵq, TrackingEventsComponent as ɵr, ConsignmentTrackingComponent as ɵs, ComponentMapperService as ɵt, AddToHomeScreenService as ɵu, GuestRegisterFormComponent as ɵv, ProductImagesModule as ɵw, ProductImagesComponent as ɵx, CheckoutLoginComponent as ɵy, suffixUrlMatcher as ɵz };
//# sourceMappingURL=spartacus-storefront.js.map
