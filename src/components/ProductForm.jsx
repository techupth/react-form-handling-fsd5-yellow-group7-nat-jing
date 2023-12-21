import { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //แสดง Alert เมื่อผู้ใช้กดปุ่ม Create หลังกรอกข้อมูลลง input แล้ว
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `\nName: ${formData.name}\nImage: ${formData.image}\nPrice: ${formData.price}\nDescription: ${formData.description}`
    );
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>

      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            cols={30}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
