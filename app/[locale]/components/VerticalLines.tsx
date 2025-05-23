export default function VerticalLines() {
  return (
    <div className="layout-grid absolute top-0 left-0 w-full h-full pointer-events-none px-4 lg:px-0">
        {[...Array(7)].map((_, index) => (
        <div key={index} className={`-z-10 pointer-events-none relative w-full before:w-full before:absolute ${index > 2 ? "hidden lg:block" : "lg:block"} ${index === 0 ? "before:border-l lg:before:border-l-0" : "before:border-l"} z-[1] before:border-black before:dark:border-white before:dark:border-opacity-15 before:border-opacity-15 before:h-full ${index === 6 ? "before:border-r" : ""} ${index === 2 ? "before:border-r lg:before:border-r-0" : ""}`} ></div>
        ))}
    </div>
  )
}
