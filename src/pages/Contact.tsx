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
    if (!formData.useCase.trim()) newErrors.useCase = 'Use Case is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission
      setTimeout(() => {
        setSubmitted(true);
      }, 500);
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
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="p-8 max-w-2xl mx-auto pt-[120px] pb-24 min-h-screen flex flex-col items-center justify-center">
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-12 text-center w-full">
          <h2 className="font-mono text-xl text-[#FFFFFF] tracking-widest uppercase mb-4">Request Received</h2>
          <p className="text-[#7A7A7A] font-sans text-sm mb-8">DEPLOYMENT REQUEST RECEIVED. OUR ENGINEERING TEAM WILL REVIEW YOUR OPERATIONAL REQUIREMENTS.</p>
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
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="p-8 max-w-2xl mx-auto pt-[120px] pb-24 min-h-screen">
      <header className="mb-12 border-b border-[#1A1A1A] pb-4">
        <h1 className="font-mono text-2xl text-[#FFFFFF] tracking-widest uppercase">Contact</h1>
        <p className="text-[#7A7A7A] mt-2 font-sans text-sm">Meridian is currently deploying in closed beta for government agencies and select enterprise design partners.</p>
      </header>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
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
          <label className="block font-mono text-[11px] text-[#7A7A7A] uppercase tracking-widest">Use Case</label>
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
          Submit Request
        </button>
      </form>
    </motion.div>
  );
}
