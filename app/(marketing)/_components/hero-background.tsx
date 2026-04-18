"use client";

export const HeroBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
      {/* Subtle gradient backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.08), transparent 50%), radial-gradient(circle at 70% 80%, rgba(99,102,241,0.08), transparent 50%)",
        }}
      />

      {/* Small dots - visible with subtle pulse */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "12%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.4)",
          animation: "gentle-pulse 3s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "22%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.35)",
          animation: "gentle-pulse 3s ease-in-out infinite 0.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.3)",
          animation: "gentle-pulse 3s ease-in-out infinite 1s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "18%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.35)",
          animation: "gentle-pulse 3s ease-in-out infinite 1.5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "82%",
          left: "28%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.3)",
          animation: "gentle-pulse 3s ease-in-out infinite 2s",
        }}
      />

      {/* Right side dots */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          right: "18%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.35)",
          animation: "gentle-pulse 3s ease-in-out infinite 0.3s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "28%",
          right: "25%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.4)",
          animation: "gentle-pulse 3s ease-in-out infinite 0.8s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "12%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.32)",
          animation: "gentle-pulse 3s ease-in-out infinite 1.3s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "62%",
          right: "22%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.38)",
          animation: "gentle-pulse 3s ease-in-out infinite 1.8s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "78%",
          right: "30%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.3)",
          animation: "gentle-pulse 3s ease-in-out infinite 2.3s",
        }}
      />

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
          animation: "gentle-pulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
};
