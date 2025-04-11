// DOMの読み込み完了を待つ
document.addEventListener("DOMContentLoaded", function () {
    // 定数にHTML要素を代入（合格基準1）
    const textElement = document.getElementById("text");
    const buttonElement = document.getElementById("btn");
  
    // イベントリスナーでクリックを検知（合格基準2）
    buttonElement.addEventListener("click", function () {
      textElement.textContent = "ボタンをクリックしました";
    });
  });
  