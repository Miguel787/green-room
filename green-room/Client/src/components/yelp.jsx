import queryString from "query-string";
const { REACT_APP_API_BASE_URL, REACT_APP_BEARER_TOKEN } = process.env;
export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${REACT_APP_API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${REACT_APP_BEARER_TOKEN}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });
}
