angular.module("myApp", [])
  .controller("control", function($scope) {

    $scope.cadastrar = cadastrar;
    $scope.contatos = [];

    function cadastrar(contato) {
        $scope.contatos.push({
          nome: contato.nome,
          idade: contato.idade,
          telefone: contato.telefone
        });

        contato.nome = "";
        contato.idade = "";
        contato.telefone = "";

        contato.nome.focus;

        console.log($scope.contatos);
    }
  })
