import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom'
import { addToCart, addWish } from '../../redux/actions';
import FavouriteButton from '../FavouriteButton/FavouriteBurron';
import Review_box from '../Reviews/Review';
import './details.css'
const {REACT_APP_URL} = process.env;
export default function ProductDetails() {

  const [game, setGame] = useState({});
  const [disabled, setDisabled] = useState(true); // si no esta logueado desabilita addwish
  let cart = useSelector(state=>state.cart);
  
  let user = useSelector(state => state.users); // se trae el usuario logueado para permitir agregar a wishlist
  let { id } = useParams();
  let dispatch = useDispatch();
  
  useEffect(() => {
    if (user.length) setDisabled(false); //si cuando se monta el componente hay usuario logueado habilita el addwish
    setTimeout(() => {
      axios.get(`${REACT_APP_URL}videogames/${id}`)
      .then(res => setGame(res.data))
      .catch(err => console.log(err))
    }, "500");
  }, [id, user])
  
  function handleClick(e) { // eso se ejecuta cuando se le hace click al boton de add to cart o wishlist
    e.preventDefault();
    if (e.target.value === "cart") {
      console.log(cart[0], id)
       let fC = cart.filter(e=>e===id);
       if(fC.length>0){
        alert("Juego ya agregado al carrito anteriormente!")
       }else{
         dispatch(addToCart(game.id)) // dispacha al carrito de compras con el id del game en la db
       }
       
      // if(fC.length>0){
      // }else{
      //   alert("Juego ya agregado al carrito!")
      // }

    }
  }

  return (
    <div class="container">
      {
        !game.name &&(
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )
      }
      {game.name && (
        <div class="row">
          <div class="col-md-5">

            <div class="project-info-box mt-0">
              <h4>{game.name}</h4>
              <p className='description'>{game.description}</p>
            </div>

            <div class="project-info-box">
              <div className='divp1'>
                <p className='p1'><b>Rating:</b> {game.rating}</p>
                <p className='p1'><b>Metacritic:</b> {game.metacriticRating}</p>
              </div>
              <p className='p2'><b>Esrb:</b> {game.esrb_rating}</p>
              <p className='p2'><b>Released:</b> {game.released}</p>
            </div>

            <div class="project-info-box mt-0 mb-0">
              <h4>${game.price}</h4>

              <div >
              <button value="cart" onClick={handleClick} type="button" class="btn btn-info">
                  Add to cart
                </button>
                <FavouriteButton id={id} />
              </div>
            </div>
            <div style={{height: '15px'}}></div>

          </div>

          <div class="col-md-7">

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                {game.Screenshots?.map((e, i) => {
                  return (<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${i + 1}`} aria-label={`Slide ${i + 2}`}></button>)
                })}
              </div>
              <div class="carousel-inner">
                <div class='carousel-item active'>
                  <img src={game.background_image} class="d-block w-100 rounded" alt="..." />
                </div>
                {game.Screenshots?.map((e) => {
                  return (
                    <div class="carousel-item">
                      <img src={e?.image} class="d-block w-100 rounded" alt="..." />
                    </div>
                  )
                })
                }
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div class="project-info-box">
              <p className='p3'u><b>Platforms:</b>{game.platforms?.map(e => (<span> {e.name}</span>))} </p>
              <p className='p3'><b>Genres:</b> {game.genres?.map(e => (<span> {e.name} </span>))} </p>
            </div>

          </div>

        </div>
      )}
      <br />
      <br />
            <div>
              <Review_box></Review_box>
            </div>
            <br />
    </div>
  )
}