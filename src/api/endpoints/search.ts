export const fetchSearch = (queryString: string | null, page: number = 1) => (
  fetch(`${process.env.REACT_APP_API_URL}/search/repositories?q=${encodeURIComponent(queryString as string)}&page=${page}&per_page=10`)
);
