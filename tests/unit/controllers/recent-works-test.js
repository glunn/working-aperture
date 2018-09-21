import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:recent-works', 'Unit | Controller | recent works', {
  // Specify the other units that are required for this test.
  needs:[ 'service:router-scroll' ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
