import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OverviewSection } from './components/OverviewSection';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { NearbySection } from './components/NearbySection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DirectionsModal } from './components/DirectionsModal';
import { SendToPhoneModal } from './components/SendToPhoneModal';
import { AddLabelModal } from './components/AddLabelModal';
import { ShareModal } from './components/ShareModal';
import { Toast } from './components/Toast';
import { HOTEL_INFO, INITIAL_REVIEWS } from './data/hotelData';
import { Room, ReviewItem } from './types';
import { Phone, Calendar, Navigation } from 'lucide-react';

export default function App() {
  // Persistence state
  const [isSaved, setIsSaved] = useState<boolean>(() => {
    try {
      return localStorage.getItem('chequers_lodge_saved') === 'true';
    } catch {
      return false;
    }
  });

  const [currentLabel, setCurrentLabel] = useState<string | null>(() => {
    try {
      return localStorage.getItem('chequers_lodge_label');
    } catch {
      return null;
    }
  });

  const [userNote, setUserNote] = useState<string>(() => {
    try {
      return localStorage.getItem('chequers_lodge_note') || '';
    } catch {
      return '';
    }
  });

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem('chequers_lodge_reviews');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_REVIEWS;
  });

  // Modal States
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const [sendToPhoneOpen, setSendToPhoneOpen] = useState(false);
  const [addLabelOpen, setAddLabelOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Toggle Save to Google Maps / favorites
  const handleToggleSave = () => {
    const next = !isSaved;
    setIsSaved(next);
    try {
      localStorage.setItem('chequers_lodge_saved', String(next));
    } catch {
      // ignore
    }
    showToast(next ? 'Chequers Lodge saved to your places!' : 'Removed from your saved places');
  };

  // Save custom label / maps history note
  const handleSaveLabel = (label: string | null, note?: string) => {
    setCurrentLabel(label);
    if (note !== undefined) setUserNote(note);
    try {
      if (label) {
        localStorage.setItem('chequers_lodge_label', label);
      } else {
        localStorage.removeItem('chequers_lodge_label');
      }
      if (note !== undefined) {
        localStorage.setItem('chequers_lodge_note', note);
      }
    } catch {
      // ignore
    }
    showToast(label ? `Label "${label}" saved to Maps history` : 'Label removed');
  };

  // Copy Plus Code action
  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(HOTEL_INFO.plusCode);
    setCopiedPlusCode(true);
    showToast(`Plus Code ${HOTEL_INFO.plusCode} copied to clipboard!`);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  // Add review action
  const handleAddReview = (newRev: Omit<ReviewItem, 'id' | 'date' | 'helpfulCount'>) => {
    const fullReview: ReviewItem = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      helpfulCount: 0,
    };
    const updated = [fullReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('chequers_lodge_reviews', JSON.stringify(updated));
    } catch {
      // ignore
    }
    showToast('Your review was posted successfully!');
  };

  // Handle room selection for booking
  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedRoom(null);
    setBookingOpen(true);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navbar */}
      <Navbar
        onBookClick={handleOpenGeneralBooking}
        savedCount={isSaved ? 1 : 0}
        onSaveClick={handleToggleSave}
        activeLabel={currentLabel}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero with Business Title, Rating 3.8 (103), Address Mile 11, GMVC+2R, 020 174 8706 */}
        <Hero
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onOpenDirections={() => setDirectionsOpen(true)}
          onOpenNearby={() => scrollToSection('nearby')}
          onOpenSendToPhone={() => setSendToPhoneOpen(true)}
          onOpenShare={() => setShareOpen(true)}
          onOpenAddLabel={() => setAddLabelOpen(true)}
          onCopyPlusCode={handleCopyPlusCode}
          onBookClick={handleOpenGeneralBooking}
          currentLabel={currentLabel}
        />

        {/* Overview Section */}
        <OverviewSection
          onBookClick={handleOpenGeneralBooking}
          onOpenDirections={() => setDirectionsOpen(true)}
        />

        {/* Rooms & Rates Section */}
        <RoomsSection onSelectRoom={handleSelectRoom} />

        {/* Amenities Section */}
        <AmenitiesSection />

        {/* Reviews Section: 3.8 (103) with interactive review posting */}
        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
        />

        {/* Location & Directions Section: Mile 11, Plus Code GMVC+2R, Phone 020 174 8706 */}
        <LocationSection
          onOpenDirections={() => setDirectionsOpen(true)}
          onCopyPlusCode={handleCopyPlusCode}
          copied={copiedPlusCode}
        />

        {/* Nearby Points of Interest Section */}
        <NearbySection />
      </main>

      {/* Footer with comprehensive details */}
      <Footer
        onOpenDirections={() => setDirectionsOpen(true)}
        onBookClick={handleOpenGeneralBooking}
      />

      {/* Floating Bottom Quick Bar for Mobile Users */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2.5 flex items-center justify-between shadow-lg">
        <a
          href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-amber-600" />
          <span>Call Hotel</span>
        </a>

        <button
          onClick={() => setDirectionsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold"
        >
          <Navigation className="w-3.5 h-3.5 fill-blue-700" />
          <span>Directions</span>
        </button>

        <button
          onClick={handleOpenGeneralBooking}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-amber-100 text-xs font-bold shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Book Now</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedRoom={selectedRoom}
      />

      <DirectionsModal
        isOpen={directionsOpen}
        onClose={() => setDirectionsOpen(false)}
        onCopySuccess={() => showToast(`Plus Code ${HOTEL_INFO.plusCode} copied!`)}
      />

      <SendToPhoneModal
        isOpen={sendToPhoneOpen}
        onClose={() => setSendToPhoneOpen(false)}
        onCopySuccess={() => showToast('Hotel details copied to clipboard!')}
      />

      <AddLabelModal
        isOpen={addLabelOpen}
        onClose={() => setAddLabelOpen(false)}
        currentLabel={currentLabel}
        onSaveLabel={handleSaveLabel}
        userNote={userNote}
      />

      <ShareModal
        isOpen={shareOpen}
        onClose={() => setShareOpen(false)}
        onCopySuccess={() => showToast('Share link copied to clipboard!')}
      />

      {/* Floating Toast notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
