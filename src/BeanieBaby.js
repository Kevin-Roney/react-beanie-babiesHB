import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanies/${beanieBaby.id}`}>
      <p>{beanieBaby.title}</p>
      <p>{beanieBaby.birthday}</p>
      <img src={beanieBaby.image}/>
    </Link>
  );
}
