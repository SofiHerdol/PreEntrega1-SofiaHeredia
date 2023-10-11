let ages = [24, 13, 25, 52, 3, 7, 82, 19, 46, 32, 15, 16, 5, 61];

for (let i = 0; i < ages.length; i++) {

    let age = ages[i];

    if (age < 13) {
        console.log ("La persona " + (i + 1) + " es un niño, ya que tiene " + age + " años.");
    }
    else if (age <= 18 && age >= 13) {
        console.log("La persona " + (i + 1) + " es un adolescente, ya que tiene " + age + " años.");
    }
    else if (age < 60 && age > 18) {
        console.log("La persona " + (i + 1) + " es un adulto, ya que tiene " + age + " años.")
    }
    else {
        console.log("La persona " + (i + 1) + " es un adulto mayor, ya que tiene " + age + " años.")
    }
}