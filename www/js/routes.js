app.config(function($stateProvider) {
  $stateProvider
    .state("appli", {
      url: "/",
      templateUrl: "",
      controller: "GeneralCtrl"
    })
    .state("appli.home", {
      url: "/appli/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl"
    })
    .state("appli.about", {
      url: "/appli/about",
      templateUrl: "templates/about.html",
      controller: "AboutCtrl"
    })
    .state("appli.design", {
      url: "/appli/design",
      templateUrl: "templates/design.html",
      controller: "DesignCtrl"
    })
    .state("appli.developpement", {
      url: "/appli/developpement",
      templateUrl: "templates/design.html",
      controller: "DeveloppementCtrl"
    })
    .state("appli.communication", {
      url: "/appli/communication",
      templateUrl: "templates/design.html",
      controller: "CommunicationCtrl"
    })
    .state("appli.article", {
      url: "/appli/:id",
      templateUrl: "templates/veille.html",
      controller: "EnfantCtrl"
    })
    .state("appli.info", {
      url: "/appli/info/:id",
      templateUrl: "templates/info.html",
      controller: "InfoCtrl"
    });
});
