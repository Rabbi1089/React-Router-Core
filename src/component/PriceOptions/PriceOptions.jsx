import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 101,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to cardio machines",
                "Access to strength training equipment"
            ]
        },

        {
            "id": 102,
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "Access to cardio machines",
                "Access to strength training equipment",
                "Unlimited group fitness classes"
            ]
        },
        {
            "id": 103,
            "name": "Elite Membership",
            "price": "$79.99/month",
            "features": [
                "Access to cardio machines",
                "Access to strength training equipment",
                "Unlimited group fitness classes",
                "2 personal training sessions/month"
            ]
        }

    ]
    return (
        <div>
            {
                PriceOptions.map(Option => <PriceOption key={Option.id} option={Option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;