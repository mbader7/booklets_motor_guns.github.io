// Data for motorcycles
const motorcycleData = [
  {
    id: "standard-naked-bikes",
    title: "Standard/Naked Bikes",
    description:
      "Standard motorcycles conform to a stereotypical image of a motorcycle, with an exposed engine and fuel tank above it. They typically have neither fairings nor windscreens and give an upright rider posture.",
    specs: {
      "Riding Position": "Upright, comfortable",
      "Engine Type": "Various configurations",
      "Best For": "Beginners, daily riding",
      Examples: "Honda CB series, Yamaha MT series",
    },
    averagePrice: "$5,000 - $10,000",
    modifiability: "High",
    image: "images/motorcycles/standard-naked-bikes.jpg",
  },
  {
    id: "cruiser-motorcycles",
    title: "Cruiser Motorcycles",
    description:
      "Cruisers are styled after American motorcycles from the 1930s to early 1960s. They feature large-displacement V-twin engines and are tuned for low-end torque, making them less demanding to ride.",
    specs: {
      "Engine Type": "V-twin (typically)",
      "Riding Position": "Feet forward, hands high",
      Torque: "High low-end torque",
      Examples: "Harley-Davidson, Indian Scout",
    },
    averagePrice: "$8,000 - $20,000",
    modifiability: "High",
    image: "images/motorcycles/cruiser-motorcycles.jpg",
  },
  {
    id: "touring-motorcycles",
    title: "Touring Motorcycles",
    description:
      "Touring motorcycles are specifically designed to excel at covering long distances. They have large-displacement engines, fairings for weather protection, and large fuel tanks.",
    specs: {
      "Engine Size": "Large displacement",
      Features: "Fairings, windscreens",
      "Fuel Capacity": "Large tanks",
      Weight: "850-1400 lbs fully loaded",
    },
    averagePrice: "$15,000 - $30,000",
    modifiability: "Medium",
    image: "images/motorcycles/touring-motorcycles.jpg",
  },
  {
    id: "sport-bikes",
    title: "Sport Bikes",
    description:
      "Sport bikes emphasize top speed, acceleration, braking, handling and grip. They have high-performance engines supported within a lightweight frame, typically with inline-four engines.",
    specs: {
      "Engine Type": "Inline-four (common)",
      Focus: "Speed, acceleration, handling",
      "Riding Position": "Forward crouch",
      Examples: "Yamaha R1, Honda CBR series",
    },
    averagePrice: "$10,000 - $25,000",
    modifiability: "Medium",
    image: "images/motorcycles/sport-bikes.jpg",
  },
  {
    id: "off-road-dirt-bikes",
    title: "Off-road/Dirt Bikes",
    description:
      "Off-road motorcycles are designed for off-road use. They feature long suspension travel, high ground clearance, lightweight construction, and knobby tires for traction on loose surfaces.",
    specs: {
      Suspension: "Long travel",
      "Ground Clearance": "High",
      Tires: "Knobby for traction",
      Types: "Motocross, enduro, trail, trials",
    },
    averagePrice: "$4,000 - $12,000",
    modifiability: "High",
    image: "images/motorcycles/off-road-dirt-bikes.jpg",
  },
  {
    id: "dual-purpose-adventure",
    title: "Dual-purpose/Adventure",
    description:
      "Dual-purpose motorcycles are street legal and designed to be ridden both on and off-road. They offer long-travel suspension, high ground clearance, and are capable of highway speeds.",
    specs: {
      "Legal Status": "Street legal",
      Capability: "On and off-road",
      Suspension: "Long travel",
      Use: "Adventure touring, commuting",
    },
    averagePrice: "$7,000 - $18,000",
    modifiability: "Medium",
    image: "images/motorcycles/dual-purpose-adventure.jpg",
  },
  {
    id: "scooters",
    title: "Scooters",
    description:
      'Scooters are characterized by a step-through frame and a platform for the rider"s feet. They typically have automatic transmissions and smaller engines, making them ideal for urban commuting.',
    specs: {
      Frame: "Step-through design",
      Transmission: "Automatic (CVT)",
      "Engine Size": "50cc to 650cc+",
      "Best For": "Urban commuting",
    },
    averagePrice: "$2,000 - $7,000",
    modifiability: "Low",
    image: "images/motorcycles/scooters.jpg",
  },
  {
    id: "electric-motorcycles",
    title: "Electric Motorcycles",
    description:
      "Electric motorcycles use electric motors instead of internal combustion engines. They offer instant torque, quiet operation, and zero emissions, representing the future of motorcycling.",
    specs: {
      "Power Source": "Electric motor",
      Emissions: "Zero emissions",
      Torque: "Instant delivery",
      Examples: "Zero motorcycles, Harley LiveWire",
    },
    averagePrice: "$10,000 - $30,000",
    modifiability: "Low",
    image: "images/motorcycles/electric-motorcycles.jpg",
  },
];

