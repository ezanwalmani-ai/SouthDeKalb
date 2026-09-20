import React, { useState } from 'react';
import { Phone, MapPin, Navigation, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS_INFO, BUSINESS_HOURS } from '../data/businessData';
import TowRequestForm from '../components/TowRequestForm';

interface ContactRequestPageProps {
  initialTab?: 'request' | 'contact';
}

export default function ContactRequestPage({ initialTab = 'request' }: ContactRequestPageProps) {
  const [activeTab, setActiveTab] = useState<'request' | 'contact'>(initialTab);

  // General Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim() || !contactMessage.trim()) {
      setContactError('Please provide your name, phone number, and message.');
      return;
    }
    setContactError('');
    setContactLoading(true);

    setTimeout(() => {
      setContactLoading(false);
      setContactSuccess(true);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMessage('');
    }, 500);
  };

  return (
    <div id="contact-request-page" className="min-h-screen bg-[#111111] text-[#F7F6F2] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF5500] uppercase tracking-wider">
            <span>Direct Dispatch &amp; Office</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Contact &amp; Towing Request
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Reach our Lithonia office directly by phone, submit an online towing request, or get driving directions to our storage facility.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
          <button
            id="tab-request-tow"
            onClick={() => setActiveTab('request')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-colors ${
              activeTab === 'request'
                ? 'bg-[#FF5500] text-white shadow-md'
                : 'bg-[#1C1C1C] text-zinc-300 hover:text-white hover:bg-[#252525]'
            }`}
          >
            Request a Tow Form
          </button>

          <button
            id="tab-general-contact"
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-colors ${
              activeTab === 'contact'
                ? 'bg-[#FF5500] text-white shadow-md'
                : 'bg-[#1C1C1C] text-zinc-300 hover:text-white hover:bg-[#252525]'
            }`}
          >
            General Office Inquiry
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Active Form */}
          <div className="lg:col-span-7">
            {activeTab === 'request' ? (
              <TowRequestForm />
            ) : (
              /* General Contact Inquiry Form */
              <div className="bg-[#181818] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Send an Office Inquiry
                  </h2>
                  <p className="text-xs text-zinc-400">
                    For billing questions, scheduled transport estimates, or general facility information.
                  </p>
                </div>

                {contactSuccess ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-bold text-white">Message Received</h3>
                    <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                      Thank you for contacting South DeKalb Towing &amp; Transport. Your demo message has been registered.
                    </p>
                    <button
                      onClick={() => setContactSuccess(false)}
                      className="px-4 py-2 rounded bg-[#242424] text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} noValidate className="space-y-4">
                    {contactError && (
                      <div className="p-3 rounded-lg bg-red-900/20 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{contactError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Your Name <span className="text-[#FF5500]">*</span>
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                          Phone Number <span className="text-[#FF5500]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="(404) 555-0199"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Message <span className="text-[#FF5500]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="How can we assist you?"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={contactLoading}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-colors"
                      >
                        {contactLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Right: Business Coordinates & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Card */}
            <div className="bg-[#181818] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF5500] block mb-1">
                  Official Facility
                </span>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {BUSINESS_INFO.legalName}
                </h2>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">
                  DBA: {BUSINESS_INFO.dba}
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Street Address:</span>
                    <span>{BUSINESS_INFO.address.street}</span><br />
                    <span>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</span><br />
                    <span className="text-xs text-zinc-400">{BUSINESS_INFO.address.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF5500] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Telephone:</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-[#FF5500] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Posted Business Hours:</span>
                    <span className="text-xs text-zinc-300 font-mono">
                      Monday – Sunday: 9:00 AM – 6:00 PM<br />
                      <span className="text-zinc-400 font-sans text-[11px]">Open 7 days a week for office &amp; releases</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Three key action buttons requested by prompt */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  id="contact-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW ({BUSINESS_INFO.phone})</span>
                </a>

                <a
                  id="contact-get-directions-btn"
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#252525] hover:bg-[#2f2f2f] text-white font-semibold text-sm border border-white/10 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-zinc-400" />
                  <span>GET DIRECTIONS</span>
                </a>

                <button
                  id="contact-switch-request-tow-btn"
                  onClick={() => setActiveTab('request')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white font-semibold text-sm border border-white/10 transition-colors"
                >
                  <span>REQUEST A TOW</span>
                </button>
              </div>
            </div>

            {/* Quick Map Preview */}
            <div className="bg-[#181818] rounded-2xl border border-white/10 p-5 overflow-hidden shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Facility Location Pin
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                  alt="Road map coordinates near Lithonia, GA"
                  className="w-full h-full object-cover filter brightness-[0.4]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
                  <div className="p-2 rounded-full bg-[#FF5500] text-white mb-2 shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    7043 Rogers Lake Rd
                  </div>
                  <div className="text-[11px] text-zinc-300">
                    Lithonia, GA 30058
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
