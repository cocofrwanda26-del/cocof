import { getAnnouncements, getBlogs, getPublications } from "../lib/airtable";
import NewsClient from "./NewsClient";

// Disable static rendering for this page if data should be fresh
export const revalidate = 60; // revalidate every 60 seconds

export default async function NewsPage() {
  const [announcements, blogs, publications] = await Promise.all([
    getAnnouncements(),
    getBlogs(),
    getPublications()
  ]);

  return <NewsClient announcements={announcements} blogs={blogs} publications={publications} />;
}
