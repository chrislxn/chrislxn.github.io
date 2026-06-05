import { c as createComponent, b as VALID_INPUT_FORMATS } from './consts_j-qpiIKK.mjs';
import { U as renderTemplate, H as renderSlot, bd as renderHead, a5 as addAttribute, bb as unescapeHTML, aA as generateCspDigest, be as removeBase, b0 as isRemotePath, bf as object, bg as date, bh as array, A as AstroError, bi as UnknownContentCollectionError, bj as string } from './sequence_DTZMoSxv.mjs';
import { r as renderComponent, s as spreadAttributes, u as unflatten } from './entrypoint_82Fn5_1B.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { MailIcon, House, Library, ChevronRight } from 'lucide-react';
import { ThemeProvider as ThemeProvider$1, useTheme } from 'next-themes';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
import { createContext, useRef, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useMotionValue, motion, useTransform, useSpring, useInView, AnimatePresence } from 'motion/react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const Icons = {
  email: (props) => /* @__PURE__ */ jsx(MailIcon, { ...props }),
  linkedin: (props) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ jsx("title", { children: "LinkedIn" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    )
  ] }),
  x: (props) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
    /* @__PURE__ */ jsx("title", { children: "X" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    )
  ] }),
  youtube: (props) => /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "32px",
      height: "32px",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx("title", { children: "youtube" }),
        /* @__PURE__ */ jsx("path", { d: "M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" })
      ]
    }
  ),
  github: (props) => /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 438.549 438.549",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      ...props,
      children: [
        /* @__PURE__ */ jsx("title", { children: "GitHub" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
          }
        )
      ]
    }
  )};

const DATA = {
  name: "Alex Mercer - Software Engineer",
  description: "Full-stack engineer turned indie founder. I love building developer tools, fast UIs, and products people actually use.",
  ogImage: "/og_image.png",
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" }
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true
      },
      email: {
        name: "Send Email",
        url: "mailto:alex@alexmercer.dev",
        icon: Icons.email,
        navbar: false
      }
    }
  }};

const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://alexmercer.dev",
    locale: "en_US"},
  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n",
    // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image",
    robots: "index, follow"
  },
  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 115
  },
  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------
  theme: {
    radius: "0.625rem",
    light: {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.145 0 0)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.145 0 0)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.145 0 0)",
      primary: "oklch(0.205 0 0)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.97 0 0)",
      secondaryForeground: "oklch(0.205 0 0)",
      muted: "oklch(0.97 0 0)",
      mutedForeground: "oklch(0.556 0 0)",
      accent: "oklch(0.97 0 0)",
      accentForeground: "oklch(0.205 0 0)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.922 0 0)",
      input: "oklch(0.922 0 0)",
      ring: "oklch(0.708 0 0)"
    },
    dark: {
      background: "oklch(0.18 0 0)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.205 0 0)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.205 0 0)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.922 0 0)",
      primaryForeground: "oklch(0.205 0 0)",
      secondary: "oklch(0.269 0 0)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.269 0 0)",
      mutedForeground: "oklch(0.708 0 0)",
      accent: "oklch(0.269 0 0)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.556 0 0)"
    }
  }
};

