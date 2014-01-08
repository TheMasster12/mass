/**
 * Javascript - Particle
 * Author - Andrew Mass
 *
 * Particle object.
 */

define(function(require) {
  'use strict';

  /**
   * Construct a new particle and add it to the simulation.
   */
  function Particle(scene, pos, vel, mass) {
    var size = mass;
    var geometry = new THREE.SphereGeometry(size, 10, 10);
    var material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var particle = new THREE.Mesh(geometry, material);

    particle.position.set(pos.x, pos.y, pos.z);
    scene.add(particle);
  }

  return Particle;
});
