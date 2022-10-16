getInputById("btn-dropDownMenu").onclick = () => {
    if(document.querySelector("body > header > div > div").style.display == "none") {
        document.querySelector("body > header > div > div").style.display = "block";
    } else {
        document.querySelector("body > header > div > div").style.display = "none";
    }
}

document.getElementById("select-nv1").onchange = () => {
    resetCauTraLoiPhanBan("nv1");
    hienThiCauHoi();
}

document.getElementById("select-nv2").onchange = () => {
    resetCauTraLoiPhanBan("nv2");
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
    bcm.className = "nav-link border border-dark rounded text-dark disabled";
    bdn.className = "nav-link border border-dark rounded text-dark disabled";
    bns.className = "nav-link border border-dark rounded text-dark disabled";
    btt.className = "nav-link border border-dark rounded text-dark disabled";
    tcsk.className = "nav-link border border-dark rounded text-dark disabled";

    // reset cauhoi
    bcmQues.className = "tab-pane fade";
    bdnQues.className = "tab-pane fade";
    bnsQues.className = "tab-pane fade";
    bttQues.className = "tab-pane fade";
    tcskQues.className = "tab-pane fade";
}

function resetCauTraLoiPhanBan(nv) {
    if(document.getElementsByClassName(nv)[0]) {
        let nv_class = document.getElementsByClassName(nv)[0];
        let nv_forms = nv_class.getElementsByClassName("form-control");
        let nv_error = nv_class.getElementsByClassName("noti-error");
        for(let i=0; i<nv_forms.length; i++) {
            nv_forms[i].value = "";
            nv_error[i].style.display = "none";
        }
    }
}

function hienThiCauHoi() {
    // DOM tới nguyện vọng
    let nguyenVong1 = getInputById("select-nv1").value;
    let nguyenVong2 = getInputById("select-nv2").value;

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
            bcmQues.classList.add("nv1");
        } else if(nguyenVong1=="bdn") {
            bdn.classList.remove("disabled");
            bdn.classList.add("active");
            bdnQues.classList.add("active");
            bdnQues.classList.add("show");
            bdnQues.classList.add("nv1");
        } else if(nguyenVong1=="bns") {
            bns.classList.remove("disabled");
            bns.classList.add("active");
            bnsQues.classList.add("active");
            bnsQues.classList.add("show");
            bnsQues.classList.add("nv1");
        } else if(nguyenVong1=="btt") {
            btt.classList.remove("disabled");
            btt.classList.add("active");
            bttQues.classList.add("active");
            bttQues.classList.add("show");
            bttQues.classList.add("nv1");
        } else {
            tcsk.classList.remove("disabled");
            tcsk.classList.add("active");
            tcskQues.classList.add("active");
            tcskQues.classList.add("show");
            tcskQues.classList.add("nv1");
        }

        if(nguyenVong2=="bcm") {
            bcm.classList.remove("disabled");
            bcmQues.classList.add("nv2");
        } else if(nguyenVong2=="bdn") {
            bdn.classList.remove("disabled");
            bdnQues.classList.add("nv2");
        } else if(nguyenVong2=="bns") {
            bns.classList.remove("disabled");
            bnsQues.classList.add("nv2");
        } else if(nguyenVong2=="btt") {
            btt.classList.remove("disabled");
            bttQues.classList.add("nv2");
        } else if(nguyenVong2=="tcsk") {
            tcsk.classList.remove("disabled");
            tcskQues.classList.add("nv2");
        }
    }
}

let thongTinCaNhan = new ThongTinCaNhan();
let hieuBietChung = new HieuBietChung();
let khamPhaBanThan = new KhamPhaBanThan();
let cauHoiPhanBan = new CauHoiPhanBan();
let validity = new Validity();
// let service = new Service();

function getInputById(id) {
    return document.getElementById(id);
}

