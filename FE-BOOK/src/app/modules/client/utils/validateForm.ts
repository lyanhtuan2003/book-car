import * as yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const validateTicket = yup.object().shape({
    phoneNumber: yup.string().length(10, "Độ dài số điện thoại là 10").matches(phoneRegExp, 'Số điện thoại không đúng định dạng').required('Bạn cần nhập đầy đủ thông tin'),
    ticket: yup.string().required('bạn cần nhập đầy đủ thông tin'),
})