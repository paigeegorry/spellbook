export const getQuoteInfo = () => {
  return fetch(`https://www.potterapi.com/v1/spells?key=${process.env.API_KEY}`)
    .then(res => res.json());
};
