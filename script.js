// 스크롤에 따라 상단 탐색 메뉴 표시/숨김
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".top-nav").style.top = "0";
    } else {
        document.querySelector(".top-nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    
    // 스크롤 위치에 따라 맨 위로 버튼 표시/숨김
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector(".back-to-top").style.display = "flex";
    } else {
        document.querySelector(".back-to-top").style.display = "none";
    }
}

// 맨 위로 버튼 클릭시 상단으로 스크롤
document.querySelector(".back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// 페이지 로드시 맨 위로 버튼 상태 설정
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".back-to-top").style.display = "none";
});