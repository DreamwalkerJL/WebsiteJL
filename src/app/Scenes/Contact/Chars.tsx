import { motion } from 'framer-motion'

export default function ProGlitch() {
  return (
    <div className="relative w-[1251px] h-[781px] overflow-hidden">
      {/* base image */}
      <img
        src="Contact Char Additional.png"
        alt="Contact character additional"
        className="absolute inset-0 object-cover"
      />

      {/* red-channel glitch */}
      <motion.img
        src="Contact Char Additional.png"
        alt=""
        className="absolute inset-0 object-cover mix-blend-screen pointer-events-none"
        animate={{
          x: [0, -8, 8, 0],
          filter: [
            'hue-rotate(20deg)',
            'hue-rotate(20deg)',
            'hue-rotate(20deg)',
            'hue-rotate(20deg)'
          ],
          clipPath: [
            'inset(10% 0 85% 0)',
            'inset(25% 0 60% 0)',
            'inset(40% 0 40% 0)',
            'inset(10% 0 85% 0)'
          ]
        }}
        transition={{
          duration: 0.6,
          ease: 'steps(4, end)',
          repeat: Infinity,
          repeatDelay: 2
        }}
      />

      {/* blue-channel glitch */}
      <motion.img
        src="Contact Char Additional.png"
        alt=""
        className="absolute inset-0 object-cover mix-blend-screen pointer-events-none"
        animate={{
          x: [0, 6, -6, 0],
          filter: [
            'hue-rotate(-20deg)',
            'hue-rotate(-20deg)',
            'hue-rotate(-20deg)',
            'hue-rotate(-20deg)'
          ],
          clipPath: [
            'inset(60% 0 20% 0)',
            'inset(45% 0 35% 0)',
            'inset(55% 0 30% 0)',
            'inset(60% 0 20% 0)'
          ]
        }}
        transition={{
          duration: 0.6,
          ease: 'steps(4, end)',
          repeat: Infinity,
          repeatDelay: 2
        }}
      />
    </div>
  )
}
