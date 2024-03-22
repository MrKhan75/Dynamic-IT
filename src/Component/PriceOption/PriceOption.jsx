import Price from "./Price";

const PriceOption = () => {

    const priceOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: 29.99,
          features: [
            "Access to cardio area",
            "Access to weightlifting area",
            "Use of locker room",
            "Access to group fitness classes (limited)"
          ]
        },
        {
          id: 2,
          name: "Silver Membership",
          price: 49.99,
          features: [
            "Access to all gym areas",
            "Free personal training session monthly",
            "Use of locker room",
            "Access to group fitness classes (unlimited)"
          ]
        },
        {
          id: 3,
          name: "Platinum Membership",
          price: 99.99,
          features: [
            "Access to all gym areas",
            "Unlimited personal training sessions",
            "Access to VIP lounge",
            "Use of locker room",
            "Access to group fitness classes (unlimited)",
            "Discounts on gym merchandise"
          ]
        }
      ];

    return (
        <div className="my-10">
          <h2 className="text-center text-2xl font-semibold pb-2">See Our Plans</h2>
          <p className="text-center text-base text-gray-500 px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda dolore iste quisquam nam <br />aliquid? Aspernatur ex impedit debitis vero.</p>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                  priceOptions.map(price => <Price key={price.id} option={price}></Price>)
                }
            </div>
        </div>
    );
};

export default PriceOption;