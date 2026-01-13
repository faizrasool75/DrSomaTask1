const BenefitsSection = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold mb-10">
            Benefits of Tummy Tuck Surgery
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="fas fa-plus-circle text-orange-brand mr-4"></i>
              Removes loose, sagging abdominal skin
            </li>
            <li className="flex items-center">
              <i className="fas fa-plus-circle text-orange-brand mr-4"></i>
              Tightens weakened abdominal muscles
            </li>
            <li className="flex items-center">
              <i className="fas fa-plus-circle text-orange-brand mr-4"></i>
              Improves abdominal contour and firmness
            </li>
            <li className="flex items-center">
              <i className="fas fa-plus-circle text-orange-brand mr-4"></i>
              Enhances posture and core stability
            </li>
            <li className="flex items-center">
              <i className="fas fa-plus-circle text-orange-brand mr-4"></i>
              Produces long-lasting results with stable weight
            </li>
            <li className="flex items-center">
              <i className="fas fa-plus-circle text-orange-brand mr-4"></i>
              Can be combined with liposuction for refinement
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-10 rounded-3xl">
          <h3 className="text-3xl font-bold mb-8 italic">
            Post-Operative Recovery
          </h3>
          <p className="mb-6 text-sm">After surgery, patients typically receive:</p>
          <ul className="space-y-3 mb-8">
            <li className="text-gray-700">
              • Compression garment for 6–8 weeks
            </li>
            <li className="text-gray-700">• Pain relief medication</li>
            <li className="text-gray-700">• Drain care instructions</li>
            <li className="text-gray-700">• Wound care guidance</li>
            <li className="text-gray-700">• Scheduled follow-up visits</li>
          </ul>
          <p className="text-sm italic text-gray-600">
            Early walking is encouraged to support circulation, while strenuous
            activity is restricted during healing. Discomfort is commonly described
            as tightness rather than sharp pain. Clinical guidance aligned with:
            World Health Organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
