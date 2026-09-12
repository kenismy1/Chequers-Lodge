import React from 'react';
import {
  ShieldCheck,
  Zap,
  Wifi,
  GlassWater,
  Car,
  Clock,
  Tv,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { AMENITIES_LIST, HOTEL_INFO } from '../data/hotelData';

export const AmenitiesSection: React.FC = () => {
  // Mapping string icon keys to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-600" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-blue-600" />;
      case 'GlassWater':
        return <GlassWater className="w-6 h-6 text-rose-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-indigo-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-stone-700" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="amenities" className="py-16 border-t border-stone-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
            Guest Comforts
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Lodge Amenities & Facilities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Everything you need for a restful stay in Mile 11, whether you are stopping over for the night or exploring Greater Accra’s coast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_LIST.map((amenity, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-amber-300 hover:shadow-sm transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center">
                {getIcon(amenity.icon)}
              </div>
              <h3 className="font-semibold text-stone-900 text-base">
                {amenity.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {amenity.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Always Ready For You
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Planning a group stay or private event?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              Chequers Lodge accommodates group bookings, corporate transit guests, and extended stays with dedicated rates.
            </p>
          </div>
          <a
            href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center gap-2 shrink-0 transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {HOTEL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
