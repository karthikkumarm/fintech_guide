/* ================================================================
   data.js — Section content for fintech_guide
   All HTML templates + CHAPTERS / SECTIONS globals
================================================================ */

window.CHAPTERS = [
  { id:'ecosystem', emoji:'📐', label:{en:'Ecosystem',  ta:'சுற்றுச்சூழல்'}, sections:['distinction','resellers','pyramid','greyzone','shadow'] },
  { id:'company',   emoji:'🏛️', label:{en:'Company',    ta:'நிறுவனம்'},       sections:['company','costs'] },
  { id:'licensing', emoji:'📋', label:{en:'Licensing',  ta:'உரிமம்'},         sections:['license','payout'] },
  { id:'technical', emoji:'⚙️', label:{en:'Technical',  ta:'தொழில்நுட்பம்'}, sections:['wallet','bankapi'] }
];

window.SECTIONS = [

/* ── 01 DISTINCTION ────────────────────────────────────────────── */
{
  id:'distinction', chapter:'ecosystem', theme:'light',
  nav:{ en:'PG vs PA', ta:'PG vs PA' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">01 — Ecosystem</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>The crucial <em>distinction</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">The RBI draws a hard line. Know which side you operate on — before investing a single rupee.</span>
  <span class="ta">RBI கடுமையான வரம்பை வரைகிறது. ஒரு ரூபாய் முதலீடு செய்வதற்கு முன்பே நீங்கள் எந்தப் பக்கத்தில் செயல்படுகிறீர்கள் என்று தெரிந்துகொள்ளுங்கள்.</span>
</p>

<div class="compare-grid" data-stagger>
  <div class="cmp-card pg">
    <div class="cmp-badge">📦 PG — Payment Gateway</div>
    <h3><span class="en">Technology &amp; Routing Layer</span><span class="ta">தொழில்நுட்ப &amp; ரூட்டிங் அடுக்கு</span></h3>
    <p><span class="en">A PG provides the technical infrastructure — checkout widgets, payment routing, and settlement APIs. It moves funds between a PA and a merchant but never holds money itself.</span><span class="ta">PG தொழில்நுட்ப உள்கட்டமைப்பை வழங்குகிறது — checkout widgets, payment routing, மற்றும் settlement APIs. PA மற்றும் வணிகர் இடையே நிதியை நகர்த்துகிறது ஆனால் பணத்தை வைத்திருப்பதில்லை.</span></p>
    <div class="cmp-verdict"><span class="en">✅ <strong>No separate RBI licence required</strong> — but must operate under a licensed PA. Must comply with TSP (Third-Party Service Provider) guidelines and data localisation norms.</span><span class="ta">✅ <strong>தனி RBI உரிமம் தேவையில்லை</strong> — ஆனால் உரிமம் பெற்ற PA கீழ் செயல்பட வேண்டும்.</span></div>
    <p class="cmp-eg"><span class="en">e.g. Stripe, Juspay (routing layer only)</span><span class="ta">எ.கா. Stripe, Juspay (routing layer மட்டுமே)</span></p>
  </div>
  <div class="cmp-card pa">
    <div class="cmp-badge">🏦 PA — Payment Aggregator</div>
    <h3><span class="en">Fund Settlement Entity</span><span class="ta">நிதி தீர்வு நிறுவனம்</span></h3>
    <p><span class="en">A PA is authorised to collect, hold, and settle funds in a nodal account. It sits between the customer's bank and the merchant's bank — bearing full regulatory responsibility.</span><span class="ta">PA ஒரு nodal account-ல் நிதி சேகரிக்கவும், வைத்திருக்கவும், தீர்க்கவும் அங்கீகரிக்கப்பட்டுள்ளது.</span></p>
    <div class="cmp-verdict"><span class="en">⚠️ <strong>Mandatory RBI PA licence</strong> — ₹15 Cr net worth at application, ₹25 Cr within 3 years. Strict KYC/AML + nodal account + escrow obligations.</span><span class="ta">⚠️ <strong>கட்டாய RBI PA உரிமம்</strong> — விண்ணப்பத்தில் ₹15 கோடி நிகர மதிப்பு, 3 ஆண்டுகளில் ₹25 கோடி.</span></div>
    <p class="cmp-eg"><span class="en">e.g. <a href="https://razorpay.com" target="_blank" rel="noopener" class="ext-link">Razorpay</a>, <a href="https://cashfree.com" target="_blank" rel="noopener" class="ext-link">Cashfree</a>, <a href="https://payu.in" target="_blank" rel="noopener" class="ext-link">PayU</a>, CCAvenue, <a href="https://business.phonepe.com/payment-gateway" target="_blank" rel="noopener" class="ext-link">PhonePe for Business</a></span><span class="ta">எ.கா. <a href="https://razorpay.com" target="_blank" rel="noopener" class="ext-link">Razorpay</a>, <a href="https://cashfree.com" target="_blank" rel="noopener" class="ext-link">Cashfree</a>, <a href="https://payu.in" target="_blank" rel="noopener" class="ext-link">PayU</a></span></p>
  </div>
</div>

<div class="big-stat" data-reveal>
  <div class="big-stat-num">₹15→25<br><small style="font-size:0.4em;opacity:0.6">Cr</small></div>
  <div class="big-stat-text">
    <strong><span class="en">The PA net-worth ladder</span><span class="ta">PA நிகர மதிப்பு ஏணி</span></strong><br>
    <span class="en">₹15 Cr minimum net worth at the time of PA licence application. Must increase to ₹25 Cr within 3 years of receiving authorisation. Audited annually. Failure to maintain means licence revocation.</span>
    <span class="ta">PA உரிமம் விண்ணப்பிக்கும் போது குறைந்தபட்சம் ₹15 கோடி நிகர மதிப்பு. அங்கீகாரம் பெற்ற 3 ஆண்டுகளுக்குள் ₹25 கோடியாக அதிகரிக்க வேண்டும்.</span>
  </div>
</div>`
},

/* ── 02 RESELLERS ───────────────────────────────────────────────── */
{
  id:'resellers', chapter:'ecosystem', theme:'dark',
  nav:{ en:'Reseller Models', ta:'மறுவிற்பனை மாதிரி' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">02 — Ecosystem</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>How to operate <em>without a PA licence</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Four proven models that let you build a fintech business on India's payment rails — legally, without the ₹15 Cr barrier.</span>
  <span class="ta">₹15 கோடி தடையின்றி இந்தியாவின் payment rails-ல் fintech வணிகத்தை உருவாக்க நான்கு நிரூபிக்கப்பட்ட மாதிரிகள்.</span>
</p>

<div class="model-tiles" data-stagger>
  <div class="m-tile">
    <span class="mt-no">Model 01 · Distributor</span>
    <span class="mt-icon">📦</span>
    <div class="mt-name"><span class="en">Commission Reseller</span><span class="ta">கமிஷன் மறுவிற்பனையாளர்</span></div>
    <p class="mt-desc"><span class="en">Earn per-transaction commission as an authorised distribution agent of a licensed PA or BBPS Operating Unit. Zero own capital at risk beyond brand investment.</span><span class="ta">உரிமம் பெற்ற PA அல்லது BBPS OU-ன் அங்கீகரிக்கப்பட்ட distribution agent ஆக பரிவர்த்தனை கமிஷன் சம்பாதியுங்கள்.</span></p>
    <div class="mt-pills">
      <span class="mt-pill">₹50K – ₹2L setup</span>
      <span class="mt-pill">1 – 2 months</span>
      <span class="mt-pill">No PA licence</span>
    </div>
    <p class="mt-eg">RunPaisa · RechargeKit · PaySprint</p>
    <details class="mt-steps">
      <summary class="mt-steps-toggle"><span class="en">How to set up →</span><span class="ta">எப்படி அமைப்பது →</span></summary>
      <ol class="mt-checklist">
        <li><span class="en">Incorporate Pvt. Ltd. via <a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+ portal</a></span><span class="ta"><a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a> மூலம் Pvt. Ltd. பதிவு</span></li>
        <li><span class="en">Register for GST on <a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a> (18% on fintech services)</span><span class="ta"><a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a>-ல் GST பதிவு</span></li>
        <li><span class="en">Apply to a BBPS Operating Unit — see list at <a href="https://www.npci.org.in/what-we-do/aeps/product-overview" target="_blank" rel="noopener" class="ext-link">NPCI AEPS</a></span><span class="ta"><a href="https://www.npci.org.in/what-we-do/aeps/product-overview" target="_blank" rel="noopener" class="ext-link">NPCI AEPS</a>-ல் BBPS Operating Unit-க்கு விண்ணப்பிக்கவும்</span></li>
        <li><span class="en">Sign distribution / sub-distributor agreement</span><span class="ta">விநியோக / sub-distributor ஒப்பந்தத்தில் கையொப்பமிடவும்</span></li>
        <li><span class="en">Complete background check + KYC (directors + entity)</span><span class="ta">background சரிபார்ப்பு + KYC முடிக்கவும்</span></li>
        <li><span class="en">Receive agent ID and API / app credentials</span><span class="ta">Agent ID மற்றும் API / app நற்சான்றிதழ்கள் பெறவும்</span></li>
        <li><span class="en">Go live — platforms like <a href="https://runpaisa.com" target="_blank" rel="noopener" class="ext-link">RunPaisa</a> provide white-label distributor portals</span><span class="ta"><a href="https://runpaisa.com" target="_blank" rel="noopener" class="ext-link">RunPaisa</a> போன்ற தளங்கள் white-label distributor portal வழங்குகின்றன</span></li>
      </ol>
    </details>
  </div>

  <div class="m-tile">
    <span class="mt-no">Model 02 · White-label Gateway</span>
    <span class="mt-icon">⚪</span>
    <div class="mt-name"><span class="en">Branded Checkout Layer</span><span class="ta">பிராண்டட் Checkout அடுக்கு</span></div>
    <p class="mt-desc"><span class="en">License a PA's technology stack under your own brand. You own the merchant UX; the PA handles nodal accounts, settlement, and RBI compliance entirely.</span><span class="ta">உங்கள் சொந்த பிராண்டில் PA-ன் technology stack-ஐ உரிமம் பெறுங்கள். நீங்கள் merchant UX-ஐ சொந்தமாக்கிக் கொள்கிறீர்கள்.</span></p>
    <div class="mt-pills">
      <span class="mt-pill">₹2L – ₹10L setup</span>
      <span class="mt-pill">2 – 4 months</span>
      <span class="mt-pill">TSP compliance only</span>
    </div>
    <p class="mt-eg">GetEPay · AdvayPay · Paycorp India</p>
    <details class="mt-steps">
      <summary class="mt-steps-toggle"><span class="en">How to set up →</span><span class="ta">எப்படி அமைப்பது →</span></summary>
      <ol class="mt-checklist">
        <li><span class="en">Incorporate Pvt. Ltd. via <a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+ portal</a></span><span class="ta"><a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a> மூலம் Pvt. Ltd. பதிவு</span></li>
        <li><span class="en">Register for GST on <a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a></span><span class="ta"><a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a>-ல் GST பதிவு</span></li>
        <li><span class="en">Apply as TSP with <a href="https://razorpay.com/partners" target="_blank" rel="noopener" class="ext-link">Razorpay Partners</a>, <a href="https://cashfree.com" target="_blank" rel="noopener" class="ext-link">Cashfree</a>, or <a href="https://getepay.in" target="_blank" rel="noopener" class="ext-link">GetEPay</a></span><span class="ta"><a href="https://razorpay.com/partners" target="_blank" rel="noopener" class="ext-link">Razorpay</a>, <a href="https://cashfree.com" target="_blank" rel="noopener" class="ext-link">Cashfree</a> TSP-க்கு விண்ணப்பிக்கவும்</span></li>
        <li><span class="en">Sign the TSP / white-label agreement (defines MDR split and compliance obligations)</span><span class="ta">TSP / white-label ஒப்பந்தத்தில் கையொப்பமிடவும்</span></li>
        <li><span class="en">Register your brand trademark at <a href="https://ipindia.gov.in" target="_blank" rel="noopener" class="ext-link">IP India</a> (Class 36 — financial services)</span><span class="ta"><a href="https://ipindia.gov.in" target="_blank" rel="noopener" class="ext-link">IP India</a>-ல் உங்கள் பிராண்ட் trademark பதிவு செய்யுங்கள்</span></li>
        <li><span class="en">Complete technical integration via PA's SDK / REST APIs (sandbox → production)</span><span class="ta">PA-ன் SDK / REST APIs மூலம் தொழில்நுட்ப ஒருங்கிணைப்பு முடிக்கவும்</span></li>
        <li><span class="en">Go live — merchant KYC handled by the underlying PA</span><span class="ta">Go live — வணிகர் KYC அடிப்படை PA-ஆல் நிர்வகிக்கப்படுகிறது</span></li>
      </ol>
    </details>
  </div>

  <div class="m-tile">
    <span class="mt-no">Model 03 · Sub-merchant Agent</span>
    <span class="mt-icon">🤝</span>
    <div class="mt-name"><span class="en">Merchant Aggregation Agent</span><span class="ta">வணிகர் திரட்டல் முகவர்</span></div>
    <p class="mt-desc"><span class="en">Board merchants under a licensed PA's umbrella. The PA is the principal; you are the agent. Revenue from MDR sharing or flat referral fees.</span><span class="ta">உரிமம் பெற்ற PA-ன் கீழ் வணிகர்களை இணைக்கவும். PA முதன்மை; நீங்கள் முகவர்.</span></p>
    <div class="mt-pills">
      <span class="mt-pill">₹1L – ₹5L setup</span>
      <span class="mt-pill">1 – 3 months</span>
      <span class="mt-pill">PA covers all RBI risk</span>
    </div>
    <p class="mt-eg">Razorpay Partner · Cashfree Agent</p>
    <details class="mt-steps">
      <summary class="mt-steps-toggle"><span class="en">How to set up →</span><span class="ta">எப்படி அமைப்பது →</span></summary>
      <ol class="mt-checklist">
        <li><span class="en">Incorporate Pvt. Ltd. via <a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+ portal</a></span><span class="ta"><a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a> மூலம் Pvt. Ltd. பதிவு</span></li>
        <li><span class="en">Register for GST on <a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a></span><span class="ta"><a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a>-ல் GST பதிவு</span></li>
        <li><span class="en">Apply at <a href="https://razorpay.com/partners" target="_blank" rel="noopener" class="ext-link">Razorpay Partners</a> or <a href="https://cashfree.com" target="_blank" rel="noopener" class="ext-link">Cashfree</a> or <a href="https://payu.in" target="_blank" rel="noopener" class="ext-link">PayU</a></span><span class="ta"><a href="https://razorpay.com/partners" target="_blank" rel="noopener" class="ext-link">Razorpay</a> அல்லது <a href="https://cashfree.com" target="_blank" rel="noopener" class="ext-link">Cashfree</a>-ல் விண்ணப்பிக்கவும்</span></li>
        <li><span class="en">Sign merchant aggregation / referral agreement</span><span class="ta">Merchant aggregation / referral ஒப்பந்தத்தில் கையொப்பமிடவும்</span></li>
        <li><span class="en">Complete partner on-boarding (brand review, dashboard access)</span><span class="ta">Partner on-boarding முடிக்கவும் (பிராண்ட் மதிப்பாய்வு, dashboard அணுகல்)</span></li>
        <li><span class="en">On-board sub-merchants under the PA's KYC framework</span><span class="ta">PA-ன் KYC கட்டமைப்பின் கீழ் sub-merchants சேர்க்கவும்</span></li>
        <li><span class="en">Collect monthly MDR share / referral fee from PA dashboard</span><span class="ta">PA dashboard-ல் இருந்து மாதாந்திர MDR பகிர்வு / referral கட்டணம் சேகரிக்கவும்</span></li>
      </ol>
    </details>
  </div>

  <div class="m-tile">
    <span class="mt-no">Model 04 · BBPS / AEPS Operator</span>
    <span class="mt-icon">📱</span>
    <div class="mt-name"><span class="en">NPCI Network Operator</span><span class="ta">NPCI நெட்வொர்க் ஆபரேட்டர்</span></div>
    <p class="mt-desc"><span class="en">Operate as a BBPS Agent Institution (bill payment) or AEPS service provider (Aadhaar-enabled cash) via a licensed BBPS Operating Unit. NPCI-regulated, not RBI-PA regulated.</span><span class="ta">உரிமம் பெற்ற BBPS Operating Unit வழியாக BBPS Agent Institution அல்லது AEPS சேவை வழங்குனராக செயல்படுங்கள்.</span></p>
    <div class="mt-pills">
      <span class="mt-pill">₹30K – ₹1.5L setup</span>
      <span class="mt-pill">3 – 6 weeks</span>
      <span class="mt-pill">NPCI OU agreement</span>
    </div>
    <p class="mt-eg">Fino · NSDL Payments · Spice Money</p>
    <details class="mt-steps">
      <summary class="mt-steps-toggle"><span class="en">How to set up →</span><span class="ta">எப்படி அமைப்பது →</span></summary>
      <ol class="mt-checklist">
        <li><span class="en">Incorporate Pvt. Ltd. via <a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+ portal</a></span><span class="ta"><a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a> மூலம் Pvt. Ltd. பதிவு</span></li>
        <li><span class="en">Register for GST on <a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a></span><span class="ta"><a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">gst.gov.in</a>-ல் GST பதிவு</span></li>
        <li><span class="en">Choose a BBPS Operating Unit — <a href="https://fino.com" target="_blank" rel="noopener" class="ext-link">Fino</a>, <a href="https://spicemoney.com" target="_blank" rel="noopener" class="ext-link">Spice Money</a>, or <a href="https://paynearby.in" target="_blank" rel="noopener" class="ext-link">PayNearby</a></span><span class="ta"><a href="https://fino.com" target="_blank" rel="noopener" class="ext-link">Fino</a>, <a href="https://spicemoney.com" target="_blank" rel="noopener" class="ext-link">Spice Money</a> போன்ற BBPS OU தேர்ந்தெடுக்கவும்</span></li>
        <li><span class="en">Sign the Agent Institution agreement per <a href="https://www.npci.org.in/what-we-do/bbps/product-overview" target="_blank" rel="noopener" class="ext-link">NPCI BBPS framework</a></span><span class="ta"><a href="https://www.npci.org.in/what-we-do/bbps/product-overview" target="_blank" rel="noopener" class="ext-link">NPCI BBPS</a> கட்டமைப்பின்படி Agent Institution ஒப்பந்தத்தில் கையொப்பமிடவும்</span></li>
        <li><span class="en">Complete NPCI-mandated agent training + KYC</span><span class="ta">NPCI கட்டாயப்படுத்திய agent பயிற்சி + KYC முடிக்கவும்</span></li>
        <li><span class="en">Receive agent ID from the Operating Unit</span><span class="ta">Operating Unit-ல் இருந்து agent ID பெறவும்</span></li>
        <li><span class="en">Go live on <a href="https://www.npci.org.in/what-we-do/aeps/product-overview" target="_blank" rel="noopener" class="ext-link">AEPS</a> / BBPS — commission credited T+1</span><span class="ta"><a href="https://www.npci.org.in/what-we-do/aeps/product-overview" target="_blank" rel="noopener" class="ext-link">AEPS</a> / BBPS-ல் go live — கமிஷன் T+1-ல் வரவு வைக்கப்படுகிறது</span></li>
      </ol>
    </details>
  </div>
</div>

<div class="model-hub" data-reveal>
  <div>
    <div class="mh-label"><span class="en">All 4 models feed into</span><span class="ta">4 மாதிரிகளும் இதற்கு ஊட்டுகின்றன</span></div>
    <div class="mh-name"><span class="en">Licensed PA / BBPS Operating Unit</span><span class="ta">உரிமம் பெற்ற PA / BBPS OU</span></div>
    <div class="mh-eg">Razorpay · Cashfree · PayU · Paytm for Business · NPCI-certified OU</div>
  </div>
  <div class="mh-arrow">→</div>
  <div>
    <div class="mh-label">Settlement rail</div>
    <div class="mh-name">NPCI → RBI → All Banks</div>
    <div class="mh-eg"><span class="en">UPI · IMPS · NEFT · RTGS · Aadhaar Pay</span><span class="ta">UPI · IMPS · NEFT · RTGS · Aadhaar Pay</span></div>
  </div>
</div>`
},

/* ── 03 PYRAMID ─────────────────────────────────────────────────── */
{
  id:'pyramid', chapter:'ecosystem', theme:'dark2',
  nav:{ en:'The Pyramid', ta:'படிநிலை' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">03 — Ecosystem</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>India's payment <em>hierarchy</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Every rupee you move passes through this exact chain. Know where you sit — and what the entity above you can demand.</span>
  <span class="ta">நீங்கள் நகர்த்தும் ஒவ்வொரு ரூபாயும் இந்த சரியான சங்கிலியின் வழியாகவே செல்கிறது.</span>
</p>

<div class="pyramid" data-stagger>
  <div class="py-row">
    <div class="py-block" style="width:22%;background:linear-gradient(135deg,#7c3aed,#9333ea)">
      <div class="py-t">RBI / NPCI</div>
      <div class="py-s"><span class="en">Regulator &amp; Network</span><span class="ta">ஒழுங்குமுறை &amp; நெட்வொர்க்</span></div>
    </div>
    <div class="py-arr">↓</div>
  </div>
  <div class="py-row">
    <div class="py-block" style="width:38%;background:linear-gradient(135deg,#b8860b,#e0a820)">
      <div class="py-t"><span class="en">Licensed PA / BBPS OU</span><span class="ta">உரிமம் பெற்ற PA / BBPS OU</span></div>
      <div class="py-s"><span class="en">RBI authorised · nodal account · escrow</span><span class="ta">RBI அங்கீகரிக்கப்பட்டது</span></div>
      <div class="py-m">Razorpay · Cashfree · PayU · CCAvenue</div>
    </div>
    <div class="py-arr">↓</div>
  </div>
  <div class="py-row">
    <div class="py-block" style="width:54%;background:linear-gradient(135deg,#c85a2a,#e8704a)">
      <div class="py-t"><span class="en">White-Label Gateway / Tech Reseller</span><span class="ta">White-Label Gateway / Tech Reseller</span></div>
      <div class="py-s"><span class="en">TSP compliant · no nodal account · branded checkout</span><span class="ta">TSP இணக்கம் · nodal account இல்லை</span></div>
      <div class="py-m">₹2L – ₹10L · 2 – 4 months</div>
    </div>
    <div class="py-arr">↓</div>
  </div>
  <div class="py-row">
    <div class="py-block" style="width:70%;background:linear-gradient(135deg,#1a6b4a,#22a067)">
      <div class="py-t"><span class="en">API Reseller / Sub-merchant Aggregator</span><span class="ta">API Reseller / Sub-merchant Aggregator</span></div>
      <div class="py-s"><span class="en">Commission-based · merchant on-boarding agent</span><span class="ta">கமிஷன் அடிப்படையிலானது · merchant on-boarding agent</span></div>
      <div class="py-m">₹1L – ₹5L · 1 – 3 months</div>
    </div>
    <div class="py-arr">↓</div>
  </div>
  <div class="py-row">
    <div class="py-block" style="width:86%;background:linear-gradient(135deg,#1c4d8a,#2563eb)">
      <div class="py-t"><span class="en">BBPS / AEPS Distributor / Retailer</span><span class="ta">BBPS / AEPS விநியோகஸ்தர் / சில்லறை விற்பனையாளர்</span></div>
      <div class="py-s"><span class="en">Last-mile operator · NPCI OU agreement · no RBI PA licence needed</span><span class="ta">கடைசி-மைல் ஆபரேட்டர்</span></div>
      <div class="py-m">₹30K – ₹1.5L · 3 – 6 weeks</div>
    </div>
  </div>
</div>`
},

/* ── 04 GREY ZONE ───────────────────────────────────────────────── */
{
  id:'greyzone', chapter:'ecosystem', theme:'dark',
  nav:{ en:'Grey Zone', ta:'சாம்பல் மண்டலம்' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">04 — Ecosystem</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>The grey zone & <em>shadow risks</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Activities that look legal but trip regulatory wires. These are the exact patterns RBI enforcement actions target.</span>
  <span class="ta">சட்டபூர்வமாகத் தெரியும் ஆனால் ஒழுங்குமுறை கம்பிகளை தட்டும் செயல்பாடுகள்.</span>
</p>

<div class="risk-grid" data-stagger>
  <div class="risk-card">
    <h4>⛔ <span class="en">Unlicensed Fund Collection</span><span class="ta">உரிமம் இல்லாத நிதி சேகரிப்பு</span></h4>
    <p><span class="en">Collecting merchant funds into your own bank account and re-disbursing — even briefly — constitutes acting as a PA without a licence. RBI imposes penalties up to ₹10 Cr plus criminal prosecution under PMLA.</span><span class="ta">வணிகர் நிதியை உங்கள் சொந்த வங்கி கணக்கில் சேகரித்து மீண்டும் வழங்குவது — PA உரிமம் இல்லாமல் செயல்படுவதற்கு சமம்.</span></p>
  </div>
  <div class="risk-card">
    <h4>⛔ <span class="en">Unofficial White-Label Deals</span><span class="ta">அரசாங்கமற்ற White-Label ஒப்பந்தங்கள்</span></h4>
    <p><span class="en">Reselling payment services without a signed Merchant Service Agreement or TSP agreement with the underlying PA. The PA can terminate at zero notice, stranding your merchant base overnight.</span><span class="ta">அடிப்படை PA உடன் கையொப்பமிட்ட ஒப்பந்தம் இல்லாமல் payment சேவைகளை மறுவிற்பனை செய்வது.</span></p>
  </div>
  <div class="risk-card">
    <h4>⚠️ <span class="en">MDR Pass-Through Abuse</span><span class="ta">MDR Pass-Through துஷ்பிரயோகம்</span></h4>
    <p><span class="en">Charging merchants fees above the MDR contracted with your upstream PA — or retaining interchange without disclosure — violates RBI's pricing transparency rules and merchant MSA terms.</span><span class="ta">உங்கள் upstream PA உடன் ஒப்பந்தப்படுத்தப்பட்ட MDR-ஐ விட வணிகர்களிடம் அதிக கட்டணம் வசூலிப்பது.</span></p>
  </div>
  <div class="risk-card">
    <h4>⚠️ <span class="en">Non-compliant BBPS Aggregation</span><span class="ta">இணக்கமற்ற BBPS திரட்டல்</span></h4>
    <p><span class="en">Offering BBPS bill collection without being registered as an Agent Institution under a certified Operating Unit. NPCI blocks transaction access; recovery of stuck funds can take 6–12 months.</span><span class="ta">சான்றளிக்கப்பட்ட Operating Unit கீழ் Agent Institution ஆக பதிவு செய்யாமல் BBPS பில் சேகரிப்பை வழங்குவது.</span></p>
  </div>
</div>

<div class="alert-box" data-reveal>
  <strong>🚨 <span class="en">The enforcement pattern</span><span class="ta">அமல்படுத்தல் முறை</span></strong>
  <p><span class="en">RBI's 2023–24 enforcement actions shared a common thread: operators who scaled first and sought regulatory clarity second. The typical sequence is:</span><span class="ta">RBI-ன் 2023–24 அமல்படுத்தல் நடவடிக்கைகள் பொதுவான நூலை பகிர்ந்தன.</span></p>
  <ul>
    <li><span class="en">Freeze on nodal / escrow account (immediate stoppage of merchant settlements)</span><span class="ta">Nodal / escrow கணக்கில் முடக்கம் (வணிகர் தீர்வுகள் உடனடியாக நிறுத்தப்படுகின்றன)</span></li>
    <li><span class="en">Direction to wind-down merchant on-boarding within 30–90 days</span><span class="ta">30–90 நாட்களுக்குள் merchant on-boarding-ஐ நிறுத்துமாறு அறிவுறுத்தல்</span></li>
    <li><span class="en">Penalty notice + show-cause under PSS Act Section 30</span><span class="ta">PSS Act பிரிவு 30-ன் கீழ் அபராதம் + காரண விளக்க அறிவிப்பு</span></li>
  </ul>
</div>`
},

/* ── 05 SHADOW ZONE ─────────────────────────────────────────────── */
{
  id:'shadow', chapter:'ecosystem', theme:'dark',
  nav:{ en:'Shadow Zone', ta:'நிழல் மண்டலம்' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">05 — Ecosystem</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>The <em>shadow zone</em> — what operators actually do</h2>
<p class="s-desc" data-reveal>
  <span class="en">Between licensed PAs and pure tech gateways lies a grey corridor of operators who look like payment companies but aren't authorised to collect and pool funds. Here's the full anatomy — including what happens when RBI finds out.</span>
  <span class="ta">உரிமம் பெற்ற PA-களுக்கும் தூய tech gateways-க்கும் இடையில், பணம் சேகரிக்கவும் ஒன்றாக்கவும் அங்கீகரிக்கப்படாத ஆபரேட்டர்களின் ஒரு சாம்பல் வழி உள்ளது.</span>
</p>

<h3 class="s-sub-title" data-reveal><span class="en">✅ Legal use — bank escrow accounts</span><span class="ta">✅ சட்டபூர்வ பயன்பாடு — வங்கி எஸ்க்ரோ கணக்குகள்</span></h3>
<div class="compare-grid" data-stagger style="margin-bottom:2.5rem">
  <div class="cmp-card pg">
    <div class="cmp-badge">🏦 <span class="en">Legal use cases for escrow</span><span class="ta">எஸ்க்ரோவிற்கான சட்டபூர்வ பயன்பாடுகள்</span></div>
    <ul class="shadow-list">
      <li><span class="en">🛒 E-commerce — hold payment until delivery confirmed</span><span class="ta">🛒 ஈ-காமர்ஸ் — டெலிவரி உறுதிப்படுத்தும் வரை பணம் வைத்திருத்தல்</span></li>
      <li><span class="en">🏠 Real estate — token advance till registration</span><span class="ta">🏠 ரியல் எஸ்டேட் — பதிவு வரை token advance</span></li>
      <li><span class="en">💼 Freelance milestone payments</span><span class="ta">💼 Freelance milestone பணங்கள்</span></li>
      <li><span class="en">🌱 Crowdfunding — hold until target reached</span><span class="ta">🌱 Crowdfunding — இலக்கை அடையும் வரை வைத்திருத்தல்</span></li>
    </ul>
  </div>
  <div class="cmp-card pa">
    <div class="cmp-badge">📋 <span class="en">What the bank requires</span><span class="ta">வங்கி என்ன தேவைப்படுகிறது</span></div>
    <ul class="shadow-list">
      <li><span class="en">✦ Certificate of Incorporation (CoI)</span><span class="ta">✦ நிறுவன சான்றிதழ்</span></li>
      <li><span class="en">✦ MoA + AoA with escrow as object clause</span><span class="ta">✦ MoA + AoA-ல் escrow நோக்கம் சேர்க்கப்பட வேண்டும்</span></li>
      <li><span class="en">✦ Signed escrow agreement (3-party)</span><span class="ta">✦ கையொப்பமிட்ட 3-தரப்பு escrow ஒப்பந்தம்</span></li>
      <li><span class="en">✦ Clear disbursement triggers defined</span><span class="ta">✦ தெளிவான பணம் வழங்கும் நிபந்தனைகள்</span></li>
      <li><span class="en">✦ Must be a scheduled commercial bank</span><span class="ta">✦ திட்டமிட்ட வணிக வங்கியாக இருக்க வேண்டும்</span></li>
    </ul>
  </div>
</div>

<h3 class="s-sub-title" data-reveal><span class="en">⛔ The unlicensed PA clone — how it's detected</span><span class="ta">⛔ உரிமம் இல்லாத PA clone — இது எப்படி கண்டுபிடிக்கப்படுகிறது</span></h3>
<div class="compare-grid" data-stagger style="margin-bottom:2.5rem">
  <div class="cmp-card" style="border-color:rgba(239,68,68,0.3)">
    <div class="cmp-badge" style="background:rgba(239,68,68,0.15);color:#f87171">📱 <span class="en">How unlicensed operators work</span><span class="ta">உரிமம் இல்லாத ஆபரேட்டர்கள் எப்படி செயல்படுகிறார்கள்</span></div>
    <ul class="shadow-list">
      <li><span class="en">📱 Build a branded app or payment dashboard</span><span class="ta">📱 பிராண்டட் app அல்லது payment dashboard உருவாக்குதல்</span></li>
      <li><span class="en">💳 Accept UPI / cards via a "tech aggregation" contract</span><span class="ta">💳 "tech aggregation" ஒப்பந்தம் வழியாக UPI / cards ஏற்றுக்கொள்ளுதல்</span></li>
      <li><span class="en">🔄 Hold merchant balances in a corporate bank account</span><span class="ta">🔄 corporate வங்கி கணக்கில் வணிக இருப்புகளை வைத்திருத்தல்</span></li>
      <li><span class="en">📤 Settle to merchants via NEFT in batches</span><span class="ta">📤 NEFT மூலம் batch-ஆக வணிகர்களுக்கு தீர்வு செய்தல்</span></li>
      <li><span class="en">🏦 Pocket the MDR spread between upstream rate and charged rate</span><span class="ta">🏦 upstream rate-க்கும் வசூலிக்கப்படும் rate-க்கும் இடையிலான MDR spread-ஐ வைத்துக்கொள்ளுதல்</span></li>
    </ul>
  </div>
  <div class="cmp-card" style="border-color:rgba(239,68,68,0.3)">
    <div class="cmp-badge" style="background:rgba(239,68,68,0.15);color:#f87171">🚫 <span class="en">What makes it illegal</span><span class="ta">இது சட்டவிரோதமாக்குவது என்ன</span></div>
    <ul class="shadow-list">
      <li><span class="en">🚫 Collecting merchant funds without RBI authorisation</span><span class="ta">🚫 RBI அங்கீகரிப்பு இல்லாமல் வணிக நிதி சேகரிப்பு</span></li>
      <li><span class="en">🚫 Holding pooled funds in a personal/corporate (non-nodal) account</span><span class="ta">🚫 nodal அல்லாத கணக்கில் நிதியை வைத்திருத்தல்</span></li>
      <li><span class="en">🚫 Onboarding merchants without PA licence coverage</span><span class="ta">🚫 PA உரிமம் இல்லாமல் வணிகர்களை சேர்த்தல்</span></li>
      <li><span class="en">🚫 Operating a de-facto nodal account outside RBI framework</span><span class="ta">🚫 RBI கட்டமைப்பிற்கு வெளியே de-facto nodal கணக்கை இயக்குதல்</span></li>
      <li><span class="en">🚫 No AML / KYC compliance for onboarded merchants</span><span class="ta">🚫 வணிகர்களுக்கு AML / KYC இணக்கம் இல்லை</span></li>
    </ul>
  </div>
</div>

<div class="alert-box" data-reveal style="border-left-color:#ef4444;background:rgba(239,68,68,0.06)">
  <strong>⚖️ PSS Act 2007 — <span class="en">penalties for unauthorised operation</span><span class="ta">அங்கீகரிக்கப்படாத செயல்பாட்டிற்கான அபராதங்கள்</span></strong>
  <div class="risk-grid" style="margin-top:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
    <div class="risk-card" style="border-color:rgba(239,68,68,0.3)">
      <h4>💸 ₹10 Lakh</h4>
      <p><span class="en">Per violation fine under PSS Act Section 26</span><span class="ta">PSS Act பிரிவு 26-ன் கீழ் ஒவ்வொரு மீறலுக்கும்</span></p>
    </div>
    <div class="risk-card" style="border-color:rgba(239,68,68,0.3)">
      <h4>📅 ₹10,000/day</h4>
      <p><span class="en">For each day the violation continues after notice</span><span class="ta">அறிவிப்புக்கு பிறகு மீறல் தொடரும் ஒவ்வொரு நாளுக்கும்</span></p>
    </div>
    <div class="risk-card" style="border-color:rgba(239,68,68,0.3)">
      <h4>🔒 10 Years</h4>
      <p><span class="en">Imprisonment under Section 25 for operating unauthorised payment system</span><span class="ta">அங்கீகரிக்கப்படாத payment system இயக்குவதற்கு சிறைத்தண்டனை</span></p>
    </div>
    <div class="risk-card" style="border-color:rgba(239,68,68,0.3)">
      <h4>🧊 Account Freeze</h4>
      <p><span class="en">Instant freeze on all accounts + PMLA flag on directors personally</span><span class="ta">அனைத்து கணக்குகளிலும் உடனடி முடக்கம் + இயக்குநர்களுக்கு PMLA flag</span></p>
    </div>
  </div>
</div>

<div class="callout" data-reveal style="margin-top:2rem;background:rgba(239,68,68,0.06);border-left:3px solid #ef4444">
  <strong>🕵️ <span class="en">Real cases</span><span class="ta">உண்மையான வழக்குகள்</span></strong>
  <span class="en"> RBI shut down several unlicensed payment operators between 2020–2024. Several fintech founders in Bengaluru, Hyderabad, and Chennai were served show-cause notices. The trigger is almost always a bank SAR (Suspicious Activity Report) — usually filed when NEFT settlement batches pattern-match against AML rules. Directors faced personal passport impound orders in at least 3 documented cases.</span>
  <span class="ta"> RBI 2020–2024-க்கு இடையே பல உரிமம் இல்லாத payment ஆபரேட்டர்களை மூடியது. பெங்களூரு, ஹைதராபாத் மற்றும் சென்னையில் பல fintech நிறுவனர்களுக்கு காரண விளக்க அறிவிப்புகள் வழங்கப்பட்டன.</span>
</div>`
},

/* ── 06 COMPANY REGISTRATION ────────────────────────────────────── */
{
  id:'company', chapter:'company', theme:'light',
  nav:{ en:'Registration', ta:'பதிவு' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">06 — Company</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>Company <em>registration</em> steps</h2>
<p class="s-desc" data-reveal>
  <span class="en">Before any fintech licence, you need a legally incorporated company. Choose your entity type first, then follow the 8-step sequence — from DSC to GST. Average time: 15–25 working days.</span>
  <span class="ta">எந்த fintech உரிமத்திற்கும் முன்பு, சட்டப்பூர்வமாக பதிவு செய்யப்பட்ட நிறுவனம் தேவை. சராசரி நேரம்: 15–25 வேலை நாட்கள்.</span>
</p>

<div class="compare-grid" data-stagger style="margin-bottom:3rem">
  <div class="cmp-card pg">
    <div class="cmp-badge">🏛️ <span class="en">Private Limited (Pvt. Ltd.)</span><span class="ta">தனியார் வரையறுக்கப்பட்ட நிறுவனம்</span></div>
    <p><span class="en">The preferred structure for payment companies. Gives you limited liability, easier fundraising, and clear ownership. Requires minimum 2 directors and 2 shareholders.</span><span class="ta">பேமெண்ட் நிறுவனங்களுக்கு விரும்பப்படும் கட்டமைப்பு. வரையறுக்கப்பட்ட பொறுப்பு, எளிதான நிதி திரட்டல் வழங்குகிறது.</span></p>
    <div class="cmp-verdict"><span class="en">✅ <strong>Recommended for PA licence</strong> — structured ownership, easier RBI fit-and-proper assessment.</span><span class="ta">✅ <strong>PA உரிமத்திற்கு பரிந்துரைக்கப்படுகிறது</strong></span></div>
  </div>
  <div class="cmp-card pa">
    <div class="cmp-badge">📋 <span class="en">Public Limited Company</span><span class="ta">பொது வரையறுக்கப்பட்ட நிறுவனம்</span></div>
    <p><span class="en">Required if you plan to raise public capital or list on stock exchanges. Heavier compliance burden but allows unlimited shareholders. Needs minimum 3 directors.</span><span class="ta">பொது மூலதனம் திரட்ட திட்டமிட்டால் தேவை. கடுமையான இணக்கம் தேவை ஆனால் வரம்பற்ற பங்குதாரர்களை அனுமதிக்கிறது.</span></p>
    <div class="cmp-verdict"><span class="en">⚠️ <strong>Complex compliance</strong> — only choose if raising public capital or planning an IPO.</span><span class="ta">⚠️ <strong>சிக்கலான இணக்கம்</strong></span></div>
  </div>
</div>

<ol class="v-timeline" data-slide-left>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#3b82f6,#60a5fa)">01</div>
    <div class="vt-card">
      <div class="vt-h">DSC — Digital Signature Certificate</div>
      <p class="vt-p"><span class="en">Each proposed director needs a Class-3 DSC. Apply via MCA-empanelled agencies (e.DigiLocker, eMudhra, Sify). Requires Aadhaar OTP + PAN + video verification.</span><span class="ta">ஒவ்வொரு இயக்குனருக்கும் Class-3 DSC தேவை.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹2,500 – ₹4,000</span><span class="tag tag-time">1 – 2 days</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#9333ea,#c084fc)">02</div>
    <div class="vt-card">
      <div class="vt-h">DIN — Director Identification Number</div>
      <p class="vt-p"><span class="en">Apply for DIN via SPICe+ form (automatically allotted on incorporation) or standalone DIR-3. DIN is lifelong — one per person. Foreign nationals need apostilled documents.</span><span class="ta">SPICe+ படிவம் வழியாக DIN-க்கு விண்ணப்பிக்கவும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹500 gov fee</span><span class="tag tag-time">Same day if SPICe+</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#f97316,#fb923c)">03</div>
    <div class="vt-card">
      <div class="vt-h">Name Reservation — RUN / SPICe+</div>
      <p class="vt-p"><span class="en">Reserve up to 2 names via MCA RUN (Reserve Unique Name) service. Names must not resemble existing companies or trademarks. Avoid "Bank", "Insurance", "Pay" without RBI/IRDAI clearance.</span><span class="ta">MCA RUN சேவை வழியாக 2 பெயர்கள் வரை ஒதுக்கவும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹1,000 gov fee</span><span class="tag tag-time">1 – 3 days</span><span class="tag tag-warn">Avoid "Pay" without RBI NOC</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#22c55e,#4ade80)">04</div>
    <div class="vt-card">
      <div class="vt-h">Draft MoA &amp; AoA</div>
      <p class="vt-p"><span class="en">Memorandum of Association defines objects clause — must explicitly include "payment processing", "financial technology services", and "software development". AoA governs internal management. Use a CA/CS for fintech-specific clauses.</span><span class="ta">MoA இன் objects clause — "payment processing", "financial technology services"-ஐ வெளிப்படையாக சேர்க்க வேண்டும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹8,000 – ₹15,000 professional fee</span><span class="tag tag-time">2 – 4 days</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#ef4444,#f87171)">05</div>
    <div class="vt-card">
      <div class="vt-h">SPICe+ e-Form (MCA)</div>
      <p class="vt-p"><span class="en">Integrated incorporation form covering DIN allotment, name approval, PAN, TAN, EPFO, ESIC, and GST registration in one submission. Requires DSCs of all directors + subscriber sheet.</span><span class="ta">ஒரே சமர்ப்பிப்பில் DIN, பெயர் அனுமதி, PAN, TAN, EPFO, ESIC, மற்றும் GST பதிவை உள்ளடக்கிய ஒருங்கிணைந்த படிவம்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹2,000 – ₹12,000 gov fee (capital-based)</span><span class="tag tag-time">3 – 7 days</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#eab308,#facc15)">06</div>
    <div class="vt-card">
      <div class="vt-h">Certificate of Incorporation (CoI)</div>
      <p class="vt-p"><span class="en">ROC (Registrar of Companies) issues CoI with CIN. This is your company's birth certificate. CIN format: U[NIC Code][State][Year][PVT][Number]. Keep the original safe — needed for every licence application.</span><span class="ta">ROC CoI-ஐ CIN உடன் வழங்குகிறது. ஒவ்வொரு உரிமம் விண்ணப்பத்திற்கும் இது தேவை.</span></p>
      <div class="vt-meta"><span class="tag tag-ok">Issued within SPICe+ timeline</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#14b8a6,#2dd4bf)">07</div>
    <div class="vt-card">
      <div class="vt-h">Current Account Opening</div>
      <p class="vt-p"><span class="en">Open a current account in the company name. For fintech: prefer banks with API banking (ICICI iMobile Biz, Kotak, Yes Bank, Axis) for future nodal/escrow account setup. Requires CoI, MoA/AoA, PAN, address proof.</span><span class="ta">நிறுவன பெயரில் நடப்பு கணக்கை திறக்கவும். Fintech-க்காக API வங்கியுடன் வங்கிகளை விரும்புங்கள்.</span></p>
      <div class="vt-meta"><span class="tag tag-time">3 – 7 days</span><span class="tag tag-cost">₹10,000 – ₹25,000 min balance</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#ec4899,#f472b6)">08</div>
    <div class="vt-card">
      <div class="vt-h">GST Registration</div>
      <p class="vt-p"><span class="en">GST is mandatory for fintech services before first invoice. Apply on GST portal with CIN, PAN, bank statement, and director Aadhaar. ARN issued within 3 working days; GSTIN within 7.</span><span class="ta">முதல் invoice-க்கு முன் fintech சேவைகளுக்கு GST கட்டாயம்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">No fee</span><span class="tag tag-time">5 – 10 days</span><span class="tag tag-ok">Auto-filed via SPICe+ often</span></div>
    </div>
  </li>
</ol>`
},

/* ── 06 COSTS ───────────────────────────────────────────────────── */
{
  id:'costs', chapter:'company', theme:'dark',
  nav:{ en:'Costs', ta:'செலவுகள்' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">06 — Company</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>What it actually <em>costs</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Government fees, professional fees, and compliance costs — year one vs. the full PA path. Choose your weight class before building.</span>
  <span class="ta">அரசாங்கக் கட்டணங்கள், தொழில்முறை கட்டணங்கள், மற்றும் இணக்க செலவுகள் — முதல் ஆண்டு vs. முழு PA பாதை.</span>
</p>

<div class="cost-grid" data-stagger>
  <div class="cost-card pg">
    <div class="cost-type">PG / Reseller Route</div>
    <div class="cost-lbl"><span class="en">Estimated total (Year 1)</span><span class="ta">மதிப்பிடப்பட்ட மொத்தம் (ஆண்டு 1)</span></div>
    <div class="cost-num">₹2.5L – ₹12L</div>
    <div class="cost-sub"><span class="en">Depends on model (distributor vs. white-label)</span><span class="ta">மாதிரியைப் பொறுத்தது</span></div>
    <ul class="cost-rows">
      <li><span>Company registration (SPICe+)</span><span>₹3K – ₹15K</span></li>
      <li><span>Legal / CA fees</span><span>₹10K – ₹30K</span></li>
      <li><span>PA partner onboarding fee</span><span>₹50K – ₹2L</span></li>
      <li><span>Tech development / integration</span><span>₹1L – ₹8L</span></li>
      <li><span>Compliance (GST, TDS)</span><span>₹20K – ₹50K / yr</span></li>
      <li><span>Security audit (PCI-DSS basic)</span><span>₹50K – ₹1.5L</span></li>
    </ul>
    <div class="cost-note"><span class="en">✅ No RBI capital requirement. Fastest path to market. Revenue from Day 30–60.</span><span class="ta">✅ RBI மூலதன தேவை இல்லை. சந்தைக்கான வேகமான பாதை.</span></div>
  </div>
  <div class="cost-card pa">
    <div class="cost-type">Full PA Licence Route</div>
    <div class="cost-lbl"><span class="en">Estimated total (Year 1–3)</span><span class="ta">மதிப்பிடப்பட்ட மொத்தம் (ஆண்டு 1–3)</span></div>
    <div class="cost-num">₹15Cr+</div>
    <div class="cost-sub"><span class="en">Net worth requirement alone + ₹50L–₹2Cr operating costs</span><span class="ta">நிகர மதிப்பு தேவை மட்டுமே + ₹50L–₹2Cr இயக்க செலவுகள்</span></div>
    <ul class="cost-rows">
      <li><span>Net worth at application</span><span>₹15 Cr min</span></li>
      <li><span>Net worth by Year 3</span><span>₹25 Cr min</span></li>
      <li><span>Nodal account escrow</span><span>Varies (float)</span></li>
      <li><span>Tech infra (PCI-DSS L1)</span><span>₹50L – ₹2Cr</span></li>
      <li><span>Legal / regulatory counsel</span><span>₹20L – ₹80L</span></li>
      <li><span>RBI application fee</span><span>₹10,000 (nominal)</span></li>
    </ul>
    <div class="cost-note"><span class="en">⚠️ RBI in-principle approval takes 6–18 months. Full authorisation another 12–24 months. Total runway: 3–4 years.</span><span class="ta">⚠️ RBI in-principle அனுமதி 6–18 மாதங்கள் ஆகும்.</span></div>
  </div>
</div>`
},

/* ── 07 RBI LICENCE ─────────────────────────────────────────────── */
{
  id:'license', chapter:'licensing', theme:'light',
  nav:{ en:'RBI Licence', ta:'RBI உரிமம்' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">07 — Licensing</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>The PA licence <em>journey</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Five checkpoints from existing PA to RBI authorisation. Each gate must be cleared before the next opens. Missing documentation at any stage resets the clock.</span>
  <span class="ta">ஐந்து சோதனை நிலையங்கள். ஒவ்வொரு நுழைவாயிலும் திறக்கப்படுவதற்கு முன்பு தீர்க்கப்பட வேண்டும்.</span>
</p>

<div class="lic-steps" data-stagger>
  <div class="lic-step">
    <div class="lic-badge">A</div>
    <div class="lic-body">
      <h4><span class="en">Existing PA Assessment (DPIIT / RBI Circular)</span><span class="ta">ஏற்கனவே உள்ள PA மதிப்பீடு</span></h4>
      <p><span class="en">If you already operate as a PA (pre-2020 guidelines), assess your compliance gap against RBI's March 2020 PA/PG circular. Key gaps: net worth, data localisation, KYC standards, grievance redressal.</span><span class="ta">ஏற்கனவே PA ஆக செயல்படுகிறீர்கள் என்றால், RBI-ன் மார்ச் 2020 PA/PG சுற்றறிக்கைக்கு எதிராக உங்கள் இணக்க இடைவெளியை மதிப்பிடுங்கள்.</span></p>
      <div class="vt-meta"><span class="tag tag-time">1 – 3 months for gap analysis</span></div>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">B</div>
    <div class="lic-body">
      <h4><span class="en">Net Worth Documentation</span><span class="ta">நிகர மதிப்பு ஆவணப்படுத்தல்</span></h4>
      <p><span class="en">Statutory auditor's certificate confirming ≥ ₹15 Cr net worth (paid-up capital + free reserves – accumulated losses – intangibles). RBI rejects photocopies — original signed CA certificate required.</span><span class="ta">₹15 கோடி நிகர மதிப்பை உறுதிப்படுத்தும் ஆவணங்கள்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹15 Cr minimum capital</span><span class="tag tag-warn">Original CA certificate only</span></div>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">C</div>
    <div class="lic-body">
      <h4><span class="en">Application Filing on PRAVAAH Portal</span><span class="ta">PRAVAAH போர்டலில் விண்ணப்பம்</span></h4>
      <p><span class="en">RBI's PRAVAAH portal accepts online PA applications. Checklist: MoA (fintech objects), last 3 years audited financials, IT security audit report, business plan (5 years), board resolution, KYC officer appointment.</span><span class="ta">RBI-ன் PRAVAAH போர்டல் online PA விண்ணப்பங்களை ஏற்கிறது. Checklist: MoA, கடந்த 3 ஆண்டுகளின் தணிக்கை நிதி அறிக்கைகள்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹10,000 application fee</span><span class="tag tag-time">2 – 4 weeks to prepare</span></div>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">D</div>
    <div class="lic-body">
      <h4><span class="en">In-Principle Approval (IPA)</span><span class="ta">கொள்கை அளவிலான அனுமதி</span></h4>
      <p><span class="en">RBI reviews the application and may issue an IPA — conditional go-ahead to operationalise. IPA is valid for 180 days. During IPA period: complete IT audit, appoint Nodal Officer, implement AML system, set up escrow with a scheduled bank.</span><span class="ta">RBI விண்ணப்பத்தை மதிப்பாய்வு செய்கிறது மற்றும் IPA வழங்கலாம். IPA 180 நாட்களுக்கு செல்லுபடியாகும்.</span></p>
      <div class="vt-meta"><span class="tag tag-time">6 – 18 months wait</span><span class="tag tag-warn">No guarantee of IPA</span></div>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">E</div>
    <div class="lic-body">
      <h4><span class="en">Final Authorisation Certificate</span><span class="ta">இறுதி அங்கீகார சான்றிதழ்</span></h4>
      <p><span class="en">After IPA conditions are met: RBI site inspection + compliance certificate from CA + IT security audit from CERT-In empanelled auditor → Certificate of Authorisation issued under PSS Act Section 7. Renewable every 5 years.</span><span class="ta">IPA நிபந்தனைகள் பூர்த்தியான பிறகு: RBI தள ஆய்வு → PSS Act பிரிவு 7-ன் கீழ் அங்கீகார சான்றிதழ் வழங்கப்படுகிறது.</span></p>
      <div class="vt-meta"><span class="tag tag-time">12 – 24 months after IPA</span><span class="tag tag-ok">Renewable every 5 years</span></div>
    </div>
  </div>
</div>`
},

/* ── 08 PAYOUT ACCOUNT ──────────────────────────────────────────── */
{
  id:'payout', chapter:'licensing', theme:'light',
  nav:{ en:'Payout Account', ta:'Payout கணக்கு' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">08 — Licensing</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>Payout &amp; <em>settlement accounts</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Even as a reseller, understanding nodal and escrow accounts is non-negotiable. Your licensed PA partner's account structure determines your settlement timing and risk exposure.</span>
  <span class="ta">மறுவிற்பனையாளராக இருந்தாலும், nodal மற்றும் escrow கணக்குகளைப் புரிந்துகொள்வது கட்டாயம்.</span>
</p>

<div class="payout-grid" data-stagger>
  <div class="payout-card">
    <div class="pc-icon">🏛️</div>
    <div class="pc-title"><span class="en">Nodal Account</span><span class="ta">Nodal கணக்கு</span></div>
    <p class="pc-desc"><span class="en">A designated current account at a scheduled bank. All customer payments collected by a PA flow here first. Funds are held up to T+1 (UPI) or T+3 (cards) before settlement to merchants. RBI audits the balance monthly.</span><span class="ta">திட்டமிட்ட வங்கியில் நியமிக்கப்பட்ட நடப்பு கணக்கு. PA சேகரிக்கும் வாடிக்கையாளர் பணம் முதலில் இங்கு வருகிறது.</span></p>
  </div>
  <div class="payout-card">
    <div class="pc-icon">🔒</div>
    <div class="pc-title"><span class="en">Escrow Account</span><span class="ta">Escrow கணக்கு</span></div>
    <p class="pc-desc"><span class="en">A trust account operated by a scheduled bank as escrow agent. Funds in escrow cannot be used for operating expenses. Required for marketplace PA licences where buyer pays before goods are shipped.</span><span class="ta">Escrow agent ஆக திட்டமிட்ட வங்கியால் நடத்தப்படும் trust கணக்கு. Escrow-ல் உள்ள நிதி இயக்க செலவுகளுக்கு பயன்படுத்த முடியாது.</span></p>
  </div>
  <div class="payout-card">
    <div class="pc-icon">⚡</div>
    <div class="pc-title"><span class="en">Instant Payout APIs</span><span class="ta">உடனடி Payout APIs</span></div>
    <p class="pc-desc"><span class="en">IMPS and UPI payouts settle 24×7 in seconds. NEFT settles in 30-min batches. Use instant payout APIs (Razorpay X, Cashfree Payouts) to disburse to contractors, gig workers, and B2B vendors.</span><span class="ta">IMPS மற்றும் UPI payouts நொடிகளில் 24×7 தீர்க்கப்படுகின்றன. NEFT 30 நிமிட தொகுதிகளில் தீர்க்கப்படுகிறது.</span></p>
  </div>
</div>

<div class="lic-steps" data-stagger>
  <div class="lic-step">
    <div class="lic-badge">P1</div>
    <div class="lic-body">
      <h4><span class="en">Choose your PA partner's settlement T+N</span><span class="ta">உங்கள் PA பங்காளியின் settlement T+N-ஐ தேர்ந்தெடுக்கவும்</span></h4>
      <p><span class="en">T+1 for UPI; T+2 for cards and net banking. Negotiate T+1 all-instruments if your GMV exceeds ₹10L/month — most PAs concede this above that threshold.</span><span class="ta">UPI-க்கு T+1; cards மற்றும் net banking-க்கு T+2. உங்கள் GMV ₹10L/மாதம் தாண்டினால் T+1 all-instruments பேரம் பேசவும்.</span></p>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">P2</div>
    <div class="lic-body">
      <h4><span class="en">Set up a dedicated settlement account</span><span class="ta">அர்ப்பணிக்கப்பட்ட settlement கணக்கை அமைக்கவும்</span></h4>
      <p><span class="en">Separate your settlement inflows from operating expenses. API-banking-enabled account (ICICI Emerald, Kotak Startup, RBL Business) lets you auto-sweep and segregate by customer ID.</span><span class="ta">உங்கள் settlement inflows-ஐ இயக்க செலவுகளிலிருந்து பிரித்து வைக்கவும்.</span></p>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">P3</div>
    <div class="lic-body">
      <h4><span class="en">Integrate payout API for disbursements</span><span class="ta">வழங்கல்களுக்கு payout API-ஐ ஒருங்கிணைக்கவும்</span></h4>
      <p><span class="en">Use Razorpay X Payouts, Cashfree Payouts, or Decentro for IMPS/NEFT/UPI payouts. Webhook-driven architecture — payment event triggers payout job; idempotency keys prevent double-disbursements.</span><span class="ta">IMPS/NEFT/UPI payouts-க்கு Razorpay X, Cashfree Payouts அல்லது Decentro பயன்படுத்தவும்.</span></p>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">P4</div>
    <div class="lic-body">
      <h4><span class="en">Implement reconciliation</span><span class="ta">Reconciliation-ஐ செயல்படுத்தவும்</span></h4>
      <p><span class="en">Daily reconciliation between payment gateway MIS reports, your ledger, and bank statement. Mismatches above ₹500 must be investigated within 24h per RBI guidelines. Use automated recon tools (Cashfree recon, Razorpay MIS API).</span><span class="ta">Payment gateway MIS அறிக்கைகள், உங்கள் ledger, மற்றும் வங்கி அறிக்கையிடல் இடையே தினசரி reconciliation.</span></p>
    </div>
  </div>
  <div class="lic-step">
    <div class="lic-badge">P5</div>
    <div class="lic-body">
      <h4><span class="en">Maintain refund reserves</span><span class="ta">Refund reserves பராமரிக்கவும்</span></h4>
      <p><span class="en">Keep 3–5% of monthly GMV in a liquid reserve for refunds and chargebacks. Failure to honour chargebacks within 30 days triggers your PA to freeze settlement — the single biggest operational risk for new fintech operators.</span><span class="ta">Refunds மற்றும் chargebacks-க்காக மாதாந்திர GMV-ன் 3–5% திரவ இருப்பில் வைக்கவும்.</span></p>
      <div class="vt-meta"><span class="tag tag-warn">Chargeback freeze risk if ignored</span></div>
    </div>
  </div>
</div>`
},

/* ── 09 WALLET / TECHNICAL ──────────────────────────────────────── */
{
  id:'wallet', chapter:'technical', theme:'dark',
  nav:{ en:'Wallet Architecture', ta:'வாலட் கட்டமைப்பு' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">09 — Technical</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>Wallet &amp; prepaid <em>architecture</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">If you want a customer wallet (stored value), you need a Prepaid Payment Instrument licence — or integrate with a licensed PPI issuer. Here's the exact flow.</span>
  <span class="ta">வாடிக்கையாளர் wallet வேண்டுமெனில், Prepaid Payment Instrument உரிமம் தேவை — அல்லது உரிமம் பெற்ற PPI issuer உடன் ஒருங்கிணைக்கவும்.</span>
</p>

<div class="flow-diag" data-reveal>
  <div class="flow-row">
    <div class="flow-box"><div class="fb-lbl"><span class="en">Customer</span><span class="ta">வாடிக்கையாளர்</span></div><div class="fb-val">📱 App / Web</div></div>
    <div class="flow-arr">→</div>
    <div class="flow-box"><div class="fb-lbl"><span class="en">Your App Layer</span><span class="ta">உங்கள் App அடுக்கு</span></div><div class="fb-val">💻 UX + Wallet UI</div></div>
    <div class="flow-arr">→</div>
    <div class="flow-box"><div class="fb-lbl"><span class="en">PPI Issuer</span><span class="ta">PPI Issuer</span></div><div class="fb-val">🏦 Wallet engine (Udio / Fino)</div></div>
  </div>
  <div class="flow-join"></div>
  <div class="flow-row">
    <div class="flow-box"><div class="fb-lbl"><span class="en">Load (top-up)</span><span class="ta">ஏற்றம்</span></div><div class="fb-val">UPI / Card → Nodal</div></div>
    <div class="flow-arr">→</div>
    <div class="flow-box"><div class="fb-lbl"><span class="en">Hold (balance)</span><span class="ta">இருப்பு</span></div><div class="fb-val">Escrow / Ledger</div></div>
    <div class="flow-arr">→</div>
    <div class="flow-box"><div class="fb-lbl"><span class="en">Spend / Redeem</span><span class="ta">செலவு</span></div><div class="fb-val">PA settlement rail</div></div>
  </div>
  <div class="flow-join"></div>
  <div class="flow-row">
    <div class="flow-box" style="flex:3"><div class="fb-lbl"><span class="en">Underlying rails</span><span class="ta">அடிப்படை rails</span></div><div class="fb-val">NPCI (UPI · IMPS · RuPay) + NACH for recurring</div></div>
  </div>
</div>

<div class="alert-box" data-reveal>
  <strong>⚠️ <span class="en">KYC tiers matter</span><span class="ta">KYC அடுக்குகள் முக்கியம்</span></strong>
  <p><span class="en">PPI wallets have 3 KYC tiers: <strong>Minimum KYC</strong> (₹10K balance, ₹1L/year spend limit, mobile OTP only) · <strong>Full KYC</strong> (Aadhaar + PAN, unlimited) · <strong>Gift/Closed loop</strong> (no KYC, ₹10K limit, issuer-specific).</span><span class="ta">PPI wallets-ல் 3 KYC அடுக்குகள் உள்ளன.</span></p>
</div>`
},

/* ── 10 BANK APIs ───────────────────────────────────────────────── */
{
  id:'bankapi', chapter:'technical', theme:'light',
  nav:{ en:'Bank APIs', ta:'வங்கி APIs' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">10 — Technical</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>India's payment <em>rails &amp; APIs</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">Four core settlement rails power every rupee transaction in India. Know which one to use — based on speed, availability, and ticket size.</span>
  <span class="ta">இந்தியாவில் ஒவ்வொரு ரூபாய் பரிவர்த்தனையையும் நான்கு core settlement rails இயக்குகின்றன.</span>
</p>

<div class="api-grid" data-stagger>
  <div class="api-card">
    <div class="api-icon">⚡</div>
    <div class="api-name">IMPS</div>
    <p class="api-desc"><span class="en">Immediate Payment Service — NPCI's real-time gross settlement rail. 24×7×365, bank holidays included. Limit: ₹5L per transaction. Ideal for P2P, gig worker payouts, and urgent B2B.</span><span class="ta">உடனடி செலுத்துதல் சேவை — NPCI-ன் real-time gross settlement rail. 24×7×365, வங்கி விடுமுறைகள் உட்பட. வரம்பு: ₹5L/பரிவர்த்தனை.</span></p>
    <div class="vt-meta"><span class="tag tag-ok">24×7 real-time</span><span class="tag tag-cost">₹5L limit</span></div>
  </div>
  <div class="api-card">
    <div class="api-icon">📱</div>
    <div class="api-name">UPI</div>
    <p class="api-desc"><span class="en">Unified Payments Interface — NPCI's VPA-based overlay on IMPS. P2P limit ₹1L; P2M up to ₹5L (RBI circular, 2023). Zero MDR for P2M UPI. 24×7, sub-10-second settlement. Dominant rail for consumer fintech.</span><span class="ta">Unified Payments Interface — NPCI-ன் VPA-based overlay. P2P வரம்பு ₹1L; P2M ₹5L வரை. Consumer fintech-க்கான ஆதிக்க rail.</span></p>
    <div class="vt-meta"><span class="tag tag-ok">Zero MDR (P2M)</span><span class="tag tag-cost">₹5L max</span></div>
  </div>
  <div class="api-card">
    <div class="api-icon">🏦</div>
    <div class="api-name">NEFT</div>
    <p class="api-desc"><span class="en">National Electronic Funds Transfer — RBI-operated, 30-minute batches, 24×7. No upper limit per transaction (unlike IMPS). Used for payroll, vendor disbursements, and high-value periodic payouts. Transactions older than T+2 auto-return.</span><span class="ta">National Electronic Funds Transfer — RBI-operated, 30 நிமிட தொகுதிகள், 24×7. பரிவர்த்தனைக்கு மேல் வரம்பு இல்லை.</span></p>
    <div class="vt-meta"><span class="tag tag-ok">No upper limit</span><span class="tag tag-time">30-min batches</span></div>
  </div>
  <div class="api-card">
    <div class="api-icon">🚀</div>
    <div class="api-name">RTGS</div>
    <p class="api-desc"><span class="en">Real-Time Gross Settlement — RBI-operated, instant final settlement for high-value transactions. Minimum ₹2L, no maximum. 24×7 since Dec 2020. Each transaction settles individually (gross), not in batches. Used for property deals, business acquisitions, large B2B.</span><span class="ta">Real-Time Gross Settlement — ₹2L குறைந்தபட்சம். நொடிகளில் இறுதி தீர்வு. சொத்து ஒப்பந்தங்கள், B2B-க்கு பயன்படுத்தப்படுகிறது.</span></p>
    <div class="vt-meta"><span class="tag tag-ok">24×7 instant final</span><span class="tag tag-cost">₹2L minimum</span></div>
  </div>
</div>

<div class="callout" data-reveal style="margin-top:2.5rem">
  <strong><span class="en">Choosing the right rail</span><span class="ta">சரியான rail தேர்வு</span></strong>
  <span class="en"> — Use UPI for ≤ ₹1L consumer transactions (zero MDR, fastest UX). Use IMPS for ₹1L–₹5L payouts needing instant settlement. Use NEFT for payroll and large-batch disbursements. Use RTGS only for ≥ ₹2L single-leg settlements where finality matters most.</span>
  <span class="ta"> — ₹1L வரையான consumer பரிவர்த்தனைகளுக்கு UPI பயன்படுத்தவும். ₹1L–₹5L payouts-க்கு IMPS. Payroll-க்கு NEFT. ₹2L+ single-leg settlements-க்கு RTGS.</span>
</div>`
}

]; // end window.SECTIONS
