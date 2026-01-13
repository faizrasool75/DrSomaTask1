const RecoveryTimelineSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Results & Recovery Timeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative p-6 border-l border-orange-brand">
            <h4 className="text-orange-brand font-bold mb-2">Week 1–2</h4>
            <p className="text-sm opacity-80">
              Swelling, tightness, limited mobility
            </p>
          </div>
          <div className="relative p-6 border-l border-orange-brand">
            <h4 className="text-orange-brand font-bold mb-2">Week 3–4</h4>
            <p className="text-sm opacity-80">Improved comfort and posture</p>
          </div>
          <div className="relative p-6 border-l border-orange-brand">
            <h4 className="text-orange-brand font-bold mb-2">Week 6–8</h4>
            <p className="text-sm opacity-80">Visible abdominal flattening</p>
          </div>
          <div className="relative p-6 border-l border-orange-brand">
            <h4 className="text-orange-brand font-bold mb-2">Month 3–6</h4>
            <p className="text-sm opacity-80">Final contour emerges</p>
          </div>
        </div>
        <div className="mt-20 bg-white/5 p-10 rounded-2xl border border-white/10 italic text-center">
          Postoperative recovery protocols align with internationally recognized
          surgical safety and postoperative care standards. In Malaysia, tummy tuck
          surgery is a regulated medical procedure and must be performed by a
          registered medical practitioner in a licensed healthcare facility under
          Ministry of Health Malaysia standards.
        </div>
      </div>
    </section>
  );
};

export default RecoveryTimelineSection;
