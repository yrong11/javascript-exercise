function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  const options = {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(url, options);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    console.log(result);
    document.writeln(JSON.parse(result.responseText).name);
  })
  .catch(error => {
    console.error(error);
  });
