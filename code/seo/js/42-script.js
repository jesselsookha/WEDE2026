const projects = [
  { img: "images/table-oak.jpg",        title: "Oak Dining Table",     cat: "tables" },
  { img: "images/kitchen-modern.jpg",   title: "Modern Fitted Kitchen", cat: "kitchens" },
  { img: "images/cupboard-bedroom.jpg", title: "Bedroom Cupboards",    cat: "cupboards" },
  { img: "images/table-pine.jpg",       title: "Pine Coffee Table",    cat: "tables" },
  { img: "images/kitchen-country.jpg",  title: "Country-Style Kitchen",cat: "kitchens" },
  { img: "images/cupboard-office.jpg",  title: "Office Cupboards",     cat: "cupboards" }
];

const gallery = document.getElementById("gallery");
projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.dataset.category = p.cat;
  div.innerHTML = `<img src="${p.img}" alt=""><div class="title">${p.title}</div>`;
  gallery.appendChild(div);
});