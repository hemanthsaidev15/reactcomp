import {Link, useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from 'axios';
import Cards from './Cards.jsx'
import "./Funcomp.css";
import Button from 'react-bootstrap';



function Funcomp() {
    const [foodItems, setFoodItems] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    const [itemFilter, setItemFilter] = useState(false);
    const [itemSelected, setItemSelected] = useState("");
    useEffect(() => {
        axios.get("https://yummy-food-xup0.onrender.com/api/foodItems")
            .then(res => {
                // console.log(res.data.data)
                setFoodItems(res.data.data)
            }

            )
            .catch(error => console.log(error))

    }, [])

    const handleChange = (e) => {

        setItemSelected(e.target.value)

    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(itemSelected, "<-itemSelected")
        let selectItem = foodItems.filter(item => {
            return item.itemName === itemSelected
        })

        console.log(selectItem, "selectITem")
        setSelectItem(selectItem)
        setItemFilter(true)
    }
    return (

        <div className="background">

            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Enjoy The Food</a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#card">Items</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:3000/Loginpage.jsx">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Cart</a>
                            </li>

                        </ul>
                        <form class="d-flex input-group w-auto">
                            <input
                                type="search"
                                class="form-control mr-sm-2 rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                                onChange={handleChange}
                            />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button>
                            {/* <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span> */}
                        </form>

                    </div>

                </div>
            </nav>

            <div className="home" id="home">
                <div className="title-header">
                    <h1>Feeling Hungry!</h1>
                    <h3>We have the best food items across the best Hotels..</h3>
                    <h4>why late? &nbsp;  Order the delicious Food </h4>
                </div>
            </div>
            <div className="cardb" id="card">
                <Cards items={itemFilter && selectItem || foodItems} />

            </div>
            <div className="footer" id="footer">
                <div class="bg-dark text-center text-white">

                    <div class=" p-4">
                        <div class="row">

                            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase">About us</h5>

                                <p>
                                    Well established platform for online delivery
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
                            
                            </div>
                        </div>

                    </div>
                    <div class="text-center p-3">
                        © 2020 Copyright:
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Funcomp