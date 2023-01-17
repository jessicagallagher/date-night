import axios from 'axios';

export default async function getFoodImages(req, res) {
  const {
    query: { foodName },
  } = req;

  const url = `${process.env.BASE_URL}food/search?query=${foodName}&number=1&apiKey=${process.env.API_KEY}`;

  const response = await axios.get(url);
  res.status(200).json({
    data: response.data,
  });
}
