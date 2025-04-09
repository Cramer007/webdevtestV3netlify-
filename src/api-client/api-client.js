export async function postJSON(url, data) {
  const username = localStorage.getItem('username') // 👈 récupère le nom de l'utilisateur
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-user': username // 👈 en-tête custom
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const json = await res.json();
  return json;
}