function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsx(ThemeProvider$1, { ...props, children });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const TooltipArrow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Arrow,
  {
    ref,
    className: cn("fill-primary", className),
    ...props
  }
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 100;
const BASE_SIZE = 40;
const BASE_ICON_SIZE = 20;
const ICON_SIZE_RATIO = 0.5;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };
const DockContext = createContext(null);
const Dock = ({ className, children, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE }) => {
  const mouseX = useMotionValue(Infinity);
  return /* @__PURE__ */ jsx(DockContext.Provider, { value: { mouseX, magnification, distance }, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      onMouseMove: (e) => mouseX.set(e.pageX),
      onMouseLeave: () => mouseX.set(Infinity),
      className: cn("mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border", className),
      children
    }
  ) });
};
const DockIcon = ({ className, children }) => {
  const ref = useRef(null);
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }
  const { mouseX, magnification, distance } = context;
  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const containerSize = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [BASE_SIZE, magnification, BASE_SIZE]),
    SPRING
  );
  const iconSize = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [BASE_ICON_SIZE, magnification * ICON_SIZE_RATIO, BASE_ICON_SIZE]),
    SPRING
  );
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      style: { width: containerSize, height: containerSize },
      className: cn("relative flex aspect-square items-center justify-center rounded-full shrink-0", className),
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { width: iconSize, height: iconSize },
          className: "flex items-center justify-center",
          children
        }
      )
    }
  );
};

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function ModeToggle({ className }) {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      type: "button",
      variant: "link",
      size: "icon",
      className: cn(className),
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      children: [
        /* @__PURE__ */ jsx(SunIcon, { className: "h-full w-full" }),
        /* @__PURE__ */ jsx(MoonIcon, { className: "hidden h-full w-full" })
      ]
    }
  );
}

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

function Navbar() {
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-x-0 bottom-4 z-30", children: /* @__PURE__ */ jsxs(Dock, { className: "z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5", children: [
    DATA.navbar.map((item) => {
      const isExternal = item.href.startsWith("http");
      return /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            target: isExternal ? "_blank" : void 0,
            rel: isExternal ? "noopener noreferrer" : void 0,
            children: /* @__PURE__ */ jsx(DockIcon, { className: "rounded-2xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors", children: /* @__PURE__ */ jsx(item.icon, { className: "size-full rounded-sm overflow-hidden object-contain" }) })
          }
        ) }),
        /* @__PURE__ */ jsxs(
          TooltipContent,
          {
            side: "top",
            sideOffset: 8,
            className: "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]",
            children: [
              /* @__PURE__ */ jsx("p", { children: item.label }),
              /* @__PURE__ */ jsx(TooltipArrow, { className: "fill-primary" })
            ]
          }
        )
      ] }, item.href);
    }),
    /* @__PURE__ */ jsx(
      Separator,
      {
        orientation: "vertical",
        className: "h-2/3 m-auto w-px bg-border"
      }
    ),
    Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).map(([name, social], index) => {
      const isExternal = social.url.startsWith("http");
      const IconComponent = social.icon;
      return /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: social.url,
            target: isExternal ? "_blank" : void 0,
            rel: isExternal ? "noopener noreferrer" : void 0,
            children: /* @__PURE__ */ jsx(DockIcon, { className: "rounded-3xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors", children: /* @__PURE__ */ jsx(IconComponent, { className: "size-full rounded-sm overflow-hidden object-contain" }) })
          }
        ) }),
        /* @__PURE__ */ jsxs(
          TooltipContent,
          {
            side: "top",
            sideOffset: 8,
            className: "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]",
            children: [
              /* @__PURE__ */ jsx("p", { children: name }),
              /* @__PURE__ */ jsx(TooltipArrow, { className: "fill-primary" })
            ]
          }
        )
      ] }, `social-${name}-${index}`);
    }),
    /* @__PURE__ */ jsx(
      Separator,
      {
        orientation: "vertical",
        className: "h-2/3 m-auto w-px bg-border"
      }
    ),
    /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DockIcon, { className: "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors", children: /* @__PURE__ */ jsx(ModeToggle, { className: "size-full cursor-pointer" }) }) }),
      /* @__PURE__ */ jsxs(
        TooltipContent,
        {
          side: "top",
          sideOffset: 8,
          className: "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]",
          children: [
            /* @__PURE__ */ jsx("p", { children: "Theme" }),
            /* @__PURE__ */ jsx(TooltipArrow, { className: "fill-primary" })
          ]
        }
      )
    ] })
  ] }) });
}

function NavbarIsland() {
  return /* @__PURE__ */ jsx(ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: false, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(Navbar, {}) }) });
}

