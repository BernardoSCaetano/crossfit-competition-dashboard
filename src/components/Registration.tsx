import React, { useState } from "react";

interface Athlete {
  name: string;
  email: string;
  tshirt: string;
}

interface FormData {
  teamName: string;
  category: string;
  teamType: string;
  athlete1: Athlete;
  athlete2: Athlete;
  athlete3: Athlete;
  notes: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    category: "",
    teamType: "",
    athlete1: { name: "", email: "", tshirt: "" },
    athlete2: { name: "", email: "", tshirt: "" },
    athlete3: { name: "", email: "", tshirt: "" },
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [athlete, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [athlete]: {
          ...(prev[athlete as keyof typeof prev] as Athlete),
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Registration submitted! Please visit the reception to complete payment."
      );
      setIsSubmitting(false);
    }, 2000);
  };

  const categories = [
    { value: "rx-plus", label: "RX+ (Professional)" },
    { value: "rx", label: "RX (Competitive)" },
    { value: "performance", label: "Performance (Intermediate)" },
    { value: "rookie", label: "Rookie (Beginner)" },
  ];

  const teamTypes = [
    { value: "mens", label: "Men's Team" },
    { value: "womens", label: "Women's Team" },
    { value: "mixed", label: "Mixed Team" },
  ];

  const tshirtSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <section id="registration" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Team Registration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Register your team for the CrossFit Black Edition Games 2025.
            Complete the form below and visit reception to finalize your
            registration.
          </p>
        </div>

        {/* Registration Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-600 p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Early Bird</h3>
            <p className="text-white/90">€17 + T-Shirt</p>
            <p className="text-sm text-white/70">Until Oct 20th</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center border border-red-600">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-white mb-2">Regular</h3>
            <p className="text-white/90">€17 + €15 T-Shirt</p>
            <p className="text-sm text-white/70">Oct 20th - Nov 1st</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center border border-red-600">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-white mb-2">Team Size</h3>
            <p className="text-white/90">3 Athletes</p>
            <p className="text-sm text-white/70">Men's, Women's, Mixed</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-gray-800 rounded-xl p-8 border border-red-600">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Team Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
                    placeholder="Enter your team name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-white font-semibold mb-2">
                    Team Type *
                  </label>
                  <select
                    name="teamType"
                    value={formData.teamType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select Team Type</option>
                    {teamTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Athletes Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Athletes Information
              </h3>
              <div className="space-y-8">
                {[1, 2, 3].map((athleteNum) => (
                  <div key={athleteNum} className="bg-gray-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-4">
                      Athlete {athleteNum}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name={`athlete${athleteNum}.name`}
                          value={
                            (
                              formData[
                                `athlete${athleteNum}` as keyof typeof formData
                              ] as Athlete
                            ).name
                          }
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-red-500 focus:outline-none"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name={`athlete${athleteNum}.email`}
                          value={
                            (
                              formData[
                                `athlete${athleteNum}` as keyof typeof formData
                              ] as Athlete
                            ).email
                          }
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-red-500 focus:outline-none"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          T-Shirt Size *
                        </label>
                        <select
                          name={`athlete${athleteNum}.tshirt`}
                          value={
                            (
                              formData[
                                `athlete${athleteNum}` as keyof typeof formData
                              ] as Athlete
                            ).tshirt
                          }
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-red-500 focus:outline-none"
                        >
                          <option value="">Select Size</option>
                          {tshirtSizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none"
                placeholder="Any special requests or information..."
              />
            </div>

            {/* Important Information */}
            <div className="bg-red-600/20 border border-red-600 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">
                Important Information
              </h4>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• Registration must be completed at the reception</li>
                <li>• Payment accepted via contactless card</li>
                <li>• Team formation subject to coaching team approval</li>
                <li>• T-shirt production requires advance notice</li>
                <li>• Limited spots available - first come, first served</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
              <p className="text-gray-400 text-sm mt-4">
                After submitting, visit the reception to complete your
                registration and payment.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-6">
            Contact our coaches for category guidance or team formation
            assistance:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-800 px-4 py-2 rounded-lg">
              Coach Diogo M.
            </span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">Coach Gabi</span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">
              Coach Júlio
            </span>
            <span className="bg-gray-800 px-4 py-2 rounded-lg">
              Coach Cláudio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
