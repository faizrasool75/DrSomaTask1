const TypesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Types of Tummy Tuck Procedures
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-orange-brand/10 transition-all border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-brand/5 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-20 h-20 bg-orange-brand/10 rounded-2xl flex items-center justify-center mb-4 relative z-10">
              <i className="fas fa-procedures text-orange-brand text-3xl"></i>
            </div>
            <h4 className="text-orange-brand font-bold text-2xl mb-4 relative z-10">
              Full Tummy Tuck
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 relative z-10">
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Removes excess skin above/below navel</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Repairs muscle separation</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Repositions the belly button</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Most comprehensive correction</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-orange-brand/10 transition-all border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-brand/5 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-20 h-20 bg-orange-brand/10 rounded-2xl flex items-center justify-center mb-4 relative z-10">
              <i className="fas fa-band-aid text-orange-brand text-3xl"></i>
            </div>
            <h4 className="text-orange-brand font-bold text-2xl mb-4 relative z-10">
              Mini Tummy Tuck
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 relative z-10">
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Targets mild lower-abdominal skin laxity</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Smaller incision</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Limited or no muscle repair</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Suitable for selected patients</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-orange-brand/10 transition-all border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-brand/5 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-20 h-20 bg-orange-brand/10 rounded-2xl flex items-center justify-center mb-4 relative z-10">
              <i className="fas fa-hospital-user text-orange-brand text-3xl"></i>
            </div>
            <h4 className="text-orange-brand font-bold text-2xl mb-4 relative z-10">
              Extended Tummy Tuck
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 relative z-10">
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Addresses skin extending to the flanks</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Often chosen after massive weight loss</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Improves waistline contour</span></li>
              <li className="flex items-start"><i className="fas fa-check-circle text-orange-brand mr-2 mt-1"></i><span>Clinical assessment required</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesSection;
