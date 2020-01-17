var top_1 = ['Kha', 'Phương Linh', 'Trang', 'Zăn', 'Chú Phương','Linh Tăng','Vũ', 'Đình', 'Điệp', 'Quân Phạm', 'Phượng', 'Nơ', 'Tiên', 'Nái', 'Duy', 'Bé Đăng'];
var top_2 = [];
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
	// document.getElementById("chs_player_total").innerHTML = "Có " + player_total + " bé đang chờ, để được chọn =))";
}
function delete_item(i, j){
	j.splice(i,1);
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
	var list_random = 0;

	x = setInterval(function(){
		var num_random = Math.floor(Math.random() * top_1.length);
		if(list_random < 20){
			document.getElementById("chs_popup_content").innerHTML = top_1[num_random];
			list_random++;
		}else{
			clearInterval(x);
			top_2.push(top_1[num_random]);
			document.getElementById("chs_popup_content").innerHTML = top_1[num_random];
			delete_item(num_random, top_1);
			show_list_select();
		}
	}, 150);
}
function stop_count_down(){
	clearInterval(x);
}
function show_list_select(){
	var text_select = "<ul class='chs_list_item select'>";
	for (i = 0; i < top_2.length; i++){
		text_select += "<li class='chs_list_2team'>" + top_2[i] + "</li>";
	}
	text_select = text_select + "</ul>";
    document.getElementById("chs_list_select").innerHTML = text_select;
}
