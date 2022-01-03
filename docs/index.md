
## Snapshot testing
- Sử dụng thư viện 'react-test-renderer'. Dùng để test trên dom ảo của react. \
Link: https://reactjs.org/docs/test-renderer.html 
- Thêm document của các api:
 - https://jestjs.io/docs/expect#tomatchsnapshotpropertymatchers-hint: lần gọi đầu tiên khi chưa có file snapshot tương ứng, hàm sẽ generate ra file, nên lần test đầu tiên lúc nào cũng pass. Các lần sau thì hàm so sánh file snapshot có sẵn. Có thể update file snapshot bằng câu lệnh
 - https://jestjs.io/docs/expect#tomatchinlinesnapshotpropertymatchers-inlinesnapshot: tương tự api trên nhưng thay vì generate ra file, thì nó modified luôn cái file test, là bỏ cái snapshot vào lại thành inline argument của hàm gọi.
 ## Dom testing
 - Sử dụng thư viện @testing-library/react. Thao tác trên DOM thật. \
Link: https://testing-library.com/docs/react-testing-library/intro/

