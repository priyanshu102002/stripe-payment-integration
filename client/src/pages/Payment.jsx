import { loadStripe } from "@stripe/stripe-js";

const dummyData = [
    {
        id: 1,
        dish: "Paneer Tikka Masala",
        price: 250,
        otherData: {
            cuisine: "North Indian",
            spiceLevel: "Medium",
            chefSpecial: false,
        },
        quantity: 2,
    },
    {
        id: 2,
        dish: "Chicken Biryani",
        price: 300,
        otherData: {
            cuisine: "Hyderabadi",
            spiceLevel: "Hot",
            chefSpecial: true,
        },
        quantity: 1,
    },
    {
        id: 3,
        dish: "Vegetable Fried Rice",
        price: 180,
        otherData: {
            cuisine: "Chinese",
            spiceLevel: "Mild",
            chefSpecial: false,
        },
        quantity: 1,
    },
];

const Payment = () => {
    const handlePayment = async () => {
        const stripe = await loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

        const response = await fetch(
            "http://localhost:8000/api/create-checkout-session",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dummyData),
            }
        );

        const session = await response.json();

        // backend se se session id aayega
        if (!response.ok) {
            console.error(session.message);
            return;
        }
        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-40">
            <button
                className="px-6 py-4 font-bold bg-[#598392] rounded-xl"
                type="button"
                onClick={handlePayment}
            >
                Make Payment
            </button>
        </div>
    );
};

export default Payment;
