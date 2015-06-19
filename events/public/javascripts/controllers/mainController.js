eventSystem.controller("mainController", ['$scope', '$timeout', 'Event', function($scope, $timeout, Event) {

  var searchTimeout = null;
  var messageTimeout = null;
  $scope.creating = false;
  $scope.newEvent = new Event();
  $scope.events = Event.query();

  // Use a timeout to wait until the user is done typing.
  $scope.searchWhenDoneTyping = function(keyword){
    $timeout.cancel(searchTimeout);
    if (keyword === "") {
      $scope.events = [];
      return;
    }
    
    searchTimeout = $timeout(function(){
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

  $scope.creatEvent = function(event){
    $scope.creating = false;
    event.participants = event.participantsString.split(",").map(function(s){ return s.trim() });
    delete event.participantsString;
    event.$save(function(event){
      displayMessage("New event created!");
      $scope.newEvent = new Event();
    });
  };

  $scope.updateEvent = function(editedEvent, event, index){
    editedEvent.participants = editedEvent.participantsString.split(",").map(function(s){ return s.trim() });
    delete editedEvent.participantsString;
    Event.update({ id: event._id }, editedEvent, function(){
      $scope.events[index] = editedEvent;
      displayMessage("Event saved!");
    });
  };

  $scope.deleteEvent = function(event, index){
    event.$delete(function(){
      $scope.events.splice(index, 1);
    });
  };

  var displayMessage = function(message){
    $timeout.cancel(messageTimeout);
    $scope.message = message;
    messageTimeout = $timeout(function(){
      $scope.message = "";
    }, 2000);
  };

  $scope.copy = function copy(item){ return angular.copy(item); };
  $scope.log = console.log.bind(console);

}]);