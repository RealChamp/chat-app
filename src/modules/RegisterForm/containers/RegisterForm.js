import RegisterForm from '../components/RegisterForm'
import {withFormik} from 'formik';

export default withFormik({
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Введите email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
      ) {
        errors.email = 'Неправильный адрес почты';
      }

      if (!values.password){
          errors.password = 'Введите пароль'
      } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/i.test(values.password)) {
          errors.password = 'Слишком легкий пароль'
      }

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