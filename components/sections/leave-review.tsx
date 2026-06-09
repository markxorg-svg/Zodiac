"use client";

import { useState } from "react";

export default function LeaveReview() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const stars = "⭐".repeat(rating) || "—";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !name.trim() || !review.trim()) return;

    const text = encodeURIComponent(
      `✨ New Review for Tarot Pooja Chauhaan ✨\n\n` +
      `${"⭐".repeat(rating)} (${rating}/5)\n\n` +
      `👤 Name: ${name}\n\n` +
      `💬 Review:\n"${review}"\n\n` +
      `— Submitted via website`
    );

    window.open(`https://wa.me/919834946893?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#FFF8F5] via-[#F5EEF8] to-[#FDE8E8] overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-8 justify-center">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
          <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">Share Your Experience</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
        </div>

        <div className="text-center mb-10">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-purple-900 mb-3">Leave a Review</h2>
          <p className="text-purple-600/70 leading-relaxed">
            Your words carry energy — share how your reading touched your life.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 px-8 rounded-3xl bg-white/70 border border-purple-200 shadow-sm backdrop-blur">
            <p className="text-4xl mb-4">✨</p>
            <h3 className="font-cinzel text-2xl text-purple-900 font-bold mb-3">Thank You!</h3>
            <p className="text-purple-700/80 leading-relaxed">
              Your review is being sent to Pooja ji via WhatsApp. She truly appreciates every kind word.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur border border-purple-200 rounded-3xl px-8 py-10 shadow-sm space-y-7"
          >
            {/* Star Rating */}
            <div className="text-center">
              <p className="text-purple-700 font-semibold mb-3 text-sm tracking-wide uppercase font-cinzel">Your Rating</p>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    className="text-4xl transition-transform hover:scale-125 focus:outline-none"
                    aria-label={`${star} star`}
                  >
                    <span className={star <= (hovered || rating) ? "text-amber-400" : "text-purple-200"}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="mt-2 text-sm text-purple-500 italic">
                  {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block text-purple-800 text-sm font-semibold mb-2 font-cinzel tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full px-5 py-3 rounded-2xl border border-purple-200 bg-white/80 text-purple-900 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
              />
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-purple-800 text-sm font-semibold mb-2 font-cinzel tracking-wide">
                Your Review
              </label>
              <textarea
                required
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share how your reading helped you..."
                className="w-full px-5 py-3 rounded-2xl border border-purple-200 bg-white/80 text-purple-900 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!rating || !name.trim() || !review.trim()}
              className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-semibold text-base transition-all shadow-lg shadow-purple-300/40 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              ✦ Send My Review via WhatsApp
            </button>

            <p className="text-center text-xs text-purple-400">
              Tapping the button will open WhatsApp with your review pre-filled — just hit send.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
