/* @ds-bundle: {"format":3,"namespace":"SaveraDesignSystem_d2991c","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Divider","sourcePath":"components/data-display/Divider.jsx"},{"name":"StarRating","sourcePath":"components/data-display/StarRating.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"BlogCard","sourcePath":"components/travel/BlogCard.jsx"},{"name":"DestinationTile","sourcePath":"components/travel/DestinationTile.jsx"},{"name":"FeatureIcon","sourcePath":"components/travel/FeatureIcon.jsx"},{"name":"Photo","sourcePath":"components/travel/Photo.jsx"},{"name":"StepItem","sourcePath":"components/travel/StepItem.jsx"},{"name":"TripCard","sourcePath":"components/travel/TripCard.jsx"},{"name":"WishlistButton","sourcePath":"components/travel/WishlistButton.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"53384859ebd7","components/buttons/IconButton.jsx":"04ec3d3f9a43","components/data-display/Avatar.jsx":"98f77d0600ce","components/data-display/Badge.jsx":"d5d82a208a6a","components/data-display/Card.jsx":"14b9cf20ab6d","components/data-display/Divider.jsx":"e0681d7a8d73","components/data-display/StarRating.jsx":"8930449d49a0","components/data-display/Tag.jsx":"399cb4dd366b","components/feedback/Dialog.jsx":"70b0744b007d","components/feedback/Toast.jsx":"357e777c34ea","components/feedback/Tooltip.jsx":"685c7f9be094","components/forms/Checkbox.jsx":"ae7183d427ab","components/forms/Input.jsx":"f3a7eb2069d5","components/forms/Radio.jsx":"1ce0f0b3d5fd","components/forms/Select.jsx":"1d10241eb543","components/forms/Switch.jsx":"4a83efba37b1","components/forms/Textarea.jsx":"10003c5e0759","components/navigation/Tabs.jsx":"c1ecefd1a76c","components/travel/BlogCard.jsx":"d31ecad33dec","components/travel/DestinationTile.jsx":"78b5bc2aefd4","components/travel/FeatureIcon.jsx":"1c22455f3e07","components/travel/Photo.jsx":"3f31078002ef","components/travel/StepItem.jsx":"3d72cf40326a","components/travel/TripCard.jsx":"ba278b3f0055","components/travel/WishlistButton.jsx":"7353df39883c","guidelines/image-slot.js":"9309434cb09c","ui_kits/website/detail.jsx":"32f2557f422f","ui_kits/website/home.jsx":"a5ae64d7a6f1","ui_kits/website/icons.jsx":"d89201b61993","ui_kits/website/shell.jsx":"e1802370ad68"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaveraDesignSystem_d2991c = window.SaveraDesignSystem_d2991c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera Button — uppercase, heavy, wide-tracked.
 * Variants: primary (gold), secondary (sage), ghost (outline), link.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "10px 20px",
      fontSize: "0.6875rem",
      gap: "8px"
    },
    md: {
      padding: "15px 30px",
      fontSize: "0.75rem",
      gap: "10px"
    },
    lg: {
      padding: "19px 40px",
      fontSize: "0.8125rem",
      gap: "12px"
    }
  };
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    lineHeight: 1,
    border: "var(--border-width-thick) solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)",
      borderColor: "var(--action-primary)"
    },
    secondary: {
      background: "var(--action-secondary)",
      color: "var(--action-secondary-text)",
      borderColor: "var(--action-secondary)"
    },
    ghost: {
      background: "transparent",
      color: onDark ? "var(--white)" : "var(--text-strong)",
      borderColor: onDark ? "rgba(255,255,255,0.55)" : "var(--ink-900)"
    },
    link: {
      background: "transparent",
      color: onDark ? "var(--link-on-dark)" : "var(--action-secondary)",
      borderColor: "transparent",
      padding: "4px 0",
      letterSpacing: "0.12em",
      borderRadius: 0,
      borderBottom: "2px solid currentColor"
    }
  };
  const hoverFor = v => {
    switch (v) {
      case "primary":
        return {
          background: "var(--action-primary-hover)",
          borderColor: "var(--action-primary-hover)"
        };
      case "secondary":
        return {
          background: "var(--action-secondary-hover)",
          borderColor: "var(--action-secondary-hover)"
        };
      case "ghost":
        return onDark ? {
          background: "var(--white)",
          color: "var(--forest-900)",
          borderColor: "var(--white)"
        } : {
          background: "var(--ink-900)",
          color: "var(--white)",
          borderColor: "var(--ink-900)"
        };
      case "link":
        return {
          color: onDark ? "var(--white)" : "var(--action-secondary-hover)"
        };
      default:
        return {};
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hoverFor(variant) : null),
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, leadingIcon), children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera IconButton — circular icon-only control.
 * Used for wishlist hearts, nav toggles, carousel arrows, close buttons.
 */
