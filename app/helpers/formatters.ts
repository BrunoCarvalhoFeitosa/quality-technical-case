export const postalCodeFormatMask = (ev: { currentTarget: { maxLength?: number; value: string } }) => {
    ev.currentTarget.maxLength = 9;
    let { value } = ev.currentTarget;
  
    value = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  
    ev.currentTarget.value = value;
};
  
export const phoneFormatMask = (ev: { currentTarget: { maxLength?: number; value: string } }) => {
    ev.currentTarget.maxLength = 15;
    let { value } = ev.currentTarget;
  
    value = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  
    ev.currentTarget.value = value;
};