import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Copy,
  Phone,
  Check,
  ExternalLink,
  Car,
  Compass,
  Bus,
  Share2
} from 'lucide-react';
import { HOTEL_INFO, DIRECTION_ROUTES } from '../data/hotelData';

interface LocationSectionProps {
  onOpenDirections: () => void;
  onCopyPlusCode: () => void;
  copied: boolean;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onOpenDirections,
  onCopyPlusCode,
  copied,
}) => {
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  return (
    <section id="location" className="py-16 border-t border-stone-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              Location & Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Finding Chequers Lodge in Mile 11
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Conveniently nestled in Mile 11, between Mallam and Kasoa. Easily reached by private vehicle, ride-hailing apps, or local trotro transit.
            </p>
          </div>

          <button
            onClick={onOpenDirections}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-colors shrink-0 cursor-pointer self-start md:self-auto"
          >
            <Navigation className="w-4 h-4 fill-white" />
            <span>Open Directions Guide</span>
          </button>
        </div>

        {/* Highlighted Location Info Bar */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-stone-800 pb-4 md:pb-0 md:pr-4">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Location / Neighborhood</span>
            </div>
            <div className="text-xl font-bold font-serif">{HOTEL_INFO.shortAddress}</div>
            <p className="text-xs text-stone-400">
              Ga South Municipal / Accra-Kasoa Highway corridor
            </p>
          </div>

          <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-stone-800 pb-4 md:pb-0 md:pr-4">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>Plus Code (Google Maps)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-mono font-bold tracking-tight bg-stone-800 px-2.5 py-1 rounded border border-stone-700">
                {HOTEL_INFO.plusCode}
              </span>
              <button
                onClick={onCopyPlusCode}
                title="Copy Plus Code"
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-stone-400">
              Paste directly into Google Maps search bar
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              <span>Direct Phone & Inquiries</span>
            </div>
            <div className="text-xl font-bold font-mono">
              <a
                href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-amber-400 transition-colors"
              >
                {HOTEL_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-stone-400">
              Call anytime if you need live turn-by-turn guidance
            </p>
          </div>
        </div>

        {/* Map and Route Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Map Embed / Visualizer */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col">
            <div className="relative h-80 sm:h-96 w-full bg-stone-100">
              {/* Google Maps embed with query for Plus Code GMVC+2R Mile 11 */}
              <iframe
                title="Chequers Lodge Map Location"
                src="https://maps.google.com/maps?q=GMVC%2B2R%20Mile%2011,%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Pinpoint overlay tag */}
              <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl border border-stone-700 shadow-md text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">Chequers Lodge • Mile 11</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Plus Code: <strong className="text-stone-900 font-mono">{HOTEL_INFO.plusCode}</strong></span>
              </div>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 hover:bg-stone-100 transition-colors shadow-2xs"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
              </a>
            </div>
          </div>

          {/* Turn-by-Turn Route Guidance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm space-y-5">
              <h3 className="font-serif font-bold text-xl text-stone-900 flex items-center gap-2">
                <Car className="w-5 h-5 text-amber-600" />
                <span>Driving & Transit Directions</span>
              </h3>

              {/* Route Tabs */}
              <div className="flex flex-col gap-1.5">
                {DIRECTION_ROUTES.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRouteIndex(index)}
                    className={`text-left p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      activeRouteIndex === index
                        ? 'bg-amber-50 border border-amber-300 text-amber-900'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/70'
                    }`}
                  >
                    <span className="truncate">{route.from}</span>
                    <span className="text-[11px] opacity-75 font-normal shrink-0 ml-2">
                      {route.duration}
                    </span>
                  </button>
                ))}
              </div>

              {/* Steps for selected route */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Step-by-Step ({DIRECTION_ROUTES[activeRouteIndex].mode})
                </div>
                <div className="space-y-2.5">
                  {DIRECTION_ROUTES[activeRouteIndex].instructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Transport & Ride Hailing Info */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-900">
                  <Bus className="w-4 h-4 text-stone-500" />
                  <span>Public Transit & Ride Hailing</span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  For Trotros, take any Kasoa-bound vehicle and alight at <strong>Mile 11 Junction</strong>. For Uber, Bolt, or Yango, search for "Chequers Lodge" or input Plus Code "GMVC+2R Mile 11".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
