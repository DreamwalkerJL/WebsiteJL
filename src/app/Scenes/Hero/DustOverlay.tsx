import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DustOverlay: React.FC = () => {
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setDims({ w: window.innerWidth, h: window.innerHeight });
    // optional: update on resize
    const onResize = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // back layer: tiny, dense
  const tinyCount = 80;
  // front layer: bigger, sparse
  const bigCount = 20;

  const renderParticles = (
    count: number,
    sizeRange: [number, number],
    opacityRange: [number, number],
    blurClass: string,
    layerOffset: number
  ) =>
    Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      const opacity =
        Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
      const startY = Math.random() * dims.h;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * -duration;

      return (
        <motion.div
          key={`${layerOffset}-${i}`}
          className={`${blurClass} bg-white rounded-full`}
          style={{
            position: "absolute",
            width: size,
            height: size,
            top: startY,
            left: -size,
            opacity,
            zIndex: layerOffset,
          }}
          initial={{ x: -size, rotate: Math.random() * 360 }}
          animate={{ x: dims.w + size, rotate: `+=${Math.random() * 90 - 45}` }}
          transition={{
            duration,
            delay,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      );
    });

  return (
    <div className="absolute w-full h-full inset-0 pointer-events-none overflow-hidden">
      {/* back: tiny, blurred */}
      {renderParticles(
        tinyCount,
        [10, 30],        // size 1px–3px
        [0.1, 0.3],    // very faint
        "filter blur-sm",
        10             // lower z-index
      )}

      {/* front: larger, sharper */}
      {renderParticles(
        bigCount,
        [40, 80],        // size 4px–8px
        [0.2, 0.5],    // a bit more visible
        "",            // no blur
        20             // higher z-index
      )}
    </div>
  );
};

export default DustOverlay;
