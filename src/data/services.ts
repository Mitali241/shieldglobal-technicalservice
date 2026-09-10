export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "building-construction",
    title: "Building Construction",
    slug: "building-construction",
    shortDesc: "Commercial, industrial, and infrastructure structural civil construction services.",
    fullDesc: "Complete turnkey structural and civil engineering solutions delivering industrial plants, commercial facilities, and specialized infrastructure built to rigorous engineering standards.",
    features: [
      "Civil & Structural Engineering",
      "Industrial Plants & Warehouses",
      "Commercial Infrastructure",
      "Foundation & Concrete Works",
      "Retrofitting & Structural Refurbishment"
    ],
    icon: "Building2"
  },
  {
    id: "facility-management",
    title: "Facility Management",
    slug: "facility-management",
    shortDesc: "Comprehensive hard and soft facility management, operations, and asset lifecycle care.",
    fullDesc: "Integrated facility management solutions ensuring asset longevity, operational uptime, preventive maintenance, and energy efficiency for commercial and industrial complexes.",
    features: [
      "Planned Preventive Maintenance (PPM)",
      "Corrective & Emergency Repairs",
      "Asset Lifecycle Management",
      "HVAC & Building Automation Care",
      "24/7 Rapid Response Teams"
    ],
    icon: "Wrench"
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    slug: "oil-gas",
    shortDesc: "Specialized upstream, midstream, downstream mechanical and pipeline support services.",
    fullDesc: "High-spec technical contracting for refineries, petrochemical plants, offshore installations, pipeline networks, and storage terminals adhering to global safety and API/ASME standards.",
    features: [
      "Pipeline Installation & Integrity Testing",
      "Refinery & Plant Maintenance",
      "Valve Overhaul & Testing",
      "Offshore & Onshore Structural Works",
      "Shutdown & Turnaround Management"
    ],
    icon: "Flame"
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    slug: "energy-utilities",
    shortDesc: "Power generation, renewable systems, sub-stations, and utility grid installations.",
    fullDesc: "End-to-end engineering support for thermal, solar, water distribution networks, electrical substations, and industrial power distribution infrastructures.",
    features: [
      "Substation Installation & Commissioning",
      "Solar PV & Renewable Solutions",
      "Water & Wastewater Utility Networks",
      "High & Medium Voltage Cabling",
      "Grid Synchronization & Testing"
    ],
    icon: "Zap"
  },
  {
    id: "mep-services",
    title: "MEP Services",
    slug: "mep-services",
    shortDesc: "Mechanical, Electrical, and Plumbing engineering design, installation, and retrofitting.",
    fullDesc: "Advanced Mechanical, Electrical, and Plumbing (MEP) contracting delivered with precision coordination, energy modeling, fire safety compliance, and smart building integration.",
    features: [
      "HVAC Chilled Water & Ducting Systems",
      "Fire Fighting & Fire Alarm Systems",
      "LV & ELV Electrical Distribution",
      "Drainage, Water Supply & Sanitary Works",
      "BMS (Building Management Systems) Setup"
    ],
    icon: "Cpu"
  },
  {
    id: "welding-fabrication",
    title: "Welding & Fabrication",
    slug: "welding-fabrication",
    shortDesc: "Certified structural steel fabrication, spool fabrication, and precision coded welding.",
    fullDesc: "State-of-the-art fabrication facility equipped for heavy structural steel, pressure piping spools, skid units, storage vessels, and certified SMAW/GTAW/GMAW/FCAW coded welding.",
    features: [
      "Structural Steel Fabrication & Erection",
      "Pressure Piping Spooling (ASME / AWS)",
      "Skid-Mounted Process Units",
      "Non-Destructive Testing (NDT) QA/QC",
      "Surface Treatment, Blasting & Coating"
    ],
    icon: "Layers"
  },
  {
    id: "technical-support",
    title: "Technical Support & Project Services",
    slug: "technical-support",
    shortDesc: "Multi-disciplinary engineering manpower, QA/QC inspection, and project management.",
    fullDesc: "High-caliber engineering consultancy, technical secondment, certified QA/QC inspectors, HSE officers, project management, and site supervision tailored to complex industrial programmes.",
    features: [
      "Certified Technical Staffing & Secondment",
      "QA/QC Inspection & Third-Party Auditing",
      "Project Management & Planning (P6/MS Project)",
      "Commissioning & Pre-Commissioning Support",
      "Procurement & Supply Chain Management"
    ],
    icon: "Users"
  }
];
