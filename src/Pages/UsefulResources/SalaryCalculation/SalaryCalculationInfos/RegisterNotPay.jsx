import React from 'react';

function RegisterNotPay(props) {
    return (
        <p>
            <span>{+props.currentSalary}</span> դրամ աշխատավարձ գրանցելու դեպքում մաքուր կստանաք <span>{props.result}</span> դրամ: Եկամտային հարկը կկազմի <span>{props.ekamtahark}</span> դրամ: Զինծառայողների Ապահովագրության Հիմնադրամի դրոշմանիշային վճարը <span>{props.droshmanish}</span> դրամ է։
        </p>
    );
}

export default RegisterNotPay;