app.controller('loginCtrl',['$scope','$state','$rootScope',function($scope,$state,$rootScope){
    $rootScope.dpdxDetails = undefined;
    $scope.loginOptions = [
        {
            title: 'Login',
            fields: [
                {
                    label: 'Username',
                    attribute: 'username',
                    type: 'input',
                    required: true
                },
                {
                    label: 'Password',
                    attribute: 'password',
                    type: 'password',
                    required: true
                }
            ],
            action: 'login'
        },
        {
            title: 'Signup',
            fields: [
                {
                    label: 'Full Name',
                    attribute: 'fullname',
                    type: 'input',
                    required: true
                },
                {
                    label: 'Username',
                    attribute: 'username',
                    type: 'input',
                    required: true
                },
                {
                    label: 'Password',
                    attribute: 'password',
                    type: 'password',
                    required: true
                },
                {
                    label: 'Email',
                    attribute: 'email',
                    type: 'email'
                },
            ],
            action: 'signup'
        }
    ];
    $scope.userData = {};
    $scope.invalidLogin = false;
    $scope.login = function(){
        if($scope.userData.username == 'test' && $scope.userData.password == 'test'){
            $state.go('selectproject',{user: $scope.userData.username});
        }
        else {
            $scope.invalidLogin = true;
        }
    };
    $scope.clear = function(){
        $scope.userData = {};
    }
    $scope.performAction = function(act){
        $scope[act].apply();
    }
    $scope.resetLogin = function(){
        $scope.invalidLogin = false;
    }
}]);