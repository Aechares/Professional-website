export interface ProjectImage {
	src: string;
	alt: string;
	caption?: string;
}

export interface ProjectLink {
	label: string;
	url: string;
}

export interface ProjectVideo {
	title: string;
	youtubeId: string;
}

export interface Project {
	slug: string;
	title: string;
	subtitle: string;
	summary: string;
	year: string;
	tags: string[];
	highlights: string[];
	images: ProjectImage[];
	link?: ProjectLink;
	video?: ProjectVideo;
}

export const projects: Project[] = [
	{
		slug: 'precision-resupply',
		title: 'EIGSS: Precision Resupply',
		subtitle: 'DART — Denied Area Resupply Tool',
		summary:
			'Designed and tested a high-speed, airbag-cushioned resupply vehicle for GPS-denied environments, reducing payload impact deceleration by 85%.',
		year: '2026',
		tags: ['Aerospace', 'Impact Dynamics', 'Testing'],
		highlights: [
			'Built a physics trajectory model (heating, atmosphere, lift/drag, force balance) to size the vehicle for Mach 2 entry and long standoff range',
			'Derived a coupled ODE model (Navier-Stokes mass flow, energy conservation, 2nd law kinematics, ideal gas law) for airbag impact attenuation',
			'Built and drop-tested a physical airbag rig, cutting peak deceleration from 72G to 12G',
			'Validated the simulation against real drop-test data to within 43%',
		],
		images: [
			{ src: '/projects/precision-resupply/01-dart-cutaway.jpg', alt: 'DART vehicle cutaway diagram', caption: 'Cutaway of the DART vehicle showing internal payload bays' },
			{ src: '/projects/precision-resupply/02-drone-tracking-test.jpg', alt: 'Drone tracking software during a field test', caption: 'Vision tracking during an outdoor drop test' },
			{ src: '/projects/precision-resupply/03-airbag-hang-test.jpg', alt: 'Airbag payload rig hanging in a net', caption: 'Airbag impact-attenuation payload rigged for drop testing' },
			{ src: '/projects/precision-resupply/04-range-sensitivity-map.jpg', alt: 'Range sensitivity map', caption: 'Range sensitivity to starting altitude and velocity (cL/cD = 10)' },
			{ src: '/projects/precision-resupply/05-requirements-sensitivity.jpg', alt: 'Requirements sensitivity map with platform icons', caption: 'Mapping platform options (rocket, aircraft, satellite) onto the range sensitivity map' },
			{ src: '/projects/precision-resupply/06-deceleration-bar-chart.jpg', alt: 'Bar chart of peak deceleration by airbag configuration', caption: 'Peak deceleration reduced from 72G to 12G with the airbag' },
			{ src: '/projects/precision-resupply/07-sim-vs-real-data.jpg', alt: 'Simulation vs. real drop-test data chart', caption: 'Simulation tracked real drop-test data within 43%' },
		],
	},
	{
		slug: 'precision-product-design',
		title: '2.77: Precision Product Design',
		subtitle: 'Fold-Out Shipping Container — Fall 2025',
		summary:
			"Designed a self-folding shipping container using a 4-bar linkage mechanism, sized its actuators, and validated the concept with a quarter-scale prototype.",
		year: '2025',
		tags: ['Precision Design', 'Mechanisms', 'CAD'],
		highlights: [
			'Defined functional requirements for a container that folds/unfolds in under 10 minutes while surviving shipping loads and weather',
			'Modeled 4-bar linkage kinematics and loads to compare elevated vs. base-mount, overlap vs. non-overlap actuator layouts',
			'Selected and sized actuators after comparing lifetime, weight, and environmental sealing across hydraulic, electro-hydraulic, and electro-mechanical options',
			'Built and tested a quarter-scale working prototype demonstrating the fold/unfold sequence',
		],
		images: [
			{ src: '/projects/precision-product-design/01-overview-render.jpg', alt: 'CAD overview of the folding container', caption: "CAD overview of the container's 4-bar linkage, actuators, and door hinge/seal" },
			{ src: '/projects/precision-product-design/02-functional-requirements.jpg', alt: 'Functional requirements table', caption: 'Functional requirements balancing transit, deployment, and budget constraints' },
			{ src: '/projects/precision-product-design/03-mechanism-kinematics.jpg', alt: 'Hand calculations for mechanism loads', caption: 'Hand calculations for actuator torque and folding loads' },
			{ src: '/projects/precision-product-design/04-linkage-detail.jpg', alt: 'Linear actuator and linkage detail', caption: 'Linear actuator and 4-bar linkage detail' },
			{ src: '/projects/precision-product-design/05-hinge-detail.jpg', alt: 'Door hinge and seal detail', caption: 'Door hinge and seal detail' },
			{ src: '/projects/precision-product-design/06-structural-loop-sketch.jpg', alt: 'Structural load path sketch', caption: 'High-level structural load path sketch' },
			{ src: '/projects/precision-product-design/07-actuator-force-comparison.jpg', alt: 'Actuator force comparison chart', caption: 'Actuator force comparison across linkage configurations' },
			{ src: '/projects/precision-product-design/08-folding-open.jpg', alt: 'Quarter-scale prototype in open state', caption: 'Quarter-scale prototype, open state' },
			{ src: '/projects/precision-product-design/09-folding-closed.jpg', alt: 'Quarter-scale prototype mid-fold', caption: 'Quarter-scale prototype, mid-fold' },
		],
	},
	{
		slug: 'undergraduate-research',
		title: 'Undergraduate Research',
		subtitle: 'Syringe-Pump 3D Printer for Aluminum-Water Reaction Structures',
		summary:
			'Designed and built a custom syringe-pump 3D printer to manufacture water-soluble polymer structures loaded with oxide-free aluminum nanoparticles for hydrogen-generation research.',
		year: '2024–2025',
		tags: ['3D Printing', 'CAD', 'Research'],
		highlights: [
			'Researched tuning aluminum-water reactions to generate hydrogen on demand',
			'Designed a novel printer architecture with a moving X/Y bed to minimize extruder motion, plus a syringe-pump extruder for viscous feedstock',
			'Combined existing 3D-print architectures with custom mechanisms, from sketch to CAD to a working printer',
		],
		link: { label: 'Read the thesis', url: 'https://hdl.handle.net/1721.1/162451' },
		images: [
			{ src: '/projects/undergraduate-research/01-printer-photo.jpg', alt: 'Finished syringe-pump 3D printer', caption: 'Completed syringe-pump 3D printer' },
			{ src: '/projects/undergraduate-research/02-exploded-sketch.jpg', alt: 'Hand-drawn exploded sketch of the printer', caption: 'Early design sketches' },
			{ src: '/projects/undergraduate-research/03-labeled-cad.jpg', alt: 'Labeled CAD model of the printer', caption: 'Labeled CAD showing the X/Y bed, Z-axis, and syringe pump' },
			{ src: '/projects/undergraduate-research/04-cad-render.jpg', alt: 'CAD render of the printer frame', caption: 'Full CAD render of the printer frame' },
			{ src: '/projects/undergraduate-research/05-printer-side-view.jpg', alt: 'Side view of the assembled printer', caption: 'Assembled printer, side view' },
		],
	},
	{
		slug: 'elements-of-mechanical-design',
		title: '2.72: Elements of Mechanical Design',
		subtitle: '"Lathe Class" — Precision Mini-Lathe',
		summary:
			'Contributed thermal modeling, testing, and housing manufacturing to a team project designing, modeling, and manufacturing a precision lathe accurate to 0.002".',
		year: '2025',
		tags: ['Precision Design', 'Thermal Modeling', 'Manufacturing'],
		highlights: [
			'Personally responsible for the thermal model and testing, plus housing manufacturing',
			'Built a Timken bearing power-loss model feeding a thermal resistance network to predict component temperatures, expansion, and preload loss',
			'Measured spindle and housing temperatures and cross-checked them against the thermal model',
			'Measured system stiffness with dial indicators and force gauges to validate FEA predictions',
			'Every functional requirement — repeatability, accuracy, thermal sensitivity, load capacity, stiffness — was met',
		],
		images: [
			{ src: '/projects/elements-of-mechanical-design/01-headstock-detail.jpg', alt: 'Machined headstock housing held in hand', caption: 'Machined headstock housing' },
			{ src: '/projects/elements-of-mechanical-design/02-lathe-full-assembly.jpg', alt: 'Full lathe assembly on the bench', caption: 'Completed lathe assembly' },
			{ src: '/projects/elements-of-mechanical-design/03-functional-requirements-table.jpg', alt: 'Functional requirements table with measured results', caption: 'Functional requirements: modeled vs. measured results, all met' },
			{ src: '/projects/elements-of-mechanical-design/04-thermal-model-sketch.jpg', alt: 'Hand-drawn thermal resistance network sketch', caption: 'Thermal resistance network derivation' },
			{ src: '/projects/elements-of-mechanical-design/05-lathe-on-mill.jpg', alt: 'Lathe spindle mounted for thermal testing', caption: 'Spindle setup for thermal testing' },
			{ src: '/projects/elements-of-mechanical-design/06-thermal-camera-readout.jpg', alt: 'Thermal camera readout of the spindle', caption: 'Thermal camera readout during testing' },
			{ src: '/projects/elements-of-mechanical-design/07-stiffness-measurement-setup.jpg', alt: 'Dial indicator and force gauge stiffness measurement setup', caption: 'Stiffness measurement with dial indicator and force gauge' },
			{ src: '/projects/elements-of-mechanical-design/08-fea-stress-result.jpg', alt: 'FEA stress result on the headstock', caption: 'FEA stress results used to validate stiffness targets' },
			{ src: '/projects/elements-of-mechanical-design/09-machine-shop-notes.jpg', alt: 'Handwritten machine shop tolerance notes', caption: 'Machine shop manufacturing tolerance notes' },
			{ src: '/projects/elements-of-mechanical-design/10-assembly-cad-render.jpg', alt: 'CAD render of the carriage assembly', caption: 'Carriage assembly CAD render' },
		],
	},
	{
		slug: 'pratt-miller-motorsports',
		title: 'Pratt Miller Motorsports Internship',
		subtitle: 'Motorsports Design Intern — Summer 2024, Brooklyn, MI',
		summary:
			"Designed endurance race car components for Corvette Racing's IMSA GTD/GTD Pro program, resolving a suspension assembly interference issue from analysis through an accepted design change.",
		year: '2024',
		tags: ['Motorsports', 'GD&T', 'FEA'],
		highlights: [
			'Diagnosed an anti-roll bar rocker/mount interference issue via tolerance stackup analysis',
			'Proposed tolerance changes were rejected; a proposed design change was accepted',
			'Used the company bolt calculator, Ansys FEA, a custom press-fit calculator, and GD&T to validate the fix under max dynamic/static loads, thermal expansion, and press-fit stresses',
		],
		images: [
			{ src: '/projects/pratt-miller-motorsports/01-corvette-race-car.jpg', alt: 'Corvette Racing IMSA GTD car', caption: 'Corvette Racing / Pratt Miller Motorsports IMSA GTD entry' },
			{ src: '/projects/pratt-miller-motorsports/02-rocker-bushing-diagram.jpg', alt: 'Rocker, bushing, and bearing assembly diagram', caption: 'Anti-roll bar rocker, bushing, and bearing assembly under analysis' },
		],
	},
	{
		slug: 'mit-motorsports-fsae',
		title: 'MIT Motorsports / FSAE',
		subtitle: 'Mechanical Lead, MY24',
		summary:
			"Led a 40+ student mechanical team through a full year design-build cycle, fielding MIT's first car to compete in every event since 2019.",
		year: '2023–2024',
		tags: ['Leadership', 'Vehicle Design', 'Manufacturing'],
		video: { title: 'MY24 Hype Video, by Keiji Imai', youtubeId: 'xGB0z81MeCg' },
		highlights: [
			'Mechanical lead for Model Year 24: 40+ mechanical students plus electrical, software, and aero teams',
			'Owned major vehicle-level decisions: center of gravity, battery capacity/cooling, rear powertrain packaging',
			"Car earned the Scrutineer's Award at Formula Hybrid, with 400+ km of testing and 0-75ft in 4.6s",
			'Machined wheel centers to a 0.001" bore tolerance across a 3-operation, small-batch production run',
			"Designed and anodized custom electrical enclosures for the car's high- and low-voltage electronics",
		],
		images: [
			{ src: '/projects/mit-motorsports-fsae/01-team-photo.jpg', alt: 'MIT Motorsports team photo', caption: 'MIT Motorsports MY24 team' },
			{ src: '/projects/mit-motorsports-fsae/02-car-action-shot.jpg', alt: 'FSAE car on track', caption: 'MY24 car on track' },
			{ src: '/projects/mit-motorsports-fsae/03-chassis-cad.jpg', alt: 'CAD render of the chassis and suspension', caption: 'Chassis and suspension CAD, top view' },
			{ src: '/projects/mit-motorsports-fsae/04-wet-track-action.jpg', alt: 'Car testing in wet conditions', caption: 'Wet-weather testing' },
			{ src: '/projects/mit-motorsports-fsae/05-anodized-parts.jpg', alt: 'Anodized aluminum chassis parts', caption: 'Anodized custom aluminum parts' },
			{ src: '/projects/mit-motorsports-fsae/06-raw-parts.jpg', alt: 'Raw machined aluminum parts before anodizing', caption: 'Same parts prior to anodizing' },
			{ src: '/projects/mit-motorsports-fsae/07-full-car-render.jpg', alt: 'Full CAD render of the car', caption: 'Full vehicle CAD render' },
			{ src: '/projects/mit-motorsports-fsae/08-wheel-center-milling.jpg', alt: 'Wheel center being milled', caption: 'Wheel center in-process on the mill' },
			{ src: '/projects/mit-motorsports-fsae/09-wheel-center-stock.jpg', alt: 'Wheel center stock and finished parts', caption: 'Raw stock next to finished wheel centers' },
			{ src: '/projects/mit-motorsports-fsae/10-electrical-enclosure.jpg', alt: 'Custom triangular electrical enclosure', caption: 'Custom electrical enclosure design' },
		],
	},
	{
		slug: 'measurement-and-instrumentation',
		title: '2.671 Measurement and Instrumentation',
		subtitle: 'Effect of Material on Electromagnetic Shielding',
		summary:
			'Designed and ran a controlled experiment measuring how enclosure materials shield FSAE electronics from motor EMI, finding aluminum tube shielding cut interference by 92%.',
		year: '2024',
		tags: ['Experimental Design', 'Statistics', 'EMI'],
		highlights: [
			'Communication-intensive class covering experimental design, statistics, and data acquisition',
			'Simulated motor EMI with a coiled-wire antenna driven by an electric drill',
			'Compared aluminum tape, foil, and tube shielding against an unshielded control',
			'Aluminum foil and tube produced statistically significant shielding improvements (p < 0.001); tube reduced interference by 91.9%',
		],
		images: [
			{ src: '/projects/measurement-and-instrumentation/01-research-poster.jpg', alt: 'Research poster: Effect of Material on Electromagnetic Shielding', caption: 'Full research poster' },
		],
	},
	{
		slug: 'design-and-manufacturing-2',
		title: '2.008 Design and Manufacturing II',
		subtitle: 'Injection-Molded & Thermoformed Yoyos',
		summary:
			'Manufactured 100 injection-molded and thermoformed yoyos, learning mass-manufacturing process and quality-control design.',
		year: '2023',
		tags: ['Injection Molding', 'DFM', 'Manufacturing'],
		highlights: [
			'Designed and machined an injection mold, then ran a 100-unit production batch',
			'Learned design-for-manufacturing principles for high-volume processes and quality control',
		],
		images: [
			{ src: '/projects/design-and-manufacturing-2/01-injection-mold.jpg', alt: 'Machined injection mold', caption: 'Machined aluminum injection mold' },
			{ src: '/projects/design-and-manufacturing-2/02-thermoformed-pucks.jpg', alt: 'Row of thermoformed plastic pucks', caption: 'Thermoformed shell blanks' },
			{ src: '/projects/design-and-manufacturing-2/03-yoyo-grid.jpg', alt: 'Grid of 100 finished yoyos', caption: 'Full production run of 100 yoyos' },
			{ src: '/projects/design-and-manufacturing-2/04-finished-yoyo-pair.jpg', alt: 'Two finished yoyos', caption: 'Finished yoyos' },
		],
	},
	{
		slug: 'design-and-manufacturing-1',
		title: '2.007 Design and Manufacturing I',
		subtitle: 'Competition Robot',
		summary:
			"Designed, calculated, and manufactured a competition robot's drivetrain, selecting motor count and gear ratio from torque-speed analysis.",
		year: '2023',
		tags: ['Drivetrain Design', 'Manufacturing'],
		highlights: [
			'Graphed torque-speed curves across motor counts and gear ratios to select a 1:2 gear ratio for max power and torque',
			'Prototyped the gear train in cardboard before machining the final aluminum drivetrain',
		],
		images: [
			{ src: '/projects/design-and-manufacturing-1/01-gearbox-drawing.jpg', alt: 'Gearbox technical drawing', caption: 'Gearbox layout drawing' },
			{ src: '/projects/design-and-manufacturing-1/02-cardboard-prototype.jpg', alt: 'Cardboard gear train prototype', caption: 'Cardboard prototype of the gear train' },
			{ src: '/projects/design-and-manufacturing-1/03-vehicle-cad-render.jpg', alt: 'CAD render of the competition robot', caption: 'Full vehicle CAD render' },
			{ src: '/projects/design-and-manufacturing-1/04-final-robot.jpg', alt: 'Final machined robot drivetrain', caption: 'Final machined drivetrain' },
			{ src: '/projects/design-and-manufacturing-1/05-final-robot-desk.jpg', alt: 'Final robot on the workbench', caption: 'Finished robot' },
		],
	},
	{
		slug: 'makemit-2023',
		title: 'MakeMIT 2023',
		subtitle: 'Ergonomic Wheelchair — 24-Hour Hackathon',
		summary:
			'Built an ergonomic wheelchair attachment in 24 hours, winning the Formlabs Award for most creative 3D print.',
		year: '2023',
		tags: ['Hackathon', '3D Printing'],
		highlights: [
			'Designed ergonomic handholds 3D-modeled off human fingers',
			'Won the Formlabs Award for most creative 3D print at the hackathon',
		],
		images: [
			{ src: '/projects/makemit-2023/01-team-photo.jpg', alt: 'Team photo with the wheelchair prototype', caption: 'Team with the finished prototype' },
			{ src: '/projects/makemit-2023/02-wheelchair-mechanism.jpg', alt: 'Close-up of the wheelchair handhold mechanism', caption: 'Ergonomic handhold mechanism, close-up' },
		],
	},
	{
		slug: 'mithbusters',
		title: 'MITh-busters',
		subtitle: 'Can a Person Punch Down a Tree?',
		summary:
			'Built a dual-piston pneumatic fist to test whether a punch could fell a tree. Conclusion: busted — wood is too dense.',
		year: '2022',
		tags: ['Pneumatics', 'For Fun'],
		highlights: [
			'Designed a dual-piston pneumatic fist with an aluminum striking surface, powered by externally-supplied solenoids',
			'Conclusion: busted — full trees are too dense to punch down',
		],
		images: [
			{ src: '/projects/mithbusters/01-pneumatic-fist-test.jpg', alt: 'Pneumatic fist rig being tested', caption: 'Pneumatic fist rig under test' },
		],
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
