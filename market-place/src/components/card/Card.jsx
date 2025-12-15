import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Seafood");


  useEffect(() => {
    const loadAPI = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setData(response.data.meals);
    };

    loadAPI();
  }, [category]);

  return (
    <div className="card">
      {data.map((w) => (
        <div className="item-comida" key={w.idMeal}>
          <img
            className="fotoComida"
            src={w.strMealThumb}
            alt={w.strMeal}
          />
          <h2 className="nome-comida">{w.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
