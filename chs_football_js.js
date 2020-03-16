var list_all = ['Phương Linh', 'Trang', 'Chú Phương','Vũ Cọp', 'Đình Đình', 'Điệp', 'Quân Phạm', 'Phượng', 'Nơ', 'Thái Tiên', 'Ti Nhỏ', 'Nhum', 'Linh Tăng', 'Nái', 'Bé Đăng', 'Duy', 'Kha', 'Zăn'];
var list_1 = ['linh_hoang', 'trang_nguyen', 'phuong_ho','vu_nguyen', 'dinh_nguyen', 'diep_tran', 'quan_pham', 'phuong_nguyen', 'quynh_le', 'tien_nguyen', 'tien_pham', 'nhan_nguyen'];
var list_2 = ['Linh Tăng', 'Nái', 'Bé Đăng', 'Duy', 'Kha', 'Zăn'];
var player_total = "";
var list_num = "";
var text = "";

function list_view(){
	var num_team = "";
	var i = 0;
	player_total = list_1.length;
	list_all.length = player_total;
	text = "<ul class='chs_list_item'>";
	for (i = 0; i < list_all.length; i++){
		text += "<li class='chs_list_2team'>" + list_all[i] + "</li>";
	}
	text = text + "</ul>";
	document.getElementById("chs_list_view").innerHTML = text;
}
function delete_item(i, j){
	j.splice(i,1);
	setTimeout(list_view, 300);
}

function myFunction() {
	$(".chs_btn_countdown").addClass("chs_btn_countdown_active");
	$("ul.chs_list_view").hide(1000);
	list_1.sort(function(a, b){return 0.4 - Math.random()});
	var i;
	text = "<ul class='chs_list_item'>";
	for (i = 0; i < list_1.length; i++){
		text += "<li class='chs_list_2team'>" + list_1[i] + "</li>";
	}

	text = text + "</ul>";
    document.getElementById("chs_list_table").innerHTML = text;
}

var x;
function count_down(){
	var list_random = 0;
	x = setInterval(function(){
		var num_random = Math.floor(Math.random() * list_1.length);
		if(list_random < 20){
			document.getElementById("chs_popup_content").innerHTML = list_all[num_random];
			document.getElementById("chs_popup_img").style.backgroundImage = "url('images/" + list_1[num_random] + ".jpg')";
			$("#chs_popup_img").show(200);
			list_random++;
		}else{
			clearInterval(x);
			list_2.push(list_all[num_random]);
			document.getElementById("chs_popup_content").innerHTML = list_all[num_random];
			document.getElementById("chs_popup_img").style.backgroundImage = "url('images/" + list_1[num_random] + ".jpg')";
			delete_item(num_random, list_1);
			delete_item(num_random, list_all);
			show_list_select();
			$("#chs_popup_img").show(200);
		}
	}, 150);
}
function slist_count_down(){
	clearInterval(x);
}
function show_list_select(){
	var text_select = "<ul class='chs_list_item select'>";
	for (i = 0; i < list_2.length; i++){
		text_select += "<li class='chs_list_2team'>" + list_2[i] + "</li>";
	}
	text_select = text_select + "</ul>";
    document.getElementById("chs_list_select").innerHTML = text_select;
}
