function solve(){
		let x1, x2, delta;
		x=parseFloat(a.value);
		y=parseFloat(b.value);
		z=parseFloat(c.value);
		if (x==0) {
			document.getElementById("noticehd").innerHTML="A phai khac khong";
		}
		else{
		delta=y*y-4*x*z;
		document.getElementById("dt").innerHTML=delta;
		if (delta<0){
			document.getElementById("notice").innerHTML="Phuong trinh vo nghiem";
			}
		if (delta==0) {
			document.getElementById("notice").innerHTML="Phuong trinh co nghiem kep";
			x1=(-y)/(2*x);
			x2=(-y)/(2*x);
			document.getElementById("n1").innerHTML=x1;
			document.getElementById("n2").innerHTML=x2;
		}
		if (delta>0) {
			document.getElementById("notice").innerHTML="Phuong trinh co hai nghiem";
			x1=(-y-Math.sqrt(delta))/(2*x);
			x2=(-y+Math.sqrt(delta))/(2*x);
			document.getElementById("n1").innerHTML=x1;
			document.getElementById("n2").innerHTML=x2;
		}
		}
	}