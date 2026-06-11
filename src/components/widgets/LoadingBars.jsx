import "./LoadingBars.scss"

function LoadingBars({ hidden = false, variant = "default" }) {
    const hiddenClass = hidden ? "loading-bars-hidden" : ""
    
    return (
        <div className={`loading-bars-wrapper ${hiddenClass} loading-bars-variant-${variant}`}>
            <div className="loading-bars-container">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
            </div>
        </div>
    )
}

LoadingBars.ColorVariants = {
    LOADER: "loader",
    DEFAULT: "default"
}

export default LoadingBars
