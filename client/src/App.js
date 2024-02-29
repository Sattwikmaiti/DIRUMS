import React, { useState } from "react";
import PreviewIcon from '@mui/icons-material/Preview';
import "./App.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
          <nav className="navigation">
            <ul className={`nav_menu ${isMenuOpen ? "active" : ""}`}>
             
              <li className="nav_list nav_list_menu">
                <a href="Artworks" className="nav_link">
                  <span>Artworks</span>
                 
                </a>
                <div class="dropdown art">
                  <div class="dropdown-inner">
                    <div class="dropdown-item">
                      <h3 class="item-heading">Paintings</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Acrylic</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Watercolor</p>
                        
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Oil Paintings</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                       
                          <p>Mix Media Paintings</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Ink on Paper Paintings</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>WildLife Paintings</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Natural Landscape</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Home Office Art</p>
                         
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                      <h3 class="item-heading">Folk Ark</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Madhubani Art</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                       
                        <div class="item-list-info">
                          <p>Mandala Art</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Gond Art</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Bhil Art</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Dhokra Art</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Pattachitra  Art</p>
                         
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                      <h3 class="item-heading">Religious</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lord Buddha Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lord Krishna Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lord Shiva Painting</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lord Vishnu Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lord Ganesha Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lord Hanuman Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Maa Durga Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Maa Laxmi Painting</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Maa Saraswati Painting</p>
                          
                        </div>
                      </div>
                    </div>

                  
                  </div>
                </div>
              </li>


              <li className="nav_list nav_list_menu">
                <a href="Home & Living" className="nav_link">
                  <span>Home & Living</span>
                 
                </a>
                <div class="dropdown">
                  <div class="dropdown-inner">
                    <div class="dropdown-item">
                      <h3 class="item-heading">Wall Decor</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Wall Art & Paintings</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Wall Plates</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Embroidery Hoops</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <span class="info-badge">New</span>
                          <p>Photo Frames</p>
                         
                        </div>
                      </div>

                      <h3 class="item-heading">Wall Clocks</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Modern Clocks</p>
                        
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Resin Clocks</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Lippan Clocks</p>
                         
                        </div>
                      </div>
                     
                    </div>

                    <div class="dropdown-item">
                    <h3 class="item-heading">Table Decor</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Decorative Trays</p>
                       
                        </div>
                      </div>
                      <div class="item-list">
                       
                        <div class="item-list-info">
                          <p>Elegant Coasters</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Dhokra</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Vases</p>
                         
                        </div>
                      </div>
                      <h3 class="item-heading">Trays</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Wooden Trays</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        
                        <div class="item-list-info">
                          <p>Pattachitra Trays</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Resin Trays</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Coasters</p>
                         
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                      <h3 class="item-heading">Resin</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Trays</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Tea Light Holders</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Pooja Thails</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Key Chains</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Photo Frames</p>
                          
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                    <h3 class="item-heading">Candles</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p> Resin Candle Holders</p>
                         
                        </div>
                      </div>
                     
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Tea Light Candles</p>
                          
                        </div>
                      </div>
                     
                      <h3 class="item-heading">Lippan</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p> Wall Hangings</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Photo Frames</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Tea Light Holders</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Mirror</p>
                          
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                    <h3 class="item-heading">Photo Frame</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p> Modern Frames</p>
                         
                        </div>
                      </div>
                     
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Resin Frames</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Lippan Frames</p>
                          
                        </div>
                      </div>
                     
                      <h3 class="item-heading">Candle Holders</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p> Resin Candle Holders</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Tea Light Holders</p>
                         
                        </div>
                      </div>
                     
                     
                    </div>
                    <div class="dropdown-item">
                    <h3 class="item-heading">Pooja Essentials</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p> Spiritual Wall Hangings</p>
                         
                        </div>
                      </div>
                     
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Pooja Thali</p>
                          
                        </div>
                      </div>
                     
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Diya</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Incense Burner</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>God Idols</p>
                          
                        </div>
                      </div>
                      <h3 class="item-heading">Decorative Pot & Planters</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p> Terracotta Planters</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Terracotta Pots</p>
                         
                        </div>
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav_list nav_list_menu">
                <a href="Jewellery & Accessories" className="nav_link ">
                  <span>Jewellery & Accessories</span>
                 
                </a>
                <div class="dropdown jewel">
                  <div class="dropdown-inner">
                    <div class="dropdown-item">
                      <h3 class="item-heading">Earrings</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Resin</p>
                       
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Quiling</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Bread & Mirror</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Clay</p>
                       
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                         
                          <p>Fabric</p>
                       
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                      <h3 class="item-heading">Jewellery Set</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Resin Jewellery</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Quilling Jewellery</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Sea-Sell Jewellery</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Clay Jewellery</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Fabric Jewellery</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Wood Jewellery</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Kundan Jewellery</p>
                         
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </li>
              <li className="nav_list nav_list_menu">
                <a href="Kitchen & Dining" className="nav_link">
                  <span>Kitchen & Dining</span>
                 
                </a>
                <div class="dropdown">
                  <div class="dropdown-inner">
                    <div class="dropdown-item">
                      <h3 class="item-heading">Drinkwaire</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Coffee Mugs</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Water Bottles</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Teacups Set</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                        
                          <p>Glass Set</p>
                        
                        </div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                      <h3 class="item-heading">Serveware</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Serving Tray</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                       
                        <div class="item-list-info">
                          <p>Tray Set</p>
                          
                        </div>
                      </div>
                     
                    </div>

                    <div class="dropdown-item">
                      <h3 class="item-heading">Tableware</h3>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Coasters</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        <div class="item-list-info">
                          <p>Kettle</p>
                         
                        </div>
                      </div>
                     
                    </div>

           
                  </div>
                </div>
              </li>
              <li className="nav_list nav_list_menu">
                <a href="Gifting" className="nav_link">
                  <span>Gifting</span>
                 
                </a>
                <div class="dropdown gifts">
                  <div class="dropdown-inner">
                    <div class="dropdown-item">
                      <h3 class="item-heading">Gifts</h3>
                      <div class="item-list">
                        
                        <div class="item-list-info">
                          <p>Team Corporate Gifts</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                       
                        <div class="item-list-info">
                          <p>Anniversary Gifts</p>
                         
                        </div>
                      </div>
                      <div class="item-list">
                        
                        <div class="item-list-info">
                          <p>Birthday Gifts</p>
                          
                        </div>
                      </div>
                      <div class="item-list">
                        
                        <div class="item-list-info">
                          <span class="info-badge">New</span>
                          <p>Gift Hampers</p>
                          
                        </div>
                        
                      </div>
                      <div class="item-list">
                        
                        <div class="item-list-info">
                        
                          <p>Personalized Gifts</p>
                          
                        </div>
                        
                      </div>
                      <div class="item-list">
                        
                        <div class="item-list-info">
                         
                          <p>Valentine's Day Special</p>
                          
                        </div>
                        
                      </div>
                    </div>


                  </div>
                </div>
              </li>
              <li className="nav_list">
                <a href="Art & Collectibles" className="nav_link">
                  <span>Art & Collectibles</span>
                </a>
              </li>
            </ul>
          </nav>
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
