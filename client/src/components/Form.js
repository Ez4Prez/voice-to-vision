import React, { useState } from "react";

function Form() {
  const [mp3Audio, setMp3Audio] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  function handleMp3AudioChange(event) {
    const file = event.target.files[0];
    setMp3Audio(file);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("mp3Audio", mp3Audio);

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setMp3Audio("");
  }

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>{data.get("mp3Audio").name}</div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="audio/mp3"
          onChange={handleMp3AudioChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;