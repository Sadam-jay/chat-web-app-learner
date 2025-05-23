const upload = async (file) => {
  try {
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chat-app-media");
    data.append("cloud_name", "dzs6yz7vt");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzs6yz7vt/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    // Check for a successful response
    if (!res.ok) {
      throw new Error(`Upload failed: ${res.statusText}`);
    }

    const uploadedImageURL = await res.json();

    // Ensure the response contains the URL
    if (uploadedImageURL && uploadedImageURL.url) {
      //   console.log(uploadedImageURL);
      return uploadedImageURL.url;
    } else {
      throw new Error("Image URL not found in the response.");
    }
  } catch (err) {
    console.log(err);
  }
};

export default upload;
