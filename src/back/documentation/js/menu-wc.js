'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' : 'data-target="#xs-controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' :
                                            'id="xs-controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' : 'data-target="#xs-injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' :
                                        'id="xs-injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' : 'data-target="#xs-controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' :
                                            'id="xs-controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' : 'data-target="#xs-injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' :
                                        'id="xs-injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankAccountModule.html" data-type="entity-link" >BankAccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' : 'data-target="#xs-controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' :
                                            'id="xs-controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' }>
                                            <li class="link">
                                                <a href="controllers/BankAccountController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankAccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' : 'data-target="#xs-injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' :
                                        'id="xs-injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' }>
                                        <li class="link">
                                            <a href="injectables/BankAccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankAccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' : 'data-target="#xs-controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' :
                                            'id="xs-controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' : 'data-target="#xs-injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' :
                                        'id="xs-injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BankAccount.html" data-type="entity-link" >BankAccount</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBankAccountDto.html" data-type="entity-link" >CreateBankAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBankAccountDto.html" data-type="entity-link" >UpdateBankAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});