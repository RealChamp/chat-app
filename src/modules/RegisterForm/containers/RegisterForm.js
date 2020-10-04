import RegisterForm from '../components/RegisterForm'
import {withFormik} from 'formik';
import validationForm from '../../../utils/validation'

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
      email: '',
      fullName: '',
      password: '',
      password2: '',
  }),
    validate: values => {
      let errors = {};

      validationForm({isAuth: false, values,errors})

      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    },
  
    displayName: 'BasicForm', // helps with React DevTools
  })(RegisterForm);