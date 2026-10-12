import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquarePlus, CheckCircle2, Send, Sparkles, X } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [], onAddTestimonial }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');
  const [course, setCourse] = useState('Carnatic Vocal');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      alert("Please provide both your name and feedback message.");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || 'Student / Parent',
      course: course.trim() || 'Music Classes',
      rating: Number(rating) || 5,
      text: text.trim(),
    };

    if (onAddTestimonial) {
      onAddTestimonial(newFeedback);
    }

    // Reset form and show success confirmation
    setName('');
    setText('');
    setRating(5);
    setSubmitted(true);
    setCurrentIdx(0); // Show newly added testimonial
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  const activeTestimonial = testimonials[currentIdx] || testimonials[0];

  return (
    <section id="testimonials" className="py-20 bg-cream-100/70 border-t border-gold-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Student & Parent Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Testimonials & Reviews
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-serif italic">
            Heartfelt feedback from students, parents & music lovers
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Featured Testimonial Review Box */}
        {activeTestimonial && (
          <div className="max-w-4xl mx-auto relative mb-6">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-400/40 shadow-xl relative overflow-hidden">
              <Quote className="w-24 h-24 text-gold-400/10 absolute -top-4 -left-4 pointer-events-none" />

              <div className="flex justify-center gap-1 text-gold-500 mb-6">
                {[...Array(activeTestimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-stone-700 font-serif italic text-lg sm:text-2xl text-center leading-relaxed mb-8">
                “{activeTestimonial.text}”
              </blockquote>

              <div className="text-center border-t border-stone-100 pt-6">
                <h4 className="font-serif text-xl font-bold text-maroon-900">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mt-1">
                  {activeTestimonial.role} • <span className="text-stone-500">{activeTestimonial.course}</span>
                </p>
              </div>
            </div>

            {/* Bottom Row under the review box: Carousel Controls on Left/Center & Give Feedback on Bottom Right */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              
              {/* Carousel Controls */}
              {testimonials.length > 1 ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="p-2.5 rounded-full bg-white border border-stone-300 hover:border-gold-500 text-stone-700 hover:text-maroon-900 shadow-sm transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex gap-1.5 flex-wrap justify-center">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIdx(idx)}
                        className={`h-2.5 rounded-full transition-all ${
                          currentIdx === idx ? 'bg-maroon-800 w-6' : 'bg-stone-300 w-2.5 hover:bg-gold-400'
                        }`}
                      ></button>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="p-2.5 rounded-full bg-white border border-stone-300 hover:border-gold-500 text-stone-700 hover:text-maroon-900 shadow-sm transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div></div>
              )}

              {/* Bottom Right: Give Feedback Button under the review box */}
              <div className="flex justify-end w-full sm:w-auto">
                <button
                  onClick={() => { setShowForm(!showForm); setSubmitted(false); }}
                  className="px-5 py-2.5 rounded-full maroon-gradient-bg text-gold-400 font-bold text-xs shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gold-400/40 flex items-center gap-2"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>{showForm ? 'Hide Feedback Form' : 'Give Feedback'}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Feedback Form Card (appears when clicking Give Feedback) */}
        {showForm && (
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-3xl p-6 sm:p-10 border-2 border-gold-400/50 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-maroon-900 font-serif font-bold text-2xl">
                <Sparkles className="w-5 h-5 text-gold-600" />
                <h3>Share Your Feedback</h3>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm mb-6">
              Your review will be saved directly and displayed in the testimonials box above.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center flex flex-col items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                <h4 className="font-serif font-bold text-lg">Thank You for Your Feedback!</h4>
                <p className="text-xs">Your testimonial has been saved and added to the review box successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Smt. Radhika Rao / Master Aarav"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Who Are You?
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 outline-none text-sm bg-white"
                    >
                      <option value="Student">Student</option>
                      <option value="Parent of Student">Parent of Student</option>
                      <option value="Senior Learner">Senior Learner</option>
                      <option value="Concert Attendee">Concert Attendee</option>
                      <option value="Music Enthusiast">Music Enthusiast</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Class / Program
                    </label>
                    <input
                      type="text"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      placeholder="e.g. Carnatic Vocal, Devaranama"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-gold-500 hover:scale-110 transition"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || rating) >= star ? 'fill-gold-500 text-gold-500' : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-stone-500 ml-2">
                      {rating} of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Experience / Feedback *
                  </label>
                  <textarea
                    required
                    rows="3"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Share how learning under Leela Narayan helped your singing, voice culture, or confidence..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl maroon-gradient-bg text-gold-400 font-bold text-xs shadow hover:shadow-md flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Feedback</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