function IconButton({
  children,
  variant = "solid",
  size = "md",
  label,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size];
  const variants = {
    solid: {
      background: "var(--white)",
      color: "var(--forest-800)",
      border: "none",
      boxShadow: "var(--shadow-sm)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--forest-900)",
      border: "none",
      boxShadow: "var(--shadow-sm)"
    },
    ghost: {
      background: "rgba(255,255,255,0.14)",
      color: "var(--white)",
      border: "1px solid rgba(255,255,255,0.4)",
      boxShadow: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--forest-800)",
      border: "1.5px solid var(--border-light)",
      boxShadow: "none"
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      minWidth: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
      transform: hover && !disabled ? "scale(1.07)" : "scale(1)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Avatar — round portrait for guides/experts; initials fallback. */
function Avatar({
  src,
  name = "",
  size = 48,
  ring = false,
  style,
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: "var(--radius-circle)",
      background: "var(--teal-800)",
      color: "var(--gold-300)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      font: `var(--fw-bold) ${Math.round(size * 0.36)}px/1 var(--font-sans)`,
      letterSpacing: "0.04em",
      border: ring ? "2px solid var(--gold-400)" : "none",
      boxShadow: ring ? "0 0 0 2px var(--surface-card)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "•");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera Badge — small status/label pill. Gold = duration/featured,
 * sage = secondary, dark = on-light overlay labels.
 */
function Badge({
  children,
  variant = "gold",
  style,
  ...rest
}) {
  const variants = {
    gold: {
      background: "var(--gold-500)",
      color: "var(--forest-900)"
    },
    sage: {
      background: "var(--sage-500)",
      color: "var(--white)"
    },
    dark: {
      background: "var(--forest-800)",
      color: "var(--white)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-light)"
    },
    glass: {
      background: "rgba(22,32,29,0.55)",
      color: "var(--white)",
      backdropFilter: "blur(4px)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      padding: "7px 12px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera Card — warm white surface, soft shadow, near-square corners.
 * Default editorial container; optional media slot at top.
 */
function Card({
  children,
  padding = "lg",
  interactive = false,
  media = null,
  style,
  onClick,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--pad-sm)",
    md: "var(--pad-md)",
    lg: "var(--pad-lg)"
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-card)",
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      transform: interactive && hover ? "translateY(-4px)" : "translateY(0)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), media, children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pads[padding]
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Divider — hairline rule; supports a centered script/label flourish. */
function Divider({
  label,
  onDark = false,
  script = false,
  style,
  ...rest
}) {
  const line = onDark ? "var(--divider-on-dark)" : "var(--border-light)";
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: "none",
        borderTop: `1px solid ${line}`,
        margin: 0,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: script ? {
      font: "var(--fw-600) 1.5rem/1 var(--font-script)",
      fontFamily: "var(--font-script)",
      fontSize: "1.6rem",
      color: onDark ? "var(--gold-300)" : "var(--gold-600)"
    } : {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: onDark ? "var(--sage-300)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: line
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera StarRating — golden five-star row with optional count link. */
function StarRating({
  value = 5,
  max = 5,
  size = 18,
  count,
  onCountClick,
  style,
  ...rest
}) {
  const Star = ({
    fill
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 6.06 6.6.8-4.9 4.5 1.3 6.55L12 17.9 6.1 20.9l1.3-6.55-4.9-4.5 6.6-.8z",
    fill: fill ? "var(--star)" : "none",
    stroke: "var(--star)",
    strokeWidth: "1.4",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: "3px"
    },
    "aria-label": `${value} out of ${max} stars`
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    fill: i < Math.round(value)
  }))), count != null && /*#__PURE__*/React.createElement("a", {
    onClick: onCountClick,
    style: {
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--action-secondary)",
      textDecoration: "none",
      cursor: onCountClick ? "pointer" : "default",
      borderBottom: "1px solid transparent"
    }
  }, typeof count === "number" ? `${count.toLocaleString()} reviews` : count));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Tag — quiet inline keyword chip (experiences, filters). */
function Tag({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const clickable = typeof onClick === "function";
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)",
      letterSpacing: "0.06em",
      color: active ? "var(--forest-900)" : "var(--text-body)",
      background: active ? "var(--gold-300)" : "var(--cream-100)",
      border: `1px solid ${active ? "var(--gold-400)" : "var(--border-light)"}`,
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      cursor: clickable ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Dialog — centered modal over a dimmed bush-dusk scrim. */
function Dialog({
  open = true,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(22,32,29,0.62)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      width: "100%",
      maxWidth: width,
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      padding: "var(--pad-lg) var(--pad-lg) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: "var(--gold-600)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--fw-black) var(--fs-xl)/1.1 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "outline",
    size: "sm",
    label: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l10 10M12 2L2 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-md) var(--pad-lg)",
      font: "var(--body)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px",
      padding: "0 var(--pad-lg) var(--pad-lg)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Toast — compact dark forest notification with accent bar. */
function Toast({
  title,
  message,
  variant = "success",
  onDismiss,
  style,
  ...rest
}) {
  const accents = {
    success: "var(--success)",
    info: "var(--info)",
    warning: "var(--gold-500)",
    danger: "var(--danger)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
      minWidth: 300,
      maxWidth: 420,
      background: "var(--forest-800)",
      color: "var(--white)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "16px 18px",
      borderLeft: `4px solid ${accents[variant]}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)",
      letterSpacing: "0.02em"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-xs)/1.5 var(--font-sans)",
      color: "var(--sage-300)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      color: "var(--sage-300)",
      cursor: "pointer",
      padding: 2,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l10 10M12 2L2 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Tooltip — small dark label on hover/focus. */
function Tooltip({
  children,
  label,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      ...pos[placement],
      background: "var(--forest-900)",
      color: "var(--white)",
      font: "var(--fw-bold) var(--fs-2xs)/1.3 var(--font-sans)",
      letterSpacing: "0.04em",
      padding: "7px 11px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Checkbox — square control with a gold check when selected. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      font: "var(--body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-xs)",
      border: `2px solid ${checked ? "var(--gold-500)" : "var(--border-light)"}`,
      background: checked ? "var(--gold-500)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2L4.8 9L10 3",
    stroke: "var(--forest-900)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera Input — understated editorial field with an uppercase micro-label.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  hint,
  error,
  required = false,
  disabled = false,
  leadingIcon = null,
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const labelColor = onDark ? "var(--sage-300)" : "var(--text-muted)";
  const borderColor = error ? "var(--danger)" : focus ? "var(--gold-500)" : onDark ? "rgba(255,255,255,0.24)" : "var(--border-light)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: labelColor
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-500)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: onDark ? "rgba(255,255,255,0.05)" : "var(--white)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: "0 14px",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      opacity: disabled ? 0.55 : 1
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--body)",
      color: onDark ? "var(--white)" : "var(--text-strong)",
      padding: "13px 0",
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-xs)/1.4 var(--font-sans)",
      color: error ? "var(--danger)" : onDark ? "var(--sage-300)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Radio — round control, gold dot when selected. */
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      font: "var(--body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: "var(--radius-circle)",
      border: `2px solid ${checked ? "var(--gold-500)" : "var(--border-light)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-circle)",
      background: "var(--gold-500)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Select — native select styled to match the Input field. */
function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  hint,
  error,
  required = false,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--danger)" : focus ? "var(--gold-500)" : onDark ? "rgba(255,255,255,0.24)" : "var(--border-light)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: onDark ? "var(--sage-300)" : "var(--text-muted)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-500)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      background: onDark ? "rgba(255,255,255,0.05)" : "var(--white)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--body)",
      color: onDark ? "var(--white)" : "var(--text-strong)",
      padding: "14px 40px 14px 14px",
      cursor: disabled ? "not-allowed" : "pointer",
      minWidth: 0
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none",
      color: onDark ? "var(--sage-300)" : "var(--text-muted)",
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-xs)/1.4 var(--font-sans)",
      color: error ? "var(--danger)" : onDark ? "var(--sage-300)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Switch — pill toggle, gold track when on. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      font: "var(--body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--gold-500)" : "var(--sand-300)",
      position: "relative",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: "var(--radius-circle)",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera Textarea — multi-line field sharing the Input visual language. */
function Textarea({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
  hint,
  error,
  required = false,
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--danger)" : focus ? "var(--gold-500)" : onDark ? "rgba(255,255,255,0.24)" : "var(--border-light)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: onDark ? "var(--sage-300)" : "var(--text-muted)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-500)"
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--body)",
      color: onDark ? "var(--white)" : "var(--text-strong)",
      background: onDark ? "rgba(255,255,255,0.05)" : "var(--white)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: "14px",
      resize: "vertical",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      opacity: disabled ? 0.55 : 1
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-xs)/1.4 var(--font-sans)",
      color: error ? "var(--danger)" : onDark ? "var(--sage-300)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera Tabs — underlined editorial tab row. Active tab gets a gold underline.
 * Controlled (`value`/`onChange`) or uncontrolled (`defaultValue`).
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const idle = onDark ? "var(--sage-300)" : "var(--text-muted)";
  const on = onDark ? "var(--white)" : "var(--text-strong)";
  const line = onDark ? "var(--divider-on-dark)" : "var(--border-light)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "32px",
      borderBottom: `1px solid ${line}`
    }
  }, items.map(it => {
    const sel = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": sel,
      onClick: () => select(it.value),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 14px",
        font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-wide)",
        color: sel ? on : idle,
        borderBottom: `2px solid ${sel ? "var(--gold-500)" : "transparent"}`,
        marginBottom: -1,
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, it.label);
  })), items.map(it => it.value === active && it.content != null ? /*#__PURE__*/React.createElement("div", {
    key: it.value,
    role: "tabpanel",
    style: {
      paddingTop: "24px"
    }
  }, it.content) : null));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/travel/FeatureIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera FeatureIcon — circular dark-teal container with a golden line icon,
 * bold white heading, muted sage subtext. Used 4-up on dark forest sections.
 */
