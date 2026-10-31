import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import stackImage from '../assets/about/profile.png';
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData';

export default function About() {
  const [flipped, setFlipped] = useState(false);

  const getUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `https://${url}`;
  };

  const qrValue =
    getUrl(socialLinks.linkedin) ||
    (personalInfo.emails?.primary ? `mailto:${personalInfo.emails.primary}` : '');

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative 4-point-star SVG (Top-Right) */}
      <svg
        className="absolute top-10 right-12 w-10 h-10 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point-star SVG (Bottom-Left) */}
      <svg
        className="absolute bottom-28 left-8 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDelay: '1s' }}
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: Framer Motion Lanyard ID Badge */}
        <div className="md:w-[350px] shrink-0 flex flex-col items-center justify-center w-full">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative pt-10 flex flex-col items-center"
          >
            {/* Black lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black" />

            {/* Grey clip rectangle */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-400 rounded-sm z-10 shadow-md" />

            {/* Interactive Flip Card Button Wrapper */}
            <button
              type="button"
              onClick={() => setFlipped(!flipped)}
              aria-label="Flip ID card"
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              {/* 3D Inner Container */}
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* FRONT Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col">
                  {/* Cutout slot at the top */}
                  <div className="w-12 h-2 bg-black/60 rounded-full mx-auto mb-3 shrink-0" />

                  {/* Photo inside */}
                  <img
                    src={stackImage}
                    alt="Shaik Kathhamma Basheerun — Java Full Stack Developer, TAP Academy student"
                    className="w-full flex-1 rounded-xl object-cover object-top min-h-0"
                  />
                </div>

                {/* BACK Face: Visiting Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-2xl p-5 text-white flex flex-col justify-between text-left overflow-hidden">
                  {/* Top 6px Red Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#ff2a2a]" />

                  {/* Top Section: Brand Name & Title */}
                  <div className="pt-1">
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </h3>
                    {personalInfo.title && (
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-red-400 mt-0.5">
                        {personalInfo.title}
                      </p>
                    )}
                  </div>

                  {/* Thin Divider */}
                  <div className="border-t border-white/10 my-1" />

                  {/* Middle Section: Contact & Social Rows */}
                  <div className="flex flex-col space-y-2 text-xs text-white/85">
                    {/* Email */}
                    {personalInfo.emails?.primary && (
                      <a
                        href={`mailto:${personalInfo.emails.primary}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:text-white transition-colors truncate"
                      >
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="truncate">{personalInfo.emails.primary}</span>
                      </a>
                    )}

                    {/* Phone */}
                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:text-white transition-colors truncate"
                      >
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>{personalInfo.phone}</span>
                      </a>
                    )}

                    {/* Location */}
                    {personalInfo.location && (
                      <div className="flex items-center gap-2 text-white/85">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="truncate">{personalInfo.location}</span>
                      </div>
                    )}

                    {/* LinkedIn */}
                    {socialLinks.linkedin && (
                      <a
                        href={getUrl(socialLinks.linkedin)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}

                    {/* GitHub */}
                    {socialLinks.github && (
                      <a
                        href={getUrl(socialLinks.github)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  {/* Bottom Section: QR Code and Caption */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="bg-white rounded-lg p-1.5 shrink-0">
                      <QRCode value={qrValue} size={76} />
                    </div>
                    <span className="text-[10px] text-white/60 uppercase tracking-wider font-mono leading-tight">
                      Scan to connect
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* Hint Underneath */}
            <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Bio and Heading */}
        <div data-aos="fade-left" className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-black">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White Torn-Paper SVG Divider Along the Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
          />
        </svg>
      </div>
    </section>
  );
}
