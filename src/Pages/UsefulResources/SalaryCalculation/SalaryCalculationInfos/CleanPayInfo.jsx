import React from 'react';

function CleanPayInfo(props) {
    return (
        <p>
            <span>{new Intl.NumberFormat("am-AM").format(+props.currentSalary)}</span> դրամ աշխատավարձ ստանալու համար պետք է գրանցել <span>{new Intl.NumberFormat("am-AM").format(+props.result)}</span> դրամ: Եկամտային հարկը կկազմի <span>{new Intl.NumberFormat("am-AM").format(+props.ekamtahark)}</span> դրամ: Սոցիալական վճարը` <span>{new Intl.NumberFormat("am-AM").format(+props.socialPay)}</span> դրամ: Պետության կողմից Ձեր կուտակային հաշվին հավելյալ կփոխանցվի <span>{new Intl.NumberFormat("am-AM").format(+props.socialPay)}</span> դրամ: Կուտակային հաշվի ամսական համալրումը կկազմի <span>{new Intl.NumberFormat("am-AM").format(+props.socialPay * 2)}</span> դրամ: Զինծառայողների Ապահովագրության Հիմնադրամի դրոշմանիշային վճարը <span>{new Intl.NumberFormat("am-AM").format(+props.droshmanish)}</span> դրամ է։
        </p>
    );
}

export default CleanPayInfo;