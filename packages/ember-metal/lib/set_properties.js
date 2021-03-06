import { changeProperties } from "ember-metal/property_events";
import { set } from "ember-metal/property_set";
import keys from "ember-metal/keys";

/**
  Set a list of properties on an object. These properties are set inside
  a single `beginPropertyChanges` and `endPropertyChanges` batch, so
  observers will be buffered.

  ```javascript
  var anObject = Ember.Object.create();

  anObject.setProperties({
    firstName: 'Stanley',
    lastName: 'Stuart',
    age: 21
  });
  ```

  @method setProperties
  @param self
  @param {Object} hash
  @return self
*/
export default function setProperties(self, hash) {
  changeProperties(function() {
    var props = keys(hash);
    var prop;

    for (var i = 0, l = props.length; i < l; i++) {
      prop = props[i];

      set(self, prop, hash[prop]);
    }
  });
  return self;
}
