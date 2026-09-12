import React, { useState } from 'react';
import { Compass, Car, Navigation, MapPin } from 'lucide-react';
import { NEARBY_PLACES } from '../data/hotelData';

export const NearbySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Beach', 'Shopping', 'Nature', 'Transit'];

  const filteredPlaces = selectedCategory && selectedCategory !== 'All'
    ? NEARBY_PLACES.filter((p) => p.category === selectedCategory)
    : NEARBY_PLACES;

  return (
    <section id="nearby" className="py-16 border-t border-stone-200/80 bg-stone-50/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              Explore the Area
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Nearby Attractions & Points of Interest
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Chequers Lodge is ideally situated close to Greater Accra’s finest Atlantic beaches, regional shopping centers, and scenic lakes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  (selectedCategory === cat || (!selectedCategory && cat === 'All'))
                    ? 'bg-stone-900 text-amber-200 shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-stone-700">
                  {place.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-stone-900 text-xs font-bold px-2.5 py-1 rounded-lg border border-stone-200/80 shadow-xs flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-amber-600" />
                  <span>{place.driveTime}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                      {place.name}
                    </h3>
                    <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded shrink-0">
                      {place.distance}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {place.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    From Mile 11
                  </span>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=GMVC%2B2R+Mile+11&destination=${encodeURIComponent(place.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Route</span>
                    <Navigation className="w-3 h-3 fill-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
