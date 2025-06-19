
import { CartContext } from "../Context/CartContext";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage() {
 

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white shadow rounded">
      <div>
        <CheckoutForm />
      </div>
      
    </div>
  );
}
