// Detail page functionality
document.addEventListener("DOMContentLoaded", function () {
  loadDetailPage();
});

function loadDetailPage() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const id = urlParams.get("id");

  if (!type || !id) {
    // Redirect to main page if no parameters, preserving section if available
    window.location.href = "index.html";
    return;
  }

  // Get the appropriate data based on type
  let data;
  if (type === "motorcycles") {
    data = motorcycleData;
  } else if (type === "guns") {
    data = gunData;
  } else {
    window.location.href = "index.html";
    return;
  }

  // Find the specific item
  const item = data.find((item) => item.id === id);
  if (!item) {
    window.location.href = "index.html";
    return;
  }

  // Populate the detail page
  populateDetailPage(item, type);
}

function populateDetailPage(item, type) {
  // Update page title
  document.title = `${item.title} - Booklets Collection`;

  // Update detail elements
  document.getElementById("detail-title").textContent = item.title;
  document.getElementById("detail-description").textContent = item.description;
  document.getElementById("detail-price").textContent = item.averagePrice;
  document.getElementById("detail-modifiability").textContent =
    item.modifiability;

  // Update image
  const detailImage = document.getElementById("detail-image");
  detailImage.src = item.image;
  detailImage.alt = item.title;

  // Populate specs
  const specsContainer = document.getElementById("detail-specs");
  specsContainer.innerHTML = "";

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
    specsContainer.appendChild(specItem);
  });

  // Load specific types based on category
  if (type === "guns") {
    switch (item.id) {
      case "pistols":
        loadPistolTypes();
        break;
      case "rifles":
        loadRifleTypes();
        break;
      case "sniper-rifles":
        loadSniperRifleTypes();
        break;
      case "revolvers":
        loadRevolverTypes();
        break;
      case "shotguns":
        loadShotgunTypes();
        break;
      case "assault-rifles":
        loadAssaultRifleTypes();
        break;
      case "submachine-guns":
        loadSubmachineGunTypes();
        break;
      case "machine-guns":
        loadMachineGunTypes();
        break;
    }
  } else if (type === "motorcycles") {
    loadMotorcycleTypes(item.id);
  }

  // Add a back button that returns to the correct section
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = `index.html?section=${type}`;
    });
  }
}

