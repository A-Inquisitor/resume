// Navigation functionality
const links = document.querySelectorAll('.sidebar a');
const pages = document.querySelectorAll('.page');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
    const targetId = link.getAttribute('href').substring(1);
    pages.forEach((page) => {
      page.classList.add('hidden');
    });
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
      targetPage.classList.remove('hidden');
    }
  });
});

// Timeline Data & Rendering
const timelineData = [
  {
    date: "Sept 2024 – Jan 2025",
    title: "International Royalty Income Analyst",
    company: "Warner Chappell Music",
    details: [
      "Collaborated with Local Royalties, Finance, and Copyright teams to ensure accurate processing and reconciliation of international royalty income.",
      "Processed high-volume royalty data, managing over 10,000+ lines of data efficiently.",
      "Facilitated the end-to-end royalty statement process, ensuring compliance and timely disbursement.",
      "Managed and prioritized the release of suspense items and supported special projects."
    ],
  },
  {
    date: "Oct 2023 – Jun 2024",
    title: "Data Analyst Trainee",
    company: "AiCore",
    details: [
      "Developed real-world applications through project-based learning, including International Retailer Power BI Report and EDA Customer Loans in Finance.",
      "Received comprehensive training in data analysis, covering visualisation, preprocessing, and data modelling."
    ],
  },
  {
    date: "Nov 2021 – Jul 2024",
    title: "Director",
    company: "Aurorian Records & Aurorian Music Publishing",
    details: [
      "Managed large datasets and processed substantial royalty payments, ensuring accuracy and timely distribution.",
      "Built strong relationships with artists and industry professionals, facilitating effective data sharing and collaboration.",
      "Conducted regular data quality checks and used advanced Excel skills for data manipulation and reporting."
    ],
  },
];

const timeline = document.querySelector(".timeline");
if (timeline) {
  timelineData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("timeline-item");
    div.innerHTML = `
      <h3><span>${item.date}</span></h3>
      <h4>${item.title} @ ${item.company}</h4>
      <ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
    `;
    timeline.appendChild(div);
  });
}

// Accordion functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    this.classList.toggle("active");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
