import { request } from 'express';
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  console.log ('put into the database')
  const jateDb = await openDB('jate', 1);
  const tx = jateDbdb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put ({ id: id, jate: content})
  const result = await request;
  console.error('data saved', result);


}



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{
  console.log ('Get all from the database')
  const jatedb = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.error('result.value, result');
  return result;
}
  
  


initdb();
