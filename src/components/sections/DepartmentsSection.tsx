import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import image1 from '@/assets/download1.jpg'; // Used this image for all cards

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

  return (
    <section id="departments" className="py-16 bg-background">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Driving Innovation Across Disciplines</h2>
      <div className="overflow-x-auto px-4">
        <div className=" p-10 flex gap-6 pb-4 w-full min-w-[400px]">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className=" p-5 min-w-[260px] max-w-xs h-[340px] bg-card rounded-2xl shadow-md cursor-pointer border border-border hover:scale-105 active:scale-110 transition-transform duration-200 flex flex-col"
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
        <div className=" p-5 fixed inset-0 z-50 flex items-center justify-center bg-black/60">
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
              className="w-full h-58 p-5  object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-bold text-accent mb-2">{selectedDept.name}</h3>
            <p className="text-base text-foreground">{selectedDept.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DepartmentsSection;
