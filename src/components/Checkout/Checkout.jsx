import { useState,useEffect } from 'react';
import Formulario from '../Checkout/Formulario'

const Checkout = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);

//Estas dos funciones verifican entre si que los emails coincidan, y si no lo hacen, muestran en pantalla un aviso de error.
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (confirmEmail && e.target.value !== confirmEmail) {
      setEmailError('error de emails');
    } else {
      setEmailError('');
    }
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    if (e.target.value !== email) {
      setEmailError('error de emails');
    } else {
      setEmailError('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    e.target.value = value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  useEffect(() => {
  
    if (email && confirmEmail && !emailError) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [email, confirmEmail, emailError]);

  return (
    <>
      <Formulario
      name={name}
      phone={phone}
      email={email}
      confirmEmail={confirmEmail}
      emailError={emailError}
      isFormComplete={isFormComplete}
      handleEmailChange={handleEmailChange}
      handleConfirmEmailChange={handleConfirmEmailChange}
      handlePhoneInput={handlePhoneInput}
      handleSubmit={handleSubmit}
      handleNameChange={handleNameChange}
      handlePhoneChange={handlePhoneChange}
    />
    </>
  );
}

export default Checkout;