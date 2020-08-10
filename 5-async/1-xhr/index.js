function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  const result = { name: 'hello' };
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', url);
  xhr.setRequestHeader('content-type', 'application/json');
  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 299)
      successCallback(xhr.responseText);
    if (xhr.readyState == 4 && (xhr.status < 200 || xhr.status > 299))
      errorCallback(xhr.responseText);
  };

  console.log(result);
  xhr.send();
  // end -->
}
