import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "koj5pa8w",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// video url generation
export function videoUrlFor(source: any) {
  if (!source) return "";

  if (source.asset) {
    // If source is an asset reference
    return `${source.asset.url}?autoplay=1`;
  } else {
    // If source is a direct URL
    return source;
  }
}
