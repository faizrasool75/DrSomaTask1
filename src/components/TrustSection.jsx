const TrustSection = () => {
  return (
    <section className="relative z-20 -mt-16 container mx-auto px-6">
      <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden">
        <div className="p-8 text-center trust-card">
          <i className="fas fa-certificate text-orange-brand text-4xl mb-4"></i>
          <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">
            MOH Regulated
          </h3>
          <p className="text-sm text-gray-600 italic">
            Ministry of Health Malaysia framework ensures safety and professional accountability.
          </p>
        </div>
        <div className="p-8 text-center trust-card">
          <i className="fas fa-user-md text-orange-brand text-4xl mb-4"></i>
          <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">
            Dr. Soma
          </h3>
          <p className="text-sm text-gray-600 italic">
            Certified plastic surgeon performing all procedures personally with anatomical precision.
          </p>
        </div>
        <div className="p-8 text-center trust-card">
          <i className="fas fa-hospital text-orange-brand text-4xl mb-4"></i>
          <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">
            Licensed Facilities
          </h3>
          <p className="text-sm text-gray-600 italic">
            Surgery performed only in licensed facilities following high postoperative standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
