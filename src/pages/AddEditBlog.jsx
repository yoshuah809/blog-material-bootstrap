import { MDBInput, MDBValidation, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};
const options = [
  "Travel",
  "Sports",
  "Entertainment",
  "Health",
  "Science",
  "Technology",
  "Fitness",
  "Food",
  "Fashion",
];

const AddEditBlog = () => {
  const [formValue, setFormValues] = useState(initialState);
  const [categoryErrors, setCategoryErrors] = useState(null);
  const { title, description, category, imageUrl } = formValue;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {};
  const onUploadImage = async (e) => {};
  const onCategoryChange = (e) => {};

  return (
    <MDBValidation className="row shadow" noValidate onSubmit={handleSubmit}>
      <p className="fs-2 fw-bold text-center mt-5">Add Blog</p>
      <div className="m-auto p-5 align-content-center w-50">
        <MDBInput
          type="text"
          label="Title"
          name="title"
          value={title || ""}
          className="mb-3"
          onChange={handleChange}
          validation="Please enter a title"
        />
        <MDBInput
          type="text"
          className="mb-3"
          label="Description"
          name="description"
          value={description || ""}
          onChange={handleChange}
        />
        <MDBInput
          className="mb-3"
          name="imageUrl"
          type="file"
          onChange={(e) => onUploadImage(e.target.files)}
          required
          validation="Please upload an image"
          invalid
        />
        <select
          className="form-select"
          type="select"
          label="Category"
          name="category"
          value={category}
          onChange={onCategoryChange}
        >
          <option>Select Category</option>
          {options.map((option, index) => (
            <option key={index} value={option || ""}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="container d-flex justify-content-center">
        <MDBBtn color="primary" type="submit" className="m-3">
          submit
        </MDBBtn>
        <MDBBtn
          onClick={(e) => navigate("/")}
          size="lg"
          color="danger"
          className="m-3"
        >
          Cancel
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddEditBlog;
