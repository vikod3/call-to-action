import React from 'react';
import { motion } from 'motion/react';

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
];

export const CommunityCTA: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-[2rem] min-h-[500px] flex items-center justify-start py-20 px-8 sm:px-16 overflow-hidden font-sans shadow-lg">
      {/* Background Image with subtle overlay for texture */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://i.postimg.cc/tTKGQN3z/Gemini-Generated-Image-locml5locml5locm-(1).png')",
        }}
      >
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 max-w-[700px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 id="cta-title" className="text-[32px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.1] mb-4 text-[#1a1f3d]">
            Subscribe to Our Community
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p id="cta-description" className="text-[17px] sm:text-[19px] text-[#1a1f3d] font-medium leading-[1.5] mb-9 max-w-2xl opacity-60">
            Get exclusive access to cutting-edge tech insights,<br />
            industry trends, and expert advice delivered straight<br />
            to your inbox. Join our growing community today!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          <div className="flex-1 relative group max-w-md">
            <input
              id="cta-email-input"
              type="email"
              placeholder="Enter your email here"
              className="w-full bg-white border-0 rounded-full px-8 py-4 text-[#1a1f3d] placeholder:text-neutral-400 placeholder:font-semibold focus:outline-none focus:ring-4 focus:ring-[#1a1f3d]/5 transition-all text-[18px] shadow-sm shadow-black/5"
            />
          </div>
          <button
            id="cta-join-button"
            className="bg-white text-[#1a1f3d] hover:bg-neutral-50 active:scale-95 transition-all rounded-full px-8 py-4 font-bold text-[16px] whitespace-nowrap shadow-sm shadow-black/5"
          >
            Join Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <div id="cta-avatars" className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Member ${i + 1}`}
                className="w-10 h-10 rounded-full object-cover shadow-sm"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <span id="cta-social-proof" className="text-[#1a1f3d] font-bold text-[15px] tracking-tight">
            5,000+ happy members
          </span>
        </motion.div>
      </div>
    </div>
  );
};