const FlickeringGrid = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color,
  width,
  height,
  className,
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [resolvedColor, setResolvedColor] = useState("rgb(0, 0, 0)");
  const resolveColor = useCallback((colorValue) => {
    if (typeof window === "undefined") {
      return "rgb(0, 0, 0)";
    }
    const colorToResolve = colorValue || "var(--foreground)";
    if (colorToResolve.startsWith("var(")) {
      const tempEl = document.createElement("div");
      tempEl.style.color = colorToResolve;
      tempEl.style.position = "absolute";
      tempEl.style.visibility = "hidden";
      document.body.appendChild(tempEl);
      const computedColor = window.getComputedStyle(tempEl).color;
      document.body.removeChild(tempEl);
      return computedColor || "rgb(0, 0, 0)";
    }
    return colorToResolve;
  }, []);
  useEffect(() => {
    const updateColor = () => {
      const resolved = resolveColor(color);
      setResolvedColor(resolved);
    };
    updateColor();
    const observer = new MutationObserver(() => {
      updateColor();
    });
    if (typeof window !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }
    return () => {
      observer.disconnect();
    };
  }, [color, resolveColor]);
  const memoizedColor = useMemo(() => {
    const toRGBA = (colorValue) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 0, 0,";
      ctx.fillStyle = colorValue;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(resolvedColor);
  }, [resolvedColor]);
  const setupCanvas = useCallback(
    (canvas, width2, height2) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width2 * dpr;
      canvas.height = height2 * dpr;
      canvas.style.width = `${width2}px`;
      canvas.style.height = `${height2}px`;
      const cols = Math.floor(width2 / (squareSize + gridGap));
      const rows = Math.floor(height2 / (squareSize + gridGap));
      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );
  const updateSquares = useCallback(
    (squares, deltaTime) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );
  const drawGrid = useCallback(
    (ctx, width2, height2, cols, rows, squares, dpr) => {
      ctx.clearRect(0, 0, width2, height2);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width2, height2);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = `${memoizedColor}${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      }
    },
    [memoizedColor, squareSize, gridGap]
  );
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let gridParams;
    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };
    updateCanvasSize();
    let lastTime = 0;
    const animate = (time) => {
      if (!isInView) return;
      const deltaTime = (time - lastTime) / 1e3;
      lastTime = time;
      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);
    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: cn(`h-full w-full ${className}`),
      ...props,
      children: /* @__PURE__ */ jsx(
        "canvas",
        {
          ref: canvasRef,
          className: "pointer-events-none",
          style: {
            width: canvasSize.width,
            height: canvasSize.height
          }
        }
      )
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = DATA.description,
    image,
    canonicalURL = Astro2.url.href
  } = Astro2.props;
  const pageTitle = title ? CONFIG.seo.titleTemplate.replace("%s", title).replace("%n", DATA.name) : DATA.name;
  const ogImage = image ? image.startsWith("http") ? image : `${CONFIG.site.url}${image}` : `${CONFIG.site.url}${DATA.ogImage}`;
  const { light, dark, radius } = CONFIG.theme;
  const { baseFontSize } = CONFIG.typography;
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><!-- FOUC prevention: apply stored theme before first paint --><script>\n      (function () {\n        try {\n          var theme = localStorage.getItem("theme");\n          if (\n            theme === "dark" ||\n            (!theme &&\n              window.matchMedia("(prefers-color-scheme: dark)").matches)\n          ) {\n            document.documentElement.classList.add("dark");\n          } else {\n            document.documentElement.classList.remove("dark");\n          }\n        } catch (_) {}\n      })();\n    <\/script><!-- Theme variables from config.ts --><style>', '</style><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico"><!-- Primary meta --><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Robots --><meta name="robots"', '><meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"><!-- OpenGraph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name"', '><meta property="og:locale"', '><meta property="og:image"', '><!-- Twitter --><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', ">", '</head> <body class="min-h-screen bg-background font-sans antialiased relative"> <!-- FlickeringGrid header background - matches template exactly --> <div class="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0"> ', ` </div> <!-- Main content wrapper - matches template's z-10 container exactly --> <div class="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6"> `, " </div> <!-- Navbar: ThemeProvider + TooltipProvider + Navbar all in one React island --> ", " </body></html>"])), addAttribute(CONFIG.site.locale.split("_")[0], "lang"), addAttribute(`font-size: ${baseFontSize}%;`, "style"), addAttribute(Astro2.generator, "content"), unescapeHTML(`
      :root {
        --radius: ${radius};
        --background: ${light.background};
        --foreground: ${light.foreground};
        --card: ${light.card};
        --card-foreground: ${light.cardForeground};
        --popover: ${light.popover};
        --popover-foreground: ${light.popoverForeground};
        --primary: ${light.primary};
        --primary-foreground: ${light.primaryForeground};
        --secondary: ${light.secondary};
        --secondary-foreground: ${light.secondaryForeground};
        --muted: ${light.muted};
        --muted-foreground: ${light.mutedForeground};
        --accent: ${light.accent};
        --accent-foreground: ${light.accentForeground};
        --destructive: ${light.destructive};
        --border: ${light.border};
        --input: ${light.input};
        --ring: ${light.ring};
      }
      .dark {
        --background: ${dark.background};
        --foreground: ${dark.foreground};
        --card: ${dark.card};
        --card-foreground: ${dark.cardForeground};
        --popover: ${dark.popover};
        --popover-foreground: ${dark.popoverForeground};
        --primary: ${dark.primary};
        --primary-foreground: ${dark.primaryForeground};
        --secondary: ${dark.secondary};
        --secondary-foreground: ${dark.secondaryForeground};
        --muted: ${dark.muted};
        --muted-foreground: ${dark.mutedForeground};
        --accent: ${dark.accent};
        --accent-foreground: ${dark.accentForeground};
        --destructive: ${dark.destructive};
        --border: ${dark.border};
        --input: ${dark.input};
        --ring: ${dark.ring};
      }
    `), pageTitle, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(CONFIG.seo.robots, "content"), addAttribute(canonicalURL, "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(DATA.name, "content"), addAttribute(CONFIG.site.locale, "content"), addAttribute(ogImage, "content"), addAttribute(CONFIG.seo.twitterCard, "content"), addAttribute(pageTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), renderHead(), renderComponent($$result, "FlickeringGrid", FlickeringGrid, { "client:load": true, "className": "h-full w-full", "squareSize": 2, "gridGap": 2, "style": {
    maskImage: "linear-gradient(to bottom, black, transparent)",
    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
  }, "client:component-hydration": "load", "client:component-path": "@/components/magicui/flickering-grid", "client:component-export": "FlickeringGrid" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/NavbarIsland", "client:component-export": "default" }));
}, "/Users/chris/Desktop/personal/chrislxn.github.io/src/layouts/Layout.astro", void 0);

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px"
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    ...inViewMargin ? { margin: inViewMargin } : {}
  });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` }
  };
  const combinedVariants = variant || defaultVariants;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      exit: "hidden",
      variants: combinedVariants,
      transition: {
        delay: 0.04 + delay,
        duration,
        ease: "easeOut"
      },
      className,
      children
    }
  ) });
};

