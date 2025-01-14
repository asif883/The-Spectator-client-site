import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Subscription = () => {
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
          features: ["Unlimited Articles", "Priority Support", "Ad-Free Experience", "Free festival magazine" ,"Breaking news notification"],
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
            "Breaking news notification"
          ],
          highlight: false,
        },
      ];
    return (
        <div className="max-w-7xl mx-auto my-8 md:my-16">
            <div className="text-center">
                 <h1 className="text-4xl font-bold mb-2">Choose Your Right Plan!</h1>
                 <p>Select from the best plans, ensuring a perfect match. Need more or less?
                     <br /> Customize your subscription for seamless fit!
                 </p>
            </div>
           <Fade>
           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between ${
              plan.highlight
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className={`text-xl font-bold mb-4 ${plan.highlight ? "text-white" : "text-gray-800"}`}>
                {plan.price}
              </p>
              <p className={`${plan?.highlight ? "text-gray-200" :"text-gray-600"}  mb-6`}>{plan.description}</p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center mb-2 ${
                      plan.highlight ? "text-white" : "text-gray-700"
                    }`}
                  >
                    <span className="mr-2 text-green-500">&#10003;</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link to='/subscription'><button
              className={`w-full py-3 rounded-lg font-semibold mt-auto ${
                plan.highlight
                  ? "bg-white text-blue-600 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.highlight ? "Most Popular" : "Choose Plan"}
            </button>
            </Link>
          </div>
           ))}
           </div>
           </Fade>


          
        </div>
    );
};

export default Subscription;