import { AbstractType, InjectFlags, InjectionToken, Injector, Type } from '@angular/core';
/**
 * CombinedInjector is able to combine more than one injector together in a way
 * that main injector is supported by complementary injectors.
 *
 * Should be used as a parent injector for components, when we want to have access
 * to both providers from component hierarchical injectors and providers from any
 * number of additional injectors (lazy loaded modules for example).
 */
export declare class CombinedInjector implements Injector {
    private mainInjector;
    private complementaryInjectors;
    /**
     * @param mainInjector Component hierarchical injector
     * @param complementaryInjectors Additional injector that will be taken into an account when resolving dependencies
     */
    constructor(mainInjector: Injector, complementaryInjectors: Injector[]);
    get<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
    get(token: any, notFoundValue?: any): any;
}
