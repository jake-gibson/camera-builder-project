const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const aiController = {
  getProductInfo: async (req, res, next) => {
    const { productTitle, comparisonProduct } = req.query;
    console.log(req.query);

    const query =
      `Give me a response that is under 45 words total, in two sentences, including numbered technical specs, with no introduction or summary, please tell me why` +
      (comparisonProduct !== null
        ? `${productTitle} is or is not compatible with ${comparisonProduct} including any adapters that may be needed.`
        : `${productTitle} is a great product for filmmaking`);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: query,
          },
        ],
        model: 'gpt-4o-mini',
      });

      console.log('ai response:', completion.choices[0]);
      res.locals.aiRes = completion.choices[0].message.content;
      return next();
    } catch (err) {
      res.locals.aiRes = 'Sorry could not complete request :(';
      return next();
    }
  },
};

module.exports = aiController;
