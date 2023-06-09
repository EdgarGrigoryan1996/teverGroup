import * as emailjs from "@emailjs/browser";

export const sendEmailData = (companyName,email,phone,selectedTax,selectedActivity,staffNumber,monthTurnover,montAverage,assetsNumber) => {
    emailjs.send("service_4q2eefe", "template_hgrj91a", {
        companyName:companyName.text,
        email:email.text,
        phone:phone.text,
        selectedTax:selectedTax.value,
        selectedActivity:selectedActivity.value,
        staffNumber:staffNumber.text,
        monthTurnover:monthTurnover.text,
        montAverage:montAverage.text,
        assetsNumber:assetsNumber.text
    }, "nYElHgybvs9dD1R_-");
}

export const sendExcelEmailData = (companyName,email,phone, students,course) => {
    emailjs.send("service_4q2eefe", "template_3bsp0qf", {
        companyName:companyName.text,
        email:email.text,
        phone:phone.text,
        students:students.text,
        course:course.value,
    }, "nYElHgybvs9dD1R_-");
}

