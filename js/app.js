var app = angular.module('groceryListApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/groceryList.html",
            controller: "HomeController"
        })
        .when("/createItem", {
            templateUrl: "views/createItem.html",
            controller: "HomeController"
        })

})

app.controller('HomeController', ['$scope', function ($scope) {

    $scope.appTitle = 'Lista de Compras';

}])

app.controller('ListItemsController', ['$scope', function ($scope) {

    $scope.groceryItems = [
        {completed: true, itemName: 'Leite', date: '03/08/2017'},
        {completed: true, itemName: 'Pão', date: '03/08/2017'},
        {completed: true, itemName: 'Ovos', date: '03/08/2017'},
        {completed: true, itemName: 'Farinha', date: '03/08/2017'},
        {completed: true, itemName: 'Óleo', date: '03/08/2017'},
        {completed: true, itemName: 'Manteiga', date: '03/08/2017'},
        {completed: true, itemName: 'Carne', date: '03/08/2017'},
        {completed: true, itemName: 'Arroz', date: '03/08/2017'},
        {completed: true, itemName: 'Feijão', date: '03/08/2017'},
    ]

}]);