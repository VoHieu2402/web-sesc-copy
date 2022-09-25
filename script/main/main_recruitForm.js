document.getElementById("select-nv1").onchange = () => {
    hienThiCauHoi();
}

document.getElementById("select-nv2").onchange = () => {
    hienThiCauHoi();
}

function resetCauHoiPhanBan() {
    // DOM tới các tab chuyển câu hỏi
    let bcm = document.getElementById("btn-bcm");
    let bcmQues = document.getElementById("v-pills-bcm");

    let bdn = document.getElementById("btn-bdn");
    let bdnQues = document.getElementById("v-pills-bdn");

    let bns = document.getElementById("btn-bns");
    let bnsQues = document.getElementById("v-pills-bns");

    let btt = document.getElementById("btn-btt");
    let bttQues = document.getElementById("v-pills-btt");

    let tcsk = document.getElementById("btn-tcsk");
    let tcskQues = document.getElementById("v-pills-tcsk");

    // reset button
    bcm.className = "nav-link border border-dark rounded text-dark mx-2 disabled";
    bdn.className = "nav-link border border-dark rounded text-dark mx-2 disabled";
    bns.className = "nav-link border border-dark rounded text-dark mx-2 disabled";
    btt.className = "nav-link border border-dark rounded text-dark mx-2 disabled";
    tcsk.className = "nav-link border border-dark rounded text-dark mx-2 disabled";

    // reset cauhoi
    bcmQues.className = "tab-pane fade";
    bdnQues.className = "tab-pane fade";
    bnsQues.className = "tab-pane fade";
    bttQues.className = "tab-pane fade";
    tcskQues.className = "tab-pane fade";
}

function hienThiCauHoi() {
    // DOM tới nguyện vọng
    let nguyenVong1 = document.querySelector("body > section.form > div > div.cauHoiPhanBan > div.row > div:nth-child(1) > select").value;
    let nguyenVong2 = document.querySelector("body > section.form > div > div.cauHoiPhanBan > div.row > div:nth-child(2) > select").value;

    // DOM tới các tab chuyển câu hỏi
    let bcm = document.getElementById("btn-bcm");
    let bcmQues = document.getElementById("v-pills-bcm");

    let bdn = document.getElementById("btn-bdn");
    let bdnQues = document.getElementById("v-pills-bdn");

    let bns = document.getElementById("btn-bns");
    let bnsQues = document.getElementById("v-pills-bns");

    let btt = document.getElementById("btn-btt");
    let bttQues = document.getElementById("v-pills-btt");

    let tcsk = document.getElementById("btn-tcsk");
    let tcskQues = document.getElementById("v-pills-tcsk");

    // Hiển thị các tab câu hỏi
    if(nguyenVong1=="Nguyện Vọng 1") {
        document.getElementById("noti-nguyenVong").style.display = "block";
        resetCauHoiPhanBan();
    }
    if(nguyenVong1!="Nguyện Vọng 1") {
        // tắt noti lỗi
        document.getElementById("noti-nguyenVong").style.display = "none";

        document.querySelector("body > section.form > div > div.cauHoiPhanBan > div.tab-dpt").style.display = "block";

        resetCauHoiPhanBan();

        if(nguyenVong1=="bcm") {
            bcm.classList.remove("disabled");
            bcm.classList.add("active");
            bcmQues.classList.add("active");
            bcmQues.classList.add("show");
        } else if(nguyenVong1=="bdn") {
            bdn.classList.remove("disabled");
            bdn.classList.add("active");
            bdnQues.classList.add("active");
            bdnQues.classList.add("show");
        } else if(nguyenVong1=="bns") {
            bns.classList.remove("disabled");
            bns.classList.add("active");
            bnsQues.classList.add("active");
            bnsQues.classList.add("show");
        } else if(nguyenVong1=="btt") {
            btt.classList.remove("disabled");
            btt.classList.add("active");
            bttQues.classList.add("active");
            bttQues.classList.add("show");
        } else {
            tcsk.classList.remove("disabled");
            tcsk.classList.add("active");
            tcskQues.classList.add("active");
            tcskQues.classList.add("show");
        }

        if(nguyenVong2=="bcm") {
            bcm.classList.remove("disabled");
        } else if(nguyenVong2=="bdn") {
            bdn.classList.remove("disabled");
        } else if(nguyenVong2=="bns") {
            bns.classList.remove("disabled");
        } else if(nguyenVong2=="btt") {
            btt.classList.remove("disabled");
        } else if(nguyenVong2=="tcsk") {
            tcsk.classList.remove("disabled");
        }
    }
}
