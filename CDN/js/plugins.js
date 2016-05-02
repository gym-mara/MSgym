
/*==========================================================================
                              NAMES PLUGINS
=============================================================================*/

    /**
     * Coment Coment Coment Coment Coment Coment Coment 
     * Coment Coment Coment Coment Coment Coment Coment. 
     *
     * @package    Css
     * @subpackage  Libraries
     * @category  Libraries
     * @author    Xr8
     * @link    http://url.com
     */ 

     console.log('Begin: PLUGINS');     

          

     //Local or INTERNET
        var ZONAAPI  = "LOCAL"
        var ZONAAPP  = "LOCAL"
        var ZONACDN  = "LOCAL"            
        var ZONABASE = "//localhost/MaraSport/"  


            //API URL
            if (ZONAAPI == "LOCAL"){
                api_url      = ZONABASE + "API/index.php/";
                }else{}

            //API URL
            if (ZONAAPP == "LOCAL"){
                app_url          = ZONABASE + "APP/index.php/";  
                }else{}   

            //API URL
            if (ZONACDN == "LOCAL"){
                cdn_url          = ZONABASE + "CDN/";  
                }else{}   
                        
                        
            
            camSwf= cdn_url + "js/";

          console.log(' Load: Begin Bootstrap: modal.js v3.3.5'); 

            /* ========================================================================
            * Bootstrap: modal.js v3.3.5
            * http://getbootstrap.com/javascript/#modals
            * ========================================================================
            * Copyright 2011-2015 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */

            +function ($) {
                  'use strict';

                  // MODAL CLASS DEFINITION
                  // ======================

                  var Modal = function (element, options) {
                  this.options             = options
                  this.$body               = $(document.body)
                  this.$element            = $(element)
                  this.$dialog             = this.$element.find('.modal-dialog')
                  this.$backdrop           = null
                  this.isShown             = null
                  this.originalBodyPad     = null
                  this.scrollbarWidth      = 0
                  this.ignoreBackdropClick = false

                  if (this.options.remote) {
                  this.$element
                  .find('.modal-content')
                  .load(this.options.remote, $.proxy(function () {
                  this.$element.trigger('loaded.bs.modal')
                  }, this))
                  }
                  }

                  Modal.VERSION  = '3.3.5'

                  Modal.TRANSITION_DURATION = 300
                  Modal.BACKDROP_TRANSITION_DURATION = 150

                  Modal.DEFAULTS = {
                  backdrop: true,
                  keyboard: true,
                  show: true
                  }

                  Modal.prototype.toggle = function (_relatedTarget) {
                  return this.isShown ? this.hide() : this.show(_relatedTarget)
                  }

                  Modal.prototype.show = function (_relatedTarget) {
                  var that = this
                  var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

                  this.$element.trigger(e)

                  if (this.isShown || e.isDefaultPrevented()) return

                  this.isShown = true

                  this.checkScrollbar()
                  this.setScrollbar()
                  this.$body.addClass('modal-open')

                  this.escape()
                  this.resize()

                  this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

                  this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                  that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                  if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
                  })
                  })

                  this.backdrop(function () {
                  var transition = $.support.transition && that.$element.hasClass('fade')

                  if (!that.$element.parent().length) {
                  that.$element.appendTo(that.$body) // don't move modals dom position
                  }

                  that.$element
                  .show()
                  .scrollTop(0)

                  that.adjustDialog()

                  if (transition) {
                  that.$element[0].offsetWidth // force reflow
                  }

                  that.$element.addClass('in')

                  that.enforceFocus()

                  var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

                  transition ?
                  that.$dialog // wait for modal to slide in
                  .one('bsTransitionEnd', function () {
                  that.$element.trigger('focus').trigger(e)
                  })
                  .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                  that.$element.trigger('focus').trigger(e)
                  })
                  }

                  Modal.prototype.hide = function (e) {
                  if (e) e.preventDefault()

                  e = $.Event('hide.bs.modal')

                  this.$element.trigger(e)

                  if (!this.isShown || e.isDefaultPrevented()) return

                  this.isShown = false

                  this.escape()
                  this.resize()

                  $(document).off('focusin.bs.modal')

                  this.$element
                  .removeClass('in')
                  .off('click.dismiss.bs.modal')
                  .off('mouseup.dismiss.bs.modal')

                  this.$dialog.off('mousedown.dismiss.bs.modal')

                  $.support.transition && this.$element.hasClass('fade') ?
                  this.$element
                  .one('bsTransitionEnd', $.proxy(this.hideModal, this))
                  .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                  this.hideModal()
                  }

                  Modal.prototype.enforceFocus = function () {
                  $(document)
                  .off('focusin.bs.modal') // guard against infinite focus loop
                  .on('focusin.bs.modal', $.proxy(function (e) {
                  if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                  this.$element.trigger('focus')
                  }
                  }, this))
                  }

                  Modal.prototype.escape = function () {
                  if (this.isShown && this.options.keyboard) {
                  this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                  e.which == 27 && this.hide()
                  }, this))
                  } else if (!this.isShown) {
                  this.$element.off('keydown.dismiss.bs.modal')
                  }
                  }

                  Modal.prototype.resize = function () {
                  if (this.isShown) {
                  $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
                  } else {
                  $(window).off('resize.bs.modal')
                  }
                  }

                  Modal.prototype.hideModal = function () {
                  var that = this
                  this.$element.hide()
                  this.backdrop(function () {
                  that.$body.removeClass('modal-open')
                  that.resetAdjustments()
                  that.resetScrollbar()
                  that.$element.trigger('hidden.bs.modal')
                  })
                  }

                  Modal.prototype.removeBackdrop = function () {
                  this.$backdrop && this.$backdrop.remove()
                  this.$backdrop = null
                  }

                  Modal.prototype.backdrop = function (callback) {
                  var that = this
                  var animate = this.$element.hasClass('fade') ? 'fade' : ''

                  if (this.isShown && this.options.backdrop) {
                  var doAnimate = $.support.transition && animate

                  this.$backdrop = $(document.createElement('div'))
                  .addClass('modal-backdrop ' + animate)
                  .appendTo(this.$body)

                  this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                  if (this.ignoreBackdropClick) {
                  this.ignoreBackdropClick = false
                  return
                  }
                  if (e.target !== e.currentTarget) return
                  this.options.backdrop == 'static'
                  ? this.$element[0].focus()
                  : this.hide()
                  }, this))

                  if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                  this.$backdrop.addClass('in')

                  if (!callback) return

                  doAnimate ?
                  this.$backdrop
                  .one('bsTransitionEnd', callback)
                  .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                  callback()

                  } else if (!this.isShown && this.$backdrop) {
                  this.$backdrop.removeClass('in')

                  var callbackRemove = function () {
                  that.removeBackdrop()
                  callback && callback()
                  }
                  $.support.transition && this.$element.hasClass('fade') ?
                  this.$backdrop
                  .one('bsTransitionEnd', callbackRemove)
                  .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                  callbackRemove()

                  } else if (callback) {
                  callback()
                  }
                  }

                  // these following methods are used to handle overflowing modals

                  Modal.prototype.handleUpdate = function () {
                  this.adjustDialog()
                  }

                  Modal.prototype.adjustDialog = function () {
                  var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

                  this.$element.css({
                  paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                  paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
                  })
                  }

                  Modal.prototype.resetAdjustments = function () {
                  this.$element.css({
                  paddingLeft: '',
                  paddingRight: ''
                  })
                  }

                  Modal.prototype.checkScrollbar = function () {
                  var fullWindowWidth = window.innerWidth
                  if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                  var documentElementRect = document.documentElement.getBoundingClientRect()
                  fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
                  }
                  this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
                  this.scrollbarWidth = this.measureScrollbar()
                  }

                  Modal.prototype.setScrollbar = function () {
                  var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
                  this.originalBodyPad = document.body.style.paddingRight || ''
                  if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
                  }

                  Modal.prototype.resetScrollbar = function () {
                  this.$body.css('padding-right', this.originalBodyPad)
                  }

                  Modal.prototype.measureScrollbar = function () { // thx walsh
                  var scrollDiv = document.createElement('div')
                  scrollDiv.className = 'modal-scrollbar-measure'
                  this.$body.append(scrollDiv)
                  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
                  this.$body[0].removeChild(scrollDiv)
                  return scrollbarWidth
                  }


                  // MODAL PLUGIN DEFINITION
                  // =======================

                  function Plugin(option, _relatedTarget) {
                  return this.each(function () {
                  var $this   = $(this)
                  var data    = $this.data('bs.modal')
                  var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

                  if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
                  if (typeof option == 'string') data[option](_relatedTarget)
                  else if (options.show) data.show(_relatedTarget)
                  })
                  }

                  var old = $.fn.modal

                  $.fn.modal             = Plugin
                  $.fn.modal.Constructor = Modal


                  // MODAL NO CONFLICT
                  // =================

                  $.fn.modal.noConflict = function () {
                  $.fn.modal = old
                  return this
                  }


                  // MODAL DATA-API
                  // ==============

                  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
                  var $this   = $(this)
                  var href    = $this.attr('href')
                  var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
                  var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

                  if ($this.is('a')) e.preventDefault()

                  $target.one('show.bs.modal', function (showEvent) {
                  if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
                  $target.one('hidden.bs.modal', function () {
                  $this.is(':visible') && $this.trigger('focus')
                  })
                  })
                  Plugin.call($target, option, this)
                  })
                  }(jQuery);

          console.log(' Load: End Bootstrap: modal.js v3.3.5');  
 
