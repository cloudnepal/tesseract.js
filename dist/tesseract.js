!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createTesseractWorker=t():e.createTesseractWorker=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){function e(e,t){var r=a++;s[r]={};var n={jobId:r,action:e,args:t};return console.log(n),o.postMessage(n),{then:function(e){return s[r].result=e,this},error:function(e){return s[r].error=e,this},progress:function(e){return s[r].progress=e,this}}}function t(e){if(e.getContext)e=e.getContext("2d");else if("IMG"==e.tagName||"VIDEO"==e.tagName){var t=document.createElement("canvas");t.width=e.naturalWidth||e.videoWidth,t.height=e.naturalHeight||e.videoHeight;var r=t.getContext("2d");r.drawImage(e,0,0),e=r}return e.getImageData&&(e=e.getImageData(0,0,e.canvas.width,e.canvas.height)),e}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href+"build/tesseract.worker.js",n=new Blob(["importScripts('"+r+"');"]),o=new Worker(window.URL.createObjectURL(n)),i=!1,a=0,s={};return o.onmessage=function(e){var t=e.data,r=t.jobId,n=t.progress,o=t.error,i=t.result,a=s[r];n&&a.progress&&a.progress(n),o&&a.error&&a.error(o),i&&a.result&&a.result(i)},e("init",{mem:100663296}),{detect:function(r){return e("detect",{image:t(r)})},recognize:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eng";return"string"==typeof n?n={lang:n}:n.lang=n.lang||"eng",i||["chi_sim","chi_tra","jpn"].indexOf(n.lang)==-1||(e("init",{mem:167772160}),i=!0),e("recognize",{options:n,image:t(r)})}}}}])});