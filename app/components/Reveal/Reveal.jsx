"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/**
 * Пояснювальний рух (t3-настрій): плавний fade + підйом при вході блоку у в'юпорт.
 *
 * SEO / no-JS safe: за замовчуванням контент ВИДИМИЙ (SSR-HTML не ховає нічого).
 * Анімація «озброюється» лише після гідрації (клас .armed) — тому без JS або для
 * краулера все лишається видимим. Блоки, що вже у в'юпорті на старті (над згином),
 * не ховаються взагалі — жодного блимання. Вимикається при prefers-reduced-motion.
 */
function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return; // лишаємо видимим

    // Над згином — не ховаємо (без блимання), просто без анімації.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    setArmed(true);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);
    // запобіжник: блок ніколи не лишається прихованим, навіть якщо IO не спрацював
    const fallback = setTimeout(() => setShown(true), 1600);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const cls = [
    styles.reveal,
    armed ? styles.armed : "",
    shown ? styles.shown : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={cls}
      style={armed && delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
