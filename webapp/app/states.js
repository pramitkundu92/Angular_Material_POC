var appStates = [
    {
        name: 'login',
        url: '/login',
        templateUrl: 'app/login/partials/login.html',
        controller: 'loginCtrl'
    },
    {
        name: 'selectproject',
        url: '/{user}/project',
        templateUrl: 'app/select-project/partials/project.html',
        controller: 'projectCtrl',
        resolve: {
            projectList: ['projectListFactory',function(projectListFactory){
                return projectListFactory.getList();
            }]
        }
    },
    {
        name: 'home',
        url: '/{user}/{project}/home',
        templateUrl: 'app/home/partials/home.html',
        controller: 'homeCtrl'
    },
    {
        name: 'home.source',
        url: '/source',
        templateUrl: 'app/source-data/partials/source-data.html',
        controller: 'sourceCtrl',
        resolve: {
            sourceData: ['sourceDataFactory',function(sourceDataFactory){
                return sourceDataFactory.getSourceData();
            }],
            treeData: ['sourceDataFactory',function(sourceDataFactory){
                return sourceDataFactory.getTreeData();
            }]
        }
    },
    {
        name: 'home.conversion',
        url: '/conversion',
        templateUrl: 'app/conversion/partials/conversion.html',
        controller: 'homeCtrl'
    }
];