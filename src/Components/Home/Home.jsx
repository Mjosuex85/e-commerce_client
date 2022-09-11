import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getAllProducts, setCurrentPage, getUsers } from '../../redux/actions';
import ProductCard from '../Cards/ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import SideBar from '../SideBar/SideBar';
import Filters from "../Filters/Filters"
import "./Home.css"

function Home() {
    let games = useSelector(state => state.products);
    let searchered = useSelector(state => state.searchered);
    let dispatch = useDispatch();
    let currentPage = useSelector((state) => state.currentPage);
    let [gamesPerPage, setgamesPerPage] = useState(10);
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = searchered.length ? searchered.slice(indexOfFirstGame, indexOfLastGame) : games.slice(indexOfFirstGame, indexOfLastGame),
    {user} = useSelector((state) => state.users)
    // const [show, setShow] = useState(false);

    const paginado = (number) => {
        dispatch(setCurrentPage(number))
    }
    
    useEffect(() => {
        const token = window.sessionStorage.getItem('token');
        token && (user === undefined) && dispatch(getUsers(token));
        dispatch(getAllProducts())
    }, [])

    return (
        <div class="d-flex">
            <div style={{ marginRight: '17px', marginLeft: '15px' }}>
                <SideBar />
            </div>
            <div>

                <Filters />
                <div class="row pb-5 mb-4" className="allCardsConteiner" >
                    {currentGames.length>0 && currentGames.map(e => (
                        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <ProductCard name={e.name} id={e.id} img={e.background_image} rating={e.rating} platform={e.platform} price={e.price} fromApi={e.fromApi} isDisabled={e.isDisabled}/>
                        </div>
                    ))}
    
                    {
                        (currentGames.length<1) && <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    }


                </div>
                <Pagination
                    currentPage={currentPage}
                    gamesPerPage={gamesPerPage}
                    games={searchered.length
                        ? searchered.length
                        : games.length} paginado={paginado}
                />
            </div>
        </div>

    )
}

export default Home