/*    SWFObject v2.2 <http://code.google.com/p/swfobject/> 
      is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
            //   _____           _       _   _____
            //  /  ___|         (_)     | | /  __ \
            //  \ `--.  ___ _ __ _ _ __ | |_| /  \/
            //   `--. \/ __| '__| | '_ \| __| |    / _` | '_ ` _ \
            //  /\__/ / (__| |  | | |_) | |_| \__/\ (_| | | | | | |
            //  \____/ \___|_|  |_| .__/ \__|\____/\__,_|_| |_| |_|
            //                  | |
            //  Version 1.6.0   |_| (c) Tele-Line Videotex Services

            // Use jscompress.com to compress this file

                  ;(function($) {
                        $.fn.scriptcam=function(options) {
                              // merge passed options with default values
                              var opts=$.extend({}, $.fn.scriptcam.defaults, options);
                              // off we go
                              return this.each(function() {
                                    // add flash to div
                                    opts.id=this.id; // add id of plugin to the options structure
                                    data=opts; // pass options to jquery internal data field to make them available to the outside world
                                    data.path=camSwf; // convert URI back to normal string
                                    $('#'+opts.id).html(opts.noFlashFound); // inject no flash found message
                                    // forward incoming flash movie calls to outgoing functions
                                    $.scriptcam.SC_promptWillShow=data.promptWillShow;
                                    $.scriptcam.SC_fileReady=data.fileReady;
                                    $.scriptcam.SC_fileConversionStarted=data.fileConversionStarted;
                                    $.scriptcam.SC_onMotion=data.onMotion;
                                    $.scriptcam.SC_onError=data.onError;
                                    $.scriptcam.SC_onHandLeft=data.onHandLeft;
                                    $.scriptcam.SC_onHandRight=data.onHandRight;
                                    $.scriptcam.SC_onWebcamReady=data.onWebcamReady;
                                    $.scriptcam.SC_connected=data.connected;
                                    $.scriptcam.SC_onPictureAsBase64=data.onPictureAsBase64;
                                    $.scriptcam.SC_disconnected=data.disconnected;
                                    $.scriptcam.SC_setVolume=data.setVolume;
                                    $.scriptcam.SC_timeLeft=data.timeLeft;
                                    $.scriptcam.SC_userLeft=data.userLeft;
                                    $.scriptcam.SC_userJoined=data.userJoined;
                                    $.scriptcam.SC_addChatText=function(value) {
                                          value = value.replace(":{", '<img src="'+data.path+'angry.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":-{", '<img src="'+data.path+'angry.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":)", '<img src="'+data.path+'smile.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":-)", '<img src="'+data.path+'smile.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":D", '<img src="'+data.path+'biggrin.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":-D", '<img src="'+data.path+'biggrin.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":O", '<img src="'+data.path+'ohmy.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":-O", '<img src="'+data.path+'ohmy.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":(", '<img src="'+data.path+'sad.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":-(", '<img src="'+data.path+'sad.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":p", '<img src="'+data.path+'tongue.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(":-p", '<img src="'+data.path+'tongue.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(";)", '<img src="'+data.path+'wink.gif" width="16" height="16" class="smiley"/>');
                                          value = value.replace(";-)", '<img src="'+data.path+'wink.gif" width="16" height="16" class="smiley"/>');
                                          $('#'+data.chatWindow).append(value+'<br/>');
                                          $('#'+data.chatWindow).animate({ scrollTop: $('#'+data.chatWindow).prop("scrollHeight") - $('#'+data.chatWindow).height() }, 100);
                                    }
                                    if (opts.canvasHeight && opts.canvasHeight) {
                                          var newWidth=opts.canvasWidth;
                                          var newHeight=opts.canvasHeight;
                                    }
                                    else {
                                          // no canvas dimensions given, make our own horizontal layout
                                          var newWidth=opts.width*opts.zoom;
                                          var newHeight=opts.height*opts.zoom;
                                          if (opts.chatRoom) {
                                                newWidth=(opts.width*opts.zoom)+(opts.width*opts.zoomChat)+5; // make room for two horizontal video windows with a margin of 5
                                                opts.posX=(opts.width*opts.zoom)+5;
                                                newHeight=opts.height*Math.max(opts.zoom,opts.zoomChat);
                                          };
                                    }
                                    // make new dimensions are not below minimum flash size
                                    if (newWidth < 215) {
                                          newWidth=215;
                                    }
                                    if (newHeight < 138) {
                                          newHeight=138;
                                    }
                                    if (opts.rotate!=0 || opts.skewX!=0 || opts.skewY!=0 || opts.flip!=0 || opts.zoom!=1 || opts.zoomChat!=1) {
                                          // no GPU acceleration
                                          var params = {
                                                menu: 'false',
                                                wmode: 'window',
                                                allowScriptAccess: 'always',
                                                allowFullScreen: 'true'
                                          };
                                    }
                                    else {
                                          // GPU acceleration when no filter is used
                                          var params = {
                                                menu: 'false',
                                                wmode: 'direct',
                                                allowScriptAccess: 'always',
                                                allowFullScreen: 'true'
                                          };
                                    };
                                    // Escape all values contained in the flashVars (IE needs this)
                                    for (var key in opts) {
                                          opts[key] = encodeURIComponent(opts[key]);
                                    };
                                    if (fileExists(decodeURIComponent(data.path)+'scriptcam.swf')) {
                                          swfobject.embedSWF(decodeURIComponent(data.path)+'scriptcam.swf', opts.id, newWidth, newHeight, '11.6', false, opts, params);
                                    }
                                    else {
                                          alert(decodeURIComponent(data.path)+'scriptcam.swf not found, please check the path parameter');
                                    }
                              });
                        };

                        function fileExists(url) {
                              var http = new XMLHttpRequest();
                              http.open('HEAD', url, false);
                              http.send();
                              return http.status==200;
                        }
                        
                        $.scriptcam={};
                        
                        // outgoing functions (calling the flash movie)
                        
                        $.scriptcam.getFrameAsBase64=function() {
                          return $('#'+data.id).get(0).SC_getFrameAsBase64();
                        }

                        $.scriptcam.version=function() {
                              return $('#'+data.id).get(0).SC_version();
                        }

                        $.scriptcam.hardwareacceleration=function() {
                              return $('#'+data.id).get(0).SC_hardwareacceleration();
                        }

                        $.scriptcam.getMotionParameters=function() {
                              $('#'+data.id).get(0).SC_getMotionParameters();
                        }

                        $.scriptcam.getBarCode=function() {
                              return $('#'+data.id).get(0).SC_getBarCode();
                        }

                        $.scriptcam.startRecording=function() {
                              $('#'+data.id).get(0).SC_startRecording();
                        }

                        $.scriptcam.pauseRecording=function() {
                              $('#'+data.id).get(0).SC_pauseRecording();
                        }

                        $.scriptcam.resumeRecording=function() {
                              $('#'+data.id).get(0).SC_resumeRecording();
                        }
                        
                        $.scriptcam.closeCamera=function() {
                              $('#'+data.id).get(0).SC_closeCamera();
                        }
                        
                        $.scriptcam.changeVolume=function(value) {
                              $('#'+data.id).get(0).SC_changeVolume(value);
                        }

                        $.scriptcam.sendMessage=function(value) {
                              $('#'+data.id).get(0).SC_sendMessage(value);
                        }

                        $.scriptcam.playMP3=function(value) {
                              $('#'+data.id).get(0).SC_playMP3(value);
                        }

                        $.scriptcam.changeCamera=function(value) {
                              $('#'+data.id).get(0).SC_changeCamera(value);
                        }

                        $.scriptcam.changeMicrophone=function(value) {
                              $('#'+data.id).get(0).SC_changeMicrophone(value);
                        }
                        
                        // set javascript default values (flash default values are managed in the swf file)
                        $.fn.scriptcam.defaults={
                              width:320,
                              height:240,
                              chatWindow:'chatWindow',
                              path:'',
                              zoom:1,
                              zoomChat:1,
                              rotate:0,
                              skewX:0,
                              skewY:0,
                              flip:0,
                              noFlashFound:'<p>You need <a href="http://www.adobe.com/go/getflashplayer">Adobe Flash Player 11.7</a> to use this software.<br/>Please click on the link to download the installer.</p>'
                        };
                        })(jQuery);

            // incoming functions (calls coming from flash) - must be public and forward calls to the scriptcam plugin

                  function SC_onError(errorId,errorMsg) {
                        $.scriptcam.SC_onError(errorId,errorMsg);
                        }
                  function SC_fileReady(fileName) {
                        $.scriptcam.SC_fileReady(fileName);
                        }
                  function SC_fileConversionStarted(fileName) {
                        $.scriptcam.SC_fileConversionStarted(fileName);
                        }
                  function SC_onMotion(decodedString) {
                        $.scriptcam.SC_onMotion(decodedString);
                        }
                  function SC_promptWillShow() {
                        $.scriptcam.SC_promptWillShow();
                        }
                  function SC_onHandLeft() {
                        $.scriptcam.SC_onHandLeft();
                        }
                  function SC_onHandRight() {
                        $.scriptcam.SC_onHandRight();
                        }
                  function SC_onWebcamReady(cameraNames,camera,microphoneNames,microphone) {
                        $.scriptcam.SC_onWebcamReady(cameraNames,camera,microphoneNames,microphone);
                        }
                  function SC_onPictureAsBase64(value) {
                        $.scriptcam.SC_onPictureAsBase64(value);
                        }
                  function SC_connected() {
                        $.scriptcam.SC_connected();
                        }
                  function SC_disconnected() {
                        $.scriptcam.SC_disconnected();
                        }
                  function SC_setVolume(value) {
                        $.scriptcam.SC_setVolume(value);
                        }
                  function SC_onMotion(motion,brightness,color,motionx,motiony) {
                        $.scriptcam.SC_onMotion(motion,brightness,color,motionx,motiony);
                        }
                  function SC_timeLeft(value) {
                        $.scriptcam.SC_timeLeft(value);
                        }
                  function SC_addChatText(value) {
                        $.scriptcam.SC_addChatText(value);
                        }
                  function SC_userJoined(value) {
                        $.scriptcam.SC_userJoined(value);
                        }
                  function SC_userLeft(value) {
                        $.scriptcam.SC_userLeft(value);
                        }


            //          D)dddd    A)aaT)ttttttE)eeeeee   N)n   nn O)oooo W)      ww 
            //          D)   dd  A)  aa  T)   E)         N)nn  nnO)    ooW)      ww 
            //          D)    ddA)    aa T)   E)eeeee    N) nn nnO)    ooW)  ww  ww 
            //          D)    ddA)aaaaaa T)   E)         N)  nnnnO)    ooW)  ww  ww 
            //          D)    ddA)    aa T)   E)         N)   nnnO)    ooW)  ww  ww 
            //          D)ddddd A)    aa T)   E)eeeeee   N)    nn O)oooo  W)ww www 

                  Date.prototype.getFromFormat = function(format) {
                      var yyyy = this.getFullYear().toString();
                      format = format.replace(/yyyy/g, yyyy)
                      var mm = (this.getMonth()+1).toString(); 
                      format = format.replace(/mm/g, (mm[1]?mm:"0"+mm[0]));
                      var dd  = this.getDate().toString();
                      format = format.replace(/dd/g, (dd[1]?dd:"0"+dd[0]));
                      var hh = this.getHours().toString();
                      format = format.replace(/hh/g, (hh[1]?hh:"0"+hh[0]));
                      var ii = this.getMinutes().toString();
                      format = format.replace(/ii/g, (ii[1]?ii:"0"+ii[0]));
                      var ss  = this.getSeconds().toString();
                      format = format.replace(/ss/g, (ss[1]?ss:"0"+ss[0]));
                        return format;
                        }



     console.log('End: PLUGINS');          