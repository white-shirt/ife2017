!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var n={exports:{}};t(n.exports),e.initGui=n.exports}}(this,function(e){"use strict";function t(){var e=this,t=new dat.GUI,n={widthSegments:20,heightSegments:20,depthSegments:20,torusSegments:20,wireframe:!1},i=function(){e.cat.geometry.dispose(),e.cat.geometry=new THREE.BoxGeometry(e.cat_size.width,e.cat_size.height,e.cat_size.depth,n.widthSegments,n.heightSegments,n.depthSegments),e.cat.material.wireframe=n.wireframe,Array.from(e.wheel,function(e){e.geometry.dispose(),e.material.wireframe=n.wireframe,e.geometry=new THREE.TorusGeometry(12,6,16,n.torusSegments)})};t.add(n,"widthSegments",1,40,1).onChange(i),t.add(n,"heightSegments",1,40,1).onChange(i),t.add(n,"depthSegments",1,40,1).onChange(i),t.add(n,"torusSegments",1,40,1).onChange(i),t.add(n,"wireframe").onChange(i),t.open()}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=t});