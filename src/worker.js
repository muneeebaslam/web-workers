self.onmessage = async function (e) {
  const { data1, data2, data3 } = e.data;
  
  const result2 = function2(data2);
  const result3 = function3(data3);
  const result1 = await function1(data1);

  postMessage({ result1, result2, result3 });
};

function function1(data) {
  console.log(data);
  return data;
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(data * 10);
  //   }, 3000);
  // });
}

function function2(data) {
  console.log(data);
  return data + 10;
}

function function3(data) {
  console.log(data);
  return data / 10;
}
