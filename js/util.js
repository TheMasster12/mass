/**
 * Javascript - Utility
 * Author - Andrew Mass
 *
 * Utility functions.
 */

define(function(require) {
  'use strict';

  var Constants = require('constants');

  var Util = {};

  Util.randomStartPos = function() {
    var x = ((Math.random() * Constants.GALAXY_SIZE) - (Constants.GALAXY_SIZE / 2)) * 2;
    var y = ((Math.random() * Constants.GALAXY_SIZE) - (Constants.GALAXY_SIZE / 2)) * 2;
    var z = ((Math.random() * Constants.GALAXY_SIZE) - (Constants.GALAXY_SIZE / 2)) * 2;
    return new THREE.Vector3(x, y, z);
  };

  Util.randomStartVel = function() {
    var x = ((Math.random() * Constants.MAX_VELOCITY) - (Constants.MAX_VELOCITY / 2)) * 2;
    var y = ((Math.random() * Constants.MAX_VELOCITY) - (Constants.MAX_VELOCITY / 2)) * 2;
    var z = ((Math.random() * Constants.MAX_VELOCITY) - (Constants.MAX_VELOCITY / 2)) * 2;
    return new THREE.Vector3(x, y, z);
  };

  return Util;
});
