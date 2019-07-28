var top_1 = ['Quân Phạm', 'Kha','Chú Phương', 'Nơ','Linh Tăng', 'Trang','Nái', 'Đình', 'Phương Linh','Văn', 'Duy', 'Điệp','Vũ', 'Phượng'];
// var top_2 = ['Quân Phạm', 'Kha','Chú Phương', 'Nơ','Linh Tăng', 'Trang','Nái', 'Phương Linh','Văn', 'Điệp','Vũ', 'Phượng'];
var player_total = "";
var top_num = "";
var text = "";
function list_view(){
	var num_team = "";
	var i = 0;
	player_total = top_1.length;

	text = "<ul class='chs_list_item'>";
	for (i = 0; i < top_1.length; i++){
		text += "<li class='chs_list_2team'>" + top_1[i] + "</li>";
	}
	text = text + "</ul>";
	document.getElementById("chs_list_view").innerHTML = text;
	document.getElementById("chs_player_total").innerHTML = "Có tổng cộng " + player_total + " bé";
}
function delete_item(i, j){
	j.splice(i,1);
	// i++;
	setTimeout(list_view, 300);
}

function myFunction() {
	$(".chs_btn_countdown").addClass("chs_btn_countdown_active");
	$("ul.chs_list_view").hide(1000);
		top_1.sort(function(a, b){return 0.4 - Math.random()});
	var i;
	text = "<ul class='chs_list_item'>";
	for (i = 0; i < top_1.length; i++){
		text += "<li class='chs_list_2team'>" + top_1[i] + "</li>";
	}

	text = text + "</ul>";
    document.getElementById("chs_list_table").innerHTML = text;
}

var x;
function count_down(){
	var num_random = Math.floor(Math.random() * top_1.length);
	document.getElementById("chs_popup_content").innerHTML = "START";
	var countDownDate = new Date().getTime();// + 4200;
	x = setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		document.getElementById("chs_popup_content").innerHTML = seconds;
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("chs_popup_content").innerHTML = top_1[num_random];
		}
		delete_item(num_random, top_1);
	}, 1000);
}
function stop_count_down(){
	clearInterval(x);
}
