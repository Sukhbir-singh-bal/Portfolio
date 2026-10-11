import re, json, html
si=json.load(open('si.json')); lu=json.load(open('lu.json'))

# ---- tech stack pills ----
T=[ # cat, name, icon, desc
('ai','OpenAI API / Codex','si:openai','Lead-gen, chat and support assistants on GPT models, plus Codex for faster builds.'),
('ai','Claude / Claude Code','si:claude','Claude API features inside products, and Claude Code as a daily build tool with a human check on what ships.'),
('ai','AI integration','lu:sparkles','Prompt-to-output builders and assistants wired into real products.'),
('ai','Lead-gen automation','lu:workflow','Capture, enrichment, scoring and follow-up that runs around the clock.'),
('backend','Laravel','si:laravel','My main framework for APIs, dashboards and SaaS products.'),
('backend','PHP','si:php','4+ years of production PHP.'),
('backend','MySQL','si:mysql','Schemas, queries and tuning for speed.'),
('backend','SQL Server','lu:database','Used in production on a large learning platform.'),
('backend','Livewire','si:livewire','Reactive interfaces without a separate front end.'),
('backend','Supabase','si:supabase','Auth and data for JavaScript and TypeScript apps.'),
('backend','REST APIs','lu:plug','Secure endpoints with Sanctum or JWT.'),
('payments','Stripe','si:stripe','Checkout, upsells, subscriptions and failed-payment recovery.'),
('payments','PayPal','si:paypal','Payments and billing next to Stripe.'),
('payments','Razorpay','si:razorpay','Payments for the Indian market.'),
('front','Vue.js','si:vuedotjs','Laravel and Vue full-stack apps.'),
('front','JavaScript','si:javascript','Interactive front ends and app logic.'),
('front','TypeScript','si:typescript','Typed code for larger apps.'),
('front','Tailwind CSS','si:tailwindcss','Fast, consistent styling.'),
('front','Chart.js','si:chartdotjs','Dashboards and analytics charts.'),
('front','Shopify','si:shopify','Theme edits, custom sections and Liquid.'),
('front','WordPress','si:wordpress','Custom builds and fixes.'),
('front','WooCommerce','si:woocommerce','Stores and checkout changes.'),
('ops','Cloudflare','si:cloudflare','DNS, R2 file storage and edge caching.'),
('ops','Backblaze B2','si:backblaze','Cold storage for large files.'),
('ops','Amazon S3','si:amazons3','File storage for course content.'),
('ops','VPS','lu:server','Server setup and deployment.'),
('ops','Page speed','lu:gauge','Caching, N+1 fixes and query tuning.'),
('ops','GitHub','si:github','Version control and code review.'),
('ops','Figma','si:figma','Reading designs and building them accurately.'),
('ops','HubSpot','si:hubspot','CRM integrations.'),
('ops','Zapier','si:zapier','Workflow automations between apps.'),
]
def lum(h):
    c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    c=[x/12.92 if x<=.03928 else ((x+.055)/1.055)**2.4 for x in c]
    return .2126*c[0]+.7152*c[1]+.0722*c[2]
def pill(cat,name,icon,desc):
    k,n=icon.split(':')
    hexv=si[n]['hex'] if k=='si' else 'FF6B1A'
    L=lum(hexv); bc='#'+hexv; ic='#fff'
    if L<.02: bc,ic='#E9EDF2','#0C0D0F'
    elif L>.4: ic='#0C0D0F'
    cls='tk ai' if cat=='ai' else 'tk'
    return '<button class="%s" type="button" data-name="%s" data-desc="%s" style="--bc:%s;--ic:%s"><span class="tk-ic">{{%s:%s}}</span><span class="tk-n">%s</span></button>'%(cls,html.escape(name),html.escape(desc),bc,ic,k,n,html.escape(name))
def pills(cat): return '<div class="pills">'+''.join(pill(*t) for t in T if t[0]==cat)+'</div>'
groups=[('backend','Backend'),('payments','Payments'),('front','Front end and CMS'),('ops','Cloud and tools')]
G='<div class="tg ai-band" data-cat="ai"><div class="tg-head ai-head"><span class="ai-pill">{{lu:sparkles}} AI stack</span><p>AI is a big part of my work, from lead-gen assistants to prompt-to-page builders.</p></div>'+pills('ai')+'</div>'
for cat,label in groups:
    G+='<div class="tg" data-cat="%s"><h3 class="tg-head mono">%s</h3>%s</div>'%(cat,label,pills(cat))
