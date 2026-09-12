import React from 'react';
import { MapPin, Phone, Star, Compass, Clock, ShieldCheck, Heart } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenDirections: () => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDirections, onBookClick }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lodge Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-serif font-bold text-lg">
                CL
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                {HOTEL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Quiet, air-conditioned accommodations in Mile 11, Ga South. Providing hospitality, secure parking, 24/7 backup power, and easy coastal access.
            </p>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </span>
              <span className="font-bold text-white text-sm">{HOTEL_INFO.rating}</span>
              <span className="text-stone-400">({HOTEL_INFO.reviewCount} Google Maps reviews)</span>
            </div>
          </div>

          {/* Contact & Location Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Location & Contact
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono text-stone-200">Plus Code: {HOTEL_INFO.plusCode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Front Desk: 24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Property Overview
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  Room Rates & Booking
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">
                  Facilities & Generator Power
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Guest Reviews ({HOTEL_INFO.reviewCount})
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDirections}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Driving Directions
                </button>
              </li>
              <li>
                <a href="#nearby" className="hover:text-white transition-colors">
                  Kokrobite Beach & Nearby
                </a>
              </li>
            </ul>
          </div>

          {/* Reservation Prompt */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Check-in Hours
            </h4>
            <div className="text-xs text-stone-400 space-y-1">
              <div>Check-in: <strong className="text-white">From 2:00 PM</strong></div>
              <div>Check-out: <strong className="text-white">By 12:00 PM</strong></div>
              <div>Day-Rest Stays: <strong className="text-white">9:00 AM - 6:00 PM</strong></div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Inquire / Book Room
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Chequers Lodge. Mile 11, Greater Accra, Ghana.
          </div>

          <div className="flex items-center gap-1">
            <span>Hospitality in Mile 11</span>
            <span>•</span>
            <span className="font-mono">{HOTEL_INFO.plusCode}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
