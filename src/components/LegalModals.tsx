import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="legal-modal-content"
        className="bg-[#181818] border border-white/10 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-[#F7F6F2] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="legal-modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
            </h2>
            <p className="text-xs text-zinc-400 mb-4">
              South DeKalb Towing & Transport, Inc. • Updated September 2026
            </p>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                South DeKalb Towing & Transport, Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This privacy notice explains what information we collect when you request towing, vehicle transport, or vehicle storage services from our Lithonia, Georgia facility.
              </p>
              <h3 className="font-semibold text-white mt-4">1. Information We Collect</h3>
              <p>
                When contacting our dispatch office or submitting a service request, we may collect your name, telephone number, email address, vehicle pickup location, destination address, and vehicle details (make, model, license plate, VIN, and condition). For storage releases, valid government identification and proof of vehicle ownership or authorized release documentation are required by Georgia law.
              </p>
              <h3 className="font-semibold text-white mt-4">2. How We Use Information</h3>
              <p>
                We use collected information solely to dispatch equipment, coordinate vehicle transport, maintain required legal storage logs, process payments, and communicate service updates directly to you. We do not sell or lease customer contact lists to third-party marketing companies.
              </p>
              <h3 className="font-semibold text-white mt-4">3. Data Retention and Security</h3>
              <p>
                Service and storage records are maintained in compliance with local municipal ordinances and Georgia Department of Public Safety regulations. We employ administrative and physical safeguards at our facility to protect written and digital records.
              </p>
              <h3 className="font-semibold text-white mt-4">4. Contact Information</h3>
              <p>
                If you have questions regarding this policy, contact our main office at 7043 Rogers Lake Rd, Lithonia, GA 30058, or call (404) 508-0246.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white mb-4">
              Terms of Service
            </h2>
            <p className="text-xs text-zinc-400 mb-4">
              South DeKalb Towing & Transport, Inc. • Updated September 2026
            </p>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                By requesting towing, transport, or storage services from South DeKalb Towing & Transport, Inc. (DBA: South DeKalb Transport & Storage), you agree to the following terms and conditions.
              </p>
              <h3 className="font-semibold text-white mt-4">1. Dispatch & Estimates</h3>
              <p>
                Estimated response times are approximations dependent on road traffic, emergency road closures, and weather conditions throughout South DeKalb County and surrounding areas. Our dispatchers provide honest, real-time updates.
              </p>
              <h3 className="font-semibold text-white mt-4">2. Vehicle Release & Documentation</h3>
              <p>
                Vehicle storage releases at our facility (7043 Rogers Lake Rd, Lithonia, GA 30058) require presentation of valid government photo identification, current registration or title proving lawful ownership, and payment of accrued towing and daily storage fees in accordance with posted Georgia state tariffs.
              </p>
              <h3 className="font-semibold text-white mt-4">3. Private Property and Municipal Tows</h3>
              <p>
                Vehicles towed pursuant to law enforcement directives or authorized private property impound agreements are stored under statutory regulations. Inquiries regarding vehicle status, hold authorizations, or property access must be handled during posted office business hours.
              </p>
              <h3 className="font-semibold text-white mt-4">4. Questions & Office Verification</h3>
              <p>
                For specific rate inquiries or vehicle status checks, please contact our office directly at (404) 508-0246 during regular posted hours.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[#222222] hover:bg-[#2c2c2c] text-white text-sm font-medium border border-white/10 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
