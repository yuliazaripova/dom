import renderHistoryBtns from '../../components/history/history';

const detectUserBrowser = () => {
  let userBrowser;
  const { userAgent } = navigator;

  if (userAgent.indexOf('Firefox') > -1) {
    userBrowser = 'Firefox';
  } else if (userAgent.indexOf('Trident') > -1) {
    userBrowser = 'IE';
  } else if (userAgent.indexOf('Chrome') > -1) {
    userBrowser = 'Chrome';
  } else {
    userBrowser = 'Someone else browser';
  }

  return userBrowser;
};

const renderInfoForChrome = () => {
  let info = '<div class="jumbotron">';
  info += '<h1>Your browser is Chrome</h1>';
  info += `<p>User-agent: ${navigator.userAgent}</p>`;
  info += `<p>appVersion: ${navigator.appVersion}</p></div>`;
  document.getElementById('root').innerHTML += info;
};

const renderInfoForFirefox = () => {
  let info = '<div class="jumbotron">';
  info += '<h1>Your browser is Firefox</h1>';
  info += `<p>appName: ${navigator.appName}</p>`;
  info += `<p>cookieEnabled: ${navigator.cookieEnabled}</p></div>`;
  document.getElementById('root').innerHTML += info;
};

const renderInfoForIE = () => {
  function showPosition(position) {
    let info = '<div class="jumbotron">';
    info += '<h1>Your browser is IE</h1>';
    info += `<p><b>platform</b>: ${navigator.platform}</p>`;
    info += `<p>geolocation: ${position.coords.latitude} ${position.coords.longitude}</p></div>`;
    document.getElementById('root').innerHTML += info;
  }
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      let info = '<div class="jumbotron">';
      info += '<h1>Your browser is IE</h1>';
      info += `<p><b>platform</b>: ${navigator.platform}</p>`;
      info += '<p>geolocation: Geolocation is not supported by this browser.</p></div>';
      document.getElementById('root').innerHTML += info;
    }
  };
  getLocation();
};

const renderInfoForDefault = () => {
  let info = '<div class="jumbotron">';
  info += '<h1>Someone else browser</h1></div>';
  document.getElementById('root').innerHTML = info;
};

const renderInfo = () => {
  const userBrowser = detectUserBrowser();
  switch (userBrowser) {
    case 'Firefox':
      renderInfoForFirefox();
      break;
    case 'Chrome':
      renderInfoForChrome();
      break;
    case 'IE':
      renderInfoForIE();
      break;
    default:
      renderInfoForDefault();
  }
};

renderHistoryBtns();
renderInfo();
