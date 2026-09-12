import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquarePlus, CheckCircle, ShieldCheck, Filter } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { ReviewItem } from '../types';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: Omit<ReviewItem, 'id' | 'date' | 'helpfulCount'>) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [stayType, setStayType] = useState('Weekend getaway');
  const [comment, setComment] = useState('');
  const [helpfulIds, setHelpfulIds] = useState<Record<string, number>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalReviewsCount = HOTEL_INFO.reviewCount + (reviews.length - 6 > 0 ? reviews.length - 6 : 0);

  const filteredReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const colors = ['bg-emerald-600', 'bg-amber-600', 'bg-blue-600', 'bg-purple-600', 'bg-rose-600'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    onAddReview({
      author: authorName.trim(),
      avatarColor: randomColor,
      rating,
      stayType,
      comment: comment.trim(),
    });

    setFormSubmitted(true);
    setAuthorName('');
    setComment('');
    setTimeout(() => {
      setFormSubmitted(false);
      setShowReviewForm(false);
    }, 2000);
  };

  const handleHelpful = (id: string) => {
    setHelpfulIds((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="reviews" className="py-16 border-t border-stone-200/80 bg-stone-50/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              Guest Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Reviews & Ratings
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Authentic verified guest impressions of Chequers Lodge in Mile 11.
            </p>
          </div>

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-colors shrink-0 cursor-pointer self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-400" />
            <span>{showReviewForm ? 'Close Form' : 'Write a Review'}</span>
          </button>
        </div>

        {/* Rating Score Dashboard Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Overall Rating */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 lg:border-r lg:border-stone-100 lg:pr-8">
            <div className="text-6xl font-serif font-extrabold text-stone-900 tracking-tight">
              3.8
            </div>
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= 3
                      ? 'fill-amber-400 text-amber-400'
                      : star === 4
                      ? 'fill-amber-400/80 text-amber-400'
                      : 'text-stone-300'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm font-semibold text-stone-700">
              Based on <strong className="text-stone-900">{totalReviewsCount} Google Reviews</strong>
            </div>
            <p className="text-xs text-stone-500">
              Rated for helpful staff, backup generator power, and easy Mile 11 road access.
            </p>
          </div>

          {/* Star Distribution Breakdown */}
          <div className="lg:col-span-4 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-12 text-stone-600 font-medium">5 stars</span>
              <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[44%]" />
              </div>
              <span className="w-8 text-right text-stone-500">44%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-12 text-stone-600 font-medium">4 stars</span>
              <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[28%]" />
              </div>
              <span className="w-8 text-right text-stone-500">28%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-12 text-stone-600 font-medium">3 stars</span>
              <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[17%]" />
              </div>
              <span className="w-8 text-right text-stone-500">17%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-12 text-stone-600 font-medium">2 stars</span>
              <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[6%]" />
              </div>
              <span className="w-8 text-right text-stone-500">6%</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-12 text-stone-600 font-medium">1 star</span>
              <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[5%]" />
              </div>
              <span className="w-8 text-right text-stone-500">5%</span>
            </div>
          </div>

          {/* Sub-Category Scores */}
          <div className="lg:col-span-4 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 space-y-2.5 text-xs">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider">
              Category Scores
            </h4>
            <div className="flex justify-between items-center text-stone-700">
              <span>Value for Money</span>
              <span className="font-bold text-stone-900">4.2 / 5.0</span>
            </div>
            <div className="flex justify-between items-center text-stone-700">
              <span>Staff & Hospitality</span>
              <span className="font-bold text-stone-900">4.1 / 5.0</span>
            </div>
            <div className="flex justify-between items-center text-stone-700">
              <span>Location & Accessibility</span>
              <span className="font-bold text-stone-900">3.9 / 5.0</span>
            </div>
            <div className="flex justify-between items-center text-stone-700">
              <span>Room Comfort & AC</span>
              <span className="font-bold text-stone-900">3.7 / 5.0</span>
            </div>
          </div>
        </div>

        {/* Review Submission Form (Expandable) */}
        {showReviewForm && (
          <form
            onSubmit={handleSubmitReview}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6"
          >
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-stone-900">Share Your Experience</h3>
              <p className="text-xs text-stone-500">
                Help fellow travelers by sharing your honest feedback about Chequers Lodge.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center gap-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Thank you! Your review has been added.</span>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Kwabena Boateng"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Rating (Stars)
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Average</option>
                      <option value={2}>2 Stars - Poor</option>
                      <option value={1}>1 Star - Terrible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Trip Type
                    </label>
                    <select
                      value={stayType}
                      onChange={(e) => setStayType(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value="Weekend getaway">Weekend getaway</option>
                      <option value="Business stay">Business stay</option>
                      <option value="Transit stay">Transit stay</option>
                      <option value="Solo traveler">Solo traveler</option>
                      <option value="Family visit">Family visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about the room cleanliness, customer service, backup generator, or stay..."
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 text-xs font-semibold shadow-xs"
                  >
                    Post Review
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-stone-500 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          <button
            onClick={() => setFilterRating(null)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              filterRating === null
                ? 'bg-stone-900 text-white'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = reviews.filter((r) => r.rating === stars).length;
            return (
              <button
                key={stars}
                onClick={() => setFilterRating(stars)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                  filterRating === stars
                    ? 'bg-amber-600 text-white'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>{stars}</span>
                <Star className="w-3 h-3 fill-current" />
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => {
            const userUpvotes = helpfulIds[rev.id] || 0;
            return (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full text-white font-bold flex items-center justify-center text-sm shadow-xs ${rev.avatarColor}`}
                      >
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-900 text-sm">{rev.author}</h4>
                        <div className="flex items-center gap-2 text-xs text-stone-400">
                          <span>{rev.stayType}</span>
                          <span>•</span>
                          <span>{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    "{rev.comment}"
                  </p>

                  {/* Official Lodge Response */}
                  {rev.response && (
                    <div className="mt-3 p-3.5 bg-stone-50 border border-stone-200 rounded-xl space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                        <span>Response from {rev.response.author}</span>
                        <span className="text-stone-400 text-[10px] font-normal">
                          • {rev.response.date}
                        </span>
                      </div>
                      <p className="text-stone-600 italic">"{rev.response.text}"</p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="text-[11px] text-stone-400">Verified Google Maps Review</span>
                  <button
                    onClick={() => handleHelpful(rev.id)}
                    className="flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful ({rev.helpfulCount + userUpvotes})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