function loadPistolTypes() {
  // Create a section for different pistol types
  const detailContainer = document.querySelector(".main-content");

  // Add pistol types section
  const pistolTypesSection = document.createElement("div");
  pistolTypesSection.className = "pistol-types-section";
  pistolTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Pistols</h3>
    <div class="pistol-grid-container" id="pistol-types-grid"></div>
  `;

  detailContainer.appendChild(pistolTypesSection);

  // Pistol types data
  const pistolTypes = [
    {
      id: "glock-17",
      title: "Glock 17",
      description:
        "A striker-fired, polymer-framed pistol known for its reliability and simplicity. Popular with law enforcement and civilians worldwide.",
      specs: {
        Caliber: "9mm",
        Capacity: "17+1 rounds",
        "Barrel Length": "4.49 inches",
        Weight: "25.06 oz (loaded)",
      },
      averagePrice: "$500 - $600",
      modifiability: "High",
      image: "images/pistols/glock-17.jpg",
    },
    {
      id: "m1911",
      title: "M1911",
      description:
        "A classic single-action, semi-automatic pistol designed by John Browning. Known for its .45 ACP chambering and historical significance.",
      specs: {
        Caliber: ".45 ACP",
        Capacity: "7+1 rounds",
        "Barrel Length": "5 inches",
        Weight: "39 oz",
      },
      averagePrice: "$600 - $1,200",
      modifiability: "Very High",
      image: "images/pistols/m1911.jpg",
    },
    {
      id: "beretta-92",
      title: "Beretta 92",
      description:
        "A double/single-action pistol with an open-slide design. Used by the U.S. military as the M9 and known for its accuracy and reliability.",
      specs: {
        Caliber: "9mm",
        Capacity: "15+1 rounds",
        "Barrel Length": "4.9 inches",
        Weight: "33.3 oz",
      },
      averagePrice: "$550 - $700",
      modifiability: "Medium",
      image: "images/pistols/beretta-92.jpg",
    },
    {
      id: "sig-p320",
      title: "SIG P320",
      description:
        "A modular, striker-fired pistol with interchangeable grip modules. Adopted by the U.S. military as the M17/M18.",
      specs: {
        Caliber: "9mm/.40/.357/.45",
        Capacity: "17+1 rounds (9mm)",
        "Barrel Length": "4.7 inches",
        Weight: "29.4 oz",
      },
      averagePrice: "$500 - $650",
      modifiability: "Very High",
      image: "images/pistols/sig-p320.jpg",
    },
    {
      id: "smith-wesson-mp",
      title: "Smith & Wesson M&P",
      description:
        "A polymer-framed, striker-fired pistol designed for military and police use. Features an ergonomic design and reliable performance.",
      specs: {
        Caliber: "9mm/.40/.45",
        Capacity: "17+1 rounds (9mm)",
        "Barrel Length": "4.25 inches",
        Weight: "24.25 oz",
      },
      averagePrice: "$400 - $550",
      modifiability: "High",
      image: "images/pistols/smith-wesson-mp.jpg",
    },
    {
      id: "cz-75",
      title: "CZ 75",
      description:
        "A steel-framed, double/single-action pistol from Czech Republic. Known for its accuracy, build quality, and ergonomics.",
      specs: {
        Caliber: "9mm",
        Capacity: "16+1 rounds",
        "Barrel Length": "4.6 inches",
        Weight: "35 oz",
      },
      averagePrice: "$500 - $700",
      modifiability: "Medium",
      image: "images/pistols/cz-75.jpg",
    },
  ];

  // Populate pistol types grid
  const pistolTypesGrid = document.getElementById("pistol-types-grid");
  pistolTypes.forEach((pistol) => {
    const pistolBox = createItemBox(pistol);
    pistolTypesGrid.appendChild(pistolBox);
  });
}

function loadRifleTypes() {
  const detailContainer = document.querySelector(".main-content");

  const rifleTypesSection = document.createElement("div");
  rifleTypesSection.className = "rifle-types-section";
  rifleTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Rifles</h3>
    <div class="rifle-grid-container" id="rifle-types-grid"></div>
  `;

  detailContainer.appendChild(rifleTypesSection);

  const rifleTypes = [
    {
      id: "bolt-action-rifle",
      title: "Bolt-Action Rifle",
      description:
        "A manually operated rifle with a bolt mechanism. Known for exceptional accuracy and reliability in hunting and precision shooting.",
      specs: {
        Action: "Manual bolt operation",
        Accuracy: "Excellent",
        "Rate of Fire": "Slow",
        "Best For": "Hunting, precision shooting",
      },
      averagePrice: "$400 - $2,000",
      modifiability: "High",
      image: "images/rifles/rifle-actions.png",
    },
    {
      id: "lever-action-rifle",
      title: "Lever-Action Rifle",
      description:
        "A classic American rifle design with a lever mechanism. Fast follow-up shots and iconic in Western culture.",
      specs: {
        Action: "Lever operated",
        Capacity: "5-15 rounds",
        Heritage: "Classic American design",
        "Best For": "Hunting, cowboy action shooting",
      },
      averagePrice: "$500 - $1,500",
      modifiability: "Medium",
      image: "images/rifles/lever-action.jpg",
    },
    {
      id: "semi-auto-rifle",
      title: "Semi-Automatic Rifle",
      description:
        "Self-loading rifle that fires one round per trigger pull. Popular for hunting and sport shooting.",
      specs: {
        Action: "Semi-automatic",
        "Rate of Fire": "Fast",
        Capacity: "5-30+ rounds",
        "Best For": "Hunting, sport shooting",
      },
      averagePrice: "$600 - $3,000",
      modifiability: "Very High",
      image: "images/rifles/rifle-types.jpg",
    },
    {
      id: "break-action-rifle",
      title: "Break-Action Rifle",
      description:
        "Simple, reliable rifle that breaks open at the breech for loading. Often used for hunting and as a first rifle.",
      specs: {
        Action: "Break-open",
        Simplicity: "Very simple",
        Reliability: "Excellent",
        "Best For": "Hunting, beginners",
      },
      averagePrice: "$200 - $800",
      modifiability: "Low",
      image: "images/rifles/bolt-vs-lever.jpg",
    },
  ];

  const rifleTypesGrid = document.getElementById("rifle-types-grid");
  rifleTypes.forEach((rifle) => {
    const rifleBox = createItemBox(rifle);
    rifleTypesGrid.appendChild(rifleBox);
  });
}

