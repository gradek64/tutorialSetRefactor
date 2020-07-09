//extending interface allows you to join them. For let value the join properties become optional
// For const value the join properties are all required

/**
 * REMEMBER !!!
 *
 * extens with generic always create a contstrain (so limits what generic can take !! limits its types)
 */

interface Shape {
  color: string;
}
interface ShapeBlue {
  colorblue: 'blue';
}

interface Square extends Shape, ShapeBlue {
  sideLength: number;
}

//if you define as let then properties become optional
let square = {} as Square;
square.color = 'blue';
//square.colorblue = 'blue'
square.made = 'ss'; //outside the scope

//if you define as const then properties are obligatory
const square1: Square = {
  sideLength: 10,
  color: 'green',
  colorblue: 'blue',
};