function getThongTinCaNhan() {
    // DOM tới thongTinCaNhan
    thongTinCaNhan.hoTen = getInputById("hoTen").value;
    thongTinCaNhan.ngaySinh = getInputById("ngaySinh").value;
    thongTinCaNhan.maSV = getInputById("maSV").value;
    thongTinCaNhan.lopSV = getInputById("lopSV").value;
    if(getInputById("nam").checked==1) {
        thongTinCaNhan.gioiTinh = "Nam";
    } else if(getInputById("nu").checked==1) {
        thongTinCaNhan.gioiTinh = "Nữ";
    } else {
        thongTinCaNhan.gioiTinh = "Khác"
    }
    
    thongTinCaNhan.sdth = getInputById("sdt").value;
    thongTinCaNhan.email = getInputById("email").value;
    thongTinCaNhan.linkFb = getInputById("linkFb").value;
}

function getHieuBietChung() {
    hieuBietChung.q1 = getInputById("cauHoi1").value;
    hieuBietChung.q2 = getInputById("cauHoi2").value;
    hieuBietChung.q3 = getInputById("cauHoi3").value;
    hieuBietChung.q4 = getInputById("cauHoi4").value;
    hieuBietChung.q5 = getInputById("cauHoi5").value;
}

function getKhamPhaBanThan() {
    khamPhaBanThan.kp1 = getInputById("khamPha1").value;
    khamPhaBanThan.kp2 = getInputById("khamPha2").value;
    khamPhaBanThan.kp3 = getInputById("khamPha3").value;

    // couples of characters
    // couple 1
    if(getInputById("teamwork").checked==1) {
        khamPhaBanThan.kp4C1 = "Làm việc teamwork";
    } else {
        khamPhaBanThan.kp4C1 = "Làm việc 1 mình";
    };
    // couple 2
    if(getInputById("multi-tasking").checked==1) {
        khamPhaBanThan.kp4C2 = "Multi-tasking";
    } else {
        khamPhaBanThan.kp4C2 = "Single-tasking";
    };
    // couple 3
    if(getInputById("lyTri").checked==1) {
        khamPhaBanThan.kp4C3 = "Lý trí";
    } else {
        khamPhaBanThan.kp4C3 = "Cảm xúc";
    };
    // couple 4
    if(getInputById("huongNoi").checked==1) {
        khamPhaBanThan.kp4C4 = "Hướng nội";
    } else {
        khamPhaBanThan.kp4C4 = "Hướng ngoại";
    };
    // couple 5
    if(getInputById("nghiemTuc").checked==1) {
        khamPhaBanThan.kp4C5 = "Nghiêm túc";
    } else {
        khamPhaBanThan.kp4C5 = "Hài hước";
    };
    // couple 6
    if(getInputById("thichHanhDong").checked==1) {
        khamPhaBanThan.kp4C6 = "Thích hành động";
    } else {
        khamPhaBanThan.kp4C6 = "Thích lời nói";
    };
    // couple 7
    if(getInputById("naoNhiet").checked==1) {
        khamPhaBanThan.kp4C7 = "Thích nơi đông người náo nhiệt";
    } else {
        khamPhaBanThan.kp4C7 = "Thích yên tĩnh một mình";
    };
    // couple 8
    if(getInputById("chiaSe").checked==1) {
        khamPhaBanThan.kp4C8 = "Chia sẻ thể hiện cảm xúc";
    } else {
        khamPhaBanThan.kp4C8 = "Riêng tư, khép kín";
    };
    // couple 9
    if(getInputById("nheNhang").checked==1) {
        khamPhaBanThan.kp4C9 = "Nhẹ nhàng tinh tế";
    } else {
        khamPhaBanThan.kp4C9 = "Thẳng thắn góp ý";
    };
    // couple 10
    if(getInputById("khuonMau").checked==1) {
        khamPhaBanThan.kp4C10 = "Khuôn mẫu";
    } else {
        khamPhaBanThan.kp4C10 = "Sáng tạo";
    };

    khamPhaBanThan.kp5 = getInputById("khamPha5").value;
}

