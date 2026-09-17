interface WaveDividerProps {
  fillColor?: string;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  flip?: boolean;
  className?: string;
}

const wavePaths: Record<number, string> = {
  // Variant 1: Wide single swell into low right dipping wave
  1: "M0,40 C240,95 560,-15 860,75 C1030,125 1140,55 1200,30 L1200,120 L0,120 Z",
  // Variant 2: Double crest wave with central dip
  2: "M0,70 C150,20 350,110 600,40 C850,-20 1050,90 1200,50 L1200,120 L0,120 Z",
  // Variant 3: Asymmetric dramatic drop on left rising sharply on right
  3: "M0,20 C300,105 500,20 750,95 C980,140 1120,40 1200,15 L1200,120 L0,120 Z",
  // Variant 4: Triple rhythmic gentle ripples
  4: "M0,60 C200,100 400,20 600,80 C800,110 1000,10 1200,60 L1200,120 L0,120 Z",
  // Variant 5: Smooth sweeping majestic royal arch curve
  5: "M0,90 C350,0 850,0 1200,90 L1200,120 L0,120 Z",
  // Variant 6: Deep elegant S-curve sweeping from left top to right low
  6: "M0,15 C450,130 750,-30 1200,80 L1200,120 L0,120 Z",
  // Variant 7: Broad central valley with elevated left/right shoulders
  7: "M0,80 C200,10 400,120 700,30 C950,-10 1100,80 1200,20 L1200,120 L0,120 Z",
  // Variant 8: High left crest cascading into low right ripple
  8: "M0,35 C180,120 480,-10 800,85 C1000,115 1120,20 1200,70 L1200,120 L0,120 Z",
  // Variant 9: Soft rolling dune wave with dynamic curve heights
  9: "M0,50 C280,10 520,115 780,25 C980,-20 1110,65 1200,40 L1200,120 L0,120 Z",
  // Variant 10: Deep ocean swell curving dynamically across section width
  10: "M0,100 C300,10 600,110 900,20 C1050,-10 1150,70 1200,35 L1200,120 L0,120 Z",
  // Variant 11: Multi-tier subtle wave with varied control points
  11: "M0,25 C160,85 380,5 620,95 C880,130 1060,15 1200,60 L1200,120 L0,120 Z",
  // Variant 12: Dynamic crescendo wave leading into the footer
  12: "M0,75 C220,15 480,105 720,20 C960,-10 1100,90 1200,10 L1200,120 L0,120 Z",
};

export default function WaveDivider({
  fillColor = "#F5F5DC",
  variant = 1,
  flip = false,
  className = "",
}: WaveDividerProps) {
  const selectedPath = wavePaths[variant] || wavePaths[1];

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none transform ${
        flip ? "scale-x-[-1]" : ""
      } ${className}`}
    >
      <svg
        className="relative block w-full h-12 sm:h-16 md:h-24 lg:h-28"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d={selectedPath} fill={fillColor} />
      </svg>
    </div>
  );
}
