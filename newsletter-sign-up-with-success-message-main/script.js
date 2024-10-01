const form = document.getElementById('form');

const handleSubmit = (e) => {
    e.preventDefault(e);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log(data);
  };
  
  form.addEventListener("submit", handleSubmit);