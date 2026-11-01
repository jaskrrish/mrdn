import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    useCase: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.useCase.trim()) newErrors.useCase = 'Tell us a little about it';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = encodeURIComponent(`Mrdn demo: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nWhat you want to see:\n${formData.useCase}`
      );
      window.location.href = `mailto:info@zaio.in?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="px-4 sm:p-8 max-w-2xl mx-auto pt-[80px] sm:pt-[120px] pb-24 min-h-screen flex flex-col items-center justify-center">
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-12 text-center w-full">
          <h2 className="font-mono text-xl text-[#FFFFFF] tracking-widest uppercase mb-4">Your email is ready</h2>
          <p className="text-[#7A7A7A] font-sans text-sm mb-8">Your email app has opened with your request to info@zaio.in. Send it and we'll reply to book a demo. If nothing opened, write to info@zaio.in directly.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="border border-[#1A1A1A] text-[#FFFFFF] font-mono text-[12px] tracking-widest uppercase px-6 py-3 hover:bg-[#1A1A1A] transition-colors cursor-pointer"
          >
            Return
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="px-4 sm:p-8 max-w-2xl mx-auto pt-[80px] sm:pt-[120px] pb-24 min-h-screen">
      <header className="mb-12 border-b border-[#1A1A1A] pb-4">
        <h1 className="font-mono text-2xl text-[#FFFFFF] tracking-widest uppercase">Contact</h1>
        <p className="text-[#7A7A7A] mt-2 font-sans text-sm">The Mrdn demo is ready and shown by appointment, on synthetic data. Tell us about your operations and we'll book it. For pricing, pilots or partnerships, <a href="mailto:info@zaio.in?subject=Mrdn%20-%20Contact%20sales" className="text-[#FFFFFF] underline underline-offset-4 hover:text-[#C45E1A]">contact sales</a> at info@zaio.in.</p>
      </header>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="block font-mono text-[11px] text-[#7A7A7A] uppercase tracking-widest">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-[#0A0A0A] border ${errors.name ? 'border-[#C45E1A]' : 'border-[#1A1A1A]'} p-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C45E1A] transition-colors`} 
            />
            {errors.name && <p className="text-[#C45E1A] text-[10px] font-mono uppercase tracking-wider">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="block font-mono text-[11px] text-[#7A7A7A] uppercase tracking-widest">Organization</label>
            <input 
              type="text" 
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className={`w-full bg-[#0A0A0A] border ${errors.organization ? 'border-[#C45E1A]' : 'border-[#1A1A1A]'} p-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C45E1A] transition-colors`} 
            />
            {errors.organization && <p className="text-[#C45E1A] text-[10px] font-mono uppercase tracking-wider">{errors.organization}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block font-mono text-[11px] text-[#7A7A7A] uppercase tracking-widest">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-[#0A0A0A] border ${errors.email ? 'border-[#C45E1A]' : 'border-[#1A1A1A]'} p-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C45E1A] transition-colors`} 
          />
          {errors.email && <p className="text-[#C45E1A] text-[10px] font-mono uppercase tracking-wider">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="block font-mono text-[11px] text-[#7A7A7A] uppercase tracking-widest">What you want to see</label>
          <textarea 
            rows={4} 
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            className={`w-full bg-[#0A0A0A] border ${errors.useCase ? 'border-[#C45E1A]' : 'border-[#1A1A1A]'} p-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C45E1A] transition-colors resize-none`} 
          />
          {errors.useCase && <p className="text-[#C45E1A] text-[10px] font-mono uppercase tracking-wider">{errors.useCase}</p>}
        </div>

        <button type="submit" className="bg-[#FFFFFF] text-[#000000] font-mono text-[12px] tracking-widest uppercase px-6 py-3 hover:bg-[#C45E1A] hover:text-[#FFFFFF] transition-colors w-full cursor-pointer">
          Request a demo
        </button>
      </form>
    </motion.div>
  );
}
