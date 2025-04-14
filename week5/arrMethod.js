/**
 * 🏛️ 1. Array Methods: how to use array methods to manipulate and process data.
 */

// reduce method

const items = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'veg', name: 'carrot' },
  ];

  //  Group Items by a Property
  const result = items.reduce((acc, item)=>{
    if(!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
  }, {});

  console.log(result);

//   Convert Array of Objects into a Lookup Table

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  const Lookup = users.reduce((acc, user) =>{
    acc[user.id] = user.name;
    return acc;
  }, {});

  console.log(Lookup);