import axios from 'axios';

export default async function wineWithFood(req, res) {
  const {
    query: { wine },
  } = req;

  const url = `${process.env.BASE_URL}food/wine/dishes?wine=${wine}&apiKey=${process.env.API_KEY}`;

  const response = await axios.get(url);
  res.status(200).json({
    data: response.data,
  });
}
