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
    randomLoser() {
      let loserIndex = Math.floor(Math.random() * this.names.length);
      console.log(loserIndex);
      this.loserName = this.names[loserIndex];
      this.state = false;
    },
    removePlayerName(index) {
      this.names.splice(index, 1);
    },
    chooseAgain() {
      this.randomLoser();
      if (this.loserName === this.loserName) {
        this.randomLoser();
      }
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
