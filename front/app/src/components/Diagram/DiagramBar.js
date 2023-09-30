import "./DiagramBar.css"

const DiagramBar = (props) => {
    //use this value in css style
    let barFillHeight = '0%';
    //logic
    if(props.maxValue > 0) {
        barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
        console.log(barFillHeight);
    }

    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                <div className="diagram-bar__fill" style={{
                    height: barFillHeight
                }}></div>
            </div>
            <div className="diagram-bar__label">{props.label}</div>
        </div>
    )
}

export default DiagramBar;