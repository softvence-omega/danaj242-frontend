"use client";

import type React from "react";

import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: "advertiser" | "agency" | "";
  organizationName: string;
  acceptTerms: boolean;
}

export default function SignupForm() {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    organizationName: "",
    acceptTerms: false,
  });

  const handleInputChange = (
    field: keyof SignupFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full mt-20 ">
      <CommonWrapper>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't have an account yet
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              What's wrong with you? Create one now, or I just do not know how
              long here.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* About You Section */}
            <div className="space-y-4">
              <p className="text-white text-sm">
                Let's start with a few details{" "}
                <span className="text-[#47B5FF]">about you</span>.
              </p>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-[#5575C4] focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-[#5575C4] focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="space-y-3">
              <p className="text-white text-sm">
                Now, Let's give you a login. Fill be your email.
              </p>
              <Input
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-[#5575C4] focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
              />
            </div>

            {/* Password Section */}
            <div className="space-y-3">
              <p className="text-white text-sm">Set yourself a password</p>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-[#5575C4] focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-[#5575C4] focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
                />
              </div>
            </div>

            {/* User Type Selection */}
            <div className="space-y-4">
              <p className="text-white text-sm">
                Will you use me for yourself, or on behalf of your clients ?
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                Advertiser accounts are designed for businesses and individuals
                who want to create and manage their own advertising campaigns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Advertiser Option */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInputChange("userType", "advertiser")}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.userType === "advertiser"
                      ? "border-[#47B5FF] bg-[#47B5FF]/20"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <h3 className="text-white font-medium text-sm mb-2">
                    For Yourself (Advertiser)
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Choose this option if you want to create and manage
                    advertising campaigns for your own business or personal use.
                  </p>
                </motion.div>

                {/* Agency Option */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInputChange("userType", "agency")}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.userType === "agency"
                      ? "border-[#47B5FF] bg-[#47B5FF]/20"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <h3 className="text-white font-medium text-sm mb-2">
                    For Your Clients (Agency)
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Choose this option if you want to manage advertising
                    campaigns on behalf of multiple clients as an agency.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Organization Name */}
            <div className="space-y-3">
              <p className="text-white text-sm">
                Now give your organisation a name.
              </p>
              <Input
                placeholder="Organization name"
                value={formData.organizationName}
                onChange={(e) =>
                  handleInputChange("organizationName", e.target.value)
                }
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-[#5575C4] focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="space-y-4">
              <div className="border-t border-white/20 pt-4">
                <p className="text-white text-sm mb-3">
                  The Terms & Conditions.
                </p>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("acceptTerms", checked as boolean)
                    }
                    className="border-white/40 data-[state=checked]:bg-[#47B5FF] data-[state=checked]:border-[#47B5FF] mt-0.5"
                  />
                  <label
                    htmlFor="terms"
                    className="text-white/80 text-xs leading-relaxed cursor-pointer"
                  >
                    I have read, agree to and accept the terms and conditions
                    and acknowledge the terms and conditions and privacy policy.
                  </label>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button
                type="submit"
                disabled={!formData.acceptTerms}
                className="w-full bg-[#47B5FF] hover:bg-[#3BA3E8] text-white font-semibold py-3 rounded-lg text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(71,181,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Account →
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </CommonWrapper>
    </div>
  );
}
