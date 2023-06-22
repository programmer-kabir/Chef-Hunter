import React, {useState, useEffect} from 'react';
import Header from '../SharePage.jsx/Header';
import Banner from '../Comonent/Banner';
import ZoomCard from '../Comonent/ZoomCard';
import Recipe from '../Comonent/Recipe/Recipe';
import { useLoaderData } from 'react-router-dom';
import Story from '../Comonent/Story';

const Home = () => {
    const [ data , setData] = useState(null)
    useEffect(()=>{
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const datas= useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Story></Story>
            <ZoomCard></ZoomCard>

            <Recipe datas={datas}></Recipe>

        </div>
    );
};

export default Home;