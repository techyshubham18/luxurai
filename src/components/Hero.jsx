import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const logoY = useTransform(scrollY, [0, 500], [0, -200]);
  const featherX = useTransform(scrollY, [0, 1000], [0, -400]);
  const featherY = useTransform(scrollY, [0, 1000], [0, 220]);
  const featherScale = useTransform(scrollY, [0, 800], [1, 0.85]);

  return (
    <section className="hero">
      <div className="mesh-bg"></div>

      <motion.div
        className="logo-container"
        style={{ y: logoY }}
      >
        <div className="flute"></div>

        <h1 className="luxur-logo">
          LUXUR AI
        </h1>
      </motion.div>

      <motion.div
        className="feather-wrapper"
        style={{
          x: featherX,
          y: featherY,
          scale: featherScale
        }}
      >
        <div className="feather"></div>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="glass-btn"
        >
          Enter Experience
        </motion.button>
      </motion.div>
    </section>
  );
}
