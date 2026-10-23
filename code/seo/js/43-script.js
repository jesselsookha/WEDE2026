const buttons = document.querySelectorAll(".filter-btn"); 
const items =  document.querySelectorAll(".gallery-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const cat = btn.dataset.category;
        items.forEach(item => {
            const show = cat === "all" || item.dataset.category === cat;
            item.style.display = show ? "" : "none"; 
        });
    });
});