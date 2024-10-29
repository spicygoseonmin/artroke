document.addEventListener("DOMContentLoaded", function() {
      const selectedCategory = localStorage.getItem("selectedCategory");
      
      if (selectedCategory) {
        // 모든 m_js 항목의 active 클래스 제거
        document.querySelectorAll('.m_js li').forEach(li => li.classList.remove('active'));
        
        // 저장된 카테고리에 해당하는 m_js 항목에 active 클래스 추가
        const targetItem = document.querySelector(`.m_js .${selectedCategory}`);
        if (targetItem) {
          targetItem.classList.add('active');
        }
      }
    });