function getCauHoiPhanBan() {
    cauHoiPhanBan.nv1 = document.querySelector("body > section.form > div > div.cauHoiPhanBan > div.row > div:nth-child(1) > select").value;
    cauHoiPhanBan.nv2 = document.querySelector("body > section.form > div > div.cauHoiPhanBan > div.row > div:nth-child(2) > select").value;
    cauHoiPhanBan.bcm1 = getInputById("cauHoiBCM1").value;
    cauHoiPhanBan.bdn1 = getInputById("cauHoiBDN1").value;
    cauHoiPhanBan.bns1 = getInputById("cauHoiBNS1").value;
    cauHoiPhanBan.btt1 = getInputById("cauHoiBTT1").value;
    cauHoiPhanBan.tcsk1 = getInputById("cauHoiTCSK1").value;
}

document.getElementsByClassName("overlayModal")[0].style.display = "none";
document.getElementsByClassName("loader-container")[0].style.display = "none";

getInputById("submit").onclick = () => {
    getThongTinCaNhan();
    getHieuBietChung();
    getKhamPhaBanThan();
    getCauHoiPhanBan();
    let isValid = true;
    document.getElementsByClassName("overlayModal")[0].style.display = "block";
    document.getElementsByClassName("loader-container")[0].style.display = "block";

    SheetDB.read('https://sheetdb.io/api/v1/bnjw1767itnei', {sheet: "Sheet1"}).then(function(result){
        document.getElementsByClassName("overlayModal")[0].style.display = "none";
        document.getElementsByClassName("loader-container")[0].style.display = "none";
        // Null Check
        // getThongTinCaNhan
        isValid &= validity.nullCheck(thongTinCaNhan.hoTen,"noti-hoTen","(*) Vui lòng nhập họ tên");
        isValid &= validity.nullCheck(thongTinCaNhan.ngaySinh,"noti-ngaySinh","(*) Vui lòng nhập ngày sinh");
        isValid &= validity.nullCheck(thongTinCaNhan.maSV,"noti-maSV","(*) Vui lòng nhập mã sinh viên ");
        isValid &= validity.nullCheck(thongTinCaNhan.lopSV,"noti-lopSV","(*) Vui lòng nhập lớp");
        isValid &= validity.nullCheck(thongTinCaNhan.sdth,"noti-sdt","(*) Vui lòng nhập số điện thoại");
        isValid &= validity.nullCheck(thongTinCaNhan.email,"noti-email","(*) Vui lòng nhập email");
        isValid &= validity.nullCheck(thongTinCaNhan.linkFb,"noti-linkFb","(*) Vui lòng nhập link facebook");
        // check the availability of maSV
        var i = 0;
        var n = 0;
        if(thongTinCaNhan.maSV!="") {
            while(i<result.length) {
                if(result[i]["Mã SV"]==thongTinCaNhan.maSV) {
                    document.getElementById("noti-maSV").style.display = "block";
                    document.getElementById("noti-maSV").innerHTML = "<p>(*) Mã sinh viên này đã tồn tại. Vui lòng nhập mã sinh viên khác</p>";
                    isValid = false;
                    break;
                } else {
                    document.getElementById("noti-maSV").style.display = "none";
                    document.getElementById("noti-maSV").innerHTML = "<p></p>";
                    isValid &= true;
                }
                i++;
            }
        }

        if(thongTinCaNhan.email!="") {
            while(n<result.length) {
                if(result[n]["Email"]==thongTinCaNhan.email) {
                    document.getElementById("noti-email").style.display = "block";
                    document.getElementById("noti-email").innerHTML = "<p>(*) Email này đã tồn tại. Vui lòng nhập email khác</p>";
                    isValid = false;
                    break;
                } else {
                    document.getElementById("noti-email").style.display = "none";
                    document.getElementById("noti-email").innerHTML = "<p></p>";
                    isValid &= true;
                }
                n++;
            }
        }

        // getHieuBietChung
        isValid &= validity.nullCheck(hieuBietChung.q1,"noti-cauHoi1","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(hieuBietChung.q2,"noti-cauHoi2","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(hieuBietChung.q3,"noti-cauHoi3","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(hieuBietChung.q4,"noti-cauHoi4","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(hieuBietChung.q5,"noti-cauHoi5","(*) Vui lòng điền câu trả lời");

        // getKhamPhaBanThan
        isValid &= validity.nullCheck(khamPhaBanThan.kp1,"noti-khamPha1","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(khamPhaBanThan.kp2,"noti-khamPha2","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(khamPhaBanThan.kp3,"noti-khamPha3","(*) Vui lòng điền câu trả lời");
        isValid &= validity.nullCheck(khamPhaBanThan.kp5,"noti-khamPha5","(*) Vui lòng điền câu trả lời");

        // getCauHoiPhanBan
        isValid &= getInputById("select-nv1").value!="Nguyện Vọng 1";
        if(cauHoiPhanBan.nv1=="bcm" || cauHoiPhanBan.nv2=="bcm") {
            isValid &= validity.nullCheck(cauHoiPhanBan.bcm1,"noti-cauHoiBCM1","(*) Vui lòng điền câu trả lời");
        }
        if(cauHoiPhanBan.nv1=="bdn" || cauHoiPhanBan.nv2=="bdn") {
            isValid &= validity.nullCheck(cauHoiPhanBan.bdn1,"noti-cauHoiBDN1","(*) Vui lòng điền câu trả lời");
        }
        if(cauHoiPhanBan.nv1=="bns" || cauHoiPhanBan.nv2=="bns") {
            isValid &= validity.nullCheck(cauHoiPhanBan.bns1,"noti-cauHoiBNS1","(*) Vui lòng điền câu trả lời");
        }
        if(cauHoiPhanBan.nv1=="btt" || cauHoiPhanBan.nv2=="btt") {
            isValid &= validity.nullCheck(cauHoiPhanBan.btt1,"noti-cauHoiBTT1","(*) Vui lòng điền câu trả lời");
        }
        if(cauHoiPhanBan.nv1=="tcsk" || cauHoiPhanBan.nv2=="tcsk") {
            isValid &= validity.nullCheck(cauHoiPhanBan.tcsk1,"noti-cauHoiTCSK1","(*) Vui lòng điền câu trả lời");
        }


        if(isValid) {
            document.getElementById("noti-fullForm").style.display = "none";
            document.getElementById("noti-fullForm").innerHTML = `<p></p>`;

            // create the application
            let timestamp = Date().toLocaleString();
            let application = new Application("",timestamp,thongTinCaNhan,hieuBietChung, khamPhaBanThan, cauHoiPhanBan);
            
            // write on the sheet
            SheetDB.write(
                'https://sheetdb.io/api/v1/bnjw1767itnei',
                {
                    sheet: 'Sheet1',
                    data: {
                        timestamp: application.timestamp,

                        // thongTinCaNhan
                        "Họ và tên": application.thongTinCaNhan.hoTen,
                        "Ngày sinh": application.thongTinCaNhan.ngaySinh,
                        "Mã SV": application.thongTinCaNhan.maSV,
                        "Lớp": application.thongTinCaNhan.lopSV,
                        "Giới tính": application.thongTinCaNhan.gioiTinh,
                        "Số điện thoại": application.thongTinCaNhan.sdth,
                        "Email": application.thongTinCaNhan.email,
                        "Link Facebook": application.thongTinCaNhan.linkFb,

                        // hieuBietChung
                        "Bạn biết gì về CLB Tài chính - Chứng khoán SeSC?": application.hieuBietChung.q1,
                        "Bạn biết CLB Tài chính - Chứng khoán SeSC qua các kênh nào?": application.hieuBietChung.q2,
                        "Trong số 35 CLB - Đội - Nhóm của trường Đại học Ngoại thương CS2, vì sao bạn lại chọn SeSC là nơi cùng gắn bó trong quãng đời sinh viên?": application.hieuBietChung.q3,
                        "Bạn mong muốn nhận được những giá trị gì từ SeSC?": application.hieuBietChung.q4,
                        "Văn hóa gia đình là truyền thống được duy trì và phát triển qua các nhiệm kỳ của SeSC, bạn hiểu văn hóa gia đình là như thế nào?": application.hieuBietChung.q5,

                        // khamPhaBanThan
                        "Hãy cho SeSC 3 từ khoá miêu tả về tính cách của bạn. (Lưu ý: chỉ 3 từ khoá ngắn gọn thôi nhé)": application.khamPhaBanThan.kp1,
                        "Hãy nêu 3 điểm mạnh của bạn. Bạn có nghĩ rằng 3 điểm mạnh đó sẽ có thể giúp bạn trở nên hoà hợp và gắn bó lâu dài cùng với SeSC hay không?": application.khamPhaBanThan.kp2,
                        "Hãy nêu 3 điểm yếu của bạn. Bạn có nghĩ rằng 3 điểm yếu đó sẽ trở thành những trở ngại lớn đối với bạn trong việc giao tiếp và làm việc hằng ngày với mọi người hay không?": application.khamPhaBanThan.kp3,
                        "Tính cách 1": application.khamPhaBanThan.kp4C1,
                        "Tính cách 2": application.khamPhaBanThan.kp4C2,
                        "Tính cách 3": application.khamPhaBanThan.kp4C3,
                        "Tính cách 4": application.khamPhaBanThan.kp4C4,
                        "Tính cách 5": application.khamPhaBanThan.kp4C5,
                        "Tính cách 6": application.khamPhaBanThan.kp4C6,
                        "Tính cách 7": application.khamPhaBanThan.kp4C7,
                        "Tính cách 8": application.khamPhaBanThan.kp4C8,
                        "Tính cách 9": application.khamPhaBanThan.kp4C9,
                        "Tính cách 10": application.khamPhaBanThan.kp4C10,
                        "Câu hỏi tình huống khách quan: “High risk high return” là một thuật ngữ không còn xa lạ với những nhà đầu tư chứng khoán. Nhiều người tin rằng tỷ lệ rủi ro sẽ đi cùng với tỷ suất sinh lời hay càng rủi ro thì sẽ càng có nhiều lợi nhuận. Cũng như trong thực tế cuộc sống, việc chúng ta đương đầu với nguy hiểm, thách thức sẽ đem đến một thành công vang dội. Hãy nêu quan điểm của bạn về vấn đề trên.": application.khamPhaBanThan.kp5,

                        // cauHoiPhanBan
                        "BCM": application.cauHoiPhanBan.bcm1,
                        "BDN": application.cauHoiPhanBan.bdn1,
                        "BNS": application.cauHoiPhanBan.bns1,
                        "BTT": application.cauHoiPhanBan.btt1,
                        "TCSK": application.cauHoiPhanBan.tcsk1,
                    }
                }
            )
                .then(
                    function(result){
                        location.href = "/html/recruitment/confirmSubmission.html";
                        console.log(result);
                    }, 
                    function(error){
                        console.log(error);
                    }
                ); 
            
        } else {
            document.getElementById("noti-fullForm").style.display = "block";
            document.getElementById("noti-fullForm").innerHTML = `<p>Không thể nộp form vì thiếu dữ liệu đầu vào hoặc dữ liệu không hợp lệ.</p>
                <p>Vui lòng kiểm tra lại dữ liệu.</p>`;
        }
                
    }, function(error){
                console.log(error);
    });
}

