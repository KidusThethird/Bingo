import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


import {client} from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';
import Pins from '../container/Pins';

const Feed = () => {

const [loading, setLoading] = useState(false);
const [pins, setPins] = useState(null);
const {catagoryId} = useParams();

useEffect(()=>{
  setLoading(true);

if(catagoryId){
  const query = searchQuery(catagoryId);

  client.fetch(query)
    .then((data)=>{
      setPins(data);
      setLoading(false);
    })
}else{
  client.fetch(feedQuery)
     .then((data)=>{
       setPins(data);
       setLoading(false);
     })
}
},[catagoryId]);

 
if(loading) return <Spinner message="We are adding new idea to your feed!" />

  return (
    <div>
      {pins && <MasonryLayout pins={pins} /> }
    </div>
  )
}

export default Feed