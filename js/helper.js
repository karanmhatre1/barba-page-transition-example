function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}