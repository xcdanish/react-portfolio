import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { getThemeColors } from "../Theme/ThemeBox";

interface ContactProps {
  themeColor: string;
}

export const Contact: React.FC<ContactProps> = ({ themeColor }) => {
  const colors = getThemeColors(themeColor);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-20 blur-3xl" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r ${colors.primary}`}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 p-8 rounded-2xl shadow-2xl border border-white/20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Info
            </h3>
            <div className="space-y-6">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "contact@example.com",
                  link: "mailto:contact@example.com",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+1 (234) 567-890",
                  link: "tel:+1234567890",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "San Francisco, CA",
                  link: "#",
                },
              ].map(({ Icon, label, value, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className={`flex items-center space-x-4 text-white/80 hover:text-white transition`}
                >
                  <Icon className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-medium">{label}</p>
                    <p>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-white/80 mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white focus:ring-2 focus:ring-white outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white focus:ring-2 focus:ring-white outline-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r ${colors.gradient} text-white shadow-lg`}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <p className="absolute bottom-4 right-4 text-white/40 text-sm select-none">
        © Mohammed Danish
      </p>
    </section>
  );
};
