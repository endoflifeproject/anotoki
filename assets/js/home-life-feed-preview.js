(function(){
  var trusted=document.querySelector('.trusted');
  if(trusted) trusted.id='trusted-info';
})();

(function(){
  var hero=document.querySelector('.hero');
  var heroActions=document.querySelector('.hero-actions');
  if(heroActions){
    heroActions.innerHTML='<a class="secondary" href="#concerns">気になることから探す <span>›</span></a>';
  }
  var heroLead=document.querySelector('.hero-lead');
  if(heroLead){heroLead.innerHTML='もしもの医療や介護を、いきなり決めなくていい。<br>まず自分の価値観を知って、生活・体験・専門情報へ。';}

  if(hero&&!hero.querySelector('.hero-values-cta')){
    hero.classList.add('hero-no-curve');
    var valuesCta=document.createElement('a');
    valuesCta.className='hero-values-cta';
    valuesCta.href='values_type_check.html';
    valuesCta.setAttribute('aria-label','価値観タイプ診断をはじめる');
    valuesCta.innerHTML='<img src="assets/values-type/start_botton.png" alt="価値観タイプ診断">';
    hero.appendChild(valuesCta);

    var heroStyle=document.createElement('style');
    heroStyle.textContent='\
.hero.hero-no-curve:after{display:none!important}.hero-values-cta{position:absolute;z-index:5;right:3.2%;top:25%;width:min(720px,46vw);display:block;line-height:0;filter:drop-shadow(0 14px 18px rgba(24,61,89,.13));transition:transform .2s ease,filter .2s ease}.hero-values-cta img{display:block;width:100%;height:auto}.hero-values-cta:hover{transform:translateY(-5px) scale(1.015);filter:drop-shadow(0 18px 22px rgba(24,61,89,.2))}.hero-values-cta:focus-visible{outline:4px solid rgba(255,255,255,.95);outline-offset:7px;border-radius:26px}.hero-copy{position:relative;z-index:6;width:min(620px,46%)}@media(max-width:1080px){.hero-values-cta{right:2%;top:28%;width:min(600px,45vw)}.hero-copy{width:min(560px,50%)}}@media(max-width:760px){.hero{min-height:760px;align-items:flex-start}.hero-inner{padding-bottom:250px}.hero-copy{width:100%;max-width:560px}.hero-values-cta{top:auto;left:16px;right:16px;bottom:34px;width:auto;max-width:620px;margin:auto}.hero-actions{max-width:280px}}';
    document.head.appendChild(heroStyle);
  }

  var nav=document.querySelector('.site-header .nav');
  if(nav){
    nav.innerHTML='<a href="values_type_check.html">価値観チェック</a><a href="life_scenarios.html">生活の実際</a><a href="community.html">掲示板</a><a href="#concerns">困りごとから探す</a><a href="#about">このサイトについて</a>';
  }
})();

