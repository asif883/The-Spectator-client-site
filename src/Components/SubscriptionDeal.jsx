import { Link } from "react-router-dom";
import "../Css/nav.css";
import "../Css/text.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const SubscriptionDeal = () => {
  const plans = [
    {
      title: "Free Trial",
      price: "Free",
      description: "Enjoy unlimited access to our articles for 7 days.",
      features: ["Unlimited Articles", "Basic Support", "No Commitments"],
      highlight: false,
    },
    {
      title: "Monthly Package",
      price: "$9.99/month",
      description: "Perfect for regular readers who love fresh content.",
      features: [
        "Unlimited Articles",
        "Priority Support",
        "Ad-Free Experience",
        "Free festival magazine",
        "Breaking news notification",
      ],
      highlight: true,
    },
    {
      title: "Annual Package",
      price: "$99.99/year",
      description: "Get the best value for an entire year of premium access.",
      features: [
        "Unlimited Articles",
        "Priority Support",
        "Ad-Free Experience",
        "Exclusive Content",
        "Breaking news notification",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8 md:my-16 px-6">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 font">Choose Your Right Plan!</h1>
        <p className="text-gray-600 text-lg">
          Select from the best plans, ensuring a perfect match. Need more or less?
          <br /> Customize your subscription for a seamless fit!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col justify-between ${
              plan.highlight
                ? "bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-200 text-gray-900 shadow-xl"
                : "bg-white text-gray-900"
            }`}
          >
            {/* Plan Title */}
            <div>
              <h3 className="font text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4 font">{plan.price}</p>
              <p className="text-gray-700 text-lg mb-6">{plan.description}</p>

              {/* Features List */}
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-800 mb-2">
                    <span className="mr-3 text-gray-700 text-xl"><IoCheckmarkDoneCircleOutline/></span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call-To-Action Button */}
            <Link to="/subscription">
              <button
                className={`w-full py-3 rounded-lg font-semibold text-lg mt-auto transition-all duration-300 ease-in-out ${
                  plan.highlight
                    ? "bg-pink-500 text-white hover:bg-pink-600 shadow-md"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                }`}
              >
                {plan.highlight ? "Most Popular" : "Choose Plan"}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionDeal;
