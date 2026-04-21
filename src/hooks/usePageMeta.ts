import { useEffect } from "react";

type PageMetaConfig = {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
};

const updateMetaTag = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  let created = false;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
    created = true;
  }

  const previousContent = tag.getAttribute("content");
  tag.setAttribute("content", content);

  return () => {
    if (created) {
      tag?.remove();
      return;
    }

    if (previousContent === null) {
      tag?.removeAttribute("content");
      return;
    }

    tag?.setAttribute("content", previousContent);
  };
};

export const usePageMeta = ({ title, description, keywords, robots }: PageMetaConfig) => {
  useEffect(() => {
    const previousTitle = document.title;
    const cleanups = [
      updateMetaTag('meta[name="description"]', "name", "description", description),
      updateMetaTag('meta[property="og:title"]', "property", "og:title", title),
      updateMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title),
      updateMetaTag('meta[property="og:description"]', "property", "og:description", description),
      updateMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description),
    ];

    if (keywords) {
      cleanups.push(updateMetaTag('meta[name="keywords"]', "name", "keywords", keywords));
    }

    if (robots) {
      cleanups.push(updateMetaTag('meta[name="robots"]', "name", "robots", robots));
    }

    document.title = title;

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [description, keywords, title]);
};

export default usePageMeta;
