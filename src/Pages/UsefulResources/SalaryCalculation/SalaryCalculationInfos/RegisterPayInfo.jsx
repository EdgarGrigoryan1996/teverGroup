import React from 'react';

function RegisterPayInfo(props) {
    return (
        <p>
            <span>{+props.currentSalary}</span> դրամ աշխատավարձ գրանցելու դեպքում մաքուր կստանաք <span>{props.result}</span> դրամ: Եկամտային հարկը կկազմի <span>{props.ekamtahark}</span> դրամ: Սոցիալական վճարը` <span>{props.socialPay}</span> դրամ: Պետության կողմից Ձեր կուտակային հաշվին հավելյալ կփոխանցվի <span>{props.socialPay}</span> դրամ: Կուտակային հաշվի ամսական համալրումը կկազմի <span>{props.socialPay * 2}</span> դրամ: Զինծառայողների Ապահովագրության Հիմնադրամի դրոշմանիշային վճարը <span>{props.droshmanish}</span> դրամ է։
        </p>
    );
}

export default RegisterPayInfo;