"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./BackgroundImage.module.css";

export default function BackgroundImage({
  src,
  position,
  size,
  className,
  blurDataURL,
  children,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${styles.backgroundContainer} ${className}`}>
      <Image
        src={src}
        alt="Background image"
        fill
        quality={100}
        style={{
          objectFit: size === "contain" ? "contain" : "cover",
          objectPosition: position || "center",
          opacity: loaded ? 1 : 0,
          zIndex: 0,
        }}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoadingComplete={() => setLoaded(true)}
        priority
      />
      <div
        className={styles.blur}
        style={{
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: size || "cover",
          backgroundPosition: position || "center",
          opacity: loaded ? 0 : 1,
          zIndex: 0,
        }}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
