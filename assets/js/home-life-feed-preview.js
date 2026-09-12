(function(){
  var main=document.querySelector('main');
  if(!main||document.querySelector('.home-main-route')) return;

  var firstSection=main.firstElementChild;
  var route=document.createElement('section');
  route.className='home-main-route';
  route.setAttribute('aria-labelledby','home-route-title');
  route.innerHTML='\
    <div class="home-route-inner">\
      <div class="home-route-head">\
        <span class="home-route-kicker">START HERE</span>\
        <h2 id="home-route-title">まず、自分が何を大切にしたいか知る。</h2>\
        <p>答えを決めるための診断ではありません。今の価値観を整理して、その結果から「生活の実際」「みんなの声」「専門情報」へ進みます。</p>\
      </div>\
      <div class="home-route-grid">\
        <a class="home-route-card home-route-first" href="values_type_check.html">\
          <span class="home-route-number">1</span>\
          <small>16 QUESTIONS</small>\
          <h3>価値観タイプチェック</h3>\
          <p>治療と暮らし、決め方、頼りたい人。今の自分の傾向を整理します。</p>\
          <strong>診断をはじめる <b>→</b></strong>\
        </a>\
        <div class="home-route-card home-route-result">\
          <span class="home-route-number">2</span>\
          <small>YOUR RESULT</small>\
          <h3>結果を見て、気になることを見つける</h3>\
          <p>タイプだけでなく、大切にしたいことTOP3や「今どこまで考えられているか」も表示します。</p>\
          <strong>治療をおすすめする結果ではありません</strong>\
        </div>\
        <div class="home-route-card home-route-next">\
          <span class="home-route-number">3</span>\
          <small>CHOOSE YOUR NEXT STEP</small>\
          <h3>結果から、次に知りたい場所へ</h3>\
          <div class="home-route-links">\
            <a href="life_scenarios.html">その選択の先の暮らし <b>→</b></a>\
            <a href="community.html">みんなの意見・体験 <b>→</b></a>\
            <a href="#trusted-info">専門・公的サイト <b>→</b></a>\
          </div>\
        </div>\
      </div>\
      <div class="home-route-foot">結果はゴールではなく、<b>「何を知れば自分で考えやすくなるか」への入口</b>です。</div>\
    </div>';
  if(firstSection) main.insertBefore(route,firstSection); else main.appendChild(route);

  var trusted=document.querySelector('.trusted');
  if(trusted) trusted.id='trusted-info';

  var style=document.createElement('style');
  style.textContent='\
.home-main-route{background:#efede5;border-top:1px solid #d9d2c3;border-bottom:1px solid #d9d2c3;padding:48px 28px}.home-route-inner{max-width:1200px;margin:0 auto}.home-route-head{text-align:center;max-width:780px;margin:0 auto 24px}.home-route-kicker{display:inline-flex;padding:5px 11px;border-radius:999px;background:#78943f;color:#fff;font-size:9px;font-weight:900;letter-spacing:.12em}.home-route-head h2{font-family:"Yu Mincho","Hiragino Mincho ProN",serif;color:#203b48;font-size:clamp(25px,3.5vw,36px);line-height:1.5;margin:10px 0 8px;font-weight:700}.home-route-head p{font-size:12px;color:#465653;margin:0;line-height:1.9}.home-route-grid{display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:14px}.home-route-card{position:relative;display:flex;flex-direction:column;min-height:245px;border:1px solid #cfc8b8;border-radius:18px;background:#fffdf8;padding:22px;color:#293936;box-shadow:0 6px 18px rgba(55,55,45,.07)}a.home-route-card{transition:.2s}a.home-route-card:hover{transform:translateY(-3px);box-shadow:0 12px 26px rgba(55,55,45,.11)}.home-route-first{border-top:6px solid #78943f}.home-route-result{border-top:6px solid #d79c3d}.home-route-next{border-top:6px solid #315f75}.home-route-number{position:absolute;right:16px;top:13px;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;background:#ece8dc;color:#52615d;font:700 15px Georgia,serif}.home-route-card small{font-size:8px;font-weight:900;letter-spacing:.12em;color:#6e7b77}.home-route-card h3{font-family:"Yu Mincho","Hiragino Mincho ProN",serif;font-size:18px;line-height:1.55;color:#203b48;margin:8px 0}.home-route-card p{font-size:10px;line-height:1.9;color:#53615e;margin:0 0 14px}.home-route-card>strong{margin-top:auto;font-size:10px;color:#5f7933}.home-route-card>strong b{font-size:15px;margin-left:5px}.home-route-result>strong{color:#87611f}.home-route-links{display:grid;gap:7px;margin-top:auto}.home-route-links a{display:flex;justify-content:space-between;align-items:center;border:1px solid #cfc8b8;border-radius:10px;background:#f8f5ed;padding:9px 11px;color:#264b5e;font-size:10px;font-weight:800}.home-route-links a:hover{background:#eef3df;border-color:#aabe78}.home-route-links b{font-size:14px}.home-route-foot{text-align:center;margin-top:17px;padding:11px 14px;border:1px solid #d7d0c1;border-radius:12px;background:#f8f5ee;color:#52605d;font-size:10px}.home-route-foot b{color:#2f4742}@media(max-width:900px){.home-route-grid{grid-template-columns:1fr}.home-route-card{min-height:auto}.home-route-result{min-height:190px}}@media(max-width:700px){.home-main-route{padding:38px 16px}.home-route-head{text-align:left}.home-route-head h2{font-size:26px}.home-route-head p{font-size:11px}}';
  document.head.appendChild(style);
})();

