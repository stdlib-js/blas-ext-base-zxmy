"use strict";var c=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(s){throw (u=0, s)}};};var p=c(function(J,d){
var l=require('@stdlib/strided-base-reinterpret-complex128/dist'),o=require('@stdlib/complex-float64-base-mul/dist').assign,f=5;function h(v,u,s,x,n,j,b){var i,e,a,r,m,y,q,t;if(v<=0)return n;if(i=l(u,0),e=l(n,0),a=x*2,r=b*2,m=s*2,y=j*2,s===1&&j===1){if(q=v%f,q>0)for(t=0;t<q;t++)o(i[a],i[a+1],e[r],e[r+1],e,1,r),a+=m,r+=y;if(v<f)return n;for(t=q;t<v;t+=f)o(i[a],i[a+1],e[r],e[r+1],e,1,r),o(i[a+2],i[a+3],e[r+2],e[r+3],e,1,r+2),o(i[a+4],i[a+5],e[r+4],e[r+5],e,1,r+4),o(i[a+6],i[a+7],e[r+6],e[r+7],e,1,r+6),o(i[a+8],i[a+9],e[r+8],e[r+9],e,1,r+8),a+=f*2,r+=f*2;return n}for(t=0;t<v;t++)o(i[a],i[a+1],e[r],e[r+1],e,1,r),a+=m,r+=y;return n}d.exports=h
});var _=c(function(K,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),k=p();function A(v,u,s,x,n){return k(v,u,s,w(v,s),x,n,w(v,n))}R.exports=A
});var M=c(function(L,E){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=_(),C=p();B(g,"ndarray",C);E.exports=g
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=M(),z,O=F(D(__dirname,"./native.js"));G(O)?z=H:z=O;module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
