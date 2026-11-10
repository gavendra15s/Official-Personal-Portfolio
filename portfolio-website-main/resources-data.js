/**
 * Student Resources Inventory
 * Provided FREE OF COST to students who genuinely need them.
 * 
 * Rules:
 * - Maximum 3 items per student
 * - First Come, First Served
 * 
 * Clean data array to easily add, edit, or categorize resources.
 */

const STUDENT_RESOURCES = [
  // ─── ARDUINO & EMBEDDED ───
  {
    id: "arduino-uno",
    name: "Arduino UNO R3 Development Board",
    category: "Arduino & Embedded",
    image: "Arduino uno.jpeg",
    shortDesc: "Core ATmega328P microcontroller board for robotics, IoT, and embedded prototypes.",
    fullDesc: "The quintessential microcontroller development board with 14 digital input/output pins (6 PWM outputs), 6 analog inputs, a 16 MHz quartz crystal, USB connection, and ICSP header. Perfect for all levels of engineering projects.",
    suitableFor: "Robotics, home automation, IoT sensors, semester mini-projects, DIY smart devices",
    specs: "ATmega328P MCU • 5V Operating Voltage • 7-12V Input • 32KB Flash Memory • 2KB SRAM"
  },
  {
    id: "arduino-cable",
    name: "Arduino USB Type-A to Type-B Cable",
    category: "Arduino & Embedded",
    image: "Arduino cable.jpeg",
    shortDesc: "High-durability programming and 5V power cable for Arduino UNO and Mega boards.",
    fullDesc: "Heavy-duty shielded USB Type-A to Type-B cable providing reliable data transmission and power delivery for uploading sketches and serial monitor debugging.",
    suitableFor: "Connecting Arduino UNO / Mega to PC/laptop, firmware burning, serial telemetry",
    specs: "Standard USB 2.0 • Gold-plated contacts • Molded strain relief • High-speed data sync"
  },
  {
    id: "motor-driver-l298n",
    name: "L298N Dual H-Bridge Motor Driver Module",
    category: "Arduino & Embedded",
    image: "Motor driver.jpeg",
    shortDesc: "Dual H-bridge driver module to control speed and direction of 2 DC motors or 1 stepper.",
    fullDesc: "High-power driver capable of driving inductive loads like relays, solenoids, DC, and stepping motors. Features onboard 5V regulator and heat sink for thermal dissipation.",
    suitableFor: "Line follower robots, Bluetooth/WiFi RC cars, robotic arms, obstacle avoiders",
    specs: "L298N dual H-bridge chip • 5V-35V drive voltage • 2A peak current per bridge • PWM speed control"
  },
  {
    id: "rfid-smart-card",
    name: "13.56 MHz High-Frequency RFID Smart Card",
    category: "Arduino & Embedded",
    image: "RFID CARD.jpeg",
    shortDesc: "Passive contactless smart card with unique factory UID for wireless identification.",
    fullDesc: "Standard credit-card form factor RFID proximity card operating on high-frequency 13.56 MHz resonance. Compatible with RC522 RFID reader modules.",
    suitableFor: "College attendance systems, smart digital door locks, cashless ticketing models",
    specs: "13.56 MHz ISO14443A • Passive (battery-free) • 1KB EEPROM • Rewritable blocks"
  },
  {
    id: "rfid-key-fob",
    name: "Compact RFID Key Fob Transponder Tag",
    category: "Arduino & Embedded",
    image: "RFID_card.jpeg",
    shortDesc: "Rugged waterproof keychain tag for contactless access control and authentication.",
    fullDesc: "Durable ABS casing enclosing an induction coil and RFID transponder chip. Highly resilient for portable physical keychains and wearable hardware demos.",
    suitableFor: "Automated access gates, vehicle authentication prototypes, locker locks",
    specs: "High-frequency RFID • Tough ultrasonic sealed ABS • Keyring attachment"
  },

  // ─── SENSORS ───
  {
    id: "ultrasonic-servo-assembly",
    name: "HC-SR04 Ultrasonic Distance Sensor + Micro Servo Mount",
    category: "Sensors",
    image: "servomotor with ultrasonic sensor .jpeg",
    shortDesc: "Pan-tilt scanning sonar assembly with ultrasonic rangefinder and servo motor.",
    fullDesc: "Pre-mounted radar assembly featuring the HC-SR04 sonar transducer on a 180° micro servo horn. Enables automated angular sweeps for real-time distance mapping.",
    suitableFor: "Obstacle-avoidance rovers, mini radar systems, room mapping, blind-spot detectors",
    specs: "2cm to 400cm range • 3mm precision • 5V DC • 180-degree sweep capability"
  },
  {
    id: "ir-proximity-sensor",
    name: "Infrared (IR) Obstacle & Proximity Sensor Module",
    category: "Sensors",
    image: "IR_sendor.jpeg",
    shortDesc: "Digital optical obstacle detection module with onboard comparator and sensitivity dial.",
    fullDesc: "Features an infrared transmitter diode and matching phototransistor paired with an LM393 voltage comparator. Delivers instant active-low digital output when an object is detected.",
    suitableFor: "Black/white line tracking robots, conveyor object counters, proximity alarms",
    specs: "2cm to 30cm detection range • Onboard preset trimmer potentiometer • 3.3V-5V logic"
  },
  {
    id: "pir-motion-sensor",
    name: "PIR Human Motion Detector Module (HC-SR501)",
    category: "Sensors",
    image: "motion_sensor.jpeg",
    shortDesc: "Passive infrared sensor with Fresnel lens for detecting human presence and motion.",
    fullDesc: "High-sensitivity infrared sensor designed to detect changes in ambient IR thermal radiation emitted by human bodies. Features dual potentiometers to adjust sensitivity and trigger delay.",
    suitableFor: "Smart energy-saving lights, security intruder alarms, automated visitor annunciators",
    specs: "Up to 7 meters detection range • 120-degree cone angle • Adjustable 0.5s-200s delay"
  },
  {
    id: "ldr-optical-sensor",
    name: "LDR Ambient Light Sensor & Optical Diode Set",
    category: "Sensors",
    image: "Diode and light sensor.jpeg",
    shortDesc: "Photoresistor and photodiode kit for ambient lux measurement and day/night triggers.",
    fullDesc: "CdS photoresistors whose resistance varies inversely with incident illumination intensity, paired with high-speed directional optical diodes.",
    suitableFor: "Automatic street lamp switches, solar panel sun-tracking systems, light meters",
    specs: "Dark resistance > 1 MΩ • Light resistance ~ 10-20 kΩ • Rapid optical response"
  },
  {
    id: "analog-digital-sensor",
    name: "Multi-Purpose Analog / Digital Sensor Module",
    category: "Sensors",
    image: "sensor.jpeg",
    shortDesc: "Dual-output conditioned sensor module for linear telemetry and threshold switching.",
    fullDesc: "Versatile circuit module providing both a raw continuous analog voltage output (for ADC reading) and a thresholded digital output with status LED.",
    suitableFor: "Analog sensor experiments, data acquisition boards, threshold comparator setups",
    specs: "Dual Analog (AO) + Digital (DO) outputs • Onboard comparator • 3.3V - 5V power"
  },

  // ─── MOTORS ───
  {
    id: "motor-4wd-robot-chassis",
    name: "4WD Robot Drive Set (4 Geared Motors + Rubber Wheels)",
    category: "Motors",
    image: "set of four project motor with wheel.jpeg",
    shortDesc: "Full four-wheel drive locomotion kit with dual-shaft BO motors and rubber grip wheels.",
    fullDesc: "Complete four-wheel-drive propulsion set designed for mobile robotics. High-traction rubber tires with tread pattern deliver excellent grip over tiles, wood, and lab floors.",
    suitableFor: "Autonomous mobile robots, ROS rovers, Wi-Fi camera bots, Bluetooth RC rovers",
    specs: "4x 1:48 gear ratio BO motors • 4x 65mm rubber tread tires • 3V-9V operating range"
  },
  {
    id: "motor-high-torque-geared",
    name: "High-Torque Heavy-Duty Geared DC Motor",
    category: "Motors",
    image: "high load motor.jpeg",
    shortDesc: "Rugged high-torque geared motor built for heavy lifting and mechanical drives.",
    fullDesc: "Equipped with internal spur reduction gearing to multiply rotational torque, providing the necessary strength to lift linkages, steer wheels, or rotate heavy mechanisms.",
    suitableFor: "Robotic arms, conveyor prototypes, steering actuators, mechanical winches",
    specs: "Metal/hybrid gear train • High stall torque • Low RPM stability • D-shaft output"
  },
  {
    id: "motor-3phase-brushless",
    name: "High-Efficiency 3-Phase Compact DC Motor",
    category: "Motors",
    image: "3_phase_motor.jpeg",
    shortDesc: "Multi-phase compact motor with smooth torque delivery and high power-to-weight ratio.",
    fullDesc: "High-RPM brushless motor structure offering high energy efficiency, negligible brush wear, and smooth velocity control.",
    suitableFor: "Aerodynamic experiments, drone propulsion mockups, high-speed spin tables",
    specs: "3-Phase winding configuration • High power density • Balanced rotor assembly"
  },
  {
    id: "motor-fan-propeller",
    name: "DC Motor with Pre-Fitted Aerodynamic Fan Propeller",
    category: "Motors",
    image: "motor with blaid.jpeg",
    shortDesc: "High-RPM DC motor fitted with a balanced 3-blade aerodynamic fan propeller.",
    fullDesc: "Plug-and-play motorized air-propulsion assembly. Generates significant airflow immediately upon applying 3V to 6V DC.",
    suitableFor: "Hovercraft prototypes, wind energy generators, mini table coolers, fume extractors",
    specs: "3V-6V DC operation • Balanced 3-blade propeller • Low vibration shaft mount"
  },
  {
    id: "motor-standard-toy",
    name: "Standard DC Project / Toy Motor (3V - 6V)",
    category: "Motors",
    image: "motor.jpeg",
    shortDesc: "Classic hobby DC motor for educational science models and rotational mechanisms.",
    fullDesc: "Ubiquitous hobbyist DC motor with dual solder eyelets and 2mm output shaft. Perfect for beginners learning basic circuit wiring, switches, and battery connections.",
    suitableFor: "School/college science exhibits, pulley drives, gearboxes, mini spinners",
    specs: "3V to 6V DC • ~5000-9000 RPM free speed • Compact lightweight metal can"
  },
  {
    id: "motor-mini-vibration",
    name: "Miniature Coreless / Vibration Motor",
    category: "Motors",
    image: "motor_1.jpeg",
    shortDesc: "Ultra-compact high-speed micro motor for haptic feedback and miniature models.",
    fullDesc: "Lightweight coreless cylindrical DC motor delivering ultra-rapid acceleration and strong vibration haptic alerts.",
    suitableFor: "Haptic feedback projects, bristlebots, micro robotics, wearable electronics",
    specs: "Low current draw • 1.5V to 3.7V range • Micro cylindrical form factor"
  },
  {
    id: "motor-high-speed-micro",
    name: "High-Speed Micro Project Motor",
    category: "Motors",
    image: "motor_high_speed.jpeg",
    shortDesc: "High-velocity miniature motor engineered for lightweight, fast-moving builds.",
    fullDesc: "Engineered for maximum RPM with minimal mass, making it suitable for compact drone rudders, miniature centrifuges, and portable tools.",
    suitableFor: "DIY mini hand drills, centrifuges, high-speed gear trains, kinetic sculptures",
    specs: "High RPM capability • 3V-6V rated • Precision balanced shaft"
  },

  // ─── LAB EQUIPMENT ───
  {
    id: "digital-multimeter",
    name: "Digital Multimeter (DMM) Test Instrument",
    category: "Lab Equipment",
    image: "Multimeter.jpeg",
    shortDesc: "Essential test instrument for voltage, current, resistance, and continuity checks.",
    fullDesc: "The single most important diagnostic tool for any electronics student. Features large LCD readout, rotary selector switch, diode test function, transistor hFE testing, and continuity buzzer.",
    suitableFor: "Troubleshooting faulty circuits, measuring battery voltages, testing solder connections",
    specs: "DC/AC Voltage to 600V • DC Current up to 10A • Resistance to 2MΩ • Audible buzzer"
  },
  {
    id: "multimeter-probes",
    name: "Heavy-Duty Multimeter Test Probe Leads Set",
    category: "Lab Equipment",
    image: "multimeter wire.jpeg",
    shortDesc: "High-flexibility insulated test probes with sharp tips and standard banana plugs.",
    fullDesc: "Pair of color-coded (red/black) test leads with ergonomic finger guards and sharp tip probes for testing fine-pitch PCB pads and breadboard sockets.",
    suitableFor: "Benchtop circuit probing, breadboard testing, lab multimeter replacement leads",
    specs: "CAT II rated • 1000V / 10A insulation • Standard 4mm shrouded banana jacks"
  },
  {
    id: "soldering-iron",
    name: "Precision Electronics Soldering Iron (25W/35W)",
    category: "Lab Equipment",
    image: "Soldering_iron.jpeg",
    shortDesc: "Ergonomic soldering iron with fast-heating tip for circuit assembly and wiring.",
    fullDesc: "Reliable mains-powered soldering iron fitted with a pointed copper-nickel chisel tip. Features heat-resistant grip handle and stable thermal inertia for consistent solder melting.",
    suitableFor: "Soldering header pins, zero PCB assembly, wire splicing, circuit repairs",
    specs: "230V AC mains • 25W/35W heating element • Long-life pointed bit • Heat insulated grip"
  },
  {
    id: "soldering-wire-spool",
    name: "High-Grade Rosin Core Solder Wire Spool",
    category: "Lab Equipment",
    image: "soldering_wire.jpeg",
    shortDesc: "Low-temperature rosin-core solder wire for clean, shiny, reliable solder joints.",
    fullDesc: "Formulated with integrated active rosin flux channels inside the wire core, preventing copper oxidation and ensuring smooth wetting across PCB pads.",
    suitableFor: "Permanent circuit assembly, joint reflow, prototype soldering",
    specs: "Rosin core flux • 0.8mm-1.0mm diameter • Clean residue • Smooth melting point"
  },
  {
    id: "helping-hand-stand",
    name: "Helping Hand Soldering Stand with Alligator Clips",
    category: "Lab Equipment",
    image: "All in one stand.jpeg",
    shortDesc: "Heavy cast-iron base fixture with adjustable crocodile clamps and iron holster.",
    fullDesc: "Dual ball-joint crocodile clips allow you to hold circuit boards, wires, and connectors rigidly in 3D space, freeing both hands for soldering and component placement.",
    suitableFor: "Holding PCBs while soldering, holding wire ends for tinning, circuit assembly",
    specs: "Heavy weighted cast-iron base • Dual 360° rotating alligator clips • Spiral iron holder"
  },
  {
    id: "hot-melt-glue-gun",
    name: "Heavy-Duty Hot Melt Glue Gun (Rapid Heat)",
    category: "Lab Equipment",
    image: "Glue GUN.jpeg",
    shortDesc: "High-temperature trigger glue gun for structural mounting, enclosure assembly, and wire strain relief.",
    fullDesc: "Rapid PTC heating element with insulated extrusion nozzle and stable wire kickstand. Invaluable for bonding sensors, motors, and batteries securely into cardboard or acrylic frames.",
    suitableFor: "Securing robot chassis parts, insulation sealing, wire strain relief",
    specs: "PTC ceramic heating • Trigger feed mechanism • Anti-drip nozzle • Standard glue sticks"
  },
  {
    id: "power-transformer-stepdown",
    name: "Step-Down Linear Power Transformer (220V to 12-0-12V)",
    category: "Lab Equipment",
    image: "TRANSFORMER.jpeg",
    shortDesc: "Center-tapped linear iron-core transformer for regulated dual-rail DC power supplies.",
    fullDesc: "Heavy laminated steel core step-down transformer converting 220V AC mains into center-tapped secondary AC voltages (12V - 0 - 12V). Essential for foundational power electronics labs.",
    suitableFor: "Linear DC power supply builds, bridge rectifiers, op-amp dual rail supplies (+12V/-12V)",
    specs: "Primary 220V AC • Secondary 12-0-12V AC (1A) • Heavy duty copper windings"
  },

  // ─── PCB & PROTOTYPING ───
  {
    id: "breadboard-half",
    name: "Half-Size Solderless Prototyping Breadboard (400 Tie-Points)",
    category: "PCB & Prototyping",
    image: "Breadboard.jpeg",
    shortDesc: "Compact 400-tie-point solderless breadboard with dual power rails.",
    fullDesc: "Standard prototyping board with phosphor-bronze spring clips inside. Allows components and jumper wires to be plugged in and removed repeatedly without soldering.",
    suitableFor: "Quick circuit validation, sensor testing, semester digital logic practicals",
    specs: "400 tie-points • Standard 2.54mm pitch • Self-adhesive backing • Interlocking tabs"
  },
  {
    id: "breadboard-full",
    name: "Full-Size Solderless Breadboard (830 Tie-Points)",
    category: "PCB & Prototyping",
    image: "breadboard_big.jpeg",
    shortDesc: "Expansive 830-tie-point breadboard with two full-length power distribution buses.",
    fullDesc: "Large breadboard featuring 630 terminal connection points in 126 five-point columns, flanked by four continuous power rails (200 points). Ideal for multi-IC designs.",
    suitableFor: "Complex microcontrollers + multiple peripheral sensors, 8-bit computer breadboards",
    specs: "830 tie-points • Double center divider for dual DIP IC rows • Clear printed row/col grid"
  },
  {
    id: "copper-clad-board",
    name: "Single-Sided Copper Clad Board (FR2/FR4) for PCB Etching",
    category: "PCB & Prototyping",
    image: "copper PCB.jpeg",
    shortDesc: "High-purity copper-clad laminate for DIY circuit toner-transfer and chemical etching.",
    fullDesc: "Rigid non-conductive substrate bonded with a uniform layer of electrolytic copper foil. Ready for laser-toner heat transfer and ferric chloride (FeCl3) acid etching.",
    suitableFor: "Custom printed circuit board manufacturing, electronics fabrication practicals",
    specs: "Single-sided 35μm copper foil • Smooth surface • High insulation resistance"
  },
  {
    id: "zero-pcb-perfboard",
    name: "General-Purpose Zero PCB (Dotted Matrix Perfboard)",
    category: "PCB & Prototyping",
    image: "PCB .jpeg",
    shortDesc: "Pre-drilled dotted copper eyelet perfboard for permanent circuit soldering.",
    fullDesc: "High-quality phenolic circuit board featuring a uniform matrix of 0.1-inch (2.54mm) spaced holes with individual tinned copper solder pads.",
    suitableFor: "Turning breadboard mockups into rugged, permanent, drop-resistant hardware devices",
    specs: "Standard 2.54mm hole spacing • Individual tinned eyelets • Flame-retardant base"
  },
  {
    id: "enamelled-copper-wire",
    name: "Enamelled Magnet Copper Winding Wire Spool",
    category: "PCB & Prototyping",
    image: "copper wire.jpeg",
    shortDesc: "High-conductivity polyurethane-insulated magnet wire for coils and inductors.",
    fullDesc: "Flexible high-purity solid copper conductor coated with a microscopic layer of tough polymer insulation, preventing short circuits between adjacent coil turns.",
    suitableFor: "Winding electromagnets, RF inductors, transformers, wireless power transfer coils",
    specs: "High-grade electrolytic copper • Enamelled insulation • Solderable by stripping"
  },

  // ─── ELECTRONICS COMPONENTS ───
  {
    id: "digital-logic-ics",
    name: "Digital Logic Gate ICs Collection (74HC Series)",
    category: "Electronics Components",
    image: "IC.jpeg",
    extraImages: [
      {
        image: "IC_numbers.jpeg",
        label: "IC Numbers Reference Map (1–33)",
        caption: "Numbered visual reference map (1 to 33) matching the exact physical integrated circuits."
      }
    ],
    availableIcs: [
        {
            "num": 1,
            "name": "7RF840",
            "type": "Power MOSFET (8A, 500V, N-Channel)"
        },
        {
            "num": 2,
            "name": "L7805CV",
            "type": "+5V Positive Voltage Regulator (1.5A)"
        },
        {
            "num": 3,
            "name": "L7812CV",
            "type": "+12V Positive Voltage Regulator (1.5A)"
        },
        {
            "num": 4,
            "name": "SN74HC702N",
            "type": "High-Speed CMOS Logic"
        },
        {
            "num": 5,
            "name": "L7813CV",
            "type": "Linear Voltage Regulator"
        },
        {
            "num": 6,
            "name": "7RF49QS",
            "type": "Power MOSFET"
        },
        {
            "num": 7,
            "name": "7RF840",
            "type": "Power MOSFET (8A, 500V, N-Channel)"
        },
        {
            "num": 8,
            "name": "SN74LS83N",
            "type": "4-Bit Binary Full Adder with Fast Carry"
        },
        {
            "num": 9,
            "name": "CD74HCT11E",
            "type": "Triple 3-Input High-Speed AND Gate"
        },
        {
            "num": 10,
            "name": "SN74HC32N",
            "type": "Quad 2-Input OR Gate"
        },
        {
            "num": 11,
            "name": "SN74HC86N",
            "type": "Quad 2-Input Exclusive-OR (XOR) Gate"
        },
        {
            "num": 12,
            "name": "SN74HC08N",
            "type": "Quad 2-Input Positive-AND Gate"
        },
        {
            "num": 13,
            "name": "HD74HC151P",
            "type": "8-Channel Data Selector / Multiplexer"
        },
        {
            "num": 14,
            "name": "SN74HC04N",
            "type": "Hex Inverter (NOT Gate)"
        },
        {
            "num": 15,
            "name": "SN74HC595H",
            "type": "8-Bit Serial-In / Parallel-Out Shift Register"
        },
        {
            "num": 16,
            "name": "SN74HC00N",
            "type": "Quad 2-Input NAND Gate"
        },
        {
            "num": 17,
            "name": "L7805CV",
            "type": "+5V Positive Voltage Regulator (1.5A)"
        },
        {
            "num": 18,
            "name": "SN74HC00N",
            "type": "Quad 2-Input NAND Gate"
        },
        {
            "num": 19,
            "name": "CD74HCT11E",
            "type": "Triple 3-Input High-Speed AND Gate"
        },
        {
            "num": 20,
            "name": "SN74LS153N",
            "type": "Dual 4-to-1 Line Data Selector / Multiplexer"
        },
        {
            "num": 21,
            "name": "CD74HCT11E",
            "type": "Triple 3-Input High-Speed AND Gate"
        },
        {
            "num": 22,
            "name": "HD74HC151P",
            "type": "8-Channel Data Selector / Multiplexer"
        },
        {
            "num": 23,
            "name": "MM74HCT32N",
            "type": "Quad 2-Input OR Gate"
        },
        {
            "num": 24,
            "name": "SN74HC32N",
            "type": "Quad 2-Input OR Gate"
        },
        {
            "num": 25,
            "name": "SN74HC86N",
            "type": "Quad 2-Input Exclusive-OR (XOR) Gate"
        },
        {
            "num": 26,
            "name": "MC14007UBCP",
            "type": "Dual Complementary Pair Plus Inverter (CMOS)"
        },
        {
            "num": 27,
            "name": "SN74LS153N",
            "type": "Dual 4-to-1 Line Data Selector / Multiplexer"
        },
        {
            "num": 28,
            "name": "L7812CV",
            "type": "+12V Positive Voltage Regulator (1.5A)"
        },
        {
            "num": 29,
            "name": "SN74HC03N",
            "type": "Quad 2-Input NAND Gate (Open-Drain)"
        },
        {
            "num": 30,
            "name": "SN74HC00N",
            "type": "Quad 2-Input NAND Gate"
        },
        {
            "num": 31,
            "name": "SN74HC00N",
            "type": "Quad 2-Input NAND Gate"
        },
        {
            "num": 32,
            "name": "MC14007UBCP",
            "type": "Dual Complementary Pair Plus Inverter (CMOS)"
        },
        {
            "num": 33,
            "name": "SN74HC00N",
            "type": "Quad 2-Input NAND Gate"
        }
    ],
    shortDesc: "33 ICs in stock (NAND, AND, OR, XOR, NOT, Adders, Multiplexers, Shift Registers, Regulators). Numbered 1 to 33.",
    fullDesc: "Complete collection of 33 discrete integrated circuits and components ready for digital electronics labs, semester breadboard practicals, and logic design projects. Every IC is matched to the numbered reference map (1 to 33) above.",
    suitableFor: "Digital logic practicals, boolean function implementations, adder/subtractor circuits, multiplexer telemetry, shift registers, power regulation",
    specs: "33 total units • DIP-14 & DIP-16 logic ICs + TO-220 regulators • 2V-6V supply range for 74HC series • Breadboard friendly"
  },
  {
    id: "power-regulator-ics",
    name: "Curated Linear ICs & Voltage Regulators (7805 / 7812)",
    category: "Electronics Components",
    image: "IC'S.jpeg",
    shortDesc: "TO-220 positive fixed voltage regulators and operational amplifiers.",
    fullDesc: "Includes industry standard L7805CV (+5V 1.5A) and L7812CV (+12V 1.5A) linear voltage regulators with thermal overload and short-circuit protection.",
    suitableFor: "Clean 5V/12V DC power supplies, sensor power conditioning, op-amp circuits",
    specs: "TO-220 package with metal tab for heatsinks • Built-in thermal shutdown • Up to 1.5A"
  },
  {
    id: "ne555-timer-ic",
    name: "NE555 Precision Monolithic Timer IC",
    category: "Electronics Components",
    image: "Timer.jpeg",
    shortDesc: "The legendary 8-pin precision timer for oscillators, pulse generators, and PWM.",
    fullDesc: "Can operate in both astable (free-running multivibrator) and monostable (one-shot pulse delay) modes. Adjustable duty cycle and timing from microseconds to hours with external RC.",
    suitableFor: "LED flashers, audio tone buzzers, PWM motor speed dimmers, clock pulse generators",
    specs: "8-pin DIP • 4.5V to 16V supply • 200mA sink/source capability • Microsecond precision"
  },
  {
    id: "resistor-assortment-pack",
    name: "Assorted Carbon & Metal Film Resistors Pack",
    category: "Electronics Components",
    image: "Registers.jpeg",
    shortDesc: "Wide spectrum of color-coded 1/4W resistors from low Ohms to Megaohms.",
    fullDesc: "Assortment of standard E12 values with 5% / 1% tolerance. Essential for current limiting LEDs, setting pull-up/pull-down voltage levels, and designing analog dividers.",
    suitableFor: "LED current limiting, op-amp gain setting, transistor base biasing, RC filters",
    specs: "1/4 Watt (0.25W) rated • Flame-retardant coating • Standard color ring coding"
  },
  {
    id: "rotary-potentiometer",
    name: "Rotary Analog Potentiometer (Variable Resistor)",
    category: "Electronics Components",
    image: "potentiometer.jpeg",
    shortDesc: "Smooth rotary 3-terminal variable resistor for analog calibration and control.",
    fullDesc: "Equipped with a knurled metal/plastic shaft and standard breadboard solder lugs. Provides a smooth, continuous variable voltage divider output proportional to shaft rotation.",
    suitableFor: "Audio volume knobs, LED dimming, sensor threshold calibration, motor speed dials",
    specs: "3-pin terminal • Linear taper • Smooth rotational feel • Breadboard friendly"
  },
  {
    id: "berg-strip-headers",
    name: "Male & Female Berg Strip Header Pins (2.54mm Pitch)",
    category: "Electronics Components",
    image: "pIN.jpeg",
    shortDesc: "Snappable 40-pin header strips for PCB connections and jumper wire sockets.",
    fullDesc: "Gold/tin plated brass contact pins in high-temperature thermoplastic insulators. Snappable to any required pin count with standard pliers.",
    suitableFor: "Custom PCB headers, Arduino shield pins, module interconnects",
    specs: "Standard 2.54mm (0.1 inch) pitch • 40 pins per strip • Gold/Tin flash plating"
  },
  {
    id: "battery-18650-li-ion",
    name: "Rechargeable 18650 3.7V High-Capacity Li-Ion Cell",
    category: "Electronics Components",
    image: "Battery.jpeg",
    shortDesc: "High-density cylindrical 3.7V rechargeable lithium-ion battery cell.",
    fullDesc: "Provides high capacity and robust continuous discharge current, making it the gold standard for mobile electronics, autonomous rovers, and portable microcontroller setups.",
    suitableFor: "Robotics power supply packs, portable IoT telemetry nodes, outdoor loggers",
    specs: "3.7V nominal (4.2V fully charged) • High mAh capacity • Low internal resistance"
  },
  {
    id: "charger-18650-dock",
    name: "18650 Single-Slot Lithium-Ion Smart Cradle Charger",
    category: "Electronics Components",
    image: "battery charger.jpeg",
    shortDesc: "Automatic CC/CV smart charging dock with multi-color LED charging indicator.",
    fullDesc: "Spring-loaded single battery cradle with constant-current/constant-voltage charging algorithm. Automatically cuts off when reaching 4.2V to prevent overcharging.",
    suitableFor: "Safely replenishing 18650 lithium cells used in robots and portable gear",
    specs: "Universal AC / USB input • Red (Charging) / Green (Full) status LED • Spring-loaded slot"
  },
  {
    id: "charger-dc-adapter",
    name: "Regulated DC Power Adapter / Wall Charger Unit",
    category: "Electronics Components",
    image: "charger.jpeg",
    shortDesc: "Mains switch-mode DC power supply adapter for benchtop hardware prototyping.",
    fullDesc: "Encased SMPS power brick delivering stable DC voltage with minimal ripple. Overcurrent and short-circuit protected.",
    suitableFor: "Powering Arduino DC barrel jacks, L298N motor drivers, and breadboard rails",
    specs: "Wide input 100-240V AC • Regulated output • Standard 5.5x2.1mm DC barrel connector"
  },
  {
    id: "charger-usb-5v",
    name: "High-Speed 5V USB Power Supply Adapter",
    category: "Electronics Components",
    image: "chager_1.jpeg",
    shortDesc: "Compact USB power adapter delivering clean 5V output for development boards.",
    fullDesc: "Miniature switch-mode USB power supply delivering stable voltage for Arduino, NodeMCU, ESP32, and Raspberry Pi Pico.",
    suitableFor: "Powering microcontrollers via USB cable, charging LiPo booster boards",
    specs: "Standard USB Type-A port • 5V regulated output • Built-in thermal surge protection"
  },
  {
    id: "leds-assorted-pack",
    name: "Assorted 5mm Diffused LEDs Pack (Red, Green, Blue, Yellow)",
    category: "Electronics Components",
    image: "LED.jpeg",
    shortDesc: "High-brightness indicator LEDs in standard 5mm diffused epoxy packages.",
    fullDesc: "Bright solid-state indicator diodes with clearly differentiated long anode (+) and short cathode (-) leads for visual status feedback in any circuit.",
    suitableFor: "Status indicators, logic state displays, light displays, optic communication",
    specs: "5mm diffused lens • 20mA nominal current • Red/Yellow ~2.0V • Green/Blue ~3.0V"
  },
  {
    id: "led-panel-cob",
    name: "High-Intensity Matrix / COB LED Light Panel",
    category: "Electronics Components",
    image: "LED pannel.jpeg",
    shortDesc: "Multi-chip LED module providing intense uniform white illumination.",
    fullDesc: "Chip-on-board (COB) planar array of micro-LEDs creating a continuous, shadow-free, intense beam of white light with minimal thermal resistance.",
    suitableFor: "Emergency lamps, robot searchlights, photography lighting, inspection lamps",
    specs: "Wide 140° beam angle • High lumen output • Aluminum heat dissipation backplate"
  },
  {
    id: "led-aux-module",
    name: "Solid-State Auxiliary LED Light Module",
    category: "Electronics Components",
    image: "light.jpeg",
    shortDesc: "Compact low-power illumination module with pre-soldered pin connectors.",
    fullDesc: "Energy-efficient compact LED light assembly designed for immediate pin-header connection into prototyping shields and robot bodies.",
    suitableFor: "Robot visual signaling, enclosure indicators, nighttime beacon lights",
    specs: "Plug-and-play headers • Low current consumption • Bright optical output"
  },
  {
    id: "buzzer-piezo",
    name: "5V Active / Passive Piezoelectric Audio Buzzer",
    category: "Electronics Components",
    image: "Buzzer.jpeg",
    shortDesc: "Sharp audible alarm transducer for alerts, notifications, and timers.",
    fullDesc: "Resonant piezo-ceramic sound generator encased in a cylindrical black housing. Delivers an audible tone when powered with 5V DC.",
    suitableFor: "Intruder security alarms, button-press feedback, timer alarms, quiz buzzers",
    specs: "5V DC nominal • ~2.3 kHz sound frequency • >85dB sound pressure output"
  },
  {
    id: "speaker-mini-dynamic",
    name: "Miniature 8-Ohm Dynamic Voice-Coil Audio Speaker",
    category: "Electronics Components",
    image: "speaker.jpeg",
    shortDesc: "Dynamic electromagnetic speaker for synthesized audio, melodies, and speech.",
    fullDesc: "Miniature moving-coil paper/mylar cone loudspeaker capable of reproducing complex analog audio waveforms, musical frequencies, and synthesized tones.",
    suitableFor: "Arduino melody players, talking clocks, intercoms, speech synthesis circuits",
    specs: "8 Ohm impedance • 0.5W - 1W power handling • Miniature paper/mylar diaphragm"
  },

  // ─── BOOKS & NOTES ───
  {
    id: "notes-cmos-vlsi",
    name: "Handwritten CMOS & VLSI Technology In-Depth Notes",
    category: "Books & Notes",
    image: "CMOS_NOTES.jpeg",
    shortDesc: "Detailed handwritten personal notes on MOSFET physics and CMOS digital layout.",
    fullDesc: "Comprehensive study notes covering MOS transistor operation, CMOS inverter voltage transfer characteristics (VTC), propagation delays, pass transistor logic, dynamic CMOS circuits, and layout stick diagrams.",
    suitableFor: "B.Tech ECE/EE semester exams, VLSI design preparation, core campus interviews",
    specs: "Clear handwriting • Complete circuit diagrams and equations • Solved derivations"
  },
  {
    id: "notes-pn-junction",
    name: "Semiconductor Physics: P-N Junction In-Depth Notes",
    category: "Books & Notes",
    image: "PN_UNCTION_NOTES.jpeg",
    shortDesc: "Rigorous study notes with energy band diagrams and depletion region equations.",
    fullDesc: "Covers semiconductor crystal physics, carrier concentration, built-in potential, forward/reverse bias charge distribution, diffusion capacitance, and diode equation derivations.",
    suitableFor: "Electronic Devices & Circuits (EDC) course, semiconductor physics, GATE preparation",
    specs: "Hand-annotated band diagrams • Step-by-step mathematical steps • Exam focused"
  },
  {
    id: "book-engineering-textbook",
    name: "Core Electronics & Electrical Engineering Reference Book",
    category: "Books & Notes",
    image: "Engineering_book.jpeg",
    shortDesc: "Standard authoritative textbook covering circuit analysis and analog fundamentals.",
    fullDesc: "Comprehensive reference textbook with theorems (Thevenin, Norton, Superposition), AC transient analysis, operational amplifiers, and frequency response curves.",
    suitableFor: "Foundational engineering study, in-depth problem solving, semester course companion",
    specs: "Complete chapter exercises • Solved numerical examples • Standard university syllabus"
  },
  {
    id: "book-bhagavad-gita",
    name: "Bhagavad Gita As It Is — Mindset & Resilience Guide",
    category: "Books & Notes",
    image: "BHAGAVAD GITA.jpeg",
    shortDesc: "Timeless philosophical guide on duty (Karma Yoga), focus, and mental clarity.",
    fullDesc: "The classic dialogue exploring duty, selfless action without obsessive anxiety over results (Karmanye Vadhikaraste), inner focus, and overcoming self-doubt in challenging times.",
    suitableFor: "Building resilience, mental clarity during tough exam/startup phases, personal ethics",
    specs: "Original Sanskrit verses • English translation & commentary by A.C. Bhaktivedanta Swami"
  },
  {
    id: "assignment-pages-pack",
    name: "University Standard Ruled Assignment & Lab Sheets Pack",
    category: "Books & Notes",
    image: "ASSIGNMENT_PAGES.jpeg",
    shortDesc: "Clean ruled sheets meeting DU standards for practical files and lab records.",
    fullDesc: "High-gsm ruled sheets with pre-printed margins and indexing lines conforming to University of Delhi format for submitting engineering experiment records and practical assignments.",
    suitableFor: "ECE/CS practical record submissions, engineering assignment filings",
    specs: "Standard A4 ruled • Clean margin lines • High-opacity paper (no bleed)"
  },

  // ─── PROJECT MATERIALS ───
  {
    id: "cello-tape-heavy-duty",
    name: "Heavy-Duty Clear Prototyping Adhesive Tape Roll",
    category: "Project Materials",
    image: "Cello_tape.jpeg",
    shortDesc: "High-tack clear adhesive tape for wire bundling, chassis mounting, and mockups.",
    fullDesc: "Durable wide adhesive tape with high tensile backing and strong adhesive bond. Essential for temporarily tacking components to chassis frames and securing wire bundles.",
    suitableFor: "Chassis prototyping, wire dressing, temporary insulation, structural mockups",
    specs: "High tensile film • Crystal clear • Aggressive tack • Residue-resistant backing"
  }
];

// Helper functions for easy consumption across pages
export { STUDENT_RESOURCES };
export default STUDENT_RESOURCES;

if (typeof window !== 'undefined') {
  window.STUDENT_RESOURCES = STUDENT_RESOURCES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STUDENT_RESOURCES };
}
