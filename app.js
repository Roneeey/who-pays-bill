const app = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [],
      errorMessage: "",
      errorState: false,
      loserName: "",
    };
  },
  computed: {
    twoOrMoreNames() {
      if (this.names.length > 1) {
        return true;
      }
    },
  },
  methods: {
    addInputNames() {
      let playerName = this.inputName;

      if (this.validateInputName(playerName)) {
        this.errorMessage = "";
        this.names.push(playerName);
        this.inputName = "";
        console.log(this.names);
      }
    },
    validateInputName() {
      if (this.inputName == "") {
        this.errorMessage = "Please enter a name";
        this.errorState = true;
        return;
      }
      if (this.names.includes(this.inputName)) {
        this.errorMessage = "Please enter a UNIQUE name";
        this.errorState = true;
        return;
      }
      return true;
    },
    getRandomLoser() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },
    generateRandomLoser() {
      let randomLoser = this.getRandomLoser();

      if (this.loserName !== "") {
        while (randomLoser === this.loserName) {
          randomLoser = this.getRandomLoser();
        }
      }
      this.loserName = randomLoser;
      this.state = false;
    },
    removePlayerName(index) {
      this.names.splice(index, 1);
    },
    chooseAgain() {
      this.generateRandomLoser();
    },
    init() {
      this.state = true;
      this.inputName = "";
      this.names = [];
      this.errorMessage = "";
      this.errorState = false;
      this.loserName = "";
    },
  },
}).mount("#app");