// Data for guns
const gunData = [
  {
    id: "pistols",
    title: "Pistols",
    description:
      "Pistols have a single fixed firing chamber machined into the rear of the barrel and are often loaded using magazines. They can be single-shot, manual repeating, semi-automatic, or automatic.",
    specs: {
      Chamber: "Single fixed chamber",
      Loading: "Magazine-fed",
      Types: "Semi-auto, single-shot",
      Examples: "Glock, M1911, Beretta 92",
    },
    averagePrice: "$400 - $1,500",
    modifiability: "High",
    image: "images/guns/pistols.jpg",
  },
  {
    id: "revolvers",
    title: "Revolvers",
    description:
      "Revolvers have multiple firing chambers in a revolving cylinder, each loaded with a single cartridge. They can be single-action, double-action, or double-action/single-action.",
    specs: {
      Chambers: "Multiple in cylinder",
      Action: "Single/double action",
      Reliability: "Very reliable",
      Examples: "Colt Python, S&W Model 10",
    },
    averagePrice: "$300 - $1,200",
    modifiability: "Medium",
    image: "images/guns/revolvers.jpg",
  },
  {
    id: "rifles",
    title: "Rifles",
    description:
      "Rifles are long guns with rifled barrels that impart spin to projectiles for accuracy. They include bolt-action, lever-action, semi-automatic, and automatic variants.",
    specs: {
      Barrel: "Rifled for accuracy",
      Range: "Long range capability",
      Types: "Bolt, lever, semi-auto",
      Use: "Hunting, sport, military",
    },
    averagePrice: "$500 - $3,000",
    modifiability: "High",
    image: "images/guns/rifles.jpg",
  },
  {
    id: "shotguns",
    title: "Shotguns",
    description:
      'Shotguns have smoothbore barrels designed to fire shot (pellets) or slugs. They"re used for hunting, sport shooting, and self-defense with various action types.',
    specs: {
      Barrel: "Smoothbore",
      Ammunition: "Shot or slugs",
      Actions: "Pump, semi-auto, break",
      Use: "Hunting, sport, defense",
    },
    averagePrice: "$300 - $1,000",
    modifiability: "Medium",
    image: "images/guns/shotguns.jpg",
  },
  {
    id: "assault-rifles",
    title: "Assault Rifles",
    description:
      'Assault rifles are selective-fire rifles that use intermediate cartridges and detachable magazines. They"re capable of both semi-automatic and automatic fire.',
    specs: {
      "Fire Mode": "Select fire",
      Cartridge: "Intermediate",
      Magazine: "Detachable",
      Examples: "AK-47, M16, AR-15",
    },
    averagePrice: "$1,000 - $5,000",
    modifiability: "Very High",
    image: "images/guns/assault-rifles.jpg",
  },
  {
    id: "sniper-rifles",
    title: "Sniper Rifles",
    description:
      "Sniper rifles are precision rifles designed for long-range accuracy. They typically feature heavy barrels, precision triggers, and high-quality optics for extreme accuracy.",
    specs: {
      Purpose: "Long-range precision",
      Barrel: "Heavy, precision",
      Optics: "High-quality scopes",
      Range: "1000+ meters",
    },
    averagePrice: "$2,000 - $10,000",
    modifiability: "High",
    image: "images/guns/sniper-rifles.jpg",
  },
  {
    id: "submachine-guns",
    title: "Submachine Guns",
    description:
      'Submachine guns are compact automatic weapons that fire pistol cartridges. They"re designed for close-quarters combat and typically have high rates of fire.',
    specs: {
      Size: "Compact",
      Cartridge: "Pistol rounds",
      "Fire Rate": "High",
      Use: "Close quarters combat",
    },
    averagePrice: "$800 - $3,000",
    modifiability: "Medium",
    image: "images/guns/submachine-guns.jpg",
  },
  {
    id: "machine-guns",
    title: "Machine Guns",
    description:
      "Machine guns are fully automatic firearms designed for sustained fire. They use rifle cartridges and are typically crew-served weapons with high ammunition capacity.",
    specs: {
      "Fire Mode": "Full automatic",
      Cartridge: "Rifle rounds",
      Operation: "Crew-served",
      Capacity: "High ammunition",
    },
    averagePrice: "$5,000 - $20,000+",
    modifiability: "Low",
    image: "images/guns/machine-guns.jpg",
  },
];