function loadSniperRifleTypes() {
  const detailContainer = document.querySelector(".main-content");

  const sniperTypesSection = document.createElement("div");
  sniperTypesSection.className = "sniper-types-section";
  sniperTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Sniper Rifles</h3>
    <div class="sniper-grid-container" id="sniper-types-grid"></div>
  `;

  detailContainer.appendChild(sniperTypesSection);

  const sniperTypes = [
    {
      id: "barrett-m82",
      title: "Barrett M82",
      description:
        "A semi-automatic anti-materiel rifle chambered in .50 BMG. Known for its extreme range and stopping power.",
      specs: {
        Caliber: ".50 BMG",
        "Effective Range": "1,800+ meters",
        Weight: "30 lbs",
        Type: "Anti-materiel",
      },
      averagePrice: "$8,000 - $12,000",
      modifiability: "Medium",
      image: "images/sniper-rifles/barrett-m82.jpg",
    },
    {
      id: "remington-700",
      title: "Remington 700",
      description:
        "A bolt-action rifle widely used by military and police snipers. Known for accuracy and reliability.",
      specs: {
        Caliber: ".308 Win, .300 Win Mag",
        Action: "Bolt-action",
        "Effective Range": "800+ meters",
        Type: "Precision rifle",
      },
      averagePrice: "$600 - $2,500",
      modifiability: "Very High",
      image: "images/sniper-rifles/sniper-evolution.jpg",
    },
    {
      id: "accuracy-international",
      title: "Accuracy International",
      description:
        "British precision rifles used by military and law enforcement worldwide. Modular design with exceptional accuracy.",
      specs: {
        Caliber: "Various (.308, .338, .50)",
        Design: "Modular",
        "Effective Range": "1,500+ meters",
        Origin: "British",
      },
      averagePrice: "$5,000 - $15,000",
      modifiability: "High",
      image: "images/sniper-rifles/best-sniper-rifles.jpeg",
    },
    {
      id: "mk13-mod7",
      title: "Mk 13 Mod 7",
      description:
        "U.S. Special Operations sniper rifle based on the Remington 700 action. Used by Navy SEALs and other elite units.",
      specs: {
        Caliber: ".300 Norma Magnum",
        Users: "U.S. Special Operations",
        "Effective Range": "1,300+ meters",
        Type: "Military precision",
      },
      averagePrice: "$10,000 - $20,000",
      modifiability: "High",
      image: "images/sniper-rifles/special-ops-sniper.jpg",
    },
  ];

  const sniperTypesGrid = document.getElementById("sniper-types-grid");
  sniperTypes.forEach((sniper) => {
    const sniperBox = createItemBox(sniper);
    sniperTypesGrid.appendChild(sniperBox);
  });
}

function loadRevolverTypes() {
  const detailContainer = document.querySelector(".main-content");

  const revolverTypesSection = document.createElement("div");
  revolverTypesSection.className = "revolver-types-section";
  revolverTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Revolvers</h3>
    <div class="revolver-grid-container" id="revolver-types-grid"></div>
  `;

  detailContainer.appendChild(revolverTypesSection);

  const revolverTypes = [
    {
      id: "colt-python",
      title: "Colt Python",
      description:
        "A premium double-action revolver known as the 'Rolls Royce of revolvers'. Exceptional build quality and accuracy.",
      specs: {
        Caliber: ".357 Magnum",
        Capacity: "6 rounds",
        Action: "Double/Single action",
        Barrel: '4" or 6"',
      },
      averagePrice: "$1,500 - $3,000",
      modifiability: "Medium",
      image: "images/revolvers/colt-python.jpg",
    },
    {
      id: "smith-wesson-686",
      title: "Smith & Wesson 686",
      description:
        "A robust L-frame revolver designed for heavy use. Popular with law enforcement and competitive shooters.",
      specs: {
        Caliber: ".357 Magnum/.38 Special",
        Frame: "L-frame (medium)",
        Capacity: "6 or 7 rounds",
        Construction: "Stainless steel",
      },
      averagePrice: "$600 - $900",
      modifiability: "Medium",
      image: "images/revolvers/colt-python-wiki.jpg",
    },
    {
      id: "ruger-blackhawk",
      title: "Ruger Blackhawk",
      description:
        "A single-action revolver inspired by the Colt Single Action Army. Strong and reliable for hunting and sport.",
      specs: {
        Action: "Single-action",
        Caliber: ".357 Mag, .44 Mag, .45 Colt",
        Frame: "Medium to large",
        "Best For": "Hunting, cowboy action",
      },
      averagePrice: "$500 - $800",
      modifiability: "Medium",
      image: "images/revolvers/colt-vs-ruger.jpg",
    },
    {
      id: "smith-wesson-model-10",
      title: "Smith & Wesson Model 10",
      description:
        "The most produced revolver in history. A reliable .38 Special used by police for decades.",
      specs: {
        Caliber: ".38 Special",
        Frame: "K-frame (medium)",
        History: "Most produced revolver",
        Users: "Police, military",
      },
      averagePrice: "$300 - $600",
      modifiability: "Low",
      image: "images/revolvers/double-action-sixguns.jpg",
    },
  ];

  const revolverTypesGrid = document.getElementById("revolver-types-grid");
  revolverTypes.forEach((revolver) => {
    const revolverBox = createItemBox(revolver);
    revolverTypesGrid.appendChild(revolverBox);
  });
}

