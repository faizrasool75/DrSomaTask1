const CandidatesSection = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-10">Who Is a Good Candidate?</h2>
          <div className="mb-10">
            <h4 className="font-bold text-orange-brand mb-4 uppercase tracking-wider italic">
              Suitable Candidates Usually Have:
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-check text-orange-brand mr-3"></i>
                Excess abdominal skin
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-check text-orange-brand mr-3"></i>
                Muscle separation after pregnancy or weight loss
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-check text-orange-brand mr-3"></i>
                Stable body weight
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-check text-orange-brand mr-3"></i>
                Good general health & Realistic expectations
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-600 mb-4 uppercase tracking-wider italic">
              A Tummy Tuck May Not Be Recommended If:
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-times text-red-600 mr-3"></i>
                Future pregnancy is planned
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-times text-red-600 mr-3"></i>
                Uncontrolled medical conditions
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-times text-red-600 mr-3"></i>
                Weight is unstable or severe obesity is present
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          <div className="bg-orange-brand p-6 text-white text-center">
            <h3 className="text-xl font-bold uppercase tracking-widest">
              Tummy Tuck vs Liposuction
            </h3>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4 font-bold">Feature</th>
                <th className="p-4 font-bold">Tummy Tuck</th>
                <th className="p-4 font-bold">Liposuction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-4 text-sm font-semibold">Removes fat</td>
                <td className="p-4 text-sm italic">Yes</td>
                <td className="p-4 text-sm italic">Yes</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-semibold">Removes loose skin</td>
                <td className="p-4 text-sm italic">Yes</td>
                <td className="p-4 text-sm italic">No</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-semibold">Tightens muscles</td>
                <td className="p-4 text-sm italic">Yes</td>
                <td className="p-4 text-sm italic">No</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-semibold">Scarring</td>
                <td className="p-4 text-sm italic">Longer but hidden</td>
                <td className="p-4 text-sm italic">Minimal</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-semibold">Downtime</td>
                <td className="p-4 text-sm italic">3–4 weeks</td>
                <td className="p-4 text-sm italic">1–2 weeks</td>
              </tr>
              <tr className="bg-orange-brand/5">
                <td className="p-4 text-sm font-semibold">Best for</td>
                <td className="p-4 text-sm italic">Loose skin & muscles</td>
                <td className="p-4 text-sm italic">Fat pockets only</td>
              </tr>
            </tbody>
          </table>
          <p className="p-4 text-[10px] text-gray-400 uppercase tracking-tighter">
            Clinical overview from: Mayo Clinic – Tummy Tuck (Abdominoplasty)
          </p>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
