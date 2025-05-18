import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

import s from './BookingForm.module.css'

const BookingDatePicker = () => {
    const { setFieldValue, values } = useFormikContext();
  
    return (
      <DatePicker
        selected={values.date}
        onChange={(date) => setFieldValue("date", date)}
        dateFormat="dd-MM-yyyy"
        placeholderText="Booking date"
        className={s.inputItem}
        calendarClassName="calendar"
      />
    );
  };

export const BookingForm = ({className}) => {
    const { id: carId } = useParams();

    const initialValues = {
        name: '',
        email: '',
        date: null,
        comment: ''
    }

    const handleSubmit = (values, { resetForm }) => {
        const submissionData = {
            ...values,
            carId,
        }

        console.log("Thank you for booking car! Details:", submissionData);
        
        toast.success("The car was successfully booked!");

        resetForm(); 
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name is too short!')
            .max(30, 'Name is too long!')
            .required('Name is required'),
        email: Yup.string()
            .email('Email is not valid')
            .required('Email is required'),
        date: Yup.date()
            .test("is-future", "Choose a future date", value => value && value > new Date())
            .required('Date is required'),
        comment: Yup.string(),
    })

    return (
        <div className={className}>
            <h3>Book your car now</h3>
            <p className={s.formSubtitle}>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className={s.formInputs}>
                    <label>
                        <Field className={s.inputItem} type="text" name="name" placeholder="Name*" />
                        <ErrorMessage name="name" component="div" className={s.error} />
                    </label>
                    <label>
                        <Field className={s.inputItem} type="email" name="email" placeholder="Email*" />
                        <ErrorMessage name="email" component="div" className={s.error} />
                    </label>
                    <label >
                        <BookingDatePicker />                            
                        <ErrorMessage name="date" component="div" className={s.error} />
                    </label>
                    <label>
                        <Field  className={s.inputItem} as="textarea" name="comment" placeholder="Comment" />
                    </label>

                    <button className={s.sendBtn} type="submit">Send</button>
                </Form>
            </Formik>
        </div>
        
    )
}