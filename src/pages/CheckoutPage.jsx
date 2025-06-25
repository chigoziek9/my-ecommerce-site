
import { CartContext } from "../Context/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import Breadcrumb from "../components/Breadcrumb";


export default function CheckoutPage() {
 

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white shadow rounded">
       <Breadcrumb/>
      <div>
        <CheckoutForm />
      </div>
      
    </div>
  );
}
