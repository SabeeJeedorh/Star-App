import SectionLists from './SectionLists';
import StarRating from './StarRating';

const lists = [
  {
    id: crypto.randomUUID(),
    name: "Winter's Orbit",
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Dial D for Deadman',
    rating: 4,
  },

];

function App() {
  return (
    <>
      {lists.map((list) => {
        return (
          <SectionLists key={list.id} name={list.name} rating={list.rating} />
        );
      })}
    </>
  );
}

export default App;
