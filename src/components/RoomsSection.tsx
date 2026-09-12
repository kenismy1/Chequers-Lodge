import React from 'react';
import { Users, Bed, Maximize2, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types';

interface RoomsSectionProps {
  onSelectRoom: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom }) => {
  return (
    <section id="rooms" className="py-16 border-t border-stone-200/80 bg-stone-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              Accommodations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Rooms & Rates at Chequers Lodge
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Clean, fully air-conditioned rooms designed for peaceful sleep, privacy, and convenience in Mile 11.
            </p>
          </div>

          <div className="text-xs text-stone-500 flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-stone-200 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All rates include taxes & 24/7 backup power</span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Room Image with Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {room.badge && (
                    <span className="px-3 py-1 bg-stone-950/80 backdrop-blur-xs text-amber-300 text-xs font-semibold rounded-full border border-stone-700">
                      {room.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-stone-200/80 shadow-xs text-right">
                  <div className="text-xs text-stone-500">Starting from</div>
                  <div className="text-lg font-bold text-stone-950 font-serif">
                    GHS {room.priceGHS}
                    <span className="text-xs font-normal text-stone-500 font-sans"> / night</span>
                  </div>
                  <div className="text-[11px] text-stone-400">≈ ${room.priceUSD} USD</div>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{room.tagline}</p>
                  </div>

                  {/* Quick specs pill row */}
                  <div className="flex flex-wrap gap-2 text-xs text-stone-600">
                    <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md">
                      <Users className="w-3.5 h-3.5 text-stone-500" />
                      {room.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md">
                      <Bed className="w-3.5 h-3.5 text-stone-500" />
                      {room.bedType}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md">
                      <Maximize2 className="w-3.5 h-3.5 text-stone-500" />
                      {room.size}
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Key Features bullet list */}
                  <div className="pt-2 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs text-stone-700">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire / Book CTA Button */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-stone-400">Total peace of mind</span>
                    <p className="text-xs font-semibold text-stone-700">Instant reservation inquiry</p>
                  </div>
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <span>Reserve Room</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