(function(){
  var main=document.querySelector('main');
  if(!main||document.querySelector('.home-community-preview')) return;

  var seedThreads=[
    {scene:'病院で治療',cat:'延命治療',kind:'意見',role:'本人として',title:'全力で延命してほしいと思うのは少数派ですか？',body:'寝たきりになっても、治療できることがあるならできるだけやってほしいと思っています。'},
    {scene:'施設・介護',cat:'胃ろう',kind:'体験',role:'家族・身近な人として',title:'親の胃ろうを選ばなかったこと、今でも時々迷います',body:'認知症が進んだ母に胃ろうを作るかどうか家族で話し合い、作らない選択をしました。'},
    {scene:'急変・救急',cat:'人工呼吸器',kind:'質問',role:'本人として',title:'人工呼吸器をつけると、実際の生活はどう変わりますか？',body:'そもそもどんな状態で使うものなのか、その後の生活がどうなるのかを知りたいです。'},
    {scene:'病院で治療',cat:'透析',kind:'意見',role:'家族・身近な人として',title:'透析を始めない選択について家族と意見が割れています',body:'本人は「もう通院は増やしたくない」と話しています。家族の中で意見が分かれています。'}
  ];
  var localThreads=[];
  try{
    var saved=JSON.parse(localStorage.getItem('anotoki-community-v1')||localStorage.getItem('anotoki-community-v0')||'[]');
    if(Array.isArray(saved)) localThreads=saved;
  }catch(e){}
  var previewThreads=localThreads.concat(seedThreads).slice(0,4);
  function esc(s){return String(s||'').replace(/[&<>'\"]/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[ch]})}

  var section=document.createElement('section');
  section.className='home-community-preview';
  section.setAttribute('aria-labelledby','home-community-title');
  section.innerHTML='\
    <div class="home-community-inner">\
      <div class="home-community-head">\
        <div>\
          <span class="home-community-kicker">みんなの声 / COMMUNITY</span>\
          <h2 id="home-community-title">みんなは、どう考えてる？</h2>\
          <p>延命、胃ろう、人工呼吸器、透析。正解を決める場所ではなく、違う考え方に出会う場所。</p>\
        </div>\
        <a class="home-community-more" href="community.html">掲示板をもっと見る <span>→</span></a>\
      </div>\
      <div class="home-community-grid">'+previewThreads.map(function(t){return '\
        <a class="home-community-card" href="community.html">\
          <div class="home-community-tags"><span class="scene">'+esc(t.scene||'場面を限定しない')+'</span><span class="cat">'+esc(t.cat||'その他')+'</span><span class="kind">'+esc(t.kind||'投稿')+'</span></div>\
          <h3>'+esc(t.title)+'</h3>\
          <p>'+esc(t.body)+'</p>\
          <div class="home-community-meta"><span>'+esc(t.role||'匿名')+'</span><b>読む →</b></div>\
        </a>';}).join('')+'\
      </div>\
      <div class="home-community-foot">\
        <span>延命を希望する考えも、希望しない考えも、まだ分からないという考えも。</span>\
        <a href="community.html">新しい投稿をしてみる →</a>\
      </div>\
    </div>';
  main.insertBefore(section,main.firstElementChild);

  var style=document.createElement('style');
  style.textContent='\
.home-community-preview{background:#eee9dc;border-bottom:1px solid #d4ccbd;padding:46px 28px 42px}.home-community-inner{max-width:1280px;margin:0 auto}.home-community-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:18px}.home-community-kicker{display:inline-flex;border-radius:999px;padding:5px 10px;background:#e0ead0;border:1px solid #b8c996;color:#4b6725;font-size:8px;font-weight:900;letter-spacing:.08em}.home-community-head h2{font-family:"Yu Mincho","Hiragino Mincho ProN",serif;color:#203f54;font-size:clamp(24px,3vw,34px);line-height:1.45;margin:8px 0 5px;font-weight:700}.home-community-head p{font-size:11px;color:#56656b;margin:0}.home-community-more{display:inline-flex;align-items:center;gap:12px;border:1px solid #6d8f31;border-radius:999px;background:#789b36;color:#fff;padding:10px 16px;font-size:10px;font-weight:900;white-space:nowrap;box-shadow:0 6px 14px rgba(83,112,38,.16)}.home-community-more:hover{background:#66862f;transform:translateY(-1px)}.home-community-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.home-community-card{display:block;background:#fffdf7;border:1px solid #c9c1ae;border-radius:16px;padding:16px 17px;box-shadow:0 4px 13px rgba(62,55,39,.07);transition:.18s}.home-community-card:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(62,55,39,.12);border-color:#9fa88a}.home-community-tags{display:flex;gap:6px;flex-wrap:wrap}.home-community-tags span{font-size:8px;font-weight:900;border-radius:999px;padding:3px 7px}.home-community-tags .scene{background:#e3edf2;color:#315870;border:1px solid #b9cdd8}.home-community-tags .cat{background:#eaf1dc;color:#49682f;border:1px solid #b9ca96}.home-community-tags .kind{background:#f3eadc;color:#6b5132;border:1px solid #d9c5a8}.home-community-card h3{font-size:15px;line-height:1.55;color:#243b4a;margin:9px 0 6px;font-weight:800}.home-community-card p{font-size:10px;line-height:1.8;color:#526066;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.home-community-meta{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px;padding-top:10px;border-top:1px solid #e3dccf;color:#667279;font-size:9px}.home-community-meta b{color:#56752d;font-size:9px}.home-community-foot{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:14px;border:1px solid #cfc6b5;border-radius:13px;background:#f7f2e5;padding:11px 13px;color:#59666b;font-size:9px}.home-community-foot a{color:#315f78;font-weight:900;white-space:nowrap}@media(max-width:800px){.home-community-preview{padding:34px 16px}.home-community-head{display:block}.home-community-more{margin-top:13px}.home-community-grid{grid-template-columns:1fr}.home-community-foot{display:block}.home-community-foot a{display:block;margin-top:6px}}';
  document.head.appendChild(style);
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