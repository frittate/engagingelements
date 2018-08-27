let offer = document.querySelector("#offer");
let learn = document.querySelector("#learn");

offer.style.display = "none";
learn.style.display = "none";

let job = document.querySelector("#mce-JOB");
let jobSelected = job.options[job.selectedIndex].value;

job.addEventListener("change", () => {
    jobSelected = job.options[job.selectedIndex].value;
    switch(jobSelected){
        case "":
            offer.style.display = "none";
            learn.style.display = "none";
            break;
        case "als Student":
            learn.style.display = "block";
            offer.style.display = "none";
            break;
        case "als Tutor":
            offer.style.display = "block";
            learn.style.display = "none";
            break;
        case "als Student und als Tutor":
            offer.style.display = "block";
            learn.style.display = "block";
            break;
    }
});

let acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        this.classList.add("fa-question");
        this.classList.remove("fa-exclamation");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.classList.remove("fa-question");
        this.classList.add("fa-exclamation");
      } 
    });
}
