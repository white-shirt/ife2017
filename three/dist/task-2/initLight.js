!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var i={exports:{}};t(i.exports),e.initLight=i.exports}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16454200,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=new THREE.SphereGeometry(i,12,8),r=new THREE.MeshLambertMaterial({color:t,wireframe:this.DEBUG}),a=new THREE.Mesh(n,r);this.reference.push(a),e.add(a)};e.initAmbientLight=function(){var e=new THREE.AmbientLight(6710886);return e},e.initDirectionalLight=function(){var e=new THREE.DirectionalLight(10066329,.8);return e},e.initSpotLight=function(){var e=new THREE.SpotLight(6710886);return e.castShadow=!0,e.angle=Math.PI/6,e.intensity=1.5,e.penumbra=0,e.decay=2,e.distance=800,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=1,e.shadow.camera.far=1e3,t.call(this,e),e}});