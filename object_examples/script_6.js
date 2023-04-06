// A program with lookupGetter in the standard way

const obj2 = {
    __proto__: {
      get foo() {
        return Math.random() > 0.5 ? "foo" : "bar";
      },
    },
  };
  
  function findGetter(obj, prop) {
    while (obj) {
      const desc = Object.getOwnPropertyDescriptor(obj, "foo");
      if (desc) {
        return desc.get;
      }
      obj = Object.getPrototypeOf(obj);
    }
  }
  
  console.log(findGetter(obj2, "foo")); // [Function: get foo]
  