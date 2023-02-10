import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

const Form = () => {
  return (
    <form className="text-center px-5 my-5 shadow">
      <div class="form-outline">
        <MDBInput className="mb-3" label="Name" id="form1" type="text" />
        <MDBInput
          className="m-3 "
          label="Password"
          id="form1"
          type="password"
        />
        <MDBTextArea
          className="mb-3"
          id="exampleFormControlTextarea2"
          rows={4}
          label="Input text"
        />
      </div>

      <div className="form-outline">
        <MDBTextArea
          className="mb-3"
          id="exampleFormControlTextarea1"
          rows={4}
          label="Input text"
        />
        <br />
      </div>
    </form>
  );
};
export default Form;
