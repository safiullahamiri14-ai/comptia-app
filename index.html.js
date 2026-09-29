const questions = [
  {
    q: "A technician needs to replace a laptop's RAM. Which of the following memory form factors is MOST commonly used in modern laptops?",
    options: ["DIMM", "SODIMM", "SIMM", "ECC UDIMM"],
    answer: 1, // B
    explain: "SODIMM (Small Outline DIMM) is the compact memory form factor designed for laptops and small form-factor devices. DIMM is the full-size desktop standard, too large for laptops. SIMM is an obsolete format not used in modern systems. ECC UDIMM is a desktop/server memory type used for error correction, not a laptop form factor."
  },
  {
    q: "A user reports their laptop screen shows a very dim image, but an external monitor connected to the same laptop displays properly. Which internal component is MOST likely at fault?",
    options: ["Digitizer", "Inverter or backlight", "WiFi antenna", "Motherboard"],
    answer: 1, // B
    explain: "If the external display works fine but the built-in screen is dim, the issue is isolated to the display's backlight or inverter (on older CCFL screens) or the LED backlight circuit (on newer screens), not the GPU or motherboard, since video output is otherwise functioning. The digitizer only affects touch input, not brightness. The WiFi antenna is unrelated to display output."
  },
  {
    q: "Which port is now the industry standard for both charging and data transfer on most modern Android smartphones and current-generation laptops?",
    options: ["Micro-USB", "Lightning", "USB-C", "Mini-USB"],
    answer: 2, // C
    explain: "USB-C is the modern universal standard adopted across Android phones, tablets, and most new laptops due to its reversible design and support for high-speed data, power delivery, and video output. Micro-USB and Mini-USB are older, slower legacy standards for smaller devices. Lightning is Apple's proprietary connector, primarily for older iPhones/iPads (Apple has since moved to USB-C on newer models)."
  },
  {
    q: "A technician is disassembling a laptop to replace a failing hard drive. Which of the following should be done FIRST to prevent damage to internal components?",
    options: ["Remove the RAM", "Disconnect the battery", "Remove the keyboard", "Discharge the CMOS battery"],
    answer: 1, // B
    explain: "Disconnecting the main battery (and unplugging AC power) before opening a laptop is a critical safety step to prevent electrical shorts and component damage while working inside the chassis. RAM and keyboard removal are steps that may come later depending on the drive's location. The CMOS battery only maintains BIOS settings and time and isn't related to the physical safety of the disassembly process."
  },
  {
    q: "Which mobile device technology allows two smartphones to exchange small amounts of data, such as a contact card, by touching them together?",
    options: ["Bluetooth", "NFC", "IR", "WiFi Direct"],
    answer: 1, // B
    explain: "NFC (Near Field Communication) is a very short-range (a few centimeters) wireless technology specifically designed for quick data exchange or payments by tapping devices together. Bluetooth has a longer range and requires pairing. IR (infrared) requires line-of-sight and is largely obsolete on modern phones. WiFi Direct allows device-to-device connections but is not the \"tap-to-touch\" technology described."
  },
  {
    q: "A user's tablet has a cracked glass digitizer, but the LCD panel underneath displays images correctly with no distortion. What does this indicate?",
    options: ["The touch input layer is damaged, but the display panel is functional", "The battery is failing", "The tablet needs a new motherboard", "The WiFi antenna is disconnected"],
    answer: 0, // A
    explain: "The digitizer is a separate touch-sensitive glass layer that sits above the LCD/display panel. A cracked digitizer with an unaffected image means the touch layer is physically damaged while the display component underneath is still working correctly. This scenario has nothing to do with battery, motherboard, or antenna function."
  },
  {
    q: "Which of the following storage form factors is commonly used to upgrade storage in ultrabooks and is significantly faster than a traditional 2.5\" SATA SSD?",
    options: ["eMMC", "M.2 NVMe", "3.5\" HDD", "Compact Flash"],
    answer: 1, // B
    explain: "M.2 NVMe drives connect directly to the PCIe bus, offering dramatically faster read/write speeds than SATA-based drives, and their small form factor makes them ideal for thin ultrabooks. eMMC is a slower, embedded storage type typically found in budget tablets/Chromebooks. 3.5\" HDDs are desktop-only drives too large for laptops. Compact Flash is an older memory card format, not used for internal laptop storage."
  },
  {
    q: "A technician is called to a corporate office where an employee's laptop keyboard has several unresponsive keys. Replacement keyboards are on backorder. Which of the following is the BEST temporary solution?",
    options: ["Replace the entire motherboard", "Connect a USB or Bluetooth external keyboard", "Reinstall the operating system", "Replace the laptop's battery"],
    answer: 1, // B
    explain: "Connecting an external USB or Bluetooth keyboard is a fast, low-cost, non-invasive workaround that lets the user keep working while waiting for the replacement part. Replacing the motherboard is an extreme and unnecessary measure for a keyboard issue. Reinstalling the OS will not fix a hardware keyboard fault. The battery is unrelated to keyboard function."
  },
  {
    q: "Which wireless standard provides the fastest data transfer speeds and is the current generation used in most new laptops and smartphones as of 2026?",
    options: ["Bluetooth 5.0", "WiFi 6E / WiFi 7", "3G", "IR"],
    answer: 1, // B
    explain: "WiFi 6E and WiFi 7 are the current generations of WiFi standards, offering the highest throughput, lower latency, and expanded frequency bands (including 6GHz) compared to prior standards. Bluetooth 5.0 is designed for short-range, lower-bandwidth peripheral connections, not high-speed networking. 3G is an outdated, slow cellular standard. IR is an obsolete, very low-bandwidth technology."
  },
  {
    q: "A laptop user says the device randomly shuts down when they move it, but works fine when stationary on a desk. Which component should the technician check FIRST?",
    options: ["The WiFi card", "The power connector/DC jack for a loose connection", "The touchpad", "The optical drive"],
    answer: 1, // B
    explain: "A loose or damaged DC power jack/connector is a classic cause of intermittent shutdowns triggered by movement, as slight vibration can interrupt the power delivery. The WiFi card, touchpad, and optical drive have no bearing on whether the system stays powered on."
  },
  {
    q: "Which of the following BEST describes the purpose of a docking station for a laptop?",
    options: ["It charges the laptop's battery faster than a standard charger", "It provides expanded connectivity, such as additional ports, external monitors, and a wired network connection", "It cools the laptop's internal components", "It backs up laptop data automatically"],
    answer: 1, // B
    explain: "A docking station's main function is to expand a laptop's connectivity by providing extra USB ports, video outputs, Ethernet, and sometimes audio jacks in a desktop-like setup. It typically does not accelerate battery charging beyond the standard charger rate, doesn't provide dedicated cooling, and does not perform automatic backups."
  },
  {
    q: "A technician wants to allow a smartphone to share its cellular data connection with a laptop over WiFi. Which feature should be enabled?",
    options: ["Airplane mode", "Mobile hotspot / tethering", "NFC pairing", "Bluetooth pairing only"],
    answer: 1, // B
    explain: "Mobile hotspot (tethering) allows a smartphone to share its cellular internet connection with other devices via WiFi, USB, or Bluetooth. Airplane mode disables all wireless radios, the opposite of what's needed. NFC is for short-range data exchange, not internet sharing. Bluetooth pairing alone connects devices but tethering specifically is the feature that shares the data connection."
  },
  {
    q: "Which of the following is a common symptom of a failing laptop battery that has expanded or \"swollen\"?",
    options: ["The laptop screen flickers randomly", "The touchpad becomes unresponsive", "The laptop's case bulges or the touchpad/keyboard lifts slightly", "The laptop connects to WiFi slower"],
    answer: 2, // C
    explain: "A swollen battery physically expands inside its compartment, often causing visible bulging of the case or lifting of the touchpad/keyboard area above it. This is a serious safety hazard requiring immediate battery replacement. Screen flickering, touchpad unresponsiveness (from other causes), and WiFi speed are unrelated symptoms of battery swelling specifically."
  },
  {
    q: "A user wants to synchronize their smartphone's contacts, photos, and app data automatically across multiple devices. Which of the following methods is BEST suited for this?",
    options: ["Manual USB file transfer", "Cloud-based account sync (e.g., Google/iCloud account)", "Bluetooth file transfer", "Removing and reinserting the SIM card"],
    answer: 1, // B
    explain: "Cloud-based account synchronization (such as a Google or iCloud account) automatically and continuously syncs contacts, photos, and app data across all devices linked to that account. USB and Bluetooth transfers are manual, one-time methods, not automatic ongoing synchronization. Reinserting a SIM card has no effect on data sync."
  },
  {
    q: "Which laptop internal component is typically responsible for converting AC power from the wall adapter into the DC power used by internal components?",
    options: ["The inverter", "The AC adapter (external power brick)", "The SODIMM", "The digitizer"],
    answer: 1, // B
    explain: "The external AC adapter, often called a power brick, converts the wall's AC power into the DC voltage the laptop's internal circuitry requires. The inverter (found on older CCFL-backlit screens) converts DC to AC specifically to power the backlight, not general system power. SODIMM is a memory module, and a digitizer handles touch input — neither is involved in power conversion."
  },
  {
    q: "A technician needs to replace the WiFi antenna wires on a laptop during a motherboard swap. Where are these antenna wires MOST commonly routed?",
    options: ["Through the battery compartment", "Along the edges of the display bezel/lid", "Inside the optical drive bay", "Behind the trackpad"],
    answer: 1, // B
    explain: "WiFi (and Bluetooth) antennas in most laptops are embedded in or routed along the display bezel/lid, since this positioning offers the best signal reception away from other metal components and the user's body. The battery compartment, optical drive bay, and trackpad area are not standard antenna routing locations."
  },
  {
    q: "Which of the following mobile device types is generally characterized by a larger screen than a smartphone, no cellular calling function (in WiFi-only models), and a touch-based interface used primarily for media consumption and light productivity?",
    options: ["Smartphone", "Tablet", "Smartwatch", "E-reader"],
    answer: 1, // B
    explain: "A tablet fits this description: larger touchscreen than a phone, often WiFi-only (though cellular models exist), and used for browsing, media, and productivity apps. A smartphone includes cellular calling by default. A smartwatch has a very small screen and different use case. An e-reader typically uses e-ink and is optimized specifically for reading text, not general productivity."
  },
  {
    q: "A user's laptop will not power on at all, even when plugged into a known-good outlet, and there are no lights or fan activity. The battery has already been removed to test AC-only operation. What should the technician check NEXT?",
    options: ["The touchpad drivers", "The AC adapter and DC jack for continuity/damage", "The WiFi antenna connection", "The optical drive cable"],
    answer: 1, // B
    explain: "With no power activity at all — even on AC power alone — the next logical step is verifying that the AC adapter is delivering power and that the DC jack on the laptop is not damaged or disconnected internally, since a fault here would prevent any power from reaching the system. Touchpad drivers, WiFi antennas, and optical drive cables are unrelated to whether the system receives power at all."
  },
  {
    q: "Which type of laptop expansion card slot is commonly used to add features like a cellular WWAN card in business laptops?",
    options: ["ExpressCard", "M.2", "PCMCIA", "SD card slot"],
    answer: 1, // B
    explain: "Modern laptops use the M.2 slot (in addition to storage) to house WWAN (cellular) cards, allowing internet connectivity via mobile carrier networks. ExpressCard and PCMCIA are older, largely obsolete expansion standards no longer found in current laptops. An SD card slot is used for removable storage media, not internal expansion cards."
  },
  {
    q: "A technician is asked to upgrade a laptop's RAM but notices the laptop only has a single accessible SODIMM slot, with additional memory soldered directly onto the motherboard. What does this indicate about the laptop's upgrade potential?",
    options: ["The laptop cannot use any RAM at all", "Only the soldered RAM's total is fixed; only the SODIMM slot's contents can be upgraded/added", "The laptop requires a full motherboard replacement to add RAM", "The battery must be replaced before adding RAM"],
    answer: 1, // B
    explain: "On laptops with hybrid memory configurations, the soldered RAM is a fixed, non-removable amount built directly onto the board, while the SODIMM slot allows additional memory to be added or swapped, giving the technician some (but limited) upgrade flexibility. It's incorrect to say the laptop can't use RAM at all, that a motherboard swap is required, or that battery replacement is a prerequisite."
  },
  {
    q: "Which accessory is designed to convert a laptop's single video output port into multiple different types of video connectors (e.g., HDMI, DisplayPort, VGA)?",
    options: ["A KVM switch", "A video/display adapter or dongle", "A docking station exclusively", "A USB hub"],
    answer: 1, // B
    explain: "A video adapter or dongle is a small accessory that converts one video output standard (like USB-C or Thunderbolt) to another connector type such as HDMI, DisplayPort, or VGA. A KVM switch allows one keyboard/video/mouse setup to control multiple computers, not convert video formats. While some docking stations include this functionality, the general-purpose accessory built specifically for this task is the adapter/dongle. A USB hub only expands USB ports, not video output types."
  },
  {
    q: "A user reports that their smartphone's touchscreen registers touches in the wrong locations, particularly near the edges. What is the MOST likely cause?",
    options: ["A weak cellular signal", "A miscalibrated or damaged digitizer", "A corrupted SIM card", "A depleted battery"],
    answer: 1, // B
    explain: "Touch registering inaccurately, especially in specific screen regions, points to a digitizer calibration issue or physical damage to the touch-sensing layer. Cellular signal strength, SIM card issues, and battery depletion do not affect the accuracy of touch input location."
  },
  {
    q: "Which of the following best describes the primary function of a laptop's TPM (Trusted Platform Module) chip in the context of mobile device security?",
    options: ["It increases WiFi signal strength", "It provides hardware-based cryptographic key storage for encryption features like BitLocker", "It manages battery charging cycles", "It controls display brightness"],
    answer: 1, // B
    explain: "A TPM chip is a dedicated hardware security module that securely stores cryptographic keys, enabling features like full-disk encryption (e.g., BitLocker) and hardware-backed authentication. It has no role in WiFi signal strength, battery charge management, or screen brightness control."
  },
  {
    q: "A field technician needs to replace a cracked smartphone screen assembly that includes the LCD, digitizer, and front glass as a single unit. What is this type of replacement part commonly called?",
    options: ["A standalone digitizer", "A screen protector", "A fused/complete screen assembly", "A backlight strip"],
    answer: 2, // C
    explain: "A fused or complete screen assembly combines the LCD, digitizer, and front glass into a single replaceable unit, which is common on modern smartphones where these layers are bonded together for slimmer design. A standalone digitizer would only be the touch layer sold separately (rare on modern fused designs). A screen protector is a thin external film for scratch protection, not a repair component. A backlight strip is only a lighting element within the display, not a full assembly."
  },
  {
    q: "Which of the following is the MOST likely reason a technician would use anti-static (ESD) precautions when replacing internal components in a laptop or smartphone?",
    options: ["To prevent scratching the case", "To prevent electrostatic discharge from damaging sensitive electronic components", "To keep screws organized during disassembly", "To improve WiFi signal strength"],
    answer: 1, // B
    explain: "ESD precautions, such as wearing an anti-static wrist strap, prevent static electricity from the technician's body from discharging into and damaging sensitive electronic components like the motherboard, RAM, or CPU. Preventing scratches, organizing screws, and WiFi performance are unrelated to the purpose of ESD safety measures."
  },
  {
    q: "A user's smartphone camera produces blurry photos only when using the rear camera; the front-facing camera works fine. What is the MOST likely cause?",
    options: ["A software bug affecting all cameras", "Dirty or damaged rear camera lens/sensor", "A weak cellular signal", "Insufficient storage space"],
    answer: 1, // B
    explain: "Since the issue is isolated to the rear camera specifically, a dirty, scratched, or physically damaged rear lens or sensor is the most likely cause, rather than a software issue (which would typically affect both cameras) or unrelated factors like cellular signal or storage space."
  },
  {
    q: "Which of the following BEST describes the function of \"Find My Device\" (or similar location-tracking features) on smartphones?",
    options: ["It backs up all photos to the cloud automatically", "It allows a lost or stolen device to be located, locked, or remotely wiped", "It increases battery life", "It updates the device's operating system automatically"],
    answer: 1, // B
    explain: "Find My Device (and similar features like Find My iPhone) uses GPS/location services to help locate a lost or stolen device, and typically allows remote locking or wiping to protect data. It is not related to automatic photo backup, battery optimization, or OS updates, though these may be separate features on the same device."
  },
  {
    q: "A technician is installing a replacement trackpad on a laptop and notices the ribbon cable connector uses a small flip-up locking tab. What is the correct procedure for connecting this type of cable?",
    options: ["Force the cable in without adjusting the tab", "Lift/flip the locking tab, insert the cable fully and evenly, then close the tab to secure it", "Use excessive glue to hold the cable in place", "Solder the cable directly to the board"],
    answer: 1, // B
    explain: "ZIF (Zero Insertion Force) connectors, common for trackpads, keyboards, and displays, use a small flip-up tab that must be lifted before inserting the ribbon cable, then closed to lock it in place. Forcing the cable, using glue, or soldering can permanently damage the delicate ribbon cable and connector."
  },
  {
    q: "Which mobile connectivity feature must typically be disabled during air travel per airline regulations, though WiFi may be permitted once re-enabled?",
    options: ["Bluetooth", "Airplane mode", "NFC", "Location services"],
    answer: 1, // B
    explain: "Airplane mode is designed specifically to disable all cellular and radio transmissions at once to comply with airline regulations; passengers can then often re-enable WiFi (and sometimes Bluetooth) separately once airplane mode is active. Bluetooth and NFC are individual radios, not the overarching required mode. Location services relates to GPS tracking, not radio transmission compliance."
  },
  {
    q: "A user's laptop overheats and shuts down under heavy workloads, but runs fine for basic tasks like web browsing. What is the MOST likely underlying cause?",
    options: ["A failing WiFi card", "Dust buildup in the cooling fan/heatsink or dried thermal paste", "A cracked screen", "A depleted CMOS battery"],
    answer: 1, // B
    explain: "Heavy workloads generate more heat, and if dust has clogged the fan/heatsink or the thermal paste between the CPU and heatsink has dried out, the system may struggle to dissipate heat only under high load, triggering thermal shutdown protection. A WiFi card, cracked screen, or CMOS battery have no relationship to thermal performance under load."
  },
  {
    q: "Which of the following is a key advantage of an OLED display over a traditional LCD display in mobile devices?",
    options: ["OLED requires a backlight for all pixels", "OLED can produce true blacks and higher contrast since individual pixels emit their own light", "OLED displays are always larger", "OLED displays cannot support touch input"],
    answer: 1, // B
    explain: "OLED (Organic Light-Emitting Diode) panels have self-illuminating pixels, meaning individual pixels can turn completely off to produce true black and higher contrast ratios, unlike LCDs which require a backlight shining through a liquid crystal layer for every pixel. OLED does not require a backlight (that's the opposite of its design), screen size is unrelated to panel technology, and touch input works fine over OLED panels via an integrated digitizer."
  },
  {
    q: "A corporate laptop user needs a way to physically secure their device to a desk in a shared workspace to prevent theft. Which feature/accessory should be used?",
    options: ["A biometric fingerprint reader", "A Kensington security slot/cable lock", "A TPM chip", "An HDMI port"],
    answer: 1, // B
    explain: "A Kensington lock (security slot) is a small reinforced port on most laptops designed to attach a cable lock, physically securing the device to a fixed object like a desk. A fingerprint reader is for authentication, not physical theft prevention. A TPM chip provides cryptographic security, not physical security. An HDMI port is for video output and unrelated to security."
  },
  {
    q: "A technician replaces a laptop's internal storage drive and needs to reinstall the operating system. Which method allows installation without a physical optical or USB drive, using the network instead?",
    options: ["PXE boot", "Safe Mode", "Airplane mode", "NFC boot"],
    answer: 0, // A
    explain: "PXE (Preboot Execution Environment) boot allows a computer to boot and load an OS image directly over the network from a server, eliminating the need for physical installation media. Safe Mode is a diagnostic OS boot mode after an OS is already installed. Airplane mode disables wireless radios and NFC boot is not a valid technology; NFC is used for short-range data exchange, not network OS deployment."
  },
  {
    q: "Which of the following is the correct term for a small, thin battery commonly found on a laptop's motherboard that maintains BIOS/UEFI settings and system clock time when the main power is disconnected?",
    options: ["The main lithium-ion battery", "The CMOS (coin cell) battery", "The SODIMM battery", "The digitizer battery"],
    answer: 1, // B
    explain: "The CMOS battery (typically a small coin-cell battery like a CR2032) powers the BIOS/UEFI's memory and real-time clock when the laptop is unplugged and the main battery is removed or depleted. The main lithium-ion battery powers the entire system during normal operation, not just BIOS settings. SODIMM and digitizer are not battery types at all — one is memory, the other a touch component."
  },
  {
    q: "A user wants to project their smartphone's screen wirelessly onto a smart TV without any cables. Which technology is commonly used for this purpose?",
    options: ["Bluetooth tethering", "Screen mirroring (e.g., Miracast, AirPlay)", "NFC pairing", "SIM card swapping"],
    answer: 1, // B
    explain: "Screen mirroring technologies such as Miracast (Android/Windows) or AirPlay (Apple) allow a device to wirelessly stream its display output to a compatible TV or receiver. Bluetooth tethering shares an internet connection, not video. NFC is for very short-range data exchange, not continuous video streaming. SIM card swapping relates to cellular service, not screen output."
  },
  {
    q: "A technician notices a laptop's fan runs at maximum speed constantly, even when the system is idle. After cleaning dust from the fan and vents, the issue persists. What should be checked NEXT?",
    options: ["The keyboard backlight settings", "The BIOS/UEFI thermal management settings or a failing temperature sensor", "The digitizer calibration", "The SIM card tray"],
    answer: 1, // B
    explain: "If cleaning didn't resolve constant maximum fan speed, the next step is to check BIOS/UEFI fan control and thermal settings, or investigate whether a temperature sensor is providing inaccurate readings, causing the system to believe it's overheating. Keyboard backlighting, digitizer calibration, and SIM card trays have no impact on fan behavior."
  },
  {
    q: "Which of the following best describes \"tethering\" on a mobile device?",
    options: ["Connecting a phone to a charging cable", "Using a mobile device's cellular data connection to provide internet access to another device", "Pairing two Bluetooth headphones together", "Locking a stolen device remotely"],
    answer: 1, // B
    explain: "Tethering specifically refers to sharing a mobile device's cellular data connection with another device (like a laptop) via USB, WiFi hotspot, or Bluetooth. Charging cables are unrelated to data sharing. Pairing Bluetooth headphones is a separate audio connection process. Remotely locking a stolen device relates to security features like Find My Device, not tethering."
  },
  {
    q: "A technician needs to replace a laptop keyboard that is riveted/glued to the chassis rather than using simple screws or clips. What is the BEST approach?",
    options: ["Force the keyboard out quickly to save time", "Carefully follow the manufacturer's service manual, which may require removing the palm rest or using specific prying tools", "Use a heat gun on maximum setting immediately", "Skip removal and epoxy a new keyboard on top of the old one"],
    answer: 1, // B
    explain: "Riveted or adhesive-mounted keyboards require careful, manufacturer-specified disassembly procedures — often involving removing the palm rest assembly or using plastic prying tools — to avoid damaging the chassis or internal cabling. Forcing it out risks cracking the case, using a heat gun on max heat risks damaging nearby components, and gluing a new keyboard on top is not a professional repair method and would likely cause functional and cosmetic problems."
  },
  {
    q: "Which of the following mobile accessories is specifically designed to allow contactless payments using a smartphone at a point-of-sale terminal?",
    options: ["Bluetooth speaker", "NFC chip (used with services like Apple Pay/Google Pay)", "SD card", "HDMI dongle"],
    answer: 1, // B
    explain: "The NFC chip inside smartphones enables contactless payment services such as Apple Pay or Google Pay by allowing secure short-range communication with a point-of-sale terminal. A Bluetooth speaker is an audio output accessory, an SD card is storage, and an HDMI dongle is for video output — none relate to contactless payment functionality."
  },
  {
    q: "A user's laptop battery reports \"plugged in, not charging\" in the operating system even though the charger is connected. Which of the following is a likely cause?",
    options: ["The WiFi card is disabled", "A faulty battery, damaged charging circuit, or loose DC jack connection", "The digitizer needs recalibration", "The RAM is incompatible"],
    answer: 1, // B
    explain: "\"Plugged in, not charging\" typically indicates an issue with the battery itself (worn out or failing), the charging circuitry on the motherboard, or a loose/damaged power connection preventing proper charging communication, even though power is present for operation. WiFi cards, digitizer calibration, and RAM compatibility have no bearing on battery charging status."
  },
  {
    q: "Which type of laptop hinge design issue commonly causes the display cable to fray or break over time due to repeated opening and closing?",
    options: ["The keyboard backlight wiring", "Stress on the display/video cable routed through the hinge", "The battery connector", "The optical drive cable"],
    answer: 1, // B
    explain: "Because the display cable typically runs through or near the laptop's hinges, repeated opening and closing over years of use causes mechanical stress that can fray or break the thin video cable, leading to display flickering or failure. Keyboard backlight wiring, battery connectors, and optical drive cables are not routed through the hinge mechanism and are not typically affected this way."
  },
  {
    q: "A technician is asked to add a cellular WWAN card to a laptop that did not originally include one. Besides the M.2 slot, what additional component is typically required for the WWAN card to function properly?",
    options: ["A new keyboard", "A SIM card and appropriate antenna connections", "An additional SODIMM slot", "A larger battery"],
    answer: 1, // B
    explain: "A WWAN (cellular) card requires a SIM card from a carrier to authenticate on the cellular network, as well as proper antenna cable connections (often routed to the display bezel) to receive/transmit signal. A keyboard, additional RAM slots, and battery capacity are unrelated requirements for enabling cellular connectivity."
  },
  {
    q: "Which of the following best explains why manufacturers use a \"unibody\" chassis design in many modern ultrabooks?",
    options: ["It makes the laptop heavier for stability", "It provides a lighter, more rigid structure machined from a single piece of material (e.g., aluminum)", "It allows for easier RAM upgrades", "It eliminates the need for a battery"],
    answer: 1, // B
    explain: "Unibody construction, often CNC-machined from a single block of aluminum, creates a structurally rigid yet lightweight chassis, which is popular in ultrabooks for durability and portability. It does not intentionally add weight, does not improve RAM upgradeability (in fact, unibody designs often make component access more difficult), and has no relationship to eliminating the need for a battery."
  },
  {
    q: "A technician troubleshooting a smartphone finds that the device will not connect to any cellular network, though WiFi calling and WiFi data both work fine. What should be checked FIRST?",
    options: ["The battery health", "Whether the SIM card is properly seated, valid, and enabled", "The screen brightness settings", "The Bluetooth pairing list"],
    answer: 1, // B
    explain: "Since WiFi-based functions work but cellular does not, the SIM card is the most likely point of failure — it may be improperly seated, damaged, expired, or the account may be suspended. Battery health, screen brightness, and Bluetooth pairing have no direct effect on cellular network connectivity."
  },
  {
    q: "Which of the following is an advantage of using a laptop's built-in fingerprint reader or facial recognition (e.g., Windows Hello) over a traditional password?",
    options: ["It eliminates the need for a BIOS password", "It provides faster, hardware-based biometric authentication that is harder to replicate than a typed password", "It automatically encrypts all removable media", "It disables the TPM chip"],
    answer: 1, // B
    explain: "Biometric authentication methods like fingerprint readers or facial recognition (Windows Hello) provide a fast, convenient sign-in method based on unique physical characteristics, which are generally harder for an attacker to replicate than guessing or stealing a typed password. They do not eliminate the need for BIOS-level passwords (a separate security layer), do not automatically encrypt removable media, and actually often rely on (rather than disable) the TPM chip for secure credential storage."
  },
  {
    q: "A user's smartphone battery drains extremely fast even when the phone is idle and no apps are visibly open. Which troubleshooting step should a technician recommend FIRST?",
    options: ["Replace the entire motherboard", "Check battery usage statistics in settings to identify a misbehaving background app or process", "Replace the screen assembly", "Disable the SIM card"],
    answer: 1, // B
    explain: "Checking the device's battery usage statistics is a quick, non-invasive first step that helps identify whether a specific app or background process is causing excessive battery drain, which is a very common cause of unusual battery depletion. Motherboard replacement is an extreme and unwarranted first step, screen assembly replacement is unrelated to power drain, and disabling the SIM card would only affect cellular service, not general battery-draining background processes."
  },
  {
    q: "Which of the following best describes the purpose of a laptop's \"eDP\" (embedded DisplayPort) connector?",
    options: ["It connects an external monitor via HDMI", "It's an internal cable standard connecting the motherboard's GPU output to the laptop's built-in display panel", "It provides power to the CPU", "It connects the trackpad to the motherboard"],
    answer: 1, // B
    explain: "eDP (embedded DisplayPort) is the internal digital video cable standard used to connect the laptop's graphics output directly to its built-in LCD/OLED display panel. It is not used for external monitor connections (that would be a standard HDMI/DisplayPort/USB-C port), doesn't provide CPU power, and is unrelated to trackpad connections."
  },
  {
    q: "A technician is replacing a smartphone's battery and notices it is glued into the chassis with strong adhesive strips. What tool is specifically designed to safely remove this type of battery?",
    options: ["A Phillips screwdriver", "Adhesive pull tabs or isopropyl alcohol with a plastic pry tool", "A soldering iron", "A magnetized screwdriver"],
    answer: 1, // B
    explain: "Batteries glued into smartphone chassis are often designed with pull tabs for safe removal, or technicians can carefully apply isopropyl alcohol to loosen the adhesive before using a non-conductive plastic pry tool to lift the battery without puncturing or bending it (which could cause a fire/safety hazard). A Phillips screwdriver is for screws, not adhesive removal. A soldering iron is for electrical connections, not battery removal. A magnetized screwdriver risks damaging nearby sensitive electronic components and is not a battery removal tool."
  },
  {
    q: "Which of the following mobile device features would be MOST useful for a user who needs to take handwritten notes directly on their tablet screen?",
    options: ["An active stylus with pressure sensitivity support", "A USB-A port", "An HDMI output", "A SIM card slot"],
    answer: 0, // A
    explain: "An active stylus (such as those supporting pressure sensitivity and palm rejection) is designed specifically for natural handwriting and drawing input directly on a tablet's touchscreen. A USB-A port is for wired peripheral/data connections, an HDMI output is for external video display, and a SIM card slot enables cellular connectivity — none of these relate to handwritten note-taking input."
  },
  {
    q: "A technician is asked to determine whether a laptop's poor WiFi performance is caused by the internal WiFi card or the antenna. Which troubleshooting step would help isolate the cause?",
    options: ["Replace the laptop's battery and retest", "Test the WiFi card in another known-good laptop, or test a known-good WiFi card in the affected laptop", "Reinstall the operating system only", "Replace the laptop's keyboard"],
    answer: 1, // B
    explain: "Swapping components — testing the suspect WiFi card in a different working laptop, or installing a known-good WiFi card into the affected laptop — is a standard isolation technique to determine definitively whether the card itself or the antenna/connection is at fault. Battery replacement, OS reinstallation alone, and keyboard replacement do not help isolate a WiFi hardware issue."
  },
  {
    q: "A technician is replacing a laptop battery and notices it is swollen and pressing against the trackpad. What is the FIRST safety step before removal?",
    options: ["Charge the battery fully first", "Handle it carefully, avoid puncturing it, and place it in a fire-safe container/bag for disposal", "Use a heat gun to soften the adhesive", "Discharge it completely by leaving the laptop on overnight"],
    answer: 1, // B
    explain: "Swollen lithium-ion batteries are a fire/chemical hazard. The correct first step is careful, non-punncturing handling and proper containment/disposal per safety procedures, not charging, applying heat, or continuing to run the device on it, all of which increase risk of fire or explosion."
  },
  {
    q: "Which of the following is the correct procedure when replacing a non-removable (internal) laptop battery?",
    options: ["Simply pry it out with a metal screwdriver", "Disconnect AC power, remove the back panel, disconnect the battery connector from the motherboard, then remove mounting screws/adhesive", "Desolder the battery directly from the motherboard", "Replace it while the system is powered on to preserve BIOS settings"],
    answer: 1, // B
    explain: "Proper procedure requires powering down and disconnecting AC power first, then accessing the internal battery, disconnecting its connector from the board, and removing screws or adhesive holding it in place. Using a metal tool risks punctures/shorts, batteries are not desoldered, and never replace a battery while the system is powered."
  },
  {
    q: "A user reports their laptop's battery only lasts 20 minutes despite showing \"100%\" charge in Windows. What is the MOST likely cause?",
    options: ["A failing Wi-Fi antenna", "Battery wear/degradation causing reduced actual capacity", "A dirty camera lens", "A disconnected microphone"],
    answer: 1, // B
    explain: "Batteries chemically degrade over charge cycles, so the reported percentage can become inaccurate relative to actual usable capacity, causing rapid drain despite showing full charge. Wi-Fi antennas, cameras, and microphones have no relationship to battery capacity or charge reporting."
  },
  {
    q: "Which tool is recommended to safely detach a battery that is secured to a laptop chassis using strong adhesive strips?",
    options: ["A magnetized Phillips screwdriver", "Plastic pry tools and/or adhesive pull-tabs", "A soldering iron", "Pliers"],
    answer: 1, // B
    explain: "Non-conductive plastic pry tools (and manufacturer-provided pull tabs) allow safe separation of adhesive-mounted batteries without puncturing the cell. Magnetized tools risk damaging nearby components, soldering irons are for electrical joints, and pliers can easily puncture or crush a battery cell."
  },
  {
    q: "A laptop shows \"plugged in, not charging\" even though a genuine charger is connected. After confirming the charger and DC jack are fine, what is the NEXT most likely cause?",
    options: ["A failing/degraded battery or charging circuit", "A missing SIM card", "An outdated camera driver", "A disabled microphone in Device Manager"],
    answer: 0, // A
    explain: "Once the external power path is confirmed good, the next most likely fault is the battery itself (worn out or with a failed charging controller chip) or the onboard charging circuitry. SIM cards, camera drivers, and microphone settings have no bearing on battery charging status."
  },
  {
    q: "Which of the following is a critical safety consideration technicians must follow when disposing of a laptop battery?",
    options: ["Throw it in regular household trash", "Recycle it through a certified battery/e-waste recycling program per local regulations", "Bury it to prevent leakage", "Store it in a metal toolbox indefinitely"],
    answer: 1, // B
    explain: "Lithium-ion batteries contain hazardous materials and must be recycled through certified e-waste/battery recycling programs in compliance with local environmental regulations. Regular trash disposal, burying, or indefinite storage are unsafe and often illegal disposal methods."
  },
  {
    q: "A technician needs to replace several unresponsive individual keys on a laptop keyboard rather than the whole assembly. What is this repair commonly called?",
    options: ["A full keyboard swap", "Keycap/key retainer (scissor switch) replacement", "A digitizer replacement", "A RAM reseat"],
    answer: 1, // B
    explain: "Individual key mechanisms (keycaps and their underlying scissor-switch retainers) can often be popped off and replaced individually without swapping the entire keyboard assembly, which is a more economical repair for isolated key failures. A full keyboard swap replaces everything, a digitizer relates to touchscreens, and RAM reseating is unrelated to keyboards."
  },
  {
    q: "A user spilled coffee on their laptop keyboard, and now several keys stick or fail to register. What should the technician do FIRST?",
    options: ["Immediately power off and disconnect the battery, then allow the device to fully dry before inspection", "Continue using the laptop to \"dry it out\"", "Pour water on the keyboard to dilute the coffee", "Replace the RAM immediately"],
    answer: 0, // A
    explain: "The first priority after any liquid spill is to power down and disconnect power sources (including the battery) immediately to prevent short circuits, then allow thorough drying before inspecting/repairing the keyboard. Continuing to use the device or adding more liquid increases damage risk, and RAM replacement is irrelevant to a keyboard spill."
  },
  {
    q: "Which laptop keyboard connector type, commonly used for ribbon cables, requires a locking flap to be lifted before removal?",
    options: ["SATA connector", "ZIF (Zero Insertion Force) connector", "RJ-45 connector", "M.2 connector"],
    answer: 1, // B
    explain: "ZIF connectors use a small hinged locking flap that must be lifted to release the ribbon cable, commonly used for keyboards, trackpads, and internal displays. SATA connects storage drives, RJ-45 is a network cable connector, and M.2 is a slot for storage/wireless cards — none use this flap mechanism."
  },
  {
    q: "A technician replacing a laptop keyboard notices it is riveted to the palm rest as a single unit. What is the BEST approach?",
    options: ["Snap the rivets off with pliers and reuse them", "Follow the OEM service manual, which typically requires replacing the entire palm rest/keyboard assembly together", "Glue a new keyboard directly over the old rivets", "Skip the repair and recommend an external keyboard permanently"],
    answer: 1, // B
    explain: "When a keyboard is riveted into the palm rest, OEM procedures typically call for replacing the entire top-cover assembly as a unit rather than trying to salvage individual rivets, which is more reliable and avoids damaging the chassis. Reusing rivets, gluing over old components, and permanently avoiding the internal repair are all improper practices."
  },
  {
    q: "A technician is troubleshooting a laptop where certain keys type the wrong characters (e.g., pressing \"Q\" outputs \"1\"). What is the MOST likely cause?",
    options: ["A failing microphone", "The Num Lock or Fn key state affecting an embedded numeric keypad", "A cracked Wi-Fi antenna", "A missing NFC chip"],
    answer: 1, // B
    explain: "Many laptop keyboards embed a numeric keypad over the standard alpha keys, activated via Num Lock or the Fn key; if accidentally toggled on, normal letter keys will output numbers instead. Microphones, Wi-Fi antennas, and NFC chips have no effect on keyboard character output."
  },
  {
    q: "Which of the following BEST describes a benefit of purchasing a full keyboard/palm-rest replacement assembly versus individual keycaps?",
    options: ["It's always cheaper", "It restores the entire top cover, trackpad, and keyboard functionality in one repair when multiple components are integrated or damaged", "It eliminates the need for a battery", "It automatically upgrades the RAM"],
    answer: 1, // B
    explain: "When a keyboard is integrated with the palm rest and trackpad as a single molded assembly (common in modern ultrabooks), replacing the whole unit ensures all components are restored together, especially useful if multiple parts are damaged. It is not always the cheaper option, and it has no effect on battery need or RAM capacity."
  },
  {
    q: "Which memory module type is designed specifically for the compact space constraints of laptops?",
    options: ["DIMM", "SODIMM", "Registered DIMM", "FB-DIMM"],
    answer: 1, // B
    explain: "SODIMM (Small Outline Dual In-line Memory Module) is a physically smaller memory standard built for laptops and other space-constrained devices. DIMM, Registered DIMM, and FB-DIMM are all desktop/server memory standards too large for laptop installation."
  },
  {
    q: "A technician installs new RAM in a laptop, but the system fails to POST and emits a series of beep codes. What should be checked FIRST?",
    options: ["The Wi-Fi antenna connection", "Reseat the RAM module, ensuring it is fully seated and the retaining clips are engaged", "The microphone driver", "The NFC reader"],
    answer: 1, // B
    explain: "Beep codes at POST commonly indicate a memory detection failure, so the first troubleshooting step is to reseat the RAM module, confirming it is firmly and evenly seated with the side clips properly latched. Wi-Fi antennas, microphone drivers, and NFC readers are unrelated to POST memory errors."
  },
  {
    q: "A laptop specification sheet indicates \"8GB soldered + 1 SODIMM slot (supports up to 40GB total).\" What does this configuration mean for upgrades?",
    options: ["The laptop cannot be upgraded at all", "The 8GB soldered RAM is fixed and cannot be removed, but the SODIMM slot can be upgraded to add additional capacity", "Both memory types can be swapped out", "The soldered RAM must be removed before the SODIMM slot works"],
    answer: 1, // B
    explain: "In hybrid RAM configurations, soldered memory is permanently fixed to the motherboard and cannot be changed, while the SODIMM slot remains user-upgradeable, allowing added capacity within the stated total. The system is not entirely non-upgradeable, the soldered memory can't be swapped, and there's no requirement to remove soldered RAM for the slot to function."
  },
  {
    q: "Which of the following is a MOST important consideration when purchasing replacement RAM for a laptop?",
    options: ["The RAM's color", "Compatibility in terms of DDR generation, speed, voltage, and capacity supported by the motherboard", "The RAM brand only", "Whether it has a heatsink installed"],
    answer: 1, // B
    explain: "Laptop RAM must match the motherboard's supported DDR generation (e.g., DDR4 vs. DDR5), speed rating, voltage, and maximum capacity per slot/channel to function properly. Color, brand alone, and heatsink presence (mostly a desktop/gaming cosmetic feature) are not critical compatibility factors."
  },
  {
    q: "A technician removes a laptop's back panel to access RAM and notices the SODIMM slots are spring-loaded at an angle. What is the correct insertion procedure?",
    options: ["Insert the module vertically and snap it down", "Insert the module at the indicated angle into the slot, then press down firmly until the side clips lock", "Insert the module upside down", "Force the module in any orientation"],
    answer: 1, // B
    explain: "SODIMM slots require the module to be inserted at an angle (matching the notch alignment) and then pressed down flat until the retaining clips snap into place on both sides. Vertical insertion, upside-down orientation, or forcing it incorrectly can damage the module or slot's pins."
  },
  {
    q: "Which symptom is MOST commonly associated with faulty or improperly seated laptop RAM?",
    options: ["The battery fails to charge", "The system fails to boot, freezes randomly, or displays a blue screen with memory-related error codes", "The camera stops recording video", "The Wi-Fi signal weakens"],
    answer: 1, // B
    explain: "Faulty or loose RAM commonly causes boot failures, random freezes/crashes, and blue screens referencing memory management errors, since the system cannot reliably read/write to unstable memory. Battery charging, camera function, and Wi-Fi signal strength are unrelated to RAM issues."
  },
  {
    q: "A technician needs to upgrade storage in an ultrabook that has no 2.5\" drive bay, only a small elongated slot on the motherboard. Which storage type is used?",
    options: ["3.5\" HDD", "M.2 SSD", "Compact Flash card", "ZIP drive"],
    answer: 1, // B
    explain: "Ultrabooks with a small elongated slot directly on the motherboard use M.2 SSDs, which connect via SATA or NVMe/PCIe protocols in a compact card format ideal for thin laptop designs. 3.5\" HDDs are desktop-only, Compact Flash is an outdated memory card format, and ZIP drives are obsolete removable storage devices."
  },
  {
    q: "Which of the following is an advantage of replacing a laptop's HDD with an SSD?",
    options: ["SSDs are always larger in physical size", "SSDs offer faster read/write speeds, lower power consumption, and better shock resistance due to no moving parts", "SSDs require more power and generate more heat", "SSDs cannot be used for OS installation"],
    answer: 1, // B
    explain: "SSDs use flash memory with no mechanical moving parts, resulting in significantly faster data access speeds, lower power draw, and greater resistance to physical shock compared to traditional HDDs. SSDs are typically smaller (not larger), use less power (not more), and are fully capable of hosting an OS installation."
  },
  {
    q: "A technician is cloning data from a failing laptop HDD to a new SSD before replacement. Which of the following should be verified BEFORE starting the clone?",
    options: ["The Wi-Fi antenna is disconnected", "The destination SSD has sufficient capacity to hold all data from the source drive", "The microphone is muted", "The battery is fully depleted"],
    answer: 1, // B
    explain: "Before cloning, the technician must confirm the destination drive has enough storage capacity to accommodate all used space on the source drive, or the clone will fail or truncate data. Wi-Fi antenna status, microphone mute state, and battery charge level have no bearing on the disk cloning process."
  },
  {
    q: "Which connector type is commonly used by 2.5\" laptop SSDs/HDDs to interface with the motherboard?",
    options: ["PCIe x16", "SATA", "HDMI", "3.5mm audio jack"],
    answer: 1, // B
    explain: "2.5\" laptop drives (both SSD and HDD) typically use the SATA (Serial ATA) interface and connector for data and power. PCIe x16 is a desktop GPU slot standard, HDMI is a video output connector, and a 3.5mm jack is for audio, not storage connections."
  },
  {
    q: "A user's laptop makes a repetitive clicking or grinding noise, and file access has become very slow. Which component is MOST likely failing?",
    options: ["The camera module", "A mechanical hard disk drive (HDD)", "The Wi-Fi antenna", "The keyboard backlight"],
    answer: 1, // B
    explain: "Clicking or grinding noises combined with slow performance are classic symptoms of a failing mechanical HDD, where the read/write head or spindle motor is malfunctioning. Cameras, Wi-Fi antennas, and keyboard backlights do not produce mechanical noise or affect file access speed."
  },
  {
    q: "Which of the following storage types is typically soldered directly to the motherboard in budget tablets and Chromebooks, making it non-upgradeable?",
    options: ["3.5\" HDD", "eMMC", "M.2 NVMe SSD (removable)", "External USB drive"],
    answer: 1, // B
    explain: "eMMC (embedded Multi-Media Card) storage is commonly soldered directly onto the motherboard in low-cost tablets and Chromebooks, offering slower performance than SSDs and no upgrade path. 3.5\" HDDs don't fit these devices, removable M.2 NVMe drives are upgradeable by definition, and external USB drives are not internal/soldered storage."
  },
  {
    q: "A laptop's internal Wi-Fi/Bluetooth combo card has failed and needs replacement. Which slot does this card MOST commonly use?",
    options: ["SODIMM slot", "M.2 slot (Key E)", "SATA connector", "3.5mm headphone jack"],
    answer: 1, // B
    explain: "Wireless cards (Wi-Fi/Bluetooth combo) typically use the M.2 Key E slot, a specific keying designed for wireless modules, distinct from the Key M/B slots used for storage. SODIMM slots are for RAM, SATA connectors are for drives, and headphone jacks are for audio only."
  },
  {
    q: "After replacing a laptop's wireless card, the technician must reconnect small coaxial antenna cables to the new card. What could result if these cables are connected loosely or incorrectly?",
    options: ["The battery will drain faster", "Weak, intermittent, or no Wi-Fi/Bluetooth signal", "The keyboard will stop typing correctly", "The HDD will fail to spin up"],
    answer: 1, // B
    explain: "The antenna cables carry the actual radio signal to and from the wireless card; if improperly connected, the result is poor signal strength, dropped connections, or complete loss of wireless connectivity. Battery drain, keyboard function, and HDD spin-up are unrelated to antenna cable connections."
  },
  {
    q: "Which of the following is the MOST likely cause of a laptop's Wi-Fi being completely undetected by the OS after a wireless card replacement?",
    options: ["The battery needs charging", "The card is not properly seated in the M.2 slot, or the wrong card type/key was installed", "The keyboard driver is outdated", "The optical drive is missing"],
    answer: 1, // B
    explain: "If Wi-Fi is entirely undetected after a card swap, the most likely causes are improper seating in the M.2 slot or installing an incompatible card (wrong keying/interface type not matching the slot). Battery charge, keyboard drivers, and missing optical drives have no effect on wireless card detection."
  },
  {
    q: "A corporate laptop needs cellular internet access via a carrier SIM card. Which type of wireless card must be installed in addition to the standard Wi-Fi/Bluetooth card?",
    options: ["A WWAN (cellular) card", "A SATA controller card", "A graphics card", "A sound card"],
    answer: 0, // A
    explain: "A WWAN (Wireless Wide Area Network) card enables cellular data connectivity using a carrier SIM card, and is a separate module from the standard Wi-Fi/Bluetooth card. SATA controllers manage storage drives, graphics cards handle video rendering, and sound cards manage audio — none provide cellular connectivity."
  },
  {
    q: "Which of the following BEST describes why some countries/regions restrict certain Wi-Fi/wireless card models from being sold or used?",
    options: ["Wireless cards vary in price by country", "Wireless cards must comply with region-specific radio frequency regulations (e.g., FCC, CE)", "All wireless cards are identical worldwide", "Wireless cards affect battery voltage only"],
    answer: 1, // B
    explain: "Wireless cards must be certified to comply with regional radio frequency regulatory bodies, such as the FCC (US) or CE (Europe), governing allowed frequencies and transmission power, which is why certain models are restricted in specific regions. Pricing variation, universal identical models, and voltage effects are not the reasons for regional restrictions."
  },
  {
    q: "Which mobile device security feature uses a scan of a user's fingerprint or face to unlock the device instead of a typed password?",
    options: ["NFC pairing", "Biometric authentication", "Bluetooth tethering", "Screen mirroring"],
    answer: 1, // B
    explain: "Biometric authentication uses unique physical characteristics — such as fingerprints (via a fingerprint reader) or facial features (via facial recognition scanning) — to verify identity and unlock a device, offering a fast alternative to typed passwords. NFC pairing, Bluetooth tethering, and screen mirroring are unrelated connectivity/display features."
  },
  {
    q: "A user's laptop fingerprint reader stops recognizing their registered fingerprint after a Windows update. What should the technician try FIRST?",
    options: ["Replace the entire motherboard", "Re-enroll the fingerprint in Windows Hello settings and check/update the fingerprint reader driver", "Replace the RAM", "Replace the Wi-Fi card"],
    answer: 1, // B
    explain: "The first, least invasive troubleshooting step is to re-enroll the fingerprint within the OS's biometric settings (e.g., Windows Hello) and verify the fingerprint reader's driver is current and functioning, since updates can sometimes reset or affect biometric data/drivers. Motherboard, RAM, and Wi-Fi card replacement are unrelated and excessive for this issue."
  },
  {
    q: "Which of the following is a benefit of a laptop's built-in NFC (Near-Field Communication) scanner in an enterprise/security context?",
    options: ["It boosts overall Wi-Fi range", "It enables tap-to-authenticate access using smart cards or security badges", "It increases available RAM", "It improves battery charging speed"],
    answer: 1, // B
    explain: "In corporate environments, an NFC scanner can allow employees to authenticate by tapping a security badge or smart card against the device, streamlining secure login processes. NFC has no effect on Wi-Fi range, RAM capacity, or battery charging speed."
  },
  {
    q: "A technician is asked to physically disable a laptop's camera for a high-security environment. Which of the following is the MOST appropriate hardware-based solution?",
    options: ["Uninstall the camera driver only", "Use a laptop with a physical camera privacy shutter, or physically disconnect the camera's ribbon cable", "Lower the screen brightness", "Disable the microphone in Device Manager"],
    answer: 1, // B
    explain: "A physical privacy shutter (a sliding cover built into some laptops) or physically disconnecting the camera module's ribbon cable provides true hardware-level assurance that the camera cannot capture video, which is more secure than a driver-level software disable (which can potentially be re-enabled remotely). Screen brightness and microphone settings do not affect camera function."
  },
  {
    q: "Which physical security component is specifically designed to prevent a webcam from capturing video/images when not in use, without requiring software changes?",
    options: ["A privacy filter screen", "A physical camera shutter/cover", "A Kensington lock", "A TPM chip"],
    answer: 1, // B
    explain: "A physical camera shutter or slide cover is a mechanical component built into or added onto the laptop that physically blocks the camera lens, providing privacy assurance independent of any software or driver settings. A privacy filter screen limits the viewing angle of the display (not the camera), a Kensington lock is a physical anti-theft cable lock, and a TPM chip handles cryptographic key storage, not camera blocking."
  },
  {
    q: "Which of the following is an example of a physical privacy/security component commonly found on modern business laptops, in addition to biometrics?",
    options: ["An HDMI port", "A privacy screen filter that narrows the viewing angle to prevent shoulder surfing", "A SODIMM slot", "An M.2 storage slot"],
    answer: 1, // B
    explain: "A privacy screen filter is a physical accessory or built-in feature that narrows the display's viewing angle, preventing people beside or behind the user from easily reading the screen (shoulder surfing protection). HDMI ports, SODIMM slots, and M.2 slots are hardware interfaces unrelated to visual privacy."
  },
  {
    q: "A technician replacing a laptop's fingerprint reader module notices it connects via a small ribbon cable near the power button. After installation, Windows Hello does not detect the new reader. What should be checked FIRST?",
    options: ["The RAM seating", "Whether the ribbon cable is fully and correctly seated in its connector, and whether drivers were reinstalled", "The optical drive", "The HDMI port"],
    answer: 1, // B
    explain: "After physically replacing a biometric module, the first troubleshooting steps are confirming the ribbon cable connector is properly seated and reinstalling/updating the associated drivers, since improper seating or missing drivers are the most common causes of non-detection. RAM seating, optical drives, and HDMI ports are unrelated to fingerprint reader function."
  },
  {
    q: "Where is the Wi-Fi antenna typically placed within a laptop chassis to maximize signal reception?",
    options: ["Inside the battery compartment", "Along the top or sides of the display bezel/lid", "Underneath the keyboard", "Inside the optical drive bay"],
    answer: 1, // B
    explain: "Wi-Fi (and Bluetooth) antennas are most commonly placed along the display bezel/lid because this location keeps them away from other metal components and the user's body, maximizing signal reception and transmission. The battery compartment, keyboard area, and optical drive bay are not standard or optimal antenna placement locations."
  },
  {
    q: "Which type of connector is used to attach the thin coaxial Wi-Fi antenna cable to the wireless card?",
    options: ["RJ-45 connector", "U.FL (or similar micro coaxial) connector", "SATA power connector", "3.5mm audio jack"],
    answer: 1, // B
    explain: "U.FL (also called IPEX or micro coaxial) connectors are the small, delicate connectors used to attach thin antenna cables to the wireless card's antenna ports. RJ-45 is for wired Ethernet, SATA power connectors are for drives, and 3.5mm jacks are for audio devices."
  },
  {
    q: "A technician replacing a laptop motherboard forgets to reconnect one of the two Wi-Fi antenna cables. What symptom would MOST likely result?",
    options: ["The laptop won't power on at all", "Reduced Wi-Fi signal strength/range compared to before, though basic connectivity may still work", "The keyboard stops responding", "The battery won't charge"],
    answer: 1, // B
    explain: "Most laptops use two antennas (main and auxiliary) for MIMO (multiple-input, multiple-output) performance; leaving one disconnected typically results in reduced signal strength and range rather than complete failure, since the remaining antenna can still provide some connectivity. This issue has no effect on power-on capability, keyboard function, or battery charging."
  },
  {
    q: "When routing Wi-Fi antenna cables during a laptop repair, why should a technician avoid running them near or crossing over other unshielded cables?",
    options: ["It affects battery temperature", "It can cause electromagnetic interference (EMI) that may degrade wireless signal quality", "It will cause the HDD to fail", "It changes the keyboard layout"],
    answer: 1, // B
    explain: "Antenna cables carry sensitive radio frequency signals, and running them close to unshielded cables (such as certain power or data lines) can introduce electromagnetic interference, degrading Wi-Fi/Bluetooth signal quality. This has no relationship to battery temperature, HDD function, or keyboard layout."
  },
  {
    q: "A user reports their laptop's webcam produces a black screen during video calls, though the app shows the camera as \"active.\" What should be checked FIRST?",
    options: ["The RAM seating", "Whether a physical privacy shutter is closed, or if the camera is blocked/covered", "The Wi-Fi antenna", "The SATA cable"],
    answer: 1, // B
    explain: "Since many laptops include a slide-style physical privacy shutter, a black screen despite an \"active\" camera status is often simply due to the shutter being closed or the lens being physically obstructed (e.g., a sticker or cover) — a quick, non-invasive first check. RAM, Wi-Fi antennas, and SATA cables have no effect on video output from a camera."
  },
  {
    q: "Which of the following is the MOST likely internal cause of a laptop webcam that is fully exposed (no shutter) but still shows no image, with the app confirming the correct camera is selected?",
    options: ["A depleted CMOS battery", "A disconnected or damaged camera ribbon cable connecting it to the motherboard", "A missing SIM card", "An unformatted SSD"],
    answer: 1, // B
    explain: "If the shutter isn't the cause, the next most likely issue is a disconnected, loose, or physically damaged ribbon cable linking the camera module to the motherboard, interrupting the video signal path. CMOS batteries affect BIOS settings/clock, SIM cards relate to cellular connectivity, and SSD formatting is unrelated to camera function."
  },
  {
    q: "A technician is replacing a laptop's integrated webcam module. Where is this component MOST commonly located?",
    options: ["Inside the battery bay", "Embedded in the top bezel of the display, near the built-in microphone", "Inside the optical drive bay", "Underneath the trackpad"],
    answer: 1, // B
    explain: "Integrated webcams are almost universally located in the top bezel of the display panel, often positioned right next to the built-in microphone(s) for convenient video conferencing. Battery bays, optical drive bays, and areas underneath the trackpad are not standard webcam locations."
  },
  {
    q: "Which of the following would be the MOST appropriate action if a user is concerned about unauthorized software accessing their webcam without their knowledge?",
    options: ["Disable the RAM in BIOS", "Use a physical camera cover/shutter and review OS-level camera privacy/permission settings", "Replace the SODIMM module", "Format the SSD"],
    answer: 1, // B
    explain: "Using a physical shutter/cover provides guaranteed hardware-level privacy, while reviewing OS camera permission settings (which apps have camera access) adds a software-level safeguard against unauthorized access. Disabling RAM, replacing SODIMM modules, and formatting the SSD are unrelated and would harm system functionality rather than address the actual concern."
  },
  {
    q: "A technician replacing a cracked laptop display panel must also handle the integrated webcam and microphone typically mounted in the same bezel assembly. What precaution should be taken?",
    options: ["Discard the old webcam/mic assembly immediately", "Carefully disconnect and transfer/reuse the camera and microphone ribbon cables if the replacement panel doesn't include them, per the service manual", "Solder new wires directly to the motherboard", "Ignore the webcam/mic and leave them disconnected permanently"],
    answer: 1, // B
    explain: "Since these components are often mounted in the display bezel along with the panel, technicians must follow the OEM service manual to properly disconnect and, if necessary, transfer the working camera/microphone assembly to the new bezel (if the replacement doesn't include a working version), to avoid losing these features after the repair. Discarding, soldering directly, or leaving them permanently disconnected are improper practices that would remove functionality unnecessarily."
  },
  {
    q: "A user says people can't hear them clearly during laptop video calls, though the camera video works fine. What should the technician check FIRST?",
    options: ["The keyboard backlight", "Whether the correct microphone is selected in the OS sound settings and is not muted", "The battery health", "The optical drive"],
    answer: 1, // B
    explain: "Since the camera (video) works, the issue is isolated to audio input, and the first step is verifying that the correct microphone is selected as the default input device in OS sound settings and that it is not muted (a very common and simple oversight). Keyboard backlight, battery health, and optical drives have no effect on microphone audio input."
  },
  {
    q: "Which of the following is the MOST likely cause of a laptop's built-in microphone producing muffled or distorted audio, with no OS-level muting issues found?",
    options: ["A failing Wi-Fi card", "Dust/debris blocking the microphone port, or a damaged microphone component requiring replacement", "A depleted CMOS battery", "An outdated BIOS version"],
    answer: 1, // B
    explain: "If software settings are ruled out, muffled or distorted audio is commonly caused by physical obstruction (dust/debris in the small microphone port) or a hardware fault in the microphone component itself, requiring cleaning or replacement. Wi-Fi cards, CMOS batteries, and BIOS versions are unrelated to microphone audio quality."
  },
  {
    q: "Where are laptop microphones MOST commonly integrated, especially in devices with multiple microphones for noise cancellation?",
    options: ["Inside the battery compartment", "Near the display bezel/webcam and along the keyboard deck edges", "Inside the SATA connector", "Behind the RAM slots"],
    answer: 1, // B
    explain: "Laptop microphones are typically placed near the display bezel (alongside the webcam) and sometimes additionally along the edges of the keyboard deck, allowing multiple microphones to work together for noise cancellation and clearer voice pickup. Battery compartments, SATA connectors, and areas behind RAM slots are not standard microphone locations."
  },
  {
    q: "A technician replacing a laptop's microphone component finds it is a small module connected via a thin cable to the motherboard, separate from the camera. What is the correct approach to test functionality after replacement?",
    options: ["Assume it works without testing", "Use the OS's sound recording/test feature to confirm audio input is detected and clear", "Replace the RAM to confirm", "Check the Wi-Fi signal strength"],
    answer: 1, // B
    explain: "After any hardware replacement, verifying functionality is essential; using the OS's built-in sound recording or microphone test feature confirms that audio input is properly detected and free of distortion. Assuming it works without testing is poor practice, and RAM or Wi-Fi checks are unrelated to microphone verification."
  },
  {
    q: "Which of the following BEST explains why some business laptops include a physical microphone mute switch/key in addition to software mute controls?",
    options: ["It saves battery power exclusively", "It provides a hardware-guaranteed method to disable audio input, useful in secure environments where software mutes could potentially be bypassed by malware", "It boosts Wi-Fi signal", "It increases available storage space"],
    answer: 1, // B
    explain: "A physical mute switch/key provides assurance that the microphone is truly disabled at the hardware level, which is valuable in security-conscious environments where malicious software might otherwise attempt to bypass a software-only mute setting. This feature has no relationship to battery savings, Wi-Fi signal, or storage capacity."
  },
];