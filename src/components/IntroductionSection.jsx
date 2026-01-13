const IntroductionSection = () => {
  const handleImageError = (e) => {
    e.target.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
  };

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold border-l-8 border-orange-brand pl-6">
            The Journey to a Firmer Profile
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            A tummy tuck, medically known as abdominoplasty, is a surgical procedure designed to restore a flatter, firmer abdominal profile by removing excess skin and fat while tightening weakened abdominal muscles. It is most commonly sought after pregnancy, significant weight loss, or age-related skin laxity, situations where exercise and diet alone cannot correct the underlying structural changes.
          </p>
          <p className="text-gray-600">
            This procedure is intended for individuals who are already close to a stable weight but struggle with loose abdominal skin, muscle separation, or a protruding abdomen that affects comfort, posture, and confidence. When performed correctly, a tummy tuck improves abdominal contour, supports core stability, and delivers long-lasting results.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border-t-2 border-orange-brand">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              At Dr. Soma Plastic Surgery, tummy tuck procedures are performed personally by Dr. Soma, a certified plastic surgeon with experience in body contouring surgery and structured postoperative care. The approach focuses on safety, anatomical precision, and natural-looking results rather than aggressive overcorrection.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000"
              className="w-full h-auto rounded-3xl shadow-xl"
              alt="Medical Professional"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-orange-brand p-8 rounded-2xl text-white hidden md:block shadow-2xl">
            <p className="text-2xl font-bold leading-tight">
              Safety &<br />Precision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
