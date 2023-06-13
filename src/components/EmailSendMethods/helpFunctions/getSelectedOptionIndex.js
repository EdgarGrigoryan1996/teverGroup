export const getSelectedOptionIndex = (select,selectedValue) => {
    let index
     select.forEach((option,i) => {
        if(option.value === selectedValue){
            index = i
        }
    })
    return index

}