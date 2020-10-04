import LoginForm from '../components/LoginForm'
import {withFormik} from 'formik';
import validationForm from '../../../utils/validation'

export default withFormik({
    enableReinitialize: true,
  mapPropsToValues: () => ({
      email: '',
      password: '',
  }),
    validate: values => {
     
      let errors = {};

      validationForm({isAuth: true, values,errors})

      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
    },
  
    displayName: 'LoginForm',
  })(LoginForm);