import React from 'react';

function CleanNotPayInfo(props) {
    return (
        <p>
            <span>{new Intl.NumberFormat("am-AM").format(+props.currentSalary)}</span> դրամ մաքուր աշխատավարձ ստանալու համար պետք է գրանցել <span>{new Intl.NumberFormat("am-AM").format(+props.result)}</span> դրամ: Եկամտային հարկը կկազմի <span>{new Intl.NumberFormat("am-AM").format(+props.ekamtahark)}</span> դրամ: Զինծառայողների Ապահովագրության Հիմնադրամի դրոշմանիշային վճարը <span>{new Intl.NumberFormat("am-AM").format(+props.droshmanish)}</span> դրամ է։
        </p>
    );
}

export default CleanNotPayInfo;