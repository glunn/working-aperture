'use strict';

define('working-aperture/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/user.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/nav-bar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/nav-bar/component.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/portfolio-projects/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/portfolio-projects/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/site-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/site-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/recent-works.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/recent-works.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/order-options.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/order-options.js should pass ESLint\n\n');
  });

  QUnit.test('routes/recent-works.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/recent-works.js should pass ESLint\n\n');
  });

  QUnit.test('routes/what-sets-us-apart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/what-sets-us-apart.js should pass ESLint\n\n');
  });
});
define('working-aperture/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('working-aperture/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'working-aperture/tests/helpers/start-app', 'working-aperture/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('working-aperture/tests/helpers/start-app', ['exports', 'working-aperture/app', 'working-aperture/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('working-aperture/tests/integration/components/nav-bar-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('nav-bar', 'Integration | Component | nav bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "23Mh82eG",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"nav-bar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rwhJAS6T",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"nav-bar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('portfolio-projects', 'Integration | Component | portfolio projects', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{portfolio-projects}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#portfolio-projects}}
//       template block text
//     {{/portfolio-projects}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("working-aperture/tests/integration/components/portfolio-projects-test", [], function () {
  "use strict";
});
define('working-aperture/tests/integration/components/site-footer-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('site-footer', 'Integration | Component | site footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "PgFC8k9h",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"site-footer\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tQJU+8sL",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"site-footer\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('working-aperture/tests/test-helper', ['working-aperture/app', 'working-aperture/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('working-aperture/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/nav-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nav-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/portfolio-projects-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/portfolio-projects-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/site-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/site-footer-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/recent-works-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/recent-works-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/order-options-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/order-options-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/recent-works-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/recent-works-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/what-sets-us-apart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/what-sets-us-apart-test.js should pass ESLint\n\n');
  });
});
define('working-aperture/tests/unit/adapters/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:user', 'Unit | Adapter | user', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('working-aperture/tests/unit/controllers/recent-works-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:recent-works', 'Unit | Controller | recent works', {
    // Specify the other units that are required for this test.
    needs: ['service:router-scroll']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('working-aperture/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('working-aperture/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    needs: ['service:router-scroll']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('working-aperture/tests/unit/routes/order-options-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:order-options', 'Unit | Route | order options', {
    // Specify the other units that are required for this test.
    needs: ['service:router-scroll']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('working-aperture/tests/unit/routes/recent-works-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:recent-works', 'Unit | Route | recent works', {
    // Specify the other units that are required for this test.
    needs: ['service:router-scroll']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('working-aperture/tests/unit/routes/what-sets-us-apart-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:what-sets-us-apart', 'Unit | Route | what sets us apart', {
    // Specify the other units that are required for this test.
    needs: ['service:router-scroll']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('working-aperture/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
