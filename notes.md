# Intro to the Web Development
## Browser Wars
The war is between Netscape and IE
# 3 layer architecture:
 - FE
   - Angular
   - React 
 - BE
 - DB
   - python
   -java
   -nodes
## selectors

-element selector

-class selector
```css
.red{
    color:red;
}

```
The alt attribute is used for 3 main reasons:
- if the image is not available this attribute description is displayed
- for visually impaired people
- SEO -->Search Engine Optimization
![LCP](image-1.png)

# JavaSCRIPT
The datatypes in this are:
- number
- boolean
- object
- string
- To declare a variable we use let, var, and const keywords

Redeclartion: delclaring the variable again
Reassignment: Assigning or modifying new value to the variable
when declairng an array as const, we cannot change the array, as the address cannot be changed but the values can be changed.

# SCOPE
It is the lifetime of the variable. 
Variables declared with the var keyword can NOT have block scope. It is because the life time of the varible is done.
## undefined vs not defined
undefined is the value.
not defined is the error.

var x1=3;
var x2="5";
var t=x1-x2;
var t1=x1+x2;
console.log(x1-x2);
console.log(x1+x2);
console.log(typeof(t));
console.log(typeof(t1));
  - the "+" operator has two jobs to do: addition and concat, it gives priority to concat and converts number 3 to string "3" and concat with string "5"
  - the "-" operator has only 1 job i.e subtraction so it converts to number and subtract
  - this is implicit typecasting
        var x1=3;
        var x2="5";
        console.log(x1+parseInt(x2)); --->explicit 
        console.log(x1+ +x2);
- to make addition we can convert to number 
### operations 
- null+4 will give u number --> 4
- nan+ 4 will give u NaN -->NaN
- NaN with any operationa gives u NaN
- typeof NaN is Number
- 4 * "5a" ---> NaN, beacause the conversion is not done for "5a" one is number and other is character
### typecasting
  var g1=5;
  var g2="5";
  console.log(g1==g2);
  console.log(g1===g2);
  - string will be converted to number and then verifies in "=="
  - checks directly in "===" and is faster since only one step
## Types of Function
1. Normal function
2. Arrow
3. Anonymous
##### Normal function:
function declaration / definition
function body
n-parameter in the function
argument -which we will pass
function block
- There are 2 ways to exit the function:
When the function body is executed
when return is executed
##### Arrow function:
There will be no function keyword.
if there are one line function there is no need to write return and brackets too.
### Why do we write the code?
We write for fellow teammate and for ourself. Basically to understand what others have written to solve the problems.
- reusability
- modularity
- DRY -Don't Repeat yourself

### How do you measure the code quality
5 pillars of code quality
1. Readability - 75%  for developer experience, to make changes or add new features
2. Maintanence - code debt --> tomorrow we'll fix it but that tomorrow never comes.
3. Extensibility --> adding new features should be easy to add
4. Testability 
5. Performance


# References
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses
- https://caniuse.com/
- https://squoosh.app/
- https://pythontutor.com/


