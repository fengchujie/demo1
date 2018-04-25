window.onload=function(){
	var oWrap=document.getElementById("wrap");
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oP=document.getElementsByTagName("p")[0];
	var oSp=document.getElementsByTagName("span")[0];
	var oImg=document.getElementsByTagName("img")[0];
	var arr1=["图片一","图片二","图片三","图片四"];
	var arr2=['img/1.jpg','img/2.png','img/3.png','img/4.png'];
	var num=0;
	var timer=null;
	function fn(){
		oP.innerHTML=num+1+"/"+arr1.length;
		oSp.innerHTML=arr1[num];
		oImg.src=arr2[num];
	}
	fn();
	function sj(){
		num++;
		if(num==arr1.length){
			num=0;
		}
		fn();
	}
	function fn2(){
		sj();
	}
	timer=setInterval(fn2,2000);
	oNext.onclick=function(){
		sj();
	}
	oPrev.onclick=function(){
		num--;
		if(num==-1){
			num=arr1.length-1;
		}
		fn();
	}
	oWrap.onmouseover=function(){
		clearInterval(timer);
	}
	oWrap.onmouseout=function(){
		timer=setInterval(fn2,2000);
	}
}
