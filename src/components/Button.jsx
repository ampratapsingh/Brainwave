import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

const Button = ({className, href, onClick, children, px, white}) => {

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${className || ""} ${white ? 'text-n-8' : 'text-n-1'}`

  const spanClasses = "relative z-10"

  const renderButton = () => {
    return (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    );
  }

  const renderLink = () => {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  }

  return href ? renderLink() : renderButton();
}

export default Button




// Use the inline-flex utility to create an inline flex container that flows with text

// Relative -- Purpose: Allows absolutely positioned child elements (like icons or gradients) to be positioned relative to this button.

//inline-flex --Purpose:
// Keeps the button inline with text (like other buttons or words).
// Enables flexbox alignment inside the button (to center text and icons easily).

// items-center
// Meaning: Centers items vertically within the flex container.

// justify-center
// Meaning: Centers content horizontally within the flex container.

// h-11 -- Purpose:
// Gives the button a consistent height across all sizes.
