import Movie from "../models/Movie.js";

const addMovie= async (req,res)=>{
    const {title,Imageurl,duration,releaseDate,movieType,rating,description}=req.body;
    if(!title||!Imageurl||!duration||!releaseDate||!movieType||!rating||!description){
        res.status(400).send({msg:"All fields are required"})
    }
    const addMovie= new Movie({
        title:title,
        Imageurl:Imageurl,
        duration:duration,
        releaseDate:releaseDate,
        movieType:movieType,
        rating:rating,
        description:description
    })

    try{
       const movie= await addMovie.save();
       res.json({
        success:true,
        data:movie,
        message:'Movie added successfully'
       })
    }catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }
}

const getAllMovies= async(req,res)=>{
   try{
    const getAllMovies=await Movie.find({})
    res.json({
        success:true,
        data:getAllMovies,
        message:'movies fetched successfully'
    })
   }catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
}


export {addMovie,getAllMovies}