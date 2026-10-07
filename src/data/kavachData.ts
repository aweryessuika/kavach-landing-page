export interface ComparisonItem {
  feature: string;
  category: string;
  legacy: {
    status: 'failed' | 'warning' | 'danger';
    title: string;
    detail: string;
  };
  kavach: {
    status: 'success';
    title: string;
    detail: string;
  };
}

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    feature: "Google Play Protect Certification",
    category: "CERTIFICATION // GOOGLE DPC",
    legacy: {
      status: "danger",
      title: "Blocked as Harmful App / Malware",
      detail: "Shady sideloaded APKs trigger red security banners. Customers demand immediate refunds and accuse retailers of selling spyware."
    },
    kavach: {
      status: "success",
      title: "100% Native Android Enterprise Clean",
      detail: "Officially provisions as Android Enterprise Device Owner via Google zero-touch unboxing protocol. Zero warnings, zero security popups."
    }
  },
  {
    feature: "Hardware Bypass & EDL Resistance",
    category: "HARDWARE IMMOVABILITY",
    legacy: {
      status: "failed",
      title: "Bypassed via PC / UnlockTool / EDL",
      detail: "Local repair shops strip cracked lockers in 4 minutes using USB debugging, MTK flash tools, or basic recovery wipes."
    },
    kavach: {
      status: "success",
      title: "Kernel-Level Hardware ADB Disabled",
      detail: "Direct-Boot protected in Device-Protected Storage (DPS). Hardware USB data signaling cut, recovery mode restricted, factory reset permanently locked."
    }
  },
  {
    feature: "Counter Provisioning Speed",
    category: "RETAILER COUNTER TIME",
    legacy: {
      status: "warning",
      title: "10+ Minutes Manual Sideloading",
      detail: "Requires 12+ manual permission taps, accessibility service toggles, battery optimization whitelist, and device administrator grants."
    },
    kavach: {
      status: "success",
      title: "6-Tap QR Setup in < 60 Seconds",
      detail: "Tap 'Hi There' screen 6 times on fresh unboxed phone, scan Kavach QR. Auto-configures device owner and installs stealth payload silently."
    }
  },
  {
    feature: "Modern OS (Android 14/15) Stability",
    category: "OS COMPATIBILITY",
    legacy: {
      status: "failed",
      title: "Killed by OS Background Limits",
      detail: "Android 14+ background execution limits and dataSync restrictions kill legacy background services, leaving phones unlocked permanently."
    },
    kavach: {
      status: "success",
      title: "Universal systemExempted Service",
      detail: "Native Foreground Service with systemExempted permission flag guarantees 24/7 background survivability on Xiaomi HyperOS, Samsung OneUI, Realme UI & Vivo Funtouch."
    }
  },
  {
    feature: "Per-Device Retailer Economics",
    category: "COMMERCIAL UNIT PRICING",
    legacy: {
      status: "warning",
      title: "₹150 – ₹180 per Device Key",
      detail: "Sold through shady WhatsApp distributors with zero uptime guarantee, vanishing support, and key expiration traps."
    },
    kavach: {
      status: "success",
      title: "₹100 Flat per Device Key (33% Cheaper)",
      detail: "Direct enterprise tier. 10 free test keys on activation. 90%+ gross recovery margins for offline store owners with dedicated founder support."
    }
  }
];

export interface SecurityModule {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  metric: string;
  metricLabel: string;
  techSpec: string;
}

