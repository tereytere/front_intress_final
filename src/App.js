import React, { useState } from "react";
import Documents from "./components/documents/Documents";

function App() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Documents
          accept=".jpg,.png,.jpeg,.pdf"
          multiple
          updateFilesCb={updateUploadedFiles}
          apiEndpoint="http://127.0.0.1:8000/apidocuments/create"
        />
      </form>
    </div>
  );
}

export default App;