function loadShotgunTypes() {
  const detailContainer = document.querySelector(".main-content");

  const shotgunTypesSection = document.createElement("div");
  shotgunTypesSection.className = "shotgun-types-section";
  shotgunTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Shotguns</h3>
    <div class="shotgun-grid-container" id="shotgun-types-grid"></div>
  `;

  detailContainer.appendChild(shotgunTypesSection);

  const shotgunTypes = [
    {
      id: "pump-action-shotgun",
      title: "Pump-Action Shotgun",
      description:
        "Manually operated shotgun with a sliding forend. Reliable, versatile, and popular for hunting and defense.",
      specs: {
        Action: "Pump-action",
        Reliability: "Excellent",
        Capacity: "3-8 rounds",
        "Best For": "Hunting, home defense",
      },
      averagePrice: "$200 - $600",
      modifiability: "High",
      image: "images/shotguns/shotgun-types.png",
    },
    {
      id: "semi-auto-shotgun",
      title: "Semi-Automatic Shotgun",
      description:
        "Self-loading shotgun for fast follow-up shots. Popular for hunting waterfowl and competitive shooting.",
      specs: {
        Action: "Semi-automatic",
        "Rate of Fire": "Fast",
        Capacity: "3-10+ rounds",
        "Best For": "Waterfowl, competition",
      },
      averagePrice: "$400 - $1,500",
      modifiability: "Medium",
      image: "images/shotguns/pump-vs-semi.jpg",
    },
    {
      id: "break-action-shotgun",
      title: "Break-Action Shotgun",
      description:
        "Simple, reliable shotgun that breaks open for loading. Available in single and double barrel configurations.",
      specs: {
        Action: "Break-open",
        Barrels: "Single or double",
        Simplicity: "Very simple",
        "Best For": "Hunting, clay sports",
      },
      averagePrice: "$150 - $2,000",
      modifiability: "Low",
      image: "images/shotguns/buyers-guide.jpg",
    },
    {
      id: "tactical-shotgun",
      title: "Tactical Shotgun",
      description:
        "Modified shotgun designed for law enforcement and military use. Features tactical accessories and shorter barrels.",
      specs: {
        Purpose: "Tactical/Defense",
        "Barrel Length": '14"-20"',
        Features: "Rails, lights, optics",
        Users: "Military, police",
      },
      averagePrice: "$300 - $1,000",
      modifiability: "Very High",
      image: "images/shotguns/popular-types.jpg",
    },
  ];

  const shotgunTypesGrid = document.getElementById("shotgun-types-grid");
  shotgunTypes.forEach((shotgun) => {
    const shotgunBox = createItemBox(shotgun);
    shotgunTypesGrid.appendChild(shotgunBox);
  });
}

function loadAssaultRifleTypes() {
  const detailContainer = document.querySelector(".main-content");

  const assaultTypesSection = document.createElement("div");
  assaultTypesSection.className = "assault-types-section";
  assaultTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Assault Rifles</h3>
    <div class="assault-grid-container" id="assault-types-grid"></div>
  `;

  detailContainer.appendChild(assaultTypesSection);

  const assaultTypes = [
    {
      id: "ak-47",
      title: "AK-47",
      description:
        "The most widely used assault rifle in the world. Known for reliability in harsh conditions and simple operation.",
      specs: {
        Caliber: "7.62×39mm",
        Origin: "Soviet Union",
        "Rate of Fire": "600 rpm",
        Reliability: "Legendary",
      },
      averagePrice: "$800 - $1,500",
      modifiability: "Medium",
      image: "images/guns/assault-rifles.jpg",
    },
    {
      id: "m16-ar15",
      title: "M16/AR-15",
      description:
        "American assault rifle family. The M16 is military, AR-15 is civilian. Highly modular and customizable.",
      specs: {
        Caliber: "5.56×45mm NATO",
        Origin: "United States",
        Modularity: "Extremely high",
        "Rate of Fire": "700-950 rpm",
      },
      averagePrice: "$600 - $2,000",
      modifiability: "Very High",
      image: "images/guns/assault-rifles.jpg",
    },
    {
      id: "steyr-aug",
      title: "Steyr AUG",
      description:
        "Austrian bullpup assault rifle with integrated optic. Compact design with full-length barrel performance.",
      specs: {
        Caliber: "5.56×45mm NATO",
        Design: "Bullpup",
        Origin: "Austria",
        Features: "Integrated optic",
      },
      averagePrice: "$1,800 - $2,500",
      modifiability: "Medium",
      image: "images/guns/assault-rifles.jpg",
    },
    {
      id: "famas",
      title: "FAMAS",
      description:
        "French bullpup assault rifle with distinctive appearance. Used by French military for decades.",
      specs: {
        Caliber: "5.56×45mm NATO",
        Design: "Bullpup",
        Origin: "France",
        Nickname: "Le Clarion",
      },
      averagePrice: "$2,000 - $4,000",
      modifiability: "Low",
      image: "images/guns/assault-rifles.jpg",
    },
  ];

  const assaultTypesGrid = document.getElementById("assault-types-grid");
  assaultTypes.forEach((assault) => {
    const assaultBox = createItemBox(assault);
    assaultTypesGrid.appendChild(assaultBox);
  });
}

