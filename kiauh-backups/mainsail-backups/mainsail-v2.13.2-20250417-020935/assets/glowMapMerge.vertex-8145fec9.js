import{S as r}from"./Viewer-8a8ed1d4.js";import"./index-f28d7425.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";import"./codemirror-0a1db0c7.js";const e="glowMapMergeVertexShader",t="attribute position: vec2f;varying vUV: vec2f;\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";r.ShadersStoreWGSL[e]=t;const d={name:e,shader:t};export{d as glowMapMergeVertexShaderWGSL};
