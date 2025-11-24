import '../styles/SubmitRequest.css';
import React, { useState } from "react";
import trackimage from '../assets/trackimage.png';

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
    model: "",
    issue: "",
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="submit-page">
      <h1 className="submit-title">Submit a Repair Request</h1>
      <p className="submit-subtext">
        Tell us what’s wrong with your device and we’ll get it fixed in no time.
      </p>

      {/* Container with image on the left and form on the right */}
      <div className="submit-container">
        {/* LEFT SIDE IMAGE */}
        <div className="submit-image">
          <img src={trackimage} alt="Repair Device" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="submit-form-wrapper">
          {!submitted ? (
            <form className="submit-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address (optional)"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="deviceType"
                  className="form-input"
                  value={formData.deviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Device Type</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Huawei">Huawei</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="model"
                  placeholder="Device Model (e.g. iPhone 13 Pro)"
                  className="form-input"
                  value={formData.model}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="issue"
                  placeholder="Describe the issue with your device..."
                  className="form-textarea"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-file-label">
                  Attach a photo (optional)
                  <input
                    type="file"
                    name="image"
                    className="form-input-file"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <button type="submit" className="btn-submit">
                Submit Request
              </button>
            </form>
          ) : (
            <p className="submit-success">
              ✅ Your request has been received! We’ll contact you soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubmitRequest;
