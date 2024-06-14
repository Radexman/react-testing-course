const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section One</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Job hunting"
      />
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Emilia"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="PL">Poland</option>
          </select>
        </div>
        <div>
          <label>
            I agree to the terms of condition
            <input type="checkbox" name="terms" id="terms" />
          </label>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </>
  );
};

export default Application;
