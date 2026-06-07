export default function Membership() {
  return (
    <section className="bg-cream py-[6rem] px-[5%]" id="membership">
      <div className="max-w-[1360px] mx-auto">
        
        <div className="text-center max-w-[580px] mx-auto rv">
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">Membership</div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
            Credits that refresh.<br />
            <i className="italic text-sage">Experiences that last.</i>
          </h2>
          <p className="text-[0.97rem] text-soft leading-[1.7] text-center mt-[0.7rem] mx-auto">
            Like ClassPass — but built for a different customer. Not volume. Depth. Not a studio. Your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] mt-[3rem]">
          
          <div className="bg-white rounded-[var(--radius-rl)] overflow-hidden border-[1.5px] border-warm transition duration-250 shadow-sh hover:-translate-y-[5px] hover:shadow-sm rv d1">
            <div className="h-[5px] bg-muted"></div>
            <div className="p-[1.4rem_1.3rem]">
              <div className="font-serif text-[1.4rem] font-semibold text-deep mb-[0.18rem]">Essentials</div>
              <div className="text-[2rem] font-bold text-deep leading-none mb-[0.18rem]">
                <sup className="text-[0.95rem] align-super">$</sup>49<sub className="text-[0.72rem] font-normal text-soft">/mo</sub>
              </div>
              <div className="text-[0.74rem] text-soft mb-[0.85rem] leading-[1.45]">The starter. Credits on demand.</div>
              <div className="text-[0.73rem] font-semibold text-sage pb-[0.8rem] border-b border-warm mb-[0.85rem]">8 credits / month · top-ups available</div>
              <div className="flex flex-col gap-[0.38rem] mb-[1.1rem]">
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Book any service with credits or cash</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Body Score + wearable sync</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">In-app messaging with providers</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Flash deal access</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Shop at member pricing (5% off)</div>
              </div>
              <button className="block w-full p-[0.65rem] rounded-[10px] font-sans text-[0.82rem] font-bold cursor-pointer transition duration-200 text-center border-[1.5px] border-parch bg-transparent text-mid hover:border-gold hover:text-gold">
                Get started
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-rl)] overflow-hidden border-[1.5px] border-gold transition duration-250 shadow-[0_0_0_1px_var(--color-gold),var(--shadow-sm)] hover:-translate-y-[5px] rv d2">
            <div className="p-[0.45rem_1rem] text-center text-[0.64rem] font-bold tracking-[0.08em] uppercase bg-gold text-white">
              Most Popular
            </div>
            <div className="p-[1.4rem_1.3rem]">
              <div className="font-serif text-[1.4rem] font-semibold text-deep mb-[0.18rem]">Wellness</div>
              <div className="text-[2rem] font-bold text-deep leading-none mb-[0.18rem]">
                <sup className="text-[0.95rem] align-super">$</sup>149<sub className="text-[0.72rem] font-normal text-soft">/mo</sub>
              </div>
              <div className="text-[0.74rem] text-soft mb-[0.85rem] leading-[1.45]">The core membership. Real savings.</div>
              <div className="text-[0.73rem] font-semibold text-sage pb-[0.8rem] border-b border-warm mb-[0.85rem]">25 credits / month · 10 bonus first month</div>
              <div className="flex flex-col gap-[0.38rem] mb-[1.1rem]">
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Priority booking — 24h advance window</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">After-hours: credits only, no cash surcharge</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Portable health record across all providers</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Shop at member pricing (12% off)</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Exclusive member-only flash deals</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">1 free top-up pack per quarter</div>
              </div>
              <button className="block w-full p-[0.65rem] rounded-[10px] font-sans text-[0.82rem] font-bold cursor-pointer transition duration-200 text-center border-[1.5px] border-gold bg-gold text-white hover:bg-[#b08052]">
                Join Wellness
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-rl)] overflow-hidden border-[1.5px] border-warm transition duration-250 shadow-sh hover:-translate-y-[5px] hover:shadow-sm rv d3">
            <div className="h-[5px] bg-goldlt"></div>
            <div className="p-[1.4rem_1.3rem]">
              <div className="font-serif text-[1.4rem] font-semibold text-deep mb-[0.18rem]">Reserve</div>
              <div className="text-[2rem] font-bold text-deep leading-none mb-[0.18rem]">
                <sup className="text-[0.95rem] align-super">$</sup>299<sub className="text-[0.72rem] font-normal text-soft">/mo</sub>
              </div>
              <div className="text-[0.74rem] text-soft mb-[0.85rem] leading-[1.45]">White-glove starts here.</div>
              <div className="text-[0.73rem] font-semibold text-sage pb-[0.8rem] border-b border-warm mb-[0.85rem]">55 credits / month · credits never expire</div>
              <div className="flex flex-col gap-[0.38rem] mb-[1.1rem]">
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">48h advance booking priority</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Dedicated wellness coordinator</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Hotel concierge mode — any city</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Invited to member-only wellness events</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Shop at member pricing (20% off)</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-gold before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Quarterly partner brand gifting</div>
              </div>
              <button className="block w-full p-[0.65rem] rounded-[10px] font-sans text-[0.82rem] font-bold cursor-pointer transition duration-200 text-center border-[1.5px] border-parch bg-transparent text-mid hover:border-gold hover:text-gold">
                Join Reserve
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-rl)] overflow-hidden border-[1.5px] border-blush transition duration-250 shadow-sh hover:-translate-y-[5px] hover:shadow-sm rv d4">
            <div className="p-[0.45rem_1rem] text-center text-[0.64rem] font-bold tracking-[0.08em] uppercase bg-blush text-white">
              Inner Circle · 500 spots
            </div>
            <div className="p-[1.4rem_1.3rem]">
              <div className="font-serif text-[1.4rem] font-semibold text-deep mb-[0.18rem]">Inner Circle</div>
              <div className="text-[2rem] font-bold text-deep leading-none mb-[0.18rem]">
                <sup className="text-[0.95rem] align-super">$</sup>599<sub className="text-[0.72rem] font-normal text-soft">/mo</sub>
              </div>
              <div className="text-[0.74rem] text-soft mb-[0.85rem] leading-[1.45]">Rare. Invitation-only after Year 1.</div>
              <div className="text-[0.73rem] font-semibold text-sage pb-[0.8rem] border-b border-warm mb-[0.85rem]">120 credits / month · never expire</div>
              <div className="flex flex-col gap-[0.38rem] mb-[1.1rem]">
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-blush before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Annual Retreat — Lanserhof · Six Senses</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-blush before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Private city wellness dinners</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-blush before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Earn 10% on referral fees — forever</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-blush before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Monthly curated gifting box</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-blush before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Lifetime rate lock on your rate</div>
                <div className="text-[0.77rem] text-mid leading-[1.45] flex items-start gap-[0.45rem] before:content-['✦'] before:text-blush before:shrink-0 before:text-[0.58rem] before:mt-[0.2rem]">Shop at member pricing (25% off)</div>
              </div>
              <button className="block w-full p-[0.65rem] rounded-[10px] font-sans text-[0.82rem] font-bold cursor-pointer transition duration-200 text-center border-[1.5px] border-parch bg-transparent text-mid hover:border-gold hover:text-gold mt-auto">
                Join the waitlist
              </button>
            </div>
          </div>
          
        </div>

        <div className="bg-deep rounded-[var(--radius-rxl)] p-[2.5rem] mt-[2rem] rv">
          <div className="font-serif text-[1.6rem] text-white mb-[0.4rem]">WellnessGo Rewards</div>
          <div className="text-[0.84rem] text-[rgba(255,255,255,0.38)] mb-[1.5rem]">Every booking earns. Every session rewards. Every day has a reason to open the app.</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.7rem]">
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius-r)] p-[1rem]">
              <div className="text-[1.3rem] mb-[0.45rem]">📅</div>
              <div className="text-[0.82rem] font-semibold text-white mb-[0.25rem]">Book 5, Get 6th Free</div>
              <div className="text-[0.73rem] text-[rgba(255,255,255,0.35)] leading-[1.5]">Complete 5 sessions in any category in 60 days — the 6th is credited automatically.</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius-r)] p-[1rem]">
              <div className="text-[1.3rem] mb-[0.45rem]">🎁</div>
              <div className="text-[0.82rem] font-semibold text-white mb-[0.25rem]">Monthly Member Special</div>
              <div className="text-[0.73rem] text-[rgba(255,255,255,0.35)] leading-[1.5]">Every first Monday: one service 25–35% off for 48 hours only.</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius-r)] p-[1rem]">
              <div className="text-[1.3rem] mb-[0.45rem]">🎂</div>
              <div className="text-[0.82rem] font-semibold text-white mb-[0.25rem]">Birthday Month Benefit</div>
              <div className="text-[0.73rem] text-[rgba(255,255,255,0.35)] leading-[1.5]">10 free credits + curated gift. Inner Circle: a complimentary session.</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius-r)] p-[1rem]">
              <div className="text-[1.3rem] mb-[0.45rem]">⭐</div>
              <div className="text-[0.82rem] font-semibold text-white mb-[0.25rem]">Check-In Streak Bonus</div>
              <div className="text-[0.73rem] text-[rgba(255,255,255,0.35)] leading-[1.5]">7 days: +1 credit. 30 days: +5. 90 days: free session. The habit loop.</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius-r)] p-[1rem]">
              <div className="text-[1.3rem] mb-[0.45rem]">👥</div>
              <div className="text-[0.82rem] font-semibold text-white mb-[0.25rem]">Refer & Earn</div>
              <div className="text-[0.73rem] text-[rgba(255,255,255,0.35)] leading-[1.5]">10 credits per referral. Inner Circle earns 10% of fees for 12 months.</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] rounded-[var(--radius-r)] p-[1rem]">
              <div className="text-[1.3rem] mb-[0.45rem]">🛍</div>
              <div className="text-[0.82rem] font-semibold text-white mb-[0.25rem]">Shop & Earn</div>
              <div className="text-[0.73rem] text-[rgba(255,255,255,0.35)] leading-[1.5]">$5 spent in the Shop = 1 point. 50 points = 1 booking credit.</div>
            </div>
          </div>
        </div>

        <p className="text-center text-[0.82rem] text-muted mt-[1.2rem]">No commitment · Cancel anytime · Credits roll over one cycle</p>

      </div>
    </section>
  );
}
