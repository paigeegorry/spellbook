export const getSpellInfo = () => {
  /*eslint-disable-next-line*/
  return fetch(`https://www.potterapi.com/v1/spells?key=${process.env.API_KEY}`)
    .then(res => res.json());
};
