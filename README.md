- .gitignore => là file xác đinh tệp hoặc file nào không nên đẩy (push) lên git

- .babel:=> chuyển vể cú pháp JS version cũ để có thể chạy được.
  Lỗi: Sử dụng keyword 'import' thay vì require('').. => Lỗi version JS
  => babel giúp fix lỗi version. Giúp code có thể chạy ở nhiều ứng dựng mà không quan tâm đến version. Dùng version nào của của JS cũng không lo bị lỗi.

- . ENV (Environment Variables) : luu tru cac tham so bien trong moi truong nodeJS

- DevTool - Nodemon : Công cụ giúp ứng dựng từ động 'restart' môi khi có file thay đổi (npm run dev). Mặc định nodemon sẽ quan sát các file sau: .js, .mjs, .coffee.. => giảm thời gian chạy npm run dev nhiều lần.
  npm i --save-exact nodemon@2.0.20

  - HD: thay node trong scripts/dev:"node ..." thành 'nodemon ..' in package.json

- dependencies và devDependencies

* dependencies : đóng gói các thư viện trong quá trình phát triển web xong và tiến hành công khai cho mọi xem hoặc phát hành
* devDependencies: loại bỏ thư viện không cần thiết khi phát triển web, chúng là những package/thư viện chỉ phục vụ hộ trợ môi trường code, ko phải những thư viện cho website.
