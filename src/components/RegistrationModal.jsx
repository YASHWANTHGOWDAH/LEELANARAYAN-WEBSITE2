import React, { useState } from 'react';
import { X, CheckCircle2, Send, MessageCircle, Loader2 } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose, selectedCourse = "", whatsappNumber = "919980334147" }) {
  const targetEmail = "itsmeleelanar@gmail.com";

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    preferredClass: selectedCourse || 'Carnatic Vocal',
    mode: 'Online',
    experience: 'Beginner',
    preferredDays: 'Weekends',
    preferredTime: 'Morning',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Class Registration: ${formData.preferredClass} - ${formData.fullName}`,
          Student_Name: formData.fullName,
          Age: formData.age || 'Not specified',
          Phone: formData.phone,
          Email: formData.email,
          Location: formData.city,
          Preferred_Class: formData.preferredClass,
          Mode: formData.mode,
          Experience: formData.experience,
          Preferred_Days: formData.preferredDays,
          Preferred_Time: formData.preferredTime,
          Message: formData.message || 'None',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(`New Registration for ${formData.preferredClass}`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nClass: ${formData.preferredClass}\nMode: ${formData.mode}\nCity: ${formData.city}\nMessage: ${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(`New Registration for ${formData.preferredClass}`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nClass: ${formData.preferredClass}\nMode: ${formData.mode}\nCity: ${formData.city}\nMessage: ${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRegister = () => {
    const text = `Hello Leela, I am interested in registering for your music classes.\n\nName: ${formData.fullName || 'Not provided'}\nPreferred Class: ${formData.preferredClass}\nMode: ${formData.mode}\nLocation: ${formData.city}\nPhone: ${formData.phone}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-cream-50 rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="maroon-gradient-bg text-white px-6 py-5 flex items-center justify-between border-b border-gold-500/40">
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-wide text-gold-400">
              Register for Music Classes
            </h3>
            <p className="text-xs text-cream-200 mt-1">
              Leela Narayan School of Performing Arts (LNSOPA)
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-maroon-900">
                Registration Received!
              </h4>
              <p className="text-stone-600 max-w-md mx-auto text-sm sm:text-base">
                Thank you for your interest! Your registration details have been emailed directly to <strong>{targetEmail}</strong>. Leela's team will contact you shortly to confirm class schedules and details.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2.5 bg-maroon-800 text-gold-400 rounded-xl hover:bg-maroon-900 font-medium text-sm transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 12 or 34"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Class *
                  </label>
                  <select
                    name="preferredClass"
                    value={formData.preferredClass}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  >
                    <option value="Carnatic Vocal">Carnatic Vocal</option>
                    <option value="Devaranama">Devaranama</option>
                    <option value="Bhajans">Bhajans</option>
                    <option value="Light Music">Light Music</option>
                    <option value="Voice Culture">Voice Culture</option>
                    <option value="Performance Training">Performance Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Class Format
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  >
                    <option value="Online">Online Classes (Zoom/Meet)</option>
                    <option value="Offline">Offline Studio (Bengaluru)</option>
                    <option value="Flexible">Both / Either</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Previous Music Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  >
                    <option value="Beginner">Complete Beginner</option>
                    <option value="Basic">Basic Varisais Learned</option>
                    <option value="Intermediate">Intermediate (Learned Geethams/Varnams)</option>
                    <option value="Advanced">Advanced (Performing/Learning Kritis)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Days
                  </label>
                  <input
                    type="text"
                    name="preferredDays"
                    value={formData.preferredDays}
                    onChange={handleChange}
                    placeholder="e.g. Weekends / Mon-Wed-Fri"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="e.g. Mornings / Evenings after 5 PM"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Additional Message / Questions
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any specific requirements or goals..."
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 text-sm"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3 border-t border-stone-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-maroon-800 hover:bg-maroon-900 text-gold-400 font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-md disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                      <span>Sending Registration Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Registration</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRegister}
                  className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Register via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
