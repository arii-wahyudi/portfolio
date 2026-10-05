import { motion, useReducedMotion } from 'framer-motion';

export function AuroraBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Container with theme-dependent opacity and blend mode */}
      <div className="relative w-full h-full opacity-60 dark:opacity-90 transition-opacity duration-700 hidden sm:block">
        {/* Blob 1: Top-left deep primary glow */}
        <motion.div
          className="absolute -top-[12vw] -left-[12vw] w-[42vw] h-[42vw] rounded-full filter blur-[110px] bg-[var(--aurora-primary)]"
          style={{ opacity: 'var(--aurora-opacity)' }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ['0%', '6%', '-4%', '0%'],
                  y: ['0%', '7%', '3%', '0%'],
                  scale: [1, 1.06, 0.97, 1],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Blob 2: Center-right atmospheric accent glow */}
        <motion.div
          className="absolute top-[32vh] -right-[12vw] w-[38vw] h-[38vw] rounded-full filter blur-[125px] bg-[var(--aurora-secondary)]"
          style={{ opacity: 'var(--aurora-opacity)' }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ['0%', '-7%', '4%', '0%'],
                  y: ['0%', '-6%', '6%', '0%'],
                  scale: [1, 0.96, 1.08, 1],
                }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Blob 3: Bottom-center subtle secondary glow */}
        <motion.div
          className="absolute -bottom-[8vh] left-[28vw] w-[36vw] h-[36vw] rounded-full filter blur-[120px] bg-[var(--aurora-primary)]"
          style={{ opacity: 'calc(var(--aurora-opacity) * 0.75)' }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: ['0%', '5%', '-5%', '0%'],
                  y: ['0%', '-4%', '3%', '0%'],
                  scale: [1, 1.05, 0.98, 1],
                }
          }
          transition={{
            duration: 30,
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