// DOM elements
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
const motorcyclesGrid = document.getElementById("motorcycles-grid");
const gunsGrid = document.getElementById("guns-grid");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  loadMotorcycles();
  loadGuns();
  setupNavigation();

  // Check for a section parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const sectionFromUrl = urlParams.get("section");
  if (sectionFromUrl) {
    switchSection(sectionFromUrl);
    // Update active button based on URL parameter
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.section === sectionFromUrl) {
        btn.classList.add("active");
      }
    });
  }
});

// Navigation functionality
function setupNavigation() {
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetSection = this.dataset.section;
      switchSection(targetSection);

      // Update active button
      navButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function switchSection(sectionName) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add("active");
  }
}

// Load motorcycle data
function loadMotorcycles() {
  motorcyclesGrid.innerHTML = "";

  motorcycleData.forEach((motorcycle) => {
    const itemBox = createItemBox(motorcycle, "motorcycles");
    motorcyclesGrid.appendChild(itemBox);
  });
}

// Load gun data
function loadGuns() {
  gunsGrid.innerHTML = "";

  gunData.forEach((gun) => {
    const itemBox = createItemBox(gun, "guns");
    gunsGrid.appendChild(itemBox);
  });
}

// Create item box element
function createItemBox(item, type) {
  const box = document.createElement("div");
  box.className = "item-box";
  box.dataset.id = item.id; // Store the item\"s ID
  box.dataset.type = type; // Store the item\"s type (motorcycles or guns)

  // Make the item box clickable
  box.addEventListener("click", function () {
    window.location.href = `detail.html?type=${type}&id=${item.id}`;
  });

  const title = document.createElement("h3");
  title.className = "item-title";
  title.textContent = item.title;

  const description = document.createElement("p");
  description.className = "item-description";
  description.textContent = item.description;

  const specs = document.createElement("div");
  specs.className = "item-specs";

  Object.entries(item.specs).forEach(([label, value]) => {
    const specItem = document.createElement("div");
    specItem.className = "spec-item";

    const specLabel = document.createElement("span");
    specLabel.className = "spec-label";
    specLabel.textContent = label + ":";

    const specValue = document.createElement("span");
    specValue.className = "spec-value";
    specValue.textContent = value;

    specItem.appendChild(specLabel);
    specItem.appendChild(specValue);
    specs.appendChild(specItem);
  });

  box.appendChild(title);
  box.appendChild(description);
  box.appendChild(specs);

  return box;
}

// Add smooth scrolling and animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all item boxes
  document.querySelectorAll(".item-box").forEach((box) => {
    box.style.opacity = "0";
    box.style.transform = "translateY(20px)";
    box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(box);
  });
}

// Initialize animations after content loads
setTimeout(addScrollAnimations, 100);
