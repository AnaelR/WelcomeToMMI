app.controller("DesignCtrl", function($scope, ajaxService) {
  // Création d'une variable titre sur le scope
  $scope.titre = "Design";

  // Appel de la liste des vidéos
  $scope.liste = ajaxService.getListeDesign(3).then(
    // En cas de success
    function(response) {
      $scope.liste = response;
    },
    // En cas d'erreur
    function(error) {
      alert("erreur Ajax");
    }
  );
});

app.controller("DeveloppementCtrl", function($scope, ajaxService) {
  // Création d'une variable titre sur le scope
  $scope.titre = "Developpement";

  // Appel de la liste des vidéos
  $scope.liste = ajaxService.getListeDesign(2).then(
    // En cas de success
    function(response) {
      $scope.liste = response;
    },
    // En cas d'erreur
    function(error) {
      alert("erreur Ajax");
    }
  );
});

app.controller("CommunicationCtrl", function($scope, ajaxService) {
  // Création d'une variable titre sur le scope
  $scope.titre = "Communication";

  // Appel de la liste des vidéos
  $scope.liste = ajaxService.getListeDesign(4).then(
    // En cas de success
    function(response) {
      $scope.liste = response;
    },
    // En cas d'erreur
    function(error) {
      alert("erreur Ajax");
    }
  );
});

// Injection de $state en dépendance pour récupérer le paramètre id
app.controller("EnfantCtrl", function($scope, ajaxService, $state) {
  // Initialisation de la vidéo
  $scope.enfant = "";
  $scope.categorie = "";

  // Appel de la video par son id
  ($scope.liste = ajaxService.getListeEnfant($state.params.id).then(
    // En cas de success
    function(response) {
      $scope.liste = response;
      console.log(response);
    },
    // En cas d'erreur
    function(error) {
      alert("erreur Ajax");
    }
  )),
    ($scope.categorie = ajaxService.getCategorie($state.params.id).then(
      // En cas de success
      function(response) {
        $scope.categorie = response;
        console.log(response);
      },
      // En cas d'erreur
      function(error) {
        alert("erreur Ajax");
      }
    ));
});

// Injection de $state en dépendance pour récupérer le paramètre id
app.controller("InfoCtrl", function($scope, ajaxService, $state) {
  // Initialisation de la vidéo
  $scope.categorie = "";

  $scope.categorie = ajaxService.getCategorie($state.params.id).then(
    // En cas de success
    function(response) {
      $scope.categorie = response;
      console.log(response);
    },
    // En cas d'erreur
    function(error) {
      alert("erreur Ajax");
    }
  );
});
