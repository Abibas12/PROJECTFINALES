<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
body {
    font-family: "Poppins", sans-serif;
    background-color: #f9f9f9;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Header */
  .header {
    text-align: center;
    padding: 2rem;
  }
  
  .header h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #222;
  }
  
  /* Carousel Container */
  .carousel-container {
    text-align: center;
    margin: 2rem auto;
    max-width: 1200px;
  }
  
  .carousel {
    display: flex;
    justify-content: center;
    overflow: hidden;
    gap: 1rem;
  }
  
  .carousel-item {
    flex: 0 0 30%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
  }
  
  .carousel-item img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  .carousel-item h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-size: 1.1rem;
    font-weight: 500;
    color: #ff6f61;
  }
  
  .color-options {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.5rem;
  }
  
  .color-option {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  /* Controls */
  .carousel-controls {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .control-btn {
    background: #fff;
    color: #333;
    border: none;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .control-btn:hover {
    background: #007bff;
    color: #fff;
  }
  
  /* Browse All */
  .browse-all {
    font-size: 1rem;
    color: #007bff;
    cursor: pointer;
    margin-top: 1rem;
  }
