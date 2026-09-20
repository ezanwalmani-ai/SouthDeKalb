import { useState } from 'react';
import { HelpCircle, Plus, Minus, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export default function FaqPage({ onNavigate }: FaqPageProps) {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-4']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="faq-page" className="min-h-screen bg-[#111111] text-[#F7F6F2] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF5500] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Straightforward answers to common questions about towing dispatch, vehicle release, location access, and storage in Lithonia, GA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-16">
          {FAQS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#181818] border-[#FF5500]/40 shadow-lg'
                    : 'bg-[#151515] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#FF5500] text-white'
                        : 'bg-[#222222] text-zinc-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Box */}
        <div className="bg-[#161616] rounded-2xl border border-white/10 p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Have a specific policy or rate question?
          </h3>
          <p className="text-sm text-zinc-300 max-w-lg mx-auto">
            Please contact the office for current information and customized transport inquiries.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Office ({BUSINESS_INFO.phone})</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-lg bg-[#242424] hover:bg-[#2c2c2c] text-white font-semibold text-sm border border-white/10 transition-colors"
            >
              Submit an Online Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
