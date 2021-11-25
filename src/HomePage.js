import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Component/Header'
import ReactPaginate from 'react-paginate';
import Pagination from 'rc-pagination';
import Select from "react-select";

function HomePage() {

    const [movies, setmovies] = useState([])
    const [readMore, setreadMore] = useState(true)
    const [readText, setreadText] = useState('Read more')
    const [year, setyear] = useState(2021)
    const [pageNumber, setpageNumber] = useState(1)
    const [totalPages, settotalPages] = useState(1)

    const history = useHistory()

    const logOutClick = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    useEffect(async () => {
        
        getMovies()
    }, [])

    const getMovies = async (e) => {
        const movie = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=382f34cc02d16e668824d65efd1de969&primary_release_year=${year}&sort_by=revenue.desc&page=${pageNumber}`)
        const res = await movie.json()
        setmovies(res.results)
        settotalPages(res.total_pages)
    }

    const readMoreClick = () => {
        if (readMore == true) {
            setreadMore(false)
            setreadText('Read Less')
        } else {
            setreadMore(true)
            setreadText('Read more')
        }
        
    }

    const handleSearch = async (e) => {
        if (e.target.value[0] === ' ') {
            e.target.value = ''
        } else {
            if (e.target.value) {
                getMovies()
            }
        }
        
    }

    const handleSelectChange = async (e) => {
        setyear(e.value)
        const movie = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=382f34cc02d16e668824d65efd1de969&primary_release_year=${year}&sort_by=revenue.desc&page=${pageNumber}`)
        const res = await movie.json()
        setmovies(res.results)
        settotalPages(res.total_pages)
    }

    const handlePageClick = async (e) => {
        // getMovies(e.selected);
        setpageNumber(e.selected)
        const movie = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=382f34cc02d16e668824d65efd1de969&primary_release_year=${year}&sort_by=revenue.desc&page=${e.selected + 1}`)
        const res = await movie.json()
        setmovies(res.results)
    }

    return (
        
        <>
            <Header handleSearch={handleSearch} />
            <div class="container" style = {{width:'20%'}} >
                <div class="row">
                    <div class="col-sm"></div>
                    <Select
                        class="form-select"
                    // value={}
                        onChange={handleSelectChange}
                        options={[
                        { value: 2021, label: 2021 },
                        { value: 2019, label: 2019 },
                        { value: 2018, label: 2018 }
                                ]}
                        placeholder="Select Category..."
                    />
                    </div>
                </div>
            <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        {movies.map(x => {
                                return <>
                                        <div class="p-4 md:w-1/3">
                                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={`https://image.tmdb.org/t/p/original${x.poster_path}`} alt="blog"/>
                                            <div class="p-6">
                                                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{x.original_title}</h1>
                                                <p class="leading-relaxed mb-3">{readMore ? (x.overview).substring(1, 70) : (x.overview)}<br/> <br/> <button type='button' className='btn btn-info btn-sm' onClick={readMoreClick}>{ readText}</button> </p>
                                                <div class="flex items-center flex-wrap ">
                                                {/* <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a> */}
                                                <span class="text-gray-400 mr-3 inline-flex items-center mt-3 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Rating {x.vote_average }/10</h2>
                                                </span>
                                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>{x.vote_count > 900 ? `${(x.vote_count / 1000).toFixed(1)}K` : Math.floor(x.vote_count)}
                                                </span>
                                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </>
                            })}
                        </div>
                    </div>
                </section>
                <div class="d-flex justify-content-center d-flex align-items-center">
                        <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        marginPagesDisplayed={4}
                        containerClassName="pagination"
                        activeClassName="active"
                        />
                    </div>
                    < button className = 'btn btn-primary' onClick = { logOutClick } > Log Out</button >
            </>
    )
}

export default HomePage
