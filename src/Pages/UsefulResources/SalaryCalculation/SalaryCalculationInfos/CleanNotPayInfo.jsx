import React from 'react';

function CleanNotPayInfo(props) {
    return (
        <p>
            <span>{+props.currentSalary}</span> դրամ մաքուր աշխատավարձ ստանալու համար պետք է գրանցել <span>{props.result}</span> դրամ: Եկամտային հարկը կկազմի <span>{props.ekamtahark}</span> դրամ: Զինծառայողների Ապահովագրության Հիմնադրամի դրոշմանիշային վճարը <span>{props.droshmanish}</span> դրամ է։
        </p>
    );
}

export default CleanNotPayInfo;