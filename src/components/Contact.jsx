import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(serviceId, templateId, form, publicKey);
        setStatus('success');
        form.reset();
      } catch (err) {
        console.error(err);
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Giant Parallax Background Word */}
      <motion.div
        style={{ y }}
        className="absolute top-12 left-0 w-full pointer-events-none z-0 select-none overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/10 whitespace-nowrap pl-6 md:pl-12"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front Red Card Aligned to the Right */}
      <div className="w-full flex justify-end relative z-10">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 border-b border-white/20">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/80">
              Reach Me
            </span>
            <a
              href={
                socialLinks.instagram
                  ? socialLinks.instagram.startsWith('http')
                    ? socialLinks.instagram
                    : `https://${socialLinks.instagram}`
                  : '#'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>DM on Instagram</span>
            </a>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10 mt-10">
            {/* Input Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline-Only Inputs */}
              <div className="flex flex-col gap-8">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or opportunity... *"
                  className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors resize-none min-h-[120px]"
                ></textarea>
              </div>
            </div>

            {/* Bottom Actions & Notes */}
            <div className="flex flex-col gap-6 pt-2">
              {/* Consent Checkbox */}
              <label className="flex items-center gap-3 text-xs md:text-sm text-white/90 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded accent-black cursor-pointer"
                />
                <span>
                  I consent to having my submitted information used to respond to my inquiry.
                </span>
              </label>

              {/* Response Note & Direct Email Link */}
              <div className="text-xs text-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p>
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <p>
                  Urgent?{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline font-bold text-white hover:text-black transition-colors"
                  >
                    Direct Email
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-4 rounded-full border-2 border-white/40 bg-white/20 text-white font-bold text-base md:text-lg flex items-center justify-center gap-3 cursor-wait"
                  >
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === 'success' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-4 rounded-full bg-green-600 border-2 border-green-500 text-white font-bold text-base md:text-lg flex items-center justify-center gap-2"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === 'error' && (
                  <button
                    type="button"
                    disabled
                    className="px-8 py-4 rounded-full bg-red-950 border-2 border-red-800 text-white font-bold text-base md:text-lg flex items-center justify-center gap-2"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="group px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base md:text-lg hover:bg-white hover:text-[#ff2a2a] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

