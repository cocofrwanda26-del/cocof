export interface Article {
  id: string;
  type: 'blog' | 'announcement' | 'publication';
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  imageUrl: string;
  documentUrl?: string;
  content: string;
}

const AIRTABLE_TOKEN = process.env.AIRTABLE_API_KEY || "";

const BLOGS_BASE = "app8IWyUsZ77844pV";
const BLOGS_TABLE = "tblMPBOhzt3QpV04p";

const ANNOUNCEMENTS_BASE = "app8N4MQNzrWlJPNb";
const ANNOUNCEMENTS_TABLE = "tblrJJHLU37xXbyrQ";

const PUBLICATIONS_BASE = "appJHqCNyKOPBhNRR";
const PUBLICATIONS_TABLE = "tblXeTBHQoVrnCOWK";

async function fetchAirtableRecords(baseId: string, tableId: string, type: 'blog' | 'announcement' | 'publication'): Promise<Article[]> {
  const publishField = type === 'publication' ? 'Published' : 'Publish';
  const url = `https://api.airtable.com/v0/${baseId}/${tableId}?filterByFormula=${encodeURIComponent(`${publishField}=1`)}`;
  
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`
    },
    // We can use Next.js caching or revalidate based on needs. Using revalidate for 60 seconds.
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    console.error(`Failed to fetch ${type}s from Airtable:`, await response.text());
    return [];
  }

  const data = await response.json();
  
  return data.records.map((record: any) => {
    const fields = record.fields;
    
    let imageUrl = '/wemen.webp';
    let documentUrl = undefined;

    if (type === 'publication') {
      const documents = fields.Document || fields.document || [];
      if (documents.length > 0) {
        documentUrl = documents[0].url;
      }
    } else {
      const images = fields.Image || fields.image || [];
      if (images.length > 0) {
        imageUrl = images[0].url;
      }
    }

    const contentField = fields.Content || fields.content || "";
    const titleField = fields.Title || fields.title || "Untitled";
    const dateField = fields.Date || fields.date;

    // Calculate a simple read time based on word count
    const wordCount = contentField.split(/\s+/).length;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 200));

    // Excerpt: first 150 characters of content
    const excerpt = contentField.substring(0, 150).trim() + "...";

    let category = 'Announcement';
    if (type === 'blog') category = 'Blog';
    if (type === 'publication') category = 'Publication';

    return {
      id: record.id,
      type,
      title: titleField,
      date: dateField ? new Date(dateField).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Unknown Date",
      category,
      excerpt,
      readTime: `${readTimeMins} min read`,
      imageUrl,
      documentUrl,
      content: contentField
    };
  });
}

export async function getBlogs(): Promise<Article[]> {
  return fetchAirtableRecords(BLOGS_BASE, BLOGS_TABLE, 'blog');
}

export async function getAnnouncements(): Promise<Article[]> {
  return fetchAirtableRecords(ANNOUNCEMENTS_BASE, ANNOUNCEMENTS_TABLE, 'announcement');
}

export async function getPublications(): Promise<Article[]> {
  return fetchAirtableRecords(PUBLICATIONS_BASE, PUBLICATIONS_TABLE, 'publication');
}

export async function getAllArticles(): Promise<Article[]> {
  const [blogs, announcements, publications] = await Promise.all([getBlogs(), getAnnouncements(), getPublications()]);
  return [...announcements, ...blogs, ...publications];
}

export async function getArticleById(id: string): Promise<Article | null> {
  const all = await getAllArticles();
  return all.find(a => a.id === id) || null;
}
