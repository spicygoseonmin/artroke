function saveCategory(category) {
  localStorage.setItem("selectedCategory", category);
  window.location.href = "c_study_class.html"; // 다음 페이지로 이동
}
