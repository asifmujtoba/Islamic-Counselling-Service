import newsletterSvcs from '../services/newsletter'


export const useSaveNewsletter = (
  formState,
  handleSuccess = () => {},
  handleFailure = () => {},
) => {
  
  // function returned to trigger save booking behavior
  const saveNewsletter = async (e) => {
    // save post
   e.preventDefault();

   const {createNewsletter} = newsletterSvcs;
    const newNewsletter = {
      email: formState.email,
    };
    console.log(newNewsletter);
    const { status } =  await createNewsletter(newNewsletter);
    console.log("Status: ", status);
    if (status === 200) {
      handleSuccess();
    } else {
      console.log("Failure")
      handleFailure();
    }
  };

  return { saveNewsletter };
};
