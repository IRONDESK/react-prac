import React from "react";

function HelloMsg ({name}) {
    if (name) {
        return <div>
            <h2>{name}</h2>
        </div>
    } else {
        return <div>
            입력된 이름이 없습니다.
        </div>
    }
}

export default HelloMsg;