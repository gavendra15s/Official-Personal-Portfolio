import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('        <!-- Card 1 -->')
end_idx = content.find('      </div>\n      <div class="cta-banner reveal">')

new_cards = """        <!-- Card 1 -->
        <div class="c-card">
          <div class="c-header">
            <div class="c-icon-box">🚀</div>
            <div class="c-title-area">
              <h3>Startup Idea Validation</h3>
              <div class="c-meta">
                <span><i class="far fa-clock"></i> 30 mins</span>
                <span><i class="fas fa-video"></i> Google Meet</span>
              </div>
            </div>
          </div>
          <p>Get your startup idea validated with actionable feedback and clear next steps.</p>
          <ul class="c-features">
            <li>Startup validation framework</li>
            <li>Customer identification</li>
            <li>Incubator guidance</li>
            <li>Pitch strategy</li>
          </ul>
          <div class="c-footer">
            <div class="c-price-wrap">
              <div class="c-price">₹200</div>
            </div>
            <a href="#contact" class="c-btn">Book Session <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="c-card">
          <div class="c-header">
            <div class="c-icon-box">🏢</div>
            <div class="c-title-area">
              <h3>Startup Registration Guidance</h3>
              <div class="c-meta">
                <span><i class="far fa-clock"></i> 30 mins</span>
                <span><i class="fas fa-video"></i> Google Meet</span>
              </div>
            </div>
          </div>
          <p>Complete guidance on how to officially register and structure your new company.</p>
          <ul class="c-features">
            <li>Pvt Ltd company setup</li>
            <li>GST &amp; MSME registration</li>
            <li>Startup India recognition</li>
            <li>CA &amp; legal support referral</li>
          </ul>
          <div class="c-footer">
            <div class="c-price-wrap">
              <div class="c-price">₹300</div>
            </div>
            <a href="#contact" class="c-btn">Book Session <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="c-card">
          <div class="c-header">
            <div class="c-icon-box">📈</div>
            <div class="c-title-area">
              <h3>Marketing &amp; Branding Strategy</h3>
              <div class="c-meta">
                <span><i class="far fa-clock"></i> 45 mins</span>
                <span><i class="fas fa-video"></i> Google Meet</span>
              </div>
            </div>
          </div>
          <p>Strategic approach to positioning your brand and acquiring your first customers.</p>
          <ul class="c-features">
            <li>Branding materials &amp; strategy</li>
            <li>Poster &amp; content creation</li>
            <li>Offline marketing playbook</li>
            <li>Printing strategy</li>
          </ul>
          <div class="c-footer">
            <div class="c-price-wrap">
              <div class="c-price">₹500</div>
            </div>
            <a href="#contact" class="c-btn">Book Session <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="c-card">
          <div class="c-header">
            <div class="c-icon-box">💰</div>
            <div class="c-title-area">
              <h3>Investor &amp; VC Outreach</h3>
              <div class="c-meta">
                <span><i class="far fa-clock"></i> 45 mins</span>
                <span><i class="fas fa-video"></i> Google Meet</span>
              </div>
            </div>
          </div>
          <p>Actionable advice on preparing your deck and reaching out to potential investors.</p>
          <ul class="c-features">
            <li>Investor outreach strategy</li>
            <li>VC research &amp; mapping</li>
            <li>Cold email templates</li>
            <li>Pitch deck review</li>
          </ul>
          <div class="c-footer">
            <div class="c-price-wrap">
              <div class="c-price">₹700</div>
            </div>
            <a href="#contact" class="c-btn">Book Session <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="c-card" style="grid-column: span 2;">
          <div class="c-header">
            <div class="c-icon-box">⚡</div>
            <div class="c-title-area">
              <h3>Internship &amp; Career Mentorship</h3>
              <div class="c-meta">
                <span><i class="far fa-clock"></i> 60 mins</span>
                <span><i class="fas fa-video"></i> Google Meet</span>
              </div>
            </div>
          </div>
          <p>Personalized career planning, resume optimization, and internship acquisition strategies.</p>
          <ul class="c-features" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px;">
            <li>NTPC internship mentorship</li>
            <li>Resume &amp; LinkedIn optimization</li>
            <li>Career roadmap planning</li>
            <li>IIT professor outreach strategy</li>
            <li>Research internship guidance</li>
            <li>SAARC program guidance</li>
          </ul>
          <div class="c-footer">
            <div class="c-price-wrap">
              <div class="c-price">₹1,000</div>
            </div>
            <a href="#contact" class="c-btn">Book Session <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>

"""

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_cards + content[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Cards updated successfully.")
else:
    print("Could not find start or end index.")
