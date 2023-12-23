import React, { useState } from 'react'
import "./overiew.css"
import Navigation from "./Navigation/Nav";


function Overview() {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const  openForm = () => {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("msgover").innerHTML = "I am interested in buying this pet, let’s discuss further";

    }
    
    const  closeForm = () => {
        document.getElementById("myForm").style.display = "none";
      }
    return (
        <div>
            <Navigation query={query} handleInputChange={handleInputChange} />


            <div class="card-wrapper">
                <div class="card">
                    <div class="product-imgs">
                        <div class="img-display">
                            <div class="img-showcase">
                                <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />

                            </div>
                        </div>
                        <div class="img-select">
                            <div class="img-item">
                                <a href="#" data-id="1">
                                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div class="img-item">
                                <a href="#" data-id="2">
                                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div class="img-item">
                                <a href="#" data-id="3">
                                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div class="img-item">
                                <a href="#" data-id="4">
                                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/917nPCOw9-L._AC_UF894,1000_QL80_.jpg" alt="shoe image" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="product-content">
                        <h2 class="product-title">Beagle</h2>
                        <a href="#" class="product-link">visit nike store</a>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>4.7(21)</span>
                        </div>

                        <div class="product-price">
                            <p class="last-price">Old Price: <span>$257.00</span></p>
                            <p class="new-price">New Price: <span>$249.00 (5%)</span></p>
                        </div>

                        <div class="product-detail">
                            <h2>about this item: </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                            {/* <ul>
                                <li>Color: <span>Black</span></li>
                                <li>Available: <span>in stock</span></li>
                                <li>Category: <span>Shoes</span></li>
                                <li>Shipping Area: <span>All over the world</span></li>
                                <li>Shipping Fee: <span>Free</span></li>
                            </ul> */}
                        </div>

                        <div class="purchase-info">
                            <input type="number" min="0" value="1" />
                            <button type="button" class="btn">
                                Add to Cart <i class="fas fa-shopping-cart"></i>
                            </button>
                            <button type="button" class="btn" onClick={openForm}>Enquire</button>
                        </div>
                        <div>
                            <div class="chat-popup" id="myForm">
                                <form action="#" class="form-container">
                                    <h1>Chat</h1>

                                    <label for="msg"><b>Message</b></label>
                                    <textarea placeholder="Type message.." name="msg" required id='msgover'></textarea>

                                    <button type="submit" class="btn">Send</button>
                                    <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>

    )
}

export default Overview
