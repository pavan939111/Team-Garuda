import { useState, useRef, useEffect } from 'react';
import image1 from '@/assets/download1.jpg';
import { Layers } from 'lucide-react';

const departments = [
	{
		id: 1,
		name: 'Mechanical',
		summary: 'Design, analysis, and fabrication of the go-kart chassis and components.',
		details: 'The Mechanical department is responsible for the structural integrity, weight optimization, and overall mechanical performance of the go-kart. They use CAD tools, simulation, and hands-on fabrication to bring the design to life.',
	},
	{
		id: 2,
		name: 'Electrical',
		summary: 'Powertrain, wiring, and battery management for efficient performance.',
		details: 'The Electrical department handles the design and integration of the electric powertrain, battery management systems, and all wiring. Their focus is on safety, efficiency, and reliability.',
	},
	{
		id: 3,
		name: 'Electronics & Controls',
		summary: 'Smart controls, sensors, and telemetry for advanced features.',
		details: 'This team develops embedded systems, sensor integration, and telemetry solutions for real-time data and smart features, ensuring the go-kart is both innovative and competitive.',
	},
	{
		id: 4,
		name: 'Management',
		summary: 'Project planning, finance, and team coordination.',
		details: 'The Management department oversees project timelines, budgeting, sponsorships, and team coordination, ensuring smooth operations and successful project delivery.',
	},
];

const DepartmentsSection = () => {
	const [selectedDept, setSelectedDept] = useState(null);
	const [scrollDirection, setScrollDirection] = useState<'right' | 'left'>('right');
	const [isHovered, setIsHovered] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	// Auto-scroll effect
	useEffect(() => {
		if (!scrollRef.current || isHovered) return;

		const container = scrollRef.current;
		let animationFrame: number;

		const scrollStep = () => {
			if (!container) return;
			const maxScroll = container.scrollWidth - container.clientWidth;

			if (scrollDirection === 'right') {
				if (container.scrollLeft < maxScroll) {
					container.scrollLeft += 1.5;
				} else {
					setScrollDirection('left');
				}
			} else {
				if (container.scrollLeft > 0) {
					container.scrollLeft -= 1.5;
				} else {
					setScrollDirection('right');
				}
			}
			animationFrame = requestAnimationFrame(scrollStep);
		};

		animationFrame = requestAnimationFrame(scrollStep);

		return () => cancelAnimationFrame(animationFrame);
	}, [scrollDirection, isHovered]);

	return (
		<section id="departments" className="py-16 bg-background">
			{/* Responsive Section Header */}
			<div className="text-center mb-8">
				<div className="flex items-center justify-center gap-x-2 mb-4">
					<Layers className="h-7 w-7 md:h-12 md:w-12 text-accent" />
					<h2
						className="font-bold font-montserrat text-lg md:text-4xl lg:text-5xl bg-gradient-to-b from-[#FFD700] to-white bg-clip-text text-transparent whitespace-nowrap"
						style={{
							background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						Innovating Across Departments
					</h2>
				</div>
				<p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
					Our departments collaborate to push the boundaries of engineering and technology.
				</p>
			</div>
			<div className="overflow-x-auto px-4">
				<div
					ref={scrollRef}
					className="p-10 flex gap-6 pb-4 w-full min-w-[400px] transition-all duration-300"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{departments.map((dept) => (
						<div
							key={dept.id}
							className="p-5 min-w-[260px] max-w-xs h-[340px] bg-card rounded-2xl shadow-md cursor-pointer border border-border hover:scale-105 active:scale-110 transition-transform duration-200 flex flex-col"
							onClick={() => setSelectedDept(dept)}
						>
							<img
								src={image1}
								alt={dept.name}
								className="w-full h-36 object-cover rounded-t-2xl"
							/>
							<div className="p-4 flex-grow flex flex-col justify-between">
								<h3 className="text-lg font-semibold text-accent">{dept.name}</h3>
								<p className="text-sm text-muted-foreground mt-2">{dept.summary}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Modal for department details */}
			{selectedDept && (
				<div className="p-5 fixed inset-0 z-50 flex items-center justify-center bg-black/60">
					<div className="bg-card rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
						<button
							className="absolute top-3 right-4 text-2xl text-muted-foreground hover:text-primary"
							onClick={() => setSelectedDept(null)}
						>
							&times;
						</button>
						<img
							src={image1}
							alt={selectedDept.name}
							className="w-full max-w-[220px] mx-auto h-40 md:h-32 object-cover rounded-2xl mb-4"
						/>
						<h3 className="text-2xl font-bold text-accent mb-2 text-center">{selectedDept.name}</h3>
						<p className="text-base text-foreground text-center">{selectedDept.details}</p>
					</div>
				</div>
			)}
		</section>
	);
};

export default DepartmentsSection;
