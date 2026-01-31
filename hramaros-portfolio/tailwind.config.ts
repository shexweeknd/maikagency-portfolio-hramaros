import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          50: "#F3F0FF",
          100: "#E9E3FF",
          200: "#D4C7FF",
          300: "#BEABFF",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        dark: {
          DEFAULT: "#0A0A0F",
          50: "#18181B",
          100: "#1F1F23",
          200: "#27272A",
          300: "#3F3F46",
          400: "#52525B",
          500: "#9CA3AF",  // Amélioré pour contraste WCAG AA (était #71717A)
          600: "#D1D5DB",  // Amélioré pour contraste WCAG AA (était #A1A1AA)
          700: "#E5E7EB",
          800: "#F3F4F6",
          900: "#F9FAFB",
        },
        // Couleurs sémantiques
        success: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          500: "#10B981",
          600: "#059669",
        },
        warning: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          500: "#F59E0B",
          600: "#D97706",
        },
        error: {
          DEFAULT: "#EF4444",
          50: "#FEF2F2",
          500: "#EF4444",
          600: "#DC2626",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "Consolas", "monospace"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        typing: "typing 3.5s steps(40, end)",
        "blink-caret": "blink-caret .75s step-end infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        tilt: "tilt 10s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #0066FF, 0 0 10px #0066FF, 0 0 15px #0066FF",
          },
          "100%": {
            boxShadow: "0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 102, 255, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
          },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#0066FF" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0066FF 0%, #8B5CF6 50%, #0066FF 100%)",
        shimmer:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};

export default config;
