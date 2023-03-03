import Card from "./Card";
import style from './Cards.module.css'

function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.conteiner}>
      {characters.map((char) => {
        return (
          <Card
            //key={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={()=>props.onClose(char.id)}
          ></Card>
        );
      })}
    </div>
  );
}
export default Cards;
