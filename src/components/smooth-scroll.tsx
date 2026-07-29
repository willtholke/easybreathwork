"use client";

import "lenis/dist/lenis.css";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function ResetScrollOnRouteChange() {
  const pathname = usePathname();
  const lenis = useLenis();
  const previousPathname = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (
      previousPathname.current !== null &&
      previousPathname.current !== pathname
    ) {
      lenis?.scrollTo(0, { immediate: true, force: true });
    }
    previousPathname.current = pathname;
  }, [lenis, pathname]);

  return null;
}

function ScrollToInitialHash() {
  const lenis = useLenis();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const controller = new AbortController();
    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), {
              once: true,
              signal: controller.signal,
            });
          });

    Promise.all([document.fonts.ready, loaded]).then(() => {
      const target = document.getElementById(decodeURIComponent(hash));
      if (target && !controller.signal.aborted) {
        lenis.scrollTo(target, {
          force: true,
          immediate: reducedMotion,
        });
      }
    });

    return () => controller.abort();
  }, [lenis, reducedMotion]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  const anchorOptions = reducedMotion
    ? { immediate: true }
    : { duration: 1.2, easing: easeInOutCubic };

  return (
    <ReactLenis
      className="relative h-dvh min-h-0 overflow-y-auto overflow-x-clip overscroll-none"
      options={{
        allowNestedScroll: true,
        smoothWheel: !reducedMotion,
        anchors: anchorOptions,
      }}
    >
      <ResetScrollOnRouteChange />
      <ScrollToInitialHash />
      {children}
    </ReactLenis>
  );
}
