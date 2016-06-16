var wy=angular.module('wy',['ngAnimate','ngRoute','ngTouch']);
wy.factory('$y',[function(){
var list=[
   {
  src:"../jpg/tuijian/a1.jpg",
  h1:"星座不求人",
  h3:"有了星座不求人从此星座不求人",
  wenzhang:"十二星座谁最迷人，小心你的肾"
   },  {
  src:"../jpg/tuijian/a2.jpg",
  h1:"法制日报",
  h3:"法制资讯 视角价值",
  wenzhang:"端午节传统习俗面临'缩水'"
   },
     {
  src:"../jpg/tuijian/a3.jpg",
  h1:"时尚范",
  h3:"按时分享最新的男女时尚资讯",
  wenzhang:"夏天太热想剪短发又怕被坑？教你一秒变短发"
   },
     {
  src:"../jpg/tuijian/a4.jpg",
  h1:"瑜伽健身网",
  h3:"专业的瑜伽知识，改变你的身材",
  wenzhang:"深蹲 让女人拥有性感无比蜜桃臀的王牌动作"
   },
     {
  src:"../jpg/tuijian/a5.jpg",
  h1:"好奇心日报",
  h3:"报道和你有关的商业新闻",
  wenzhang:"聚焦:霍金说我们并非无法逃离黑洞"
   }
      
     ]
    var y={
       getAllChat:function(){
    return list;
    }   }
 
return y;
}])
wy.controller('main',['$scope',function($scope){

}]).controller('xinwen',function($scope){})
.controller('yuedu',function($scope){})
.controller('radio',function($scope){})
.controller('talk',function($scope){})
.controller('wo',function($scope){})
.controller('shezhi',function($scope){})
.controller('wyYindao',function($scope){})
.controller('zhibo',function($scope){})
.controller('wodeding',['$scope','$y',function($scope,$y){
	$scope.list=$y.getAllChat();
}])
.controller('tuijian',['$scope','$y',function($scope,$y){
$scope.list=$y.getAllChat();

}])


wy.directive('wyFooter',[function(){
    return {
      restrict:'AEC',
      templateUrl:'html/directive/wy-footer.html'
    }
}])
// wy.directive('wyYindao',[function(){
// 	return{
// 		restrict:'AEC',
// 		templateUrl:'html/directive/yindao.html',
// 		link:function($scope,el){
// 			  var mySwiper = new Swiper ('.swiper-container', {
//         pagination : '.swiper-pagination',
//         paginationClickable :true,

// 		})
// 	}}
// }])

wy.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/',{
	controller:'xinwen',
	templateUrl:'html/template/xinwen.html',
}).when('/xinwen',{
	controller:'xinwen',
	templateUrl:'html/template/xinwen.html',
})
.when('/wodeding',{
	controller:'wodeding',
	templateUrl:'html/directive/wodeding.html',
})
.when('/zhibo',{
	controller:'zhibo',
	templateUrl:'html/directive/zhibo.html',
})
.when('/tuijian',{
	controller:'tuijian',
	templateUrl:'html/directive/tuijian.html',
})
.when('/yuedu',{
	controller:'yuedu',
	templateUrl:'html/template/yuedu.html',
})
.when('/shezhi',{
  controller:'shezhi',
  templateUrl:'html/directive/shezhi.html',
})
.when('/radio',{
	controller:'radio',
	templateUrl:'html/template/radio.html',
})
.when('/talk',{
	controller:'talk',
	templateUrl:'html/template/talk.html',
})
.when('/wo',{
	controller:'wo',
	templateUrl:'html/template/wo.html',
})
.otherwise({
	redirectToTo:'/'
})

}])