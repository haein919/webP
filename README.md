# 웹퍼블리셔과정 20200727~20201218

1. git 계정 생성하기!

---

## git 사용법

1. github 가입

2. new repository 생성

3. git 자료를 복제

   1. 내컴퓨터에서 git clone 생성한 repository

4. README.md 파일을 생성 및 내용 기입

5. 계정을 연결

   1. 자료를 올리는 사람의 이름과 이메일주소 등록

      ```console
      $ git config --global user.name "John Doe"
      $ git config --global user.email "haein919@gmail.com"
      ```


      global 의미 : 컴퓨터 파일 내 뿐 아니라 git 홈페이지 내 파일에도 등록

      global을 쓰지 않으면 컴퓨터 자체내에만

   2. 

   3. 계정 id/pw 필요

6. github로 push처리하여 보내기(업로드)

7. github의 자료를 pull처리하여 가져오기



---

## 택배보내는 순서

1. 물건 포장
2. 상자에 담는다.
   `$ git add 파일명`
3. 우체국에 간다
4. 송장 작성
   (주소, 이름, 연락처, <u>물건내용</u>)
   `$ git commit -m` : 물건내용 작성 -m은 내용 요약
5. 돈지불 후 보내기
   `$ git push` : 기다리면 git 계정 id/pw 창 뜨고 입력 후 기다림