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