export const SECURITY_MODULES: SecurityModule[] = [
  {
    id: "adb-firewall",
    tag: "SYS_CALL_01",
    title: "Kernel ADB & USB Data Firewall",
    highlight: "Zero PC Bypass",
    description: "Enforces DISALLOW_DEBUGGING_FEATURES and DISALLOW_USB_FILE_TRANSFER via DevicePolicyManager. Connectors only negotiate power; data pins are completely deafened to UnlockTool and fastboot exploits.",
    metric: "0.00%",
    metricLabel: "Bypass Rate at Repair Shops",
    techSpec: "DPM.addUserRestriction(DISALLOW_USB_FILE_TRANSFER)"
  },
  {
    id: "anti-rollback",
    tag: "SYS_CALL_02",
    title: "NTP Anti-Rollback Clock Lock",
    highlight: "Tamper-Proof Time",
    description: "Customers often manipulate system date backwards by months to prevent lock screens. Kavach ignores local hardware RTC and polls redundant NTP stratum servers, enforcing auto-lock regardless of phone date.",
    metric: "100%",
    metricLabel: "Clock Manipulation Immunity",
    techSpec: "Strict SNTP Delta Verification & DPS Monotonic Delta"
  },
  {
    id: "direct-boot",
    tag: "SYS_CALL_03",
    title: "Direct-Boot DPS Storage Engine",
    highlight: "Pre-PIN Lock Enforcement",
    description: "Stores critical cryptographic state in Device-Protected Storage (DPS). When the phone restarts, the kiosk lock screen renders BEFORE the user enters their unlock PIN or pattern.",
    metric: "< 80ms",
    metricLabel: "Cold Boot Lock Surface Render",
    techSpec: "Context.createDeviceProtectedStorageContext()"
  },
  {
    id: "carrier-cgnat",
    tag: "SYS_CALL_04",
    title: "Carrier CGNAT Low-Power Keep-Alive",
    highlight: "Sub-350ms Responsive Socket",
    description: "Maintains a resilient TCP/WSS pipeline across Indian 4G/5G CGNAT firewalls (Jio, Airtel, Vi) using lightweight 30s ping frames with adaptive jitter, consuming < 1% battery over 24 hours.",
    metric: "342ms",
    metricLabel: "Average End-to-End Lock Latency",
    techSpec: "wss://engine.kavach.in via Carrier Keep-Alive"
  },
  {
    id: "anti-frida",
    tag: "SYS_CALL_05",
    title: "Anti-Frida & Memory Hook Shield",
    highlight: "Runtime Self-Defense",
    description: "Continuously inspects /proc/self/maps and ptrace attachments for injected dynamic instrumentation tools (Frida, Xposed, Magisk). Automatically self-terminates and flags server-side fraud if hooked.",
    metric: "16-Vector",
    metricLabel: "Active Memory Integrity Checks",
    techSpec: "Anti-Ptrace & In-Memory Map Signature Scanning"
  },
  {
    id: "silent-ota",
    tag: "SYS_CALL_06",
    title: "Silent Background DPC OTA Updates",
    highlight: "Zero User Interruption",
    description: "Deploys patch releases silently in the background using Android Enterprise PackageInstaller session API without showing install dialogs, screen flashes, or requiring user confirmation.",
    metric: "Zero-Click",
    metricLabel: "OTA Deployment Protocol",
    techSpec: "PackageInstaller.Session.commit(IntentSender)"
  }
];

export interface StepProtocol {
  step: string;
  code: string;
  title: string;
  duration: string;
  summary: string;
  details: string[];
  interfaceSnippet: {
    label: string;
    sublabel: string;
    badge: string;
  };
}

export const WORKFLOW_STEPS: StepProtocol[] = [
  {
    step: "01",
    code: "SCAN_LUHN",
    title: "15-Digit IMEI Barcode Scan",
    duration: "4 SECONDS",
    summary: "Instant camera barcode capture directly from the phone retail box. Mathematical Mod-10 Luhn algorithm verifies validity before hitting the network.",
    details: [
      "Zero manual typing counter mistakes",
      "CameraX ML Kit high-speed barcode reader",
      "Validates TAC (Type Allocation Code) manufacturer database"
    ],
    interfaceSnippet: {
      label: "BARCODE: 860124068392104",
      sublabel: "XIAOMI REDMI NOTE 13 5G // 8GB/128GB",
      badge: "LUHN_CHECKSUM_VALIDATED"
    }
  },
  {
    step: "02",
    code: "ENCRYPT_PROFILE",
    title: "Customer & Loan Contract Binding",
    duration: "18 SECONDS",
    summary: "Input customer mobile number, down payment, and installment tenure (6, 9, 12 months). Produces an offline encrypted draft that persists counter reboots.",
    details: [
      "Offline-first IndexedDB local draft buffer",
      "Automatic EMI due-date schedule generator",
      "Automated WhatsApp payment reminder hooks"
    ],
    interfaceSnippet: {
      label: "CUSTOMER: RAJESH KUMAR (+91 98290-XXXXX)",
      sublabel: "LOAN: ₹14,800 // 8 MONTHS // ₹1,850/MO",
      badge: "CONTRACT_ENCRYPTED_AES256"
    }
  },
  {
    step: "03",
    code: "AE_PROVISION_QR",
    title: "6-Tap Android Enterprise QR Setup",
    duration: "25 SECONDS",
    summary: "Tap the fresh unboxed smartphone's 'Welcome' screen 6 times to awaken the Android Enterprise camera. Scan the retailer terminal's dynamic provisioning QR.",
    details: [
      "No Google account login required during unbox",
      "Zero APK downloading via shady web browsers",
      "Installs Kavach DPC directly into privileged Device Owner role"
    ],
    interfaceSnippet: {
      label: "DYNAMIC PROVISIONING QR COMPILED",
      sublabel: "ADMIN_EXTRAS: {imei: '8601...', key_id: 'KVC-9021'}",
      badge: "DPC_PROVISION_STANDBY"
    }
  },
  {
    step: "04",
    code: "WS_HANDSHAKE",
    title: "Truthful Handshake & Handover",
    duration: "10 SECONDS",
    summary: "Device establishes sub-second WebSocket link to Kavach Mumbai node. Confirms Device Owner lock integrity. Status transitions: QUEUED ➔ DELIVERED ➔ APPLIED.",
    details: [
      "Bidirectional cryptographic proof verification",
      "Device hardware profile stamped on AWS Lightsail",
      "Retailer hands fully-protected phone to customer with zero risk"
    ],
    interfaceSnippet: {
      label: "HANDSHAKE STATUS: APPLIED & SECURED",
      sublabel: "TCP SOCKET: CONNECTED // LATENCY 312ms",
      badge: "IMMUNITY_ACTIVE"
    }
  }
];

