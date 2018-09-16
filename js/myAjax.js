(function(){
	myAjax = {};


	myAjax.jsonp = function(url,parm,callbackName,callback){
		window[callbackName] = callback;
		var scriptNode = document.createElement("script");
		scriptNode.setAttribute("src",url);
		document.getElementsByTagName('body')[0].appendChild(scriptNode);
		scriptNode.remove();
	
	}

	myAjax.get = function(url,parm,callback){
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					callback(undefined,xhr.responseText);
				}else{
					callback(new Error("错误"),undefined);
				}
			}
		}
		var str = url + "?";
		str += getParm(parm);
		xhr.open("get",str,true);
		xhr.send();


		function getParm(parm){
			var arr = [];
			for(var k in parm){
				arr.push(k + "=" + parm[k]); 
			}
			return arr.join("&");
		}
	};


	myAjax.post = function(url,parm,callback){
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					callback(undefined,xhr.responseText);
				}else{
					callback(new Error("错误"),undefined);
				}
			}
		}

		var str = getParm(parm);
		xhr.open("post",url,true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);


		function getParm(parm){
			var arr = [];
			for(var k in parm){
				arr.push(k + "=" + parm[k]); 
			}
			return arr.join("&");
		}
	}

})();