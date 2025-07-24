import { StepsData } from "@/lib/Data";
import { motion } from "framer-motion";
import StepCard from "./StepsCard";

export default function HowItWorksSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-5xl  font-bold text-white mb-6">
          How it's <span className="text-[#47B5FF]">Works</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            Select the best digital billboards across the Caribbean to showcase
            your ad.
          </p>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-2">
            Whether it's on a bustling city street, inside a shopping mall, or
            near a popular event,
          </p>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-2">
            SCNE Ads offers diverse locations to reach your target audience.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {StepsData.map((step, index) => (
          <StepCard
            key={step.id}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            icon={step.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
