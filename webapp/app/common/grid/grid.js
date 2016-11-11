var gridModule = angular.module('dpdx.grid',[]);

gridModule.directive('dpdxGrid',['$parse',function($parse){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'app/common/grid/partials/grid.html',
        link: function(scope,elem,attrs){
            scope.tableData = angular.copy(scope[attrs.tableData]);
            scope.initData = angular.copy(scope[attrs.tableData]);
            scope.tableDef = [];
            scope.filterConfig = {};
            
            for(key in scope.tableData[0]){
                if(key != '$$hashKey'){
                    scope.tableDef.push({
                        text: key,
                        show: true
                    });
                }
            }
            scope.getDisplayText = function(text){
                if(text.length>15){
                    return text.substring(0,15) + '...';
                }
                else return text;
            }
            scope.gridOptions = {
                pagination: {
                    currentPage: 1,
                    pageSize: 10
                },
                filters: true,
                initialColumnCount: 8
            };
            scope.setPaginatedData = function(){
                scope.paginatedData = scope.tableData.slice(
                    (scope.gridOptions.pagination.currentPage-1)*scope.gridOptions.pagination.pageSize,(scope.gridOptions.pagination.currentPage)*scope.gridOptions.pagination.pageSize);    
            };            
            scope.setMaxPages = function(){ 
                scope.gridOptions.pagination.maxPages = scope.tableData.length%scope.gridOptions.pagination.pageSize == 0 ?    scope.tableData.length/scope.gridOptions.pagination.pageSize : Math.floor(scope.tableData.length/scope.gridOptions.pagination.pageSize) + 1;
            };            
            
            scope.setMaxPages();
            
            scope.$watch(function(){
                return scope.gridOptions.pagination.currentPage;
            },function(newVal,oldVal){
                scope.setMaxPages();
                scope.setPaginatedData();
            },true);
            
            scope.$watch(function(){
                return scope.filterConfig;
            },function(newVal,oldVal){ 
                var flag;
                scope.tableData = scope.initData.filter(function(data){
                    flag = true;
                    for(key in scope.filterConfig){
                        if(data[key].toLowerCase().indexOf(scope.filterConfig[key].toLowerCase()) == -1) {
                            flag = false;
                            break;
                        };
                    } 
                    return flag;
                });
                if(scope.tableData.length > scope.gridOptions.pagination.pageSize){
                    scope.gridOptions.pagination.currentPage = 1; 
                    scope.setMaxPages();
                    scope.setPaginatedData();
                }
                else {
                    scope.paginatedData = angular.copy(scope.tableData);
                }
            },true);
        }
    }
}]);