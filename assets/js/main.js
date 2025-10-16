document.addEventListener('DOMContentLoaded', () => {
  // Find the form with an id that starts with 'github-user-'
  const form = document.querySelector('form[id^="github-user-"]');
  const usernameInput = form?.querySelector('input[name="username"]');
  const createdAtEl = document.getElementById('github-created-at');
  const errorEl = document.getElementById('github-error');

  if (!form || !usernameInput || !createdAtEl || !errorEl) return;

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    createdAtEl.textContent = '';
    errorEl.textContent = '';

    const username = usernameInput.value.trim();
    if (!username) return;

    // Optional token can be supplied via URL query string: ?token=YOUR_TOKEN
    const token = new URLSearchParams(window.location.search).get('token');

    try {
      const headers = {};
      if (token) headers['Authorization'] = `token ${token}`;

      const resp = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers });
      if (!resp.ok) {
        if (resp.status === 404) {
          errorEl.textContent = 'User not found';
        } else {
          errorEl.textContent = `GitHub API error: ${resp.status}`;
        }
        return;
      }

      const user = await resp.json();
      if (!user.created_at) {
        errorEl.textContent = 'Creation date not available for this user';
        return;
      }

      const d = new Date(user.created_at);
      const dateStr = d.toISOString().slice(0, 10) + ' UTC';
      createdAtEl.textContent = dateStr;
    } catch (err) {
      errorEl.textContent = 'Error: ' + (err && err.message ? err.message : String(err));
    }
  });
});
