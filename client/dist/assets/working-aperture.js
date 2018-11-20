"use strict";



define('working-aperture/adapters/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({
    host: 'https://secure-plains-60928.herokuapp.com'
  });
});
define('working-aperture/app', ['exports', 'working-aperture/resolver', 'ember-load-initializers', 'working-aperture/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('working-aperture/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('working-aperture/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('working-aperture/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('working-aperture/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('working-aperture/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('working-aperture/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('working-aperture/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('working-aperture/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('working-aperture/components/nav-bar/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      closeNavbar: function closeNavbar() {
        this.$('.collapse').collapse('hide');
      }
    }
  });
});
define("working-aperture/components/nav-bar/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iP2NVdiW", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"nav\"],[9,\"class\",\"navbar navbar-expand-md fixed-top\"],[3,\"action\",[[19,0,[]],\"closeNavbar\"]],[7],[0,\"\\n  \"],[6,\"button\"],[9,\"aria-controls\",\"navbarSupportedContent\"],[9,\"aria-expanded\",\"false\"],[9,\"aria-label\",\"Toggle navigation\"],[9,\"class\",\"navbar-toggler\"],[9,\"data-target\",\"#navbarSupportedContent\"],[9,\"data-toggle\",\"collapse\"],[9,\"type\",\"button\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"navbar-toggler-icon\"],[7],[0,\"☰\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"navbarSupportedContent\"],[7],[0,\"\\n    \"],[6,\"ul\"],[9,\"class\",\"navbar-nav ml-auto\"],[7],[0,\"\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item nav-link\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"logo\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-1\"],[7],[0,\"\\n              \"],[6,\"img\"],[9,\"alt\",\"Working Aperture Logo\"],[9,\"src\",\"/img/working-aperture.png\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-1\"],[7],[0,\"\\n              Working\"],[6,\"br\"],[7],[8],[0,\"Aperture\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item nav-link\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"what-sets-us-apart\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"            What sets\"],[6,\"br\"],[7],[8],[0,\"\\n            us apart\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item nav-link\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"order-options\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"          Order\"],[6,\"br\"],[7],[8],[0,\"\\n          Options\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item nav-link\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"recent-works\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"          Recent\"],[6,\"br\"],[7],[8],[0,\"\\n          Works\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/components/nav-bar/template.hbs" } });
});
define('working-aperture/components/order-form/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Component.extend({
    model: function model() {
      return this.store.createRecord('thing');
    },

    actions: {
      createUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var user;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = Ember.get(this, 'user');
                  _context.next = 3;
                  return user.save();

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function createUser() {
          return _ref.apply(this, arguments);
        }

        return createUser;
      }()
    }
  });
});
define("working-aperture/components/order-form/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i0pkbmIL", "block": "{\"symbols\":[\"user\"],\"statements\":[[6,\"ul\"],[7],[0,\"\\n  \"],[1,[20,[\"model\",\"email\"]],false],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[7],[1,[19,1,[\"email\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"value\",\"placeholder\"],[[20,[\"model\",\"name\"]],\"Name\"]]],false],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"value\",\"placeholder\"],[[20,[\"model\",\"email\"]],\"Email\"]]],false],[0,\"\\n  \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"createUser\"]],[7],[0,\"Submit\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/components/order-form/template.hbs" } });
});
define('working-aperture/components/parallax-content', ['exports', 'ember-parallax/components/parallax-content'], function (exports, _parallaxContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _parallaxContent.default;
    }
  });
});
define('working-aperture/components/portfolio-projects/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    actions: {
      toggleModal: function toggleModal() {
        this.toggleProperty('isShowingModal');
      }
    }
  });
});
define("working-aperture/components/portfolio-projects/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "C1N47Ytc", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"img\"],[10,\"onClick\",[25,\"action\",[[19,0,[]],\"toggleModal\"],null],null],[9,\"alt\",\"Working Aperture Logo\"],[9,\"class\",\"img-fluid\"],[10,\"src\",[20,[\"project\",\"photo\"]],null],[7],[8],[0,\"\\n\"],[6,\"h5\"],[7],[1,[20,[\"project\",\"title\"]],false],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"isShowingModal\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\"],[\"toggleModal\",\"center\",true]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n      \"],[6,\"p\"],[7],[1,[20,[\"project\",\"company\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-1\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"toggleModal\"]],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"img\"],[9,\"alt\",\"Working Aperture Logo\"],[9,\"class\",\"img-fluid img-modal\"],[10,\"src\",[20,[\"project\",\"photo\"]],null],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[1,[20,[\"project\",\"title\"]],false],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/components/portfolio-projects/template.hbs" } });
});
define('working-aperture/components/scroll-speed-adjust', ['exports', 'ember-parallax/components/scroll-speed-adjust'], function (exports, _scrollSpeedAdjust) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollSpeedAdjust.default;
    }
  });
});
define('working-aperture/components/site-footer/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("working-aperture/components/site-footer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qpkjmYop", "block": "{\"symbols\":[],\"statements\":[[6,\"footer\"],[9,\"class\",\"container py-5\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-12 col-md\"],[7],[0,\"\\n      \"],[6,\"img\"],[9,\"alt\",\"Working Aperture Logo\"],[9,\"src\",\"/img/working-aperture.png\"],[9,\"height\",\"30px;\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-6 col-md\"],[7],[0,\"\\n      \"],[6,\"h5\"],[7],[0,\"Resources\"],[8],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"list-unstyled text-small\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"text-muted\"],[9,\"href\",\"#\"],[7],[0,\"Resource\"],[8],[8],[0,\"\\n        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"text-muted\"],[9,\"href\",\"#\"],[7],[0,\"Resource name\"],[8],[8],[0,\"\\n\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-6 col-md\"],[7],[0,\"\\n      \"],[6,\"h5\"],[7],[0,\"Resources\"],[8],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"list-unstyled text-small\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"text-muted\"],[9,\"href\",\"#\"],[7],[0,\"Business\"],[8],[8],[0,\"\\n        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"text-muted\"],[9,\"href\",\"#\"],[7],[0,\"Education\"],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-6 col-md\"],[7],[0,\"\\n      \"],[6,\"h5\"],[7],[0,\"About\"],[8],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"list-unstyled text-small\"],[7],[0,\"\\n        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"text-muted\"],[9,\"href\",\"#\"],[7],[0,\"Team\"],[8],[8],[0,\"\\n        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"text-muted\"],[9,\"href\",\"#\"],[7],[0,\"Locations\"],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/components/site-footer/template.hbs" } });
});
define('working-aperture/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('working-aperture/controllers/order-options', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('working-aperture/controllers/recent-works', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    isShowingModal: false,
    actions: {
      toggleModal: function toggleModal() {
        this.toggleProperty('isShowingModal');
      }
    }
  });
});
define('working-aperture/helpers/app-version', ['exports', 'working-aperture/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('working-aperture/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('working-aperture/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('working-aperture/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('working-aperture/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('working-aperture/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'working-aperture/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('working-aperture/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('working-aperture/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('working-aperture/initializers/ember-cli-mirage', ['exports', 'working-aperture/config/environment', 'working-aperture/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    return (0, _startMirage.default)(null, { env: env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('working-aperture/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('working-aperture/initializers/export-application-global', ['exports', 'working-aperture/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('working-aperture/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('working-aperture/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('working-aperture/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('working-aperture/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
define("working-aperture/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('working-aperture/locations/router-scroll', ['exports', 'ember-router-scroll/locations/router-scroll'], function (exports, _routerScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
define("working-aperture/mirage/config", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
  };
});
define("working-aperture/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('working-aperture/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('working-aperture/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    email: _emberData.default.attr('string')
  });
});
define('working-aperture/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('working-aperture/router', ['exports', 'working-aperture/config/environment', 'ember-router-scroll'], function (exports, _environment, _emberRouterScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend(_emberRouterScroll.default, {
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('what-sets-us-apart');
    this.route('order-options');
    this.route('recent-works');
  });

  exports.default = Router;
});
define('working-aperture/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // beforeModel() {
    //   this.replaceWith('what-sets-us-apart');
    // }
  });
});
define('working-aperture/routes/order-options', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('user');

      // return [{
      //   user: user1
      // }]
    }
  });
});
define('working-aperture/routes/recent-works', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return [{
        id: 'drill-bits',
        title: 'Vionnet Pochette Bag',
        company: 'Milner',
        category: 'products',
        photo: '/img/Vionnet-Pochette-Bag.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/Inflatable-portable-lounger-sm.jpg'
      }, {
        id: 'widget',
        title: 'Widget',
        company: 'Coner',
        category: 'products',
        photo: '/img/Lanvin-Clutch.jpg'
      }, {
        id: 'widget-2',
        title: 'Another Widget',
        company: 'Something',
        category: 'products',
        photo: '/img/Shakshuka-display-md.jpg'
      }, {
        id: 'drill-bits',
        title: 'Vionnet Pochette Bag',
        company: 'Milner',
        category: 'products',
        photo: '/img/Vionnet-Pochette-Bag.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/Inflatable-portable-lounger-sm.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/ritualist-banner.jpg'
      }, {
        id: 'widget-2',
        title: 'Another Widget',
        company: 'Something',
        category: 'products',
        photo: '/img/Shakshuka-display-md.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'drill-bits',
        title: 'Vionnet Pochette Bag',
        company: 'Milner',
        category: 'products',
        photo: '/img/Vionnet-Pochette-Bag.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'widget',
        title: 'Widget',
        company: 'Coner',
        category: 'products',
        photo: '/img/Lanvin-Clutch.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/Inflatable-portable-lounger-sm.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/ritualist-banner.jpg'
      }, {
        id: 'widget-2',
        title: 'Another Widget',
        company: 'Something',
        category: 'products',
        photo: '/img/Shakshuka-display-md.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'widget',
        title: 'Widget',
        company: 'Coner',
        category: 'products',
        photo: '/img/Lanvin-Clutch.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/ritualist-banner.jpg'
      }, {
        id: 'drill-bits',
        title: 'Vionnet Pochette Bag',
        company: 'Milner',
        category: 'products',
        photo: '/img/Vionnet-Pochette-Bag.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/Inflatable-portable-lounger-sm.jpg'
      }, {
        id: 'widget',
        title: 'Widget',
        company: 'Coner',
        category: 'products',
        photo: '/img/Lanvin-Clutch.jpg'
      }, {
        id: 'widget-2',
        title: 'Another Widget',
        company: 'Something',
        category: 'products',
        photo: '/img/Shakshuka-display-md.jpg'
      }, {
        id: 'drill-bits',
        title: 'Vionnet Pochette Bag',
        company: 'Milner',
        category: 'products',
        photo: '/img/Vionnet-Pochette-Bag.jpg'
      }, {
        id: 'sander',
        title: 'Sander',
        company: 'Milner',
        category: 'products',
        photo: '/img/Chloe-Clutch.jpg'
      }, {
        id: 'screw',
        title: 'Screw',
        company: 'Taned',
        category: 'products',
        photo: '/img/Inflatable-portable-lounger-sm.jpg'
      }];
    }
  });
});
define('working-aperture/routes/what-sets-us-apart', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('working-aperture/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('working-aperture/services/modal-dialog', ['exports', 'working-aperture/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed,
      Service = Ember.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define('working-aperture/services/router-scroll', ['exports', 'ember-router-scroll/services/router-scroll'], function (exports, _routerScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
define('working-aperture/services/windoc', ['exports', 'ember-windoc/services/windoc'], function (exports, _windoc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _windoc.default;
    }
  });
});
define("working-aperture/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JSQQaa34", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"nav-bar\",null,null,{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/templates/application.hbs" } });
});
define("working-aperture/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "u2HBuHSY", "block": "{\"symbols\":[],\"statements\":[[2,\"   <img src='/img/Vionnet-Pochette-Bag.jpg' height=\\\"200px\\\">\\n<div>\\n  <h2>Home Page</h2>\\n  <p>\\n    This is a test\\n  </p>\\n</div>\\n{{#parallax-content speed=0.9 height=800 }}\\n  <p>\\n    This is a test\\n  </p>\\n  <img src='/img/Vionnet-Pochette-Bag.jpg'>\\n{{/parallax-content}}{{#parallax-content speed=2 height=400 }}\\n  <p>\\n    This is a test\\n  </p>\\n  <img src='/img/Vionnet-Pochette-Bag.jpg'>\\n{{/parallax-content}}  <p>\\n    This is a test\\n  </p>\\n{{outlet}} \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"add-top\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"banner position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 p-lg-5 mx-auto my-5\"],[7],[0,\"\\n      \"],[6,\"h1\"],[9,\"class\",\"display-5 font-weight-normal\"],[7],[0,\"Working Aperture\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"lead font-weight-normal\"],[7],[0,\"Product photography studio offering fully customizable, commercial photographs for your\\n  products, according to your standards. Simple mail-in process, client oversees production\\n  process.\"],[8],[0,\"\\n      \"],[6,\"a\"],[9,\"class\",\"btn btn-outline-secondary\"],[9,\"href\",\"#\"],[7],[0,\"Build order\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"box-shadow d-none d-md-block\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"box-shadow d-none d-md-block\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"my-3 py-3\"],[7],[0,\"\\n        \"],[6,\"h2\"],[9,\"class\",\"display-5\"],[7],[0,\"Here's a heading\"],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[0,\"And and then a subheading.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"half-banner-img bg-light box-shadow mx-auto\"],[9,\"style\",\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"my-3 p-3\"],[7],[0,\"\\n        \"],[6,\"h2\"],[9,\"class\",\"display-5\"],[7],[0,\"Another headline\"],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[0,\"Something else here.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"bg-dark box-shadow mx-auto\"],[9,\"style\",\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"my-3 p-3\"],[7],[0,\"\\n        \"],[6,\"h2\"],[9,\"class\",\"display-5\"],[7],[0,\"And then we should write another thing.\"],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[0,\"It could go here.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"banner-img bg-white box-shadow mx-auto\"],[9,\"style\",\"width: 80%; height: 300px; border-radius: 21px 21px 0 0;\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"site-footer\"],false]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/templates/index.hbs" } });
});
define("working-aperture/templates/order-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oYEo2Fku", "block": "{\"symbols\":[\"user\"],\"statements\":[[6,\"div\"],[9,\"class\",\"container add-top add-extra-top\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n      \"],[6,\"h2\"],[7],[0,\"Order Options\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"section-subheading text-muted\"],[7],[0,\"\\n        Order Pictures. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"ul\"],[7],[0,\"\\n      test\\n      \"],[1,[20,[\"model\",\"email\"]],false],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[7],[1,[19,1,[\"email\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n    \"],[1,[25,\"order-form\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"site-footer\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/templates/order-options.hbs" } });
});
define("working-aperture/templates/recent-works", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f9e5ZNC4", "block": "{\"symbols\":[\"projectUnit\"],\"statements\":[[6,\"div\"],[9,\"class\",\"container add-top add-extra-top\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n      \"],[6,\"h2\"],[7],[0,\"Recent Works\"],[8],[0,\"\\n      \"],[6,\"p\"],[9,\"class\",\"section-subheading text-muted\"],[7],[0,\"\\n        Some pictures. Lit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur.\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"recent-works container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"portfolio-projects\",null,[[\"project\",\"class\"],[[19,1,[]],\"col-sm-3\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"site-footer\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/templates/recent-works.hbs" } });
});
define("working-aperture/templates/what-sets-us-apart", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NgoCSxXa", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container add-top add-extra-top\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"    \\n    \"],[2,\" About \"],[0,\"\\n    \"],[6,\"section\"],[9,\"id\",\"about\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-12 text-center\"],[7],[0,\"\\n            \"],[6,\"h2\"],[9,\"class\",\"section-heading\"],[7],[0,\"What sets us apart\"],[8],[0,\"\\n            \"],[6,\"h3\"],[9,\"class\",\"section-subheading text-muted\"],[7],[0,\"Lorem ipsum dolor sit amet consectetur.\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n            \"],[6,\"ul\"],[9,\"class\",\"timeline\"],[7],[0,\"\\n              \"],[6,\"li\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-image\"],[7],[0,\"\\n                  \"],[6,\"img\"],[9,\"class\",\"rounded-circle img-fluid\"],[9,\"src\",\"img/about/1.jpg\"],[9,\"alt\",\"\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-panel\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-heading\"],[7],[0,\"\\n                    \"],[6,\"h4\"],[9,\"class\",\"subheading\"],[7],[0,\"Build your order\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-body\"],[7],[0,\"\\n                    \"],[6,\"p\"],[9,\"class\",\"text-muted\"],[7],[0,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"li\"],[9,\"class\",\"timeline-inverted\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-image\"],[7],[0,\"\\n                  \"],[6,\"img\"],[9,\"class\",\"rounded-circle img-fluid\"],[9,\"src\",\"img/about/2.jpg\"],[9,\"alt\",\"\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-panel\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-heading\"],[7],[0,\"\\n                    \"],[6,\"h4\"],[9,\"class\",\"subheading\"],[7],[0,\"Mail items\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-body\"],[7],[0,\"\\n                    \"],[6,\"p\"],[9,\"class\",\"text-muted\"],[7],[0,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"li\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-image\"],[7],[0,\"\\n                  \"],[6,\"img\"],[9,\"class\",\"rounded-circle img-fluid\"],[9,\"src\",\"img/about/3.jpg\"],[9,\"alt\",\"\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-panel\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-heading\"],[7],[0,\"\\n                    \"],[6,\"h4\"],[9,\"class\",\"subheading\"],[7],[0,\"Feedback\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-body\"],[7],[0,\"\\n                    \"],[6,\"p\"],[9,\"class\",\"text-muted\"],[7],[0,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"li\"],[9,\"class\",\"timeline-inverted\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-image\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"timeline-panel\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-heading\"],[7],[0,\"\\n                    \"],[6,\"h4\"],[9,\"class\",\"subheading\"],[7],[0,\"Custom Photos\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"timeline-body\"],[7],[0,\"\\n                    \"],[6,\"p\"],[9,\"class\",\"text-muted\"],[7],[0,\"Lorem ipsum oluta tibique phaedrum eos id, ut propriae suscipit intellegam ius, alterum feugiat pertinacia pro eu.\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"section\"],[7],[0,\"\\n      \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"\\n          Vel eu quot labores verterem. Pri nonumy antiopam ne, quod sonet eu mel. An partem utroque vim, quo ut eligendi repudiandae. Nisl tantas iracundia an vel. Laudem labores appellantur et vis. Soluta tibique phaedrum eos id, ut propriae suscipit intellegam ius, alterum feugiat pertinacia pro eu.\\n        \"],[8],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"\\n          An usu prompta delenit elaboraret, mea cu solum habemus fuisset, eum ea tota nominavi delicatissimi. Dictas minimum comprehensam id eos. Eos at hinc scaevola. Nobis praesent gloriatur ne pri, probatus antiopam theophrastus per ex, atqui nominavi pertinax ei mel. At forensibus concludaturque has, verterem erroribus iracundia pro id, at vis voluptua instructior. In mea nostrud detraxit moderatius.\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"site-footer\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "working-aperture/templates/what-sets-us-apart.hbs" } });
});
define('working-aperture/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('working-aperture/config/environment', [], function() {
  var prefix = 'working-aperture';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("working-aperture/app")["default"].create({"name":"working-aperture","version":"0.0.0+2e4a7615"});
}
//# sourceMappingURL=working-aperture.map
