import React, {useEffect, useState} from "react";
import axios from 'axios';
import Cards from './card.js'
import "./Funccomp.css";
import "./login.js"
import Button from 'react-bootstrap';

function Funcomp() {
    const [foodItems, setFoodItems] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    const [itemFilter, setItemFilter] = useState(false);
    const [itemSelected, setItemSelected] = useState("");
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
      axios.get("https://yummy-food-xup0.onrender.com/api/foodItems")
        .then(res => {
                console.log(res.data.data)
                setFoodItems(res.data.data)
        }
        
            )
        .catch(error => console.log(error))
        
    },[])

    const handleChange = (e) => {
      
        setItemSelected(e.target.value)
      
    }

    const handleSearch = (e) => {
        e.preventDefault()
       console.log(itemSelected,"<-itemSelected")
       let selectItem = foodItems.filter(item => {
        return item.itemName === itemSelected
    })

    setSelectItem(selectItem)
    setItemFilter(true)
    }

    const getCountValue = (count) => {
      setCartCount(count)
    }

    console.log(cartCount,"<cartCountValue")
    return (

        <div>


            <nav class="navbar navbar-expand-lg fixed-top py-3 navbar-dark bg-dark shadow-sm">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand">

                        <img src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png" width="45" alt="" class="d-inline-block align-middle mr-2" />

                        <span class="text-uppercase font-weight-bold">Company</span>
                    </a>

                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                    <div id="navbarSupportedContent" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a href="#home" class="nav-link">Home <span class="sr-only">(current)</span></a></li>
                            <li class="nav-item"><a href="#card" class="nav-link">About</a></li>
                            <li class="nav-item"><a href="#service" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#footer" class="nav-link">Contact</a></li>
                        </ul>
                    </div>

                    <form class="d-flex input-group w-auto">
                        <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            onChange={handleChange}
                        />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </form>
                </div>
            </nav>



            <div id='home'>
                home


            </div>


            <div id='card'>


                <card items={itemFilter && selectItem || foodItems} />
            </div>


            <div id='service'>
                service


            </div>


            <div id='footer'>
                <div class="bg-dark text-center text-white">

                    <div class=" p-4">
                        <div class="row">

                            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Footer text</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                </p>
                            </div>

                            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fas fa-envelope me-3 text-secondary"></i>
                                    info@example.com
                                </p>
                                <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                            </div>
                        </div>

                    </div>
                    <div class="text-center p-3">
                        © 2020 Copyright:
                    </div>
                </div>


            </div>




        </div >

    )
}
export default Funcomp