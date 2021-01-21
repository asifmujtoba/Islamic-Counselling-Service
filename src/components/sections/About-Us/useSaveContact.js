import { createContact }from '../../../services/createContact';


export const useSaveContact = (
  formState,
  handleSuccess = () => {},
  handleFailure = () => {},
) => {
  
  // function returned to trigger save booking behavior
  const saveContact = async (e) => {
    // save post
   e.preventDefault();
    const newContact = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
    };

    const { status } =  await createContact(newContact);
    
    if (status === 200) {
      handleSuccess();
    } else {
      console.log("Failure")
      handleFailure();
    }
  };

  return { saveContact };
};
