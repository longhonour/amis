define("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/scssScanner",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=this&&this.__extends||function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function r(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}}(),r=e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/parser/cssScanner"),s="/".charCodeAt(0),n="\n".charCodeAt(0),o="\r".charCodeAt(0),i="\f".charCodeAt(0),c="$".charCodeAt(0),h="#".charCodeAt(0),u="{".charCodeAt(0),l="=".charCodeAt(0),f="!".charCodeAt(0),p="<".charCodeAt(0),d=">".charCodeAt(0),m=".".charCodeAt(0),C=r.TokenType.CustomToken;t.VariableName=C++,t.InterpolationFunction=C++,t.Default=C++,t.EqualsOperator=C++,t.NotEqualsOperator=C++,t.GreaterEqualsOperator=C++,t.SmallerEqualsOperator=C++,t.Ellipsis=C++;var v=function(e){function C(){return null!==e&&e.apply(this,arguments)||this}return a(C,e),C.prototype.scanNext=function(a){if(this.stream.advanceIfChar(c)){var s=["$"];if(this.ident(s))return this.finishToken(a,t.VariableName,s.join(""));this.stream.goBackTo(a)}return this.stream.advanceIfChars([h,u])?this.finishToken(a,t.InterpolationFunction):this.stream.advanceIfChars([l,l])?this.finishToken(a,t.EqualsOperator):this.stream.advanceIfChars([f,l])?this.finishToken(a,t.NotEqualsOperator):this.stream.advanceIfChar(p)?this.stream.advanceIfChar(l)?this.finishToken(a,t.SmallerEqualsOperator):this.finishToken(a,r.TokenType.Delim):this.stream.advanceIfChar(d)?this.stream.advanceIfChar(l)?this.finishToken(a,t.GreaterEqualsOperator):this.finishToken(a,r.TokenType.Delim):this.stream.advanceIfChars([m,m,m])?this.finishToken(a,t.Ellipsis):e.prototype.scanNext.call(this,a)},C.prototype.comment=function(){return e.prototype.comment.call(this)?!0:!this.inURL&&this.stream.advanceIfChars([s,s])?(this.stream.advanceWhileChar(function(e){switch(e){case n:case o:case i:return!1;default:return!0}}),!0):!1},C}(r.Scanner);t.SCSSScanner=v});