/*
 * Copyright (c) 2016-2018 original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 */

!function(e,r){"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r():r()(e.lunr)}(this,function(){return function(e){if(void 0===e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");e.fr=function(){this.pipeline.reset(),this.pipeline.add(e.fr.trimmer,e.fr.stopWordFilter,e.fr.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(e.fr.stemmer))},e.fr.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",e.fr.trimmer=e.trimmerSupport.generateTrimmer(e.fr.wordCharacters),e.Pipeline.registerFunction(e.fr.trimmer,"trimmer-fr"),e.fr.stemmer=function(){var r=e.stemmerSupport.Among,s=e.stemmerSupport.SnowballProgram,i=new function(){function e(e,r,s){return!(!W.eq_s(1,e)||(W.ket=W.cursor,!W.in_grouping(F,97,251)))&&(W.slice_from(r),W.cursor=s,!0)}function i(e,r,s){return!!W.eq_s(1,e)&&(W.ket=W.cursor,W.slice_from(r),W.cursor=s,!0)}function n(){for(var r,s;;){if(r=W.cursor,W.in_grouping(F,97,251)){if(W.bra=W.cursor,s=W.cursor,e("u","U",r))continue;if(W.cursor=s,e("i","I",r))continue;if(W.cursor=s,i("y","Y",r))continue}if(W.cursor=r,W.bra=r,!e("y","Y",r)){if(W.cursor=r,W.eq_s(1,"q")&&(W.bra=W.cursor,i("u","U",r)))continue;if(W.cursor=r,r>=W.limit)return;W.cursor++}}}function t(){for(;!W.in_grouping(F,97,251);){if(W.cursor>=W.limit)return!0;W.cursor++}for(;!W.out_grouping(F,97,251);){if(W.cursor>=W.limit)return!0;W.cursor++}return!1}function u(){var e=W.cursor;if(q=W.limit,g=q,p=q,W.in_grouping(F,97,251)&&W.in_grouping(F,97,251)&&W.cursor<W.limit)W.cursor++;else if(W.cursor=e,!W.find_among(v,3)){W.cursor=e;do{if(W.cursor>=W.limit){W.cursor=q;break}W.cursor++}while(!W.in_grouping(F,97,251))}q=W.cursor,W.cursor=e,t()||(g=W.cursor,t()||(p=W.cursor))}function o(){for(var e,r;;){if(r=W.cursor,W.bra=r,!(e=W.find_among(h,4)))break;switch(W.ket=W.cursor,e){case 1:W.slice_from("i");break;case 2:W.slice_from("u");break;case 3:W.slice_from("y");break;case 4:if(W.cursor>=W.limit)return;W.cursor++}}}function c(){return q<=W.cursor}function a(){return g<=W.cursor}function l(){return p<=W.cursor}function w(){var e,r;if(W.ket=W.cursor,e=W.find_among_b(C,43)){switch(W.bra=W.cursor,e){case 1:if(!l())return!1;W.slice_del();break;case 2:if(!l())return!1;W.slice_del(),W.ket=W.cursor,W.eq_s_b(2,"ic")&&(W.bra=W.cursor,l()?W.slice_del():W.slice_from("iqU"));break;case 3:if(!l())return!1;W.slice_from("log");break;case 4:if(!l())return!1;W.slice_from("u");break;case 5:if(!l())return!1;W.slice_from("ent");break;case 6:if(!c())return!1;if(W.slice_del(),W.ket=W.cursor,e=W.find_among_b(z,6))switch(W.bra=W.cursor,e){case 1:l()&&(W.slice_del(),W.ket=W.cursor,W.eq_s_b(2,"at")&&(W.bra=W.cursor,l()&&W.slice_del()));break;case 2:l()?W.slice_del():a()&&W.slice_from("eux");break;case 3:l()&&W.slice_del();break;case 4:c()&&W.slice_from("i")}break;case 7:if(!l())return!1;if(W.slice_del(),W.ket=W.cursor,e=W.find_among_b(y,3))switch(W.bra=W.cursor,e){case 1:l()?W.slice_del():W.slice_from("abl");break;case 2:l()?W.slice_del():W.slice_from("iqU");break;case 3:l()&&W.slice_del()}break;case 8:if(!l())return!1;if(W.slice_del(),W.ket=W.cursor,W.eq_s_b(2,"at")&&(W.bra=W.cursor,l()&&(W.slice_del(),W.ket=W.cursor,W.eq_s_b(2,"ic")))){W.bra=W.cursor,l()?W.slice_del():W.slice_from("iqU");break}break;case 9:W.slice_from("eau");break;case 10:if(!a())return!1;W.slice_from("al");break;case 11:if(l())W.slice_del();else{if(!a())return!1;W.slice_from("eux")}break;case 12:if(!a()||!W.out_grouping_b(F,97,251))return!1;W.slice_del();break;case 13:return c()&&W.slice_from("ant"),!1;case 14:return c()&&W.slice_from("ent"),!1;case 15:return r=W.limit-W.cursor,W.in_grouping_b(F,97,251)&&c()&&(W.cursor=W.limit-r,W.slice_del()),!1}return!0}return!1}function f(){var e,r;if(W.cursor<q)return!1;if(r=W.limit_backward,W.limit_backward=q,W.ket=W.cursor,!(e=W.find_among_b(x,35)))return W.limit_backward=r,!1;if(W.bra=W.cursor,1==e){if(!W.out_grouping_b(F,97,251))return W.limit_backward=r,!1;W.slice_del()}return W.limit_backward=r,!0}function m(){var e,r,s;if(W.cursor<q)return!1;if(r=W.limit_backward,W.limit_backward=q,W.ket=W.cursor,!(e=W.find_among_b(I,38)))return W.limit_backward=r,!1;switch(W.bra=W.cursor,e){case 1:if(!l())return W.limit_backward=r,!1;W.slice_del();break;case 2:W.slice_del();break;case 3:W.slice_del(),s=W.limit-W.cursor,W.ket=W.cursor,W.eq_s_b(1,"e")?(W.bra=W.cursor,W.slice_del()):W.cursor=W.limit-s}return W.limit_backward=r,!0}function _(){var e,r,s,i,n=W.limit-W.cursor;if(W.ket=W.cursor,W.eq_s_b(1,"s")?(W.bra=W.cursor,r=W.limit-W.cursor,W.out_grouping_b(S,97,232)?(W.cursor=W.limit-r,W.slice_del()):W.cursor=W.limit-n):W.cursor=W.limit-n,W.cursor>=q){if(s=W.limit_backward,W.limit_backward=q,W.ket=W.cursor,e=W.find_among_b(P,7))switch(W.bra=W.cursor,e){case 1:if(l()){if(i=W.limit-W.cursor,!W.eq_s_b(1,"s")&&(W.cursor=W.limit-i,!W.eq_s_b(1,"t")))break;W.slice_del()}break;case 2:W.slice_from("i");break;case 3:W.slice_del();break;case 4:W.eq_s_b(2,"gu")&&W.slice_del()}W.limit_backward=s}}function b(){var e=W.limit-W.cursor;W.find_among_b(U,5)&&(W.cursor=W.limit-e,W.ket=W.cursor,W.cursor>W.limit_backward&&(W.cursor--,W.bra=W.cursor,W.slice_del()))}function d(){for(var e,r=1;W.out_grouping_b(F,97,251);)r--;if(r<=0){if(W.ket=W.cursor,e=W.limit-W.cursor,!W.eq_s_b(1,"é")&&(W.cursor=W.limit-e,!W.eq_s_b(1,"è")))return;W.bra=W.cursor,W.slice_from("e")}}function k(){if(!w()&&(W.cursor=W.limit,!f()&&(W.cursor=W.limit,!m())))return W.cursor=W.limit,void _();W.cursor=W.limit,W.ket=W.cursor,W.eq_s_b(1,"Y")?(W.bra=W.cursor,W.slice_from("i")):(W.cursor=W.limit,W.eq_s_b(1,"ç")&&(W.bra=W.cursor,W.slice_from("c")))}var p,g,q,v=[new r("col",-1,-1),new r("par",-1,-1),new r("tap",-1,-1)],h=[new r("",-1,4),new r("I",0,1),new r("U",0,2),new r("Y",0,3)],z=[new r("iqU",-1,3),new r("abl",-1,3),new r("Ièr",-1,4),new r("ièr",-1,4),new r("eus",-1,2),new r("iv",-1,1)],y=[new r("ic",-1,2),new r("abil",-1,1),new r("iv",-1,3)],C=[new r("iqUe",-1,1),new r("atrice",-1,2),new r("ance",-1,1),new r("ence",-1,5),new r("logie",-1,3),new r("able",-1,1),new r("isme",-1,1),new r("euse",-1,11),new r("iste",-1,1),new r("ive",-1,8),new r("if",-1,8),new r("usion",-1,4),new r("ation",-1,2),new r("ution",-1,4),new r("ateur",-1,2),new r("iqUes",-1,1),new r("atrices",-1,2),new r("ances",-1,1),new r("ences",-1,5),new r("logies",-1,3),new r("ables",-1,1),new r("ismes",-1,1),new r("euses",-1,11),new r("istes",-1,1),new r("ives",-1,8),new r("ifs",-1,8),new r("usions",-1,4),new r("ations",-1,2),new r("utions",-1,4),new r("ateurs",-1,2),new r("ments",-1,15),new r("ements",30,6),new r("issements",31,12),new r("ités",-1,7),new r("ment",-1,15),new r("ement",34,6),new r("issement",35,12),new r("amment",34,13),new r("emment",34,14),new r("aux",-1,10),new r("eaux",39,9),new r("eux",-1,1),new r("ité",-1,7)],x=[new r("ira",-1,1),new r("ie",-1,1),new r("isse",-1,1),new r("issante",-1,1),new r("i",-1,1),new r("irai",4,1),new r("ir",-1,1),new r("iras",-1,1),new r("ies",-1,1),new r("îmes",-1,1),new r("isses",-1,1),new r("issantes",-1,1),new r("îtes",-1,1),new r("is",-1,1),new r("irais",13,1),new r("issais",13,1),new r("irions",-1,1),new r("issions",-1,1),new r("irons",-1,1),new r("issons",-1,1),new r("issants",-1,1),new r("it",-1,1),new r("irait",21,1),new r("issait",21,1),new r("issant",-1,1),new r("iraIent",-1,1),new r("issaIent",-1,1),new r("irent",-1,1),new r("issent",-1,1),new r("iront",-1,1),new r("ît",-1,1),new r("iriez",-1,1),new r("issiez",-1,1),new r("irez",-1,1),new r("issez",-1,1)],I=[new r("a",-1,3),new r("era",0,2),new r("asse",-1,3),new r("ante",-1,3),new r("ée",-1,2),new r("ai",-1,3),new r("erai",5,2),new r("er",-1,2),new r("as",-1,3),new r("eras",8,2),new r("âmes",-1,3),new r("asses",-1,3),new r("antes",-1,3),new r("âtes",-1,3),new r("ées",-1,2),new r("ais",-1,3),new r("erais",15,2),new r("ions",-1,1),new r("erions",17,2),new r("assions",17,3),new r("erons",-1,2),new r("ants",-1,3),new r("és",-1,2),new r("ait",-1,3),new r("erait",23,2),new r("ant",-1,3),new r("aIent",-1,3),new r("eraIent",26,2),new r("èrent",-1,2),new r("assent",-1,3),new r("eront",-1,2),new r("ât",-1,3),new r("ez",-1,2),new r("iez",32,2),new r("eriez",33,2),new r("assiez",33,3),new r("erez",32,2),new r("é",-1,2)],P=[new r("e",-1,3),new r("Ière",0,2),new r("ière",0,2),new r("ion",-1,1),new r("Ier",-1,2),new r("ier",-1,2),new r("ë",-1,4)],U=[new r("ell",-1,-1),new r("eill",-1,-1),new r("enn",-1,-1),new r("onn",-1,-1),new r("ett",-1,-1)],F=[17,65,16,1,0,0,0,0,0,0,0,0,0,0,0,128,130,103,8,5],S=[1,65,20,0,0,0,0,0,0,0,0,0,0,0,0,0,128],W=new s;this.setCurrent=function(e){W.setCurrent(e)},this.getCurrent=function(){return W.getCurrent()},this.stem=function(){var e=W.cursor;return n(),W.cursor=e,u(),W.limit_backward=e,W.cursor=W.limit,k(),W.cursor=W.limit,b(),W.cursor=W.limit,d(),W.cursor=W.limit_backward,o(),!0}};return function(e){return"function"==typeof e.update?e.update(function(e){return i.setCurrent(e),i.stem(),i.getCurrent()}):(i.setCurrent(e),i.stem(),i.getCurrent())}}(),e.Pipeline.registerFunction(e.fr.stemmer,"stemmer-fr"),e.fr.stopWordFilter=e.generateStopWordFilter("ai aie aient aies ait as au aura aurai auraient aurais aurait auras aurez auriez aurions aurons auront aux avaient avais avait avec avez aviez avions avons ayant ayez ayons c ce ceci celà ces cet cette d dans de des du elle en es est et eu eue eues eurent eus eusse eussent eusses eussiez eussions eut eux eûmes eût eûtes furent fus fusse fussent fusses fussiez fussions fut fûmes fût fûtes ici il ils j je l la le les leur leurs lui m ma mais me mes moi mon même n ne nos notre nous on ont ou par pas pour qu que quel quelle quelles quels qui s sa sans se sera serai seraient serais serait seras serez seriez serions serons seront ses soi soient sois soit sommes son sont soyez soyons suis sur t ta te tes toi ton tu un une vos votre vous y à étaient étais était étant étiez étions été étée étées étés êtes".split(" ")),e.Pipeline.registerFunction(e.fr.stopWordFilter,"stopWordFilter-fr")}});