function FeatureIcon({
  icon,
  title,
  children,
  onDark = true,
  align = "center",
  style,
  ...rest
}) {
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: centered ? "center" : "flex-start",
      textAlign: centered ? "center" : "left",
      gap: "16px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-circle)",
      background: onDark ? "var(--teal-800)" : "var(--cream-100)",
      color: "var(--gold-400)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-md)/1.25 var(--font-sans)",
      color: onDark ? "var(--white)" : "var(--text-strong)"
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body-sm)",
      color: onDark ? "var(--sage-300)" : "var(--text-muted)",
      maxWidth: "32ch"
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/FeatureIcon.jsx", error: String((e && e.message) || e) }); }

// components/travel/Photo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera Photo — full-bleed image frame. Renders `src` when supplied;
 * otherwise a warm golden-hour gradient placeholder labelled with its subject,
 * so layouts read correctly before real photography is dropped in.
 * Photography always bleeds to the edge — no inner padding.
 */
function Photo({
  src,
  alt = "",
  ratio = "4 / 3",
  label,
  overlay = false,
  overlayStrong = false,
  zoomOnHover = false,
  radius = 0,
  iconOnly = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  // Deterministic gradient variety from the label text.
  const gradients = ["var(--golden-hour)", "var(--bush-dusk)", "linear-gradient(155deg,#1f3b38 0%,#2b3834 40%,#b5872f 110%)", "linear-gradient(150deg,#16302e 0%,#455753 55%,#d9b566 130%)"];
  const idx = String(label || alt).length % gradients.length;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: radius,
      background: src ? "var(--forest-800)" : gradients[idx],
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: zoomOnHover && hover ? "scale(1.06)" : "scale(1)",
      transition: "transform var(--img-zoom) var(--ease-out)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      color: "rgba(255,255,255,0.82)",
      transform: zoomOnHover && hover ? "scale(1.06)" : "scale(1)",
      transition: "transform var(--img-zoom) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "1.5",
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10",
    r: "1.6",
    fill: "rgba(255,255,255,0.7)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17l4.5-4.5L13 16l3-2.5L20 17",
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "1.4",
    strokeLinejoin: "round",
    fill: "none"
  })), label && !iconOnly && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1.3 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      textAlign: "center",
      padding: "0 12px"
    }
  }, label)), (overlay || overlayStrong) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: overlayStrong ? "var(--overlay-photo-strong)" : "var(--overlay-photo)",
      pointerEvents: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/Photo.jsx", error: String((e && e.message) || e) }); }

// components/travel/BlogCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera BlogCard — landscape guide/journal card. 16:9 photo, small meta label,
 * bold title, subtle hover lift.
 */
