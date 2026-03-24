import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBulb, TbWorld } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";


const Toast = ({ type, onClose }) => {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 10, x: 10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[100] flex items-start gap-3 px-4 py-3.5 rounded-xl border shadow-xl max-w-xs w-full"
          style={{
            background: isSuccess
              ? "rgba(15, 142, 163, 0.12)"
              : "rgba(220, 60, 60, 0.1)",
            borderColor: isSuccess
              ? "rgba(15, 142, 163, 0.35)"
              : "rgba(220, 60, 60, 0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          {isSuccess ? (
            <FiCheckCircle className="mt-0.5 flex-shrink-0 w-4 h-4 text-brand-text" />
          ) : (
            <FiXCircle className="mt-0.5 flex-shrink-0 w-4 h-4 text-red-400" />
          )}

          <div className="flex-1">
            <p
              className="text-sm font-medium"
              style={{ color: isSuccess ? "#9333ea" : "#f87171" }}
            >
              {isSuccess ? "Message sent!" : "Something went wrong"}
            </p>
            <p className="text-xs text-white/50 mt-0.5">
              {isSuccess
                ? "Message sent successfully! feedback will be provided within 24-48 hours."
                : "Something went wrong while sending your message. Please try again."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 text-white/30 hover:text-white/60 transition-colors mt-0.5"
          >
            <FiX className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default function ContactModal({ onClose }) {
  const [open, setOpen] = useState(true);
  const [toasts, setToasts] = useState(false);
  const [toastType, setToastType] = useState(null); // "success" | "error" | null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessageError, setshowMessageError] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  useEffect(() => {
    if (!toastType) return;
    const timer = setTimeout(() => setToastType(null), 4000);
    return () => clearTimeout(timer);
  }, [toastType]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "message" && value.trim().length >= 10) setshowMessageError(false);
  };

  const handleTemplateClick = (template) => {
    setToasts(true);
    setshowMessageError(false);
    const templates = {
      "Mobile app":
        "Hi! I'm looking to develop a mobile app. Here's a brief overview of the idea: [brief description]. My budget range is [budget], and I'm aiming to launch by [timeline].",
      Website:
        "Hi! I'm looking to build a new website. Here's a brief overview of what I need: [brief context]. My budget is around [budget], and I'm aiming for a launch around [timeline].",
      "Custom project":
        "Hi! I have a custom project idea. Here's a brief overview: [brief description]. My budget range is [budget], and I'm aiming to have it completed by [timeline].",
    };
    setFormData((prev) => ({ ...prev, message: templates[template] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.message.trim().length < 10) {
      setshowMessageError(true);
      setIsSubmitting(false);
      return;
    }
    setshowMessageError(false);

    try {
      const response = await fetch("https://app.proforms.top/f/pr31ceecfb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToastType("success");
        setToasts(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToastType("error");
      }
    } catch (error) {
      setToastType("error");
      console.error("Error Submitting Form:", error);
    }

    setIsSubmitting(false);
  };

  const items = [
    { name: "Mobile app", icon: <FaMobileAlt /> },
    { name: "Website", icon: <TbWorld /> },
    { name: "Custom project", icon: <TbBulb /> },
  ];

  return (
    <>
      <Toast type={toastType} onClose={() => setToastType(null)} />

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <div className="absolute inset-0 flex items-end lg:items-center justify-center pointer-events-none">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.25 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.5 }}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.y > 100 || velocity.y > 500) handleClose();
                }}
                className="pointer-events-auto w-full sm:w-[90%] md:w-[80%] lg:w-full lg:max-w-lg bg-black/60 backdrop-blur-xl rounded-t-xl lg:rounded-xl shadow-xl p-5 sm:p-6 md:p-7"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="border border-gray-600/30 p-3 rounded-xl">
                  {/* Drag handle (mobile) */}
                  <div className="flex lg:hidden justify-center mb-4 -mt-1">
                    <div className="py-3 px-8 cursor-grab active:cursor-grabbing" onTouchStart={(e) => e.stopPropagation()}>
                      <div className="h-1.5 w-20 rounded-full bg-gray-500/50 transition-all hover:bg-gray-400/70 active:scale-110" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-between mb-6">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 font-outfit">
                      Contact Form
                    </h2>
                    <button
                      onClick={handleClose}
                      className="hidden lg:flex p-2 rounded-lg hover:bg-gray-700/30 text-gray-400 hover:text-gray-300 transition"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="name" className="text-sm text-gray-400 font-outfit">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your Full name"
                          id="name"
                          ref={inputRef}
                          className="truncate font-outfit text-[14px] mt-1 w-full rounded-full border border-gray-600/30 bg-gray-900/20 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500/50 placeholder:text-[14px] placeholder:font-outfit text-gray-300 placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400 font-outfit">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@email.com"
                          className="truncate text-[14px] font-outfit placeholder:font-outfit placeholder:text-[14px] mt-1 w-full rounded-full border border-gray-600/30 bg-gray-900/20 px-4 py-2.5 outline-none focus:ring-2 focus:ring-purple-500/50 text-gray-300 placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 font-outfit">Brief Overview</label>
                      <textarea
                        rows={4}
                        name="message"
                        id="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-xl border border-gray-600/30 bg-gray-900/20 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/50 transition resize-none text-gray-300 text-[14px] placeholder:text-gray-500 font-outfit"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-outfit">Quick start with a template:</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map(({ name, icon }, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleTemplateClick(name)}
                            className="px-4 py-2 text-gray-400 text-[13px] font-outfit rounded-full border border-gray-600/30 bg-gray-800/20 flex items-center gap-2 hover:bg-gray-700/30 hover:border-purple-500/50 hover:text-gray-300 transition"
                          >
                            <span className="text-base">{icon}</span>
                            <span>{name}</span>
                          </button>
                        ))}
                      </div>

                      <div>
                        {showMessageError && (
                          <p className="text-red-400 mt-5 w-full rounded-xl border font-outfit text-[15px] border-gray-600/30 bg-red-900/20 px-4 py-3 outline-none">
                            📝 Please give a detailed description
                          </p>
                        )}
                        {toasts && (
                          <p className="mt-5 w-full rounded-xl border text-gray-300 font-outfit text-[15px] border-gray-600/30 bg-purple-900/20 px-4 py-3 outline-none">
                            📝 Please customize the template with your specific details before sending.
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-900 to-purple-700 text-gray-100 font-medium py-2.5 transition shadow-lg disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="h-4 w-4 rounded-full border-2 border-gray-200 border-t-transparent animate-spin" />
                      ) : (
                        "Send"
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}