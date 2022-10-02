export const getTotalPages = (totalPosts, limit) => {
  const pages = Math.ceil(totalPosts / limit);
  return pages;
};
