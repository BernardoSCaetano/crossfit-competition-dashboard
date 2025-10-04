import React from "react";

const Categories: React.FC = () => {
  const categories = [
    {
      name: "RX+",
      level: "Professional",
      description: "Elite athletes pushing the boundaries",
      color: "from-red-600 to-red-800",
      borderColor: "border-red-600",
      bgColor: "bg-red-600/20",
      features: [
        "Legless Rope Climb",
        "Wall Facing HSPU",
        "80kg/50kg Snatch",
        "100kg/70kg Clean & Jerk",
        "30kg/22.5kg Dumbbells",
      ],
    },
    {
      name: "RX",
      level: "Competitive",
      description: "Standard competitive level",
      color: "from-orange-600 to-red-600",
      borderColor: "border-orange-600",
      bgColor: "bg-orange-600/20",
      features: [
        "Standard Muscle Up*",
        "Standard HSPU",
        "60kg/40kg Snatch",
        "80kg/50kg Clean & Jerk",
        "22.5kg/15kg Dumbbells",
      ],
    },
    {
      name: "PERFORMANCE",
      level: "Intermediate",
      description: "Challenging but achievable",
      color: "from-yellow-600 to-orange-600",
      borderColor: "border-yellow-600",
      bgColor: "bg-yellow-600/20",
      features: [
        "Pull Up*",
        "1 AbMat HSPU*",
        "40kg/25kg Snatch",
        "60kg/35kg Clean & Jerk",
        "15kg/10kg Dumbbells",
      ],
    },
    {
      name: "ROOKIE",
      level: "Beginner",
      description: "Perfect for newcomers",
      color: "from-green-600 to-yellow-600",
      borderColor: "border-green-600",
      bgColor: "bg-green-600/20",
      features: [
        "Ring Rows",
        "Hand Release Push-ups",
        "25kg/15kg Snatch",
        "25kg/15kg Clean & Jerk",
        "10kg/5kg Dumbbells",
      ],
    },
  ];

  return (
    <section id="categories" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Competition Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your level and compete against athletes of similar ability.
            Our coaches will help you find the perfect category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`relative bg-gradient-to-br ${category.color} p-8 rounded-xl border-2 ${category.borderColor} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-lg font-semibold text-white/90 mb-2">
                  {category.level}
                </p>
                <p className="text-white/80 text-sm">{category.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white mb-3">
                  Key Movements:
                </h4>
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute -top-4 -right-4 bg-white text-black font-bold px-3 py-1 rounded-full text-sm">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Team Formation Info */}
        <div className="bg-gray-800 p-8 rounded-xl border border-red-600 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Team Formation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                How Teams Work
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Teams of 3 athletes (Men's, Women's, or Mixed)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>You can propose your complete team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Subject to approval by coaching team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>No team? We'll help you find one!</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Why 3 Athletes?
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Everyone can participate in the best way</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Strategy becomes more fun and engaging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Play to your strengths, minimize weaknesses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Build community and balance competition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-red-600/20 border border-red-600 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Important Note
              </h4>
              <p className="text-white/90">
                <strong>*Only one athlete needs to perform the movement</strong>{" "}
                - This rule applies to movements marked with an asterisk (*). In
                team competitions, only one team member is required to complete
                that specific movement, allowing teams to strategize and play to
                each member's strengths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
