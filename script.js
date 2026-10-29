
const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");

const goals = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnerships for the Goals"
];

function getAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("hello") || q.includes("hi ") || q === "hi") {
    return "Hello! 🌍 Welcome to SDG Buddy. What would you like to learn about sustainability?";
  }

  if (q.includes("all 17") || q.includes("list") ||
      q.includes("names of the goals")) {
    return "🌍 The 17 Sustainable Development Goals:\n\n" +
      goals.map((g, i) => `${i + 1}. ${g}`).join("\n");
  }

  if (q.includes("what are the sdg") ||
      q.includes("what is sdg") ||
      q.includes("meaning of sdg")) {
    return "🌍 SDG stands for Sustainable Development Goals. The United Nations adopted 17 goals in 2015 to help end poverty, protect our planet, and improve people's lives by 2030.";
  }

  if (q.includes("student") || q.includes("school") ||
      q.includes("what can i do") || q.includes("help the planet")) {
    return "🙋 Students can make a difference!\n\n" +
      "💧 Save water and electricity.\n" +
      "♻️ Reuse and recycle materials.\n" +
      "🌳 Plant and care for trees.\n" +
      "📚 Share free learning resources.\n" +
      "🥗 Avoid wasting food.\n" +
      "🚲 Walk, cycle, or use public transport when possible.\n" +
      "🤝 Treat everyone fairly and respectfully.\n\n" +
      "Small actions by many people can create big changes!";
  }

  if (q.includes("why") && q.includes("important")) {
    return "💡 The SDGs are important because they provide a shared plan to reduce poverty and inequality, improve health and education, protect nature, and build a peaceful, sustainable future for everyone.";
  }

  if (q.includes("climate") || q.includes("global warming")) {
    return "🌡️ SDG 13: Climate Action.\n\nClimate change increases risks from heat, droughts, floods, and rising sea levels. We can help by saving energy, using cleaner transport, reducing waste, and protecting forests.";
  }

  if (q.includes("poverty") || q.includes("poor people")) {
    return "🤝 SDG 1: No Poverty.\n\nIts aim is to end poverty in all its forms everywhere. Access to education, healthcare, decent jobs, and social protection can help people build secure lives.";
  }

  if (q.includes("hunger") || q.includes("food waste") ||
      q.includes("zero hunger")) {
    return "🥗 SDG 2: Zero Hunger.\n\nThis goal aims to end hunger, improve nutrition, and support sustainable agriculture. Avoid wasting food and support efforts that make nutritious food accessible to everyone.";
  }

  if (q.includes("health") || q.includes("disease")) {
    return "❤️ SDG 3: Good Health and Well-being.\n\nThis goal promotes healthy lives and well-being for everyone. Vaccination, clean surroundings, nutritious food, and access to healthcare all matter.";
  }

  if (q.includes("education") || q.includes("schooling") ||
      q.includes("quality education")) {
    return "📚 SDG 4: Quality Education.\n\nEvery person deserves inclusive, equitable, quality education and lifelong learning opportunities. Sharing books and helping classmates learn are great ways to contribute.";
  }

  if (q.includes("gender") || q.includes("women") ||
      q.includes("girls")) {
    return "⚖️ SDG 5: Gender Equality.\n\nThis goal aims to achieve gender equality and empower all women and girls. Support equal opportunities, challenge unfair treatment, and respect everyone's rights.";
  }

  if (q.includes("water") || q.includes("sanitation")) {
    return "💧 SDG 6: Clean Water and Sanitation.\n\nEveryone needs safe water and proper sanitation. Fix leaks, avoid polluting water, and use water carefully.";
  }

  if (q.includes("energy") || q.includes("electricity") ||
      q.includes("solar")) {
    return "☀️ SDG 7: Affordable and Clean Energy.\n\nThis goal promotes access to affordable, reliable, sustainable, modern energy. Turn off unused lights and support clean energy solutions.";
  }

  if (q.includes("job") || q.includes("work") ||
      q.includes("economic growth")) {
    return "💼 SDG 8: Decent Work and Economic Growth.\n\nThis goal supports productive employment, decent work, workers' rights, and sustainable economic growth.";
  }

  if (q.includes("industry") || q.includes("innovation") ||
      q.includes("infrastructure") || q.includes("technology")) {
    return "💡 SDG 9: Industry, Innovation and Infrastructure.\n\nThis goal encourages resilient infrastructure, sustainable industry, and innovation that helps communities thrive.";
  }

  if (q.includes("inequal") || q.includes("discrimination")) {
    return "🤝 SDG 10: Reduced Inequalities.\n\nThis goal seeks to reduce inequality within and among countries. Inclusion, accessibility, fairness, and equal opportunity are essential.";
  }

  if (q.includes("city") || q.includes("cities") ||
      q.includes("community") || q.includes("transport")) {
    return "🏙️ SDG 11: Sustainable Cities and Communities.\n\nMake communities safer and more inclusive through accessible transport, green spaces, better housing, and disaster preparedness.";
  }

  if (q.includes("recycl") || q.includes("plastic") ||
      q.includes("consumption") || q.includes("waste")) {
    return "♻️ SDG 12: Responsible Consumption and Production.\n\nReduce waste, repair and reuse items, avoid unnecessary packaging, and choose products thoughtfully.";
  }

  if (q.includes("ocean") || q.includes("sea") ||
      q.includes("marine") || q.includes("underwater")) {
    return "🐠 SDG 14: Life Below Water.\n\nProtect oceans and marine life by preventing plastic pollution, reducing litter, and using marine resources sustainably.";
  }

  if (q.includes("forest") || q.includes("tree") ||
      q.includes("animal") || q.includes("wildlife") ||
      q.includes("biodiversity") || q.includes("land")) {
    return "🌳 SDG 15: Life on Land.\n\nProtect forests, wildlife, and ecosystems. Plant native trees where suitable, avoid disturbing animals, and help keep natural habitats clean.";
  }

  if (q.includes("peace") || q.includes("justice") ||
      q.includes("corruption") || q.includes("rights")) {
    return "🕊️ SDG 16: Peace, Justice and Strong Institutions.\n\nThis goal promotes peaceful societies, access to justice, accountable institutions, and protection of people's rights.";
  }

  if (q.includes("partnership") || q.includes("cooperation") ||
      q.includes("goal 17")) {
    return "🌐 SDG 17: Partnerships for the Goals.\n\nGovernments, schools, communities, businesses, and countries can work together and share knowledge and resources to achieve the SDGs.";
  }

  if (q.includes("thank")) {
    return "💚 You're welcome, changemaker! Keep learning and taking small steps toward a sustainable future.";
  }

  const goalNumber = q.match(/\b(?:sdg|goal)\s*(\d{1,2})\b/);

  if (goalNumber) {
    const n = Number(goalNumber[1]);
    if (n >= 1 && n <= 17) {
      return `🎯 SDG ${n}: ${goals[n - 1]}.\n\n` +
        getGoalTip(n);
    }
    return "There are 17 official SDGs. Please ask about a goal numbered 1 to 17.";
  }

  return "🌱 I can help with the 17 SDGs! Try asking:\n\n" +
    "• What are the SDGs?\n" +
    "• Tell me about SDG 13.\n" +
    "• How can students help?\n" +
    "• What is climate action?\n" +
    "• Why is quality education important?";
}

