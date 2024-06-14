const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
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
  );
};

export default Application;
