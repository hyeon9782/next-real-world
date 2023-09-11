const getArticles = async (page = 1) => {
  return fetch(`https://api.realworld.io/api/articles?limit=20&offset${page}`).then(res => res.json());
};

export { getArticles };
