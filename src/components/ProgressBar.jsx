import React from "react";

export default function ProgressBar({ currentStep }) {
  const steps = ["Cart", "Order", "Survey"];

  return (
    <div className="flex justify-center items-center my-8">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step} className="flex items-center">
            {/* Step Circle + Label */}
            <div className="flex items-center space-x-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive
                    ? "bg-[#0a4dc1] text-white"
                    : isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-[#0d121c]"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm ${
                  isActive
                    ? "text-[#0a4dc1] font-semibold"
                    : isCompleted
                    ? "text-green-600"
                    : "text-[#49689c]"
                }`}
              >
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className={`w-10 h-1 mx-3 rounded-full ${
                  isCompleted ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
