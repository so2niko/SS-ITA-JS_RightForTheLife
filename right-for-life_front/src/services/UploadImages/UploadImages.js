export class UploadImages {
  constructor(files) {
    this.links = [];
    this.files = [...files];
    this.data = new FormData();
  }

  getLinks(setProgress) {
    return new Promise((resolve) => {
      this.files.forEach(file => {
        this.data.set('image', file);
  
        fetch("https://api.imgbb.com/1/upload?key=9bb650fa23db8e445857ad9b20e41c2b", {
          method: "POST",
          body: this.data,
        })
          .then(res => res.json())
          .then(json => {
            this.links.push(json.data.url);

            setProgress(this.links.length / this.files.length * 100);

            if (this.links.length === this.files.length) {
              resolve(this.links);
            }
          })
          .catch(err => console.error(err));
      })
    });
  }
}
