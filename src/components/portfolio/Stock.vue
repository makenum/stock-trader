<template>
  <div class="col-sm-6 col-md4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small
            >( Price:{{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
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
            :class="{ danger: insufficicnetQuantity }"
          />
        </div>
        <div class="pull-right">
          <button
            type="button"
            class="btn btn-success"
            @click="sellStock"
            :disabled="
              insufficicnetQuantity ||
                quantity <= 0 ||
                !Number.isInteger(quantity)
            "
          >
            {{ insufficicnetQuantity ? 'Not enough' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
    insufficicnetQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
<style lang="stylus" scoped>
.danger
  border 1px solid red
</style>
