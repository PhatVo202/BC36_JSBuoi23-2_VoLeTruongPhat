// Bai 1:
/**
 * Input: cho ngay thang nam
 * Process:
 * Nhap ngay thang nam
 * Đối với tháng 2, nếu là năm nhuận sẽ có 29 ngày. Ngược lại là 28 ngày.
Cách kiểm tra năm nhuận:
Những năm chia hết cho 4 và không chia hết cho 100 (VD: 2012, 2016, 2020) ,hoặc những năm chia hết cho 400 (VD: 1600, 1200)
Khi người dùng chọn Ngày Mai thì chỉ cần tăng giá trị ngày lên 1. Ngược lại, chọn Ngày Hôm Qua thì trừ đi 1.
Kiểm tra các trường hợp ngày đầu tháng:
Nếu ngày nhập vào là ngày 1 của các tháng 5,7,10,12 thì Ngày Hôm Qua là ngày 30 của tháng trước. VD: 1/12 => 30/11.
Nếu ngày nhập vào là ngày 1 của các tháng 1,2,4,6,8,9,11 thì Ngày Hôm Qua là ngày 31 của tháng trước. VD: 1/2 => 31/1.
Nếu ngày nhập vào là ngày 1 của tháng 3 và là năm nhuận thì Ngày Hôm Qua là 29/2.
Ngược lại, không phải năm nhuận thì Ngày Hôm Qua là 28/2
Kiểm tra các trường hợp ngày cuối tháng:
Nếu ngày nhập vào là ngày 31 của các tháng 1,3,5,7,8,10,12 thì Ngày Mai là ngày 1 của tháng kế tiếp. VD: 31/1 => 1/2.
Nếu ngày nhập vào là ngày 30 của các tháng 4,6,9,11 thì Ngày Mai là ngày 1 của tháng kế tiếp. VD: 30/4 => 1/5.
Nếu là tháng 2 và năm nhuận thì ngày mai của ngày 29/2 mới là 1/3
Nếu là tháng 2 và năm không nhuận thì ngày mai của ngày 28/2 mới là 1/3
Kiểm tra các trường hợp ngày đầu và cuối năm:
Nếu ngày đầu năm thì ngày hôm qua là ngày 31/12 của năm cũ.VD: 1/1/2023 => 31/12/2022
Nếu ngày cuối năm thì ngày mai sẽ là 1/1 của năm mới. VD: 31/12/2022 => 1/1/2023
 * Output: xuat kq ngay hom qua, ngay mai
 */
var days = 1;
var months = 12;
var years = 2022;
var x;

switch (months) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    x = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    x = 30;
    break;
  case 2:
    if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
      x = 29;
    } else {
      x = 28;
    }
  default:
    x = 0;
}

if (days < 0) {
  console.log("ngay nhap sai");
} else {
  if (days === x) {
    if (months === 12) {
      days = 1;
      months = 1;
      years++;
    } else {
      days = 1;
      months++;
    }
  } else {
    days++;
    console.log("ngay mai la: " + days + "/" + months + "/" + years);
  }
}

// Bai2:
/**
 * Input: Cho thang nam
 * Process:
 * 1.Nhap vao thang nam
 * 2.Nhung thang co 31 ngay gom thang 1,3,5,7,8,10,12
 * 3.Nhung thang co 30 ngay gom thang 4,6,9,11
 * 4.Nhung thang co 29 ngay gom thang 2
 * 5.Kiem tra xem roi vao thang nao xuat gia tri ngay thang do
 * Output: xuat kq thang do co bao nhieu ngay
 */

var month = 3;
var year = 2023;

