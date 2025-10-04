import React, { useState } from "react";

const MovementStandards: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const movements = [
    {
      name: "MUSCLE UP",
      rxPlus: "Standard Muscle Up ✓",
      rx: "Standard Muscle Up ✓*",
      performance: "PULL UP*",
      rookie: "RING ROWS",
    },
    {
      name: "CHEST 2 BAR",
      rxPlus: "Standard Chest to Bar ✓",
      rx: "Standard Chest to Bar ✓",
      performance: "PULL UP*",
      rookie: "RING ROWS",
    },
    {
      name: "HANDSTAND PUSHUP",
      rxPlus: "WALL FACING",
      rx: "Standard HSPU ✓",
      performance: "1 ABMAT*",
      rookie: "HR PUSHUP",
    },
    {
      name: "HANDSTAND WALK",
      rxPlus: "Standard HSW ✓",
      rx: "Standard HSW ✓*",
      performance: "BEAR CRAWL",
      rookie: "BEAR CRAWL",
    },
    {
      name: "DOUBLE UNDERS",
      rxPlus: "Standard DU ✓",
      rx: "Standard DU ✓",
      performance: "Standard DU ✓",
      rookie: "SINGLE UNDERS",
    },
    {
      name: "WALL BALL",
      rxPlus: "Standard WB ✓",
      rx: "Standard WB ✓",
      performance: "Standard WB ✓",
      rookie: "Standard WB ✓",
    },
    {
      name: "ROPE CLIMB",
      rxPlus: "LEGLESS",
      rx: "Standard RC ✓",
      performance: "Standard RC ✓",
      rookie: "FROM GROUND",
    },
    {
      name: "SNATCH",
      rxPlus: "80KG / 50KG",
      rx: "60KG / 40KG",
      performance: "40KG / 25KG",
      rookie: "25KG / 15KG",
    },
    {
      name: "CLEAN AND JERK",
      rxPlus: "100KG / 70KG",
      rx: "80KG / 50KG",
      performance: "60KG / 35KG",
      rookie: "25KG / 15KG",
    },
    {
      name: "TOES 2 BAR",
      rxPlus: "Standard T2B ✓",
      rx: "Standard T2B ✓",
      performance: "KNEES 2 ELBOWS",
      rookie: "KNEES 2 HIPS",
    },
    {
      name: "ERG'S",
      rxPlus: "Standard ✓",
      rx: "Standard ✓",
      performance: "Standard ✓",
      rookie: "Standard ✓",
    },
    {
      name: "BODYWEIGHT GYMNASTICS",
      rxPlus: "Standard ✓",
      rx: "Standard ✓",
      performance: "Standard ✓",
      rookie: "ADAPTED",
    },
    {
      name: "DUMBBELL",
      rxPlus: "30KG / 22.5KG",
      rx: "22.5KG / 15KG",
      performance: "15KG / 10KG",
      rookie: "10KG / 5KG",
    },
  ];

  const categories = [
    { key: "all", name: "All Categories", color: "bg-gray-600" },
    { key: "rxPlus", name: "RX+", color: "bg-red-600" },
    { key: "rx", name: "RX", color: "bg-orange-600" },
    { key: "performance", name: "PERFORMANCE", color: "bg-yellow-600" },
    { key: "rookie", name: "ROOKIE", color: "bg-green-600" },
  ];

  const filteredMovements =
    selectedCategory === "all"
      ? movements
      : movements.filter(
          (movement) => movement[selectedCategory as keyof typeof movement]
        );

  return (
    <section id="standards" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Movement Standards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed movement requirements for each category. Choose your level
            and see what's expected.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === category.key
                  ? `${category.color} text-white`
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Movement Standards Table */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-red-600">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-red-600">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">
                    MOVEMENTS
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold text-lg">
                    RX+
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold text-lg">
                    RX
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold text-lg">
                    PERFORMANCE
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold text-lg">
                    ROOKIE
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMovements.map((movement, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"
                    } hover:bg-gray-700 transition-colors`}
                  >
                    <td className="px-6 py-4 text-white font-bold text-lg">
                      {movement.name}
                    </td>
                    <td className="px-6 py-4 text-center text-white">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          movement.rxPlus.includes("✓")
                            ? "bg-green-600"
                            : movement.rxPlus.includes("*")
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                        }`}
                      >
                        {movement.rxPlus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-white">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          movement.rx.includes("✓")
                            ? "bg-green-600"
                            : movement.rx.includes("*")
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                        }`}
                      >
                        {movement.rx}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-white">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          movement.performance.includes("✓")
                            ? "bg-green-600"
                            : movement.performance.includes("*")
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                        }`}
                      >
                        {movement.performance}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-white">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          movement.rookie.includes("✓")
                            ? "bg-green-600"
                            : "bg-gray-600"
                        }`}
                      >
                        {movement.rookie}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-white">Standard Movement</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-600 rounded"></div>
            <span className="text-white">Only One Athlete Required*</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            <span className="text-white">Scaled Movement</span>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-red-600/20 border border-red-600 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Team Competition Rule
              </h4>
              <p className="text-white/90">
                <strong>*ONLY ONE ATHLETE NEEDS TO PERFORM THE MOVEMENT</strong>{" "}
                - This rule applies to all movements marked with an asterisk
                (*). In team competitions, only one team member is required to
                complete that specific movement, allowing teams to strategize
                and play to each member's strengths while building community and
                balancing the competitive field.
              </p>
            </div>
          </div>
        </div>

        {/* Weight Guidelines */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h4 className="text-xl font-bold text-white mb-4">
            Weight Guidelines
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-semibold text-red-400 mb-2">
                Male Athletes
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>RX+: 80kg Snatch, 100kg C&J, 30kg DB</li>
                <li>RX: 60kg Snatch, 80kg C&J, 22.5kg DB</li>
                <li>Performance: 40kg Snatch, 60kg C&J, 15kg DB</li>
                <li>Rookie: 25kg Snatch, 25kg C&J, 10kg DB</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-red-400 mb-2">
                Female Athletes
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>RX+: 50kg Snatch, 70kg C&J, 22.5kg DB</li>
                <li>RX: 40kg Snatch, 50kg C&J, 15kg DB</li>
                <li>Performance: 25kg Snatch, 35kg C&J, 10kg DB</li>
                <li>Rookie: 15kg Snatch, 15kg C&J, 5kg DB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementStandards;
