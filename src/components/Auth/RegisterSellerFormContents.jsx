const RegisterSeller = ({ handleChange }) => {
  return (
    <>
      <div className="auth__form-container_fields-content_input">
        <label htmlFor="fullName">Full Name</label>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="auth__form-container_fields-content_input">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth__form-container_fields-content_input">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth__form-container_fields-content_input">
        <label htmlFor="avatarURL">Avatar URL</label>
        <input
          name="avatarURL"
          type="text"
          placeholder="Avatar URL"
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth__form-container_fields-content_input">
        <label htmlFor="website">Website</label>
        <input
          name="website"
          type="text"
          placeholder="Website"
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth__form-container_fields-content_input">
        <label htmlFor="country">Country</label>
        <input
          name="country"
          type="text"
          placeholder="Country"
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth__form-container_fields-content_input">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth__form-container_fields-content_input">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default RegisterSeller;