function BlogCard({
  image,
  category,
  date,
  title,
  excerpt,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      cursor: onClick ? "pointer" : "default",
      transform: hover ? "translateY(-4px)" : "translateY(0)",
      transition: "transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    label: title,
    ratio: "16 / 9",
    radius: "var(--radius-md)",
    zoomOnHover: true,
    iconOnly: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingTop: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      color: "var(--gold-600)"
    }
  }, [category, date].filter(Boolean).join("  ·  ")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-lg)/1.22 var(--font-sans)",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body-sm)",
      color: "var(--text-muted)"
    }
  }, excerpt)));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/travel/DestinationTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera DestinationTile — pure full-bleed image tile with a bottom-left
 * ALL-CAPS location label. No borders, no container. For tight image grids.
 */
function DestinationTile({
  image,
  name,
  kicker,
  ratio = "3 / 4",
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    onClick: onClick,
    style: {
      position: "relative",
      display: "block",
      overflow: "hidden",
      cursor: "pointer",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    label: name,
    ratio: ratio,
    overlay: true,
    zoomOnHover: true,
    iconOnly: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      bottom: 18,
      right: 20,
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      color: "var(--gold-300)"
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-md)/1.1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "var(--white)"
    }
  }, name)));
}
Object.assign(__ds_scope, { DestinationTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/DestinationTile.jsx", error: String((e && e.message) || e) }); }

// components/travel/StepItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Savera StepItem — one numbered step in the "How to book" row.
 * Sage-green numbered circle, bold title, muted description.
 */
function StepItem({
  number,
  title,
  children,
  onDark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-circle)",
      background: "var(--sage-500)",
      color: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--fw-black) var(--fs-lg)/1 var(--font-sans)"
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-md)/1.25 var(--font-sans)",
      color: onDark ? "var(--white)" : "var(--text-strong)"
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body-sm)",
      color: onDark ? "var(--sage-300)" : "var(--text-muted)",
      maxWidth: "34ch"
    }
  }, children)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/travel/WishlistButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Savera WishlistButton — circular white heart toggle, top-left of trip cards. */
function WishlistButton({
  active = false,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size] || dims.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": active,
    "aria-label": active ? "Remove from wishlist" : "Add to wishlist",
    onClick: e => {
      e.stopPropagation();
      onChange && onChange(!active);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      borderRadius: "var(--radius-circle)",
      background: "var(--white)",
      border: "none",
      boxShadow: "var(--shadow-sm)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transform: hover ? "scale(1.08)" : "scale(1)",
      transition: "transform var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: d * 0.42,
    height: d * 0.42,
    viewBox: "0 0 24 24",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.7-10-9.2C0.4 8.7 1.9 5 5.3 5c2 0 3.4 1.1 4.7 2.7C11.3 6.1 12.7 5 14.7 5 18.1 5 19.6 8.7 22 11.8 19.5 16.3 12 21 12 21z",
    fill: active ? "var(--danger)" : "none",
    stroke: active ? "var(--danger)" : "var(--forest-800)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { WishlistButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/WishlistButton.jsx", error: String((e && e.message) || e) }); }

// components/travel/TripCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PlaneIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z",
  fill: "currentColor"
}));
const LodgeIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 11l9-6 9 6",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10v9h14v-9",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 19v-4.5h5V19",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinejoin: "round"
}));

/**
 * Savera TripCard — dark photographic itinerary card.
 * Wishlist heart top-left, gold duration badge top-right, gradient-overlaid
 * country / title / price block at the bottom.
 */
