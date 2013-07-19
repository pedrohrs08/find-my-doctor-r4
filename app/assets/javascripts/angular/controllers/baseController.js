function StatesController ($scope, $http, State) {
	
   $scope.reset = function() {
		$scope.items = [];
		$scope.state = null;
       	$scope.items = State.query(function (data, status) {
        $scope.errors = [];
        arr_modal = [];
        for(i in data) {
       		arr_modal[data[i].id] = new Modal(data[i].id);
        }
        $scope.modal_arr = arr_modal;
	});
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
   	 $scope.action = "Edit";
   	 var id = this.state.id;
     $scope.state = State.get({ id: id });
     $scope.modalCreate.open();
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
    	
	            $scope.modalCreate.close();
	            $scope.reset();
	        },
	        function (response) {
	          	$scope.errors = response.data;
	        } 
	    );
      } else {      	
      	State.update({ id: state.id }, state, function () {
            $scope.modalCreate.close();
            $scope.reset();
      	});        
      }
    };

    $scope.modal = function () {
    	return $scope.modal_arr[this.state.id];
    };

	$scope.reset();
	$scope.modalCreate = new Modal();
}