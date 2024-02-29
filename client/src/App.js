import React, { useState } from "react";
import PreviewIcon from '@mui/icons-material/Preview';
import "./App.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Apps from "./Apps"
import Badge from "@mui/material/Badge";
import ModalComponent from "./ModalComponent"; // assuming you have a ModalComponent

function App() {
  const initialProducts = [
    {
      id: 1,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 20,
      releaseDate: "2023-01-01",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1707206880848.jpg",
    },
    {
      id: 2,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 30,
      releaseDate: "2022-06-15",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1703487213653.jpg",
    },
    {
      id: 3,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 10,
      releaseDate: "2022-12-10",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1692860372972.jpg",
    },
    {
      id: 4,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 20,
      releaseDate: "2023-01-01",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1707206880848.jpg",
    },
    {
      id: 5,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 30,
      releaseDate: "2022-06-15",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1703487213653.jpg",
    },
    {
      id: 6,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 10,
      releaseDate: "2022-12-10",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1692860372972.jpg",
    },

    {
      id: 7,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 20,
      releaseDate: "2023-01-01",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1707206880848.jpg",
    },
    {
      id: 8,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 30,
      releaseDate: "2022-06-15",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1703487213653.jpg",
    },
    {
      id: 9,
      name: "Freedom",
      subscript: "Acryclic on the paper",
      painter: "Mrs Radhika",
      size: "11.4 X  12 (cm)",
      price: 10,
      releaseDate: "2022-12-10",
      img: "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1692860372972.jpg",
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState("");
  const [filterPriceMin, setFilterPriceMin] = useState("");
  const [filterPriceMax, setFilterPriceMax] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSort = (type) => {
    let sortedProducts = [...products];
    if (type === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "date") {
      sortedProducts.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    }
    setProducts(sortedProducts);
    setSortBy(type);
  };

  const handleFilter = () => {
    let filteredProducts = initialProducts.filter((product) => {
      return (
        (!filterPriceMin || product.price >= parseInt(filterPriceMin)) &&
        (!filterPriceMax || product.price <= parseInt(filterPriceMax))
      );
    });
    setProducts(filteredProducts);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">

      <header className="App-header">

        <div className="containers">

          <div className="header">
            <div className="header-inner">
              <div className="banner">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOggcBEPSWD9wFXUwng88Cv4j96Aoa8iwy_GvmnB6UK80p8Kpah8-grGD_uxtcCgDjRHA&usqp=CAU"
                  }

                  alt="banner"
                        
                        
             
                />

              </div>
              <div className="title">
                <center>
                  <h1>DIRUMS</h1>
                  <p>Discover and buy the best art</p>
                </center>
              </div>
              <div className="header-content">
                <Badge badgeContent={0} color="primary" style={{ margin: 10 }}>
                  <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                </Badge>
                <Badge badgeContent={4} color="primary" style={{ margin: 10 }}>
                  <LocalMallIcon sx={{ fontSize: 30 }} />
                </Badge>
                <Badge badgeContent={4} color="primary" style={{ margin: 10 }}>
                  <AccountCircleIcon sx={{ fontSize: 30 }} />
                </Badge>
              </div>
            </div>
          </div>
         
          <Apps />
        </div>
        <div className="filters">
          <button
            className="filter-button"
            onClick={() => handleSort("price-asc")}
          >
            Sort by Price (Low to High)
          </button>
          <button
            className="filter-button"
            onClick={() => handleSort("price-desc")}
          >
            Sort by Price (High to Low)
          </button>
          <button className="filter-button" onClick={() => handleSort("date")}>
            Sort by Date of Release
          </button>
          <div className="price-filters">
            <input
              type="number"
              className="filter-input"
              placeholder="Min Price"
              value={filterPriceMin}
              onChange={(e) => setFilterPriceMin(e.target.value)}
            />
            <input
              type="number"
              className="filter-input"
              placeholder="Max Price"
              value={filterPriceMax}
              onChange={(e) => setFilterPriceMax(e.target.value)}
            />
            <button className="apply-button" onClick={handleFilter}>
              Apply Filter
            </button>
          </div>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
                onClick={() => handleOpen(product)}
              />
 <PreviewIcon sx={{fontSize:30}} className="prv" onClick={() => handleOpen(product)}/>
              <div className="product-details">
                
                
                <p className="product-subscript">{product.subscript}</p>
                
               
              </div>
            </div>
          ))}
          <ModalComponent
            open={open}
            handleClose={handleClose}
            product={selectedProduct}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
