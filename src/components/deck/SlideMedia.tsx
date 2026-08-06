import { useState } from "react";
import type { Media } from "@/data/deck";

export function SlideMedia({ media, dim = "strong" }: { media: Media; dim?: "strong" | "soft" }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const poster = media.kind === "video" ? media.poster : media.src;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={poster}
        alt={media.alt}
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      {media.kind === "video" && !videoFailed && (
        <video
          key={media.src}
          className="absolute inset-0 h-full w-full object-cover"
          src={media.src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        />
      )}
      <div
        className={
          dim === "strong"
            ? "absolute inset-0 bg-[image:var(--gradient-scrim)]"
            : "absolute inset-0 bg-[image:var(--gradient-scrim-soft)]"
        }
      />
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-grain)] opacity-40" />
    </div>
  );
}
