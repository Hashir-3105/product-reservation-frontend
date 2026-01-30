function Button({
  children,
  onClick,
  disabled,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg py-3 text-sm font-semibold shadow-sm transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
