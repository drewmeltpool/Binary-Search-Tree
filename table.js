'use strict';



  const LENGTH = 20;
  const STORAGE = [],
        INDEXS = [];

    function code(key) {
      let hash = 0;
        for (var i = 0; i < key.length; i++) {
          hash = hash + key.charCodeAt(i);
          hash = hash >>> 0;
        }
        return Math.abs(hash % LENGTH);
    }

    function add(key,value) {
      if(key !== undefined || key.length !== undefined || value !== undefined || value.length !== undefined){
        let index = code(key);
        STORAGE[index] = value;
      }
    };

    function show(key){
      let index = code(key);
      if (STORAGE[index]!== undefined) {
        return key + ' : ' + STORAGE[index];
      }else {
        return undefined;
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
    }
    let obj = {
      albania:'tirana',
      algeria:'algiers',
      cuba:'havana',
      egypt:'cairo'
    };
    for (var key in obj) {
      add(key,obj[key]);
    };
    remove('cuba');
    console.log(STORAGE);
    console.log(show('cuba'));//undefined
    console.log(show_index('egypt'));
