import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Sparkles, Loader2 } from 'lucide-react';

export default function RegisterPage({ siteData }) {
  const targetEmail = "itsmeleelanar@gmail.com";
  const whatsappNumber = siteData?.artistInfo?.contact?.whatsapp || "919980334147";

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    preferredClass: 'Carnatic Vocal',
    mode: 'Online',
    experience: 'Beginner',
    preferredDays: 'Weekends',
    preferredTime: 'Morning',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="pt-24 min-h-screen bg-cream-50 pb-20">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
            Leela Narayan School of Performing Arts (LNSOPA)
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
            Register for Music Classes
          </h1>
          <p className="text-cream-200 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Carnatic Vocal • Devaranama • Bhajans • Light Music • Voice Culture • Performance Training
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 border border-gold-400/40 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-3xl font-bold text-maroon-900">
                Registration Received!
              </h4>
              <p className="text-stone-600 max-w-md mx-auto text-base">
                Thank you for your interest! Your registration details have been emailed directly to <strong>{targetEmail}</strong>. Leela's team will contact you shortly to confirm your class schedule.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-maroon-800 text-gold-400 rounded-xl hover:bg-maroon-900 font-medium text-sm transition"
              >
                Submit Another Registration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 12 or 34"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">City / Location</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Preferred Class *</label>
                  <select
                    name="preferredClass"
                    value={formData.preferredClass}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
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
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Class Format</label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  >
                    <option value="Online">Online Classes (Zoom/Meet)</option>
                    <option value="Offline">Offline Studio (Bengaluru)</option>
                    <option value="Flexible">Both / Either</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Previous Music Experience</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                  >
                    <option value="Beginner">Complete Beginner</option>
                    <option value="Basic">Basic Varisais Learned</option>
                    <option value="Intermediate">Intermediate (Learned Geethams/Varnams)</option>
                    <option value="Advanced">Advanced (Performing/Learning Kritis)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Message / Requirements</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your learning goals..."
                  className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-maroon-800 hover:bg-maroon-900 text-gold-400 font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                      <span>Sending Registration Email to {targetEmail}...</span>
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
                  className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
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
