// 메뉴 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    // 모든 메뉴 링크 가져오기
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // 각 메뉴 링크에 클릭 이벤트 추가
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 모든 메뉴에서 active 클래스 제거
            menuLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // 클릭된 메뉴에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 섹션 숨기기
            const allSections = document.querySelectorAll('.section-content');
            allSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 선택된 섹션만 표시
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // 해당 섹션으로 스크롤
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 첫 페이지 로드 시 URL의 해시가 있으면 해당 메뉴 활성화
    const hash = window.location.hash.substring(1);
    if (hash) {
        const activeLink = document.querySelector(`.menu-link[data-target="${hash}"]`);
        if (activeLink) {
            // 인위적으로 클릭 이벤트 발생
            activeLink.click();
        }
    }
});

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