angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.fighters=[
        {name:'---- Singles Fighters ----',country:'USA', image:'singles/', club: 'USA', desc: ''},
        {name:'Jedon Thompson',country:'USA', image:'thompson/', club: 'SCA', desc: ''},
        {name:'Brand Lancaster',country:'USA', image:'lancaster/', club: 'School of Chivalry', desc: ''},
        {name:'Bo Ring',country:'USA', image:'ring/', club: 'Black Swan', desc: ''},
        {name:'Amy Graham',country:'USA', image:'graham/', club: 'Ursus', desc: ''},
        {name:'Elizabeth Escogone',country:'USA', image:'escogone/', club: 'Ursus', desc: ''},
        {name:'---- USA 1 ----',country:'USA', image:'usa1/', club: 'Ursus', desc: ''},
        {name:'Anthony Lynch',country:'USA', image:'lynch/', club: 'Ursus', desc: 'Captain'},
        {name:'Steven Schroeder',country:'USA', image:'schroeder/', club: 'Ursus', desc: ''},
        {name:'Christopher Wemmer',country:'USA', image:'wemmer/', club: 'Ursus', desc: ''},
        {name:'Mark Elrick',country:'USA', image:'elrick/', club: 'Ursus', desc: ''},
        {name:'Dmitriy Ryaboy',country:'USA', image:'ryaboy/', club: 'Ursus', desc: ''},
        {name:'David Dixon',country:'USA', image:'dixon/', club: 'Ursus', desc: ''},
        {name:'Richard Elswick',country:'USA', image:'elswick/', club: 'DFC', desc: ''},
        {name:'Kyryl Sochynex',country:'USA', image:'sochynex/', club: 'Scallagrims', desc: ''},
        {name:'---- USA 2 ----',country:'USA', image:'usa2/', club: 'Lamia Knights', desc: ''},
        {name:'Jason Daniel Wilson',country:'USA', image:'dwilson/', club: 'Lamia Knights', desc: ''},
        {name:'William Hoffman',country:'USA', image:'hoffman/', club: 'Lamia Knights', desc: ''},
        {name:'William Becking',country:'USA', image:'becking/', club: 'Lamia Knights', desc: ''},
        {name:'Alexander Casillas',country:'USA', image:'casillas/', club: 'Lamia Knights', desc: ''},
        {name:'Jason m Wilson',country:'USA', image:'mwilson/', club: 'Lamia Knights', desc: ''},
        {name:'Greg Costa',country:'USA', image:'costa/', club: 'Lamia Knights', desc: ''},
        {name:'Adam Tyler Larios',country:'USA', image:'larios/', club: 'Lamia Knights', desc: ''}, 
        {name:'---- USA 3 ----',country:'USA', image:'usa3/', club: 'USA 3', desc: ''}, 
        {name:'Reed Harrig',country:'USA', image:'harrig/', club: 'Black Swan', desc: ''}, 
        {name:'Don Brant',country:'USA', image:'brant/', club: 'Iron City', desc: ''},
        {name:'Bobby Dionisio',country:'USA', image:'dionisio/', club: 'ACL East', desc: ''},
        {name:'Andrew Dionne',country:'USA', image:'dionne/', club: 'ACL East', desc: ''},
        {name:'Paul Friedel',country:'USA', image:'friedel/', club: 'ACL East', desc: ''},
        {name:'Dan Kitka',country:'USA', image:'kitka/', club: 'SCA', desc: ''},
        {name:'Mark Jackson',country:'USA', image:'jackson/', club: 'Marshals', desc: ''},
        {name:'---- Marshals ----',country:'USA', image:'marshals/', club: 'Marshals', desc: ''},
        {name:'Joseph Cadieux',country:'USA', image:'cadieux/', club: 'Support', desc: ''},
        {name:'Laurence Lagnese',country:'USA', image:'lagnese/', club: 'Palmetto Knights', desc: ''},
        {name:'---- Support Staff ----',country:'USA', image:'support/', club: 'Support', desc: ''},
        {name:'Amanda Kelley',country:'USA', image:'kelley/', club: 'Lamia Knights', desc: ''},
        {name:'Candace Tolliver ',country:'USA', image:'tolliver/', club: 'Lamia Knights', desc: ''},
        {name:'Ellie Kallenda',country:'USA', image:'kalenda/', club: 'Support', desc: ''},
        {name:'Kelli Thompson',country:'USA', image:'kthompson/', club: 'Support', desc: ''},
        {name:'Najelie Larios',country:'USA', image:'nlarios/', club: 'Lamia Knights', desc: ''},
        {name:'Nephi Hancock',country:'USA', image:'hancock/', club: 'Support', desc: ''},
        {name:'Stephanie Kallenda',country:'USA', image:'kallenda/', club: 'Support', desc: ''},
        {name:'R Schiff',country:'USA', image:'schiff/', club: 'Support', desc: ''},
        {name:'Tyr Lancaster',country:'USA', image:'tlancaster/', club: 'School of Chivalry', desc: ''}];

    $scope.baseURL = '';
    $scope.selectedName = 'team/';
    $scope.imgFilePath = $scope.baseURL + 'images/team/1.jpg';
    $scope.selected = 1;
    $scope.fighterDescription = '';
    
    
    $scope.up = function () {
        if($scope.selected < 5 )
            $scope.selected = $scope.selected + 1;
        $scope.imgFilePath = $scope.baseURL + 'images/' + $scope.selectedName + $scope.selected + '.jpg';
    };
    $scope.down = function () {
        if($scope.selected > 0 )
            $scope.selected = $scope.selected - 1;
        $scope.imgFilePath = $scope.baseURL + 'images/' + $scope.selectedName + $scope.selected + '.jpg';
    };
    $scope.change = function(selectedVal) {
        $scope.selected = 1;
        $scope.fighterDescription = selectedVal.desc;
        $scope.selectedName = selectedVal.image;
        $scope.imgFilePath = $scope.baseURL + 'images/' + selectedVal.image + $scope.selected + '.jpg';
    };
    
    
});

