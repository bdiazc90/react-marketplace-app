const BASE_URL = "https://http-nodejs-production-78a7.up.railway.app/api/v1";

export const get = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
