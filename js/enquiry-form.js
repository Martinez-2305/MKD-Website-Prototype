/* MartKam Digital: the short enquiry form (every form.js-enquiry on a page).
 *
 * The homepage has two copies, one in the hero and one in the contact
 * section; location pages have one in the hero. All of them post to the same
 * Formspree endpoint, and a hidden form_source field tells you in the email
 * which form and page an enquiry came from.
 *
 * Submits in place, and only shows success once Formspree confirms it
 * accepted the enquiry. Without JS each form still posts the normal way.
 *
 * Analytics: the site has no analytics installed yet. The events below go to
 * GA4 (gtag) or Tag Manager (dataLayer) as soon as either is added. They carry
 * the form id, the page and the enquiry type, never the visitor's name, email
 * or message.
 */
(function () {
  const FALLBACK = 'Sorry, your enquiry could not be sent. Please try again, or email me at <a href="mailto:contact@martkamdigital.com">contact@martkamdigital.com</a>.';

  function track(event, formId, params) {
    const data = Object.assign({ form_id: formId, page_path: location.pathname }, params || {});
    try {
      if (typeof window.gtag === 'function') window.gtag('event', event, data);
      else if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: event }, data));
    } catch (e) {}
  }

  function setup(form) {
    form.noValidate = true; // our messages replace the browser's bubbles

    const card     = form.closest('.hf-card') || form.parentNode;
    const alertBox = form.querySelector('.hf-alert');
    const success  = card.querySelector('.hf-success');
    const desc     = card.querySelector('.hf-desc');
    const submit   = form.querySelector('.hf-submit');
    const label    = submit.textContent;
    const formId   = form.dataset.formId || 'enquiry';
    const fields   = {
      name:    form.elements.namedItem('name'),
      email:   form.elements.namedItem('email'),
      service: form.elements.namedItem('service')
    };
    const errorFor = el => document.getElementById(el.getAttribute('aria-describedby'));

    let started = false;
    function markStarted() {
      if (started) return;
      started = true;
      track('enquiry_form_start', formId);
    }
    form.addEventListener('input', markStarted);
    form.addEventListener('change', markStarted);

    function messageFor(key) {
      const el = fields[key];
      const value = el.value.trim();
      if (key === 'name' && !value) return 'Please enter your name.';
      if (key === 'email' && !value) return 'Please enter your email address.';
      if (key === 'email' && (el.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) return 'Please enter a valid email address, like name@example.com.';
      if (key === 'service' && !value) return 'Please choose what you need help with.';
      return '';
    }

    function showError(key, msg) {
      const el = fields[key];
      const err = errorFor(el);
      if (msg) {
        el.setAttribute('aria-invalid', 'true');
        err.textContent = msg;
        err.hidden = false;
      } else {
        el.removeAttribute('aria-invalid');
        err.textContent = '';
        err.hidden = true;
      }
    }

    // once a field has been flagged, re-check it as the visitor corrects it
    Object.keys(fields).forEach(key => {
      const el = fields[key];
      const recheck = () => { if (el.getAttribute('aria-invalid') === 'true') showError(key, messageFor(key)); };
      el.addEventListener('input', recheck);
      el.addEventListener('change', recheck);
    });

    function showAlert(html) {
      alertBox.innerHTML = html;
      alertBox.hidden = false;
    }

    function setSending(on) {
      submit.disabled = on;
      submit.textContent = on ? 'Sending…' : label;
      form.setAttribute('aria-busy', on ? 'true' : 'false');
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (submit.disabled) return;
      alertBox.hidden = true;

      let firstInvalid = null;
      Object.keys(fields).forEach(key => {
        const msg = messageFor(key);
        showError(key, msg);
        if (msg && !firstInvalid) firstInvalid = fields[key];
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      setSending(true);
      const controller = typeof AbortController === 'function' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 20000) : null;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
        signal: controller ? controller.signal : undefined
      })
        .then(res => res.json().catch(() => ({})).then(data => ({ res: res, data: data })))
        .then(({ res, data }) => {
          if (res.ok && data.ok !== false) {
            // accepted: swap the form for the confirmation
            track('enquiry_form_submit_success', formId, { enquiry_type: fields.service.value });
            form.hidden = true;
            if (desc) desc.hidden = true;
            success.hidden = false;
            success.focus();
            return;
          }
          // rejected: point at the field Formspree complained about, if any
          let mapped = false;
          (data.errors || []).forEach(err => {
            if (err.field && fields[err.field]) {
              showError(err.field, err.field === 'email' ? messageFor('email') || 'Please check your email address.' : (err.message || 'Please check this field.'));
              mapped = true;
            }
          });
          showAlert(mapped ? 'Please check the highlighted field and try again.' : FALLBACK);
          track('enquiry_form_submit_error', formId, { error_type: 'rejected', status: res.status });
          setSending(false);
        })
        .catch(() => {
          showAlert(FALLBACK);
          track('enquiry_form_submit_error', formId, { error_type: 'network' });
          setSending(false);
        })
        .finally(() => { if (timer) clearTimeout(timer); });
    });
  }

  document.querySelectorAll('form.js-enquiry').forEach(setup);
})();
