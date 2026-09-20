import { MessageSquareQuote, ShieldAlert } from 'lucide-react';
import { REVIEWS } from '../data/businessData';
import { PageId } from '../types';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  const verifiedReview = REVIEWS.find((r) => r.isVerifiedRealCustomer) || REVIEWS[0];
  const demoReviews = REVIEWS.filter((r) => !r.isVerifiedRealCustomer);

  return (
    <div id="reviews-page" className="min-h-screen bg-[#111111] text-[#F6F5F1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF5500] uppercase tracking-[0.16em]">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CUSTOMER PERSPECTIVE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Customer Feedback
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Direct customer experiences from vehicle owners who have interacted with our Lithonia towing and storage team.
          </p>
        </div>

        {/* Featured Customer Feedback - Large Quotation Layout without fake star ratings */}
        <div className="max-w-4xl mx-auto bg-[#171717] rounded-2xl border border-white/10 p-8 sm:p-14 shadow-2xl mb-16 relative">
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF5500]">
              CUSTOMER FEEDBACK
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-zinc-400 border border-white/10">
              Lithonia Facility Experience
            </span>
          </div>

          <blockquote className="text-2xl sm:text-3xl text-zinc-100 font-medium leading-relaxed mb-8 tracking-tight">
            &ldquo;{verifiedReview.content}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-lg font-bold text-white tracking-tight">
                {verifiedReview.author}
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-0.5">
                Customer feedback
              </div>
            </div>

            <button
              onClick={() => onNavigate('request-tow')}
              className="px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#ff661a] text-white font-bold text-xs shadow-md transition-all active:scale-[0.99] w-fit"
            >
              Request a Tow
            </button>
          </div>
        </div>

        {/* Transparent Notice on Testimonials */}
        <div className="max-w-4xl mx-auto p-5 rounded-xl bg-[#151515] border border-white/10 text-xs text-zinc-400 flex items-start gap-3 mb-12">
          <ShieldAlert className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200">Honest Standards:</strong> South DeKalb Towing &amp; Transport does not publish fabricated ratings or synthetic 5-star statistics. Above is genuine, unedited customer feedback provided for this demo. Below are transparently labeled placeholders for additional customer submissions as they are collected.
          </p>
        </div>

        {/* Demo Placeholders Strictly Labeled */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#151515] rounded-xl border border-dashed border-white/15 p-6 space-y-4"
            >
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5500]">
                {review.label}
              </div>
              <p className="text-sm text-zinc-400 italic">
                &ldquo;{review.content}&rdquo;
              </p>
              <div className="text-xs text-zinc-500 pt-2 border-t border-white/5">
                Placeholder for upcoming client submission
              </div>
            </div>
          ))}

          <div className="bg-[#151515] rounded-xl border border-dashed border-white/15 p-6 space-y-4">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5500]">
              DEMO TESTIMONIAL — REPLACE WITH VERIFIED CUSTOMER REVIEW
            </div>
            <p className="text-sm text-zinc-400 italic">
              &ldquo;Demo testimonial — replace with verified customer feedback.&rdquo;
            </p>
            <div className="text-xs text-zinc-500 pt-2 border-t border-white/5">
              Placeholder for upcoming client submission
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
