/**
 * Design Tokens - Centralized Design System
 * =========================================
 * This file contains all the design tokens used throughout the portfolio.
 * Import these values for consistency across components.
 */

// Color tokens
export const colors = {
  // Primary palette - Blue
  primary: {
    50: "#E6F0FF",
    100: "#CCE0FF",
    200: "#99C2FF",
    300: "#66A3FF",
    400: "#3385FF",
    500: "#0066FF", // Main primary
    600: "#0052CC",
    700: "#003D99",
    800: "#002966",
    900: "#001433",
  },

  // Accent palette - Purple
  accent: {
    50: "#F3F0FF",
    100: "#E9E3FF",
    200: "#D4C7FF",
    300: "#BEABFF",
    400: "#A78BFA",
    500: "#8B5CF6", // Main accent
    600: "#7C3AED",
    700: "#6D28D9",
    800: "#5B21B6",
    900: "#4C1D95",
  },

  // Dark theme palette
  dark: {
    DEFAULT: "#0A0A0F",
    50: "#18181B",
    100: "#1F1F23",
    200: "#27272A",
    300: "#3F3F46",
    400: "#52525B",
    500: "#9CA3AF", // WCAG AA compliant
    600: "#D1D5DB", // WCAG AA compliant
    700: "#E5E7EB",
    800: "#F3F4F6",
    900: "#F9FAFB",
  },

  // Semantic colors
  success: {
    light: "#ECFDF5",
    DEFAULT: "#10B981",
    dark: "#059669",
  },
  warning: {
    light: "#FFFBEB",
    DEFAULT: "#F59E0B",
    dark: "#D97706",
  },
  error: {
    light: "#FEF2F2",
    DEFAULT: "#EF4444",
    dark: "#DC2626",
  },
} as const;

// Spacing tokens (in pixels, for reference)
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "2px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
} as const;

// Typography tokens
export const typography = {
  fontFamily: {
    sans: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    mono: 'var(--font-fira-code), Consolas, "Courier New", monospace',
    serif: 'var(--font-playfair), Georgia, serif',
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1.2" }],
    "6xl": ["3.75rem", { lineHeight: "1.1" }],
    "7xl": ["4.5rem", { lineHeight: "1.1" }],
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
} as const;

// Animation tokens
export const animations = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

// Shadow tokens
export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  glow: {
    primary: `0 0 20px ${colors.primary[500]}40, 0 0 40px ${colors.primary[500]}20`,
    accent: `0 0 20px ${colors.accent[500]}40, 0 0 40px ${colors.accent[500]}20`,
  },
} as const;

// Border radius tokens
export const borderRadius = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  full: "9999px",
} as const;

// Glass morphism presets
export const glass = {
  subtle: {
    background: "rgba(24, 24, 27, 0.4)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(63, 63, 70, 0.3)",
  },
  DEFAULT: {
    background: "rgba(24, 24, 27, 0.6)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(63, 63, 70, 0.5)",
  },
  strong: {
    background: "rgba(24, 24, 27, 0.8)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(63, 63, 70, 0.6)",
  },
} as const;

// Z-index tokens
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  skipLink: 9999,
} as const;

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Helper function to get CSS variable
export function cssVar(name: string): string {
  return `var(--${name})`;
}

// Helper to create gradient strings
export function gradient(
  direction: string,
  ...colors: string[]
): string {
  return `linear-gradient(${direction}, ${colors.join(", ")})`;
}

// Predefined gradients
export const gradients = {
  primary: gradient("135deg", colors.primary[500], colors.accent[500]),
  hero: gradient("135deg", colors.primary[500], colors.accent[500], colors.primary[500]),
  text: gradient("135deg", colors.primary[400], colors.accent[400]),
  glow: gradient("135deg", `${colors.primary[500]}40`, `${colors.accent[500]}40`),
} as const;

// Export all tokens as a single object for convenience
export const designTokens = {
  colors,
  spacing,
  typography,
  animations,
  shadows,
  borderRadius,
  glass,
  zIndex,
  breakpoints,
  gradients,
} as const;

export default designTokens;
