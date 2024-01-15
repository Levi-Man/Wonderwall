const logout = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    // Handle any unexpected errors during the logout process
    console.error('Logout error:', err);
    // You might want to display an error message to the user in a production environment
  }
};

document.querySelector('#logout').addEventListener('click', logout);

