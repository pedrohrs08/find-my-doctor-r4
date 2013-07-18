function StatesController ($scope, State) {
	
	$scope.reset = function() {
		$scope.items = [];
		$scope.state = null;
       	$scope.items = State.query(function (data, status) {
        arr_modal = [];
        for(i in data) {
       		arr_modal[data[i].id] = new Modal(data[i].id);
        }
        $scope.modal_arr = arr_modal;
	});
   }
   
   $scope.reset();

   $scope.editThis = function() {
   	 var id = this.state.id;
     $scope.state = State.get({ id: id });
     $scope.modalCreate.open();
   };

    $scope.openForm = function () {
       $scope.reset();
       $scope.modalCreate.open();    
    }

    $scope.create = function (state) {
      if (state.id == null)	{
    	State.save(state, function(){
            $scope.modalCreate.close();
            $scope.reset();
    	});
      } else {      	
      	State.update({ id: state.id }, state, function () {
            $scope.modalCreate.close();
            $scope.reset();
      	});        
      }
    };

	$scope.modalCreate = new Modal();

	$scope.hover = 0;

	$scope.opened = 0;

    $scope.modal = function () {
    	return $scope.modal_arr[this.state.id];
    };

	$scope.showInfo = function (){
		$scope.hover = this.state.id;
	};

	$scope.hideInfo = function (){
		$scope.hover = 0;
	};

	$scope.isToShowInfo = function (){
		return $scope.hover == this.state.id;
	};
}