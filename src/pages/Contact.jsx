import Breadcrumb from "../components/Breadcrumb";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";

export default function Contact() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto bg-white shadow rounded">
      <Breadcrumb />
      <h1 className="mt-4 text-3xl"> Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full max-w-[350px] h-auto sm:h-[470px] rounded-xl shadow-md mt-8 p-9">
          {/* Make image and h1 sit side by side */}
          <div className="flex items-center gap-4 mb-2">
            <img src={Phone} alt="" className="w-12 h-12 object-contain" />
            <h1 className="text-xl font-bold">Call To Us</h1>
          </div>

          {/* Keep these below */}
          <p className="mt-5">We are available 24/7, 7 days a week.</p>
          <p className="mt-4">Phone: +8801611112222</p>
          <hr className="my-4 border-t border-gray-900 mt-6" />

          <div className="flex items-center gap-4 mb-2">
            <img src={Mail} alt="" className="w-12 h-12 object-contain" />
            <h1 className="text-xl font-bold">Write To Us</h1>
          </div>

          {/* Keep these below */}
          <p className="mt-5">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mt-4">Emails: customer@exclusive.com</p>
          <p className="mt-4">Emails: support@exclusive.com</p>
        </div>

        <div className="w-full mt-8">
          <form className="mx-auto p-6 bg-white rounded-2xl shadow space-y-6">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-400 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
