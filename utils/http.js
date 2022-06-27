import {
	$http
} from "@escook/request-miniprogram"
$http.baseUrl = 'http://api.h-camel.com/api?mod=interview&ctr=issues&act='
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...',
	});
}

// 请求完成之后
$http.afterRequest = function(res) {
	uni.hideLoading();
}

// 将$http挂载到uni全局对象
uni.$http = $http;
