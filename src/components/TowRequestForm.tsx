import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send, Phone, Trash2, Calendar, Clock } from 'lucide-react';
import { TowRequestSubmission } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

const VEHICLE_TYPES = [
  'Car',
  'SUV',
  'Pickup Truck',
  'Van',
  'Motorcycle',
  'Other',
];

const SERVICE_TYPES = [
  'Towing',
  'Vehicle Transport',
  'Vehicle Storage',
  'Roadside Assistance',
  'Accident Recovery',
  'Other',
];

export default function TowRequestForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicleType, setVehicleType] = useState('Car');
  const [vehicleMakeModel, setVehicleMakeModel] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Towing');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Local storage demo requests log
  const [savedRequests, setSavedRequests] = useState<TowRequestSubmission[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('south_dekalb_demo_requests');
      if (stored) {
        setSavedRequests(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    
    // Phone validation (at least 10 digits)
    const digits = phone.replace(/\D/g, '');
    if (!digits) {
      newErrors.phone = 'Phone number is required.';
    } else if (digits.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please enter the vehicle pickup location.';
    }

    if (!destination.trim()) {
      newErrors.destination = 'Please enter the destination or drop-off location.';
    }

    if (!vehicleMakeModel.trim()) {
      newErrors.vehicleMakeModel = 'Please enter vehicle make and model (e.g., 2021 Ford F-150).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate reliable demo processing
    setTimeout(() => {
      const newSubmission: TowRequestSubmission = {
        id: 'REQ-' + Math.floor(100000 + Math.random() * 900000),
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        pickupLocation: pickupLocation.trim(),
        destination: destination.trim(),
        vehicleType,
        vehicleMakeModel: vehicleMakeModel.trim(),
        serviceNeeded,
        preferredDate: preferredDate || 'Immediate Dispatch',
        preferredTime: preferredTime || 'ASAP',
        additionalDetails: additionalDetails.trim(),
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' on ' + new Date().toLocaleDateString(),
        status: 'Received',
      };

      try {
        const updated = [newSubmission, ...savedRequests].slice(0, 10);
        localStorage.setItem('south_dekalb_demo_requests', JSON.stringify(updated));
        setSavedRequests(updated);
      } catch {
        // ignore storage errors
      }

      setSubmittedId(newSubmission.id);
      setIsLoading(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedId(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setPickupLocation('');
    setDestination('');
    setVehicleMakeModel('');
    setPreferredDate('');
    setPreferredTime('');
    setAdditionalDetails('');
    setErrors({});
  };

  const clearDemoHistory = () => {
    localStorage.removeItem('south_dekalb_demo_requests');
    setSavedRequests([]);
  };

  return (
    <div id="request-tow-form-container" className="bg-[#181818] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-1">
          <span>Direct Dispatch Inquiry</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Request a Tow
        </h2>
        <p className="text-sm text-zinc-300 mt-2">
          Tell us what you need and where the vehicle is located.
        </p>
      </div>

      {/* Immediate phone banner */}
      <div className="mb-8 p-4 rounded-lg bg-[#202020] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-zinc-300">
          <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
          <span>
            Need emergency roadside towing right now? For fastest service, call dispatch directly:
          </span>
        </div>
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="font-bold text-[#FF5500] hover:text-[#ff7733] whitespace-nowrap text-sm"
        >
          (404) 508-0246
        </a>
      </div>

      {isSuccess ? (
        /* Success Screen */
        <div id="tow-request-success" className="py-8 px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Request Received
            </h3>
            <p className="text-base text-zinc-300 max-w-md mx-auto">
              Your demo towing request has been submitted successfully.
            </p>
            {submittedId && (
              <div className="inline-block mt-2 font-mono text-xs text-zinc-400 bg-white/5 px-3 py-1 rounded border border-white/10">
                Reference ID: <span className="text-white font-bold">{submittedId}</span>
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#1F1F1F] border border-white/10 max-w-md mx-auto text-left text-xs space-y-2 text-zinc-300">
            <div className="font-semibold text-white border-b border-white/10 pb-2 flex justify-between">
              <span>Submitted Vehicle Details</span>
              <span className="text-[#FF5500]">{serviceNeeded}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-400">Pickup:</span>
              <span className="text-zinc-200 font-medium">{pickupLocation}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-400">Drop-off:</span>
              <span className="text-zinc-200 font-medium">{destination}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-400">Vehicle:</span>
              <span className="text-zinc-200 font-medium">{vehicleMakeModel} ({vehicleType})</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-400">Contact:</span>
              <span className="text-zinc-200 font-medium">{fullName} • {phone}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="submit-another-request-btn"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#242424] hover:bg-[#2e2e2e] text-white text-sm font-semibold border border-white/10 transition-colors"
            >
              Submit Another Request
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white text-sm font-semibold shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      ) : (
        /* Actual Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Row 1: Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Full Name <span className="text-[#FF5500]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g., Marcus Vance"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#FF5500]'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Phone Number <span className="text-[#FF5500]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(404) 555-0123"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#FF5500]'
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Email Address <span className="text-[#FF5500]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors ${
                errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#FF5500]'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Row 3: Pickup Location & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="pickupLocation" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Pickup Location <span className="text-[#FF5500]">*</span>
              </label>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="Address or nearest intersection in Lithonia / South DeKalb"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors ${
                  errors.pickupLocation ? 'border-red-500' : 'border-white/10 focus:border-[#FF5500]'
                }`}
              />
              {errors.pickupLocation && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.pickupLocation}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="destination" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Destination <span className="text-[#FF5500]">*</span>
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Drop-off address, repair facility, or South DeKalb Storage"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors ${
                  errors.destination ? 'border-red-500' : 'border-white/10 focus:border-[#FF5500]'
                }`}
              />
              {errors.destination && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.destination}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Vehicle Type & Make/Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="vehicleType" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
              >
                {VEHICLE_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-[#141414] text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vehicleMakeModel" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Vehicle Make / Model <span className="text-[#FF5500]">*</span>
              </label>
              <input
                type="text"
                id="vehicleMakeModel"
                name="vehicleMakeModel"
                value={vehicleMakeModel}
                onChange={(e) => setVehicleMakeModel(e.target.value)}
                placeholder="e.g., 2019 Toyota Camry, Silver"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500] transition-colors ${
                  errors.vehicleMakeModel ? 'border-red-500' : 'border-white/10 focus:border-[#FF5500]'
                }`}
              />
              {errors.vehicleMakeModel && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.vehicleMakeModel}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 5: Service Needed & Preferred Date/Time */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="serviceNeeded" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Service Needed
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
              >
                {SERVICE_TYPES.map((svc) => (
                  <option key={svc} value={svc} className="bg-[#141414] text-white">
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Preferred Date (Optional)
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Preferred Time (Optional)
              </label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                placeholder="e.g., ASAP or 2:00 PM"
                className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
              />
            </div>
          </div>

          {/* Row 6: Additional Details */}
          <div>
            <label htmlFor="additionalDetails" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Additional Details (Keys present, damaged wheel, flat tire, winching needed, etc.)
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              rows={3}
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              placeholder="Provide any key details about vehicle condition, access barriers, or parking garage clearance..."
              className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5500]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">
              Your contact info is used strictly for towing logistics.
            </p>

            <button
              type="submit"
              id="submit-tow-request-btn"
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] disabled:opacity-60 text-white font-bold text-sm tracking-tight shadow-md shadow-[#FF5500]/20 transition-all active:translate-y-[1px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>REQUEST TOW</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Demo Submissions Log (Helpful for demonstration & testing) */}
      {savedRequests.length > 0 && (
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Demo Request Submissions ({savedRequests.length})
            </h4>
            <button
              onClick={clearDemoHistory}
              className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear demo log</span>
            </button>
          </div>

          <div className="space-y-2">
            {savedRequests.slice(0, 3).map((req) => (
              <div
                key={req.id}
                className="p-3 rounded-lg bg-[#141414] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2"
              >
                <div>
                  <span className="font-mono text-[#FF5500] font-semibold mr-2">{req.id}</span>
                  <span className="font-medium text-white">{req.fullName}</span>
                  <span className="text-zinc-500 ml-2">({req.vehicleMakeModel} • {req.serviceNeeded})</span>
                </div>
                <div className="text-zinc-400 text-[11px] font-mono">
                  {req.submittedAt}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
