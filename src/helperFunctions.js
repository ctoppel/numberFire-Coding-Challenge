function convertTimeToCardFormat(time) {
  const year = 31536000000;
  const month = 2629740000;
  const day = 86400000;
  const hour = 3600000;
  const min = 60000;

  time = Math.floor((new Date(time)).getTime() / 1000);

  if (time >= year) {
    const years = Math.floor(time / year);
    years === 1 ? time = `${years} year ago` : time = `${years} years ago`;
  } else if (time >= month) {
    const months = Math.floor(time / month);
    months === 1 ? time = `${months} month ago` : time = `${months} months ago`;
  } else if (time >= day) {
    const days = Math.floor(time / day);
    days === 1 ? time = `${days} day ago` : time = `${days} days ago`;
  } else if (time >= hour) {
    const hours = Math.floor(time / hour);
    hours === 1 ? time = `${hours} hour ago` : time = `${hours} hours ago`;
  } else {
    const minutes = Math.floor(time / min);
    minutes === 1 ? time = `${minutes} minutes ago` : time = `${minutes} minutes ago`;
  }

  return time;
}

function convertLikesToCardFormat(views) {
  if (views >= 1000000000) views = `${(views / 1000000000).toFixed(1)}B views`;
  else if (views >= 1000000) views = `${(views / 1000000).toFixed(1)}M views`;
  else if (views >= 1000) views = `${(views / 1000).toFixed(0)}K views`;
  else if (views === 1) views = `${views} view`;
  else views = `${views} views`;

  return views;
}

// fetch function that works accross all platforms
function crossBrowserFetch(url, JSONparsing = true, optionObj = { method: 'GET' }) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(optionObj.method, url);
    if (optionObj.headers) {
      for (const key in optionObj.headers) {
        req.setRequestHeader(key, optionObj.headers[key]);
      }
    }
    req.onload = () => {
      if (req.status === 200) {
        if (JSONparsing) {
          resolve(JSON.parse(req.response));
        } else {
          resolve(req.response);
        }
      } else {
        reject(JSON.parse(req.response));
      }
    };
    req.send();
  });
}

export {
  convertTimeToCardFormat,
  convertLikesToCardFormat,
  crossBrowserFetch,
};
