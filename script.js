Vue.createApp({
  data() {
    return {
      slot1: "❓",
      slot2: "❓",
      slot3: "❓",
      message: "ボタンを押してください！",

      emojis: [
        "🐶",
        "🐱",
        "🐰"
      ]
    };
  },

  methods: {
    slot() {
      this.slot1 = this.randomEmoji();
      this.slot2 = this.randomEmoji();
      this.slot3 = this.randomEmoji();

      if (this.slot1 === this.slot2 && this.slot2 === this.slot3) {
        this.message = "🎉 大当たり！！";
      } else {
        this.message = "😢 はずれ！もう一回！";
      }
    },

    randomEmoji() {
      const number = Math.floor(Math.random() * this.emojis.length);
      return this.emojis[number];
    }
  }
}).mount("#app");