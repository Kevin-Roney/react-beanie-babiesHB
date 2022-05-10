import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link className='beanie-list-item' to={`/beanies/${beanieBaby.id}`}>
      <h4>{beanieBaby.title}</h4>
      <p>{beanieBaby.birthday}</p>
      <img className='beanie-list-image' src={beanieBaby.image}/>
    </Link>
  );
}