function TripCard({
  image,
  country,
  title,
  duration,
  guidePrice,
  includesFlights = true,
  includesLodges = true,
  saved = false,
  onSave,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: "relative",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    label: `${title || country || "Safari"} `,
    ratio: "3 / 4",
    overlayStrong: true,
    zoomOnHover: true,
    iconOnly: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      right: 14,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.WishlistButton, {
    active: saved,
    onChange: onSave
  }), duration && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "gold"
  }, duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, country && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: "var(--sage-300)"
    }
  }, country), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--fw-bold) var(--fs-lg)/1.18 var(--font-sans)",
      color: "var(--white)",
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginTop: "4px",
      color: "var(--sage-200)"
    }
  }, includesFlights && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(PlaneIcon, null), " Flights"), includesLodges && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(LodgeIcon, null), " Lodges")), guidePrice && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px",
      marginTop: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)",
      color: "var(--sage-300)",
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, "Guide price"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-md)/1 var(--font-sans)",
      color: "var(--white)"
    }
  }, guidePrice))));
}
Object.assign(__ds_scope, { TripCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/TripCard.jsx", error: String((e && e.message) || e) }); }

// guidelines/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/detail.jsx
try { (() => {
// Savera website — Trip detail page + Enquiry flow.
const HD = window.SaveraDesignSystem_d2991c;
const Ig = window.SaveraIcons;
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 40px",
    ...style
  }
}, children);
function TripHero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 520,
      marginTop: -84,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--golden-hour)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-photo-strong)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      paddingBottom: 48,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(HD.Badge, {
    variant: "gold"
  }, "10 Nights"), /*#__PURE__*/React.createElement(HD.Badge, {
    variant: "glass"
  }, "Best seller")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--gold-300)",
      marginBottom: 12
    }
  }, "Botswana \xB7 Okavango & Chobe"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "300 clamp(40px,5vw,60px)/1.08 var(--font-sans)",
      textTransform: "uppercase",
      color: "#fff",
      letterSpacing: "var(--ls-heading)",
      maxWidth: 820,
      textWrap: "balance"
    }
  }, "Okavango & Chobe in Style"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 22,
      color: "#fff",
      flexWrap: "wrap"
    }
  }, [[/*#__PURE__*/React.createElement(Ig.Pin, {
    s: 18
  }), "Maun → Kasane"], [/*#__PURE__*/React.createElement(Ig.Cal, {
    s: 18
  }), "Best May–Oct"], [/*#__PURE__*/React.createElement(Ig.Lodge, {
    s: 18
  }), "3 luxury camps"], [/*#__PURE__*/React.createElement(Ig.Users, {
    s: 18
  }), "Private guided"]].map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--fw-regular) var(--fs-sm)/1 var(--font-sans)",
      color: "rgba(255,255,255,0.92)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-300)"
    }
  }, ic), t)))));
}
function ItineraryList() {
  const days = [["Days 1–2", "Arrival in Maun & the Delta", "Fly into Maun and transfer by light aircraft to your first camp, deep in the Okavango's water channels."], ["Days 3–5", "Okavango Delta", "Mokoro excursions at golden hour, walking safaris, and big-game drives across seasonal floodplains."], ["Days 6–8", "Linyanti & Savuti", "Predator country — wild dog, lion and leopard amid the channels of the Linyanti."], ["Days 9–10", "Chobe Riverfront", "Boat safaris among vast elephant herds, then a final sundowner over the river before departure."]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, days.map(([d, t, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: 28,
      padding: "28px 0",
      borderTop: "1px solid var(--border-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--gold-600)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--heading-3)",
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body)",
      color: "var(--text-body)"
    }
  }, desc)))));
}
function PriceCard({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 100,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--pad-lg)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Guide price from"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-black) var(--fs-2xl)/1 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, "\xA38,450"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--body-sm)",
      color: "var(--text-muted)"
    }
  }, "per person"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [[/*#__PURE__*/React.createElement(Ig.Plane, {
    s: 16
  }), "International & internal flights"], [/*#__PURE__*/React.createElement(Ig.Lodge, {
    s: 16
  }), "10 nights full-board luxury"], [/*#__PURE__*/React.createElement(Ig.Compass, {
    s: 16
  }), "Private expert guiding"], [/*#__PURE__*/React.createElement(Ig.Shield, {
    s: 16
  }), "ATOL financial protection"]].map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      font: "var(--body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sage-600)"
    }
  }, ic), t))), /*#__PURE__*/React.createElement(HD.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => onNav("enquiry")
  }, "Enquire now"), /*#__PURE__*/React.createElement(HD.Button, {
    variant: "ghost",
    fullWidth: true
  }, "Download itinerary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      paddingTop: 4,
      borderTop: "1px solid var(--border-light)"
    }
  }, /*#__PURE__*/React.createElement(HD.Avatar, {
    name: "Thabo Nkosi",
    size: 40,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--body-sm)",
      color: "var(--text-muted)"
    }
  }, "Your specialist"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-sm)/1.2 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, "Thabo Nkosi"))));
}
function TripDetail({
  onNav
}) {
  const [tab, setTab] = React.useState("itinerary");
  const overview = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--fw-regular) var(--fs-md)/1.7 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, "A ten-night odyssey through Botswana's greatest wilderness \u2014 from the labyrinthine water channels of the Okavango to the elephant-thronged banks of the Chobe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 8
    }
  }, ["Walking safari", "Mokoro", "Big cats", "Wild dog", "Photography", "Honeymoon"].map((t, i) => /*#__PURE__*/React.createElement(HD.Tag, {
    key: i
  }, t))));
  const lodges = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, ["Delta Water Camp", "Linyanti Bush Camp", "Chobe River Lodge"].map((n, i) => /*#__PURE__*/React.createElement(HD.Card, {
    key: i,
    padding: "none",
    media: /*#__PURE__*/React.createElement(HD.Photo, {
      ratio: "4/3",
      label: n
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 4px",
      font: "var(--heading-3)",
      color: "var(--text-strong)"
    }
  }, n), /*#__PURE__*/React.createElement(HD.StarRating, {
    value: 5,
    size: 15
  })))));
  const map = /*#__PURE__*/React.createElement(HD.Photo, {
    ratio: "21/9",
    label: "Route map \u2014 Maun to Kasane",
    radius: "var(--radius-md)"
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TripHero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "64px 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HD.Tabs, {
    onChange: setTab,
    value: tab,
    items: [{
      value: "overview",
      label: "Overview",
      content: overview
    }, {
      value: "itinerary",
      label: "Day by day",
      content: /*#__PURE__*/React.createElement(ItineraryList, null)
    }, {
      value: "lodges",
      label: "Lodges",
      content: lodges
    }, {
      value: "map",
      label: "Map",
      content: map
    }]
  })), /*#__PURE__*/React.createElement(PriceCard, {
    onNav: onNav
  })))));
}
function EnquiryPage({
  onNav
}) {
  const [sent, setSent] = React.useState(false);
  const [board, setBoard] = React.useState("luxury");
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-warm)",
      padding: "112px 0 var(--section-y)",
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      padding: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--gold-600)",
      marginBottom: 12
    }
  }, "Enquiry"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 8px",
      font: "var(--fw-light) var(--fs-2xl)/1.15 var(--font-sans)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Design your journey"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      font: "var(--body)",
      color: "var(--text-muted)"
    }
  }, "Tell us a little about your dream trip and a specialist will be in touch within 24 hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(HD.Input, {
    label: "First name",
    placeholder: "Jane",
    required: true
  }), /*#__PURE__*/React.createElement(HD.Input, {
    label: "Last name",
    placeholder: "Okoro",
    required: true
  }), /*#__PURE__*/React.createElement(HD.Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(HD.Input, {
    label: "Phone",
    type: "tel",
    placeholder: "+44\u2026"
  }), /*#__PURE__*/React.createElement(HD.Select, {
    label: "Destination",
    options: ["Botswana", "Kenya", "Tanzania", "South Africa", "India", "Not sure yet"],
    placeholder: "Where to?"
  }), /*#__PURE__*/React.createElement(HD.Select, {
    label: "Travel month",
    options: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1.4 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "Style of travel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }
  }, [["luxury", "Luxury"], ["premium", "Premium"], ["ultra", "Ultra-luxury"]].map(([v, l]) => /*#__PURE__*/React.createElement(HD.Radio, {
    key: v,
    name: "style",
    value: v,
    label: l,
    checked: board === v,
    onChange: () => setBoard(v)
  })))), /*#__PURE__*/React.createElement(HD.Textarea, {
    label: "Tell us about your dream trip",
    rows: 4,
    placeholder: "Who's travelling, special occasions, must-sees\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "20px 0 28px"
    }
  }, /*#__PURE__*/React.createElement(HD.Checkbox, {
    label: "I'd like to receive the Savera journal and trip ideas",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  })), /*#__PURE__*/React.createElement(HD.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true)
  }, "Send enquiry")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--forest-800)",
      borderRadius: "var(--radius-md)",
      padding: "28px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--gold-300)",
      marginBottom: 8
    }
  }, "no obligation"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body-sm)",
      color: "var(--sage-300)"
    }
  }, "Every enquiry is handled by a destination specialist \u2014 not a call centre. Expert advice, honest guidance, beautiful trips.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "4px 8px"
    }
  }, [[/*#__PURE__*/React.createElement(Ig.Shield, {
    s: 20
  }), "ATOL financial protection"], [/*#__PURE__*/React.createElement(Ig.Award, {
    s: 20
  }), "Certified B Corp"], [/*#__PURE__*/React.createElement(Ig.Compass, {
    s: 20
  }), "24/7 on-the-ground support"]].map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      font: "var(--body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sage-600)"
    }
  }, ic), t)))))), /*#__PURE__*/React.createElement(HD.Dialog, {
    open: sent,
    onClose: () => {
      setSent(false);
      onNav("home");
    },
    eyebrow: "Enquiry sent",
    title: "Thank you \u2014 we're on it",
    footer: /*#__PURE__*/React.createElement(HD.Button, {
      onClick: () => {
        setSent(false);
        onNav("home");
      }
    }, "Back to home")
  }, "A Savera specialist will be in touch within 24 hours to start designing your tailor-made journey."));
}
Object.assign(window, {
  SaveraTripDetail: TripDetail,
  SaveraEnquiryPage: EnquiryPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
// Savera website — homepage sections, composed into HomePage.
const HS = window.SaveraDesignSystem_d2991c;
const Icn = window.SaveraIcons;
const Wrap = ({
  children,
  bg,
  py = "var(--section-y)",
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: bg,
    padding: `${py} 40px`,
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto"
  }
}, children));

