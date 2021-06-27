module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if(fullName.length <= 1) return 'Error';
  const array = fullName.split(' ');
  if(array.length !== 2) return 'Error';
  const firstName = array[0];
  const lastName = array[1];
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