(function(){
  var heroActions=document.querySelector('.hero-actions');
  if(heroActions){
    heroActions.innerHTML='<a class="primary" href="values_type_check.html">まず価値観を整理する <span>›</span></a><a class="secondary" href="#concerns">気になることから探す <span>›</span></a>';
  }
  var heroLead=document.querySelector('.hero-lead');
  if(heroLead){heroLead.innerHTML='もしもの医療や介護を、いきなり決めなくていい。<br>まず自分の価値観を知って、生活・体験・専門情報へ。';}

  var nav=document.querySelector('.site-header .nav');
  if(nav){
    nav.innerHTML='<a href="values_type_check.html">価値観チェック</a><a href="life_scenarios.html">生活の実際</a><a href="community.html">掲示板</a><a href="#concerns">困りごとから探す</a><a href="#about">このサイトについて</a>';
  }
})();

(function(){
  var main=document.querySelector('main');
  if(!main||document.querySelector('.home-life-preview')) return;
  var flow=main.querySelector('.flow');
  var howto=flow?flow.closest('.section'):null;
  var section=document.createElement('section');
  section.className='home-life-preview';
  section.setAttribute('aria-labelledby','home-life-title');
  section.innerHTML='\
    <div class="home-life-head">\
      <div><span class="route-tag">LIFE STORIES / DEMO</span><h2 id="home-life-title">みんなは、どう過ごしている？</h2><p>治療や介護だけじゃない。趣味、旅行、家族、介護の工夫。暮らしの記録をのぞいてみる。</p></div>\
      <a class="home-life-more" href="life_feed_demo.html">もっと見る <span>→</span></a>\
    </div>\
    <div class="home-life-grid">\
      <a class="home-life-card" href="life_feed_demo.html"><div class="home-life-photo"><img src="demo-ai-gardening-balcony.png" alt="ベランダで園芸を楽しむ高齢女性のAI生成デモ画像" loading="lazy"><span>DEMO｜AI生成画像</span></div><div class="home-life-body"><small># 社会・趣味</small><h3>朝の水やりが、毎日の予定になった</h3><p>退院してからベランダの鉢を少しずつ。朝の水やりが生活のリズムに。</p></div></a>\
      <a class="home-life-card" href="life_feed_demo.html"><div class="home-life-photo"><img src="demo-ai-travel-lake.png" alt="湖へ旅行する夫婦のAI生成デモ画像" loading="lazy"><span>DEMO｜AI生成画像</span></div><div class="home-life-body"><small># お金・体験</small><h3>遠出をやめて、夫婦で一泊だけ</h3><p>近場で、無理なく。豪華じゃなくても十分いい思い出になりました。</p></div></a>\
      <a class="home-life-card" href="life_feed_demo.html"><div class="home-life-photo"><img src="demo-ai-family-pets.png" alt="家族と犬猫と過ごす高齢女性のAI生成デモ画像" loading="lazy"><span>DEMO｜AI生成画像</span></div><div class="home-life-body"><small># 人間関係</small><h3>犬がいると、家族の会話が増えた</h3><p>体調の話ばかりにならず、いつもの家族の時間が戻ってきます。</p></div></a>\
      <a class="home-life-card" href="life_feed_demo.html"><div class="home-life-photo"><img src="demo-ai-care-tools.png" alt="介護用品を一緒に確認する家族のAI生成デモ画像" loading="lazy"><span>DEMO｜AI生成画像</span></div><div class="home-life-body"><small># 介護の工夫</small><h3>介護グッズは、一か所にまとめた</h3><p>探し物が減っただけで、毎日の介護が少し楽になりました。</p></div></a>\
    </div>\
    <div class="home-life-foot"><span>将来は、興味・不安・暮らし方に合わせて表示する投稿を変える想定です。</span><a href="life_feed_demo.html">投稿フィードのデモを見る →</a></div>';
  if(howto){main.insertBefore(section,howto);}else{main.appendChild(section);}
  var style=document.createElement('style');
  style.textContent='\
.home-life-preview{max-width:1280px;margin:0 auto;padding:8px 28px 70px}.home-life-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:18px}.home-life-head h2{font-family:"Yu Mincho","Hiragino Mincho ProN",serif;color:#153f68;font-weight:500;font-size:27px;letter-spacing:.09em;margin:4px 0 7px}.home-life-head p{font-size:10px;color:#788592;margin:0}.home-life-more{display:inline-flex;align-items:center;gap:12px;border:1px solid #cddde8;border-radius:999px;background:#fff;padding:9px 15px;color:#2c6289;font-size:10px;font-weight:800;white-space:nowrap}.home-life-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.home-life-card{overflow:hidden;border:1px solid #dce7ee;border-radius:17px;background:#fff;box-shadow:0 9px 28px rgba(30,66,94,.06);transition:.22s}.home-life-card:hover{transform:translateY(-4px);box-shadow:0 17px 35px rgba(30,66,94,.11)}.home-life-photo{aspect-ratio:4/3;position:relative;overflow:hidden;background:#eef4f7}.home-life-photo img{display:block;width:100%;height:100%;object-fit:cover}.home-life-photo span{position:absolute;left:9px;top:9px;padding:3px 7px;border:1px solid rgba(214,226,234,.9);border-radius:999px;background:rgba(255,255,255,.88);backdrop-filter:blur(8px);color:#607789;font-size:7px;font-weight:900}.home-life-body{padding:12px 13px 14px}.home-life-body small{color:#3c708d;font-size:8px;font-weight:900}.home-life-body h3{font-family:"Yu Mincho","Hiragino Mincho ProN",serif;color:#244e6c;font-weight:600;font-size:14px;line-height:1.55;margin:5px 0 6px}.home-life-body p{font-size:9px;color:#687b89;margin:0;line-height:1.75}.home-life-foot{margin-top:14px;padding:12px 14px;border:1px solid #e3eaee;border-radius:13px;background:#fafcfd;display:flex;justify-content:space-between;gap:14px;color:#7b8994;font-size:9px}.home-life-foot a{color:#2e6489;font-weight:800;white-space:nowrap}@media(max-width:950px){.home-life-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.home-life-preview{padding:8px 16px 52px}.home-life-head{display:block}.home-life-head h2{font-size:23px}.home-life-more{margin-top:12px}.home-life-grid{grid-template-columns:1fr 1fr;gap:10px}.home-life-body{padding:10px}.home-life-body h3{font-size:13px}.home-life-foot{display:block}.home-life-foot a{display:block;margin-top:6px}}@media(max-width:480px){.home-life-grid{grid-template-columns:1fr}}';
  document.head.appendChild(style);
})();

