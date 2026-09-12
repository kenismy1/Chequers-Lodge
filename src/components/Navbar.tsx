import React, { useState } from 'react';
import { Phone, Bookmark, Menu, X, Star, MapPin, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onBookClick: () => void;
  savedCount: number;
  onSaveClick: () => void;
  activeLabel: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookClick,
  savedCount,
  onSaveClick,
  activeLabel,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-xl shadow-sm border border-stone-800">
                CL
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  CHEQUERS LODGE
                </span>
                <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    {HOTEL_INFO.shortAddress}
                  </span>
                  <span>•</span>
                  <span className="flex items-center text-stone-700 font-semibold">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-0.5" />
                    {HOTEL_INFO.rating}
                    <span className="text-stone-400 ml-0.5 font-normal">({HOTEL_INFO.reviewCount})</span>
                  </span>
                </div>
              </div>
            </a>

            {activeLabel && (
              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                Label: {activeLabel}
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={() => scrollTo('overview')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => scrollTo('rooms')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Rooms & Rates
            </button>
            <button
              onClick={() => scrollTo('amenities')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="hover:text-stone-900 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              Reviews
              <span className="px-1.5 py-0.2 rounded text-[11px] bg-stone-100 font-semibold text-stone-700">
                103
              </span>
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Directions
            </button>
            <button
              onClick={() => scrollTo('nearby')}
              className="hover:text-stone-900 transition-colors cursor-pointer"
            >
              Nearby
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onSaveClick}
              title="Saved places"
              className="p-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors relative"
            >
              <Bookmark className={`w-5 h-5 ${savedCount > 0 ? 'fill-amber-500 text-amber-500' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <a
              href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>{HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-amber-100 hover:bg-stone-800 text-sm font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book / Inquire</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
              className="p-2 text-stone-700 bg-stone-100 rounded-lg"
              title="Call Hotel"
            >
              <Phone className="w-5 h-5 text-amber-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-stone-100 rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FBFBF9] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button
              onClick={() => scrollTo('overview')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100 text-stone-700"
            >
              Overview
            </button>
            <button
              onClick={() => scrollTo('rooms')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100 text-stone-700"
            >
              Rooms & Rates
            </button>
            <button
              onClick={() => scrollTo('amenities')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100 text-stone-700"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100 text-stone-700"
            >
              Reviews (103)
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100 text-stone-700"
            >
              Directions
            </button>
            <button
              onClick={() => scrollTo('nearby')}
              className="text-left px-3 py-2 rounded-md hover:bg-stone-100 text-stone-700"
            >
              Nearby Places
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {HOTEL_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 rounded-lg bg-stone-900 text-amber-100 text-sm font-semibold shadow-sm"
            >
              Book / Check Availability
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
