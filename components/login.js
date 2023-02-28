const login = () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === '' && password === '') {
    // call the navigator to move to the new page
    const navigator = document.querySelector('#navigator');
    navigator.resetToPage('home.html');
  } else {
    ons.notification.toast('Wrong username/password combination');
    // ons.notification.confirm('Wrong username/password combination');
    // ons.notification.alert('Wrong username/password combination');
  }
}
