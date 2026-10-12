import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Instagram, Youtube, Facebook, Linkedin, Sparkles, Loader2 } from 'lucide-react';

export default function ContactSection({ contactInfo, onOpenRegister }) {
  const targetEmail = contactInfo?.email || 'itsmeleelanar@gmail.com';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          _subject: `New Music Enquiry: ${formState.subject} from ${formState.name}`,
          Name: formState.name,
          Email: formState.email,
          Phone: formState.phone,
          Enquiry_Type: formState.subject,
          Message: formState.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto
        window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Offline or network error fallback
      window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${(contactInfo.phone || '+91 99803 34147').replace(/[^0-9+]/g, '')}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent("Enquiry for Leela Narayan")}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp || '919980334147'}?text=${encodeURIComponent("Hello Leela, I would like to get in touch regarding your music classes / events.")}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Get In Touch & Enroll
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Let's Connect Through Music
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-serif italic">
            Reach out for music classes, workshops, stage recitals & event anchoring
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          <button
            onClick={handleWhatsApp}
            className="p-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition flex flex-col items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleCall}
            className="p-4 rounded-2xl maroon-gradient-bg text-gold-400 font-bold text-sm shadow-md hover:opacity-95 transition flex flex-col items-center justify-center gap-2 group"
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Call Direct</span>
          </button>

          <button
            onClick={handleEmail}
            className="p-4 rounded-2xl bg-stone-800 text-gold-400 font-bold text-sm shadow-md hover:bg-stone-900 transition flex flex-col items-center justify-center gap-2 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Send Email</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="p-4 rounded-2xl bg-gold-500 text-maroon-950 font-bold text-sm shadow-md hover:bg-gold-600 transition flex flex-col items-center justify-center gap-2 group"
          >
            <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Join a Class</span>
          </button>
        </div>

        {/* Main Grid: Contact Info + Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-gold-400/30 shadow-sm">
            <div>
              <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2">
                Leela Narayan
              </h3>
              <p className="text-xs text-gold-700 font-semibold uppercase tracking-wider">
                Leela Narayan School of Performing Arts (LNSOPA)
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase">Studio Location</div>
                  <div className="text-stone-800 font-semibold text-sm">{contactInfo.address || 'Bengaluru, Karnataka, India'}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase">Phone / WhatsApp</div>
                  <div className="text-stone-800 font-semibold text-sm">{contactInfo.phone || '+91 98765 43210'}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl maroon-gradient-bg text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500 uppercase">Email Address</div>
                  <a href={`mailto:${targetEmail}`} className="text-maroon-900 font-semibold text-sm hover:underline">
                    {targetEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Dummy Social Media Handles */}
            <div className="pt-6 border-t border-stone-100">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                Connect With Leela (Official Channels)
              </div>
              <div className="flex gap-3">
                <a
                  href={contactInfo.instagram || "https://instagram.com/leelanarayan.official"}
                  target="_blank"
                  rel="noreferrer"
                  title="Leela Narayan Instagram"
                  className="w-10 h-10 rounded-full bg-cream-100 text-maroon-900 hover:bg-maroon-800 hover:text-gold-400 flex items-center justify-center transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.youtube || "https://youtube.com/@leelanarayanmusic"}
                  target="_blank"
                  rel="noreferrer"
                  title="Leela Narayan YouTube"
                  className="w-10 h-10 rounded-full bg-cream-100 text-maroon-900 hover:bg-maroon-800 hover:text-gold-400 flex items-center justify-center transition"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.facebook || "https://facebook.com/leelanarayanmusic"}
                  target="_blank"
                  rel="noreferrer"
                  title="Leela Narayan Facebook"
                  className="w-10 h-10 rounded-full bg-cream-100 text-maroon-900 hover:bg-maroon-800 hover:text-gold-400 flex items-center justify-center transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.linkedin || "https://linkedin.com/in/leelanarayan"}
                  target="_blank"
                  rel="noreferrer"
                  title="Leela Narayan LinkedIn"
                  className="w-10 h-10 rounded-full bg-cream-100 text-maroon-900 hover:bg-maroon-800 hover:text-gold-400 flex items-center justify-center transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gold-400/30 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Your message will be delivered directly to <span className="font-semibold text-maroon-900">{targetEmail}</span>.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-maroon-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Thank you for connecting. An email has been dispatched to <strong>{targetEmail}</strong>, and Leela's team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-cream-200 text-maroon-900 rounded-full text-xs font-semibold hover:bg-gold-400 hover:text-white transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Enquiry Type</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="General Enquiry">General Music Class Enquiry</option>
                    <option value="Carnatic Vocal">Carnatic Vocal Training</option>
                    <option value="Devaranama / Bhajans">Devaranama / Bhajan Classes</option>
                    <option value="Event Anchoring">Event Anchoring & Hosting</option>
                    <option value="Stage Performance">Stage Performance Booking</option>
                    <option value="Workshop">Music Workshop Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="How can Leela help you?"
                    className="w-full px-3.5 py-2.5 bg-cream-50 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-gold-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 maroon-gradient-bg text-gold-400 font-bold rounded-xl shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                      <span>Sending Email to {targetEmail}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message via Email</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
