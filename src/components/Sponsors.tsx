import React from "react";

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: "Picsil",
      description: "Official Partner",
      logo: "🏆",
      category: "Main Sponsor",
    },
    {
      name: "Living Pool and Wellness",
      description: "Wellness Partner",
      logo: "🏊‍♂️",
      category: "Wellness",
    },
    {
      name: "Concept 2",
      description: "Equipment Partner",
      logo: "🚣‍♂️",
      category: "Equipment",
    },
  ];

  const amenities = [
    {
      icon: "☕",
      title: "Specialty Coffee",
      description: "Premium coffee to fuel your performance",
    },
    {
      icon: "🍰",
      title: "Functional Sweets",
      description: "Healthy treats for energy and recovery",
    },
    {
      icon: "🍔",
      title: "Quick Food",
      description: "Nutritious meals to keep you going",
    },
    {
      icon: "🎵",
      title: "DJ Music",
      description: "High-energy beats throughout the day",
    },
    {
      icon: "❄️",
      title: "Ice Baths",
      description: "Recovery stations for post-workout",
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thank you to our amazing sponsors who make this event possible
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-red-600 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{sponsor.logo}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {sponsor.name}
              </h3>
              <p className="text-red-400 font-semibold mb-2">
                {sponsor.category}
              </p>
              <p className="text-gray-300">{sponsor.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsor Opportunity */}
        <div className="bg-red-600/20 border border-red-600 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in Sponsoring?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Great opportunity to promote your business and support our
              community
            </p>
            <a
              href="mailto:info@crossfitblackedition.com"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Contact Us for Sponsorship
            </a>
          </div>
        </div>

        {/* Event Amenities */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Event Amenities
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've got everything you need for an amazing competition day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-600 hover:border-red-600 transition-colors"
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">
                {amenity.title}
              </h4>
              <p className="text-gray-300">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Event Schedule Preview */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-red-600">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Event Day Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-red-400 mb-4">
                Morning Session
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">06:45</span>
                  <span>Check-in & Warm-up</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">07:30</span>
                  <span>Opening Ceremony</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">08:00</span>
                  <span>WOD 1 - All Categories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">10:00</span>
                  <span>WOD 2 - All Categories</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-red-400 mb-4">
                Afternoon Session
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">12:00</span>
                  <span>Lunch Break & Recovery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">14:00</span>
                  <span>WOD 3 - All Categories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">16:00</span>
                  <span>Final - Top 5 Teams</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400 font-bold">18:00</span>
                  <span>Awards Ceremony</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