STACK='''<section class="sec dark stack-sec" id="stack">
  <div class="wrap">
    <div class="sec-head">
      <div class="sec-title"><span class="tile">{{lu:cpu}}</span><h2 class="split">Tech stack</h2></div>
      <p class="sec-desc">The tools I build with. Hover or tap a pill to see how I use it.</p>
    </div>
    <div class="filters" role="group" aria-label="Filter tools">
      <button class="fl on" type="button" data-f="all" aria-pressed="true">All</button><button class="fl" type="button" data-f="ai" aria-pressed="false">AI</button><button class="fl" type="button" data-f="backend" aria-pressed="false">Backend</button><button class="fl" type="button" data-f="payments" aria-pressed="false">Payments</button><button class="fl" type="button" data-f="front" aria-pressed="false">Front end and CMS</button><button class="fl" type="button" data-f="ops" aria-pressed="false">Cloud and tools</button>
    </div>
    <div class="pgroups">%s</div>
    <p class="tip" id="tip" aria-live="polite"><span class="tip-n">Pick a tool</span><span class="tip-d">to see how I use it.</span></p>
  </div>
</section>'''%G

# ---- ribbons ----
names={'laravel':'Laravel','php':'PHP','mysql':'MySQL','vuedotjs':'Vue.js','stripe':'Stripe','shopify':'Shopify','wordpress':'WordPress','claude':'Claude Code','cloudflare':'Cloudflare','supabase':'Supabase','figma':'Figma','javascript':'JavaScript','tailwindcss':'Tailwind CSS','paypal':'PayPal','openai':'OpenAI'}
seq=[('laravel',0),('php',0),('openai',1),('mysql',0),('vuedotjs',0),('stripe',0),('claude',1),('shopify',0),('wordpress',0),('cloudflare',0),('openai',1),('supabase',0),('figma',0),('javascript',0),('tailwindcss',0),('paypal',0)]
def item(s,ai):
    nm=names[s]
    if s=='openai' and seq.count((s,ai))>1 and ai:
        pass
    return '<span class="it%s">{{si:%s}}%s</span>'%(' ai' if ai else '',s,nm)
o_items=[]; seen=0
for s,ai in seq:
    nm=names[s]
    if s=='openai':
        seen+=1; nm='OpenAI' if seen==1 else 'Codex'
    o_items.append('<span class="it%s">{{si:%s}}%s</span>'%(' ai' if ai else '',s,nm))
d_words=['APIs','Payments','Dashboards','AI features','Integrations','Admin panels','Deployment','Platforms','Automation','Support desks']
d_items=['<span class="it">%s</span>'%w for w in d_words]
grp=lambda items:'<div class="grp">'+''.join(items)+'</div>'

body=open('p1.html').read()+open('p2.html').read()
body=body.replace('{{STACK}}',STACK).replace('{{PORTRAIT}}',open('portrait.b64').read())
body=body.replace('{{RIBBON_ORANGE}}',grp(o_items)+grp(o_items)).replace('{{RIBBON_DARK}}',grp(d_items+d_items)+grp(d_items+d_items))
used=set(re.findall(r'\{\{(si|lu):([a-z0-9\-]+)\}\}',body))
sym=[]
for k,n in sorted(used):
    if k=='si':
        assert n in si,('missing si',n)
        sym.append('<symbol id="si-%s" viewBox="0 0 24 24"><path d="%s"/></symbol>'%(n,si[n]['path']))
    else:
        assert n in lu,('missing lu',n)
        sym.append('<symbol id="lu-%s" viewBox="0 0 24 24">%s</symbol>'%(n,lu[n]))
body=re.sub(r'\{\{(si|lu):([a-z0-9\-]+)\}\}',lambda m:'<svg class="ic %s" aria-hidden="true" focusable="false"><use href="#%s-%s"/></svg>'%(m.group(1),m.group(1),m.group(2)),body)
assert '{{' not in body
sprite='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">'+''.join(sym)+'</svg>'
head='''<title>Sukhbir Singh</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
'''
css=open('p1.css').read()+open('p2.css').read()+open('p3.css').read()
scripts='<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>\n<script>\n'+open('p.js').read()+'\n</script>\n<script>\n'+open('p3.js').read()+'\n</script>\n'
out=head+'<style>\n'+css+'</style>\n'+sprite+'\n'+body+'\n'+scripts
open('../sukhbir-portfolio.html','w').write(out)
for i,m in enumerate(re.findall(r'<script>\n(.*?)</script>',out,re.S)): open('chk%d.js'%i,'w').write(m)
print('built',len(out),'bytes; symbols',len(sym))
