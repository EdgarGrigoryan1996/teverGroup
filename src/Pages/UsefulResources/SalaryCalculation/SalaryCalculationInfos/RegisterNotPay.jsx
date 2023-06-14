import React from 'react';

function RegisterNotPay(props) {
    return (
        <p>
            <span>{new Intl.NumberFormat("am-AM").format(+props.currentSalary)}</span> դրամ աշխատավարձ գրանցելու դեպքում մաքուր կստանաք <span>{new Intl.NumberFormat("am-AM").format(+props.result)}</span> դրամ: Եկամտային հարկը կկազմի <span>{new Intl.NumberFormat("am-AM").format(+props.ekamtahark)}</span> դրամ: Զինծառայողների Ապահովագրության Հիմնադրամի դրոշմանիշային վճարը <span>{new Intl.NumberFormat("am-AM").format(+props.droshmanish)}</span> դրամ է։
        </p>
    );
}

export default RegisterNotPay;