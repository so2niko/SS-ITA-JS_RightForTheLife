export const UploadImages = (inputFiles, setProgress) => new Promise((resolve) => {
  const data = new FormData();
  const files = [...inputFiles];
  const links = [];

  files.forEach(file => {
    data.set('image', file);

    fetch("https://api.imgbb.com/1/upload?key=9bb650fa23db8e445857ad9b20e41c2b", {
      method: "POST",
      body: data,
    })
      .then(res => res.json())
      .then(json => {
        links.push(json.data.url);
        if (setProgress) setProgress(Math.round(links.length / files.length * 100));
        if (links.length === files.length) resolve(links);
      })
      .catch(err => {
        console.error(err);
      });
  });
});
