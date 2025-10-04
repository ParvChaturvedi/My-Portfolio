import { motion } from "motion/react";
import { assets } from "../assets/assets";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  // Disable background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close button (fixed inside modal box, not scrolling away) */}
        <div className="sticky top-0 flex justify-end bg-midnight/70 backdrop-blur-sm z-10">
          <button
            onClick={closeModal}
            className="p-2 m-2 rounded-sm hover:bg-gray-500"
          >
            <img src={assets.close} className="w-6 h-6" />
          </button>
        </div>

        {/* Image */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white"
            >
              View Project
              <img src={assets.arrowUp} className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;