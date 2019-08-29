<template>
  <div class="col-sm-6 col-md4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }} <small>( Price:{{ stock.price }} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <!-- 表单输入绑定-修饰符 v-model.numer -->
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{ danger: insufficeientFunds }"
          />
        </div>
        <div class="pull-right">
          <button
            type="button"
            class="btn btn-success"
            @click="buyStock"
            :disabled="
              insufficeientFunds || quantity <= 0 || !Number.isInteger(quantity)
            "
          >
            {{ insufficeientFunds ? 'Insufficeient Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficeientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
        name: this.stock.name
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
};
</script>
<style lang="stylus" scoped>
.danger
  border 1px solid red
</style>
