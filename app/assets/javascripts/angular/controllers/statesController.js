function StatesController ($scope, $http, State) {
	
   $scope.reset = function() {
		$scope.items = [];
		$scope.state = null;
		$scope.errors = [];
       	$scope.items = State.query()
   };
   
   $scope.next = function () {
   	$http.get('/api/states/next/' + parseInt(this.state.id)).success(function (data, status){
        $scope.state = data;
   	});
   };

   $scope.previous = function() {
   	 	$http.get('/api/states/previous/' + parseInt(this.state.id)).success(function (data, status){
        $scope.state = data;
   	});
   };

   $scope.editThis = function() {
   	 var id = this.state.id;
     $scope.state = this.state;
     $scope.modalCreate.open();
   };

   $scope.delete = function() {
     State.delete({id: $scope.state.id}, function (date) {
        $scope.message.success = "State : " + $scope.state.name + " deleted successfully!";
        $scope.reset();
        $scope.modalDelete.close();
     });
   }

   $scope.deleteThis = function() {
     $scope.action = "Edit";
     var id = this.state.id;
     $scope.state = State.get({ id: id });
     $scope.modalDelete.open();
   };

    $scope.openForm = function () {
       $scope.action = "Create";
       $scope.reset();
       $scope.modalCreate.open();    
    };

    $scope.create = function (state) {
      if (state == null) {
        $scope.errors = "Please fill in some information!";
      } else if (state.id == null)	{
    	State.save(state, function(){
            	$scope.message.success = "State successfully created: " + state.name
	            $scope.modalCreate.close();
	            $scope.reset();
	        },
	        function (response) {
	          	$scope.errors = response.data;
	        } 
	    );
      } else {      	
      	State.update({ id: state.id }, state, function () {
            $scope.message.success = "State successfully updated: " + state.name
            $scope.modalCreate.close();
            $scope.reset();
      	});        
      }
    };

	$scope.reset();
	$scope.modalCreate = new Modal();
  $scope.modalDelete = new Modal();
  $scope.message = {
    warning: null,
    success: null,
    fail: null
  }
}