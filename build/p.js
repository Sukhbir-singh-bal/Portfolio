(function(){
  'use strict';
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer=window.matchMedia('(pointer: fine)').matches;
  function $(s,c){return (c||document).querySelector(s)}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}

  /* ---------- Always on: clock, copy, FAQ, nav state, small toggles ---------- */
  var clocks=$$('.clk');
  try{
    var fmt=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'});
    var tick=function(){var t=fmt.format(new Date());clocks.forEach(function(c){c.textContent=t})};
    tick();setInterval(tick,20000);
  }catch(e){}

  $$('[data-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var text=btn.getAttribute('data-copy');
      var note=$('.note',btn)||$('.addr',btn);
      function say(msg){
        if(!note)return;
        if(!note.getAttribute('data-old'))note.setAttribute('data-old',note.textContent);
        note.textContent=msg;
        setTimeout(function(){note.textContent=note.getAttribute('data-old')},1800);
      }
      function fallback(){
        var t=$('.addr',btn);
        if(t&&window.getSelection){var r=document.createRange();r.selectNodeContents(t);var s=window.getSelection();s.removeAllRanges();s.addRange(r)}
        say(text);
      }
      try{
        if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){say('Copied')},fallback)}
        else{fallback()}
      }catch(e){fallback()}
    });
  });

  var qs=$$('.q');
  function setQ(q,open){
    q.setAttribute('data-open',open?'true':'false');
    $('.q-btn',q).setAttribute('aria-expanded',open?'true':'false');
    $('.q-body',q).inert=!open;
  }
  qs.forEach(function(q){
    $('.q-btn',q).addEventListener('click',function(){
      var open=q.getAttribute('data-open')==='true';
      qs.forEach(function(o){if(o!==q)setQ(o,false)});
      setQ(q,!open);
    });
  });

  $$('.d-lang').forEach(function(b){
    b.addEventListener('click',function(){b.setAttribute('data-on',b.getAttribute('data-on')==='en'?'pa':'en')});
  });
  setInterval(function(){var b=$('.d-lang');if(b&&!reduce)b.setAttribute('data-on',b.getAttribute('data-on')==='en'?'pa':'en')},2600);

  $$('.cap').forEach(function(c){
    c.addEventListener('pointermove',function(e){
      var r=c.getBoundingClientRect();
      c.style.setProperty('--mx',(e.clientX-r.left)+'px');
      c.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  });

  if('IntersectionObserver' in window){
    var links=$$('.nav-links a'),map={};
    links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){links.forEach(function(a){a.classList.remove('on')});if(map[e.target.id])map[e.target.id].classList.add('on')}
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s)});
  }

  /* ---------- GSAP ---------- */
  if(reduce||!window.gsap)return;
  var hasST=!!window.ScrollTrigger;
  if(hasST)gsap.registerPlugin(ScrollTrigger);

  function splitWords(el,withMask){
    var out=[];
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType===3){
          var parts=n.textContent.split(/(\s+)/),frag=document.createDocumentFragment();
          parts.forEach(function(p){
            if(!p)return;
            if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(' '));return}
            var w=document.createElement('span');
            if(withMask){
              w.className='mask';
              var inn=document.createElement('span');inn.className='in';inn.textContent=p;w.appendChild(inn);out.push(inn);
            }else{w.className='w';w.style.display='inline-block';w.textContent=p;out.push(w)}
            frag.appendChild(w);
          });
          node.replaceChild(frag,n);
        }else if(n.nodeType===1){walk(n)}
      });
    })(el);
    return out;
  }

  /* Hero intro */
  var tl=gsap.timeline({defaults:{ease:'power4.out'}});
  tl.from('.nav-pill',{y:-44,opacity:0,duration:.8})
    .from('h1 .line > span',{yPercent:112,duration:1.1,stagger:.12},'-=.5')
    .from('.hello > *',{y:16,opacity:0,stagger:.08,duration:.7},'<')
    .from('#sun',{scale:.5,opacity:0,duration:1.4,ease:'back.out(1.4)'},'-=1')
    .from('.ring',{scale:.6,opacity:0,duration:1.2,stagger:.1},'<.1')
    .from('.chip',{scale:0,duration:.6,stagger:.06,ease:'back.out(2)'},'-=.8')
    .from('.portrait',{scale:1.35,duration:1.8,ease:'power3.out'},'<')
    .from('#heroP, .cta-row .btn',{y:18,opacity:0,stagger:.07,duration:.7},'-=.9')
    .from('.svc',{y:20,opacity:0,stagger:.07,duration:.6},'-=.5');

  $$('.ring').forEach(function(r){
    var dur=+r.getAttribute('data-dur')||60,dir=+r.getAttribute('data-dir')||1;
    gsap.to(r,{rotation:360*dir,duration:dur,ease:'none',repeat:-1});
    gsap.to($$('.chip',r),{rotation:-360*dir,duration:dur,ease:'none',repeat:-1});
  });

  var hero=$('#hero');
  if(finePointer&&hero){
    var ox=gsap.quickTo('#orbit','x',{duration:1.2,ease:'power3.out'}),oy=gsap.quickTo('#orbit','y',{duration:1.2,ease:'power3.out'});
    var sx=gsap.quickTo('#sun','x',{duration:1.6,ease:'power3.out'}),sy=gsap.quickTo('#sun','y',{duration:1.6,ease:'power3.out'});
    var ix=gsap.quickTo('.portrait','x',{duration:1.4,ease:'power3.out'}),iy=gsap.quickTo('.portrait','y',{duration:1.4,ease:'power3.out'});
    hero.addEventListener('pointermove',function(e){
      var r=hero.getBoundingClientRect();
      var nx=(e.clientX-r.left)/r.width-.5,ny=(e.clientY-r.top)/r.height-.5;
      ox(nx*-26);oy(ny*-20);sx(nx*34);sy(ny*26);ix(nx*-14);iy(ny*-10);
    });
  }

  /* Magnetic buttons */
  if(finePointer){
    $$('.mag').forEach(function(el){
      var xt=gsap.quickTo(el,'x',{duration:.5,ease:'power3.out'}),yt=gsap.quickTo(el,'y',{duration:.5,ease:'power3.out'});
      el.addEventListener('pointermove',function(e){
        var r=el.getBoundingClientRect();
        xt((e.clientX-r.left-r.width/2)*.22);yt((e.clientY-r.top-r.height/2)*.32);
      });
      el.addEventListener('pointerleave',function(){xt(0);yt(0)});
    });
  }

  if(!hasST)return;

  gsap.to('#orbit',{yPercent:10,scale:1.05,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}});

  /* Ribbons */
  var tweens=[];
  $$('.track').forEach(function(tr){
    var dir=+tr.getAttribute('data-dir')||-1,g=tr.firstElementChild;
    var from=dir<0?0:function(){return -g.offsetWidth},to=dir<0?function(){return -g.offsetWidth}:0;
    tweens.push(gsap.fromTo(tr,{x:from},{x:to,duration:42,ease:'none',repeat:-1,invalidateOnRefresh:true}));
  });
  var calm;
  ScrollTrigger.create({onUpdate:function(self){
    var v=Math.min(Math.abs(self.getVelocity())/700,4);
    gsap.to(tweens,{timeScale:1+v,duration:.3,overwrite:true});
    clearTimeout(calm);calm=setTimeout(function(){gsap.to(tweens,{timeScale:1,duration:1.2,overwrite:true})},140);
  }});

  /* Scrubbed statement */
  var st=$('#statement');
  if(st){
    var words=splitWords(st,false);
    gsap.fromTo(words,{opacity:.16},{opacity:1,stagger:.12,ease:'none',scrollTrigger:{trigger:st,start:'top 85%',end:'bottom 55%',scrub:true}});
  }

  /* Counters */
  $$('.stat b').forEach(function(b){
    var to=+b.getAttribute('data-to'),suf=b.getAttribute('data-suf')||'',comma=b.getAttribute('data-comma');
    var o={v:0};
    ScrollTrigger.create({trigger:b,start:'top 90%',once:true,onEnter:function(){
      gsap.to(o,{v:to,duration:1.6,ease:'power2.out',onUpdate:function(){
        var n=Math.round(o.v);b.textContent=(comma?n.toLocaleString('en-US'):n)+suf;
      }});
    }});
  });

  /* Section titles */
  $$('.split').forEach(function(h){
    var ins=splitWords(h,true);
    gsap.from(ins,{yPercent:112,duration:.95,stagger:.07,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 90%',once:true}});
  });
  gsap.from('.big .line > span',{yPercent:112,stagger:.14,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:'.big',start:'top 88%',once:true}});
  gsap.from('.c-row,.socials',{y:24,opacity:0,stagger:.12,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.c-row',start:'top 92%',once:true}});

  /* Project cards: mock animations */
  function mockA(c){
    var q=function(s){return $$(s,c)};
    return gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
      .from(q('.a-side i'),{x:-14,opacity:0,stagger:.05,duration:.5})
      .from(q('.a-kpi'),{y:18,opacity:0,stagger:.08,duration:.5},'<.1')
      .from(q('.a-row'),{x:26,opacity:0,stagger:.1,duration:.55},'<.15')
      .from(q('.a-bar'),{scaleY:0,transformOrigin:'50% 100%',stagger:.05,duration:.6},'<.1');
  }
  function mockB(c){
    var typed=$('.b-typed',c),text=typed.getAttribute('data-text')||'',o={n:0},wb=$('.wb',c);
    typed.textContent='';
    return gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
      .to(o,{n:text.length,duration:1.6,ease:'none',onUpdate:function(){typed.textContent=text.slice(0,Math.round(o.n))}})
      .call(function(){wb.classList.add('on')})
      .from($$('.b-block',c),{y:-18,opacity:0,stagger:.14,duration:.5},'>-.1');
  }
  function mockC(c){
    var line=$('.c-line',c),L=line.getTotalLength();
    gsap.set(line,{strokeDasharray:L,strokeDashoffset:L});
    return gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
      .to(line,{strokeDashoffset:0,duration:1.5,ease:'power2.inOut'})
      .from($('.c-area',c),{opacity:0,duration:.8},'<.5')
      .from($$('.c-dot',c),{scale:0,transformOrigin:'50% 50%',stagger:.2,duration:.4,ease:'back.out(3)'},'<.3')
      .from($$('.c-item',c),{x:-18,opacity:0,stagger:.12,duration:.5},'<');
  }
  function mockD(c){
    return gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
      .from($('.d-head',c),{y:-14,opacity:0,duration:.5})
      .from($$('.d-book',c),{y:36,opacity:0,rotation:-4,stagger:.08,duration:.6},'<.15');
  }
  function mockE(c){
    var lines=$$('.e-line',c),pulses=$$('.e-pulse',c);
    lines.forEach(function(l){var L=l.getTotalLength();gsap.set(l,{strokeDasharray:L,strokeDashoffset:L})});
    gsap.set(pulses,{opacity:0});
    return gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
      .from($('.e-hub',c),{scale:0,duration:.6,ease:'back.out(2)'})
      .to(lines,{strokeDashoffset:0,duration:.7,stagger:.08},'<.2')
      .from($$('.e-node',c),{scale:0,duration:.5,stagger:.08,ease:'back.out(2.4)'},'<.25')
      .call(function(){
        pulses.forEach(function(p,i){
          gsap.fromTo(p,{attr:{cx:50,cy:43.5},opacity:1},{attr:{cx:+p.getAttribute('data-x'),cy:+p.getAttribute('data-y')},duration:1.4,repeat:-1,repeatDelay:.9,delay:i*.3,ease:'power1.inOut'});
        });
      });
  }
  var mocks={a:mockA,b:mockB,c:mockC,d:mockD,e:mockE};
  var cards=$$('.card');
  cards.forEach(function(c){
    var fn=mocks[c.getAttribute('data-mock')];
    if(fn){
      var t=fn(c);
      ScrollTrigger.create({trigger:c,start:'top 78%',once:true,onEnter:function(){t.play()}});
    }
    gsap.from($$('.card-copy > *',c),{y:26,opacity:0,stagger:.07,duration:.7,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:c,start:'top 82%',once:true}});
  });

  /* Stacked cards shrink slightly as the next one covers them */
  var mm=gsap.matchMedia();
  mm.add('(min-width:960px) and (min-height:760px)',function(){
    cards.forEach(function(c,i){
      if(i===cards.length-1)return;
      gsap.to($('.card-in',c),{scale:.95,ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top 92%',end:'top '+(92+(i+1)*22)+'px',scrub:true}});
    });
  });

  /* Capabilities, process, FAQ */
  gsap.from('.cap',{y:50,opacity:0,stagger:.08,duration:.8,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'.caps',start:'top 86%',once:true}});
  gsap.to('#tlFill',{scaleY:1,ease:'none',scrollTrigger:{trigger:'#tl',start:'top 60%',end:'bottom 60%',scrub:true}});
  $$('.step').forEach(function(s){
    ScrollTrigger.create({trigger:s,start:'top 62%',onEnter:function(){s.classList.add('on')},onLeaveBack:function(){s.classList.remove('on')}});
    gsap.from($$('.k,h3,p,.out',s),{y:26,opacity:0,stagger:.08,duration:.7,ease:'power3.out',scrollTrigger:{trigger:s,start:'top 82%',once:true}});
  });
  gsap.from('.q',{y:28,opacity:0,stagger:.07,duration:.7,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'#faq-list',start:'top 86%',once:true}});

  var refresh=function(){ScrollTrigger.refresh()};
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(refresh);
  window.addEventListener('load',refresh);
})();
