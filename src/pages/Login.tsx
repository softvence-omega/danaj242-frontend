import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
interface LoginFormData {
  email: string;
  password: string;
}

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    console.log("Navigate to signup");
  };

  const handleForgotPassword = () => {
    console.log("Navigate to forgot password");
  };
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none">
            Hi
          </h1>
          <div className="space-y-1">
            <p className="text-white text-xl md:text-2xl font-medium">
              Welcome to the SCNE Ads billboard experience.
            </p>
            <p className="text-white/80 text-lg md:text-xl">
              Feel free to log in and enjoy me. I do bite, however.
            </p>
          </div>
        </motion.div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-16"
        >
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-white/60 focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/40 text-white text-lg md:text-xl placeholder:text-white/60 focus:outline-none focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8"
          >
            <div className="text-white text-lg md:text-xl">
              {"Don't have an account? "}
              <Button
                type="button"
                variant="link"
                onClick={handleSignUp}
                className="text-[#47B5FF] hover:text-[#38A3E8] p-0 h-auto font-medium text-lg md:text-xl underline-offset-2"
              >
                Make one
              </Button>
              {" it's free."}
            </div>

            <Button
              type="button"
              variant="link"
              onClick={handleForgotPassword}
              className="text-white hover:text-white/80 p-0 h-auto text-lg md:text-xl"
            >
              Forget Password ?
            </Button>
          </motion.div>

          {/* Hidden submit button for Enter key functionality */}
          <Button type="submit" className="hidden">
            Submit
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;
