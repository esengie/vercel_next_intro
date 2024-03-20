function sqlQueryTemplate(strings, ...values) {
  // Log the JSON representation of the strings array
  console.log(JSON.stringify(strings[0]));

  // Continue with the rest of the function (building the query, etc.)
  // Placeholder for the rest of your function implementation
}
const rev = { month: 'January', revenue: 10000 };

sqlQueryTemplate`INSERT INTO revenue (month, revenue) VALUES (${rev.month}, ${rev.revenue}) ON CONFLICT (month) DO NOTHING;`