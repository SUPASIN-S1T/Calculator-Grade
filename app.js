const input = document.querySelector(".input-card");
const span = document.querySelector(".result");

const calculatorGrade = (score) => {
  let result;

  if (score >= 80) {
    result = "A";
  } else if (score >= 70) {
    result = "B";
  } else if (score >= 60) {
    result = "C";
  } else if (score >= 50) {
    result = "D";
  } else {
    result = "F";
  }

  return result;
};

input.addEventListener("keyup", (event) => {
  const score = Number(event.currentTarget.value);
  const result = calculatorGrade(score);

  if (input.value.trim() === "" || input.value < 0) {
    span.innerHTML = "";
    span.classList.remove("success", "danger", "warning");
  } else {
    if (result === "A" || result === "B") {
      if (
        span.classList.contains("warning") ||
        span.classList.contains("danger")
      ) {
        span.classList.remove("warning", "danger");
      }
      span.classList.add("success");
    } else if (result === "C" || result === "D") {
      if (
        span.classList.contains("success") ||
        span.classList.contains("danger")
      ) {
        span.classList.remove("success", "danger");
      }
      span.classList.add("warning");
    } else if (result === "F") {
      if (
        span.classList.contains("success") ||
        span.classList.contains("warning")
      ) {
        span.classList.remove("success", "warning");
      }
      span.classList.add("danger");
    }

    span.innerHTML = `คะแนนของคุณ : ${score} | เกรดของคุณ : ${result}`;
  }
});
