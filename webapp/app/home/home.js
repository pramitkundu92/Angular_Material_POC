app.controller('homeCtrl',['$scope','$state','$stateParams','$rootScope',function($scope,$state,$stateParams,$rootScope){
    $rootScope.dpdxDetails = {
        user: $stateParams.user,
        project: $stateParams.project
    };
    $scope.tabs = [
        {
            title: 'Source Data',
            state: 'home.source'
        },
        {
            title: 'Conversion',
            state: 'home.conversion'
        }
    ];
    angular.forEach($scope.tabs,function(tab,index){
        if(tab.state == $state.$current.name) $scope.selectedIndex = index;    
    })
}]);