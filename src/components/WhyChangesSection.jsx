const WhyChangesSection = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.background = 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)';
  };

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="bg-orange-brand rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 p-12 lg:p-20 text-white">
          <h2 className="text-3xl font-bold mb-8 italic">
            Why the Abdomen Changes After Pregnancy or Weight Loss
          </h2>
          <p className="mb-8 opacity-90 leading-relaxed">
            The abdomen undergoes significant structural stress during pregnancy and major weight fluctuations. Skin fibers stretch beyond their elastic limit, and the rectus abdominal muscles can separate along the midline, a condition known as diastasis recti.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <i className="fas fa-chevron-right"></i>
              <span>Skin often does not retract fully</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-chevron-right"></i>
              <span>Muscle separation does not resolve with exercise alone</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-chevron-right"></i>
              <span>Fat distribution becomes uneven</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-chevron-right"></i>
              <span>Core support weakens, affecting posture and back comfort</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative min-h-[400px] bg-gradient-to-br from-gray-700 to-gray-900">
          <img
            src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Health Care"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChangesSection;
