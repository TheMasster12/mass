/**
 * Javascript - Constants
 * Author - Andrew Mass
 *
 * Constant variables.
 */

define(function(require) {
  'use strict';

  var Constants = {};

  // Simulation
  Constants.NUM_PARTICLES = 500;
  Constants.UNIVERSE_SIZE = 1000;
  Constants.GALAXY_SIZE = 500;
  Constants.MAX_VELOCITY = 5;

  // Physical
  Constants.GRAVITY = 9.81;

  // Camera
  Constants.VIEW_ANGLE = 45;
  Constants.NEAR = 0.1;
  Constants.FAR = 10000;

  // Keys
  Constants.KEY_LEFT = 37;
  Constants.KEY_UP = 38;
  Constants.KEY_RIGHT = 39;
  Constants.KEY_DOWN = 40;
  Constants.KEY_D = 68;
  Constants.KEY_P = 80;
  Constants.KEY_R = 82;

  return Constants;
});
