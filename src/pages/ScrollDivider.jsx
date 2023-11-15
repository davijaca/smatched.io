import React, {forwardRef} from "react";

const ScrollDivider = ({text}, ref) => {
    return (
    <>
        <div ref={ref}>{text} </div>
    </>
    )
}

export default forwardRef(ScrollDivider);