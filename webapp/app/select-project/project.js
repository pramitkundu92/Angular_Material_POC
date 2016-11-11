app.controller('projectCtrl',['$scope','projectList','$state','$stateParams',
                              function($scope,projectList,$state,$stateParams){
    $scope.projectList = projectList;
    $scope.selectedProject = '';
    $scope.selectProject = function(){
        $state.go('home.source', {
            user: $stateParams.user,
            project: $scope.selectedProject
        })
    };
}]);

app.factory('projectListFactory',['$http','$q',function($http,$q){
    return {
        getList: function(){
            var deferred = $q.defer();
            deferred.resolve([
                {
                    name: 'Revlon', 
                    id: 1
                },
                {
                    name: 'Food & Beverage',
                    id: 2
                }
            ]);
            return deferred.promise;
        }
    }   
}]);