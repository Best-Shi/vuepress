if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}}))).then((e=>{const a=f(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.7e676cc8.css",revision:"d0b06c608a45b1b2f25009a9c4cd6a6d"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/41.f51b91ab.js",revision:"9800f0d45c113ea2736c5cf1176959ed"},{url:"assets/js/42.1ed480ce.js",revision:"1b27a71cabb9b531e9b9df5be781676b"},{url:"assets/js/43.c0c8123a.js",revision:"2be74ef9b1f9ec00a7efc88270d21dec"},{url:"assets/js/44.7e371a92.js",revision:"97cc4bf9dcfb0d5a6cde9c711760b312"},{url:"assets/js/45.ce8b423e.js",revision:"64b884698fee04d1937500fcbbb26a8a"},{url:"assets/js/app.5a50e427.js",revision:"d17b3e931639c494d55f0ef97c2305f8"},{url:"assets/js/layout-Blog.686595e9.js",revision:"064e48b7247b4f1d0550fb1394fed0d0"},{url:"assets/js/layout-Layout.4a549013.js",revision:"80e766759fcdd375627e14390fa95489"},{url:"assets/js/layout-NotFound.ae33c6f1.js",revision:"9b9f9b8fd2fbeff090b0911e97ed09a3"},{url:"assets/js/layout-Slide.40042ec8.js",revision:"4074177d6aa45864d959bd63ecd0f153"},{url:"assets/js/page-抽象语法树.0796a5b9.js",revision:"ac9496b8185463820385a3ba8523d62f"},{url:"assets/js/page-工具.8e6ce9c9.js",revision:"8d10e087b853145972a4abff8bba5eba"},{url:"assets/js/page-关于.6c06750c.js",revision:"0c5a485fd2681b9e77fbf073aee01214"},{url:"assets/js/page-轻言细语.e3aa0482.js",revision:"ad5434f6226f3673dcfd18e5a2115269"},{url:"assets/js/page-认识Vue3.5824c025.js",revision:"5d62e68c2f9fcc815478ac87d133a063"},{url:"assets/js/page-软件.5f898da5.js",revision:"1bcf44b2830c27b5b186baa82f8c0aa0"},{url:"assets/js/page-手写mustache模板引擎.e2fe8f22.js",revision:"e613834ebf059ab153ceac85ca4e75f8"},{url:"assets/js/page-数据变为视图方式.18e8f252.js",revision:"d7c5c5d28c538c1a444ca498854da5e2"},{url:"assets/js/page-双向数据绑定原理.1498f583.js",revision:"25cf8f51b9f310a74a768684c915c8ce"},{url:"assets/js/page-虚拟DOM与diff算法.d7b4a48c.js",revision:"5b9ad98459a921a1648f631249fb2120"},{url:"assets/js/page-CompositionAPI(常用部分).62ccba30.js",revision:"0f349db3a8389854ed6960c22750c72c"},{url:"assets/js/page-CompositionAPI(其它部分).b47c0a15.js",revision:"b46d001d5b765dd90bb258f86dabfcff"},{url:"assets/js/page-CSS笔记.64a730cb.js",revision:"8220b4ebaf849f25dcdebde2cf450814"},{url:"assets/js/page-Dode笔记.1c79032f.js",revision:"24b2adad6e9c9288c86407c15f36fcb0"},{url:"assets/js/page-Grunt打包构建工具.6fadb580.js",revision:"1793bb05b872dee97963d309e94d8cdb"},{url:"assets/js/page-Gulp打包构建工具.632820e9.js",revision:"791bc6a89fa70a7f9e3ba4f5fe2a7392"},{url:"assets/js/page-Home.9419c5e5.js",revision:"3165d519de38b0f9a122dec2da341a22"},{url:"assets/js/page-HTML笔记.130a5874.js",revision:"a1a488a840dd07dcc000de6c51df9864"},{url:"assets/js/page-JavaScript笔记.30073ea7.js",revision:"2ee24d7438156ffa0cc4187282508fd2"},{url:"assets/js/page-mustache基本使用.f0d09946.js",revision:"59900941cf075a78f57aa2f978d60741"},{url:"assets/js/page-mustache模板引擎.35177490.js",revision:"95fc18d1597854ae917375b072c5c2a8"},{url:"assets/js/page-Node笔记.4b428257.js",revision:"8170fd255442b5cd175cf8bdf85c9150"},{url:"assets/js/page-TypeScript案例.884a6048.js",revision:"0bcbe9417df38990ae44a54377c3ec5a"},{url:"assets/js/page-TypeScript基本项目搭建.0f233c8b.js",revision:"eefaaea151d2b6c4feefa87912867814"},{url:"assets/js/page-TypeScript类型与配置笔记.610515b3.js",revision:"a4efcaaa0d66baac9936792b3d08fd06"},{url:"assets/js/page-TypeScript面向对象笔记.5e5c5793.js",revision:"d50e3b2b482bf19ab56915817289cafb"},{url:"assets/js/page-Vue3新组件.7f7b0947.js",revision:"9257ff3a8f08af79be22e48d1594ce26"},{url:"assets/js/page-Vue基本使用.ac73e576.js",revision:"347db6402959947d9bcf5ecdc6be14f0"},{url:"assets/js/page-Windows相关.476c7344.js",revision:"eaa3d9c30e37a7863ca3e3fe9e306f0f"},{url:"assets/js/vendors~flowchart.20901e79.js",revision:"04bf71fd4046a08b999f04571408a5c4"},{url:"assets/js/vendors~layout-Blog~layout-Layout.5b37021a.js",revision:"2a2feaf94b81a50b8f2386e1fb53b36b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.c0487224.js",revision:"732a9c57b86825998d8119f96080aa30"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.109b0ebd.js",revision:"affb8e9343bb3ea4b86dc6a2126089bc"},{url:"assets/js/vendors~photo-swipe.2b82e450.js",revision:"66887cca34bf1a4f356b6416ce35cea0"},{url:"assets/js/vendors~reveal.b90cf70d.js",revision:"b445dceefa2390c8ab8ea815186a14f2"},{url:"images/lifecycle_3.x.svg",revision:"b1ccfc95dedf6303cd47917c533b3fc3"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"0725715aa256dfc32cdc4af348891dc6"},{url:"about/index.html",revision:"b0b25ed6ab77aef25bd59a9932b0455f"},{url:"article/index.html",revision:"05aab70fcb88738f10a7cc77480af4db"},{url:"category/工具/index.html",revision:"870d559b658085ea784c90efbad44a7f"},{url:"category/随笔/index.html",revision:"db6615bb48bea11ab303047a8b7fbcf5"},{url:"category/CSS/index.html",revision:"71c8d74b3b19327c2cee59caf0ed7088"},{url:"category/HTML/index.html",revision:"6020e7d003d2b663a83ed027b86d4ed5"},{url:"category/index.html",revision:"254a474765cc364c706891a3d11c01b6"},{url:"category/JavaScript/index.html",revision:"a0b13121469419f4e95d30f32449320c"},{url:"category/Node.js/index.html",revision:"24cef35dc981a57e2a0dd8a857eab27f"},{url:"category/TypeScript/index.html",revision:"1f219472618ff1a594440fdd167c50e8"},{url:"category/vue/index.html",revision:"d26f7eeb244d2631bec78afc7d591f70"},{url:"category/vue/page/2/index.html",revision:"fb0586a997092e19b2869ac7181ed32f"},{url:"encrypt/index.html",revision:"147c9d5891704883b1d992dd120900af"},{url:"index.html",revision:"9ec7fd3547bd9f37a1b959527bdaf455"},{url:"note/index.html",revision:"c351e2431308a02b15558d1fa564024b"},{url:"note/Windows相关/index.html",revision:"7715dfb4413b56d337daab79a7b30ad2"},{url:"programs/index.html",revision:"9d304eab2009d6388a7034ba046220df"},{url:"service/deno/index.html",revision:"6972d4afddde49808559ef34f5bdf191"},{url:"service/node/index.html",revision:"79879f73fa9d452fa8627b6ac7ac9d83"},{url:"slide/index.html",revision:"99a373a544b6c0ae47fb7830a4fbec96"},{url:"star/index.html",revision:"e070c7a36e4c486af070cb6681096492"},{url:"tag/案例/index.html",revision:"e4ad2627c164a01b127d7ed85f32e381"},{url:"tag/抽象语法树/index.html",revision:"e048ab7019b2788db6ec80651afc8fd6"},{url:"tag/打包工具/index.html",revision:"3e2981ae67ec2de351c200f30b020330"},{url:"tag/服务器/index.html",revision:"3cfe998e708733299d06aff3db12b223"},{url:"tag/后端/index.html",revision:"96cc553d2821a14bf9395150616758cb"},{url:"tag/前端/index.html",revision:"aebb7618b2cf9f004f014e56bbc99ba4"},{url:"tag/前端/page/2/index.html",revision:"81add2cfbd62fe6914d7b8fc3db6693d"},{url:"tag/前端/page/3/index.html",revision:"dd9ed96d027b3731823e1f2b5bc89136"},{url:"tag/双休数据绑定/index.html",revision:"403724910bb8abf376fad63470c42a0c"},{url:"tag/虚拟DOM/index.html",revision:"48c7610994b2b54eea05a430a937b2a9"},{url:"tag/样式/index.html",revision:"aa6109c1a8379b3e6dcb47b3e1a52664"},{url:"tag/源码/index.html",revision:"f3eb79bf795d1cd25158f7c5bd13a20c"},{url:"tag/AST/index.html",revision:"e2f03b49c88e2b60b63a6428b40ee3f0"},{url:"tag/CSS/index.html",revision:"347b25a69ecc34845d27cda21fb2bc43"},{url:"tag/Deno/index.html",revision:"22dfdcda267ac10e71d4a4da71c608b4"},{url:"tag/diff/index.html",revision:"262304aad393e6c33981e3de8723d293"},{url:"tag/Grunt/index.html",revision:"72ce441c6b4ff074f57ab061a3946722"},{url:"tag/Gulp/index.html",revision:"1d1ecf2adb85734006aca3fa6d2acda3"},{url:"tag/HTML/index.html",revision:"ec28fa102683fd2fa7e203ac1ef8ffd3"},{url:"tag/index.html",revision:"033d088fe0d613df60bda28ea0819170"},{url:"tag/JavaScript/index.html",revision:"3b4450650f86178912d1c2a41c63348c"},{url:"tag/JavaScript/page/2/index.html",revision:"9883a8fbb2f217d7ed2db01863c091d9"},{url:"tag/mustache/index.html",revision:"bbf05af412edb028b04919d34f9e4768"},{url:"tag/node/index.html",revision:"473093a8e5eddbffa59ec6c3cda0458f"},{url:"tag/TypeScript/index.html",revision:"d873605e77b667665eddd8abff1fbd7d"},{url:"tag/Vue/index.html",revision:"cdea907565723a6fbbf9b9571f49ace4"},{url:"tag/Vue/page/2/index.html",revision:"65a9b3d4938e63a0a12073c8b57f77c9"},{url:"tag/Vue3/index.html",revision:"7dee87306ac2474914f64b26d814b205"},{url:"tag/Windows/index.html",revision:"45bd8ee0d04cfd07406f0437507826fb"},{url:"timeline/index.html",revision:"82dd7b290d059ec1cf3c08ad0ad719a6"},{url:"tools/grunt/index.html",revision:"4edaacec32c0f3459402a414abb90b29"},{url:"tools/gulp/index.html",revision:"d2d8b1abf0f1a0cad7e2bbfcfeec9211"},{url:"tools/index.html",revision:"8d24eb0cb04caf936477ae0bf102b92e"},{url:"web/css/index.html",revision:"924ac070a8ff8d2a9ab4054340a7eb3f"},{url:"web/html/index.html",revision:"b83360735e72d48e5434f66b6ad2b4f8"},{url:"web/js/index.html",revision:"7f68f4780516eff2118f23094ccff9b8"},{url:"web/ts/index.html",revision:"6600527a06615998ae6395a1ed7dcaa0"},{url:"web/ts/TypeScript案例/index.html",revision:"43d2276bd8140afc387714dfe0dc6043"},{url:"web/ts/TypeScript类型与配置笔记/index.html",revision:"db6ced7a6213a36fb43b1129793cf056"},{url:"web/ts/TypeScript面向对象笔记/index.html",revision:"e731ea667a27d9deda0fce98276e25ed"},{url:"web/vue/ast/抽象语法树/index.html",revision:"551f2538984b7da09bff339a2b67b7d8"},{url:"web/vue/diff/虚拟DOM与diff算法/index.html",revision:"37a10e632fcd339de402335691eac738"},{url:"web/vue/index.html",revision:"4a5bc12e17392fee37404fb477fd880d"},{url:"web/vue/mustache/手写mustache模板引擎/index.html",revision:"e8af59896e711e8c8e0c3a57dd589e1e"},{url:"web/vue/mustache/数据变为视图方式/index.html",revision:"8168ff620382802843df87d8c4c48cf1"},{url:"web/vue/mustache/mustache基本使用/index.html",revision:"02cca9a76f166bd83564853a87fd71dc"},{url:"web/vue/mustache/mustache模板引擎/index.html",revision:"48b927b1ee97eedb486eae9dfd599e27"},{url:"web/vue/reactive/双向数据绑定/index.html",revision:"62682a26dad3ded23bdb46253e3acb29"},{url:"web/vue/vue3/Composition API(常用部分)/index.html",revision:"c46e0d8b0085f533f2fab092d6f2b46e"},{url:"web/vue/vue3/Composition API(其它部分)/index.html",revision:"70b6c4f42d7a78641cae3bd2d6e271bf"},{url:"web/vue/vue3/Vue3 新组件/index.html",revision:"f30df2db3f9264a778c910f4158d7837"},{url:"web/vue/vue3/vue3快速上手/index.html",revision:"61e4720808c191d3bba84dc5c3d663fb"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
