import React, { useState } from 'react';
import s from './../Components/SearchPage.module.css';



const SearchBar = () => {

  const [keyword, setKeyword] = useState('');
  const [photos, setPhotos] = useState([]);
  const apiKey = '79ad4888b90c97ad08a68ca903f4dc9f';

  const onSearch = () => {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apiKey+'&tags=' + keyword +'&per_page=5&page=1&format=json&nojsoncallback=1')
      .then((response) => {
        return response.json();
      })
      .then((j) => {
        setPhotos(j.photos.photo);
      })
  };

  const onChange = (e) => {
    if(e.target.value) {
      setKeyword(e.target.value.replaceAll(' ', '+'));
    }
  };

  return (
    <div className={s.page}>
      <h1>Search</h1>
      <input className={s.input} type="text" onChange={onChange}/>
      <button className={s.button} onClick={onSearch}>Search</button>
      <div>
        {photos.map((pic, index) => <img key={index} src={'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'} alt="" width={100} height={100}/>)}
      </div>
      <div className={s.div}>
          <h1 className={s.cat}>Cat</h1>
          <h1 className={s.dog}>Dog</h1>
        </div>
    </div>
  );

// return (
//     <>
//       <div className={s.page}>

//         <form>
//           <h1>Search</h1>
//           <input
//             type="text"
//           />
//         </form>

//         <Button variant="primary" size="lg" >SEARCH</Button>

//         <section className={s.tasks}>
//           <ul className={s.tasks__list}>
//             <li className={s.tasks__item}>Cat1</li>
//             <li className={s.tasks__item}>Cat2</li>
//             <li className={s.tasks__item}>Dog1</li>
//             <li className={s.tasks__item}>Dog2</li>
//             <li className={s.tasks__item}>Cat3</li>
//           </ul>
//         </section>


        // <div className={s.div}>
        //   <h1 className={s.cat}>Cat</h1>
        //   <h1 className={s.dog}>Dog</h1>
        // </div>


//       </div>






//     </>
//   );
}

export default SearchBar