function loadSubmachineGunTypes() {
  const detailContainer = document.querySelector(".main-content");

  const smgTypesSection = document.createElement("div");
  smgTypesSection.className = "smg-types-section";
  smgTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Submachine Guns</h3>
    <div class="smg-grid-container" id="smg-types-grid"></div>
  `;

  detailContainer.appendChild(smgTypesSection);

  const smgTypes = [
    {
      id: "mp5",
      title: "Heckler & Koch MP5",
      description:
        "German submachine gun widely used by special forces and police. Known for accuracy and reliability.",
      specs: {
        Caliber: "9×19mm Parabellum",
        Origin: "Germany",
        Users: "Special forces, police",
        "Rate of Fire": "800 rpm",
      },
      averagePrice: "$1,500 - $3,000",
      modifiability: "High",
      image: "images/guns/submachine-guns.jpg",
    },
    {
      id: "uzi",
      title: "IMI Uzi",
      description:
        "Israeli submachine gun with distinctive design. Compact and reliable, used worldwide by military and police.",
      specs: {
        Caliber: "9×19mm Parabellum",
        Origin: "Israel",
        Design: "Open bolt",
        "Rate of Fire": "600 rpm",
      },
      averagePrice: "$1,000 - $2,500",
      modifiability: "Medium",
      image: "images/guns/submachine-guns.jpg",
    },
    {
      id: "thompson",
      title: "Thompson Submachine Gun",
      description:
        "American submachine gun famous from WWII and prohibition era. Known as the 'Tommy Gun'.",
      specs: {
        Caliber: ".45 ACP",
        Origin: "United States",
        Era: "WWII, Prohibition",
        Nickname: "Tommy Gun",
      },
      averagePrice: "$2,000 - $5,000",
      modifiability: "Low",
      image: "images/guns/submachine-guns.jpg",
    },
    {
      id: "p90",
      title: "FN P90",
      description:
        "Belgian personal defense weapon with unique bullpup design and 5.7×28mm cartridge.",
      specs: {
        Caliber: "5.7×28mm",
        Design: "Bullpup PDW",
        Origin: "Belgium",
        Capacity: "50 rounds",
      },
      averagePrice: "$1,500 - $2,500",
      modifiability: "Medium",
      image: "images/guns/submachine-guns.jpg",
    },
  ];

  const smgTypesGrid = document.getElementById("smg-types-grid");
  smgTypes.forEach((smg) => {
    const smgBox = createItemBox(smg);
    smgTypesGrid.appendChild(smgBox);
  });
}

function loadMachineGunTypes() {
  const detailContainer = document.querySelector(".main-content");

  const mgTypesSection = document.createElement("div");
  mgTypesSection.className = "mg-types-section";
  mgTypesSection.innerHTML = `
    <h3 class="section-title">Different Types of Machine Guns</h3>
    <div class="mg-grid-container" id="mg-types-grid"></div>
  `;

  detailContainer.appendChild(mgTypesSection);

  const mgTypes = [
    {
      id: "m249-saw",
      title: "M249 SAW",
      description:
        "American squad automatic weapon providing sustained fire support. Belt-fed light machine gun.",
      specs: {
        Caliber: "5.56×45mm NATO",
        Type: "Squad Automatic Weapon",
        "Rate of Fire": "750 rpm",
        Weight: "17 lbs",
      },
      averagePrice: "$4,000 - $8,000",
      modifiability: "Medium",
      image: "images/guns/machine-guns.jpg",
    },
    {
      id: "m240",
      title: "M240 Machine Gun",
      description:
        "American general-purpose machine gun based on the Belgian FN MAG. Used by infantry and vehicles.",
      specs: {
        Caliber: "7.62×51mm NATO",
        Type: "General Purpose MG",
        "Rate of Fire": "650-950 rpm",
        Weight: "27 lbs",
      },
      averagePrice: "$6,000 - $12,000",
      modifiability: "Low",
      image: "images/guns/machine-guns.jpg",
    },
    {
      id: "m2-browning",
      title: "M2 Browning",
      description:
        "Heavy machine gun designed by John Browning. In service for over 100 years, known as 'Ma Deuce'.",
      specs: {
        Caliber: ".50 BMG",
        Type: "Heavy Machine Gun",
        "Rate of Fire": "450-600 rpm",
        Weight: "84 lbs",
      },
      averagePrice: "$15,000 - $25,000",
      modifiability: "Low",
      image: "images/guns/machine-guns.jpg",
    },
    {
      id: "mg42",
      title: "MG42",
      description:
        "German machine gun from WWII with extremely high rate of fire. Influenced modern machine gun design.",
      specs: {
        Caliber: "7.92×57mm Mauser",
        Origin: "Germany (WWII)",
        "Rate of Fire": "1,200 rpm",
        Nickname: "Hitler's Buzzsaw",
      },
      averagePrice: "$8,000 - $15,000",
      modifiability: "Low",
      image: "images/guns/machine-guns.jpg",
    },
  ];

  const mgTypesGrid = document.getElementById("mg-types-grid");
  mgTypes.forEach((mg) => {
    const mgBox = createItemBox(mg);
    mgTypesGrid.appendChild(mgBox);
  });
}

function createItemBox(item) {
  const box = document.createElement("div");
  box.className = "item-box detail-item-box";

  // Create image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "item-image-container";

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.title;
  image.className = "item-image";

  imageContainer.appendChild(image);

  // Create content container
  const contentContainer = document.createElement("div");
  contentContainer.className = "item-content";

  const title = document.createElement("h4");
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

  // Add price and modifiability
  const priceItem = document.createElement("div");
  priceItem.className = "spec-item";
  priceItem.innerHTML = `
    <span class="spec-label">Average Price:</span>
    <span class="spec-value">${item.averagePrice}</span>
  `;

  const modItem = document.createElement("div");
  modItem.className = "spec-item";
  modItem.innerHTML = `
    <span class="spec-label">Modifiability:</span>
    <span class="spec-value">${item.modifiability}</span>
  `;

  specs.appendChild(priceItem);
  specs.appendChild(modItem);

  contentContainer.appendChild(title);
  contentContainer.appendChild(description);
  contentContainer.appendChild(specs);

  box.appendChild(imageContainer);
  box.appendChild(contentContainer);

  return box;
}

function loadMotorcycleTypes(motorcycleId) {
  // This function can be expanded to show specific motorcycle models
  // For now, we'll keep the basic detail view
}
