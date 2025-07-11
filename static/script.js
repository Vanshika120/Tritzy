// script.js

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const disease = params.get("disease") || "Unknown";
  console.log("Disease received:", disease);  // <-- Add this line

  const confidence = params.get("confidence");
  const risk = parseInt(params.get("risk"));

  const diseaseName = document.getElementById("disease-name");
  const confidenceText = document.getElementById("confidence");
  const climate = document.getElementById("climate");
  const remediesList = document.getElementById("remedies");

  // Check if elements exist to prevent runtime errors
  if (diseaseName) {
    diseaseName.textContent = disease;
  }

  if (confidenceText) {
    confidenceText.textContent = confidence ? `${confidence} confidence` : "Confidence not available";
  }

  if (climate) {
    climate.textContent = risk === 1 ? "⚠️ Favorable for disease" : "✅ Not favorable for disease";
  }

  if (remediesList) {
    // Natural remedies dictionary
    const remediesMap = {
      "Brown Rust": [
        "Apply neem oil spray every 7–10 days",
        "Encourage air flow by not over-crowding plants",
        "Use baking soda + water solution weekly"
      ],
      "Flag Smut": [
        "Use resistant wheat varieties",
        "Apply Trichoderma-based bio-fungicide",
        "Avoid sowing infected seeds"
      ],
      "Smut": [
        "Soak seeds in hot water (52°C) for 10 minutes",
        "Apply cow dung slurry on soil",
        "Practice crop rotation"
      ],
      "Yellow Rust": [
        "Spray turmeric + water solution",
        "Use organic sulfur-based fungicide",
        "Remove and destroy infected leaves"
      ],
      "Healthy": [
        "Maintain good field hygiene",
        "Ensure proper irrigation & sunlight",
        "Apply compost or organic manure regularly"
      ]
    };
    const normalizedDisease = disease.trim();

    const remedies = remediesMap[normalizedDisease] || ["No remedies found for this disease."];

    // Clear list first (in case reused)
    remediesList.innerHTML = "";

    // Add each remedy
    remedies.forEach(remedy => {
      const li = document.createElement("li");
      li.textContent = remedy;
      remediesList.appendChild(li);
    });
  }
});
