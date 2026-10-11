(function(){
  'use strict';
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer=window.matchMedia('(pointer: fine)').matches;
  function $(s,c){return (c||document).querySelector(s)}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}

  /* Tech stack: filters and caption work without any library */
  var tiles=$$('.tk');
  var groups=$$('.tg');
  var tipN=$('.tip-n'),tipD=$('.tip-d');
  function show(t){
    if(!tipN)return;
    tipN.textContent=t.getAttribute('data-name');
    tipD.textContent=t.getAttribute('data-desc');
    tiles.forEach(function(o){o.classList.remove('is-on')});
    t.classList.add('is-on');
  }
  tiles.forEach(function(t){
    t.addEventListener('pointerenter',function(){show(t)});
    t.addEventListener('focus',function(){show(t)});
    t.addEventListener('click',function(){show(t)});
  });
  var fls=$$('.fl');
  fls.forEach(function(b){
    b.addEventListener('click',function(){
      var f=b.getAttribute('data-f');
      fls.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b?'true':'false')});
      groups.forEach(function(g){g.hidden=!(f==='all'||g.getAttribute('data-cat')===f)});
      document.dispatchEvent(new CustomEvent('stackfilter'));
    });
  });

  if(reduce||!window.gsap||!window.ScrollTrigger)return;

  document.addEventListener('stackfilter',function(){
    var vis=tiles.filter(function(t){return !t.closest('.tg').hidden});
    gsap.fromTo(vis,{opacity:0,y:16,scale:.92},{opacity:1,y:0,scale:1,duration:.45,stagger:.025,ease:'power3.out',clearProps:'transform,opacity'});
    ScrollTrigger.refresh();
  });
  gsap.from(tiles,{y:18,opacity:0,scale:.9,duration:.5,stagger:.025,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'#stack .filters',start:'top 88%',once:true}});
  gsap.from('.ai-band',{y:40,opacity:0,duration:.8,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'.ai-band',start:'top 90%',once:true}});
  gsap.from('.filters .fl',{y:14,opacity:0,stagger:.05,duration:.5,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'.filters',start:'top 92%',once:true}});

  /* Reviews */
  gsap.from('.rm',{y:16,opacity:0,stagger:.07,duration:.5,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'.rev-meta',start:'top 90%',once:true}});
  $$('.rev').forEach(function(r,i){
    var tl=gsap.timeline({scrollTrigger:{trigger:r,start:'top 84%',once:true}});
    tl.from(r,{y:70,opacity:0,duration:.9,ease:'power3.out',clearProps:'transform,opacity'})
      .from($$('.stars .ic',r),{scale:0,rotation:-40,stagger:.08,duration:.45,ease:'back.out(3)'},'-=.5')
      .from($$('blockquote,.rev-by',r),{y:20,opacity:0,stagger:.12,duration:.7,ease:'power3.out'},'-=.4');
    if(finePointer){
      r.addEventListener('pointermove',function(e){
        var b=r.getBoundingClientRect();
        gsap.to($('.qmark',r),{x:((e.clientX-b.left)/b.width-.5)*-24,y:((e.clientY-b.top)/b.height-.5)*-18,duration:.8,ease:'power3.out'});
      });
    }
  });

  /* Footer */
  gsap.from('.foot-word span',{yPercent:110,stagger:.05,duration:.9,ease:'power4.out',clearProps:'transform',scrollTrigger:{trigger:'.foot-word',start:'top 100%',once:true}});
  gsap.from('.foot-top > *',{y:26,opacity:0,stagger:.1,duration:.8,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:'.foot-top',start:'top 92%',once:true}});
  ScrollTrigger.refresh();
})();
