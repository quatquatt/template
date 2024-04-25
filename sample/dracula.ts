/*
 * Once upon a time...
 */

interface VampireProps {
  location: string;
  birthDate: number;
  deathDate: number;
  weaknesses: string[];
}
// comment
class Vampires {
  location: string;
  birthDate: number;
  deathDate: number;
  weaknesses: string[];

  constructor(props: VampireProps) {
    this.location = props.location;
    var variable = 25
    variable += 1
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age(): number {
    return this.calcAge();
  }

  calcAge(): number {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Vlad


