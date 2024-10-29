// Thay đổi các thông số sau đây theo yêu cầu của bạn
const BANK_ID = "970422"; // ID ngân hàng
const ACCOUNT_NO = "98888888899"; // Số tài khoản
const AMOUNT = "5000000"; // Số tiền
const DESCRIPTION = "Donate"; // Mô tả
const ACCOUNT_NAME = "NGUYENQUOCVINH"; // Tên tài khoản

// Tạo URL cho ảnh QR
const qrImageUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-qr_only.png?amount=${AMOUNT}&addInfo=${DESCRIPTION}&accountName=${ACCOUNT_NAME}`;

// Gán URL cho thẻ img
document.getElementById("qrImage").src = qrImageUrl;
