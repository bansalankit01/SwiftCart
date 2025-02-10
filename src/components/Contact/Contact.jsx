import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMessage("Your message has been sent successfully!");
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <div className="relative overflow-hidden min-h-[400px] flex justify-center items-center duration-200">
        {/* <div className="container pb-8 relative z-10 grid grid-cols-1 sm:grid-cols-2"> */}
        {/* <div className="flex flex-col justify-center gap-4 text-center sm:text-left">
            <h1 className="text-xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-md text-red-500 dark:text-red-500">
              At SwiftCart, we bring you the latest fashion trends at unbeatable prices! Shop confidently and enjoy exclusive offers, fast delivery, and a seamless shopping experience! 🚀
            </p>
          </div> */}

        <img
          src="https://img.freepik.com/premium-vector/contact-us-concept-idea-support-service-communication-with-customers-providing-them-with-useful-information-online-by-phone-call-illustration_277904-1629.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_incoming"
          alt="Contact"
          className="w-full max-h-[400px] object-contain"
        />
      </div>
      <hr />
      <br />
      <br />
      <br />
      <section
        data-aos="fade-up"
        className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-8"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-blue-600" />
              <a
                href="tel:1234567890"
                className="block text-lg text-gray-800 dark:text-gray-300"
              >
                123-456-7890
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-red-600" />
              <a
                href="mailto:bansalankit8447@gmail.com"
                className="block text-lg text-gray-800 dark:text-gray-300"
              >
                bansalankit8447@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-green-600" />
              <a href="#" className="text-lg text-gray-800 dark:text-gray-300">
                Delhi, India
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">Drop your message</h3>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 dark:bg-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 dark:bg-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-800">{alertMessage}</p>
              <button
                onClick={() => setShowAlert(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </section>
      <br />
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Contact;
