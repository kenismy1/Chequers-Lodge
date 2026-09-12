import React from 'react';
import { X, Navigation, MapPin, ExternalLink, Phone, Copy, Check, Car, Compass } from 'lucide-react';
import { HOTEL_INFO, DIRECTION_ROUTES } from '../data/hotelData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(HOTEL_INFO.plusCode);
    setCopied(true);
    onCopySuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsNav = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Chequers Lodge, GMVC+2R Mile 11, Ghana'
  )}`;
  const appleMapsNav = `https://maps.apple.com/?daddr=GMVC%2B2R+Mile+11+Ghana`;
  const wazeNav = `https://waze.com/ul?q=Chequers%20Lodge%20Mile%2011`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-stone-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Navigation className="w-5 h-5 fill-blue-600" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-widest text-blue-700 uppercase">
                Navigation
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Directions to Chequers Lodge
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Destination Highlights Card */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-stone-900 text-base">{HOTEL_INFO.name}</h4>
                <p className="text-xs text-stone-600 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  {HOTEL_INFO.address}
                </p>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Mile 11
              </span>
            </div>

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
              <span className="text-stone-500 font-mono">Plus Code: <strong>{HOTEL_INFO.plusCode}</strong></span>
              <button
                onClick={handleCopyCode}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Code Copied!' : 'Copy Plus Code'}</span>
              </button>
            </div>
          </div>

          {/* Launch In Favorite Map App Buttons */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              Launch Turn-By-Turn Navigation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={googleMapsNav}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5 fill-white" />
                <span>Google Maps</span>
              </a>

              <a
                href={appleMapsNav}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors text-center"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Apple Maps</span>
              </a>

              <a
                href={wazeNav}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors text-center"
              >
                <Car className="w-3.5 h-3.5" />
                <span>Waze</span>
              </a>
            </div>
          </div>

          {/* Quick Route Snippets */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
              Popular Approach Routes
            </h4>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                <span className="font-bold text-stone-900">From Central Accra / Mallam:</span>
                <p>Follow N1 Motorway towards Kasoa. Drive past Weija & West Hills Mall down to Mile 11 junction, then follow local signs.</p>
              </div>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                <span className="font-bold text-stone-900">From Kasoa / Winneba:</span>
                <p>Drive eastbound on the Accra-Kasoa Highway. Branch off at the Mile 11 neighborhood corridor to Chequers Lodge.</p>
              </div>
            </div>
          </div>

          {/* Phone Assistance */}
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center justify-between">
            <div className="text-xs">
              <p className="font-semibold text-stone-900">Lost or need directions assistance?</p>
              <p className="text-stone-600 mt-0.5">Our front desk at Mile 11 can guide your driver.</p>
            </div>
            <a
              href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
              className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
