import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ProjectGallery({ images }) {
  const [active, setActive] = useState(0);

  if (!images?.length) return null;

  const go = (dir) => {
    setActive((i) => (i + dir + images.length) % images.length);
  };

  return (
    <motion.div className="project-gallery">
      <motion.div className="project-gallery-main">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[active].src}
            src={images[active].src}
            alt={images[active].caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="project-gallery-image"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="project-gallery-nav project-gallery-nav-prev"
              aria-label="Previous screenshot"
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="project-gallery-nav project-gallery-nav-next"
              aria-label="Next screenshot"
            >
              <HiChevronRight size={20} />
            </button>
          </>
        )}

        <p className="project-gallery-caption">{images[active].caption}</p>
      </motion.div>

      {images.length > 1 && (
        <motion.div className="project-gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`project-gallery-thumb ${i === active ? "is-active" : ""}`}
              aria-label={`View ${img.caption}`}
            >
              <img src={img.src} alt="" loading="lazy" />
            </button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