function getGoalTip(n) {
  const tips = [
    "Help support efforts that improve access to basic needs and opportunities.",
    "Avoid wasting food and learn about sustainable farming.",
    "Promote healthy habits and access to healthcare.",
    "Share books and help classmates learn.",
    "Support equal opportunities for everyone.",
    "Save water and help prevent water pollution.",
    "Save electricity and learn about renewable energy.",
    "Respect workers and learn about fair employment.",
    "Explore useful inventions and sustainable technology.",
    "Treat everyone fairly and support inclusion.",
    "Help keep your community safe, clean, and green.",
    "Reduce waste, reuse items, and recycle correctly.",
    "Save energy and help protect trees and forests.",
    "Keep plastic and rubbish out of waterways.",
    "Protect wildlife and natural habitats.",
    "Resolve disagreements peacefully and stand up for fairness.",
    "Collaborate with others to make a positive difference."
  ];
  return tips[n - 1];
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage(question) {
  const text = question.trim();
  if (!text) return;

  addMessage(text, "user");
  addMessage(getAnswer(text), "bot");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendMessage(input.value);
  input.value = "";
  input.focus();
});

document.querySelectorAll(".quick-questions button")
  .forEach(button => {
    button.addEventListener("click", function () {
      sendMessage(button.dataset.question);
    });
  });
