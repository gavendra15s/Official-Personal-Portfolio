/**
 * Student Resources Interactive Controller
 * Handles Search, Category Filtering, Modal Details, and Request Form Submission.
 */

import { STUDENT_RESOURCES } from './resources-data.js';

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStudentResources);
  } else {
    initStudentResources();
  }

  function initStudentResources() {
    const resources = STUDENT_RESOURCES || window.STUDENT_RESOURCES || [];
    const galleryGrid = document.getElementById('srGalleryGrid');
    const searchInput = document.getElementById('srSearchInput');
    const searchClear = document.getElementById('srSearchClear');
    const filterButtons = document.querySelectorAll('.sr-filter-btn');
    const countDisplay = document.getElementById('srResultsCount');
    const emptyState = document.getElementById('srEmptyState');

    // Modals
    const detailModal = document.getElementById('srDetailModal');
    const modalClose = document.getElementById('srModalClose');
    const modalImg = document.getElementById('srModalImg');
    const modalTitle = document.getElementById('srModalTitle');
    const modalCat = document.getElementById('srModalCat');
    const modalDesc = document.getElementById('srModalDesc');
    const modalSuitable = document.getElementById('srModalSuitable');
    const modalSpecs = document.getElementById('srModalSpecs');
    const modalRequestBtn = document.getElementById('srModalRequestBtn');

    // Success Modal
    const successModal = document.getElementById('srSuccessModal');
    const successClose = document.getElementById('srSuccessClose');
    const successDetails = document.getElementById('srSuccessDetails');

    // Request Form
    const requestForm = document.getElementById('srRequestForm');
    const resourceInput = document.getElementById('srFormResource');

    let currentCategory = 'All';
    let searchQuery = '';

    // Initialize gallery
    renderGallery();
    updateCategoryCounts();

    // Event: Search Input
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchClear) {
          searchClear.style.display = searchQuery.length > 0 ? 'block' : 'none';
        }
        renderGallery();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', function () {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderGallery();
        if (searchInput) searchInput.focus();
      });
    }

    // Event: Empty State Reset Filters Button
    const resetFilterBtns = document.querySelectorAll('#srResetFilterBtn');
    resetFilterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        if (searchClear) searchClear.style.display = 'none';
        const allBtn = document.querySelector('.sr-filter-btn[data-category="All"]');
        if (allBtn) {
          allBtn.click();
        } else {
          currentCategory = 'All';
          renderGallery();
        }
      });
    });

    // Event: Category Filters
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category || 'All';
        renderGallery();
      });
    });

    // Function: Filter & Render
    function renderGallery() {
      if (!galleryGrid) return;

      const filtered = resources.filter(item => {
        const matchesCategory = (currentCategory === 'All') || (item.category === currentCategory);
        const matchesSearch = !searchQuery || 
          item.name.toLowerCase().includes(searchQuery) ||
          item.category.toLowerCase().includes(searchQuery) ||
          (item.shortDesc && item.shortDesc.toLowerCase().includes(searchQuery)) ||
          (item.suitableFor && item.suitableFor.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
      });

      if (countDisplay) {
        countDisplay.textContent = `Showing ${filtered.length} of ${resources.length} available resources`;
      }

      if (filtered.length === 0) {
        galleryGrid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      galleryGrid.innerHTML = filtered.map(item => {
        const imgSrc = encodeURI(`assets/resources/${item.image}`);
        return `
          <div class="sr-card" data-id="${item.id}" tabindex="0" role="button" aria-label="View details for ${escapeHtml(item.name)}">
            <div class="sr-card-thumb-wrap">
              <img src="${imgSrc}" alt="${escapeHtml(item.name)}" class="sr-card-thumb" loading="lazy" onerror="this.onerror=null; this.src='assets/resources/portrait.png';">
              <span class="sr-card-badge-free"><i class="fas fa-gift"></i> Available Free</span>
              <span class="sr-card-cat-badge">${escapeHtml(item.category)}</span>
            </div>
            <div class="sr-card-body">
              <h4 class="sr-card-title">${escapeHtml(item.name)}</h4>
              <p class="sr-card-desc">${escapeHtml(item.shortDesc)}</p>
              <div class="sr-card-footer">
                <span style="font-size:12px; font-weight:600; color:var(--amber-dark);"><i class="fas fa-check-circle"></i> In Stock</span>
                <button type="button" class="sr-card-action-btn">
                  <span>Details</span> <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Add click listeners to cards
      galleryGrid.querySelectorAll('.sr-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.dataset.id;
          const found = resources.find(r => r.id === id);
          if (found) openDetailModal(found);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const id = card.dataset.id;
            const found = resources.find(r => r.id === id);
            if (found) openDetailModal(found);
          }
        });
      });
    }

    // Function: Update Category Badges
    function updateCategoryCounts() {
      filterButtons.forEach(btn => {
        const cat = btn.dataset.category;
        const countBadge = btn.querySelector('.sr-count-badge');
        if (countBadge) {
          if (cat === 'All') {
            countBadge.textContent = resources.length;
          } else {
            const count = resources.filter(r => r.category === cat).length;
            countBadge.textContent = count;
          }
        }
      });
    }

    // Modal: Open Details
    function openDetailModal(item) {
      if (!detailModal) return;

      const mainImgSrc = encodeURI(`assets/resources/${item.image}`);
      if (modalImg) {
        modalImg.src = mainImgSrc;
        modalImg.alt = item.name;
      }
      if (modalTitle) modalTitle.textContent = item.name;
      if (modalCat) modalCat.textContent = item.category;
      if (modalDesc) modalDesc.textContent = item.fullDesc;
      if (modalSuitable) modalSuitable.textContent = item.suitableFor;
      if (modalSpecs) modalSpecs.textContent = item.specs;

      // Collect images (main + extra)
      const allImages = [{ image: item.image, label: 'Overview Photo', title: item.name }];
      if (item.extraImages && item.extraImages.length > 0) {
        item.extraImages.forEach((ex, idx) => {
          if (typeof ex === 'string') {
            allImages.push({ image: ex, label: `Photo ${idx + 2}`, title: ex });
          } else {
            allImages.push({ image: ex.image, label: ex.label || `Photo ${idx + 2}`, title: ex.caption || ex.label });
          }
        });
      } else if (item.id === 'digital-logic-ics' || (item.name && item.name.includes('Digital Logic Gate ICs'))) {
        allImages.push({
          image: 'IC_numbers.jpeg',
          label: 'Numbered Map (1–33)',
          title: 'Numbered visual reference map (1 to 33) matching physical ICs'
        });
      }

      // 1. Image Switcher Tabs (#srModalThumbs)
      const thumbsContainer = document.getElementById('srModalThumbs');
      if (thumbsContainer) {
        if (allImages.length > 1) {
          thumbsContainer.style.display = 'flex';
          thumbsContainer.innerHTML = allImages.map((imgObj, idx) => `
            <button type="button" class="sr-modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
              <img src="assets/resources/${imgObj.image}" alt="${escapeHtml(imgObj.label)}">
              <span>${escapeHtml(imgObj.label)}</span>
            </button>
          `).join('');

          thumbsContainer.querySelectorAll('.sr-modal-thumb-btn').forEach(btn => {
            btn.addEventListener('click', function() {
              thumbsContainer.querySelectorAll('.sr-modal-thumb-btn').forEach(b => b.classList.remove('active'));
              this.classList.add('active');
              const idx = parseInt(this.dataset.index, 10);
              const chosen = allImages[idx];
              if (modalImg) {
                modalImg.src = encodeURI(`assets/resources/${chosen.image}`);
                modalImg.alt = chosen.title || chosen.label;
              }
            });
          });
        } else {
          thumbsContainer.style.display = 'none';
          thumbsContainer.innerHTML = '';
        }
      }

      // 2. Extra Reference Section (#srModalExtraSection)
      const extraSection = document.getElementById('srModalExtraSection');
      if (extraSection) {
        let extraHtml = '';

        // If this is Digital Logic Gate ICs Collection, render complete 33 IC inventory
        const isLogicIcs = item.id === 'digital-logic-ics' || (item.name && item.name.includes('Digital Logic Gate ICs'));
        const icList = item.availableIcs || (isLogicIcs ? [
          { num: 1, name: "7RF840", type: "Power MOSFET (8A, 500V, N-Channel)" },
          { num: 2, name: "L7805CV", type: "+5V Positive Voltage Regulator (1.5A)" },
          { num: 3, name: "L7812CV", type: "+12V Positive Voltage Regulator (1.5A)" },
          { num: 4, name: "SN74HC702N", type: "High-Speed CMOS Logic" },
          { num: 5, name: "L7813CV", type: "Linear Voltage Regulator" },
          { num: 6, name: "7RF49QS", type: "Power MOSFET" },
          { num: 7, name: "7RF840", type: "Power MOSFET (8A, 500V, N-Channel)" },
          { num: 8, name: "SN74LS83N", type: "4-Bit Binary Full Adder with Fast Carry" },
          { num: 9, name: "CD74HCT11E", type: "Triple 3-Input High-Speed AND Gate" },
          { num: 10, name: "SN74HC32N", type: "Quad 2-Input OR Gate" },
          { num: 11, name: "SN74HC86N", type: "Quad 2-Input Exclusive-OR (XOR) Gate" },
          { num: 12, name: "SN74HC08N", type: "Quad 2-Input Positive-AND Gate" },
          { num: 13, name: "HD74HC151P", type: "8-Channel Data Selector / Multiplexer" },
          { num: 14, name: "SN74HC04N", type: "Hex Inverter (NOT Gate)" },
          { num: 15, name: "SN74HC595H", type: "8-Bit Serial-In / Parallel-Out Shift Register" },
          { num: 16, name: "SN74HC00N", type: "Quad 2-Input NAND Gate" },
          { num: 17, name: "L7805CV", type: "+5V Positive Voltage Regulator (1.5A)" },
          { num: 18, name: "SN74HC00N", type: "Quad 2-Input NAND Gate" },
          { num: 19, name: "CD74HCT11E", type: "Triple 3-Input High-Speed AND Gate" },
          { num: 20, name: "SN74LS153N", type: "Dual 4-to-1 Line Data Selector / Multiplexer" },
          { num: 21, name: "CD74HCT11E", type: "Triple 3-Input High-Speed AND Gate" },
          { num: 22, name: "HD74HC151P", type: "8-Channel Data Selector / Multiplexer" },
          { num: 23, name: "MM74HCT32N", type: "Quad 2-Input OR Gate" },
          { num: 24, name: "SN74HC32N", type: "Quad 2-Input OR Gate" },
          { num: 25, name: "SN74HC86N", type: "Quad 2-Input Exclusive-OR (XOR) Gate" },
          { num: 26, name: "MC14007UBCP", type: "Dual Complementary Pair Plus Inverter (CMOS)" },
          { num: 27, name: "SN74LS153N", type: "Dual 4-to-1 Line Data Selector / Multiplexer" },
          { num: 28, name: "L7812CV", type: "+12V Positive Voltage Regulator (1.5A)" },
          { num: 29, name: "SN74HC03N", type: "Quad 2-Input NAND Gate (Open-Drain)" },
          { num: 30, name: "SN74HC00N", type: "Quad 2-Input NAND Gate" },
          { num: 31, name: "SN74HC00N", type: "Quad 2-Input NAND Gate" },
          { num: 32, name: "MC14007UBCP", type: "Dual Complementary Pair Plus Inverter (CMOS)" },
          { num: 33, name: "SN74HC00N", type: "Quad 2-Input NAND Gate" }
        ] : null);

        if (icList && icList.length > 0) {
          extraHtml += `
            <div class="sr-ic-inventory-card">
              <div class="sr-ic-inventory-header">
                <h4><i class="fas fa-microchip" style="color:var(--amber-dark);"></i> Available ICs in Stock (33 Items)</h4>
                <span class="sr-ic-total-badge"><i class="fas fa-check-circle"></i> 33 Chips Total</span>
              </div>
              <p style="font-size:13.5px; color:var(--text-mid); margin-bottom:12px; line-height:1.6;">
                Below is the full numbered inventory of available logic gates, multiplexers, shift registers, CMOS pairs, and voltage regulators. Numbers correspond directly to the <strong>IC Numbers Reference Map (IC_numbers)</strong> photograph above.
              </p>

              <!-- Category Summary Chips -->
              <div class="sr-ic-summary-chips">
                <span class="sr-ic-chip">NAND Gates (x6)</span>
                <span class="sr-ic-chip">AND Gates (x4)</span>
                <span class="sr-ic-chip">OR Gates (x3)</span>
                <span class="sr-ic-chip">XOR Gates (x2)</span>
                <span class="sr-ic-chip">Hex Inverter (x1)</span>
                <span class="sr-ic-chip">4-Bit Adder (x1)</span>
                <span class="sr-ic-chip">Multiplexers (x4)</span>
                <span class="sr-ic-chip">Shift Register (x1)</span>
                <span class="sr-ic-chip">CMOS Pairs (x2)</span>
                <span class="sr-ic-chip">Voltage Regulators (x5)</span>
                <span class="sr-ic-chip">Power MOSFETs (x3)</span>
              </div>

              <!-- Numbered Inventory Table -->
              <div class="sr-ic-table-wrap">
                <table class="sr-ic-table">
                  <thead>
                    <tr>
                      <th style="width:50px;">No.</th>
                      <th>Part Number</th>
                      <th>IC Function & Gate Type</th>
                      <th style="text-align:right; width:85px;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${icList.map(ic => `
                      <tr>
                        <td><span class="sr-ic-badge-num">#${ic.num}</span></td>
                        <td><strong class="sr-ic-name">${escapeHtml(ic.name)}</strong></td>
                        <td style="font-size:12.5px; color:#475569;">${escapeHtml(ic.type)}</td>
                        <td style="text-align:right;">
                          <button type="button" class="sr-ic-pick-btn" data-ic-name="${escapeHtml(ic.name)} (#${ic.num})">
                            <i class="fas fa-plus"></i> Select
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <div style="font-size:12px; color:var(--text-light); margin-top:10px; display:flex; align-items:center; gap:6px;">
                <i class="fas fa-info-circle" style="color:var(--amber-dark);"></i> Click <strong>"Select"</strong> next to any IC above to auto-add it to your resource request form (Max 3 items per student).
              </div>
            </div>
          `;
        }

        // Add Numbered Reference Image Box if present
        if (allImages.length > 1) {
          extraHtml += allImages.slice(1).map(ex => `
            <div class="sr-extra-image-box">
              <div class="sr-extra-image-header">
                <i class="fas fa-map-marked-alt" style="color:var(--amber-dark);"></i> <strong>${escapeHtml(ex.label || 'Numbered Reference Map')}</strong>
              </div>
              <div class="sr-extra-img-wrap" style="cursor:pointer;" title="Click to view in main viewport above">
                <img src="assets/resources/${ex.image}" alt="${escapeHtml(ex.label)}" class="sr-extra-img" loading="lazy">
              </div>
              <div class="sr-extra-caption">
                <i class="fas fa-info-circle" style="color:var(--amber-dark);"></i> ${escapeHtml(ex.title || 'Visual reference map with numbers 1 to 33 matching the table above.')}
              </div>
            </div>
          `).join('');
        }

        if (extraHtml) {
          extraSection.style.display = 'block';
          extraSection.innerHTML = extraHtml;

          // Wire up "+ Select" buttons on table rows
          extraSection.querySelectorAll('.sr-ic-pick-btn').forEach(btn => {
            btn.addEventListener('click', function() {
              const icText = this.dataset.icName;
              if (resourceInput) {
                const current = resourceInput.value.trim();
                if (!current) {
                  resourceInput.value = icText;
                } else {
                  const existing = current.split(',').map(s => s.trim()).filter(Boolean);
                  if (!existing.includes(icText)) {
                    if (existing.length < 3) {
                      existing.push(icText);
                      resourceInput.value = existing.join(', ');
                    } else {
                      alert('Maximum 3 items allowed per student. You can edit the list directly in the form.');
                    }
                  }
                }
              }
              closeDetailModal();
              const formSec = document.getElementById('request-a-resource') || document.getElementById('srRequestSection');
              if (formSec) {
                formSec.scrollIntoView({ behavior: 'smooth' });
              }
            });
          });

          // Wire up click on extra image preview to swap main image
          extraSection.querySelectorAll('.sr-extra-img-wrap').forEach((wrap, i) => {
            wrap.addEventListener('click', () => {
              if (thumbsContainer) {
                const targetBtn = thumbsContainer.querySelectorAll('.sr-modal-thumb-btn')[i + 1];
                if (targetBtn) targetBtn.click();
              }
              const modalBody = detailModal.querySelector('.sr-modal') || detailModal;
              modalBody.scrollTo({ top: 0, behavior: 'smooth' });
            });
          });
        } else {
          extraSection.style.display = 'none';
          extraSection.innerHTML = '';
        }
      }

      if (modalRequestBtn) {
        modalRequestBtn.onclick = function () {
          closeDetailModal();
          if (resourceInput) {
            const current = resourceInput.value.trim();
            if (!current) {
              resourceInput.value = item.name;
            } else {
              const existingItems = current.split(',').map(s => s.trim()).filter(Boolean);
              if (!existingItems.includes(item.name)) {
                if (existingItems.length < 3) {
                  existingItems.push(item.name);
                  resourceInput.value = existingItems.join(', ');
                } else {
                  alert('Maximum 3 items allowed per student. You can edit the list directly in the form.');
                }
              }
            }
          }
          const formSec = document.getElementById('request-a-resource') || document.getElementById('srRequestSection');
          if (formSec) {
            formSec.scrollIntoView({ behavior: 'smooth' });
          }
        };
      }

      detailModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDetailModal() {
      if (!detailModal) return;
      detailModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeDetailModal);
    }

    if (detailModal) {
      detailModal.addEventListener('click', function (e) {
        if (e.target === detailModal) closeDetailModal();
      });
    }

    // Success Modal handlers
    function closeSuccessModal() {
      if (!successModal) return;
      successModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (successClose) {
      successClose.addEventListener('click', closeSuccessModal);
    }
    if (successModal) {
      successModal.addEventListener('click', function (e) {
        if (e.target === successModal) closeSuccessModal();
      });
    }

    // Request Form Handling
    if (requestForm) {
      // Set min date to today
      const dateInput = document.getElementById('srFormDate');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
      }

      requestForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = ((document.getElementById('srFormName') || {}).value || '').trim();
        const college = ((document.getElementById('srFormCollege') || {}).value || '').trim();
        const course = ((document.getElementById('srFormCourse') || {}).value || '').trim();
        const purpose = ((document.getElementById('srFormPurpose') || {}).value || '').trim();
        const resourceReq = ((document.getElementById('srFormResource') || {}).value || '').trim();
        const contact = ((document.getElementById('srFormContact') || {}).value || '').trim();
        const point = ((document.getElementById('srFormPoint') || {}).value || '').trim();
        const date = ((document.getElementById('srFormDate') || {}).value || '').trim();

        if (!name || !college || !course || !purpose || !resourceReq || !contact || !point || !date) {
          alert('Please fill in all required fields before submitting your request.');
          return;
        }

        // Schedule day-of-week validation
        const selectedDate = new Date(date + 'T00:00:00');
        const dayOfWeek = selectedDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const chosenDay = dayNames[dayOfWeek];

        if (point.includes('Pandit Ji Canteen') && dayOfWeek !== 0 && dayOfWeek !== 6) {
          const proceed = confirm(`Note: Pandit Ji Canteen collections are held on Saturdays and Sundays.\n\nYour selected date (${date}) is a ${chosenDay}.\n\nDo you still wish to submit this request?`);
          if (!proceed) return;
        } else if (point.includes('PrintRocket Office') && (dayOfWeek === 0 || dayOfWeek === 6)) {
          const proceed = confirm(`Note: PrintRocket Office collections are held Monday through Friday (1pm-2pm).\n\nYour selected date (${date}) is a ${chosenDay}.\n\nDo you still wish to submit this request?`);
          if (!proceed) return;
        }

        const submitBtn = requestForm.querySelector('button[type="submit"]');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting Request...';
          submitBtn.style.opacity = '0.7';
          submitBtn.style.cursor = 'wait';
        }

        // Format email message
        const formattedMessage = `[FREE STUDENT RESOURCE APPLICATION]\n` +
          `Student Name: ${name}\n` +
          `College / Dept: ${college}\n` +
          `Course & Branch: ${course}\n` +
          `Contact (Phone/Email): ${contact}\n` +
          `Resource(s) Requested: ${resourceReq}\n` +
          `Designated Collection Point: ${point}\n` +
          `Preferred Date: ${date} (${chosenDay})\n\n` +
          `Project / Application Details:\n${purpose}`;

        let emailSent = false;
        try {
          const serviceId = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_EMAILJS_SERVICE_ID) || "%VITE_EMAILJS_SERVICE_ID%";
          const templateId = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_EMAILJS_QUERY_TEMPLATE_ID) || "%VITE_EMAILJS_QUERY_TEMPLATE_ID%";

          if (typeof emailjs !== 'undefined' && typeof emailjs.send === 'function') {
            const templateParams = {
              from_name: name,
              from_email: contact.includes('@') ? contact : 'student@printrocket.in',
              to_name: 'Gavendra Singh',
              service: `Student Resource Request: ${resourceReq.substring(0, 50)}`,
              message: formattedMessage,
              student_name: name,
              student_college: college,
              student_course: course,
              student_contact: contact,
              resource_requested: resourceReq,
              collection_point: point,
              collection_date: `${date} (${chosenDay})`,
              purpose: purpose
            };

            await emailjs.send(serviceId, templateId, templateParams);
            emailSent = true;
          }
        } catch (err) {
          console.error('EmailJS Student Resource Error:', err);
        }

        // WhatsApp direct link for student convenience
        const pointShort = point.split('(')[0].trim();
        const whatsappText = encodeURIComponent(
          `Hi Gavendra! I am ${name} from ${college} (${course}). I just submitted a student request for: ${resourceReq}. Preferred collection: ${date} at ${pointShort}. Looking forward to meeting you!`
        );
        const whatsappUrl = `https://wa.me/918218768195?text=${whatsappText}`;

        // Show Success Modal
        if (successDetails) {
          successDetails.innerHTML = `
            <div style="background: ${emailSent ? '#ecfdf5' : '#fffbeb'}; border: 1px solid ${emailSent ? '#a7f3d0' : '#fde68a'}; padding: 10px 14px; border-radius: 10px; margin-bottom: 16px; font-size: 13.5px; color: ${emailSent ? '#065f46' : '#92400e'};">
              <i class="fas ${emailSent ? 'fa-check-circle' : 'fa-info-circle'}"></i> 
              <strong>${emailSent ? 'Application Transmitted Successfully!' : 'Request Recorded!'}</strong> 
              ${emailSent ? 'Your details have been emailed directly to Gavendra.' : 'Please connect via WhatsApp below to confirm your pickup slot.'}
            </div>
            <div><strong>Student Name:</strong> ${escapeHtml(name)}</div>
            <div><strong>College / Dept:</strong> ${escapeHtml(college)} (${escapeHtml(course)})</div>
            <div><strong>Contact:</strong> ${escapeHtml(contact)}</div>
            <div><strong>Resource(s) Requested:</strong> ${escapeHtml(resourceReq)}</div>
            <div><strong>Designated Collection Point:</strong> ${escapeHtml(point)}</div>
            <div><strong>Preferred Date:</strong> ${escapeHtml(date)} (${chosenDay})</div>
            <div style="margin-top:12px; color:var(--brown-dark); font-weight:600;">
              <i class="fas fa-id-card"></i> Please bring your Student ID card upon collection.
            </div>
            <div style="margin-top:4px; color:var(--amber-dark); font-weight:600;">
              <i class="fas fa-mug-hot"></i> Warm tea & fresh samosa are on Gavendra!
            </div>
            <div style="margin-top:16px; padding-top:14px; border-top:1px dashed #e2e8f0; text-align:center;">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; background:#25D366; color:#fff; padding:10px 18px; border-radius:10px; text-decoration:none; font-weight:600; font-size:14px; box-shadow:0 4px 12px rgba(37,211,102,0.25);">
                <i class="fab fa-whatsapp" style="font-size:18px;"></i> Ping Gavendra on WhatsApp
              </a>
              <div style="font-size:11.5px; color:var(--text-light); margin-top:6px;">Optional: Speed up slot confirmation or ask questions directly</div>
            </div>
          `;
        }

        if (successModal) {
          successModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }

        // Restore button & reset form
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.style.opacity = '1';
          submitBtn.style.cursor = 'pointer';
        }
        requestForm.reset();
        if (dateInput) {
          const today = new Date().toISOString().split('T')[0];
          dateInput.min = today;
        }
      });
    }

    // Escape Key listener
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDetailModal();
        closeSuccessModal();
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
