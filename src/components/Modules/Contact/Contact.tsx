import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Default location data (you can customize this later)
const locations = [
  { lat: 22.3569, lng: 91.8311, title: "Chattogram Port" },
  { lat: 22.3475, lng: 91.8203, title: "Halishahar" },
  { lat: 22.3389, lng: 91.8156, title: "Agrabad Commercial Area" },
  { lat: 22.3167, lng: 91.7833, title: "Chattogram Airport" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleViewLargerMap = () => {
    // You can implement custom map actions here if needed
  };

  return (
    <section
      className="w-full py-16 md:py-24 px-4"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Connect With & Ignite <br />
            The <span className="text-[#47B5FF]">Conversation!</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] overflow-hidden border border-[#2FABF9]"
              style={{
                background: "rgba(47, 171, 249, 0.12)",
                backdropFilter: "blur(30px)",
              }}
            >
              {/* View Larger Map Button */}
              <button
                onClick={handleViewLargerMap}
                className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                View Larger Map
              </button>

              {/* React-Leaflet Map Container */}
              <MapContainer
                center={[22.3569, 91.8311]} // Set default center
                zoom={12} // Initial zoom
                scrollWheelZoom={false}
                className="w-full h-full rounded-[20px]"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Use OpenStreetMap tiles
                />
                {/* Place markers */}
                {locations.map((location, index) => (
                  <Marker key={index} position={[location.lat, location.lng]}>
                    <Popup>{location.title}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </motion.div>

          {/* Contact Form Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Content Header */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Let's connect constellations
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Let's align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#47B5FF] focus:ring-[#47B5FF] rounded-lg h-12"
                    style={{ backdropFilter: "blur(10px)" }}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#47B5FF] focus:ring-[#47B5FF] rounded-lg h-12"
                    style={{ backdropFilter: "blur(10px)" }}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#47B5FF] focus:ring-[#47B5FF] rounded-lg h-12"
                  style={{ backdropFilter: "blur(10px)" }}
                />
              </div>

              {/* Phone Field */}
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#47B5FF] focus:ring-[#47B5FF] rounded-lg h-12"
                  style={{ backdropFilter: "blur(10px)" }}
                />
              </div>

              {/* Message Field */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[#47B5FF] focus:ring-[#47B5FF] rounded-lg resize-none"
                  style={{ backdropFilter: "blur(10px)" }}
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-[#47B5FF] hover:bg-[#3BA3E8] text-white font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(71,181,255,0.5)] flex items-center justify-center gap-2 text-lg"
                >
                  Send it to the moon
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
