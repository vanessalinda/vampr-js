class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberFromOrig = 0;
    let currentOffspring = this;
    while (currentOffspring.creator) {
      currentOffspring.creator = currentOffspring;
      numberFromOrig++;
    }
    return numberFromOrig;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // const vampireAge = vampire.numberOfVampiresFromOriginal;
    // const thisVampireAge = this.numberOfVampiresFromOriginal;
    // return vampireAge > thisVampireAge ? true : false;
    if (
      this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
    ) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let closeCommonAncestor;
    let thisAncestor = this.creator;
    let vampAncestor = vampire.creator;
    while (thisAncestor !== vampAncestor) {
      thisAncestor = thisAncestor.creator;
      vampAncestor = vampAncestor.creator;
    }
    if (thisAncestor === vampAncestor) {
      closeCommonAncestor = thisAncestor;
    }
    return closeCommonAncestor;
  }
}

module.exports = Vampire;