switch (month) {
  case 1:
    console.log("thang 1" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  case 2:
    console.log("thang 2" + " nam" + " " + year + " " + "co 29 ngay");
    break;
  case 3:
    console.log("thang 3" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  case 4:
    console.log("thang 4" + " nam" + " " + year + " " + "co 30 ngay");
    break;
  case 5:
    console.log("thang 5" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  case 6:
    console.log("thang 6" + " nam" + " " + year + " " + "co 30 ngay");
    break;
  case 7:
    console.log("thang 7" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  case 8:
    console.log("thang 8" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  case 9:
    console.log("thang 9" + " nam" + " " + year + " " + "co 30 ngay");
    break;
  case 10:
    console.log("thang 10" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  case 11:
    console.log("thang 11" + " nam" + " " + year + " " + "co 30 ngay");
    break;
  case 12:
    console.log("thang 12" + " nam" + " " + year + " " + "co 31 ngay");
    break;
  default:
    console.log("Error");
}
// Bai 3
/**
 * Input: Cho so nguyen co 3 chu so
 * Process:
 * 1.Nhap vao so nguyen co 3 chu so
 * 2.Kiem tra so nguyen nhap vao >100 va <999
 * 3.Tach hang tram, hang chuc , hang don vi
 *4.In ra cach doc
 Output:Xuat ra cach doc
 */
var n = 924;

var hundreds = Math.floor(n / 100);
var dozens = Math.floor((n / 10) % 10);
var units = Math.floor(n % 10);
switch (hundreds) {
  case 1:
    hundreds = "Mot";
    break;
  case 2:
    hundreds = "Hai";
    break;
  case 3:
    hundreds = "Ba";
    break;
  case 4:
    hundreds = "Bon";
    break;
  case 5:
    hundreds = "Nam";
    break;
  case 6:
    hundreds = "Sau";
    break;
  case 7:
    hundreds = "Bay";
    break;
  case 8:
    hundreds = "Tam";
    break;
  default:
    hundreds = "Chin";
}

switch (dozens) {
  case 1:
    dozens = "mot";
    break;
  case 2:
    dozens = "hai";
    break;
  case 3:
    dozens = "ba";
    break;
  case 4:
    dozens = "bon";
    break;
  case 5:
    dozens = "nam";
    break;
  case 6:
    dozens = "sau";
    break;
  case 7:
    dozens = "bay";
    break;
  case 8:
    dozens = "tam";
    break;
  default:
    dozens = "chin";
}

switch (units) {
  case 1:
    units = "mot";
    break;
  case 2:
    units = "hai";
    break;
  case 3:
    units = "ba";
    break;
  case 4:
    units = "bon";
    break;
  case 5:
    units = "nam";
    break;
  case 6:
    units = "sau";
    break;
  case 7:
    units = "bay";
    break;
  case 8:
    units = "tam";
    break;
  default:
    units = "chin";
}

if (n > 100 && n < 999) {
  console.log(hundreds + " tram " + dozens + " " + "muoi " + units);
} else {
  console.log("Khong hop le ");
}

/**
 * Bai4:
 *Input:Toa do nha x,y cua 3 sinh vien
 Process: 
 1.Nhap vao toa do x=, y= cua 3 sinh vien
2.Ap dung cach tinh mat phan theo toa do 
3.d = do dai cua doan duong, (x1,y1) toa do dau(toa do cua nha sinh vien), (x2,y2) toa do cuoi(toa do ngoi truong)
4.d = sqrt(pow(x2-x1,2) + pow(y2-y1,2)) 
5.so sanh doan duong dai nhat
Output: xuat ra ket qua sinh vien co toa do xa truong nhat;
 */

var nameS = "Cuong";
var x1 = 4,
  y1 = 10; //6

var names = "Thanh";
var x2 = 12,
  y2 = 10; //2

var namess = "Tan";
var x3 = 20,
  y3 = 20; //14.14

var x = 10,
  y = 10;

var d1 = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
var d2 = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
var d3 = Math.sqrt(Math.pow(x - x3, 2) + Math.pow(y - y3, 2));
if (d1 < d2) {
  if (d2 < d3) {
    console.log("Sinh vien xa truong nhat:" + namess);
  } else {
    console.log("Sinh vien xa truong nhat " + names);
  }
} else {
  if (d1 > d3) {
    console.log("sinh vien xa truong nhat:" + nameS);
  } else {
    console.log("Sinh vien xa truong nhat:" + namess);
  }
}