export interface RetailerTestimonial {
  name: string;
  shop: string;
  location: string;
  volume: string;
  recovered: string;
  quote: string;
  verifiedBadge: string;
}

export const TESTIMONIALS: RetailerTestimonial[] = [
  {
    name: "Mukesh Agarwal",
    shop: "Agarwal Telecom & Electronics",
    location: "Tonk Road, Jaipur",
    volume: "120 phones/mo",
    recovered: "₹1,44,000 saved",
    quote: "Earlier we used a local cracked APK that stopped working whenever customers updated to Android 14. With Kavach, setup takes 40 seconds at the counter and when payment is overdue, one click locks the phone instantly. Not a single customer could bypass it.",
    verifiedBadge: "VERIFIED RETAILER // JAIPUR"
  },
  {
    name: "Syed Rehan",
    shop: "Rehan Cellular Hub",
    location: "Jagdish Market, Hyderabad",
    volume: "180 phones/mo",
    recovered: "₹2,16,000 saved",
    quote: "Google Play Protect never shows a warning, which is huge because customers get scared if red alerts pop up on a brand new phone. ₹100 per device is unbeatable pricing compared to distributors who charge ₹180.",
    verifiedBadge: "VERIFIED RETAILER // HYDERABAD"
  },
  {
    name: "Harpreet Singh",
    shop: "Singh Mobile Care",
    location: "Gaffar Market, Karol Bagh, Delhi",
    volume: "240 phones/mo",
    recovered: "₹3,80,000 saved",
    quote: "The biggest headache in Karol Bagh was repair boys bypassing lock software using PC flashing software. Kavach blocks USB data communication completely. If they cannot talk to the phone via USB, they cannot strip the lock. Absolute peace of mind.",
    verifiedBadge: "VERIFIED RETAILER // NEW DELHI"
  }
];

export const FAQS = [
  {
    question: "What happens if a defaulting customer hard factory-resets the phone via Recovery Mode?",
    answer: "Because Kavach is provisioned as the Android Enterprise Device Owner during initial unboxing, Factory Reset Protection (FRP) and Device-Protected Storage policies are etched at the OS level. If an attempt is made to wipe the phone via Recovery Mode, the phone will immediately trigger Android Enterprise reactivation upon the first network ping, locking down all app access until the retailer clears the loan."
  },
  {
    question: "Does the Kavach background service drain customer battery or trigger system lag?",
    answer: "No. Unlike legacy background lockers that run abusive polling loops and heavy CPU wakelocks, Kavach uses a passive TCP/WebSocket daemon optimized for carrier CGNAT networks. It consumes less than 0.8% of daily battery life and zero noticeable RAM overhead across Snapdragon, MediaTek, and Exynos chipsets."
  },
  {
    question: "How do I get my first 10 free test keys?",
    answer: "Click 'Request 10 Free Trial Keys' on this page or message us directly on WhatsApp. Your retailer dashboard is activated within 2 minutes with 10 free device credits. No credit card or upfront deposit is required."
  },
  {
    question: "What if a customer clears their EMI tenure early — can I reuse or release the device?",
    answer: "Once the customer completes their final EMI payment, you tap 'Release Shield' in your retailer portal. Kavach sends a sub-350ms silent command that cleanly strips the DPC policies, converting the smartphone into a standard unrestricted retail phone without requiring a factory wipe."
  },
  {
    question: "Which smartphone brands and Android versions are supported?",
    answer: "Kavach supports all major Indian retail smartphone brands including Xiaomi/Redmi (MIUI & HyperOS), Realme (Realme UI), Samsung (OneUI), Vivo/iQOO (Funtouch OS), Oppo (ColorOS), Motorola, and OnePlus running Android 10 through Android 15."
  }
];
