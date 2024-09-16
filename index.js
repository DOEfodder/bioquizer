//Beware, all ye who enter. This is the worst code you have and will ever see in your life. Update the ticker as a warning to any poor souls who try to optimize this program.
//hoursWasted = 5

var question1;
question1 = "What macromolecule(s) consist(s) of carbon, hydrogen, and oxygen? A. Lipids B. Carbohydrates C. Both A and B D. Nucleic Acids"
var question2;
question2 = "What molecule is produced by plants for short-term energy storage? A. Toluene B. Starch C. Cellulose D. Glucose"
var question3;
question3 = "What molecule is produced by plants for long-term energy storage? A. Starch B. Glucose C. Alanine D. Glycine"
var question4;
question4 = "What type of molecule is considered the building-blocks of proteins? A. Nucleic Acids B. Amino Acids C. Lipids D. Carbohydrates"
var question5;
question5 = "What molecule is the source of energy at the cellular level and has 3 phosphate groups? A. Glucose B. Cellulose C. Glycerol D. ATP"
var question6;
question6 = "What type of reaction joins two molecules and produces water as a byproduct? A. Redox B. Condensation C. Acid-Base D. Hydrolysis"
var question7;
question7 = "What type of reaction breaks down a larger molecule into smaller ones using water? A. Condensation B. Hydrolysis C. Diels-Alder D. Saponification"
var question8;
question8 = "What molecule is a type of Nucleic Acid and stores genetic information? A. RNA B. Triglycerides C. DNA D. Glycerol"
var question9;
question9 = "What type of bond forms when alcohols link with carboxylic acids? A. Dipole-Dipole Bond B. Ionic Bond C. Ester Linkage D. Phosphodiester Linkage"
var question10;
question10 = "What type of molecule consists of very long carboxylic acids? A. Amino Acids B. Organic Ethers C. Nucleotide Bases D. Fatty Acids"
var question11;
question11 = "What naturally-occuring alcohol is a building block of triglycerides? A. Glycerol B. Hemoglobin C. Chlorophyll D. DNA"
var question12;
question12 = "What type of bond forms between carbohydrates and other groups and links them together? A. Ester Linkage B. Phosphodiester Linkage C. Glycosidic Linkage D. Hydrogen Bonds"
var question13;
question13 = "What common intermolecular force occurs between hydrogen and oxygen, nitrogen, or fluorine? A. London Dispersion Forces B. Hydrogen Bond C. Pi Bond D. Sigma Bond"
var question14;
question14 = "What class of macromolecule contains fats and oils and is nonpolar? A. Lipids B. Carbohydrates C. Proteins D. Nucleic Acids"
var question15;
question15 = "What is the name for a broad class of molecules characterized by their large size and imporance to biological function? A. Enzymes B. Macromolecules C. Molecular Solids D. Inorganic Compounds"
var question16;
question16 = "What is the name of the repeating unit that makes up a polymer? A. Monomer B. Ester C. Linkage Unit D. Tertiary Molecule"
var question17;
question17 = "What is the type of sugar that cannot be seperated into simpler sugars? A. Polysaccharide B. Nucleotide C. ATP D. Monosaccharide"
var question18;
question18 = "What class of macromolecule stores and transfers information? A. Carbohydrates B. Lipids C. Nucleic Acids D. Proteins"
var question19;
question19 = "What type of molecule is the building block of DNA and RNA? A. Nucleotides B. Amino Acids C. Fatty Acids D. Triglycerides"
var question20;
question20 = "What polymer is composed of glucose monomers and makes up the cell walls of plants? A. Starch B. DNA C. Cellulose D. Galactose"
var question21;
question21 = "What type of molecules are characterized by the presence of carbon, hydrogen, and heteroatoms? A. Inorganic Molecules B. ATPs C. Glycerols D. Organic Molecules"
var question22;
question22 = "What type of bond links amino acids together to form peptide chains? A. Phosphodiester Linkages B. Peptide Bonds C. Glycosidic Linkages D. Hydrogen Bonds"
var question23;
question23 = "What is the name of the ion that is composed of a phosphate and 4 oxygen atoms with a negative 3 charge and is found in nucleic acids? A. Phosphate B. Ammonium C. Sulfate D. Hypochlorite"
var question24;
question24 = "What type of bond forms the phosphate backbone in nucleic acids by bonding the sugars of nucleotides together? A. Ester Linkage B. Peptide Bond C. Phosphodiester Linkage D. Glycosidic Linkage"
var question25;
question25 = "What type of compound is formed by long chains of repeating groups called monomers? A. Polymers B. Cellulases C. Nucleotides D. Proteins"
var question26;
question26 = "What type of sugar is composed of simpler sugars? A. Monosaccharides B. Riboses C. Galactoses D. Polysaccharides"
var question27;
question27 = "What is the name for the complex structure formed by chains of amino acids joined togehter? A. Nucleic Acids B. Proteins C. ATPs D. Glucoses"
var question28;
question28 = "What sugar is present in RNA and is similar to the deoxyribose found in DNA? A. Ribose B. Glucose C. Maltose D. Lactose"
var question29;
question29 = "What is the name of the single-stranded nucleic acid that encodes for proteins? A. DNA B. Amino Acids C. RNA D. Cellulose"
var question30;
question30 = "What is the name for the state in which a molecule cannot take anymore of a substance, typically refering to hydrogen and a molecule? A. Unstaturatation B. Saturation C. Dehydration D. Hybridization"
var question31;
question31 = "What is the name for the structure of a protein in 3rd dimensional space? A. Primary Structure B. Secondary Structure C. Substituted Structure D. Tertiary Structure"
var question32;
question32 = "What is the name for the state in which a molecule can take more hydrogen atoms, and is commonly found in hydrocarbons such as alkenes and alkynes? A. Unsaturation B. Saturation C. Oxidation D. Reduction"
var question33;
question33 = "What is the name of the most common secondary protein structure in which polypeptide chains are wound into a coil? A. Beta Helix B. Alpha Helix C. Alpha Sheet D. Beta Sheet"
var question34;
question34 = "What is the name for the secondary protein structure in which beta strands bind together to form a sheet? A. Alpha Helix B. Beta Helix C. Beta Pleated D. Alpha Pleated"
var currentScore;
currentScore = 0;
var questionsCorrect;
questionsCorrect = 0;
var switchQuestion;
switchQuestion = 0

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

  const questionDisplayed = document.getElementById('questionDisplayed');
    var currentQuestion;
    currentQuestion = "question"+String(getRandomInt(1, 35));
    questionDisplayed.textContent = eval(currentQuestion);
    switchQuestion = 0;
    console.log(switchQuestion)
    

  document.addEventListener('DOMContentLoaded', (event) => {
    // Get the form element
    const form = document.getElementById('ansField');
  
    // Add an event listener for the submit event
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
  
        // Retrieve the form data
        const formData = new FormData(form);
  
        // Process form data
        const name = formData.get('ansChoice_');
  
        // For demonstration purposes, let's log the data
        console.log(name);
  
        // Here, you can do anything with the form data, such as sending it to a server or updating the UI

         if (eval(currentQuestion) == question1 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question2 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }
        
        else if (eval(currentQuestion) == question3 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question4 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question5 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question6 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question7 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question8 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question9 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question10 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question11 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question12 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question13 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question14 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question15 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question16 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question17 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question18 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question19 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question20 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question21 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question22 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question23 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question24 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question25 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question26 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question27 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question28 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question29 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question30 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question31 && name == "D") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question32 && name == "A") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question33 && name == "B") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (eval(currentQuestion) == question34 && name == "C") {
          console.log("Correct Answer");
          alert("Great job! You got it correct!");
          questionsCorrect = questionsCorrect + 1;
          switchQuestion = 0;
        }

        else if (name == "testcode") {
          questionsCorrect = 68;
        }

        currentQuestion = "question"+String(getRandomInt(1, 35));
        questionDisplayed.textContent = eval(currentQuestion);

        const scoreCounter = document.getElementById('score');
        scoreCounter.textContent = "Questions Correct: "+questionsCorrect+"/68";

        if (questionsCorrect == 68) {
          alert("Congratulations! You have finished the test. Click below to start a new game.");
        }

        else if (questionsCorrect > 68) {
          questionsCorrect = 68;
        }
    });
  });