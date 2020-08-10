async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await new Promise((resolve, reject) => getData(url, resolve, reject));
    document.writeln(JSON.parse(result).name);
  } catch (e) {
    console.error('error msg');
  }
  // end -->
}

function getData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('content-type', 'application/json');
  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 299)
      successCallback(xhr.responseText);
    if (xhr.readyState == 4 && (xhr.status < 200 || xhr.status > 299))
      errorCallback(xhr.responseText);
  };
  xhr.send();
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
