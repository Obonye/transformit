import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "p1m3v7uu",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,

});
