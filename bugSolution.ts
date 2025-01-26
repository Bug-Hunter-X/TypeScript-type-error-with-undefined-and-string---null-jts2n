function printName(name?: string): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName('John'); // Works fine
printName(); // Also works fine, name is optional
printName(undefined); // Also works fine because undefined is assignable to optional string parameters