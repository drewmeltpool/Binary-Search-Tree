'use strict';

  const LENGTH = 50,
        NUM = 80;
  const STORAGE = [],
        INDEXS = [];

    function code(key) {
      let hash = 0;
        for (var i = 0; i < key.length; i++) {
          hash = (NUM ^ hash) + NUM/2 - key.charCodeAt(i);
        }
        return Math.abs(hash % LENGTH);
    }

    function add(key,value) {
      if(key !== undefined || key.length !== undefined || value !== undefined || value.length !== undefined){
        let index = code(key);
        STORAGE[index] = value;
        INDEXS.push(index);
      }
    };

    function show(key){
      let index = code(key);
      if (STORAGE[index]!== undefined) {
        return key + ' : ' + STORAGE[index];
      }else {
        return 'dont exist';
      }
    }

    function show_index(key){
      let index = code(key);
      if (STORAGE[index]!== undefined) {
        return index;
      }
    }

    function remove(key) {
      let index = code(key);
      STORAGE[index] = undefined;
      INDEXS.splice(INDEXS.indexOf(index),1);
      }
