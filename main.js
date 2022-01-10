function onEntryIntersection(entry) {
  entry.target.classList.toggle("visible", entry.isIntersecting);
  const btn = document.getElementById(`${entry.target.id}-btn`);
  if (btn) {
    btn.blur();
    btn.classList.toggle("focus", entry.isIntersecting);
  }
}

function onIntersection(entries) {
  entries.forEach(onEntryIntersection);
}

function onSubmit(e) {
  e.preventDefault();
  const n = "neil";
  const m = "macmunn";
  const s = "Hello";
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const description = formData.get("description");
  const budget = formData.get("budget");
  const timeframe = formData.get("timeframe");
  const email = formData.get("email");
  const b = encodeURIComponent(`Hi Neil, 

My name is ${name} and I'm looking for help with ${description}. 

I have a budget of $${budget} and a timeframe of ${timeframe} weeks.

You can email me at ${email}.
`);
  const url = `mailto:${n}@${m}.com?subject=${s}&body=${b}`;
  window.open(url, "_blank");
  form.reset();
}

document.getElementById("hello-form").addEventListener("submit", onSubmit);

const observer = new IntersectionObserver(onIntersection, {
  root: null,
  threshold: 0.5,
});

const sections = Array.from(document.getElementsByTagName("section"));
sections.forEach((element) => observer.observe(element));
