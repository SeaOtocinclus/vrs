"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308],{11875:function(e,t){t.Z=function(){return null}},18617:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r="iconExternalLink_wgqa",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},10308:function(e,t,n){n.d(t,{Z:function(){return Se}});var a=n(67294),r=n(86010),l=n(5977),o=n(24973),i=n(941),c="skipToContent_OuoZ";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,i.useLocationChange)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.default,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(87462),d=n(63366),f=["width","height","className"];function v(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=e.className,i=(0,d.Z)(e,f);return a.createElement("svg",(0,m.Z)({className:o,viewBox:"0 0 24 24",width:n,height:l,fill:"currentColor"},i),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var h="announcementBar_axC9",g="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",E="announcementBarContent_6uhP";var p=function(){var e=(0,i.useAnnouncementBar)(),t=e.isClosed,n=e.close,l=(0,i.useThemeConfig)().announcementBar;if(!l)return null;var c=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!c||m&&t?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:g}),a.createElement("div",{className:E,dangerouslySetInnerHTML:{__html:c}}),m?a.createElement("button",{type:"button",className:(0,r.default)("clean-btn close",b),onClick:n,"aria-label":(0,o.translate)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(v,{width:14,height:14})):null)},k=n(11875),_=n(72389),w={toggle:"toggle_iYfV"},N=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.default)(w.toggle,w.dark),style:n},t)},C=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.default)(w.toggle,w.light),style:n},t)},Z=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,i=e.onChange,c=(0,a.useState)(l),s=c[0],u=c[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.default)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function y(e){var t=(0,i.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,_.default)();return a.createElement(Z,(0,m.Z)({disabled:!c,icons:{checked:a.createElement(N,{icon:n,style:r}),unchecked:a.createElement(C,{icon:l,style:o})}},e))}var S=n(85350),T=n(77898),D=function(e){var t=(0,l.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],c=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,T.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)o(!0);else{if(c.current)return c.current=!1,void o(!1);r&&0===a&&o(!0);var l=document.documentElement.scrollHeight-u,i=window.innerHeight;r&&a>=r?o(!1):a+i<l&&o(!0)}}),[u,c]),(0,i.useLocationChange)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var I=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},L=n(93783),B=n(80907),A=n(77819),x=n(55537),P=["width","height","className"],M=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,l=void 0===r?30:r,o=e.className,i=(0,d.Z)(e,P);return a.createElement("svg",(0,m.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},i),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},V=["width","height","className"];function R(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=e.className,i=(0,d.Z)(e,V);return a.createElement("svg",(0,m.Z)({className:o,viewBox:"0 0 413.348 413.348",width:n,height:l,fill:"currentColor"},i),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var H="toggle_2i4l",U="navbarHideable_RReh",z="navbarHidden_FBwS",O="navbarSidebarToggle_AVbO",F="navbarSidebarCloseSvg_+9jJ",G="right";function Y(){return(0,i.useThemeConfig)().navbar.items}function j(){var e=(0,i.useThemeConfig)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function K(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var l=Y(),c=j(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,i.useMobileSecondaryMenuRenderer)())?void 0:t({toggleSidebar:r}),o=(0,i.usePrevious)(l),c=(0,a.useState)((function(){return!1})),s=c[0],u=c[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&a.createElement(y,{className:O,checked:c.isDarkTheme,onChange:c.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(R,{width:20,height:20,className:F}))),a.createElement("div",{className:(0,r.default)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(A.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.default,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var W=function(){var e,t=(0,i.useThemeConfig)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,L.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,i.useHistoryPopHandler)((function(){r&&l(!1)}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),c=j(),s=(0,B.useActivePlugin)(),u=D(n),d=u.navbarRef,f=u.isNavbarVisible,v=Y(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:G)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:G)}))}}(v),b=g.leftItems,E=g.rightItems;return a.createElement("nav",{ref:d,className:(0,r.default)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[U]=n,e[z]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(M,null)),a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return a.createElement(A.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(A.Z,(0,m.Z)({},e,{key:t}))})),!c.disabled&&a.createElement(y,{className:H,checked:c.isDarkTheme,onChange:c.toggle}),!h&&a.createElement(k.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(K,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},q=n(36742),Q=n(44996),X=n(13919),J="footerLogoLink_SRtH",$=n(98465),ee=n(18617),te=["to","href","label","prependBaseUrlToHref"];function ne(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,d.Z)(e,te),i=(0,Q.default)(t),c=(0,Q.default)(n,{forcePrependBaseUrl:!0});return a.createElement(q.default,(0,m.Z)({className:"footer__link-item"},n?{href:l?c:n}:{to:i},o),n&&!(0,X.Z)(n)?a.createElement("span",null,r,a.createElement(ee.Z,null)):r)}var ae=function(e){var t=e.sources,n=e.alt;return a.createElement($.Z,{className:"footer__logo",alt:n,sources:t})};var re=function(){var e=(0,i.useThemeConfig)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,s=void 0===c?{}:c,u={light:(0,Q.default)(s.src),dark:(0,Q.default)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.default)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(ne,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(q.default,{href:s.href,className:J},a.createElement(ae,{alt:s.alt,sources:u})):a.createElement(ae,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},le=n(10412),oe=(0,i.createStorageSlot)("theme"),ie="light",ce="dark",se=function(e){return e===ce?ce:ie},ue=function(e){(0,i.createStorageSlot)("theme").set(se(e))},me=function(){var e=(0,i.useThemeConfig)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return le.default.canUseDOM?se(document.documentElement.getAttribute("data-theme")):se(e)}(t)),o=l[0],c=l[1],s=(0,a.useCallback)((function(){c(ie),ue(ie)}),[]),u=(0,a.useCallback)((function(){c(ce),ue(ce)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",se(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=oe.get();null!==e&&c(se(e))}catch(t){console.error(t)}}),[c]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?ce:ie)}))}),[]),{isDarkTheme:o===ce,setLightTheme:s,setDarkTheme:u}},de=n(82924);var fe=function(e){var t=me(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(de.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},ve="docusaurus.tab.",he=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,i.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,i.listStorageKeys)().forEach((function(t){if(t.startsWith(ve)){var n=t.substring(ve.length);e[n]=(0,i.createStorageSlot)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},ge=n(79443);var be=function(e){var t=he(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(ge.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function Ee(e){var t=e.children;return a.createElement(fe,null,a.createElement(i.AnnouncementBarProvider,null,a.createElement(be,null,a.createElement(i.DocsPreferredVersionContextProvider,null,a.createElement(i.MobileSecondaryMenuProvider,null,t)))))}var pe=n(99105),ke=n(52263);function _e(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(pe.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var we=n(41217);function Ne(){var e=(0,ke.default)().i18n,t=e.defaultLocale,n=e.locales,r=(0,i.useAlternatePageUtils)();return a.createElement(pe.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ce(e){var t=e.permalink,n=(0,ke.default)().siteConfig.url,r=function(){var e=(0,ke.default)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,Q.default)(t)}(),o=t?""+n+t:r;return a.createElement(pe.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ze(e){var t=(0,ke.default)(),n=t.siteConfig.favicon,r=t.i18n,l=r.currentLocale,o=r.localeConfigs,c=(0,i.useThemeConfig)(),s=c.metadatas,u=c.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,Q.default)(n),E=(0,i.useTitleFormatter)(d),p=l,k=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(pe.Z,null,a.createElement("html",{lang:p,dir:k}),n&&a.createElement("link",{rel:"shortcut icon",href:b}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(we.default,{image:u}),v&&a.createElement(we.default,{image:v}),a.createElement(we.default,{description:f,keywords:h}),a.createElement(Ce,null),a.createElement(Ne,null),a.createElement(_e,(0,m.Z)({tag:i.DEFAULT_SEARCH_TAG,locale:l},g)),a.createElement(pe.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var ye=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Se=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return ye(),a.createElement(Ee,null,a.createElement(Ze,e),a.createElement(u,null),a.createElement(p,null),a.createElement(W,null),a.createElement("div",{className:(0,r.default)(i.ThemeClassNames.wrapper.main,l,o)},t),!n&&a.createElement(re,null))}},55537:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),o=n(36742),i=n(98465),c=n(44996),s=n(52263),u=n(941),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.default)().siteConfig.title,n=(0,u.useThemeConfig)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,r.Z)(e,m),E=(0,c.default)(v.href||"/"),p={light:(0,c.default)(v.src),dark:(0,c.default)(v.srcDark||v.src)};return l.createElement(o.default,(0,a.Z)({to:E},b,v.target&&{target:v.target}),v.src&&l.createElement(i.Z,{className:h,sources:p,alt:v.alt||d||t}),null!=d&&l.createElement("b",{className:g},d))}},5525:function(e,t,n){n.d(t,{O:function(){return g}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(36742),c=n(44996),s=n(18617),u=n(13919),m=n(77819),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function g(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,g=void 0===h?"":h,b=e.prependBaseUrlToHref,E=(0,r.Z)(e,d),p=(0,c.default)(m),k=(0,c.default)(n),_=(0,c.default)(f,{forcePrependBaseUrl:!0}),w=v&&f&&!(0,u.Z)(f),N="dropdown__link--active"===g;return l.createElement(i.default,(0,a.Z)({},f?{href:b?_:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(g)?"":g,to:p},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(k)}}:null),E),w?l.createElement("span",null,v,l.createElement(s.Z,N&&{width:12,height:12})):v)}function b(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,f),s=l.createElement(g,(0,a.Z)({className:(0,o.default)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,v));return l.createElement("li",{className:"menu__list-item"},l.createElement(g,(0,a.Z)({className:(0,o.default)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,r.Z)(e,h)),c=o?E:b;return l.createElement(c,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,m.E)(o)}))}},76400:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),o=n(5525),i=n(80907),c=n(86010),s=n(77819),u=n(941),m=n(18780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,d),g=(0,i.useActiveDocContext)(v),b=g.activeVersion,E=g.activeDoc,p=(0,u.useDocsPreferredVersion)(v).preferredVersion,k=(0,i.useLatestVersion)(v),_=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,p,k].filter(Boolean)),n),w=(0,s.E)(h.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,c.default)(h.className,(t={},t[w]=(null==E?void 0:E.sidebar)&&E.sidebar===_.sidebar,t)),activeClassName:w,label:null!=f?f:_.id,to:_.path}))}},59308:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),o=n(5525),i=n(23154),c=n(80907),s=n(941),u=n(24973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,E=(0,r.Z)(e,m),p=(0,c.useActiveDocContext)(v),k=(0,c.useVersions)(v),_=(0,c.useLatestVersion)(v),w=(0,s.useDocsPreferredVersion)(v),N=w.preferredVersion,C=w.savePreferredVersionName;var Z,y=(Z=k.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){C(e.name)}}})),[].concat(g,Z,b)),S=null!=(t=null!=(n=p.activeVersion)?n:N)?t:_,T=f&&y?(0,u.translate)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,D=f&&y?void 0:d(S).path;return y.length<=1?l.createElement(o.Z,(0,a.Z)({},E,{mobile:f,label:T,to:D,isActive:h?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},E,{mobile:f,label:T,to:D,items:y,isActive:h?function(){return!1}:void 0}))}},47250:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(63366),l=n(67294),o=n(5525),i=n(80907),c=n(941),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,i.useActiveVersion)(m),v=(0,c.useDocsPreferredVersion)(m).preferredVersion,h=(0,i.useLatestVersion)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:b,to:E}))}},23154:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(941),c=n(5525),s=n(77819),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.isSamePath)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useState)(!1),g=h[0],b=h[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.default)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":g})},l.createElement(c.O,(0,a.Z)({className:(0,o.default)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.useLocalPathname)(),h=f(n,v),g=(0,i.useCollapsible)({initialState:function(){return!h}}),b=g.collapsed,E=g.toggleCollapsed,p=g.setCollapsed;return(0,l.useEffect)((function(){h&&p(!h)}),[v,h]),l.createElement("li",{className:(0,o.default)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.default)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(t=d.children)?t:d.label),l.createElement(i.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?h:v;return l.createElement(o,a)}},77819:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return p}});var a=n(63366),r=n(67294),l=n(5525),o=n(23154),i=n(87462),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,s=(0,a.Z)(e,c);return r.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},s),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(52263),m=n(941),d="iconLanguage_EbrZ",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,c=(0,a.Z)(e,f),v=(0,u.default)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,E=(0,m.useAlternatePageUtils)();function p(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,k,l),w=t?"Languages":p(h);return r.createElement(o.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s,{className:d}),r.createElement("span",null,w)),items:_}))}var h=n(11875);function g(e){return e.mobile?null:r.createElement(h.Z,null)}var b=["type"],E={default:function(){return l.Z},localeDropdown:function(){return v},search:function(){return g},dropdown:function(){return o.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(76400).Z}};var p=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,a.Z)(e,b),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=E[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(o,n)}},82924:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},98465:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(72389),c=n(85350),s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},u=["sources","className","alt"],m=function(e){var t=(0,i.default)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:v,className:(0,o.default)(s.themedImage,s["themedImage--"+e],d)},h))})))}},77898:function(e,t,n){var a=n(67294),r=n(10412),l=function(){return r.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},85350:function(e,t,n){var a=n(67294),r=n(82924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:function(e,t,n){var a=n(67294),r=n(10412),l="desktop",o="mobile",i="ssr";function c(){return r.default.canUseDOM?window.innerWidth>996?l:o:i}t.Z=function(){var e=(0,a.useState)((function(){return c()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}}}]);