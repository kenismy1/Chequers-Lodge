import React from 'react';
import { Star, MapPin, Phone, ShieldCheck, Zap, Sparkles, Navigation, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { QuickActions } from './QuickActions';

interface HeroProps {
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenDirections: () => void;
  onOpenNearby: () => void;
  onOpenSendToPhone: () => void;
  onOpenShare: () => void;
  onOpenAddLabel: () => void;
  onCopyPlusCode: () => void;
  onBookClick: () => void;
  currentLabel?: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  isSaved,
  onToggleSave,
  onOpenDirections,
  onOpenNearby,
  onOpenSendToPhone,
  onOpenShare,
  onOpenAddLabel,
  onCopyPlusCode,
  onBookClick,
  currentLabel,
}) => {
  return (
    <section className="relative pt-6 pb-12 overflow-hidden">
      {/* Subtle decorative backdrop glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-amber-50/70 via-stone-50/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Header & Title Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
              <span className="px-3 py-1 rounded-full bg-stone-900 text-amber-200">
                {HOTEL_INFO.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                {HOTEL_INFO.shortAddress}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                24/7 Front Desk & Security
              </span>
              {currentLabel && (
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1">
                  Tag: {currentLabel}
                </span>
              )}
            </div>

            {/* Main Hotel Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-950 tracking-tight">
              {HOTEL_INFO.name}
            </h1>

            {/* Rating and Address Summary */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm sm:text-base text-stone-600">
              {/* Star Rating Badge */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-lg border border-stone-200 shadow-2xs">
                <span className="font-bold text-stone-900 text-base">{HOTEL_INFO.rating}</span>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(HOTEL_INFO.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : star - HOTEL_INFO.rating <= 0.5
                          ? 'fill-amber-400/60 text-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>
                <a
                  href="#reviews"
                  className="text-stone-500 hover:text-stone-900 underline text-xs font-medium ml-1"
                >
                  ({HOTEL_INFO.reviewCount} Google reviews)
                </a>
              </div>

              <div className="flex items-center gap-1 text-stone-700 font-medium">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{HOTEL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-1 font-mono text-xs bg-stone-100 text-stone-800 px-2 py-1 rounded border border-stone-200">
                <span>Code: {HOTEL_INFO.plusCode}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs: Book & Call */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-xl border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm flex items-center gap-2 shadow-2xs transition-all"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call: {HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Reserve Room</span>
            </button>
          </div>
        </div>

        {/* Visual Showcase Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 bg-stone-100 p-2">
          <div className="md:col-span-2 relative h-72 sm:h-96 rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
              alt="Chequers Lodge Exterior & Reception Ambiance"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                Chequers Lodge Hospitality
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">
                Quiet Comfort in Mile 11
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-md">
                A welcoming retreat along the Ga South corridor, close to Kokrobite & West Hills Mall.
              </p>
            </div>
          </div>

          <div className="relative h-44 sm:h-96 rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
              alt="Standard Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-xs text-amber-300 font-semibold">Accommodations</span>
              <p className="text-sm font-bold">Air-Conditioned Rooms</p>
              <p className="text-xs text-stone-300">From GHS 250 / night</p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4 h-72 sm:h-96">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                alt="Lounge & Refreshment Bar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 hover:bg-stone-900/20 transition-colors flex items-end p-3 text-white">
                <p className="text-xs font-semibold">Lounge & Refreshments</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Nearby Kokrobite Coast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/40 hover:bg-stone-900/20 transition-colors flex items-end p-3 text-white">
                <p className="text-xs font-semibold">15 mins to Kokrobite Beach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Component */}
        <QuickActions
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          onOpenDirections={onOpenDirections}
          onOpenNearby={onOpenNearby}
          onOpenSendToPhone={onOpenSendToPhone}
          onOpenShare={onOpenShare}
          onOpenAddLabel={onOpenAddLabel}
          onCopyPlusCode={onCopyPlusCode}
          currentLabel={currentLabel}
        />
      </div>
    </section>
  );
};
