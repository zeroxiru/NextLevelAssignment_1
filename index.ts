{

    function formatString(input: string, toUpper: boolean = true): string{

        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{

        return items.filter(item => item.rating >= 4)
    }

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        const result: T[] = [];
        arrays.map(arr => arr.forEach(item => result.push(item)));
        return result;
    }

    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;


        }

        public getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`

        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;

        }
        public getModel(): string {
            return `Model: ${this.model}`
        }

    }

    function processValue(value: string | number): string | number | undefined {

        if (typeof value === 'string') {
            return value.length;
        }
        if (typeof value === 'number') {
            return value * 2;
        }

        
    }
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null{
        if (!products || products.length === 0) {
            return null;
        }

        let expensiveProduct = products[0];
        for (let i = 1; i < products.length; i++) {
            if (products[i].price > expensiveProduct.price) {
                expensiveProduct = products[i];
            }
        }

        return expensiveProduct;
    }


    enum Day {
        Monday = "Weekday",
        Tuesday = "Weekday" ,
        Wednesday = "Weekday",
        Thursday = "Weekday",
        Friday = "Weekday",
        Saturday = "Weekend",
        Sunday = "Weekend"
      }
      
      function getDayType(day: Day): string{ 
        return day;
    
      }

      function delay(ms: number):Promise<void>{ 
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    
    async function squareAsync  (n: number): Promise<number> { 
        await delay(2000);
        if(n >= 0){ 
            return  n * n;
        }
        else {
            throw new Error("Negative numbers are not allowed");
          }
    
    }
    


}