"use client";

import { useEffect } from "react";

interface SocialMediaEmbedProps {
  platform: string;
  postUrl: string;
}

export default function SocialMediaEmbed({
  platform,
  postUrl,
}: SocialMediaEmbedProps) {
  useEffect(() => {
    // Instagram embed
    if (platform === "instagram") {
      const script = document.createElement("script");

      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }

    // Twitter embed
    if (platform === "twitter") {
      const script = document.createElement("script");

      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [platform]);

  switch (platform) {
    case "instagram":
      return (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
        />
      );

    case "twitter":
      return (
        <blockquote className="twitter-tweet">
          <a href={postUrl}>View post on Twitter</a>
        </blockquote>
      );

    case "linkedin":
      return (
        <iframe
          allowFullScreen
          frameBorder="0"
          height="500"
          src={`https://www.linkedin.com/embed/feed/update/${postUrl.split("activity/")[1]}`}
          title="Embedded LinkedIn Post"
          width="100%"
        />
      );

    case "facebook":
      return (
        <iframe
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          frameBorder="0"
          height="600"
          scrolling="no"
          src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(postUrl)}`}
          style={{ border: "none", overflow: "hidden" }}
          title="#"
          width="500"
        />
      );

    default:
      return <p>Unsupported platform: {platform}</p>;
  }
}
