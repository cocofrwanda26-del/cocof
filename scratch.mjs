const AIRTABLE_TOKEN = process.env.AIRTABLE_API_KEY || "";

async function fetchFirst(baseId, tableId) {
  const url = `https://api.airtable.com/v0/${baseId}/${tableId}?maxRecords=10`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
  });
  const data = await response.json();
  const validRecord = data.records.find(r => Object.keys(r.fields).length > 0);
  console.log(`Record for ${tableId}:`, JSON.stringify(validRecord, null, 2));
}

async function main() {
  await fetchFirst("app8N4MQNzrWlJPNb", "tblrJJHLU37xXbyrQ"); // Announcements
  await fetchFirst("appJHqCNyKOPBhNRR", "tblXeTBHQoVrnCOWK"); // Publications
}
main();