const BLUR_FADE_DELAY = 0.04;
function BlogList({ posts, allPostsCount, pagination, pageSize }) {
  return /* @__PURE__ */ jsxs("section", { id: "blog", children: [
    /* @__PURE__ */ jsxs(BlurFade, { delay: BLUR_FADE_DELAY, children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl font-semibold tracking-tight mb-4", children: [
        "Blog",
        " ",
        /* @__PURE__ */ jsxs("span", { className: "ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm", children: [
          allPostsCount,
          " posts"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-8", children: "My personal reflections about web development, life, and more." })
    ] }),
    posts.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 2, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: posts.map((post, id) => {
        const indexNumber = (pagination.page - 1) * pageSize + id + 1;
        return /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 3 + id * 0.05, children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            href: `/blog/${post.id}`,
            children: [
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono tabular-nums font-medium mt-[5px]", children: [
                String(indexNumber).padStart(2, "0"),
                "."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "tracking-tight text-lg font-medium", children: /* @__PURE__ */ jsxs("span", { className: "group-hover:text-foreground transition-colors", children: [
                  post.title,
                  /* @__PURE__ */ jsx(
                    ChevronRight,
                    {
                      className: "ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0",
                      "aria-hidden": true
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: post.publishedAt })
              ] })
            ]
          }
        ) }, post.id);
      }) }) }),
      pagination.totalPages > 1 && /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 4, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 flex-row items-center justify-between mt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
          "Page ",
          pagination.page,
          " of ",
          pagination.totalPages
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 sm:justify-end", children: [
          pagination.hasPreviousPage ? /* @__PURE__ */ jsx(
            "a",
            {
              href: `/blog?page=${pagination.page - 1}`,
              className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              children: "Previous"
            }
          ) : /* @__PURE__ */ jsx("span", { className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed", children: "Previous" }),
          pagination.hasNextPage ? /* @__PURE__ */ jsx(
            "a",
            {
              href: `/blog?page=${pagination.page + 1}`,
              className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              children: "Next"
            }
          ) : /* @__PURE__ */ jsx("span", { className: "h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed", children: "Next" })
        ] })
      ] }) })
    ] }) : /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY * 2, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center", children: "No blog posts yet. Check back soon!" }) }) })
  ] });
}

