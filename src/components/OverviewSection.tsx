import React from 'react';
import {
  Clock,
  Shield,
  Zap,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  CreditCard,
  Wifi,
  Sparkles
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface OverviewSectionProps {
  onBookClick: () => void;
  onOpenDirections: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onBookClick,
  onOpenDirections,
}) => {
  return (
    <section id="overview" className="py-12 border-t border-stone-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Overview Body */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                Property Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                Welcome to Chequers Lodge
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                {HOTEL_INFO.summary}
              </p>
            </div>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">24/7 Standby Generator</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Automatic switchover guarantees steady power for air conditioners, water heaters, and electronics.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">Gated & Guarded Compound</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Dedicated on-site security guards and gated parking ensure total privacy and safety for your vehicle.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">24-Hour Reception Desk</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Late-night check-ins, early-morning departures, and round-the-clock room assistance anytime.
                </p>
              </div>
            </div>

            {/* Why Guests Choose Chequers Lodge */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/70 space-y-4">
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Lodge Highlights & Comforts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Climate-controlled split air conditioning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Private en-suite bathrooms with hot showers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-site beverage bar with chilled drinks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Spacious free parking within premises</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10 mins drive to West Hills Mall</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>15 mins drive to Kokrobite Beach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Card: Key Details, Timings & Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 space-y-6">
              <h3 className="font-serif font-bold text-xl text-stone-900 border-b border-stone-100 pb-3">
                Stay Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-stone-500">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Check-in</span>
                  </div>
                  <span className="font-semibold text-stone-900">{HOTEL_INFO.checkInTime}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-stone-500">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Check-out</span>
                  </div>
                  <span className="font-semibold text-stone-900">{HOTEL_INFO.checkOutTime}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-stone-500">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Front Desk</span>
                  </div>
                  <span className="font-semibold text-stone-900">{HOTEL_INFO.frontDeskHours}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-stone-500">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    <span>Payment Methods</span>
                  </div>
                  <span className="font-semibold text-stone-900 text-right">Cash, Mobile Money (MoMo)</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-stone-500">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Address</span>
                  </div>
                  <span className="font-semibold text-stone-900 text-right">{HOTEL_INFO.shortAddress}</span>
                </div>
              </div>

              {/* Direct Booking & Direction Prompts */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={onBookClick}
                  className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Check Availability</span>
                </button>

                <button
                  onClick={onOpenDirections}
                  className="w-full py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-stone-600" />
                  <span>View Directions</span>
                </button>
              </div>

              {/* Phone quick call box */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 flex items-center justify-between">
                <div className="text-xs">
                  <p className="font-medium text-stone-600">Need instant assistance?</p>
                  <p className="font-bold text-stone-900 text-sm mt-0.5">{HOTEL_INFO.phone}</p>
                </div>
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
