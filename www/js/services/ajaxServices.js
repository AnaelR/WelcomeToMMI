// Injection des service $http (Ajax), $q (promesses) et constante BACKEND
app.service("ajaxService", function($http, $q, BACKEND) {
  // Fonction générale Ajax
  this.ajax = function(url) {
    console.log(url);
    // Création d'une promesse
    var deferred = $q.defer();
    // Requette Ajax
    $http.get(url).then(
      function(response) {
        console.log(response);
        deferred.resolve(response.data);
      },
      function(error) {
        deferred.reject("erreur Ajax");
        console.log("erreur Ajax ajaxService");
      }
    );
    // Réponse de la promise
    return deferred.promise;
  };
  this.getListeDesign = function(type) {
    return this.ajax(BACKEND.parent + type);
  };

  this.getListeEnfant = function(id) {
    return this.ajax(BACKEND.enfant + id);
  };

  this.getCategorie = function(id) {
    return this.ajax(BACKEND.categorie + id);
  };
});
