export default function handler(req, res) {
  // 1. Get the country override from query string or use Vercel headers
  const queryCountry = req.query.country;
  const vercelCountry = req.headers['x-vercel-ip-country'];
  
  // Default to IN if neither exists
  const country = (queryCountry || vercelCountry || 'IN').toUpperCase();

  // Prices are in USD with 1 USD = 100 INR
  return res.status(200).json({
    country,
    currency: 'USD',
    symbol: '$',
    exchangeRate: 100
  });
}
