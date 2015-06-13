window.addEventListener('WebComponentsReady', function() {

  // We use Page.js for routing. This is a Micro
  // client-side router inspired by the Express router
  // More info: https://visionmedia.github.io/page.js/
  page('/', function () {
    app.route = 'home';
  });

  // add #! before urls
  page({
    hashbang: true
  });

});
