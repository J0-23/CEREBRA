"use client";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="absolute top-[15%] left-[10%] w-24 h-24 border-2 border-blue-500/40 rounded-full animate-pulse" />
      <div
        className="absolute top-[25%] right-[15%] w-20 h-20 border-2 border-indigo-500/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-[25%] left-[15%] w-28 h-28 border-2 border-purple-500/40 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[15%] right-[20%] w-16 h-16 border-2 border-blue-500/40 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/25 via-indigo-500/20 to-purple-500/25 dark:from-blue-500/15 dark:via-indigo-500/10 dark:to-purple-500/15 rounded-full blur-3xl" />

      <div className="absolute top-[20%] right-[25%] w-2 h-2 bg-blue-600 rounded-full animate-ping" />
      <div
        className="absolute top-[40%] left-[20%] w-2 h-2 bg-purple-600 rounded-full animate-ping"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-[40%] right-[22%] w-2 h-2 bg-indigo-600 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-[20%] left-[28%] w-2 h-2 bg-blue-600 rounded-full animate-ping"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
};
