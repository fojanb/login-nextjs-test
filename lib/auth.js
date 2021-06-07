export const login = async (username, password) => {
  // fetch() parameters fetch(URL|Path, request)
  // res and req are object --> {}
  const res = await fetch("api/login", {
    body: JSON.stringify({ username, password }),
    method: "POST",
  });
  const data = res.json();
  return data;
};
