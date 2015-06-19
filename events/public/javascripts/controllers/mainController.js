eventSystem.controller("mainController", ['$scope', '$timeout', 'Event', function($scope, $timeout, Event) {

  var timeout = null;

  // Use a timeout to wait until the user is done typing.
  $scope.searchWhenDoneTyping = function(keyword){
    $timeout.cancel(timeout);
    if (keyword === "") {
      $scope.events = [];
      return;
    }
    
    timeout = $timeout(function(){
      search(keyword);
    }, 100);
  };

  var search = function(keyword){
    Event.search({ keyword: keyword }, function(events){
      // Only display if the searched keyword is still the last thing they typed
      if ($scope.keyword === keyword){
        $scope.events = events;
      }
    });
  };

  var saveEvent = function(editedEvent, event){
    console.log(editedEvent, event);
  };

}]);