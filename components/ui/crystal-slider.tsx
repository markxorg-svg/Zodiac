"use client";

const images = [
  "/crystal-s4.jpg",
  "/crystal-1.jpg",
  "/crystal-2.jpg",
  "/crystal-3.jpg",
  "/crystal-4.jpg",
  "/crystal-22.jpeg",
  "/crystal-new3.jpg",
  "https://images.unsplash.com/photo-1548382163-bbee44d7c0e7?w=3840&q=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=3840&q=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=3840&q=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=3840&q=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&q=100&auto=format&fit=crop",
];

const duplicated = [...images, ...images];

export function CrystalSlider() {
  return (
    <div className="w-full py-6 overflow-hidden relative">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .crystal-track-left {
          animation: scroll-left 30s linear infinite;
        }
        .crystal-track-right {
          animation: scroll-right 30s linear infinite;
        }
        .crystal-track-left:hover,
        .crystal-track-right:hover {
          animation-play-state: paused;
        }
        .crystal-fade {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      {/* Row 1 — scrolls left */}
      <div className="crystal-fade mb-4 overflow-hidden">
        <div className="crystal-track-left flex gap-4 w-max">
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-purple-300/20 hover:scale-105 transition-transform duration-500"
            >
              <img
                src={src}
                alt={`Crystal ${(i % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="crystal-fade overflow-hidden">
        <div className="crystal-track-right flex gap-4 w-max">
          {[...duplicated].reverse().map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-purple-300/20 hover:scale-105 transition-transform duration-500"
            >
              <img
                src={src}
                alt={`Crystal ${(i % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
