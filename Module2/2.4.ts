
// ----------- Interface -----> Generic

{

interface Developer<T,Y = null> {
    name: string;
    computer: {
      Brand: string;
      Model: string;
    };
    Mobile: T;
    Bike?:Y;
  }
  
  interface user {
    Brand: string;
    Model?: string;
    display?: string;
  };


  type bike = {
    Brand: string;
    Model?: string;
  }
  
  const RichDeveloper: Developer<user,bike > = {
    name: 'mina',
    computer: {
      Brand: 'HP',
      Model: 'mp5'
    },

    Mobile: {
      Brand: 'realme'
    },

    Bike:{

        Brand:'Yahama',
        Model:'mmm9'
    },
  }
  
  const PoorDeveloper: Developer<user> = {
    name: 'mina',
    computer: {
      Brand: 'HP',
      Model: 'mp5'
    },

    Mobile: {
      Brand: 'realme',
      Model:'C75'
    },
  }
  






}
