import { motion, useReducedMotion } from 'framer-motion';

export function AuroraBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Container with theme-dependent opacity and blend mode */}
      <div className="relative w-full h-full opacity-70 dark:opacity-100 transition-opacity duration-500 hidden sm:block">
        {/* Blob 1: Top-left deep primary glow */}
        <motion.div
          className="absolute -top-[10vw] -left-[10vw] w-[45vw] h-[45vw] rounded-full filter blur-[100px] bg-[var(--aurora-primary)]"
          style={{ opacity: 'var(--aurora-opacity)' }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ['0%', '8%', '-6%', '0%'],
                  y: ['0%', '10%', '4%', '0%'],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Blob 2: Center-right atmospheric accent glow */}
        <motion.div
          className="absolute top-[30vh] -right-[15vw] w-[40vw] h-[40vw] rounded-full filter blur-[120px] bg-[var(--aurora-secondary)]"
          style={{ opacity: 'var(--aurora-opacity)' }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ['0%', '-10%', '5%', '0%'],
                  y: ['0%', '-8%', '8%', '0%'],
                  scale: [1, 0.95, 1.12, 1],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Blob 3: Bottom-center subtle secondary glow */}
        <motion.div
          className="absolute -bottom-[10vh] left-[25vw] w-[38vw] h-[38vw] rounded-full filter blur-[110px] bg-[var(--aurora-primary)]"
          style={{ opacity: 'calc(var(--aurora-opacity) * 0.8)' }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ['0%', '6%', '-8%', '0%'],
                  y: ['0%', '-6%', '4%', '0%'],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>
    </div>
  );
}
