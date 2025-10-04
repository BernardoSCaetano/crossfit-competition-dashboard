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
    <section id="registration" className="dashboard-section section-black">
      <div className="container" style={{maxWidth: '1000px'}}>
        <div className="section-header">
          <h2 className="section-title">
            Team Registration
          </h2>
          <p className="section-subtitle">
            Register your team for the CrossFit Black Edition Games 2025.
            Complete the form below and visit reception to finalize your
            registration.
          </p>
        </div>

        {/* Registration Info Cards */}
        <div className="grid grid-3 mb-12">
          <div className="info-card" style={{background: 'var(--primary-red)'}}>
            <div className="info-card-icon">💰</div>
            <h3 className="info-card-title">Early Bird</h3>
            <p className="info-card-value">€17 + T-Shirt</p>
            <p className="info-card-subtitle">Until Oct 20th</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">⏰</div>
            <h3 className="info-card-title">Regular</h3>
            <p className="info-card-value">€17 + €15 T-Shirt</p>
            <p className="info-card-subtitle">Oct 20th - Nov 1st</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">👥</div>
            <h3 className="info-card-title">Team Size</h3>
            <p className="info-card-value">3 Athletes</p>
            <p className="info-card-subtitle">Men's, Women's, Mixed</p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="registration-form">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Team Information
              </h3>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your team name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group" style={{gridColumn: '1 / -1'}}>
                  <label className="form-label">
                    Team Type *
                  </label>
                  <select
                    name="teamType"
                    value={formData.teamType}
                    onChange={handleInputChange}
                    required
                    className="form-select"
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
                  <div key={athleteNum} className="athlete-card">
                    <h4 className="athlete-title">
                      Athlete {athleteNum}
                    </h4>
                    <div className="grid grid-3">
                      <div className="form-group">
                        <label className="form-label">
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
                          className="form-input"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
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
                          className="form-input"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
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
                          className="form-select"
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
            <div className="form-group">
              <label className="form-label">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="form-textarea"
                placeholder="Any special requests or information..."
              />
            </div>

            {/* Important Information */}
            <div className="alert alert-warning">
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
                className="btn btn-primary"
                style={{opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'}}
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
