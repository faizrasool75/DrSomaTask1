const WhatIsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">What Is a Tummy Tuck?</h2>
          <p className="text-gray-600">
            A surgical procedure that addresses three core issues of the abdomen:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-orange-brand hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/5 rounded-full -mr-16 -mt-16"></div>
            <div className="text-orange-brand text-3xl mb-4 font-bold relative z-10">01</div>
            <div className="w-16 h-16 bg-orange-brand/10 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-hand-holding-medical text-orange-brand text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Excess Skin</h3>
            <p className="text-gray-600">
              Addressing excess or sagging abdominal skin that lacks elasticity.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-orange-brand hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/5 rounded-full -mr-16 -mt-16"></div>
            <div className="text-orange-brand text-3xl mb-4 font-bold relative z-10">02</div>
            <div className="w-16 h-16 bg-orange-brand/10 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-dumbbell text-orange-brand text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Stubborn Fat</h3>
            <p className="text-gray-600">
              Accumulated fat resistant to diet and exercise.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-orange-brand hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-brand/5 rounded-full -mr-16 -mt-16"></div>
            <div className="text-orange-brand text-3xl mb-4 font-bold relative z-10">03</div>
            <div className="w-16 h-16 bg-orange-brand/10 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-heartbeat text-orange-brand text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Muscle Repair</h3>
            <p className="text-gray-600">
              Weakened or separated abdominal muscles (diastasis recti).
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed mb-6">
            During the procedure, excess skin and fat are removed, and the abdominal muscles are tightened to restore a flatter, firmer abdominal wall. In many cases, the belly button is repositioned to maintain natural proportions. Major medical institutions, including leading surgical bodies and academic hospitals, describe abdominoplasty as a well-established and effective procedure when patient selection, surgical technique, and recovery planning are appropriately managed.
          </p>
          <p className="text-orange-brand font-bold uppercase tracking-widest italic">
            A tummy tuck is not a weight-loss surgery. It is a contour-restoring procedure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
