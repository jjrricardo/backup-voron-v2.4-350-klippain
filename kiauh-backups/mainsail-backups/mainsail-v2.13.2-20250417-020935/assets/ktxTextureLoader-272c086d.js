import{a as n,f as l}from"./Viewer-8a8ed1d4.js";import"./index-f28d7425.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";import"./codemirror-0a1db0c7.js";class _{constructor(s,e){if(this.data=s,this.isInvalid=!1,!_.IsValid(s)){this.isInvalid=!0,n.Error("texture missing KTX identifier");return}const i=Uint32Array.BYTES_PER_ELEMENT,o=new DataView(this.data.buffer,this.data.byteOffset+12,13*i),r=o.getUint32(0,!0)===67305985;if(this.glType=o.getUint32(1*i,r),this.glTypeSize=o.getUint32(2*i,r),this.glFormat=o.getUint32(3*i,r),this.glInternalFormat=o.getUint32(4*i,r),this.glBaseInternalFormat=o.getUint32(5*i,r),this.pixelWidth=o.getUint32(6*i,r),this.pixelHeight=o.getUint32(7*i,r),this.pixelDepth=o.getUint32(8*i,r),this.numberOfArrayElements=o.getUint32(9*i,r),this.numberOfFaces=o.getUint32(10*i,r),this.numberOfMipmapLevels=o.getUint32(11*i,r),this.bytesOfKeyValueData=o.getUint32(12*i,r),this.glType!==0){n.Error("only compressed formats currently supported"),this.isInvalid=!0;return}else this.numberOfMipmapLevels=Math.max(1,this.numberOfMipmapLevels);if(this.pixelHeight===0||this.pixelDepth!==0){n.Error("only 2D textures currently supported"),this.isInvalid=!0;return}if(this.numberOfArrayElements!==0){n.Error("texture arrays not currently supported"),this.isInvalid=!0;return}if(this.numberOfFaces!==e){n.Error("number of faces expected"+e+", but found "+this.numberOfFaces),this.isInvalid=!0;return}this.loadType=_.COMPRESSED_2D}uploadLevels(s,e){switch(this.loadType){case _.COMPRESSED_2D:this._upload2DCompressedLevels(s,e);break}}_upload2DCompressedLevels(s,e){let i=_.HEADER_LEN+this.bytesOfKeyValueData,o=this.pixelWidth,a=this.pixelHeight;const r=e?this.numberOfMipmapLevels:1;for(let f=0;f<r;f++){const R=new Int32Array(this.data.buffer,this.data.byteOffset+i,1)[0];i+=4;for(let d=0;d<this.numberOfFaces;d++){const p=new Uint8Array(this.data.buffer,this.data.byteOffset+i,R);s.getEngine()._uploadCompressedDataToTextureDirectly(s,s.format,o,a,p,d,f),i+=R,i+=3-(R+3)%4}o=Math.max(1,o*.5),a=Math.max(1,a*.5)}}static IsValid(s){if(s.byteLength>=12){const e=new Uint8Array(s.buffer,s.byteOffset,12);if(e[0]===171&&e[1]===75&&e[2]===84&&e[3]===88&&e[4]===32&&e[5]===49&&e[6]===49&&e[7]===187&&e[8]===13&&e[9]===10&&e[10]===26&&e[11]===10)return!0}return!1}}_.HEADER_LEN=12+13*4;_.COMPRESSED_2D=0;_.COMPRESSED_3D=1;_.TEX_2D=2;_.TEX_3D=3;class G{constructor(s){this._pendingActions=new Array,this._workerInfos=s.map(e=>({workerPromise:Promise.resolve(e),idle:!0}))}dispose(){for(const s of this._workerInfos)s.workerPromise.then(e=>{e.terminate()});this._workerInfos.length=0,this._pendingActions.length=0}push(s){this._executeOnIdleWorker(s)||this._pendingActions.push(s)}_executeOnIdleWorker(s){for(const e of this._workerInfos)if(e.idle)return this._execute(e,s),!0;return!1}_execute(s,e){s.idle=!1,s.workerPromise.then(i=>{e(i,()=>{const o=this._pendingActions.shift();o?this._execute(s,o):s.idle=!0})})}}class A extends G{constructor(s,e,i=A.DefaultOptions){super([]),this._maxWorkers=s,this._createWorkerAsync=e,this._options=i}push(s){if(!this._executeOnIdleWorker(s))if(this._workerInfos.length<this._maxWorkers){const e={workerPromise:this._createWorkerAsync(),idle:!1};this._workerInfos.push(e),this._execute(e,s)}else this._pendingActions.push(s)}_execute(s,e){s.timeoutId&&(clearTimeout(s.timeoutId),delete s.timeoutId),super._execute(s,(i,o)=>{e(i,()=>{o(),s.idle&&(s.timeoutId=setTimeout(()=>{s.workerPromise.then(r=>{r.terminate()});const a=this._workerInfos.indexOf(s);a!==-1&&this._workerInfos.splice(a,1)},this._options.idleTimeElapsedBeforeRelease))})})}}A.DefaultOptions={idleTimeElapsedBeforeRelease:1e3};var u;(function(t){t[t.ETC1S=0]="ETC1S",t[t.UASTC4x4=1]="UASTC4x4"})(u||(u={}));var S;(function(t){t[t.ASTC_4X4_RGBA=0]="ASTC_4X4_RGBA",t[t.BC7_RGBA=1]="BC7_RGBA",t[t.BC3_RGBA=2]="BC3_RGBA",t[t.BC1_RGB=3]="BC1_RGB",t[t.PVRTC1_4_RGBA=4]="PVRTC1_4_RGBA",t[t.PVRTC1_4_RGB=5]="PVRTC1_4_RGB",t[t.ETC2_RGBA=6]="ETC2_RGBA",t[t.ETC1_RGB=7]="ETC1_RGB",t[t.RGBA32=8]="RGBA32",t[t.R8=9]="R8",t[t.RG8=10]="RG8"})(S||(S={}));var D;(function(t){t[t.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",t[t.COMPRESSED_RGBA_ASTC_4X4_KHR=37808]="COMPRESSED_RGBA_ASTC_4X4_KHR",t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",t[t.RGBA8Format=32856]="RGBA8Format",t[t.R8Format=33321]="R8Format",t[t.RG8Format=33323]="RG8Format"})(D||(D={}));function T(t,s){const e=(s==null?void 0:s.jsDecoderModule)||KTX2DECODER;t&&(t.wasmUASTCToASTC&&(e.LiteTranscoder_UASTC_ASTC.WasmModuleURL=t.wasmUASTCToASTC),t.wasmUASTCToBC7&&(e.LiteTranscoder_UASTC_BC7.WasmModuleURL=t.wasmUASTCToBC7),t.wasmUASTCToRGBA_UNORM&&(e.LiteTranscoder_UASTC_RGBA_UNORM.WasmModuleURL=t.wasmUASTCToRGBA_UNORM),t.wasmUASTCToRGBA_SRGB&&(e.LiteTranscoder_UASTC_RGBA_SRGB.WasmModuleURL=t.wasmUASTCToRGBA_SRGB),t.wasmUASTCToR8_UNORM&&(e.LiteTranscoder_UASTC_R8_UNORM.WasmModuleURL=t.wasmUASTCToR8_UNORM),t.wasmUASTCToRG8_UNORM&&(e.LiteTranscoder_UASTC_RG8_UNORM.WasmModuleURL=t.wasmUASTCToRG8_UNORM),t.jsMSCTranscoder&&(e.MSCTranscoder.JSModuleURL=t.jsMSCTranscoder),t.wasmMSCTranscoder&&(e.MSCTranscoder.WasmModuleURL=t.wasmMSCTranscoder),t.wasmZSTDDecoder&&(e.ZSTDDecoder.WasmModuleURL=t.wasmZSTDDecoder)),s&&(s.wasmUASTCToASTC&&(e.LiteTranscoder_UASTC_ASTC.WasmBinary=s.wasmUASTCToASTC),s.wasmUASTCToBC7&&(e.LiteTranscoder_UASTC_BC7.WasmBinary=s.wasmUASTCToBC7),s.wasmUASTCToRGBA_UNORM&&(e.LiteTranscoder_UASTC_RGBA_UNORM.WasmBinary=s.wasmUASTCToRGBA_UNORM),s.wasmUASTCToRGBA_SRGB&&(e.LiteTranscoder_UASTC_RGBA_SRGB.WasmBinary=s.wasmUASTCToRGBA_SRGB),s.wasmUASTCToR8_UNORM&&(e.LiteTranscoder_UASTC_R8_UNORM.WasmBinary=s.wasmUASTCToR8_UNORM),s.wasmUASTCToRG8_UNORM&&(e.LiteTranscoder_UASTC_RG8_UNORM.WasmBinary=s.wasmUASTCToRG8_UNORM),s.jsMSCTranscoder&&(e.MSCTranscoder.JSModule=s.jsMSCTranscoder),s.wasmMSCTranscoder&&(e.MSCTranscoder.WasmBinary=s.wasmMSCTranscoder),s.wasmZSTDDecoder&&(e.ZSTDDecoder.WasmBinary=s.wasmZSTDDecoder))}function M(t){typeof t>"u"&&typeof KTX2DECODER<"u"&&(t=KTX2DECODER);let s;onmessage=e=>{if(e.data)switch(e.data.action){case"init":{const i=e.data.urls;i&&(i.jsDecoderModule&&typeof t>"u"&&(importScripts(i.jsDecoderModule),t=KTX2DECODER),T(i)),e.data.wasmBinaries&&T(void 0,{...e.data.wasmBinaries,jsDecoderModule:t}),s=new t.KTX2Decoder,postMessage({action:"init"});break}case"setDefaultDecoderOptions":{t.KTX2Decoder.DefaultDecoderOptions=e.data.options;break}case"decode":s.decode(e.data.data,e.data.caps,e.data.options).then(i=>{const o=[];for(let a=0;a<i.mipmaps.length;++a){const r=i.mipmaps[a];r&&r.data&&o.push(r.data.buffer)}postMessage({action:"decoded",success:!0,decodedData:i},o)}).catch(i=>{postMessage({action:"decoded",success:!1,msg:i})});break}}}function y(t,s,e){return new Promise((i,o)=>{const a=f=>{t.removeEventListener("error",a),t.removeEventListener("message",r),o(f)},r=f=>{f.data.action==="init"&&(t.removeEventListener("error",a),t.removeEventListener("message",r),i(t))};t.addEventListener("error",a),t.addEventListener("message",r),t.postMessage({action:"init",urls:e,wasmBinaries:s})})}class E{constructor(){this._isDirty=!0,this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC=!0,this._ktx2DecoderOptions={}}get isDirty(){return this._isDirty}get useRGBAIfASTCBC7NotAvailableWhenUASTC(){return this._useRGBAIfASTCBC7NotAvailableWhenUASTC}set useRGBAIfASTCBC7NotAvailableWhenUASTC(s){this._useRGBAIfASTCBC7NotAvailableWhenUASTC!==s&&(this._useRGBAIfASTCBC7NotAvailableWhenUASTC=s,this._isDirty=!0)}get useRGBAIfOnlyBC1BC3AvailableWhenUASTC(){return this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC}set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(s){this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC!==s&&(this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC=s,this._isDirty=!0)}get forceRGBA(){return this._forceRGBA}set forceRGBA(s){this._forceRGBA!==s&&(this._forceRGBA=s,this._isDirty=!0)}get forceR8(){return this._forceR8}set forceR8(s){this._forceR8!==s&&(this._forceR8=s,this._isDirty=!0)}get forceRG8(){return this._forceRG8}set forceRG8(s){this._forceRG8!==s&&(this._forceRG8=s,this._isDirty=!0)}get bypassTranscoders(){return this._bypassTranscoders}set bypassTranscoders(s){this._bypassTranscoders!==s&&(this._bypassTranscoders=s,this._isDirty=!0)}_getKTX2DecoderOptions(){if(!this._isDirty)return this._ktx2DecoderOptions;this._isDirty=!1;const s={useRGBAIfASTCBC7NotAvailableWhenUASTC:this._useRGBAIfASTCBC7NotAvailableWhenUASTC,forceRGBA:this._forceRGBA,forceR8:this._forceR8,forceRG8:this._forceRG8,bypassTranscoders:this._bypassTranscoders};return this.useRGBAIfOnlyBC1BC3AvailableWhenUASTC&&(s.transcodeFormatDecisionTree={UASTC:{transcodeFormat:[S.BC1_RGB,S.BC3_RGBA],yes:{transcodeFormat:S.RGBA32,engineFormat:32856,roundToMultiple4:!1}}}),this._ktx2DecoderOptions=s,s}}class c{static GetDefaultNumWorkers(){return typeof navigator!="object"||!navigator.hardwareConcurrency?1:Math.min(Math.floor(navigator.hardwareConcurrency*.5),4)}static _Initialize(s){if(c._WorkerPoolPromise||c._DecoderModulePromise)return;const e={jsDecoderModule:l.GetBabylonScriptURL(this.URLConfig.jsDecoderModule,!0),wasmUASTCToASTC:l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToASTC,!0),wasmUASTCToBC7:l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToBC7,!0),wasmUASTCToRGBA_UNORM:l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_UNORM,!0),wasmUASTCToRGBA_SRGB:l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRGBA_SRGB,!0),wasmUASTCToR8_UNORM:l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToR8_UNORM,!0),wasmUASTCToRG8_UNORM:l.GetBabylonScriptURL(this.URLConfig.wasmUASTCToRG8_UNORM,!0),jsMSCTranscoder:l.GetBabylonScriptURL(this.URLConfig.jsMSCTranscoder,!0),wasmMSCTranscoder:l.GetBabylonScriptURL(this.URLConfig.wasmMSCTranscoder,!0),wasmZSTDDecoder:l.GetBabylonScriptURL(this.URLConfig.wasmZSTDDecoder,!0)};s&&typeof Worker=="function"&&typeof URL<"u"?c._WorkerPoolPromise=new Promise(i=>{const o="".concat(T,"(").concat(M,")()"),a=URL.createObjectURL(new Blob([o],{type:"application/javascript"}));i(new A(s,()=>y(new Worker(a),void 0,e)))}):typeof c._KTX2DecoderModule>"u"?c._DecoderModulePromise=l.LoadBabylonScriptAsync(e.jsDecoderModule).then(()=>(c._KTX2DecoderModule=KTX2DECODER,c._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread=!1,c._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread=!0,T(e,c._KTX2DecoderModule),new c._KTX2DecoderModule.KTX2Decoder)):(c._KTX2DecoderModule.MSCTranscoder.UseFromWorkerThread=!1,c._KTX2DecoderModule.WASMMemoryManager.LoadBinariesFromCurrentThread=!0,c._DecoderModulePromise=Promise.resolve(new c._KTX2DecoderModule.KTX2Decoder))}constructor(s,e=c.DefaultNumWorkers){var o,a;this._engine=s;const i=typeof e=="object"&&e.workerPool||c.WorkerPool;if(i)c._WorkerPoolPromise=Promise.resolve(i);else{typeof e=="object"?c._KTX2DecoderModule=(o=e==null?void 0:e.binariesAndModulesContainer)==null?void 0:o.jsDecoderModule:typeof KTX2DECODER<"u"&&(c._KTX2DecoderModule=KTX2DECODER);const r=typeof e=="number"?e:(a=e.numWorkers)!=null?a:c.DefaultNumWorkers;c._Initialize(r)}}_uploadAsync(s,e,i){const o=this._engine.getCaps(),a={astc:!!o.astc,bptc:!!o.bptc,s3tc:!!o.s3tc,pvrtc:!!o.pvrtc,etc2:!!o.etc2,etc1:!!o.etc1};if(c._WorkerPoolPromise)return c._WorkerPoolPromise.then(r=>new Promise((f,R)=>{r.push((d,p)=>{const h=m=>{d.removeEventListener("error",h),d.removeEventListener("message",C),R(m),p()},C=m=>{if(m.data.action==="decoded"){if(d.removeEventListener("error",h),d.removeEventListener("message",C),!m.data.success)R({message:m.data.msg});else try{this._createTexture(m.data.decodedData,e,i),f()}catch(U){R({message:U})}p()}};d.addEventListener("error",h),d.addEventListener("message",C),d.postMessage({action:"setDefaultDecoderOptions",options:c.DefaultDecoderOptions._getKTX2DecoderOptions()});const B=new Uint8Array(s.byteLength);B.set(new Uint8Array(s.buffer,s.byteOffset,s.byteLength)),d.postMessage({action:"decode",data:B,caps:a,options:i},[B.buffer])})}));if(c._DecoderModulePromise)return c._DecoderModulePromise.then(r=>(c.DefaultDecoderOptions.isDirty&&(c._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions=c.DefaultDecoderOptions._getKTX2DecoderOptions()),new Promise((f,R)=>{r.decode(s,o).then(d=>{this._createTexture(d,e),f()}).catch(d=>{R({message:d})})})));throw new Error("KTX2 decoder module is not available")}_createTexture(s,e,i){this._engine._bindTextureDirectly(3553,e),i&&(i.transcodedFormat=s.transcodedFormat,i.isInGammaSpace=s.isInGammaSpace,i.hasAlpha=s.hasAlpha,i.transcoderName=s.transcoderName);let a=!0;switch(s.transcodedFormat){case 32856:e.type=0,e.format=5;break;case 33321:e.type=0,e.format=6;break;case 33323:e.type=0,e.format=7;break;default:e.format=s.transcodedFormat,a=!1;break}if(e._gammaSpace=s.isInGammaSpace,e.generateMipMaps=s.mipmaps.length>1,s.errors)throw new Error("KTX2 container - could not transcode the data. "+s.errors);for(let r=0;r<s.mipmaps.length;++r){const f=s.mipmaps[r];if(!f||!f.data)throw new Error("KTX2 container - could not transcode one of the image");a?(e.width=f.width,e.height=f.height,this._engine._uploadDataToTextureDirectly(e,f.data,0,r,void 0,!0)):this._engine._uploadCompressedDataToTextureDirectly(e,s.transcodedFormat,f.width,f.height,f.data,0,r)}e._extension=".ktx2",e.width=s.mipmaps[0].width,e.height=s.mipmaps[0].height,e.isReady=!0,this._engine._bindTextureDirectly(3553,null)}static IsValid(s){if(s.byteLength>=12){const e=new Uint8Array(s.buffer,s.byteOffset,12);if(e[0]===171&&e[1]===75&&e[2]===84&&e[3]===88&&e[4]===32&&e[5]===50&&e[6]===48&&e[7]===187&&e[8]===13&&e[9]===10&&e[10]===26&&e[11]===10)return!0}return!1}}c.URLConfig={jsDecoderModule:"https://cdn.babylonjs.com/babylon.ktx2Decoder.js",wasmUASTCToASTC:null,wasmUASTCToBC7:null,wasmUASTCToRGBA_UNORM:null,wasmUASTCToRGBA_SRGB:null,wasmUASTCToR8_UNORM:null,wasmUASTCToRG8_UNORM:null,jsMSCTranscoder:null,wasmMSCTranscoder:null,wasmZSTDDecoder:null};c.DefaultNumWorkers=c.GetDefaultNumWorkers();c.DefaultDecoderOptions=new E;function w(t){switch(t){case 35916:return 33776;case 35918:return 33778;case 35919:return 33779;case 37493:return 37492;case 37497:return 37496;case 37495:return 37494;case 37840:return 37808;case 36493:return 36492}return null}class W{constructor(){this.supportCascades=!1}loadCubeData(s,e,i,o){if(Array.isArray(s))return;e._invertVScale=!e.invertY;const a=e.getEngine(),r=new _(s,6),f=r.numberOfMipmapLevels>1&&e.generateMipMaps;a._unpackFlipY(!0),r.uploadLevels(e,e.generateMipMaps),e.width=r.pixelWidth,e.height=r.pixelHeight,a._setCubeMapTextureParams(e,f,r.numberOfMipmapLevels-1),e.isReady=!0,e.onLoadedObservable.notifyObservers(e),e.onLoadedObservable.clear(),o&&o()}loadData(s,e,i,o){if(_.IsValid(s)){e._invertVScale=!e.invertY;const a=new _(s,1),r=w(a.glInternalFormat);r?(e.format=r,e._useSRGBBuffer=e.getEngine()._getUseSRGBBuffer(!0,e.generateMipMaps),e._gammaSpace=!0):e.format=a.glInternalFormat,i(a.pixelWidth,a.pixelHeight,e.generateMipMaps,!0,()=>{a.uploadLevels(e,e.generateMipMaps)},a.isInvalid)}else c.IsValid(s)?new c(e.getEngine())._uploadAsync(s,e,o).then(()=>{i(e.width,e.height,e.generateMipMaps,!0,()=>{},!1)},r=>{n.Warn("Failed to load KTX2 texture data: ".concat(r.message)),i(0,0,!1,!1,()=>{},!0)}):(n.Error("texture missing KTX identifier"),i(0,0,!1,!1,()=>{},!0))}}export{W as _KTXTextureLoader};
