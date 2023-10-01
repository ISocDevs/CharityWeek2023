"use client";

const Event = ({ title, icon, onMouseEnter, onMouseLeave }) => {

    const handleMouseEnter = () => {
        setTimeout(onMouseEnter, 0)
    }

    const handleMouseLeave = () => {
        setTimeout(onMouseLeave, 0)
    }
    return (<div className="flex items-center">
        <div className="ml-40 w-3/5 relative event">
            <div className="py-5 gap"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="text-orange-500 eventIcon">
                    {icon}
                </div>
                <div className={`py-5 bg-amber-500/50 border-black border-2 eventTab pl-5 rounded-lg overflow-visible`}
                >
                    <h1 className="font-bold">{title}</h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Event