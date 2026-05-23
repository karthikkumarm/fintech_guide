/* ================================================================
   data.js — Section content for fintech_guide
   All HTML templates + CHAPTERS / SECTIONS globals
================================================================ */

window.CHAPTERS = [
  { id:'ecosystem', emoji:'📐', label:{en:'Ecosystem',  ta:'சுற்றுச்சூழல்'}, sections:['distinction','resellers','pyramid','greyzone','shadow'] },
  { id:'company',   emoji:'🏛️', label:{en:'Company',    ta:'நிறுவனம்'},       sections:['company','costs'] },
  { id:'licensing', emoji:'📋', label:{en:'Licensing',  ta:'உரிமம்'},         sections:['license','payout'] },
  { id:'technical', emoji:'⚙️', label:{en:'Technical',  ta:'தொழில்நுட்பம்'}, sections:['wallet','bankapi'] },
  { id:'cardswipe', emoji:'💳', label:{en:'Card Swipe', ta:'கார்டு ஸ்வைப்'},  sections:['cardswipe'] }
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
</div>

<div class="callout-pe" data-reveal>
  <div class="pe-label">💡 In plain English</div>
  <span class="en">A <strong>Payment Gateway (PG)</strong> is like an electricity cable — it moves money from A to B but never stores it. A <strong>Payment Aggregator (PA)</strong> is like the electricity board — it actually receives money from many people, holds it in a regulated account, and distributes it to recipients. The cable needs no licence. The electricity board does. If you want to move money without touching it → PG. If you're going to hold it even briefly → you are a PA and need a licence.</span>
  <span class="ta">PG என்பது ஒரு மின்கம்பம் போன்றது — பணத்தை A-லிருந்து B-க்கு நகர்த்துகிறது, சேமிப்பதில்லை. PA என்பது மின்சாரம் வாரியம் போன்றது — பணத்தை சேகரித்து, வைத்திருந்து, விநியோகிக்கிறது. கம்பத்திற்கு உரிமம் தேவையில்லை; வாரியத்திற்கு தேவை.</span>
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
    <div class="mt-revenue">
      <span class="mtr-label">💰 Revenue model</span>
      <span class="en">You collect money from retailers <em>upfront</em> (prepaid model — B2B, not B2C). This float sits in your current account. The licensed OU credits commission (typically <strong>₹2–₹15 per transaction</strong>) back to you. The money never pools in your account from end consumers — that's the legal distinction.</span>
      <span class="ta">நீங்கள் retailers-இடம் முன்கூட்டியே பணம் சேகரிக்கிறீர்கள் (prepaid B2B மாதிரி). உரிமம் பெற்ற OU ஒவ்வொரு பரிவர்த்தனைக்கும் <strong>₹2–₹15</strong> கமிஷன் வரவு வைக்கிறது.</span>
    </div>
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
    <div class="mt-revenue">
      <span class="mtr-label">💰 Revenue model</span>
      <span class="en">Charge your merchants <strong>1.5–2.5% MDR</strong>; pay the underlying PA <strong>0.8–1.5% MDR</strong>. Your margin: <strong>0.3–1% per transaction</strong>. At ₹1 Cr/month volume, that's ₹30,000–₹1L/month. Clients sign agreements with you; you sign with the PA. The PA's nodal account holds all funds — never yours.</span>
      <span class="ta">வணிகர்களிடம் <strong>1.5–2.5% MDR</strong> வசூலிக்கவும்; PA-க்கு <strong>0.8–1.5%</strong> செலுத்தவும். ₹1 கோடி/மாத volume-ல் ₹30,000–₹1L/மாத margin. PA-ன் nodal account-ல் நிதி தங்கும் — உங்களிடம் அல்ல.</span>
    </div>
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
    <div class="mt-revenue">
      <span class="mtr-label">💰 Settlement flow</span>
      <span class="en">Customer pays → Licensed PA's <em>nodal account</em> → PA settles to you (T+1 or T+2) → You settle to your merchants (T+2 or T+3). <strong>Your margin is the MDR spread.</strong> Your merchants' KYC is collected by you but verified by the PA — the compliance umbrella is theirs, not yours.</span>
      <span class="ta">வாடிக்கையாளர் செலுத்துகிறார் → PA-ன் nodal account → PA உங்களுக்கு T+1/T+2-ல் settle → நீங்கள் வணிகர்களுக்கு T+2/T+3-ல் settle. உங்கள் margin = MDR spread. Compliance PA-யால் நிர்வகிக்கப்படுகிறது.</span>
    </div>
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
    <div class="mt-revenue">
      <span class="mtr-label">💰 Revenue model</span>
      <span class="en">Load a prepaid float with the BBPS Operating Unit. Your agents' bill payments debit this float. Commission (<strong>₹2–₹15 per transaction</strong> for BBPS; <strong>₹5–₹20 for AEPS</strong>) flows back to your account. Encryption, AML, and transaction monitoring is handled by the OU and NPCI — your only obligation is KYC compliance for your agents.</span>
      <span class="ta">BBPS OU-உடன் prepaid float ஏற்றவும். பில் பேமென்ட்டுகள் இந்த float-ஐ debit செய்கின்றன. Commission (<strong>₹2–₹15/transaction</strong>) உங்கள் கணக்கிற்கு திரும்பும். Encryption, AML, transaction monitoring OU + NPCI-ஆல் நிர்வகிக்கப்படுகிறது.</span>
    </div>
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
<h2 class="s-title" data-reveal>The grey area & <em>the real risk</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">An honest assessment. Some smaller operators are in a regulatory grey zone — technically compliant because they don't "hold" funds, but in practice the lines blur. Here's exactly what you need to know.</span>
  <span class="ta">ஒரு நேர்மையான மதிப்பீடு. சில சிறிய நிறுவனங்கள் ஒழுங்குமுறை சாம்பல் மண்டலத்தில் உள்ளன — தொழில்நுட்ப ரீதியாக இணக்கமாக இருந்தாலும், நடைமுறையில் வரைமுறைகள் மங்கலாகின்றன.</span>
</p>

<div class="risk-grid" data-stagger>
  <div class="risk-card">
    <h4><span class="en">📋 The Regulatory Framework</span><span class="ta">📋 ஒழுங்குமுறை கட்டமைப்பு</span></h4>
    <p><span class="en">Under revised RBI directions, payment <strong>gateways</strong> remain outside direct regulatory purview — they don't handle funds; they're purely technology service providers. But payment <strong>aggregators</strong> — which actually hold nodal/escrow accounts and settle funds — are strictly regulated under the PSS Act 2007 and RBI PA Guidelines 2020. This line is everything.</span><span class="ta">RBI-ன் திருத்தப்பட்ட நிர்வாக வழிகாட்டுதல்களின் படி, payment gateways நேரடி கட்டுப்பாட்டிற்கு வெளியே உள்ளன. ஆனால் aggregators PSS Act 2007 மற்றும் RBI PA Guidelines 2020 கீழ் கடுமையாக கட்டுப்படுத்தப்படுகின்றன.</span></p>
  </div>
  <div class="risk-card">
    <h4><span class="en">🛡️ The Technical Defence</span><span class="ta">🛡️ தொழில்நுட்ப பாதுகாப்பு</span></h4>
    <p><span class="en">The legal defence of smaller resellers is: <em>"We don't hold customer money. We collect pre-deposits from our own distributors (B2B), not from end customers (B2C). Actual settlement happens at the licensed OU/PA level above us."</em> This distinction — B2B prepaid float vs customer fund pooling — is what keeps resellers outside PA regulation.</span><span class="ta">சிறிய மறுவிற்பனையாளர்களின் சட்ட நிலைப்பாடு: "நாங்கள் வாடிக்கையாளர் பணத்தை வைத்திருக்கவில்லை. பணம் உரிமம் பெற்ற PA-ல் தங்குகிறது."</span></p>
  </div>
  <div class="risk-card">
    <h4><span class="en">⚠️ Where the Lines Blur</span><span class="ta">⚠️ வரைமுறைகள் மங்கலாகும் இடம்</span></h4>
    <p><span class="en">Problems arise when: (1) A reseller collects money from end consumers directly, even temporarily. (2) Settlement delays mean funds "sit" with the reseller beyond T+1/T+2. (3) The reseller operates a "wallet" with consumer balances it manages. These three behaviours are de facto PA functions and trigger enforcement.</span><span class="ta">சிக்கல்கள் எழும்போது: (1) மறுவிற்பனையாளர் நேரடியாக நுகர்வோரிடம் பணம் சேகரிக்கும்போது. (2) தீர்வு T+2-ஐ தாண்டும்போது. (3) நுகர்வோர் இருப்புகள் கொண்ட wallet நடத்தும்போது.</span></p>
  </div>
  <div class="risk-card">
    <h4><span class="en">🏛️ RBI's Track Record</span><span class="ta">🏛️ RBI-ன் தடம்</span></h4>
    <p><span class="en">Several smaller operators have received RBI notices for operating without proper authorization. The RBI has issued multiple "cease and desist" orders against unlicensed entities that were de facto aggregating funds. The regulator's clear stance: if you're <em>functionally</em> a PA — regardless of what you call yourself — you need the license.</span><span class="ta">பல சிறிய நிறுவனங்கள் RBI-ல் இருந்து அனுப்பப்பட்ட notice-ஐ பெற்றுள்ளன. "Cease and desist" ஆணைகள் உரிமம் இல்லாமல் நிதி திரட்டிய நிறுவனங்களுக்கு வழங்கப்பட்டுள்ளன.</span></p>
  </div>
</div>

<div class="alert-box" data-reveal>
  <strong>⚠️ <span class="en">The real risk for small players</span><span class="ta">சிறிய நிறுவனங்களுக்கான உண்மையான ஆபத்து</span></strong>
  <p><span class="en">If the RBI finds a smaller operator is <em>de facto</em> holding or pooling customer funds without a license, they can be shut down immediately. Key risk factors to avoid:</span><span class="ta">RBI-யானது ஒரு சிறிய ஆபரேட்டர் உரிமம் இல்லாமல் வாடிக்கையாளர் நிதியை சேகரிப்பதை கண்டால் அவர்களை உடனடியாக மூடலாம்.</span></p>
  <ul>
    <li><span class="en">Collecting money from end consumers (not just your own distributors)</span><span class="ta">உங்கள் விநியோகஸ்தர்களிடம் மட்டும் அல்லாமல் நுகர்வோரிடம் நேரடியாக பணம் சேகரிப்பது</span></li>
    <li><span class="en">Operating consumer-facing wallets with balances you manage</span><span class="ta">நீங்கள் நிர்வகிக்கும் நுகர்வோர் wallet-கள் இயக்குவது</span></li>
    <li><span class="en">Settlement cycles longer than T+2 (you're float-funding on customer money)</span><span class="ta">T+2-ஐ விட நீண்ட தீர்வு சுழல்கள் (வாடிக்கையாளர் பணத்தில் float-funding)</span></li>
    <li><span class="en">No clear contractual link to a licensed PA/OU above you</span><span class="ta">உங்களுக்கு மேலே உரிமம் பெற்ற PA/OU உடன் தெளிவான ஒப்பந்த இணைப்பு இல்லை</span></li>
    <li><span class="en">Your bank account receiving consumer remittances at scale (flags AML checks)</span><span class="ta">உங்கள் வங்கி கணக்கில் பெரிய அளவில் நுகர்வோர் பரிமாற்றங்கள் வருவது (AML சோதனைகளை தூண்டுகிறது)</span></li>
  </ul>
  <div style="margin-top:1.25rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:8px;">
    <strong style="color:#f0a060;"><span class="en">The safe path:</span><span class="ta">பாதுகாப்பான பாதை:</span></strong>
    <span style="color:rgba(255,255,255,0.78);font-size:0.88rem;">
      <span class="en"> Always operate under a formal sub-merchant or agent agreement with a licensed PA/OU. Ensure your agreement explicitly states who holds the nodal account. Never pool end-consumer funds. Keep records of every transaction. Have your structure reviewed by a fintech lawyer before scaling.</span>
      <span class="ta"> எப்போதும் உரிமம் பெற்ற PA/OU உடன் முறையான ஒப்பந்தத்தின் கீழ் செயல்படுங்கள். nodal account யார் வைத்திருக்கிறார்கள் என்பதை ஒப்பந்தம் தெளிவாக கூறட்டும். நுகர்வோர் நிதிகளை ஒருபோதும் திரட்டாதீர்கள்.</span>
    </span>
  </div>
</div>

<div class="callout" data-reveal style="margin-top:2rem;border-left-color:var(--accent2);">
  <strong>📌 <span class="en">Bottom line:</span><span class="ta">முடிவு:</span></strong>
  <span class="en"> Companies like RunPaisa, GetEPay, and RechargeKit operate legally because they are B2B infrastructure layers — distributors and tech providers sitting on top of licensed entities. They don't need a PA license as long as they don't pool end-consumer funds. The moment any of them starts collecting, holding, and settling consumer money — they enter regulated territory and need the license.</span>
  <span class="ta"> RunPaisa, GetEPay, RechargeKit போன்ற நிறுவனங்கள் சட்டப்பூர்வமாக செயல்படுகின்றன ஏனென்றால் அவை B2B infrastructure layers — உரிமம் பெற்ற நிறுவனங்களுக்கு மேல் உள்ள தொழில்நுட்ப வழங்குநர்கள். நுகர்வோர் நிதிகளை திரட்டாத வரை PA உரிமம் தேவையில்லை.</span>
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
      <div class="vt-h">🔐 DSC — Digital Signature Certificate</div>
      <p class="vt-p"><span class="en">Each proposed director needs a Class-3 DSC. Apply via MCA-empanelled agencies: <a href="https://www.emudhra.com" target="_blank" rel="noopener" class="ext-link">eMudhra</a>, <a href="https://www.sifast.com" target="_blank" rel="noopener" class="ext-link">Sify</a>, or <a href="https://www.nsdl.co.in" target="_blank" rel="noopener" class="ext-link">NSDL e-Gov</a>. Requires Aadhaar OTP + PAN + video verification. 2-year validity.</span><span class="ta">ஒவ்வொரு இயக்குனருக்கும் Class-3 DSC தேவை. <a href="https://www.emudhra.com" target="_blank" rel="noopener" class="ext-link">eMudhra</a>, <a href="https://www.sifast.com" target="_blank" rel="noopener" class="ext-link">Sify</a>, அல்லது <a href="https://www.nsdl.co.in" target="_blank" rel="noopener" class="ext-link">NSDL</a> மூலம் விண்ணப்பிக்கவும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹2,500 – ₹4,000</span><span class="tag tag-time">1 – 2 days</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#9333ea,#c084fc)">02</div>
    <div class="vt-card">
      <div class="vt-h">🪪 DIN — Director Identification Number</div>
      <p class="vt-p"><span class="en">Apply for DIN via <a href="https://www.mca.gov.in/MinistryV2/din.html" target="_blank" rel="noopener" class="ext-link">MCA SPICe+ form</a> (automatically allotted on incorporation) or standalone DIR-3 on <a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">mca.gov.in</a>. DIN is lifelong — one per person. Foreign nationals need apostilled documents.</span><span class="ta"><a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a> படிவம் வழியாக DIN-க்கு விண்ணப்பிக்கவும். DIN வாழ்நாள் முழுவதும் செல்லுபடியாகும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹500 gov fee</span><span class="tag tag-time">Same day if SPICe+</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#f97316,#fb923c)">03</div>
    <div class="vt-card">
      <div class="vt-h">🏷️ Name Reservation — RUN / SPICe+</div>
      <p class="vt-p"><span class="en">Reserve up to 2 names via <a href="https://www.mca.gov.in/MinistryV2/runform.html" target="_blank" rel="noopener" class="ext-link">MCA RUN</a> (Reserve Unique Name) or within SPICe+. Check name availability on <a href="https://www.mca.gov.in/MinistryV2/companyname.html" target="_blank" rel="noopener" class="ext-link">MCA Company Search</a>. Avoid "Bank", "Insurance", "Pay" without RBI/IRDAI clearance. Check trademarks on <a href="https://ipindiaonline.gov.in" target="_blank" rel="noopener" class="ext-link">IP India</a>.</span><span class="ta"><a href="https://www.mca.gov.in/MinistryV2/runform.html" target="_blank" rel="noopener" class="ext-link">MCA RUN</a> சேவை வழியாக 2 பெயர்கள் வரை ஒதுக்கவும். <a href="https://ipindiaonline.gov.in" target="_blank" rel="noopener" class="ext-link">IP India</a>-ல் trademark சரிபார்க்கவும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹1,000 gov fee</span><span class="tag tag-time">1 – 3 days</span><span class="tag tag-warn">Avoid "Pay" without RBI NOC</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#22c55e,#4ade80)">04</div>
    <div class="vt-card">
      <div class="vt-h">📄 Draft MoA &amp; AoA</div>
      <p class="vt-p"><span class="en">Memorandum of Association defines objects clause — must explicitly include "payment processing", "financial technology services", and "software development". AoA governs internal management. Hire a <a href="https://www.icsi.edu/membership/find-a-member/" target="_blank" rel="noopener" class="ext-link">Company Secretary (ICSI)</a> or <a href="https://www.icai.org/find-a-ca.html" target="_blank" rel="noopener" class="ext-link">CA (ICAI)</a> for fintech-specific clauses.</span><span class="ta">MoA இன் objects clause — "payment processing", "financial technology services"-ஐ வெளிப்படையாக சேர்க்க வேண்டும். <a href="https://www.icsi.edu" target="_blank" rel="noopener" class="ext-link">ICSI</a> அல்லது <a href="https://www.icai.org" target="_blank" rel="noopener" class="ext-link">ICAI</a> நிபுணரின் உதவி பெறவும்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹8,000 – ₹15,000 professional fee</span><span class="tag tag-time">2 – 4 days</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#ef4444,#f87171)">05</div>
    <div class="vt-card">
      <div class="vt-h">📝 SPICe+ e-Form (MCA)</div>
      <p class="vt-p"><span class="en">File the integrated incorporation form on <a href="https://www.mca.gov.in/MinistryV2/spicemoa.html" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a> covering DIN allotment, name approval, PAN, TAN, EPFO, ESIC, and GST registration in one submission. Requires DSCs of all directors + subscriber sheet. Government fee based on authorised capital: up to ₹1L capital = ₹2,000; above ₹5L = scales up.</span><span class="ta"><a href="https://www.mca.gov.in/MinistryV2/spicemoa.html" target="_blank" rel="noopener" class="ext-link">MCA SPICe+</a>-ல் ஒரே சமர்ப்பிப்பில் DIN, பெயர் அனுமதி, PAN, TAN, EPFO, ESIC, மற்றும் GST பதிவை உள்ளடக்கிய ஒருங்கிணைந்த படிவம்.</span></p>
      <div class="vt-meta"><span class="tag tag-cost">₹2,000 – ₹12,000 gov fee (capital-based)</span><span class="tag tag-time">3 – 7 days</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#eab308,#facc15)">06</div>
    <div class="vt-card">
      <div class="vt-h">🏛️ Certificate of Incorporation (CoI)</div>
      <p class="vt-p"><span class="en">ROC (Registrar of Companies) issues CoI with CIN via <a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA portal</a>. Download digitally from your MCA account — this is your company's birth certificate. CIN format: U[NIC Code][State][Year][PVT][6-digit Number]. Keep certified copies for every licence application. Verify on <a href="https://www.mca.gov.in/MinistryV2/companysearch.html" target="_blank" rel="noopener" class="ext-link">MCA company search</a>.</span><span class="ta"><a href="https://www.mca.gov.in" target="_blank" rel="noopener" class="ext-link">MCA portal</a> வழியாக ROC CoI-ஐ CIN உடன் வழங்குகிறது. ஒவ்வொரு உரிமம் விண்ணப்பத்திற்கும் இது தேவை.</span></p>
      <div class="vt-meta"><span class="tag tag-ok">Issued within SPICe+ timeline</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#14b8a6,#2dd4bf)">07</div>
    <div class="vt-card">
      <div class="vt-h">🏦 Current Account Opening</div>
      <p class="vt-p"><span class="en">Open a current account in the company name. For fintech, prefer banks with strong API banking: <a href="https://www.icicibank.com/business/current-account" target="_blank" rel="noopener" class="ext-link">ICICI Business</a>, <a href="https://www.yesbank.in/business-banking" target="_blank" rel="noopener" class="ext-link">Yes Bank</a>, <a href="https://www.kotak.com/en/business-banking/current-account.html" target="_blank" rel="noopener" class="ext-link">Kotak</a>, or <a href="https://www.axisbank.com/business-banking" target="_blank" rel="noopener" class="ext-link">Axis Bank</a> for future nodal/escrow setup. Requires CoI, MoA/AoA, PAN, address proof.</span><span class="ta">நிறுவன பெயரில் நடப்பு கணக்கை திறக்கவும். <a href="https://www.icicibank.com" target="_blank" rel="noopener" class="ext-link">ICICI</a>, <a href="https://www.yesbank.in" target="_blank" rel="noopener" class="ext-link">Yes Bank</a>, <a href="https://www.kotak.com" target="_blank" rel="noopener" class="ext-link">Kotak</a>, <a href="https://www.axisbank.com" target="_blank" rel="noopener" class="ext-link">Axis</a> போன்ற API வங்கிகளை விரும்புங்கள்.</span></p>
      <div class="vt-meta"><span class="tag tag-time">3 – 7 days</span><span class="tag tag-cost">₹10,000 – ₹25,000 min balance</span></div>
    </div>
  </li>
  <li class="vt-item">
    <div class="vt-circle" style="background:linear-gradient(135deg,#ec4899,#f472b6)">08</div>
    <div class="vt-card">
      <div class="vt-h">🧾 GST Registration</div>
      <p class="vt-p"><span class="en">GST is mandatory for fintech services before first invoice. Apply on <a href="https://www.gst.gov.in/registration/new-registration" target="_blank" rel="noopener" class="ext-link">GST Portal</a> with CIN, PAN, bank statement, and director Aadhaar. ARN issued within 3 working days; GSTIN within 7. 18% GST applies to payment processing fees. File GSTR-1 and GSTR-3B monthly. Fintech TDS compliance: <a href="https://www.incometax.gov.in" target="_blank" rel="noopener" class="ext-link">incometax.gov.in</a> for TDS on commissions (section 194H).</span><span class="ta">முதல் invoice-க்கு முன் fintech சேவைகளுக்கு GST கட்டாயம். <a href="https://www.gst.gov.in" target="_blank" rel="noopener" class="ext-link">GST Portal</a>-ல் விண்ணப்பிக்கவும்.</span></p>
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
</div>

<div class="callout-pe" data-reveal>
  <div class="pe-label">💡 In plain English</div>
  <span class="en">The RBI is asking: <strong>"Can we trust you with other people's money?"</strong> The ₹25 Cr net worth proves you have skin in the game. The IT audit proves your systems won't be hacked. The CERT-In audit proves your security is real, not on paper. The escrow at a scheduled bank ensures that if your business fails tomorrow, customer funds are protected and accessible. The whole process typically takes <strong>18 – 30 months</strong> from start to certificate in hand.</span>
  <span class="ta">RBI கேட்கிறது: <strong>"மற்றவர்களின் பணத்தை உங்களை நம்பி கொடுக்கலாமா?"</strong> ₹25 கோடி நிகர மதிப்பு நீங்கள் நிதி ரீதியாக நம்பகமானவர் என்று நிரூபிக்கிறது. IT audit உங்கள் system பாதுகாப்பானது என்பதை நிரூபிக்கிறது. Escrow account வாடிக்கையாளர் பணம் என்றும் பாதுகாப்பாக இருக்கும் என்பதை உறுதி செய்கிறது.</span>
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
</div>

<div class="callout-pe" data-reveal>
  <div class="pe-label">💡 In plain English</div>
  <span class="en">A <strong>Semi-closed wallet</strong> is like a prepaid debit card you can spend at multiple shops but can't withdraw to your bank. A <strong>Closed wallet</strong> is like a Starbucks gift card — only usable at that one brand. The <strong>nodal account</strong> is a special government-watched bank account where everyone's wallet balance is kept safe — no one (not even the wallet company) can spend it freely. KYC tier = how much the government trusts you based on the ID you provided.</span>
  <span class="ta">Semi-closed wallet என்பது பலவிடங்களில் செலவழிக்கக்கூடிய prepaid card போன்றது, ஆனால் வங்கியில் திரும்பப் பெற முடியாது. Nodal account என்பது அரசாங்கம் கண்காணிக்கும் சிறப்பு வங்கி கணக்கு — wallet balance அங்கு பாதுகாக்கப்படுகிறது.</span>
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
},

/* ── 11 CARD SWIPE BUSINESS ─────────────────────────────────────── */
{
  id:'cardswipe', chapter:'cardswipe', theme:'dark',
  nav:{ en:'Card Swipe Biz', ta:'கார்டு ஸ்வைப்' },
  html:`
<div class="s-label" data-reveal>
  <span class="s-label-num">11 — Card Swipe</span>
  <span class="s-label-line"></span>
</div>
<h2 class="s-title" data-reveal>💳 Card swiping business — <em>legal, grey & illegal</em></h2>
<p class="s-desc" data-reveal>
  <span class="en">In India, "card swiping" means very different things depending on context — from a legitimate POS deployment business to a criminal cash-advance operation. This chapter covers the full spectrum: the card ecosystem, who earns what, legal business models, and exactly why the illegal version carries prison time.</span>
  <span class="ta">இந்தியாவில் "கார்டு ஸ்வைப்" என்பது சூழ்நிலையைப் பொறுத்து மிகவும் வேறுபட்டது — சட்டப்பூர்வமான POS deployment வணிகத்தில் இருந்து குற்றவியல் cash-advance நடவடிக்கை வரை.</span>
</p>

<!-- Card ecosystem hierarchy -->
<h3 class="s-sub-title" data-reveal>🏗️ <span class="en">The card ecosystem — who sits where</span><span class="ta">கார்டு சுற்றுச்சூழல் — யார் எங்கே உள்ளனர்</span></h3>
<div class="cs-pyramid" data-reveal>
  <div class="csp-tier csp-t1"><span class="csp-icon">🌐</span><span class="csp-label">Card Scheme</span><span class="csp-eg">Visa · Mastercard · RuPay · Amex</span><span class="csp-role">Sets rules, owns the network, earns scheme fees</span></div>
  <div class="csp-tier csp-t2"><span class="csp-icon">🏦</span><span class="csp-label">Issuing Bank</span><span class="csp-eg">HDFC · ICICI · SBI · Axis</span><span class="csp-role">Issues cards to cardholders · earns interchange fee</span></div>
  <div class="csp-tier csp-t3"><span class="csp-icon">🏧</span><span class="csp-label">Acquiring Bank + Processor</span><span class="csp-eg">ICICI Merchant Services · Razorpay · Pine Labs</span><span class="csp-role">Onboards merchants · provides POS · earns acquiring fee</span></div>
  <div class="csp-tier csp-t4"><span class="csp-icon">🏪</span><span class="csp-label">Merchant (Card Acceptor)</span><span class="csp-eg">Retail stores · e-commerce sites · service providers</span><span class="csp-role">Pays MDR · receives net settlement T+2</span></div>
</div>

<!-- Animated transaction flow -->
<h3 class="s-sub-title" data-reveal>⚡ <span class="en">How a card transaction flows — real-time</span><span class="ta">கார்டு பரிவர்த்தனை எவ்வாறு நடக்கிறது</span></h3>
<div class="txn-flow-wrap" data-reveal>
  <div class="txn-flow">
    <div class="txn-node tn-customer">
      <div class="tn-icon">👤</div>
      <div class="tn-label">Cardholder</div>
      <div class="tn-sub">Taps / dips / swipes</div>
    </div>
    <div class="txn-arrow ta-animated"><span class="ta-line"></span><span class="ta-dot"></span><span class="ta-label">Auth Request</span></div>
    <div class="txn-node tn-pos">
      <div class="tn-icon">🖥️</div>
      <div class="tn-label">POS Terminal</div>
      <div class="tn-sub">Encrypts card data</div>
    </div>
    <div class="txn-arrow ta-animated"><span class="ta-line"></span><span class="ta-dot"></span><span class="ta-label">ISO 8583</span></div>
    <div class="txn-node tn-acquirer">
      <div class="tn-icon">🏧</div>
      <div class="tn-label">Acquirer</div>
      <div class="tn-sub">Routes to scheme</div>
    </div>
    <div class="txn-arrow ta-animated"><span class="ta-line"></span><span class="ta-dot"></span><span class="ta-label">Auth Forward</span></div>
    <div class="txn-node tn-scheme">
      <div class="tn-icon">🌐</div>
      <div class="tn-label">Card Scheme</div>
      <div class="tn-sub">Routes to issuer</div>
    </div>
    <div class="txn-arrow ta-animated"><span class="ta-line"></span><span class="ta-dot"></span><span class="ta-label">Auth Request</span></div>
    <div class="txn-node tn-issuer">
      <div class="tn-icon">🏦</div>
      <div class="tn-label">Issuing Bank</div>
      <div class="tn-sub">Approves or declines</div>
    </div>
  </div>
  <div class="txn-response">
    <div class="txr-arrow">↩ Auth Response travels back same path in &lt;2 seconds</div>
  </div>
  <div class="txn-timeline">
    <div class="tmt-item"><span class="tmt-badge">T+0</span><span>Authorization (~1.5 sec) — Issuer approves, card debited</span></div>
    <div class="tmt-item"><span class="tmt-badge">T+1</span><span>Clearing — Acquirer submits batch of day's transactions to scheme</span></div>
    <div class="tmt-item"><span class="tmt-badge tmt-ok">T+2</span><span>Settlement — Merchant account credited (net of MDR)</span></div>
  </div>
</div>

<!-- MDR breakdown -->
<h3 class="s-sub-title" data-reveal>💰 <span class="en">MDR breakdown — who earns what from ₹100</span><span class="ta">MDR பகுப்பு — ₹100-ல் யார் என்ன சம்பாதிக்கிறார்கள்</span></h3>
<div class="mdr-breakdown" data-reveal>
  <div class="mdr-total"><span class="mdr-num">₹100</span><span class="mdr-lbl">Merchant charges customer</span></div>
  <div class="mdr-split">
    <div class="mdr-bar">
      <div class="mdr-seg mseg-interchange" style="width:58%">
        <span class="mseg-label">Interchange<br><strong>1.2–1.8%</strong></span>
        <span class="mseg-who">→ Issuing Bank</span>
      </div>
      <div class="mdr-seg mseg-scheme" style="width:7%">
        <span class="mseg-label">Scheme<br><strong>0.05%</strong></span>
      </div>
      <div class="mdr-seg mseg-acq" style="width:18%">
        <span class="mseg-label">Acquirer<br><strong>0.3–0.5%</strong></span>
        <span class="mseg-who">→ Acquiring Bank</span>
      </div>
      <div class="mdr-seg mseg-pg" style="width:17%">
        <span class="mseg-label">PG/Processor<br><strong>0.2–0.3%</strong></span>
        <span class="mseg-who">→ Gateway</span>
      </div>
    </div>
    <div class="mdr-merchant">Merchant receives: <strong>₹98.0 – ₹97.0</strong> (after ~2% total MDR)</div>
  </div>
</div>

<!-- Legal models -->
<h3 class="s-sub-title" data-reveal>✅ <span class="en">Legal card business models in India</span><span class="ta">இந்தியாவில் சட்டப்பூர்வ கார்டு வணிக மாதிரிகள்</span></h3>
<div class="cs-legal-grid" data-stagger>
  <div class="csl-card">
    <div class="csl-icon">🏧</div>
    <h4 class="csl-title">POS Terminal DSA</h4>
    <p class="csl-desc"><span class="en">Become a Direct Sales Agent for an acquiring bank (HDFC, ICICI, Axis). Deploy POS terminals at merchant locations. Earn ₹300–₹800 per terminal/month activation fee + residual MDR share (0.05–0.1%). No RBI licence needed — you're working under the bank's acquiring licence.</span><span class="ta">Acquiring bank-க்காக DSA ஆகுங்கள். POS terminals deploy செய்யுங்கள். மாதம் ₹300–₹800 + MDR பங்கு சம்பாதியுங்கள்.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">Legal</span><span class="tag tag-cost">~₹50K setup</span><span class="tag tag-req">Bank DSA agreement</span></div>
    <div class="csl-links"><a href="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/7f7d9dca-9f05-4bf2-90b2-a38aad22e5d0" target="_blank" rel="noopener" class="ext-link">HDFC Merchant Services</a> · <a href="https://www.icicibank.com/business/merchant-acquiring" target="_blank" rel="noopener" class="ext-link">ICICI Merchant</a></div>
  </div>
  <div class="csl-card">
    <div class="csl-icon">📲</div>
    <h4 class="csl-title">mPOS / Softpos Reseller</h4>
    <p class="csl-desc"><span class="en">Resell mobile POS solutions from <a href="https://www.mswipe.com" target="_blank" rel="noopener" class="ext-link">MSwipe</a>, <a href="https://pinelabs.com" target="_blank" rel="noopener" class="ext-link">Pine Labs</a>, or <a href="https://paytm.com/business" target="_blank" rel="noopener" class="ext-link">Paytm Business</a>. They provide the terminal; you bring merchants. Commission: ₹200–₹500/device/month + MDR residual. Works under their RBI/acquiring licence.</span><span class="ta">MSwipe, Pine Labs-இன் mobile POS solutions-ஐ மறுவிற்பனை செய்யுங்கள். அவர்கள் terminal வழங்குகிறார்கள்; நீங்கள் merchants கொண்டு வருகிறீர்கள்.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">Legal</span><span class="tag tag-cost">~₹20K setup</span><span class="tag tag-req">Reseller agreement</span></div>
  </div>
  <div class="csl-card">
    <div class="csl-icon">💻</div>
    <h4 class="csl-title">Payment Gateway Integration</h4>
    <p class="csl-desc"><span class="en">Build card acceptance software on top of a licensed PA (Razorpay, Cashfree). You provide the checkout UX; the PA handles card tokenisation, PCI-DSS, and settlement. This is the white-label model (reseller Model 02). No PA licence required. Revenue: MDR spread.</span><span class="ta">Razorpay, Cashfree போன்ற licensed PA மேல் card acceptance software கட்டுங்கள். PA card tokenization, PCI-DSS, settlement handle செய்கிறது.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">Legal</span><span class="tag tag-cost">₹2L+ build</span><span class="tag tag-req">TSP/PA agreement</span></div>
  </div>
  <div class="csl-card csl-card--featured">
    <div class="csl-icon">🔌</div>
    <h4 class="csl-title">Card Network ISA / ISO / MSP Program</h4>
    <p class="csl-desc"><span class="en">Become an Independent Sales Agent (ISA), ISO (Independent Sales Organization), or Merchant Service Provider (MSP) under Visa / Mastercard's certified acquirer in India. The acquiring bank sponsors you to the card scheme — you earn residual MDR split on every transaction your merchants process, forever.</span><span class="ta">Visa/Mastercard-ன் certified acquirer கீழ் ISA/MSP ஆகுங்கள். ஒவ்வொரு பரிவர்த்தனையிலும் நிரந்தர MDR பங்கு சம்பாதியுங்கள்.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">Legal</span><span class="tag tag-cost">₹5L–₹20L setup</span><span class="tag tag-warn">Bank sponsorship required</span><span class="tag tag-req">PCI-DSS required</span></div>
    <div class="csl-links"><a href="#iso-deep-dive" class="ext-link">↓ Full step-by-step guide below</a></div>
  </div>
</div>

<!-- ISA / ISO Deep Dive -->
<div id="iso-deep-dive" class="iso-deep-wrap" data-reveal>
  <div class="iso-header">
    <div class="iso-badge">Deep Dive</div>
    <h3 class="iso-title">🔌 How to become a Card Network ISA / ISO / MSP in India</h3>
    <p class="iso-lead"><span class="en">An ISO (Independent Sales Organization) is a company registered with Visa or Mastercard — through a sponsoring acquiring bank — to sell card acceptance services to merchants. You don't hold money, you don't process transactions: you <em>onboard and manage</em> the merchant relationship. But you earn a residual MDR cut on every swipe, every day, for as long as that merchant is live. At scale, this becomes a recurring-revenue machine.</span><span class="ta">ISO என்பது Visa அல்லது Mastercard-உடன் பதிவு செய்யப்பட்ட நிறுவனம். நீங்கள் பணம் வைத்திருக்கவில்லை, பரிவர்த்தனைகளை செயலாக்கவில்லை — வெறும் merchant relationships நிர்வகிக்கிறீர்கள். ஆனால் ஒவ்வொரு swipe-லும் நிரந்தர MDR பங்கு சம்பாதிக்கிறீர்கள்.</span></p>
  </div>

  <!-- Terminology table -->
  <div class="iso-terms" data-reveal>
    <div class="iso-term-row iso-term-head"><span>Title</span><span>What it means</span><span>Who it applies to</span></div>
    <div class="iso-term-row"><span>ISA</span><span>Independent Sales Agent — individual or small firm; registered agent of an ISO or bank</span><span>Freelancers, small biz</span></div>
    <div class="iso-term-row"><span>ISO</span><span>Independent Sales Organization — registered with card scheme via bank; onboards merchants</span><span>Companies &lt;₹500Cr volume</span></div>
    <div class="iso-term-row"><span>MSP</span><span>Merchant Service Provider — larger ISO with full service stack (terminals, helpdesk, disputes)</span><span>Companies with own tech</span></div>
    <div class="iso-term-row"><span>TPSP</span><span>Third Party Service Provider — handles cardholder data on behalf of a member bank</span><span>Tech/SaaS vendors</span></div>
    <div class="iso-term-row"><span>Acquirer</span><span>The bank that sponsors you, settles funds, is ultimately liable to card scheme</span><span>HDFC, ICICI, Axis, Worldline India</span></div>
  </div>

  <!-- Step-by-step -->
  <h4 class="iso-steps-title" data-reveal>📋 Step-by-step path — from zero to registered ISO</h4>
  <div class="iso-steps">
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">01</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Build a legitimate track record as a POS DSA (6–18 months)</div>
        <p class="iso-step-p"><span class="en">Before any bank will sponsor you to Visa/Mastercard, you need to demonstrate you can onboard and manage merchants responsibly. Start as a DSA for HDFC or ICICI Merchant Services — deploy 50–200 terminals. Track your chargeback ratio (must stay under 1%), merchant activation rate, and dispute resolution. This portfolio is your application evidence.</span><span class="ta">எந்த bank-ம் உங்களை Visa/Mastercard-க்கு sponsor செய்ய, நீங்கள் merchant onboarding திறனை நிரூபிக்க வேண்டும். HDFC அல்லது ICICI Merchant Services-க்காக DSA ஆகி 50–200 terminals deploy செய்யுங்கள்.</span></p>
        <div class="iso-step-meta"><span class="tag tag-time">6–18 months</span><span class="tag tag-cost">~₹50K investment</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">02</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Incorporate a Pvt Ltd company with the right objects clause</div>
        <p class="iso-step-p"><span class="en">You must be a registered company — not a proprietorship. Your MoA must include "merchant acquiring services", "payment facilitation", and "POS terminal deployment". Minimum paid-up capital ₹10L recommended (banks look for financial seriousness). Directors should have clean credit history — banks will run background checks.</span><span class="ta">Pvt Ltd நிறுவனமாக பதிவு செய்யுங்கள். MoA-ல் "merchant acquiring services", "payment facilitation" சேர்க்கவும். குறைந்தபட்ச paid-up capital ₹10L.</span></p>
        <div class="iso-step-meta"><span class="tag tag-time">30–45 days</span><span class="tag tag-cost">₹15K–₹30K (see Company chapter)</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">03</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Achieve PCI-DSS compliance (minimum SAQ-A or SAQ-B+IP)</div>
        <p class="iso-step-p"><span class="en">The Payment Card Industry Data Security Standard is non-negotiable. As an ISO you handle merchant data — PCI-DSS Level 3 or 4 applies initially (Self-Assessment Questionnaire). Hire a <a href="https://www.pcisecuritystandards.org/assessors_and_solutions/qualified_security_assessors" target="_blank" rel="noopener" class="ext-link">PCI QSA (Qualified Security Assessor)</a> to guide your first assessment. Annual cost: ₹2L–₹8L. Failing to maintain PCI-DSS = immediate de-registration by card scheme.</span><span class="ta"><a href="https://www.pcisecuritystandards.org" target="_blank" rel="noopener" class="ext-link">PCI-DSS</a> இணக்கம் கட்டாயம். SAQ-A அல்லது SAQ-B+IP level தொடங்கவும். ஆண்டு செலவு: ₹2L–₹8L.</span></p>
        <div class="iso-step-meta"><span class="tag tag-time">3–6 months</span><span class="tag tag-cost">₹2L–₹8L/year</span><span class="tag tag-warn">Mandatory — no exceptions</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">04</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Approach an acquiring bank's ISO/MSP partnership desk</div>
        <p class="iso-step-p"><span class="en">Contact the merchant acquiring partnerships team directly — not a branch, the head-office BD team. Key banks with active ISO programs in India:</span><span class="ta">Merchant acquiring partnerships team-ஐ நேரடியாக தொடர்பு கொள்ளுங்கள்:</span></p>
        <div class="iso-bank-links">
          <a href="https://www.hdfcbank.com/content/bbp/repositories/723fb80a-2dde-42a3-9793-7ae1be57c87f/?folderName=/Merchant+Service+Charges" target="_blank" rel="noopener" class="iso-bank-pill">🏦 HDFC Merchant Acquiring</a>
          <a href="https://www.icicibank.com/business/merchant-acquiring" target="_blank" rel="noopener" class="iso-bank-pill">🏦 ICICI Merchant Services</a>
          <a href="https://www.axisbank.com/business-banking/merchant-banking" target="_blank" rel="noopener" class="iso-bank-pill">🏦 Axis Merchant Banking</a>
          <a href="https://pinelabs.com/partners" target="_blank" rel="noopener" class="iso-bank-pill">⚙️ Pine Labs Partners</a>
          <a href="https://www.worldline.com/en/home/main-navigation/solutions/merchant-services.html" target="_blank" rel="noopener" class="iso-bank-pill">🌐 Worldline India</a>
        </div>
        <p class="iso-step-p" style="margin-top:0.75rem;"><span class="en">Submit: Company documents, Director KYC, PCI-DSS certificate, 6-month DSA performance report, business plan with merchant pipeline.</span><span class="ta">சமர்ப்பிக்கவும்: Company documents, Director KYC, PCI-DSS certificate, 6-month DSA performance report.</span></p>
        <div class="iso-step-meta"><span class="tag tag-time">1–3 months review</span><span class="tag tag-cost">No direct fee to bank</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">05</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Sign the ISO/MSP Agreement + Merchant Processing Agreement (MPA)</div>
        <p class="iso-step-p"><span class="en">The ISO Agreement defines: your revenue share (typically 10–25 bps of MDR), residual split, chargeback liability cap, MCC restrictions, and exclusivity/non-compete clauses. The MPA is the template you'll use with every merchant you onboard. Key terms to negotiate: <strong>residual ownership</strong> (do you own your merchant portfolio or the bank does?), <strong>chargeback liability cap</strong>, <strong>non-compete radius</strong>, and <strong>minimum volume commitments</strong>.</span><span class="ta">ISO Agreement: revenue share (10–25 bps), residual split, chargeback liability cap, MCC restrictions. முக்கிய terms: residual ownership, chargeback liability cap.</span></p>
        <div class="iso-step-meta"><span class="tag tag-req">Legal review strongly advised</span><span class="tag tag-cost">₹50K–₹2L legal fees</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">06</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Card scheme registration — Visa &amp; Mastercard</div>
        <p class="iso-step-p"><span class="en">Once a bank agrees to sponsor you, they register you with Visa as a "Visa Registered MSP" and with Mastercard as an "MSP". This registration appears in Visa's Global Registry of Service Providers. Registration is done by the bank on your behalf — but you must pass Visa's due diligence form (background check, AML/KYC on directors, technology questionnaire). Mastercard uses the <a href="https://www.mastercard.com/global/en/business/overview/safety-and-security/msp-program.html" target="_blank" rel="noopener" class="ext-link">MSP Program portal</a>. Annual registration fee: ~$5,000–$10,000 per scheme.</span><span class="ta">Bank உங்களை Visa Registered MSP மற்றும் Mastercard MSP ஆக பதிவு செய்யும். Visa due diligence form, directors AML/KYC pass செய்ய வேண்டும். Annual fee: ~$5,000–$10,000.</span></p>
        <div class="iso-step-meta"><span class="tag tag-cost">$5K–$10K/year per scheme</span><span class="tag tag-time">4–8 weeks from bank submission</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">07</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Build your operations stack</div>
        <p class="iso-step-p"><span class="en">Once registered, you're a full ISO. Now build the operational machinery:</span><span class="ta">பதிவு செய்த பிறகு, operations stack கட்டுங்கள்:</span></p>
        <ul class="iso-ops-list">
          <li><strong>Merchant onboarding portal</strong> — digital KYC, MCC selection, bank account verification (penny drop)</li>
          <li><strong>Terminal management system (TMS)</strong> — remote key injection, parameter download, software updates</li>
          <li><strong>Helpdesk</strong> — L1 for terminal issues, chargebacks, settlement queries (SLA: 24h response)</li>
          <li><strong>Dispute management</strong> — chargeback response to acquirer within 45 days; keep sales slips, delivery proof</li>
          <li><strong>Reporting dashboard</strong> — real-time transaction volumes, MDR earned, chargeback ratio per merchant</li>
        </ul>
        <div class="iso-step-meta"><span class="tag tag-cost">₹10L–₹30L build cost</span><span class="tag tag-time">3–6 months to MVP</span></div>
      </div>
    </div>
    <div class="iso-step" data-reveal>
      <div class="iso-step-num">08</div>
      <div class="iso-step-body">
        <div class="iso-step-h">Revenue model &amp; scale targets</div>
        <p class="iso-step-p"><span class="en">An ISO earns on the <em>residual spread</em> — the difference between the MDR charged to the merchant and what passes to the acquiring bank. Example: Merchant pays 2.0% MDR → acquirer takes 1.85% → you keep 0.15% = 15 basis points. On ₹1 crore/month of merchant GMV, that's ₹15,000/month passive income per crore of volume. Scale to ₹100 Cr GMV/month → ₹15 Lakh/month residual.</span><span class="ta">ISO residual spread மூலம் சம்பாதிக்கிறது. Merchant ₹2.0% MDR செலுத்துகிறார் → acquirer ₹1.85% எடுக்கிறது → நீங்கள் 0.15% வைத்திருக்கிறீர்கள். ₹100Cr GMV/month → ₹15L/month passive income.</span></p>
        <div class="iso-rev-grid">
          <div class="iso-rev-item"><span class="iso-rev-gmv">₹10 Cr/mo</span><span class="iso-rev-earn">~₹1.5L/mo residual</span></div>
          <div class="iso-rev-item"><span class="iso-rev-gmv">₹50 Cr/mo</span><span class="iso-rev-earn">~₹7.5L/mo residual</span></div>
          <div class="iso-rev-item iso-rev-item--gold"><span class="iso-rev-gmv">₹500 Cr/mo</span><span class="iso-rev-earn">~₹75L/mo residual</span></div>
        </div>
        <div class="iso-step-meta"><span class="tag tag-ok">Recurring passive income</span><span class="tag tag-time">Break-even ~18–24 months</span></div>
      </div>
    </div>
  </div>
</div>

<!-- The illegal "cash against card" operation -->
<h3 class="s-sub-title" data-reveal>⛔ <span class="en">The illegal "cash against card" operation</span><span class="ta">சட்டவிரோதமான "கார்டு மூலம் பணம்" நடவடிக்கை</span></h3>
<div style="background:linear-gradient(135deg,#1a0a0a,#2d0e0e);border:1px solid rgba(239,68,68,0.3);border-radius:var(--radius);padding:2rem;margin-bottom:2rem;" data-reveal>
  <p style="color:rgba(255,255,255,0.8);font-size:0.93rem;line-height:1.75;margin-bottom:1.5rem;">
    <span class="en">A cardholder approaches a merchant with a POS terminal. They want ₹20,000 cash. The merchant runs a <strong>fake transaction</strong> on the card for ₹20,000 + ₹600 fee (3%). The customer gets ₹20,000 cash; the merchant swipes ₹20,600. There is no actual goods or service exchanged. The merchant submits a bogus purchase entry and pockets the fee. This is called <em>cash advance via merchant POS</em> and is a <strong>multi-statute crime</strong> in India.</span>
    <span class="ta">ஒரு கார்டு வைத்திருப்பவர் POS terminal கொண்ட merchant-ஐ அணுகுகிறார். அவர்கள் ₹20,000 பணம் விரும்புகிறார்கள். Merchant கார்டில் போலி பரிவர்த்தனை இயக்குகிறார். இது இந்தியாவில் பல சட்டங்களை மீறுகிறது.</span>
  </p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
    <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:1.25rem;">
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,100,100,0.9);margin-bottom:0.75rem;">How it works</div>
      <ul style="list-style:none;font-size:0.85rem;color:rgba(255,255,255,0.75);display:flex;flex-direction:column;gap:6px;">
        <li>💳 Customer wants cash against credit limit</li>
        <li>🏪 Merchant runs fake "purchase" on POS</li>
        <li>💵 Merchant gives cash (minus 2–4% fee)</li>
        <li>🧾 Merchant logs a fake SKU (e.g., "hardware")</li>
        <li>🔄 Merchant gets bank settlement T+2</li>
        <li>📦 No actual goods/service involved</li>
      </ul>
    </div>
    <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:1.25rem;">
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,100,100,0.9);margin-bottom:0.75rem;">Why it's detected</div>
      <ul style="list-style:none;font-size:0.85rem;color:rgba(255,255,255,0.75);display:flex;flex-direction:column;gap:6px;">
        <li>🔍 Card scheme velocity rules flag round-number amounts</li>
        <li>📊 Acquiring bank ML models detect MCC mismatch</li>
        <li>🏦 Bank SAR (Suspicious Activity Report) triggered by AML</li>
        <li>🧠 No chargeback evidence (no receipt, no delivery)</li>
        <li>📱 FIU-IND tracks cash flow patterns across STRs</li>
        <li>🚨 Visa/MC fraud network cross-referencing</li>
      </ul>
    </div>
  </div>
</div>

<!-- Where it falls legally -->
<h3 class="s-sub-title" data-reveal>⚖️ <span class="en">Legal framework — where it falls</span><span class="ta">சட்ட கட்டமைப்பு — இது எங்கு வருகிறது</span></h3>
<div class="risk-grid" data-stagger>
  <div class="risk-card">
    <h4>🏛️ IPC / BNS Section 420 / 318</h4>
    <p><span class="en"><strong>Cheating and dishonestly inducing delivery of property.</strong> A fake POS swipe is a fraudulent misrepresentation to the bank and card network. Punishment: imprisonment up to <strong>7 years + fine</strong>. Applies to both the merchant and the cardholder who knowingly participated.</span><span class="ta">போலி POS swipe என்பது வங்கி மற்றும் கார்டு நெட்வொர்க்கிற்கு மோசடியான தவறான சித்தரிப்பு. தண்டனை: 7 ஆண்டுகள் சிறை + அபராதம்.</span></p>
  </div>
  <div class="risk-card">
    <h4>💻 IT Act 2000 — Section 66C &amp; 66D</h4>
    <p><span class="en"><strong>Identity theft &amp; cheating by personation using computer resource.</strong> Using someone's card data in a POS for a purpose not intended by the cardholder (cash advance) = identity misuse via electronic means. Punishment: up to <strong>3 years + ₹1 lakh fine</strong>. Cognizable, non-bailable offence.</span><span class="ta">Section 66C: அடையாள திருட்டு. Section 66D: கணினி வளம் மூலம் மோசடி. தண்டனை: 3 ஆண்டுகள் + ₹1 லட்சம்.</span></p>
  </div>
  <div class="risk-card">
    <h4>💰 PMLA 2002 — Money Laundering</h4>
    <p><span class="en"><strong>Proceeds of crime laundering.</strong> The cash from fake card swipes is "proceeds of a scheduled offence". PMLA enables ED (Enforcement Directorate) to attach all property — including the merchant's shop, house, and bank accounts. Punishment: <strong>3–7 years rigorous imprisonment + property attachment.</strong></span><span class="ta">போலி swipes-ல் இருந்து பணம் "scheduled offence-ன் வருமானம்". ED சொத்துக்களை இணைக்கலாம். 3–7 ஆண்டுகள் கடுமையான சிறை + சொத்து இணைப்பு.</span></p>
  </div>
  <div class="risk-card">
    <h4>🏦 PSS Act 2007 + RBI Directions</h4>
    <p><span class="en"><strong>Unauthorized payment system operation.</strong> Running a de-facto cash advance system via POS = operating a payment system without authorisation. RBI can direct the bank to <strong>immediately terminate merchant account</strong> and blacklist the merchant across all acquiring banks in India via the Merchant Risk List (MRL).</span><span class="ta">PSS Act-ன் கீழ் அங்கீகாரமற்ற payment system இயக்குவது. RBI merchant கணக்கை உடனடியாக நிறுத்தும். Merchant Risk List (MRL)-ல் சேர்க்கப்படும்.</span></p>
  </div>
</div>

<!-- Penalty grid -->
<h3 class="s-sub-title" data-reveal>⚠️ <span class="en">Penalty grid — what you face</span><span class="ta">அபராத அட்டவணை</span></h3>
<div class="penalty-grid" data-stagger>
  <div class="pen-card">
    <div class="pen-icon">🏛️</div>
    <div class="pen-act">IPC 420 / BNS 318</div>
    <div class="pen-charge">Cheating</div>
    <div class="pen-punish">Up to <strong>7 years</strong> imprisonment + unlimited fine</div>
    <div class="pen-who">Merchant + Cardholder</div>
  </div>
  <div class="pen-card">
    <div class="pen-icon">💻</div>
    <div class="pen-act">IT Act §66C/66D</div>
    <div class="pen-charge">Identity misuse / electronic cheating</div>
    <div class="pen-punish">Up to <strong>3 years</strong> + ₹1 lakh fine</div>
    <div class="pen-who">Merchant (primary)</div>
  </div>
  <div class="pen-card">
    <div class="pen-icon">💰</div>
    <div class="pen-act">PMLA 2002</div>
    <div class="pen-charge">Money laundering</div>
    <div class="pen-punish"><strong>3–7 years</strong> rigorous imprisonment + property attachment</div>
    <div class="pen-who">Merchant + any co-conspirators</div>
  </div>
  <div class="pen-card">
    <div class="pen-icon">🏦</div>
    <div class="pen-act">PSS Act 2007</div>
    <div class="pen-charge">Unauthorized payment system</div>
    <div class="pen-punish">₹10L fine per violation + ₹10K/day + <strong>10 years</strong> imprisonment (fraud)</div>
    <div class="pen-who">Operator + directors</div>
  </div>
  <div class="pen-card">
    <div class="pen-icon">🌐</div>
    <div class="pen-act">Card Scheme Rules</div>
    <div class="pen-charge">Merchant rules violation</div>
    <div class="pen-punish">Terminal termination + <strong>permanent MRL blacklist</strong> across all Indian banks + chargeback liability</div>
    <div class="pen-who">Merchant (permanent ban)</div>
  </div>
  <div class="pen-card">
    <div class="pen-icon">🏧</div>
    <div class="pen-act">Banking Regulation Act</div>
    <div class="pen-charge">Misuse of banking facility</div>
    <div class="pen-punish">Account freeze · all associated accounts in network blacklisted · CIBIL score destroyed</div>
    <div class="pen-who">Merchant + all directors</div>
  </div>
</div>

<div class="callout-pe" data-reveal>
  <div class="pe-label">💡 In plain English</div>
  <span class="en">If you walk into a jewelry shop and say "swipe my credit card and give me cash" — both you <em>and</em> the shopkeeper are committing multiple crimes simultaneously. The shopkeeper faces potential IPC cheating, IT Act identity misuse, PMLA money laundering, and permanent blacklisting from ever accepting cards again anywhere in India. The bank sees a round-number POS transaction with no inventory movement and files a SAR automatically. You don't get a warning — you get a CBI or ED notice.</span>
  <span class="ta">நீங்கள் ஒரு நகைக்கடையில் சென்று "என் கிரெடிட் கார்டை swipe செய்து பணம் கொடுங்கள்" என்று சொன்னால் — நீங்களும் கடைக்காரனும் ஒரே நேரத்தில் பல குற்றங்கள் செய்கிறீர்கள்.</span>
</div>

<div class="alert-box" data-reveal style="margin-top:2rem">
  <strong>🔍 <span class="en">How authorities detect card swiping shops</span><span class="ta">அதிகாரிகள் எவ்வாறு கண்டுபிடிக்கிறார்கள்</span></strong>
  <p><span class="en">Detection is now automated. Banks use real-time ML fraud detection — pattern recognition triggers within minutes:</span><span class="ta">கண்டறிதல் தானியங்கியாக உள்ளது:</span></p>
  <ul>
    <li><span class="en">Multiple large round-number transactions at the same terminal in one day</span><span class="ta">ஒரே terminal-ல் ஒரே நாளில் பல பெரிய round-number பரிவர்த்தனைகள்</span></li>
    <li><span class="en">MCC code mismatch (hardware store with jewelry-level transaction values)</span><span class="ta">MCC குறியீட்டு பொருத்தமின்மை</span></li>
    <li><span class="en">High chargeback ratio triggers acquirer review</span><span class="ta">அதிக chargeback விகிதம் acquirer மதிப்பாய்வை தூண்டுகிறது</span></li>
    <li><span class="en">Customer STR filed by issuing bank's AML system (FIU-IND receives)</span><span class="ta">Issuing bank-ன் AML system-ஆல் STR பதிவு செய்யப்படுகிறது</span></li>
    <li><span class="en">Visa/Mastercard Global Security network alerts acquiring bank directly</span><span class="ta">Visa/Mastercard நேரடியாக acquiring bank-ஐ எச்சரிக்கிறது</span></li>
  </ul>
</div>

<!-- ═══════════════════════════════════════════════════════════
     BUILD YOUR OWN CARD NETWORK — LIKE VISA / MASTERCARD / RUPAY
     ═══════════════════════════════════════════════════════════ -->
<h3 class="s-sub-title" data-reveal style="margin-top:4rem">🏗️ <span class="en">Building a card network — what it actually takes</span><span class="ta">கார்டு நெட்வொர்க் கட்டுதல் — உண்மையில் என்ன தேவை</span></h3>
<p class="s-desc" data-reveal>
  <span class="en">Visa, Mastercard, and RuPay are not banks — they are <em>network operators</em>. They own the rules, the messaging infrastructure, and the clearing/settlement rails that sit between issuing banks and acquiring banks. Building one is one of the most capital-intensive and regulation-heavy projects in fintech — but it has been done. RuPay proved it in India. Here's the complete architecture.</span>
  <span class="ta">Visa, Mastercard, RuPay ஆகியவை banks அல்ல — அவை network operators. அவை rules, messaging infrastructure, clearing/settlement rails ஐ சொந்தமாக வைத்திருக்கின்றன.</span>
</p>

<!-- What a card network IS -->
<div class="cnw-what" data-reveal>
  <h4 class="cnw-title">🧩 What a card network actually is</h4>
  <div class="cnw-grid">
    <div class="cnw-item">
      <div class="cnw-icon">📜</div>
      <div class="cnw-label">Rules Engine</div>
      <p class="cnw-text">A legally binding rulebook (Visa International Operating Regulations, Mastercard Rules) governing every participant. Defines interchange rates, dispute timelines, fraud liability, prohibited transactions, certification requirements.</p>
    </div>
    <div class="cnw-item">
      <div class="cnw-icon">⚡</div>
      <div class="cnw-label">Authorization Switch</div>
      <p class="cnw-text">A real-time ISO 8583 message router. When a card is tapped anywhere in the world, a 0.2kb authorization request is routed to the issuing bank through this switch in &lt;100ms. Processes millions of transactions/second (VisaNet: 65,000 TPS capacity).</p>
    </div>
    <div class="cnw-item">
      <div class="cnw-icon">📊</div>
      <div class="cnw-label">Clearing System</div>
      <p class="cnw-text">At end of each business day, all authorized transactions are submitted to the network for clearing. The network calculates net positions: what each acquiring bank owes to each issuing bank (interchange netting). ISO 20022 file format.</p>
    </div>
    <div class="cnw-item">
      <div class="cnw-icon">💸</div>
      <div class="cnw-label">Settlement System</div>
      <p class="cnw-text">After clearing, the network instructs a settlement bank (or central bank RTGS) to move funds between members. In India, RuPay uses RBI's RTGS. Visa uses JP Morgan Chase as primary settlement bank globally.</p>
    </div>
    <div class="cnw-item">
      <div class="cnw-icon">🔐</div>
      <div class="cnw-label">Key Management (HSM)</div>
      <p class="cnw-text">All card transactions are encrypted with symmetric keys (3DES/AES-128). The network operates a master key hierarchy — card personalization keys, terminal master keys, session keys. Hardware Security Modules (HSMs) manage this at every node.</p>
    </div>
    <div class="cnw-item">
      <div class="cnw-icon">🛡️</div>
      <div class="cnw-label">Fraud Intelligence Network</div>
      <p class="cnw-text">Visa Advanced Authorization (VAA) and Mastercard Safety Net score every transaction in real-time using ML. They aggregate fraud signals across all member banks globally — a capability no single bank can replicate alone.</p>
    </div>
  </div>
</div>

<!-- RuPay case study -->
<h4 class="s-sub-title" data-reveal style="font-size:1.1rem;margin-top:2.5rem">🇮🇳 <span class="en">RuPay — how India built its own network</span><span class="ta">RuPay — இந்தியா எவ்வாறு தனது சொந்த network கட்டியது</span></h4>
<div class="rupay-timeline" data-reveal>
  <div class="rt-item"><span class="rt-year">2008</span><span class="rt-event">RBI mandates creation of a domestic card scheme independent of Visa/Mastercard — NPCI formed as not-for-profit umbrella organization by 10 core banks</span></div>
  <div class="rt-item"><span class="rt-year">2012</span><span class="rt-event">RuPay launched for domestic debit cards. Lower interchange than Visa/MC to make card acceptance affordable for small merchants across India</span></div>
  <div class="rt-item"><span class="rt-year">2014</span><span class="rt-event">Jan Dhan Yojana — 400M+ new bank accounts opened with RuPay debit cards. Government subsidy delivery via AEPS on RuPay rails creates national scale overnight</span></div>
  <div class="rt-item"><span class="rt-year">2017</span><span class="rt-event">RuPay credit cards launched. RuPay On UPI (2022) — credit card linked to UPI VPA — a global first; no other network has P2M credit card on a UPI-like real-time system</span></div>
  <div class="rt-item"><span class="rt-year">2023</span><span class="rt-event">RuPay accepted in 10+ countries (UAE, Singapore, Bhutan, Nepal, Maldives, UK). Memoranda with JCB (Japan), Discover (US), UnionPay (China) for cross-acceptance</span></div>
  <div class="rt-item rt-item--now"><span class="rt-year">Today</span><span class="rt-event">RuPay holds ~60% of debit card market share in India. Processing 8B+ transactions/year. Zero MDR on P2M UPI-RuPay transactions — mandated by RBI Dec 2021</span></div>
</div>

<!-- Regulatory framework -->
<h4 class="s-sub-title" data-reveal style="font-size:1.1rem;margin-top:2.5rem">⚖️ <span class="en">Regulatory path — what RBI requires</span><span class="ta">ஒழுங்குமுறை பாதை</span></h4>
<div class="risk-grid" data-stagger>
  <div class="risk-card">
    <h4>📋 PSS Act 2007 — Authorization</h4>
    <p><span class="en">You must apply to RBI under the Payment and Settlement Systems Act 2007, Section 4. Specifically under the category <strong>"Retail Electronic Payment Systems"</strong>. RBI issues a Certificate of Authorization. Currently only NPCI (RuPay/IMPS/UPI), Visa, Mastercard, Amex, and Diners Club hold this authorization for card networks in India. Getting a new authorization requires demonstrating national significance, capital adequacy, and technology readiness.</span><span class="ta">RBI-ல் PSS Act 2007, Section 4 கீழ் விண்ணப்பிக்கவும். தற்போது NPCI, Visa, Mastercard, Amex மட்டுமே இந்த authorization வைத்திருக்கின்றன.</span></p>
  </div>
  <div class="risk-card">
    <h4>💰 Capital Requirement — ₹300 Crore+</h4>
    <p><span class="en">RBI's proposed framework for Payment System Operators (PSOs) in the "Large" category requires net worth of ₹300 crore. This is the minimum financial commitment. Operational capital (technology, staffing, marketing) typically requires 2–5× that. Total realistic capital: <strong>₹500 Cr – ₹1,500 Cr</strong> to reach operational viability. Compare: NPCI was capitalized by 10 core banks contributing ₹10Cr each at inception.</span><span class="ta">RBI-ன் proposed framework "Large" category PSO-க்கு ₹300 Cr net worth தேவை. மொத்த realistic capital: ₹500Cr – ₹1,500Cr.</span></p>
  </div>
</div>

<!-- 5 stages to build -->
<h4 class="s-sub-title" data-reveal style="font-size:1.1rem;margin-top:2.5rem">🗺️ <span class="en">The 5 stages to build a card network</span><span class="ta">கார்டு network கட்ட 5 நிலைகள்</span></h4>
<div class="cnw-stages" data-stagger>
  <div class="cnw-stage">
    <div class="cnw-stage-num">1</div>
    <div class="cnw-stage-body">
      <div class="cnw-stage-h">Regulatory authorization + governance structure</div>
      <p class="cnw-stage-p"><span class="en">File for PSS Act authorization with RBI. Simultaneously establish governance — a board with RBI nominee, independent directors, and member bank representatives. Model: NPCI's consortium ownership (banks collectively own NPCI) vs Visa/Mastercard's for-profit shareholder model. RBI strongly favors not-for-profit or government-linked structures for new domestic networks.</span><span class="ta">RBI-ல் PSS Act authorization file செய்யுங்கள். Governance structure நிறுவுங்கள் — RBI nominee, independent directors கொண்ட board.</span></p>
      <div class="cnw-stage-meta"><span class="tag tag-time">2–5 years</span><span class="tag tag-cost">₹300Cr+ capital required</span></div>
    </div>
  </div>
  <div class="cnw-stage">
    <div class="cnw-stage-num">2</div>
    <div class="cnw-stage-body">
      <div class="cnw-stage-h">Build or license the authorization switch (ISO 8583 / EMV)</div>
      <p class="cnw-stage-p"><span class="en">The core of a card network is the authorization switch. You can build custom or license from vendors: <strong>ACI Worldwide</strong> (BASE24-eps), <strong>FIS</strong> (EFT switching), or open-source EMV kernel libraries. The switch must handle: ISO 8583 message parsing, routing tables for BIN ranges (Bank Identification Numbers), HSM integration for PIN verification (DUKPT key derivation), and real-time fraud scoring hooks. Data centers must be redundant (N+1), geographically separated, with &lt;50ms inter-node latency.</span><span class="ta">ISO 8583 authorization switch கட்டுங்கள் அல்லது ACI Worldwide, FIS-இடம் license பெறுங்கள். BIN routing, HSM integration, real-time fraud scoring தேவை.</span></p>
      <div class="cnw-stage-meta"><span class="tag tag-time">18–36 months</span><span class="tag tag-cost">₹50Cr–₹200Cr</span></div>
    </div>
  </div>
  <div class="cnw-stage">
    <div class="cnw-stage-num">3</div>
    <div class="cnw-stage-body">
      <div class="cnw-stage-h">Certify member banks — issuers + acquirers</div>
      <p class="cnw-stage-p"><span class="en">Minimum viable network = at least 5 issuing banks + 5 acquiring banks who agree to your rules and go through your technical certification. Banks must install your keys (BDK — Base Derivation Key) in their HSMs, integrate your ISO 8583 specifications, and pass test suites. RuPay started with SBI, PNB, Canara Bank, BoI, UBI. Larger = better network effect. Target: all PSU banks first (RBI influence helps), then private.</span><span class="ta">குறைந்தபட்சம் 5 issuing + 5 acquiring banks தேவை. Banks உங்கள் BDK keys-ஐ HSM-ல் install செய்து technical certification pass செய்ய வேண்டும்.</span></p>
      <div class="cnw-stage-meta"><span class="tag tag-time">12–24 months</span><span class="tag tag-cost">₹20Cr–₹50Cr certification ops</span></div>
    </div>
  </div>
  <div class="cnw-stage">
    <div class="cnw-stage-num">4</div>
    <div class="cnw-stage-body">
      <div class="cnw-stage-h">Terminal &amp; ATM ecosystem certification (EMV)</div>
      <p class="cnw-stage-p"><span class="en">Every POS terminal and ATM that will accept your card must be certified for your EMV kernel. In India, approx 8 million POS terminals and 2.5 lakh ATMs exist. Getting terminal manufacturers (Verifone, Ingenico, PAX, Newland) to certify their hardware for your kernel takes 6–18 months per OEM. RuPay had a significant advantage: RBI mandated that all domestic-certified terminals must accept RuPay. Without regulatory mandate, you must negotiate each OEM separately.</span><span class="ta">ஒவ்வொரு POS terminal-உம் உங்கள் EMV kernel-ஐ certify செய்ய வேண்டும். Verifone, Ingenico, PAX போன்ற OEM-களுடன் 6–18 மாதம் certification process.</span></p>
      <div class="cnw-stage-meta"><span class="tag tag-time">2–4 years</span><span class="tag tag-cost">₹30Cr–₹80Cr</span></div>
    </div>
  </div>
  <div class="cnw-stage">
    <div class="cnw-stage-num">5</div>
    <div class="cnw-stage-body">
      <div class="cnw-stage-h">Cardholder &amp; merchant scale — the chicken-and-egg problem</div>
      <p class="cnw-stage-p"><span class="en">The hardest part. Merchants won't accept your card if few cardholders have it. Cardholders won't want your card if few merchants accept it. RuPay's solution: government mandate + Jan Dhan accounts (400M cards instantly). Your solutions without that mandate: (a) deep discounts/cashback to first-mover cardholders, (b) exclusive merchants or vertical focus (e.g., B2B fleet cards), (c) closed-loop ecosystem (issue + acquire within one ecosystem — think Amazon Pay / Jio Cards). Set 10-year break-even expectation.</span><span class="ta">சிக்கனமான cardholders இல்லாமல் merchants ஏற்க மாட்டார்கள். RuPay தீர்வு: government mandate + Jan Dhan accounts. உங்கள் தீர்வு: cashback, closed-loop ecosystem.</span></p>
      <div class="cnw-stage-meta"><span class="tag tag-time">5–10 years to critical mass</span><span class="tag tag-cost">₹200Cr+ marketing</span></div>
    </div>
  </div>
</div>

<!-- Realistic paths -->
<h4 class="s-sub-title" data-reveal style="font-size:1.1rem;margin-top:2.5rem">🚀 <span class="en">Realistic paths for a startup today</span><span class="ta">இன்று ஒரு startup-க்கான யதார்த்தமான பாதைகள்</span></h4>
<div class="cs-legal-grid" data-stagger>
  <div class="csl-card">
    <div class="csl-icon">📱</div>
    <h4 class="csl-title">Path A — Build on UPI (fastest)</h4>
    <p class="csl-desc"><span class="en">Become a TPAP (Third Party Application Provider) on NPCI's UPI. Launch a UPI app, build your merchant ecosystem, and layer loyalty/rewards on top. Paytm, PhonePe, and Google Pay are all TPAPs. No card network needed — UPI <em>is</em> the network. Apply via <a href="https://www.npci.org.in/what-we-do/upi/how-to-join" target="_blank" rel="noopener" class="ext-link">NPCI UPI joining process</a>. Need: PSP bank partner + NPCI TPAP agreement.</span><span class="ta">NPCI-ன் UPI TPAP ஆகுங்கள். Merchant ecosystem, loyalty layers. NPCI-யில் <a href="https://www.npci.org.in/what-we-do/upi/how-to-join" target="_blank" rel="noopener" class="ext-link">விண்ணப்பிக்கவும்</a>.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">Fastest to market</span><span class="tag tag-cost">₹2Cr–₹10Cr</span><span class="tag tag-time">6–18 months</span></div>
  </div>
  <div class="csl-card">
    <div class="csl-icon">💳</div>
    <h4 class="csl-title">Path B — Closed-loop prepaid card</h4>
    <p class="csl-desc"><span class="en">Issue a closed-loop or semi-closed prepaid instrument (PPI) under RBI PPI licence. Works like a gift card or corporate expense card within your ecosystem. Issue cards under your brand on RuPay/Visa/Mastercard BIN, powered by a bank partner. Examples: Navi, Slice, Uni Cards — all issue cards under a bank's licence but with their own UX. Need: PPI Category II/III licence from RBI (₹25Cr net worth, ₹5Cr capital).</span><span class="ta">RBI PPI licence கீழ் closed-loop prepaid card issue செய்யுங்கள். Bank partner-ன் BIN கீழ் உங்கள் brand card issue. PPI licence: ₹25Cr net worth, ₹5Cr capital.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">Proven model</span><span class="tag tag-cost">₹5Cr–₹30Cr</span><span class="tag tag-req">PPI licence required</span></div>
  </div>
  <div class="csl-card">
    <div class="csl-icon">🏢</div>
    <h4 class="csl-title">Path C — Vertical card network (B2B)</h4>
    <p class="csl-desc"><span class="en">Build a purpose-specific network: fleet cards (trucking industry), agricultural input cards (farmer credit), healthcare expense cards (hospital chains). A vertical closed-loop scheme can operate under existing RBI frameworks without a full card network authorization. Examples globally: WEX (fleet), Voyager (fuel), Comdisco (healthcare). In India: <a href="https://www.rapipay.com" target="_blank" rel="noopener" class="ext-link">RapiPay</a>, <a href="https://www.eko.co.in" target="_blank" rel="noopener" class="ext-link">Eko</a> in BC/micro-payment space.</span><span class="ta">Fleet cards, agricultural cards, healthcare expense cards போன்ற vertical network கட்டுங்கள். Full card network authorization இல்லாமல் RBI frameworks கீழ் operate செய்யலாம்.</span></p>
    <div class="csl-tags"><span class="tag tag-ok">No full authorization needed</span><span class="tag tag-cost">₹10Cr–₹50Cr</span><span class="tag tag-time">1–3 years</span></div>
  </div>
  <div class="csl-card">
    <div class="csl-icon">🌐</div>
    <h4 class="csl-title">Path D — Full domestic network (long-term)</h4>
    <p class="csl-desc"><span class="en">The RuPay model. Requires: PSS Act RBI authorization → ₹300Cr+ capital → 10+ bank members → ISO 8583 switch → EMV certification → marketing at scale. Timeline: 5–10 years minimum. Best positioned: a consortium of NBFCs/new age banks backed by a state government, or a tech giant (Reliance, Tata) with an existing merchant ecosystem. The RBI sandbox program can provide a shorter-path testing environment before full authorization.</span><span class="ta">RuPay model. PSS Act RBI authorization → ₹300Cr+ → 10+ bank members → ISO 8583 switch. Timeline: 5–10 years. RBI sandbox program shorter-path testing வழங்கலாம்.</span></p>
    <div class="csl-tags"><span class="tag tag-warn">Ultra long-term</span><span class="tag tag-cost">₹500Cr–₹1,500Cr</span><span class="tag tag-time">5–10 years</span></div>
  </div>
</div>

<div class="callout-pe" data-reveal style="margin-top:2rem">
  <div class="pe-label">💡 In plain English</div>
  <span class="en">You cannot "build a Visa" overnight — or even in 5 years as a startup. But you don't have to. Paytm built a ₹1.5L Cr GMV payment empire on top of NPCI's rails without owning a single BIN or operating a single authorization switch. The smartest play: build your merchant/consumer network on UPI or PPI, then — once you have scale and regulatory goodwill — approach RBI for an expanded authorization. RuPay's lesson: the network is only as powerful as the government mandate behind it.</span>
  <span class="ta">ஒரு startup-க்கு "Visa கட்டுவது" 5 ஆண்டுகளில் சாத்தியமில்லை. ஆனால் தேவையில்லை. Paytm ஒரே ஒரு BIN அல்லது authorization switch இல்லாமல் ₹1.5L Cr GMV empire கட்டியது — NPCI rails-ல்.</span>
</div>`
}

]; // end window.SECTIONS