// Cursive script line that sits ABOVE every section heading (the brand signature).
const ScriptAccent = ({
  children,
  dark
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-script)",
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 1,
    color: dark ? "var(--gold-300)" : "var(--gold-600)"
  }
}, children);
// Section headings: LIGHT-weight, widely-tracked uppercase, centered by default.
const SectionHead = ({
  eyebrow,
  title,
  intro,
  dark,
  align = "center"
}) => {
  const center = align === "center";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginBottom: 48,
      alignItems: center ? "center" : "flex-start",
      textAlign: center ? "center" : "left",
      maxWidth: center ? 680 : "none",
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement(ScriptAccent, {
    dark: dark
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--fw-light) var(--fs-2xl)/1.15 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-heading)",
      color: dark ? "#fff" : "var(--text-strong)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body)",
      color: dark ? "var(--sage-300)" : "var(--text-muted)",
      maxWidth: "62ch"
    }
  }, intro));
};
function FeatureBand() {
  const items = [[/*#__PURE__*/React.createElement(Icn.Compass, {
    s: 28
  }), "Expert-led", "Every journey designed by a specialist who has travelled it."], [/*#__PURE__*/React.createElement(Icn.Leaf, {
    s: 28
  }), "Conservation-first", "A share of every trip funds frontline conservation."], [/*#__PURE__*/React.createElement(Icn.Shield, {
    s: 28
  }), "Fully protected", "ATOL-bonded with 24/7 on-the-ground support."], [/*#__PURE__*/React.createElement(Icn.Binoculars, {
    s: 28
  }), "Truly tailor-made", "No two Savera itineraries are ever the same."]];
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--forest-800)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "your adventure, our expertise",
    title: "Why travel with Savera?",
    dark: true,
    intro: "For over fifteen years we have curated tailor-made journeys across Africa and the Indian Subcontinent \u2014 designed by specialists who have walked the same trails and watched the same sunsets."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 40
    }
  }, items.map(([icon, t, d], i) => /*#__PURE__*/React.createElement(HS.FeatureIcon, {
    key: i,
    icon: icon,
    title: t
  }, d))));
}
function DestinationGrid({
  onNav
}) {
  const dests = [["Okavango Delta", "Botswana", "2 / 3"], ["Maasai Mara", "Kenya", "2 / 3"], ["Serengeti", "Tanzania", "2 / 3"], ["Ranthambore", "India", "2 / 3"], ["Kruger", "South Africa", "2 / 3"], ["Bwindi", "Uganda", "2 / 3"]];
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--surface-page)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "discover the beauty of the wild",
    title: "Our wild places",
    intro: "Six landscapes we know intimately \u2014 and dozens more beyond them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 8
    }
  }, dests.map(([name, kicker, r], i) => /*#__PURE__*/React.createElement(HS.DestinationTile, {
    key: i,
    name: name,
    kicker: kicker,
    ratio: r,
    onClick: () => onNav("detail")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(HS.Button, {
    variant: "secondary",
    onClick: () => onNav("detail")
  }, "View all destinations")));
}
function TripRail({
  onNav
}) {
  const trips = [["Botswana", "Okavango & Chobe in Style", "10 Nights", "£8,450 pp"], ["Tanzania", "The Great Migration Safari", "8 Nights", "£7,200 pp"], ["India", "Tigers of Ranthambore", "6 Nights", "£4,950 pp"], ["Kenya", "Mara & the Rift Valley", "9 Nights", "£7,800 pp"]];
  const [saved, setSaved] = React.useState({});
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--surface-warm)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "simply inspiring",
    title: "Signature journeys",
    intro: "A starting point for your own tailor-made trip \u2014 every Savera itinerary is shaped around you."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, trips.map(([c, t, d, p], i) => /*#__PURE__*/React.createElement(HS.TripCard, {
    key: i,
    country: c,
    title: t,
    duration: d,
    guidePrice: p,
    saved: !!saved[i],
    onSave: () => setSaved(s => ({
      ...s,
      [i]: !s[i]
    })),
    onClick: () => onNav("detail")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(HS.Button, {
    variant: "secondary",
    onClick: () => onNav("detail")
  }, "View more journeys")));
}
function ReviewBand() {
  const cols = [["Feefo", 5, "2,140 reviews", "Platinum Trusted Service"], ["Tripadvisor", 5, "1,884 reviews", "Travellers' Choice 2026"], ["Google", 5, "960 reviews", "Rated Excellent"]];
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--forest-900)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)"
    }
  }, cols.map(([name, stars, count, sub], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      textAlign: "center",
      padding: "0 32px",
      borderRight: i < 2 ? "1px solid var(--divider-on-dark)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-light) var(--fs-lg)/1 var(--font-sans)",
      color: "#fff",
      letterSpacing: "var(--ls-heading)",
      textTransform: "uppercase"
    }
  }, name), /*#__PURE__*/React.createElement(HS.StarRating, {
    value: stars,
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--body-sm)",
      color: "var(--sage-300)"
    }
  }, sub), /*#__PURE__*/React.createElement("a", {
    style: {
      font: "var(--fw-bold) var(--fs-sm)/1 var(--font-sans)",
      color: "var(--sage-400)",
      cursor: "pointer",
      borderBottom: "1px solid var(--sage-600)",
      paddingBottom: 2
    }
  }, count)))));
}
function FeatureBanner({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 540,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--bush-dusk)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at center, rgba(22,32,29,0.2) 0%, rgba(22,32,29,0.75) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      color: "#fff",
      maxWidth: 680,
      padding: "0 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Icn.Award, {
    s: 44,
    c: "var(--gold-300)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--gold-300)"
    }
  }, "your once-in-a-lifetime"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--fw-light) var(--fs-2xl)/1.15 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Travel that gives back"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body)",
      color: "rgba(255,255,255,0.9)"
    }
  }, "As a certified B Corp, we channel a share of every journey into the communities and conservancies that protect these wild places."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: 30,
      color: "var(--gold-300)"
    }
  }, "\u201CThe wild is worth more alive.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--sage-300)"
    }
  }, "\u2014 Amara Singh, Founder"), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("home"),
    style: {
      marginTop: 8
    }
  }, "Our promise")));
}
function HowToBook() {
  const steps = [["Share your dream", "Tell us where, when and who's travelling."], ["Design together", "Your specialist crafts a tailor-made route."], ["Refine the detail", "Adjust lodges, pace and budget until it sings."], ["Go wild", "Travel with 24/7 on-the-ground support."]];
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--forest-800)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "your taste of the wild",
    title: "How it works",
    dark: true,
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement(HS.StepItem, {
    key: i,
    number: i + 1,
    title: t
  }, d))));
}
function GuideGrid({
  onNav
}) {
  const posts = [["Field notes", "May 2026", "When to see the Great Migration river crossings"], ["Guide", "Apr 2026", "Choosing your first safari camp: a specialist's view"], ["Conservation", "Mar 2026", "How responsible tourism funds the wild"]];
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--surface-page)"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "always astonishing",
    title: "Luxury travel guides",
    intro: "Stories, field notes and expert advice from the people who travel these wild places year-round."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 28
    }
  }, posts.map(([c, d, t], i) => /*#__PURE__*/React.createElement(HS.BlogCard, {
    key: i,
    category: c,
    date: d,
    title: t,
    onClick: () => onNav("home")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(HS.Button, {
    variant: "secondary",
    onClick: () => onNav("home")
  }, "View all guides")));
}
function EnquiryStrip({
  onNav
}) {
  return /*#__PURE__*/React.createElement(Wrap, {
    bg: "var(--sage-600)",
    py: "64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--gold-300)"
    }
  }, "start your unique journey"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--fw-light) var(--fs-2xl)/1.1 var(--font-sans)",
      textTransform: "uppercase",
      color: "#fff",
      letterSpacing: "var(--ls-heading)"
    }
  }, "Ready to explore more?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body)",
      color: "rgba(255,255,255,0.9)"
    }
  }, "Speak to a specialist today \u2014 no obligation, just expert guidance.")), /*#__PURE__*/React.createElement(HS.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("enquiry")
  }, "Enquire now")));
}
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SaveraHero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(FeatureBand, null), /*#__PURE__*/React.createElement(DestinationGrid, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(TripRail, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(ReviewBand, null), /*#__PURE__*/React.createElement(FeatureBanner, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(HowToBook, null), /*#__PURE__*/React.createElement(GuideGrid, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(EnquiryStrip, {
    onNav: onNav
  }));
}
window.SaveraHomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Savera UI kit — shared line-art icons (golden, stroke style) + small helpers.
// Each is a stroke SVG sized via the `s` prop. Registered on window for cross-script use.
const Ic = {
  Compass: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.5l-2 5-5 2 2-5z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })),
  Leaf: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 19c0-8 6-14 14-14 0 8-6 14-14 14z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 19c4-4 7-6 11-8",
    stroke: c,
    strokeWidth: "1.5"
  })),
  Shield: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  Binoculars: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 6h3v9a2.5 2.5 0 0 1-5 0l1-7",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 6h-3v9a2.5 2.5 0 0 0 5 0l-1-7",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9h4",
    stroke: c,
    strokeWidth: "1.5"
  })),
  Plane: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z",
    fill: c
  })),
  Lodge: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 11l9-6 9 6",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v9h14v-9",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 19v-4.5h5V19",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })),
  Map: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4v14M15 6v14",
    stroke: c,
    strokeWidth: "1.5"
  })),
  Cal: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "15",
    rx: "1.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9h16M8 3v4M16 3v4",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })),
  Users: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 19a5.5 5.5 0 0 1 11 0",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6a3 3 0 0 1 0 6M17 14.5a5.5 5.5 0 0 1 3.5 4.5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })),
  Pin: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21c4-5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6 7 11z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5",
    stroke: c,
    strokeWidth: "1.5"
  })),
  ArrowRight: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h15M13 6l6 6-6 6",
    stroke: c,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  ArrowLeft: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 12H5M11 6l-6 6 6 6",
    stroke: c,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  Menu: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })),
  Search: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: c,
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16l4 4",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })),
  Award: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "5.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })),
  Quote: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 7H5a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h1v1a2 2 0 0 1-2 2H4v2h0a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1zm11 0h-4a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h1v1a2 2 0 0 1-2 2h0v2h0a4 4 0 0 0 4-4V8a1 1 0 0 0-1-1z"
  })),
  Sun: ({
    s = 24,
    c = "currentColor"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5",
    stroke: c,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))
};
window.SaveraIcons = Ic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shell.jsx
try { (() => {
// Savera website — shell pieces: Logo, Header, Hero, Footer.
const {
  Button,
  IconButton
} = window.SaveraDesignSystem_d2991c;
const I = window.SaveraIcons;
function Logo({
  width = 168,
  light = false
}) {
  const stroke = light ? "#D9B566" : "#C99A3F";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 64",
    width: width,
    "aria-label": "Savera",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: stroke,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "30",
    r: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "32",
    y1: "6",
    x2: "32",
    y2: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "13",
    x2: "18.5",
    y2: "16.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "49",
    y1: "13",
    x2: "45.5",
    y2: "16.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "30",
    x2: "13",
    y2: "30"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "51",
    y1: "30",
    x2: "56",
    y2: "30"
  })), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "48",
    x2: "58",
    y2: "48",
    stroke: stroke,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "74",
    y: "40",
    fontFamily: "Lato, sans-serif",
    fontWeight: "900",
    fontSize: "30",
    letterSpacing: "6",
    fill: light ? "#fff" : "var(--forest-900)"
  }, "SAVERA"));
}
function NavLink({
  children,
  onClick,
  active
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: "pointer",
      font: "var(--fw-bold) var(--fs-xs)/1 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "#fff",
      paddingBottom: 4,
      borderBottom: `2px solid ${active || h ? "var(--gold-400)" : "transparent"}`,
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, children);
}
function Header({
  scrolled,
  onNav,
  route
}) {
  const nav = [["Destinations", "home"], ["Trips", "detail"], ["Experiences", "home"], ["Journal", "home"], ["About", "home"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      background: scrolled ? "var(--forest-800)" : "transparent",
      boxShadow: scrolled ? "0 2px 18px rgba(0,0,0,0.25)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav("home"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    light: true,
    width: 150
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, nav.map(([label, r], i) => /*#__PURE__*/React.createElement(NavLink, {
    key: i,
    active: route === r && label === "Trips",
    onClick: () => onNav(r)
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Search"
  }, /*#__PURE__*/React.createElement(I.Search, {
    s: 16
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav("enquiry")
  }, "Enquire"))));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 720,
      marginTop: -84,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--golden-hour)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(22,32,29,0.45) 0%, rgba(22,32,29,0.15) 40%, rgba(22,32,29,0.65) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 26,
      left: "50%",
      transform: "translateX(-50%)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "rgba(255,255,255,0.7)",
      font: "var(--fw-regular) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "rgba(255,255,255,0.5)"
    }
  }), " Placeholder hero \u2014 drop in golden-hour film ", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "rgba(255,255,255,0.5)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      color: "#fff",
      padding: "0 24px",
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: 34,
      color: "var(--gold-300)",
      marginBottom: 10
    }
  }, "your adventure, our expertise"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "300 clamp(38px, 5vw, 60px)/1.12 var(--font-sans)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-heading)",
      textWrap: "balance"
    }
  }, "Tailor-made travel experiences"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px auto 32px",
      maxWidth: 540,
      font: "var(--fw-regular) var(--fs-md)/1.6 var(--font-sans)",
      color: "rgba(255,255,255,0.92)"
    }
  }, "Every journey is hand-crafted by a specialist who has travelled it \u2014 from the Okavango at dawn to a tiger's first light in Ranthambore."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("enquiry")
  }, "Start your journey"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onDark: true,
    onClick: () => onNav("home"),
    trailingIcon: /*#__PURE__*/React.createElement(I.ArrowRight, {
      s: 16
    })
  }, "Browse trips"))));
}
function Footer({
  onNav
}) {
  const cols = [["Destinations", ["Botswana", "Kenya", "Tanzania", "South Africa", "India"]], ["Experiences", ["Walking safaris", "Family journeys", "Honeymoons", "Conservation", "Photography"]], ["Savera", ["About us", "Our specialists", "The journal", "Sustainability", "Contact"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--forest-950)",
      color: "#fff",
      padding: "72px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
      gap: 40,
      paddingBottom: 48,
      borderBottom: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    light: true,
    width: 168
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--body-sm)",
      color: "var(--sage-300)",
      maxWidth: "30ch"
    }
  }, "Tailor-made journeys into the wild, designed by people who know it intimately."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--gold-300)"
    }
  }, "beautifully wild")), cols.map(([h, items], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--fs-2xs)/1 var(--font-sans)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    }
  }, h), items.map((it, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    onClick: () => onNav("home"),
    style: {
      cursor: "pointer",
      font: "var(--body-sm)",
      color: "var(--sage-200)"
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 24,
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-xs)/1 var(--font-sans)",
      color: "var(--sage-400)"
    }
  }, "\xA9 2026 Savera Luxury Travel \xB7 ATOL protected \xB7 A certified B Corp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      font: "var(--fw-regular) var(--fs-xs)/1 var(--font-sans)",
      color: "var(--sage-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Financial protection")))));
}
Object.assign(window, {
  SaveraLogo: Logo,
  SaveraHeader: Header,
  SaveraHero: Hero,
  SaveraFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.DestinationTile = __ds_scope.DestinationTile;

__ds_ns.FeatureIcon = __ds_scope.FeatureIcon;

__ds_ns.Photo = __ds_scope.Photo;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.TripCard = __ds_scope.TripCard;

__ds_ns.WishlistButton = __ds_scope.WishlistButton;

})();
