import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

const Form = () => {
  return (
    <form className="d-flex min-vh-50 justify-content-center align-items-center shadow">
      <div class="form-outline w-50">
        <MDBInput className="mb-3" label="Name" id="form1" type="text" />
        <MDBInput className="m-3" label="Password" id="form1" type="password" />
        <MDBTextArea
          className="mb-3"
          id="exampleFormControlTextarea2"
          rows={4}
          label="Input text"
        />
      </div>
    </form>
  );
};
export default Form;
