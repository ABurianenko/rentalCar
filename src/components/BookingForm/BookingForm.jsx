import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const BookingDatePicker = () => {
    const { setFieldValue, values } = useFormikContext();
  
    return (
      <DatePicker
        selected={values.date}
        onChange={(date) => setFieldValue("date", date)}
        dateFormat="dd-MM-yyyy"
        placeholderText="Booking date"
        className="datepicker"
        calendarClassName="calendar"
      />
    );
  };

export const BookingForm = () => {
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
        <div>
            <h3>Book your car now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ setFieldValue, values }) => (
                    <Form>
                        <label>
                            <Field type="text" name="name" placeholder="Name*" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </label>
                        <label>
                            <Field type="email" name="email" placeholder="Email*" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </label>
                        <label>
                            <DatePicker
                                selected={values.date}
                                onChange={(date) => setFieldValue("date", date)}
                                dateFormat="dd-MM-yyyy"
                                placeholderText="Booking date"
                                minDate={new Date()}
                                className="form-datepicker"
                            />
                            <ErrorMessage name="date" component="div" className="error" />
                        </label>
                        <label>
                            <Field as="textarea" name="comment" placeholder="Comment" />
                        </label>

                        <button type="submit">Send</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}