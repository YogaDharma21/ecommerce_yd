import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "yr74a1wn",
  dataset: "production",
  apiVersion: "2024-06-05",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
