async function getUser(id, { signal } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      signal: signal ?? controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request timed out or was cancelled");
    } else {
      console.error("Fetch failed:", error.message);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
