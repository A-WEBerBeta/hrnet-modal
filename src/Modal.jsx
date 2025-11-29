import PropTypes from "prop-types";
import { useEffect } from "react";
import "./Modal.css";

/**
 * Modal component for displaying a dialog with overlay, animation,
 * close button, and keyboard support.
 *
 * Features:
 * - Close on overlay click
 * - Close with Escape key
 * - Accessible (role="dialog", aria-modal, aria-labelledby)
 * - Animations via data attributes
 * - Supports theming via className and CSS variables
 */

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "", // Allows custom themes or additional classes
  animation = "fade", // Animation type: "fade" | "zoom" | "slide-up" | "none"
}) {
  /**
   * Handle keyboard closing (Escape key).
   * Only attaches the listener when the modal is open.
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup when modal closes or component unmounts
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // When modal is closed, render nothing
  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${className}`}
      onClick={onClose}
      data-animation={animation}
    >
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        onClick={(e) => e.stopPropagation()}
        data-animation={animation}
      >
        {/* Close button  */}
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            className="icon-close"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
        </button>

        {/* Modal title (optional)  */}
        {title && (
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
        )}

        {/* Modal content  */}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  animation: PropTypes.oneOf(["fade", "zoom", "slide-up", "none"]),
};

Modal.defaultProps = {
  title: null,
  className: "",
  animation: "slide-up",
};
