
export default function DashedLines() {
  return (
    <div className="w-full h-full relative">

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Top left */}
        <line
          x1="10" y1="20"
          x2="200" y2="150"
          stroke="#a855f7"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {/* Top right */}
        <line
          x1="400" y1="80"
          x2="200" y2="150"
          stroke="#a855f7"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {/* Bottom left */}
        {/*x1="100" y1="270"*/}
        {/*x2="200" y2="150"*/}
        <line
          x1="100" y1="320"
          
          x2="200" y2="150"
          stroke="#a855f7"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

      </svg>

    </div>
  );
}
