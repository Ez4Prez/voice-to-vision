// javascript-python-(audio_to_text)
//     whisper api call 
//         store text in audio_to_text model
//     gpt api call
//         store text in text_to_text model
//     dahl api call
//         store image in Text_to_image
//     dahli api call
//     return image to javascript

//     send mp3 file code package in post
//     base 64 mp3 file 

//     home/hequamily/mp3
//     /paths 

//     fetch to get previous rendered mp3s

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./ImageResults";
import Home from "./Home";
// import Cart from "./Cart";
import Profile from "./Profile";
// import Container from "./Container";
// import Search from "./Search";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("")
      .then((r) => r.json())
      .then((data) => setData(data))
  }, [])

  function addToCart(nft) {
    setCartItems((prevItems) => [...prevItems, nft]);
  }

  function removeFromCart(itemId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  }

  return (
    <div>
         <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile data={data} />}
          />
          {/* <Route
            path="/nft"
            element={<Container data={data} addToCart={addToCart} />}
          />
          <Route
            path="/search"
            element={<Search data={data} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          /> */}

        </Routes>


    </div>
  );
}

export default App;
