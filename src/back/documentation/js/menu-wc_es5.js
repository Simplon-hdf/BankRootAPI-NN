'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">back documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' : 'data-target="#xs-controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' : 'id="xs-controllers-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' : 'data-target="#xs-injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"' : 'id="xs-injectables-links-module-AppModule-081c8533a13d8fb972290f9e6720b383c551a62d8f20d01bb7410721557a6cc5f1b968cafc085520d39486d314aa5bdf0b8279e806c520c2b3519fd0ed07aeaf"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' : 'data-target="#xs-controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' : 'id="xs-controllers-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' : 'data-target="#xs-injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"' : 'id="xs-injectables-links-module-AuthModule-209adb00af2e9a672ebb08a2358b42eafb1beb346da2e25e3ea85c659d2a041123dc6e8d3af2edb7b12f6e8d1798cd20ed64fc8f48dc0c88005823640e4fc7ea"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BankAccountModule.html\" data-type=\"entity-link\" >BankAccountModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' : 'data-target="#xs-controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' : 'id="xs-controllers-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/BankAccountController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankAccountController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' : 'data-target="#xs-injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"' : 'id="xs-injectables-links-module-BankAccountModule-9973f9a3b8be8d01ff28b9b3bf28e9f50229bbf5eb532ce27d2ffb8c32bf002bc9139f6e929060958ed2405415657cd341c8b5a8f8b05008b16142a003e2c030"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/BankAccountService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BankAccountService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PrismaModule.html\" data-type=\"entity-link\" >PrismaModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' : 'data-target="#xs-controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' : 'id="xs-controllers-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UserController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' : 'data-target="#xs-injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"' : 'id="xs-injectables-links-module-UsersModule-88b8637767f4ac0f738657554b78225c9842496a0e37e6ef385165d9496e8ead925c19febb315cb0f8c3abf7a31e8868b8313a569c5b6a9bf87bfd4b1af1b1c0"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PrismaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PrismaService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/BankAccount.html\" data-type=\"entity-link\" >BankAccount</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateBankAccountDto.html\" data-type=\"entity-link\" >CreateBankAccountDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginDto.html\" data-type=\"entity-link\" >LoginDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RegisterDto.html\" data-type=\"entity-link\" >RegisterDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ResetPasswordDto.html\" data-type=\"entity-link\" >ResetPasswordDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateBankAccountDto.html\" data-type=\"entity-link\" >UpdateBankAccountDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalAuthGuard.html\" data-type=\"entity-link\" >LocalAuthGuard</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));