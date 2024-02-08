import React, { useState, useEffect } from 'react';

function SipAndSwap(){
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [items, setItems] = useState({});
  
    useEffect(() => {
      ('/categories').then((response) => {
        setCategories(response.data);
      });
    }, []);
  
    useEffect(() => {
      if (selectedCategory && !items[selectedCategory]) {
        (`/items?category=${selectedCategory}`).then((response) => {
          setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
        });
      }
    }, [items, selectedCategory]);
  
    if (!categories) {
      return <p>Loading..</p>;
    }
    
  
    return(
   
            <div className='App'>
              <h1>Clothes 'n Things</h1>
              <nav>
                {categories.map((category) => (
                  <button key={category} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>
                ))}
              </nav>
              <h2>{selectedCategory}</h2>
              <ul>
                {!items[selectedCategory]
                  ? null
                  : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          );
        }
        <div>
        <h1>Sip And Swap</h1>
        <p>Pull up a glass of wine, beer or iced tea. We'll show you ours
        if you show us yours</p>
</div>

     

export default SipAndSwap;