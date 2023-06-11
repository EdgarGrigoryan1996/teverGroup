import React from 'react';
import s from "./HeartbeatMiniSection.module.css"
function HeartbeatMiniSection() {
    return (
        <div className={s.heartbeatWrapper}>
            <div className={s.background}>
                <h3 className={s.businessMessage}>Consuloan is the heart of our business, and our consultants are <span>the heartbeat.</span></h3>
            </div>
        </div>
    );
}

export default HeartbeatMiniSection;