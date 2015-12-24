app = angular.module("chatApp",["firebase"]);


app.controller("chatCtrl",function($scope,$firebaseArray){

  var ref = new Firebase("https://chatroomfire.firebaseio.com/");
  $scope.messages = $firebaseArray(ref);



  $scope.addMessage = function(text2){
   $scope.messages.$add({text: text2});
$scope.newMessage = "";


  $scope.deleteMessage = function(msg){
    $scope.messages.$remove(msg);
  };
//將html的function寫出來，並用上angularFire的刪除語法$remove移除messages矩陣中的某一項msg，所以這邊語法記得$remove

  $scope.updateMessage = function(msg){
    msg.text = prompt("Edit Message:",msg.text);
    $scope.messages.$save(msg);
  };
//將html的function寫出來，並用上angularFire的刪除語法$save更新messages矩陣中的某一項msg，所以這邊語法記得$save

      };
         });