(function(){
  document.title='アノトキ｜医療・介護の選択を、経験から考える。';
  var brand=document.querySelector('.site-header .brand');
  if(brand){
    brand.innerHTML='<div class="anotoki-header-brand"><strong>アノトキ</strong><small>医療・介護の選択を、経験から考える。</small></div>';
    var style=document.createElement('style');
    style.textContent='.site-header .brand{gap:0}.anotoki-header-brand{display:flex;flex-direction:column;justify-content:center;min-width:180px;line-height:1.05}.anotoki-header-brand strong{font-family:"Yu Mincho","Hiragino Mincho ProN",serif;font-size:22px;letter-spacing:.14em;font-weight:700;color:#087e8b}.anotoki-header-brand strong:after{content:"♥";margin-left:5px;font-size:10px;color:#ef8f88;vertical-align:middle}.anotoki-header-brand small{margin-top:5px;font-size:7px;letter-spacing:.08em;color:#6f8192}@media(max-width:700px){.anotoki-header-brand{min-width:155px}.anotoki-header-brand strong{font-size:20px}.anotoki-header-brand small{font-size:6px}}';
    document.head.appendChild(style);
  }
  var footerBrand=document.querySelector('.foot-brand');
  if(footerBrand){footerBrand.innerHTML='アノトキ <small style="display:block;font:7px Georgia,serif;letter-spacing:.25em;color:#8b98a2">ANOTOKI</small>';}
  var copy=document.querySelector('.copy');
  if(copy){var visitor=copy.querySelector('.visitor-count');copy.innerHTML='';if(visitor) copy.appendChild(visitor);copy.appendChild(document.createTextNode('© 2026 Anotoki'));}
  var description=document.querySelector('meta[name="description"]');
  if(description){description.setAttribute('content','アノトキは、医療・介護の選択を経験から考えるための情報サイトです。まず価値観を整理し、その選択の先にある暮らし、みんなの体験、専門情報へつなぎます。');}
})();
