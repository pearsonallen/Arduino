function setup() {
    noCanvas(400, 400);
    setTimeout(getValue,1000);
  }

  function getValue() {
    httpGet('/api/GetTopItem','text',false,function(response) {
      createP(response);
      setTimeout(getValue,1000);
    });

  }