var e=e=>Object.prototype.toString.call(e),t=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),o=t=>"[object Date]"===e(t),n=t=>"[object RegExp]"===e(t),r=t=>"[object Error]"===e(t),s=t=>"[object Boolean]"===e(t),l=t=>"[object Number]"===e(t),i=t=>"[object String]"===e(t),c=Array.isArray,u=Object.getOwnPropertyDescriptor,a=Object.prototype.propertyIsEnumerable,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.keys;function d(e){const t=h(e),o=f(e);for(let n=0;n<o.length;n++)a.call(e,o[n])&&t.push(o[n]);return t}function b(e,t){return !u(e,t)?.writable}function y(e,u){if("object"==typeof e&&null!==e){let a;if(c(e))a=[];else if(o(e))a=new Date(e.getTime?e.getTime():e);else if(n(e))a=new RegExp(e);else if(r(e))a={message:e.message};else if(s(e)||l(e)||i(e))a=Object(e);else {if(t(e))return e.slice();a=Object.create(Object.getPrototypeOf(e));}const f=u.includeSymbols?d:h;for(const t of f(e))a[t]=e[t];return a}return e}var g={includeSymbols:false,immutable:false};function m(e,t,o=g){const n=[],r=[];let s=true;const l=o.includeSymbols?d:h,i=!!o.immutable;return function e(u){const a=i?y(u,o):u,f={};let h=true;const d={node:a,node_:u,path:[].concat(n),parent:r[r.length-1],parents:r,key:n[n.length-1],isRoot:0===n.length,level:n.length,circular:void 0,isLeaf:false,notLeaf:true,notRoot:true,isFirst:false,isLast:false,update:function(e,t=false){d.isRoot||(d.parent.node[d.key]=e),d.node=e,t&&(h=false);},delete:function(e){delete d.parent.node[d.key],e&&(h=false);},remove:function(e){c(d.parent.node)?d.parent.node.splice(d.key,1):delete d.parent.node[d.key],e&&(h=false);},keys:null,before:function(e){f.before=e;},after:function(e){f.after=e;},pre:function(e){f.pre=e;},post:function(e){f.post=e;},stop:function(){s=false;},block:function(){h=false;}};if(!s)return d;function g(){if("object"==typeof d.node&&null!==d.node){d.keys&&d.node_===d.node||(d.keys=l(d.node)),d.isLeaf=0===d.keys.length;for(let e=0;e<r.length;e++)if(r[e].node_===u){d.circular=r[e];break}}else d.isLeaf=true,d.keys=null;d.notLeaf=!d.isLeaf,d.notRoot=!d.isRoot;}g();const m=t(d,d.node);if(void 0!==m&&d.update&&d.update(m),f.before&&f.before(d,d.node),!h)return d;if("object"==typeof d.node&&null!==d.node&&!d.circular){r.push(d),g();for(const[t,o]of Object.entries(d.keys??[])){n.push(o),f.pre&&f.pre(d,d.node[o],o);const r=e(d.node[o]);i&&p.call(d.node,o)&&!b(d.node,o)&&(d.node[o]=r.node),r.isLast=!!d.keys?.length&&+t==d.keys.length-1,r.isFirst=0==+t,f.post&&f.post(d,r),n.pop();}r.pop();}return f.after&&f.after(d,d.node),d}(e).node}var j=class{#e;#t;constructor(e,t=g){this.#e=e,this.#t=t;}get(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return;t=t[n];}return t}has(e){let t=this.#e;for(let o=0;t&&o<e.length;o++){const n=e[o];if(!p.call(t,n)||!this.#t.includeSymbols&&"symbol"==typeof n)return  false;t=t[n];}return  true}set(e,t){let o=this.#e,n=0;for(n=0;n<e.length-1;n++){const t=e[n];p.call(o,t)||(o[t]={}),o=o[t];}return o[e[n]]=t,t}map(e){return m(this.#e,e,{immutable:true,includeSymbols:!!this.#t.includeSymbols})}forEach(e){return this.#e=m(this.#e,e,this.#t),this.#e}reduce(e,t){const o=1===arguments.length;let n=o?this.#e:t;return this.forEach(((t,r)=>{t.isRoot&&o||(n=e(t,n,r));})),n}paths(){const e=[];return this.forEach((t=>{e.push(t.path);})),e}nodes(){const e=[];return this.forEach((t=>{e.push(t.node);})),e}clone(){const e=[],o=[],n=this.#t;return t(this.#e)?this.#e.slice():function t(r){for(let t=0;t<e.length;t++)if(e[t]===r)return o[t];if("object"==typeof r&&null!==r){const s=y(r,n);e.push(r),o.push(s);const l=n.includeSymbols?d:h;for(const e of l(r))s[e]=t(r[e]);return e.pop(),o.pop(),s}return r}(this.#e)}};

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BrIK0v6w.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

object({
  tags: array(string()).optional(),
  lastModified: date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new j(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

function paginate(items, options) {
  const { page, pageSize } = options;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);
  return {
    items: paginatedItems,
    pagination: {
      page,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  };
}
function normalizePage(page, maxPage) {
  if (typeof page === "string") {
    const parsed = parseInt(page, 10);
    if (isNaN(parsed) || parsed < 1) return 1;
    return Math.min(parsed, maxPage);
  }
  if (typeof page === "number") {
    if (page < 1) return 1;
    return Math.min(page, maxPage);
  }
  return 1;
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const PAGE_SIZE = 5;
  const allPosts = await getCollection("blog");
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.data.publishedAt) > new Date(b.data.publishedAt)) return -1;
    return 1;
  });
  const pageParam = Astro2.url.searchParams.get("page") ?? void 0;
  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE
  });
  const posts = paginatedPosts.map((post) => ({
    id: post.id,
    title: post.data.title,
    publishedAt: post.data.publishedAt
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": "Thoughts on software development, life, and more." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogList", BlogList, { "client:load": true, "posts": posts, "allPostsCount": sortedPosts.length, "pagination": pagination, "pageSize": PAGE_SIZE, "client:component-hydration": "load", "client:component-path": "@/components/BlogList", "client:component-export": "default" })} ` })}`;
}, "/Users/chris/Desktop/personal/chrislxn.github.io/src/pages/blog/index.astro", void 0);

const $$file = "/Users/chris/Desktop/personal/chrislxn.github.io/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
