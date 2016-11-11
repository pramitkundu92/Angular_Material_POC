app.controller('sourceCtrl',['$scope','sourceData','treeData',function($scope,sourceData,treeData){
    $scope.sourceData = angular.copy(sourceData);
    $scope.nodeList = angular.copy(treeData);
}]);

app.factory('sourceDataFactory',['$http','$q',function($http,$q){
    return {
        getSourceData: function(){
            var deferred = $q.defer();
            deferred.resolve(angular.copy(gridData));
            return deferred.promise;
        },
        getTreeData: function(){
            var deferred = $q.defer();
            deferred.resolve(angular.copy(treeData));
            return deferred.promise;
        }
    }
}]);